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

(function(b){function c(e,g,k){var a=window.location.origin;this.cancelable=this.cancelBubble=this.bubbles=!1;this.data=g||null;this.origin=a||"";this.lastEventId=k||"";this.type=e||"message"}if(!b.EventSource||b.ja){var d=(b.ja||"")+"EventSource",f=function(e,g){if(!e||"string"!=typeof e)throw new SyntaxError("Not enough arguments");this.URL=e;this.Aa(g);var a=this;setTimeout(function(){a.Y()},0)};f.prototype={CONNECTING:0,OPEN:1,CLOSED:2,R:{X:!1,ra:"eventsource",interval:500,la:262144,C:3E5,v:{},
aa:{Accept:"text/event-stream","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"}},Aa:function(e){var g=this.R,a;for(a in g)g.hasOwnProperty(a)&&(this[a]=g[a]);for(a in e)a in g&&e.hasOwnProperty(a)&&(this[a]=e[a]);if("undefined"===typeof console||"undefined"===typeof console.log)this.X=!1},log:function(e){this.X&&console.log("["+this.ra+"]:"+e)},Y:function(){try{this.readyState!=this.CLOSED&&(this.P(),this.readyState=this.CONNECTING,this.cursor=0,this.cache="",this.i=new this.s(this),
this.Z())}catch(e){this.log("There were errors inside the pool try-catch"),this.dispatchEvent("error",{type:"error",data:e.message})}},w:function(e){var g=this;g.readyState=g.CONNECTING;g.dispatchEvent("error",{type:"error",data:"Reconnecting "});this.u=setTimeout(function(){g.Y()},e||0)},P:function(){this.log("evs cleaning up");this.u&&(clearInterval(this.u),this.u=null);this.m&&(clearInterval(this.m),this.m=null);this.i&&(this.i.abort(),this.i=null)},Z:function(){if(this.C){this.m&&clearInterval(this.m);
var e=this;this.m=setTimeout(function(){e.log("Timeout! silentTImeout:"+e.C);e.w()},this.C)}},close:function(){this.readyState=this.CLOSED;this.log("Closing connection. readyState: "+this.readyState);this.P()},A:function(){var e=this.i;if(e.W()&&!e.U()){this.Z();this.readyState==this.CONNECTING&&(this.readyState=this.OPEN,this.dispatchEvent("open",{type:"open"}));var g=e.T();g.length>this.la&&(this.log("buffer.length > this.bufferSizeLimit"),this.w());0==this.cursor&&0<g.length&&"\ufeff"==g.substring(0,
1)&&(this.cursor=1);var a=this.qa(g);a[0]>=this.cursor&&(a=a[1],this.ya(g.substring(this.cursor,a)),this.cursor=a);e.V()&&(this.log("request.isDone(). reopening the connection"),this.w(this.interval))}else this.readyState!==this.CLOSED&&(this.log("this.readyState !== this.CLOSED"),this.w(this.interval))},ya:function(e){e=this.cache+this.sa(e);e=e.split("\n\n");var a,k,b,f,d;for(a=0;a<e.length-1;a++){b="message";f=[];parts=e[a].split("\n");for(k=0;k<parts.length;k++)d=this.Ba(parts[k]),0==d.indexOf("event")?
b=d.replace(/event:?\s*/,""):0==d.indexOf("retry")?(d=parseInt(d.replace(/retry:?\s*/,"")),isNaN(d)||(this.interval=d)):0==d.indexOf("data")?f.push(d.replace(/data:?\s*/,"")):0==d.indexOf("id:")?this.lastEventId=d.replace(/id:?\s*/,""):0==d.indexOf("id")&&(this.lastEventId=null);f.length&&this.dispatchEvent(b,new c(b,f.join("\n"),this.lastEventId))}this.cache=e[e.length-1]},dispatchEvent:function(e,a){var b=this["_"+e+"Handlers"];if(b)for(var c=0;c<b.length;c++)b[c].call(this,a);this["on"+e]&&this["on"+
e].call(this,a)},addEventListener:function(e,a){this["_"+e+"Handlers"]||(this["_"+e+"Handlers"]=[]);this["_"+e+"Handlers"].push(a)},u:null,i:null,lastEventId:null,cache:"",cursor:0,readyState:0,$:function(e,a){var b=[];if(a){var c,d,f=encodeURIComponent;for(c in a)a.hasOwnProperty(c)&&(d=f(c)+"="+f(a[c]),b.push(d))}return 0<b.length?-1==e.indexOf("?")?e+"?"+b.join("&"):e+"&"+b.join("&"):e},qa:function(e){var a=e.lastIndexOf("\n\n"),b=e.lastIndexOf("\r\r");e=e.lastIndexOf("\r\n\r\n");return e>Math.max(a,
b)?[e,e+4]:[Math.max(a,b),Math.max(a,b)+2]},Ba:function(a){return a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")},sa:function(a){return a.replace(/\r\n|\r/g,"\n")}};if(window.XDomainRequest&&window.XMLHttpRequest&&void 0===(new XMLHttpRequest).responseType){f.g="IE_8-9";var a=f.prototype.R;a.aa=null;a.v.evs_preamble=2056;f.prototype.s=function(a){this.c=request=new XDomainRequest;request.onprogress=function(){request.L=!0;a.A()};request.onload=function(){this.H=!0;a.A()};request.onerror=function(){this.h=
!0;a.readyState=a.CLOSED;a.dispatchEvent("error",{type:"error",data:"XDomainRequest error"})};request.ontimeout=function(){this.h=!0;a.readyState=a.CLOSED;a.dispatchEvent("error",{type:"error",data:"XDomainRequest timed out"})};var b={};if(a.v){var c=a.v,d;for(d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);a.lastEventId&&(b.evs_last_event_id=a.lastEventId)}request.open("GET",a.$(a.URL,b));request.send()};f.prototype.s.prototype={c:null,L:!1,H:!1,h:!1,W:function(){return this.c.L},V:function(){return this.c.H},
U:function(){return this.c.h},T:function(){var a="";try{a=this.c.responseText||""}catch(b){}return a},abort:function(){this.c&&this.c.abort()}}}else f.g="XHR",f.prototype.s=function(a){this.c=request=new XMLHttpRequest;a.i=this;request.onreadystatechange=function(){1<request.readyState&&a.readyState!=a.CLOSED&&(200==request.status||300<=request.status&&400>request.status?a.A():(request.h=!0,a.readyState=a.CLOSED,a.dispatchEvent("error",{type:"error",data:"The server responded with "+request.status}),
a.close()))};request.onprogress=function(){};request.open("GET",a.$(a.URL,a.v),!0);var b=a.aa,c;for(c in b)b.hasOwnProperty(c)&&request.setRequestHeader(c,b[c]);a.lastEventId&&request.setRequestHeader("Last-Event-Id",a.lastEventId);request.send()},f.prototype.s.prototype={c:null,h:!1,W:function(){return 2<=this.c.readyState},V:function(){return 4==this.c.readyState},U:function(){return this.h||400<=this.c.status},T:function(){var a="";try{a=this.c.responseText||""}catch(b){}return a},abort:function(){this.c&&
this.c.abort()}};b[d]=f}})(this);var Exporter={g:function(b,c,d){c=c.split(".");for(var f=0;f<c.length-1;f++)b=b[c[f]];this.a(b,c[c.length-1],d)},a:function(b,c,d){b[c]=d}};var Logger=function(){function b(b,a){return b.replace(/{(\d+)}/g,function(b,g){var d;if(a[g]&&"object"===typeof a[g]&&a[g]instanceof Error)try{d=a[g].message,a[g].stack&&c.error(a[g].stack)}catch(f){d=a[g]}else if(a[g]&&"object"===typeof a[g])try{a[g].toString!==Object.prototype.toString?d=a[g].toString():d=JSON.stringify(a[g])}catch(l){d=a[g]}else a[g]&&"function"===typeof a[g]?d="function":d=a[g]?a[g]:b;d=""+d;return d.substring(0,Math.min(500,d.length))})}var c=window.console,d=2;return{ba:3,
ca:2,da:1,ERROR:0,za:function(b){d=b},debug:function(){3<=d&&c&&c.log&&c.log(b(arguments[0],Array.prototype.slice.call(arguments,1)))},info:function(){2<=d&&c&&c.info&&c.info(b(arguments[0],Array.prototype.slice.call(arguments,1)))},warn:function(){1<=d&&c&&c.warn&&c.warn(b(arguments[0],Array.prototype.slice.call(arguments,1)))},error:function(){0<=d&&c&&c.error&&c.error(b(arguments[0],Array.prototype.slice.call(arguments,1)))}}}();var Preconditions=function(b){return{b:function(b,d){if("undefined"===typeof b||null===b){if(d)throw Error(d);throw Error("value cannot be null");}return b},g:function(c,d){this.b(c,"functionName cannot be null");this.b(d,"message cannot be null");b.warn("Deprecated: function '{0}' is deprecated because '{1}'.",c,d)},O:function(b,d){if(!b){if(d)throw Error(d);throw Error("expression is not valid");}},ma:function(b,d){if(!b){if(d)throw Error(d);throw Error("expression is not valid");}}}}(Logger);function Listeners(b){Preconditions.b(b,"bind cannot be null");this.ea=b;this.l=[]}
Listeners.prototype={o:function(){for(var b=this.l.slice(),c=0,d=b.length;c<d;c++)try{var f=b[c];f&&f.apply(this.ea,arguments)}catch(a){Logger.error("Unable to forward event: {0}",a)}},add:function(b){Preconditions.b(b,"listener cannot be null");Preconditions.O(-1==this.l.indexOf(b),"listener already exists");this.l.push(b)},remove:function(b){Preconditions.b(b,"listener cannot be null");b=this.l.indexOf(b);Preconditions.O(0<=b,"listener not exists");this.l.splice(b,1)}};function StreamdataEventSource(b,c,d,f){Preconditions.b(b,"url cannot be null.");Preconditions.b(c,"appToken cannot be null.");Preconditions.ma(null===f||void 0===f||f.hasOwnProperty("signUrl"),"authStrategy does not implement signUrl() function.");d=d||[];f=void 0===f?null:f;var a=this;a.streamdataConfig={PROTOCOL:"https://",HOST:"streamdata.motwin.net",PORT:""};a.f=null;a.j=!1;a.B=b;a.J=new Listeners(a);a.D=new Listeners(a);a.K=new Listeners(a);a.G=new Listeners(a);a.I=new Listeners(a);a.ka=d;a.F=
{type:"UnknownError",status:1E3,message:"An error occured. Please check your console logs for more details.",source:"server"};a.open=function(){Preconditions.b(a.B,"url cannot be null");a.close();var b=a.ia(a.B,a.ka);b&&(a.f=new EventSource(b),a.f.addEventListener("open",function(b){Logger.debug("SSE Stream Opened to "+a.B+"event: "+JSON.stringify(b));a.j=!0;a.J.o()}),a.f.addEventListener("error",function(b){Logger.debug("Error with SSE at "+b+": closing the stream.");a.f.close();a.j=!1;a.G.o(a.fa(b))}),
a.f.addEventListener("data",function(b){Logger.debug("Received data:"+b.data);a.D.o(JSON.parse(b.data))}),a.f.addEventListener("patch",function(b){Logger.debug("Received patch:"+b.data);a.K.o(JSON.parse(b.data))}),a.f.addEventListener("monitor",function(b){Logger.debug("Received monitor:"+b.data);a.I.o(JSON.parse(b.data))}));return this};a.close=function(){a.j&&null!==a.f&&(Logger.info("Closing the SSE Stream."),a.f.close(),a.j=!1);return this};a.ia=function(b,d){Preconditions.b(b,"url cannot be null");
d=d||[];var c=document.createElement("a");c.href=b;var h=/\/\/(.*@)/g.exec(b),h=h?h=h[1]:"",c=c.protocol+"//"+h+c.hostname+("0"!=c.port&&""!=c.port&&"80"!=c.port&&"443"!=c.port?":"+c.port:"")+(0==c.pathname.indexOf("/")?"":"/")+c.pathname+c.search,c=null===f?c:f.signUrl(c),h=a.ha(d),l="";0<h.length&&(l=document.createElement("a"),l.href=c,l=(-1===l.search.indexOf("?")?"?":"&")+h.join("&"));c=a.streamdataConfig.PROTOCOL+a.streamdataConfig.HOST+(a.pa(a.streamdataConfig.PORT)?"":":")+a.streamdataConfig.PORT+
"/"+c+l;Logger.debug("converted url :"+c);return c};a.ha=function(b){b=b||[];b=a.ga(b);b.push("X-Sd-Token="+encodeURIComponent(c));return b};a.ga=function(a){a=a||[];return a.map(function(a){return"X-Sd-Header="+encodeURIComponent(a)})};a.fa=function(b){Preconditions.b(b,"event cannot be null");var c=a.F;try{var d=JSON.parse(b.data);c.type=d.cause;c.message=d.message;c.status=d.status}catch(f){c=a.F}c.source="server";console.log(JSON.stringify(c));return new StreamdataError(c.type,c.message,c.status,
c.source,!0)};a.pa=function(a){return!a||0===a.length}}
StreamdataEventSource.prototype={wa:function(b){Preconditions.b(b,"listener cannot be null");this.J.add(b);return this},ua:function(b){Preconditions.b(b,"listener cannot be null");this.G.add(b);return this},ta:function(b){Preconditions.b(b,"listener cannot be null");this.D.add(b);return this},xa:function(b){Preconditions.b(b,"listener cannot be null");this.K.add(b);return this},va:function(b){Preconditions.b(b,"listener cannot be null");this.I.add(b);return this},oa:function(){return this.j}};function StreamdataError(b,c,d,f,a){this.g=f;this.S=b;this.M=c;this.na=a||!1;this.N=d;Exporter.a(this,"source",this.g);Exporter.a(this,"type",this.S);Exporter.a(this,"message",this.M);Exporter.a(this,"status",this.N)}StreamdataError.prototype={isFatal:function(){return this.na},isServer:function(){return"server"==this.g},isClient:function(){return"client"==this.g},getMessage:function(){return this.M},getStatus:function(){return this.N},getType:function(){return this.S}};var streamdataio=new function(){};Exporter.a(streamdataio,"Logger",Logger);Exporter.a(Logger,"DEBUG",Logger.ba);Exporter.a(Logger,"INFO",Logger.ca);Exporter.a(Logger,"WARN",Logger.da);Exporter.a(Logger,"ERROR",Logger.ERROR);Exporter.a(Logger,"setLevel",Logger.za);Exporter.a(Logger,"debug",Logger.debug);Exporter.a(Logger,"info",Logger.info);Exporter.a(Logger,"warn",Logger.warn);Exporter.a(Logger,"error",Logger.error);
Exporter.a(streamdataio,"createEventSource",function(b,c,d,f){Preconditions.b(b,"url cannot be null");c=c||[];f=f||null;0!=b.lastIndexOf("http://",0)&&0!=b.lastIndexOf("https://",0)&&(b="http://"+b,Logger.warn("url has no default protocol defined. Add http:// as a default protocol."));return new StreamdataEventSource(b,c,d,f)});Exporter.a(StreamdataError.prototype,"isFatal",StreamdataError.prototype.isFatal);Exporter.a(StreamdataError.prototype,"isServer",StreamdataError.prototype.isServer);
Exporter.a(StreamdataError.prototype,"isClient",StreamdataError.prototype.isClient);Exporter.a(StreamdataError.prototype,"getMessage",StreamdataError.prototype.getMessage);Exporter.a(StreamdataError.prototype,"getStatus",StreamdataError.prototype.getStatus);Exporter.a(StreamdataError.prototype,"getType",StreamdataError.prototype.getType);Exporter.a(StreamdataEventSource.prototype,"open",StreamdataEventSource.prototype.connect);Exporter.a(StreamdataEventSource.prototype,"onOpen",StreamdataEventSource.prototype.wa);
Exporter.a(StreamdataEventSource.prototype,"onError",StreamdataEventSource.prototype.ua);Exporter.a(StreamdataEventSource.prototype,"onData",StreamdataEventSource.prototype.ta);Exporter.a(StreamdataEventSource.prototype,"onPatch",StreamdataEventSource.prototype.xa);Exporter.a(StreamdataEventSource.prototype,"onMonitor",StreamdataEventSource.prototype.va);Exporter.a(StreamdataEventSource.prototype,"isConnected",StreamdataEventSource.prototype.oa);


