import {Mesh} from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Collapse every static mesh that shares a material into a single draw call.
// The furniture, walls and project dioramas never move once built, so their
// individual meshes only add hundreds of draw calls per pass. Anything
// animated, hit tested or alpha blended stays untouched: pass it in `keep`.

const layout = geometry => Object.keys(geometry.attributes).sort()
    .map(name => {
        const attribute = geometry.attributes[name];
        return `${name}${attribute.itemSize}${attribute.normalized ? 'n' : ''}`;
    })
    .join(',') + (geometry.index ? ':indexed' : ':flat');

function batchable(object) {
    const {material, geometry} = object;
    if (!object.visible || !material || Array.isArray(material)) return false;
    if (material.visible === false || material.transparent) return false;
    if (object.isSkinnedMesh || object.morphTargetInfluences?.length) return false;
    return Boolean(geometry?.attributes.position);
}

export function batchStaticMeshes(root, {keep = new Set(), minGroup = 2} = {}) {
    root.updateMatrixWorld(true);
    const buckets = new Map();
    root.traverse(object => {
        if (!object.isMesh || keep.has(object) || !batchable(object)) return;
        const {material, geometry} = object;
        // Geometries only merge when their vertex layout and shadow flags match.
        const key = `${material.uuid}|${layout(geometry)}|${+object.castShadow}${+object.receiveShadow}`;
        let bucket = buckets.get(key);
        if (!bucket) buckets.set(key, bucket = {material, castShadow: object.castShadow, receiveShadow: object.receiveShadow, meshes: []});
        bucket.meshes.push(object);
    });

    const batches = [];
    for (const {material, castShadow, receiveShadow, meshes} of buckets.values()) {
        if (meshes.length < minGroup) continue;
        const geometries = meshes.map(object => object.geometry.clone().applyMatrix4(object.matrixWorld));
        const geometry = mergeGeometries(geometries, false);
        for (const source of geometries) source.dispose();
        // Mixed vertex layouts cannot be merged; the originals stay in place.
        if (!geometry) continue;
        geometry.computeBoundingSphere();
        const mesh = new Mesh(geometry, material);
        mesh.castShadow = castShadow;
        mesh.receiveShadow = receiveShadow;
        root.add(mesh);
        for (const object of meshes) object.removeFromParent();
        batches.push(mesh);
    }
    return batches;
}
