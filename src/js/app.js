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
/*
   * EventSource polyfill version 0.9.7
   * Supported by sc AmvTek srl
   * :email: devel@amvtek.com
 */
var EventSourcePolyfill = function (global) {

    if (global.EventSource && !global._eventSourceImportPrefix){
        return;
    }

    var evsImportName = (global._eventSourceImportPrefix||'')+"EventSource";

    var EventSource = function (url, options) {

        if (!url || typeof url != 'string') {
            throw new SyntaxError('Not enough arguments');
        }

        this.URL = url;
        this.setOptions(options);
        var evs = this;
        setTimeout(function(){evs.poll()}, 0);
    };

    EventSource.prototype = {

        CONNECTING: 0,

        OPEN: 1,

        CLOSED: 2,

        defaultOptions: {

            loggingEnabled: false,

            loggingPrefix: "eventsource",

            interval: 500, // milliseconds

            bufferSizeLimit: 256*1024, // bytes

            silentTimeout: 300000, // milliseconds

            getArgs:{
                'evs_buffer_size_limit': 256*1024
            },

            xhrHeaders:{
                'Accept': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'X-Requested-With': 'XMLHttpRequest'
            }
        },

        setOptions: function(options){

            var defaults = this.defaultOptions;
            var option;

            // set all default options...
            for (option in defaults){

                if ( defaults.hasOwnProperty(option) ){
                    this[option] = defaults[option];
                }
            }

            // override with what is in options
            for (option in options){

                if (option in defaults && options.hasOwnProperty(option)){
                    this[option] = options[option];
                }
            }

            // if getArgs option is enabled
            // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
            if (this.getArgs && this.bufferSizeLimit) {

                this.getArgs['evs_buffer_size_limit'] = this.bufferSizeLimit;
            }

            // if console is not available, force loggingEnabled to false
            if (typeof console === "undefined" || typeof console.log === "undefined") {

                this.loggingEnabled = false;
            }
        },

        log: function(message) {

            if (this.loggingEnabled) {

                console.log("[" + this.loggingPrefix +"]:" + message)
            }
        },

        poll: function() {

            try {

                if (this.readyState == this.CLOSED) {
                    return;
                }

                this.cleanup();
                this.readyState = this.CONNECTING;
                this.cursor = 0;
                this.cache = '';
                this._xhr = new this.XHR(this);
                this.resetNoActivityTimer();

            }
            catch (e) {

                // in an attempt to silence the errors
                this.log('There were errors inside the pool try-catch');
                this.dispatchEvent('error', { type: 'error', data: e.message });
            }
        },

        pollAgain: function (interval) {

            // schedule poll to be called after interval milliseconds
            var evs = this;
            evs.readyState = evs.CONNECTING;
            evs.dispatchEvent('error', {
                type: 'error',
                data: "Reconnecting "
            });
            this._pollTimer = setTimeout(function(){evs.poll()}, interval||0);
        },


        cleanup: function() {

            this.log('evs cleaning up')

            if (this._pollTimer){
                clearInterval(this._pollTimer);
                this._pollTimer = null;
            }

            if (this._noActivityTimer){
                clearInterval(this._noActivityTimer);
                this._noActivityTimer = null;
            }

            if (this._xhr){
                this._xhr.abort();
                this._xhr = null;
            }
        },

        resetNoActivityTimer: function(){

            if (this.silentTimeout){

                if (this._noActivityTimer){
                    clearInterval(this._noActivityTimer);
                }
                var evs = this;
                this._noActivityTimer = setTimeout(
                        function(){ evs.log('Timeout! silentTImeout:'+evs.silentTimeout); evs.pollAgain(); },
                        this.silentTimeout
                        );
            }
        },

        close: function () {

            this.readyState = this.CLOSED;
            this.log('Closing connection. readyState: '+this.readyState);
            this.cleanup();
        },

        _onxhrdata: function() {

            var request = this._xhr;

            if (request.isReady() && !request.hasError() ) {
                // reset the timer, as we have activity
                this.resetNoActivityTimer();

                // move this EventSource to OPEN state...
                if (this.readyState == this.CONNECTING) {
                    this.readyState = this.OPEN;
                    this.dispatchEvent('open', { type: 'open' });
                }

                var buffer = request.getBuffer();

                if (buffer.length > this.bufferSizeLimit) {
                    this.log('buffer.length > this.bufferSizeLimit');
                    this.pollAgain();
                }

                if (this.cursor == 0 && buffer.length > 0){

                    // skip byte order mark \uFEFF character if it starts the stream
                    if (buffer.substring(0,1) == '\uFEFF'){
                        this.cursor = 1;
                    }
                }

                var lastMessageIndex = this.lastMessageIndex(buffer);
                if (lastMessageIndex[0] >= this.cursor){

                    var newcursor = lastMessageIndex[1];
                    var toparse = buffer.substring(this.cursor, newcursor);
                    this.parseStream(toparse);
                    this.cursor = newcursor;
                }

                // if request is finished, reopen the connection
                if (request.isDone()) {
                    this.log('request.isDone(). reopening the connection');
                    this.pollAgain(this.interval);
                }
            }
            else if (this.readyState !== this.CLOSED) {

                this.log('this.readyState !== this.CLOSED');
                this.pollAgain(this.interval);

                //MV: Unsure why an error was previously dispatched
            }
        },

        parseStream: function(chunk) {

            // normalize line separators (\r\n,\r,\n) to \n
            // remove white spaces that may precede \n
            chunk = this.cache + this.normalizeToLF(chunk);

            var events = chunk.split('\n\n');

            var i, j, eventType, datas, line, retry;

            for (i=0; i < (events.length - 1); i++) {

                eventType = 'message';
                datas = [];
                parts = events[i].split('\n');

                for (j=0; j < parts.length; j++) {

                    line = this.trimWhiteSpace(parts[j]);

                    if (line.indexOf('event') == 0) {

                        eventType = line.replace(/event:?\s*/, '');
                    }
                    else if (line.indexOf('retry') == 0) {

                        retry = parseInt(line.replace(/retry:?\s*/, ''));
                        if(!isNaN(retry)) {
                            this.interval = retry;
                        }
                    }
                    else if (line.indexOf('data') == 0) {

                        datas.push(line.replace(/data:?\s*/, ''));
                    }
                    else if (line.indexOf('id:') == 0) {

                        this.lastEventId = line.replace(/id:?\s*/, '');
                    }
                    else if (line.indexOf('id') == 0) { // this resets the id

                        this.lastEventId = null;
                    }
                }

                if (datas.length) {
                    // dispatch a new event
                    var event = new MessageEvent(eventType, datas.join('\n'), window.location.origin, this.lastEventId);
                    this.dispatchEvent(eventType, event);
                }
            }

            this.cache = events[events.length - 1];
        },

        dispatchEvent: function (type, event) {
            var handlers = this['_' + type + 'Handlers'];

            if (handlers) {

                for (var i = 0; i < handlers.length; i++) {
                    handlers[i].call(this, event);
                }
            }

            if (this['on' + type]) {
                this['on' + type].call(this, event);
            }

        },

        addEventListener: function (type, handler) {
            if (!this['_' + type + 'Handlers']) {
                this['_' + type + 'Handlers'] = [];
            }

            this['_' + type + 'Handlers'].push(handler);
        },

        removeEventListener: function (type, handler) {
            var handlers = this['_' + type + 'Handlers'];
            if (!handlers) {
                return;
            }
            for (var i = handlers.length - 1; i >= 0; --i) {
                if (handlers[i] === handler) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        },

        _pollTimer: null,

        _noactivityTimer: null,

        _xhr: null,

        lastEventId: null,

        cache: '',

        cursor: 0,

        onerror: null,

        onmessage: null,

        onopen: null,

        readyState: 0,

        // ===================================================================
        // helpers functions
        // those are attached to prototype to ease reuse and testing...

        urlWithParams: function (baseURL, params) {

            var encodedArgs = [];

            if (params){

                var key, urlarg;
                var urlize = encodeURIComponent;

                for (key in params){
                    if (params.hasOwnProperty(key)) {
                        urlarg = urlize(key)+'='+urlize(params[key]);
                        encodedArgs.push(urlarg);
                    }
                }
            }

            if (encodedArgs.length > 0){

                if (baseURL.indexOf('?') == -1)
                    return baseURL + '?' + encodedArgs.join('&');
                return baseURL + '&' + encodedArgs.join('&');
            }
            return baseURL;
        },

        lastMessageIndex: function(text) {

            var ln2 =text.lastIndexOf('\n\n');
            var lr2 = text.lastIndexOf('\r\r');
            var lrln2 = text.lastIndexOf('\r\n\r\n');

            if (lrln2 > Math.max(ln2, lr2)) {
                return [lrln2, lrln2+4];
            }
            return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
        },

        trimWhiteSpace: function(str) {
            // to remove whitespaces left and right of string

            var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
            return str.replace(reTrim, '');
        },

        normalizeToLF: function(str) {

            // replace \r and \r\n with \n
            return str.replace(/\r\n|\r/g, '\n');
        }

    };

    if (!isOldIE()){

        EventSource.isPolyfill = "XHR";

        // EventSource will send request using XMLHttpRequest
        EventSource.prototype.XHR = function(evs) {

            request = new XMLHttpRequest();
            this._request = request;
            evs._xhr = this;

            // set handlers
            request.onreadystatechange = function(){
                if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
                    if (request.status == 200 || (request.status>=300 && request.status<400)){
                        evs._onxhrdata();
                    }
                    else {
                        request._failed = true;
                        evs.readyState = evs.CLOSED;
                        evs.dispatchEvent('error', {
                            type: 'error',
                            data: "The server responded with "+request.status
                        });
                        evs.close();
                    }
                }
            };

            request.onprogress = function () {
            };

            request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true);

            var headers = evs.xhrHeaders; // maybe null
            for (var header in headers) {
                if (headers.hasOwnProperty(header)){
                    request.setRequestHeader(header, headers[header]);
                }
            }
            if (evs.lastEventId) {
                request.setRequestHeader('Last-Event-Id', evs.lastEventId);
            }

            request.send();
        };

        EventSource.prototype.XHR.prototype = {

            useXDomainRequest: false,

            _request: null,

            _failed: false, // true if we have had errors...

            isReady: function() {


                return this._request.readyState >= 2;
            },

            isDone: function() {

                return (this._request.readyState == 4);
            },

            hasError: function() {

                return (this._failed || (this._request.status >= 400));
            },

            getBuffer: function() {

                var rv = '';
                try {
                    rv = this._request.responseText || '';
                }
                catch (e){}
                return rv;
            },

            abort: function() {

                if ( this._request ) {
                    this._request.abort();
                }
            }
        };
    }
    else {

    EventSource.isPolyfill = "IE_8-9";

        // patch EventSource defaultOptions
        var defaults = EventSource.prototype.defaultOptions;
        defaults.xhrHeaders = null; // no headers will be sent
        defaults.getArgs['evs_preamble'] = 2048 + 8;

        // EventSource will send request using Internet Explorer XDomainRequest
        EventSource.prototype.XHR = function(evs) {

            request = new XDomainRequest();
            this._request = request;

            // set handlers
            request.onprogress = function(){
                request._ready = true;
                evs._onxhrdata();
            };

            request.onload = function(){
                this._loaded = true;
                evs._onxhrdata();
            };

            request.onerror = function(){
                this._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent('error', {
                    type: 'error',
                    data: "XDomainRequest error"
                });
            };

            request.ontimeout = function(){
                this._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent('error', {
                    type: 'error',
                    data: "XDomainRequest timed out"
                });
            };

            // XDomainRequest does not allow setting custom headers
            // If EventSource has enabled the use of GET arguments
            // we add parameters to URL so that server can adapt the stream...
            var reqGetArgs = {};
            if (evs.getArgs) {

                // copy evs.getArgs in reqGetArgs
                var defaultArgs = evs.getArgs;
                    for (var key in defaultArgs) {
                        if (defaultArgs.hasOwnProperty(key)){
                            reqGetArgs[key] = defaultArgs[key];
                        }
                    }
                if (evs.lastEventId){
                    reqGetArgs['evs_last_event_id'] = evs.lastEventId;
                }
            }
            // send the request

            request.open('GET', evs.urlWithParams(evs.URL,reqGetArgs));
            request.send();
        };

        EventSource.prototype.XHR.prototype = {

            useXDomainRequest: true,

            _request: null,

            _ready: false, // true when progress events are dispatched

            _loaded: false, // true when request has been loaded

            _failed: false, // true if when request is in error

            isReady: function() {

                return this._request._ready;
            },

            isDone: function() {

                return this._request._loaded;
            },

            hasError: function() {

                return this._request._failed;
            },

            getBuffer: function() {

                var rv = '';
                try {
                    rv = this._request.responseText || '';
                }
                catch (e){}
                return rv;
            },

            abort: function() {

                if ( this._request){
                    this._request.abort();
                }
            }
        };
    }

    function MessageEvent(type, data, origin, lastEventId) {

        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.data = data || null;
        this.origin = origin || '';
        this.lastEventId = lastEventId || '';
        this.type = type || 'message';
    }

    function isOldIE () {

        //return true if we are in IE8 or IE9
        return (window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined)) ? true : false;
    }

    global[evsImportName] = EventSource;

    return EventSource;
}

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * CryptoJS core components.
 */
