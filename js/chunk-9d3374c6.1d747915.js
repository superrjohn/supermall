(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d3374c6"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),o=n("da84"),i=n("c65b"),s=n("e330"),c=n("1626"),a=n("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=o.Error,l=s(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return l(this,t);var n=i(e,this,t);if(null!==n&&!a(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"0a06":function(t,e,n){"use strict";var r=n("2444"),o=n("c532"),i=n("f6b4"),s=n("5270");function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"===typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(r,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}})),o.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}})),t.exports=c},"0c6c":function(t,e,n){},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1bab":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r);function i(t){var e=o.a.create({baseURL:"http://152.136.185.210:7878/api/hy66",timeout:5e3});return e.interceptors.request.use((function(t){return t}),(function(t){console.log(t)})),e.interceptors.response.use((function(t){return t.data}),(function(t){console.log(t)})),e(t)}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e)&&(t=n("b50d")),t}var a={adapter:c(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){a.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){a.headers[t]=r.merge(i)})),t.exports=a}).call(this,n("f28c"))},"25f0":function(t,e,n){"use strict";var r=n("e330"),o=n("5e77").PROPER,i=n("6eeb"),s=n("825a"),c=n("3a9b"),a=n("577e"),u=n("d039"),f=n("ad6d"),l="toString",d=RegExp.prototype,p=d[l],h=r(f),m=u((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),v=o&&p.name!=l;(m||v)&&i(RegExp.prototype,l,(function(){var t=s(this),e=a(t.source),n=t.flags,r=a(void 0===n&&c(d,t)&&!("flags"in d)?h(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2c3e":function(t,e,n){var r=n("da84"),o=n("83ab"),i=n("9f7f").UNSUPPORTED_Y,s=n("c6b6"),c=n("9bf2").f,a=n("69f3").get,u=RegExp.prototype,f=r.TypeError;o&&i&&c(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!a(this).sticky;throw f("Incompatible receiver, RegExp required")}}})},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},"2d9a":function(t,e,n){"use strict";n("0c6c")},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},"462b":function(t,e,n){"use strict";n("b21b")},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4d63":function(t,e,n){var r=n("83ab"),o=n("da84"),i=n("e330"),s=n("94ca"),c=n("7156"),a=n("9112"),u=n("9bf2").f,f=n("241c").f,l=n("3a9b"),d=n("44e7"),p=n("577e"),h=n("ad6d"),m=n("9f7f"),v=n("6eeb"),g=n("d039"),A=n("1a2d"),b=n("69f3").enforce,y=n("2626"),x=n("b622"),w=n("fce3"),E=n("107c"),T=x("match"),C=o.RegExp,I=C.prototype,R=o.SyntaxError,D=i(h),P=i(I.exec),S=i("".charAt),N=i("".replace),L=i("".indexOf),j=i("".slice),k=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,U=/a/g,q=/a/g,O=new C(U)!==U,z=m.UNSUPPORTED_Y,B=r&&(!O||z||w||E||g((function(){return q[T]=!1,C(U)!=U||C(q)==q||"/a/i"!=C(U,"i")}))),H=function(t){for(var e,n=t.length,r=0,o="",i=!1;r<=n;r++)e=S(t,r),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),o+=e):o+="[\\s\\S]":o+=e+S(t,++r);return o},F=function(t){for(var e,n=t.length,r=0,o="",i=[],s={},c=!1,a=!1,u=0,f="";r<=n;r++){if(e=S(t,r),"\\"===e)e+=S(t,++r);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:P(k,j(t,r+1))&&(r+=2,a=!0),o+=e,u++;continue;case">"===e&&a:if(""===f||A(s,f))throw new R("Invalid capture group name");s[f]=!0,i[i.length]=[f,u],a=!1,f="";continue}a?f+=e:o+=e}return[o,i]};if(s("RegExp",B)){for(var W=function(t,e){var n,r,o,i,s,u,f=l(I,this),h=d(t),m=void 0===e,v=[],g=t;if(!f&&h&&m&&t.constructor===W)return t;if((h||l(I,t))&&(t=t.source,m&&(e="flags"in g?g.flags:D(g))),t=void 0===t?"":p(t),e=void 0===e?"":p(e),g=t,w&&"dotAll"in U&&(r=!!e&&L(e,"s")>-1,r&&(e=N(e,/s/g,""))),n=e,z&&"sticky"in U&&(o=!!e&&L(e,"y")>-1,o&&(e=N(e,/y/g,""))),E&&(i=F(t),t=i[0],v=i[1]),s=c(C(t,e),f?this:I,W),(r||o||v.length)&&(u=b(s),r&&(u.dotAll=!0,u.raw=W(H(t),n)),o&&(u.sticky=!0),v.length&&(u.groups=v)),t!==g)try{a(s,"source",""===g?"(?:)":g)}catch(A){}return s},X=function(t){t in W||u(W,t,{configurable:!0,get:function(){return C[t]},set:function(e){C[t]=e}})},M=f(C),V=0;M.length>V;)X(M[V++]);I.constructor=W,W.prototype=I,v(o,"RegExp",W)}y("RegExp")},"5087e":function(t,e,n){"use strict";n("b9be")},5270:function(t,e,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),s=n("2444"),c=n("d925"),a=n("e683");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!c(t.url)&&(t.url=a(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("e330"),o=n("1d80"),i=n("577e"),s=n("5899"),c=r("".replace),a="["+s+"]",u=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(t){return function(e){var n=i(o(e));return 1&t&&(n=c(n,u,"")),2&t&&(n=c(n,f,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5d17":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"wrapper"},[n("div",{staticClass:"content"},[t._t("default")],2)])},o=[],i=(n("a9e3"),n("1fba")),s={name:"Scroll",props:{probeType:{type:Number,default:0},pullUpLoad:{type:Boolean,default:!1}},data:function(){return{scroll:null}},mounted:function(){var t=this;this.scroll=new i["a"](this.$refs.wrapper,{click:!0,probeType:this.probeType,pullUpLoad:this.pullUpLoad}),2!==this.probeType&&3!==this.probeType||this.scroll.on("scroll",(function(e){t.$emit("scroll",e)})),this.pullUpLoad&&this.scroll.on("pullingUp",(function(){t.$emit("pullingUp")}))},methods:{scrollTo:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;this.scroll&&this.scroll.scrollTo(t,e,n)},refresh:function(){console.log("---"),this.scroll&&this.scroll.refresh()},finishPullUp:function(){this.scroll&&this.scroll.finishPullUp()},getScrollY:function(){return this.scroll?this.scroll.y:0}}},c=s,a=n("2877"),u=Object(a["a"])(c,r,o,!1,null,"bb7cf8f2",null);e["a"]=u.exports},"684a":function(t,e){t.exports="data:image/png;base64,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"},"6d71":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t){return n("good-list-item",{attrs:{"goods-item":t}})})),1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item",on:{click:t.itemClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImage,expression:"showImage"}],attrs:{alt:""},on:{load:t.imageLoad}}),n("div",{staticClass:"goods-info"},[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),n("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},s=[],c={name:"GoodListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{imageLoad:function(){this.$bus.$emit("itemImageLoad")},itemClick:function(){this.$router.push("/detail/"+this.goodsItem.iid)}}},a=c,u=(n("462b"),n("2877")),f=Object(u["a"])(a,i,s,!1,null,"3b087b33",null),l=f.exports,d={name:"GoodsList",components:{GoodListItem:l},props:{goods:{type:Array,default:function(){return[]}}}},p=d,h=(n("e469"),Object(u["a"])(p,r,o,!1,null,"11684430",null));e["a"]=h.exports},7156:function(t,e,n){var r=n("1626"),o=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var s,c;return i&&r(s=e.constructor)&&s!==n&&o(c=s.prototype)&&c!==n.prototype&&i(t,c),t}},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var c=[];c.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(i)&&c.push("domain="+i),!0===s&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7f8e":function(t,e,n){},"8df4":function(t,e,n){"use strict";var r=n("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},"90b9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0");function r(t,e){var n=null;return function(){for(var r=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,i)}),e)}}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var o=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?o:i(o))}return e}function i(t){return("00"+t).substr(t.length)}},"95c6":function(t,e,n){},a7ac:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},o=[],i={name:"NavBar"},s=i,c=(n("af66"),n("2877")),a=Object(c["a"])(s,r,o,!1,null,"e4895ef4",null);e["a"]=a.exports},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("e330"),s=n("94ca"),c=n("6eeb"),a=n("1a2d"),u=n("7156"),f=n("3a9b"),l=n("d9b5"),d=n("c04e"),p=n("d039"),h=n("241c").f,m=n("06cf").f,v=n("9bf2").f,g=n("408a"),A=n("58a8").trim,b="Number",y=o[b],x=y.prototype,w=o.TypeError,E=i("".slice),T=i("".charCodeAt),C=function(t){var e=d(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,n,r,o,i,s,c,a,u=d(t,"number");if(l(u))throw w("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=A(u),e=T(u,0),43===e||45===e){if(n=T(u,2),88===n||120===n)return NaN}else if(48===e){switch(T(u,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(i=E(u,2),s=i.length,c=0;c<s;c++)if(a=T(i,c),a<48||a>o)return NaN;return parseInt(i,r)}return+u};if(s(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var R,D=function(t){var e=arguments.length<1?0:y(C(t)),n=this;return f(x,n)&&p((function(){g(n)}))?u(Object(e),n,D):e},P=r?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;P.length>S;S++)a(y,R=P[S])&&!a(D,R)&&v(D,R,m(y,R));D.prototype=x,x.constructor=D,c(o,b,D)}},af66:function(t,e,n){"use strict";n("f706")},b21b:function(t,e,n){},b50d:function(t,e,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),s=n("c345"),c=n("3934"),a=n("2d83");t.exports=function(t){return new Promise((function(e,u){var f=t.data,l=t.headers;r.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",h=t.auth.password||"";l.Authorization="Basic "+btoa(p+":"+h)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};o(e,u,i),d=null}},d.onerror=function(){u(a("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n("7aac"),v=(t.withCredentials||c(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;v&&(l[t.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(l,(function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)})),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(g){if("json"!==t.responseType)throw g}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),u(t),d=null)})),void 0===f&&(f=null),d.send(f)}))}},b9be:function(t,e,n){},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),o=n("c7ce"),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function c(t){return"[object ArrayBuffer]"===i.call(t)}function a(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function f(t){return"string"===typeof t}function l(t){return"number"===typeof t}function d(t){return"undefined"===typeof t}function p(t){return null!==t&&"object"===typeof t}function h(t){return"[object Date]"===i.call(t)}function m(t){return"[object File]"===i.call(t)}function v(t){return"[object Blob]"===i.call(t)}function g(t){return"[object Function]"===i.call(t)}function A(t){return p(t)&&g(t.pipe)}function b(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function E(){var t={};function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=E(t[n],e):t[n]=e}for(var n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function T(t,e,n){return w(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}t.exports={isArray:s,isArrayBuffer:c,isBuffer:o,isFormData:a,isArrayBufferView:u,isString:f,isNumber:l,isObject:p,isUndefined:d,isDate:h,isFile:m,isBlob:v,isFunction:g,isStream:A,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:w,merge:E,extend:T,trim:y}},c607:function(t,e,n){var r=n("da84"),o=n("83ab"),i=n("fce3"),s=n("c6b6"),c=n("9bf2").f,a=n("69f3").get,u=RegExp.prototype,f=r.TypeError;o&&i&&c(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!a(this).dotAll;throw f("Incompatible receiver, RegExp required")}}})},c7ce:function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},cee4:function(t,e,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),s=n("2444");function c(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var a=c(s);a.Axios=i,a.create=function(t){return c(r.merge(s,t))},a.Cancel=n("7a77"),a.CancelToken=n("8df4"),a.isCancel=n("2e67"),a.all=function(t){return Promise.all(t)},a.spread=n("0df6"),t.exports=a,t.exports.default=a},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",(function(){return t._l(t.slideCount,(function(e,r){return n("div",{key:r,staticClass:"indi-item",class:{active:r===t.currentIndex-1}})}))})):t._e()],2)],2)},o=[],i=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),3e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),r=e[this.slideCount-1].cloneNode(!0);t.insertBefore(r,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),s=i,c=(n("edd7"),n("2877")),a=Object(c["a"])(s,r,o,!1,null,"74bc849b",null),u=a.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},l=[],d={name:"Slide"},p=d,h=(n("5087e"),Object(c["a"])(p,f,l,!1,null,null,null)),m=h.exports},e469:function(t,e,n){"use strict";n("95c6")},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},edd7:function(t,e,n){"use strict";n("7f8e")},eecb:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n("90b9"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-top"},[r("img",{attrs:{src:n("684a"),alt:""}})])}],s={name:"BackTop"},c=s,a=(n("2d9a"),n("2877")),u=Object(a["a"])(c,o,i,!1,null,"05717806",null),f=u.exports,l={data:function(){return{itemImgListener:null}},mounted:function(){var t=Object(r["a"])(this.$refs.scroll.refresh,100);this.itemImgListener=function(){t()},this.$bus.$on("itemImgLoad",this.itemImgListener),console.log("我是混入內容")}},d={components:{BackTop:f},data:function(){return{isShowBackTop:!1}},methods:{backClick:function(){this.$refs.scroll.scrollTo(0,0,300)}}}},f28c:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function a(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(t){r=s}})();var u,f=[],l=!1,d=-1;function p(){l&&u&&(l=!1,u.length?f=u.concat(f):d=-1,f.length&&h())}function h(){if(!l){var t=c(p);l=!0;var e=f.length;while(e){u=f,f=[];while(++d<e)u&&u[d].run();d=-1,e=f.length}u=null,l=!1,a(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new m(t,e)),1!==f.length||l||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},f6b4:function(t,e,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},f706:function(t,e,n){}}]);
//# sourceMappingURL=chunk-9d3374c6.1d747915.js.map