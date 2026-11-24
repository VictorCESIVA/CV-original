(()=>{var Tu=0,zc=1,Eu=2;var Qi=1,wu=2,qs=3,Ui=0,rn=1,fn=2,jt=0,Ys=1,kc=2,Gc=3,Vc=4,Go=5;var Cn=100,Au=101,Ru=102,Cu=103,Pu=104,es=200,Iu=201,Lu=202,Du=203,Hc=204,Wc=205,Qr=206,Nu=207,ea=208,Uu=209,Fu=210,Ou=211,Bu=212,zu=213,ku=214,lo=0,co=1,ho=2,ws=3,uo=4,fo=5,po=6,mo=7,Vo=0,Gu=1,Vu=2,Kn=0,ta=1,na=2,ia=3,ts=4,sa=5,ra=6,aa=7;var Xc=300,ns=301,Zs=302,Ho=303,Wo=304,mn=1e3,Xn=1001,go=1002,zt=1003,Hu=1004;var oa=1005;var dn=1006,Xo=1007;var pi=1008;var hn=1009,qc=1010,Yc=1011,Js=1012,qo=1013,Gn=1014,Pn=1015,Qt=1016,Yo=1017,Zo=1018,mi=1020,Zc=35902,Jc=35899,$c=1021,Kc=1022,Sn=1023,di=1026,Vn=1027,Jo=1028,$o=1029,Fi=1030,Ko=1031;var jo=1033,la=33776,ca=33777,ha=33778,ua=33779,Qo=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37488,ol=37489,da=37490,ll=37491,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Ml=37820,Sl=37821,bl=36492,Tl=36494,El=36495,wl=36283,Al=36284,fa=36285,Rl=36286;var vr=2300,_o=2301,ro=2302,Ac=2303,Rc=2400,Cc=2401,Pc=2402;var Wu=3200;var $s=0,Xu=1,gi="",sn="srgb",yr="srgb-linear",Mr="linear",Tt="srgb";var ao=7680;var qu=519,Yu=512,Zu=513,Ju=514,jc=515,$u=516,Ku=517,Qc=518,eh=519,ju=35044;var th="300 es",An=2e3,As=2001;function rf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){let i=Rs("canvas");return i.style.display="block",i}var Hh={},Cs=null;function nh(...i){let e="THREE."+i.shift();Cs?Cs("log",e,...i):console.log(e,...i)}function ed(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=ed(i);let e="THREE."+i.shift();if(Cs)Cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=ed(i);let e="THREE."+i.shift();if(Cs)Cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function pr(...i){let e=i.join(" ");e in Hh||(Hh[e]=!0,Ke(...i))}function td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var nd={[lo]:lo,[ho]:po,[uo]:uo,[ws]:fo,[co]:co,[po]:ho,[mo]:mo,[fo]:ws},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,mr=Math.PI/180,Ps=180/Math.PI;function is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function ih(i,e){return(i%e+e)%e}function of(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lf(i,e,t){return i!==e?(t-i)/(e-i):0}function gr(i,e,t){return(1-t)*i+t*e}function cf(i,e,t,n){return gr(i,e,1-Math.exp(-t*n))}function hf(i,e=1){return e-Math.abs(ih(i,e*2)-e)}function uf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ff(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pf(i,e){return i+Math.random()*(e-i)}function mf(i){return i*(.5-Math.random())}function gf(i){i!==void 0&&(Wh=i);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _f(i){return i*mr}function xf(i){return i*Ps}function vf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),u=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*u,o*h,o*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function id(i,e){if(e.constructor===Float32Array)return i;let t=rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function sd(i,e){if(e.constructor===Float32Array)return i;let t=rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Oi={DEG2RAD:mr,RAD2DEG:Ps,generateUUID:is,clamp:ft,euclideanModulo:ih,mapLinear:of,inverseLerp:lf,lerp:gr,damp:cf,pingpong:hf,smoothstep:uf,smootherstep:df,randInt:ff,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:_f,radToDeg:xf,isPowerOfTwo:vf,ceilPowerOfTwo:yf,floorPowerOfTwo:sh,setQuaternionFromProperEuler:Mf,normalize:sd,denormalize:id},ce=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],m=r[a+2],S=r[a+3];if(d!==S||c!==f||l!==u||h!==m){let g=c*f+l*u+h*m+d*S;g<0&&(f=-f,u=-u,m=-m,S=-S,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);p=Math.sin(p*v)/w,o=Math.sin(o*v)/w,c=c*p+f*o,l=l*p+u*o,h=h*p+m*o,d=d*p+S*o}else{c=c*p+f*o,l=l*p+u*o,h=h*p+m*o,d=d*p+S*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],m=r[a+3];return e[t]=o*m+h*d+c*u-l*f,e[t+1]=c*m+h*f+l*d-o*u,e[t+2]=l*m+h*u+o*f-c*d,e[t+3]=h*m-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),u=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"YZX":this._x=f*h*d+l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d-f*u*m;break;case"XZY":this._x=f*h*d-l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d+f*u*m;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new U,Xh=new Yn,tt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],S=s[0],g=s[3],p=s[6],v=s[1],w=s[4],y=s[7],A=s[2],b=s[5],_=s[8];return r[0]=a*S+o*v+c*A,r[3]=a*g+o*w+c*b,r[6]=a*p+o*y+c*_,r[1]=l*S+h*v+d*A,r[4]=l*g+h*w+d*b,r[7]=l*p+h*y+d*_,r[2]=f*S+u*v+m*A,r[5]=f*g+u*w+m*b,r[8]=f*p+u*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,m=t*d+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=u*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rc=new tt,qh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){let i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:e,whitePoint:n,transfer:Mr,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var _t=Sf();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=Rs("canvas")),hs.width=e.width,hs.height=e.height;let s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bf=0,Is=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ac(s[a].image)):r.push(ac(s[a]))}else r=ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Tf=0,oc=new U,cn=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=dn,a=pi,o=Sn,c=hn,l=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=is(),this.name="",this.source=new Is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Xc;cn.DEFAULT_ANISOTROPY=1;var Nt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],m=c[9],S=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(u+1)/2,A=(p+1)/2,b=(h+f)/4,_=(d+S)/4,E=(m+g)/4;return w>y&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=_/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=E/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=E/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-S)/v,this.z=(f-h)/v,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Is(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sr=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yo=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ut=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,d,f,u,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,f,u,m,S,g)}set(e,t,n,s,r,a,o,c,l,h,d,f,u,m,S,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,m=o*h,S=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+m*l,t[5]=f-S*l,t[9]=-o*c,t[2]=S-f*l,t[6]=m+u*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,u=c*d,m=l*h,S=l*d;t[0]=f+S*o,t[4]=m*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=S+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,u=c*d,m=l*h,S=l*d;t[0]=f-S*o,t[4]=-a*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,u=a*d,m=o*h,S=o*d;t[0]=c*h,t[4]=m*l-u,t[8]=f*l+S,t[1]=c*d,t[5]=S*l+f,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,u=a*l,m=o*c,S=o*l;t[0]=c*h,t[4]=S-f*d,t[8]=m*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+m,t[10]=f-S*d}else if(e.order==="XZY"){let f=a*c,u=a*l,m=o*c,S=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+S,t[5]=a*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,wf)}lookAt(e,t,n){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(n,_n),Mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(n,_n)),Mi.normalize(),Fa.crossVectors(_n,Mi),s[0]=Mi.x,s[4]=Fa.x,s[8]=_n.x,s[1]=Mi.y,s[5]=Fa.y,s[9]=_n.y,s[2]=Mi.z,s[6]=Fa.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],S=n[6],g=n[10],p=n[14],v=n[3],w=n[7],y=n[11],A=n[15],b=s[0],_=s[4],E=s[8],I=s[12],C=s[1],D=s[5],B=s[9],Z=s[13],P=s[2],q=s[6],j=s[10],Y=s[14],N=s[3],k=s[7],J=s[11],re=s[15];return r[0]=a*b+o*C+c*P+l*N,r[4]=a*_+o*D+c*q+l*k,r[8]=a*E+o*B+c*j+l*J,r[12]=a*I+o*Z+c*Y+l*re,r[1]=h*b+d*C+f*P+u*N,r[5]=h*_+d*D+f*q+u*k,r[9]=h*E+d*B+f*j+u*J,r[13]=h*I+d*Z+f*Y+u*re,r[2]=m*b+S*C+g*P+p*N,r[6]=m*_+S*D+g*q+p*k,r[10]=m*E+S*B+g*j+p*J,r[14]=m*I+S*Z+g*Y+p*re,r[3]=v*b+w*C+y*P+A*N,r[7]=v*_+w*D+y*q+A*k,r[11]=v*E+w*B+y*j+A*J,r[15]=v*I+w*Z+y*Y+A*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],S=e[7],g=e[11],p=e[15],v=c*u-l*f,w=o*u-l*d,y=o*f-c*d,A=a*u-l*h,b=a*f-c*h,_=a*d-o*h;return t*(S*v-g*w+p*y)-n*(m*v-g*A+p*b)+s*(m*w-S*A+p*_)-r*(m*y-S*b+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],S=e[13],g=e[14],p=e[15],v=t*o-n*a,w=t*c-s*a,y=t*l-r*a,A=n*c-s*o,b=n*l-r*o,_=s*l-r*c,E=h*S-d*m,I=h*g-f*m,C=h*p-u*m,D=d*g-f*S,B=d*p-u*S,Z=f*p-u*g,P=v*Z-w*B+y*D+A*C-b*I+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/P;return e[0]=(o*Z-c*B+l*D)*q,e[1]=(s*B-n*Z-r*D)*q,e[2]=(S*_-g*b+p*A)*q,e[3]=(f*b-d*_-u*A)*q,e[4]=(c*C-a*Z-l*I)*q,e[5]=(t*Z-s*C+r*I)*q,e[6]=(g*y-m*_-p*w)*q,e[7]=(h*_-f*y+u*w)*q,e[8]=(a*B-o*C+l*E)*q,e[9]=(n*C-t*B-r*E)*q,e[10]=(m*b-S*y+p*v)*q,e[11]=(d*y-h*b-u*v)*q,e[12]=(o*I-a*D-c*E)*q,e[13]=(t*D-n*I+s*E)*q,e[14]=(S*w-m*A-g*v)*q,e[15]=(h*A-d*w+f*v)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,m=r*d,S=a*h,g=a*d,p=o*d,v=c*l,w=c*h,y=c*d,A=n.x,b=n.y,_=n.z;return s[0]=(1-(S+p))*A,s[1]=(u+y)*A,s[2]=(m-w)*A,s[3]=0,s[4]=(u-y)*b,s[5]=(1-(f+p))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+w)*_,s[9]=(g-v)*_,s[10]=(1-(f+S))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),c=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let l=1/a,h=1/o,d=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=An,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),m,S;if(c)m=r/(a-r),S=a*r/(a-r);else if(o===An)m=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===As)m=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),u=-(n+s)/(n-s),m,S;if(c)m=1/(a-r),S=a/(a-r);else if(o===An)m=-2/(a-r),S=-(a+r)/(a-r);else if(o===As)m=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},us=new U,Un=new ut,Ef=new U(0,0,0),wf=new U(1,1,1),Mi=new U,Fa=new U,_n=new U,Zh=new ut,Jh=new Yn,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Af=0,$h=new U,ds=new Yn,ri=new ut,Oa=new U,or=new U,Rf=new U,Cf=new Yn,Kh=new U(1,0,0),jh=new U(0,1,0),Qh=new U(0,0,1),eu={type:"added"},Pf={type:"removed"},fs={type:"childadded",child:null},lc={type:"childremoved",child:null},Kt=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Zn,n=new Yn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new tt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(or,Oa,this.up):ri.lookAt(Oa,or,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ri),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),fs.child=e,this.dispatchEvent(fs),fs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hi=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),p=this._getHandJoint(l,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(If)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var nt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=ih(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=cc(a,r,e+1/3),this.g=cc(a,r,e),this.b=cc(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return _t.workingToColorSpace(on.copy(this),e),Math.round(ft(on.r*255,0,255))*65536+Math.round(ft(on.g*255,0,255))*256+Math.round(ft(on.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=sn){_t.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ba);let n=gr(Si.h,Ba.h,t),s=gr(Si.s,Ba.s,t),r=gr(Si.l,Ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new nt;nt.NAMES=rd;var br=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yi=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new U,ai=new U,hc=new U,oi=new U,ps=new U,ms=new U,tu=new U,uc=new U,dc=new U,fc=new U,pc=new Nt,mc=new Nt,gc=new Nt,wi=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ai.subVectors(n,t),hc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(ai),c=Fn.dot(hc),l=ai.dot(ai),h=ai.dot(hc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ai.subVectors(e,t),Fn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Fn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),uc.subVectors(e,n);let c=ps.dot(uc),l=ms.dot(uc);if(c<=0&&l<=0)return t.copy(n);dc.subVectors(e,s);let h=ps.dot(dc),d=ms.dot(dc);if(h>=0&&d<=h)return t.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(ps,a);fc.subVectors(e,r);let u=ps.dot(fc),m=ms.dot(fc);if(m>=0&&u<=m)return t.copy(r);let S=u*l-c*m;if(S<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ms,o);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return tu.subVectors(r,s),o=(d-h)/(d-h+(u-m)),t.copy(s).addScaledVector(tu,o);let p=1/(g+S+f);return a=S*p,o=f*p,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ka.subVectors(this.max,lr),gs.subVectors(e.a,lr),_s.subVectors(e.b,lr),xs.subVectors(e.c,lr),bi.subVectors(_s,gs),Ti.subVectors(xs,_s),Vi.subVectors(gs,xs);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-Vi.z,Vi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,Vi.z,0,-Vi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-Vi.y,Vi.x,0];return!_c(t,gs,_s,xs,ka)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,gs,_s,xs,ka))?!1:(Ga.crossVectors(bi,Ti),t=[Ga.x,Ga.y,Ga.z],_c(t,gs,_s,xs,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,za=new Jn,gs=new U,_s=new U,xs=new U,bi=new U,Ti=new U,Vi=new U,lr=new U,ka=new U,Ga=new U,Hi=new U;function _c(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ht=new U,Va=new ce,Lf=0,vn=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=e!==void 0?rh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):id(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.array)}};var Tr=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Er=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Df=new Jn,cr=new U,xc=new U,Ai=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(xc)),this.expandByPoint(cr.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nf=0,wn=new ut,vc=new Kt,vs=new U,xn=new Jn,hr=new Jn,$t=new U,Ft=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rf(e)?Er:Tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(xn.min,hr.min),xn.expandByPoint($t),$t.addVectors(xn.max,hr.max),xn.expandByPoint($t)):(xn.expandByPoint(hr.min),xn.expandByPoint(hr.max))}xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(e,l),$t.add(vs)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new U,c[I]=new U;let h=new U,d=new U,f=new U,u=new ce,m=new ce,S=new ce,g=new U,p=new U;function v(I,C,D){l[I]=l[C]=l[D]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,I),m.fromBufferAttribute(r,C),S.fromBufferAttribute(r,D),d.sub(h),f.sub(h),m.sub(u),S.sub(u);let B=1/(m.x*S.y-S.x*m.y);isFinite(B)&&(g.copy(d).multiplyScalar(S.y).addScaledVector(f,-m.y).multiplyScalar(B),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-S.x).multiplyScalar(B),o[I].add(g),o[C].add(g),o[D].add(g),c[I].add(p),c[C].add(p),c[D].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,C=w.length;I<C;++I){let D=w[I],B=D.start,Z=D.count;for(let P=B,q=B+Z;P<q;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new U,A=new U,b=new U,_=new U;function E(I){b.fromBufferAttribute(s,I),_.copy(b);let C=o[I];y.copy(C),y.sub(b.multiplyScalar(b.dot(C))).normalize(),A.crossVectors(_,C);let B=A.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,B)}for(let I=0,C=n.count;I<C;++I)l[I]&&E(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),u=0,m=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?u=c[S]*o.data.stride+o.offset:u=c[S]*h;for(let p=0;p<h;p++)f[m++]=l[u++]}return new vn(f,h,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yc=new U,Uf=new U,Ff=new tt,Bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yc.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ff.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Of=0,$n=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Ys,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Wc,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new U,Mc=new U,Ha=new U,Wa=new U,wr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mc.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Wa.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=Wa.dot(this.direction),c=-Wa.dot(Ha),l=Wa.lengthSq(),h=Math.abs(1-a*a),d,f,u,m;if(h>0)if(d=a*c-o,f=a*o-c,m=r*h,d>=0)if(f>=-m)if(f<=m){let S=1/h;d*=S,f*=S,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(Ha,f),u}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,m=t.x-a.x,S=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,w=n.z-a.z,y=Math.abs(c),A=Math.abs(l),b=Math.abs(h),_,E,I,C,D,B,Z,P,q,j,Y,N;if(y>=A&&y>=b?(I=c,B=d,q=m,N=p,c>=0?(_=l,E=h,C=f,D=u,Z=S,P=g,j=v,Y=w):(_=h,E=l,C=u,D=f,Z=g,P=S,j=w,Y=v)):A>=b?(I=l,B=f,q=S,N=v,l>=0?(_=h,E=c,C=u,D=d,Z=g,P=m,j=w,Y=p):(_=c,E=h,C=d,D=u,Z=m,P=g,j=p,Y=w)):(I=h,B=u,q=g,N=w,h>=0?(_=c,E=l,C=d,D=f,Z=m,P=S,j=p,Y=v):(_=l,E=c,C=f,D=d,Z=S,P=m,j=v,Y=p)),I===0)return null;let k=_/I,J=E/I,re=1/I,Ie=C-k*B,Ue=D-J*B,Q=Z-k*q,ue=P-J*q,Ee=j-k*N,Oe=Y-J*N,ye=Ee*ue-Oe*Q,Ge=Ie*Oe-Ue*Ee,xt=Q*Ue-ue*Ie;if(s){if(ye<0||Ge<0||xt<0)return null}else if((ye<0||Ge<0||xt<0)&&(ye>0||Ge>0||xt>0))return null;let Ve=ye+Ge+xt;if(Ve===0)return null;let Je=re*(ye*B+Ge*q+xt*N);return(Ve>0?Je<0:Je>0)?null:this.at(Je/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zn=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nu=new ut,Wi=new wr,Xa=new Ai,iu=new U,qa=new U,Ya=new U,Za=new U,Sc=new U,Ja=new U,su=new U,$a=new U,Ct=class extends Kt{constructor(e=new Ft,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Sc.fromBufferAttribute(d,e),a?Ja.addScaledVector(Sc,h):Ja.addScaledVector(Sc.sub(t),h))}t.add(Ja)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Xa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Xa,iu)===null||Wi.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(nu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,S=f.length;m<S;m++){let g=f[m],p=a[g.materialIndex],v=Math.max(g.start,u.start),w=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=v,A=w;y<A;y+=3){let b=o.getX(y),_=o.getX(y+1),E=o.getX(y+2);s=Ka(this,p,e,n,l,h,d,b,_,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),S=Math.min(o.count,u.start+u.count);for(let g=m,p=S;g<p;g+=3){let v=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);s=Ka(this,a,e,n,l,h,d,v,w,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,S=f.length;m<S;m++){let g=f[m],p=a[g.materialIndex],v=Math.max(g.start,u.start),w=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=v,A=w;y<A;y+=3){let b=y,_=y+1,E=y+2;s=Ka(this,p,e,n,l,h,d,b,_,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),S=Math.min(c.count,u.start+u.count);for(let g=m,p=S;g<p;g+=3){let v=g,w=g+1,y=g+2;s=Ka(this,a,e,n,l,h,d,v,w,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Bf(i,e,t,n,s,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ui,o),c===null)return null;$a.copy(o),$a.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo($a);return l<t.near||l>t.far?null:{distance:l,point:$a.clone(),object:i}}function Ka(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,qa),i.getVertexPosition(c,Ya),i.getVertexPosition(l,Za);let h=Bf(i,e,t,n,qa,Ya,Za,su);if(h){let d=new U;wi.getBarycoord(su,qa,Ya,Za,d),s&&(h.uv=wi.getInterpolatedAttribute(s,o,c,l,d,new ce)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,c,l,d,new ce)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};wi.getNormal(qa,Ya,Za,f.normal),h.face=f,h.barycoord=d}return h}var fi=class extends cn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=zt,h=zt,d,f){super(null,a,o,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ns=class extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new ut,ru=new ut,ja=[],au=new Jn,zf=new ut,ur=new Ct,dr=new Ai,Ar=class extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),au.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),dr.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),ru.multiplyMatrices(n,ys),ur.matrixWorld=ru,ur.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let c=ja[a];c.instanceId=r,c.object=this,t.push(c)}ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(s*this.count),s,this.count,Jo,Pn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new Ai,kf=new ce(.5,.5),Qa=new U,Ri=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],S=r[9],g=r[10],p=r[11],v=r[12],w=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,u-h,p-m,A-v).normalize(),s[1].setComponents(l+a,u+h,p+m,A+v).normalize(),s[2].setComponents(l+o,u+d,p+S,A+w).normalize(),s[3].setComponents(l-o,u-d,p-S,A-w).normalize(),n)s[4].setComponents(c,f,g,y).normalize(),s[5].setComponents(l-c,u-f,p-g,A-y).normalize();else if(s[4].setComponents(l-c,u-f,p-g,A-y).normalize(),t===An)s[5].setComponents(l+c,u+f,p+g,A+y).normalize();else if(t===As)s[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=kf.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ou=new ut,Mo=class i{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ou.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ri),n[s].setFromProjectionMatrix(ou,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ri),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Rr=class extends cn{constructor(e=[],t=ns,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cr=class extends cn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kn=class extends cn{constructor(e,t,n=Gn,s,r,a,o=zt,c=zt,l,h=di,d=1){if(h!==di&&h!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pr=class extends kn{constructor(e,t=Gn,n=ns,s,r,a=zt,o=zt,c,l=di){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ir=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rn=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function m(S,g,p,v,w,y,A,b,_,E,I){let C=y/_,D=A/E,B=y/2,Z=A/2,P=b/2,q=_+1,j=E+1,Y=0,N=0,k=new U;for(let J=0;J<j;J++){let re=J*D-Z;for(let Ie=0;Ie<q;Ie++){let Ue=Ie*C-B;k[S]=Ue*v,k[g]=re*w,k[p]=P,l.push(k.x,k.y,k.z),k[S]=0,k[g]=0,k[p]=b>0?1:-1,h.push(k.x,k.y,k.z),d.push(Ie/_),d.push(1-J/E),Y+=1}}for(let J=0;J<E;J++)for(let re=0;re<_;re++){let Ie=f+re+q*J,Ue=f+re+q*(J+1),Q=f+(re+1)+q*(J+1),ue=f+(re+1)+q*J;c.push(Ie,Ue,ue),c.push(Ue,Q,ue),N+=6}o.addGroup(u,N,I),u+=N,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Lr=class i extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new U,h=new ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=n+d/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ci=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],m=0,S=[],g=n/2,p=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(u,2));function v(){let y=new U,A=new U,b=0,_=(t-e)/n;for(let E=0;E<=r;E++){let I=[],C=E/r,D=C*(t-e)+e;for(let B=0;B<=s;B++){let Z=B/s,P=Z*c+o,q=Math.sin(P),j=Math.cos(P);A.x=D*q,A.y=-C*n+g,A.z=D*j,d.push(A.x,A.y,A.z),y.set(q,_,j).normalize(),f.push(y.x,y.y,y.z),u.push(Z,1-C),I.push(m++)}S.push(I)}for(let E=0;E<s;E++)for(let I=0;I<r;I++){let C=S[I][E],D=S[I+1][E],B=S[I+1][E+1],Z=S[I][E+1];(e>0||I!==0)&&(h.push(C,D,Z),b+=3),(t>0||I!==r-1)&&(h.push(D,B,Z),b+=3)}l.addGroup(p,b,0),p+=b}function w(y){let A=m,b=new ce,_=new U,E=0,I=y===!0?e:t,C=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,g*C,0),f.push(0,C,0),u.push(.5,.5),m++;let D=m;for(let B=0;B<=s;B++){let P=B/s*c+o,q=Math.cos(P),j=Math.sin(P);_.x=I*j,_.y=g*C,_.z=I*q,d.push(_.x,_.y,_.z),f.push(0,C,0),b.x=q*.5+.5,b.y=j*.5*C+.5,u.push(b.x,b.y),m++}for(let B=0;B<s;B++){let Z=A+B,P=D+B;y===!0?h.push(P,P+1,Z):h.push(P+1,P,Z),E+=3}l.addGroup(p,E,y===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dr=class i extends Ci{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},So=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new U,y=new U,A=new U;for(let b=0;b<t.length;b+=3)u(t[b+0],w),u(t[b+1],y),u(t[b+2],A),c(w,y,A,v)}function c(v,w,y,A){let b=A+1,_=[];for(let E=0;E<=b;E++){_[E]=[];let I=v.clone().lerp(y,E/b),C=w.clone().lerp(y,E/b),D=b-E;for(let B=0;B<=D;B++)B===0&&E===b?_[E][B]=I:_[E][B]=I.clone().lerp(C,B/D)}for(let E=0;E<b;E++)for(let I=0;I<2*(b-E)-1;I++){let C=Math.floor(I/2);I%2===0?(f(_[E][C+1]),f(_[E+1][C]),f(_[E][C])):(f(_[E][C+1]),f(_[E+1][C+1]),f(_[E+1][C]))}}function l(v){let w=new U;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let v=new U;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let y=g(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;a.push(y,1-A)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let w=a[v+0],y=a[v+2],A=a[v+4],b=Math.max(w,y,A),_=Math.min(w,y,A);b>.9&&_<.1&&(w<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,w){let y=v*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function m(){let v=new U,w=new U,y=new U,A=new U,b=new ce,_=new ce,E=new ce;for(let I=0,C=0;I<r.length;I+=9,C+=6){v.set(r[I+0],r[I+1],r[I+2]),w.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),b.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),A.copy(v).add(w).add(y).divideScalar(3);let D=g(A);S(b,C+0,v,D),S(_,C+2,w,D),S(E,C+4,y,D)}}function S(v,w,y,A){A<0&&v.x===1&&(a[w]=v.x-1),y.x===0&&y.z===0&&(a[w]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ce:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,c=new ut;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ft(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ft(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Us=class extends yn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bo=class extends Us{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,u*=h,s(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var lu=new U,cu=new U,bc=new ah,Tc=new ah,Ec=new ah,Pi=class extends yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(cu.subVectors(s[0],s[1]).add(s[0]),l=cu);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),u),S=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);S<1e-4&&(S=1),m<1e-4&&(m=S),g<1e-4&&(g=S),bc.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,m,S,g),Tc.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,m,S,g),Ec.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,m,S,g)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Tc.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Ec.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(bc.calc(c),Tc.calc(c),Ec.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Gf(i,e){let t=1-i;return t*t*e}function Vf(i,e){return 2*(1-i)*i*e}function Hf(i,e){return i*i*e}function _r(i,e,t,n){return Gf(i,e)+Vf(i,t)+Hf(i,n)}function Wf(i,e){let t=1-i;return t*t*t*e}function Xf(i,e){let t=1-i;return 3*t*t*i*e}function qf(i,e){return 3*(1-i)*i*i*e}function Yf(i,e){return i*i*i*e}function xr(i,e,t,n,s){return Wf(i,e)+Xf(i,t)+qf(i,n)+Yf(i,s)}var Nr=class extends yn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},To=class extends yn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y),xr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ur=class extends yn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends yn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends yn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends yn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(hu(o,c.x,l.x,h.x,d.x),hu(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:bo,CatmullRomCurve3:Pi,CubicBezierCurve:Nr,CubicBezierCurve3:To,EllipseCurve:Us,LineCurve:Ur,LineCurve3:Eo,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Or,SplineCurve:Br}),Ao=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new wo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zi=class extends Ao{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ur(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fr(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Nr(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Br(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Us(e,t,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends Zi{constructor(e){super(e),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Zi().fromJSON(s))}return this}};function Zf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ad(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Qf(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let f=t;f<s;f+=t){let u=i[f],m=i[f+1];u<o&&(o=u),m<c&&(c=m),u>h&&(h=u),m>d&&(d=m)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return zr(r,a,t,o,c,l,0),a}function ad(i,e,t,n,s){let r;if(s===hp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=uu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=uu(a/n|0,i[a],i[a+1],r);return r&&Fs(r,r.next)&&(Gr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fs(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&sp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?$f(i,n,s,r):Jf(i)){e.push(c.i,i.i,l.i),Gr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Kf($i(i),e),zr(i,e,t,n,s,r,2)):a===2&&jf(i,e,t,n,s,r):zr($i(i),e,t,n,s,r,1);break}}}function Jf(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),f=Math.max(s,r,a),u=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&fr(s,o,r,c,a,l,m.x,m.y)&&Ut(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $f(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,f=a.y,u=Math.min(o,c,l),m=Math.min(h,d,f),S=Math.max(o,c,l),g=Math.max(h,d,f),p=Ic(u,m,e,t,n),v=Ic(S,g,e,t,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=p&&y&&y.z<=v;){if(w.x>=u&&w.x<=S&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&fr(o,h,c,d,l,f,w.x,w.y)&&Ut(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=u&&y.x<=S&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&fr(o,h,c,d,l,f,y.x,y.y)&&Ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=u&&w.x<=S&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&fr(o,h,c,d,l,f,w.x,w.y)&&Ut(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=S&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&fr(o,h,c,d,l,f,y.x,y.y)&&Ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Kf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Fs(n,s)&&ld(n,t,t.next,s)&&kr(n,s)&&kr(s,n)&&(e.push(n.i,t.i,s.i),Gr(t),Gr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function jf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&op(a,o)){let c=cd(a,o);a=$i(a,a.next),c=$i(c,c.next),zr(a,e,t,n,s,r,0),zr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Qf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=ad(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ap(l))}s.sort(ep);for(let r=0;r<s.length;r++)t=tp(s[r],t);return t}function ep(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function tp(i,e){let t=np(i,e);if(!t)return e;let n=cd(t,i);return $i(n,n.next),$i(t,t.next)}function np(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Fs(i,t))return t;do{if(Fs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&od(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);kr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&ip(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function ip(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function sp(i,e,t,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rp(s)}function rp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ic(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ap(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function od(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function fr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&od(i,e,t,n,s,r,a,o)}function op(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!lp(i,e)&&(kr(i,e)&&kr(e,i)&&cp(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Fs(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fs(i,e){return i.x===e.x&&i.y===e.y}function ld(i,e,t,n){let s=to(Ut(i,e,t)),r=to(Ut(i,e,n)),a=to(Ut(t,n,i)),o=to(Ut(t,n,e));return!!(s!==r&&a!==o||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||a===0&&eo(t,i,n)||o===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function lp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ld(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function kr(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function cp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cd(i,e){let t=Lc(i.i,i.x,i.y),n=Lc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uu(i,e,t,n){let s=Lc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Dc=class{static triangulate(e,t,n=2){return Zf(e,t,n)}},qi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];du(e),fu(n,e);let a=e.length;t.forEach(du);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,fu(n,t[c]);let o=Dc.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Os=class i extends Ft{constructor(e=new Ji([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:up,w,y=!1,A,b,_,E;if(p){w=p.getSpacedPoints(h),y=!0,f=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,ae),b=new U,_=new U,E=new U}f||(g=0,u=0,m=0,S=0);let I=o.extractPoints(l),C=I.shape,D=I.holes;if(!qi.isClockWise(C)){C=C.reverse();for(let ae=0,me=D.length;ae<me;ae++){let ge=D[ae];qi.isClockWise(ge)&&(D[ae]=ge.reverse())}}function Z(ae){let ge=10000000000000001e-36,Pe=ae[0];for(let be=1;be<=ae.length;be++){let $e=be%ae.length,Be=ae[$e],it=Be.x-Pe.x,lt=Be.y-Pe.y,st=it*it+lt*lt,O=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(Pe.x),Math.abs(Pe.y)),Rt=ge*O*O;if(st<=Rt){ae.splice($e,1),be--;continue}Pe=Be}}Z(C),D.forEach(Z);let P=D.length,q=C;for(let ae=0;ae<P;ae++){let me=D[ae];C=C.concat(me)}function j(ae,me,ge){return me||je("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(me,ge)}let Y=C.length;function N(ae,me,ge){let Pe,be,$e,Be=ae.x-me.x,it=ae.y-me.y,lt=ge.x-ae.x,st=ge.y-ae.y,O=Be*Be+it*it,Rt=Be*st-it*lt;if(Math.abs(Rt)>Number.EPSILON){let Qe=Math.sqrt(O),ht=Math.sqrt(lt*lt+st*st),xe=me.x-it/Qe,St=me.y+Be/Qe,We=ge.x-st/ht,qe=ge.y+lt/ht,R=((We-xe)*st-(qe-St)*lt)/(Be*st-it*lt);Pe=xe+Be*R-ae.x,be=St+it*R-ae.y;let M=Pe*Pe+be*be;if(M<=2)return new ce(Pe,be);$e=Math.sqrt(M/2)}else{let Qe=!1;Be>Number.EPSILON?lt>Number.EPSILON&&(Qe=!0):Be<-Number.EPSILON?lt<-Number.EPSILON&&(Qe=!0):Math.sign(it)===Math.sign(st)&&(Qe=!0),Qe?(Pe=-it,be=Be,$e=Math.sqrt(O)):(Pe=Be,be=it,$e=Math.sqrt(O/2))}return new ce(Pe/$e,be/$e)}let k=[];for(let ae=0,me=q.length,ge=me-1,Pe=ae+1;ae<me;ae++,ge++,Pe++)ge===me&&(ge=0),Pe===me&&(Pe=0),k[ae]=N(q[ae],q[ge],q[Pe]);let J=[],re,Ie=k.concat();for(let ae=0,me=P;ae<me;ae++){let ge=D[ae];re=[];for(let Pe=0,be=ge.length,$e=be-1,Be=Pe+1;Pe<be;Pe++,$e++,Be++)$e===be&&($e=0),Be===be&&(Be=0),re[Pe]=N(ge[Pe],ge[$e],ge[Be]);J.push(re),Ie=Ie.concat(re)}let Ue;if(g===0)Ue=qi.triangulateShape(q,D);else{let ae=[],me=[];for(let ge=0;ge<g;ge++){let Pe=ge/g,be=u*Math.cos(Pe*Math.PI/2),$e=m*Math.sin(Pe*Math.PI/2)+S;for(let Be=0,it=q.length;Be<it;Be++){let lt=j(q[Be],k[Be],$e);Ge(lt.x,lt.y,-be),Pe===0&&ae.push(lt)}for(let Be=0,it=P;Be<it;Be++){let lt=D[Be];re=J[Be];let st=[];for(let O=0,Rt=lt.length;O<Rt;O++){let Qe=j(lt[O],re[O],$e);Ge(Qe.x,Qe.y,-be),Pe===0&&st.push(Qe)}Pe===0&&me.push(st)}}Ue=qi.triangulateShape(ae,me)}let Q=Ue.length,ue=m+S;for(let ae=0;ae<Y;ae++){let me=f?j(C[ae],Ie[ae],ue):C[ae];y?(_.copy(A.normals[0]).multiplyScalar(me.x),b.copy(A.binormals[0]).multiplyScalar(me.y),E.copy(w[0]).add(_).add(b),Ge(E.x,E.y,E.z)):Ge(me.x,me.y,0)}for(let ae=1;ae<=h;ae++)for(let me=0;me<Y;me++){let ge=f?j(C[me],Ie[me],ue):C[me];y?(_.copy(A.normals[ae]).multiplyScalar(ge.x),b.copy(A.binormals[ae]).multiplyScalar(ge.y),E.copy(w[ae]).add(_).add(b),Ge(E.x,E.y,E.z)):Ge(ge.x,ge.y,d/h*ae)}for(let ae=g-1;ae>=0;ae--){let me=ae/g,ge=u*Math.cos(me*Math.PI/2),Pe=m*Math.sin(me*Math.PI/2)+S;for(let be=0,$e=q.length;be<$e;be++){let Be=j(q[be],k[be],Pe);Ge(Be.x,Be.y,d+ge)}for(let be=0,$e=D.length;be<$e;be++){let Be=D[be];re=J[be];for(let it=0,lt=Be.length;it<lt;it++){let st=j(Be[it],re[it],Pe);y?Ge(st.x,st.y+w[h-1].y,w[h-1].x+ge):Ge(st.x,st.y,d+ge)}}}Ee(),Oe();function Ee(){let ae=s.length/3;if(f){let me=0,ge=Y*me;for(let Pe=0;Pe<Q;Pe++){let be=Ue[Pe];xt(be[2]+ge,be[1]+ge,be[0]+ge)}me=h+g*2,ge=Y*me;for(let Pe=0;Pe<Q;Pe++){let be=Ue[Pe];xt(be[0]+ge,be[1]+ge,be[2]+ge)}}else{for(let me=0;me<Q;me++){let ge=Ue[me];xt(ge[2],ge[1],ge[0])}for(let me=0;me<Q;me++){let ge=Ue[me];xt(ge[0]+Y*h,ge[1]+Y*h,ge[2]+Y*h)}}n.addGroup(ae,s.length/3-ae,0)}function Oe(){let ae=s.length/3,me=0;ye(q,me),me+=q.length;for(let ge=0,Pe=D.length;ge<Pe;ge++){let be=D[ge];ye(be,me),me+=be.length}n.addGroup(ae,s.length/3-ae,1)}function ye(ae,me){let ge=ae.length;for(;--ge>=0;){let Pe=ge,be=ge-1;be<0&&(be=ae.length-1);for(let $e=0,Be=h+g*2;$e<Be;$e++){let it=Y*$e,lt=Y*($e+1),st=me+Pe+it,O=me+be+it,Rt=me+be+lt,Qe=me+Pe+lt;Ve(st,O,Rt,Qe)}}}function Ge(ae,me,ge){c.push(ae),c.push(me),c.push(ge)}function xt(ae,me,ge){Je(ae),Je(me),Je(ge);let Pe=s.length/3,be=v.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);ot(be[0]),ot(be[1]),ot(be[2])}function Ve(ae,me,ge,Pe){Je(ae),Je(me),Je(Pe),Je(me),Je(ge),Je(Pe);let be=s.length/3,$e=v.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);ot($e[0]),ot($e[1]),ot($e[3]),ot($e[1]),ot($e[2]),ot($e[3])}function Je(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function ot(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wo[s.type]().fromJSON(s)),new i(n,e.options)}},up={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],u=e[s*3+1],m=e[s*3+2],S=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-d),new ce(f,1-m),new ce(S,1-p)]:[new ce(o,1-c),new ce(h,1-d),new ce(u,1-m),new ce(g,1-p)]}};function dp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ii=class i extends Ft{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ft(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new U,f=new ce,u=new U,m=new U,S=new U,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,u.x=p*1,u.y=-g,u.z=p*0,S.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:S.normalize(),c.push(S.x,S.y,S.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=S.x,u.y+=S.y,u.z+=S.z,u.normalize(),c.push(u.x,u.y,u.z),S.copy(m)}for(let v=0;v<=t;v++){let w=n+v*h*s,y=Math.sin(w),A=Math.cos(w);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*y,d.y=e[b].y,d.z=e[b].x*A,a.push(d.x,d.y,d.z),f.x=v/t,f.y=b/(e.length-1),o.push(f.x,f.y);let _=c[3*b+0]*y,E=c[3*b+1],I=c[3*b+0]*A;l.push(_,E,I)}}for(let v=0;v<t;v++)for(let w=0;w<e.length-1;w++){let y=w+v*e.length,A=y,b=y+e.length,_=y+e.length+1,E=y+1;r.push(A,b,E),r.push(_,E,b)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Vr=class i extends So{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Lt=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,f=t/c,u=[],m=[],S=[],g=[];for(let p=0;p<h;p++){let v=p*f-a;for(let w=0;w<l;w++){let y=w*d-r;m.push(y,-v,0),S.push(0,0,1),g.push(w/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let w=v+l*p,y=v+l*(p+1),A=v+1+l*(p+1),b=v+1+l*p;u.push(w,y,b),u.push(y,A,b)}this.setIndex(u),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(S,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hr=class i extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/s,u=new U,m=new ce;for(let S=0;S<=s;S++){for(let g=0;g<=n;g++){let p=r+g/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,h.push(m.x,m.y)}d+=f}for(let S=0;S<s;S++){let g=S*(n+1);for(let p=0;p<n;p++){let v=p+g,w=v,y=v+n+1,A=v+n+2,b=v+1;o.push(w,y,b),o.push(y,A,b)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Bs=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new U,f=new U,u=[],m=[],S=[],g=[];for(let p=0;p<=n;p++){let v=[],w=p/n,y=a+w*o,A=e*Math.cos(y),b=Math.sqrt(e*e-A*A),_=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let I=E/t,C=s+I*r;d.x=-b*Math.cos(C),d.y=A,d.z=b*Math.sin(C),m.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),g.push(I+_,1-w),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let w=h[p][v+1],y=h[p][v],A=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&u.push(w,y,b),(p!==n-1||c<Math.PI)&&u.push(y,A,b)}this.setIndex(u),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(S,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zs=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],f=new U,u=new U,m=new U;for(let S=0;S<=n;S++){let g=a+S/n*o;for(let p=0;p<=s;p++){let v=p/s*r;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let g=1;g<=s;g++){let p=(s+1)*S+g-1,v=(s+1)*(S-1)+g-1,w=(s+1)*(S-1)+g,y=(s+1)*S+g;c.push(p,v,y),c.push(v,w,y)}this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ks=class i extends Ft{constructor(e=new Or(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,c=new U,l=new ce,h=new U,d=[],f=[],u=[],m=[];S(),this.setIndex(m),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(u,2));function S(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),v(),p()}function g(w){h=e.getPointAt(w/t,h);let y=a.normals[w],A=a.binormals[w];for(let b=0;b<=s;b++){let _=b/s*Math.PI*2,E=Math.sin(_),I=-Math.cos(_);c.x=I*y.x+E*A.x,c.y=I*y.y+E*A.y,c.z=I*y.z+E*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){let A=(s+1)*(w-1)+(y-1),b=(s+1)*w+(y-1),_=(s+1)*w+y,E=(s+1)*(w-1)+y;m.push(A,b,E),m.push(b,_,E)}}function v(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)l.x=w/t,l.y=y/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new wo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(pu(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(pu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=ss(i[t]);for(let s in n)e[s]=n[s]}return e}function pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var In={clone:ss,merge:un},pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gs=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wr=class extends $n{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Xr=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ro=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function no(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,o=2*t-n;break;case Pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cc:a=e,c=2*n-t;break;case Pc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(s-t),S=m*m,g=S*m,p=-f*g+2*f*S-f*m,v=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*m+1,w=(-1-u)*g+(1.5+u)*S+.5*m,y=u*g-u*S;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+v*a[l+A]+w*a[c+A]+y*a[d+A];return r}},Io=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},Lo=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(s-t),S=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*S+a[c+g]*m;return r}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let S=a[l+m],g=a[c+m],p=u*f+m*2,v=d[p],w=d[p+1],y=e*f+m*2,A=h[y],b=h[y+1],_=_p(n,t,v,A,s);r[m]=hd(_,S,w,b,g)}return r}};function hd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function gp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _p(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=hd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=gp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),no(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break;case Ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return ro;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;no(this.settings)&&(mu(this.settings.inTangents,e),mu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;no(this.settings)&&(gu(this.settings.inTangents,e),gu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&af(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let S=t[d+m];if(S!==t[f+m]||S!==t[u+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,no(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function gu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=_o;var Di=class extends Mn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=vr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}};No.prototype.ValueTypeName="color";var Uo=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}};Uo.prototype.ValueTypeName="number";var Fo=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Yn.slerpFlat(r,0,a,l-o,a,l,c);return r}},qr=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Mn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=vr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Mn{constructor(e,t,n,s){super(e,t,n,s)}};Oo.prototype.ValueTypeName="vector";var oo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_u(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_u(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _u(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Bo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let u=l[d],m=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ud=new Bo,Vs=class{constructor(e){this.manager=e!==void 0?e:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=new WeakMap,zo=class extends Vs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=oo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ss.get(a);d===void 0&&(d=[],Ss.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Rs("img");function c(){h(),t&&t(this);let d=Ss.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Ss.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),oo.remove(`image:${e}`);let f=Ss.get(this)||[];for(let u=0;u<f.length;u++){let m=f[u];m.onError&&m.onError(d)}Ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oo.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Hs=class extends Vs{constructor(e){super(e)}load(e,t,n,s){let r=new cn,a=new zo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ws=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yr=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wc=new ut,xu=new U,vu=new U,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===As||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},io=new U,so=new Yn,Wn=new U,Jr=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(io,so,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(io,so,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new U,yu=new ce,Mu=new ce,ln=class extends Jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,yu,Mu),t.subVectors(Mu,yu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nc=class extends Zr{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Ki=class extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends Jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends Zr{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var bs=-90,Ts=1,Xs=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(bs,Ts,e,t);s.layers=this.layers,this.add(s);let r=new ln(bs,Ts,e,t);r.layers=this.layers,this.add(r);let a=new ln(bs,Ts,e,t);a.layers=this.layers,this.add(a);let o=new ln(bs,Ts,e,t);o.layers=this.layers,this.add(o);let c=new ln(bs,Ts,e,t);c.layers=this.layers,this.add(c);let l=new ln(bs,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ko=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Kr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function xp(){this._document.hidden===!1&&this.reset()}var lh="\\[\\]\\.:\\/",vp=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",yp="[^"+lh.replace("\\.","")+"]",Mp=/((?:WC+[\/:])*)/.source.replace("WC",ch),Sp=/(WCOD+)?/.source.replace("WCOD",yp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Ep=new RegExp("^"+Mp+Sp+bp+Tp+"$"),wp=["material","materials","bones","map"],Fc=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(e){let t=Ep.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Fc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Px=new Float32Array(1);var Su=new ut,jr=class{constructor(e,t,n=0,s=1/0){this.ray=new wr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Su.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(bu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Oc(e[s],this,n,t);return n.sort(bu),n}};function bu(i,e){return i.distance-e.distance}function Oc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Oc(r[a],e,t,!0)}}var Bc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function hh(i,e,t,n){let s=Ap(n);switch(t){case $c:return i*e;case Jo:return i*e/s.components*s.byteLength;case $o:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case Ko:return i*e*2/s.components*s.byteLength;case Kc:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(i,16)*Math.max(e,8)/4;case Qo:case tl:return Math.max(i,8)*Math.max(e,8)/2;case il:case sl:case al:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rl:case da:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case Tl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(i){switch(i){case hn:case qc:return{byteLength:1,components:1};case Js:case Yc:case Qt:return{byteLength:2,components:1};case Yo:case Zo:return{byteLength:2,components:4};case Gn:case qo:case Pn:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Np(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],S=d[u];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++f,d[f]=S)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let S=d[u];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Up,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:Bp,alphatest_fragment:zp,alphatest_pars_fragment:kp,aomap_fragment:Gp,aomap_pars_fragment:Vp,batching_pars_vertex:Hp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Qp,color_fragment:em,color_pars_fragment:tm,color_pars_vertex:nm,color_vertex:im,common:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:am,displacementmap_vertex:om,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:wm,envmap_vertex:gm,fog_vertex:_m,fog_pars_vertex:xm,fog_fragment:vm,fog_pars_fragment:ym,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Em,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Im,lights_physical_pars_fragment:Lm,lights_fragment_begin:Dm,lights_fragment_maps:Nm,lights_fragment_end:Um,lightprobes_pars_fragment:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:km,map_fragment:Gm,map_pars_fragment:Vm,map_particle_fragment:Hm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:$m,morphtarget_vertex:Km,normal_fragment_begin:jm,normal_fragment_maps:Qm,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:_0,shadowmap_vertex:x0,shadowmask_pars_fragment:v0,skinbase_vertex:y0,skinning_pars_vertex:M0,skinning_vertex:S0,skinnormal_vertex:b0,specularmap_fragment:T0,specularmap_pars_fragment:E0,tonemapping_fragment:w0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:I0,uv_vertex:L0,worldpos_vertex:D0,background_vert:N0,background_frag:U0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:z0,depth_vert:k0,depth_frag:G0,distance_vert:V0,distance_frag:H0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:$0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Q0,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},De={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Qn={basic:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new nt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:un([De.points,De.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:un([De.common,De.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:un([De.sprite,De.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:un([De.common,De.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:un([De.lights,De.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Qn.physical={uniforms:un([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Cl={r:0,b:0,g:0},pg=new ut,Nd=new tt;Nd.set(-1,0,0,0,1,0,0,0,1);function mg(i,e,t,n,s,r){let a=new nt(0),o=s===!0?0:1,c,l,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=e.get(w,y)}return w}function m(v){let w=!1,y=u(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,w){let y=u(w);y&&y.isCubeTexture?(l===void 0&&(l=new Ct(new Rn(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:ss(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Nd),l.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ct(new Lt(2,2),new qt({name:"BackgroundMaterial",uniforms:ss(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,w){v.getRGB(Cl,oh(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:S,dispose:p}}function gg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(D,B,Z,P,q){let j=!1,Y=d(D,P,Z,B);r!==Y&&(r=Y,l(r.object)),j=u(D,P,Z,q),j&&m(D,P,Z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(D,B,Z,P),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,B,Z,P){let q=P.wireframe===!0,j=n[B.id];j===void 0&&(j={},n[B.id]=j);let Y=D.isInstancedMesh===!0?D.id:0,N=j[Y];N===void 0&&(N={},j[Y]=N);let k=N[Z.id];k===void 0&&(k={},N[Z.id]=k);let J=k[q];return J===void 0&&(J=f(c()),k[q]=J),J}function f(D){let B=[],Z=[],P=[];for(let q=0;q<t;q++)B[q]=0,Z[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,B,Z,P){let q=r.attributes,j=B.attributes,Y=0,N=Z.getAttributes();for(let k in N)if(N[k].location>=0){let re=q[k],Ie=j[k];if(Ie===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Ie=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Ie=D.instanceColor)),re===void 0||re.attribute!==Ie||Ie&&re.data!==Ie.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function m(D,B,Z,P){let q={},j=B.attributes,Y=0,N=Z.getAttributes();for(let k in N)if(N[k].location>=0){let re=j[k];re===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));let Ie={};Ie.attribute=re,re&&re.data&&(Ie.data=re.data),q[k]=Ie,Y++}r.attributes=q,r.attributesNum=Y,r.index=P}function S(){let D=r.newAttributes;for(let B=0,Z=D.length;B<Z;B++)D[B]=0}function g(D){p(D,0)}function p(D,B){let Z=r.newAttributes,P=r.enabledAttributes,q=r.attributeDivisors;Z[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),q[D]!==B&&(i.vertexAttribDivisor(D,B),q[D]=B)}function v(){let D=r.newAttributes,B=r.enabledAttributes;for(let Z=0,P=B.length;Z<P;Z++)B[Z]!==D[Z]&&(i.disableVertexAttribArray(Z),B[Z]=0)}function w(D,B,Z,P,q,j,Y){Y===!0?i.vertexAttribIPointer(D,B,Z,q,j):i.vertexAttribPointer(D,B,Z,P,q,j)}function y(D,B,Z,P){S();let q=P.attributes,j=Z.getAttributes(),Y=B.defaultAttributeValues;for(let N in j){let k=j[N];if(k.location>=0){let J=q[N];if(J===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let re=J.normalized,Ie=J.itemSize,Ue=e.get(J);if(Ue===void 0)continue;let Q=Ue.buffer,ue=Ue.type,Ee=Ue.bytesPerElement,Oe=ue===i.INT||ue===i.UNSIGNED_INT||J.gpuType===qo;if(J.isInterleavedBufferAttribute){let ye=J.data,Ge=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,xt=J.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ve=0;Ve<k.locationSize;Ve++)p(k.location+Ve,ye.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)g(k.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ve=0;Ve<k.locationSize;Ve++)w(k.location+Ve,Ie/k.locationSize,ue,re,Ge*Ee,(xt+Ie/k.locationSize*Ve)*Ee,Oe)}else{if(J.isInstancedBufferAttribute){for(let ye=0;ye<k.locationSize;ye++)p(k.location+ye,J.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<k.locationSize;ye++)g(k.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ye=0;ye<k.locationSize;ye++)w(k.location+ye,Ie/k.locationSize,ue,re,Ie*Ee,Ie/k.locationSize*ye*Ee,Oe)}}else if(Y!==void 0){let re=Y[N];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(k.location,re);break;case 3:i.vertexAttrib3fv(k.location,re);break;case 4:i.vertexAttrib4fv(k.location,re);break;default:i.vertexAttrib1fv(k.location,re)}}}}v()}function A(){I();for(let D in n){let B=n[D];for(let Z in B){let P=B[Z];for(let q in P){let j=P[q];for(let Y in j)h(j[Y].object),delete j[Y];delete P[q]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let B=n[D.id];for(let Z in B){let P=B[Z];for(let q in P){let j=P[q];for(let Y in j)h(j[Y].object),delete j[Y];delete P[q]}}delete n[D.id]}function _(D){for(let B in n){let Z=n[B];for(let P in Z){let q=Z[P];if(q[D.id]===void 0)continue;let j=q[D.id];for(let Y in j)h(j[Y].object),delete j[Y];delete q[D.id]}}}function E(D){for(let B in n){let Z=n[B],P=D.isInstancedMesh===!0?D.id:0,q=Z[P];if(q!==void 0){for(let j in q){let Y=q[j];for(let N in Y)h(Y[N].object),delete Y[N];delete q[j]}delete Z[P],Object.keys(Z).length===0&&delete n[B]}}}function I(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function _g(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Sn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==hn&&_!==Pn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:b}}function vg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bn,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,w=v*4,y=p.clippingState||null;c.value=y,y=h(m,f,w,u);for(let A=0;A!==w;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,m){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=c.value,m!==!0||g===null){let p=u+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,y=u;w!==S;++w,y+=4)a.copy(d[w]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}var ga=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:jt});r.uniforms.tEquirect.value=t;let a=new Ct(s,r),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=dn),new Xs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},dd=256,yg=3,Mg=20,Ud=256,Fd=16,Sg=3,bg=new U,Tg=new nt,js=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new Ct(new Rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=bg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,m=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(Tg));let g=new Xs(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=m,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(dd,sh(e))}_fromTexture(e,t){e.mapping===ns||e.mapping===Zs?this._setSize(e.image.length===0?dd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=fd(e,!1,!1),n=Math.log2(e)-yg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ns||e.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Eg(),this._integrationMaterial=wg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Fd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Sg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Ud*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ag());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function fd(i,e,t){return new ga(i,{minFilter:pi,generateMipmaps:e,type:Qt,colorSpace:yr,depthBuffer:t})}function _a(i,e,t){return new qt({name:i,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:rn,blending:jt,depthTest:!1,depthWrite:!1})}function Eg(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ud}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wg(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ag(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function pd(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function md(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Ho||u===Wo)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let S=new ga(m.height);return S.fromEquirectangularTexture(i,f),e.set(f,S),f.addEventListener("dispose",l),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Ho||u===Wo,S=u===ns||u===Zs;if(m||S){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new js(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return m&&v&&v.height>0||S&&v&&c(v)?(n===null&&(n=new js(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,u){return u===Ho?f.mapping=ns:u===Wo&&(f.mapping=Zs),f}function c(f){let u=0,m=6;for(let S=0;S<m;S++)f[S]!==void 0&&u++;return u===m}function l(f){let u=f.target;u.removeEventListener("dispose",l);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Cg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&pr("WebGLRenderer: "+n+" extension not supported."),s}}}function Pg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let S=r.get(m);S&&(e.remove(S),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(m){let S=m.attributes;for(let g in S)e.update(S[g],i.ARRAY_BUFFER)}function d(m){let S=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=S!==null?S.array.length:g.array.length/3-1,w=g.count>=65535?Er:Tr,y=new w(Math.ceil(v/3)*6,1),A=y.array;if(S!==null){let _=S.array;p=S.version;for(let E=0,I=0;E<v;E+=3){let C=_[E+0],D=_[E+1],B=_[E+2];A[I++]=C,A[I++]=D,A[I++]=D,A[I++]=B,A[I++]=B,A[I++]=C}}else{p=g.version;for(let _=0,E=0;_<v;_+=3){let I=_+0,C=_+1,D=_+2;A[E++]=I,A[E++]=C,A[E++]=C,A[E++]=D,A[E++]=D,A[E++]=I}}y.version=p;let b=r.get(m);b&&e.remove(b),r.set(m,y)}function f(m){let S=r.get(m);if(S){let g=m.index;g!==null&&S.version<g.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in s){let S=s[m].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function Ig(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let S=0;for(let g=0;g<u;g++)S+=f[g];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Lg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dg(i,e,t){let n=new WeakMap,s=new Nt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;u===!0&&(w=1),m===!0&&(w=2),S===!0&&(w=3);let y=o.attributes.position.count*w,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*A*4*d),_=new Sr(b,y,A,d);_.type=Pn,_.needsUpdate=!0;let E=w*4;for(let C=0;C<d;C++){let D=g[C],B=p[C],Z=v[C],P=y*A*4*C;for(let q=0;q<D.count;q++){let j=q*E;u===!0&&(s.fromBufferAttribute(D,q),b[P+j+0]=s.x,b[P+j+1]=s.y,b[P+j+2]=s.z,b[P+j+3]=0),m===!0&&(s.fromBufferAttribute(B,q),b[P+j+4]=s.x,b[P+j+5]=s.y,b[P+j+6]=s.z,b[P+j+7]=0),S===!0&&(s.fromBufferAttribute(Z,q),b[P+j+8]=s.x,b[P+j+9]=s.y,b[P+j+10]=s.z,b[P+j+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:_,size:new ce(y,A)},n.set(o,f),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let S=0;S<l.length;S++)u+=l[S];let m=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ng(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ug={[ta]:"LINEAR_TONE_MAPPING",[na]:"REINHARD_TONE_MAPPING",[ia]:"CINEON_TONE_MAPPING",[ts]:"ACES_FILMIC_TONE_MAPPING",[ra]:"AGX_TONE_MAPPING",[aa]:"NEUTRAL_TONE_MAPPING",[sa]:"CUSTOM_TONE_MAPPING"};function Fg(i,e,t,n,s,r){let a=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ft;h.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new at([0,2,0,0,2,0],2));let d=new Gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ct(h,d),u=new ji(-1,1,1,-1,0,1),m=null,S=null,g=!1,p,v=null,w=[],y=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),c!==null&&c.setSize(A,b);for(let _=0;_<w.length;_++){let E=w[_];E.setSize&&E.setSize(A,b)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;let b=a.width,_=a.height;w.length>0&&o===null&&(o=new Wt(b,_,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),c=new Wt(b,_,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&w.some(I=>I.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new kn(b,_),r===!0&&(l.format=Vn,l.type=mi)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let I=0;I<w.length;I++){let C=w[I];C.setSize&&C.setSize(b,_),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,b){if(g||A.toneMapping===Kn&&w.length===0)return!1;if(v=b,b!==null){let _=b.width,E=b.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return y===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Kn,!0},this.hasRenderPass=function(){return y},this.end=function(A,b){A.toneMapping=p,g=!0;let _=a,E=o;for(let I=0;I<w.length;I++){let C=w[I];C.enabled!==!1&&(C.render(A,E,_,b),C.needsSwap!==!1&&(_=E,E=E===o?c:o))}if(m!==A.outputColorSpace||S!==A.toneMapping){m=A.outputColorSpace,S=A.toneMapping,d.defines={},_t.getTransfer(m)===Tt&&(d.defines.SRGB_TRANSFER="");let I=Ug[S];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(f,u),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Od=new cn,Bd=new kn(1,1),zd=new Pr(1),kd=new Sr,Gd=new yo,Vd=new Rr,gd=[],_d=[],xd=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ll(i,e){let t=_d[e];t===void 0&&(t=new Int32Array(e),_d[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Zt(t,n)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),Zt(t,n)}}function Hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;xd.set(n),i.uniformMatrix4fv(this.addr,!1,xd),Zt(t,n)}}function Wg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Dl(i){return i.version===0&&(i.compareFunction=eh,i.needsUpdate=!0),i}function jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Dl(Bd):r=Od,t.setTexture2D(e||r,s)}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gd,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Dl(zd):r=Vd,t.setTextureCube(e||r,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kd,s)}function n_(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return $g;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(i,e){i.uniform1fv(this.addr,e)}function s_(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function r_(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function a_(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function o_(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function l_(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function c_(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function h_(i,e){i.uniform1iv(this.addr,e)}function u_(i,e){i.uniform2iv(this.addr,e)}function d_(i,e){i.uniform3iv(this.addr,e)}function f_(i,e){i.uniform4iv(this.addr,e)}function p_(i,e){i.uniform1uiv(this.addr,e)}function m_(i,e){i.uniform2uiv(this.addr,e)}function g_(i,e){i.uniform3uiv(this.addr,e)}function __(i,e){i.uniform4uiv(this.addr,e)}function x_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dl(Bd):a=Od;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function v_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gd,r[a])}function y_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Dl(zd):a=Vd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function M_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kd,r[a])}function S_(i){switch(i){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n_(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Md(i,e){i.seq.push(e),i.map[e.id]=e}function b_(i,e,t){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Md(t,l===void 0?new fh(o,i,e):new ph(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new mh(o),Md(t,d)),t=d}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);b_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Sd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var T_=37297,E_=0;function w_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var bd=new tt;function A_(i){_t._getMatrix(bd,_t.workingColorSpace,i);let e=`mat3( ${bd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Mr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+w_(i.getShaderSource(e),o)}else return r}function R_(i,e){let t=A_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var C_={[ta]:"Linear",[na]:"Reinhard",[ia]:"Cineon",[ts]:"ACESFilmic",[ra]:"AgX",[aa]:"Neutral",[sa]:"Custom"};function P_(i,e){let t=C_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pl=new U;function I_(){_t.getLuminanceCoefficients(Pl);let i=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function D_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ma(i){return i!==""}function Ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(U_,F_)}function F_(i,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gh(t)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(O_,B_)}function B_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var z_={[Qi]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function k_(i){return z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G_={[Zs]:"ENVMAP_MODE_REFRACTION"};function V_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H_={[Vo]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function W_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H_[i.combine]||"ENVMAP_BLENDING_NONE"}function X_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=k_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=V_(t),d=W_(t),f=L_(t),u=D_(r),m=s.createProgram(),S,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ma).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(ma).join(`
`),g.length>0&&(g+=`
`)):(S=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),g=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?dt.tonemapping_pars_fragment:"",t.toneMapping!==Kn?P_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,R_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=gh(a),a=Ed(a,t),a=wd(a,t),o=gh(o),o=Ed(o,t),o=wd(o,t),a=Ad(a),o=Ad(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+S+a,w=p+g+o,y=Sd(s,s.VERTEX_SHADER,v),A=Sd(s,s.FRAGMENT_SHADER,w);s.attachShader(m,y),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(m)||"",B=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(A)||"",P=D.trim(),q=B.trim(),j=Z.trim(),Y=!0,N=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,A);else{let k=Td(s,y,"vertex"),J=Td(s,A,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+k+`
`+J)}else P!==""?Ke("WebGLProgram: Program Info Log:",P):(q===""||j==="")&&(N=!1);N&&(C.diagnostics={runnable:Y,programLog:P,vertexShader:{log:q,prefix:S},fragmentShader:{log:j,prefix:g}})}s.deleteShader(y),s.deleteShader(A),_=new Ks(s,m),E=N_(s,m)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,T_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}var q_=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}};function Y_(i){return i===Fi||i===da||i===fa}function Z_(i,e,t,n,s,r){let a=new Ls,o=new _h,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,E,I,C,D,B){let Z=C.fog,P=D.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||q,j),N=f[_.type],k=n.precision;_.precision!==null&&(k=n.getMaxPrecision(_.precision),k!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=J!==void 0?J.length:0,Ie=0;P.morphAttributes.position!==void 0&&(Ie=1),P.morphAttributes.normal!==void 0&&(Ie=2),P.morphAttributes.color!==void 0&&(Ie=3);let Ue,Q,ue,Ee;if(N){let Ae=Qn[N];Ue=Ae.vertexShader,Q=Ae.fragmentShader}else{Ue=_.vertexShader,Q=_.fragmentShader;let Ae=o.getVertexShaderStage(_),Et=o.getFragmentShaderStage(_);o.update(_,Ae,Et),ue=Ae.id,Ee=Et.id}let Oe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ge=D.isInstancedMesh===!0,xt=D.isBatchedMesh===!0,Ve=!!_.map,Je=!!_.matcap,ot=!!Y,ae=ot&&Y.isPMREMTexture===!0,me=!!_.aoMap,ge=!!_.lightMap,Pe=!!_.bumpMap&&_.wireframe===!1,be=!!_.normalMap,$e=!!_.displacementMap,Be=!!_.emissiveMap,it=!!_.metalnessMap,lt=!!_.roughnessMap,st=_.anisotropy>0,O=_.clearcoat>0,Rt=_.diffuseRoughness>0,Qe=_.dispersion>0,ht=_.retroreflectivity>0,xe=_.iridescence>0,St=_.sheen>0,We=_.transmission>0,qe=st&&!!_.anisotropyMap,R=O&&!!_.clearcoatMap,M=O&&!!_.clearcoatNormalMap,W=O&&!!_.clearcoatRoughnessMap,le=Rt&&!!_.diffuseRoughnessMap,se=xe&&!!_.iridescenceMap,_e=xe&&!!_.iridescenceThicknessMap,ve=St&&!!_.sheenColorMap,ee=St&&!!_.sheenRoughnessMap,ne=!!_.specularMap,Me=!!_.specularColorMap,L=!!_.specularIntensityMap,ie=We&&!!_.transmissionMap,te=We&&!!_.thicknessMap,Te=!!_.gradientMap,de=!!_.alphaMap,Se=_.alphaTest>0,Xe=!!_.alphaHash,ct=!!_.extensions,pe=Kn;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Ye=ae?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,rt={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Q,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:xt,batchingColor:xt&&D._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:Je,envMap:ot,envMapMode:ot&&Y.mapping,envMapPMREM:ae,envMapMaxLod:ae?Ye.length-1:null,envMapSize:ae?Ye[0].width:null,aoMap:me,lightMap:ge,bumpMap:Pe,normalMap:be,displacementMap:$e,emissiveMap:Be,normalMapObjectSpace:be&&_.normalMapType===Xu,normalMapTangentSpace:be&&_.normalMapType===$s,packedNormalMap:be&&_.normalMapType===$s&&Y_(_.normalMap.format),metalnessMap:it,roughnessMap:lt,anisotropy:st,anisotropyMap:qe,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:W,diffuseRoughness:Rt,diffuseRoughnessMap:le,dispersion:Qe,retroreflection:ht,iridescence:xe,iridescenceMap:se,iridescenceThicknessMap:_e,sheen:St,sheenColorMap:ve,sheenRoughnessMap:ee,specularMap:ne,specularColorMap:Me,specularIntensityMap:L,transmission:We,transmissionMap:ie,thicknessMap:te,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Ys&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:Se,alphaHash:Xe,combine:_.combine,mapUv:Ve&&u(_.map.channel),aoMapUv:me&&u(_.aoMap.channel),lightMapUv:ge&&u(_.lightMap.channel),bumpMapUv:Pe&&u(_.bumpMap.channel),normalMapUv:be&&u(_.normalMap.channel),displacementMapUv:$e&&u(_.displacementMap.channel),emissiveMapUv:Be&&u(_.emissiveMap.channel),metalnessMapUv:it&&u(_.metalnessMap.channel),roughnessMapUv:lt&&u(_.roughnessMap.channel),anisotropyMapUv:qe&&u(_.anisotropyMap.channel),clearcoatMapUv:R&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&u(_.sheenRoughnessMap.channel),specularMapUv:ne&&u(_.specularMap.channel),specularColorMapUv:Me&&u(_.specularColorMap.channel),specularIntensityMapUv:L&&u(_.specularIntensityMap.channel),transmissionMapUv:ie&&u(_.transmissionMap.channel),thicknessMapUv:te&&u(_.thicknessMap.channel),alphaMapUv:de&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(be||st),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ve||de),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&be===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&_t.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:Be&&_.emissiveMap.isVideoTexture===!0&&_t.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function S(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(E,_),p(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function p(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let E=f[_.type],I;if(E){let C=Qn[E];I=In.clone(C.uniforms)}else I=_.uniforms;return I}function w(_,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new X_(i,E,_,s),l.push(I),h.set(E,I)),I}function y(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:b}}function J_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,S,g,p){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:p},i[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=a(f),v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=g,v.group=p),e++,v}function c(f,u,m,S,g,p,v){v.reversedDepth===!0&&(g=-g);let w=o(f,u,m,S,g,p);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):t.push(w)}function l(f,u,m,S,g,p){let v=o(f,u,m,S,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||$_),n.length>1&&n.sort(u||Cd),s.length>1&&s.sort(u||Cd)}function d(){for(let f=e,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function K_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Pd,i.set(n,[a])):s>=r.length?(a=new Pd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new nt};break;case"SpotLight":t={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ex=0;function tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nx(i){let e=new j_,t=Q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new ut,a=new ut;function o(l){let h=0,d=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,m=0,S=0,g=0,p=0,v=0,w=0,y=0,A=0,b=0,_=0,E=0,I=0,C=0;l.sort(tx);for(let B=0,Z=l.length;B<Z;B++){let P=l[B],q=P.color,j=P.intensity,Y=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=q.r*j,d+=q.g*j,f+=q.b*j;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],j);C++}else if(P.isSunLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,re=t.get(P);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=re,n.sunShadowMap[m]=N;let Ie=J.getViewportCount();for(let Ue=0;Ue<Ie;Ue++)n.sunShadowMatrix[S+Ue]=J.getMatrix(Ue),n.sunShadowCascade[S+Ue]=J._cascadeData[Ue];S+=Ie,m++}n.sun[u]=k,u++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,re=t.get(P);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.directionalShadow[g]=re,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=P.shadow.matrix,A++}n.directional[g]=k,g++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(q).multiplyScalar(j),k.distance=Y,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[v]=k;let J=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,J.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[v]=J.matrix,P.castShadow){let re=t.get(P);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=N,_++}v++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(q).multiplyScalar(j),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=k,w++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let J=P.shadow,re=t.get(P);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=P.shadow.matrix,b++}n.point[p]=k,p++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(j),k.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[y]=k,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==A||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==E||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=v,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,D.sunLength=u,D.directionalLength=g,D.pointLength=p,D.spotLength=v,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=A,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=E,D.numLightProbes=C,n.version=ex++)}function c(l,h){let d=0,f=0,u=0,m=0,S=0,g=0,p=h.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){let y=l[v];if(y.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(y.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let A=n.point[u];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Id(i){let e=new nx(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function ix(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Id(i),e.set(s,[o])):r>=a.length?(o=new Id(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ax=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ox=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ld=new ut,pa=new U,dh=new U;function lx(i,e,t){let n=new Ri,s=new ce,r=new ce,a=new Nt,o=new Ro,c=new Co,l={},h=t.maxTextureSize,d={[Ui]:rn,[rn]:Ui,[fn]:fn},f=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Ft;m.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ct(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qi;let p=this.type;this.render=function(b,_,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===wu&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qi);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(jt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Z=p!==this.type;Z&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(q=>q.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,q=b.length;P<q;P++){let j=b[P],Y=j.shadow;if(Y===void 0){Ke("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let N=Y.getFrameExtents();s.multiply(N),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,Y.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=k,Y.map===null||Z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===qs){if(j.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Wt(s.x,s.y,{format:Fi,type:Qt,minFilter:dn,magFilter:dn,generateMipmaps:!1}),Y.map.texture.name=j.name+".shadowMap",Y.map.depthTexture=new kn(s.x,s.y,Pn),Y.map.depthTexture.name=j.name+".shadowMapDepth",Y.map.depthTexture.format=di,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=zt,Y.map.depthTexture.magFilter=zt}else j.isPointLight?(Y.map=new ga(s.x),Y.map.depthTexture=new Pr(s.x,Gn)):(Y.map=new Wt(s.x,s.y),Y.map.depthTexture=new kn(s.x,s.y,Gn)),Y.map.depthTexture.name=j.name+".shadowMap",Y.map.depthTexture.format=di,this.type===Qi?(Y.map.depthTexture.compareFunction=k?Qc:jc,Y.map.depthTexture.minFilter=dn,Y.map.depthTexture.magFilter=dn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=zt,Y.map.depthTexture.magFilter=zt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let J=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();j.isPointLight!==!0&&Y.updateMatrices(j,E);let re=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:E.layers;for(let Ie=0;Ie<J;Ie++){let Ue=Y.getCamera(Ie);if(j.isPointLight){let Q=Y.camera,ue=Y.matrix,Ee=j.distance||Q.far;Ee!==Q.far&&(Q.far=Ee,Q.updateProjectionMatrix()),pa.setFromMatrixPosition(j.matrixWorld),Q.position.copy(pa),dh.copy(Q.position),dh.add(ax[Ie]),Q.up.copy(ox[Ie]),Q.lookAt(dh),Q.updateMatrixWorld(),ue.makeTranslation(-pa.x,-pa.y,-pa.z),Ld.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Ld,Q.coordinateSystem,Q.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(Y.map),i.clear());let Q=Y.getViewport(Ie);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),B.viewport(a)}n=Y.getFrustum(Ie),y(_,E,Ue,j,re,this.type)}Y.isPointLightShadow!==!0&&this.type===qs&&v(Y,E),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(I,C,D)};function v(b,_){let E=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null?b.mapPass=new Wt(s.x,s.y,{format:Fi,type:Qt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,E,f,S,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,E,u,S,null)}function w(b,_,E,I){let C=null,D=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=E.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=C.uuid,Z=_.uuid,P=l[B];P===void 0&&(P={},l[B]=P);let q=P[Z];q===void 0&&(q=C.clone(),P[Z]=q,_.addEventListener("dispose",A)),C=q}if(C.visible=_.visible,C.wireframe=_.wireframe,I===qs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=E}return C}function y(b,_,E,I,C,D){if(b.visible===!1)return;if(b.layers.test(C)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===qs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);let P=e.update(b),q=b.material;if(Array.isArray(q)){let j=P.groups;for(let Y=0,N=j.length;Y<N;Y++){let k=j[Y],J=q[k.materialIndex];if(J&&J.visible){let re=w(b,J,I,D);b.onBeforeShadow(i,b,_,E,P,re,k),i.renderBufferDirect(E,null,P,re,b,k),b.onAfterShadow(i,b,_,E,P,re,k)}}}else if(q.visible){let j=w(b,q,I,D);b.onBeforeShadow(i,b,_,E,P,j,null),i.renderBufferDirect(E,null,P,j,b,null),b.onAfterShadow(i,b,_,E,P,j,null)}}let Z=b.children;for(let P=0,q=Z.length;P<q;P++)y(Z[P],_,E,I,C,D)}function A(b){b.target.removeEventListener("dispose",A);for(let E in l){let I=l[E],C=b.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function cx(i,e){function t(){let L=!1,ie=new Nt,te=null,Te=new Nt(0,0,0,0);return{setMask:function(de){te!==de&&!L&&(i.colorMask(de,de,de,de),te=de)},setLocked:function(de){L=de},setClear:function(de,Se,Xe,ct,pe){pe===!0&&(de*=ct,Se*=ct,Xe*=ct),ie.set(de,Se,Xe,ct),Te.equals(ie)===!1&&(i.clearColor(de,Se,Xe,ct),Te.copy(ie))},reset:function(){L=!1,te=null,Te.set(-1,0,0,0)}}}function n(){let L=!1,ie=!1,te=null,Te=null,de=null;return{setReversed:function(Se){if(ie!==Se){let Xe=e.get("EXT_clip_control");Se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ie=Se;let ct=de;de=null,this.setClear(ct)}},getReversed:function(){return ie},setTest:function(Se){Se?ye(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(Se){te!==Se&&!L&&(i.depthMask(Se),te=Se)},setFunc:function(Se){if(ie&&(Se=nd[Se]),Te!==Se){switch(Se){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Se}},setLocked:function(Se){L=Se},setClear:function(Se){de!==Se&&(de=Se,ie&&(Se=1-Se),i.clearDepth(Se))},reset:function(){L=!1,te=null,Te=null,de=null,ie=!1}}}function s(){let L=!1,ie=null,te=null,Te=null,de=null,Se=null,Xe=null,ct=null,pe=null;return{setTest:function(Ye){L||(Ye?ye(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Ye){ie!==Ye&&!L&&(i.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,rt,Ae){(te!==Ye||Te!==rt||de!==Ae)&&(i.stencilFunc(Ye,rt,Ae),te=Ye,Te=rt,de=Ae)},setOp:function(Ye,rt,Ae){(Se!==Ye||Xe!==rt||ct!==Ae)&&(i.stencilOp(Ye,rt,Ae),Se=Ye,Xe=rt,ct=Ae)},setLocked:function(Ye){L=Ye},setClear:function(Ye){pe!==Ye&&(i.clearStencil(Ye),pe=Ye)},reset:function(){L=!1,ie=null,te=null,Te=null,de=null,Se=null,Xe=null,ct=null,pe=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],S=null,g=!1,p=null,v=null,w=null,y=null,A=null,b=null,_=null,E=new nt(0,0,0),I=0,C=!1,D=null,B=null,Z=null,P=null,q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,N=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=N>=1):k.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=N>=2);let J=null,re={},Ie=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Q=new Nt().fromArray(Ie),ue=new Nt().fromArray(Ue);function Ee(L,ie,te,Te){let de=new Uint8Array(4),Se=i.createTexture();i.bindTexture(L,Se),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<te;Xe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ie+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return Se}let Oe={};Oe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(ws),Pe(!1),be(zc),ye(i.CULL_FACE),me(jt);function ye(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ge(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function xt(L,ie){return f[L]!==ie?(i.bindFramebuffer(L,ie),f[L]=ie,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ie),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ve(L,ie){let te=m,Te=!1;if(L){te=u.get(ie),te===void 0&&(te=[],u.set(ie,te));let de=L.textures;if(te.length!==de.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Xe=de.length;Se<Xe;Se++)te[Se]=i.COLOR_ATTACHMENT0+Se;te.length=de.length,Te=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Te=!0);Te&&i.drawBuffers(te)}function Je(L){return S!==L?(i.useProgram(L),S=L,!0):!1}let ot={[Cn]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};ot[Cu]=i.MIN,ot[Pu]=i.MAX;let ae={[es]:i.ZERO,[Iu]:i.ONE,[Lu]:i.SRC_COLOR,[Hc]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[ea]:i.DST_COLOR,[Qr]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function me(L,ie,te,Te,de,Se,Xe,ct,pe,Ye){if(L===jt){g===!0&&(Ge(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),L!==Go){if(L!==p||Ye!==C){if((v!==Cn||A!==Cn)&&(i.blendEquation(i.FUNC_ADD),v=Cn,A=Cn),Ye)switch(L){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kc:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",L);break}else switch(L){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",L);break}w=null,y=null,b=null,_=null,E.set(0,0,0),I=0,p=L,C=Ye}return}de=de||ie,Se=Se||te,Xe=Xe||Te,(ie!==v||de!==A)&&(i.blendEquationSeparate(ot[ie],ot[de]),v=ie,A=de),(te!==w||Te!==y||Se!==b||Xe!==_)&&(i.blendFuncSeparate(ae[te],ae[Te],ae[Se],ae[Xe]),w=te,y=Te,b=Se,_=Xe),(ct.equals(E)===!1||pe!==I)&&(i.blendColor(ct.r,ct.g,ct.b,pe),E.copy(ct),I=pe),p=L,C=!1}function ge(L,ie){L.side===fn?Ge(i.CULL_FACE):ye(i.CULL_FACE);let te=L.side===rn;ie&&(te=!te),Pe(te),L.blending===Ys&&L.transparent===!1?me(jt):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let Te=L.stencilWrite;o.setTest(Te),Te&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function be(L){L!==Tu?(ye(i.CULL_FACE),L!==B&&(L===zc?i.cullFace(i.BACK):L===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),B=L}function $e(L){L!==Z&&(Y&&i.lineWidth(L),Z=L)}function Be(L,ie,te){L?(ye(i.POLYGON_OFFSET_FILL),(P!==ie||q!==te)&&(P=ie,q=te,a.getReversed()&&(ie=-ie,te=-te),i.polygonOffset(ie,te))):Ge(i.POLYGON_OFFSET_FILL)}function it(L){L?ye(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function lt(L){L===void 0&&(L=i.TEXTURE0+j-1),J!==L&&(i.activeTexture(L),J=L)}function st(L,ie,te){te===void 0&&(J===null?te=i.TEXTURE0+j-1:te=J);let Te=re[te];Te===void 0&&(Te={type:void 0,texture:void 0},re[te]=Te),(Te.type!==L||Te.texture!==ie)&&(J!==te&&(i.activeTexture(te),J=te),i.bindTexture(L,ie||Oe[L]),Te.type=L,Te.texture=ie)}function O(){let L=re[J];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function Qe(){try{i.compressedTexImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function ht(){try{i.texSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function xe(){try{i.texSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function St(){try{i.compressedTexSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function qe(){try{i.texStorage2D(...arguments)}catch(L){je("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){je("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function W(){try{i.texImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function le(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function se(L,ie){d[L]!==ie&&(i.pixelStorei(L,ie),d[L]=ie)}function _e(L){Q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function ve(L){ue.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function ee(L,ie){let te=l.get(ie);te===void 0&&(te=new WeakMap,l.set(ie,te));let Te=te.get(L);Te===void 0&&(Te=i.getUniformBlockIndex(ie,L.name),i.uniformBlockBinding(ie,Te,Te),te.set(L,Te))}function ne(L,ie,te){let de=l.get(ie).get(L);c[de]!==te&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,te),c[de]=te)}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,re={},f={},c={},u=new WeakMap,m=[],S=null,g=!1,p=null,v=null,w=null,y=null,A=null,b=null,_=null,E=new nt(0,0,0),I=0,C=!1,D=null,B=null,Z=null,P=null,q=null,Q.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Ge,bindFramebuffer:xt,drawBuffers:Ve,useProgram:Je,setBlending:me,setMaterial:ge,setFlipSided:Pe,setCullFace:be,setLineWidth:$e,setPolygonOffset:Be,setScissorTest:it,activeTexture:lt,bindTexture:st,unbindTexture:O,compressedTexImage2D:Rt,compressedTexImage3D:Qe,texImage2D:M,texImage3D:W,pixelStorei:se,getParameter:le,updateUBOMapping:ee,uniformBlockBinding:ne,texStorage2D:qe,texStorage3D:R,texSubImage2D:ht,texSubImage3D:xe,compressedTexSubImage2D:St,compressedTexSubImage3D:We,scissor:_e,viewport:ve,reset:Me}}function hx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,S=new FinalizationRegistry(R=>m.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return g?new OffscreenCanvas(R,M):Rs("canvas")}function v(R,M,W){let le=1,se=qe(R);if((se.width>W||se.height>W)&&(le=W/Math.max(se.width,se.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let _e=Math.floor(le*se.width),ve=Math.floor(le*se.height);f===void 0&&(f=p(_e,ve));let ee=M?p(_e,ve):f;return ee.width=_e,ee.height=ve,ee.getContext("2d").drawImage(R,0,0,_e,ve),Ke("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+_e+"x"+ve+")."),ee}else return"data"in R&&Ke("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function w(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,M,W,le,se,_e=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;le&&(ve=e.get("EXT_texture_norm16"),ve||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===i.RED&&(W===i.FLOAT&&(ee=i.R32F),W===i.HALF_FLOAT&&(ee=i.R16F),W===i.UNSIGNED_BYTE&&(ee=i.R8),W===i.UNSIGNED_SHORT&&ve&&(ee=ve.R16_EXT),W===i.SHORT&&ve&&(ee=ve.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.R8UI),W===i.UNSIGNED_SHORT&&(ee=i.R16UI),W===i.UNSIGNED_INT&&(ee=i.R32UI),W===i.BYTE&&(ee=i.R8I),W===i.SHORT&&(ee=i.R16I),W===i.INT&&(ee=i.R32I)),M===i.RG&&(W===i.FLOAT&&(ee=i.RG32F),W===i.HALF_FLOAT&&(ee=i.RG16F),W===i.UNSIGNED_BYTE&&(ee=i.RG8),W===i.UNSIGNED_SHORT&&ve&&(ee=ve.RG16_EXT),W===i.SHORT&&ve&&(ee=ve.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RG8UI),W===i.UNSIGNED_SHORT&&(ee=i.RG16UI),W===i.UNSIGNED_INT&&(ee=i.RG32UI),W===i.BYTE&&(ee=i.RG8I),W===i.SHORT&&(ee=i.RG16I),W===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),W===i.UNSIGNED_INT&&(ee=i.RGB32UI),W===i.BYTE&&(ee=i.RGB8I),W===i.SHORT&&(ee=i.RGB16I),W===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),W===i.UNSIGNED_INT&&(ee=i.RGBA32UI),W===i.BYTE&&(ee=i.RGBA8I),W===i.SHORT&&(ee=i.RGBA16I),W===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&ve&&(ee=ve.RGB16_EXT),W===i.SHORT&&ve&&(ee=ve.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),M===i.RGBA){let ne=_e?Mr:_t.getTransfer(se);W===i.FLOAT&&(ee=i.RGBA32F),W===i.HALF_FLOAT&&(ee=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ee=ne===Tt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ve&&(ee=ve.RGBA16_EXT),W===i.SHORT&&ve&&(ee=ve.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(R,M){let W;return R?M===null||M===Gn||M===mi?W=i.DEPTH24_STENCIL8:M===Pn?W=i.DEPTH32F_STENCIL8:M===Js&&(W=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===mi?W=i.DEPTH_COMPONENT24:M===Pn?W=i.DEPTH_COMPONENT32F:M===Js&&(W=i.DEPTH_COMPONENT16),W}function E(R,M){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function I(R){let M=new WeakRef(R);n.get(R).__ref=M,m.add(M),S.register(R,M,M)}function C(R){let M=n.get(R).__ref;M!==void 0&&(m.delete(M),S.unregister(M))}function D(R){Z(R.target)}function B(R){P(R.target)}function Z(R){R.removeEventListener("dispose",D),C(R),j(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function P(R){R.removeEventListener("dispose",B),C(R),N(R)}function q(){for(let R of m){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):Z(M))}m.clear(),d.clear()}function j(R){let M=n.get(R);if(M.__webglInit===void 0)return;let W=R.source,le=u.get(W);if(le){let se=le[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&Y(R),Object.keys(le).length===0&&u.delete(W)}n.remove(R)}function Y(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let W=R.source,le=u.get(W);delete le[M.__cacheKey],a.memory.textures--}function N(R){let M=n.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&Z(W),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let _e=0;_e<M.__webglFramebuffer[se].length;_e++)i.deleteFramebuffer(M.__webglFramebuffer[se][_e]);else i.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)i.deleteFramebuffer(M.__webglFramebuffer[se]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let le=R.textures;for(let se=0,_e=le.length;se<_e;se++){let ve=n.get(le[se]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(le[se])}n.remove(R)}let k=0;function J(){k=0}function re(){return k}function Ie(R){k=R}function Ue(){let R=k;return R>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function Q(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ue(R,M){let W=n.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let le=R.image;if(le===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(W,R,M);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Ee(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ge(W,R,M);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function Oe(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){ge(W,R,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function ye(R,M){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Pe(W,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let Ge={[mn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},xt={[zt]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[oa]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},Ve={[Yu]:i.NEVER,[eh]:i.ALWAYS,[Zu]:i.LESS,[jc]:i.LEQUAL,[Ju]:i.EQUAL,[Qc]:i.GEQUAL,[$u]:i.GREATER,[Ku]:i.NOTEQUAL};function Je(R,M){if(M.type===Pn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===dn||M.magFilter===Xo||M.magFilter===oa||M.magFilter===pi||M.minFilter===dn||M.minFilter===Xo||M.minFilter===oa||M.minFilter===pi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ge[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ge[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ge[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,xt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==oa&&M.minFilter!==pi||M.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",D),I(M));let le=M.source,se=u.get(le);se===void 0&&(se={},u.set(le,se));let _e=Q(M);if(_e!==R.__cacheKey){se[_e]===void 0&&(se[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),se[_e].usedTimes++;let ve=se[R.__cacheKey];ve!==void 0&&(se[R.__cacheKey].usedTimes--,ve.usedTimes===0&&Y(M)),R.__cacheKey=_e,R.__webglTexture=se[_e].texture}return W}function ae(R,M,W){return Math.floor(Math.floor(R/W)/M)}function me(R,M,W,le){let _e=R.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,le,M.data);else{_e.sort((L,ie)=>L.start-ie.start);let ve=0;for(let L=1;L<_e.length;L++){let ie=_e[ve],te=_e[L],Te=ie.start+ie.count,de=ae(te.start,M.width,4),Se=ae(ie.start,M.width,4);te.start<=Te+1&&de===Se&&ae(te.start+te.count-1,M.width,4)===de?ie.count=Math.max(ie.count,te.start+te.count-ie.start):(++ve,_e[ve]=te)}_e.length=ve+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,ie=_e.length;L<ie;L++){let te=_e[L],Te=Math.floor(te.start/4),de=Math.ceil(te.count/4),Se=Te%M.width,Xe=Math.floor(Te/M.width),ct=de,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(i.TEXTURE_2D,0,Se,Xe,ct,pe,W,le,M.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function ge(R,M,W){let le=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=i.TEXTURE_3D);let se=ot(R,M),_e=M.source;t.bindTexture(le,R.__webglTexture,i.TEXTURE0+W);let ve=n.get(_e);if(_e.version!==ve.__version||se===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let pe=_t.getPrimaries(_t.workingColorSpace),Ye=M.colorSpace===gi?null:_t.getPrimaries(M.colorSpace),rt=M.colorSpace===gi||pe===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=v(M.image,!1,s.maxTextureSize);ne=We(M,ne);let Me=r.convert(M.format,M.colorSpace),L=r.convert(M.type),ie=b(M.internalFormat,Me,L,M.normalized,M.colorSpace,M.isVideoTexture);Je(le,M);let te,Te=M.mipmaps,de=M.isVideoTexture!==!0,Se=ve.__version===void 0||se===!0,Xe=_e.dataReady,ct=E(M,ne);if(M.isDepthTexture)ie=_(M.format===Vn,M.type),Se&&(de?t.texStorage2D(i.TEXTURE_2D,1,ie,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ie,ne.width,ne.height,0,Me,L,null));else if(M.isDataTexture)if(Te.length>0){de&&Se&&t.texStorage2D(i.TEXTURE_2D,ct,ie,Te[0].width,Te[0].height);for(let pe=0,Ye=Te.length;pe<Ye;pe++)te=Te[pe],de?Xe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,te.width,te.height,Me,L,te.data):t.texImage2D(i.TEXTURE_2D,pe,ie,te.width,te.height,0,Me,L,te.data);M.generateMipmaps=!1}else de?(Se&&t.texStorage2D(i.TEXTURE_2D,ct,ie,ne.width,ne.height),Xe&&me(M,ne,Me,L)):t.texImage2D(i.TEXTURE_2D,0,ie,ne.width,ne.height,0,Me,L,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){de&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ie,Te[0].width,Te[0].height,ne.depth);for(let pe=0,Ye=Te.length;pe<Ye;pe++)if(te=Te[pe],M.format!==Sn)if(Me!==null)if(de){if(Xe)if(M.layerUpdates.size>0){let rt=hh(te.width,te.height,M.format,M.type);for(let Ae of M.layerUpdates){let Et=te.data.subarray(Ae*rt/te.data.BYTES_PER_ELEMENT,(Ae+1)*rt/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Ae,te.width,te.height,1,Me,Et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,te.width,te.height,ne.depth,Me,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,ie,te.width,te.height,ne.depth,0,te.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,te.width,te.height,ne.depth,Me,L,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,ie,te.width,te.height,ne.depth,0,Me,L,te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{de&&Se&&t.texStorage2D(i.TEXTURE_2D,ct,ie,Te[0].width,Te[0].height);for(let pe=0,Ye=Te.length;pe<Ye;pe++)te=Te[pe],M.format!==Sn?Me!==null?de?Xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,te.width,te.height,Me,te.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,ie,te.width,te.height,0,te.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Xe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,te.width,te.height,Me,L,te.data):t.texImage2D(i.TEXTURE_2D,pe,ie,te.width,te.height,0,Me,L,te.data)}else if(M.isDataArrayTexture)if(de){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ie,ne.width,ne.height,ne.depth),Xe)if(M.layerUpdates.size>0){let pe=hh(ne.width,ne.height,M.format,M.type);for(let Ye of M.layerUpdates){let rt=ne.data.subarray(Ye*pe/ne.data.BYTES_PER_ELEMENT,(Ye+1)*pe/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,ne.width,ne.height,1,Me,L,rt)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Me,L,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,Me,L,ne.data);else if(M.isData3DTexture)de?(Se&&t.texStorage3D(i.TEXTURE_3D,ct,ie,ne.width,ne.height,ne.depth),Xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Me,L,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,Me,L,ne.data);else if(M.isFramebufferTexture){if(Se)if(de)t.texStorage2D(i.TEXTURE_2D,ct,ie,ne.width,ne.height);else{let pe=ne.width,Ye=ne.height;for(let rt=0;rt<ct;rt++)t.texImage2D(i.TEXTURE_2D,rt,ie,pe,Ye,0,Me,L,null),pe>>=1,Ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ne.parentNode!==pe){pe.appendChild(ne),d.add(M),pe.onpaint=Ye=>{let rt=Ye.changedElements;for(let Ae of d)rt.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let rt=i.RGBA,Ae=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,rt,Ae,Et,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(de&&Se){let pe=qe(Te[0]);t.texStorage2D(i.TEXTURE_2D,ct,ie,pe.width,pe.height)}for(let pe=0,Ye=Te.length;pe<Ye;pe++)te=Te[pe],de?Xe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Me,L,te):t.texImage2D(i.TEXTURE_2D,pe,ie,Me,L,te);M.generateMipmaps=!1}else if(de){if(Se){let pe=qe(ne);t.texStorage2D(i.TEXTURE_2D,ct,ie,pe.width,pe.height)}Xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,L,ne)}else t.texImage2D(i.TEXTURE_2D,0,ie,Me,L,ne);w(M)&&M.mipmapsAutoUpdate===!0&&y(le),ve.__version=_e.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,W){if(M.image.length!==6)return;let le=ot(R,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let _e=n.get(se);if(se.version!==_e.__version||le===!0){t.activeTexture(i.TEXTURE0+W);let ve=_t.getPrimaries(_t.workingColorSpace),ee=M.colorSpace===gi?null:_t.getPrimaries(M.colorSpace),ne=M.colorSpace===gi||ve===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Me=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let Ae=0;Ae<6;Ae++)!Me&&!L?ie[Ae]=v(M.image[Ae],!0,s.maxCubemapSize):ie[Ae]=L?M.image[Ae].image:M.image[Ae],ie[Ae]=We(M,ie[Ae]);let te=ie[0],Te=r.convert(M.format,M.colorSpace),de=r.convert(M.type),Se=b(M.internalFormat,Te,de,M.normalized,M.colorSpace),Xe=M.isVideoTexture!==!0,ct=_e.__version===void 0||le===!0,pe=se.dataReady,Ye=E(M,te);Je(i.TEXTURE_CUBE_MAP,M);let rt;if(M.isDepthTexture){if(Se=_(M.format===Vn,M.type),ct)if(Xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,te.width,te.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,te.width,te.height,0,Te,de,null)}else if(Me){Xe&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Se,te.width,te.height);for(let Ae=0;Ae<6;Ae++){rt=ie[Ae].mipmaps;for(let Et=0;Et<rt.length;Et++){let Pt=rt[Et];M.format!==Sn?Te!==null?Xe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et,0,0,Pt.width,Pt.height,Te,Pt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et,Se,Pt.width,Pt.height,0,Pt.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et,0,0,Pt.width,Pt.height,Te,de,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et,Se,Pt.width,Pt.height,0,Te,de,Pt.data)}}}else{if(rt=M.mipmaps,Xe&&ct){rt.length>0&&Ye++;let Ae=qe(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Se,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(L){Xe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ie[Ae].width,ie[Ae].height,Te,de,ie[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,ie[Ae].width,ie[Ae].height,0,Te,de,ie[Ae].data);for(let Et=0;Et<rt.length;Et++){let Tn=rt[Et].image[Ae].image;Xe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et+1,0,0,Tn.width,Tn.height,Te,de,Tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et+1,Se,Tn.width,Tn.height,0,Te,de,Tn.data)}}else{Xe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Te,de,ie[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,Te,de,ie[Ae]);for(let Et=0;Et<rt.length;Et++){let Pt=rt[Et];Xe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et+1,0,0,Te,de,Pt.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Et+1,Se,Te,de,Pt.image[Ae])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),_e.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function be(R,M,W,le,se,_e){let ve=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),ne=b(W.internalFormat,ve,ee,W.normalized,W.colorSpace),Me=n.get(M),L=n.get(W);if(L.__renderTarget=M,!Me.__hasExternalTextures){let ie=Math.max(1,M.width>>_e),te=Math.max(1,M.height>>_e);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,_e,ne,ie,te,M.depth,0,ve,ee,null):t.texImage2D(se,_e,ne,ie,te,0,ve,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,se,L.__webglTexture,0,ht(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,se,L.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(R,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let le=M.depthTexture,se=le&&le.isDepthTexture?le.type:null,_e=_(M.stencilBuffer,se),ve=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(M),_e,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(M),_e,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_e,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,R)}else{let le=M.textures;for(let se=0;se<le.length;se++){let _e=le[se],ve=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),ne=b(_e.internalFormat,ve,ee,_e.normalized,_e.colorSpace);xe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(M),ne,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(M),ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(R,M,W){let le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(M.depthTexture);se.__renderTarget=M;let _e=le?M.depthTexture.image[0]:M.depthTexture.image;(!se.__webglTexture||_e.width!==M.width||_e.height!==M.height)&&(_e.width=M.width,_e.height=M.height,M.depthTexture.needsUpdate=!0),le?ye(M.depthTexture,0):ue(M.depthTexture,0);let ve=se.__webglTexture,ee=ht(M),ne=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Me=M.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===di)xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,ne,ve,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Me,ne,ve,0);else if(M.depthTexture.format===Vn)xe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,ne,ve,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Me,ne,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){let M=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let le=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",se)};le.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=le}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let le=0;le<6;le++)Be(M.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?Be(M.__webglFramebuffer[0],R,0):Be(M.__webglFramebuffer,R,0);else if(W){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=i.createRenderbuffer(),$e(M.__webglDepthbuffer[le],R,!1);else{let se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=M.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,_e)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$e(M.__webglDepthbuffer,R,!1);else{let se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,M,W){let le=n.get(R);M!==void 0&&be(le.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&it(R)}function st(R){let M=R.texture,W=n.get(R),le=n.get(M);R.addEventListener("dispose",B),I(R);let se=R.textures,_e=R.isWebGLCubeRenderTarget===!0,ve=se.length>1;if(ve||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=M.version,a.memory.textures++),_e){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let ne=0;ne<M.mipmaps.length;ne++)W.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else W.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)W.__webglFramebuffer[ee]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ee=0,ne=se.length;ee<ne;ee++){let Me=n.get(se[ee]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&xe(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){let ne=se[ee];W.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);let Me=r.convert(ne.format,ne.colorSpace),L=r.convert(ne.type),ie=b(ne.internalFormat,Me,L,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),te=ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ie,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Je(i.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)be(W.__webglFramebuffer[ee][ne],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else be(W.__webglFramebuffer[ee],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);w(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let ee=0,ne=se.length;ee<ne;ee++){let Me=se[ee],L=n.get(Me),ie=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,L.__webglTexture),Je(ie,Me),be(W.__webglFramebuffer,R,Me,i.COLOR_ATTACHMENT0+ee,ie,0),w(Me)&&y(ie)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,le.__webglTexture),Je(ee,M),M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)be(W.__webglFramebuffer[ne],R,M,i.COLOR_ATTACHMENT0,ee,ne);else be(W.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ee,0);w(M)?y(ee):M.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&it(R)}function O(R){let M=R.textures;for(let W=0,le=M.length;W<le;W++){let se=M[W];if(w(se)&&se.mipmapsAutoUpdate===!0){let _e=A(R),ve=n.get(se).__webglTexture;t.bindTexture(_e,ve),y(_e),t.unbindTexture()}}}let Rt=[];function Qe(R){if(R.samples>0){if(xe(R)===!1){let M=R.textures,W=R.width,le=R.height,se=i.COLOR_BUFFER_BIT,_e=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(R),ee=M.length>1;if(ee)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let L=n.get(M[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,W,le,0,0,W,le,se,i.NEAREST),c===!0&&(Rt.length=0,Rt.push(i.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Rt.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let L=n.get(M[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ht(R){return Math.min(s.maxSamples,R.samples)}function xe(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function We(R,M){let W=R.colorSpace,le=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==yr&&W!==gi&&(_t.getTransfer(W)===Tt?(le!==Sn||se!==hn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",W)),M}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Ue,this.resetTextureUnits=J,this.getTextureUnits=re,this.setTextureUnits=Ie,this.setTexture2D=ue,this.setTexture2DArray=Ee,this.setTexture3D=Oe,this.setTextureCube=ye,this.rebindTextures=lt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe,this.dispose=q}function ux(i,e){function t(n,s=gi){let r,a=_t.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===Kc)return i.RGB;if(n===Sn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl||n===al||n===ol||n===da||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===al)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===da)return r.COMPRESSED_RG11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===Tl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Al||n===fa||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,m=null,S=typeof XRWebGLBinding<"u",g=new vh,p={},v=t.getContextAttributes(),w=null,y=null,A=[],b=[],_=new ce,E=null,I=null,C=new ln;C.viewport=new Nt;let D=new ln;D.viewport=new Nt;let B=[C,D],Z=new ko,P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=A[Q];return ue===void 0&&(ue=new Ds,A[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=A[Q];return ue===void 0&&(ue=new Ds,A[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=A[Q];return ue===void 0&&(ue=new Ds,A[Q]=ue),ue.getHandSpace()};function j(Q){let ue=b.indexOf(Q.inputSource);if(ue===-1)return;let Ee=A[ue];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,l||a),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",N);for(let Q=0;Q<A.length;Q++){let ue=b[Q];ue!==null&&(b[Q]=null,A[Q].disconnect(ue))}P=null,q=null,g.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(w),u=null,f=null,d=null,s=null,y=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),I!==null){let Q=I.camera;Q.fov=I.fov,Q.zoom=I.zoom,Q.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Oe=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?Vn:di,Oe=v.stencil?mi:Gn);let Ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Wt(f.textureWidth,f.textureHeight,{format:Sn,type:hn,depthTexture:new kn(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Wt(u.framebufferWidth,u.framebufferHeight,{format:Sn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(Q){for(let ue=0;ue<Q.removed.length;ue++){let Ee=Q.removed[ue],Oe=b.indexOf(Ee);Oe>=0&&(b[Oe]=null,A[Oe].disconnect(Ee))}for(let ue=0;ue<Q.added.length;ue++){let Ee=Q.added[ue],Oe=b.indexOf(Ee);if(Oe===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=b.length){b.push(Ee),Oe=Ge;break}else if(b[Ge]===null){b[Ge]=Ee,Oe=Ge;break}if(Oe===-1)break}let ye=A[Oe];ye&&ye.connect(Ee)}}function k(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,Ee=Q.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),Z.near=D.near=C.near=ue,Z.far=D.far=C.far=Ee,(P!==Z.near||q!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,q=Z.far),Z.layers.mask=Q.layers.mask|6,C.layers.mask=Z.layers.mask&-5,D.layers.mask=Z.layers.mask&-3;let Oe=Q.parent,ye=Z.cameras;k(Z,Oe);for(let Ge=0;Ge<ye.length;Ge++)k(ye[Ge],Oe);Z.projectionMatrix.copy(C.projectionMatrix),Z.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&Q.isPerspectiveCamera&&(I={camera:Q,fov:Q.fov,zoom:Q.zoom}),J(Q,Z,Oe)};function J(Q,ue,Ee){Ee===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ps*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Z)},this.getCameraTexture=function(Q){return p[Q]};let re=null;function Ie(Q,ue){if(h=ue.getViewerPose(l||a),m=ue,h!==null){let Ee=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Oe=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,Oe=!0);for(let Ve=0;Ve<Ee.length;Ve++){let Je=Ee[Ve],ot=null;if(u!==null)ot=u.getViewport(Je);else{let me=d.getViewSubImage(f,Je);ot=me.viewport,Ve===0&&(e.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(y))}let ae=B[Ve];ae===void 0&&(ae=new ln,ae.layers.enable(Ve),ae.viewport=new Nt,B[Ve]=ae),ae.matrix.fromArray(Je.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Je.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(Z.matrix.copy(ae.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Oe===!0&&Z.cameras.push(ae)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Ve=d.getDepthInformation(Ee[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<Ee.length;Ve++){let Je=Ee[Ve].camera;if(Je){let ot=p[Je];ot||(ot=new Ir,p[Je]=ot);let ae=d.getCameraImage(Je);ot.sourceTexture=ae}}}}for(let Ee=0;Ee<A.length;Ee++){let Oe=b[Ee],ye=A[Ee];Oe!==null&&ye!==void 0&&ye.update(Oe,ue,l||a)}re&&re(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}let Ue=new Dd;Ue.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){re=Q},this.dispose=function(){}}},px=new ut,Hd=new tt;Hd.set(-1,0,0,0,1,0,0,0,1);function mx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,oh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),S(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,w):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),w=v.envMap,y=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,e,t,n){let s={},r={};function a(v,w){let y=w.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,w){let y=s[v.id];y===void 0&&(m(v),y=c(v),s[v.id]=y,v.addEventListener("dispose",g));let A=w.program;n.updateUBOMapping(v,A);let b=e.render.frame;r[v.id]!==b&&(l(v),r[v.id]=b)}function c(v){let w=i.createBuffer(),y=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(v){let w=s[v.id],y=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,_=y.length;b<_;b++){let E=y[b];if(Array.isArray(E))for(let I=0,C=E.length;I<C;I++)h(E[I],b,I,A);else h(E,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,y,A){if(f(v,w,y,A)===!0){let b=v.__offset,_=v.value;if(Array.isArray(_)){let E=0;for(let I=0;I<_.length;I++){let C=_[I],D=S(C,!0);d(C,v.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,A){let b=v.value,_=w+"_"+y;if(Array.isArray(b)){A[_]===void 0&&(A[_]=[]);let E=A[_],I=!1;for(let C=0;C<b.length;C++)u(b[C],E,C)===!0&&(I=!0);return I}return u(b,A,_)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let A=w[y];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(v){let w=v.uniforms,y=0,A=16;for(let _=0,E=w.length;_<E;_++){let I=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,D=I.length;C<D;C++){let B=I[C],Z=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(w[_])||Array.isArray(B.value),q=y;for(let Y=0,N=Z.length;Y<N;Y++){let k=Z[Y],J=S(k,P),re=y%A,Ie=re%J.boundary,Ue=re+Ie;y+=Ie,Ue!==0&&A-Ue<J.storage&&(y+=A-Ue),Y===0&&(q=y),y+=J.storage}let j=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new j((y-q)/Float32Array.BYTES_PER_ELEMENT),B.__offset=q}}let b=y%A;return b>0&&(y+=A-b),v.__size=y,v.__cache={},this}function S(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let w=v.target;w.removeEventListener("dispose",g),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function xx(){return jn===null&&(jn=new fi(_x,16,16,Fi,Qt),jn.name="DFG_LUT",jn.minFilter=dn,jn.magFilter=dn,jn.wrapS=Xn,jn.wrapT=Xn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var Il=class{constructor(e={}){let{canvas:t=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=hn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let S=u,g=new Set([jo,Ko,$o]),p=new Set([hn,Gn,Js,mi,Yo,Zo]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,b=null,_=[],E=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,B=null,Z=null,P=null,q=null;this._outputColorSpace=sn;let j=0,Y=0,N=null,k=-1,J=null,re=new Nt,Ie=new Nt,Ue=null,Q=new nt(0),ue=0,Ee=t.width,Oe=t.height,ye=1,Ge=null,xt=null,Ve=new Nt(0,0,Ee,Oe),Je=new Nt(0,0,Ee,Oe),ot=!1,ae=new Ri,me=new Mo,ge=!1,Pe=!1,be=new ut,$e=new U,Be=new Nt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function st(){return N===null?ye:1}let O=n;function Rt(T,F){return t.getContext(T,F)}let Qe,ht,xe,St,We,qe,R,M,W,le,se,_e,ve,ee,ne,Me,L,ie,te,Te,de,Se,Xe;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),O===null){let F="webgl2";if(O=Rt(F,T),O===null)throw Rt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(T){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),je("WebGLRenderer: "+T.message),T}function ct(){Qe=new Cg(O),Qe.init(),de=new ux(O,Qe),ht=new xg(O,Qe,e,de),xe=new cx(O,Qe),ht.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),Z=O.createFramebuffer(),P=O.createFramebuffer(),q=O.createFramebuffer(),St=new Lg(O),We=new J_,qe=new hx(O,Qe,xe,We,ht,de,St),R=new Rg(C),M=new Np(O),Se=new gg(O,M),W=new Pg(O,M,St,Se),le=new Ng(O,W,M,Se,St),ie=new Dg(O,ht,qe),ne=new vg(We),se=new Z_(C,R,Qe,ht,Se,ne),_e=new mx(C,We),ve=new K_,ee=new ix(Qe),L=new mg(C,R,xe,le,m,c),Me=new lx(C,le,ht),Xe=new gx(O,St,ht,xe),te=new _g(O,Qe,St),Te=new Ig(O,Qe,St),St.programs=se.programs,C.capabilities=ht,C.extensions=Qe,C.properties=We,C.renderLists=ve,C.shadowMap=Me,C.state=xe,C.info=St}S!==hn&&(I=new Fg(S,t.width,t.height,o,s,r));let pe=new yh(C,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=Qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(T){T!==void 0&&(ye=T,this.setSize(Ee,Oe,!1))},this.getSize=function(T){return T.set(Ee,Oe)},this.setSize=function(T,F,$=!0){if(pe.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=T,Oe=F,t.width=Math.floor(T*ye),t.height=Math.floor(F*ye),$===!0&&(t.style.width=T+"px",t.style.height=F+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Ee*ye,Oe*ye).floor()},this.setDrawingBufferSize=function(T,F,$){Ee=T,Oe=F,ye=$,t.width=Math.floor(T*$),t.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(S===hn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(Ve)},this.setViewport=function(T,F,$,H){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,F,$,H),xe.viewport(re.copy(Ve).multiplyScalar(st()).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,F,$,H){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,F,$,H),xe.scissor(Ie.copy(Je).multiplyScalar(st()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){xe.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Ge=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,$=!0){let H=0;if(T){let X=!1;if(N!==null){let Re=N.texture.format;X=g.has(Re)}if(X){let Re=N.texture.type,Fe=p.has(Re),we=L.getClearColor(),Le=L.getClearAlpha(),He=we.r,et=we.g,pt=we.b;Fe?(v[0]=He,v[1]=et,v[2]=pt,v[3]=Le,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=He,w[1]=et,w[2]=pt,w[3]=Le,O.clearBufferiv(O.COLOR,0,w))}else H|=O.COLOR_BUFFER_BIT}F&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),B=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),L.dispose(),ve.dispose(),ee.dispose(),qe.dispose(),We.dispose(),R.dispose(),le.dispose(),W.dispose(),Se.dispose(),Xe.dispose(),se.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",rs),pe.removeEventListener("sessionend",ir),ei.stop()};function Ye(T){T.preventDefault(),nh("WebGLRenderer: Context Lost."),D=!0}function rt(){nh("WebGLRenderer: Context Restored."),D=!1;let T=St.autoReset,F=Me.enabled,$=Me.autoUpdate,H=Me.needsUpdate,X=Me.type;ct(),St.autoReset=T,Me.enabled=F,Me.autoUpdate=$,Me.needsUpdate=H,Me.type=X}function Ae(T){je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Et(T){let F=T.target;F.removeEventListener("dispose",Et),Pt(F)}function Pt(T){Tn(T),We.remove(T)}function Tn(T){let F=We.get(T).programs;F!==void 0&&(F.forEach(function($){se.releaseProgram($)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,H,X,Re){F===null&&(F=it);let Fe=X.isMesh&&X.matrixWorld.determinantAffine()<0,we=ql(T,F,$,H,X);xe.setMaterial(H,Fe);let Le=$.index,He=1;if(H.wireframe===!0){if(Le=W.getWireframeAttribute($),Le===void 0)return;He=2}let et=$.drawRange,pt=$.attributes.position,ke=et.start*He,mt=(et.start+et.count)*He;Re!==null&&(ke=Math.max(ke,Re.start*He),mt=Math.min(mt,(Re.start+Re.count)*He)),Le!==null?(ke=Math.max(ke,0),mt=Math.min(mt,Le.count)):pt!=null&&(ke=Math.max(ke,0),mt=Math.min(mt,pt.count));let Ot=mt-ke;if(Ot<0||Ot===1/0)return;Se.setup(X,H,we,$,Le);let wt,vt=te;if(Le!==null&&(wt=M.get(Le),vt=Te,vt.setIndex(wt)),X.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*st()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(X.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),xe.setLineWidth(kt*st()),X.isLineSegments?vt.setMode(O.LINES):X.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else X.isPoints?vt.setMode(O.POINTS):X.isSprite&&vt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let kt=X._multiDrawStarts,ze=X._multiDrawCounts,tn=X._multiDrawCount,Mt=Le?M.get(Le).bytesPerElement:1,ni=We.get(H).currentProgram.getUniforms();for(let Gt=0;Gt<tn;Gt++)ni.setValue(O,"_gl_DrawID",Gt),vt.render(kt[Gt]/Mt,ze[Gt])}else if(X.isInstancedMesh)vt.renderInstances(ke,Ot,X.count);else if($.isInstancedBufferGeometry){let kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ze=Math.min($.instanceCount,kt);vt.renderInstances(ke,Ot,ze)}else vt.render(ke,Ot)};function _i(T,F,$,H){B!==null&&T.isNodeMaterial&&B.setObject(H,T),ge===!0&&ne.setState(T,$,!1),T.transparent===!0&&T.side===fn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,xi(T,F,H),T.side=Ui,T.needsUpdate=!0,xi(T,F,H),T.side=fn):xi(T,F,H)}this.compile=function(T,F,$=null){$===null&&($=T),B!==null&&B.renderStart(T,F,$),b=ee.get($),b.init(F),E.push(b),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),T!==$&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),Pe=this.localClippingEnabled,ge=ne.init(this.clippingPlanes,Pe),ge===!0&&ne.setGlobalState(this.clippingPlanes,F),B!==null&&Me.render(b.state.shadowsArray,$,F);let H=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Re=X.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){let we=Re[Fe];_i(we,$,F,X),H.add(we)}else _i(Re,$,F,X),H.add(Re)}),b=E.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(T,F,$=null){let H=this.compile(T,F,$);return new Promise(X=>{function Re(){if(H.forEach(function(Fe){let Le=We.get(Fe).currentProgram;(Le===void 0||Le.isReady())&&H.delete(Fe)}),H.size===0){X(T);return}setTimeout(Re,10)}Qe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let nr=null;function Wl(T){nr&&nr(T)}function rs(){ei.stop()}function ir(){ei.start()}let ei=new Dd;ei.setAnimationLoop(Wl),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(T){nr=T,pe.setAnimationLoop(T),T===null?ei.stop():ei.start()},pe.addEventListener("sessionstart",rs),pe.addEventListener("sessionend",ir),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(T,F);let $=pe.enabled===!0&&pe.isPresenting===!0,H=I!==null&&(N===null||$)&&I.begin(C,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(F),F=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,N),b=ee.get(T,E.length),b.init(F),b.state.textureUnits=qe.getTextureUnits(),E.push(b),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?me.setFromArrayCamera(F):ae.setFromProjectionMatrix(be,An,F.reversedDepth),Pe=this.localClippingEnabled,ge=ne.init(this.clippingPlanes,Pe),A=ve.get(T,_.length),A.init(),_.push(A),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Fe=C.xr.getDepthSensingMesh();Fe!==null&&as(Fe,F,-1/0,C.sortObjects)}as(T,F,0,C.sortObjects),A.finish(),B!==null&&B.updateLights(b.state.lightsArray),C.sortObjects===!0&&A.sort(Ge,xt),lt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,lt&&L.addToRenderList(A,T),this.info.autoReset===!0&&this.info.reset(),ge===!0&&ne.beginShadows();let X=b.state.shadowsArray;if(Me.render(X,T,F),ge===!0&&ne.endShadows(),(H&&I.hasRenderPass())===!1){let Fe=A.opaque,we=A.transmissive;if(b.setupLights(),F.isArrayCamera){let Le=F.cameras;if(we.length>0)for(let He=0,et=Le.length;He<et;He++){let pt=Le[He];ti(Fe,we,T,pt)}lt&&L.render(T);for(let He=0,et=Le.length;He<et;He++){let pt=Le[He];Xl(A,T,pt,pt.viewport)}}else we.length>0&&ti(Fe,we,T,F),lt&&L.render(T),Xl(A,T,F)}N!==null&&Y===0&&(qe.updateMultisampleRenderTarget(N),qe.updateRenderTargetMipmap(N)),H&&I.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),Se.resetDefaultState(),k=-1,J=null,E.pop(),E.length>0?(b=E[E.length-1],qe.setTextureUnits(b.state.textureUnits),ge===!0&&ne.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function as(T,F,$,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){let Fe=F.isArrayCamera?me:ae;if(!T.frustumCulled||T.intersectsFrustum(Fe)){H&&Be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);let we=le.update(T),Le=T.material;Le.visible&&A.push(T,we,Le,$,Be.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){let Fe=F.isArrayCamera?me:ae;if(!T.frustumCulled||T.intersectsFrustum(Fe)){let we=le.update(T),Le=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Be.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Be.copy(we.boundingSphere.center)),Be.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(Le)){let He=we.groups;for(let et=0,pt=He.length;et<pt;et++){let ke=He[et],mt=Le[ke.materialIndex];mt&&mt.visible&&A.push(T,we,mt,$,Be.z,ke,F)}}else Le.visible&&A.push(T,we,Le,$,Be.z,null,F)}}}let Re=T.children;for(let Fe=0,we=Re.length;Fe<we;Fe++)as(Re[Fe],F,$,H)}function Xl(T,F,$,H){let{opaque:X,transmissive:Re,transparent:Fe}=T;b.setupLightsView($),ge===!0&&ne.setGlobalState(C.clippingPlanes,$),H&&xe.viewport(re.copy(H)),X.length>0&&zi(X,F,$),Re.length>0&&zi(Re,F,$),Fe.length>0&&zi(Fe,F,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ti(T,F,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let ke=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Wt(1,1,{generateMipmaps:!0,type:ke?Qt:hn,minFilter:pi,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Re=b.state.transmissionRenderTarget[H.id],Fe=H.viewport||re;Re.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),Le=C.getActiveCubeFace(),He=C.getActiveMipmapLevel();C.setRenderTarget(Re),C.getClearColor(Q),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),lt&&L.render($);let et=C.toneMapping;C.toneMapping=Kn;let pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ge===!0&&ne.setGlobalState(C.clippingPlanes,H),zi(T,$,H),qe.updateMultisampleRenderTarget(Re),qe.updateRenderTargetMipmap(Re),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let mt=0,Ot=F.length;mt<Ot;mt++){let wt=F[mt],{object:vt,geometry:kt,material:ze,group:tn}=wt;if(ze.side===fn&&vt.layers.test(H.layers)){let Mt=ze.side;ze.side=rn,ze.needsUpdate=!0,Ea(vt,$,H,kt,ze,tn),ze.side=Mt,ze.needsUpdate=!0,ke=!0}}ke===!0&&(qe.updateMultisampleRenderTarget(Re),qe.updateRenderTargetMipmap(Re))}C.setRenderTarget(we,Le,He),C.setClearColor(Q,ue),pt!==void 0&&(H.viewport=pt),C.toneMapping=et}function zi(T,F,$){let H=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Re=T.length;X<Re;X++){let Fe=T[X],{object:we,geometry:Le,group:He}=Fe,et=Fe.material;et.allowOverride===!0&&H!==null&&(et=H),we.layers.test($.layers)&&Ea(we,F,$,Le,et,He)}}function Ea(T,F,$,H,X,Re){B!==null&&X.isNodeMaterial&&B.setObject(T,X),T.onBeforeRender(C,F,$,H,X,Re),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,F,$,H,T,Re),X.transparent===!0&&X.side===fn&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,C.renderBufferDirect($,F,H,X,T,Re),X.side=Ui,X.needsUpdate=!0,C.renderBufferDirect($,F,H,X,T,Re),X.side=fn):C.renderBufferDirect($,F,H,X,T,Re),T.onAfterRender(C,F,$,H,X,Re)}function sr(T){let F=0;for(let $ of T)$.texture!==null&&F++;return F}function xi(T,F,$){F.isScene!==!0&&(F=it);let H=We.get(T),X=b.state.lights,Re=b.state.shadowsArray,Fe=X.state.version,we=se.getParameters(T,X.state,Re,F,$,b.state.lightProbeGridArray),Le=se.getProgramCacheKey(we),He=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=R.get(T.envMap||H.environment,et),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",Et),He=new Map,H.programs=He,H.programVariants=new Map);let pt=He.get(Le);if(pt!==void 0){if(H.currentProgram===pt&&H.lightsStateVersion===Fe)return en(T,we),pt}else we.uniforms=se.getUniforms(T),B!==null&&T.isNodeMaterial&&B.build(T,$,we),T.onBeforeCompile(we,C),pt=se.acquireProgram(we,Le),He.set(Le,pt),H.uniforms=we.uniforms;let ke=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=ne.uniform),en(T,we),H.needsLights=Yl(T),H.lightsStateVersion=Fe,H.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.sunLights.value=X.state.sun,ke.sunLightShadows.value=X.state.sunShadow,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.sunShadowMatrix.value=X.state.sunShadowMatrix,ke.sunShadowCascade.value=X.state.sunShadowCascade,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=sr(b.state.lightProbeGridArray),H.currentProgram=pt,H.uniformsList=null,pt}function wa(T,F,$,H,X){let Re=We.get(T),Fe=Re.currentProgram.id+","+H+","+X,we=Re.programVariants.get(Fe);return we===void 0?(we=xi(T,F,$),Re.programVariants.set(Fe,we)):(Re.currentProgram=we,Re.uniformsList=null,Re.outputColorSpace=H,Re.toneMapping=X),we}function Aa(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Ks.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function en(T,F){let $=We.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function ql(T,F,$,H,X){F.isScene!==!0&&(F=it),qe.resetTextureUnits();let Re=F.fog,Fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,we=N===null?C.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_t.workingColorSpace,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,He=R.get(H.envMap||Fe,Le),et=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pt=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,Ot=!!$.morphAttributes.color,wt=Kn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(wt=C.toneMapping);let vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kt=vt!==void 0?vt.length:0,ze=We.get(H),tn=b.state.lights;if(ge===!0&&(Pe===!0||T!==J)){let bt=T===J&&H.id===k;ne.setState(H,T,bt)}let Mt=!1,ni=!1;H.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==tn.state.version||X.isBatchedMesh&&ze.batching===!1||!X.isBatchedMesh&&ze.batching===!0||X.isBatchedMesh&&ze.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&ze.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||X.isInstancedMesh&&ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ze.instancingMorph===!1&&X.morphTexture!==null||ze.envMap!==He||H.fog===!0&&ze.fog!==Re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ne.numPlanes||ze.numIntersection!==ne.numIntersection)||ze.vertexAlphas!==et||ze.vertexTangents!==pt||ze.morphTargets!==ke||ze.morphNormals!==mt||ze.morphColors!==Ot||ze.morphTargetsCount!==kt||ze.numLightProbeGrids!==sr(b.state.lightProbeGridArray)?Mt=!0:(ze.outputColorSpace!==we||ze.toneMapping!==wt)&&(ni=!0):(Mt=!0,ze.__version=H.version);let Gt=ze.currentProgram;(Mt===!0||ni===!0)&&(Gt=ni===!0?wa(H,F,X,we,wt):xi(H,F,X),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Gt,ze));let ki=!1,Hn=!1,Dn=!1,gt=Gt.getUniforms(),Xt=ze.uniforms;if(xe.useProgram(Gt.program)&&(ki=!0,Hn=!0,Dn=!0),H.id!==k&&(k=H.id,Hn=!0),ki||J!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",T.projectionMatrix),gt.setValue(O,"viewMatrix",T.matrixWorldInverse);let Bt=gt.map.cameraPosition;Bt!==void 0&&Bt.setValue(O,$e.setFromMatrixPosition(T.matrixWorld)),ht.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Hn=!0,Dn=!0)}if(ze.needsLights&&(tn.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",tn.state.sunShadowMap,qe),tn.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",tn.state.directionalShadowMap,qe),tn.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",tn.state.spotShadowMap,qe),tn.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",tn.state.pointShadowMap,qe)),X.isSkinnedMesh){gt.setOptional(O,X,"bindMatrix"),gt.setOptional(O,X,"bindMatrixInverse");let bt=X.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),gt.setValue(O,"boneTexture",bt.boneTexture,qe))}X.isBatchedMesh&&(gt.setOptional(O,X,"batchingTexture"),gt.setValue(O,"batchingTexture",X._matricesTexture,qe),gt.setOptional(O,X,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",X._indirectTexture,qe),gt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",X._colorsTexture,qe));let pn=$.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ie.update(X,$,Gt),(Hn||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,gt.setValue(O,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Xt.envMapIntensity.value=F.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=xx()),Hn){if(gt.setValue(O,"toneMappingExposure",C.toneMappingExposure),ze.needsLights&&Jt(Xt,Dn),Re&&H.fog===!0&&_e.refreshFogUniforms(Xt,Re),_e.refreshMaterialUniforms(Xt,H,ye,Oe,b.state.transmissionRenderTarget[T.id]),ze.needsLights&&ze.numLightProbeGrids>0){let bt=y,Bt=0;for(let En of b.state.lightProbeGridArray)En.texture!==null&&(bt.textures[Bt]=En.texture,bt.min[Bt]=En.boundingBox.min,bt.max[Bt]=En.boundingBox.max,bt.resolution[Bt]=En.resolution,Bt++);for(let En in bt)bt[En].length=Bt;Xt.probesSH.value=bt.textures,Xt.probesMin.value=bt.min,Xt.probesMax.value=bt.max,Xt.probesResolution.value=bt.resolution}Ks.upload(O,Aa(ze),Xt,qe)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ks.upload(O,Aa(ze),Xt,qe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(O,"center",X.center),gt.setValue(O,"modelViewMatrix",X.modelViewMatrix),gt.setValue(O,"normalMatrix",X.normalMatrix),gt.setValue(O,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let bt=H.uniformsGroups;for(let Bt=0,En=bt.length;Bt<En;Bt++){let vi=bt[Bt];Xe.update(vi,Gt),Xe.bind(vi,Gt)}}return Gt}function Jt(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Yl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,F,$){let H=We.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),We.get(T.texture).__webglTexture=F,We.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let $=We.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,$=0){N=T,j=F,Y=$;let H=null,X=!1,Re=!1;if(T){let we=We.get(T);if(we.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,we.__webglFramebuffer),re.copy(T.viewport),Ie.copy(T.scissor),Ue=T.scissorTest,xe.viewport(re),xe.scissor(Ie),xe.setScissorTest(Ue),k=-1;return}else if(we.__webglFramebuffer===void 0)qe.setupRenderTarget(T);else if(we.__hasExternalTextures)qe.rebindTextures(T,We.get(T.texture).__webglTexture,We.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let et=T.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&We.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(T)}}let Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Re=!0);let He=We.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[F])?H=He[F][$]:H=He[F],X=!0):T.samples>0&&qe.useMultisampledRTT(T)===!1?H=We.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[$]:H=He,re.copy(T.viewport),Ie.copy(T.scissor),Ue=T.scissorTest}else re.copy(Ve).multiplyScalar(ye).floor(),Ie.copy(Je).multiplyScalar(ye).floor(),Ue=ot;if($!==0&&(H=Z),xe.bindFramebuffer(O.FRAMEBUFFER,H)&&xe.drawBuffers(T,H),xe.viewport(re),xe.scissor(Ie),xe.setScissorTest(Ue),X){let we=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,$)}else if(Re){let we=F;for(let Le=0;Le<T.textures.length;Le++){let He=We.get(T.textures[Le]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Le,He.__webglTexture,$,we)}}else if(T!==null&&$!==0){let we=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,$)}k=-1};function rr(T){let F=We.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=ht.textureFormatReadable(T.format),F.__typeReadable=ht.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,$,H,X,Re,Fe,we=0){if(!(T&&T.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Le=Le[Fe],Array.isArray(Le)&&(Le=Le[0])),Le){xe.bindFramebuffer(O.FRAMEBUFFER,Le);try{let He=T.textures[we],et=He.format,pt=He.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we);let ke=rr(He);if(ke.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-H&&$>=0&&$<=T.height-X&&O.readPixels(F,$,H,X,de.convert(et),de.convert(pt),Re)}finally{let He=N!==null?We.get(N).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,H,X,Re,Fe,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Le=Le[Fe],Array.isArray(Le)&&(Le=Le[0])),Le)if(F>=0&&F<=T.width-H&&$>=0&&$<=T.height-X){xe.bindFramebuffer(O.FRAMEBUFFER,Le);let He=T.textures[we],et=He.format,pt=He.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we);let ke=rr(He);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),O.readPixels(F,$,H,X,de.convert(et),de.convert(pt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ot=N!==null?We.get(N).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ot);let wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await td(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(mt),O.deleteSync(wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,$=0){let H=Math.pow(2,-$),X=Math.floor(T.image.width*H),Re=Math.floor(T.image.height*H),Fe=F!==null?F.x:0,we=F!==null?F.y:0;qe.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Fe,we,X,Re),xe.unbindTexture()},this.copyTextureToTexture=function(T,F,$=null,H=null,X=0,Re=0){let Fe,we,Le,He,et,pt,ke,mt,Ot,wt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if($!==null)Fe=$.max.x-$.min.x,we=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,He=$.min.x,et=$.min.y,pt=$.isBox3?$.min.z:0;else{let gt=Math.pow(2,-X);Fe=Math.floor(wt.width*gt),we=Math.floor(wt.height*gt),T.isDataArrayTexture?Le=wt.depth:T.isData3DTexture?Le=Math.floor(wt.depth*gt):Le=1,He=0,et=0,pt=0}H!==null?(ke=H.x,mt=H.y,Ot=H.z):(ke=0,mt=0,Ot=0);let vt=de.convert(F.format),kt=de.convert(F.type),ze;F.isData3DTexture?(qe.setTexture3D(F,0),ze=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(qe.setTexture2DArray(F,0),ze=O.TEXTURE_2D_ARRAY):(qe.setTexture2D(F,0),ze=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let tn=xe.getParameter(O.UNPACK_ROW_LENGTH),Mt=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),ni=xe.getParameter(O.UNPACK_SKIP_PIXELS),Gt=xe.getParameter(O.UNPACK_SKIP_ROWS),ki=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,He),xe.pixelStorei(O.UNPACK_SKIP_ROWS,et),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,pt);let Hn=T.isDataArrayTexture||T.isData3DTexture,Dn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let gt=We.get(T),Xt=We.get(F),pn=We.get(gt.__renderTarget),bt=We.get(Xt.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,pn.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<Le;Bt++)Hn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(T).__webglTexture,X,pt+Bt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(F).__webglTexture,Re,Ot+Bt)),O.blitFramebuffer(He,et,He+Fe,et+we,ke,mt,ke+Fe,mt+we,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||We.has(T)){let gt=We.get(T),Xt=We.get(F);xe.bindFramebuffer(O.READ_FRAMEBUFFER,P),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,q);for(let pn=0;pn<Le;pn++)Hn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gt.__webglTexture,X,pt+pn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gt.__webglTexture,X),Dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,Re,Ot+pn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,Re),X!==0?O.blitFramebuffer(He,et,He+Fe,et+we,ke,mt,ke+Fe,mt+we,O.COLOR_BUFFER_BIT,O.NEAREST):Dn?O.copyTexSubImage3D(ze,Re,ke,mt,Ot+pn,He,et,Fe,we):O.copyTexSubImage2D(ze,Re,ke,mt,He,et,Fe,we);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Dn?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(ze,Re,ke,mt,Ot,Fe,we,Le,vt,kt,wt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(ze,Re,ke,mt,Ot,Fe,we,Le,vt,wt.data):O.texSubImage3D(ze,Re,ke,mt,Ot,Fe,we,Le,vt,kt,wt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,ke,mt,Fe,we,vt,kt,wt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,ke,mt,wt.width,wt.height,vt,wt.data):O.texSubImage2D(O.TEXTURE_2D,Re,ke,mt,Fe,we,vt,kt,wt);xe.pixelStorei(O.UNPACK_ROW_LENGTH,tn),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,ni),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,ki),Re===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(ze),xe.unbindTexture()},this.initRenderTarget=function(T){We.get(T).__webglFramebuffer===void 0&&qe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qe.setTextureCube(T,0):T.isData3DTexture?qe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qe.setTexture2DArray(T,0):qe.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){j=0,Y=0,N=null,xe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var xa=new U;function Ln(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;xa.copy(e),xa[n]=0,xa.normalize();let l=.5*a/(a+o),h=1-xa.angleTo(i)/c;return Math.sign(xa[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Nl=class i extends Rn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=d.length/6,S=new U,g=.5/a;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:S.set(1,0,0),u[v+0]=Ln(S,l,"z","y",r,n),u[v+1]=1-Ln(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),u[v+0]=1-Ln(S,l,"z","y",r,n),u[v+1]=1-Ln(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),u[v+0]=1-Ln(S,l,"x","z",r,e),u[v+1]=Ln(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),u[v+0]=1-Ln(S,l,"x","z",r,e),u[v+1]=1-Ln(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),u[v+0]=1-Ln(S,l,"x","y",r,e),u[v+1]=1-Ln(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),u[v+0]=Ln(S,l,"x","y",r,e),u[v+1]=1-Ln(S,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ul=class extends Yi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Rn;e.deleteAttribute("uv");let t=new Dt({side:rn}),n=new Dt,s=new Ki(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ct(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ar(e,n,6),o=new Kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ct(e,er(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ct(e,er(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ct(e,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ct(e,er(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Ct(e,er(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new Ct(e,er(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function er(i){return new Xr({color:0,emissive:16777215,emissiveIntensity:i})}var tr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yx=new ji(-1,1,1,-1,0,1),Mh=class extends Ft{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},Mx=new Mh,Bi=class{constructor(e){this._mesh=new Ct(Mx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fl=class extends bn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=In.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Bi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var va=class extends bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ol=class extends bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fl(tr),this.copyPass.material.blending=jt,this.timer=new Kr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(a instanceof va?n=!0:a instanceof Ol&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zl=class extends bn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new nt}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var ya={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ut},cameraProjectionMatrixInverse:{value:new ut},cameraWorldMatrix:{value:new ut},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ma={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},kl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Wd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Sx(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new U(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new fi(s,e,e);return r.wrapS=mn,r.wrapT=mn,r.needsUpdate=!0,r}function Sx(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Sa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Sh(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new ut},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Sh(i,e,t){let n=bx(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function bx(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),a))}return n}var Gl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,f=c-d,u=l-d,m=e-f,S=t-u,g,p;m>S?(g=1,p=0):(g=0,p=1);let v=m-g+h,w=S-p+h,y=m-1+2*h,A=S-1+2*h,b=c&255,_=l&255,E=this.perm[b+this.perm[_]]%12,I=this.perm[b+g+this.perm[_+p]]%12,C=this.perm[b+1+this.perm[_+1]]%12,D=.5-m*m-S*S;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[E],m,S));let B=.5-v*v-w*w;B<0?s=0:(B*=B,s=B*B*this._dot(this.grad3[I],v,w));let Z=.5-y*y-A*A;return Z<0?r=0:(Z*=Z,r=Z*Z*this._dot(this.grad3[C],y,A)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),d=Math.floor(t+l),f=Math.floor(n+l),u=1/6,m=(h+d+f)*u,S=h-m,g=d-m,p=f-m,v=e-S,w=t-g,y=n-p,A,b,_,E,I,C;v>=w?w>=y?(A=1,b=0,_=0,E=1,I=1,C=0):v>=y?(A=1,b=0,_=0,E=1,I=0,C=1):(A=0,b=0,_=1,E=1,I=0,C=1):w<y?(A=0,b=0,_=1,E=0,I=1,C=1):v<y?(A=0,b=1,_=0,E=0,I=1,C=1):(A=0,b=1,_=0,E=1,I=1,C=0);let D=v-A+u,B=w-b+u,Z=y-_+u,P=v-E+2*u,q=w-I+2*u,j=y-C+2*u,Y=v-1+3*u,N=w-1+3*u,k=y-1+3*u,J=h&255,re=d&255,Ie=f&255,Ue=this.perm[J+this.perm[re+this.perm[Ie]]]%12,Q=this.perm[J+A+this.perm[re+b+this.perm[Ie+_]]]%12,ue=this.perm[J+E+this.perm[re+I+this.perm[Ie+C]]]%12,Ee=this.perm[J+1+this.perm[re+1+this.perm[Ie+1]]]%12,Oe=.6-v*v-w*w-y*y;Oe<0?s=0:(Oe*=Oe,s=Oe*Oe*this._dot3(this.grad3[Ue],v,w,y));let ye=.6-D*D-B*B-Z*Z;ye<0?r=0:(ye*=ye,r=ye*ye*this._dot3(this.grad3[Q],D,B,Z));let Ge=.6-P*P-q*q-j*j;Ge<0?a=0:(Ge*=Ge,a=Ge*Ge*this._dot3(this.grad3[ue],P,q,j));let xt=.6-Y*Y-N*N-k*k;return xt<0?o=0:(xt*=xt,o=xt*xt*this._dot3(this.grad3[Ee],Y,N,k)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,f,u,m,S=(e+t+n+s)*c,g=Math.floor(e+S),p=Math.floor(t+S),v=Math.floor(n+S),w=Math.floor(s+S),y=(g+p+v+w)*l,A=g-y,b=p-y,_=v-y,E=w-y,I=e-A,C=t-b,D=n-_,B=s-E,Z=I>C?32:0,P=I>D?16:0,q=C>D?8:0,j=I>B?4:0,Y=C>B?2:0,N=D>B?1:0,k=Z+P+q+j+Y+N,J=a[k][0]>=3?1:0,re=a[k][1]>=3?1:0,Ie=a[k][2]>=3?1:0,Ue=a[k][3]>=3?1:0,Q=a[k][0]>=2?1:0,ue=a[k][1]>=2?1:0,Ee=a[k][2]>=2?1:0,Oe=a[k][3]>=2?1:0,ye=a[k][0]>=1?1:0,Ge=a[k][1]>=1?1:0,xt=a[k][2]>=1?1:0,Ve=a[k][3]>=1?1:0,Je=I-J+l,ot=C-re+l,ae=D-Ie+l,me=B-Ue+l,ge=I-Q+2*l,Pe=C-ue+2*l,be=D-Ee+2*l,$e=B-Oe+2*l,Be=I-ye+3*l,it=C-Ge+3*l,lt=D-xt+3*l,st=B-Ve+3*l,O=I-1+4*l,Rt=C-1+4*l,Qe=D-1+4*l,ht=B-1+4*l,xe=g&255,St=p&255,We=v&255,qe=w&255,R=o[xe+o[St+o[We+o[qe]]]]%32,M=o[xe+J+o[St+re+o[We+Ie+o[qe+Ue]]]]%32,W=o[xe+Q+o[St+ue+o[We+Ee+o[qe+Oe]]]]%32,le=o[xe+ye+o[St+Ge+o[We+xt+o[qe+Ve]]]]%32,se=o[xe+1+o[St+1+o[We+1+o[qe+1]]]]%32,_e=.6-I*I-C*C-D*D-B*B;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(r[R],I,C,D,B));let ve=.6-Je*Je-ot*ot-ae*ae-me*me;ve<0?d=0:(ve*=ve,d=ve*ve*this._dot4(r[M],Je,ot,ae,me));let ee=.6-ge*ge-Pe*Pe-be*be-$e*$e;ee<0?f=0:(ee*=ee,f=ee*ee*this._dot4(r[W],ge,Pe,be,$e));let ne=.6-Be*Be-it*it-lt*lt-st*st;ne<0?u=0:(ne*=ne,u=ne*ne*this._dot4(r[le],Be,it,lt,st));let Me=.6-O*O-Rt*Rt-Qe*Qe-ht*ht;return Me<0?m=0:(Me*=Me,m=Me*Me*this._dot4(r[se],O,Rt,Qe,ht)),27*(h+d+f+u+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ba=class i extends bn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Wd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:Qt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new qt({defines:Object.assign({},ya.defines),uniforms:In.clone(ya.uniforms),vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Wr,this.normalMaterial.blending=jt,this.pdMaterial=new qt({defines:Object.assign({},Sa.defines),uniforms:In.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new qt({defines:Object.assign({},Ma.defines),uniforms:In.clone(Ma.uniforms),vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,blending:jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new qt({uniforms:In.clone(tr.uniforms),vertexShader:tr.vertexShader,fragmentShader:tr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ea,blendDst:es,blendEquation:Cn,blendSrcAlpha:Qr,blendDstAlpha:es,blendEquationAlpha:Cn}),this.blendMaterial=new qt({uniforms:In.clone(kl.uniforms),vertexShader:kl.vertexShader,fragmentShader:kl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Go,blendSrc:ea,blendDst:es,blendEquation:Cn,blendSrcAlpha:Qr,blendDstAlpha:es,blendEquationAlpha:Cn}),this._fsQuad=new Bi(null),this._originalClearColor=new nt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new kn;s.format=Vn,s.type=mi,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:zt,magFilter:zt,type:Qt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Sh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Gl,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new fi(s,e,e,Sn,hn);return r.wrapS=mn,r.wrapT=mn,r.needsUpdate=!0,r}};ba.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Vl=class extends bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=In.clone(Ta.uniforms),this.material=new Gs({name:Ta.name,uniforms:this.uniforms,vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader}),this._fsQuad=new Bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ta?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===sa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xd="data:image/png;base64,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";var qd='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="95" height="88" fill="none">%0A%09<path fill="%23FFD21E" d="M47.21 76.5a34.75 34.75 0 1 0 0-69.5 34.75 34.75 0 0 0 0 69.5Z" />%0A%09<path%0A%09%09fill="%23FF9D0B"%0A%09%09d="M81.96 41.75a34.75 34.75 0 1 0-69.5 0 34.75 34.75 0 0 0 69.5 0Zm-73.5 0a38.75 38.75 0 1 1 77.5 0 38.75 38.75 0 0 1-77.5 0Z"%0A%09/>%0A%09<path%0A%09%09fill="%233A3B45"%0A%09%09d="M58.5 32.3c1.28.44 1.78 3.06 3.07 2.38a5 5 0 1 0-6.76-2.07c.61 1.15 2.55-.72 3.7-.32ZM34.95 32.3c-1.28.44-1.79 3.06-3.07 2.38a5 5 0 1 1 6.76-2.07c-.61 1.15-2.56-.72-3.7-.32Z"%0A%09/>%0A%09<path%0A%09%09fill="%23FF323D"%0A%09%09d="M46.96 56.29c9.83 0 13-8.76 13-13.26 0-2.34-1.57-1.6-4.09-.36-2.33 1.15-5.46 2.74-8.9 2.74-7.19 0-13-6.88-13-2.38s3.16 13.26 13 13.26Z"%0A%09/>%0A%09<path%0A%09%09fill="%233A3B45"%0A%09%09fill-rule="evenodd"%0A%09%09d="M39.43 54a8.7 8.7 0 0 1 5.3-4.49c.4-.12.81.57 1.24 1.28.4.68.82 1.37 1.24 1.37.45 0 .9-.68 1.33-1.35.45-.7.89-1.38 1.32-1.25a8.61 8.61 0 0 1 5 4.17c3.73-2.94 5.1-7.74 5.1-10.7 0-2.34-1.57-1.6-4.09-.36l-.14.07c-2.31 1.15-5.39 2.67-8.77 2.67s-6.45-1.52-8.77-2.67c-2.6-1.29-4.23-2.1-4.23.29 0 3.05 1.46 8.06 5.47 10.97Z"%0A%09%09clip-rule="evenodd"%0A%09/>%0A%09<path%0A%09%09fill="%23FF9D0B"%0A%09%09d="M70.71 37a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM24.21 37a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM17.52 48c-1.62 0-3.06.66-4.07 1.87a5.97 5.97 0 0 0-1.33 3.76 7.1 7.1 0 0 0-1.94-.3c-1.55 0-2.95.59-3.94 1.66a5.8 5.8 0 0 0-.8 7 5.3 5.3 0 0 0-1.79 2.82c-.24.9-.48 2.8.8 4.74a5.22 5.22 0 0 0-.37 5.02c1.02 2.32 3.57 4.14 8.52 6.1 3.07 1.22 5.89 2 5.91 2.01a44.33 44.33 0 0 0 10.93 1.6c5.86 0 10.05-1.8 12.46-5.34 3.88-5.69 3.33-10.9-1.7-15.92-2.77-2.78-4.62-6.87-5-7.77-.78-2.66-2.84-5.62-6.25-5.62a5.7 5.7 0 0 0-4.6 2.46c-1-1.26-1.98-2.25-2.86-2.82A7.4 7.4 0 0 0 17.52 48Zm0 4c.51 0 1.14.22 1.82.65 2.14 1.36 6.25 8.43 7.76 11.18.5.92 1.37 1.31 2.14 1.31 1.55 0 2.75-1.53.15-3.48-3.92-2.93-2.55-7.72-.68-8.01.08-.02.17-.02.24-.02 1.7 0 2.45 2.93 2.45 2.93s2.2 5.52 5.98 9.3c3.77 3.77 3.97 6.8 1.22 10.83-1.88 2.75-5.47 3.58-9.16 3.58-3.81 0-7.73-.9-9.92-1.46-.11-.03-13.45-3.8-11.76-7 .28-.54.75-.76 1.34-.76 2.38 0 6.7 3.54 8.57 3.54.41 0 .7-.17.83-.6.79-2.85-12.06-4.05-10.98-8.17.2-.73.71-1.02 1.44-1.02 3.14 0 10.2 5.53 11.68 5.53.11 0 .2-.03.24-.1.74-1.2.33-2.04-4.9-5.2-5.21-3.16-8.88-5.06-6.8-7.33.24-.26.58-.38 1-.38 3.17 0 10.66 6.82 10.66 6.82s2.02 2.1 3.25 2.1c.28 0 .52-.1.68-.38.86-1.46-8.06-8.22-8.56-11.01-.34-1.9.24-2.85 1.31-2.85Z"%0A%09/>%0A%09<path%0A%09%09fill="%23FFD21E"%0A%09%09d="M38.6 76.69c2.75-4.04 2.55-7.07-1.22-10.84-3.78-3.77-5.98-9.3-5.98-9.3s-.82-3.2-2.69-2.9c-1.87.3-3.24 5.08.68 8.01 3.91 2.93-.78 4.92-2.29 2.17-1.5-2.75-5.62-9.82-7.76-11.18-2.13-1.35-3.63-.6-3.13 2.2.5 2.79 9.43 9.55 8.56 11-.87 1.47-3.93-1.71-3.93-1.71s-9.57-8.71-11.66-6.44c-2.08 2.27 1.59 4.17 6.8 7.33 5.23 3.16 5.64 4 4.9 5.2-.75 1.2-12.28-8.53-13.36-4.4-1.08 4.11 11.77 5.3 10.98 8.15-.8 2.85-9.06-5.38-10.74-2.18-1.7 3.21 11.65 6.98 11.76 7.01 4.3 1.12 15.25 3.49 19.08-2.12Z"%0A%09/>%0A%09<path%0A%09%09fill="%23FF9D0B"%0A%09%09d="M77.4 48c1.62 0 3.07.66 4.07 1.87a5.97 5.97 0 0 1 1.33 3.76 7.1 7.1 0 0 1 1.95-.3c1.55 0 2.95.59 3.94 1.66a5.8 5.8 0 0 1 .8 7 5.3 5.3 0 0 1 1.78 2.82c.24.9.48 2.8-.8 4.74a5.22 5.22 0 0 1 .37 5.02c-1.02 2.32-3.57 4.14-8.51 6.1-3.08 1.22-5.9 2-5.92 2.01a44.33 44.33 0 0 1-10.93 1.6c-5.86 0-10.05-1.8-12.46-5.34-3.88-5.69-3.33-10.9 1.7-15.92 2.78-2.78 4.63-6.87 5.01-7.77.78-2.66 2.83-5.62 6.24-5.62a5.7 5.7 0 0 1 4.6 2.46c1-1.26 1.98-2.25 2.87-2.82A7.4 7.4 0 0 1 77.4 48Zm0 4c-.51 0-1.13.22-1.82.65-2.13 1.36-6.25 8.43-7.76 11.18a2.43 2.43 0 0 1-2.14 1.31c-1.54 0-2.75-1.53-.14-3.48 3.91-2.93 2.54-7.72.67-8.01a1.54 1.54 0 0 0-.24-.02c-1.7 0-2.45 2.93-2.45 2.93s-2.2 5.52-5.97 9.3c-3.78 3.77-3.98 6.8-1.22 10.83 1.87 2.75 5.47 3.58 9.15 3.58 3.82 0 7.73-.9 9.93-1.46.1-.03 13.45-3.8 11.76-7-.29-.54-.75-.76-1.34-.76-2.38 0-6.71 3.54-8.57 3.54-.42 0-.71-.17-.83-.6-.8-2.85 12.05-4.05 10.97-8.17-.19-.73-.7-1.02-1.44-1.02-3.14 0-10.2 5.53-11.68 5.53-.1 0-.19-.03-.23-.1-.74-1.2-.34-2.04 4.88-5.2 5.23-3.16 8.9-5.06 6.8-7.33-.23-.26-.57-.38-.98-.38-3.18 0-10.67 6.82-10.67 6.82s-2.02 2.1-3.24 2.1a.74.74 0 0 1-.68-.38c-.87-1.46 8.05-8.22 8.55-11.01.34-1.9-.24-2.85-1.31-2.85Z"%0A%09/>%0A%09<path%0A%09%09fill="%23FFD21E"%0A%09%09d="M56.33 76.69c-2.75-4.04-2.56-7.07 1.22-10.84 3.77-3.77 5.97-9.3 5.97-9.3s.82-3.2 2.7-2.9c1.86.3 3.23 5.08-.68 8.01-3.92 2.93.78 4.92 2.28 2.17 1.51-2.75 5.63-9.82 7.76-11.18 2.13-1.35 3.64-.6 3.13 2.2-.5 2.79-9.42 9.55-8.55 11 .86 1.47 3.92-1.71 3.92-1.71s9.58-8.71 11.66-6.44c2.08 2.27-1.58 4.17-6.8 7.33-5.23 3.16-5.63 4-4.9 5.2.75 1.2 12.28-8.53 13.36-4.4 1.08 4.11-11.76 5.3-10.97 8.15.8 2.85 9.05-5.38 10.74-2.18 1.69 3.21-11.65 6.98-11.76 7.01-4.31 1.12-15.26 3.49-19.08-2.12Z"%0A%09/>%0A</svg>%0A';var Yd="data:image/webp;base64,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";function Jd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ft;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let d=i[h],f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Zd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let S=0;S<a[h].length;++S)u.push(a[h][S][f]);let m=Zd(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Zd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new vn(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<t;m++){let S=h.getComponent(f,m);o.setComponent(f+d,m,S)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Ax=i=>Object.keys(i.attributes).sort().map(e=>{let t=i.attributes[e];return`${e}${t.itemSize}${t.normalized?"n":""}`}).join(",")+(i.index?":indexed":":flat");function Rx(i){let{material:e,geometry:t}=i;return!i.visible||!e||Array.isArray(e)||e.visible===!1||e.transparent||i.isSkinnedMesh||i.morphTargetInfluences?.length?!1:!!t?.attributes.position}function $d(i,{keep:e=new Set,minGroup:t=2}={}){i.updateMatrixWorld(!0);let n=new Map;i.traverse(r=>{if(!r.isMesh||e.has(r)||!Rx(r))return;let{material:a,geometry:o}=r,c=`${a.uuid}|${Ax(o)}|${+r.castShadow}${+r.receiveShadow}`,l=n.get(c);l||n.set(c,l={material:a,castShadow:r.castShadow,receiveShadow:r.receiveShadow,meshes:[]}),l.meshes.push(r)});let s=[];for(let{material:r,castShadow:a,receiveShadow:o,meshes:c}of n.values()){if(c.length<t)continue;let l=c.map(f=>f.geometry.clone().applyMatrix4(f.matrixWorld)),h=Jd(l,!1);for(let f of l)f.dispose();if(!h)continue;h.computeBoundingSphere();let d=new Ct(h,r);d.castShadow=a,d.receiveShadow=o,i.add(d);for(let f of c)f.removeFromParent();s.push(d)}return s}function Cx(i){let e=new Yi,t=new ln(34,1,.08,65),n=[],s=new ut,r=new ut,a=new ut,o=document.querySelector(".station"),c=document.querySelector("#terminal-wrap"),l=document.querySelector("#keyboard"),h=document.querySelector("#mouse"),d=i.domElement;d.style.removeProperty("display"),document.body.classList.add("spatial"),o.prepend(d),d.setAttribute("aria-label","Bureau de Victor en 3D avec un PC r\xE9tro, la mascotte Clawd, un casque et un carnet de notes sur l\u2019IA");let f=()=>o.getBoundingClientRect(),u=matchMedia("(max-width:760px), (max-height:560px)"),m=matchMedia("(prefers-reduced-motion: reduce)"),S=()=>Math.min(devicePixelRatio,u.matches?1.25:1.65);i.setPixelRatio(S()),i.shadowMap.enabled=!0,i.shadowMap.type=Qi,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0,i.toneMapping=ts,i.toneMappingExposure=1.16,e.background=new nt(3753282),e.fog=new br(5396301,.043);let g=new Wt(1,1,{type:Qt,samples:Math.min(4,i.capabilities.maxSamples)}),p=new Bl(i,g);p.setPixelRatio(i.getPixelRatio()),p.addPass(new zl(e,t));let v=new ba(e,t,512,512,void 0,{radius:.33,thickness:.65,samples:12});p.addPass(v),p.addPass(new Vl);let w=new Ul,y=new js(i);e.environment=y.fromScene(w,.04).texture,e.environmentIntensity=.32,w.dispose(),y.dispose();let A=new $r(16771014,2.9);A.position.set(-5,7,3),A.castShadow=!0,Object.assign(A.shadow.camera,{left:-8,right:8,top:7,bottom:-7,far:26}),A.shadow.mapSize.set(2048,2048),A.shadow.normalBias=.013,e.add(A,new Yr(15003647,5850933,.65));let b=(x,z=.65,G=0)=>new Dt({color:x,roughness:z,metalness:G}),_=b(12760985),E=b(10919041),I=b(2566951),C=b(5792092,.3,.65),D=b(11092002,.37,.3),B=b(14782036),Z=b(14272421);function P(x,z,G,oe,V,K=e){let fe=new Ct(x,z);return fe.position.set(G,oe,V),fe.castShadow=fe.receiveShadow=!0,K.add(fe),fe}let q=new Map,j=new Map,Y=new Bs(1,40,24);function N(x,z,G,oe,V,K,fe,Ne,he){let Ze=[x,z,G,oe].join("/");return q.has(Ze)||q.set(Ze,oe?new Nl(x,z,G,3,oe):new Rn(x,z,G)),P(q.get(Ze),V,K,fe,Ne,he)}function k(x,z,G,oe,V,K,fe,Ne){let he=`${x}/${z}/${G}`,Ze=j.get(he);return Ze||j.set(he,Ze=new Ci(x,z,G,48)),P(Ze,oe,V,K,fe,Ne)}function J(x,z,G,oe=e){let V=new hi;return V.position.set(x,z,G),oe.add(V),V}function re(x,z,G,oe=e){let V=new Pi(x.map(K=>new U(...K)));return P(new ks(V,32,z,8,!1),G,0,0,0,oe)}function Ie(x,z,G,oe,V=e){let K=new Pi(x.map(Ne=>new U(...Ne))),fe=[];for(let Ne=0;Ne<=320;Ne++){let he=Ne/320,Ze=K.getPoint(he),yt=K.getTangent(he),Ce=new U(-yt.z,0,yt.x).normalize(),At=Math.max(0,Math.sin(Math.PI*Oi.clamp((he-.1)/.8,0,1))),gn=he*z*Math.PI*2;fe.push(Ze.clone().addScaledVector(Ce,Math.cos(gn)*G*At).add(new U(0,Math.sin(gn)*G*.5*At+.012,0)))}return P(new ks(new Pi(fe),520,.0155,8,!1),oe,0,0,0,V)}function Ue(x,z,G){let oe=document.createElement("canvas");oe.width=x,oe.height=z,G(oe.getContext("2d"));let V=new Cr(oe);return V.colorSpace=sn,V}function Q(x,z,G,oe,V,K,fe,Ne,he=e){let Ze=Ue(640,100,yt=>{yt.fillStyle=fe,yt.fillRect(0,0,640,100),yt.fillStyle=Ne,yt.font="bold 62px monospace",yt.textBaseline="middle",yt.fillText(x,18,53,605)});return P(new Lt(z,G),new Dt({map:Ze,roughness:.7}),oe,V,K,he)}let ue=new Hs().load(Yd,()=>Nn());ue.colorSpace=sn,ue.wrapS=ue.wrapT=mn,ue.center.set(.5,.5),ue.rotation=Math.PI/2,ue.repeat.set(1.8,3),ue.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let Ee=b(12364168,.58);Ee.map=ue,Ee.bumpMap=ue,Ee.bumpScale=.018,N(16,.25,7.8,.075,Ee,0,-.125,.35);let Oe=b(5333851),ye=Ue(512,512,x=>{let z=x.createImageData(512,512),G=z.data,oe=4169;for(let V=0;V<G.length;V+=4){oe=Math.imul(1664525,oe)+1013904223>>>0;let K=220+(oe>>>20)%32;G[V]=G[V+1]=G[V+2]=K,G[V+3]=255}x.putImageData(z,0,0)});ye.wrapS=ye.wrapT=mn,ye.repeat.set(6,3),Oe.map=ye,Oe.bumpMap=ye,Oe.bumpScale=.005,N(26,13,.18,0,Oe,0,4.5,-4.1);let Ge=Ue(512,512,x=>{x.translate(220,230),x.rotate(-.18);for(let G=-300;G<300;G+=43){let oe=x.createLinearGradient(0,G,0,G+29);oe.addColorStop(0,"#ffc88000"),oe.addColorStop(.25,"#ffd8a06a"),oe.addColorStop(.76,"#ffd8a063"),oe.addColorStop(1,"#ffc88000"),x.fillStyle=oe,x.fillRect(-240,G,475,30)}x.globalCompositeOperation="destination-in";let z=x.createRadialGradient(0,0,70,0,0,280);z.addColorStop(0,"white"),z.addColorStop(1,"transparent"),x.fillStyle=z,x.fillRect(-400,-400,800,800)});P(new Lt(8.5,6),new zn({map:Ge,transparent:!0,depthWrite:!1}),2.6,3.1,-3.99).castShadow=!1;let xt=Ue(128,128,x=>{x.scale(1,1);let z=x.createRadialGradient(64,64,8,64,64,64);z.addColorStop(0,"rgba(30,19,11,.72)"),z.addColorStop(.65,"rgba(30,19,11,.45)"),z.addColorStop(1,"transparent"),x.fillStyle=z,x.fillRect(0,0,128,128)});function Ve(x,z,G,oe,V=.008){let K=P(new Lt(G,oe),new zn({map:xt,transparent:!0,depthWrite:!1}),x,V,z);K.rotation.x=-Math.PI/2,K.castShadow=!1}Ve(0,-.44,6,3.8);let Je=b(3161664,.54,.17),ot=b(9015691,.35,.58);N(4.66,.52,2.45,.08,E,0,.3,-.48),N(4.62,.047,2.39,.018,Je,0,.49,-.46),N(4.6,.43,.1,.03,_,0,.3,.74),N(1.1,.21,.045,.025,I,1.24,.32,.804),N(.79,.034,.04,.01,b(1053714),1.19,.35,.838),N(.13,.048,.048,.012,E,1.61,.26,.838),Q("NO\xCBL  /  PC",.76,.14,-1.38,.31,.802,"#c2b99e","#2b322d");let ae=new Dt({color:12314762,emissive:7779419,emissiveIntensity:.8});N(.045,.032,.02,.008,ae,-.96,.29,.815),N(3.2,.05,1.5,.02,I,0,.565,-.52),k(.5,.54,.1,I,0,.565,-.52);let me=3.6,ge=2.36,Pe=.406,be=me/c.offsetWidth,$e=c.offsetHeight*be;N(4.14,3.26,1.88,.2,E,0,2.18,-.94);let Be=N(4.42,3.33,.75,.16,_,0,2.26,-.025);N(4.25,3.2,.095,.12,Je,0,2.24,.32);function it(x,z,G,oe){let V=z/2,K=G/2;return x.moveTo(-V+oe,-K),x.lineTo(V-oe,-K),x.quadraticCurveTo(V,-K,V,-K+oe),x.lineTo(V,K-oe),x.quadraticCurveTo(V,K,V-oe,K),x.lineTo(-V+oe,K),x.quadraticCurveTo(-V,K,-V,K-oe),x.lineTo(-V,-K+oe),x.quadraticCurveTo(-V,-K,-V+oe,-K),x}let lt=it(new Ji,me+.36,$e+.22,.17);lt.holes.push(it(new Zi,me+.21,$e+.2,.15)),P(new Os(lt,{depth:.06,bevelThickness:.022,bevelSize:.023,bevelSegments:3,curveSegments:10}),C,0,ge,.389),N(me+.22,$e+.21,.052,.125,I,0,ge,Pe-.028);let st=.776,O=.43;N(4.05,.236,.136,.035,Je,0,st,O-.068),Q("V I C T O R   /   N O \xCB L",1.12,.11,-1.4,st,O+.002,"#293635","#f2dfb7");for(let x=0;x<15;x++)N(.022,.09,.015,.008,I,1.11+x*.045,st,O+.007);N(.08,.08,.025,.018,ae,1.91,st,O+.012);for(let x=0;x<15;x++)N(.022,.18,.036,.008,I,2.07,2.95,-1.62+x*.078);let Rt=b(6648174,.45,.34);for(let x of[.51,.79]){let z=k(.071,.077,.065,Rt,x,st,O+.014);z.rotation.x=Math.PI/2,N(.011,.044,.007,.002,Z,x,st+.024,O+.049)}N(.29,.15,.052,.026,I,-1.98,.3,.816),N(.22,.105,.055,.016,B,-1.98,.3,.843),N(.02,.055,.005,.001,I,-1.98,.308,.874);for(let x=0;x<14;x++)N(.42,.014,.038,.006,I,1.68,3.814,-1.67+x*.082);function Qe(x,z,G,oe,V,K,fe){let Ne=J(G,oe,V,z);Ne.rotation.x=K;let he=new ut().set(fe,0,0,-x.offsetWidth*fe/2,0,-fe,0,x.offsetHeight*fe/2,0,0,fe,0,0,0,0,1);n.push({element:x,anchor:Ne,local:he})}Qe(c,e,0,ge,Pe,0,be);let ht=J(-.04,.115,1.91);ht.rotation.set(.075,-.035,0,"YXZ");let xe=-Math.PI/2;N(4.73,.155,1.63,.052,Je,0,-.034,0,ht),N(4.68,.096,1.6,.044,ot,0,.037,0,ht),N(4.64,.088,1.56,.041,Je,0,.079,0,ht),N(4.32,.028,1.33,.032,I,0,.1,0,ht);let St=new Dt({color:12314762,emissive:7779419,emissiveIntensity:.12});N(.05,.018,.05,.012,St,1.98,.098,-.705,ht),N(.05,.018,.05,.012,new Dt({color:15255946,emissive:11826735,emissiveIntensity:.85}),1.85,.098,-.705,ht);let We=Q("N O \xCB L \xB7 8 4",1.05,.1,0,.098,-.72,"#2b322d","#c2b99e",ht);We.rotation.x=-Math.PI/2;let qe=4.28/l.offsetWidth;Qe(l,ht,0,.229,0,xe,qe);let R=new Map,M=b(14802127),W=b(4808033);l.querySelectorAll(".key").forEach(x=>{let z=x.offsetWidth*qe,G=x.offsetHeight*qe,oe=(x.offsetLeft+x.offsetWidth/2-l.offsetWidth/2)*qe,V=(x.offsetTop+x.offsetHeight/2-l.offsetHeight/2)*qe,K=x.dataset.key==="Enter"?B:x.classList.contains("wide")?W:M,fe=N(z,.13,G,.029,K,oe,.166,V,ht);if(!fe.geometry.userData.sculpted){let Ne=fe.geometry.attributes.position;for(let he=0;he<Ne.count;he++){let Ze=Oi.clamp(Ne.getY(he)/.13+.5,0,1);Ne.setX(he,Ne.getX(he)*(1-.065*Ze)),Ne.setZ(he,Ne.getZ(he)*(1-.17*Ze));let yt=2*Ne.getX(he)/z,Ce=2*Ne.getZ(he)/G;Ne.setY(he,Ne.getY(he)-.016*Ze*Math.max(0,1-yt*yt)*Math.max(0,1-Ce*Ce))}fe.geometry.computeVertexNormals(),fe.geometry.userData.sculpted=!0}R.set(x,fe)}),Ve(-.04,1.92,5.55,2.05),N(1.69,.026,1.49,.065,b(3426114,.98),2.93,.02,1.81);let le=J(2.87,.055,1.85);le.rotation.y=-.14;let se=(x,z,G,oe,V,K,fe,Ne)=>{let he=P(Y,oe,V,K,fe,Ne);return he.scale.set(x,z,G),he},_e=b(12569021,.43);function ve(x,z,G,oe,V){let K=[],fe=[];for(let Ce=0;Ce<=24;Ce++){let At=x+(z-x)*Ce/24,gn=.327*Math.pow(Math.max(.025,1-(At/.505)**2),.32)*(1+.09*At),Ua=.258*Math.pow(Math.max(.004,1-(At/.49)**2),.39)*(1+.11*At);for(let ar=0;ar<=24;ar++){let ic=G+(oe-G)*ar/24;if(K.push(gn*ic,.06+Ua*Math.sqrt(Math.max(0,1-ic*ic)),At),ar<24&&Ce<24){let cs=Ce*25+ar;fe.push(cs,cs+24+1,cs+1,cs+1,cs+24+1,cs+24+2)}}}let he=[],Ze=25;for(let Ce=0;Ce<24;Ce++)G<-.98&&he.push([Ce*Ze,(Ce+1)*Ze]),oe>.98&&he.push([(Ce+1)*Ze+24,Ce*Ze+24]),x<-.47&&he.push([Ce+1,Ce]),z>.47&&he.push([24*Ze+Ce,24*Ze+Ce+1]);for(let[Ce,At]of he){let gn=K.length/3;for(let Ua of[Ce,At])K.push(K[3*Ua]*.985,.047,K[3*Ua+2]*.99);fe.push(Ce,gn,At,At,gn,gn+1)}let yt=new Ft;return yt.setAttribute("position",new at(K,3)),yt.setIndex(fe),yt.computeVertexNormals(),P(yt,V,0,0,0,le)}se(.32,.134,.508,Je,0,.12,0,le),ve(-.49,.49,-1,1,Je);let ee=ve(-.478,-.018,-.992,-.024,_e),ne=ve(-.478,-.018,.024,.992,_e),Me=ve(-.003,.49,-.996,.996,b(9610654,.49));Me.position.y=.012,N(.125,.04,.194,.018,I,0,.285,-.178,le);let L=k(.098,.098,.074,Je,0,.298,-.181,le);L.rotation.z=Math.PI/2;for(let x=0;x<14;x++){let z=x*Math.PI*2/14,G=N(.068,.015,.012,.003,I,0,.298+.096*Math.cos(z),-.181+.096*Math.sin(z),le);G.rotation.x=z}N(.09,.018,.031,.006,B,0,.326,.107,le),Qe(h,le,0,.265,0,xe,.0064),k(.032,.032,.07,I,0,.155,-.485,le).rotation.x=Math.PI/2,re([[2.8,.21,1.37],[2.98,.07,1.03],[3.24,.045,.42],[3.44,.035,-.3],[3.3,.03,-1.08],[2.95,.03,-1.8],[2.5,.04,-2.35],[2.15,.05,-2.7]],.022,I),Ie([[1.26,.15,1.12],[1.95,.075,.97],[2.75,.055,.55],[3.12,.05,-.12],[2.95,.05,-1],[2.55,.05,-1.75],[2.05,.05,-2.45],[1.65,.05,-2.85]],11,.075,I);let ie=Ue(256,256,x=>{let z=x.createImageData(256,256),G=z.data,oe=1771;for(let V=0;V<G.length;V+=4){oe=Math.imul(1664525,oe)+1013904223>>>0;let K=210+(oe>>>20)%44;G[V]=G[V+1]=G[V+2]=K,G[V+3]=255}x.putImageData(z,0,0)});ie.wrapS=ie.wrapT=mn,ie.repeat.set(4,4);for(let x of[_,E,W,M])x.bumpMap=ie,x.bumpScale=.0022,x.roughnessMap=ie;for(let x=0;x<20;x++)N(.026,.115,.013,.006,I,-.67+x*.053,.32,.796);for(let x of[-2.16,2.16]){let z=k(.03,.03,.015,C,x,.28,.799);z.rotation.x=Math.PI/2,N(.033,.005,.004,0,I,x,.28,.809)}N(15.4,.29,.12,.015,Ee,0,-.34,3.72),N(15.2,.29,.12,.015,Ee,0,-.34,-3.42);for(let x of[-6.92,6.92])N(.14,.27,6.9,.02,Ee,x,-.32,.24);let te=b(4864554,.55),Te=new Ii([[.1,0],[.116,.9],[.15,2.1],[.158,2.6],[.104,2.8],[.09,2.84],[.09,3]].map(([x,z])=>new ce(x,z)),26);for(let[x,z]of[[-6.9,3.62],[6.9,3.62],[-6.9,-3.14],[6.9,-3.14]])P(Te,te,x,-3.19,z);N(3.1,.5,2.2,.04,Ee,0,-.56,.85),N(3.06,.44,.05,.01,b(2366484,.9),0,-.56,1.955),N(3.02,.42,.05,.01,Ee,0,-.56,2),k(.05,.05,.06,I,0,-.56,2.03).rotation.x=Math.PI/2,N(13.4,1,.09,.02,Ee,0,-1.38,-3.06);let de=J(-4.71,0,-2.6);k(.53,.58,.135,D,0,.09,0,de);function Se(x,z,G,oe,V){let K=new U(...x),fe=new U(...z),Ne=fe.clone().sub(K),he=k(G,G,Ne.length(),oe,0,0,0,V);he.position.copy(K.addScaledVector(Ne,.5)),he.quaternion.setFromUnitVectors(new U(0,1,0),Ne.normalize())}for(let x of[-.085,.085])Se([0,.16,x],[-.52,1.55,x],.047,C,de),Se([-.52,1.55,x],[.3,2.65,x],.04,D,de);for(let[x,z]of[[0,.2],[-.52,1.55],[.3,2.65]]){let G=k(.098,.098,.27,I,x,z,0,de);G.rotation.x=Math.PI/2}let Xe=J(.42,2.56,.025,de);Xe.rotation.z=.54;let ct=b(11947053,.32,.38);ct.side=fn,P(new Ii([[.07,.16],[.19,.11],[.28,-.02],[.43,-.3],[.46,-.32]].map(([x,z])=>new ce(x,z)),64),ct,0,0,0,Xe),k(.432,.425,.018,new Dt({color:16769708,emissive:16760952,emissiveIntensity:1.3}),0,-.309,0,Xe);let pe=new Ki(16758121,12,6);pe.position.set(.6,2.02,.08),de.add(pe),N(.14,.05,.2,.012,I,0,.17,.42,de),Ve(-4.71,-2.6,1.64,1.45);let Ye=J(-2.98,0,1.65),rt=b(7114112,.24);P(new Ii([[.01,.025],[.236,.025],[.27,.06],[.304,.55],[.302,.586],[.286,.59],[.278,.55],[.24,.12]].map(([x,z])=>new ce(x,z)),64),rt,0,0,0,Ye),k(.28,.28,.015,b(2758414,.17),0,.518,0,Ye),re([[-.26,.47,0],[-.45,.48,0],[-.49,.32,0],[-.43,.19,0],[-.26,.19,0]],.044,rt,Ye),Ve(-2.98,1.65,.87,.78);let Ae=J(4.53,0,1.97);Ae.rotation.y=-.12,Ae.scale.setScalar(.85),N(1.47,.12,1.96,.023,Z,0,.083,0,Ae);let Et=b(3887433,.91);for(let x of[.02,.152])N(1.52,.025,2.01,.021,Et,0,x,0,Ae);N(.045,.01,2.01,.002,I,.57,.17,0,Ae);let Pt=J(-.16,.217,.02,Ae);Pt.rotation.set(Math.PI/2,.05,.2,"ZXY"),k(.029,.029,1.48,B,0,0,0,Pt),k(.029,0,.09,Z,0,-.785,0,Pt);let Tn=J(2.52,.004,.56);Tn.rotation.y=.15;let _i=.00131,nr=[[115,68],[580,68],[580,184],[693,184],[693,301],[580,301],[580,527],[522,527],[522,417],[464,417],[464,527],[405,527],[405,417],[289,417],[289,527],[231,527],[231,417],[173,417],[173,527],[115,527],[115,301],[0,301],[0,184],[115,184]],Wl=new Ji(nr.map(([x,z])=>new ce((x-346.5)*_i,(527-z)*_i))),rs=.25;P(new Os(Wl,{depth:rs,bevelEnabled:!1}),b(14251863,.63),0,0,-rs/2,Tn);function ir(x,z,G,oe,V,K,fe){let Ne=new Hs().load(x,Nn);Ne.colorSpace=sn,Ne.anisotropy=ue.anisotropy;let he=P(new Lt(z,G),new Dt({map:Ne,alphaTest:.4,roughness:.7}),oe,V,K,fe);return he.castShadow=!1,he}ir(Xd,693*_i,527*_i,0,527*_i/2,rs/2+.001,Tn),Ve(2.52,.56,.98,.54);let ei=ir(qd,.22,.2,-.65,st,O+.003,e);ei.rotation.z=-.16;let as=Ue(640,700,x=>{x.fillStyle="#f4ebcb",x.fillRect(0,0,640,700),x.strokeStyle="#cfcebb",x.lineWidth=1,x.beginPath();for(let G=0;G<640;G+=25)x.moveTo(G,0),x.lineTo(G,700);for(let G=0;G<700;G+=25)x.moveTo(0,G),x.lineTo(640,G);x.stroke(),x.rotate(-.023),x.fillStyle="#304b64",x.font="italic bold 66px Georgia",x.fillText("test RAG",51,105),x.font="italic 36px Georgia";let z=[["mes notes",193],["embeddings",365],["recherche",539]];x.strokeStyle="#3f5b70",x.lineWidth=5;for(let[G,oe]of z)x.strokeRect(65,oe,332,70),x.fillText(G,85,oe+49),oe<500&&(x.beginPath(),x.moveTo(217,oe+76),x.lineTo(215,oe+145),x.lineTo(204,oe+131),x.moveTo(215,oe+145),x.lineTo(227,oe+130),x.stroke());x.fillStyle="#ac5037",x.font="italic 31px Georgia",x.fillText("top 3 ?",418,582)});as.anisotropy=ue.anisotropy,P(new Lt(1.14,1.32),new Dt({map:as,roughness:.96}),-.07,.172,.02,Ae).rotation.set(xe,0,.045),Pt.position.x=.59,Pt.position.y=.22,Pt.rotation.z=-.04;let ti=J(-4.33,0,1.83);ti.rotation.y=.46;let zi=b(2237735,.88),Ea=b(3490634,.43),sr=b(8949908,.35,.72),xi=[];for(let x=0;x<=18;x++){let z=x*Math.PI/18;xi.push([.56*Math.cos(z),.156+.046*Math.sin(z),-.61*Math.sin(z)])}re(xi,.068,zi,ti);for(let x of[-1,1]){Se([x*.56,.155,0],[x*.48,.158,.224],.039,sr,ti),se(.173,.093,.243,zi,x*.445,.092,.23,ti),se(.168,.082,.227,Ea,x*.445,.188,.23,ti);let z=P(new zs(.096,.008,8,36),sr,x*.445,.26,.23,ti);z.rotation.x=xe}Ve(-4.33,1.83,1.72,1.49);let wa=[Be],Aa=b(2502957,.62,.14),en=b(1778720,.7,.06),ql=b(14603970,.5),Jt=b(10199963,.3,.67),Yl=b(3040148,.48,.1),rr=b(1383192,.52),T=new Dt({color:9234597,emissive:2923352,emissiveIntensity:1.35,roughness:.4}),F=x=>new zn({map:x,toneMapped:!1}),$={perso:"#a44c31",cesi:"#316d71"};function H(x,z,G){let oe=Ue(x,z,G);return oe.anisotropy=ue.anisotropy,oe}function X(x,z,G,oe){let V=H(640,132,he=>{he.fillStyle="#eee6d5",he.fillRect(0,0,640,132),he.fillStyle=G,he.fillRect(0,0,14,132),he.fillStyle="#21332e",he.textAlign="center",he.textBaseline="middle",he.font="bold 76px sans-serif",he.fillText(x,325,69,590)}),K=.2,fe=N(z+.035,K+.035,.014,.006,en,0,.17,.286,oe);fe.rotation.x=-.5;let Ne=P(new Lt(z,K),new Dt({map:V,roughness:.86}),0,.17,.296,oe);Ne.rotation.x=-.5,Ne.castShadow=!1,N(z+.04,.012,.028,.004,Jt,0,.047,.282,oe)}function Re(x,z,G,oe,V=0){let K=J(z,V,G);K.rotation.y=oe,N(.68,.055,.5,.02,Aa,0,.0275,0,K),N(.64,.006,.46,.003,b(1910563,.8),0,.056,0,K),N(.58,.12,.42,.018,b(2042149,.6,.06),0,.115,-.035,K),X(x.label,.91,$[x.collection],K);let fe=P(new Hr(.46,.52,48),new zn({color:12120256,transparent:!0,opacity:.62,side:fn,depthWrite:!1,toneMapped:!1}),0,.004,0,K);return fe.rotation.x=-Math.PI/2,fe.visible=!1,fe.castShadow=!1,fe.receiveShadow=!1,K.userData.projectId=x.id,K.userData.ring=fe,Ve(z,G,.88,.7,V+.008),K}function Fe(x,z,G,oe,V){let K=P(new Vr(oe),T,x,z,G,V);return K.castShadow=!1,K}function we(x){k(.1,.12,.3,b(8629946,.25),-.15,.06+.15,0,x),k(.1,.072,.06,b(8629946,.25),-.15,.06+.33,0,x),k(.034,.034,.08,b(15393489,.42),-.15,.06+.39,0,x),N(.15,.06,.11,.022,b(15393489,.45),-.15,.06+.45,.01,x),N(.035,.028,.095,.012,b(15393489,.45),-.15,.06+.455,.105,x),N(.055,.018,.018,.006,en,-.15,.06+.418,.07,x);let G=H(256,256,V=>{V.fillStyle="#edf5e8",V.fillRect(0,0,256,256),V.strokeStyle="#6fae7c",V.lineWidth=7,V.strokeRect(8,8,240,240),V.fillStyle="#34714a",V.font="bold 46px Georgia",V.textAlign="center",V.fillText("OPEN",128,104),V.fillText("CLEANER",128,158),V.fillStyle="#6fae7c",V.font="34px sans-serif",V.fillText("\u2726",128,214)});P(new Lt(.145,.155),F(G),-.15,.06+.17,.121,x),Fe(-.31,.06+.38,.04,.03,x),Fe(-.02,.06+.5,.05,.024,x),Fe(-.24,.06+.52,-.02,.018,x),N(.17,.26,.15,.014,b(14209210,.44),.17,.06+.13,0,x),N(.15,.225,.012,.005,en,.17,.06+.13,.081,x);for(let V=0;V<3;V++)N(.095,.017,.008,.004,Jt,.17,.06+.225-V*.029,.088,x);N(.018,.012,.008,.003,T,.17,.06+.052,.09,x);let oe=H(128,128,V=>{V.fillStyle="#f0ead8",V.fillRect(0,0,128,128),V.strokeStyle="#4b9a64",V.lineWidth=14,V.lineCap="round",V.beginPath(),V.moveTo(28,68),V.lineTo(53,92),V.lineTo(101,38),V.stroke()});P(new Lt(.06,.06),F(oe),.17,.06+.075,.089,x)}function Le(x){N(.24,.035,.18,.014,en,0,.06+.018,0,x),N(.048,.23,.048,.012,Jt,0,.06+.14,-.015,x),N(.16,.028,.12,.008,en,0,.06+.05,.02,x);let G=k(.175,.175,.06,en,0,.06+.34,-.015,x);G.rotation.x=Math.PI/2;let oe=P(new zs(.162,.014,10,48),Jt,0,.06+.34,.02,x);oe.castShadow=!1;let V=H(512,512,he=>{he.fillStyle="#f0e6ce",he.beginPath(),he.arc(256,256,248,0,Math.PI*2),he.fill(),he.strokeStyle="#3c4d44",he.lineWidth=10,he.stroke(),he.strokeStyle="#64796d",he.lineWidth=5;for(let Ze=0;Ze<=10;Ze++){let yt=Math.PI*.78+Ze*Math.PI*.44/10,Ce=256+Math.cos(yt)*195,At=256+Math.sin(yt)*195;he.beginPath(),he.moveTo(256+Math.cos(yt)*174,256+Math.sin(yt)*174),he.lineTo(Ce,At),he.stroke()}he.fillStyle="#3c4d44",he.textAlign="center",he.font="bold 42px Georgia",he.fillText("SARDOCHE",256,140),he.font="bold 92px Georgia",he.fillStyle="#a44c31",he.fillText("8.5",256,372),he.fillStyle="#64796d",he.font="32px monospace",he.fillText("SUR 10",256,418)}),K=P(new Lr(.15,48),F(V),0,.06+.34,.021,x);K.castShadow=!1;let fe=J(0,.06+.34,.031,x);N(.011,.105,.006,.002,b(11947053,.4),0,.042,0,fe),fe.rotation.z=-2.35;let Ne=k(.023,.023,.014,en,0,.06+.34,.036,x);Ne.rotation.x=Math.PI/2}function He(x){N(.3,.028,.19,.01,en,0,.06+.014,0,x);let G=J(0,.06+.2,-.03,x);G.rotation.x=-.14,N(.39,.265,.024,.016,en,0,0,0,G);let oe=H(640,420,K=>{K.fillStyle="#13251f",K.fillRect(0,0,640,420),K.fillStyle="#1d3830",K.fillRect(0,0,640,62),K.fillStyle="#bce9c9",K.font="bold 26px monospace",K.fillText("COTALYSE",24,40),K.strokeStyle="#2d5145",K.lineWidth=2;for(let fe=52;fe<620;fe+=72)K.beginPath(),K.moveTo(fe,96),K.lineTo(fe,356),K.stroke();for(let fe=110;fe<380;fe+=62)K.beginPath(),K.moveTo(36,fe),K.lineTo(610,fe),K.stroke();K.strokeStyle="#8fe0a5",K.lineWidth=7,K.beginPath(),K.moveTo(58,334),K.lineTo(156,292),K.lineTo(252,306),K.lineTo(350,224),K.lineTo(448,240),K.lineTo(566,126),K.stroke(),K.fillStyle="#8fe0a5";for(let[fe,Ne]of[[58,334],[156,292],[252,306],[350,224],[448,240],[566,126]])K.beginPath(),K.arc(fe,Ne,7,0,Math.PI*2),K.fill();K.fillStyle="#f3e8ca",K.font="bold 50px monospace",K.fillText("1.85",478,352),K.font="20px monospace",K.fillStyle="#b2cbbd",K.fillText("COTE OUEST",36,392)});P(new Lt(.345,.225),F(oe),0,0,.013,G),N(.018,.18,.018,.006,Jt,-.14,.06+.1,.06,x).rotation.x=.28,N(.018,.18,.018,.006,Jt,.14,.06+.1,.06,x).rotation.x=.28;let V=H(512,256,K=>{K.fillStyle="#ece7d7",K.fillRect(0,0,512,256),K.fillStyle="#26332d";for(let[fe,Ne,he]of[[84,66,34],[236,42,30],[388,78,33],[150,166,32],[322,150,35],[450,208,26],[34,214,24]]){K.beginPath();for(let Ze=0;Ze<5;Ze++){let yt=-Math.PI/2+Ze*Math.PI*2/5,Ce=fe+Math.cos(yt)*he,At=Ne+Math.sin(yt)*he;Ze?K.lineTo(Ce,At):K.moveTo(Ce,At)}K.closePath(),K.fill()}});P(new Bs(.078,28,18),new Dt({map:V,roughness:.62}),.22,.06+.078,.12,x)}function et(x){N(.3,.028,.16,.01,en,0,.06+.014,-.02,x),N(.026,.18,.026,.006,Jt,-.12,.06+.11,-.07,x),N(.026,.18,.026,.006,Jt,.12,.06+.11,-.07,x);let G=J(0,.06+.265,-.05,x);G.rotation.x=-.14,N(.37,.37,.03,.012,en,0,0,0,G);let oe=new Set(["1,2","2,3","3,1","3,2","3,3"]),V=H(640,640,fe=>{fe.fillStyle="#102019",fe.fillRect(0,0,640,640);let Ne=118,he=35;for(let Ze=0;Ze<5;Ze++)for(let yt=0;yt<5;yt++)fe.fillStyle=oe.has(`${yt},${Ze}`)?"#76d891":"#213a2e",fe.fillRect(he+yt*Ne+4,he+Ze*Ne+4,Ne-8,Ne-8);fe.strokeStyle="#345446",fe.lineWidth=2;for(let Ze=0;Ze<=5;Ze++)fe.beginPath(),fe.moveTo(he+Ze*Ne,he),fe.lineTo(he+Ze*Ne,he+5*Ne),fe.stroke(),fe.beginPath(),fe.moveTo(he,he+Ze*Ne),fe.lineTo(he+5*Ne,he+Ze*Ne),fe.stroke()});P(new Lt(.33,.33),F(V),0,0,.017,G);let K=.33/5;for(let fe of oe){let[Ne,he]=fe.split(",").map(Number);N(K*.58,K*.58,.009,.003,T,(Ne-2)*K,(2-he)*K,.023,G)}}function pt(x){N(.4,.022,.26,.01,ql,0,.06+.011,.02,x);for(let V=0;V<3;V++)N(.31,.003,.013,.001,Jt,0,.06+.023,.02+V*.031,x);let G=J(0,.06+.026,-.105,x);G.rotation.x=-.18,N(.37,.28,.02,.012,en,0,.14,0,G);let oe=H(640,500,V=>{V.fillStyle="#f3eddb",V.fillRect(0,0,640,500),V.fillStyle="#d9d0b9",V.fillRect(0,0,640,66),V.fillStyle="#b35c3b",V.beginPath(),V.arc(28,33,9,0,7),V.fill(),V.fillStyle="#c9a24f",V.beginPath(),V.arc(56,33,9,0,7),V.fill(),V.fillStyle="#5f9570",V.beginPath(),V.arc(84,33,9,0,7),V.fill(),V.fillStyle="#fbf7e9",V.fillRect(118,17,460,32),V.fillStyle="#56665b",V.font="22px monospace",V.fillText("web4all.cesi/stages",138,41),V.fillStyle="#245449",V.font="bold 54px Georgia",V.fillText("Web4All",42,150),V.fillStyle="#56665b",V.font="24px monospace",V.fillText("Gestion des stages \u2014 CESI",44,190);for(let K=0;K<3;K++){let fe=236+K*80;V.fillStyle=K===0?"#e2eee4":"#e8e1ce",V.fillRect(40,fe,540,58),V.fillStyle="#3b5a4d",V.font="bold 24px monospace",V.fillText(["Stage \u2014 Data","Stage \u2014 R\xE9seau","Stage \u2014 Web"][K],58,fe+37),V.fillStyle="#8b978b",V.fillRect(488,fe+16,68,26)}});P(new Lt(.335,.245),F(oe),0,.14,.011,G),N(.025,.025,.012,.004,T,.02,.06+.03,.135,x)}function ke(x){let G=J(0,.08499999999999999,.01,x);G.rotation.set(-.05,.13,0),N(.4,.026,.27,.008,Yl,0,0,0,G),N(.095,.022,.095,.004,rr,0,.024,.01,G);for(let V of[-.155,.155])for(let K=0;K<9;K++)N(.012,.024,.018,.002,rr,V,.021,-.095+K*.024,G);N(.065,.032,.055,.006,Jt,-.16,.022,.095,G);let oe=H(512,128,V=>{V.fillStyle="#2e6394",V.fillRect(0,0,512,128),V.fillStyle="#f0ead8",V.font="bold 40px monospace",V.fillText("NUCLEO-L476",20,78)});P(new Lt(.16,.04),F(oe),.02,.014,.015,G).rotation.x=-Math.PI/2;for(let V=0;V<4;V++)N(.15,.011,.11,.003,b(V%2?4546387:4020043,.78),.13,.06+.095+V*.015,-.03,x),N(.05,.006,.008,.002,Jt,.19,.06+.1+V*.015,.025,x);N(.024,.1,.024,.006,Jt,.13,.06+.15,-.03,x),re([[.13,.2,-.03],[.1,.245,.01],[.07,.285,.03]],.006,B,x),Fe(-.24,.06+.12,.04,.026,x)}function mt(x){N(.32,.26,.18,.03,b(14933453,.5),-.06,.06+.13,0,x);let G=H(640,380,Ce=>{Ce.fillStyle="#0b1b14",Ce.fillRect(0,0,640,380),Ce.strokeStyle="#284237",Ce.lineWidth=4,Ce.strokeRect(10,10,620,360),Ce.fillStyle="#a9e6b8",Ce.font="bold 28px monospace",Ce.fillText("3WW  \xB7  LILLE",34,54),Ce.strokeStyle="#ffcf72",Ce.lineWidth=9,Ce.lineCap="round",Ce.beginPath(),Ce.arc(116,150,42,0,Math.PI*2),Ce.stroke();for(let At=0;At<8;At++){let gn=At*Math.PI/4;Ce.beginPath(),Ce.moveTo(116+Math.cos(gn)*58,150+Math.sin(gn)*58),Ce.lineTo(116+Math.cos(gn)*76,150+Math.sin(gn)*76),Ce.stroke()}Ce.fillStyle="#d9f3df",Ce.font="bold 118px monospace",Ce.fillText("22.4\xB0",224,196),Ce.fillStyle="#7fb395",Ce.font="30px monospace",Ce.fillText("VENT 12 km/h",34,306),Ce.fillText("HUM. 64 %",340,306)});P(new Lt(.225,.135),F(G),-.06,.06+.17,.091,x);for(let Ce=0;Ce<3;Ce++){let At=k(.016,.016,.014,en,-.13+Ce*.055,.13,.095,x);At.rotation.x=Math.PI/2}N(.03,.012,.006,.002,T,-.02,.06+.245,.091,x);let oe=.24;k(.012,.015,.55,Jt,oe,.06+.275,-.03,x);let V=J(oe,.06+.52,-.03,x);k(.024,.024,.03,en,0,0,0,V);let K=new Dt({color:3950660,roughness:.45,metalness:.45,side:fn});for(let Ce=0;Ce<3;Ce++){let At=J(0,0,0,V);At.rotation.y=Ce*Math.PI*2/3,N(.075,.011,.011,.003,Jt,.04,0,0,At),P(new Ci(.035,.028,.042,12,1,!0),K,.085,0,0,At)}let fe=J(oe,.06+.61,-.03,x);fe.rotation.y=.5,N(.13,.008,.012,.002,Jt,.02,0,0,fe);let Ne=P(new Dr(.03,.07,4),b(11947053,.4),-.045,0,0,fe);Ne.rotation.z=Math.PI/2,N(.016,.055,.006,.002,Jt,.075,.012,0,fe),k(.03,.03,.12,b(12175040,.38),-.255,.06+.12,.02,x);let he=P(new Ci(.065,.028,.045,18,1,!0),new Dt({color:14673887,roughness:.35,metalness:.1,side:fn}),-.255,.06+.2,.02,x);he.castShadow=!1;let Ze=N(.145,.008,.085,.003,b(2181226,.28,.36),-.06,.06+.285,-.045,x);Ze.rotation.x=-.42;let yt=H(256,96,Ce=>{Ce.fillStyle="#f0ead8",Ce.fillRect(0,0,256,96),Ce.fillStyle="#316d71",Ce.font="bold 52px monospace",Ce.textAlign="center",Ce.fillText("3WW",128,66)});P(new Lt(.09,.034),F(yt),-.06,.06+.095,.091,x)}let Ot={cleaner:we,meter:Le,cotalyse:He,life:et,web:pt,prosit:ke,station:mt},wt=window.CV_PROJECTS||[],vt=-1.15,kt=.34,ze=.44,tn={opencleaner:{x:-3.91,z:kt,turn:.12},sardochemetre:{x:-4.77,z:vt,turn:.19},cotalyse:{x:-3.31,z:vt,turn:.1},"3ww":{x:4.72,z:vt,turn:-.18},web4all:{x:3.26,z:vt,turn:-.12},conway:{x:3.46,z:kt,turn:-.1},prosit5:{x:4.88,z:kt+.16,turn:-.19}};for(let[x,z]of[[-4.04,"PROJETS PERSO"],[3.99,"PROJETS CESI"]])N(2.61,ze,.83,.045,Ee,x,ze/2,vt),Q(z,1.13,.115,x+.44,.27,vt+.417,"#3a332a","#efe7d5");let Mt=new zn({visible:!1});for(let x of wt){let z=tn[x.id],G=Ot[x.model];if(!z||!G)continue;let{x:oe,z:V,turn:K}=z,Ne=Re(x,oe,V,K,V===vt?ze:0),he=J(0,.067,0,Ne);he.scale.setScalar(1.32),G(he);let Ze=N(1.02,x.id==="3ww"?1:.81,.77,0,Mt,0,.4,.02,Ne);Ze.castShadow=!1,Ze.receiveShadow=!1,wa.push(Ze)}let ni=Ue(512,640,x=>{x.fillStyle="#ede6d3",x.fillRect(0,0,512,640),x.fillStyle="#192e44",x.fillRect(25,25,462,468),x.save(),x.beginPath(),x.rect(25,25,462,468),x.clip(),x.translate(251,266),x.rotate(-.35),x.lineWidth=2.4;for(let z=0;z<76;z++){let G=z*.038;x.strokeStyle=z<43?"#a9cdd0":"#f98352",x.beginPath();for(let oe=0;oe<=240;oe++){let V=2*Math.PI*oe/240,K=105+45*Math.cos(3*V+G)+16*Math.sin(5*V-G),fe=K*Math.cos(V)+56*Math.cos(G),Ne=K*Math.sin(V)+77*Math.sin(G);oe===0?x.moveTo(fe,Ne):x.lineTo(fe,Ne)}x.closePath(),x.stroke()}x.restore(),x.fillStyle="#24384b",x.font="bold 53px sans-serif",x.fillText("Espace latent",25,571)}),Gt=J(3.93,1.77,-3.975);Gt.rotation.z=-.027,P(new Lt(1.28,1.6),new Dt({map:ni,roughness:1}),0,0,0,Gt);let ki=b(13813412,.94);for(let x of[-1,1]){let z=N(.3,.084,.005,.002,ki,x*.47,.798,.012,Gt);z.rotation.z=x*.18}let Hn=Ue(620,750,x=>{x.fillStyle="#ede6d1",x.fillRect(0,0,620,750),x.fillStyle="#283831",x.fillRect(42,49,536,6),x.font="bold 63px Georgia",x.fillText("Attention Is All",40,145),x.fillText("You Need",40,219),x.font="24px monospace",x.fillText("Vaswani et al.  /  2017",43,279),x.strokeStyle="#52746d",x.lineWidth=4,x.font="bold 34px monospace";for(let z=0;z<3;z++){let G=105+z*193;x.strokeRect(G-37,349,74,61),x.fillText(["Q","K","V"][z],G-12,390),x.beginPath(),x.moveTo(G,415),x.lineTo(G,456),x.lineTo(297,501),x.stroke()}x.fillStyle="#c97550",x.fillRect(93,510,423,70),x.fillStyle="#27382f",x.font="31px Georgia",x.fillText("Scaled dot-product attention",117,554),x.font="italic 28px Georgia",x.fillText("relire avant le prochain test",58,683)}),Dn=J(-6.03,2.64,-3.97);Dn.rotation.z=.075,P(new Lt(1.37,1.66),new Dt({map:Hn}),0,0,0,Dn),N(.39,.1,.007,.002,ki,0,.814,.009,Dn);let gt=2.85;N(4.35,.13,.77,.024,Ee,4.93,gt-.065,-3.53);let Xt=[{title:"Deep Learning",width:2.09,height:.245,color:"#344b48",ink:"#fff2cb",font:"bold 60px Georgia"},{title:"Dive into Deep Learning",width:2.04,height:.225,color:"#e8d4ae",ink:"#253b45",font:"bold 55px sans-serif"},{title:"Human Compatible",width:1.94,height:.21,color:"#973f27",ink:"#fff1dc",font:"bold 60px Georgia"}],pn=gt;Xt.forEach(({title:x,width:z,height:G,color:oe,ink:V,font:K},fe)=>{let Ne=J(4.04+fe*.025,pn,-3.48);Ne.rotation.y=[-.025,.035,-.06][fe];let he=b(oe,.9),Ze=.73;N(z-.04,G-.044,Ze-.045,.012,Z,0,G/2,0,Ne);for(let Ce of[.011,G-.011])N(z,.022,Ze,.009,he,0,Ce,0,Ne);N(z,G,.052,.018,he,0,G/2,Ze/2-.013,Ne);let yt=Ue(720,80,Ce=>{Ce.fillStyle=oe,Ce.fillRect(0,0,720,80),Ce.fillStyle=V,Ce.fillRect(14,12,3,56),Ce.fillRect(21,12,2,56),Ce.textBaseline="middle",Ce.font=K,Ce.fillText(x,39,42,642)});yt.anisotropy=ue.anisotropy,P(new Lt(z-.045,G-.025),new Dt({map:yt,roughness:.9}),0,G/2,Ze/2+.014,Ne),pn+=G});let bt=J(-2.9,0,-3.9),Bt=b(13616814,.62);N(3.9,.16,.24,.03,Bt,0,4.64,0,bt),N(3.9,.16,.24,.03,Bt,0,1.56,0,bt);for(let x of[-1.87,1.87])N(.16,3.24,.24,.03,Bt,x,3.1,0,bt);N(4.34,.13,.5,.03,Ee,0,1.36,.28,bt),P(new Lt(3.62,3.08),new zn({color:15918792}),0,3.1,-.02,bt).castShadow=!1;let En=b(14207400,.85);for(let x=0;x<13;x++){let z=N(3.66,.062,.02,.008,En,0,4.42-x*.155,.05,bt);z.rotation.x=-.93}N(3.7,.09,.03,.01,En,0,2.44,.05,bt).rotation.x=-.93,k(.013,.013,2.1,b(14275261,.9),-1.45,3.3,.1,bt);let vi=ue.clone();vi.needsUpdate=!0,vi.rotation=0,vi.repeat.set(5,4.6);let Ra=b(9075294,.62);Ra.map=vi,Ra.bumpMap=vi,Ra.bumpScale=.02,N(46,.32,32,.25,Ra,0,-3.35,-.4),N(26,.55,.16,.02,b(10130821,.9),0,-2.92,-3.93);let Kd=Ue(768,512,x=>{x.fillStyle="#44584d",x.fillRect(0,0,768,512),x.strokeStyle="#b06a3e",x.lineWidth=10,x.strokeRect(18,18,732,476),x.strokeStyle="#d9d2bd",x.lineWidth=3,x.strokeRect(42,42,684,428),x.strokeStyle="#b06a3e",x.lineWidth=4;for(let z=96;z<672;z+=96)x.beginPath(),x.moveTo(z,96),x.lineTo(z+48,256),x.lineTo(z,416),x.lineTo(z-48,256),x.closePath(),x.stroke();x.strokeStyle="#d9d2bd";for(let z=144;z<672;z+=96)x.beginPath(),x.moveTo(z,150),x.lineTo(z+32,256),x.lineTo(z,362),x.lineTo(z-32,256),x.closePath(),x.stroke()});N(7.6,.07,5.3,.05,b(3951170,.98),-.9,-3.155,4.25);let jd=P(new Lt(7.5,5.2),new Dt({map:Kd,roughness:.97}),-.9,-3.114,4.25);jd.rotation.x=-Math.PI/2;let ii=J(-5.8,-3.15,4.68);ii.rotation.y=.7;let bh=b(11754547,.72);for(let x=0;x<5;x++){let z=x*Math.PI*2/5,G=N(1.02,.085,.13,.02,I,Math.cos(z)*.52,.09,Math.sin(z)*.52,ii);G.rotation.y=-z,se(.105,.105,.075,I,Math.cos(z)*1,.1,Math.sin(z)*1,ii)}k(.06,.075,2,C,0,1.12,0,ii),k(.13,.13,.34,I,0,2.12,0,ii),N(1.38,.12,1.3,.04,I,0,2.12,0,ii),N(1.5,.32,1.42,.11,bh,0,2.32,0,ii);let Qd=N(1.34,1.86,.26,.11,bh,0,3.27,.66,ii);Qd.rotation.x=.15,N(1.4,.1,.22,.03,I,0,4.2,.84,ii).rotation.x=.15;let os=J(1.4,-3.08,-3.5);N(2.8,.22,.58,.05,I,0,0,0,os);for(let x of[-1.05,-.35,.35,1.05])N(.3,.028,.34,.01,b(1053714,.6),x,.115,0,os);let ef=b(14275261,.5);for(let x of[-1.05,-.35,.35])k(.055,.055,.16,ef,x,.2,-.02,os).rotation.x=1.25,N(.07,.03,.1,.012,I,x,.13,-.14,os);N(.14,.05,.2,.012,I,-1.32,.12,0,os),N(.05,.03,.05,.01,new Dt({color:16738906,emissive:13909807,emissiveIntensity:1.1}),1.26,.12,.12,os),re([[-1.1,.1,-1.78],[-1.3,.055,-2.5],[-1.35,.045,-3.25],[-1.4,.03,-3.6],[-1.45,-1.3,-3.8],[-1.45,-2.8,-3.7],[-1,-2.9,-3.55],[.95,-2.92,-3.55]],.024,I),re([[1.55,1.1,-1.95],[2.2,.5,-2.5],[2.45,.09,-3],[2.5,.05,-3.42],[2.55,.02,-3.7],[2.6,-1.4,-3.8],[2.6,-2.8,-3.7],[2,-2.9,-3.55],[1.78,-2.92,-3.52]],.026,I),re([[-4.71,.07,-2.8],[-4.38,.05,-3.04],[-3.9,.04,-3.3],[-3.95,.02,-3.68],[-4,-1.4,-3.78],[-4,-2.8,-3.7],[-2.6,-2.9,-3.58],[.3,-2.92,-3.52]],.024,I);for(let x of[3.25,6.55])N(.09,.4,.34,.02,C,x,gt-.33,-3.83);let tf=new Ii([[.01,0],[.12,0],[.145,.04],[.16,.26],[.172,.28],[.148,.28],[.13,.05]].map(([x,z])=>new ce(x,z)),32),Zl=J(5.6,gt,-3.46);P(tf,b(10246716,.8),0,0,0,Zl),k(.125,.125,.02,b(2365970,.95),0,.25,0,Zl);for(let x=0;x<7;x++){let z=x*Math.PI*2/7+.4;se(.3,.01,.1,x%2?b(4153151,.8):b(5337677,.8),Math.cos(z)*.13,.32+x%3*.1,Math.sin(z)*.13,Zl).rotation.set(0,-z,.55+x%3*.12,"YXZ")}let Jl=new Set(R.values());le.traverse(x=>{x.isMesh&&Jl.add(x)}),Jl.add(Be),$d(e,{keep:Jl});let Th=.035,Eh=.455,Ca=Th,Pa=Eh,Vt=null,nn=!1,$l=!1,Ia=0,yi=!0,ls={width:0,height:0,ratio:0},Kl=document.querySelector(".view-controls");Kl.hidden=!1;let La=document.getElementById("read-monitor"),jl=new U,Ql=Math.tan(Oi.degToRad(t.fov/2));function Nn(){yi&&!$l&&!(nn&&u.matches)&&($l=!0,Ia=requestAnimationFrame(wh))}function wh(){if($l=!1,Ia&&(cancelAnimationFrame(Ia),Ia=0),!yi||!d.isConnected||nn&&u.matches)return;let x=u.matches&&t.aspect<1.3;jl.set(0,nn?ge:x?1.86:1.4,nn?Pe:.4);let z=nn?Math.max(($e/2+.3)/Ql,(me/2+.25)/(Ql*t.aspect)):Math.max(x?9.3:11.1,(x?3.6:u.matches?5.82:5.65)/(Ql*t.aspect)),G=nn?.022:Ca,oe=nn?.055:Pa;t.position.set(Math.sin(G)*Math.cos(oe),Math.sin(oe),Math.cos(G)*Math.cos(oe)).multiplyScalar(z).add(jl),t.lookAt(jl),t.updateMatrixWorld(),p.render(),r.copy(s).multiply(t.projectionMatrix).multiply(t.matrixWorldInverse);for(let{element:V,anchor:K,local:fe}of n)K.updateWorldMatrix(!0,!1),a.multiplyMatrices(r,K.matrixWorld).multiply(fe),V.style.setProperty("--projection",`matrix3d(${a.elements.join(",")})`)}function Da(){if(!yi||!d.isConnected||nn&&u.matches)return;let{width:x,height:z}=f(),G=S();v.enabled=!u.matches,!(x===ls.width&&z===ls.height&&G===ls.ratio)&&(ls.width=x,ls.height=z,ls.ratio=G,t.aspect=x/z,t.updateProjectionMatrix(),s.set(x/2,0,0,x/2,0,-z/2,0,z/2,0,0,1,0,0,0,0,1),i.getPixelRatio()!==G&&(i.setPixelRatio(G),p.setPixelRatio(G)),v.enabled=!u.matches,i.setSize(x,z),p.setSize(x,z),Nn())}function Na(x){nn=x,document.body.classList.toggle("reading",x),si(null);let z=x?"Vue du bureau":"Lire l\u2019\xE9cran";La.lastElementChild.textContent=z,La.title=z,La.setAttribute("aria-expanded",String(x)),!x&&u.matches&&Da(),Nn()}La.onclick=()=>Na(!nn),Kl.lastElementChild.onclick=()=>{Ca=Th,Pa=Eh,Na(!1)};function Ah(){Na(!0),c.querySelector("section:not([hidden]) :is(h1,#dossier-title,#terminal-body)")?.focus({preventScroll:!0})}c.addEventListener("click",x=>{!yi||nn||x.defaultPrevented||x.target.closest("a,button,summary,input")||getSelection()?.isCollapsed!==!1&&Ah()}),c.addEventListener("cv:read-screen",()=>{yi&&!nn&&(u.matches||c.getBoundingClientRect().width<560)&&Na(!0)});let Gi=document.getElementById("desk-tip"),Rh=Gi.firstElementChild,Ch=Gi.lastElementChild,Ph=new jr,Ih=new ce,ec=[],tc=null;function Lh(x,z){let G=d.getBoundingClientRect();return Ih.set((x-G.left)/G.width*2-1,-(z-G.top)/G.height*2+1),Ph.setFromCamera(Ih,t),ec.length=0,Ph.intersectObjects(wa,!1,ec),ec[0]?.object??null}function nf(x,z){if(Gi.hidden)return;let G=10,oe=Gi.getBoundingClientRect(),V=x+16,K=z+18;V+oe.width>innerWidth-G&&(V=x-oe.width-16),K+oe.height>innerHeight-G&&(K=z-oe.height-18),Gi.style.left=Math.max(G,V)+"px",Gi.style.top=Math.max(G,K)+"px"}function si(x){if(x===tc)return;let z=tc?.parent.userData.ring,G=x?.parent.userData.ring;if(z&&(z.visible=!1),G&&(G.visible=!0),tc=x,d.style.cursor=x?"pointer":"",Gi.hidden=!x,x===Be)Rh.textContent="Moniteur",Ch.textContent="Cliquer pour lire l\u2019\xE9cran";else if(x){let oe=wt.find(V=>V.id===x.parent.userData.projectId);Rh.textContent=oe.name,Ch.textContent=(oe.collection==="cesi"?"Projet CESI":"Projet perso")+" \xB7 ouvrir sur le PC"}(z||G)&&Nn()}d.addEventListener("pointerdown",x=>{nn||Vt||x.button!==0||(si(null),Vt={x:x.clientX,y:x.clientY,yaw:Ca,pitch:Pa,id:x.pointerId,moved:!1},d.setPointerCapture(x.pointerId))}),d.addEventListener("pointermove",x=>{if(Vt){if(x.pointerId!==Vt.id||!Vt.moved&&Math.hypot(x.clientX-Vt.x,x.clientY-Vt.y)<=6)return;Vt.moved=!0,si(null),Ca=Oi.clamp(Vt.yaw-(x.clientX-Vt.x)*.003,-.62,.62),Pa=Oi.clamp(Vt.pitch+(x.clientY-Vt.y)*.002,.15,.6),Nn();return}if(nn){si(null);return}si(Lh(x.clientX,x.clientY)),nf(x.clientX,x.clientY)}),d.addEventListener("pointerup",x=>{if(!Vt||Vt.id!==x.pointerId)return;let z=Vt.moved;if(Vt=null,z||nn)return;let G=Lh(x.clientX,x.clientY);G===Be?Ah():G&&(si(null),window.dispatchEvent(new CustomEvent("cv:open-project",{detail:G.parent.userData.projectId})))}),d.addEventListener("pointerleave",()=>{Vt||si(null)}),d.addEventListener("lostpointercapture",x=>{Vt?.id===x.pointerId&&(Vt=null)}),window.addEventListener("blur",()=>si(null)),document.addEventListener("pointermove",x=>{if(!yi||!d.isConnected||x.pointerType==="touch"||nn||m.matches||document.querySelector("dialog[open]"))return;let z=2.87+(x.clientX/innerWidth-.5)*.11,G=1.85+(x.clientY/innerHeight-.5)*.08;Math.abs(z-le.position.x)+Math.abs(G-le.position.z)<.003||(le.position.x=z,le.position.z=G,Nn())});function Dh(x){x!==yi&&(yi=x,d.hidden=!x,Kl.hidden=!x,document.body.classList.toggle("spatial",x),document.body.classList.toggle("reading",x&&nn),x?(Da(),Nn()):(Vt=null,si(null)))}let Nh=l.querySelector('[data-key="Shift"]'),nc=h.querySelector(".left"),Uh=h.querySelector(".right"),Fh=h.querySelector(".wheel"),sf=[nc,Uh,Fh];function Oh(x){let z=R.get(x);if(!z)return!1;let G=x.classList.contains("on")||x.classList.contains("pressed")?.129:.166;return z.position.y===G?!1:(z.position.y=G,!0)}function Bh(){let x=Nh?.classList.contains("on")?1.6:.12;return St.emissiveIntensity===x?!1:(St.emissiveIntensity=x,!0)}function zh(x){if(x===nc||x===Uh){let z=x===nc?ee:ne,G=x.classList.contains("on")?-.005:.014;return z.position.y===G?!1:(z.position.y=G,!0)}if(x===Fh){let z=x.classList.contains("on")?B:I;return L.material===z?!1:(L.material=z,!0)}return!1}for(let x of R.keys())Oh(x);Bh();for(let x of sf)zh(x);let kh=new MutationObserver(x=>{let z=!1;for(let G of x)R.has(G.target)&&Oh(G.target)&&(z=!0),G.target===Nh&&Bh()&&(z=!0);z&&Nn()}),Gh=new MutationObserver(x=>{let z=!1;for(let G of x)zh(G.target)&&(z=!0);z&&Nn()}),Vh=new ResizeObserver(Da);return kh.observe(l,{attributes:!0,attributeFilter:["class"],subtree:!0}),Gh.observe(h,{attributes:!0,attributeFilter:["class"],subtree:!0}),Vh.observe(o),d.addEventListener("webglcontextlost",()=>{Dh(!1),kh.disconnect(),Gh.disconnect(),Vh.disconnect(),d.remove(),p.dispose(),i.dispose(),window.dispatchEvent(new Event("cv:desk-unavailable"))},{once:!0}),Da(),wh(),Dh}var Hl;try{Hl=new Il({antialias:!0,alpha:!1,powerPreference:"low-power"});let i=Cx(Hl);window.dispatchEvent(new CustomEvent("cv:desk-ready",{detail:i}))}catch(i){Hl?.domElement.remove(),Hl?.dispose(),document.body.classList.remove("spatial"),document.querySelector(".view-controls").hidden=!0,console.warn("Rendu 3D indisponible.",i),window.dispatchEvent(new Event("cv:desk-unavailable"))}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