/* INCLUDE STEAMDATA.IO-AUTH */

var CryptoJS=CryptoJS||function(a,c){var b={},e=b.lib={},d=e.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;b&&c.mixIn(b);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var x in a)a.hasOwnProperty(x)&&(this[x]=a[x]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},
clone:function(){return this.init.prototype.extend(this)}}}(),f=e.WordArray=d.extend({init:function(a,b){a=this.f=a||[];b!=c?this.c=b:this.c=4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var b=this.f,c=a.f,d=this.c;a=a.c;this.clamp();if(d%4)for(var f=0;f<a;f++)b[d+f>>>2]|=(c[f>>>2]>>>24-f%4*8&255)<<24-(d+f)%4*8;else if(65535<c.length)for(f=0;f<a;f+=4)b[d+f>>>2]=c[f>>>2];else b.push.apply(b,c);this.c+=a;return this},clamp:function(){var b=this.f,c=this.c;b[c>>>2]&=
4294967295<<32-c%4*8;b.length=a.ceil(c/4)},clone:function(){var a=d.clone.call(this);a.f=this.f.slice(0);return a},random:function(b){for(var c=[],d=0;d<b;d+=4)c.push(4294967296*a.random()|0);return new f.init(c,b)}}),g=b.enc={},k=g.Hex={stringify:function(a){var b=a.f;a=a.c;for(var c=[],f=0;f<a;f++){var d=b[f>>>2]>>>24-f%4*8&255;c.push((d>>>4).toString(16));c.push((d&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<
24-d%8*4;return new f.init(c,b/2)}},m=g.Latin1={stringify:function(a){var b=a.f;a=a.c;for(var c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-d%4*8&255));return c.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-d%4*8;return new f.init(b,c)}},y=g.Utf8={stringify:function(a){try{return decodeURIComponent(escape(m.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return m.parse(unescape(encodeURIComponent(a)))}},
ca=e.BufferedBlockAlgorithm=d.extend({reset:function(){this.g=new f.init;this.m=0},_append:function(a){"string"==typeof a&&(a=y.parse(a));this.g.concat(a);this.m+=a.c},_process:function(b){var c=this.g,d=c.f,k=c.c,g=this.blockSize,e=k/(4*g),e=b?a.ceil(e):a.max((e|0)-this._minBufferSize,0);b=e*g;k=a.min(4*b,k);if(b){for(var m=0;m<b;m+=g)this._doProcessBlock(d,m);m=d.splice(0,b);c.c-=k}return new f.init(m,k)},clone:function(){var a=d.clone.call(this);a.g=this.g.clone();return a},_minBufferSize:0});
e.Hasher=ca.extend({cfg:d.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){ca.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return(new a.init(c)).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return(new ma.HMAC.init(a,c)).finalize(b)}}});var ma=b.algo={};return b}(Math);
(function(a){var c=CryptoJS.lib,b=c.Base,e=c.WordArray,c=CryptoJS.x64={};c.Word=b.extend({init:function(a,b){this.a=a;this.b=b}});c.WordArray=b.extend({init:function(b,c){b=this.f=b||[];c!=a?this.c=c:this.c=8*b.length},toX32:function(){for(var a=this.f,b=a.length,c=[],k=0;k<b;k++){var m=a[k];c.push(m.a);c.push(m.b)}return e.create(c,this.c)},clone:function(){for(var a=b.clone.call(this),c=a.f=this.f.slice(0),e=c.length,k=0;k<e;k++)c[k]=c[k].clone();return a}})})();
(function(){var a=CryptoJS.enc.Utf8;CryptoJS.algo.HMAC=CryptoJS.lib.Base.extend({init:function(c,b){c=this.l=new c.init;"string"==typeof b&&(b=a.parse(b));var e=c.blockSize,d=4*e;b.c>d&&(b=c.finalize(b));b.clamp();for(var f=this.w=b.clone(),g=this.v=b.clone(),k=f.f,m=g.f,y=0;y<e;y++)k[y]^=1549556828,m[y]^=909522486;f.c=g.c=d;this.reset()},reset:function(){var a=this.l;a.reset();a.update(this.v)},update:function(a){this.l.update(a);return this},finalize:function(a){var b=this.l;a=b.finalize(a);b.reset();
return b.finalize(this.w.clone().concat(a))}})})();
(function(){function a(){return e.create.apply(e,arguments)}var c=CryptoJS.lib.Hasher,b=CryptoJS.x64,e=b.Word,d=b.WordArray,b=CryptoJS.algo,f=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,
633803317),a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),
a(1396182291,2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,
3602036899),a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],g=[];(function(){for(var b=0;80>b;b++)g[b]=a()})();b=b.SHA512=c.extend({_doReset:function(){this.i=new d.init([new e.init(1779033703,4089235720),new e.init(3144134277,2227873595),new e.init(1013904242,4271175723),new e.init(2773480762,1595750129),new e.init(1359893119,2917565137),new e.init(2600822924,725511199),new e.init(528734635,4215389547),new e.init(1541459225,327033209)])},_doProcessBlock:function(a,b){for(var c=
this.i.f,d=c[0],e=c[1],x=c[2],K=c[3],L=c[4],M=c[5],N=c[6],c=c[7],ba=d.a,O=d.b,da=e.a,P=e.b,ea=x.a,Q=x.b,fa=K.a,R=K.b,ga=L.a,S=L.b,ha=M.a,T=M.b,ia=N.a,U=N.b,ja=c.a,V=c.b,r=ba,n=O,E=da,C=P,F=ea,D=Q,Y=fa,G=R,t=ga,p=S,W=ha,H=T,X=ia,I=U,Z=ja,J=V,u=0;80>u;u++){var z=g[u];if(16>u)var q=z.a=a[b+2*u]|0,h=z.b=a[b+2*u+1]|0;else{var q=g[u-15],h=q.a,v=q.b,q=(h>>>1|v<<31)^(h>>>8|v<<24)^h>>>7,v=(v>>>1|h<<31)^(v>>>8|h<<24)^(v>>>7|h<<25),B=g[u-2],h=B.a,l=B.b,B=(h>>>19|l<<13)^(h<<3|l>>>29)^h>>>6,l=(l>>>19|h<<13)^(l<<
3|h>>>29)^(l>>>6|h<<26),h=g[u-7],aa=h.a,A=g[u-16],w=A.a,A=A.b,h=v+h.b,q=q+aa+(h>>>0<v>>>0?1:0),h=h+l,q=q+B+(h>>>0<l>>>0?1:0),h=h+A,q=q+w+(h>>>0<A>>>0?1:0);z.a=q;z.b=h}var aa=t&W^~t&X,A=p&H^~p&I,z=r&E^r&F^E&F,na=n&C^n&D^C&D,v=(r>>>28|n<<4)^(r<<30|n>>>2)^(r<<25|n>>>7),B=(n>>>28|r<<4)^(n<<30|r>>>2)^(n<<25|r>>>7),l=f[u],oa=l.a,ka=l.b,l=J+((p>>>14|t<<18)^(p>>>18|t<<14)^(p<<23|t>>>9)),w=Z+((t>>>14|p<<18)^(t>>>18|p<<14)^(t<<23|p>>>9))+(l>>>0<J>>>0?1:0),l=l+A,w=w+aa+(l>>>0<A>>>0?1:0),l=l+ka,w=w+oa+(l>>>0<
ka>>>0?1:0),l=l+h,w=w+q+(l>>>0<h>>>0?1:0),h=B+na,z=v+z+(h>>>0<B>>>0?1:0),Z=X,J=I,X=W,I=H,W=t,H=p,p=G+l|0,t=Y+w+(p>>>0<G>>>0?1:0)|0,Y=F,G=D,F=E,D=C,E=r,C=n,n=l+h|0,r=w+z+(n>>>0<l>>>0?1:0)|0}O=d.b=O+n;d.a=ba+r+(O>>>0<n>>>0?1:0);P=e.b=P+C;e.a=da+E+(P>>>0<C>>>0?1:0);Q=x.b=Q+D;x.a=ea+F+(Q>>>0<D>>>0?1:0);R=K.b=R+G;K.a=fa+Y+(R>>>0<G>>>0?1:0);S=L.b=S+p;L.a=ga+t+(S>>>0<p>>>0?1:0);T=M.b=T+H;M.a=ha+W+(T>>>0<H>>>0?1:0);U=N.b=U+I;N.a=ia+X+(U>>>0<I>>>0?1:0);V=c.b=V+J;c.a=ja+Z+(V>>>0<J>>>0?1:0)},_doFinalize:function(){var a=
this.g,b=a.f,c=8*this.m,d=8*a.c;b[d>>>5]|=128<<24-d%32;b[(d+128>>>10<<5)+30]=Math.floor(c/4294967296);b[(d+128>>>10<<5)+31]=c;a.c=4*b.length;this._process();return this.i.toX32()},clone:function(){var a=c.clone.call(this);a.i=this.i.clone();return a},blockSize:32});CryptoJS.SHA512=c._createHelper(b);CryptoJS.HmacSHA512=c._createHmacHelper(b)})();
(function(){var a=CryptoJS.lib.WordArray;CryptoJS.enc.Base64={stringify:function(a){var b=a.f,e=a.c,d=this._map;a.clamp();a=[];for(var f=0;f<e;f+=3)for(var g=(b[f>>>2]>>>24-f%4*8&255)<<16|(b[f+1>>>2]>>>24-(f+1)%4*8&255)<<8|b[f+2>>>2]>>>24-(f+2)%4*8&255,k=0;4>k&&f+.75*k<e;k++)a.push(d.charAt(g>>>6*(3-k)&63));if(b=d.charAt(64))for(;a.length%4;)a.push(b);return a.join("")},parse:function(c){var b=c.length,e=this._map,d=e.charAt(64);d&&(d=c.indexOf(d),-1!=d&&(b=d));for(var d=[],f=0,g=0;g<b;g++)g%4&&(d[f>>>
2]|=(e.indexOf(c.charAt(g-1))<<g%4*2|e.indexOf(c.charAt(g))>>>6-g%4*2)<<24-f%4*8,f++);return a.create(d,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();var la={C:function(a,c,b){c=c.split(".");for(var e=0;e<c.length-1;e++)a=a[c[e]];this.o(a,c[c.length-1],b)},o:function(a,c,b){a[c]=b}};function SignatureStrategy(a,c){var b=this;b.h=a;b.j=c;var e=!1;b.s=function(a){return!a||0===a.length};b.A=function(){var a={Pk:"",pk:""};e=!1;b.s(b.j)||b.s(b.h)||(a.j=b.j,a.h=b.h);return b.u(a)};b.u=function(a){var b=["","",""];if(a)try{var c=CryptoJS.enc.Base64.parse(a.j),k=CryptoJS.enc.Utf8.stringify(c);72==k.length&&(e=!0,b=[k.substring(0,36),k.substring(36),a.h])}catch(m){}return b};b.signUrl=function(a){var c=a,g=b.A();e&&(c=document.createElement("a"),c.href=a,g=b.B(a,g),c=a+(-1===c.search.indexOf("?")?
"?":"&")+g.join("&"));return c};b.B=function(a,b){var c=[],e=""+Date.now(),m=CryptoJS.HmacSHA512("GET\n"+e+"\n"+a+"\n",b[1]),m=CryptoJS.enc.Base64.stringify(m),m=CryptoJS.enc.Utf8.parse(b[0]+m),m=CryptoJS.enc.Base64.stringify(m);c.push("X-Auth-Sd-Ts="+encodeURIComponent(e));c.push("X-Auth-Sd-S="+encodeURIComponent(m));return c}}var AuthStrategy={newSignatureStrategy:function(a,c){return new SignatureStrategy(a,c)}};la.o(AuthStrategy,"newSignatureStrategy",AuthStrategy.newSignatureStrategy);la.o(SignatureStrategy,"signUrl",SignatureStrategy.prototype.signUrl);


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

  /* *********** Show the homepage *********** */

  mainView.show();

  /* ***************************************** */

/* *********** Streamdata.io Javascript SDK *********** */


/* Further informations about Streamdata security on  https://github.com/streamdataio/streamdataio-js/master/doc/ */

    // setup headers
    var headers = [];
    // setup signatureStrategy
    var signatureStrategy = AuthStrategy.newSignatureStrategy(/* TODO : Paste your app TOKEN here */, /* TODO : Paste your app PRIVATE KEY here */ );
    
  // Create the Event source from bitcoin API
     streamdata = streamdataio.createEventSource(URL, /* TODO : Paste your app TOKEN here */ , headers,signatureStrategy);

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

