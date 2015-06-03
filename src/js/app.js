/**
 * Welcome to Pebble.js!
 * Bitcoin market - MOTWIN 2015
 * Using Streamdata.io
 */


 /* INCLUDE JSON patch */
 var __extends=this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);c.prototype=b.prototype,a.prototype=new c},OriginalError=Error,jsonpatch;!function(a){function b(a,c){switch(typeof a){case"undefined":case"boolean":case"string":case"number":return a===c;case"object":if(null===a)return null===c;if(C(a)){if(!C(c)||a.length!==c.length)return!1;for(var d=0,e=a.length;e>d;d++)if(!b(a[d],c[d]))return!1;return!0}var f=u(c),g=f.length;if(u(a).length!==g)return!1;for(var d=0;g>d;d++)if(!b(a[d],c[d]))return!1;return!0;default:return!1}}function c(a){return-1===a.indexOf("/")&&-1===a.indexOf("~")?a:a.replace(/~/g,"~0").replace(/\//g,"~1")}function d(a,b){var e;for(var f in a)if(a.hasOwnProperty(f)){if(a[f]===b)return c(f)+"/";if("object"==typeof a[f]&&(e=d(a[f],b),""!=e))return c(f)+"/"+e}return""}function e(a,b){if(a===b)return"/";var c=d(a,b);if(""===c)throw new OriginalError("Object not found in root");return"/"+c}function f(a){for(var b=0,c=z.length;c>b;b++)if(z[b].obj===a)return z[b]}function g(a,b){for(var c=0,d=a.observers.length;d>c;c++)if(a.observers[c].callback===b)return a.observers[c].observer}function h(a,b){for(var c=0,d=a.observers.length;d>c;c++)if(a.observers[c].observer===b)return void a.observers.splice(c,1)}function i(a,b){n(b),Object.observe?m(b,a):clearTimeout(b.next);var c=f(a);h(c,b)}function j(a){return"object"==typeof a?JSON.parse(JSON.stringify(a)):a}function k(a,b){var c,d=[],h=a,i=f(a);if(i?c=g(i,b):(i=new A(a),z.push(i)),c)return c;if(Object.observe)c=function(f){m(c,a),l(c,a);for(var g=0,i=f.length;i>g;){if(("length"!==f[g].name||!C(f[g].object))&&"__Jasmine_been_here_before__"!==f[g].name){var j=f[g].type;switch(j){case"new":j="add";break;case"deleted":j="delete";break;case"updated":j="update"}y[j].call(f[g],d,e(h,f[g].object))}g++}d&&b&&b(d),c.patches=d,d=[]};else if(c={},i.value=j(a),b){c.callback=b,c.next=null;var k=this.intervals||[100,1e3,1e4,6e4];if(void 0===k.push)throw new OriginalError("jsonpatch.intervals must be an array");var o=0,p=function(){n(c)},q=function(){clearTimeout(c.next),c.next=setTimeout(function(){p(),o=0,c.next=setTimeout(r,k[o++])},0)},r=function(){p(),o==k.length&&(o=k.length-1),c.next=setTimeout(r,k[o++])};"undefined"!=typeof window&&(window.addEventListener?(window.addEventListener("mousedown",q),window.addEventListener("mouseup",q),window.addEventListener("keydown",q)):(document.documentElement.attachEvent("onmousedown",q),document.documentElement.attachEvent("onmouseup",q),document.documentElement.attachEvent("onkeydown",q))),c.next=setTimeout(r,k[o++])}return c.patches=d,c.object=a,i.observers.push(new B(b,c)),l(c,a)}function l(a,b){if(Object.observe){Object.observe(b,a);for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];d&&"object"==typeof d&&l(a,d)}}return a}function m(a,b){if(Object.observe){Object.unobserve(b,a);for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];d&&"object"==typeof d&&m(a,d)}}return a}function n(a){if(Object.observe)Object.deliverChangeRecords(a);else{for(var b,c=0,d=z.length;d>c;c++)if(z[c].obj===a.object){b=z[c];break}o(b.value,a.object,a.patches,""),a.patches.length&&q(b.value,a.patches)}var e=a.patches;return e.length>0&&(a.patches=[],a.callback&&a.callback(e)),e}function o(a,b,d,e){for(var f=u(b),g=u(a),h=!1,i=!1,k=g.length-1;k>=0;k--){var l=g[k],m=a[l];if(b.hasOwnProperty(l)){var n=b[l];"object"==typeof m&&null!=m&&"object"==typeof n&&null!=n?o(m,n,d,e+"/"+c(l)):m!=n&&(h=!0,d.push({op:"replace",path:e+"/"+c(l),value:j(n)}))}else d.push({op:"remove",path:e+"/"+c(l)}),i=!0}if(i||f.length!=g.length)for(var k=0;k<f.length;k++){var l=f[k];a.hasOwnProperty(l)||d.push({op:"add",path:e+"/"+c(l),value:j(b[l])})}}function p(a){for(var b,c=0,d=a.length;d>c;){b=a.charCodeAt(c);{if(!(b>=48&&57>=b))return!1;c++}}return!0}function q(a,b,c){for(var d,e,f=!1,g=0,h=b.length;h>g;){d=b[g],g++;for(var i=d.path.split("/"),j=a,k=1,l=i.length,m=void 0;;){if(e=i[k],c&&void 0==m&&(void 0==j[e]?m=i.slice(0,k).join("/"):k==l-1&&(m=d.path),void 0!=m&&this.validator(d,g-1,a,m)),k++,void 0===e&&k>=l){f=x[d.op].call(d,j,e,a);break}if(C(j)){if("-"===e)e=j.length;else{if(c&&!p(e))throw new D("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",g-1,d.path,d);e=parseInt(e,10)}if(k>=l){if(c&&"add"===d.op&&e>j.length)throw new D("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",g-1,d.path,d);f=w[d.op].call(d,j,e,a);break}}else if(e&&-1!=e.indexOf("~")&&(e=e.replace(/~1/g,"/").replace(/~0/g,"~")),k>=l){f=v[d.op].call(d,j,e,a);break}j=j[e]}}return f}function r(a,b){var c=[];return o(a,b,c,""),c}function s(b,c,d,e){if("object"!=typeof b||null===b||C(b))throw new D("Operation is not an object","OPERATION_NOT_AN_OBJECT",c,b,d);if(!v[b.op])throw new D("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",c,b,d);if("string"!=typeof b.path)throw new D("Operation `path` property is not a string","OPERATION_PATH_INVALID",c,b,d);if(("move"===b.op||"copy"===b.op)&&"string"!=typeof b.from)throw new D("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",c,b,d);if(("add"===b.op||"replace"===b.op||"test"===b.op)&&void 0===b.value)throw new D("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",c,b,d);if(d)if("add"==b.op){var f=b.path.split("/").length,g=e.split("/").length;if(f!==g+1&&f!==g)throw new D("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",c,b,d)}else if("replace"===b.op||"remove"===b.op||"_get"===b.op){if(b.path!==e)throw new D("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",c,b,d)}else if("move"===b.op||"copy"===b.op){var h={op:"_get",path:b.from,value:void 0},i=a.validate([h],d);if(i&&"OPERATION_PATH_UNRESOLVABLE"===i.name)throw new D("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",c,b,d)}}function t(a,b){try{if(!C(a))throw new D("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(b)b=JSON.parse(JSON.stringify(b)),q.call(this,b,a,!0);else for(var c=0;c<a.length;c++)this.validator(a[c],c)}catch(d){if(d instanceof D)return d;throw d}}if(!a.observe){var u=function(){return Object.keys?Object.keys:function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}}(),v={add:function(a,b){return a[b]=this.value,!0},remove:function(a,b){return delete a[b],!0},replace:function(a,b){return a[b]=this.value,!0},move:function(a,b,c){var d={op:"_get",path:this.from};return q(c,[d]),q(c,[{op:"remove",path:this.from}]),q(c,[{op:"add",path:this.path,value:d.value}]),!0},copy:function(a,b,c){var d={op:"_get",path:this.from};return q(c,[d]),q(c,[{op:"add",path:this.path,value:d.value}]),!0},test:function(a,c){return b(a[c],this.value)},_get:function(a,b){this.value=a[b]}},w={add:function(a,b){return a.splice(b,0,this.value),!0},remove:function(a,b){return a.splice(b,1),!0},replace:function(a,b){return a[b]=this.value,!0},move:v.move,copy:v.copy,test:v.test,_get:v._get},x={add:function(a){x.remove.call(this,a);for(var b in this.value)this.value.hasOwnProperty(b)&&(a[b]=this.value[b]);return!0},remove:function(a){for(var b in a)a.hasOwnProperty(b)&&v.remove.call(this,a,b);return!0},replace:function(a){return q(a,[{op:"remove",path:this.path}]),q(a,[{op:"add",path:this.path,value:this.value}]),!0},move:v.move,copy:v.copy,test:function(a){return JSON.stringify(a)===JSON.stringify(this.value)},_get:function(a){this.value=a}},y={add:function(a,b){var d={op:"add",path:b+c(this.name),value:this.object[this.name]};a.push(d)},"delete":function(a,b){var d={op:"remove",path:b+c(this.name)};a.push(d)},update:function(a,b){var d={op:"replace",path:b+c(this.name),value:this.object[this.name]};a.push(d)}},z=[];a.intervals;var A=function(){function a(a){this.observers=[],this.obj=a}return a}(),B=function(){function a(a,b){this.callback=a,this.observer=b}return a}();a.unobserve=i,a.observe=k,a.generate=n;var C;C=Array.isArray?Array.isArray:function(a){return a.push&&"number"==typeof a.length},a.apply=q,a.compare=r;var D=function(a){function b(b,c,d,e,f){a.call(this,b),this.message=b,this.name=c,this.index=d,this.operation=e,this.tree=f}return __extends(b,a),b}(OriginalError);a.JsonPatchError=D,a.Error=D,a.validator=s,a.validate=t}}(jsonpatch||(jsonpatch={})),"undefined"!=typeof exports&&(exports.apply=jsonpatch.apply,exports.observe=jsonpatch.observe,exports.unobserve=jsonpatch.unobserve,exports.generate=jsonpatch.generate,exports.compare=jsonpatch.compare,exports.validate=jsonpatch.validate,exports.validator=jsonpatch.validator,exports.JsonPatchError=jsonpatch.JsonPatchError,exports.Error=jsonpatch.Error);
/* END include jsonpatch
/**********************************************************************************************/
/* INCLUDE STEAMDATA.IO */
var CryptoJS=CryptoJS||function(a,d){var b={},e=b.lib={},c=e.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;b&&c.mixIn(b);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},
clone:function(){return this.init.prototype.extend(this)}}}(),k=e.WordArray=c.extend({init:function(a,b){a=this.h=a||[];b!=d?this.f=b:this.f=4*a.length},toString:function(a){return(a||g).stringify(this)},concat:function(a){var b=this.h,c=a.h,d=this.f;a=a.f;this.clamp();if(d%4)for(var e=0;e<a;e++)b[d+e>>>2]|=(c[e>>>2]>>>24-e%4*8&255)<<24-(d+e)%4*8;else if(65535<c.length)for(e=0;e<a;e+=4)b[d+e>>>2]=c[e>>>2];else b.push.apply(b,c);this.f+=a;return this},clamp:function(){var b=this.h,c=this.f;b[c>>>2]&=
    4294967295<<32-c%4*8;b.length=a.ceil(c/4)},clone:function(){var a=c.clone.call(this);a.h=this.h.slice(0);return a},random:function(b){for(var c=[],e=0;e<b;e+=4)c.push(4294967296*a.random()|0);return new k.init(c,b)}}),f=b.enc={},g=f.Hex={stringify:function(a){var b=a.h;a=a.f;for(var c=[],e=0;e<a;e++){var d=b[e>>>2]>>>24-e%4*8&255;c.push((d>>>4).toString(16));c.push((d&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],e=0;e<b;e+=2)c[e>>>3]|=parseInt(a.substr(e,2),16)<<
    24-e%8*4;return new k.init(c,b/2)}},t=f.Latin1={stringify:function(a){var b=a.h;a=a.f;for(var c=[],e=0;e<a;e++)c.push(String.fromCharCode(b[e>>>2]>>>24-e%4*8&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],e=0;e<b;e++)c[e>>>2]|=(a.charCodeAt(e)&255)<<24-e%4*8;return new k.init(c,b)}},B=f.Utf8={stringify:function(a){try{return decodeURIComponent(escape(t.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return t.parse(unescape(encodeURIComponent(a)))}},
    R=e.BufferedBlockAlgorithm=c.extend({reset:function(){this.j=new k.init;this.F=0},_append:function(a){"string"==typeof a&&(a=B.parse(a));this.j.concat(a);this.F+=a.f},_process:function(b){var c=this.j,e=c.h,d=c.f,f=this.blockSize,g=d/(4*f),g=b?a.ceil(g):a.max((g|0)-this._minBufferSize,0);b=g*f;d=a.min(4*b,d);if(b){for(var E=0;E<b;E+=f)this._doProcessBlock(e,E);E=e.splice(0,b);c.f-=d}return new k.init(E,d)},clone:function(){var a=c.clone.call(this);a.j=this.j.clone();return a},_minBufferSize:0});e.Hasher=
    R.extend({cfg:c.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){R.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new ja.HMAC.init(a,c)).finalize(b)}}});var ja=b.algo={};return b}(Math);
    (function(a){var d=CryptoJS.lib,b=d.Base,e=d.WordArray,d=CryptoJS.x64={};d.Word=b.extend({init:function(a,b){this.b=a;this.c=b}});d.WordArray=b.extend({init:function(b,e){b=this.h=b||[];e!=a?this.f=e:this.f=8*b.length},toX32:function(){for(var a=this.h,b=a.length,d=[],g=0;g<b;g++){var t=a[g];d.push(t.b);d.push(t.c)}return e.create(d,this.f)},clone:function(){for(var a=b.clone.call(this),e=a.h=this.h.slice(0),d=e.length,g=0;g<d;g++)e[g]=e[g].clone();return a}})})();
    (function(){var a=CryptoJS.enc.Utf8;CryptoJS.algo.HMAC=CryptoJS.lib.Base.extend({init:function(d,b){d=this.C=new d.init;"string"==typeof b&&(b=a.parse(b));var e=d.blockSize,c=4*e;b.f>c&&(b=d.finalize(b));b.clamp();for(var k=this.ea=b.clone(),f=this.da=b.clone(),g=k.h,t=f.h,B=0;B<e;B++)g[B]^=1549556828,t[B]^=909522486;k.f=f.f=c;this.reset()},reset:function(){var a=this.C;a.reset();a.update(this.da)},update:function(a){this.C.update(a);return this},finalize:function(a){var b=this.C;a=b.finalize(a);
        b.reset();return b.finalize(this.ea.clone().concat(a))}})})();
        (function(){function a(){return e.create.apply(e,arguments)}var d=CryptoJS.lib.Hasher,b=CryptoJS.x64,e=b.Word,c=b.WordArray,b=CryptoJS.algo,k=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,
            633803317),a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),
        a(1396182291,2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,
            3602036899),a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
            3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],f=[];(function(){for(var b=0;80>b;b++)f[b]=a()})();b=b.SHA512=d.extend({_doReset:function(){this.u=new c.init([new e.init(1779033703,4089235720),new e.init(3144134277,2227873595),new e.init(1013904242,4271175723),new e.init(2773480762,1595750129),new e.init(1359893119,2917565137),new e.init(2600822924,725511199),new e.init(528734635,4215389547),new e.init(1541459225,327033209)])},_doProcessBlock:function(a,b){for(var c=
                this.u.h,e=c[0],d=c[1],S=c[2],N=c[3],Y=c[4],ba=c[5],ia=c[6],c=c[7],ea=e.b,E=e.c,x=d.b,ka=d.c,na=S.b,Z=S.c,oa=N.b,K=N.c,T=Y.b,U=Y.c,C=ba.b,F=ba.c,V=ia.b,n=ia.c,w=c.b,O=c.c,z=ea,p=E,L=x,M=ka,H=na,G=Z,y=oa,D=K,u=T,I=U,ca=C,fa=F,la=V,ga=n,A=w,ha=O,q=0;80>q;q++){var W=f[q];if(16>q)var J=W.b=a[b+2*q]|0,l=W.c=a[b+2*q+1]|0;else{var J=f[q-15],l=J.b,P=J.c,J=(l>>>1|P<<31)^(l>>>8|P<<24)^l>>>7,P=(P>>>1|l<<31)^(P>>>8|l<<24)^(P>>>7|l<<25),aa=f[q-2],l=aa.b,r=aa.c,aa=(l>>>19|r<<13)^(l<<3|r>>>29)^l>>>6,r=(r>>>19|l<<
                    13)^(r<<3|l>>>29)^(r>>>6|l<<26),l=f[q-7],ma=l.b,X=f[q-16],Q=X.b,X=X.c,l=P+l.c,J=J+ma+(l>>>0<P>>>0?1:0),l=l+r,J=J+aa+(l>>>0<r>>>0?1:0),l=l+X,J=J+Q+(l>>>0<X>>>0?1:0);W.b=J;W.c=l}var ma=u&ca^~u&la,X=I&fa^~I&ga,W=z&L^z&H^L&H,qa=p&M^p&G^M&G,P=(z>>>28|p<<4)^(z<<30|p>>>2)^(z<<25|p>>>7),aa=(p>>>28|z<<4)^(p<<30|z>>>2)^(p<<25|z>>>7),r=k[q],ra=r.b,pa=r.c,r=ha+((I>>>14|u<<18)^(I>>>18|u<<14)^(I<<23|u>>>9)),Q=A+((u>>>14|I<<18)^(u>>>18|I<<14)^(u<<23|I>>>9))+(r>>>0<ha>>>0?1:0),r=r+X,Q=Q+ma+(r>>>0<X>>>0?1:0),r=r+
                pa,Q=Q+ra+(r>>>0<pa>>>0?1:0),r=r+l,Q=Q+J+(r>>>0<l>>>0?1:0),l=aa+qa,W=P+W+(l>>>0<aa>>>0?1:0),A=la,ha=ga,la=ca,ga=fa,ca=u,fa=I,I=D+r|0,u=y+Q+(I>>>0<D>>>0?1:0)|0,y=H,D=G,H=L,G=M,L=z,M=p,p=r+l|0,z=Q+W+(p>>>0<r>>>0?1:0)|0}E=e.c=E+p;e.b=ea+z+(E>>>0<p>>>0?1:0);ka=d.c=ka+M;d.b=x+L+(ka>>>0<M>>>0?1:0);Z=S.c=Z+G;S.b=na+H+(Z>>>0<G>>>0?1:0);K=N.c=K+D;N.b=oa+y+(K>>>0<D>>>0?1:0);U=Y.c=U+I;Y.b=T+u+(U>>>0<I>>>0?1:0);F=ba.c=F+fa;ba.b=C+ca+(F>>>0<fa>>>0?1:0);n=ia.c=n+ga;ia.b=V+la+(n>>>0<ga>>>0?1:0);O=c.c=O+ha;c.b=w+
                A+(O>>>0<ha>>>0?1:0)},_doFinalize:function(){var a=this.j,b=a.h,c=8*this.F,e=8*a.f;b[e>>>5]|=128<<24-e%32;b[(e+128>>>10<<5)+30]=Math.floor(c/4294967296);b[(e+128>>>10<<5)+31]=c;a.f=4*b.length;this._process();return this.u.toX32()},clone:function(){var a=d.clone.call(this);a.u=this.u.clone();return a},blockSize:32});CryptoJS.SHA512=d._createHelper(b);CryptoJS.HmacSHA512=d._createHmacHelper(b)})();
                (function(){var a=CryptoJS.lib.WordArray;CryptoJS.enc.Base64={stringify:function(a){var b=a.h,e=a.f,c=this._map;a.clamp();a=[];for(var k=0;k<e;k+=3)for(var f=(b[k>>>2]>>>24-k%4*8&255)<<16|(b[k+1>>>2]>>>24-(k+1)%4*8&255)<<8|b[k+2>>>2]>>>24-(k+2)%4*8&255,g=0;4>g&&k+.75*g<e;g++)a.push(c.charAt(f>>>6*(3-g)&63));if(b=c.charAt(64))for(;a.length%4;)a.push(b);return a.join("")},parse:function(d){var b=d.length,e=this._map,c=e.charAt(64);c&&(c=d.indexOf(c),-1!=c&&(b=c));for(var c=[],k=0,f=0;f<b;f++)f%4&&(c[k>>>
                    2]|=(e.indexOf(d.charAt(f-1))<<f%4*2|e.indexOf(d.charAt(f))>>>6-f%4*2)<<24-k%4*8,k++);return a.create(c,k)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
                    (function(a){function d(){this.data={}}function b(){this.L=new d}function e(a){setTimeout(function(){throw a;},0)}function c(a){this.type=a;this.target=void 0}function k(a,b){c.call(this,a);this.data=b.data;this.lastEventId=b.lastEventId}function f(a,b){var c=a;c!==c&&(c=b);return 1E3>c?1E3:18E6<c?18E6:c}function g(a,b,c){try{"function"===typeof b&&b.call(a,c)}catch(d){e(d)}}function t(b,e){function E(){p=2;void 0!==n&&(n.abort(),n=void 0);0!==w&&(clearTimeout(w),w=0);0!==O&&(clearTimeout(O),O=0);
                        C.readyState=2}function x(a){var e=1===p||0===p?n.responseText:"",d=void 0,t=!1;if(0===p){var d=0,x="",A=void 0;if(N)try{d=n.status,x=n.statusText,A=n.getResponseHeader("Content-Type")}catch(B){d=0,x="",A=void 0}else""!==a&&"error"!==a&&(d=200,x="OK",A=n.contentType);if(void 0===A||null===A)A="";if(0===d&&""===x&&"load"===a&&""!==e&&(d=200,x="OK",""===A)){var q=/^data\:([^,]*?)(?:;base64)?,[\S]*$/.exec(b);void 0!==q&&null!==q&&(A=q[1])}if(200===d&&ba.test(A)){if(p=1,V=!0,F=K,C.readyState=1,d=new c("open"),
                            C.dispatchEvent(d),g(C,C.onopen,d),2===p)return}else if(0!==d){var ea="",ea=200!==d?"EventSource's response has a status "+d+" "+x.replace(/\s+/g," ")+" that is not 200. Aborting the connection.":"EventSource's response has a Content-Type specifying an unsupported type: "+A.replace(/\s+/g," ")+". Aborting the connection.";setTimeout(function(){throw Error(ea);},0);t=!0}}if(1===p){e.length>z&&(V=!0);x=z-1;A=e.length;for(q="\n";++x<A;)if(q=e.charAt(x),3===y&&"\n"===q)y=4;else if(3===y&&(y=4),"\r"===
                            q||"\n"===q){"data"===D?L.push(u):"id"===D?M=u:"event"===D?H=u:"retry"===D?F=K=f(Number(u),K):"heartbeatTimeout"===D&&(T=f(Number(u),T),0!==w&&(clearTimeout(w),w=setTimeout(G,T)));D=u="";if(4===y){if(0!==L.length&&(U=M,""===H&&(H="message"),d=new k(H,{data:L.join("\n"),lastEventId:M}),C.dispatchEvent(d),"message"===H&&g(C,C.onmessage,d),2===p))return;L.length=0;H=""}y="\r"===q?3:4}else 4===y&&(y=5),5===y?":"===q?y=6:D+=q:6===y?(" "!==q&&(u+=q),y=7):7===y&&(u+=q);z=A}1!==p&&0!==p||!("load"===a||"error"===
                            a||t||1048576<z||0===w&&!V)?0===w&&(V=!1,w=setTimeout(G,T)):(t?E():(p=-1,n.abort(),0!==w&&(clearTimeout(w),w=0),F>16*K&&(F=16*K),18E6<F&&(F=18E6),w=setTimeout(G,F),F=2*F+1,C.readyState=0),d=new c("error"),C.dispatchEvent(d),g(C,C.onerror,d))}function t(){x("progress")}function B(){x("load")}function Z(){x("error")}b=b.toString();var R=S&&void 0!==e&&Boolean(e.withCredentials),K=f(1E3,0),T=f(45E3,0),U="",C=this,F=K,V=!1,n=new Y,w=0,O=0,z=0,p=-1,L=[],M="",H="",G=void 0,y=4,D="",u="";N&&(O=setTimeout(function ca(){3===
                                n.readyState&&x("progress");O=setTimeout(ca,500)},0));G=function(){w=0;if(-1!==p)x("");else if(!N||void 0===n.wa&&void 0!==n.onloadend||void 0===a.document||void 0===a.document.readyState||"complete"===a.document.readyState){n.onload=B;n.onerror=Z;N&&(n.onabort=Z,n.onreadystatechange=t);n.onprogress=t;V=!1;w=setTimeout(G,T);p=z=0;L.length=0;H="";M=U;D=u="";y=4;var c=b.slice(0,5),c="data:"!==c&&"blob:"!==c?b+((-1===b.indexOf("?",0)?"?":"&")+"lastEventId="+encodeURIComponent(U)+"&r="+(Math.random()+
                                1).toString().slice(2)):b;n.open("GET",c,!0);N&&(n.withCredentials=R,n.responseType="text",n.setRequestHeader("Accept","text/event-stream"));n.send(void 0)}else w=setTimeout(G,4)};this.L=new d;this.close=E;this.url=b;this.readyState=0;this.withCredentials=R;this.onerror=this.onmessage=this.onopen=void 0;G()}function B(){this.CONNECTING=0;this.OPEN=1;this.CLOSED=2}d.prototype={get:function(a){return this.data[a+"~"]},set:function(a,b){this.data[a+"~"]=b},"delete":function(a){delete this.data[a+"~"]}};
                                b.prototype={dispatchEvent:function(a){a.target=this;var b=this.L.get(a.type.toString());if(void 0!==b)for(var c=b.length,d=-1,f=void 0;++d<c;){f=b[d];try{f.call(this,a)}catch(k){e(k)}}},addEventListener:function(a,b){a=a.toString();var c=this.L,e=c.get(a);void 0===e&&(e=[],c.set(a,e));for(c=e.length;0<=--c;)if(e[c]===b)return;e.push(b)}};k.prototype=c.prototype;var R=a.XMLHttpRequest,ja=a.XDomainRequest,S=void 0!==R&&void 0!==(new R).withCredentials,N=S,Y=S?R:void 0!==ja?ja:void 0,ba=/^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
                                B.prototype=b.prototype;t.prototype=new B;B.call(t);void 0===Y||function(){if(void 0!==a.EventSource)try{var b=new a.EventSource("data:text/event-stream;charset=utf-8,");b.close();return!1===b.withCredentials&&""!==b.url}catch(c){e(c)}return!1}()||(a.va=a.EventSource,a.EventSource=t)})(this);var h={o:function(a,d,b){d=d.split(".");for(var e=0;e<d.length-1;e++)a=a[d[e]];this.a(a,d[d.length-1],b)},a:function(a,d,b){a[d]=b}};var m=function(){function a(a,b){return a.replace(/{(\d+)}/g,function(a,e){var g;if(b[e]&&"object"===typeof b[e]&&b[e]instanceof Error)try{g=b[e].message,b[e].stack&&d.error(b[e].stack)}catch(t){g=b[e]}else if(b[e]&&"object"===typeof b[e])try{b[e].toString!==Object.prototype.toString?g=b[e].toString():g=JSON.stringify(b[e])}catch(B){g=b[e]}else b[e]&&"function"===typeof b[e]?g="function":g=b[e]?b[e]:a;g=""+g;return g.substring(0,Math.min(500,g.length))})}var d=window.console,b=2;return{R:3,S:2,T:1,
                                    ERROR:0,ua:function(a){b=a},debug:function(){3<=b&&d&&d.log&&d.log(a(arguments[0],Array.prototype.slice.call(arguments,1)))},info:function(){2<=b&&d&&d.info&&d.info(a(arguments[0],Array.prototype.slice.call(arguments,1)))},warn:function(){1<=b&&d&&d.warn&&d.warn(a(arguments[0],Array.prototype.slice.call(arguments,1)))},error:function(){0<=b&&d&&d.error&&d.error(a(arguments[0],Array.prototype.slice.call(arguments,1)))}}}();var SessionStorage;a:{try{SessionStorage=window.sessionStorage;break a}catch(da){}SessionStorage=void 0};var v=function(a){return{g:function(a,b){if("undefined"===typeof a||null===a){if(b)throw Error(b);throw Error("value cannot be null");}return a},J:function(d,b){this.g(d,"functionName cannot be null");this.g(b,"message cannot be null");a.warn("Deprecated: function '{0}' is deprecated because '{1}'.",d,b)},O:function(a,b){if(!a){if(b)throw Error(b);throw Error("expression is not valid");}},o:function(a,b){if(!a){if(b)throw Error(b);throw Error("expression is not valid");}}}}(m);function sa(a){v.g(a,"bind cannot be null");this.U=a;this.m=[]}sa.prototype={s:function(){for(var a=this.m.slice(),d=0,b=a.length;d<b;d++)try{var e=a[d];e&&e.apply(this.U,arguments)}catch(c){m.error("Unable to forward event: {0}",c)}},add:function(a){v.g(a,"listener cannot be null");v.O(-1==this.m.indexOf(a),"listener already exists");this.m.push(a)},remove:function(a){v.g(a,"listener cannot be null");a=this.m.indexOf(a);v.O(0<=a,"listener not exists");this.m.splice(a,1)}};function StreamdataEventSource(a,d){v.g(a,"url cannot be null.");d=d||[];var b=this;b.streamdataConfig={PROTOCOL:"https://",HOST:"streamdata.motwin.net",PORT:""};b.keyFile="/streamdataio.json";b.i=null;b.l=!1;b.I=a;b.G=new sa(b);b.w=new sa(b);b.H=new sa(b);b.A=new sa(b);b.D=new sa(b);b.v=!1;b.ca=d;b.M={type:"UnknownError",status:1E3,message:"An error occurs. Please check your console logs for more details.",source:"server"};b.open=function(){v.g(b.I,"url cannot be null");b.close();var a=b.Z(b.I,b.ca);
                                    a&&(b.i=new EventSource(a),b.i.addEventListener("open",function(a){m.debug("SSE Stream Opened to "+b.I+"event: "+JSON.stringify(a));b.l=!0;b.G.s()}),b.i.addEventListener("error",function(a){m.debug("Error with SSE at "+a+": closing the stream.");b.i.close();b.l=!1;b.A.s(b.W(a))}),b.i.addEventListener("data",function(a){m.debug("Received data:"+a.data);b.w.s(JSON.parse(a.data))}),b.i.addEventListener("patch",function(a){m.debug("Received patch:"+a.data);b.H.s(JSON.parse(a.data))}),b.i.addEventListener("monitor",
                                        function(a){m.debug("Received monitor:"+a.data);b.D.s(JSON.parse(a.data))}));return this};b.close=function(){b.l&&null!==b.i&&(m.info("Closing the SSE Stream."),b.i.close(),b.l=!1);return this};b.ga=function(){var a=null;b.v=!1;var c=b.ba();if(c)try{a=JSON.parse(c)}catch(d){}if(!a)try{var f=b.aa(b.keyFile);f&&(a=JSON.parse(f))}catch(g){}a||b.K(streamdataio.pk)||b.K(streamdataio.Pk)||(a={Pk:"",pk:""},a.pk=streamdataio.pk,a.Pk=streamdataio.Pk);return b.$(a)};b.$=function(a){var c=["","",""];if(a)try{var d=
                                        CryptoJS.enc.Base64.parse(a.pk),f=CryptoJS.enc.Utf8.stringify(d);72==f.length&&(b.v=!0,b.ha(JSON.stringify(a)),c=[f.substring(0,36),f.substring(36),a.Pk])}catch(g){b.fa()}return c};b.Z=function(a,c){v.g(a,"url cannot be null");c=c||[];var d=document.createElement("a");d.href=a;var f="",g=/\/\/(.*@)/g.exec(a),g=g?g=g[1]:"",g=d.protocol+"//"+g+d.host+d.pathname+d.search,t=b.Y(g,c);0<t.length&&(f=(-1===d.search.indexOf("?")?"?":"&")+t.join("&"));d=b.streamdataConfig.PROTOCOL+b.streamdataConfig.HOST+
                                        (b.K(b.streamdataConfig.PORT)?"":":")+b.streamdataConfig.PORT+"/"+g+f;m.debug("converted url :"+d);return d};b.Y=function(a,c){c=c||[];var d=b.X(c),f=b.V(a);return d.concat(f)};b.V=function(a){var c=[],d=b.ga();if(b.v){var f=""+Date.now();a=CryptoJS.HmacSHA512("GET\n"+f+"\n"+a+"\n",d[1]);a=CryptoJS.enc.Base64.stringify(a);a=CryptoJS.enc.Utf8.parse(d[0]+a);a=CryptoJS.enc.Base64.stringify(a);c.push("X-Auth-Sd-Pk="+encodeURIComponent(d[2]));c.push("X-Auth-Sd-Ts="+encodeURIComponent(f));c.push("X-Auth-Sd-S="+
                                          encodeURIComponent(a))}return c};b.X=function(a){a=a||[];return a.map(function(a){return"X-Sd-Header="+encodeURIComponent(a)})};b.ba=function(){return SessionStorage&&streamdataio.sessionStore?SessionStorage.getItem(b.B()):null};b.ha=function(a){SessionStorage&&streamdataio.sessionStore&&SessionStorage.setItem(b.B(),a)};b.fa=function(){SessionStorage&&SessionStorage.removeItem(b.B())};b.aa=function(a){var b="",d=new XMLHttpRequest;d.open("GET",a,!1);d.send(null);200===d.status&&(b=d.responseText);
                                        return b};b.B=function(){return String.fromCharCode(95)+String.fromCharCode(80)+String.fromCharCode(107)};b.W=function(a){v.g(a,"event cannot be null");var c=b.M;try{var d=JSON.parse(a.data);c.type=d.cause;c.message=d.message;c.status=d.status}catch(f){c=b.M}c.source="server";console.log(JSON.stringify(c));return new StreamdataError(c.type,c.message,c.status,c.source,!0)};b.K=function(a){return!a||0===a.length}}
                                        StreamdataEventSource.prototype={sa:function(a){v.g(a,"listener cannot be null");this.G.add(a);return this},qa:function(a){v.g(a,"listener cannot be null");this.A.add(a);return this},pa:function(a){v.g(a,"listener cannot be null");this.w.add(a);return this},ta:function(a){v.g(a,"listener cannot be null");this.H.add(a);return this},ra:function(a){v.g(a,"listener cannot be null");this.D.add(a);return this},na:function(a){v.g(a,"listener cannot be null");this.G.remove(a);return this},la:function(a){v.g(a,
                                          "listener cannot be null");this.A.remove(a);return this},ka:function(a){v.g(a,"listener cannot be null");this.w.remove(a);return this},oa:function(a){v.g(a,"listener cannot be null");this.H.remove(a);return this},ma:function(a){v.g(a,"listener cannot be null");this.D.remove(a);return this},ja:function(){return this.l}};function StreamdataError(a,d,b,e,c){this.o=e;this.P=a;this.J=d;this.ia=c||!1;this.N=b;h.a(this,"source",this.o);h.a(this,"type",this.P);h.a(this,"message",this.J);h.a(this,"status",this.N)}StreamdataError.prototype={isFatal:function(){return this.ia},isServer:function(){return"server"==this.o},isClient:function(){return"client"==this.o},getMessage:function(){return this.J},getStatus:function(){return this.N},getType:function(){return this.P}};var streamdataio=new function(){this.sessionStore=!1};h.a(streamdataio,"Logger",m);h.a(m,"DEBUG",m.R);h.a(m,"INFO",m.S);h.a(m,"WARN",m.T);h.a(m,"ERROR",m.ERROR);h.a(m,"setLevel",m.ua);h.a(m,"debug",m.debug);h.a(m,"info",m.info);h.a(m,"warn",m.warn);h.a(m,"error",m.error);
                                        h.a(streamdataio,"createEventSource",function(a,d){v.g(a,"url cannot be null");d=d||[];0!=a.lastIndexOf("http://",0)&&0!=a.lastIndexOf("https://",0)&&(a="http://"+a,m.warn("url has no default protocol defined. Add http:// as a default protocol."));return new StreamdataEventSource(a,d)});h.a(StreamdataError.prototype,"isFatal",StreamdataError.prototype.isFatal);h.a(StreamdataError.prototype,"isServer",StreamdataError.prototype.isServer);h.a(StreamdataError.prototype,"isClient",StreamdataError.prototype.isClient);
                                        h.a(StreamdataError.prototype,"getMessage",StreamdataError.prototype.getMessage);h.a(StreamdataError.prototype,"getStatus",StreamdataError.prototype.getStatus);h.a(StreamdataError.prototype,"getType",StreamdataError.prototype.getType);h.a(StreamdataEventSource.prototype,"open",StreamdataEventSource.prototype.connect);h.a(StreamdataEventSource.prototype,"onOpen",StreamdataEventSource.prototype.sa);h.a(StreamdataEventSource.prototype,"onError",StreamdataEventSource.prototype.qa);
                                        h.a(StreamdataEventSource.prototype,"onData",StreamdataEventSource.prototype.pa);h.a(StreamdataEventSource.prototype,"onPatch",StreamdataEventSource.prototype.ta);h.a(StreamdataEventSource.prototype,"onMonitor",StreamdataEventSource.prototype.ra);h.a(StreamdataEventSource.prototype,"offOpen",StreamdataEventSource.prototype.na);h.a(StreamdataEventSource.prototype,"offError",StreamdataEventSource.prototype.la);h.a(StreamdataEventSource.prototype,"offData",StreamdataEventSource.prototype.ka);
                                        h.a(StreamdataEventSource.prototype,"offPatch",StreamdataEventSource.prototype.oa);h.a(StreamdataEventSource.prototype,"offMonitor",StreamdataEventSource.prototype.ma);h.a(StreamdataEventSource.prototype,"isConnected",StreamdataEventSource.prototype.ja);
                                        /* END INCLUDE STEAMDATA.IO */


                                        /**********************************************************************************************/
                                        /* Début de l'application */
                                        var UI = require('ui');
                                        var Vector2 = require('vector2');

// Import the Vibe object
var Vibe = require('ui/vibe');

 // API Json bitcoin
 var crrncy = "USD";
 var URL = "https://api.bitcoinaverage.com/ticker/all";
 var globalData;
 var lastSnapshot;

 // Views
 var mainView = new UI.Menu({
    sections: [{
        items: 
        [{ title: 'USD', subtitle: 'updating...', icon: 'ICON_USD'  }, 
        { title: 'EUR', subtitle: 'updating...', icon: 'ICON_EUR'  },
        { title: 'GBP', subtitle: 'updating...', icon: 'ICON_GBP'  }]
    },{title:'Using Streamdata.io'}]
});

 var currencyView = new UI.Card();
 var commercialView = new UI.Card();

 currencyView.style("small");
 currencyView.scrollable(false);

 commercialView.banner('ICON_STREAMDATA');
 commercialView.subtitle('API Streaming');
 commercialView.body('We cache and push data from APIs\nVisit streamdata.io');


/*
var text = new UI.Text({ position: new Vector2(0, 0), size: new Vector2(144, 168) });
text.text("Mon nouveau Body");

 commercialView.add(text);
 console.log("Mon body index : " + commercialView.index(text));
 */


 /* *********** State transition system *********** */

// HOME | CURRENCY | COMMERCIAL | UNKNOWN
var state = "UNKNOWN";

mainView.on('show', function() {
  console.log('STATE : '+ state +' --> HOME');
  state='HOME';
});

currencyView.on('show', function() {
  console.log('STATE : '+ state +' --> CURRENCY (' + crrncy + ')');
  state='CURRENCY';
});

commercialView.on('show', function() {
  console.log('STATE : '+ state +' --> COMMERCIAL');
  state='COMMERCIAL';
});

  mainView.show();

/* *********** Streamdata.io Javascript SDK *********** */

  // Streamdata authentication
  streamdataio.Pk = /* TODO : Paste your streamdata.io TOKEN here */;
  streamdataio.pk = /* TODO : (optionnal) Paste your streamdata.io PRIVATE KEY here */;

  // Visit http://streamdata.io/doc/#_security for further information about Streamdata.io authentication keys


  // Create the Event source from bitcoin API
  streamdata = streamdataio.createEventSource(URL);

  // Listening for pushs
  streamdata.open();

  /* *********** Streamdata.io flow openping *********** */
  streamdata.onOpen(function() {
    console.log(" ------- ONOPEN EVENT ------- ");
    Vibe.vibrate("short");
});
  
  /* *********** Initial snapshot receiving *********** */
  streamdata.onData(function(data) {
    console.log(" ------- ONDATA EVENT - Size : " + JSON.stringify(data).length + " ------- ");
    //Vibe.vibrate('short');
    globalData = data;
    lastSnapshot = data;
    updateMenu(globalData);
    updateCurrency(globalData);
});

  /* *********** Patch event receiving *********** */
  streamdata.onPatch(function(data) {
    console.log(" ------- ONPATCH EVENT - Size : " + JSON.stringify(data).length + " ------- ");
    console.log(state);
    // Keep last snapshot (needs to be cloned)
    lastSnapshot = JSON.parse( JSON.stringify(globalData));
    //Vibe.vibrate('short');
    // apply the json-patch to the current datas
    jsonpatch.apply(globalData, data);

    if(state=='HOME')
        updateMenu(globalData);

    if(state=='CURRENCY')
        updateCurrency(globalData);
});

  /* *********** Error event receiving *********** */
  streamdata.onError(function(error) {
    console.log(" ------- ONERROR EVENT ------- ");
    console.log('Receiving Error : ' + error.getMessage());
});

  /* *********** Display Detail per currency *********** */
  mainView.on('select', function(e) {
      crrncy = e.item.title;
      updateCurrency(globalData);
      currencyView.show();
  });

  /* *********** Currency Swapping *********** */
  currencyView.on('click', 'up', function(e) {
    console.log('Swapping to previous currency');
    
    crrncy == 'EUR' ? crrncy = 'USD' :
    crrncy == 'GBP' ? crrncy = 'EUR' :
    crrncy == 'USD' ? crrncy = 'GBP' : void 0;
    currencyView.hide();
    updateCurrency(globalData);
    currencyView.show();
});

  currencyView.on('click', 'down', function(e) {
    console.log('Swapping to next currency');
    crrncy == 'EUR' ? crrncy = 'GBP' :
    crrncy == 'USD' ? crrncy = 'EUR' :
    crrncy == 'GBP' ? crrncy = 'USD' : void 0;
    currencyView.hide();
    updateCurrency(globalData, true);
    currencyView.show();
});

  /* *********** Commercial View - STREAMDATA.IO *********** */
  currencyView.on('click', 'select', function(e) {
   console.log('## Show commercial view ##');
   commercialView.show();
});

  /* *********** Show the homepage *********** */


  /* ***************************************** */

/*********************************************************
  Update values in the main menu,
  @param visiblity (boolean) true -->   hide/show the view on update
                             false -->  update data only
  @param data (JSON)
  */
  function updateMenu(data){
    console.log("## updateMenu ##");

    // Update "last update" on menu
    var timer = new Date();
    mainView.section(0, {  title: "last update : " + timer.toLocaleTimeString()});

    var USDDiff = moneyDiff(data.USD.last, lastSnapshot.USD.last);
    var EURDiff = moneyDiff(data.EUR.last, lastSnapshot.EUR.last);
    var GBPDiff = moneyDiff(data.GBP.last, lastSnapshot.GBP.last);

    // Update values on menu - Variation displaying
    mainView.item(0, 0, { subtitle: '$ ' + formatMoney(data.USD.last)   + "  " + USDDiff });
    mainView.item(0, 1, { subtitle: '€ ' + formatMoney(data.EUR.last)   + "  " + EURDiff });
    mainView.item(0, 2, { subtitle: '£ ' + formatMoney(data.GBP.last)   + "  " + GBPDiff });

    // Hide variation after 3 seconds
    if (USDDiff != "") setTimeout(function(){ mainView.item(0, 0, { subtitle: '$ ' + formatMoney(data.USD.last) });}, 3000);
    if (EURDiff != "") setTimeout(function(){ mainView.item(0, 1, { subtitle: '$ ' + formatMoney(data.EUR.last) });}, 3000);
    if (GBPDiff != "") setTimeout(function(){ mainView.item(0, 2, { subtitle: '$ ' + formatMoney(data.GBP.last) });}, 3000);

}

/*********************************************************
  Update values in the currency card,
  @param visiblity (boolean) true -->   hide/show the view on update
                             false -->  update data only
  @param data (JSON)
  */
  function updateCurrency(data){
    console.log("## updateCurrency ##");

    var currencySymbol;
    crrncy == 'EUR' ? currencySymbol = '€' :
    crrncy == 'USD' ? currencySymbol = '$' :
    crrncy == 'GBP' ? currencySymbol = '£' : void 0;

    var timer = new Date();
    var diff = "";

    currencyView.icon('images/'+ crrncy +'.png');
    currencyView.title(' ' + crrncy + ' ' + formatMoney(data[crrncy].last));

    // Update values on currencyView - Variation displaying
    diff = moneyDiff(data[crrncy].last, lastSnapshot[crrncy].last);
    if(diff != ""){
     currencyView.subtitle(
        '                   ' + diff + '\n'
        + '  ' + formatMoney(data[crrncy].bid) + ' / ' + formatMoney(data[crrncy].ask));

        // Hide variation after 3 seconds
        setTimeout(function(){
            currencyView.subtitle( '  ' + formatMoney(data[crrncy].bid) + ' / ' + formatMoney(data[crrncy].ask));
        }, 3000); 
    }
    else{
     currencyView.subtitle( '  ' + formatMoney(data[crrncy].bid) + ' / ' + formatMoney(data[crrncy].ask));
 }  

 currencyView.body(
     "24h Avg:  " + currencySymbol + " " + formatMoney(data[crrncy]["24h_avg"]) + '\n'
     + "Total Vol: " + currencySymbol + " " + formatMoney(data[crrncy].total_vol) + '\n' + '\n'
     + "Updated at " + timer.toLocaleTimeString()+'\n'
     +'1 Bitcoin base used\n' );  
}

/*********************************************************
 * Format a number to money expression
 */
 function formatMoney(num){  
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}  

/*********************************************************  
 * Return the money-formatted difference between 2 differents amounts, or an empty string if they are equals
 * ex : 
 *   moneyDiff(12.9, 11.5) --> '+1.40'
 *   moneyDiff(x, x)       --> ''
 *   moneyDiff(5.42, 5.6)  --> '-0.18'
 */
 function moneyDiff(current, previous){
    if (current != previous){
        if(current > previous) return '+' + formatMoney(current - previous);
        else return formatMoney(current - previous);
    }
    else{
        return "";
    }
}
/* ******************************************************* */