var CryptoJS = CryptoJS || (function (Math, undefined) {
    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = (function () {
        function F() {}

        return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function (overrides) {
                // Spawn
                F.prototype = this;
                var subtype = new F();

                // Augment
                if (overrides) {
                    subtype.mixIn(overrides);
                }

                // Create default initializer
                if (!subtype.hasOwnProperty('init')) {
                    subtype.init = function () {
                        subtype.$super.init.apply(this, arguments);
                    };
                }

                // Initializer's prototype is the subtype object
                subtype.init.prototype = subtype;

                // Reference supertype
                subtype.$super = this;

                return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function () {
                var instance = this.extend();
                instance.init.apply(instance, arguments);

                return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function () {
            },

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function (properties) {
                for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                    }
                }

                // IE won't copy toString using the loop above
                if (properties.hasOwnProperty('toString')) {
                    this.toString = properties.toString;
                }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function () {
                return this.init.prototype.extend(this);
            }
        };
    }());

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 4;
            }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function (encoder) {
            return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function (wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;

            // Clamp excess bits
            this.clamp();

            // Concat
            if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                }
            } else if (thatWords.length > 0xffff) {
                // Copy one word at a time
                for (var i = 0; i < thatSigBytes; i += 4) {
                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                }
            } else {
                // Copy all words at once
                thisWords.push.apply(thisWords, thatWords);
            }
            this.sigBytes += thatSigBytes;

            // Chainable
            return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function () {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes;

            // Clamp
            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
            words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);

            return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function (nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
                words.push((Math.random() * 0x100000000) | 0);
            }

            return new WordArray.init(words, nBytes);
        }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function (hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length;

            // Convert
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
            }

            return new WordArray.init(words, hexStrLength / 2);
        }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function (latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length;

            // Convert
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
            }

            return new WordArray.init(words, latin1StrLength);
        }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function (wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
                throw new Error('Malformed UTF-8 data');
            }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function (utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function () {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function (data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
                data = Utf8.parse(data);
            }

            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function (doFlush) {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;

            // Count blocks ready
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }

            // Count words ready
            var nWordsReady = nBlocksReady * blockSize;

            // Count bytes ready
            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

            // Process blocks
            if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                }

                // Remove processed words
                var processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
            }

            // Return processed words
            return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();

            return clone;
        },

        _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function (cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Set initial values
            this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-hasher logic
            this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function (messageUpdate) {
            // Append
            this._append(messageUpdate);

            // Update the hash
            this._process();

            // Chainable
            return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }

            // Perform concrete-hasher logic
            var hash = this._doFinalize();

            return hash;
        },

        blockSize: 512/32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function (hasher) {
            return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
            };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function (hasher) {
            return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
        }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};

    return C;
}(Math));

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var X32WordArray = C_lib.WordArray;

    /**
     * x64 namespace.
     */
    var C_x64 = C.x64 = {};

    /**
     * A 64-bit word.
     */
    var X64Word = C_x64.Word = Base.extend({
        /**
         * Initializes a newly created 64-bit word.
         *
         * @param {number} high The high 32 bits.
         * @param {number} low The low 32 bits.
         *
         * @example
         *
         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
         */
        init: function (high, low) {
            this.high = high;
            this.low = low;
        }

        /**
         * Bitwise NOTs this word.
         *
         * @return {X64Word} A new x64-Word object after negating.
         *
         * @example
         *
         *     var negated = x64Word.not();
         */
        // not: function () {
            // var high = ~this.high;
            // var low = ~this.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Bitwise ANDs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to AND with this word.
         *
         * @return {X64Word} A new x64-Word object after ANDing.
         *
         * @example
         *
         *     var anded = x64Word.and(anotherX64Word);
         */
        // and: function (word) {
            // var high = this.high & word.high;
            // var low = this.low & word.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Bitwise ORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to OR with this word.
         *
         * @return {X64Word} A new x64-Word object after ORing.
         *
         * @example
         *
         *     var ored = x64Word.or(anotherX64Word);
         */
        // or: function (word) {
            // var high = this.high | word.high;
            // var low = this.low | word.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Bitwise XORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to XOR with this word.
         *
         * @return {X64Word} A new x64-Word object after XORing.
         *
         * @example
         *
         *     var xored = x64Word.xor(anotherX64Word);
         */
        // xor: function (word) {
            // var high = this.high ^ word.high;
            // var low = this.low ^ word.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Shifts this word n bits to the left.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftL(25);
         */
        // shiftL: function (n) {
            // if (n < 32) {
                // var high = (this.high << n) | (this.low >>> (32 - n));
                // var low = this.low << n;
            // } else {
                // var high = this.low << (n - 32);
                // var low = 0;
            // }

            // return X64Word.create(high, low);
        // },

        /**
         * Shifts this word n bits to the right.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftR(7);
         */
        // shiftR: function (n) {
            // if (n < 32) {
                // var low = (this.low >>> n) | (this.high << (32 - n));
                // var high = this.high >>> n;
            // } else {
                // var low = this.high >>> (n - 32);
                // var high = 0;
            // }

            // return X64Word.create(high, low);
        // },

        /**
         * Rotates this word n bits to the left.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotL(25);
         */
        // rotL: function (n) {
            // return this.shiftL(n).or(this.shiftR(64 - n));
        // },

        /**
         * Rotates this word n bits to the right.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotR(7);
         */
        // rotR: function (n) {
            // return this.shiftR(n).or(this.shiftL(64 - n));
        // },

        /**
         * Adds this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to add with this word.
         *
         * @return {X64Word} A new x64-Word object after adding.
         *
         * @example
         *
         *     var added = x64Word.add(anotherX64Word);
         */
        // add: function (word) {
            // var low = (this.low + word.low) | 0;
            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
            // var high = (this.high + word.high + carry) | 0;

            // return X64Word.create(high, low);
        // }
    });

    /**
     * An array of 64-bit words.
     *
     * @property {Array} words The array of CryptoJS.x64.Word objects.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var X64WordArray = C_x64.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.x64.WordArray.create();
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ]);
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ], 10);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 8;
            }
        },

        /**
         * Converts this 64-bit word array to a 32-bit word array.
         *
         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
         *
         * @example
         *
         *     var x32WordArray = x64WordArray.toX32();
         */
        toX32: function () {
            // Shortcuts
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;

            // Convert
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
                var x64Word = x64Words[i];
                x32Words.push(x64Word.high);
                x32Words.push(x64Word.low);
            }

            return X32WordArray.create(x32Words, this.sigBytes);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {X64WordArray} The clone.
         *
         * @example
         *
         *     var clone = x64WordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);

            // Clone "words" array
            var words = clone.words = this.words.slice(0);

            // Clone each X64Word object
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
                words[i] = words[i].clone();
            }

            return clone;
        }
    });
}());

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    /**
     * HMAC algorithm.
     */
    var HMAC = C_algo.HMAC = Base.extend({
        /**
         * Initializes a newly created HMAC.
         *
         * @param {Hasher} hasher The hash algorithm to use.
         * @param {WordArray|string} key The secret key.
         *
         * @example
         *
         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
         */
        init: function (hasher, key) {
            // Init hasher
            hasher = this._hasher = new hasher.init();

            // Convert string to WordArray, else assume WordArray already
            if (typeof key == 'string') {
                key = Utf8.parse(key);
            }

            // Shortcuts
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;

            // Allow arbitrary length keys
            if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
            }

            // Clamp excess bits
            key.clamp();

            // Clone key for inner and outer pads
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();

            // Shortcuts
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;

            // XOR keys with pad constants
            for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

            // Set initial values
            this.reset();
        },

        /**
         * Resets this HMAC to its initial state.
         *
         * @example
         *
         *     hmacHasher.reset();
         */
        reset: function () {
            // Shortcut
            var hasher = this._hasher;

            // Reset
            hasher.reset();
            hasher.update(this._iKey);
        },

        /**
         * Updates this HMAC with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {HMAC} This HMAC instance.
         *
         * @example
         *
         *     hmacHasher.update('message');
         *     hmacHasher.update(wordArray);
         */
        update: function (messageUpdate) {
            this._hasher.update(messageUpdate);

            // Chainable
            return this;
        },

        /**
         * Finalizes the HMAC computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The HMAC.
         *
         * @example
         *
         *     var hmac = hmacHasher.finalize();
         *     var hmac = hmacHasher.finalize('message');
         *     var hmac = hmacHasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Shortcut
            var hasher = this._hasher;

            // Compute HMAC
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

            return hmac;
        }
    });
}());

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;

    function X64Word_create() {
        return X64Word.create.apply(X64Word, arguments);
    }

    // Constants
    var K = [
        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
    ];

    // Reusable objects
    var W = [];
    (function () {
        for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
        }
    }());

    /**
     * SHA-512 hash algorithm.
     */
    var SHA512 = C_algo.SHA512 = Hasher.extend({
        _doReset: function () {
            this._hash = new X64WordArray.init([
                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
            ]);
        },

        _doProcessBlock: function (M, offset) {
            // Shortcuts
            var H = this._hash.words;

            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];

            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;

            // Working variables
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;

            // Rounds
            for (var i = 0; i < 80; i++) {
                // Shortcut
                var Wi = W[i];

                // Extend message
                if (i < 16) {
                    var Wih = Wi.high = M[offset + i * 2]     | 0;
                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
                } else {
                    // Gamma0
                    var gamma0x  = W[i - 15];
                    var gamma0xh = gamma0x.high;
                    var gamma0xl = gamma0x.low;
                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

                    // Gamma1
                    var gamma1x  = W[i - 2];
                    var gamma1xh = gamma1x.high;
                    var gamma1xl = gamma1x.low;
                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
                    var Wi7  = W[i - 7];
                    var Wi7h = Wi7.high;
                    var Wi7l = Wi7.low;

                    var Wi16  = W[i - 16];
                    var Wi16h = Wi16.high;
                    var Wi16l = Wi16.low;

                    var Wil = gamma0l + Wi7l;
                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
                    var Wil = Wil + gamma1l;
                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
                    var Wil = Wil + Wi16l;
                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

                    Wi.high = Wih;
                    Wi.low  = Wil;
                }

                var chh  = (eh & fh) ^ (~eh & gh);
                var chl  = (el & fl) ^ (~el & gl);
                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

                // t1 = h + sigma1 + ch + K[i] + W[i]
                var Ki  = K[i];
                var Kih = Ki.high;
                var Kil = Ki.low;

                var t1l = hl + sigma1l;
                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
                var t1l = t1l + chl;
                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
                var t1l = t1l + Kil;
                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
                var t1l = t1l + Wil;
                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

                // t2 = sigma0 + maj
                var t2l = sigma0l + majl;
                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

                // Update working variables
                hh = gh;
                hl = gl;
                gh = fh;
                gl = fl;
                fh = eh;
                fl = el;
                el = (dl + t1l) | 0;
                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
                dh = ch;
                dl = cl;
                ch = bh;
                cl = bl;
                bh = ah;
                bl = al;
                al = (t1l + t2l) | 0;
                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
            }

            // Intermediate hash value
            H0l = H0.low  = (H0l + al);
            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
            H1l = H1.low  = (H1l + bl);
            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
            H2l = H2.low  = (H2l + cl);
            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
            H3l = H3.low  = (H3l + dl);
            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
            H4l = H4.low  = (H4l + el);
            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
            H5l = H5.low  = (H5l + fl);
            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
            H6l = H6.low  = (H6l + gl);
            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
            H7l = H7.low  = (H7l + hl);
            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            // Hash final blocks
            this._process();

            // Convert hash to 32-bit word array before returning
            var hash = this._hash.toX32();

            // Return final computed hash
            return hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        },

        blockSize: 1024/32
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA512('message');
     *     var hash = CryptoJS.SHA512(wordArray);
     */
    C.SHA512 = Hasher._createHelper(SHA512);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA512(message, key);
     */
    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
}());

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;

            // Clamp excess bits
            wordArray.clamp();

            // Convert
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }

            // Add padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }

            return base64Chars.join('');
        },

        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function (base64Str) {
            // Shortcuts
            var base64StrLength = base64Str.length;
            var map = this._map;

            // Ignore padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex != -1) {
                    base64StrLength = paddingIndex;
                }
            }

            // Convert
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }

            return WordArray.create(words, nBytes);
        },

        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
}());

