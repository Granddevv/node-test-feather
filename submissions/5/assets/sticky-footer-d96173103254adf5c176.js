(window.webpackJsonp_gp_web_frontend=window.webpackJsonp_gp_web_frontend||[]).push([["sticky-footer"],{"../../node_modules/ramda/src/defaultTo.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry2.js")((function(e,r){return null==r||r!=r?e:r}));e.exports=t},"../../node_modules/ramda/src/internal/_curry2.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry1.js"),s=n("../../node_modules/ramda/src/internal/_isPlaceholder.js");e.exports=function(e){return function r(n,o){switch(arguments.length){case 0:return r;case 1:return s(n)?r:t((function(r){return e(n,r)}));default:return s(n)&&s(o)?r:s(n)?t((function(r){return e(r,o)})):s(o)?t((function(r){return e(n,r)})):e(n,o)}}}},"../../node_modules/ramda/src/internal/_curry3.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry1.js"),s=n("../../node_modules/ramda/src/internal/_curry2.js"),o=n("../../node_modules/ramda/src/internal/_isPlaceholder.js");e.exports=function(e){return function r(n,a,c){switch(arguments.length){case 0:return r;case 1:return o(n)?r:s((function(r,t){return e(n,r,t)}));case 2:return o(n)&&o(a)?r:o(n)?s((function(r,n){return e(r,a,n)})):o(a)?s((function(r,t){return e(n,r,t)})):t((function(r){return e(n,a,r)}));default:return o(n)&&o(a)&&o(c)?r:o(n)&&o(a)?s((function(r,n){return e(r,n,c)})):o(n)&&o(c)?s((function(r,n){return e(r,a,n)})):o(a)&&o(c)?s((function(r,t){return e(n,r,t)})):o(n)?t((function(r){return e(r,a,c)})):o(a)?t((function(r){return e(n,r,c)})):o(c)?t((function(r){return e(n,a,r)})):e(n,a,c)}}}},"../../node_modules/ramda/src/internal/_isInteger.js":e=>{e.exports=Number.isInteger||function(e){return e<<0===e}},"../../node_modules/ramda/src/internal/_isString.js":e=>{e.exports=function(e){return"[object String]"===Object.prototype.toString.call(e)}},"../../node_modules/ramda/src/nth.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry2.js"),s=n("../../node_modules/ramda/src/internal/_isString.js"),o=t((function(e,r){var n=e<0?r.length+e:e;return s(r)?r.charAt(n):r[n]}));e.exports=o},"../../node_modules/ramda/src/path.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry2.js"),s=n("../../node_modules/ramda/src/paths.js"),o=t((function(e,r){return s([e],r)[0]}));e.exports=o},"../../node_modules/ramda/src/pathOr.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry3.js"),s=n("../../node_modules/ramda/src/defaultTo.js"),o=n("../../node_modules/ramda/src/path.js"),a=t((function(e,r,n){return s(e,o(r,n))}));e.exports=a},"../../node_modules/ramda/src/paths.js":(e,r,n)=>{var t=n("../../node_modules/ramda/src/internal/_curry2.js"),s=n("../../node_modules/ramda/src/internal/_isInteger.js"),o=n("../../node_modules/ramda/src/nth.js"),a=t((function(e,r){return e.map((function(e){for(var n,t=r,a=0;a<e.length;){if(null==t)return;n=e[a],t=s(n)?o(n,t):t[n],a+=1}return t}))}));e.exports=a},"./src/ts/components/sticky-footer/sticky-footer.ts":(e,r,n)=>{"use strict";n.r(r),n.d(r,{stickyFooterComponent:()=>u,init:()=>d});var t=n("../react-components/dist/components/global/footer/footer.css.json"),s=n("../../node_modules/ramda/src/pathOr.js"),o=n.n(s),a=n("./src/ts/config/config.ts"),c=n("./src/ts/utils/dom.ts");const u=(e,r)=>{const n="es"===(0,a.u)("country"),s={isClosed:!1,onClickCloseButton:()=>{e.classList.add(t.LB),s.isClosed=!0},unstickStickyFooter:()=>{e.classList.add(t.PP)},onNewsletterPopupState:()=>{(0,c.tq)()&&r.subscribe(()=>{const n=r.getState();if(!n.trackEvent)return;const a=o()([],["trackEvent","events"],n);if(!a.length)return;const c=a.includes("event113"),u=a.includes("event207");c?e.classList.add(t.LB):u&&!s.isClosed&&e.classList.remove(t.LB)})},onAdsImpressionViewable:()=>{const e=r.subscribe(()=>{const t=r.getState();t.ads.impressionViewable&&t.ads.impressionViewable.find(e=>"foot"===e.adSlot.adSlotGroup)&&(n||window.setTimeout(()=>{s.unstickStickyFooter()},4e3),e())})},bindEvents:()=>(e.querySelector("."+t.hj).addEventListener("click",s.onClickCloseButton),s.onAdsImpressionViewable(),s.onNewsletterPopupState(),{onAdsImpressionViewable:s.onAdsImpressionViewable})};return s},d=(e,r)=>{const n=Math.floor(1e4*Math.random());return{listeners:u(e,r).bindEvents(),componentId:"sticky-footer-"+n}}},"./src/ts/utils/dom.ts":(e,r,n)=>{"use strict";function t(e,r){const n=[];for(;e=e.previousSibling;)1!=e.nodeType||r&&!e.matches(r)||n.push(e);return n}n.d(r,{oj:()=>t,tq:()=>s,xU:()=>o,is:()=>a,Vq:()=>c});const s=()=>window.matchMedia("screen and (max-width: 767px)").matches,o=()=>document.cookie.replace(/(?:(?:^|.*;\s*)_TO_AB_Testing\s*\=\s*([^;]*).*$)|^.*$/,"$1")||"0";function a(e,r){var n;const t=null!==(n=r.dataset[e])&&void 0!==n?n:"";return t&&r.setAttribute(e,t),r}function c(e,r="",n){var t,s;const o=null!==(s=null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t[r])&&void 0!==s?s:n;if("string"==typeof o&&o.match(/^({).*(})$|^(\[).*(\])$/))try{return JSON.parse(o)}catch(e){console.error(e)}return o}},"../react-components/dist/components/global/footer/footer.css.json":e=>{"use strict";e.exports=JSON.parse('{"LB":"_footer_hidden_2wp8k_19","hj":"_footer_ad_close_2wp8k_23","PP":"_footer_ad_unsticky_2wp8k_63"}')}}]);