import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import woodPhoto from './assets/wood.jpg';

function buildDesk(renderer) {
    const world = new T.Scene(), overlays = new T.Scene();
    const camera = new T.PerspectiveCamera(34, 1, .08, 65);
    const css = new CSS3DRenderer();
    const stage = document.querySelector('.station');
    const frame = document.querySelector('#terminal-wrap');
    const board = document.querySelector('#keyboard');
    const mouse = document.querySelector('#mouse');
    document.body.classList.add('spatial');
    stage.prepend(renderer.domElement, css.domElement);
    css.domElement.className = 'projected-controls';
    renderer.domElement.setAttribute('aria-label','Bureau en trois dimensions');
    const renderSize = () => stage.getBoundingClientRect();
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.65));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.16;
    world.background = new T.Color(0x394542);
    world.fog = new T.FogExp2(0x52574d,.043);
    const target=new T.WebGLRenderTarget(1,1,{type:T.HalfFloatType,samples:Math.min(4,renderer.capabilities.maxSamples)});
    const composer=new EffectComposer(renderer,target);
    composer.addPass(new RenderPass(world,camera));
    const occlusion=new GTAOPass(world,camera,512,512,undefined,{radius:.33,thickness:.65,samples:12});
    composer.addPass(occlusion);
    composer.addPass(new OutputPass());
    const studio = new RoomEnvironment();
    const pmrem = new T.PMREMGenerator(renderer);
    world.environment = pmrem.fromScene(studio,.04).texture;
    world.environmentIntensity = .32;
    studio.dispose(); pmrem.dispose();
    const light = new T.DirectionalLight(0xffe7c6,2.9);
    light.position.set(-5,7,3);
    light.castShadow = true;
    Object.assign(light.shadow.camera,{left:-8,right:8,top:7,bottom:-7,far:26});
    light.shadow.mapSize.set(2048,2048);
    light.shadow.normalBias = .013;
    world.add(light,new T.HemisphereLight(0xe4efff,0x594735,.65));
    const mat = (color,roughness=.65,metalness=0) => new T.MeshStandardMaterial({color,roughness,metalness});
    const plastic=mat(0xc2b799), edge=mat(0xa69c81), dark=mat(0x272b27), metal=mat(0x58615c,.3,.65);
    const red=mat(0xa94022,.37,.3), orange=mat(0xe18e54), paper=mat(0xd9c7a5);
    function mesh(geo,m,x,y,z,parent=world) {
        const obj=new T.Mesh(geo,m);
        obj.position.set(x,y,z); obj.castShadow=obj.receiveShadow=true; parent.add(obj); return obj;
    }
    const shapes=new Map();
    function box(w,h,d,r,m,x,y,z,parent) {
        const id=[w,h,d,r].join('/');
        if (!shapes.has(id)) shapes.set(id,r ? new RoundedBoxGeometry(w,h,d,2,r) : new T.BoxGeometry(w,h,d));
        return mesh(shapes.get(id),m,x,y,z,parent);
    }
    function cyl(top,bottom,h,m,x,y,z,parent) {
        return mesh(new T.CylinderGeometry(top,bottom,h,48),m,x,y,z,parent);
    }
    function group(x,y,z,parent=world) {
        const g=new T.Group(); g.position.set(x,y,z); parent.add(g); return g;
    }
    function path(points,r,m,parent=world) {
        const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
        return mesh(new T.TubeGeometry(curve,32,r,8,false),m,0,0,0,parent);
    }
    function canvasTexture(w,h,draw) {
        const c=document.createElement('canvas'); c.width=w;c.height=h;
        draw(c.getContext('2d')); const t=new T.CanvasTexture(c); t.colorSpace=T.SRGBColorSpace;return t;
    }
    function badge(text,w,h,x,y,z,bg,fg,parent=world) {
        const t=canvasTexture(640,100,c=>{
            c.fillStyle=bg;c.fillRect(0,0,640,100);c.fillStyle=fg;
            c.font='bold 62px monospace';c.textBaseline='middle';c.fillText(text,18,53,605);
        });
        return mesh(new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({map:t,roughness:.7}),x,y,z,parent);
    }
    const grain=new T.TextureLoader().load(woodPhoto,()=>invalidate());
    grain.colorSpace=T.SRGBColorSpace; grain.wrapS=grain.wrapT=T.RepeatWrapping;
    grain.center.set(.5,.5);grain.rotation=Math.PI/2;grain.repeat.set(1.8,3.0); grain.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
    const walnut=mat(0xbca988,.58);walnut.map=grain;walnut.bumpMap=grain;walnut.bumpScale=.018;
    box(16,.25,7.8,.075,walnut,0,-.125,.35);
    const plaster=mat(0x51635b);
    const paint=canvasTexture(512,512,c=>{
        const image=c.createImageData(512,512);
        let seed=4169;
        for(let i=0;i<image.data.length;i+=4) {
            seed=(Math.imul(1664525,seed)+1013904223)>>>0;
            const v=220+((seed>>>20)%32);
            image.data.set([v,v,v,255],i);
        }
        c.putImageData(image,0,0);
    });
    paint.wrapS=paint.wrapT=T.RepeatWrapping;paint.repeat.set(6,3);
    plaster.map=paint;plaster.bumpMap=paint;plaster.bumpScale=.005;
    box(26,13,.18,0,plaster,0,4.5,-4.1);
    // Oblique bands from a window blind on the plaster behind the desk.
    const sun=canvasTexture(512,512,c=>{
        c.translate(220,230);c.rotate(-.18);
        for(let y=-300;y<300;y+=43) {
            const g=c.createLinearGradient(0,y,0,y+29);g.addColorStop(0,'#ffc88000');
            g.addColorStop(.25,'#ffd8a06a');g.addColorStop(.76,'#ffd8a063');g.addColorStop(1,'#ffc88000');
            c.fillStyle=g;c.fillRect(-240,y,475,30);
        }
        c.globalCompositeOperation='destination-in';
        const v=c.createRadialGradient(0,0,70,0,0,280);v.addColorStop(0,'white');v.addColorStop(1,'transparent');c.fillStyle=v;c.fillRect(-400,-400,800,800);
    });
    mesh(new T.PlaneGeometry(12,7),new T.MeshBasicMaterial({map:sun,transparent:true,depthWrite:false}),-2.3,3.1,-3.99).castShadow=false;
    const shadowTex=canvasTexture(128,128,c=>{
        c.scale(1,1);const g=c.createRadialGradient(64,64,8,64,64,64);
        g.addColorStop(0,'rgba(30,19,11,.72)');g.addColorStop(.65,'rgba(30,19,11,.45)');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,128,128);
    });
    function contact(x,z,w,d) {
        const s=mesh(new T.PlaneGeometry(w,d),new T.MeshBasicMaterial({map:shadowTex,transparent:true,depthWrite:false}),x,.008,z);
        s.rotation.x=-Math.PI/2;s.castShadow=false;
    }
    contact(0,-.44,6,3.8);
    // Desktop system unit: front panel, disk drive, eject button and LED.
    box(4.66,.52,2.45,.08,edge,0,.30,-.48);
    box(4.60,.43,.10,.03,plastic,0,.30,.74);
    box(1.1,.21,.045,.025,dark,1.24,.32,.804);
    box(.79,.034,.04,.01,mat(0x101412),1.19,.35,.838);
    box(.13,.048,.048,.012,edge,1.61,.26,.838);
    badge('NOËL  /  PC',.90,.14,-1.61,.31,.802,'#c2b99e','#2b322d');
    const led=new T.MeshStandardMaterial({color:0xbbe88a,emissive:0x76b45b,emissiveIntensity:.8});
    box(.045,.032,.02,.008,led,-.96,.29,.815);
    box(2.5,.14,1.65,.065,dark,0,.61,-.52);
    // Deep CRT cabinet. Separate rear shell, front moulding and recessed glass.
    box(4.12,2.85,1.88,.20,edge,0,2.04,-.94);
    box(4.52,3.07,.75,.16,plastic,0,2.17,-.025);
    box(4.10,2.60,.15,.12,edge,0,2.24,.33);
    box(3.97,2.46,.12,.09,dark,0,2.24,.395);
    badge('V I C T O R   /   N O Ë L',1.03,.105,-1.38,.86,.355,'#cfc2a4','#414438');
    for(let i=0;i<15;i++)box(.022,.090,.015,.008,dark,1.11+i*.045,.86,.355);
    box(.08,.08,.025,.018,led,1.91,.86,.356);
    for(let i=0;i<15;i++)box(.022,.18,.036,.008,dark,2.057,2.95,-1.62+i*.078);
    function surface(el,parent,x,y,z,rotation,scale) {
        const o=new CSS3DObject(el); o.position.set(x,y,z);o.rotation.x=rotation;o.scale.setScalar(scale);parent.add(o);return o;
    }
    surface(frame,overlays,0,2.24,.462,0,3.82/680);
    const keyRig=group(-.29,.115,1.91);
    keyRig.rotation.set(.075,-.035,0,'YXZ');
    const flat = -Math.PI/2;
    box(4.58,.185,1.57,.083,plastic,0,0,0,keyRig);
    box(4.32,.028,1.33,.032,dark,0,.10,0,keyRig);
    const boardRig=group(0,0,0,overlays); boardRig.position.copy(keyRig.position);boardRig.rotation.copy(keyRig.rotation);
    const unit=4.28/700;
    surface(board,boardRig,0,.229,0,flat,unit);
    const caps=[];
    // Measure unprojected CSS coordinates before CSS3DRenderer reparents the controls.
    const keyMat=mat(0xe0d7be), modifier=mat(0xb4aa91);
    board.querySelectorAll('.key').forEach(button=>{
        const w=button.offsetWidth*unit, d=button.offsetHeight*unit;
        const x=(button.offsetLeft+button.offsetWidth/2-board.offsetWidth/2)*unit;
        const z=(button.offsetTop+button.offsetHeight/2-board.offsetHeight/2)*unit;
        const material=button.dataset.key==='Enter'?orange:button.classList.contains('wide')?modifier:keyMat;
        const cap=box(w,.13,d,.029,material,x,.166,z,keyRig);
        if(!cap.geometry.userData.sculpted) {
            const positions=cap.geometry.attributes.position;
            for(let i=0;i<positions.count;i++){
                const level=T.MathUtils.clamp(positions.getY(i)/.13+.5,0,1);
                positions.setX(i,positions.getX(i)*(1-.065*level));
                positions.setZ(i,positions.getZ(i)*(1-.14*level));
            }
            cap.geometry.computeVertexNormals();cap.geometry.userData.sculpted=true;
        }
        caps.push([cap,button]);
    });
    contact(-.29,1.92,5.55,2.05);
    box(1.69,.026,1.49,.065,mat(0x344742,.98),2.93,.02,1.81);
    const mouseRig=group(2.87,.055,1.85);
    mouseRig.rotation.y=-.14;
    const egg=(w,h,d,m,x,y,z,g)=>{
        const o=mesh(new T.SphereGeometry(1,40,24),m,x,y,z,g);o.scale.set(w,h,d);return o;
    };
    egg(.307,.215,.486,plastic,0,.06,0,mouseRig);
    const left=egg(.144,.095,.225,edge,-.125,.165,-.17,mouseRig);
    const right=egg(.144,.095,.225,edge,.125,.165,-.17,mouseRig);
    const wheel=egg(.038,.044,.098,dark,0,.248,-.13,mouseRig);
    const mouseSurface=surface(mouse,overlays,2.87,.32,1.85,flat,.0064);
    mouseSurface.rotation.order='YXZ';mouseSurface.rotation.y=-.14;
    path([[2.88,.14,1.45],[2.94,.054,1.10],[3.12,.025,.44],[3.43,.025,-.21],[2.94,.023,-1.10],[1.98,.22,-1.48]],.022,dark);
    path([[-2.31,.12,1.30],[-2.7,.045,.96],[-2.86,.035,.43],[-2.07,.23,-.33]],.028,dark);
    // Articulated enamel task lamp and its visible joints.
    // Paper speckle and fine mould texture break up broad highlights.
    const stipple=canvasTexture(256,256,ctx=>{
        const pic=ctx.createImageData(256,256);
        let seed=1771;
        for(let i=0;i<pic.data.length;i+=4) {
            seed=(Math.imul(1664525,seed)+1013904223)>>>0;
            const v=210+((seed>>>20)%44);pic.data.set([v,v,v,255],i);
        }
        ctx.putImageData(pic,0,0);
    });
    stipple.wrapS=stipple.wrapT=T.RepeatWrapping;stipple.repeat.set(4,4);
    for(const material of [plastic,edge,modifier,keyMat]){
        material.bumpMap=stipple;material.bumpScale=.0022;
        material.roughnessMap=stipple;
    }
    // Front-facing ventilation slots and the case screws flank the system drive.
    for(let i=0;i<20;i++)box(.026,.115,.013,.006,dark,-.67+i*.053,.32,.796);
    for(const x of [-2.16,2.16]){
        const screw=cyl(.030,.030,.015,metal,x,.28,.799);
        screw.rotation.x=Math.PI/2;
        box(.033,.005,.004,0,dark,x,.28,.809);
    }
    // The desktop has an apron and legs, visible from below on tall screens.
    box(15.4,.29,.12,.015,walnut,0,-.34,3.72);
    for(const x of [-6.2,6.2]) box(.24,3,.24,.012,dark,x,-1.69,3.62);
    const lamp=group(-3.63,0,-.43);
    cyl(.53,.58,.135,red,0,.09,0,lamp);
    function strut(a,b,r,m,g) {
        const v=new T.Vector3(...a), u=new T.Vector3(...b), axis=u.clone().sub(v);
        const o=cyl(r,r,axis.length(),m,0,0,0,g);o.position.copy(v.addScaledVector(axis,.5));
        o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),axis.normalize());
    }
    for(const z of [-.085,.085]){
        strut([0,.16,z],[-.52,1.55,z],.047,metal,lamp);
        strut([-.52,1.55,z],[.30,2.65,z],.040,red,lamp);
    }
    for(const [x,y] of [[0,.2],[-.52,1.55],[.30,2.65]]) {
        const joint=cyl(.098,.098,.27,dark,x,y,0,lamp);joint.rotation.x=Math.PI/2;
    }
    const shade=group(.42,2.56,.025,lamp);shade.rotation.z=.54;
    const enamel=mat(0xb64c2d,.32,.38);enamel.side=T.DoubleSide;
    mesh(new T.LatheGeometry([[.07,.16],[.19,.11],[.28,-.02],[.43,-.30],[.46,-.32]].map(([x,y])=>new T.Vector2(x,y)),64),enamel,0,0,0,shade);
    cyl(.432,.425,.018,new T.MeshStandardMaterial({color:0xffe2ac,emissive:0xffc078,emissiveIntensity:1.3}),0,-.309,0,shade);
    const lampLight=new T.PointLight(0xffb569,12,6);lampLight.position.set(-3.03,2.02,-.35);world.add(lampLight);
    contact(-3.63,-.43,1.64,1.45);
    // Ceramic mug with a glazed lip, coffee surface and a loop handle.
    const mug=group(-2.99,0,1.33), glaze=mat(0x6c8d80,.24);
    mesh(new T.LatheGeometry([[.01,.025],[.236,.025],[.27,.06],[.304,.55],[.302,.586],[.286,.59],[.278,.55],[.24,.12]].map(([x,y])=>new T.Vector2(x,y)),64),glaze,0,0,0,mug);
    cyl(.28,.28,.015,mat(0x2a170e,.17),0,.518,0,mug);
    path([[-.26,.47,0],[-.45,.48,0],[-.49,.32,0],[-.43,.19,0],[-.26,.19,0]],.044,glaze,mug);
    contact(-3,1.33,.87,.78);
    const book=group(3.65,0,-.63);book.rotation.y=-.24;
    box(1.47,.12,1.96,.023,paper,0,.083,0,book);
    const cover=mat(0x3b5149,.91);
    for(const y of [.02,.152])box(1.52,.025,2.01,.021,cover,0,y,0,book);
    box(.045,.01,2.01,.002,dark,.57,.17,0,book);
    const pencil=group(-.16,.217,.02,book);pencil.rotation.set(Math.PI/2,.05,.20,'ZXY');
    cyl(.029,.029,1.48,orange,0,0,0,pencil);cyl(.029,0,.09,paper,0,-.785,0,pencil);
    // A three-and-a-half inch archive disk beside the computer.
    const disk=group(-3.03,.05,2.38);disk.rotation.y=-.27;
    box(.68,.057,.70,.027,dark,0,0,0,disk);
    box(.43,.013,.20,.009,metal,.025,.033,-.239,disk);
    box(.083,.014,.130,.004,dark,.142,.040,-.253,disk);
    const diskLabel=canvasTexture(480,300,c=>{
        c.fillStyle='#e2d7b2';c.fillRect(0,0,480,300);
        c.fillStyle='#9e4a2c';c.fillRect(0,0,480,58);c.fillStyle='#403b30';
        c.font='italic 49px Georgia';c.fillText('CV  /  Victor',22,142);
        for(let y=162;y<295;y+=52)c.fillRect(16,y,444,2);
    });
    const sticker=mesh(new T.PlaneGeometry(.53,.31),new T.MeshStandardMaterial({map:diskLabel}),0,.035,.104,disk);sticker.rotation.x=flat;
    // Wooden shelf and a few bound volumes behind the work surface.
    box(5.2,.13,.77,.024,walnut,4.7,3.75,-3.53);
    const spines=[0x856546,0xa4906c,0x394b46,0x976749,0xaca28a,0x40514c];
    for(let i=0;i<12;i++){
        const h=.75+(i%4)*.09;
        box(.18+(i%2)*.035,h,.53,.018,mat(spines[i%6]),2.48+i*.225,3.82+h/2,-3.52);
    }

    let yaw=.32, pitch=.34, orbit=null, focus=false, pending=false;
    const cameraControls=document.querySelector('.view-controls');
    cameraControls.hidden=false;
    const zoom=cameraControls.querySelector('button');
    const mobile=()=>innerWidth<650 && innerHeight>innerWidth;
    function invalidate() {
        if(!pending) { pending=true;requestAnimationFrame(render); }
    }
    function render(){
        pending=false;
        const {width,height}=renderSize();
        camera.aspect=width/height;camera.updateProjectionMatrix();
        const portrait=mobile();
        const aim=new T.Vector3(0,focus?2.24:1.34,focus?.46:.42);
        const tan=Math.tan(T.MathUtils.degToRad(camera.fov/2));
        const distance=focus?Math.max(1.40/tan,2.10/(tan*camera.aspect)):
            Math.max(9.35, (portrait?2.98:4.55)/(tan*camera.aspect));
        const a=focus?.022:yaw, p=focus?.055:pitch;
        camera.position.copy(aim).add(new T.Vector3(Math.sin(a)*Math.cos(p),Math.sin(p),Math.cos(a)*Math.cos(p)).multiplyScalar(distance));
        camera.lookAt(aim);camera.updateMatrixWorld();
        caps.forEach(([cap,b])=>{cap.position.y=b.matches('.on,.pressed')?.129:.166;});
        left.position.y=mouse.querySelector('.left.on')?.143:.165;
        right.position.y=mouse.querySelector('.right.on')?.143:.165;
        wheel.material=mouse.querySelector('.wheel.on')?orange:dark;
        mouseSurface.position.x=mouseRig.position.x;mouseSurface.position.z=mouseRig.position.z;
        composer.render();css.render(overlays,camera);
    }
    function resize(){const {width,height}=renderSize();renderer.setSize(width,height);composer.setSize(width,height);css.setSize(width,height);invalidate();}
    function setFocus(next){
        focus=next;document.body.classList.toggle('reading',next);
        zoom.textContent=next?'Vue du bureau':'Lire le terminal';
        zoom.setAttribute('aria-pressed',String(next));invalidate();
    }
    zoom.onclick=()=>setFocus(!focus);
    cameraControls.lastElementChild.onclick=()=>{yaw=.32;pitch=.34;setFocus(false);};
    const canvas=renderer.domElement;
    canvas.addEventListener('pointerdown',e=>{
        if(focus||e.button!==0)return;
        orbit={x:e.clientX,y:e.clientY,yaw,pitch};canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove',e=>{
        if(!orbit)return;
        yaw=T.MathUtils.clamp(orbit.yaw-(e.clientX-orbit.x)*.003,-.62,.62);
        pitch=T.MathUtils.clamp(orbit.pitch+(e.clientY-orbit.y)*.002,.15,.60);
        invalidate();
    });
    canvas.addEventListener('lostpointercapture',()=>{orbit=null;});
    document.addEventListener('pointermove',e=>{
        mouseRig.position.x=2.87+(e.clientX/innerWidth-.5)*.11;
        mouseRig.position.z=1.85+(e.clientY/innerHeight-.5)*.08;
        invalidate();
    });
    new MutationObserver(invalidate).observe(board,{attributes:true,attributeFilter:['class'],subtree:true});
    new MutationObserver(invalidate).observe(mouse,{attributes:true,attributeFilter:['class'],subtree:true});
    new ResizeObserver(resize).observe(stage);
    resize();
    render();
    if(matchMedia('(pointer:fine)').matches) document.querySelector('#commandInput').focus({preventScroll:true});
}

try {
    const renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
    buildDesk(renderer);
} catch(error) {
    console.warn('Rendu 3D indisponible.',error);
}