var Exporter = (function() {
  'use strict';

  return {
    /**
     * @function
     * Google Closure Compiler helpers (used only to make the minified file smaller)
     * @param {string} publicPath
     * @param {*} object
     */ 
    exportSymbol: function(owner, publicPath, object) {
      var tokens = publicPath.split(".");
      var target = owner;
      for (var i = 0; i < tokens.length - 1; i++) {
        target = target[tokens[i]];
      }
      this.exportProperty(target, tokens[tokens.length - 1], object);
    },
    
    /**
     * @function
     * Google Closure Compiler helpers (used only to make the minified file smaller)
     * @param {Object} owner
     * @param {string} publicName
     * @param {*} object
     */
    exportProperty: function(owner, publicName, object) {
      owner[publicName] = object;
    }
    
  };
})();
var Logger = (function () {
  'use strict';

  var console = window['console'];

  var DEBUG = 3, INFO = 2, WARN = 1, ERROR = 0;
  /**
   * @private
   * @memberOf Logger#
   */
  var level = INFO;

  /**
   * @private
   * @memberOf Logger#
   */
  var _formatLog = function (pattern, args) {
    return pattern.replace(/{(\d+)}/g, function (match, number) {
      var replaced;
      if (args[number] && typeof args[number] === 'object' && args[number] instanceof Error) {
        try {
          replaced = args[number]['message'];
          if (args[number]['stack']) {
            console.error(args[number]['stack']);
          }
        } catch (error) {
          replaced = args[number];
        }
      } else if (args[number] && typeof args[number] === 'object') {
        try {
          if (args[number].toString !== Object.prototype.toString) {
            replaced = args[number].toString();
          } else {
            replaced = JSON.stringify(args[number]);
          }
        } catch (error) {
          replaced = args[number];
        }
      } else if (args[number] && typeof args[number] === 'function') {
        replaced = 'function';
      } else if (args[number]) {
        replaced = args[number];
      } else {
        replaced = match;
      }
      var replacedString = '' + replaced;
      return replacedString.substring(0, Math.min(500, replacedString.length));
    });
  };

  /**
   * @namespace
   */
  return {
    /**
     * @memberOf Logger#
     * @constant {number}
     */
    DEBUG: DEBUG,
    /**
     * @memberOf Logger#
     * @constant {number}
     */
    INFO: INFO,
    /**
     * @memberOf Logger#
     * @constant {number}
     */
    WARN: WARN,
    /**
     * @memberOf Logger#
     * @constant {number}
     */
    ERROR: ERROR,

    /**
     * @memberOf Logger#
     * @param {number} newLevel
     */
    setLevel: function (newLevel) {
      level = newLevel;
    },
    /**
     * @memberOf Logger#
     */
    debug: function () {
      if (level >= DEBUG && console && console.log) {
        console.log(_formatLog(arguments[0], Array.prototype.slice.call(arguments, 1)));
      }
    },
    /**
     * @memberOf Logger#
     */
    info: function () {
      if (level >= INFO && console && console.info) {
        console.info(_formatLog(arguments[0], Array.prototype.slice.call(arguments, 1)));
      }
    },
    /**
     * @memberOf Logger#
     */
    warn: function () {
      if (level >= WARN && console && console.warn) {
        console.warn(_formatLog(arguments[0], Array.prototype.slice.call(arguments, 1)));
      }
    },
    /**
     * @memberOf Logger#
     */
    error: function () {
      if (level >= ERROR && console && console.error) {
        console.error(_formatLog(arguments[0], Array.prototype.slice.call(arguments, 1)));
      }
    }
  };
})();
var SessionStorage = (function() {
  'use strict';

  try {
    return window['sessionStorage'];
  } catch(e) {
    return undefined;
  }
})();

