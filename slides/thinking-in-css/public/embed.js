!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){var r=window.iframely=window.iframely||{};r.config=r.config||{},e.exports=r},function(e,t,r){var i=r(0),n=r(2);i.on("init",function(){i.extendOptions(function(){for(var e=document.querySelectorAll('script[src*="embed.js"], script[src*="iframely.js"]'),t=0;t<e.length;t++){var r=e[t].getAttribute("src").replace(/&amp;/gi,"&");if(i.SCRIPT_RE.test(r)){var n=s(r,i.SUPPORTED_QUERY_STRING.concat("cdn")),a=r.match(i.CDN_RE);if((a||n.cdn)&&(i.CDN=n.cdn||a[1]),Object.keys(n).length>0)return n}}return{}}()),function(){var e=document.getElementById("iframely-styles");if(!e){var t=".iframely-responsive{top:0;left:0;width:100%;height:0;position:relative;padding-bottom:56.25%;box-sizing:border-box;}.iframely-responsive>*{top:0;left:0;width:100%;height:100%;position:absolute;border:0;box-sizing:border-box;}";(e=document.createElement("style")).id="iframely-styles",e.type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e)}}(),function(e){for(var t=document.querySelectorAll('iframe[src*="'+(e||i.DOMAINS).join('"], iframe[src*="')+'"]'),r=0;r<t.length;r++){var a=t[r],o=a.src;(o.match(/^(https?:)?\/\/[^\/]+\/api\/iframe\?.+/)||o.match(/^(https?:)?\/\/[^\/]+\/\w+(\?.*)?$/))&&n.postMessage({method:"getSize"},"*",a.contentWindow)}}(i.DOMAINS.concat(i.CDN.replace(/^https?:\/\//,"")))}),i.load=function(){var e=Array.prototype.slice.call(arguments);e.unshift("load"),i.trigger.apply(this,e)};var a=t.getIframeWrapper=function(e,t){var r=e.parentNode;if(!(!r||"DIV"!==r.nodeName||d(r)>2||t&&r.getAttribute("class")!==i.ASPECT_WRAPPER_CLASS||!t&&"relative"!==r.style.position&&r.getAttribute("class")!==i.ASPECT_WRAPPER_CLASS)){var n=r.parentNode;if(!(!n||"DIV"!==n.nodeName||d(n)>1||t&&n.getAttribute("class")!==i.MAXWIDTH_WRAPPER_CLASS||!t&&n.getAttribute("class")&&!n.getAttribute("class").match(/iframely/i)))return{aspectWrapper:r,maxWidthWrapper:n}}};t.addDefaultWrappers=function(e){var t=e.parentNode,r=document.createElement("div");r.className=i.MAXWIDTH_WRAPPER_CLASS;var n=document.createElement("div");return n.className=i.ASPECT_WRAPPER_CLASS,r.appendChild(n),t.insertBefore(r,e),{aspectWrapper:n,maxWidthWrapper:r}},t.getWidget=function(e){var t=a(e);if(t){var r={iframe:e,aspectWrapper:t.aspectWrapper,maxWidthWrapper:t.maxWidthWrapper};if("A"===e.nodeName&&e.hasAttribute("href"))r.url=e.getAttribute("href");else if(e.hasAttribute("src")&&/url=/.test(e.getAttribute("src"))){var i=s(e.getAttribute("src"));i.url&&(r.url=i.url)}return r}},i.getElementComputedStyle=function(e,t){return window.getComputedStyle&&window.getComputedStyle(e).getPropertyValue(t)},t.setStyles=function(e,t){e&&Object.keys(t).forEach(function(r){var n=t[r];("number"==typeof n||"string"==typeof n&&/^(\d+)?\.?(\d+)$/.test(n))&&(n+="px"),window.getComputedStyle&&(i.getElementComputedStyle(e,r)==n||"iframely-responsive"==e.className&&"paddingBottom"===r&&!e.style[r]&&/^56\.2\d+%$/.test(n))||(e.style[r]=n||"")})};var o=t.addQueryString=function(e,t){var r="";return Object.keys(t).forEach(function(i){var n=t[i];if("[object Array]"===Object.prototype.toString.call(n)){var a=n.map(function(e){return i+"="+encodeURIComponent(e)});r+="&"+a.join("&")}else void 0!==n&&-1===e.indexOf(i+"=")&&(!0===n&&(n=1),!1===n&&(n=0),r+="&"+i+"="+encodeURIComponent(n))}),e+(""!==r?(e.indexOf("?")>-1?"&":"?")+r.replace(/^&/,""):"")};function d(e){for(var t=0,r=0;r<e.childNodes.length;r++){var i=e.childNodes[r];if(i.nodeType===Node.TEXT_NODE){var n=i.textContent||i.innerText;(n=n.replace(/\s|\n/g,""))&&t++}else i.nodeType===Node.ELEMENT_NODE&&t++}return t}function c(e,t){for(var r,i=0;i<e.length;){if((r=e[i])==t)return!0;if(r&&r.test&&r.test(t))return!0;i++}}t.getEndpoint=function(e,t,r){var n=e;if(/^(https?:)?\/\//i.test(e)||(n=(t.CDN||i.CDN)+n,delete t.CDN),/^(?:https?:)?\/\//i.test(n)||(n="//"+n),t&&(n=o(n,t)),r&&r.length){for(var a={},d=Object.keys(i.config),s=0;s<d.length;s++){var l=d[s];c(r,l)&&(a[l]=i.config[l])}n=o(n,a)}return/^(https?:)?\/\//i.test(n)&&!n.match(/^(https?:)?\/\//i)[1]&&"file:"===document.location.protocol&&(n="http:"+n),n},i.extendOptions=function(e){e&&Object.keys(e).forEach(function(t){var r=0!==e[t]&&"0"!==e[t]&&!1!==e[t]&&"false"!==e[t]&&(1===e[t]||"1"===e[t]||!0===e[t]||"true"===e[t]||e[t]);!1!==i.config[t]&&(i.config[t]=r)})};var s=t.parseQueryString=function(e,t){var r=e.match(/\?(.+)/i);if(r){for(var i=(r=r[1]).split("&"),n={},a=0;a<i.length;a++){var o=i[a].split("=");t&&!c(t,o[0])||(n[o[0]]=decodeURIComponent(o[1]))}return n}return{}}},function(e,t,r){var i=r(0),n=r(1);function a(e,t){for(var r,i=0;i<e.length&&!r;i++){var n=e[i];n.contentWindow===t&&(r=n)}return r}!function(e){function t(t){var r;try{r=JSON.parse(t.data)}catch(e){}e(t,r)}window.postMessage&&(window.addEventListener?window[e?"addEventListener":"removeEventListener"]("message",t,!1):window[e?"attachEvent":"detachEvent"]("onmessage",t))}(function(e,t){if(t&&t.method){var r=function(e){var t;return e.src&&(t=a(document.querySelectorAll('iframe[src*="'+e.src.replace(/^https?:/,"")+'"]'),e.contentWindow)),t||(t=a(e.domains?document.querySelectorAll('iframe[src*="'+(e.domains||i.DOMAINS).join('"], iframe[src*="')+'"]'):document.getElementsByTagName("iframe"),e.contentWindow)),t}({contentWindow:e.source,src:t.context,domains:i.DOMAINS.concat(i.CDN)});if(r){var o=n.getWidget(r);o&&t.url&&(o.url=t.url),i.trigger("message",o,t)}}}),t.postMessage=function(e,t,r){window.postMessage&&("object"==typeof e&&(e.context=document.location.href),e=JSON.stringify(e),t=t||"*",(r=r||window.parent).postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")))}},function(e,t,r){r(4);var i=r(0);i._loaded||(i._loaded=!0,r(5),r(6),r(8),r(9),r(10),r(11),r(12),r(13),r(14),r(15),r(16),r(17),i.trigger("init")),t.iframely=i},function(e,t,r){var i,n=r(0);i=function(){n.trigger("load")},"complete"!==document.readyState&&"interactive"!==document.readyState||setTimeout(i,0),document.addEventListener?document.addEventListener("DOMContentLoaded",i):window.attachEvent("onload",i)},function(e,t,r){var i=r(0);i.VERSION=1,i.ASPECT_WRAPPER_CLASS="iframely-responsive",i.MAXWIDTH_WRAPPER_CLASS="iframely-embed",i.LOADER_CLASS="iframely-loader",i.DOMAINS=["cdn.iframe.ly","iframe.ly","if-cdn.com","iframely.net"],i.CDN=i.CDN||i.DOMAINS[0],i.BASE_RE=/^(?:https?:)?\/\/[^\/]+/i,i.ID_RE=/^(?:https?:)?\/\/[^\/]+\/(\w+)(?:\?.*)?$/,i.SCRIPT_RE=/^(?:https?:|file:\/)?\/\/[^\/]+(?:.+)?\/(?:embed|iframely)\.js(?:[^\/]+)?$/i,i.CDN_RE=/^(?:https?:)?\/\/([^\/]+)\/(?:embed|iframely)\.js(?:[^\/]+)?$/i,i.SUPPORTED_QUERY_STRING=["api_key","key","iframe","html5","playerjs","align","language","media","maxwidth","lazy","import","parent","click_to_play","autoplay",/^_.+/],i.LAZY_IFRAME_SHOW_TIMEOUT=3e3,i.LAZY_IFRAME_FADE_TIMEOUT=200,i.CLEAR_WRAPPER_STYLES_TIMEOUT=3e3},function(e,t,r){(function(e){var t=r(0),i=function(e,t,r,i){for(;!i&&r<t.length;)i=e[t[r++]+"equestAnimationFrame"];return i&&i.bind(e)||e.setImmediate||function(t){e.setTimeout(t,0)}}("undefined"!=typeof window?window:e,"r webkitR mozR msR oR".split(" "),0),n={};function a(e,r,a){(n[e]||[]).forEach(function(e){r?i(function(){e.apply(t,a)}):e.apply(t,a)}),"init"===e&&(n[e]=[])}t.on=function(e,t){(n[e]=n[e]||[]).push(t)},t.trigger=function(e){a(e,!1,Array.prototype.slice.call(arguments,1))},t.triggerAsync=function(e){a(e,!0,Array.prototype.slice.call(arguments,1))}}).call(this,r(7))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var i=r(2),n=r(0),a={};function o(e){var t=JSON.stringify(e),r=a[t];return r||(r=new IntersectionObserver(function(t){t.forEach(function(t){i.postMessage({method:"intersection",entry:{isIntersecting:t.isIntersecting},options:e},"*",t.target.contentWindow)})},function(e){var t={};e.threshold&&(t.threshold=e.threshold);e.margin&&(t.rootMargin=e.margin+"px "+e.margin+"px "+e.margin+"px "+e.margin+"px");return t}(e)),a[t]=r),r}"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&(n.on("init",function(){n.extendOptions({intersection:1})}),n.on("message",function(e,t){"send-intersections"===t.method&&e.iframe&&(t.options?o(t.options).observe(e.iframe):o({margin:1e3}).observe(e.iframe))}))},function(e,t,r){var i=r(1),n=r(0),a={};function o(e,t,r){var a,o=e.cancel,d=e.shadow,s=e.renderEvent,l=i.getIframeWrapper(t,!0);if(o)a=i.getWidget(t),n.cancelWidget(a||{maxWidthWrapper:t,iframe:t,url:t.getAttribute("href")});else{var u,p;if((a=document.createElement("div")).innerHTML=e.html,l&&!s?(u=l.aspectWrapper.parentNode,p=l.aspectWrapper,l.maxWidthWrapper.removeAttribute("style")):(u=t.parentNode,p=t),d){var f=document.createElement("div"),m=f.attachShadow({mode:"open"});m.appendChild(a);var g={shadowRoot:m,shadowContainer:f,container:u,context:e.context,stylesIds:e.stylesIds,stylesDict:r.commonShadowStyles};n.trigger("import-shadow-widget-before-render",g),u.insertBefore(f,p),n.trigger("import-shadow-widget-after-render",g)}else u.insertBefore(a,p),function e(t){function r(e){var r=e.text||e.textContent||e.innerHTML||"",i=document.createElement("script");e.src&&(i.src=e.src),i.type="text/javascript";try{i.appendChild(document.createTextNode(r))}catch(e){i.text=r}t.appendChild(i)}var i,n,a,o=[],d=t.childNodes;for(a=0;d[a];a++)n=d[a],s="script",!(c=n).nodeName||c.nodeName.toUpperCase()!==s.toUpperCase()||n.type&&"text/javascript"!==n.type.toLowerCase()&&"application/javascript"!==n.type.toLowerCase()?e(n):(o.push(n),t.removeChild(n));var c,s;for(a=0;o[a];a++)(i=o[a]).parentNode&&i.parentNode.removeChild(i),r(o[a])}(a);u.removeChild(p),s&&setTimeout(function(){c(u)},n.CLEAR_WRAPPER_STYLES_TIMEOUT)}}function d(){delete n.import;for(var e=document.querySelectorAll("a[data-iframely-url][data-import-uri]"),t=0;t<e.length;t++)e[t].removeAttribute("data-import-uri"),n.trigger("load",e[t])}function c(e){for(var t=e,r=0;t&&t.getAttribute("class")!==n.ASPECT_WRAPPER_CLASS;)t=t.parentNode,++r>4&&(t=null);var i=t&&t.parentNode;i&&i.getAttribute("class")===n.MAXWIDTH_WRAPPER_CLASS&&(t.removeAttribute("style"),t.removeAttribute("class"),i.removeAttribute("style"))}n.on("load",function(e){if(!e&&!1!==n.config.import&&document.head.attachShadow&&(n.debug||"http:"===document.location.protocol||"https:"===document.location.protocol)&&!n.config.playerjs&&!n.config.lazy&&!n.import){var t=document.querySelectorAll("a[data-iframely-url]:not([data-import-uri])");t.length>1&&function(e){var t=document.createElement("script"),r=[],o=[],c=null;function s(e,t){a[e]||(a[e]=[]),a[e].push(t)}function l(e){var t=e.getAttribute("data-iframely-url"),a=t.match(n.ID_RE),d=a&&a[1],l=i.parseQueryString(t,n.SUPPORTED_QUERY_STRING.concat("url")),u=l.url;delete l.url;var p="0"===l.import||"false"===l.import||"1"===l.playerjs||"true"===l.playerjs;if(!p){var f=t.match(n.BASE_RE);l.CDN=f&&f[0],c?JSON.stringify(l,Object.keys(l).sort())!==JSON.stringify(c,Object.keys(c).sort())&&(p=!0):c=l}if(p)n.trigger("load",e);else if(d)e.setAttribute("data-import-uri",d),-1===o.indexOf(d)&&o.push(d),s(d,e);else{u||(u=e.getAttribute("href"));var m=c.key||c.api_key||n.config.api_key||n.config.key;m&&u?(e.setAttribute("data-import-uri",u),-1===r.indexOf(u)&&r.push(u),s(u,e)):n.trigger("load",e)}}for(var u=0;u<e.length;u++){var p=e[u];!p.getAttribute("data-import-uri")&&p.hasAttribute("data-iframely-url")&&l(p)}r.length>0||o.length>0?((c=c||{}).touch=n.isTouch(),c.flash=function(){var e=!1;try{var t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");e=!!t}catch(t){e=!(!navigator.mimeTypes||null==navigator.mimeTypes["application/x-shockwave-flash"]||!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)}return e}(),c.app=1,r.length>0&&(c.uri=r),o.length>0&&(c.ids=o.join("&")),c.v=n.VERSION,t.src=i.getEndpoint("/api/import/v2",c,n.SUPPORTED_QUERY_STRING),t.onerror=function(){d()},document.head.appendChild(t),n.import=t):(d(),n.trigger("load"))}(t)}}),n.on("load",function(e,t){if(e&&e.uri&&(e.html||e.cancel)){var r=a[e.uri];if(r)for(var i=0;i<r.length;i++)o(e,r[i],t);delete a[e.uri]}}),n.buildImportWidgets=function(e){n.trigger("import-loaded",e),e.widgets.forEach(function(t){n.trigger("load",t,e)}),d()},n.isTouch=function(){return"ontouchstart"in window||navigator.maxTouchPoints},n.on("import-widget-ready",c),n.addEventListener||(n.addEventListener=function(e,t,r){e&&(e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r)}),n.newUID||(n.newUID=function(){return""+Math.round(Math.random()*(new Date).getTime())})},function(e,t,r){var i=r(1),n=r(0);n.on("load",function(e,t){if(e&&e.nodeName&&"string"==typeof t){var r=document.createElement("a");r.setAttribute("href",t),e.appendChild(r),n.trigger("load",r)}}),n.on("load",function(e){if(!e&&!n.import)for(var t=document.querySelectorAll("a[data-iframely-url]:not([data-import-uri])"),r=0;r<t.length;r++)n.trigger("load",t[r])}),n.on("load",function(e){e&&"A"===e.nodeName&&(e.getAttribute("data-iframely-url")||e.getAttribute("href"))&&!e.hasAttribute("data-import-uri")&&function(e){if(!e.getAttribute("data-iframely-url")&&!e.getAttribute("href"))return;var t,r=e.getAttribute("data-iframely-url");r&&/^((?:https?:)?\/\/[^\/]+)\/\w+/i.test(r)?t=i.getEndpoint(r,{v:n.VERSION,app:1}):(n.config.api_key||n.config.key)&&n.CDN?t=i.getEndpoint("/api/iframe",{url:e.getAttribute("href"),v:n.VERSION,app:1},n.SUPPORTED_QUERY_STRING):console.warn("Iframely cannot build embeds: api key is required as query-string of embed.js");if(t){var a=document.createElement("iframe");a.setAttribute("allowfullscreen",""),a.setAttribute("allow","autoplay; encrypted-media"),e.hasAttribute("data-img")&&a.setAttribute("data-img",e.getAttribute("data-img"));var o=e.hasAttribute("data-lazy")||e.hasAttribute("data-img")||/&lazy=1/.test(t)||n.config.lazy,d=e.textContent||e.innerText;d&&""!==d&&(a.textContent=d);var c=i.getIframeWrapper(e,!0);if(c)for(;c.aspectWrapper.lastChild;)c.aspectWrapper.removeChild(c.aspectWrapper.lastChild);else{c=i.addDefaultWrappers(e);var s=e.parentNode;s.removeChild(e)}c.aspectWrapper.appendChild(a),o?(a.setAttribute("data-iframely-url",t),n.trigger("load",a)):(a.setAttribute("src",t),n.trigger("iframe-ready",a))}else e.removeAttribute("data-iframely-url")}(e)})},function(e,t,r){var i=r(1),n=r(0);function a(e){var t=e.aspectWrapper&&function(e){for(var t=0,r=0;r<e.childNodes.length;r++){var i=e.childNodes[r];if(i.nodeType===Node.TEXT_NODE){var n=i.textContent||i.innerText;(n=n.replace(/\s|\n/g,""))&&t++}else i.nodeType===Node.ELEMENT_NODE&&t++}return t}(e.aspectWrapper)>1&&function(e,t){for(var r=0,i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];if(n.nodeType===Node.TEXT_NODE);else if(n.nodeType===Node.ELEMENT_NODE){if(e===r)return n;r++}}}(1,e.aspectWrapper);t&&"DIV"===t.nodeName&&e.aspectWrapper.removeChild(t)}n.on("load",function(e){if(e&&"IFRAME"===e.nodeName&&e.hasAttribute("data-iframely-url")&&e.hasAttribute("data-img")&&!e.getAttribute("src")){e.removeAttribute("data-img");var t=i.getWidget(e),r=e.getAttribute("data-iframely-url");!function(e,t){var r,a=i.parseQueryString(t),o={};for(var d in a)0===d.indexOf("_")&&(o[d]=a[d]);if(t.match(/\/api\/iframe/))r=i.getEndpoint(t.match(/^(.+)\/api\/iframe/i)[1]+"/api/thumbnail",Object.assign({url:a.url,api_key:a.api_key,key:a.key},o));else{if(!t.match(/^(?:https?:)?\/\/[^\/]+\/[a-zA-Z0-9]+(?:\?.*)?$/))return;r=i.getEndpoint(t.replace(/^((?:https?:)?\/\/[^\/]+\/[a-zA-Z0-9]+)((\?.*)?)$/,"$1/thumbnail"),o)}var c=document.createElement("div");i.setStyles(c,{position:"absolute",width:"100%",height:"100%",backgroundImage:"url('"+r+"')",backgroundSize:"cover",backgroundPosition:"center"});var s=document.createElement("div");s.setAttribute("class",n.LOADER_CLASS),c.appendChild(s);var l=n.getElementComputedStyle(e.aspectWrapper,"padding-top"),u=n.getElementComputedStyle(e.aspectWrapper,"padding-bottom"),p=l.match(/^(\d+)px$/);if(p&&parseInt(p[1])&&u){var f=document.createElement("div");i.setStyles(f,{top:"-"+l,width:"100%",height:0,position:"relative",paddingBottom:u}),f.appendChild(c),e.aspectWrapper.appendChild(f)}else e.aspectWrapper.appendChild(c)}(t,r),r=i.addQueryString(r,{img:1}),e.setAttribute("data-iframely-url",r),new s(t),n.trigger("load",e)}}),n.on("message",function(e,t){var r;"widgetRendered"===t.method&&(a(e),(r=c(e))&&r.deactivate()),"begin-waiting-widget-render"===t.method&&(r=c(e))&&r.clearLoadingTimeout(),"end-waiting-widget-render"===t.method&&(r=c(e))&&r.registerLoadingTimeout()});var o=[];function d(e){for(var t=0;t<o.length&&o[t].widget.iframe!==e.iframe;)t++;if(t<o.length&&o[t].widget.iframe===e.iframe)return t}function c(e){var t=d(e);if(t||0===t)return o[t]}function s(e){this.widget=e,this.loadCount=0;var t=e.iframe,r=this;function i(){r.iframeOnLoad()}t.addEventListener?t.addEventListener("load",i):t.attachEvent("onload",i),this.registerLoadingTimeout(),o.push(this)}s.prototype.iframeOnLoad=function(){if(this.loadCount++,2===this.loadCount){this.deactivate();var e=this;setTimeout(function(){a(e.widget)},n.LAZY_IFRAME_FADE_TIMEOUT)}},s.prototype.deactivate=function(){var e;this.clearLoadingTimeout(),((e=d(this))||0===e)&&o.splice(e,1)},s.prototype.clearLoadingTimeout=function(){this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=null},s.prototype.registerLoadingTimeout=function(){if(!this.timeoutId){var e=this;this.timeoutId=setTimeout(function(){e.iframeOnLoad()},n.LAZY_IFRAME_SHOW_TIMEOUT)}}},function(e,t,r){var i=r(1),n=r(0);n.on("load",function(e){if(!e)for(var t=document.querySelectorAll("iframe[data-iframely-url]"),r=0;r<t.length;r++)n.trigger("load",t[r])}),n.on("load",function(e){e&&"IFRAME"===e.nodeName&&e.hasAttribute("data-iframely-url")&&!e.hasAttribute("data-img")&&!e.getAttribute("src")&&function(e){var t=i.getWidget(e),r=e.getAttribute("data-iframely-url");t&&r&&(r=i.getEndpoint(r,{lazy:n.config.intersection,v:n.VERSION,app:1}));e.setAttribute("src",r),e.removeAttribute("data-iframely-url"),n.trigger("iframe-ready",e)}(e)})},function(e,t,r){var i=r(0);i.on("message",function(e,t){"cancelWidget"===t.method&&i.cancelWidget(e)}),i.cancelWidget=function(e){if(e){var t=e.maxWidthWrapper&&e.maxWidthWrapper.parentNode,r=e.maxWidthWrapper;if(i.config&&i.config.parent){var n=function(e,t){for(var r=!1;!r&&e.parentNode;)r=(e=e.parentNode).className&&e.className.split(" ").indexOf(t)>=0;return r&&e}(e.maxWidthWrapper,i.config.parent);n&&(t=n.parentNode,r=n)}if(e.url){var a=e.iframe&&(e.iframe.textContent||e.iframe.innerText);i.triggerAsync("cancel",e.url,t,a,r.nextSibling)}t.removeChild(r)}else console.warn("iframely.cancelWidget called without widget param")}},function(e,t,r){var i=r(1),n=r(0);n.on("message",function(e,t){if("setIframelyWidgetSize"===t.method||"resize"===t.method||"setIframelyEmbedData"===t.method){var r={};t.data&&t.data.media&&t.data.media.frame_style?(t.data.media.frame_style.split(";").forEach(function(e){if(""!==e.trim()&&e.indexOf(":")>-1){var t=e.split(":");2===t.length&&(r[t[0].trim()]=t[1].trim())}}),d(e,r)):"setIframelyEmbedData"===t.method&&d(e,null),function(e,t){if(t&&Object.keys(t).length>0&&e){var r=function(e){var t=e.iframe&&e.iframe.style.border||e.aspectWrapper&&e.aspectWrapper.style.border,r=t&&t.match(/(\d+)px/)||0;r&&(r=parseInt(r[1]),r*=2);return r}(e),a=window.getComputedStyle&&window.getComputedStyle(e.iframe).getPropertyValue("height");i.setStyles(e.maxWidthWrapper,{"max-width":t["max-width"]&&t["max-width"]+r,"min-width":t["min-width"]&&t["min-width"]+r,width:t.width&&t.width+r}),t.scrolling&&e.iframe&&e.iframe.setAttribute("scrolling",t.scrolling);var o=t["aspect-ratio"];i.setStyles(e.aspectWrapper,{paddingBottom:o?Math.round(1e5/o)/1e3+"%":0,paddingTop:o&&t["padding-bottom"],height:o?0:t.height&&t.height+r});var d=window.getComputedStyle&&window.getComputedStyle(e.iframe).getPropertyValue("height");a&&a!==d&&n.triggerAsync("heightChanged",e.iframe,a,d)}}(e,t.data&&t.data.media||{height:t.height})}});var a={border:"","border-radius":"","box-shadow":"",overflow:""},o={border:"0","border-radius":"","box-shadow":"",overflow:""};function d(e,t){t&&e&&e.iframe?t["border-radius"]?(t.overflow="hidden",i.setStyles(e.aspectWrapper,t)):i.setStyles(e.iframe,t):!t&&e&&e.iframe&&(i.setStyles(e.aspectWrapper,a),i.setStyles(e.iframe,o))}},function(e,t,r){var i=r(0);i.on("message",function(e,t){"open-href"!==t.method&&"click"!==t.method||i.trigger(t.method,t.href)}),i.on("open-href",function(e){i.triggerAsync("click",e),0===e.indexOf(window.location.origin)?window.location.href=e:window.open(e,"_blank")})},function(e,t,r){var i=r(0);i.on("message",function(e,t){"setIframelyEmbedOptions"===t.method&&i.trigger("options",e,t.data)})},function(e,t,r){var i=r(0);i.widgets=i.widgets||{},i.widgets.load=i.load,i.events||(i.events={},i.events.on=i.on,i.events.trigger=i.trigger),i.on("cancel",function(e,t,r,i){if(e&&t&&r&&""!==r){var n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("target","_blank"),n.textContent=r,i?t.insertBefore(n,i):t.appendChild(n)}})}]);