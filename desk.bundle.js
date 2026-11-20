(()=>{var Dc=0,hl=1,Oc=2;var gi=1,Fc=2,Yi=3,ii=0,Nt=1,an=2,It=0,Ji=1,ul=2,dl=3,fl=4,Aa=5;var on=100,Bc=101,zc=102,Gc=103,Vc=104,_i=200,Hc=201,kc=202,Wc=203,pl=204,ml=205,Zs=206,qc=207,js=208,Xc=209,$c=210,Zc=211,jc=212,Yc=213,Jc=214,Xr=0,$r=1,Zr=2,Fi=3,jr=4,Yr=5,Jr=6,Qr=7,wa=0,Qc=1,Kc=2,wn=0,Ys=1,Js=2,Qs=3,xi=4,Ks=5,er=6,tr=7;var gl=300,vi=301,Qi=302,Ra=303,Ca=304,Xt=1e3,Sn=1001,Kr=1002,mt=1003,eh=1004;var nr=1005;var qt=1006,Ia=1007;var Vn=1008;var Vt=1009,_l=1010,xl=1011,Ki=1012,Pa=1013,xn=1014,ln=1015,Pt=1016,Ua=1017,Na=1018,Hn=1020,vl=35902,yl=35899,Sl=1021,Ml=1022,Jt=1023,zn=1026,vn=1027,La=1028,Da=1029,si=1030,Oa=1031;var Fa=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ba=35840,za=35841,Ga=35842,Va=35843,Ha=36196,ka=37492,Wa=37496,qa=37488,Xa=37489,or=37490,$a=37491,Za=37808,ja=37809,Ya=37810,Ja=37811,Qa=37812,Ka=37813,eo=37814,to=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,co=36494,ho=36495,uo=36283,fo=36284,lr=36285,po=36286;var ys=2300,ea=2301,kr=2302,nl=2303,il=2400,sl=2401,rl=2402;var th=3200;var es=0,nh=1,kn="",Bt="srgb",Ss="srgb-linear",Ms="linear",Ke="srgb";var Wr=7680;var ih=519,sh=512,rh=513,ah=514,bl=515,oh=516,lh=517,Tl=518,El=519,ch=35044;var Al="300 es",en=2e3,Bi=2001;function au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ou(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hh(){let i=zi("canvas");return i.style.display="block",i}var rc={},Gi=null;function wl(...i){let e="THREE."+i.shift();Gi?Gi("log",e,...i):console.log(e,...i)}function uh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=uh(i);let e="THREE."+i.shift();if(Gi)Gi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=uh(i);let e="THREE."+i.shift();if(Gi)Gi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ms(...i){let e=i.join(" ");e in rc||(rc[e]=!0,Le(...i))}function dh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fh={[Xr]:Xr,[Zr]:Jr,[jr]:jr,[Fi]:Yr,[$r]:$r,[Jr]:Zr,[Qr]:Qr,[Yr]:Fi},Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=1234567,gs=Math.PI/180,Vi=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Rl(i,e){return(i%e+e)%e}function lu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cu(i,e,t){return i!==e?(t-i)/(e-i):0}function _s(i,e,t){return(1-t)*i+t*e}function hu(i,e,t,n){return _s(i,e,1-Math.exp(-t*n))}function uu(i,e=1){return e-Math.abs(Rl(i,e*2)-e)}function du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mu(i,e){return i+Math.random()*(e-i)}function gu(i){return i*(.5-Math.random())}function _u(i){i!==void 0&&(ac=i);let e=ac+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xu(i){return i*gs}function vu(i){return i*Vi}function yu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*p,o*l);break;case"YZY":i.set(c*p,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*p,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*f,o*u,o*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Il(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ph(i,e){if(e.constructor===Float32Array)return i;let t=Il(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function mh(i,e){if(e.constructor===Float32Array)return i;let t=Il(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ns={DEG2RAD:gs,RAD2DEG:Vi,generateUUID:ts,clamp:ke,euclideanModulo:Rl,mapLinear:lu,inverseLerp:cu,lerp:_s,damp:hu,pingpong:uu,smoothstep:du,smootherstep:fu,randInt:pu,randFloat:mu,randFloatSpread:gu,seededRandom:_u,degToRad:xu,radToDeg:vu,isPowerOfTwo:yu,ceilPowerOfTwo:Su,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:Mu,normalize:mh,denormalize:ph},Me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||c!==p||l!==f||u!==_){let m=c*p+l*f+u*_+d*S;m<0&&(p=-p,f=-f,_=-_,S=-S,m=-m);let h=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);h=Math.sin(h*v)/E,o=Math.sin(o*v)/E,c=c*h+p*o,l=l*h+f*o,u=u*h+_*o,d=d*h+S*o}else{c=c*h+p*o,l=l*h+f*o,u=u*h+_*o,d=d*h+S*o;let v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*d+c*f-l*p,e[t+1]=c*_+u*p+l*d-o*f,e[t+2]=l*_+u*f+o*p-c*d,e[t+3]=u*_-o*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),p=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=p*u*d+l*f*_,this._y=l*f*d-p*u*_,this._z=l*u*_+p*f*d,this._w=l*u*d-p*f*_;break;case"YXZ":this._x=p*u*d+l*f*_,this._y=l*f*d-p*u*_,this._z=l*u*_-p*f*d,this._w=l*u*d+p*f*_;break;case"ZXY":this._x=p*u*d-l*f*_,this._y=l*f*d+p*u*_,this._z=l*u*_+p*f*d,this._w=l*u*d-p*f*_;break;case"ZYX":this._x=p*u*d-l*f*_,this._y=l*f*d+p*u*_,this._z=l*u*_-p*f*d,this._w=l*u*d+p*f*_;break;case"YZX":this._x=p*u*d+l*f*_,this._y=l*f*d+p*u*_,this._z=l*u*_-p*f*d,this._w=l*u*d-p*f*_;break;case"XZY":this._x=p*u*d-l*f*_,this._y=l*f*d-p*u*_,this._z=l*u*_+p*f*d,this._w=l*u*d+p*f*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new L,oc=new tn,Fe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],p=n[2],f=n[5],_=n[8],S=s[0],m=s[3],h=s[6],v=s[1],E=s[4],b=s[7],w=s[2],T=s[5],g=s[8];return r[0]=a*S+o*v+c*w,r[3]=a*m+o*E+c*T,r[6]=a*h+o*b+c*g,r[1]=l*S+u*v+d*w,r[4]=l*m+u*E+d*T,r[7]=l*h+u*b+d*g,r[2]=p*S+f*v+_*w,r[5]=p*m+f*E+_*T,r[8]=p*h+f*b+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,p=o*c-u*r,f=l*r-a*c,_=t*d+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=d*S,e[1]=(s*l-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=p*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new Fe,lc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){let i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var We=bu();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Si,ta=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=zi("canvas")),Si.width=e.width,Si.height=e.height;let s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tu=0,Hi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Do(s[a].image)):r.push(Do(s[a]))}else r=Do(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Eu=0,Oo=new L,Gt=class i extends Mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Sn,s=Sn,r=qt,a=Vn,o=Jt,c=Vt,l=i.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=ts(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xt:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xt:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=gl;Gt.DEFAULT_ANISOTROPY=1;var ht=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],f=c[5],_=c[9],S=c[2],m=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,b=(f+1)/2,w=(h+1)/2,T=(u+p)/4,g=(d+S)/4,M=(_+m)/4;return E>b&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=g/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(p-u)*(p-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-S)/v,this.z=(p-u)/v,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},na=class extends Mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Gt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yt=class extends na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,u,d,p,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,p,f,_,S,m)}set(e,t,n,s,r,a,o,c,l,u,d,p,f,_,S,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=p,h[3]=f,h[7]=_,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,f=a*d,_=o*u,S=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=p-S*l,t[9]=-o*c,t[2]=S-p*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,f=c*d,_=l*u,S=l*d;t[0]=p+S*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=S+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,f=c*d,_=l*u,S=l*d;t[0]=p-S*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=S-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,f=a*d,_=o*u,S=o*d;t[0]=c*u,t[4]=_*l-f,t[8]=p*l+S,t[1]=c*d,t[5]=S*l+p,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*u,t[4]=S-p*d,t[8]=_*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+_,t[10]=p-S*d}else if(e.order==="XZY"){let p=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+S,t[5]=a*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*u,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,wu)}lookAt(e,t,n){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),qn.crossVectors(n,Zt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),qn.crossVectors(n,Zt)),qn.normalize(),Mr.crossVectors(Zt,qn),s[0]=qn.x,s[4]=Mr.x,s[8]=Zt.x,s[1]=qn.y,s[5]=Mr.y,s[9]=Zt.y,s[2]=qn.z,s[6]=Mr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],p=n[9],f=n[13],_=n[2],S=n[6],m=n[10],h=n[14],v=n[3],E=n[7],b=n[11],w=n[15],T=s[0],g=s[4],M=s[8],D=s[12],R=s[1],U=s[5],F=s[9],k=s[13],I=s[2],q=s[6],$=s[10],H=s[14],se=s[3],V=s[7],te=s[11],ne=s[15];return r[0]=a*T+o*R+c*I+l*se,r[4]=a*g+o*U+c*q+l*V,r[8]=a*M+o*F+c*$+l*te,r[12]=a*D+o*k+c*H+l*ne,r[1]=u*T+d*R+p*I+f*se,r[5]=u*g+d*U+p*q+f*V,r[9]=u*M+d*F+p*$+f*te,r[13]=u*D+d*k+p*H+f*ne,r[2]=_*T+S*R+m*I+h*se,r[6]=_*g+S*U+m*q+h*V,r[10]=_*M+S*F+m*$+h*te,r[14]=_*D+S*k+m*H+h*ne,r[3]=v*T+E*R+b*I+w*se,r[7]=v*g+E*U+b*q+w*V,r[11]=v*M+E*F+b*$+w*te,r[15]=v*D+E*k+b*H+w*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],f=e[14],_=e[3],S=e[7],m=e[11],h=e[15],v=c*f-l*p,E=o*f-l*d,b=o*p-c*d,w=a*f-l*u,T=a*p-c*u,g=a*d-o*u;return t*(S*v-m*E+h*b)-n*(_*v-m*w+h*T)+s*(_*E-S*w+h*g)-r*(_*b-S*T+m*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],_=e[12],S=e[13],m=e[14],h=e[15],v=t*o-n*a,E=t*c-s*a,b=t*l-r*a,w=n*c-s*o,T=n*l-r*o,g=s*l-r*c,M=u*S-d*_,D=u*m-p*_,R=u*h-f*_,U=d*m-p*S,F=d*h-f*S,k=p*h-f*m,I=v*k-E*F+b*U+w*R-T*D+g*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(o*k-c*F+l*U)*q,e[1]=(s*F-n*k-r*U)*q,e[2]=(S*g-m*T+h*w)*q,e[3]=(p*T-d*g-f*w)*q,e[4]=(c*R-a*k-l*D)*q,e[5]=(t*k-s*R+r*D)*q,e[6]=(m*b-_*g-h*E)*q,e[7]=(u*g-p*b+f*E)*q,e[8]=(a*F-o*R+l*M)*q,e[9]=(n*R-t*F-r*M)*q,e[10]=(_*T-S*b+h*v)*q,e[11]=(d*b-u*T-f*v)*q,e[12]=(o*D-a*U-c*M)*q,e[13]=(t*U-n*D+s*M)*q,e[14]=(S*E-_*w-m*v)*q,e[15]=(u*w-d*E+p*v)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,p=r*l,f=r*u,_=r*d,S=a*u,m=a*d,h=o*d,v=c*l,E=c*u,b=c*d,w=n.x,T=n.y,g=n.z;return s[0]=(1-(S+h))*w,s[1]=(f+b)*w,s[2]=(_-E)*w,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(p+h))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(_+E)*g,s[9]=(m-v)*g,s[10]=(1-(p+S))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),c=Mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);let l=1/a,u=1/o,d=1/c;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=en,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),_,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===en)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Bi)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=en,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),f=-(n+s)/(n-s),_,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===en)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Bi)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mi=new L,dn=new qe,Au=new L(0,0,0),wu=new L(1,1,1),qn=new L,Mr=new L,Zt=new L,hc=new qe,uc=new tn,bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ru=0,dc=new L,bi=new tn,Un=new qe,br=new L,cs=new L,Cu=new L,Iu=new tn,fc=new L(1,0,0),pc=new L(0,1,0),mc=new L(0,0,1),gc={type:"added"},Pu={type:"removed"},Ti={type:"childadded",child:null},Fo={type:"childremoved",child:null},St=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new bn,n=new tn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(cs,br,this.up):Un.lookAt(br,cs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(Un),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new L(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uu={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),h=this._getHandJoint(l,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Rl(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return We.workingToColorSpace(Ft.copy(this),e),Math.round(ke(Ft.r*255,0,255))*65536+Math.round(ke(Ft.g*255,0,255))*256+Math.round(ke(Ft.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Bt){We.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Tr);let n=_s(Xn.h,Tr.h,t),s=_s(Xn.s,Tr.s,t),r=_s(Xn.l,Tr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Be;Be.NAMES=gh;var Es=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jn=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new L,Nn=new L,zo=new L,Ln=new L,Ei=new L,Ai=new L,_c=new L,Go=new L,Vo=new L,Ho=new L,ko=new ht,Wo=new ht,qo=new ht,Yn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),Nn.subVectors(n,t),zo.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(Nn),c=fn.dot(zo),l=Nn.dot(Nn),u=Nn.dot(zo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(l*c-o*u)*p,_=(a*u-o*c)*p;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ko.setScalar(0),Wo.setScalar(0),qo.setScalar(0),ko.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Nn.subVectors(e,t),fn.cross(Nn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ei.subVectors(s,n),Ai.subVectors(r,n),Go.subVectors(e,n);let c=Ei.dot(Go),l=Ai.dot(Go);if(c<=0&&l<=0)return t.copy(n);Vo.subVectors(e,s);let u=Ei.dot(Vo),d=Ai.dot(Vo);if(u>=0&&d<=u)return t.copy(s);let p=c*d-u*l;if(p<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Ei,a);Ho.subVectors(e,r);let f=Ei.dot(Ho),_=Ai.dot(Ho);if(_>=0&&f<=_)return t.copy(r);let S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ai,o);let m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return _c.subVectors(r,s),o=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(_c,o);let h=1/(m+S+p);return a=S*h,o=p*h,t.copy(n).addScaledVector(Ei,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Ar.subVectors(this.max,hs),wi.subVectors(e.a,hs),Ri.subVectors(e.b,hs),Ci.subVectors(e.c,hs),$n.subVectors(Ri,wi),Zn.subVectors(Ci,Ri),ci.subVectors(wi,Ci);let t=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-ci.z,ci.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,ci.z,0,-ci.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-ci.y,ci.x,0];return!Xo(t,wi,Ri,Ci,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,wi,Ri,Ci,Ar))?!1:(wr.crossVectors($n,Zn),t=[wr.x,wr.y,wr.z],Xo(t,wi,Ri,Ci,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new L,new L,new L,new L,new L,new L,new L,new L],pn=new L,Er=new Tn,wi=new L,Ri=new L,Ci=new L,$n=new L,Zn=new L,ci=new L,hs=new L,Ar=new L,wr=new L,hi=new L;function Xo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hi.fromArray(i,r);let o=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var vt=new L,Rr=new Me,Nu=0,gn=class extends Mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=e!==void 0?Il(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ph(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):mh(e,this.array)}};var As=class extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ws=class extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lu=new Tn,us=new L,$o=new L,Qn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);let t=us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add($o)),this.expandByPoint(us.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Du=0,Kt=new qe,Zo=new St,Ii=new L,jt=new Tn,ds=new Tn,Ct=new L,$t=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(au(e)?ws:As)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(jt.min,ds.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,ds.max),jt.expandByPoint(Ct)):(jt.expandByPoint(ds.min),jt.expandByPoint(ds.max))}jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ct.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(e,l),Ct.add(Ii)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new L,c[D]=new L;let u=new L,d=new L,p=new L,f=new Me,_=new Me,S=new Me,m=new L,h=new L;function v(D,R,U){l[D]=l[R]=l[U]=1,u.fromBufferAttribute(n,D),d.fromBufferAttribute(n,R),p.fromBufferAttribute(n,U),f.fromBufferAttribute(r,D),_.fromBufferAttribute(r,R),S.fromBufferAttribute(r,U),d.sub(u),p.sub(u),_.sub(f),S.sub(f);let F=1/(_.x*S.y-S.x*_.y);isFinite(F)&&(m.copy(d).multiplyScalar(S.y).addScaledVector(p,-_.y).multiplyScalar(F),h.copy(p).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(F),o[D].add(m),o[R].add(m),o[U].add(m),c[D].add(h),c[R].add(h),c[U].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,R=E.length;D<R;++D){let U=E[D],F=U.start,k=U.count;for(let I=F,q=F+k;I<q;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new L,w=new L,T=new L,g=new L;function M(D){T.fromBufferAttribute(s,D),g.copy(T);let R=o[D];b.copy(R),b.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(g,R);let F=w.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,F)}for(let D=0,R=n.count;D<R;++D)l[D]&&M(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let p=0,f=e.count;p<f;p+=3){let _=e.getX(p+0),S=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,p=new l.constructor(c.length*u),f=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*u;for(let h=0;h<u;h++)p[_++]=l[f++]}return new gn(p,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let p=l[u],f=e(p,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jo=new L,Ou=new L,Fu=new Fe,mn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jo.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fu.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bu=0,En=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=on,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var On=new L,Yo=new L,Cr=new L,Ir=new L,sa=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=Ir.dot(this.direction),c=-Ir.dot(Cr),l=Ir.lengthSq(),u=Math.abs(1-a*a),d,p,f,_;if(u>0)if(d=a*c-o,p=a*o-c,_=r*u,d>=0)if(p>=-_)if(p<=_){let S=1/u;d*=S,p*=S,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yo).addScaledVector(Cr,p),f}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,p=e.y-a.y,f=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,h=n.x-a.x,v=n.y-a.y,E=n.z-a.z,b=Math.abs(c),w=Math.abs(l),T=Math.abs(u),g,M,D,R,U,F,k,I,q,$,H,se;if(b>=w&&b>=T?(D=c,F=d,q=_,se=h,c>=0?(g=l,M=u,R=p,U=f,k=S,I=m,$=v,H=E):(g=u,M=l,R=f,U=p,k=m,I=S,$=E,H=v)):w>=T?(D=l,F=p,q=S,se=v,l>=0?(g=u,M=c,R=f,U=d,k=m,I=_,$=E,H=h):(g=c,M=u,R=d,U=f,k=_,I=m,$=h,H=E)):(D=u,F=f,q=m,se=E,u>=0?(g=c,M=l,R=d,U=p,k=_,I=S,$=h,H=v):(g=l,M=c,R=p,U=d,k=S,I=_,$=v,H=h)),D===0)return null;let V=g/D,te=M/D,ne=1/D,ve=R-V*F,Ne=U-te*F,Q=k-V*q,fe=I-te*q,Se=$-V*se,Te=H-te*se,he=Se*fe-Te*Q,Ie=ve*Te-Ne*Se,Qe=Q*Ne-fe*ve;if(s){if(he<0||Ie<0||Qe<0)return null}else if((he<0||Ie<0||Qe<0)&&(he>0||Ie>0||Qe>0))return null;let Pe=he+Ie+Qe;if(Pe===0)return null;let Ge=ne*(he*F+Ie*q+Qe*se);return(Pe>0?Ge<0:Ge>0)?null:this.at(Ge/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xc=new qe,ui=new sa,Pr=new Qn,vc=new L,Ur=new L,Nr=new L,Lr=new L,Jo=new L,Dr=new L,yc=new L,Or=new L,ut=class extends St{constructor(e=new $t,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Jo.fromBufferAttribute(d,e),a?Dr.addScaledVector(Jo,u):Dr.addScaledVector(Jo.sub(t),u))}t.add(Dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Pr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Pr,vc)===null||ui.origin.distanceToSquared(vc)>(e.far-e.near)**2))&&(xc.copy(r).invert(),ui.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=p.length;_<S;_++){let m=p[_],h=a[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,w=E;b<w;b+=3){let T=o.getX(b),g=o.getX(b+1),M=o.getX(b+2);s=Fr(this,h,e,n,l,u,d,T,g,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=_,h=S;m<h;m+=3){let v=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=Fr(this,a,e,n,l,u,d,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=p.length;_<S;_++){let m=p[_],h=a[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,w=E;b<w;b+=3){let T=b,g=b+1,M=b+2;s=Fr(this,h,e,n,l,u,d,T,g,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=_,h=S;m<h;m+=3){let v=m,E=m+1,b=m+2;s=Fr(this,a,e,n,l,u,d,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function zu(i,e,t,n,s,r,a,o){let c;if(e.side===Nt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ii,o),c===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Or);return l<t.near||l>t.far?null:{distance:l,point:Or.clone(),object:i}}function Fr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ur),i.getVertexPosition(c,Nr),i.getVertexPosition(l,Lr);let u=zu(i,e,t,n,Ur,Nr,Lr,yc);if(u){let d=new L;Yn.getBarycoord(yc,Ur,Nr,Lr,d),s&&(u.uv=Yn.getInterpolatedAttribute(s,o,c,l,d,new Me)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,c,l,d,new Me)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:c,c:l,normal:new L,materialIndex:0};Yn.getNormal(Ur,Nr,Lr,p.normal),u.face=p,u.barycoord=d}return u}var Gn=class extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=mt,u=mt,d,p){super(null,a,o,c,l,u,s,r,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rs=class extends gn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pi=new qe,Sc=new qe,Br=[],Mc=new Tn,Gu=new qe,fs=new ut,ps=new Qn,Cs=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Mc.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Mc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ps.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),Sc.multiplyMatrices(n,Pi),fs.matrixWorld=Sc,fs.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){let c=Br[a];c.instanceId=r,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gn(new Float32Array(s*this.count),s,this.count,La,ln));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},di=new Qn,Vu=new Me(.5,.5),zr=new L,Kn=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],p=r[6],f=r[7],_=r[8],S=r[9],m=r[10],h=r[11],v=r[12],E=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,h-_,w-v).normalize(),s[1].setComponents(l+a,f+u,h+_,w+v).normalize(),s[2].setComponents(l+o,f+d,h+S,w+E).normalize(),s[3].setComponents(l-o,f-d,h-S,w-E).normalize(),n)s[4].setComponents(c,p,m,b).normalize(),s[5].setComponents(l-c,f-p,h-m,w-b).normalize();else if(s[4].setComponents(l-c,f-p,h-m,w-b).normalize(),t===en)s[5].setComponents(l+c,f+p,h+m,w+b).normalize();else if(t===Bi)s[5].setComponents(c,p,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);let t=Vu.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bc=new qe,ra=class i{constructor(){this.coordinateSystem=en,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];bc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Kn),n[s].setFromProjectionMatrix(bc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Kn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Is=class extends Gt{constructor(e=[],t=vi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ps=class extends Gt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _n=class extends Gt{constructor(e,t,n=xn,s,r,a,o=mt,c=mt,l,u=zn,d=1){if(u!==zn&&u!==vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:d};super(p,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Us=class extends _n{constructor(e,t=xn,n=vi,s,r,a=mt,o=mt,c,l=zn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ns=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nn=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],p=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(d,2));function _(S,m,h,v,E,b,w,T,g,M,D){let R=b/g,U=w/M,F=b/2,k=w/2,I=T/2,q=g+1,$=M+1,H=0,se=0,V=new L;for(let te=0;te<$;te++){let ne=te*U-k;for(let ve=0;ve<q;ve++){let Ne=ve*R-F;V[S]=Ne*v,V[m]=ne*E,V[h]=I,l.push(V.x,V.y,V.z),V[S]=0,V[m]=0,V[h]=T>0?1:-1,u.push(V.x,V.y,V.z),d.push(ve/g),d.push(1-te/M),H+=1}}for(let te=0;te<M;te++)for(let ne=0;ne<g;ne++){let ve=p+ne+q*te,Ne=p+ne+q*(te+1),Q=p+(ne+1)+q*(te+1),fe=p+(ne+1)+q*te;c.push(ve,Ne,fe),c.push(Ne,Q,fe),se+=6}o.addGroup(f,se,D),f+=se,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ls=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],f=[],_=0,S=[],m=n/2,h=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(f,2));function v(){let b=new L,w=new L,T=0,g=(t-e)/n;for(let M=0;M<=r;M++){let D=[],R=M/r,U=R*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,I=k*c+o,q=Math.sin(I),$=Math.cos(I);w.x=U*q,w.y=-R*n+m,w.z=U*$,d.push(w.x,w.y,w.z),b.set(q,g,$).normalize(),p.push(b.x,b.y,b.z),f.push(k,1-R),D.push(_++)}S.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let R=S[D][M],U=S[D+1][M],F=S[D+1][M+1],k=S[D][M+1];(e>0||D!==0)&&(u.push(R,U,k),T+=3),(t>0||D!==r-1)&&(u.push(U,F,k),T+=3)}l.addGroup(h,T,0),h+=T}function E(b){let w=_,T=new Me,g=new L,M=0,D=b===!0?e:t,R=b===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*R,0),p.push(0,R,0),f.push(.5,.5),_++;let U=_;for(let F=0;F<=s;F++){let I=F/s*c+o,q=Math.cos(I),$=Math.sin(I);g.x=D*$,g.y=m*R,g.z=D*q,d.push(g.x,g.y,g.z),p.push(0,R,0),T.x=q*.5+.5,T.y=$*.5*R+.5,f.push(T.x,T.y),_++}for(let F=0;F<s;F++){let k=w+F,I=U+F;b===!0?u.push(I,I+1,k):u.push(I+1,I,k),M+=3}l.addGroup(h,M,b===!0?1:2),h+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,f=(a-u)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Me:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new qe;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ds=class extends sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*d+this.aX,l=p*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},aa=class extends Ds{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let p=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;p*=u,f*=u,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Tc=new L,Ec=new L,Qo=new Pl,Ko=new Pl,el=new Pl,Wi=class extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Ec.subVectors(s[0],s[1]).add(s[0]),l=Ec);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Tc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(u),f);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Qo.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,_,S,m),Ko.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,_,S,m),el.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),Ko.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),el.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return n.set(Qo.calc(c),Ko.calc(c),el.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ac(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Hu(i,e){let t=1-i;return t*t*e}function ku(i,e){return 2*(1-i)*i*e}function Wu(i,e){return i*i*e}function xs(i,e,t,n){return Hu(i,e)+ku(i,t)+Wu(i,n)}function qu(i,e){let t=1-i;return t*t*t*e}function Xu(i,e){let t=1-i;return 3*t*t*i*e}function $u(i,e){return 3*(1-i)*i*i*e}function Zu(i,e){return i*i*i*e}function vs(i,e,t,n,s){return qu(i,e)+Xu(i,t)+$u(i,n)+Zu(i,s)}var oa=class extends sn{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(e,s.x,r.x,a.x,o.x),vs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends sn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(e,s.x,r.x,a.x,o.x),vs(e,s.y,r.y,a.y,o.y),vs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends sn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends sn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends sn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(e,s.x,r.x,a.x),xs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends sn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xs(e,s.x,r.x,a.x),xs(e,s.y,r.y,a.y),xs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ac(o,c.x,l.x,u.x,d.x),Ac(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},ju=Object.freeze({__proto__:null,ArcCurve:aa,CatmullRomCurve3:Wi,CubicBezierCurve:oa,CubicBezierCurve3:la,EllipseCurve:Ds,LineCurve:ca,LineCurve3:ha,QuadraticBezierCurve:ua,QuadraticBezierCurve3:Os,SplineCurve:da});var qi=class i extends $t{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ke(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,d=new L,p=new Me,f=new L,_=new L,S=new L,m=0,h=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,h=e[v+1].y-e[v].y,f.x=h*1,f.y=-m,f.z=h*0,S.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:S.normalize(),c.push(S.x,S.y,S.z);break;default:m=e[v+1].x-e[v].x,h=e[v+1].y-e[v].y,f.x=h*1,f.y=-m,f.z=h*0,_.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),c.push(f.x,f.y,f.z),S.copy(_)}for(let v=0;v<=t;v++){let E=n+v*u*s,b=Math.sin(E),w=Math.cos(E);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*b,d.y=e[T].y,d.z=e[T].x*w,a.push(d.x,d.y,d.z),p.x=v/t,p.y=T/(e.length-1),o.push(p.x,p.y);let g=c[3*T+0]*b,M=c[3*T+1],D=c[3*T+0]*w;l.push(g,M,D)}}for(let v=0;v<t;v++)for(let E=0;E<e.length-1;E++){let b=E+v*e.length,w=b,T=b+e.length,g=b+e.length+1,M=b+1;r.push(w,T,M),r.push(g,M,T)}this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("uv",new rt(o,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var An=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,p=t/c,f=[],_=[],S=[],m=[];for(let h=0;h<u;h++){let v=h*p-a;for(let E=0;E<l;E++){let b=E*d-r;_.push(b,-v,0),S.push(0,0,1),m.push(E/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let v=0;v<o;v++){let E=v+l*h,b=v+l*(h+1),w=v+1+l*(h+1),T=v+1+l*h;f.push(E,b,T),f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(S,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Fs=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new L,p=new L,f=[],_=[],S=[],m=[];for(let h=0;h<=n;h++){let v=[],E=h/n,b=a+E*o,w=e*Math.cos(b),T=Math.sqrt(e*e-w*w),g=0;h===0&&a===0?g=.5/t:h===n&&c===Math.PI&&(g=-.5/t);for(let M=0;M<=t;M++){let D=M/t,R=s+D*r;d.x=-T*Math.cos(R),d.y=w,d.z=T*Math.sin(R),_.push(d.x,d.y,d.z),p.copy(d).normalize(),S.push(p.x,p.y,p.z),m.push(D+g,1-E),v.push(l++)}u.push(v)}for(let h=0;h<n;h++)for(let v=0;v<t;v++){let E=u[h][v+1],b=u[h][v],w=u[h+1][v],T=u[h+1][v+1];(h!==0||a>0)&&f.push(E,b,T),(h!==n-1||c<Math.PI)&&f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(S,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bs=class i extends $t{constructor(e=new Os(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new Me,u=new L,d=[],p=[],f=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new rt(d,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(f,2));function S(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),v(),h()}function m(E){u=e.getPointAt(E/t,u);let b=a.normals[E],w=a.binormals[E];for(let T=0;T<=s;T++){let g=T/s*Math.PI*2,M=Math.sin(g),D=-Math.cos(g);c.x=D*b.x+M*w.x,c.y=D*b.y+M*w.y,c.z=D*b.z+M*w.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function h(){for(let E=1;E<=t;E++)for(let b=1;b<=s;b++){let w=(s+1)*(E-1)+(b-1),T=(s+1)*E+(b-1),g=(s+1)*E+b,M=(s+1)*(E-1)+b;_.push(w,T,M),_.push(T,g,M)}}function v(){for(let E=0;E<=t;E++)for(let b=0;b<=s;b++)l.x=E/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ju[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wc(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=yi(i[t]);for(let s in n)e[s]=n[s]}return e}function wc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var cn={clone:yi,merge:Ht},Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Yu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xi=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rn=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zs=class extends En{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Gs=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=es,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fa=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pa=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ui(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ma=class extends ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sl:r=e,o=2*t-n;break;case rl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sl:a=e,c=2*n-t;break;case rl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),S=_*_,m=S*_,h=-p*m+2*p*S-p*_,v=(1+p)*m+(-1.5-2*p)*S+(-.5+p)*_+1,E=(-1-f)*m+(1.5+f)*S+.5*_,b=f*m-f*S;for(let w=0;w!==o;++w)r[w]=h*a[u+w]+v*a[l+w]+E*a[c+w]+b*a[d+w];return r}},ga=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[l+p]*d+a[c+p]*u;return r}},_a=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xa=class extends ei{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(n-t)/(s-t),S=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*_;return r}let p=o*2,f=e-1;for(let _=0;_!==o;++_){let S=a[l+_],m=a[c+_],h=f*p+_*2,v=d[h],E=d[h+1],b=e*p+_*2,w=u[b],T=u[b+1],g=ed(n,t,v,w,s);r[_]=_h(g,S,E,T,m)}return r}};function _h(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ku(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ed(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=_h(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Ku(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Yt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Gr(e.settings)&&(n.settings={inTangents:Ui(e.settings.inTangents,Array),outTangents:Ui(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case kr:t=this.InterpolantFactoryMethodSmooth;break;case nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return kr;case this.InterpolantFactoryMethodBezier:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Gr(this.settings)&&(Rc(this.settings.inTangents,e),Rc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Gr(this.settings)&&(Cc(this.settings.inTangents,e),Cc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Oe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ou(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,p=d-n,f=d+n;for(let _=0;_!==n;++_){let S=t[d+_];if(S!==t[p+_]||S!==t[f+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Gr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=ea;var ti=class extends Yt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ys;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}};va.prototype.ValueTypeName="color";var ya=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}};ya.prototype.ValueTypeName="number";var Sa=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vs=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends Yt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ys;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}};Ma.prototype.ValueTypeName="vector";var qr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ic(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ic(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ic(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ba=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=l.length;d<p;d+=2){let f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xh=new ba,$i=class{constructor(e){this.manager=e!==void 0?e:xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni=new WeakMap,Ta=class extends $i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=qr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ni.get(a);d===void 0&&(d=[],Ni.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=zi("img");function c(){u(),t&&t(this);let d=Ni.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onLoad&&f.onLoad(this)}Ni.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),qr.remove(`image:${e}`);let p=Ni.get(this)||[];for(let f=0;f<p.length;f++){let _=p[f];_.onError&&_.onError(d)}Ni.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qr.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Hs=class extends $i{constructor(e){super(e)}load(e,t,n,s){let r=new Gt,a=new Ta(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zi=class extends St{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ks=class extends Zi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tl=new qe,Pc=new L,Uc=new L,Ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Vt,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kn,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Bi||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vr=new L,Hr=new tn,yn=new L,qs=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vr,Hr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Hr,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vr,Hr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Hr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jn=new L,Nc=new Me,Lc=new Me,zt=class extends qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Lc),t.subVectors(Lc,Nc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var al=class extends Ws{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},pi=class extends Zi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},mi=class extends qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ol=class extends Ws{constructor(){super(new mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Zi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new ol}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Li=-90,Di=1,ji=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Li,Di,e,t);s.layers=this.layers,this.add(s);let r=new zt(Li,Di,e,t);r.layers=this.layers,this.add(r);let a=new zt(Li,Di,e,t);a.layers=this.layers,this.add(a);let o=new zt(Li,Di,e,t);o.layers=this.layers,this.add(o);let c=new zt(Li,Di,e,t);c.layers=this.layers,this.add(c);let l=new zt(Li,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ea=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},$s=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=td.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function td(){this._document.hidden===!1&&this.reset()}var Nl="\\[\\]\\.:\\/",nd=new RegExp("["+Nl+"]","g"),Ll="[^"+Nl+"]",id="[^"+Nl.replace("\\.","")+"]",sd=/((?:WC+[\/:])*)/.source.replace("WC",Ll),rd=/(WCOD+)?/.source.replace("WCOD",id),ad=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),ld=new RegExp("^"+sd+rd+ad+od+"$"),cd=["material","materials","bones","map"],ll=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nd,"")}static parseTrackName(e){let t=ld.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=ll;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o0=new Float32Array(1);var cl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Dl(i,e,t,n){let s=hd(n);switch(t){case Sl:return i*e;case La:return i*e/s.components*s.byteLength;case Da:return i*e/s.components*s.byteLength;case si:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case Ml:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case Fa:return i*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:case Va:return Math.max(i,16)*Math.max(e,8)/4;case Ba:case Ga:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case ka:case qa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:case or:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lo:case co:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uo:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lr:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hd(i){switch(i){case Vt:case _l:return{byteLength:1,components:1};case Ki:case xl:case Pt:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case xn:case Pa:case ln:return{byteLength:4,components:1};case vl:case yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Gh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dd(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<d.length;f++){let _=d[p],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++p,d[p]=S)}d.length=p+1;for(let f=0,_=d.length;f<_;f++){let S=d[f];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Fd=`vec3 transformedNormal = objectNormal;
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
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
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
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rf=`#ifdef USE_ENVMAP
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
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hf=`PhysicalMaterial material;
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
#endif`,uf=`uniform sampler2D dfgLUT;
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
}`,df=`
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
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
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform float backgroundBlurriness;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Ip=`#define LAMBERT
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
}`,Pp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,Gp=`#define TOON
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
}`,Vp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:fd,alphahash_pars_fragment:pd,alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:xd,aomap_fragment:vd,aomap_pars_fragment:yd,batching_pars_vertex:Sd,batching_vertex:Md,begin_vertex:bd,beginnormal_vertex:Td,bsdfs:Ed,iridescence_fragment:Ad,bumpmap_pars_fragment:wd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Pd,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Ld,color_vertex:Dd,common:Od,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Bd,displacementmap_vertex:zd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,colorspace_fragment:Hd,colorspace_pars_fragment:kd,envmap_fragment:Wd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Xd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:rf,envmap_vertex:Zd,fog_vertex:jd,fog_pars_vertex:Yd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:ef,lights_lambert_fragment:tf,lights_lambert_pars_fragment:nf,lights_pars_begin:sf,lights_toon_fragment:af,lights_toon_pars_fragment:of,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:hf,lights_physical_pars_fragment:uf,lights_fragment_begin:df,lights_fragment_maps:ff,lights_fragment_end:pf,lightprobes_pars_fragment:mf,logdepthbuf_fragment:gf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:vf,map_fragment:yf,map_pars_fragment:Sf,map_particle_fragment:Mf,map_particle_pars_fragment:bf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:Af,morphcolor_vertex:wf,morphnormal_vertex:Rf,morphtarget_pars_vertex:Cf,morphtarget_vertex:If,normal_fragment_begin:Pf,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Gf,opaque_fragment:Vf,packing:Hf,premultiplied_alpha_fragment:kf,project_vertex:Wf,dithering_fragment:qf,dithering_pars_fragment:Xf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Jf,shadowmask_pars_fragment:Qf,skinbase_vertex:Kf,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:xp,depth_vert:vp,depth_frag:yp,distance_vert:Sp,distance_frag:Mp,equirect_vert:bp,equirect_frag:Tp,linedashed_vert:Ep,linedashed_frag:Ap,meshbasic_vert:wp,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Ip,meshmatcap_vert:Pp,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Op,meshphysical_vert:Fp,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Gp,points_vert:Vp,points_frag:Hp,shadow_vert:kp,shadow_frag:Wp,sprite_vert:qp,sprite_frag:Xp},xe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Cn={basic:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ht([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ht([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ht([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Be(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ht([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ht([xe.points,xe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ht([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ht([xe.common,xe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ht([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ht([xe.sprite,xe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ht([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ht([xe.lights,xe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Cn.physical={uniforms:Ht([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var mo={r:0,b:0,g:0},$p=new qe,Vh=new Fe;Vh.set(-1,0,0,0,1,0,0,0,1);function Zp(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,c,l,u=null,d=0,p=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let b=v.backgroundBlurriness>0;E=e.get(E,b)}return E}function _(v){let E=!1,b=f(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,E){let b=f(E);b&&b.isCubeTexture?(l===void 0&&(l=new ut(new nn(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:yi(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vh),l.material.toneMapped=We.getTransfer(b.colorSpace)!==Ke,(u!==b||d!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ut(new An(2,2),new Et({name:"BackgroundMaterial",uniforms:yi(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=We.getTransfer(b.colorSpace)!==Ke,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(mo,Ul(i)),t.buffers.color.setClear(mo.r,mo.g,mo.b,E,r)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:S,dispose:h}}function jp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(U,F,k,I,q){let $=!1,H=d(U,I,k,F);r!==H&&(r=H,l(r.object)),$=f(U,I,k,q),$&&_(U,I,k,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(U,F,k,I),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function d(U,F,k,I){let q=I.wireframe===!0,$=n[F.id];$===void 0&&($={},n[F.id]=$);let H=U.isInstancedMesh===!0?U.id:0,se=$[H];se===void 0&&(se={},$[H]=se);let V=se[k.id];V===void 0&&(V={},se[k.id]=V);let te=V[q];return te===void 0&&(te=p(c()),V[q]=te),te}function p(U){let F=[],k=[],I=[];for(let q=0;q<t;q++)F[q]=0,k[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,F,k,I){let q=r.attributes,$=F.attributes,H=0,se=k.getAttributes();for(let V in se)if(se[V].location>=0){let ne=q[V],ve=$[V];if(ve===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function _(U,F,k,I){let q={},$=F.attributes,H=0,se=k.getAttributes();for(let V in se)if(se[V].location>=0){let ne=$[V];ne===void 0&&(V==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),V==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor));let ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),q[V]=ve,H++}r.attributes=q,r.attributesNum=H,r.index=I}function S(){let U=r.newAttributes;for(let F=0,k=U.length;F<k;F++)U[F]=0}function m(U){h(U,0)}function h(U,F){let k=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;k[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),q[U]!==F&&(i.vertexAttribDivisor(U,F),q[U]=F)}function v(){let U=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==U[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function E(U,F,k,I,q,$,H){H===!0?i.vertexAttribIPointer(U,F,k,q,$):i.vertexAttribPointer(U,F,k,I,q,$)}function b(U,F,k,I){S();let q=I.attributes,$=k.getAttributes(),H=F.defaultAttributeValues;for(let se in $){let V=$[se];if(V.location>=0){let te=q[se];if(te===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){let ne=te.normalized,ve=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;let Q=Ne.buffer,fe=Ne.type,Se=Ne.bytesPerElement,Te=fe===i.INT||fe===i.UNSIGNED_INT||te.gpuType===Pa;if(te.isInterleavedBufferAttribute){let he=te.data,Ie=he.isInterleavedBuffer===!0?he.stride:he.itemSize,Qe=te.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Pe=0;Pe<V.locationSize;Pe++)h(V.location+Pe,he.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Pe=0;Pe<V.locationSize;Pe++)E(V.location+Pe,ve/V.locationSize,fe,ne,Ie*Se,(Qe+ve/V.locationSize*Pe)*Se,Te)}else{if(te.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)h(V.location+he,te.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let he=0;he<V.locationSize;he++)E(V.location+he,ve/V.locationSize,fe,ne,ve*Se,ve/V.locationSize*he*Se,Te)}}else if(H!==void 0){let ne=H[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(V.location,ne);break;case 3:i.vertexAttrib3fv(V.location,ne);break;case 4:i.vertexAttrib4fv(V.location,ne);break;default:i.vertexAttrib1fv(V.location,ne)}}}}v()}function w(){D();for(let U in n){let F=n[U];for(let k in F){let I=F[k];for(let q in I){let $=I[q];for(let H in $)u($[H].object),delete $[H];delete I[q]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let k in F){let I=F[k];for(let q in I){let $=I[q];for(let H in $)u($[H].object),delete $[H];delete I[q]}}delete n[U.id]}function g(U){for(let F in n){let k=n[F];for(let I in k){let q=k[I];if(q[U.id]===void 0)continue;let $=q[U.id];for(let H in $)u($[H].object),delete $[H];delete q[U.id]}}}function M(U){for(let F in n){let k=n[F],I=U.isInstancedMesh===!0?U.id:0,q=k[I];if(q!==void 0){for(let $ in q){let H=q[$];for(let se in H)u(H[se].object),delete H[se];delete q[$]}delete k[I],Object.keys(k).length===0&&delete n[F]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function Yp(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let p=0;for(let f=0;f<u;f++)p+=l[f];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Jt&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let M=g===Pt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Vt&&g!==ln&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:w,samples:T}}function Qp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){let _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,E=v*4,b=h.clippingState||null;c.value=b,b=u(_,p,E,f);for(let w=0;w!==E;++w)b[w]=t[w];h.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,f,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=c.value,_!==!0||m===null){let h=f+S*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=f;E!==S;++E,b+=4)a.copy(d[E]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var ur=class extends yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Is(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:It});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=qt),new ji(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},vh=256,Kp=3,em=20,Hh=256,kh=16,tm=3,nm=new L,im=new Be,ss=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ji(1,10,null),this._boxMesh=new ut(new nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=nm}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,p=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(im));let m=new ji(n,s,u);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=p,c.autoClearDepth=f,c.autoClearStencil=_,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vh,Cl(e))}_fromTexture(e,t){e.mapping===vi||e.mapping===Qi?this._setSize(e.image.length===0?vh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yh(e,!1,!1),n=Math.log2(e)-Kp;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vi||e.mapping===Qi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=sm(),this._integrationMaterial=rm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/kh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-tm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Hh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=am());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function yh(i,e,t){return new ur(i,{minFilter:Vn,generateMipmaps:e,type:Pt,colorSpace:Ss,depthBuffer:t})}function dr(i,e,t){return new Et({name:i,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:Nt,blending:It,depthTest:!1,depthWrite:!1})}function sm(){return dr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hh}u

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
	`)}function rm(){return dr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kh}},`

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
	`)}function am(){return dr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${em}
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
	`)}function Sh(){return dr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mh(){return dr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function om(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,f=!1){return p==null?null:f?a(p):r(p)}function r(p){if(p&&p.isTexture){let f=p.mapping;if(f===Ra||f===Ca)if(e.has(p)){let _=e.get(p).texture;return o(_,p.mapping)}else{let _=p.image;if(_&&_.height>0){let S=new ur(_.height);return S.fromEquirectangularTexture(i,p),e.set(p,S),p.addEventListener("dispose",l),o(S.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let f=p.mapping,_=f===Ra||f===Ca,S=f===vi||f===Qi;if(_||S){let m=t.get(p),h=m!==void 0?m.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return n===null&&(n=new ss(i)),m=_?n.fromEquirectangular(p,m):n.fromCubemap(p,m),m.texture.pmremVersion=p.pmremVersion,t.set(p,m),m.texture;if(m!==void 0)return m.texture;{let v=p.image;return _&&v&&v.height>0||S&&v&&c(v)?(n===null&&(n=new ss(i)),m=_?n.fromEquirectangular(p):n.fromCubemap(p),m.texture.pmremVersion=p.pmremVersion,t.set(p,m),p.addEventListener("dispose",u),m.texture):null}}}return p}function o(p,f){return f===Ra?p.mapping=vi:f===Ca&&(p.mapping=Qi),p}function c(p){let f=0,_=6;for(let S=0;S<_;S++)p[S]!==void 0&&f++;return f===_}function l(p){let f=p.target;f.removeEventListener("dispose",l);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(p){let f=p.target;f.removeEventListener("dispose",u);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function lm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(e.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function u(_){let S=_.attributes;for(let m in S)e.update(S[m],i.ARRAY_BUFFER)}function d(_){let S=_.index,m=_.attributes.position,h=0;if(m===void 0)return;let v=S!==null?S.array.length:m.array.length/3-1,E=m.count>=65535?ws:As,b=new E(Math.ceil(v/3)*6,1),w=b.array;if(S!==null){let g=S.array;h=S.version;for(let M=0,D=0;M<v;M+=3){let R=g[M+0],U=g[M+1],F=g[M+2];w[D++]=R,w[D++]=U,w[D++]=U,w[D++]=F,w[D++]=F,w[D++]=R}}else{h=m.version;for(let g=0,M=0;g<v;g+=3){let D=g+0,R=g+1,U=g+2;w[M++]=D,w[M++]=R,w[M++]=R,w[M++]=U,w[M++]=U,w[M++]=D}}b.version=h;let T=r.get(_);T&&e.remove(T),r.set(_,b)}function p(_){let S=r.get(_);if(S){let m=_.index;m!==null&&S.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let S=s[_].deref();S!==void 0&&c(S)}}return{get:l,update:u,getWireframeAttribute:p,dispose:f}}function hm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,f){f!==0&&(i.drawElementsInstanced(n,p,r,d*a,f),t.update(p,n,f))}function u(d,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=p[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function um(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==d){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};p!==void 0&&p.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),S===!0&&(E=3);let b=o.attributes.position.count*E,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*w*4*d),g=new bs(T,b,w,d);g.type=ln,g.needsUpdate=!0;let M=E*4;for(let R=0;R<d;R++){let U=m[R],F=h[R],k=v[R],I=b*w*4*R;for(let q=0;q<U.count;q++){let $=q*M;f===!0&&(s.fromBufferAttribute(U,q),T[I+$+0]=s.x,T[I+$+1]=s.y,T[I+$+2]=s.z,T[I+$+3]=0),_===!0&&(s.fromBufferAttribute(F,q),T[I+$+4]=s.x,T[I+$+5]=s.y,T[I+$+6]=s.z,T[I+$+7]=0),S===!0&&(s.fromBufferAttribute(k,q),T[I+$+8]=s.x,T[I+$+9]=s.y,T[I+$+10]=s.z,T[I+$+11]=k.itemSize===4?s.w:1)}}p={count:d,texture:g,size:new Me(b,w)},n.set(o,p),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function fm(i,e,t,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var pm={[Ys]:"LINEAR_TONE_MAPPING",[Js]:"REINHARD_TONE_MAPPING",[Qs]:"CINEON_TONE_MAPPING",[xi]:"ACES_FILMIC_TONE_MAPPING",[er]:"AGX_TONE_MAPPING",[tr]:"NEUTRAL_TONE_MAPPING",[Ks]:"CUSTOM_TONE_MAPPING"};function mm(i,e,t,n,s,r){let a=new yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new $t;u.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new rt([0,2,0,0,2,0],2));let d=new Xi({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ut(u,d),f=new mi(-1,1,1,-1,0,1),_=null,S=null,m=!1,h,v=null,E=[],b=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),c!==null&&c.setSize(w,T);for(let g=0;g<E.length;g++){let M=E[g];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){E=w,b=E.length>0&&E[0].isRenderPass===!0;let T=a.width,g=a.height;E.length>0&&o===null&&(o=new yt(T,g,{type:Pt,depthBuffer:!1,stencilBuffer:!1}),c=new yt(T,g,{type:Pt,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new _n(T,g),r===!0&&(l.format=vn,l.type=Hn)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<E.length;D++){let R=E[D];R.setSize&&R.setSize(T,g),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,T){if(m||w.toneMapping===wn&&E.length===0)return!1;if(v=T,T!==null){let g=T.width,M=T.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return b===!1&&w.setRenderTarget(a),h=w.toneMapping,w.toneMapping=wn,!0},this.hasRenderPass=function(){return b},this.end=function(w,T){w.toneMapping=h,m=!0;let g=a,M=o;for(let D=0;D<E.length;D++){let R=E[D];R.enabled!==!1&&(R.render(w,M,g,T),R.needsSwap!==!1&&(g=M,M=M===o?c:o))}if(_!==w.outputColorSpace||S!==w.toneMapping){_=w.outputColorSpace,S=w.toneMapping,d.defines={},We.getTransfer(_)===Ke&&(d.defines.SRGB_TRANSFER="");let D=pm[S];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(v),w.render(p,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Wh=new Gt,qh=new _n(1,1),Xh=new Us(1),$h=new bs,Zh=new ia,jh=new Is,bh=[],Th=[],Eh=new Float32Array(16),Ah=new Float32Array(9),wh=new Float32Array(4);function rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xo(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),wt(t,n)}}function Sm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),wt(t,n)}}function Mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),wt(t,n)}}function bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function vo(i){return i.version===0&&(i.compareFunction=El,i.needsUpdate=!0),i}function Pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=vo(qh):r=Wh,t.setTexture2D(e||r,s)}function Um(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function Nm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=vo(Xh):r=jh,t.setTextureCube(e||r,s)}function Lm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$h,s)}function Dm(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return xm;case 35666:return vm;case 35674:return ym;case 35675:return Sm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Am;case 5125:return wm;case 36294:return Rm;case 36295:return Cm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Om(i,e){i.uniform1fv(this.addr,e)}function Fm(i,e){let t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Bm(i,e){let t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function zm(i,e){let t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Gm(i,e){let t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vm(i,e){let t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hm(i,e){let t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function km(i,e){i.uniform1iv(this.addr,e)}function Wm(i,e){i.uniform2iv(this.addr,e)}function qm(i,e){i.uniform3iv(this.addr,e)}function Xm(i,e){i.uniform4iv(this.addr,e)}function $m(i,e){i.uniform1uiv(this.addr,e)}function Zm(i,e){i.uniform2uiv(this.addr,e)}function jm(i,e){i.uniform3uiv(this.addr,e)}function Ym(i,e){i.uniform4uiv(this.addr,e)}function Jm(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vo(qh):a=Wh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Qm(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,r[a])}function Km(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=vo(Xh):a=jh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function eg(i,e,t){let n=this.cache,s=e.length,r=xo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$h,r[a])}function tg(i){switch(i){case 5126:return Om;case 35664:return Fm;case 35665:return Bm;case 35666:return zm;case 35674:return Gm;case 35675:return Vm;case 35676:return Hm;case 5124:case 35670:return km;case 35667:case 35671:return Wm;case 35668:case 35672:return qm;case 35669:case 35673:return Xm;case 5125:return $m;case 36294:return Zm;case 36295:return jm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return eg}}var Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dm(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tg(t.type)}},Gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function ng(i,e,t){let n=i.name,s=n.length;for(Ol.lastIndex=0;;){let r=Ol.exec(n),a=Ol.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rh(t,l===void 0?new Bl(o,i,e):new zl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Gl(o),Rh(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ng(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ig=37297,sg=0;function rg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ih=new Fe;function ag(i){We._getMatrix(Ih,We.workingColorSpace,i);let e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Ms:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ph(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rg(i.getShaderSource(e),o)}else return r}function og(i,e){let t=ag(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lg={[Ys]:"Linear",[Js]:"Reinhard",[Qs]:"Cineon",[xi]:"ACESFilmic",[er]:"AgX",[tr]:"Neutral",[Ks]:"Custom"};function cg(i,e){let t=lg[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new L;function hg(){We.getLuminanceCoefficients(go);let i=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function dg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hr(i){return i!==""}function Uh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(pg,mg)}function mg(i,e){let t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vl(t)}var gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(gg,_g)}function _g(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var xg={[gi]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function vg(i){return xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yg={[Qi]:"ENVMAP_MODE_REFRACTION"};function Sg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mg={[wa]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[Kc]:"ENVMAP_BLENDING_ADD"};function bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[i.combine]||"ENVMAP_BLENDING_NONE"}function Tg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=vg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Sg(t),d=bg(t),p=ug(t),f=dg(r),_=s.createProgram(),S,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(hr).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(S=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[Dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?He.tonemapping_pars_fragment:"",t.toneMapping!==wn?cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,og("linearToOutputTexel",t.outputColorSpace),hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=Vl(a),a=Uh(a,t),a=Nh(a,t),o=Vl(o),o=Uh(o,t),o=Nh(o,t),a=Lh(a),o=Lh(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,S=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=h+S+a,E=h+m+o,b=Ch(s,s.VERTEX_SHADER,v),w=Ch(s,s.FRAGMENT_SHADER,E);s.attachShader(_,b),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(w)||"",I=U.trim(),q=F.trim(),$=k.trim(),H=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,w);else{let V=Ph(s,b,"vertex"),te=Ph(s,w,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+V+`
`+te)}else I!==""?Le("WebGLProgram: Program Info Log:",I):(q===""||$==="")&&(se=!1);se&&(R.diagnostics={runnable:H,programLog:I,vertexShader:{log:q,prefix:S},fragmentShader:{log:$,prefix:m}})}s.deleteShader(b),s.deleteShader(w),g=new is(s,_),M=fg(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,ig)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var Eg=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}};function Ag(i){return i===si||i===or||i===lr}function wg(i,e,t,n,s,r){let a=new Ts,o=new Hl,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,M,D,R,U,F){let k=R.fog,I=U.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=e.get(g.envMap||q,$),se=p[g.type],V=n.precision;g.precision!==null&&(V=n.getMaxPrecision(g.precision),V!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",V,"instead."));let te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ne=te!==void 0?te.length:0,ve=0;I.morphAttributes.position!==void 0&&(ve=1),I.morphAttributes.normal!==void 0&&(ve=2),I.morphAttributes.color!==void 0&&(ve=3);let Ne,Q,fe,Se;if(se){let ae=Cn[se];Ne=ae.vertexShader,Q=ae.fragmentShader}else{Ne=g.vertexShader,Q=g.fragmentShader;let ae=o.getVertexShaderStage(g),De=o.getFragmentShaderStage(g);o.update(g,ae,De),fe=ae.id,Se=De.id}let Te=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Qe=U.isBatchedMesh===!0,Pe=!!g.map,Ge=!!g.matcap,Xe=!!H,Ve=Xe&&H.isPMREMTexture===!0,dt=!!g.aoMap,ot=!!g.lightMap,ft=!!g.bumpMap&&g.wireframe===!1,Ye=!!g.normalMap,gt=!!g.displacementMap,lt=!!g.emissiveMap,_t=!!g.metalnessMap,Mt=!!g.roughnessMap,bt=g.anisotropy>0,O=g.clearcoat>0,Tt=g.diffuseRoughness>0,je=g.dispersion>0,nt=g.retroreflectivity>0,ue=g.iridescence>0,et=g.sheen>0,Ce=g.transmission>0,Ue=bt&&!!g.anisotropyMap,A=O&&!!g.clearcoatMap,x=O&&!!g.clearcoatNormalMap,B=O&&!!g.clearcoatRoughnessMap,ie=Tt&&!!g.diffuseRoughnessMap,K=ue&&!!g.iridescenceMap,le=ue&&!!g.iridescenceThicknessMap,ce=et&&!!g.sheenColorMap,Z=et&&!!g.sheenRoughnessMap,Y=!!g.specularMap,oe=!!g.specularColorMap,C=!!g.specularIntensityMap,ee=Ce&&!!g.transmissionMap,j=Ce&&!!g.thicknessMap,de=!!g.gradientMap,P=!!g.alphaMap,W=g.alphaTest>0,re=!!g.alphaHash,pe=!!g.extensions,J=wn;g.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(J=i.toneMapping);let _e=Ve?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,be={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:Ne,fragmentShader:Q,defines:g.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:V,batching:Qe,batchingColor:Qe&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:Ge,envMap:Xe,envMapMode:Xe&&H.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?_e.length-1:null,envMapSize:Ve?_e[0].width:null,aoMap:dt,lightMap:ot,bumpMap:ft,normalMap:Ye,displacementMap:gt,emissiveMap:lt,normalMapObjectSpace:Ye&&g.normalMapType===nh,normalMapTangentSpace:Ye&&g.normalMapType===es,packedNormalMap:Ye&&g.normalMapType===es&&Ag(g.normalMap.format),metalnessMap:_t,roughnessMap:Mt,anisotropy:bt,anisotropyMap:Ue,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Tt,diffuseRoughnessMap:ie,dispersion:je,retroreflection:nt,iridescence:ue,iridescenceMap:K,iridescenceThicknessMap:le,sheen:et,sheenColorMap:ce,sheenRoughnessMap:Z,specularMap:Y,specularColorMap:oe,specularIntensityMap:C,transmission:Ce,transmissionMap:ee,thicknessMap:j,gradientMap:de,opaque:g.transparent===!1&&g.blending===Ji&&g.alphaToCoverage===!1,alphaMap:P,alphaTest:W,alphaHash:re,combine:g.combine,mapUv:Pe&&f(g.map.channel),aoMapUv:dt&&f(g.aoMap.channel),lightMapUv:ot&&f(g.lightMap.channel),bumpMapUv:ft&&f(g.bumpMap.channel),normalMapUv:Ye&&f(g.normalMap.channel),displacementMapUv:gt&&f(g.displacementMap.channel),emissiveMapUv:lt&&f(g.emissiveMap.channel),metalnessMapUv:_t&&f(g.metalnessMap.channel),roughnessMapUv:Mt&&f(g.roughnessMap.channel),anisotropyMapUv:Ue&&f(g.anisotropyMap.channel),clearcoatMapUv:A&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:K&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:le&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(g.sheenRoughnessMap.channel),specularMapUv:Y&&f(g.specularMap.channel),specularColorMapUv:oe&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:ee&&f(g.transmissionMap.channel),thicknessMapUv:j&&f(g.thicknessMap.channel),alphaMapUv:P&&f(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ye||bt),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Pe||P),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&Ye===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ve,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(ae=>ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===Ke,decodeVideoTextureEmissive:lt&&g.emissiveMap.isVideoTexture===!0&&We.getTransfer(g.emissiveMap.colorSpace)===Ke,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===an,flipSided:g.side===Nt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:pe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&g.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function S(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)M.push(D),M.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(m(M,g),h(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function m(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function h(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let M=p[g.type],D;if(M){let R=Cn[M];D=cn.clone(R.uniforms)}else D=g.uniforms;return D}function E(g,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new Tg(i,M,g,s),l.push(D),u.set(M,D)),D}function b(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:T}}function Rg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let f=0;return p.isInstancedMesh&&(f+=2),p.isSkinnedMesh&&(f+=1),f}function o(p,f,_,S,m,h){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:f,material:_,materialVariant:a(p),groupOrder:S,renderOrder:p.renderOrder,z:m,group:h},i[e]=v):(v.id=p.id,v.object=p,v.geometry=f,v.material=_,v.materialVariant=a(p),v.groupOrder=S,v.renderOrder=p.renderOrder,v.z=m,v.group=h),e++,v}function c(p,f,_,S,m,h,v){v.reversedDepth===!0&&(m=-m);let E=o(p,f,_,S,m,h);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):t.push(E)}function l(p,f,_,S,m,h){let v=o(p,f,_,S,m,h);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function u(p,f){t.length>1&&t.sort(p||Cg),n.length>1&&n.sort(f||Oh),s.length>1&&s.sort(f||Oh)}function d(){for(let p=e,f=i.length;p<f;p++){let _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Ig(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fh,i.set(n,[a])):s>=r.length?(a=new Fh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ng=0;function Lg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dg(i){let e=new Pg,t=Ug(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new qe,a=new qe;function o(l){let u=0,d=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,_=0,S=0,m=0,h=0,v=0,E=0,b=0,w=0,T=0,g=0,M=0,D=0,R=0;l.sort(Lg);for(let F=0,k=l.length;F<k;F++){let I=l[F],q=I.color,$=I.intensity,H=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===si?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=q.r*$,d+=q.g*$,p+=q.b*$;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],$);R++}else if(I.isSunLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=se;let ve=te.getViewportCount();for(let Ne=0;Ne<ve;Ne++)n.sunShadowMatrix[S+Ne]=te.getMatrix(Ne),n.sunShadowCascade[S+Ne]=te._cascadeData[Ne];S+=ve,_++}n.sun[f]=V,f++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=V,m++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(q).multiplyScalar($),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;let te=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,te.updateMatrices(I),I.castShadow&&D++),n.spotLightMatrix[v]=te.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=se,g++}v++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(q).multiplyScalar($),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=V,E++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let te=I.shadow,ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[h]=ne,n.pointShadowMap[h]=se,n.pointShadowMatrix[h]=I.shadow.matrix,T++}n.point[h]=V,h++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar($),V.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[b]=V,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==h||U.spotLength!==v||U.rectAreaLength!==E||U.hemiLength!==b||U.numSunShadows!==_||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==g||U.numSpotMaps!==M||U.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=h,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=R,U.sunLength=f,U.directionalLength=m,U.pointLength=h,U.spotLength=v,U.rectAreaLength=E,U.hemiLength=b,U.numSunShadows=_,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=g,U.numSpotMaps=M,U.numLightProbes=R,n.version=Ng++)}function c(l,u){let d=0,p=0,f=0,_=0,S=0,m=0,h=u.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let b=l[v];if(b.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(h),d++}else if(b.isDirectionalLight){let w=n.directional[p];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),p++}else if(b.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),_++}else if(b.isRectAreaLight){let w=n.rectArea[S];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(h),f++}else if(b.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:o,setupView:c,state:n}}function Bh(i){let e=new Dg(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,p)=>d.priority-p.priority||d.id-p.id)}function l(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Og(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Bh(i),e.set(s,[o])):r>=a.length?(o=new Bh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`,zg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Gg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],zh=new qe,cr=new L,Fl=new L;function Vg(i,e,t){let n=new Kn,s=new Me,r=new Me,a=new ht,o=new fa,c=new pa,l={},u=t.maxTextureSize,d={[ii]:Nt,[Nt]:ii,[an]:an},p=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Fg,fragmentShader:Bg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new $t;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ut(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gi;let h=this.type;this.render=function(T,g,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Fc&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gi);let D=i.getRenderTarget(),R=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(It),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=h!==this.type;k&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=T.length;I<q;I++){let $=T[I],H=$.shadow;if(H===void 0){Le("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let se=H.getFrameExtents();s.multiply(se),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,H.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Yi){if($.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new yt(s.x,s.y,{format:si,type:Pt,minFilter:qt,magFilter:qt,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new _n(s.x,s.y,ln),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=mt,H.map.depthTexture.magFilter=mt}else $.isPointLight?(H.map=new ur(s.x),H.map.depthTexture=new Us(s.x,xn)):(H.map=new yt(s.x,s.y),H.map.depthTexture=new _n(s.x,s.y,xn)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=zn,this.type===gi?(H.map.depthTexture.compareFunction=V?Tl:bl,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=mt,H.map.depthTexture.magFilter=mt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,M);let ne=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let ve=0;ve<te;ve++){let Ne=H.getCamera(ve);if($.isPointLight){let Q=H.camera,fe=H.matrix,Se=$.distance||Q.far;Se!==Q.far&&(Q.far=Se,Q.updateProjectionMatrix()),cr.setFromMatrixPosition($.matrixWorld),Q.position.copy(cr),Fl.copy(Q.position),Fl.add(zg[ve]),Q.up.copy(Gg[ve]),Q.lookAt(Fl),Q.updateMatrixWorld(),fe.makeTranslation(-cr.x,-cr.y,-cr.z),zh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(zh,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(H.map),i.clear());let Q=H.getViewport(ve);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(a)}n=H.getFrustum(ve),b(g,M,Ne,$,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Yi&&v(H,M),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(D,R,U)};function v(T,g){let M=e.update(S);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new yt(s.x,s.y,{format:si,type:Pt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,M,p,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,M,f,S,null)}function E(T,g,M,D){let R=null,U=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)R=U;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let F=R.uuid,k=g.uuid,I=l[F];I===void 0&&(I={},l[F]=I);let q=I[k];q===void 0&&(q=R.clone(),I[k]=q,g.addEventListener("dispose",w)),R=q}if(R.visible=g.visible,R.wireframe=g.wireframe,D===Yi?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=M}return R}function b(T,g,M,D,R,U){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===Yi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=e.update(T),q=T.material;if(Array.isArray(q)){let $=I.groups;for(let H=0,se=$.length;H<se;H++){let V=$[H],te=q[V.materialIndex];if(te&&te.visible){let ne=E(T,te,D,U);T.onBeforeShadow(i,T,g,M,I,ne,V),i.renderBufferDirect(M,null,I,ne,T,V),T.onAfterShadow(i,T,g,M,I,ne,V)}}}else if(q.visible){let $=E(T,q,D,U);T.onBeforeShadow(i,T,g,M,I,$,null),i.renderBufferDirect(M,null,I,$,T,null),T.onAfterShadow(i,T,g,M,I,$,null)}}let k=T.children;for(let I=0,q=k.length;I<q;I++)b(k[I],g,M,D,R,U)}function w(T){T.target.removeEventListener("dispose",w);for(let M in l){let D=l[M],R=T.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function Hg(i,e){function t(){let C=!1,ee=new ht,j=null,de=new ht(0,0,0,0);return{setMask:function(P){j!==P&&!C&&(i.colorMask(P,P,P,P),j=P)},setLocked:function(P){C=P},setClear:function(P,W,re,pe,J){J===!0&&(P*=pe,W*=pe,re*=pe),ee.set(P,W,re,pe),de.equals(ee)===!1&&(i.clearColor(P,W,re,pe),de.copy(ee))},reset:function(){C=!1,j=null,de.set(-1,0,0,0)}}}function n(){let C=!1,ee=!1,j=null,de=null,P=null;return{setReversed:function(W){if(ee!==W){let re=e.get("EXT_clip_control");W?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),ee=W;let pe=P;P=null,this.setClear(pe)}},getReversed:function(){return ee},setTest:function(W){W?he(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(W){j!==W&&!C&&(i.depthMask(W),j=W)},setFunc:function(W){if(ee&&(W=fh[W]),de!==W){switch(W){case Xr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Yr:i.depthFunc(i.GEQUAL);break;case Jr:i.depthFunc(i.GREATER);break;case Qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=W}},setLocked:function(W){C=W},setClear:function(W){P!==W&&(P=W,ee&&(W=1-W),i.clearDepth(W))},reset:function(){C=!1,j=null,de=null,P=null,ee=!1}}}function s(){let C=!1,ee=null,j=null,de=null,P=null,W=null,re=null,pe=null,J=null;return{setTest:function(_e){C||(_e?he(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(_e){ee!==_e&&!C&&(i.stencilMask(_e),ee=_e)},setFunc:function(_e,be,ae){(j!==_e||de!==be||P!==ae)&&(i.stencilFunc(_e,be,ae),j=_e,de=be,P=ae)},setOp:function(_e,be,ae){(W!==_e||re!==be||pe!==ae)&&(i.stencilOp(_e,be,ae),W=_e,re=be,pe=ae)},setLocked:function(_e){C=_e},setClear:function(_e){J!==_e&&(i.clearStencil(_e),J=_e)},reset:function(){C=!1,ee=null,j=null,de=null,P=null,W=null,re=null,pe=null,J=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,u={},d={},p={},f=new WeakMap,_=[],S=null,m=!1,h=null,v=null,E=null,b=null,w=null,T=null,g=null,M=new Be(0,0,0),D=0,R=!1,U=null,F=null,k=null,I=null,q=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,se=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=se>=1):V.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=se>=2);let te=null,ne={},ve=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Q=new ht().fromArray(ve),fe=new ht().fromArray(Ne);function Se(C,ee,j,de){let P=new Uint8Array(4),W=i.createTexture();i.bindTexture(C,W),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<j;re++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,P):i.texImage2D(ee+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,P);return W}let Te={};Te[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Fi),ft(!1),Ye(hl),he(i.CULL_FACE),dt(It);function he(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Ie(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Qe(C,ee){return p[C]!==ee?(i.bindFramebuffer(C,ee),p[C]=ee,C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ee),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(C,ee){let j=_,de=!1;if(C){j=f.get(ee),j===void 0&&(j=[],f.set(ee,j));let P=C.textures;if(j.length!==P.length||j[0]!==i.COLOR_ATTACHMENT0){for(let W=0,re=P.length;W<re;W++)j[W]=i.COLOR_ATTACHMENT0+W;j.length=P.length,de=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,de=!0);de&&i.drawBuffers(j)}function Ge(C){return S!==C?(i.useProgram(C),S=C,!0):!1}let Xe={[on]:i.FUNC_ADD,[Bc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};Xe[Gc]=i.MIN,Xe[Vc]=i.MAX;let Ve={[_i]:i.ZERO,[Hc]:i.ONE,[kc]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[$c]:i.SRC_ALPHA_SATURATE,[js]:i.DST_COLOR,[Zs]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[ml]:i.ONE_MINUS_SRC_ALPHA,[Xc]:i.ONE_MINUS_DST_COLOR,[qc]:i.ONE_MINUS_DST_ALPHA,[Zc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Yc]:i.CONSTANT_ALPHA,[Jc]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(C,ee,j,de,P,W,re,pe,J,_e){if(C===It){m===!0&&(Ie(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),C!==Aa){if(C!==h||_e!==R){if((v!==on||w!==on)&&(i.blendEquation(i.FUNC_ADD),v=on,w=on),_e)switch(C){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",C);break}else switch(C){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",C);break}E=null,b=null,T=null,g=null,M.set(0,0,0),D=0,h=C,R=_e}return}P=P||ee,W=W||j,re=re||de,(ee!==v||P!==w)&&(i.blendEquationSeparate(Xe[ee],Xe[P]),v=ee,w=P),(j!==E||de!==b||W!==T||re!==g)&&(i.blendFuncSeparate(Ve[j],Ve[de],Ve[W],Ve[re]),E=j,b=de,T=W,g=re),(pe.equals(M)===!1||J!==D)&&(i.blendColor(pe.r,pe.g,pe.b,J),M.copy(pe),D=J),h=C,R=!1}function ot(C,ee){C.side===an?Ie(i.CULL_FACE):he(i.CULL_FACE);let j=C.side===Nt;ee&&(j=!j),ft(j),C.blending===Ji&&C.transparent===!1?dt(It):dt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let de=C.stencilWrite;o.setTest(de),de&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),lt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function Ye(C){C!==Dc?(he(i.CULL_FACE),C!==F&&(C===hl?i.cullFace(i.BACK):C===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),F=C}function gt(C){C!==k&&(H&&i.lineWidth(C),k=C)}function lt(C,ee,j){C?(he(i.POLYGON_OFFSET_FILL),(I!==ee||q!==j)&&(I=ee,q=j,a.getReversed()&&(ee=-ee,j=-j),i.polygonOffset(ee,j))):Ie(i.POLYGON_OFFSET_FILL)}function _t(C){C?he(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Mt(C){C===void 0&&(C=i.TEXTURE0+$-1),te!==C&&(i.activeTexture(C),te=C)}function bt(C,ee,j){j===void 0&&(te===null?j=i.TEXTURE0+$-1:j=te);let de=ne[j];de===void 0&&(de={type:void 0,texture:void 0},ne[j]=de),(de.type!==C||de.texture!==ee)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(C,ee||Te[C]),de.type=C,de.texture=ee)}function O(){let C=ne[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(C){Oe("WebGLState:",C)}}function je(){try{i.compressedTexImage3D(...arguments)}catch(C){Oe("WebGLState:",C)}}function nt(){try{i.texSubImage2D(...arguments)}catch(C){Oe("WebGLState:",C)}}function ue(){try{i.texSubImage3D(...arguments)}catch(C){Oe("WebGLState:",C)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Oe("WebGLState:",C)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Oe("WebGLState:",C)}}function Ue(){try{i.texStorage2D(...arguments)}catch(C){Oe("WebGLState:",C)}}function A(){try{i.texStorage3D(...arguments)}catch(C){Oe("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Oe("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Oe("WebGLState:",C)}}function ie(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function K(C,ee){d[C]!==ee&&(i.pixelStorei(C,ee),d[C]=ee)}function le(C){Q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function ce(C){fe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),fe.copy(C))}function Z(C,ee){let j=l.get(ee);j===void 0&&(j=new WeakMap,l.set(ee,j));let de=j.get(C);de===void 0&&(de=i.getUniformBlockIndex(ee,C.name),i.uniformBlockBinding(ee,de,de),j.set(C,de))}function Y(C,ee,j){let P=l.get(ee).get(C);c[P]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,P,j),c[P]=j)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},p={},c={},f=new WeakMap,_=[],S=null,m=!1,h=null,v=null,E=null,b=null,w=null,T=null,g=null,M=new Be(0,0,0),D=0,R=!1,U=null,F=null,k=null,I=null,q=null,Q.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Ie,bindFramebuffer:Qe,drawBuffers:Pe,useProgram:Ge,setBlending:dt,setMaterial:ot,setFlipSided:ft,setCullFace:Ye,setLineWidth:gt,setPolygonOffset:lt,setScissorTest:_t,activeTexture:Mt,bindTexture:bt,unbindTexture:O,compressedTexImage2D:Tt,compressedTexImage3D:je,texImage2D:x,texImage3D:B,pixelStorei:K,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:Y,texStorage2D:Ue,texStorage3D:A,texSubImage2D:nt,texSubImage3D:ue,compressedTexSubImage2D:et,compressedTexSubImage3D:Ce,scissor:le,viewport:ce,reset:oe}}function kg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap,d=new Set,p,f=new WeakMap,_=new Set,S=new FinalizationRegistry(A=>_.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(A,x){return m?new OffscreenCanvas(A,x):zi("canvas")}function v(A,x,B){let ie=1,K=Ue(A);if((K.width>B||K.height>B)&&(ie=B/Math.max(K.width,K.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let le=Math.floor(ie*K.width),ce=Math.floor(ie*K.height);p===void 0&&(p=h(le,ce));let Z=x?h(le,ce):p;return Z.width=le,Z.height=ce,Z.getContext("2d").drawImage(A,0,0,le,ce),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+ce+")."),Z}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function E(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,B,ie,K,le=!1){if(A!==null){if(i[A]!==void 0)return i[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;ie&&(ce=e.get("EXT_texture_norm16"),ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&ce&&(Z=ce.R16_EXT),B===i.SHORT&&ce&&(Z=ce.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(Z=ce.RG16_EXT),B===i.SHORT&&ce&&(Z=ce.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGB16_EXT),B===i.SHORT&&ce&&(Z=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let Y=le?Ms:We.getTransfer(K);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Y===Ke?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(Z=ce.RGBA16_EXT),B===i.SHORT&&ce&&(Z=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(A,x){let B;return A?x===null||x===xn||x===Hn?B=i.DEPTH24_STENCIL8:x===ln?B=i.DEPTH32F_STENCIL8:x===Ki&&(B=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===Hn?B=i.DEPTH_COMPONENT24:x===ln?B=i.DEPTH_COMPONENT32F:x===Ki&&(B=i.DEPTH_COMPONENT16),B}function M(A,x){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==mt&&A.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function D(A){let x=new WeakRef(A);n.get(A).__ref=x,_.add(x),S.register(A,x,x)}function R(A){let x=n.get(A).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function U(A){k(A.target)}function F(A){I(A.target)}function k(A){A.removeEventListener("dispose",U),R(A),$(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener("dispose",F),R(A),se(A)}function q(){for(let A of _){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):k(x))}_.clear(),d.clear()}function $(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,ie=f.get(B);if(ie){let K=ie[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&H(A),Object.keys(ie).length===0&&f.delete(B)}n.remove(A)}function H(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let B=A.source,ie=f.get(B);delete ie[x.__cacheKey],a.memory.textures--}function se(A){let x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&k(B),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let le=0;le<x.__webglFramebuffer[K].length;le++)i.deleteFramebuffer(x.__webglFramebuffer[K][le]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ie=A.textures;for(let K=0,le=ie.length;K<le;K++){let ce=n.get(ie[K]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ie[K])}n.remove(A)}let V=0;function te(){V=0}function ne(){return V}function ve(A){V=A}function Ne(){let A=V;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function Q(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function fe(A,x){let B=n.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ie=A.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Se(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ot(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Te(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ot(B,A,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function he(A,x){let B=n.get(A);if(A.version>0&&B.__version!==A.version){ft(B,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Ie={[Xt]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},Qe={[mt]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Pe={[sh]:i.NEVER,[El]:i.ALWAYS,[rh]:i.LESS,[bl]:i.LEQUAL,[ah]:i.EQUAL,[Tl]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function Ge(A,x){if(x.type===ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===Ia||x.magFilter===nr||x.magFilter===Vn||x.minFilter===qt||x.minFilter===Ia||x.minFilter===nr||x.minFilter===Vn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ie[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ie[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ie[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Qe[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Qe[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mt||x.minFilter!==nr&&x.minFilter!==Vn||x.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xe(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",U),D(x));let ie=x.source,K=f.get(ie);K===void 0&&(K={},f.set(ie,K));let le=Q(x);if(le!==A.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[le].usedTimes++;let ce=K[A.__cacheKey];ce!==void 0&&(K[A.__cacheKey].usedTimes--,ce.usedTimes===0&&H(x)),A.__cacheKey=le,A.__webglTexture=K[le].texture}return B}function Ve(A,x,B){return Math.floor(Math.floor(A/B)/x)}function dt(A,x,B,ie){let le=A.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ie,x.data);else{le.sort((C,ee)=>C.start-ee.start);let ce=0;for(let C=1;C<le.length;C++){let ee=le[ce],j=le[C],de=ee.start+ee.count,P=Ve(j.start,x.width,4),W=Ve(ee.start,x.width,4);j.start<=de+1&&P===W&&Ve(j.start+j.count-1,x.width,4)===P?ee.count=Math.max(ee.count,j.start+j.count-ee.start):(++ce,le[ce]=j)}le.length=ce+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,ee=le.length;C<ee;C++){let j=le[C],de=Math.floor(j.start/4),P=Math.ceil(j.count/4),W=de%x.width,re=Math.floor(de/x.width),pe=P,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,W),t.pixelStorei(i.UNPACK_SKIP_ROWS,re),t.texSubImage2D(i.TEXTURE_2D,0,W,re,pe,J,B,ie,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ot(A,x,B){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);let K=Xe(A,x),le=x.source;t.bindTexture(ie,A.__webglTexture,i.TEXTURE0+B);let ce=n.get(le);if(le.version!==ce.__version||K===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let J=We.getPrimaries(We.workingColorSpace),_e=x.colorSpace===kn?null:We.getPrimaries(x.colorSpace),be=x.colorSpace===kn||J===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Y=v(x.image,!1,s.maxTextureSize);Y=Ce(x,Y);let oe=r.convert(x.format,x.colorSpace),C=r.convert(x.type),ee=T(x.internalFormat,oe,C,x.normalized,x.colorSpace,x.isVideoTexture);Ge(ie,x);let j,de=x.mipmaps,P=x.isVideoTexture!==!0,W=ce.__version===void 0||K===!0,re=le.dataReady,pe=M(x,Y);if(x.isDepthTexture)ee=g(x.format===vn,x.type),W&&(P?t.texStorage2D(i.TEXTURE_2D,1,ee,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,ee,Y.width,Y.height,0,oe,C,null));else if(x.isDataTexture)if(de.length>0){P&&W&&t.texStorage2D(i.TEXTURE_2D,pe,ee,de[0].width,de[0].height);for(let J=0,_e=de.length;J<_e;J++)j=de[J],P?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,j.width,j.height,oe,C,j.data):t.texImage2D(i.TEXTURE_2D,J,ee,j.width,j.height,0,oe,C,j.data);x.generateMipmaps=!1}else P?(W&&t.texStorage2D(i.TEXTURE_2D,pe,ee,Y.width,Y.height),re&&dt(x,Y,oe,C)):t.texImage2D(i.TEXTURE_2D,0,ee,Y.width,Y.height,0,oe,C,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&W&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ee,de[0].width,de[0].height,Y.depth);for(let J=0,_e=de.length;J<_e;J++)if(j=de[J],x.format!==Jt)if(oe!==null)if(P){if(re)if(x.layerUpdates.size>0){let be=Dl(j.width,j.height,x.format,x.type);for(let ae of x.layerUpdates){let De=j.data.subarray(ae*be/j.data.BYTES_PER_ELEMENT,(ae+1)*be/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ae,j.width,j.height,1,oe,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,j.width,j.height,Y.depth,oe,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ee,j.width,j.height,Y.depth,0,j.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,j.width,j.height,Y.depth,oe,C,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ee,j.width,j.height,Y.depth,0,oe,C,j.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{P&&W&&t.texStorage2D(i.TEXTURE_2D,pe,ee,de[0].width,de[0].height);for(let J=0,_e=de.length;J<_e;J++)j=de[J],x.format!==Jt?oe!==null?P?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,j.width,j.height,oe,j.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ee,j.width,j.height,0,j.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,j.width,j.height,oe,C,j.data):t.texImage2D(i.TEXTURE_2D,J,ee,j.width,j.height,0,oe,C,j.data)}else if(x.isDataArrayTexture)if(P){if(W&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ee,Y.width,Y.height,Y.depth),re)if(x.layerUpdates.size>0){let J=Dl(Y.width,Y.height,x.format,x.type);for(let _e of x.layerUpdates){let be=Y.data.subarray(_e*J/Y.data.BYTES_PER_ELEMENT,(_e+1)*J/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,Y.width,Y.height,1,oe,C,be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,C,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,Y.width,Y.height,Y.depth,0,oe,C,Y.data);else if(x.isData3DTexture)P?(W&&t.texStorage3D(i.TEXTURE_3D,pe,ee,Y.width,Y.height,Y.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,C,Y.data)):t.texImage3D(i.TEXTURE_3D,0,ee,Y.width,Y.height,Y.depth,0,oe,C,Y.data);else if(x.isFramebufferTexture){if(W)if(P)t.texStorage2D(i.TEXTURE_2D,pe,ee,Y.width,Y.height);else{let J=Y.width,_e=Y.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,ee,J,_e,0,oe,C,null),J>>=1,_e>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Y.parentNode!==J){J.appendChild(Y),d.add(x),J.onpaint=_e=>{let be=_e.changedElements;for(let ae of d)be.includes(ae.image)&&(ae.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let be=i.RGBA,ae=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,ae,De,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(P&&W){let J=Ue(de[0]);t.texStorage2D(i.TEXTURE_2D,pe,ee,J.width,J.height)}for(let J=0,_e=de.length;J<_e;J++)j=de[J],P?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe,C,j):t.texImage2D(i.TEXTURE_2D,J,ee,oe,C,j);x.generateMipmaps=!1}else if(P){if(W){let J=Ue(Y);t.texStorage2D(i.TEXTURE_2D,pe,ee,J.width,J.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,C,Y)}else t.texImage2D(i.TEXTURE_2D,0,ee,oe,C,Y);E(x)&&x.mipmapsAutoUpdate===!0&&b(ie),ce.__version=le.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ft(A,x,B){if(x.image.length!==6)return;let ie=Xe(A,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let le=n.get(K);if(K.version!==le.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);let ce=We.getPrimaries(We.workingColorSpace),Z=x.colorSpace===kn?null:We.getPrimaries(x.colorSpace),Y=x.colorSpace===kn||ce===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let oe=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!oe&&!C?ee[ae]=v(x.image[ae],!0,s.maxCubemapSize):ee[ae]=C?x.image[ae].image:x.image[ae],ee[ae]=Ce(x,ee[ae]);let j=ee[0],de=r.convert(x.format,x.colorSpace),P=r.convert(x.type),W=T(x.internalFormat,de,P,x.normalized,x.colorSpace),re=x.isVideoTexture!==!0,pe=le.__version===void 0||ie===!0,J=K.dataReady,_e=M(x,j);Ge(i.TEXTURE_CUBE_MAP,x);let be;if(x.isDepthTexture){if(W=g(x.format===vn,x.type),pe)if(re)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,W,j.width,j.height);else for(let ae=0;ae<6;ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,W,j.width,j.height,0,de,P,null)}else if(oe){re&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,W,j.width,j.height);for(let ae=0;ae<6;ae++){be=ee[ae].mipmaps;for(let De=0;De<be.length;De++){let it=be[De];x.format!==Jt?de!==null?re?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,it.width,it.height,de,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,W,it.width,it.height,0,it.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,it.width,it.height,de,P,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,W,it.width,it.height,0,de,P,it.data)}}}else{if(be=x.mipmaps,re&&pe){be.length>0&&_e++;let ae=Ue(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,W,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(C){re?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,de,P,ee[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,W,ee[ae].width,ee[ae].height,0,de,P,ee[ae].data);for(let De=0;De<be.length;De++){let kt=be[De].image[ae].image;re?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,kt.width,kt.height,de,P,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,W,kt.width,kt.height,0,de,P,kt.data)}}else{re?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,de,P,ee[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,W,de,P,ee[ae]);for(let De=0;De<be.length;De++){let it=be[De];re?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,de,P,it.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,W,de,P,it.image[ae])}}}E(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),le.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ye(A,x,B,ie,K,le){let ce=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),Y=T(B.internalFormat,ce,Z,B.normalized,B.colorSpace),oe=n.get(x),C=n.get(B);if(C.__renderTarget=x,!oe.__hasExternalTextures){let ee=Math.max(1,x.width>>le),j=Math.max(1,x.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,Y,ee,j,x.depth,0,ce,Z,null):t.texImage2D(K,le,Y,ee,j,0,ce,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,C.__webglTexture,0,nt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,C.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let ie=x.depthTexture,K=ie&&ie.isDepthTexture?ie.type:null,le=g(x.stencilBuffer,K),ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(x),le,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(x),le,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,le,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,A)}else{let ie=x.textures;for(let K=0;K<ie.length;K++){let le=ie[K],ce=r.convert(le.format,le.colorSpace),Z=r.convert(le.type),Y=T(le.internalFormat,ce,Z,le.normalized,le.colorSpace);ue(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(x),Y,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(A,x,B){let ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let le=ie?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||le.width!==x.width||le.height!==x.height)&&(le.width=x.width,le.height=x.height,x.depthTexture.needsUpdate=!0),ie?he(x.depthTexture,0):fe(x.depthTexture,0);let ce=K.__webglTexture,Z=nt(x),Y=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,oe=x.depthTexture.format===vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===zn)ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,ce,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,ce,0);else if(x.depthTexture.format===vn)ue(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,ce,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let ie=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",K)};ie.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=ie}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)lt(x.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?lt(x.__webglFramebuffer[0],A,0):lt(x.__webglFramebuffer,A,0);else if(B){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),gt(x.__webglDepthbuffer[ie],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),gt(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(A,x,B){let ie=n.get(A);x!==void 0&&Ye(ie.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_t(A)}function bt(A){let x=A.texture,B=n.get(A),ie=n.get(x);A.addEventListener("dispose",F),D(A);let K=A.textures,le=A.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Z][Y]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Z=0,Y=K.length;Z<Y;Z++){let oe=n.get(K[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ue(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let Y=K[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let oe=r.convert(Y.format,Y.colorSpace),C=r.convert(Y.type),ee=T(Y.internalFormat,oe,C,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),j=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Ye(B.__webglFramebuffer[Z][Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Y);else Ye(B.__webglFramebuffer[Z],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Z=0,Y=K.length;Z<Y;Z++){let oe=K[Z],C=n.get(oe),ee=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,C.__webglTexture),Ge(ee,oe),Ye(B.__webglFramebuffer,A,oe,i.COLOR_ATTACHMENT0+Z,ee,0),E(oe)&&b(ee)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),Ge(Z,x),x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Ye(B.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,Z,Y);else Ye(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Z,0);E(x)?b(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&_t(A)}function O(A){let x=A.textures;for(let B=0,ie=x.length;B<ie;B++){let K=x[B];if(E(K)&&K.mipmapsAutoUpdate===!0){let le=w(A),ce=n.get(K).__webglTexture;t.bindTexture(le,ce),b(le),t.unbindTexture()}}}let Tt=[];function je(A){if(A.samples>0){if(ue(A)===!1){let x=A.textures,B=A.width,ie=A.height,K=i.COLOR_BUFFER_BIT,le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(A),Z=x.length>1;if(Z)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);let C=n.get(x[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,K,i.NEAREST),c===!0&&(Tt.length=0,Tt.push(i.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Tt.push(le),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);let C=n.get(x[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function ue(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ce(A,x){let B=A.colorSpace,ie=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ss&&B!==kn&&(We.getTransfer(B)===Ke?(ie!==Jt||K!==Vt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",B)),x}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ne,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=ve,this.setTexture2D=fe,this.setTexture2DArray=Se,this.setTexture3D=Te,this.setTextureCube=he,this.rebindTextures=Mt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ue,this.dispose=q}function Wg(i,e){function t(n,s=kn){let r,a=We.getTransfer(s);if(n===Vt)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_l)return i.BYTE;if(n===xl)return i.SHORT;if(n===Ki)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Pt)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===Jt)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===vn)return i.DEPTH_STENCIL;if(n===La)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===si)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Fa)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===Ga||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===ka||n===Wa||n===qa||n===Xa||n===or||n===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===ka)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===or)return r.COMPRESSED_RG11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===ja||n===Ya||n===Ja||n===Qa||n===Ka||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ro)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===co||n===ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uo||n===fo||n===lr||n===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`,Wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ns(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:qg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends Mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,p=null,f=null,_=null,S=typeof XRWebGLBinding<"u",m=new Wl,h={},v=t.getContextAttributes(),E=null,b=null,w=[],T=[],g=new Me,M=null,D=null,R=new zt;R.viewport=new ht;let U=new zt;U.viewport=new ht;let F=[R,U],k=new Ea,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=w[Q];return fe===void 0&&(fe=new ki,w[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=w[Q];return fe===void 0&&(fe=new ki,w[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=w[Q];return fe===void 0&&(fe=new ki,w[Q]=fe),fe.getHandSpace()};function $(Q){let fe=T.indexOf(Q.inputSource);if(fe===-1)return;let Se=w[fe];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,l||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",se);for(let Q=0;Q<w.length;Q++){let fe=T[Q];fe!==null&&(T[Q]=null,w[Q].disconnect(fe))}I=null,q=null,m.reset();for(let Q in h)delete h[Q];if(e.setRenderTarget(E),f=null,p=null,d=null,s=null,b=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",H),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Te=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=v.stencil?vn:zn,Te=v.stencil?Hn:xn);let Ie={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new yt(p.textureWidth,p.textureHeight,{format:Jt,type:Vt,depthTexture:new _n(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yt(f.framebufferWidth,f.framebufferHeight,{format:Jt,type:Vt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Q){for(let fe=0;fe<Q.removed.length;fe++){let Se=Q.removed[fe],Te=T.indexOf(Se);Te>=0&&(T[Te]=null,w[Te].disconnect(Se))}for(let fe=0;fe<Q.added.length;fe++){let Se=Q.added[fe],Te=T.indexOf(Se);if(Te===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=T.length){T.push(Se),Te=Ie;break}else if(T[Ie]===null){T[Ie]=Se,Te=Ie;break}if(Te===-1)break}let he=w[Te];he&&he.connect(Se)}}function V(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let fe=Q.near,Se=Q.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),k.near=U.near=R.near=fe,k.far=U.far=R.far=Se,(I!==k.near||q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,q=k.far),k.layers.mask=Q.layers.mask|6,R.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let Te=Q.parent,he=k.cameras;V(k,Te);for(let Ie=0;Ie<he.length;Ie++)V(he[Ie],Te);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),te(Q,k,Te)};function te(Q,fe,Se){Se===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Q){c=Q,p!==null&&(p.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Q){return h[Q]};let ne=null;function ve(Q,fe){if(u=fe.getViewerPose(l||a),_=fe,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Te=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Te=!0);for(let Pe=0;Pe<Se.length;Pe++){let Ge=Se[Pe],Xe=null;if(f!==null)Xe=f.getViewport(Ge);else{let dt=d.getViewSubImage(p,Ge);Xe=dt.viewport,Pe===0&&(e.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(b))}let Ve=F[Pe];Ve===void 0&&(Ve=new zt,Ve.layers.enable(Pe),Ve.viewport=new ht,F[Pe]=Ve),Ve.matrix.fromArray(Ge.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ge.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Pe===0&&(k.matrix.copy(Ve.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Te===!0&&k.cameras.push(Ve)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Pe=d.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(he&&he.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<Se.length;Pe++){let Ge=Se[Pe].camera;if(Ge){let Xe=h[Ge];Xe||(Xe=new Ns,h[Ge]=Xe);let Ve=d.getCameraImage(Ge);Xe.sourceTexture=Ve}}}}for(let Se=0;Se<w.length;Se++){let Te=T[Se],he=w[Se];Te!==null&&he!==void 0&&he.update(Te,fe,l||a)}ne&&ne(Q,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}let Ne=new Gh;Ne.setAnimationLoop(ve),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}},$g=new qe,Yh=new Fe;Yh.set(-1,0,0,0,1,0,0,0,1);function Zg(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Ul(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,v,E,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),S(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,v,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Nt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Nt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v=e.get(h),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yh),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,v,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,v){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){let v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jg(i,e,t,n){let s={},r={};function a(v,E){let b=E.program;n.uniformBlockBinding(v,b,s[v.id])}function o(v,E){let b=s[v.id];b===void 0&&(_(v),b=c(v),s[v.id]=b,v.addEventListener("dispose",m));let w=E.program;n.updateUBOMapping(v,w);let T=e.render.frame;r[v.id]!==T&&(l(v),r[v.id]=T)}function c(v){let E=i.createBuffer(),b=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(v){let E=s[v.id],b=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,g=b.length;T<g;T++){let M=b[T];if(Array.isArray(M))for(let D=0,R=M.length;D<R;D++)u(M[D],T,D,w);else u(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,E,b,w){if(p(v,E,b,w)===!0){let T=v.__offset,g=v.value;if(Array.isArray(g)){let M=0;for(let D=0;D<g.length;D++){let R=g[D],U=S(R,!0);d(R,v.__data,M),M+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function d(v,E,b){typeof v=="number"||typeof v=="boolean"?E[b]=v:v.isMatrix3?(E[b]=v.elements[0],E[b+1]=v.elements[1],E[b+2]=v.elements[2],E[b+3]=0,E[b+4]=v.elements[3],E[b+5]=v.elements[4],E[b+6]=v.elements[5],E[b+7]=0,E[b+8]=v.elements[6],E[b+9]=v.elements[7],E[b+10]=v.elements[8],E[b+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-b),b):v.toArray(E,b)}function p(v,E,b,w){let T=v.value,g=E+"_"+b;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);let M=w[g],D=!1;for(let R=0;R<T.length;R++)f(T[R],M,R)===!0&&(D=!0);return D}return f(T,w,g)}function f(v,E,b){if(E[b]===void 0)return typeof v=="number"||typeof v=="boolean"?E[b]=v:ArrayBuffer.isView(v)?E[b]=v.slice():E[b]=v.clone(),!0;{let w=E[b];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return E[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function _(v){let E=v.uniforms,b=0,w=16;for(let g=0,M=E.length;g<M;g++){let D=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,U=D.length;R<U;R++){let F=D[R],k=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(E[g])||Array.isArray(F.value),q=b;for(let H=0,se=k.length;H<se;H++){let V=k[H],te=S(V,I),ne=b%w,ve=ne%te.boundary,Ne=ne+ve;b+=ve,Ne!==0&&w-Ne<te.storage&&(b+=w-Ne),H===0&&(q=b),b+=te.storage}let $=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new $((b-q)/Float32Array.BYTES_PER_ELEMENT),F.__offset=q}}let T=b%w;return T>0&&(b+=w-T),v.__size=b,v.__cache={},this}function S(v,E){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(v){let E=v.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:h}}var Yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function Jg(){return Rn===null&&(Rn=new Gn(Yg,16,16,si,Pt),Rn.name="DFG_LUT",Rn.minFilter=qt,Rn.magFilter=qt,Rn.wrapS=Sn,Rn.wrapT=Sn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var _o=class{constructor(e={}){let{canvas:t=hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:f=Vt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=f,m=new Set([Fa,Oa,Da]),h=new Set([Vt,xn,Ki,Hn,Ua,Na]),v=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},w=null,T=null,g=[],M=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,F=null,k=null,I=null,q=null;this._outputColorSpace=Bt;let $=0,H=0,se=null,V=-1,te=null,ne=new ht,ve=new ht,Ne=null,Q=new Be(0),fe=0,Se=t.width,Te=t.height,he=1,Ie=null,Qe=null,Pe=new ht(0,0,Se,Te),Ge=new ht(0,0,Se,Te),Xe=!1,Ve=new Kn,dt=new ra,ot=!1,ft=!1,Ye=new qe,gt=new L,lt=new ht,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function bt(){return se===null?he:1}let O=n;function Tt(y,N){return t.getContext(y,N)}let je,nt,ue,et,Ce,Ue,A,x,B,ie,K,le,ce,Z,Y,oe,C,ee,j,de,P,W,re;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ae,!1),O===null){let N="webgl2";if(O=Tt(N,y),O===null)throw Tt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(y){throw t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Oe("WebGLRenderer: "+y.message),y}function pe(){je=new lm(O),je.init(),P=new Wg(O,je),nt=new Jp(O,je,e,P),ue=new Hg(O,je),nt.reversedDepthBuffer&&p&&ue.buffers.depth.setReversed(!0),k=O.createFramebuffer(),I=O.createFramebuffer(),q=O.createFramebuffer(),et=new um(O),Ce=new Rg,Ue=new kg(O,je,ue,Ce,nt,P,et),A=new om(R),x=new dd(O),W=new jp(O,x),B=new cm(O,x,et,W),ie=new fm(O,B,x,W,et),ee=new dm(O,nt,Ue),Y=new Qp(Ce),K=new wg(R,A,je,nt,W,Y),le=new Zg(R,Ce),ce=new Ig,Z=new Og(je),C=new Zp(R,A,ue,ie,_,c),oe=new Vg(R,ie,nt),re=new jg(O,et,nt,ue),j=new Yp(O,je,et),de=new hm(O,je,et),et.programs=K.programs,R.capabilities=nt,R.extensions=je,R.properties=Ce,R.renderLists=ce,R.shadowMap=oe,R.state=ue,R.info=et}S!==Vt&&(D=new mm(S,t.width,t.height,o,s,r));let J=new ql(R,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(y){y!==void 0&&(he=y,this.setSize(Se,Te,!1))},this.getSize=function(y){return y.set(Se,Te)},this.setSize=function(y,N,X=!0){if(J.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=y,Te=N,t.width=Math.floor(y*he),t.height=Math.floor(N*he),X===!0&&(t.style.width=y+"px",t.style.height=N+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Se*he,Te*he).floor()},this.setDrawingBufferSize=function(y,N,X){Se=y,Te=N,he=X,t.width=Math.floor(y*X),t.height=Math.floor(N*X),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(S===Vt){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,N,X,z){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,N,X,z),ue.viewport(ne.copy(Pe).multiplyScalar(bt()).round())},this.getScissor=function(y){return y.copy(Ge)},this.setScissor=function(y,N,X,z){y.isVector4?Ge.set(y.x,y.y,y.z,y.w):Ge.set(y,N,X,z),ue.scissor(ve.copy(Ge).multiplyScalar(bt()).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(y){ue.setScissorTest(Xe=y)},this.setOpaqueSort=function(y){Ie=y},this.setTransparentSort=function(y){Qe=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,X=!0){let z=0;if(y){let G=!1;if(se!==null){let ge=se.texture.format;G=m.has(ge)}if(G){let ge=se.texture.type,Ee=h.has(ge),me=C.getClearColor(),ye=C.getClearAlpha(),Re=me.r,ze=me.g,$e=me.b;Ee?(v[0]=Re,v[1]=ze,v[2]=$e,v[3]=ye,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Re,E[1]=ze,E[2]=$e,E[3]=ye,O.clearBufferiv(O.COLOR,0,E))}else z|=O.COLOR_BUFFER_BIT}N&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),C.dispose(),ce.dispose(),Z.dispose(),Ue.dispose(),Ce.dispose(),A.dispose(),ie.dispose(),B.dispose(),W.dispose(),re.dispose(),K.dispose(),J.dispose(),J.removeEventListener("sessionstart",jl),J.removeEventListener("sessionend",Yl),ai.stop()};function _e(y){y.preventDefault(),wl("WebGLRenderer: Context Lost."),U=!0}function be(){wl("WebGLRenderer: Context Restored."),U=!1;let y=et.autoReset,N=oe.enabled,X=oe.autoUpdate,z=oe.needsUpdate,G=oe.type;pe(),et.autoReset=y,oe.enabled=N,oe.autoUpdate=X,oe.needsUpdate=z,oe.type=G}function ae(y){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function De(y){let N=y.target;N.removeEventListener("dispose",De),it(N)}function it(y){kt(y),Ce.remove(y)}function kt(y){let N=Ce.get(y).programs;N!==void 0&&(N.forEach(function(X){K.releaseProgram(X)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,X,z,G,ge){N===null&&(N=_t);let Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=iu(y,N,X,z,G);ue.setMaterial(z,Ee);let ye=X.index,Re=1;if(z.wireframe===!0){if(ye=B.getWireframeAttribute(X),ye===void 0)return;Re=2}let ze=X.drawRange,$e=X.attributes.position,Ae=ze.start*Re,Ze=(ze.start+ze.count)*Re;ge!==null&&(Ae=Math.max(Ae,ge.start*Re),Ze=Math.min(Ze,(ge.start+ge.count)*Re)),ye!==null?(Ae=Math.max(Ae,0),Ze=Math.min(Ze,ye.count)):$e!=null&&(Ae=Math.max(Ae,0),Ze=Math.min(Ze,$e.count));let xt=Ze-Ae;if(xt<0||xt===1/0)return;W.setup(G,z,me,X,ye);let at,st=j;if(ye!==null&&(at=x.get(ye),st=de,st.setIndex(at)),G.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*bt()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(G.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),ue.setLineWidth(Lt*bt()),G.isLineSegments?st.setMode(O.LINES):G.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else G.isPoints?st.setMode(O.POINTS):G.isSprite&&st.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Lt=G._multiDrawStarts,we=G._multiDrawCounts,Wt=G._multiDrawCount,tt=ye?x.get(ye).bytesPerElement:1,oi=Ce.get(z).currentProgram.getUniforms();for(let Dt=0;Dt<Wt;Dt++)oi.setValue(O,"_gl_DrawID",Dt),st.render(Lt[Dt]/tt,we[Dt])}else if(G.isInstancedMesh)st.renderInstances(Ae,xt,G.count);else if(X.isInstancedBufferGeometry){let Lt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,Lt);st.renderInstances(Ae,xt,we)}else st.render(Ae,xt)};function Zl(y,N,X,z){F!==null&&y.isNodeMaterial&&F.setObject(z,y),ot===!0&&Y.setState(y,X,!1),y.transparent===!0&&y.side===an&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,ls(y,N,z),y.side=ii,y.needsUpdate=!0,ls(y,N,z),y.side=an):ls(y,N,z)}this.compile=function(y,N,X=null){X===null&&(X=y),F!==null&&F.renderStart(y,N,X),T=Z.get(X),T.init(N),M.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==X&&y.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ft=this.localClippingEnabled,ot=Y.init(this.clippingPlanes,ft),ot===!0&&Y.setGlobalState(this.clippingPlanes,N),F!==null&&oe.render(T.state.shadowsArray,X,N);let z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){let me=ge[Ee];Zl(me,X,N,G),z.add(me)}else Zl(ge,X,N,G),z.add(ge)}),T=M.pop(),F!==null&&F.renderEnd(),z},this.compileAsync=function(y,N,X=null){let z=this.compile(y,N,X);return new Promise(G=>{function ge(){if(z.forEach(function(Ee){let ye=Ce.get(Ee).currentProgram;(ye===void 0||ye.isReady())&&z.delete(Ee)}),z.size===0){G(y);return}setTimeout(ge,10)}je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Po=null;function tu(y){Po&&Po(y)}function jl(){ai.stop()}function Yl(){ai.start()}let ai=new Gh;ai.setAnimationLoop(tu),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(y){Po=y,J.setAnimationLoop(y),y===null?ai.stop():ai.start()},J.addEventListener("sessionstart",jl),J.addEventListener("sessionend",Yl),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(y,N);let X=J.enabled===!0&&J.isPresenting===!0,z=D!==null&&(se===null||X)&&D.begin(R,se);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,N,se),T=Z.get(y,M.length),T.init(N),T.state.textureUnits=Ue.getTextureUnits(),M.push(T),Ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?dt.setFromArrayCamera(N):Ve.setFromProjectionMatrix(Ye,en,N.reversedDepth),ft=this.localClippingEnabled,ot=Y.init(this.clippingPlanes,ft),w=ce.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,J.enabled===!0&&J.isPresenting===!0){let Ee=R.xr.getDepthSensingMesh();Ee!==null&&Uo(Ee,N,-1/0,R.sortObjects)}Uo(y,N,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Ie,Qe),Mt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Mt&&C.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),ot===!0&&Y.beginShadows();let G=T.state.shadowsArray;if(oe.render(G,y,N),ot===!0&&Y.endShadows(),(z&&D.hasRenderPass())===!1){let Ee=w.opaque,me=w.transmissive;if(T.setupLights(),N.isArrayCamera){let ye=N.cameras;if(me.length>0)for(let Re=0,ze=ye.length;Re<ze;Re++){let $e=ye[Re];Ql(Ee,me,y,$e)}Mt&&C.render(y);for(let Re=0,ze=ye.length;Re<ze;Re++){let $e=ye[Re];Jl(w,y,$e,$e.viewport)}}else me.length>0&&Ql(Ee,me,y,N),Mt&&C.render(y),Jl(w,y,N)}se!==null&&H===0&&(Ue.updateMultisampleRenderTarget(se),Ue.updateRenderTargetMipmap(se)),z&&D.end(R),y.isScene===!0&&y.onAfterRender(R,y,N),W.resetDefaultState(),V=-1,te=null,M.pop(),M.length>0?(T=M[M.length-1],Ue.setTextureUnits(T.state.textureUnits),ot===!0&&Y.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,F!==null&&F.renderEnd()};function Uo(y,N,X,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let Ee=N.isArrayCamera?dt:Ve;if(!y.frustumCulled||y.intersectsFrustum(Ee)){z&&lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ye);let me=ie.update(y),ye=y.material;ye.visible&&w.push(y,me,ye,X,lt.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){let Ee=N.isArrayCamera?dt:Ve;if(!y.frustumCulled||y.intersectsFrustum(Ee)){let me=ie.update(y),ye=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),lt.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),lt.copy(me.boundingSphere.center)),lt.applyMatrix4(y.matrixWorld).applyMatrix4(Ye)),Array.isArray(ye)){let Re=me.groups;for(let ze=0,$e=Re.length;ze<$e;ze++){let Ae=Re[ze],Ze=ye[Ae.materialIndex];Ze&&Ze.visible&&w.push(y,me,Ze,X,lt.z,Ae,N)}}else ye.visible&&w.push(y,me,ye,X,lt.z,null,N)}}}let ge=y.children;for(let Ee=0,me=ge.length;Ee<me;Ee++)Uo(ge[Ee],N,X,z)}function Jl(y,N,X,z){let{opaque:G,transmissive:ge,transparent:Ee}=y;T.setupLightsView(X),ot===!0&&Y.setGlobalState(R.clippingPlanes,X),z&&ue.viewport(ne.copy(z)),G.length>0&&yr(G,N,X),ge.length>0&&yr(ge,N,X),Ee.length>0&&yr(Ee,N,X),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ql(y,N,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Ae=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new yt(1,1,{generateMipmaps:!0,type:Ae?Pt:Vt,minFilter:Vn,samples:Math.max(4,nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let ge=T.state.transmissionRenderTarget[z.id],Ee=z.viewport||ne;ge.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),ye=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(Q),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&C.render(X);let ze=R.toneMapping;R.toneMapping=wn;let $e=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),ot===!0&&Y.setGlobalState(R.clippingPlanes,z),yr(y,X,z),Ue.updateMultisampleRenderTarget(ge),Ue.updateRenderTargetMipmap(ge),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Ze=0,xt=N.length;Ze<xt;Ze++){let at=N[Ze],{object:st,geometry:Lt,material:we,group:Wt}=at;if(we.side===an&&st.layers.test(z.layers)){let tt=we.side;we.side=Nt,we.needsUpdate=!0,Kl(st,X,z,Lt,we,Wt),we.side=tt,we.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ue.updateMultisampleRenderTarget(ge),Ue.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,ye,Re),R.setClearColor(Q,fe),$e!==void 0&&(z.viewport=$e),R.toneMapping=ze}function yr(y,N,X){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ge=y.length;G<ge;G++){let Ee=y[G],{object:me,geometry:ye,group:Re}=Ee,ze=Ee.material;ze.allowOverride===!0&&z!==null&&(ze=z),me.layers.test(X.layers)&&Kl(me,N,X,ye,ze,Re)}}function Kl(y,N,X,z,G,ge){F!==null&&G.isNodeMaterial&&F.setObject(y,G),y.onBeforeRender(R,N,X,z,G,ge),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(R,N,X,z,y,ge),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=Nt,G.needsUpdate=!0,R.renderBufferDirect(X,N,z,G,y,ge),G.side=ii,G.needsUpdate=!0,R.renderBufferDirect(X,N,z,G,y,ge),G.side=an):R.renderBufferDirect(X,N,z,G,y,ge),y.onAfterRender(R,N,X,z,G,ge)}function ec(y){let N=0;for(let X of y)X.texture!==null&&N++;return N}function ls(y,N,X){N.isScene!==!0&&(N=_t);let z=Ce.get(y),G=T.state.lights,ge=T.state.shadowsArray,Ee=G.state.version,me=K.getParameters(y,G.state,ge,N,X,T.state.lightProbeGridArray),ye=K.getProgramCacheKey(me),Re=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let ze=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=A.get(y.envMap||z.environment,ze),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",De),Re=new Map,z.programs=Re,z.programVariants=new Map);let $e=Re.get(ye);if($e!==void 0){if(z.currentProgram===$e&&z.lightsStateVersion===Ee)return nc(y,me),$e}else me.uniforms=K.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,X,me),y.onBeforeCompile(me,R),$e=K.acquireProgram(me,ye),Re.set(ye,$e),z.uniforms=me.uniforms;let Ae=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=Y.uniform),nc(y,me),z.needsLights=ru(y),z.lightsStateVersion=Ee,z.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.sunLights.value=G.state.sun,Ae.sunLightShadows.value=G.state.sunShadow,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.sunShadowMatrix.value=G.state.sunShadowMatrix,Ae.sunShadowCascade.value=G.state.sunShadowCascade,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=ec(T.state.lightProbeGridArray),z.currentProgram=$e,z.uniformsList=null,$e}function nu(y,N,X,z,G){let ge=Ce.get(y),Ee=ge.currentProgram.id+","+z+","+G,me=ge.programVariants.get(Ee);return me===void 0?(me=ls(y,N,X),ge.programVariants.set(Ee,me)):(ge.currentProgram=me,ge.uniformsList=null,ge.outputColorSpace=z,ge.toneMapping=G),me}function tc(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=is.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function nc(y,N){let X=Ce.get(y);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function iu(y,N,X,z,G){N.isScene!==!0&&(N=_t),Ue.resetTextureUnits();let ge=N.fog,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,me=se===null?R.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:We.workingColorSpace,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Re=A.get(z.envMap||Ee,ye),ze=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,at=wn;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(at=R.toneMapping);let st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Lt=st!==void 0?st.length:0,we=Ce.get(z),Wt=T.state.lights;if(ot===!0&&(ft===!0||y!==te)){let pt=y===te&&z.id===V;Y.setState(z,y,pt)}let tt=!1,oi=!1;z.version===we.__version?we.needsLights&&we.lightsStateVersion!==Wt.state.version||G.isBatchedMesh&&we.batching===!1||!G.isBatchedMesh&&we.batching===!0||G.isBatchedMesh&&we.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&we.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&we.instancing===!1||!G.isInstancedMesh&&we.instancing===!0||G.isSkinnedMesh&&we.skinning===!1||!G.isSkinnedMesh&&we.skinning===!0||G.isInstancedMesh&&we.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&we.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&we.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&we.instancingMorph===!1&&G.morphTexture!==null||we.envMap!==Re||z.fog===!0&&we.fog!==ge||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Y.numPlanes||we.numIntersection!==Y.numIntersection)||we.vertexAlphas!==ze||we.vertexTangents!==$e||we.morphTargets!==Ae||we.morphNormals!==Ze||we.morphColors!==xt||we.morphTargetsCount!==Lt||we.numLightProbeGrids!==ec(T.state.lightProbeGridArray)?tt=!0:(we.outputColorSpace!==me||we.toneMapping!==at)&&(oi=!0):(tt=!0,we.__version=z.version);let Dt=we.currentProgram;(tt===!0||oi===!0)&&(Dt=oi===!0?nu(z,N,G,me,at):ls(z,N,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Dt,we));let Sr=!1,Wn=!1,li=!1,Je=Dt.getUniforms(),Ut=we.uniforms;if(ue.useProgram(Dt.program)&&(Sr=!0,Wn=!0,li=!0),z.id!==V&&(V=z.id,Wn=!0),Sr||te!==y){ue.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Je.setValue(O,"projectionMatrix",y.projectionMatrix),Je.setValue(O,"viewMatrix",y.matrixWorldInverse);let Rt=Je.map.cameraPosition;Rt!==void 0&&Rt.setValue(O,gt.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&Je.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Je.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),te!==y&&(te=y,Wn=!0,li=!0)}if(we.needsLights&&(Wt.state.sunShadowMap.length>0&&Je.setValue(O,"sunShadowMap",Wt.state.sunShadowMap,Ue),Wt.state.directionalShadowMap.length>0&&Je.setValue(O,"directionalShadowMap",Wt.state.directionalShadowMap,Ue),Wt.state.spotShadowMap.length>0&&Je.setValue(O,"spotShadowMap",Wt.state.spotShadowMap,Ue),Wt.state.pointShadowMap.length>0&&Je.setValue(O,"pointShadowMap",Wt.state.pointShadowMap,Ue)),G.isSkinnedMesh){Je.setOptional(O,G,"bindMatrix"),Je.setOptional(O,G,"bindMatrixInverse");let pt=G.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Je.setValue(O,"boneTexture",pt.boneTexture,Ue))}G.isBatchedMesh&&(Je.setOptional(O,G,"batchingTexture"),Je.setValue(O,"batchingTexture",G._matricesTexture,Ue),Je.setOptional(O,G,"batchingIdTexture"),Je.setValue(O,"batchingIdTexture",G._indirectTexture,Ue),Je.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Je.setValue(O,"batchingColorTexture",G._colorsTexture,Ue));let un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&ee.update(G,X,Dt),(Wn||we.receiveShadow!==G.receiveShadow)&&(we.receiveShadow=G.receiveShadow,Je.setValue(O,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Ut.envMapIntensity.value=N.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Jg()),Wn){if(Je.setValue(O,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&su(Ut,li),ge&&z.fog===!0&&le.refreshFogUniforms(Ut,ge),le.refreshMaterialUniforms(Ut,z,he,Te,T.state.transmissionRenderTarget[y.id]),we.needsLights&&we.numLightProbeGrids>0){let pt=b,Rt=0;for(let Pn of T.state.lightProbeGridArray)Pn.texture!==null&&(pt.textures[Rt]=Pn.texture,pt.min[Rt]=Pn.boundingBox.min,pt.max[Rt]=Pn.boundingBox.max,pt.resolution[Rt]=Pn.resolution,Rt++);for(let Pn in pt)pt[Pn].length=Rt;Ut.probesSH.value=pt.textures,Ut.probesMin.value=pt.min,Ut.probesMax.value=pt.max,Ut.probesResolution.value=pt.resolution}is.upload(O,tc(we),Ut,Ue)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(is.upload(O,tc(we),Ut,Ue),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Je.setValue(O,"center",G.center),Je.setValue(O,"modelViewMatrix",G.modelViewMatrix),Je.setValue(O,"normalMatrix",G.normalMatrix),Je.setValue(O,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let pt=z.uniformsGroups;for(let Rt=0,Pn=pt.length;Rt<Pn;Rt++){let sc=pt[Rt];re.update(sc,Dt),re.bind(sc,Dt)}}return Dt}function su(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function ru(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(y,N,X){let z=Ce.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=N,Ce.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let X=Ce.get(y);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,X=0){se=y,$=N,H=X;let z=null,G=!1,ge=!1;if(y){let me=Ce.get(y);if(me.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(y.viewport),ve.copy(y.scissor),Ne=y.scissorTest,ue.viewport(ne),ue.scissor(ve),ue.setScissorTest(Ne),V=-1;return}else if(me.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(me.__hasExternalTextures)Ue.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ze=y.depthTexture;if(me.__boundDepthTexture!==ze){if(ze!==null&&Ce.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);let Re=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?z=Re[N][X]:z=Re[N],G=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?z=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?z=Re[X]:z=Re,ne.copy(y.viewport),ve.copy(y.scissor),Ne=y.scissorTest}else ne.copy(Pe).multiplyScalar(he).floor(),ve.copy(Ge).multiplyScalar(he).floor(),Ne=Xe;if(X!==0&&(z=k),ue.bindFramebuffer(O.FRAMEBUFFER,z)&&ue.drawBuffers(y,z),ue.viewport(ne),ue.scissor(ve),ue.setScissorTest(Ne),G){let me=Ce.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,X)}else if(ge){let me=N;for(let ye=0;ye<y.textures.length;ye++){let Re=Ce.get(y.textures[ye]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ye,Re.__webglTexture,X,me)}}else if(y!==null&&X!==0){let me=Ce.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,X)}V=-1};function ic(y){let N=Ce.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=nt.textureFormatReadable(y.format),N.__typeReadable=nt.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,X,z,G,ge,Ee,me=0){if(!(y&&y.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(ye=ye[Ee],Array.isArray(ye)&&(ye=ye[0])),ye){ue.bindFramebuffer(O.FRAMEBUFFER,ye);try{let Re=y.textures[me],ze=Re.format,$e=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ae=ic(Re);if(Ae.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&X>=0&&X<=y.height-G&&O.readPixels(N,X,z,G,P.convert(ze),P.convert($e),ge)}finally{let Re=se!==null?Ce.get(se).__webglFramebuffer:null;ue.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,N,X,z,G,ge,Ee,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(ye=ye[Ee],Array.isArray(ye)&&(ye=ye[0])),ye)if(N>=0&&N<=y.width-z&&X>=0&&X<=y.height-G){ue.bindFramebuffer(O.FRAMEBUFFER,ye);let Re=y.textures[me],ze=Re.format,$e=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ae=ic(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(N,X,z,G,P.convert(ze),P.convert($e),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let xt=se!==null?Ce.get(se).__webglFramebuffer:null;ue.bindFramebuffer(O.FRAMEBUFFER,xt);let at=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dh(O,at,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ze),O.deleteSync(at),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,X=0){let z=Math.pow(2,-X),G=Math.floor(y.image.width*z),ge=Math.floor(y.image.height*z),Ee=N!==null?N.x:0,me=N!==null?N.y:0;Ue.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Ee,me,G,ge),ue.unbindTexture()},this.copyTextureToTexture=function(y,N,X=null,z=null,G=0,ge=0){let Ee,me,ye,Re,ze,$e,Ae,Ze,xt,at=y.isCompressedTexture?y.mipmaps[ge]:y.image;if(X!==null)Ee=X.max.x-X.min.x,me=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,ze=X.min.y,$e=X.isBox3?X.min.z:0;else{let Je=Math.pow(2,-G);Ee=Math.floor(at.width*Je),me=Math.floor(at.height*Je),y.isDataArrayTexture?ye=at.depth:y.isData3DTexture?ye=Math.floor(at.depth*Je):ye=1,Re=0,ze=0,$e=0}z!==null?(Ae=z.x,Ze=z.y,xt=z.z):(Ae=0,Ze=0,xt=0);let st=P.convert(N.format),Lt=P.convert(N.type),we;N.isData3DTexture?(Ue.setTexture3D(N,0),we=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ue.setTexture2DArray(N,0),we=O.TEXTURE_2D_ARRAY):(Ue.setTexture2D(N,0),we=O.TEXTURE_2D),ue.activeTexture(O.TEXTURE0),ue.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),ue.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ue.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let Wt=ue.getParameter(O.UNPACK_ROW_LENGTH),tt=ue.getParameter(O.UNPACK_IMAGE_HEIGHT),oi=ue.getParameter(O.UNPACK_SKIP_PIXELS),Dt=ue.getParameter(O.UNPACK_SKIP_ROWS),Sr=ue.getParameter(O.UNPACK_SKIP_IMAGES);ue.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),ue.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),ue.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),ue.pixelStorei(O.UNPACK_SKIP_ROWS,ze),ue.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);let Wn=y.isDataArrayTexture||y.isData3DTexture,li=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let Je=Ce.get(y),Ut=Ce.get(N),un=Ce.get(Je.__renderTarget),pt=Ce.get(Ut.__renderTarget);ue.bindFramebuffer(O.READ_FRAMEBUFFER,un.__webglFramebuffer),ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Rt=0;Rt<ye;Rt++)Wn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,G,$e+Rt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,ge,xt+Rt)),O.blitFramebuffer(Re,ze,Re+Ee,ze+me,Ae,Ze,Ae+Ee,Ze+me,O.DEPTH_BUFFER_BIT,O.NEAREST);ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||Ce.has(y)){let Je=Ce.get(y),Ut=Ce.get(N);ue.bindFramebuffer(O.READ_FRAMEBUFFER,I),ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,q);for(let un=0;un<ye;un++)Wn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Je.__webglTexture,G,$e+un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Je.__webglTexture,G),li?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.__webglTexture,ge,xt+un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ut.__webglTexture,ge),G!==0?O.blitFramebuffer(Re,ze,Re+Ee,ze+me,Ae,Ze,Ae+Ee,Ze+me,O.COLOR_BUFFER_BIT,O.NEAREST):li?O.copyTexSubImage3D(we,ge,Ae,Ze,xt+un,Re,ze,Ee,me):O.copyTexSubImage2D(we,ge,Ae,Ze,Re,ze,Ee,me);ue.bindFramebuffer(O.READ_FRAMEBUFFER,null),ue.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else li?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(we,ge,Ae,Ze,xt,Ee,me,ye,st,Lt,at.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(we,ge,Ae,Ze,xt,Ee,me,ye,st,at.data):O.texSubImage3D(we,ge,Ae,Ze,xt,Ee,me,ye,st,Lt,at):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Ae,Ze,Ee,me,st,Lt,at.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Ae,Ze,at.width,at.height,st,at.data):O.texSubImage2D(O.TEXTURE_2D,ge,Ae,Ze,Ee,me,st,Lt,at);ue.pixelStorei(O.UNPACK_ROW_LENGTH,Wt),ue.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),ue.pixelStorei(O.UNPACK_SKIP_PIXELS,oi),ue.pixelStorei(O.UNPACK_SKIP_ROWS,Dt),ue.pixelStorei(O.UNPACK_SKIP_IMAGES,Sr),ge===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(we),ue.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){$=0,H=0,se=null,ue.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var fr=new L;function hn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;fr.copy(e),fr[n]=0,fr.normalize();let l=.5*a/(a+o),u=1-fr.angleTo(i)/c;return Math.sign(fr[t])===1?u*l:o/(a+o)+l+l*(1-u)}var yo=class i extends nn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,u=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,S=new L,m=.5/a;for(let h=0,v=0;h<d.length;h+=3,v+=2)switch(c.fromArray(d,h),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[h+0]=u.x*Math.sign(c.x)+l.x*r,d[h+1]=u.y*Math.sign(c.y)+l.y*r,d[h+2]=u.z*Math.sign(c.z)+l.z*r,p[h+0]=l.x,p[h+1]=l.y,p[h+2]=l.z,Math.floor(h/_)){case 0:S.set(1,0,0),f[v+0]=hn(S,l,"z","y",r,n),f[v+1]=1-hn(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),f[v+0]=1-hn(S,l,"z","y",r,n),f[v+1]=1-hn(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),f[v+0]=1-hn(S,l,"x","z",r,e),f[v+1]=hn(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[v+0]=1-hn(S,l,"x","z",r,e),f[v+1]=1-hn(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[v+0]=1-hn(S,l,"x","y",r,e),f[v+1]=1-hn(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),f[v+0]=hn(S,l,"x","y",r,e),f[v+1]=1-hn(S,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var So=class extends Jn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new nn;e.deleteAttribute("uv");let t=new rn({side:Nt}),n=new rn,s=new pi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ut(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Cs(e,n,6),o=new St;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ut(e,as(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ut(e,as(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new ut(e,as(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ut(e,as(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let p=new ut(e,as(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let f=new ut(e,as(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function as(i){return new Gs({color:0,emissive:16777215,emissiveIntensity:i})}var Jh=new L,Kg=new tn,Qh=new L,Mo=class extends St{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var In=new qe,e0=new qe,bo=class{constructor(e={}){let t=this,n,s,r,a,o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;let l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);let u=document.createElement("div");u.style.transformStyle="preserve-3d",l.appendChild(u),this.getSize=function(){return{width:n,height:s}},this.render=function(m,h){let v=h.projectionMatrix.elements[5]*a;h.view&&h.view.enabled?(l.style.transform=`translate( ${-h.view.offsetX*(n/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,l.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let E,b;h.isOrthographicCamera&&(E=-(h.right+h.left)/2,b=(h.top+h.bottom)/2);let w=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,T=h.isOrthographicCamera?`scale( ${w} )scale(`+v+")translate("+d(E)+"px,"+d(b)+"px)"+p(h.matrixWorldInverse):`scale( ${w} )translateZ(`+v+"px)"+p(h.matrixWorldInverse),M=(h.isPerspectiveCamera?"perspective("+v+"px) ":"")+T+"translate("+r+"px,"+a+"px)";o.camera.style!==M&&(u.style.transform=M,o.camera.style=M),S(m,m,h,T)},this.setSize=function(m,h){n=m,s=h,r=n/2,a=s/2,c.style.width=m+"px",c.style.height=h+"px",l.style.width=m+"px",l.style.height=h+"px",u.style.width=m+"px",u.style.height=h+"px"};function d(m){return Math.abs(m)<1e-10?0:m}function p(m){let h=m.elements;return"matrix3d("+d(h[0])+","+d(-h[1])+","+d(h[2])+","+d(h[3])+","+d(h[4])+","+d(-h[5])+","+d(h[6])+","+d(h[7])+","+d(h[8])+","+d(-h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(-h[13])+","+d(h[14])+","+d(h[15])+")"}function f(m){let h=m.elements;return"translate(-50%,-50%)"+("matrix3d("+d(h[0])+","+d(h[1])+","+d(h[2])+","+d(h[3])+","+d(-h[4])+","+d(-h[5])+","+d(-h[6])+","+d(-h[7])+","+d(h[8])+","+d(h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(h[13])+","+d(h[14])+","+d(h[15])+")")}function _(m){m.isCSS3DObject&&(m.element.style.display="none");for(let h=0,v=m.children.length;h<v;h++)_(m.children[h])}function S(m,h,v,E){if(m.visible===!1){_(m);return}if(m.isCSS3DObject){let b=m.layers.test(v.layers)===!0,w=m.element;if(w.style.display=b===!0?"":"none",b===!0){m.onBeforeRender(t,h,v);let T;m.isCSS3DSprite?(In.copy(v.matrixWorldInverse),In.transpose(),m.rotation2D!==0&&In.multiply(e0.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Jh,Kg,Qh),In.setPosition(Jh),In.scale(Qh),In.elements[3]=0,In.elements[7]=0,In.elements[11]=0,In.elements[15]=1,T=f(In)):T=f(m.matrixWorld);let g=o.objects.get(m);if(g===void 0||g.style!==T){w.style.transform=T;let M={style:T};o.objects.set(m,M)}w.parentNode!==u&&u.appendChild(w),m.onAfterRender(t,h,v)}}for(let b=0,w=m.children.length;b<w;b++)S(m.children[b],h,v,E)}}};var os={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Qt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},t0=new mi(-1,1,1,-1,0,1),Xl=class extends $t{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},n0=new Xl,ri=class{constructor(e){this._mesh=new ut(n0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var To=class extends Qt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ri(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pr=class extends Qt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Eo=class extends Qt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ao=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new To(os),this.copyPass.material.blending=It,this.timer=new $s}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pr!==void 0&&(a instanceof pr?n=!0:a instanceof Eo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wo=class extends Qt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var mr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new qe},cameraProjectionMatrixInverse:{value:new qe},cameraWorldMatrix:{value:new qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},gr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ro={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Kh(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=i0(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Gn(s,e,e);return r.wrapS=Xt,r.wrapT=Xt,r.needsUpdate=!0,r}function i0(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var _r={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:$l(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function $l(i,e,t){let n=s0(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function s0(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var Co=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(c+l)*u,p=c-d,f=l-d,_=e-p,S=t-f,m,h;_>S?(m=1,h=0):(m=0,h=1);let v=_-m+u,E=S-h+u,b=_-1+2*u,w=S-1+2*u,T=c&255,g=l&255,M=this.perm[T+this.perm[g]]%12,D=this.perm[T+m+this.perm[g+h]]%12,R=this.perm[T+1+this.perm[g+1]]%12,U=.5-_*_-S*S;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[M],_,S));let F=.5-v*v-E*E;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[D],v,E));let k=.5-b*b-w*w;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[R],b,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),d=Math.floor(t+l),p=Math.floor(n+l),f=1/6,_=(u+d+p)*f,S=u-_,m=d-_,h=p-_,v=e-S,E=t-m,b=n-h,w,T,g,M,D,R;v>=E?E>=b?(w=1,T=0,g=0,M=1,D=1,R=0):v>=b?(w=1,T=0,g=0,M=1,D=0,R=1):(w=0,T=0,g=1,M=1,D=0,R=1):E<b?(w=0,T=0,g=1,M=0,D=1,R=1):v<b?(w=0,T=1,g=0,M=0,D=1,R=1):(w=0,T=1,g=0,M=1,D=1,R=0);let U=v-w+f,F=E-T+f,k=b-g+f,I=v-M+2*f,q=E-D+2*f,$=b-R+2*f,H=v-1+3*f,se=E-1+3*f,V=b-1+3*f,te=u&255,ne=d&255,ve=p&255,Ne=this.perm[te+this.perm[ne+this.perm[ve]]]%12,Q=this.perm[te+w+this.perm[ne+T+this.perm[ve+g]]]%12,fe=this.perm[te+M+this.perm[ne+D+this.perm[ve+R]]]%12,Se=this.perm[te+1+this.perm[ne+1+this.perm[ve+1]]]%12,Te=.6-v*v-E*E-b*b;Te<0?s=0:(Te*=Te,s=Te*Te*this._dot3(this.grad3[Ne],v,E,b));let he=.6-U*U-F*F-k*k;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[Q],U,F,k));let Ie=.6-I*I-q*q-$*$;Ie<0?a=0:(Ie*=Ie,a=Ie*Ie*this._dot3(this.grad3[fe],I,q,$));let Qe=.6-H*H-se*se-V*V;return Qe<0?o=0:(Qe*=Qe,o=Qe*Qe*this._dot3(this.grad3[Se],H,se,V)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,d,p,f,_,S=(e+t+n+s)*c,m=Math.floor(e+S),h=Math.floor(t+S),v=Math.floor(n+S),E=Math.floor(s+S),b=(m+h+v+E)*l,w=m-b,T=h-b,g=v-b,M=E-b,D=e-w,R=t-T,U=n-g,F=s-M,k=D>R?32:0,I=D>U?16:0,q=R>U?8:0,$=D>F?4:0,H=R>F?2:0,se=U>F?1:0,V=k+I+q+$+H+se,te=a[V][0]>=3?1:0,ne=a[V][1]>=3?1:0,ve=a[V][2]>=3?1:0,Ne=a[V][3]>=3?1:0,Q=a[V][0]>=2?1:0,fe=a[V][1]>=2?1:0,Se=a[V][2]>=2?1:0,Te=a[V][3]>=2?1:0,he=a[V][0]>=1?1:0,Ie=a[V][1]>=1?1:0,Qe=a[V][2]>=1?1:0,Pe=a[V][3]>=1?1:0,Ge=D-te+l,Xe=R-ne+l,Ve=U-ve+l,dt=F-Ne+l,ot=D-Q+2*l,ft=R-fe+2*l,Ye=U-Se+2*l,gt=F-Te+2*l,lt=D-he+3*l,_t=R-Ie+3*l,Mt=U-Qe+3*l,bt=F-Pe+3*l,O=D-1+4*l,Tt=R-1+4*l,je=U-1+4*l,nt=F-1+4*l,ue=m&255,et=h&255,Ce=v&255,Ue=E&255,A=o[ue+o[et+o[Ce+o[Ue]]]]%32,x=o[ue+te+o[et+ne+o[Ce+ve+o[Ue+Ne]]]]%32,B=o[ue+Q+o[et+fe+o[Ce+Se+o[Ue+Te]]]]%32,ie=o[ue+he+o[et+Ie+o[Ce+Qe+o[Ue+Pe]]]]%32,K=o[ue+1+o[et+1+o[Ce+1+o[Ue+1]]]]%32,le=.6-D*D-R*R-U*U-F*F;le<0?u=0:(le*=le,u=le*le*this._dot4(r[A],D,R,U,F));let ce=.6-Ge*Ge-Xe*Xe-Ve*Ve-dt*dt;ce<0?d=0:(ce*=ce,d=ce*ce*this._dot4(r[x],Ge,Xe,Ve,dt));let Z=.6-ot*ot-ft*ft-Ye*Ye-gt*gt;Z<0?p=0:(Z*=Z,p=Z*Z*this._dot4(r[B],ot,ft,Ye,gt));let Y=.6-lt*lt-_t*_t-Mt*Mt-bt*bt;Y<0?f=0:(Y*=Y,f=Y*Y*this._dot4(r[ie],lt,_t,Mt,bt));let oe=.6-O*O-Tt*Tt-je*je-nt*nt;return oe<0?_=0:(oe*=oe,_=oe*oe*this._dot4(r[K],O,Tt,je,nt)),27*(u+d+p+f+_)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var xr=class i extends Qt{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Kh(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new yt(this.width,this.height,{type:Pt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Et({defines:Object.assign({},mr.defines),uniforms:cn.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:It,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new zs,this.normalMaterial.blending=It,this.pdMaterial=new Et({defines:Object.assign({},_r.defines),uniforms:cn.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Et({defines:Object.assign({},gr.defines),uniforms:cn.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,blending:It}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Et({uniforms:cn.clone(os.uniforms),vertexShader:os.vertexShader,fragmentShader:os.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:js,blendDst:_i,blendEquation:on,blendSrcAlpha:Zs,blendDstAlpha:_i,blendEquationAlpha:on}),this.blendMaterial=new Et({uniforms:cn.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Aa,blendSrc:js,blendDst:_i,blendEquation:on,blendSrcAlpha:Zs,blendDstAlpha:_i,blendEquationAlpha:on}),this._fsQuad=new ri(null),this._originalClearColor=new Be,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new _n;s.format=vn,s.type=Hn,this.normalRenderTarget=new yt(this.width,this.height,{minFilter:mt,magFilter:mt,type:Pt,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=$l(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=It,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=It,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=It,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=It,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=It,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Co,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Gn(s,e,e,Jt,Vt);return r.wrapS=Xt,r.wrapT=Xt,r.needsUpdate=!0,r}};xr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var vr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Io=class extends Qt{constructor(){super(),this.isOutputPass=!0,this.uniforms=cn.clone(vr.uniforms),this.material=new Xi({name:vr.name,uniforms:this.uniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader}),this._fsQuad=new ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===Ke&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ys?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Js?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===er?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ks&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var eu="data:image/jpeg;base64,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";function a0(i){let e=new Jn,t=new Jn,n=new zt(34,1,.08,65),s=new bo,r=document.querySelector(".station"),a=document.querySelector("#terminal-wrap"),o=document.querySelector("#keyboard"),c=document.querySelector("#mouse");document.body.classList.add("spatial"),r.prepend(i.domElement,s.domElement),s.domElement.className="projected-controls",i.domElement.setAttribute("aria-label","Bureau en trois dimensions");let l=()=>r.getBoundingClientRect();i.setPixelRatio(Math.min(devicePixelRatio,1.65)),i.shadowMap.enabled=!0,i.shadowMap.type=gi,i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0,i.toneMapping=xi,i.toneMappingExposure=1.16,e.background=new Be(3753282),e.fog=new Es(5396301,.043);let u=new yt(1,1,{type:Pt,samples:Math.min(4,i.capabilities.maxSamples)}),d=new Ao(i,u);d.addPass(new wo(e,n));let p=new xr(e,n,512,512,void 0,{radius:.33,thickness:.65,samples:12});d.addPass(p),d.addPass(new Io);let f=new So,_=new ss(i);e.environment=_.fromScene(f,.04).texture,e.environmentIntensity=.32,f.dispose(),_.dispose();let S=new Xs(16771014,2.9);S.position.set(-5,7,3),S.castShadow=!0,Object.assign(S.shadow.camera,{left:-8,right:8,top:7,bottom:-7,far:26}),S.shadow.mapSize.set(2048,2048),S.shadow.normalBias=.013,e.add(S,new ks(15003647,5850933,.65));let m=(P,W=.65,re=0)=>new rn({color:P,roughness:W,metalness:re}),h=m(12760985),v=m(10919041),E=m(2566951),b=m(5792092,.3,.65),w=m(11092002,.37,.3),T=m(14782036),g=m(14272421);function M(P,W,re,pe,J,_e=e){let be=new ut(P,W);return be.position.set(re,pe,J),be.castShadow=be.receiveShadow=!0,_e.add(be),be}let D=new Map;function R(P,W,re,pe,J,_e,be,ae,De){let it=[P,W,re,pe].join("/");return D.has(it)||D.set(it,pe?new yo(P,W,re,2,pe):new nn(P,W,re)),M(D.get(it),J,_e,be,ae,De)}function U(P,W,re,pe,J,_e,be,ae){return M(new Ls(P,W,re,48),pe,J,_e,be,ae)}function F(P,W,re,pe=e){let J=new Fn;return J.position.set(P,W,re),pe.add(J),J}function k(P,W,re,pe=e){let J=new Wi(P.map(_e=>new L(..._e)));return M(new Bs(J,32,W,8,!1),re,0,0,0,pe)}function I(P,W,re){let pe=document.createElement("canvas");pe.width=P,pe.height=W,re(pe.getContext("2d"));let J=new Ps(pe);return J.colorSpace=Bt,J}function q(P,W,re,pe,J,_e,be,ae,De=e){let it=I(640,100,kt=>{kt.fillStyle=be,kt.fillRect(0,0,640,100),kt.fillStyle=ae,kt.font="bold 62px monospace",kt.textBaseline="middle",kt.fillText(P,18,53,605)});return M(new An(W,re),new rn({map:it,roughness:.7}),pe,J,_e,De)}let $=new Hs().load(eu,()=>oe());$.colorSpace=Bt,$.wrapS=$.wrapT=Xt,$.center.set(.5,.5),$.rotation=Math.PI/2,$.repeat.set(1.8,3),$.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let H=m(12364168,.58);H.map=$,H.bumpMap=$,H.bumpScale=.018,R(16,.25,7.8,.075,H,0,-.125,.35);let se=m(5333851),V=I(512,512,P=>{let W=P.createImageData(512,512),re=4169;for(let pe=0;pe<W.data.length;pe+=4){re=Math.imul(1664525,re)+1013904223>>>0;let J=220+(re>>>20)%32;W.data.set([J,J,J,255],pe)}P.putImageData(W,0,0)});V.wrapS=V.wrapT=Xt,V.repeat.set(6,3),se.map=V,se.bumpMap=V,se.bumpScale=.005,R(26,13,.18,0,se,0,4.5,-4.1);let te=I(512,512,P=>{P.translate(220,230),P.rotate(-.18);for(let re=-300;re<300;re+=43){let pe=P.createLinearGradient(0,re,0,re+29);pe.addColorStop(0,"#ffc88000"),pe.addColorStop(.25,"#ffd8a06a"),pe.addColorStop(.76,"#ffd8a063"),pe.addColorStop(1,"#ffc88000"),P.fillStyle=pe,P.fillRect(-240,re,475,30)}P.globalCompositeOperation="destination-in";let W=P.createRadialGradient(0,0,70,0,0,280);W.addColorStop(0,"white"),W.addColorStop(1,"transparent"),P.fillStyle=W,P.fillRect(-400,-400,800,800)});M(new An(12,7),new fi({map:te,transparent:!0,depthWrite:!1}),-2.3,3.1,-3.99).castShadow=!1;let ne=I(128,128,P=>{P.scale(1,1);let W=P.createRadialGradient(64,64,8,64,64,64);W.addColorStop(0,"rgba(30,19,11,.72)"),W.addColorStop(.65,"rgba(30,19,11,.45)"),W.addColorStop(1,"transparent"),P.fillStyle=W,P.fillRect(0,0,128,128)});function ve(P,W,re,pe){let J=M(new An(re,pe),new fi({map:ne,transparent:!0,depthWrite:!1}),P,.008,W);J.rotation.x=-Math.PI/2,J.castShadow=!1}ve(0,-.44,6,3.8),R(4.66,.52,2.45,.08,v,0,.3,-.48),R(4.6,.43,.1,.03,h,0,.3,.74),R(1.1,.21,.045,.025,E,1.24,.32,.804),R(.79,.034,.04,.01,m(1053714),1.19,.35,.838),R(.13,.048,.048,.012,v,1.61,.26,.838),q("NO\xCBL  /  PC",.9,.14,-1.61,.31,.802,"#c2b99e","#2b322d");let Ne=new rn({color:12314762,emissive:7779419,emissiveIntensity:.8});R(.045,.032,.02,.008,Ne,-.96,.29,.815),R(2.5,.14,1.65,.065,E,0,.61,-.52),R(4.12,2.85,1.88,.2,v,0,2.04,-.94),R(4.52,3.07,.75,.16,h,0,2.17,-.025),R(4.1,2.6,.15,.12,v,0,2.24,.33),R(3.97,2.46,.12,.09,E,0,2.24,.395),q("V I C T O R   /   N O \xCB L",1.03,.105,-1.38,.86,.355,"#cfc2a4","#414438");for(let P=0;P<15;P++)R(.022,.09,.015,.008,E,1.11+P*.045,.86,.355);R(.08,.08,.025,.018,Ne,1.91,.86,.356);for(let P=0;P<15;P++)R(.022,.18,.036,.008,E,2.057,2.95,-1.62+P*.078);function Q(P,W,re,pe,J,_e,be){let ae=new Mo(P);return ae.position.set(re,pe,J),ae.rotation.x=_e,ae.scale.setScalar(be),W.add(ae),ae}Q(a,t,0,2.24,.462,0,3.82/680);let fe=F(-.29,.115,1.91);fe.rotation.set(.075,-.035,0,"YXZ");let Se=-Math.PI/2;R(4.58,.185,1.57,.083,h,0,0,0,fe),R(4.32,.028,1.33,.032,E,0,.1,0,fe);let Te=F(0,0,0,t);Te.position.copy(fe.position),Te.rotation.copy(fe.rotation);let he=4.28/700;Q(o,Te,0,.229,0,Se,he);let Ie=[],Qe=m(14735294),Pe=m(11840145);o.querySelectorAll(".key").forEach(P=>{let W=P.offsetWidth*he,re=P.offsetHeight*he,pe=(P.offsetLeft+P.offsetWidth/2-o.offsetWidth/2)*he,J=(P.offsetTop+P.offsetHeight/2-o.offsetHeight/2)*he,_e=P.dataset.key==="Enter"?T:P.classList.contains("wide")?Pe:Qe,be=R(W,.13,re,.029,_e,pe,.166,J,fe);if(!be.geometry.userData.sculpted){let ae=be.geometry.attributes.position;for(let De=0;De<ae.count;De++){let it=ns.clamp(ae.getY(De)/.13+.5,0,1);ae.setX(De,ae.getX(De)*(1-.065*it)),ae.setZ(De,ae.getZ(De)*(1-.14*it))}be.geometry.computeVertexNormals(),be.geometry.userData.sculpted=!0}Ie.push([be,P])}),ve(-.29,1.92,5.55,2.05),R(1.69,.026,1.49,.065,m(3426114,.98),2.93,.02,1.81);let Ge=F(2.87,.055,1.85);Ge.rotation.y=-.14;let Xe=(P,W,re,pe,J,_e,be,ae)=>{let De=M(new Fs(1,40,24),pe,J,_e,be,ae);return De.scale.set(P,W,re),De};Xe(.307,.215,.486,h,0,.06,0,Ge);let Ve=Xe(.144,.095,.225,v,-.125,.165,-.17,Ge),dt=Xe(.144,.095,.225,v,.125,.165,-.17,Ge),ot=Xe(.038,.044,.098,E,0,.248,-.13,Ge),ft=Q(c,t,2.87,.32,1.85,Se,.0064);ft.rotation.order="YXZ",ft.rotation.y=-.14,k([[2.88,.14,1.45],[2.94,.054,1.1],[3.12,.025,.44],[3.43,.025,-.21],[2.94,.023,-1.1],[1.98,.22,-1.48]],.022,E),k([[-2.31,.12,1.3],[-2.7,.045,.96],[-2.86,.035,.43],[-2.07,.23,-.33]],.028,E);let Ye=I(256,256,P=>{let W=P.createImageData(256,256),re=1771;for(let pe=0;pe<W.data.length;pe+=4){re=Math.imul(1664525,re)+1013904223>>>0;let J=210+(re>>>20)%44;W.data.set([J,J,J,255],pe)}P.putImageData(W,0,0)});Ye.wrapS=Ye.wrapT=Xt,Ye.repeat.set(4,4);for(let P of[h,v,Pe,Qe])P.bumpMap=Ye,P.bumpScale=.0022,P.roughnessMap=Ye;for(let P=0;P<20;P++)R(.026,.115,.013,.006,E,-.67+P*.053,.32,.796);for(let P of[-2.16,2.16]){let W=U(.03,.03,.015,b,P,.28,.799);W.rotation.x=Math.PI/2,R(.033,.005,.004,0,E,P,.28,.809)}R(15.4,.29,.12,.015,H,0,-.34,3.72);for(let P of[-6.2,6.2])R(.24,3,.24,.012,E,P,-1.69,3.62);let gt=F(-3.63,0,-.43);U(.53,.58,.135,w,0,.09,0,gt);function lt(P,W,re,pe,J){let _e=new L(...P),be=new L(...W),ae=be.clone().sub(_e),De=U(re,re,ae.length(),pe,0,0,0,J);De.position.copy(_e.addScaledVector(ae,.5)),De.quaternion.setFromUnitVectors(new L(0,1,0),ae.normalize())}for(let P of[-.085,.085])lt([0,.16,P],[-.52,1.55,P],.047,b,gt),lt([-.52,1.55,P],[.3,2.65,P],.04,w,gt);for(let[P,W]of[[0,.2],[-.52,1.55],[.3,2.65]]){let re=U(.098,.098,.27,E,P,W,0,gt);re.rotation.x=Math.PI/2}let _t=F(.42,2.56,.025,gt);_t.rotation.z=.54;let Mt=m(11947053,.32,.38);Mt.side=an,M(new qi([[.07,.16],[.19,.11],[.28,-.02],[.43,-.3],[.46,-.32]].map(([P,W])=>new Me(P,W)),64),Mt,0,0,0,_t),U(.432,.425,.018,new rn({color:16769708,emissive:16760952,emissiveIntensity:1.3}),0,-.309,0,_t);let bt=new pi(16758121,12,6);bt.position.set(-3.03,2.02,-.35),e.add(bt),ve(-3.63,-.43,1.64,1.45);let O=F(-2.99,0,1.33),Tt=m(7114112,.24);M(new qi([[.01,.025],[.236,.025],[.27,.06],[.304,.55],[.302,.586],[.286,.59],[.278,.55],[.24,.12]].map(([P,W])=>new Me(P,W)),64),Tt,0,0,0,O),U(.28,.28,.015,m(2758414,.17),0,.518,0,O),k([[-.26,.47,0],[-.45,.48,0],[-.49,.32,0],[-.43,.19,0],[-.26,.19,0]],.044,Tt,O),ve(-3,1.33,.87,.78);let je=F(3.65,0,-.63);je.rotation.y=-.24,R(1.47,.12,1.96,.023,g,0,.083,0,je);let nt=m(3887433,.91);for(let P of[.02,.152])R(1.52,.025,2.01,.021,nt,0,P,0,je);R(.045,.01,2.01,.002,E,.57,.17,0,je);let ue=F(-.16,.217,.02,je);ue.rotation.set(Math.PI/2,.05,.2,"ZXY"),U(.029,.029,1.48,T,0,0,0,ue),U(.029,0,.09,g,0,-.785,0,ue);let et=F(-3.03,.05,2.38);et.rotation.y=-.27,R(.68,.057,.7,.027,E,0,0,0,et),R(.43,.013,.2,.009,b,.025,.033,-.239,et),R(.083,.014,.13,.004,E,.142,.04,-.253,et);let Ce=I(480,300,P=>{P.fillStyle="#e2d7b2",P.fillRect(0,0,480,300),P.fillStyle="#9e4a2c",P.fillRect(0,0,480,58),P.fillStyle="#403b30",P.font="italic 49px Georgia",P.fillText("CV  /  Victor",22,142);for(let W=162;W<295;W+=52)P.fillRect(16,W,444,2)}),Ue=M(new An(.53,.31),new rn({map:Ce}),0,.035,.104,et);Ue.rotation.x=Se,R(5.2,.13,.77,.024,H,4.7,3.75,-3.53);let A=[8742214,10784876,3754822,9922377,11313802,4215116];for(let P=0;P<12;P++){let W=.75+P%4*.09;R(.18+P%2*.035,W,.53,.018,m(A[P%6]),2.48+P*.225,3.82+W/2,-3.52)}let x=.32,B=.34,ie=null,K=!1,le=!1,ce=document.querySelector(".view-controls");ce.hidden=!1;let Z=ce.querySelector("button"),Y=()=>innerWidth<650&&innerHeight>innerWidth;function oe(){le||(le=!0,requestAnimationFrame(C))}function C(){le=!1;let{width:P,height:W}=l();n.aspect=P/W,n.updateProjectionMatrix();let re=Y(),pe=new L(0,K?2.24:1.34,K?.46:.42),J=Math.tan(ns.degToRad(n.fov/2)),_e=K?Math.max(1.4/J,2.1/(J*n.aspect)):Math.max(9.35,(re?2.98:4.55)/(J*n.aspect)),be=K?.022:x,ae=K?.055:B;n.position.copy(pe).add(new L(Math.sin(be)*Math.cos(ae),Math.sin(ae),Math.cos(be)*Math.cos(ae)).multiplyScalar(_e)),n.lookAt(pe),n.updateMatrixWorld(),Ie.forEach(([De,it])=>{De.position.y=it.matches(".on,.pressed")?.129:.166}),Ve.position.y=c.querySelector(".left.on")?.143:.165,dt.position.y=c.querySelector(".right.on")?.143:.165,ot.material=c.querySelector(".wheel.on")?T:E,ft.position.x=Ge.position.x,ft.position.z=Ge.position.z,d.render(),s.render(t,n)}function ee(){let{width:P,height:W}=l();i.setSize(P,W),d.setSize(P,W),s.setSize(P,W),oe()}function j(P){K=P,document.body.classList.toggle("reading",P),Z.textContent=P?"Vue du bureau":"Lire le terminal",Z.setAttribute("aria-pressed",String(P)),oe()}Z.onclick=()=>j(!K),ce.lastElementChild.onclick=()=>{x=.32,B=.34,j(!1)};let de=i.domElement;de.addEventListener("pointerdown",P=>{K||P.button!==0||(ie={x:P.clientX,y:P.clientY,yaw:x,pitch:B},de.setPointerCapture(P.pointerId))}),de.addEventListener("pointermove",P=>{ie&&(x=ns.clamp(ie.yaw-(P.clientX-ie.x)*.003,-.62,.62),B=ns.clamp(ie.pitch+(P.clientY-ie.y)*.002,.15,.6),oe())}),de.addEventListener("lostpointercapture",()=>{ie=null}),document.addEventListener("pointermove",P=>{Ge.position.x=2.87+(P.clientX/innerWidth-.5)*.11,Ge.position.z=1.85+(P.clientY/innerHeight-.5)*.08,oe()}),new MutationObserver(oe).observe(o,{attributes:!0,attributeFilter:["class"],subtree:!0}),new MutationObserver(oe).observe(c,{attributes:!0,attributeFilter:["class"],subtree:!0}),new ResizeObserver(ee).observe(r),ee(),C(),matchMedia("(pointer:fine)").matches&&document.querySelector("#commandInput").focus({preventScroll:!0})}try{let i=new _o({antialias:!0,alpha:!1,powerPreference:"low-power"});a0(i)}catch(i){console.warn("Rendu 3D indisponible.",i)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