var Preconditions = (function (Logger) {
  'use strict';

  return {
    /**
     * @memberOf Preconditions#
     * check if the value is not null
     * @param {*} value
     * @param {string} message
     */
    checkNotNull: function (value, message) {
      if (typeof value === 'undefined' || value === null) {
        if (message) {
          throw new Error(message);
        } else {
          throw new Error('value cannot be null');
        }
      }
      return value;
    },

    /**
     * @memberOf Preconditions#
     * log deprecated warning
     * @param {string} functionName
     * @param {string} message
     */
    deprecated: function (functionName, message) {
      this.checkNotNull(functionName, 'functionName cannot be null');
      this.checkNotNull(message, 'message cannot be null');

      Logger.warn("Deprecated: function '{0}' is deprecated because '{1}'.", functionName, message);

    },

    /**
     * @memberOf Preconditions#
     * check is the provided expression is true
     * @param {*} expression
     * @param {string} message
     */
    checkState: function (expression, message) {
      if (!expression) {
        if (message) {
          throw new Error(message);
        } else {
          throw new Error('expression is not valid');
        }
      }
    },

    /**
     * @memberOf Preconditions#
     * check is the argument matches the expression
     * @param {*} expression
     * @param {string} message
     */
    checkArgument: function (expression, message) {
      if (!expression) {
        if (message) {
          throw new Error(message);
        } else {
          throw new Error('expression is not valid');
        }
      }
    }
  };
})(Logger);

