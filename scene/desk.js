import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import clawdMark from './assets/clawd-mark.png';
import huggingFace from './assets/hugging-face.svg';
import woodPhoto from './assets/wood.jpg';

function buildDesk(renderer) {
    const world = new T.Scene();
    const camera = new T.PerspectiveCamera(34, 1, .08, 65);
    const surfaces = [];
    const viewport = new T.Matrix4(), projection = new T.Matrix4(), transform = new T.Matrix4();
    const stage = document.querySelector('.station');
    const frame = document.querySelector('#terminal-wrap');
    const board = document.querySelector('#keyboard');
    const mouse = document.querySelector('#mouse');
    const canvas=renderer.domElement;
    document.body.classList.add('spatial');
    stage.prepend(canvas);
    canvas.setAttribute('aria-label','Bureau de Victor en 3D avec un PC rétro, la mascotte Clawd, un casque et un carnet de notes sur l’IA');
    const renderSize = () => stage.getBoundingClientRect();
    const compactView=matchMedia('(max-width:760px), (max-height:560px)');
    const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
    const pixelRatio=()=>Math.min(devicePixelRatio,compactView.matches?1.25:1.65);
    renderer.setPixelRatio(pixelRatio());
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
    composer.setPixelRatio(renderer.getPixelRatio());
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
        if (!shapes.has(id)) shapes.set(id,r ? new RoundedBoxGeometry(w,h,d,3,r) : new T.BoxGeometry(w,h,d));
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
    function coil(points,turns,radius,m,parent=world) {
        const base=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
        const wrapped=[];
        for(let i=0;i<=320;i++){
            const f=i/320;
            const c=base.getPoint(f), t=base.getTangent(f);
            const side=new T.Vector3(-t.z,0,t.x).normalize();
            const taper=Math.max(0,Math.sin(Math.PI*T.MathUtils.clamp((f-.10)/.80,0,1)));
            const a=f*turns*Math.PI*2;
            wrapped.push(c.clone().addScaledVector(side,Math.cos(a)*radius*taper)
                .add(new T.Vector3(0,Math.sin(a)*radius*.5*taper+.012,0)));
        }
        return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(wrapped),520,.0155,8,false),m,0,0,0,parent);
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
    mesh(new T.PlaneGeometry(8.5,6),new T.MeshBasicMaterial({map:sun,transparent:true,depthWrite:false}),2.6,3.1,-3.99).castShadow=false;
    const shadowTex=canvasTexture(128,128,c=>{
        c.scale(1,1);const g=c.createRadialGradient(64,64,8,64,64,64);
        g.addColorStop(0,'rgba(30,19,11,.72)');g.addColorStop(.65,'rgba(30,19,11,.45)');g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(0,0,128,128);
    });
    function contact(x,z,w,d,y=.008) {
        const s=mesh(new T.PlaneGeometry(w,d),new T.MeshBasicMaterial({map:shadowTex,transparent:true,depthWrite:false}),x,y,z);
        s.rotation.x=-Math.PI/2;s.castShadow=false;
    }
    contact(0,-.44,6,3.8);
    const graphite=mat(0x303e40,.54,.17);
    const satin=mat(0x89918b,.35,.58);
    // Desktop system unit: front panel, disk drive, eject button and LED.
    box(4.66,.52,2.45,.08,edge,0,.30,-.48);
    box(4.62,.047,2.39,.018,graphite,0,.49,-.46);
    box(4.60,.43,.10,.03,plastic,0,.30,.74);
    box(1.1,.21,.045,.025,dark,1.24,.32,.804);
    box(.79,.034,.04,.01,mat(0x101412),1.19,.35,.838);
    box(.13,.048,.048,.012,edge,1.61,.26,.838);
    badge('NOËL  /  PC',.76,.14,-1.38,.31,.802,'#c2b99e','#2b322d');
    const led=new T.MeshStandardMaterial({color:0xbbe88a,emissive:0x76b45b,emissiveIntensity:.8});
    box(.045,.032,.02,.008,led,-.96,.29,.815);
    // Swivel riser: a wide plate with a turntable ring carrying the CRT.
    box(3.2,.05,1.5,.02,dark,0,.565,-.52);
    cyl(.5,.54,.10,dark,0,.565,-.52);
    // The visible phosphor, its rim and the camera all share the same 4:3 glass.
    const glassWidth=3.60, glassY=2.36, glassZ=.462;
    const glassScale=glassWidth/frame.offsetWidth;
    const glassHeight=frame.offsetHeight*glassScale;
    box(4.14,3.26,1.88,.20,edge,0,2.18,-.94);
    box(4.42,3.33,.75,.16,plastic,0,2.26,-.025);
    box(4.25,3.20,.095,.12,graphite,0,2.24,.32);
    box(glassWidth+.28,glassHeight+.27,.15,.12,metal,0,glassY,.33);
    box(glassWidth+.12,glassHeight+.12,.12,.09,dark,0,glassY,.395);
    badge('V I C T O R   /   N O Ë L',1.12,.11,-1.40,.84,.373,'#293635','#f2dfb7');
    for(let i=0;i<15;i++)box(.022,.090,.015,.008,dark,1.11+i*.045,.86,.379);
    box(.08,.08,.025,.018,led,1.91,.86,.379);
    for(let i=0;i<15;i++)box(.022,.18,.036,.008,dark,2.07,2.95,-1.62+i*.078);
    const dialMaterial=mat(0x65716e,.45,.34);
    for(const x of [.51,.79]){
        const dial=cyl(.071,.077,.065,dialMaterial,x,.86,.393);
        dial.rotation.x=Math.PI/2;
        box(.011,.044,.007,.002,paper,x,.884,.429);
    }
    box(.29,.15,.052,.026,dark,-1.98,.30,.816);
    box(.22,.105,.055,.016,orange,-1.98,.30,.843);
    box(.020,.055,.005,.001,dark,-1.98,.308,.874);
    for(let i=0;i<14;i++)box(.42,.014,.038,.006,dark,1.68,3.814,-1.67+i*.082);

    // Map DOM pixels (top left, Y down) to the mesh plane (center, Y up).
    // Compose into one CSS matrix so paint and hit testing use the same projection.
    function surface(element,parent,x,y,z,rotation,scale) {
        const anchor=group(x,y,z,parent);
        anchor.rotation.x=rotation;
        const local=new T.Matrix4().set(
            scale,0,0,-element.offsetWidth*scale/2,
            0,-scale,0,element.offsetHeight*scale/2,
            0,0,scale,0,
            0,0,0,1
        );
        surfaces.push({element,anchor,local});
    }
    surface(frame,world,0,glassY,glassZ,0,glassScale);
    const keyRig=group(-.04,.115,1.91);
    keyRig.rotation.set(.075,-.035,0,'YXZ');
    const flat = -Math.PI/2;
    box(4.73,.155,1.63,.052,graphite,0,-.034,0,keyRig);
    box(4.68,.096,1.60,.044,satin,0,.037,0,keyRig);
    box(4.64,.088,1.56,.041,graphite,0,.079,0,keyRig);
    box(4.32,.028,1.33,.032,dark,0,.10,0,keyRig);
    // Status LEDs and a moulded badge on the keyboard's rear strip.
    const shiftLed=new T.MeshStandardMaterial({color:0xbbe88a,emissive:0x76b45b,emissiveIntensity:.12});
    box(.05,.018,.05,.012,shiftLed,1.98,.098,-.705,keyRig);
    box(.05,.018,.05,.012,new T.MeshStandardMaterial({color:0xe8c98a,emissive:0xb4762f,emissiveIntensity:.85}),1.85,.098,-.705,keyRig);
    const keyBadge=badge('N O Ë L · 8 4',1.05,.10,0,.098,-.72,'#2b322d','#c2b99e',keyRig);
    keyBadge.rotation.x=-Math.PI/2;
    const unit=4.28/board.offsetWidth;
    surface(board,keyRig,0,.229,0,flat,unit);
    const caps=[];
    const keyMat=mat(0xe1dccf), modifier=mat(0x495d61);
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
                positions.setZ(i,positions.getZ(i)*(1-.17*level));
                const u=2*positions.getX(i)/w;
                const v=2*positions.getZ(i)/d;
                positions.setY(i,positions.getY(i)-.016*level*Math.max(0,1-u*u)*Math.max(0,1-v*v));
            }
            cap.geometry.computeVertexNormals();cap.geometry.userData.sculpted=true;
        }
        caps.push([cap,button]);
    });
    contact(-.04,1.92,5.55,2.05);
    box(1.69,.026,1.49,.065,mat(0x344742,.98),2.93,.02,1.81);
    const mouseRig=group(2.87,.055,1.85);
    mouseRig.rotation.y=-.14;
    const egg=(w,h,d,m,x,y,z,g)=>{
        const o=mesh(new T.SphereGeometry(1,40,24),m,x,y,z,g);o.scale.set(w,h,d);return o;
    };
    // Cross-sections of a single moulded shell, split into hinged front buttons and palm rest.
    const mouseShell=mat(0xbfc9bd,.43);
    function shellPatch(z0,z1,u0,u1,material) {
        const positions=[],indices=[];
        const steps=24;
        for(let j=0;j<=steps;j++){
            const z=z0+(z1-z0)*j/steps;
            const width=.327*Math.pow(Math.max(.025,1-(z/.505)**2),.32)*(1+.09*z);
            const crown=.258*Math.pow(Math.max(.004,1-(z/.49)**2),.39)*(1+.11*z);
            for(let i=0;i<=steps;i++){
                const u=u0+(u1-u0)*i/steps;
                positions.push(width*u,.060+crown*Math.sqrt(Math.max(0,1-u*u)),z);
                if(i<steps && j<steps){
                    const n=j*(steps+1)+i;
                    indices.push(n,n+steps+1,n+1,n+1,n+steps+1,n+steps+2);
                }
            }
        }
        // Return the outer lips toward the base; leave the narrow switch gaps open.
        const rim=[];
        const stride=steps+1;
        for(let t=0;t<steps;t++){
            if(u0<-.98)rim.push([t*stride,(t+1)*stride]);
            if(u1>.98)rim.push([(t+1)*stride+steps,t*stride+steps]);
            if(z0<-.47)rim.push([t+1,t]);
            if(z1>.47)rim.push([steps*stride+t,steps*stride+t+1]);
        }
        for(const [a,b] of rim){
            const v=positions.length/3;
            for(const n of [a,b])positions.push(positions[3*n]*.985,.047,positions[3*n+2]*.99);
            indices.push(a,v,b,b,v,v+1);
        }
        const geometry=new T.BufferGeometry();
        geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));
        geometry.setIndex(indices);geometry.computeVertexNormals();
        return mesh(geometry,material,0,0,0,mouseRig);
    }
    // A continuous dark chassis closes both end faces and follows the cap outline.
    egg(.32,.134,.508,graphite,0,.12,0,mouseRig);
    shellPatch(-.49,.49,-1,1,graphite);
    const left=shellPatch(-.478,-.018,-.992,-.024,mouseShell);
    const right=shellPatch(-.478,-.018,.024,.992,mouseShell);
    const palm=shellPatch(-.003,.49,-.996,.996,mat(0x92a59e,.49));palm.position.y=.012;
    box(.125,.04,.194,.018,dark,0,.285,-.178,mouseRig);
    const wheel=cyl(.098,.098,.074,graphite,0,.298,-.181,mouseRig);wheel.rotation.z=Math.PI/2;
    for(let i=0;i<14;i++){
        const a=i*Math.PI*2/14;
        const tread=box(.068,.015,.012,.003,dark,0,.298+.096*Math.cos(a),-.181+.096*Math.sin(a),mouseRig);
        tread.rotation.x=a;
    }
    box(.09,.018,.031,.006,orange,0,.326,.107,mouseRig);
    surface(mouse,mouseRig,0,.265,0,flat,.0064);
    // Mouse cord: strain-relief grommet at the nose, then a smooth run behind the tower.
    cyl(.032,.032,.07,dark,0,.155,-.485,mouseRig).rotation.x=Math.PI/2;
    path([[2.80,.21,1.37],[2.98,.07,1.03],[3.24,.045,.42],[3.44,.035,-.30],[3.30,.03,-1.08],[2.95,.03,-1.80],[2.50,.04,-2.35],[2.15,.05,-2.70]],.022,dark);
    // Keyboard cord: a coiled telephone-style lead that sweeps right and plugs in behind the case.
    coil([[1.26,.15,1.12],[1.95,.075,.97],[2.75,.055,.55],[3.12,.05,-.12],[2.95,.05,-1.0],[2.55,.05,-1.75],[2.05,.05,-2.45],[1.65,.05,-2.85]],11,.075,dark);
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
    // Aprons on every face, tapered turned legs, a centre drawer and a modesty panel.
    box(15.4,.29,.12,.015,walnut,0,-.34,3.72);
    box(15.2,.29,.12,.015,walnut,0,-.34,-3.42);
    for(const x of [-6.92,6.92]) box(.14,.27,6.9,.02,walnut,x,-.32,.24);
    const legWood=mat(0x4a3a2a,.55);
    const legGeo=new T.LatheGeometry([[.10,0],[.116,.9],[.15,2.1],[.158,2.6],[.104,2.8],[.09,2.84],[.09,3.0]].map(([x,y])=>new T.Vector2(x,y)),26);
    for(const [x,z] of [[-6.9,3.62],[6.9,3.62],[-6.9,-3.14],[6.9,-3.14]])
        mesh(legGeo,legWood,x,-3.19,z);
    box(3.1,.5,2.2,.04,walnut,0,-.56,.85);
    box(3.06,.44,.05,.01,mat(0x241c14,.9),0,-.56,1.955);
    box(3.02,.42,.05,.01,walnut,0,-.56,2.0);
    cyl(.05,.05,.06,dark,0,-.56,2.03).rotation.x=Math.PI/2;
    box(13.4,1.0,.09,.02,walnut,0,-1.38,-3.06);
    const lamp=group(-4.71,0,-2.60);
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
    const lampLight=new T.PointLight(0xffb569,12,6);lampLight.position.set(.60,2.02,.08);lamp.add(lampLight);
    box(.14,.05,.20,.012,dark,0,.17,.42,lamp);
    contact(-4.71,-2.60,1.64,1.45);
    // Ceramic mug with a glazed lip, coffee surface and a loop handle.
    const mug=group(-2.98,0,1.65), glaze=mat(0x6c8d80,.24);
    mesh(new T.LatheGeometry([[.01,.025],[.236,.025],[.27,.06],[.304,.55],[.302,.586],[.286,.59],[.278,.55],[.24,.12]].map(([x,y])=>new T.Vector2(x,y)),64),glaze,0,0,0,mug);
    cyl(.28,.28,.015,mat(0x2a170e,.17),0,.518,0,mug);
    path([[-.26,.47,0],[-.45,.48,0],[-.49,.32,0],[-.43,.19,0],[-.26,.19,0]],.044,glaze,mug);
    contact(-2.98,1.65,.87,.78);
    const book=group(4.53,0,1.97);book.rotation.y=-.12;book.scale.setScalar(.85);
    box(1.47,.12,1.96,.023,paper,0,.083,0,book);
    const cover=mat(0x3b5149,.91);
    for(const y of [.02,.152])box(1.52,.025,2.01,.021,cover,0,y,0,book);
    box(.045,.01,2.01,.002,dark,.57,.17,0,book);
    const pencil=group(-.16,.217,.02,book);pencil.rotation.set(Math.PI/2,.05,.20,'ZXY');
    cyl(.029,.029,1.48,orange,0,0,0,pencil);cyl(.029,0,.09,paper,0,-.785,0,pencil);
    // Trace the opaque outline of claude.dev's 693 × 527 mark in its native coordinates.
    const mascot=group(2.52,.004,.56);
    mascot.rotation.y=.15;
    const pixel=.00131;
    const outline=[[115,68],[580,68],[580,184],[693,184],[693,301],[580,301],
        [580,527],[522,527],[522,417],[464,417],[464,527],[405,527],[405,417],
        [289,417],[289,527],[231,527],[231,417],[173,417],[173,527],[115,527],
        [115,301],[0,301],[0,184],[115,184]];
    const silhouette=new T.Shape(outline.map(([x,y])=>new T.Vector2((x-346.5)*pixel,(527-y)*pixel)));
    const depth=.25;
    mesh(new T.ExtrudeGeometry(silhouette,{depth,bevelEnabled:false}),mat(0xd97757,.63),0,0,-depth/2,mascot);
    function decal(source,w,h,x,y,z,parent) {
        const map=new T.TextureLoader().load(source,invalidate);
        map.colorSpace=T.SRGBColorSpace;
        map.anisotropy=grain.anisotropy;
        const face=mesh(new T.PlaneGeometry(w,h),new T.MeshStandardMaterial({
            map,alphaTest:.40,roughness:.70
        }),x,y,z,parent);
        face.castShadow=false;
        return face;
    }
    decal(clawdMark,693*pixel,527*pixel,0,527*pixel/2,depth/2+.001,mascot);
    contact(2.52,.56,.98,.54);
    const hug=decal(huggingFace,.27,.25,-.65,.85,.368,world);
    hug.rotation.z=-.16;

    // The grid sheet is tucked under the notebook elastic, beside the pencil.
    const notes=canvasTexture(640,700,c=>{
        c.fillStyle='#f4ebcb';c.fillRect(0,0,640,700);
        c.strokeStyle='#cfcebb';c.lineWidth=1;
        c.beginPath();
        for(let x=0;x<640;x+=25){c.moveTo(x,0);c.lineTo(x,700);}
        for(let y=0;y<700;y+=25){c.moveTo(0,y);c.lineTo(640,y);}
        c.stroke();
        c.rotate(-.023);c.fillStyle='#304b64';c.font='italic bold 66px Georgia';
        c.fillText('test RAG',51,105);c.font='italic 36px Georgia';
        const stages=[['mes notes',193],['embeddings',365],['recherche',539]];
        c.strokeStyle='#3f5b70';c.lineWidth=5;
        for(const [word,y] of stages){
            c.strokeRect(65,y,332,70);c.fillText(word,85,y+49);
            if(y<500){c.beginPath();c.moveTo(217,y+76);c.lineTo(215,y+145);c.lineTo(204,y+131);c.moveTo(215,y+145);c.lineTo(227,y+130);c.stroke();}
        }
        c.fillStyle='#ac5037';c.font='italic 31px Georgia';c.fillText('top 3 ?',418,582);
    });
    notes.anisotropy=grain.anisotropy;
    const note=mesh(new T.PlaneGeometry(1.14,1.32),new T.MeshStandardMaterial({map:notes,roughness:.96}),-.07,.172,.02,book);
    note.rotation.set(flat,0,.045);
    pencil.position.x=.59;
    pencil.position.y=.22;
    pencil.rotation.z=-.04;

    // Over-ear headphones resting on their cushions, tucked beside the task lamp.
    const headphones=group(-4.33,0,1.83);
    headphones.rotation.y=.46;
    const rubber=mat(0x222527,.88), navy=mat(0x35434a,.43), aluminium=mat(0x889094,.35,.72);
    const band=[];
    for(let i=0;i<=18;i++){
        const a=i*Math.PI/18;
        band.push([.56*Math.cos(a),.156+.046*Math.sin(a),-.61*Math.sin(a)]);
    }
    path(band,.068,rubber,headphones);
    for(const side of [-1,1]){
        strut([side*.56,.155,0],[side*.48,.158,.224],.039,aluminium,headphones);
        egg(.173,.093,.243,rubber,side*.445,.092,.23,headphones);
        egg(.168,.082,.227,navy,side*.445,.188,.23,headphones);
        const ring=mesh(new T.TorusGeometry(.096,.008,8,36),aluminium,side*.445,.260,.23,headphones);
        ring.rotation.x=flat;
    }
    contact(-4.33,1.83,1.72,1.49);
    // Seven project miniatures replace the old floppy shortcuts. Each one is a
    // small physical diorama with a printed label, and opens its fiche on click.
    const projectTargets=[];
    const projBase=mat(0x26312d,.62,.14);
    const projInk=mat(0x1b2420,.7,.06);
    const projIvory=mat(0xded6c2,.5);
    const projMetal=mat(0x9ba39b,.3,.67);
    const projPcb=mat(0x2e6394,.48,.1);
    const projBlack=mat(0x151b18,.52);
    const projGreen=new T.MeshStandardMaterial({color:0x8ce8a5,emissive:0x2c9b58,emissiveIntensity:1.35,roughness:.4});
    const projScreenMat=(map)=>new T.MeshBasicMaterial({map,toneMapped:false});
    const projAccent={perso:'#a44c31',cesi:'#316d71'};
    function screenTexture(w,h,draw){
        const t=canvasTexture(w,h,draw);t.anisotropy=grain.anisotropy;return t;
    }
    function projectPlaque(text,width,accent,parent){
        const t=screenTexture(640,132,c=>{
            c.fillStyle='#eee6d5';c.fillRect(0,0,640,132);
            c.fillStyle=accent;c.fillRect(0,0,14,132);
            c.fillStyle='#21332e';c.textAlign='center';c.textBaseline='middle';
            c.font='bold 76px sans-serif';
            c.fillText(text,325,69,590);
        });
        const h=.20;
        const back=box(width+.035,h+.035,.014,.006,projInk,0,.17,.286,parent);
        back.rotation.x=-.5;
        const face=mesh(new T.PlaneGeometry(width,h),new T.MeshStandardMaterial({map:t,roughness:.86}),0,.17,.296,parent);
        face.rotation.x=-.5;face.castShadow=false;
        box(width+.04,.012,.028,.004,projMetal,0,.047,.282,parent);
    }
    function projectPlinth(project,x,z,ry,lift=0){
        const g=group(x,lift,z);g.rotation.y=ry;
        box(.68,.055,.50,.02,projBase,0,.0275,0,g);
        box(.64,.006,.46,.003,mat(0x1d2723,.8),0,.056,0,g);
        box(.58,.12,.42,.018,mat(0x1f2925,.6,.06),0,.115,-.035,g);
        projectPlaque(project.label,.91,projAccent[project.collection],g);
        const ring=mesh(new T.RingGeometry(.46,.52,48),new T.MeshBasicMaterial({
            color:0xb8f0c0,transparent:true,opacity:.62,side:T.DoubleSide,depthWrite:false,toneMapped:false
        }),0,.004,0,g);
        ring.rotation.x=-Math.PI/2;ring.visible=false;ring.castShadow=false;ring.receiveShadow=false;

        g.userData.projectId=project.id;
        g.userData.ring=ring;

        contact(x,z,.88,.70,lift+.008);
        return g;
    }
    function sparkle(x,y,z,size,parent){
        const s=mesh(new T.OctahedronGeometry(size),projGreen,x,y,z,parent);
        s.castShadow=false;
        return s;
    }

    function buildCleaner(g){
        const y=.06;
        cyl(.10,.12,.30,mat(0x83aeba,.25),-.15,y+.15,0,g);
        cyl(.10,.072,.06,mat(0x83aeba,.25),-.15,y+.33,0,g);
        cyl(.034,.034,.08,mat(0xeae2d1,.42),-.15,y+.39,0,g);
        box(.15,.06,.11,.022,mat(0xeae2d1,.45),-.15,y+.45,.01,g);
        box(.035,.028,.095,.012,mat(0xeae2d1,.45),-.15,y+.455,.105,g);
        box(.055,.018,.018,.006,projInk,-.15,y+.418,.07,g);
        const bottleLabel=screenTexture(256,256,c=>{
            c.fillStyle='#edf5e8';c.fillRect(0,0,256,256);
            c.strokeStyle='#6fae7c';c.lineWidth=7;c.strokeRect(8,8,240,240);
            c.fillStyle='#34714a';c.font='bold 46px Georgia';c.textAlign='center';c.fillText('OPEN',128,104);
            c.fillText('CLEANER',128,158);
            c.fillStyle='#6fae7c';c.font='34px sans-serif';c.fillText('✦',128,214);
        });
        mesh(new T.PlaneGeometry(.145,.155),projScreenMat(bottleLabel),-.15,y+.17,.121,g);
        sparkle(-.31,y+.38,.04,.030,g);
        sparkle(-.02,y+.50,.05,.024,g);
        sparkle(-.24,y+.52,-.02,.018,g);
        box(.17,.26,.15,.014,mat(0xd8d0ba,.44),.17,y+.13,0,g);
        box(.15,.225,.012,.005,projInk,.17,y+.13,.081,g);
        for(let i=0;i<3;i++) box(.095,.017,.008,.004,projMetal,.17,y+.225-i*.029,.088,g);
        box(.018,.012,.008,.003,projGreen,.17,y+.052,.09,g);
        const check=screenTexture(128,128,c=>{
            c.fillStyle='#f0ead8';c.fillRect(0,0,128,128);
            c.strokeStyle='#4b9a64';c.lineWidth=14;c.lineCap='round';
            c.beginPath();c.moveTo(28,68);c.lineTo(53,92);c.lineTo(101,38);c.stroke();
        });
        mesh(new T.PlaneGeometry(.06,.06),projScreenMat(check),.17,y+.075,.089,g);
    }

    function buildMeter(g){
        const y=.06;
        box(.24,.035,.18,.014,projInk,0,y+.018,0,g);
        box(.048,.23,.048,.012,projMetal,0,y+.14,-.015,g);
        box(.16,.028,.12,.008,projInk,0,y+.05,.02,g);
        const body=cyl(.175,.175,.06,projInk,0,y+.34,-.015,g);body.rotation.x=Math.PI/2;
        const rim=mesh(new T.TorusGeometry(.162,.014,10,48),projMetal,0,y+.34,.02,g);
        rim.castShadow=false;
        const dial=screenTexture(512,512,c=>{
            c.fillStyle='#f0e6ce';c.beginPath();c.arc(256,256,248,0,Math.PI*2);c.fill();
            c.strokeStyle='#3c4d44';c.lineWidth=10;c.stroke();
            c.strokeStyle='#64796d';c.lineWidth=5;
            for(let i=0;i<=10;i++){
                const a=Math.PI*.78+i*Math.PI*.44/10;
                const x=256+Math.cos(a)*195,y=256+Math.sin(a)*195;
                c.beginPath();c.moveTo(256+Math.cos(a)*174,256+Math.sin(a)*174);c.lineTo(x,y);c.stroke();
            }
            c.fillStyle='#3c4d44';c.textAlign='center';c.font='bold 42px Georgia';c.fillText('SARDOCHE',256,140);
            c.font='bold 92px Georgia';c.fillStyle='#a44c31';c.fillText('8.5',256,372);
            c.fillStyle='#64796d';c.font='32px monospace';c.fillText('SUR 10',256,418);
        });
        const face=mesh(new T.CircleGeometry(.15,48),projScreenMat(dial),0,y+.34,.021,g);
        face.castShadow=false;
        const needle=group(0,y+.34,.031,g);
        box(.011,.105,.006,.002,mat(0xb64c2d,.4),0,.042,0,needle);
        needle.rotation.z=-2.35;
        const cap=cyl(.023,.023,.014,projInk,0,y+.34,.036,g);cap.rotation.x=Math.PI/2;
    }

    function buildCotalyse(g){
        const y=.06;
        box(.30,.028,.19,.01,projInk,0,y+.014,0,g);
        const tablet=group(0,y+.20,-.03,g);tablet.rotation.x=-.14;
        box(.39,.265,.024,.016,projInk,0,0,0,tablet);
        const screen=screenTexture(640,420,c=>{
            c.fillStyle='#13251f';c.fillRect(0,0,640,420);
            c.fillStyle='#1d3830';c.fillRect(0,0,640,62);
            c.fillStyle='#bce9c9';c.font='bold 26px monospace';c.fillText('COTALYSE',24,40);
            c.strokeStyle='#2d5145';c.lineWidth=2;
            for(let x=52;x<620;x+=72){c.beginPath();c.moveTo(x,96);c.lineTo(x,356);c.stroke();}
            for(let y2=110;y2<380;y2+=62){c.beginPath();c.moveTo(36,y2);c.lineTo(610,y2);c.stroke();}
            c.strokeStyle='#8fe0a5';c.lineWidth=7;c.beginPath();
            c.moveTo(58,334);c.lineTo(156,292);c.lineTo(252,306);c.lineTo(350,224);c.lineTo(448,240);c.lineTo(566,126);c.stroke();
            c.fillStyle='#8fe0a5';
            for(const [x,y2] of [[58,334],[156,292],[252,306],[350,224],[448,240],[566,126]]){
                c.beginPath();c.arc(x,y2,7,0,Math.PI*2);c.fill();
            }
            c.fillStyle='#f3e8ca';c.font='bold 50px monospace';c.fillText('1.85',478,352);
            c.font='20px monospace';c.fillStyle='#b2cbbd';c.fillText('COTE OUEST',36,392);
        });
        mesh(new T.PlaneGeometry(.345,.225),projScreenMat(screen),0,0,.013,tablet);
        box(.018,.18,.018,.006,projMetal,-.14,y+.10,.06,g).rotation.x=.28;
        box(.018,.18,.018,.006,projMetal,.14,y+.10,.06,g).rotation.x=.28;
        const ballTex=screenTexture(512,256,c=>{
            c.fillStyle='#ece7d7';c.fillRect(0,0,512,256);
            c.fillStyle='#26332d';
            for(const [x,y2,r] of [[84,66,34],[236,42,30],[388,78,33],[150,166,32],[322,150,35],[450,208,26],[34,214,24]]){
                c.beginPath();
                for(let i=0;i<5;i++){const a=-Math.PI/2+i*Math.PI*2/5;const px=x+Math.cos(a)*r,py=y2+Math.sin(a)*r;i?c.lineTo(px,py):c.moveTo(px,py);}
                c.closePath();c.fill();
            }
        });
        mesh(new T.SphereGeometry(.078,28,18),new T.MeshStandardMaterial({map:ballTex,roughness:.62}),.22,y+.078,.12,g);
    }

    function buildLife(g){
        const y=.06;
        box(.30,.028,.16,.01,projInk,0,y+.014,-.02,g);
        box(.026,.18,.026,.006,projMetal,-.12,y+.11,-.07,g);
        box(.026,.18,.026,.006,projMetal,.12,y+.11,-.07,g);
        const board=group(0,y+.265,-.05,g);board.rotation.x=-.14;
        box(.37,.37,.03,.012,projInk,0,0,0,board);
        const alive=new Set(['1,2','2,3','3,1','3,2','3,3']);
        const grid=screenTexture(640,640,c=>{
            c.fillStyle='#102019';c.fillRect(0,0,640,640);
            const s=118,o=35;
            for(let row=0;row<5;row++)for(let col=0;col<5;col++){
                c.fillStyle=alive.has(`${col},${row}`)?'#76d891':'#213a2e';
                c.fillRect(o+col*s+4,o+row*s+4,s-8,s-8);
            }
            c.strokeStyle='#345446';c.lineWidth=2;
            for(let i=0;i<=5;i++){
                c.beginPath();c.moveTo(o+i*s,o);c.lineTo(o+i*s,o+5*s);c.stroke();
                c.beginPath();c.moveTo(o,o+i*s);c.lineTo(o+5*s,o+i*s);c.stroke();
            }
        });
        mesh(new T.PlaneGeometry(.33,.33),projScreenMat(grid),0,0,.017,board);
        const cell=.33/5;
        for(const key of alive){
            const [col,row]=key.split(',').map(Number);
            box(cell*.58,cell*.58,.009,.003,projGreen,(col-2)*cell,(2-row)*cell,.023,board);
        }
    }

    function buildWeb(g){
        const y=.06;
        box(.40,.022,.26,.01,projIvory,0,y+.011,.02,g);
        for(let i=0;i<3;i++) box(.31,.003,.013,.001,projMetal,0,y+.023,.02+i*.031,g);
        const lid=group(0,y+.026,-.105,g);lid.rotation.x=-.18;
        box(.37,.28,.02,.012,projInk,0,.14,0,lid);
        const browser=screenTexture(640,500,c=>{
            c.fillStyle='#f3eddb';c.fillRect(0,0,640,500);
            c.fillStyle='#d9d0b9';c.fillRect(0,0,640,66);
            c.fillStyle='#b35c3b';c.beginPath();c.arc(28,33,9,0,7);c.fill();
            c.fillStyle='#c9a24f';c.beginPath();c.arc(56,33,9,0,7);c.fill();
            c.fillStyle='#5f9570';c.beginPath();c.arc(84,33,9,0,7);c.fill();
            c.fillStyle='#fbf7e9';c.fillRect(118,17,460,32);
            c.fillStyle='#56665b';c.font='22px monospace';c.fillText('web4all.cesi/stages',138,41);
            c.fillStyle='#245449';c.font='bold 54px Georgia';c.fillText('Web4All',42,150);
            c.fillStyle='#56665b';c.font='24px monospace';c.fillText('Gestion des stages — CESI',44,190);
            for(let i=0;i<3;i++){
                const y2=236+i*80;
                c.fillStyle=i===0?'#e2eee4':'#e8e1ce';c.fillRect(40,y2,540,58);
                c.fillStyle='#3b5a4d';c.font='bold 24px monospace';c.fillText(['Stage — Data','Stage — Réseau','Stage — Web'][i],58,y2+37);
                c.fillStyle='#8b978b';c.fillRect(488,y2+16,68,26);
            }
        });
        mesh(new T.PlaneGeometry(.335,.245),projScreenMat(browser),0,.14,.011,lid);
        box(.025,.025,.012,.004,projGreen,.02,y+.03,.135,g);
    }

    function buildProsit(g){
        const y=.06;
        const board=group(0,y+.025,.01,g);board.rotation.set(-.05,.13,0);
        box(.40,.026,.27,.008,projPcb,0,0,0,board);
        box(.095,.022,.095,.004,projBlack,0,.024,.01,board);
        for(const x of [-.155,.155]){
            for(let i=0;i<9;i++) box(.012,.024,.018,.002,projBlack,x,.021,-.095+i*.024,board);
        }
        box(.065,.032,.055,.006,projMetal,-.16,.022,.095,board);
        const silk=screenTexture(512,128,c=>{
            c.fillStyle='#2e6394';c.fillRect(0,0,512,128);
            c.fillStyle='#f0ead8';c.font='bold 40px monospace';c.fillText('NUCLEO-L476',20,78);
        });
        mesh(new T.PlaneGeometry(.16,.04),projScreenMat(silk),.02,.014,.015,board).rotation.x=-Math.PI/2;
        for(let i=0;i<4;i++){
            box(.15,.011,.11,.003,mat(i%2?0x455f53:0x3d574b,.78),.13,y+.095+i*.015,-.03,g);
            box(.05,.006,.008,.002,projMetal,.19,y+.10+i*.015,.025,g);
        }
        box(.024,.10,.024,.006,projMetal,.13,y+.15,-.03,g);
        path([[.13,.20,-.03],[.10,.245,.01],[.07,.285,.03]],.006,orange,g);
        sparkle(-.24,y+.12,.04,.026,g);
    }

    function buildStation(g){
        const y=.06;
        box(.32,.26,.18,.03,mat(0xe3ddcd,.5),-.06,y+.13,0,g);
        const display=screenTexture(640,380,c=>{
            c.fillStyle='#0b1b14';c.fillRect(0,0,640,380);
            c.strokeStyle='#284237';c.lineWidth=4;c.strokeRect(10,10,620,360);
            c.fillStyle='#a9e6b8';c.font='bold 28px monospace';c.fillText('3WW  ·  LILLE',34,54);
            c.strokeStyle='#ffcf72';c.lineWidth=9;c.lineCap='round';
            c.beginPath();c.arc(116,150,42,0,Math.PI*2);c.stroke();
            for(let i=0;i<8;i++){
                const a=i*Math.PI/4;
                c.beginPath();c.moveTo(116+Math.cos(a)*58,150+Math.sin(a)*58);c.lineTo(116+Math.cos(a)*76,150+Math.sin(a)*76);c.stroke();
            }
            c.fillStyle='#d9f3df';c.font='bold 118px monospace';c.fillText('22.4°',224,196);
            c.fillStyle='#7fb395';c.font='30px monospace';c.fillText('VENT 12 km/h',34,306);
            c.fillText('HUM. 64 %',340,306);
        });
        mesh(new T.PlaneGeometry(.225,.135),projScreenMat(display),-.06,y+.17,.091,g);
        for(let i=0;i<3;i++){
            const b=cyl(.016,.016,.014,projInk,-.13+i*.055,y+.07,.095,g);
            b.rotation.x=Math.PI/2;
        }
        box(.03,.012,.006,.002,projGreen,-.02,y+.245,.091,g);
        const mastX=.24;
        cyl(.012,.015,.55,projMetal,mastX,y+.275,-.03,g);
        const hub=group(mastX,y+.52,-.03,g);
        cyl(.024,.024,.03,projInk,0,0,0,hub);
        const cupMat=new T.MeshStandardMaterial({color:0x3c4844,roughness:.45,metalness:.45,side:T.DoubleSide});
        for(let i=0;i<3;i++){
            const arm=group(0,0,0,hub);arm.rotation.y=i*Math.PI*2/3;
            box(.075,.011,.011,.003,projMetal,.04,0,0,arm);
            mesh(new T.CylinderGeometry(.035,.028,.042,12,1,true),cupMat,.085,0,0,arm);
        }
        const vane=group(mastX,y+.61,-.03,g);vane.rotation.y=.5;
        box(.13,.008,.012,.002,projMetal,.02,0,0,vane);
        const tip=mesh(new T.ConeGeometry(.03,.07,4),mat(0xb64c2d,.4),-.045,0,0,vane);
        tip.rotation.z=Math.PI/2;
        box(.016,.055,.006,.002,projMetal,.075,.012,0,vane);
        cyl(.03,.03,.12,mat(0xb9c6c0,.38),-.255,y+.12,.02,g);
        const funnel=mesh(new T.CylinderGeometry(.065,.028,.045,18,1,true),new T.MeshStandardMaterial({color:0xdfe7df,roughness:.35,metalness:.1,side:T.DoubleSide}),-.255,y+.20,.02,g);
        funnel.castShadow=false;
        const panel=box(.145,.008,.085,.003,mat(0x21486a,.28,.36),-.06,y+.285,-.045,g);
        panel.rotation.x=-.42;
        const tag=screenTexture(256,96,c=>{
            c.fillStyle='#f0ead8';c.fillRect(0,0,256,96);
            c.fillStyle='#316d71';c.font='bold 52px monospace';c.textAlign='center';c.fillText('3WW',128,66);
        });
        mesh(new T.PlaneGeometry(.09,.034),projScreenMat(tag),-.06,y+.095,.091,g);
    }

    const builders={cleaner:buildCleaner,meter:buildMeter,cotalyse:buildCotalyse,life:buildLife,web:buildWeb,prosit:buildProsit,station:buildStation};
    const projectMeta=window.CV_PROJECTS||[];
    // Leave the typing area and the whole front edge of the desk clear.
    // Only the back pair on each side is raised, so its labels clear the front models.
    const rearZ=-1.15,frontZ=.34,ledgeHeight=.44;
    const locations={
        opencleaner:  {x:-3.91,z:frontZ,turn:.12},
        sardochemetre:{x:-4.77,z:rearZ,turn:.19},
        cotalyse:     {x:-3.31,z:rearZ,turn:.10},
        '3ww':       {x:4.72,z:rearZ,turn:-.18},
        web4all:     {x:3.26,z:rearZ,turn:-.12},
        conway:      {x:3.46,z:frontZ,turn:-.10},
        prosit5:     {x:4.88,z:frontZ+.16,turn:-.19}
    };
    for(const [x,title] of [[-4.04,'PROJETS PERSO'],[3.99,'PROJETS CESI']]){
        const width=2.61;
        box(width,ledgeHeight,.83,.045,walnut,x,ledgeHeight/2,rearZ);
        badge(title,1.13,.115,x+.44,.27,rearZ+.417,'#3a332a','#efe7d5');
    }
    const pickMaterial=new T.MeshBasicMaterial({visible:false});
    for(const project of projectMeta){
        const location=locations[project.id],build=builders[project.model];
        if(!location||!build)continue;
        const {x,z,turn}=location;
        const height=z===rearZ?ledgeHeight:0;
        const station=projectPlinth(project,x,z,turn,height);
        const model=group(0,.067,0,station);
        model.scale.setScalar(1.32);
        build(model);
        const hit=box(1.02,project.id==='3ww'?1:.81,.77,0,pickMaterial,0,.40,.02,station);
        hit.castShadow=false;hit.receiveShadow=false;
        projectTargets.push(hit);
    }

    // A taped two-colour generative print, drawn directly on warm paper.
    const print=canvasTexture(512,640,c=>{
        c.fillStyle='#ede6d3';c.fillRect(0,0,512,640);
        c.fillStyle='#192e44';c.fillRect(25,25,462,468);
        c.save();c.beginPath();c.rect(25,25,462,468);c.clip();
        c.translate(251,266);c.rotate(-.35);c.lineWidth=2.4;
        for(let i=0;i<76;i++){
            const phase=i*.038;
            c.strokeStyle=i<43?'#a9cdd0':'#f98352';
            c.beginPath();
            for(let j=0;j<=240;j++){
                const a=2*Math.PI*j/240;
                const r=105+45*Math.cos(3*a+phase)+16*Math.sin(5*a-phase);
                const x=r*Math.cos(a)+56*Math.cos(phase);
                const y=r*Math.sin(a)+77*Math.sin(phase);
                if(j===0)c.moveTo(x,y);else c.lineTo(x,y);
            }
            c.closePath();c.stroke();
        }
        c.restore();c.fillStyle='#24384b';c.font='bold 53px sans-serif';c.fillText('Espace latent',25,571);
    });
    const poster=group(3.93,1.77,-3.975);poster.rotation.z=-.027;
    mesh(new T.PlaneGeometry(1.28,1.60),new T.MeshStandardMaterial({map:print,roughness:1}),0,0,0,poster);
    const tape=mat(0xd2c6a4,.94);
    for(const side of [-1,1]){
        const strip=box(.30,.084,.005,.002,tape,side*.47,.798,.012,poster);
        strip.rotation.z=side*.18;
    }
    // Reading notes for the original Transformer paper, pinned by the desk lamp.
    const transformerNotes=canvasTexture(620,750,c=>{
        c.fillStyle='#ede6d1';c.fillRect(0,0,620,750);
        c.fillStyle='#283831';c.fillRect(42,49,536,6);
        c.font='bold 63px Georgia';c.fillText('Attention Is All',40,145);c.fillText('You Need',40,219);
        c.font='24px monospace';c.fillText('Vaswani et al.  /  2017',43,279);
        c.strokeStyle='#52746d';c.lineWidth=4;c.font='bold 34px monospace';
        for(let i=0;i<3;i++){
            const x=105+i*193;c.strokeRect(x-37,349,74,61);c.fillText(['Q','K','V'][i],x-12,390);
            c.beginPath();c.moveTo(x,415);c.lineTo(x,456);c.lineTo(297,501);c.stroke();
        }
        c.fillStyle='#c97550';c.fillRect(93,510,423,70);
        c.fillStyle='#27382f';c.font='31px Georgia';c.fillText('Scaled dot-product attention',117,554);
        c.font='italic 28px Georgia';c.fillText('relire avant le prochain test',58,683);
    });
    const reading=group(-6.03,2.64,-3.97);reading.rotation.z=.075;
    mesh(new T.PlaneGeometry(1.37,1.66),new T.MeshStandardMaterial({map:transformerNotes}),0,0,0,reading);
    box(.39,.10,.007,.002,tape,0,.814,.009,reading);
    // Lay the books horizontally so the titles face the visitor.
    const shelfTop=2.85;
    box(4.35,.13,.77,.024,walnut,4.93,shelfTop-.065,-3.53);
    const library=[
        {title:'Deep Learning',width:2.09,height:.245,color:'#344b48',ink:'#fff2cb',font:'bold 60px Georgia'},
        {title:'Dive into Deep Learning',width:2.04,height:.225,color:'#e8d4ae',ink:'#253b45',font:'bold 55px sans-serif'},
        {title:'Human Compatible',width:1.94,height:.210,color:'#973f27',ink:'#fff1dc',font:'bold 60px Georgia'}
    ];
    let restingHeight=shelfTop;
    library.forEach(({title,width,height,color,ink,font},index)=>{
        const volume=group(4.04+index*.025,restingHeight,-3.48);
        volume.rotation.y=[-.025,.035,-.06][index];
        const cloth=mat(color,.9);
        const depth=.73;
        box(width-.04,height-.044,depth-.045,.012,paper,0,height/2,0,volume);
        for(const y of [.011,height-.011]) box(width,.022,depth,.009,cloth,0,y,0,volume);
        box(width,height,.052,.018,cloth,0,height/2,depth/2-.013,volume);
        const jacket=canvasTexture(720,80,c=>{
            c.fillStyle=color;c.fillRect(0,0,720,80);
            c.fillStyle=ink;c.fillRect(14,12,3,56);c.fillRect(21,12,2,56);
            c.textBaseline='middle';c.font=font;c.fillText(title,39,42,642);
        });
        jacket.anisotropy=grain.anisotropy;
        mesh(new T.PlaneGeometry(width-.045,height-.025),new T.MeshStandardMaterial({map:jacket,roughness:.9}),0,height/2,depth/2+.014,volume);
        restingHeight+=height;
    });

    // Daylight window with a half-raised blind, framed behind the monitor.
    const casement=group(-2.9,0,-3.9);
    const cream=mat(0xcfc6ae,.62);
    box(3.9,.16,.24,.03,cream,0,4.64,0,casement);
    box(3.9,.16,.24,.03,cream,0,1.56,0,casement);
    for(const x of [-1.87,1.87]) box(.16,3.24,.24,.03,cream,x,3.10,0,casement);
    box(4.34,.13,.50,.03,walnut,0,1.36,.28,casement);
    mesh(new T.PlaneGeometry(3.62,3.08),new T.MeshBasicMaterial({color:0xf2e6c8}),0,3.10,-.02,casement).castShadow=false;
    const slatWood=mat(0xd8c9a8,.85);
    for(let i=0;i<13;i++){
        const slat=box(3.66,.062,.02,.008,slatWood,0,4.42-i*.155,.05,casement);
        slat.rotation.x=-.93;
    }
    box(3.7,.09,.03,.01,slatWood,0,2.44,.05,casement).rotation.x=-.93;
    cyl(.013,.013,2.1,mat(0xd9d2bd,.9),-1.45,3.3,.10,casement);
    // Wooden floor, skirting board and a kilim rug that catches the chair.
    const floorGrain=grain.clone();
    floorGrain.needsUpdate=true;
    floorGrain.rotation=0;floorGrain.repeat.set(5,4.6);
    const floorMat=mat(0x8a7a5e,.62);
    floorMat.map=floorGrain;floorMat.bumpMap=floorGrain;floorMat.bumpScale=.02;
    box(46,.32,32,.25,floorMat,0,-3.35,-.4);
    box(26,.55,.16,.02,mat(0x9a9585,.9),0,-2.92,-3.93);
    const rugTex=canvasTexture(768,512,c=>{
        c.fillStyle='#44584d';c.fillRect(0,0,768,512);
        c.strokeStyle='#b06a3e';c.lineWidth=10;c.strokeRect(18,18,732,476);
        c.strokeStyle='#d9d2bd';c.lineWidth=3;c.strokeRect(42,42,684,428);
        c.strokeStyle='#b06a3e';c.lineWidth=4;
        for(let x=96;x<672;x+=96){c.beginPath();c.moveTo(x,96);c.lineTo(x+48,256);c.lineTo(x,416);c.lineTo(x-48,256);c.closePath();c.stroke();}
        c.strokeStyle='#d9d2bd';
        for(let x=144;x<672;x+=96){c.beginPath();c.moveTo(x,150);c.lineTo(x+32,256);c.lineTo(x,362);c.lineTo(x-32,256);c.closePath();c.stroke();}
    });
    box(7.6,.07,5.3,.05,mat(0x3c4a42,.98),-.9,-3.155,4.25);
    const rugFace=mesh(new T.PlaneGeometry(7.5,5.2),new T.MeshStandardMaterial({map:rugTex,roughness:.97}),-.9,-3.114,4.25);
    rugFace.rotation.x=-Math.PI/2;
    // A high-back vinyl chair tucked close to the desk, angled as if just vacated.
    const chair=group(-5.8,-3.15,4.68);
    chair.rotation.y=.70;
    const cushion=mat(0xb35c33,.72);
    for(let i=0;i<5;i++){
        const a=i*Math.PI*2/5;
        const spoke=box(1.02,.085,.13,.02,dark,Math.cos(a)*.52,.09,Math.sin(a)*.52,chair);
        spoke.rotation.y=-a;
        egg(.105,.105,.075,dark,Math.cos(a)*1.0,.10,Math.sin(a)*1.0,chair);
    }
    cyl(.06,.075,2.0,metal,0,1.12,0,chair);
    cyl(.13,.13,.34,dark,0,2.12,0,chair);
    box(1.38,.12,1.30,.04,dark,0,2.12,0,chair);
    box(1.50,.32,1.42,.11,cushion,0,2.32,0,chair);
    const chairBack=box(1.34,1.86,.26,.11,cushion,0,3.27,.66,chair);
    chairBack.rotation.x=.15;
    box(1.40,.10,.22,.03,dark,0,4.20,.84,chair).rotation.x=.15;
    // Mains strip tucked against the skirting, feeding the lamp and the computer.
    const strip=group(1.4,-3.08,-3.5);
    box(2.8,.22,.58,.05,dark,0,0,0,strip);
    for(const x of [-1.05,-.35,.35,1.05]) box(.30,.028,.34,.01,mat(0x101412,.6),x,.115,0,strip);
    const plugBody=mat(0xd9d2bd,.5);
    for(const x of [-1.05,-.35,.35]) {
        cyl(.055,.055,.16,plugBody,x,.20,-.02,strip).rotation.x=1.25;
        box(.07,.03,.10,.012,dark,x,.13,-.14,strip);
    }
    box(.14,.05,.20,.012,dark,-1.32,.12,0,strip);
    box(.05,.03,.05,.01,new T.MeshStandardMaterial({color:0xff6a5a,emissive:0xd43f2f,emissiveIntensity:1.1}),1.26,.12,.12,strip);
    path([[-1.10,.10,-1.78],[-1.30,.055,-2.50],[-1.35,.045,-3.25],[-1.40,.03,-3.60],[-1.45,-1.30,-3.80],[-1.45,-2.80,-3.70],[-1.0,-2.90,-3.55],[.95,-2.92,-3.55]],.024,dark);
    path([[1.55,1.10,-1.95],[2.20,.50,-2.50],[2.45,.09,-3.00],[2.50,.05,-3.42],[2.55,.02,-3.70],[2.60,-1.40,-3.80],[2.60,-2.80,-3.70],[2.00,-2.90,-3.55],[1.78,-2.92,-3.52]],.026,dark);
    path([[-4.71,.07,-2.80],[-4.38,.05,-3.04],[-3.90,.04,-3.30],[-3.95,.02,-3.68],[-4.00,-1.40,-3.78],[-4.00,-2.80,-3.70],[-2.60,-2.90,-3.58],[.30,-2.92,-3.52]],.024,dark);
    // Shelf brackets and a small potted plant.
    for(const x of [3.25,6.55]) box(.09,.40,.34,.02,metal,x,shelfTop-.33,-3.83);
    const pot=new T.LatheGeometry([[.01,0],[.12,0],[.145,.04],[.16,.26],[.172,.28],[.148,.28],[.13,.05]].map(([x,y])=>new T.Vector2(x,y)),32);
    const plant=group(5.60,shelfTop,-3.46);
    mesh(pot,mat(0x9c5a3c,.8),0,0,0,plant);
    cyl(.125,.125,.02,mat(0x241a12,.95),0,.25,0,plant);
    for(let i=0;i<7;i++){
        const a=i*Math.PI*2/7+.4;
        const leaf=egg(.30,.010,.10,i%2?mat(0x3f5f3f,.8):mat(0x51724d,.8),Math.cos(a)*.13,.32+(i%3)*.10,Math.sin(a)*.13,plant);
        leaf.rotation.set(0,-a,.55+(i%3)*.12,'YXZ');
    }

    const homeYaw=.035,homePitch=.455;
    let yaw=homeYaw, pitch=homePitch, orbit=null, focus=false, pending=false;
    let deskActive=true;
    const cameraControls=document.querySelector('.view-controls');
    cameraControls.hidden=false;
    const zoom=cameraControls.querySelector('button');
    const aim=new T.Vector3();
    const tan=Math.tan(T.MathUtils.degToRad(camera.fov/2));

    function invalidate() {
        if(deskActive && !pending) { pending=true;requestAnimationFrame(render); }
    }
    function render(){
        pending=false;
        if(!deskActive || !canvas.isConnected || (focus&&compactView.matches))return;
        aim.set(0,focus?glassY:1.40,focus?glassZ:.40);
        const distance=focus
            ?Math.max((glassHeight/2+.30)/tan,(glassWidth/2+.25)/(tan*camera.aspect))
            :Math.max(11.1,(compactView.matches?5.82:5.65)/(tan*camera.aspect));
        const a=focus?.022:yaw, p=focus?.055:pitch;
        camera.position.set(Math.sin(a)*Math.cos(p),Math.sin(p),Math.cos(a)*Math.cos(p)).multiplyScalar(distance).add(aim);
        camera.lookAt(aim);camera.updateMatrixWorld();
        caps.forEach(([cap,b])=>{cap.position.y=b.matches('.on,.pressed')?.129:.166;});
        left.position.y=mouse.querySelector('.left.on')?-.005:.014;
        right.position.y=mouse.querySelector('.right.on')?-.005:.014;
        wheel.material=mouse.querySelector('.wheel.on')?orange:dark;
        shiftLed.emissiveIntensity=board.querySelector('[data-key="Shift"]')?.classList.contains('on')?1.6:.12;
        composer.render();
        projection.copy(viewport).multiply(camera.projectionMatrix).multiply(camera.matrixWorldInverse);
        for(const {element,anchor,local} of surfaces){
            anchor.updateWorldMatrix(true,false);
            transform.multiplyMatrices(projection,anchor.matrixWorld).multiply(local);
            element.style.setProperty('--projection',`matrix3d(${transform.elements.join(',')})`);
        }
    }
    function resize(){
        if(!deskActive || !canvas.isConnected)return;
        const {width,height}=renderSize();
        camera.aspect=width/height;
        camera.updateProjectionMatrix();
        // From clip space to CSS pixels, keeping the perspective divide (W).
        viewport.set(width/2,0,0,width/2,0,-height/2,0,height/2,0,0,1,0,0,0,0,1);
        const ratio=pixelRatio();
        if(renderer.getPixelRatio()!==ratio){
            renderer.setPixelRatio(ratio);
            composer.setPixelRatio(ratio);
        }
        occlusion.enabled=!compactView.matches;
        renderer.setSize(width,height);
        composer.setSize(width,height);
        invalidate();
    }
    function setFocus(next){
        focus=next;document.body.classList.toggle('reading',next);
        setHovered(null);
        zoom.lastElementChild.textContent=next?'Bureau':'Agrandir';
        zoom.title=next?'Revenir à la vue du bureau':'Agrandir l’écran';
        zoom.setAttribute('aria-label',zoom.title);
        zoom.setAttribute('aria-expanded',String(next));
        invalidate();
    }
    zoom.onclick=()=>setFocus(!focus);
    cameraControls.lastElementChild.onclick=()=>{yaw=homeYaw;pitch=homePitch;setFocus(false);};
    frame.addEventListener('cv:read-screen',()=>{
        // Small projected text becomes readable only after choosing a file.
        if(deskActive && !focus && (compactView.matches || frame.getBoundingClientRect().width<560))setFocus(true);
    });
    const projectTip=document.getElementById('project-tip');
    const raycaster=new T.Raycaster();
    const pointerNdc=new T.Vector2();
    let hoveredStation=null;
    function projectAt(clientX,clientY){
        const rect=canvas.getBoundingClientRect();
        pointerNdc.set((clientX-rect.left)/rect.width*2-1,-(clientY-rect.top)/rect.height*2+1);
        raycaster.setFromCamera(pointerNdc,camera);
        return raycaster.intersectObjects(projectTargets,false)[0]?.object.parent ?? null;
    }
    function positionProjectTip(clientX,clientY){
        if(!projectTip||projectTip.hidden)return;
        const margin=10,rect=projectTip.getBoundingClientRect();
        let left=clientX+16,top=clientY+18;
        if(left+rect.width>innerWidth-margin)left=clientX-rect.width-16;
        if(top+rect.height>innerHeight-margin)top=clientY-rect.height-18;
        projectTip.style.left=Math.max(margin,left)+'px';
        projectTip.style.top=Math.max(margin,top)+'px';
    }
    function setHovered(station){
        if(station===hoveredStation)return;
        if(hoveredStation)hoveredStation.userData.ring.visible=false;
        hoveredStation=station;
        canvas.style.cursor=station?'pointer':'';
        if(!station){if(projectTip)projectTip.hidden=true;invalidate();return;}
        station.userData.ring.visible=true;
        const meta=projectMeta.find(project=>project.id===station.userData.projectId);
        if(meta&&projectTip){
            projectTip.replaceChildren();
            const name=document.createElement('b');name.textContent=meta.name;
            const hint=document.createElement('small');
            hint.textContent=(meta.collection==='cesi'?'Projet CESI':'Projet perso')+' · cliquer pour ouvrir la fiche';
            projectTip.append(name,hint);
            projectTip.hidden=false;
        }
        invalidate();
    }
    canvas.addEventListener('pointerdown',e=>{
        if(focus||orbit||e.button!==0)return;
        if(projectTip)projectTip.hidden=true;
        orbit={x:e.clientX,y:e.clientY,yaw,pitch,id:e.pointerId,moved:false};canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove',e=>{
        if(orbit){
            if(e.pointerId!==orbit.id)return;
            if(!orbit.moved && Math.hypot(e.clientX-orbit.x,e.clientY-orbit.y)<=6)return;
            orbit.moved=true;setHovered(null);
            yaw=T.MathUtils.clamp(orbit.yaw-(e.clientX-orbit.x)*.003,-.62,.62);
            pitch=T.MathUtils.clamp(orbit.pitch+(e.clientY-orbit.y)*.002,.15,.60);
            invalidate();
            return;
        }
        if(focus){setHovered(null);return;}
        setHovered(projectAt(e.clientX,e.clientY));
        positionProjectTip(e.clientX,e.clientY);
    });
    canvas.addEventListener('pointerup',e=>{
        if(!orbit||orbit.id!==e.pointerId)return;
        const moved=orbit.moved;
        orbit=null;
        if(moved||focus)return;
        const station=projectAt(e.clientX,e.clientY);
        if(!station)return;
        setHovered(null);
        window.dispatchEvent(new CustomEvent('cv:open-project',{detail:station.userData.projectId}));
    });
    canvas.addEventListener('pointerleave',()=>{if(!orbit)setHovered(null);});
    canvas.addEventListener('lostpointercapture',e=>{if(orbit?.id===e.pointerId)orbit=null;});
    window.addEventListener('blur',()=>setHovered(null));
    document.addEventListener('pointermove',e=>{
        if(!deskActive||!canvas.isConnected||e.pointerType==='touch'||focus||reducedMotion.matches||document.querySelector('dialog[open]'))return;
        const nextX=2.87+(e.clientX/innerWidth-.5)*.11;
        const nextZ=1.85+(e.clientY/innerHeight-.5)*.08;
        if(Math.abs(nextX-mouseRig.position.x)+Math.abs(nextZ-mouseRig.position.z)<.003)return;
        mouseRig.position.x=nextX;mouseRig.position.z=nextZ;
        invalidate();
    });
    function setActive(next){
        if(next===deskActive)return;
        deskActive=next;
        canvas.hidden=!next;
        cameraControls.hidden=!next;
        document.body.classList.toggle('spatial',next);
        document.body.classList.toggle('reading',next&&focus);
        if(next)resize();
        else {
            orbit=null;
            setHovered(null);
        }
    }

    const keyObserver=new MutationObserver(invalidate);
    const mouseObserver=new MutationObserver(invalidate);
    const stageObserver=new ResizeObserver(resize);
    keyObserver.observe(board,{attributes:true,attributeFilter:['class'],subtree:true});
    mouseObserver.observe(mouse,{attributes:true,attributeFilter:['class'],subtree:true});
    stageObserver.observe(stage);
    canvas.addEventListener('webglcontextlost',()=>{
        // Keep the same DOM display and reading state when the GPU drops out.
        setActive(false);
        keyObserver.disconnect();
        mouseObserver.disconnect();
        stageObserver.disconnect();
        canvas.remove();
        composer.dispose();
        renderer.dispose();
        window.dispatchEvent(new Event('cv:desk-unavailable'));
    },{once:true});
    resize();
    render();
    return setActive;
}

let renderer;
try {
    renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
    const setActive=buildDesk(renderer);
    window.dispatchEvent(new CustomEvent('cv:desk-ready',{detail:setActive}));
} catch(error) {
    renderer?.domElement.remove();
    renderer?.dispose();
    document.body.classList.remove('spatial');
    document.querySelector('.view-controls').hidden=true;
    console.warn('Rendu 3D indisponible.',error);
    window.dispatchEvent(new Event('cv:desk-unavailable'));
}
