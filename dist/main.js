(()=>{var t={807:(t,e,o)=>{"use strict";o.d(e,{Z:()=>f});var r=o(81),n=o.n(r),i=o(645),s=o.n(i),a=o(667),c=o.n(a),p=new URL(o(429),o.b),l=s()(n()),u=c()(p);l.push([t.id,`@font-face{font-family:"RobotoSlab Var";src:url(${u})}p{font-family:"RobotoSlab Var",serif;font-size:1.5rem}.top_window{height:60vh;min-height:60vh;position:relative;z-index:1;overflow:hidden}.top_window img{position:absolute;top:0;left:0;z-index:0;width:100vw;top:-15vh}.bottom_row{height:40vh;position:relative;top:-25vh}.bottom_row .content{text-align:center}.bottom_row .content img{max-height:60px;margin:20px}.bottom_row .swiper-container .swiper-slide{height:270px;overflow:hidden}.bottom_row .swiper-container .swiper-slide img{width:100%;height:auto}.bottom_row .swiper-container .swiper-button-prev,.bottom_row .swiper-container .swiper-button-next{width:40px;height:40px;border:1px solid #282727;border-radius:20px}.bottom_row .swiper-container .swiper-button-prev::after,.bottom_row .swiper-container .swiper-button-next::after{font-size:1rem;color:#e0c928}.bottom_row .swiper-container .swiper-button-prev{left:-70px}.bottom_row .swiper-container .swiper-button-next{right:-70px}.bottom_row .liste_gites{border-top:1px solid #e0c928;border-bottom:1px solid #e0c928;display:flex;justify-content:space-between;list-style:none;text-align:center}.bottom_row .liste_gites li{width:50%;font-weight:100;letter-spacing:1px;padding:20px 0px}.bottom_row .liste_gites li h2{font-weight:400;font-size:1.3rem}.bottom_row .liste_gites li p{font-size:1.3rem}.bottom_row .liste_gites li:first-child{text-align:right;padding-right:50px}.bottom_row .liste_gites li:last-child{text-align:left;padding-left:50px}.bottom_row .liste_gites li strong{color:#e0c928;font-weight:200;text-transform:uppercase}.bottom_row .liste_gites li+li{border-left:1px solid #e0c928}.bottom_row .contact h2{text-transform:uppercase;font-weight:600;margin-top:30px;letter-spacing:3px;font-size:1.8rem}.bottom_row .contact ul{list-style:none;display:flex;align-items:center;justify-content:center}.bottom_row .contact ul li{height:20px}.bottom_row .contact ul li p{height:0;line-height:1rem}.bottom_row .contact ul li a{text-decoration:none;font-size:1.2rem;line-height:1.2rem;letter-spacing:5px;color:#333;text-transform:uppercase;font-weight:300;transition:font-weight ease-in-out 300ms}.bottom_row .contact ul li a:hover{font-weight:500}.bottom_row .contact ul li+li{border-left:1px solid #e0c928;padding-left:30px;margin-left:30px;color:#e0c928}.bottom_row .contact .adresse p{font-size:.9rem;margin-top:20px;font-weight:400;letter-spacing:1px}.bottom_row .contact .adresse p strong{color:#e0c928}*,body{margin:0;padding:0;font-family:"RobotoSlab Var",serif}.container{width:80vw;max-width:1200px;margin:auto}`,""]);const f=l},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,r,n,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var p=0;p<t.length;p++){var l=[].concat(t[p]);r&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),e.push(l))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function o(t){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===t){o=r;break}return o}function r(t,r){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],p=r.base?c[0]+r.base:c[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var f=o(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var m=n(d,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function n(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,n){var i=r(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=o(i[s]);e[a].references--}for(var c=r(t,n),p=0;p<i.length;p++){var l=o(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,o){var r=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{"use strict";t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},852:()=>{new Swiper(".swiper",{loop:!1,slidesPerView:3,speed:300,autoplay:!0,loop:!0,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})},429:(t,e,o)=>{"use strict";t.exports=o.p+"b6aa3c203f8622669cc6.ttf"}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,o),i.exports}o.m=t,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),o.b=document.baseURI||self.location.href,o.nc=void 0,(()=>{"use strict";var t=o(379),e=o.n(t),r=o(795),n=o.n(r),i=o(569),s=o.n(i),a=o(565),c=o.n(a),p=o(216),l=o.n(p),u=o(589),f=o.n(u),d=o(807),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=n(),m.insertStyleElement=l(),e()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals,o(852)})()})();