function Listeners(bind) {
    Preconditions.checkNotNull(bind, "bind cannot be null");

    this._bind      = bind;
    this._listeners = [];
}
  
Listeners.prototype = {
    /**
    * @memberOf Listeners#
    */
    fire: function() {
        var listeners = this._listeners.slice(); // copy to prevent concurrent modifications
        for(var i = 0, length = listeners.length; i < length; i++) {
            try {
                var listener = listeners[i];
                if(listener) {
                    listener.apply(this._bind, arguments);
                }
            } catch(error) {
                Logger.error("Unable to forward event: {0}", error);
            }
        }
    },
    /**
    * @memberOf Listeners#
    * @param {Function} listener
    */
    add: function(listener) {
        Preconditions.checkNotNull(listener, "listener cannot be null");
        Preconditions.checkState(this._listeners.indexOf(listener) == -1, "listener already exists");
        this._listeners.push(listener);
    },
    /**
    * @memberOf Listeners#
    * @param {Function} listener
    */
    remove: function(listener) {
        Preconditions.checkNotNull(listener, "listener cannot be null");
        var indexOf = this._listeners.indexOf(listener);
        Preconditions.checkState(indexOf >= 0, "listener not exists");
        this._listeners.splice(indexOf, 1);
    }
};

function StreamdataEventSource(url, headers) {
    Preconditions.checkNotNull(url, 'url cannot be null.');
    headers = headers || [];

    var self = this;
    self.streamdataConfig = {
                    'PROTOCOL': 'https://',
                    'HOST': 'streamdata.motwin.net',
                    'PORT': ''
                    };
    self.keyFile = "/streamdataio.json";

    self._sse = null;
    self._isConnected = false;
    self._url = url;
    self._openListeners      = new Listeners(self);
    self._dataListeners      = new Listeners(self);
    self._patchListeners     = new Listeners(self);
    self._errorListeners     = new Listeners(self);
    self._monitorListeners   = new Listeners(self);
    self._auth = false;
    self._headers = headers;
    self._defaultErrorMessage = {
        'type': 'UnknownError',
        'status': 1000,
        'message': 'An error occurs. Please check your console logs for more details.',
        'source': 'server'
    };

    self.open = function() {
        Preconditions.checkNotNull(self._url, 'url cannot be null');
        self.close();
        var decoratedUrl = self._decorate(self._url, self._headers);
        
        if (decoratedUrl) {
            if(typeof EventSource === "undefined") {
                console.log("EVS Polyfilled");
                self._sse = new EventSourcePolyfill(decoratedUrl);
            } else {
                console.log("EVS not polyfilled");
                self._sse = new EventSource(decoratedUrl);
            }

            console.log(self._sse);

            self._sse.addEventListener('open', function (event) {
                Logger.debug('SSE Stream Opened to ' + self._url + "event: " + JSON.stringify(event));
                self._isConnected = true;
                self._openListeners.fire();
            });

            self._sse.addEventListener('error', function (event) {
                Logger.debug('Error with SSE at ' + event + ': closing the stream.');
                self._sse.close();
                self._isConnected = false;
                self._errorListeners.fire(self._buildErrorMessage(event, true));
            });

            self._sse.addEventListener('data', function (event) {
                Logger.debug('Received data:' + event.data);
                self._dataListeners.fire(JSON.parse(event.data));
            });

            self._sse.addEventListener('patch', function (event) {
                Logger.debug('Received patch:' + event.data);
                self._patchListeners.fire(JSON.parse(event.data));
            });

            self._sse.addEventListener('monitor', function (event) {
                Logger.debug('Received monitor:' + event.data);
                self._monitorListeners.fire(JSON.parse(event.data));
            });
        }
        return this;
    };

    self.close = function() {
        if (self._isConnected && self._sse !== null) {
            Logger.info('Closing the SSE Stream.');
            self._sse.close();
            self._isConnected = false;
        }
        return this;
    };


    /*
    * Resolve build a 3 strings array containing key pair with
    * [beacon , realpk, realPk]
    * if keypair not found ['','',''] is returned
    */
    self._resolve = function() {
        var Pk = null;

        self._auth = false;

        // 1 - check locally if configured into SessionStorage
        var PkFromSessionStorage = self._getPkFromSessionStorage();
        if (PkFromSessionStorage) {
            try {
                Pk = JSON.parse(PkFromSessionStorage);
            } catch (error) {
            }
        }

        if (! Pk){
            // 2 - check remotely from file if not resolved yet
            try {
                var PkFromFile = self._getPkFromFile(self.keyFile);
                if (PkFromFile) {
                    Pk = JSON.parse(PkFromFile);
                }
            } catch (error) {
            }
        }

        if (! Pk) {
            // 3- check keypair from source code
            if (!self.isEmpty(streamdataio.pk) && !self.isEmpty(streamdataio.Pk)){
                Pk = {"Pk": "", "pk": ""};
                Pk.pk = streamdataio.pk;
                Pk.Pk = streamdataio.Pk;
            }
        }

        return self._decrypt(Pk);
    };

    self._decrypt = function(Pk){
        var Pks = ['','',''];

        if (Pk) {
            // a - decode bas64
            try {
                var words = CryptoJS.enc.Base64.parse(Pk.pk);
                var decryptedPlainText = CryptoJS.enc.Utf8.stringify(words);

                // 3 - if keypair: auth activated
                if (decryptedPlainText.length == 72) {
                    self._auth = true;
                    self._setPkToSessionStorage(JSON.stringify(Pk));
                    Pks = [decryptedPlainText.substring(0, 36), decryptedPlainText.substring(36), Pk.Pk];
                }
            } catch (error) {
                self._removePkFromSessionStorage();
            }
        }

        return Pks;
    };

    self._decorate = function(url, headers) {
        Preconditions.checkNotNull(url, 'url cannot be null');
        headers = headers || [];

       // var parser = document.createElement('a');
        //parser.href = url;

        var queryParams = '';

        // get http access crendentials if specified
        var credentialsRegex = /\/\/(.*@)/g;
        var matches = credentialsRegex.exec(url);
        var htaccessCredentials = matches ? htaccessCredentials = matches[1] : "";
        console.log("HEY");
       // console.log(JSON.stringify(parser));
       // console.log("Protocol : " + parser.protocol );
       // console.log("Hostname : " + parser.hostname);
       // console.log("Pathname : " + parser.pathname);
       // console.log("href : " + parser.href);

        var urlToEncode = url;
        //var urlToEncode = parser.protocol + '//' + htaccessCredentials +  parser.hostname + ((parser.pathname.indexOf('/') == 0) ? '' : '/') + parser.pathname + parser.search;
        var streamDataQueryParams = self._buildStreamDataQueryParams(urlToEncode, headers);

        if (streamDataQueryParams.length > 0) {
         // queryParams = ((parser.search.indexOf('?') === -1) ? '?' : '&' ) + streamDataQueryParams.join('&');
         queryParams ="?" +streamDataQueryParams.join('&') ;
        }

        var streamdataUrl = self.streamdataConfig.PROTOCOL
            + self.streamdataConfig.HOST + (self.isEmpty(self.streamdataConfig.PORT) ? '' : ':') + self.streamdataConfig.PORT
            + '/' + urlToEncode + queryParams;

        Logger.debug("converted url :" + streamdataUrl);

        return streamdataUrl;

    };

    self._buildStreamDataQueryParams = function(url, headers) {
      headers = headers || [];

      var headersParams = self._buildHeadersAsQueryParams(headers);
      //console.log("_buildStreamDataQueryParams: " + headers);
      //console.log("_buildStreamDataQueryParams: " + headersParams);
      var authParams = self._buildAuthQueryParams(url);

      return headersParams.concat(authParams);
    };

    self._buildAuthQueryParams = function(url) {
      var queryParams = [];

      //  get keys
      var k = self._resolve();

      if (self._auth){
            // 1 - create url to encode
            var urlToEncode = url;

            var X_AUTH_SD_PUBLIC_KEY  = 'X-Auth-Sd-Pk';
            var X_AUTH_SD_SIGNATURE   = 'X-Auth-Sd-S';
            var X_AUTH_SD_TIMESTAMP   = 'X-Auth-Sd-Ts';

            // 2 - generate timestamp
            var timestamp = '' + Date.now();

            // 3 - build signature
            var stringtosign = 'GET\n' +
            timestamp + '\n' +
            urlToEncode + '\n';

            // 4 - sign

            // 4 - a - the real signature
            var wordSignature = CryptoJS.HmacSHA512(stringtosign, k[1]);
            var signatureAsString = CryptoJS.enc.Base64.stringify(wordSignature);
            var signatureAndPk = k[0] + signatureAsString;
            var wordsignatureAndPk = CryptoJS.enc.Utf8.parse(signatureAndPk);
            var signature = CryptoJS.enc.Base64.stringify(wordsignatureAndPk);

            // 5 - create auth params
            queryParams.push(X_AUTH_SD_PUBLIC_KEY + '=' + encodeURIComponent(k[2]));
            queryParams.push(X_AUTH_SD_TIMESTAMP + '=' + encodeURIComponent(timestamp));
            queryParams.push(X_AUTH_SD_SIGNATURE + '=' + encodeURIComponent(signature));

        }

        return queryParams;
    };

    self._buildHeadersAsQueryParams = function(headers) {
      headers = headers || [];
      //console.log("_buildHeadersAsQueryParams: " + headers);
      return headers.map(function(item) {
        return 'X-Sd-Header=' + encodeURIComponent(item);
      });
    };

    /*
    * returns Pk from SessionStorage or null if not found
    */
    self._getPkFromSessionStorage = function() {
        if (SessionStorage && streamdataio.sessionStore) {
            return SessionStorage.getItem(self._getPkKey());
        }
        return null;
    };

    /*
    * sets Pk in SessionStorage.
    */
    self._setPkToSessionStorage = function(Pk) {
        if (SessionStorage && streamdataio.sessionStore) {
            SessionStorage.setItem(self._getPkKey(), Pk);
        }
    };

    /*
    * remove the key from session storage
     */
    self._removePkFromSessionStorage = function(){
        if (SessionStorage) {
            SessionStorage.removeItem(self._getPkKey());
        }
    };

    /*
    * returns Pk from file or null if file not found
    */
    self._getPkFromFile = function (source) {

        var Pk = "";
        var request = new XMLHttpRequest();
        request.open('GET', source, false);  // `false` makes the Ajax request synchronous
        request.send(null);

        if (request.status === 200) {
            Pk = request.responseText;
        }

        return Pk;

    };

    self._getPkKey = function () {
        // hidden key used to store Pk in SessionStorage "_Pk" :
        // "_" : 95
        // "P" : 80
        // "k" : 107
        return String.fromCharCode(95)
                + String.fromCharCode(80)
                + String.fromCharCode(107);

    };


    self._buildErrorMessage = function (event, isFatal) {
        Preconditions.checkNotNull(event, 'event cannot be null');


        var err =  self._defaultErrorMessage;
        try {
            var exception = JSON.parse(event.data);

            err.type = exception['cause'];
            err.message = exception['message'];
            err.status = exception['status'];

        } catch (error) {
            err= self._defaultErrorMessage;
        }
        err.source = 'server';

        console.log(JSON.stringify(err));

        return new StreamdataError(err.type, err.message, err.status, err.source,  isFatal);
    };
    
    self.isEmpty =  function (str) {
        return (!str || 0 === str.length);
    };
}

