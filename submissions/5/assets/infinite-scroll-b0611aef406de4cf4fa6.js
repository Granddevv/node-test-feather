(window.webpackJsonp_gp_web_frontend=window.webpackJsonp_gp_web_frontend||[]).push([["infinite-scroll"],{"./src/ts/components/infinite-scroll/infinite-scroll.ts":(e,t,n)=>{"use strict";n.r(t),n.d(t,{infiniteScrollComponent:()=>i,init:()=>a});var o=n("./src/ts/utils/inview.ts"),s=n("../react-components/dist/atoms/view-more-cta/view-more-cta.css.json"),r=n("../shared-types/frontend/core/store.ts");const i=(e,t)=>{const n={addLoadingClass:()=>{e.querySelector("a").classList.add(s.V)},removeLoadingClass:()=>{e.querySelector("a").classList.remove(s.V)},removeAnchor:()=>{e.querySelector("a").remove()},getRootElementParams(){if(e.dataset.params)try{return JSON.parse(e.dataset.params)}catch(e){return}},subscribe:e=>{const o=t.subscribe(()=>{var s;const r=null===(s=t.getState().lazyZones[e])||void 0===s?void 0:s.status;"LOADING"===r?n.addLoadingClass():"LOADED"===r?n.removeLoadingClass():"ENDED"===r&&(n.removeAnchor(),o())})},init:()=>{const s=n.getRootElementParams();return s?(n.subscribe(s.zoneId),(0,o.oO)({element:e,isInViewportCallback:()=>{var e;"LOADING"!==(null===(e=t.getState().lazyZones[s.zoneId])||void 0===e?void 0:e.status)&&t.dispatch({type:r.U.ZoneLoading,payload:{zoneId:s.zoneId,timestamp:Date.now()}})},isNotInViewportCallback:()=>{}}),{}):{}}};return n},a=(e,t)=>{const n="infinite-scroll-component-"+Math.floor(1e4*Math.random());return{listeners:i(e,t).init(),componentId:n}}},"./src/ts/utils/inview.ts":(e,t,n)=>{"use strict";n.d(t,{oe:()=>o,oO:()=>s,W0:()=>r});const o=e=>{if(!e)return!1;const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth,s=t.top<=n&&t.top+t.height>=0,r=t.left<=o&&t.left+t.width>=0;return s&&r};function s({element:e,observerOptions:t={},isInViewportCallback:n,isNotInViewportCallback:o}){new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&n&&(o||t.unobserve(e.target),n(e)),!e.isIntersecting&&o&&(n||t.unobserve(e.target),o(e))})},t).observe(e)}function r(e,t){return e?new Promise(n=>{s({element:e,observerOptions:t,isInViewportCallback:n})}):Promise.reject()}},"../react-components/dist/atoms/view-more-cta/view-more-cta.css.json":e=>{"use strict";e.exports=JSON.parse('{"V":"_loading_12eii_18"}')}}]);