StreamdataEventSource.prototype = {

    onOpen: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._openListeners.add(listener);
        return this;
    },

    onError: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._errorListeners.add(listener);
        return this;
    },

    onData: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._dataListeners.add(listener);
        return this;
    },

    onPatch: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._patchListeners.add(listener);
        return this;
    },

    onMonitor: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._monitorListeners.add(listener);
        return this;
    },

    offOpen: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._openListeners.remove(listener);
        return this;
    },

    offError: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._errorListeners.remove(listener);
        return this;
    },

    offData: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._dataListeners.remove(listener);
        return this;
    },

    offPatch: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._patchListeners.remove(listener);
        return this;
     },

    offMonitor: function(listener){
        Preconditions.checkNotNull(listener, 'listener cannot be null');
        this._monitorListeners.remove(listener);
        return this;
    },

    isConnected: function(){
        return this._isConnected;
    }

};

/**
* @constructor
* @param {string} source
* @param {string} type
* @param {string} message
* @param {Object} error
* @param {(boolean|undefined)} isFatal
*/
function StreamdataError(type, message, status, source, isFatal) {
    this._source  = source;
    this._type    = type;
    this._message = message;
    this._fatal   = isFatal || false;
    this._status  = status;

    Exporter.exportProperty(this, "source", this._source);
    Exporter.exportProperty(this, "type", this._type);
    Exporter.exportProperty(this, "message", this._message);
    Exporter.exportProperty(this, "status", this._status);

}
  
StreamdataError.prototype = {

    /**
    * @memberOf StreamdataError#
    * @return {boolean} true if error is fatal.
    */
    isFatal: function() {
        return this._fatal;
    },
    /**
    * @memberOf StreamdataError#
    * @return {boolean} true if error is from server side.
    */
    isServer: function() {
        return this._source == "server";
    },
    /**
    * @memberOf StreamdataError#
    * @return {boolean} true if error is from client side.
    */
    isClient: function() {
        return this._source == "client";
    },
    /**
    * @memberOf StreamdataError#
    * @return {string} the message that explains the cause of the error.
    */
    getMessage: function() {
        return this._message;
    },
    /**
     * @memberOf StreamdataError#
     * @return {(Object|undefined)} the status value of the error object from the server (error object sent by the server) or from the client (Javascript exception thrown).
     */
    getStatus: function() {
        return this._status;
    },
    /**
     * @memberOf StreamdataError#
     * @return {(Object|undefined)} the type value of the error object from the server (error object sent by the server) or from the client (Javascript exception thrown).
     */
    getType: function() {
        return this._type;
    }

};


/**
* Streamdata.io JavaScript SDK
*/

/**
* <p>Create a new instance of the StreamDataEventSource prototype.</p>
*
* <p>The StreamDataEventSource is the main entry point for establishing Server Sent Event connection to remote server.</p>
*
* @param {String} url The targeted REST URI is formatted as follow:
* @param {Array} headers Any specific headers that have to be passed in the query:
* <pre><code>
* protocol://url(:port)(/localpath(?queryparameters))
* </code></pre>
*
* @returns {StreamDataEventSource}
*/
//(function() {
function createEventSource(url, headers) {
    Preconditions.checkNotNull(url, 'url cannot be null');
    headers = headers || [];

    if( !(url.lastIndexOf('http://', 0) == 0)
        &&
        !(url.lastIndexOf('https://', 0) == 0)) {
        // if no valid protocol typed in then add default (http://) : if no protocol defined,
        // url is considered as relative.
        url = 'http://' + url;
        Logger.warn('url has no default protocol defined. Add http:// as a default protocol.');
    }

    return new StreamdataEventSource(url, headers);
}

function Streamdata() {
    var self = this;
    self.sessionStore = false;
}

/**
 * @export
 */
var streamdataio = new Streamdata();

// Logger exports
Exporter.exportProperty(streamdataio, 'Logger', Logger);
Exporter.exportProperty(Logger, 'DEBUG', Logger.DEBUG);
Exporter.exportProperty(Logger, 'INFO', Logger.INFO);
Exporter.exportProperty(Logger, 'WARN', Logger.WARN);
Exporter.exportProperty(Logger, 'ERROR', Logger.ERROR);
Exporter.exportProperty(Logger, 'setLevel', Logger.setLevel);
Exporter.exportProperty(Logger, 'debug', Logger.debug);
Exporter.exportProperty(Logger, 'info', Logger.info);
Exporter.exportProperty(Logger, 'warn', Logger.warn);
Exporter.exportProperty(Logger, 'error', Logger.error);

// streamdataio static methods exports
Exporter.exportProperty(streamdataio, 'createEventSource', createEventSource);

// StreamdataError instance methods exports
Exporter.exportProperty(StreamdataError.prototype, 'isFatal', StreamdataError.prototype.isFatal);
Exporter.exportProperty(StreamdataError.prototype, 'isServer', StreamdataError.prototype.isServer);
Exporter.exportProperty(StreamdataError.prototype, 'isClient', StreamdataError.prototype.isClient);
Exporter.exportProperty(StreamdataError.prototype, 'getMessage', StreamdataError.prototype.getMessage);
Exporter.exportProperty(StreamdataError.prototype, 'getStatus', StreamdataError.prototype.getStatus);
Exporter.exportProperty(StreamdataError.prototype, 'getType', StreamdataError.prototype.getType);

// StreamdataEventSource instance methods exports
Exporter.exportProperty(StreamdataEventSource.prototype, 'open', StreamdataEventSource.prototype.connect);
Exporter.exportProperty(StreamdataEventSource.prototype, 'onOpen', StreamdataEventSource.prototype.onOpen);
Exporter.exportProperty(StreamdataEventSource.prototype, 'onError', StreamdataEventSource.prototype.onError);
Exporter.exportProperty(StreamdataEventSource.prototype, 'onData', StreamdataEventSource.prototype.onData);
Exporter.exportProperty(StreamdataEventSource.prototype, 'onPatch', StreamdataEventSource.prototype.onPatch);
Exporter.exportProperty(StreamdataEventSource.prototype, 'onMonitor', StreamdataEventSource.prototype.onMonitor);

Exporter.exportProperty(StreamdataEventSource.prototype, 'offOpen', StreamdataEventSource.prototype.offOpen);
Exporter.exportProperty(StreamdataEventSource.prototype, 'offError', StreamdataEventSource.prototype.offError);
Exporter.exportProperty(StreamdataEventSource.prototype, 'offData', StreamdataEventSource.prototype.offData);
Exporter.exportProperty(StreamdataEventSource.prototype, 'offPatch', StreamdataEventSource.prototype.offPatch);
Exporter.exportProperty(StreamdataEventSource.prototype, 'offMonitor', StreamdataEventSource.prototype.offMonitor);

Exporter.exportProperty(StreamdataEventSource.prototype, 'isConnected', StreamdataEventSource.prototype.isConnected);/* END INCLUDE STEAMDATA.IO */


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

  // Streamdata authentication
  streamdataio.Pk =  "OGUyNmE3YmEtZTljMy00NWViLWFlODQtMTdlMTY3ODEzNmE1" /* TODO : Paste your streamdata.io TOKEN here */;
  streamdataio.pk = "OGE3NzU3ODUtNGRiOS00MWRkLThiMjMtM2M0ZTA5MzkzYjUzODk3YTZlNTItMmNhOC00NDBkLTljMzctZjU1ZmZkMmE0NWZm" /* TODO : (optionnal) Paste your streamdata.io PRIVATE KEY here */;

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

