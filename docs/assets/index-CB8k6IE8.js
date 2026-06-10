var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function w(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+w(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+w(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+w(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&w(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&w(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function w(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,w(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),w=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=w&&e[w]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,k=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[St]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Ae.call(Pt,e)?!0:Ae.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ke(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=me(null),$i=null,ea=null;function ta(e,t,n){O(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,D(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=T.S;T.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=me(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Pa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===S)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=me(null),ao=me(0);function oo(e,t){e=Gl,O(ao,e),O(io,t),Gl=e|t.baseLanes}function so(){O(ao,Gl),O(io,io.current)}function co(){Gl=ao.current,D(io),D(ao)}var lo=me(null),uo=null;function fo(e){var t=e.alternate;O(P,P.current&1),O(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){O(P,P.current),O(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(O(P,P.current),O(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){O(P,P.current),O(lo,lo.current)}function go(e){D(lo),uo===e&&(uo=null),D(P)}var P=me(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){T.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Rs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,de,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),A(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=he.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=he.current,Ji(t))Ki(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(D(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return O(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=P.current,O(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(P),null;case 4:return be(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&D(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:D(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&D(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,A(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,A(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,T.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=T.H;return T.H=Hs,e===null?Hs:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,T.H=r,T.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,ot(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,E.p=a,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=di(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&k(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&k(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&k(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Ie,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),A(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),A(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);A(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),A(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),A(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,A(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),A(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,A(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),A(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,A(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=_.createContext&&_.createContext(y),x=[`attr`,`size`,`title`];function ee(e,t){if(e==null)return{};var n,r,i=S(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function S(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(null,arguments)}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?te(Object(n),!0).forEach(function(t){re(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function re(e,t,n){return(t=ie(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e){var t=ae(e,`string`);return typeof t==`symbol`?t:t+``}function ae(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function oe(e){return e&&e.map((e,t)=>_.createElement(e.tag,ne({key:t},e.attr),oe(e.child)))}function w(e){return t=>_.createElement(se,C({attr:ne({},e.attr)},t),oe(e.child))}function se(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=ee(e,x),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),_.createElement(`svg`,C({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:ne(ne({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&_.createElement(`title`,null,i),e.children)};return b===void 0?t(y):_.createElement(b.Consumer,null,e=>t(e))}function ce(e){return w({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z`},child:[]}]})(e)}function le(e){return w({tag:`svg`,attr:{viewBox:`0 0 496 512`},child:[{tag:`path`,attr:{d:`M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`},child:[]}]})(e)}function ue(e){return w({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z`},child:[]}]})(e)}function T(e){return w({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z`},child:[]}]})(e)}function E(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z`},child:[]}]})(e)}function de(e){return w({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z`},child:[]}]})(e)}function fe(e){return w({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z`},child:[]}]})(e)}function pe(e){return w({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z`},child:[]}]})(e)}function me(e){return w({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z`},child:[]}]})(e)}function D(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z`},child:[]}]})(e)}function O(e){return w({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1z`},child:[]}]})(e)}function he(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805A.75.75 0 0 1 12 3.75ZM6.255 9.305a.748.748 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86V5.445ZM16.28 8.22a.75.75 0 1 0-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06L19 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L20.06 12l2.72-2.72a.75.75 0 0 0-1.06-1.06L19 10.94l-2.72-2.72Z`},child:[]}]})(e)}function ge(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`rect`,attr:{x:`7`,y:`4`,fill:`#BBDEFB`,width:`34`,height:`40`},child:[]},{tag:`g`,attr:{fill:`#2196F3`},child:[{tag:`rect`,attr:{x:`13`,y:`26`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`13`,y:`18`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`13`,y:`34`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`13`,y:`10`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`21`,y:`26`,width:`14`,height:`4`},child:[]},{tag:`rect`,attr:{x:`21`,y:`18`,width:`14`,height:`4`},child:[]},{tag:`rect`,attr:{x:`21`,y:`34`,width:`14`,height:`4`},child:[]},{tag:`rect`,attr:{x:`21`,y:`10`,width:`14`,height:`4`},child:[]}]}]})(e)}function _e(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#81D4FA`,d:`M28,7.1v2c7.3,1,13,7.3,13,14.9s-5.7,13.9-13,14.9v2c8.4-1,15-8.2,15-16.9S36.4,8.1,28,7.1z`},child:[]},{tag:`path`,attr:{fill:`#546E7A`,d:`M14,32H7c-1.1,0-2-0.9-2-2V18c0-1.1,0.9-2,2-2h7V32z`},child:[]},{tag:`polygon`,attr:{fill:`#78909C`,points:`26,42 14,32 14,16 26,6`},child:[]},{tag:`path`,attr:{fill:`#03A9F4`,d:`M28,17.3v2.1c1.8,0.8,3,2.5,3,4.6s-1.2,3.8-3,4.6v2.1c2.9-0.9,5-3.5,5-6.7S30.9,18.2,28,17.3z`},child:[]},{tag:`path`,attr:{fill:`#4FC3F7`,d:`M28,12.2v2c4.6,0.9,8,5,8,9.8s-3.4,8.9-8,9.8v2c5.7-1,10-5.9,10-11.8S33.7,13.1,28,12.2z`},child:[]}]})(e)}function ve(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`g`,attr:{fill:`#CFD8DC`},child:[{tag:`path`,attr:{d:`M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z`},child:[]},{tag:`path`,attr:{d:`M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z`},child:[]}]},{tag:`path`,attr:{fill:`#8BC34A`,d:`M34,44H14c-1.1,0-2-0.9-2-2V13h24v29C36,43.1,35.1,44,34,44z`},child:[]}]})(e)}function ye(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#FFA000`,d:`M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z`},child:[]},{tag:`path`,attr:{fill:`#FFCA28`,d:`M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z`},child:[]}]})(e)}function be(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`polygon`,attr:{fill:`#90CAF9`,points:`40,45 8,45 8,3 30,3 40,13`},child:[]},{tag:`polygon`,attr:{fill:`#E1F5FE`,points:`38.5,14 29,14 29,4.5`},child:[]}]})(e)}function xe(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#BF360C`,d:`M41.2,5h-7.3L32,43h11L41.2,5z`},child:[]},{tag:`path`,attr:{fill:`#E64A19`,d:`M33,23h-4v-6l-12,6v-6L5,23v20h28V23z`},child:[]},{tag:`rect`,attr:{x:`9`,y:`27`,fill:`#FFC107`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`17`,y:`27`,fill:`#FFC107`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`25`,y:`27`,fill:`#FFC107`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`9`,y:`35`,fill:`#FFC107`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`17`,y:`35`,fill:`#FFC107`,width:`4`,height:`4`},child:[]},{tag:`rect`,attr:{x:`25`,y:`35`,fill:`#FFC107`,width:`4`,height:`4`},child:[]}]})(e)}function Se(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`circle`,attr:{fill:`#00ACC1`,cx:`24`,cy:`24`,r:`20`},child:[]},{tag:`circle`,attr:{fill:`#eee`,cx:`24`,cy:`24`,r:`16`},child:[]},{tag:`rect`,attr:{x:`23`,y:`11`,width:`2`,height:`13`},child:[]},{tag:`rect`,attr:{x:`26.1`,y:`22.7`,transform:`matrix(-.707 .707 -.707 -.707 65.787 27.25)`,width:`2.3`,height:`9.2`},child:[]},{tag:`circle`,attr:{cx:`24`,cy:`24`,r:`2`},child:[]},{tag:`circle`,attr:{fill:`#00ACC1`,cx:`24`,cy:`24`,r:`1`},child:[]}]})(e)}function Ce(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`polygon`,attr:{fill:`#FF9800`,points:`24,37 19,31 19,25 29,25 29,31`},child:[]},{tag:`g`,attr:{fill:`#FFA726`},child:[{tag:`circle`,attr:{cx:`33`,cy:`19`,r:`2`},child:[]},{tag:`circle`,attr:{cx:`15`,cy:`19`,r:`2`},child:[]}]},{tag:`path`,attr:{fill:`#FFB74D`,d:`M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z`},child:[]},{tag:`path`,attr:{fill:`#424242`,d:`M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z`},child:[]},{tag:`g`,attr:{fill:`#784719`},child:[{tag:`circle`,attr:{cx:`28`,cy:`19`,r:`1`},child:[]},{tag:`circle`,attr:{cx:`20`,cy:`19`,r:`1`},child:[]}]},{tag:`polygon`,attr:{fill:`#fff`,points:`24,43 19,31 24,32 29,31`},child:[]},{tag:`polygon`,attr:{fill:`#D32F2F`,points:`23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34`},child:[]},{tag:`path`,attr:{fill:`#546E7A`,d:`M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z`},child:[]}]})(e)}function we(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#673AB7`,d:`M40,7H8c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h5v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.7-0.4,1.4-1,1.7V41h18v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.7-0.4,1.4-1,1.7V41h5c2.2,0,4-1.8,4-4V11 C44,8.8,42.2,7,40,7z`},child:[]},{tag:`g`,attr:{fill:`#D1C4E9`},child:[{tag:`circle`,attr:{cx:`24`,cy:`18`,r:`4`},child:[]},{tag:`path`,attr:{d:`M31,28c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V28z`},child:[]}]}]})(e)}function Te(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#424242`,d:`M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z`},child:[]},{tag:`path`,attr:{fill:`#E65100`,d:`M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z`},child:[]},{tag:`path`,attr:{fill:`#FF6E40`,d:`M40,28H8c-2.2,0-4-1.8-4-4v-9c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v9C44,26.2,42.2,28,40,28z`},child:[]},{tag:`path`,attr:{fill:`#FFF3E0`,d:`M26,26h-4c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2C27,25.6,26.6,26,26,26z`},child:[]}]})(e)}function Ee(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`g`,attr:{fill:`#00BCD4`},child:[{tag:`rect`,attr:{x:`19`,y:`22`,width:`10`,height:`20`},child:[]},{tag:`rect`,attr:{x:`6`,y:`12`,width:`10`,height:`30`},child:[]},{tag:`rect`,attr:{x:`32`,y:`6`,width:`10`,height:`36`},child:[]}]}]})(e)}function De(e){return w({tag:`svg`,attr:{version:`1`,viewBox:`0 0 48 48`,enableBackground:`new 0 0 48 48`},child:[{tag:`path`,attr:{fill:`#2196F3`,d:`M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z`},child:[]},{tag:`g`,attr:{fill:`#fff`},child:[{tag:`rect`,attr:{x:`22`,y:`20`,width:`4`,height:`11`},child:[]},{tag:`circle`,attr:{cx:`24`,cy:`15`,r:`2`},child:[]}]}]})(e)}function Oe(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32z`},child:[]}]})(e)}function ke(e){return w({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z`},child:[]}]})(e)}function Ae(e){return w({tag:`svg`,attr:{viewBox:`0 0 192 512`},child:[{tag:`path`,attr:{d:`M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384z`},child:[]}]})(e)}var je=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),k=o(((e,t)=>{t.exports=je()}))();function Me({taskbarFooterColor:e,chosenFont:t,volume:n,setVolume:r}){let[i,a]=(0,_.useState)({wifi:!1,sound:!1,calendar:!1,time:!1}),o=(0,_.useRef)(null),s=e=>{a(t=>({wifi:!1,sound:!1,calendar:!1,time:!1,[e]:!t[e]}))};(0,_.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&a({wifi:!1,sound:!1,calendar:!1,time:!1})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let c=new Date,l=c.toLocaleDateString(`en-US`,{month:`long`,day:`numeric`,year:`numeric`}),u=c.toLocaleTimeString(`en-US`,{hour:`numeric`,minute:`2-digit`,hour12:!0}),d=c.getFullYear(),f=c.getMonth(),p=new Date(d,f,1).getDay(),m=new Date(d,f+1,0).getDate();return(0,k.jsxs)(`div`,{ref:o,children:[(0,k.jsxs)(`div`,{className:`taskbar`,style:{backgroundColor:e,fontFamily:t},children:[(0,k.jsxs)(`div`,{className:`taskbar-left-side`,children:[(0,k.jsx)(`img`,{src:`images/website-icon.png`,className:`react-icon`}),` GeorgieOS`]}),(0,k.jsxs)(`div`,{className:`taskbar-right-side`,children:[(0,k.jsx)(T,{className:`taskbar-icon`,onClick:()=>s(`wifi`)}),(0,k.jsx)(O,{className:`taskbar-icon`,onClick:()=>s(`sound`)}),(0,k.jsx)(`div`,{className:`taskbar-date`,onClick:()=>s(`calendar`),children:l}),(0,k.jsx)(`div`,{className:`taskbar-time`,onClick:()=>s(`time`),children:u})]})]}),i.wifi&&(0,k.jsxs)(`div`,{className:`taskbar-popup`,style:{fontFamily:t},children:[(0,k.jsx)(`div`,{className:`popup-title`,children:`WiFi`}),(0,k.jsx)(`div`,{className:`wifi-list`,children:[{name:`Georgie_WiFi`,strength:4},{name:`Home_5G`,strength:3},{name:`Cafe_Free`,strength:2}].map(e=>(0,k.jsxs)(`div`,{className:`wifi-item`,children:[(0,k.jsx)(`div`,{children:e.name}),(0,k.jsx)(`div`,{className:`wifi-bars`,children:Array.from({length:e.strength},(e,t)=>(0,k.jsx)(Ae,{},t))})]},e.name))})]}),i.sound&&(0,k.jsxs)(`div`,{className:`taskbar-popup`,style:{fontFamily:t},children:[(0,k.jsx)(`div`,{className:`popup-title`,children:`Sound`}),(0,k.jsxs)(`div`,{className:`volume-control`,children:[(0,k.jsx)(`span`,{style:{cursor:`pointer`,fontSize:`18px`,display:`flex`,alignItems:`center`},onClick:()=>r(n>0?0:1),children:n>0?(0,k.jsx)(_e,{style:{fontSize:`22px`}}):(0,k.jsx)(he,{style:{fontSize:`22px`}})}),(0,k.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:n,onChange:e=>r(Number(e.target.value))})]})]}),i.calendar&&(0,k.jsxs)(`div`,{className:`taskbar-popup calendar-popup`,style:{fontFamily:t},children:[(0,k.jsx)(`div`,{className:`popup-title`,children:l}),(0,k.jsxs)(`div`,{className:`calendar-grid`,children:[(0,k.jsx)(`div`,{className:`header`,children:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>(0,k.jsx)(`div`,{children:e},e))}),(0,k.jsxs)(`div`,{className:`body`,children:[Array.from({length:p}).map((e,t)=>(0,k.jsx)(`div`,{},`e`+t)),Array.from({length:m},(e,t)=>{let n=t+1;return(0,k.jsx)(`div`,{className:`day ${n===c.getDate()?`active`:``}`,children:n},n)})]})]})]}),i.time&&(0,k.jsxs)(`div`,{className:`taskbar-popup`,style:{fontFamily:t},children:[(0,k.jsx)(`div`,{className:`popup-title`,children:`System Time`}),(0,k.jsx)(`div`,{className:`hint`,children:u})]})]})}function Ne(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`g`,attr:{id:`Warning`},child:[{tag:`g`,attr:{},child:[{tag:`g`,attr:{},child:[{tag:`path`,attr:{d:`M12.5,8.752a.5.5,0,0,0-1,0h0v6a.5.5,0,0,0,1,0Z`},child:[]},{tag:`circle`,attr:{cx:`11.999`,cy:`16.736`,r:`0.5`},child:[]}]},{tag:`path`,attr:{d:`M18.642,20.934H5.385A2.5,2.5,0,0,1,3.163,17.29L9.792,4.421a2.5,2.5,0,0,1,4.444,0L20.865,17.29a2.5,2.5,0,0,1-2.223,3.644ZM12.014,4.065a1.478,1.478,0,0,0-1.334.814L4.052,17.748a1.5,1.5,0,0,0,1.333,2.186H18.642a1.5,1.5,0,0,0,1.334-2.186L13.348,4.879A1.478,1.478,0,0,0,12.014,4.065Z`},child:[]}]}]}]})(e)}function Pe(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`g`,attr:{id:`Logout`},child:[{tag:`g`,attr:{},child:[{tag:`path`,attr:{d:`M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z`},child:[]},{tag:`path`,attr:{d:`M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z`},child:[]}]}]}]})(e)}function Fe({items:e,setDesktopItems:t,footerItems:n,setStartOpen:r,startOpen:i,setAppsOpenedTotal:a,taskbarFooterColor:o,chosenFont:s}){let c=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!i)return;let e=e=>{c.current&&!c.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[i]);let l=e.filter(e=>e.isOpen&&e.location===`desktop`);return(0,k.jsxs)(`div`,{className:`footer`,style:{backgroundColor:o},children:[(0,k.jsxs)(`div`,{className:`footer-icon-start`,ref:c,onClick:()=>r(e=>!e),children:[(0,k.jsx)(`img`,{src:`images/start-images/start.png`,alt:`Start`,className:`footer-icon-image-start`}),i&&(0,k.jsxs)(`div`,{className:`start-menu`,style:{backgroundColor:o,fontFamily:s},onClick:e=>e.stopPropagation(),children:[n.map(e=>(0,k.jsxs)(`div`,{className:`start-menu-item`,onClick:()=>{t(t=>{let n=Math.max(...t.map(e=>e.zIndex??0))+1;return t.map(t=>t.name===e.name?{...t,isOpen:!0,isMinimized:!1,zIndex:n}:t)}),r(!1)},children:[(0,k.jsx)(`img`,{src:e.icon,alt:e.name,className:`start-menu-icon`}),(0,k.jsx)(`span`,{children:e.name})]},`start-${e.name}`)),(0,k.jsxs)(`div`,{className:`start-menu-item-log-out`,onClick:()=>{window.close()},children:[(0,k.jsx)(Pe,{style:{color:`red`}}),`Log Out`]})]})]}),(0,k.jsxs)(`div`,{className:`footer-icons`,children:[n.map(e=>(0,k.jsx)(`div`,{className:`footer-icon ${e.isMinimized?`minimized`:``}`,style:{backgroundColor:e.isOpen?`rgba(255,255,255,0.3)`:`transparent`},onClick:()=>{t(t=>{let n=Math.max(...t.map(e=>e.zIndex??0))+1;return t.map(t=>t.name===e.name?{...t,isOpen:!0,isMinimized:t.isOpen?!t.isMinimized:!1,zIndex:n}:t)}),a(e=>e+1)},children:(0,k.jsx)(`img`,{src:e.icon,alt:e.name,className:`footer-icon-image`})},e.name)),l.map(e=>(0,k.jsx)(`div`,{className:`footer-icon ${e.isMinimized?`minimized`:``}`,style:{backgroundColor:`rgba(255,255,255,0.3)`},onClick:()=>{t(t=>{let n=Math.max(...t.map(e=>e.zIndex??0))+1;return t.map(t=>t.name===e.name?{...t,isMinimized:!1,isOpen:!0,zIndex:n}:t)})},children:(0,k.jsx)(`img`,{src:e.icon,alt:e.name,className:`footer-icon-image`})},`open-${e.name}`))]})]})}function Ie(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M16 3H22V9H20V5H16V3ZM2 3H8V5H4V9H2V3ZM20 19V15H22V21H16V19H20ZM4 19H8V21H2V15H4V19Z`},child:[]}]})(e)}function Le(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z`},child:[]}]})(e)}function Re({desktopItems:e,setDesktopItems:t,wallpaper:n,setAppsOpenedTotal:r,chosenFont:i}){let[a,o]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=()=>{o(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),document.addEventListener(`webkitfullscreenchange`,e),document.addEventListener(`msfullscreenchange`,e),()=>{document.removeEventListener(`fullscreenchange`,e),document.removeEventListener(`webkitfullscreenchange`,e),document.removeEventListener(`msfullscreenchange`,e)}},[]),(0,k.jsxs)(`div`,{className:`desktop`,style:{backgroundImage:`url(${n})`,fontFamily:i},children:[(0,k.jsxs)(`div`,{className:`desktop-icons`,children:[e.map((e,n)=>(0,k.jsxs)(`div`,{className:`desktop-icon`,onClick:()=>{t(t=>{let n=Math.max(...t.map(e=>e.zIndex??0))+1;return t.map(t=>t.name===e.name?{...t,isOpen:!t.isOpen,isMinimized:!1,zIndex:n}:t)}),r(e=>e+1)},children:[(0,k.jsx)(`img`,{src:e.icon,alt:`${e.name}-icon`,className:`desktop-icon-image`}),(0,k.jsx)(`div`,{className:`desktop-icon-name`,children:e.name})]},n)),(0,k.jsxs)(`div`,{className:`recycle-bin-icon`,children:[(0,k.jsx)(`div`,{className:`nothing-to-see-hover-container`,children:`Nothing To See`}),(0,k.jsx)(`img`,{src:`images/desktop-icons/recycle-bin.png`,alt:`Recycle Bin Icon`,className:`desktop-icon-image`}),(0,k.jsx)(`div`,{className:`desktop-icon-name`,children:`Recycle Bin`})]})]}),(0,k.jsx)(`div`,{className:`fullscreen-button`,onClick:()=>{let e=document.documentElement;document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},children:a?(0,k.jsx)(Le,{}):(0,k.jsx)(Ie,{})})]})}function ze(e){return w({tag:`svg`,attr:{viewBox:`0 0 16 16`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M3 5v9h9V5H3zm8 8H4V6h7v7z`},child:[]},{tag:`path`,attr:{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5 5h1V4h7v7h-1v1h2V3H5v2z`},child:[]}]})(e)}function Be(e){return w({tag:`svg`,attr:{viewBox:`0 0 16 16`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M14 8v1H3V8h11z`},child:[]}]})(e)}function Ve(e){return w({tag:`svg`,attr:{viewBox:`0 0 16 16`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M3 3v10h10V3H3zm9 9H4V4h8v8z`},child:[]}]})(e)}function He(e){return w({tag:`svg`,attr:{viewBox:`0 0 16 16`,fill:`currentColor`},child:[{tag:`path`,attr:{fillRule:`evenodd`,clipRule:`evenodd`,d:`M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z`},child:[]}]})(e)}var Ue=(0,_.createContext)(null),We=()=>{let e=(0,_.useContext)(Ue);if(!e)throw Error(`useTheme must be used inside ThemeProvider`);return e};function Ge(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z`},child:[]}]})(e)}function Ke(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`},child:[]}]})(e)}function qe(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z`},child:[]}]})(e)}function Je(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z`},child:[]}]})(e)}function Ye(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0V0z`},child:[]},{tag:`path`,attr:{d:`M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z`},child:[]}]})(e)}function Xe(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0V0z`},child:[]},{tag:`path`,attr:{d:`M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z`},child:[]}]})(e)}function Ze({item:e,setDesktopItems:t,getLayout:n,children:r}){let{windowColor:i,chosenFont:a,setChosenWebsite:o}=We(),s=()=>{t(t=>{let n=Math.max(...t.map(e=>e.zIndex??0))+1;return t.map(t=>t.name===e.name?{...t,zIndex:n}:t)})},c=(0,_.useRef)(!1),l=(0,_.useRef)({x:0,y:0}),u=n=>{if(e.isMaximized)return;c.current=!0,l.current={x:n.clientX-e.x,y:n.clientY-e.y};let r=n=>{if(!c.current)return;let r=n.clientX-l.current.x,i=n.clientY-l.current.y;t(t=>t.map(t=>t.name===e.name?{...t,x:r,y:i}:t))},i=()=>{c.current=!1,document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseup`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)},d=(0,_.useRef)(!1),f=(0,_.useRef)(``),p=(0,_.useRef)({x:0,y:0}),m=(0,_.useRef)({width:0,height:0,x:0,y:0});if(!e.isOpen||e.isMinimized)return null;let h=(n,r)=>{if(n.stopPropagation(),e.isMaximized)return;d.current=!0,f.current=r,p.current={x:n.clientX,y:n.clientY},m.current={width:e.width,height:e.height,x:e.x,y:e.y};let i=n=>{if(!d.current)return;let i=n.clientX-p.current.x,a=n.clientY-p.current.y,o=m.current.width,s=m.current.height,c=m.current.x,l=m.current.y;r.includes(`right`)&&(o=m.current.width+i),r.includes(`bottom`)&&(s=m.current.height+a),r.includes(`left`)&&(o=m.current.width-i,c=m.current.x+i),r.includes(`top`)&&(s=m.current.height-a,l=m.current.y+a),o<300&&(o=300),s<200&&(s=200),t(t=>t.map(t=>t.name===e.name?{...t,width:o,height:s,x:c,y:l}:t))},a=()=>{d.current=!1,document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)};return(0,k.jsxs)(`div`,{className:`window`,onMouseDown:s,style:{position:`absolute`,left:e.x,top:e.y,width:e.width,height:e.height,zIndex:e.zIndex,borderRadius:e.isMaximized?0:8,background:i,fontFamily:a},children:[(0,k.jsxs)(`div`,{className:`window-header`,onMouseDown:u,children:[(0,k.jsxs)(`div`,{className:`window-title`,children:[(0,k.jsx)(`img`,{src:e.icon}),e.name,e.name===`Browser`&&(0,k.jsx)(`button`,{className:`browser-home-btn`,onMouseDown:e=>e.stopPropagation(),onClick:()=>o(``),children:(0,k.jsx)(Ge,{})})]}),(0,k.jsxs)(`div`,{className:`window-controls`,children:[(0,k.jsx)(`button`,{onClick:()=>{t(t=>t.map(t=>t.name===e.name?{...t,isMinimized:!0}:t))},children:(0,k.jsx)(Be,{})}),(0,k.jsx)(`button`,{onClick:()=>{t(t=>t.map(t=>{if(t.name!==e.name)return t;let r=n();return t.isMaximized?{...t,x:t.prevX??200,y:t.prevY??100,width:t.prevWidth??700,height:t.prevHeight??500,isMaximized:!1}:{...t,prevX:t.x,prevY:t.y,prevWidth:t.width,prevHeight:t.height,x:0,y:r.offsetY,width:r.width,height:r.height,isMaximized:!0}}))},children:e.isMaximized?(0,k.jsx)(ze,{}):(0,k.jsx)(Ve,{})}),(0,k.jsx)(`button`,{onClick:()=>{t(t=>t.map(t=>t.name===e.name?{...t,isOpen:!1,isMinimized:!1,x:t.isMaximized?t.prevX??t.x:t.x,y:t.isMaximized?t.prevY??t.y:t.y,width:t.isMaximized?t.prevWidth??t.width:t.width,height:t.isMaximized?t.prevHeight??t.height:t.height,isMaximized:!1}:t))},children:(0,k.jsx)(He,{})})]})]}),(0,k.jsx)(`div`,{className:`window-content`,style:{fontFamily:a},children:r}),(0,k.jsx)(`div`,{className:`resize-handle right`,onMouseDown:e=>h(e,`right`)}),(0,k.jsx)(`div`,{className:`resize-handle bottom`,onMouseDown:e=>h(e,`bottom`)}),(0,k.jsx)(`div`,{className:`resize-handle left`,onMouseDown:e=>h(e,`left`)}),(0,k.jsx)(`div`,{className:`resize-handle top`,onMouseDown:e=>h(e,`top`)}),(0,k.jsx)(`div`,{className:`resize-handle bottom-right`,onMouseDown:e=>h(e,`bottom-right`)}),(0,k.jsx)(`div`,{className:`resize-handle bottom-left`,onMouseDown:e=>h(e,`bottom-left`)}),(0,k.jsx)(`div`,{className:`resize-handle top-right`,onMouseDown:e=>h(e,`top-right`)}),(0,k.jsx)(`div`,{className:`resize-handle top-left`,onMouseDown:e=>h(e,`top-left`)})]})}function Qe(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z`},child:[]}]})(e)}function $e(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z`},child:[]},{tag:`path`,attr:{d:`M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z`},child:[]}]})(e)}function et({item:e,setDesktopItems:t,getLayout:n}){let r=(e,t)=>{let n=Math.max(...e.map(e=>e.zIndex??0))+1;return e.map(e=>e.name===t?{...e,isOpen:!0,isMinimized:!1,zIndex:n}:e)};return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`my-computer-container`,children:[(0,k.jsxs)(`div`,{className:`my-computer-sidebar`,children:[(0,k.jsx)(`h3`,{children:`Quick Access`}),(0,k.jsxs)(`div`,{className:`sidebar-item`,style:{color:`#333`},onClick:()=>{t(e=>r(e,`About Me`))},children:[(0,k.jsx)(Ce,{}),` About Me`]}),(0,k.jsxs)(`div`,{className:`sidebar-item`,onClick:()=>{t(e=>r(e,`Contact`))},children:[(0,k.jsx)(we,{}),` Contact`]}),(0,k.jsxs)(`div`,{className:`sidebar-item`,onClick:()=>{t(e=>r(e,`Projects`))},children:[(0,k.jsx)(Te,{}),` Projects`]}),(0,k.jsxs)(`div`,{className:`sidebar-item`,onClick:()=>{t(e=>r(e,`Resume`))},children:[(0,k.jsx)(ge,{}),` Resume.pdf`]}),(0,k.jsx)(`div`,{className:`sidebar-divider`}),(0,k.jsx)(`h3`,{children:`Connect`}),(0,k.jsxs)(`div`,{className:`sidebar-item`,style:{color:`#333`},onClick:()=>{window.open(`https://github.com/GiorgiMumladze`,`_blank`)},children:[(0,k.jsx)(le,{}),` GitHub`]}),(0,k.jsxs)(`div`,{className:`sidebar-item`,style:{color:`#0077b5`},onClick:()=>{window.open(`https://www.linkedin.com/in/giorgi-mumladze-6b0816354/`,`_blank`)},children:[(0,k.jsx)(ce,{}),` LinkedIn`]}),(0,k.jsxs)(`div`,{className:`sidebar-item`,style:{color:`#c71610`},onClick:()=>{t(e=>r(e,`Contact`))},children:[(0,k.jsx)($e,{}),` Email`]})]}),(0,k.jsxs)(`div`,{className:`my-computer-content`,children:[(0,k.jsxs)(`div`,{className:`welcome-card`,children:[(0,k.jsx)(`h1`,{children:`Giorgi Mumladze`}),(0,k.jsx)(`p`,{children:`Frontend Developer focused on building modern, responsive and interactive web applications.`})]}),(0,k.jsxs)(`div`,{className:`folder-grid`,children:[(0,k.jsxs)(`div`,{className:`folder-card`,onClick:()=>{t(e=>r(e,`Contact`))},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/contact.png`,alt:`Contact`,className:`folder-card-icon`}),(0,k.jsx)(`p`,{children:`Contact`}),(0,k.jsx)(`span`,{children:`Email, LinkedIn and GitHub`})]}),(0,k.jsxs)(`div`,{className:`folder-card`,onClick:()=>{t(e=>r(e,`About Me`))},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/about-me.png`,alt:`About Me`,className:`folder-card-icon`}),(0,k.jsx)(`p`,{children:`About Me`}),(0,k.jsx)(`span`,{children:`Skills, experience and technologies`})]}),(0,k.jsxs)(`div`,{className:`folder-card`,onClick:()=>{t(e=>r(e,`Projects`))},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/projects.png`,alt:`Projects`,className:`folder-card-icon`}),(0,k.jsx)(`p`,{children:`Projects`}),(0,k.jsx)(`span`,{children:`React apps, games and APIs`})]}),(0,k.jsxs)(`div`,{className:`folder-card`,onClick:()=>{t(e=>r(e,`Music`))},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/music.png`,alt:`Music`,className:`folder-card-icon`}),(0,k.jsx)(`p`,{children:`Music`}),(0,k.jsx)(`span`,{children:`Listen to some music while you explore my portfolio`})]}),(0,k.jsxs)(`div`,{className:`folder-card`,onClick:()=>{t(e=>r(e,`Games`))},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/games.png`,alt:`Games`,className:`folder-card-icon`}),(0,k.jsx)(`p`,{children:`Games`}),(0,k.jsx)(`span`,{children:`Play some fun games I built`})]}),(0,k.jsxs)(`div`,{className:`folder-card`,onClick:()=>{t(e=>r(e,`Resume`))},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/resume.png`,alt:`Resume`,className:`folder-card-icon`}),(0,k.jsx)(`p`,{children:`Resume.pdf`}),(0,k.jsx)(`span`,{children:`Download my latest CV`})]})]})]})]})})}function tt(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z`},child:[]}]})(e)}function nt({item:e,setDesktopItems:t,getLayout:n}){let[r,i]=(0,_.useState)(!1);return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`contact-container`,children:[(0,k.jsxs)(`div`,{className:`contact-header`,children:[(0,k.jsxs)(`h1`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,color:`#333`},children:[(0,k.jsx)(`img`,{src:`images/desktop-icons/lets-connect.png`,className:`lets-connect-image`}),` `,`Let's Connect`]}),(0,k.jsx)(`p`,{children:`I'm always open to discussing projects, freelance work and frontend opportunities.`})]}),(0,k.jsxs)(`div`,{className:`contact-list`,children:[(0,k.jsxs)(`div`,{className:`contact-card`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`h3`,{style:{display:`flex`,alignItems:`center`,gap:`5px`,color:`#d14836`},children:[(0,k.jsx)(tt,{}),` Email`]}),(0,k.jsx)(`p`,{children:`georgemumladze13@gmail.com`})]}),(0,k.jsx)(`button`,{onClick:async()=>{try{await navigator.clipboard.writeText(`georgemumladze13@gmail.com`),i(!0),setTimeout(()=>{i(!1)},1500)}catch(e){console.error(`Copy failed:`,e)}},children:r?`Copied`:`Copy`})]}),(0,k.jsxs)(`div`,{className:`contact-card`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`h3`,{style:{display:`flex`,alignItems:`center`,gap:`5px`,color:`#333`},children:[(0,k.jsx)(ue,{}),` GitHub`]}),(0,k.jsx)(`p`,{children:`https://github.com/GiorgiMumladze`})]}),(0,k.jsx)(`button`,{onClick:()=>{window.open(`https://github.com/GiorgiMumladze`,`_blank`)},children:`Visit`})]}),(0,k.jsxs)(`div`,{className:`contact-card`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`h3`,{style:{display:`flex`,alignItems:`center`,gap:`5px`,color:`#0077b5`},children:[(0,k.jsx)(ce,{}),` LinkedIn`]}),(0,k.jsx)(`p`,{children:`https://www.linkedin.com/in/giorgi-mumladze-6b0816354/`})]}),(0,k.jsx)(`button`,{onClick:()=>{window.open(`https://www.linkedin.com/in/giorgi-mumladze-6b0816354/`,`_blank`)},children:`Visit`})]})]}),(0,k.jsx)(`div`,{className:`availability-card`,children:(0,k.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`5px`,color:`#333`,justifyContent:`center`},children:[(0,k.jsx)(ve,{}),` Available for Frontend Development`]})})]})})}function rt({item:e,setDesktopItems:t,getLayout:n}){return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`about-container`,children:[(0,k.jsxs)(`div`,{className:`about-header`,children:[(0,k.jsx)(`div`,{className:`avatar`,children:`GM`}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{children:`George Mumladze`}),(0,k.jsx)(`p`,{className:`subtitle`,children:`Frontend Developer`})]})]}),(0,k.jsxs)(`div`,{className:`about-section`,children:[(0,k.jsxs)(`h3`,{children:[(0,k.jsx)(De,{}),` About`]}),(0,k.jsx)(`p`,{children:`I'm a frontend developer who enjoys building clean, interactive UI systems and desktop-style web apps. I focus on React, animations, and smooth user experiences.`})]}),(0,k.jsxs)(`div`,{className:`about-section`,children:[(0,k.jsxs)(`h3`,{children:[(0,k.jsx)(Ee,{}),` Skills`]}),(0,k.jsxs)(`div`,{className:`tags`,children:[(0,k.jsx)(`span`,{children:`React`}),(0,k.jsx)(`span`,{children:`TypeScript`}),(0,k.jsx)(`span`,{children:`JavaScript`}),(0,k.jsx)(`span`,{children:`HTML`}),(0,k.jsx)(`span`,{children:`CSS`}),(0,k.jsx)(`span`,{children:`Bootstrap`}),(0,k.jsx)(`span`,{children:`Tailwind CSS`}),(0,k.jsx)(`span`,{children:`Git`}),(0,k.jsx)(`span`,{children:`GitHub`}),(0,k.jsx)(`span`,{children:`Node.js`}),(0,k.jsx)(`span`,{children:`Vitest`}),(0,k.jsx)(`span`,{children:`Jasmine`}),(0,k.jsx)(`span`,{children:`Responsive Design`}),(0,k.jsx)(`span`,{children:`UI/UX`})]})]}),(0,k.jsxs)(`div`,{className:`about-section`,children:[(0,k.jsxs)(`h3`,{children:[(0,k.jsx)(xe,{}),` What I Build`]}),(0,k.jsxs)(`ul`,{children:[(0,k.jsx)(`li`,{children:`Desktop-style web interfaces`}),(0,k.jsx)(`li`,{children:`Interactive React apps`}),(0,k.jsx)(`li`,{children:`UI/UX-focused projects`})]})]}),(0,k.jsx)(`div`,{className:`about-footer`,children:(0,k.jsx)(`p`,{children:`“Always building, always improving.”`})})]})})}function it({title:e,description:t,tags:n,icon:r,url:i,setChosenWebsite:a,setDesktopItems:o}){return(0,k.jsxs)(`div`,{className:`project-card`,onClick:()=>{a(i),o(e=>{let t=Math.max(...e.map(e=>e.zIndex??0))+1;return e.map(e=>e.name===`Browser`?{...e,isOpen:!0,isMinimized:!1,zIndex:t}:e)})},children:[(0,k.jsx)(`div`,{className:`project-icon`,children:r}),(0,k.jsxs)(`div`,{className:`project-content`,children:[(0,k.jsx)(`h3`,{children:e}),(0,k.jsx)(`p`,{children:t}),(0,k.jsx)(`div`,{className:`project-tags`,children:n.map(e=>(0,k.jsx)(`span`,{children:e},e))})]}),(0,k.jsxs)(`div`,{className:`project-footer`,children:[(0,k.jsx)(`span`,{children:`Open Project`}),(0,k.jsx)(`span`,{children:`↗`})]})]})}function at({item:e,setDesktopItems:t,getLayout:n,setChosenWebsite:r}){return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`projects-app`,children:[(0,k.jsxs)(`div`,{className:`projects-header`,children:[(0,k.jsx)(`h2`,{children:`My Projects`}),(0,k.jsx)(`p`,{children:`Collection of apps, games & web tools I've built`})]}),(0,k.jsx)(`div`,{className:`projects-grid`,children:[{icon:`MG`,title:`My Games`,url:`https://giorgimumladze.github.io/my-games/`,description:`A collection of browser games including Typing Speed Tester, Tic Tac Toe, Cosmic Crystals, Asteroid Clicker, Spin The Wheel, Color Memory, Reaction Time Tester, Quiz Master, Hangman and Wordle.`,tags:[`React`,`Games`,`Algorithms`]},{icon:`TB`,title:`Tasty Bites`,url:`https://giorgimumladze.github.io/tasty-bites/`,description:`Modern e-commerce website for a cafe featuring product browsing, menu organization and responsive shopping experience.`,tags:[`React`,`E-Commerce`,`Responsive Design`]},{icon:`TR`,title:`Translate App`,url:`https://giorgimumladze.github.io/translate-app/`,description:`Language translation application allowing users to translate text quickly between different languages.`,tags:[`API`,`React`,`Utilities`]},{icon:`CS`,title:`Coffee Shop`,url:`https://giorgimumladze.github.io/coffee-shop/#/`,description:`E-commerce website focused on coffee products with product listings and modern UI.`,tags:[`React`,`E-Commerce`,`UI Design`]},{icon:`WA`,title:`Weather App`,url:`https://giorgimumladze.github.io/weather-app/`,description:`Weather dashboard displaying current weather conditions and forecast information.`,tags:[`React`,`Weather API`,`Data Fetching`]},{icon:`IC`,title:`Interactive Comments`,url:`https://giorgimumladze.github.io/interactive-comments-section/`,description:`Interactive comments section supporting replies, editing, deleting and dynamic interactions.`,tags:[`React`,`CRUD`,`State Management`]},{icon:`RC`,title:`REST Countries API`,url:`https://giorgimumladze.github.io/rest-countries-api/`,description:`Explore countries around the world with filtering, searching and region selection.`,tags:[`REST API`,`React`,`Search`]},{icon:`CB`,title:`Chatbot`,url:`https://giorgimumladze.github.io/chatbot/`,description:`Chat interface application featuring conversation flow and modern chat UI.`,tags:[`React`,`Chat UI`,`Frontend`]},{icon:`US`,title:`URL Shortening API`,url:`https://giorgimumladze.github.io/url-shortening-api/`,description:`Converts long URLs into shorter links with copy-to-clipboard functionality.`,tags:[`API`,`React`,`Utilities`]},{icon:`MS`,title:`Multi Step Form`,url:`https://giorgimumladze.github.io/multi-step-form-app/`,description:`Multi-stage form experience with validation and progress tracking.`,tags:[`Forms`,`React`,`UX`]},{icon:`TD`,title:`Todo App`,url:`https://giorgimumladze.github.io/todo-app/`,description:`Task management application allowing users to create and organize tasks.`,tags:[`React`,`Productivity`,`State Management`]}].map(e=>(0,k.jsx)(it,{title:e.title,description:e.description,tags:e.tags,icon:e.icon,url:e.url,setChosenWebsite:r,setDesktopItems:t},e.title))})]})})}function ot(e){return w({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z`},child:[]}]})(e)}function st(e){return w({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.25-7C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5`},child:[]}]})(e)}function ct(e){return w({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z`},child:[]}]})(e)}function lt({item:e,setDesktopItems:t,getLayout:n,volume:r,setVolume:i}){let a=[{title:`water afro`,artist:`Kontraa`,song:`music/songs/kontraa-water-afro-pop-music.mp3`,image:`music/song-images/kontraa-water-afro-pop-music-image.jpg`,duration:`01:09`},{title:`action rock`,artist:`Magpiemusic`,song:`music/songs/magpiemusic-action-trailer-promo-rock.mp3`,image:`music/song-images/magpiemusic-action-trailer-promo-rock-image.jpg`,duration:`01:43`},{title:`comedy cartoon`,artist:`Starostin`,song:`music/songs/starostin-comedy-cartoon-funny-background-music.mp3`,image:`music/song-images/starostin-comedy-cartoon-funny-background-music-image.jpeg`,duration:`02:28`},{title:`chill sunset`,artist:`Finley`,song:`music/songs/finley-chill-sunset-chill-nature.mp3`,image:`music/song-images/finley-chill-sunset-chill-nature-image.jpg`,duration:`02:49`},{title:`downtempo chill electronic`,artist:`Alex Morgan`,song:`music/songs/alex-morgan-downtempo-chill-electronic.mp3`,image:`music/song-images/alex-morgan-downtempo-chill-electronic-image.jpg`,duration:`03:18`},{title:`chill music`,artist:`Mirostar`,song:`music/songs/mirostar-chill-chill-music.mp3`,image:`music/song-images/mirostar-chill-chill-music-image.png`,duration:`01:43`}],[o]=(0,_.useState)(()=>new Audio),[s,c]=(0,_.useState)(a[0]),[l,u]=(0,_.useState)(0),[d,f]=(0,_.useState)(!1);(0,_.useEffect)(()=>{o.volume=r},[o,r]),(0,_.useEffect)(()=>(o.ontimeupdate=()=>{u(o.currentTime)},o.onended=()=>{f(!1)},()=>{o.pause()}),[o]);let p=e=>{o.pause(),o.src=e.song,o.currentTime=0,o.play(),u(0),c(e),f(!0)},m=()=>{s&&(o.paused?(o.play(),f(!0)):(o.pause(),f(!1)))},h=e=>{let t=Math.floor(e/60),n=Math.floor(e%60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`},g=o.duration&&!isNaN(o.duration)?l/o.duration*100:0;return(0,_.useEffect)(()=>{a.length>0&&(o.src=a[0].song)},[]),(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`music-app`,children:[(0,k.jsxs)(`div`,{className:`music-header`,children:[(0,k.jsx)(`h2`,{children:`Music`}),(0,k.jsx)(`p`,{children:`Your personal playlist`})]}),(0,k.jsxs)(`div`,{className:`now-playing`,children:[(0,k.jsx)(`div`,{className:`album-cover`,children:s?(0,k.jsx)(`img`,{src:s.image,alt:s.title,style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`12px`}}):(0,k.jsx)(qe,{style:{fontSize:`48px`,color:`#888`}})}),(0,k.jsxs)(`div`,{className:`track-info`,children:[(0,k.jsx)(`h3`,{children:s?.title||`No song playing`}),(0,k.jsx)(`p`,{children:s?.artist||``}),(0,k.jsx)(`div`,{className:`progress-bar`,children:(0,k.jsx)(`div`,{className:`progress`,style:{width:`${g}%`}})}),(0,k.jsxs)(`div`,{className:`time-row`,children:[(0,k.jsx)(`span`,{children:h(l)}),(0,k.jsx)(`span`,{children:s?.duration||`00:00`})]}),(0,k.jsxs)(`div`,{className:`music-controls`,children:[(0,k.jsx)(`button`,{className:`music-btn`,onClick:m,children:d?(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,justifyContent:`center`},children:[(0,k.jsx)(st,{style:{fontSize:`18px`}}),` `,`Pause`]}):(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,justifyContent:`center`},children:[(0,k.jsx)(ot,{style:{fontSize:`18px`}}),` `,`Play`]})}),(0,k.jsxs)(`div`,{className:`volume-control`,children:[(0,k.jsx)(`span`,{style:{cursor:`pointer`,fontSize:`18px`,display:`flex`,alignItems:`center`},onClick:()=>i(r>0?0:1),children:r>0?(0,k.jsx)(_e,{style:{fontSize:`22px`}}):(0,k.jsx)(he,{style:{fontSize:`22px`}})}),(0,k.jsx)(`input`,{type:`range`,min:`0`,max:`1`,step:`0.01`,value:r,onChange:e=>i(Number(e.target.value))})]})]})]})]}),(0,k.jsx)(`div`,{className:`playlist`,children:a.map((e,t)=>(0,k.jsxs)(`div`,{className:`song-card ${s?.title===e.title?`active`:``}`,onClick:()=>p(e),children:[(0,k.jsx)(`span`,{children:e.title}),(0,k.jsx)(`span`,{children:e.duration})]},t))})]})})}function ut(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M105 37v114h30V37h-30zm272 0v114h30V37h-30zM16 48v20.94c20.9 6.4 43.8 13.28 43.8 13.28l-43.8.51V112h71V48H16zm137 0v64h206V88.53l-26.9-9.7 26.9-4.54V48H153zm272 0v64h71V48h-71zM73 169v42.5l38.1 9.4-38.1 8.2v68.5l44.3-3.2-44.3 29v70c32.2 10 62.4 32.8 92.1 53.2 3.5 2.4 7 4.7 10.5 7l25-25-9.5 34.9c22.6 13.7 44.5 23.5 64.9 23.5 28.2 0 59.1-18.6 90.9-40.4 29.7-20.4 59.9-43.2 92.1-53.2v-13.9l-66.8-17.1 66.8-12.6V169H306.7L256 202.8 205.3 169H73z`},child:[]}]})(e)}function dt(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M254.563 20.75c-42.96 0-85.918 16.387-118.688 49.156-65.54 65.54-65.852 172.15-.313 237.688 65.54 65.54 172.15 65.226 237.688-.313 65.54-65.538 65.54-171.835 0-237.374-32.77-32.77-75.728-49.156-118.688-49.156zm-.157 18.47c25.68.053 51.363 6.724 74.313 19.968-13.573-3.984-26.266-2.455-34.22 5.5-14.437 14.437-7.796 44.485 14.813 67.093 22.608 22.61 52.625 29.22 67.062 14.782 8.523-8.522 9.706-22.468 4.594-37.125 36.352 57.684 29.586 134.6-20.69 184.875-29.158 29.16-67.353 43.773-105.56 43.813 9.436-2.3 17.762-6.732 24.436-13.406 28.885-28.886 15.64-88.954-29.594-134.19-45.234-45.233-105.302-58.51-134.187-29.624-4.052 4.052-7.266 8.723-9.688 13.875 3.092-33.537 17.473-66.222 43.157-91.905 29.198-29.2 67.384-43.737 105.562-43.656zM386.97 319.28c-.205.206-.39.422-.595.626-72.78 72.78-191.252 73.155-264.03.375-.278-.275-.54-.565-.814-.842-11.987 9.483-18.81 20.384-18.81 32 0 36.523 67.315 66.125 151.343 66.125 84.027 0 152.093-29.6 152.093-66.125 0-11.68-6.97-22.637-19.187-32.157zm39.717 54.564c-22.225 32.29-91.192 55.906-172.625 55.906-81.172 0-149.954-23.46-172.406-55.594-12.638 11.3-19.72 24.052-19.72 37.563.002 46.928 85.546 85.03 192.064 85.03 106.518 0 192.97-38.1 192.97-85.03 0-13.637-7.313-26.498-20.283-37.876z`},child:[]}]})(e)}function ft(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M386.688 487.75l-119.236-55.423c-7.898-3.673-11.334-13.065-7.66-20.976l84.374-181.523c3.667-7.904 13.07-11.334 20.963-7.667l119.24 55.434c7.9 3.673 11.33 13.065 7.656 20.964l-84.37 181.524c-3.678 7.904-13.076 11.334-20.968 7.667zM98.95 467.945L19.79 284.09c-3.448-8.007.255-17.302 8.25-20.744l39.196-16.872 48.975 184.044c4.694 17.588 22.755 28.078 40.36 23.39l39.032-10.386-75.907 32.686c-8.007 3.443-17.296-.255-20.744-8.262zm33.89-41.86L81.362 232.638c-2.24-8.42 2.78-17.078 11.19-19.312l34.033-9.052-4.098 30.465c-2.422 18.036 10.224 34.652 28.285 37.087l79.828 10.758-32.497 109.467c-3.345 11.28-.37 22.948 6.866 31.18l-52.82 14.05c-8.42 2.24-17.07-2.77-19.31-11.196zm108.428-4.76l-16.02-4.76c-8.36-2.49-13.12-11.267-10.644-19.627l56.97-191.9c2.484-8.36 11.28-13.12 19.622-10.65l49.073 14.583.008-.005.12.044-.133-.034c-4.93 3.254-9.04 7.868-11.705 13.605l-84.38 181.53c-2.587 5.586-3.486 11.517-2.915 17.218zm-5.707-155.43l-82.486-11.117c-8.633-1.166-14.704-9.12-13.538-17.758l26.73-198.39c1.16-8.633 9.125-14.698 17.74-13.538l130.327 17.563c8.627 1.166 14.692 9.125 13.532 17.752L311.42 182.46l-15.33-4.552c-17.467-5.197-35.826 4.784-41.004 22.232l-19.525 65.755zm-5.19-31.46c4.67-3.055 7.474-7.438 8.42-13.145.936-5.633-.357-10.617-3.866-14.945-3.51-4.414-8.39-7.14-14.656-8.178-6.344-1.057-11.93-.073-16.75 2.956-4.826 3.03-7.692 7.316-8.615 12.87-.898 5.386.425 10.42 3.97 15.082 3.565 4.504 8.525 7.285 14.863 8.34 6.35 1.057 11.893.062 16.634-2.98zm25.978-81.243c4.693-2.726 8.888-5.434 12.598-8.117 3.703-2.684 6.915-5.586 9.635-8.725 2.72-3.13 4.967-6.573 6.733-10.307 1.76-3.74 3.048-8.032 3.85-12.865 1.262-7.62 1.02-14.358-.735-20.234-1.75-5.87-4.693-10.94-8.833-15.22-4.135-4.27-9.24-7.753-15.318-10.43-6.07-2.684-12.804-4.633-20.174-5.86-7.692-1.28-15.3-1.602-22.815-.977-7.516.614-14.63 2.247-21.346 4.88l-5.95 35.802c6.813-4.25 13.77-7.104 20.855-8.567 7.09-1.475 13.726-1.7 19.913-.668 21.467 4.092 19.44 24.898 8.76 34.03-5.652 4.473-11.334 8.802-15.942 11.345-10.48 5.914-27.69 23.125-22.542 45.145l31.284 5.202c-7.11-17.757 11.663-29.462 20.028-34.434z`},child:[]}]})(e)}function pt(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M252.625 36.307c-6.092.006-12.026.422-17.766 1.367-6.74 15.11-15.352 32.332-15.352 32.332l-32.752-13.453c-16.186 7.61-10.852 30.03-20.06 38.44-27.888 22.73-83.84 68.866-89.725 84.734-12.537 33.803-19.03 69.85-20.005 104.95 14.493 7.74 31.347 20.743 47.008 34.73 14.336 14.328 35.16 31.31 40.828 49.716l2.096 7.168-6.658 3.384c-11.466 5.26-9.42 16.91-11.275 25.86l-17.602-3.77c1.218-13.002 3.663-24.96 13.206-33.12-8.763-13.648-21.562-25.924-32.584-35.81-11.454-10.23-24.25-20.012-34.933-26.947 1.674 46.477 1.207 81.64 21.255 114.607l31.945 5.094-.553 28.053 42.27-3.222-5.3 30.28c92.217 38.28 247.83-57.624 288.362-162.223 8.685-22.415 48.163-45.242 49.896-67.717 2.734-35.472-8.37-70.06-27.727-100.74-13.795 13.218-29.79 17.135-46.56 9.796l20.255 23.86-13.723 11.648-27.4-32.273-1.24-18.446c-5.757-5.283-11.19-11.362-16.046-17.94l-33.95 9.97-5.073-17.27 29.023-8.522c-3.782-7.177-6.71-14.646-8.39-22.174-2.694-12.064-2.116-24.784 4.7-35.326.07-.108.145-.21.216-.317-36.018-4.868-73.49-16.754-106.387-16.718zm121.287 26.806c-3.475 5.376-4.253 12.655-2.248 21.633s6.862 19.155 13.3 28.45c6.44 9.293 14.446 17.73 22.216 23.577 23.14 12.916 41.762 7.763 39.084-16.968-1.89-16.137-17.54-29.672-23.46-35.753-12.655-12.994-38.097-34.83-48.892-20.94zm-36.207 4.266l-9.47 21.282-25.104 9.29-18.34-10.36zM233.393 96.282l30.316 11.072 27.874 46.264 32.05 14.146-7.27 16.468-37.26-16.45zm-43.89 30.66c9.625-.01 19.89 2.822 25.817 11.815 6.116 5.094 16.364 8.502 27.846 12.816l-6.332 16.852c-5.8-2.18-12.472-4.145-18.963-6.996-1.048 3.52-2.588 6.89-4.358 9.935a64.73 64.73 0 0 1-2.97 4.625c12.61 6.737 24.022 11.983 30.12 12.506l-1.54 17.934c-13.374-1.148-27.19-8.556-41.235-16.645a69.874 69.874 0 0 1-5.22 4.035c-5.618 3.903-12.543 7.623-20.044 10.5 2.925 14.92 3.148 30.108 2.94 41.203l-17.997-.337c.19-10.045-.234-23.675-2.45-36.112-5.99.925-12.046 1.06-17.944-.383-.09-.02-.177-.046-.266-.07.083 13.554-1.982 28.058-11.95 42.374l-14.77-10.285c10.87-15.612 8.98-30.818 7.804-49.224-1.566-5.005-1.475-10.304-.23-14.988 1.682-6.33 5.1-11.886 9.187-16.945 8.176-10.118 19.228-18.362 28.807-23.49 11.795-5.06 22.388-9.09 33.75-9.12zm-.665 18.012c-.64.012-1.308.047-2.004.102-7.502.613-16.64 3.695-22.588 6.88-7.375 3.946-17.25 11.444-23.3 18.93-3.023 3.743-5.045 7.453-5.79 10.254-1.15 5.08 2.084 9.024 6.29 10.087 3.02.738 7.46.737 12.396-.164 9.87-1.802 21.545-7.135 28.553-12.004 5.274-3.666 11.863-10.37 15.556-16.722 3.85-12.748.492-17.54-9.112-17.363zm259.953 37.65l12.642 62.508-54.782 40.737 33.01-56.89zm-61.31 20.75l3.182 17.717-66.13 11.883-9.65 25.186-25.25 11.934 21.725-53.04zm-11.63 64.83l16.3 7.63c-7.236 15.46-9.834 23.982-8.974 33.36 6.018.288 12.134.976 18.222 1.934l-2.796 17.78c-20.668-3.25-40.167-1.63-49.913 5.192-4.873 3.41-7.866 7.633-9.088 14.89-1.223 7.254-.21 17.796 4.873 31.997-14.763 5.31-28.485 9.344-43.684 14.436l-5.716-17.068 27.455-9.197c-1.625-8.534-1.85-16.21-.678-23.16 1.844-10.947 7.55-19.874 15.334-25.773-2.568-5.383-5.2-11.09-7.092-17.383-2.792-9.287-.37-27.64-.56-27.658 0 0 15.726 15.586 17.798 22.477 1.373 4.567 3.592 9.417 6.01 14.548 3.83-1.158 7.836-1.963 11.965-2.47-.69-12.83 3.032-25.492 10.543-41.536zm-145.416 3.946l-21.852 46.684-1.49 65.057-17.38-68.036s36.75-43.703 40.722-43.703zm38.574 139.85a84.97 84.97 0 0 1 7.69.32c13.628 1.172 27.29 5.13 40.73 9.132l-5.137 17.252c-13.297-3.96-26.01-7.494-37.134-8.45-5.48-.47-10.477-.36-15.1.508l-14.878-14.148c6.827-2.917 14.02-4.278 21.263-4.56a75.72 75.72 0 0 1 2.568-.054zm-38.95 15.075l13.983 13.3c-10.892 17.037-14.518 26.755-31.18 37.32 1.64-5.576 3.002-16.252 5.88-26.984 2.176-8.11 5.298-16.793 11.32-23.635z`},child:[]}]})(e)}function mt(e){return w({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M8.56 3.69a9 9 0 0 0 -2.92 1.95`},child:[]},{tag:`path`,attr:{d:`M3.69 8.56a9 9 0 0 0 -.69 3.44`},child:[]},{tag:`path`,attr:{d:`M3.69 15.44a9 9 0 0 0 1.95 2.92`},child:[]},{tag:`path`,attr:{d:`M8.56 20.31a9 9 0 0 0 3.44 .69`},child:[]},{tag:`path`,attr:{d:`M15.44 20.31a9 9 0 0 0 2.92 -1.95`},child:[]},{tag:`path`,attr:{d:`M20.31 15.44a9 9 0 0 0 .69 -3.44`},child:[]},{tag:`path`,attr:{d:`M20.31 8.56a9 9 0 0 0 -1.95 -2.92`},child:[]},{tag:`path`,attr:{d:`M15.44 3.69a9 9 0 0 0 -3.44 -.69`},child:[]}]})(e)}function ht(e){return w({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32zm84 4a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288zm0-88a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm44 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20z`},child:[]}]})(e)}var gt=[{name:`Typing Speed Tester`,description:`Measure your WPM and improve typing accuracy.`,icon:(0,k.jsx)(de,{}),gameURL:`https://giorgimumladze.github.io/typing-speed/`},{name:`Tic Tac Toe`,description:`Classic X vs O battle with AI or friend mode.`,icon:(0,k.jsx)(mt,{}),gameURL:`https://giorgimumladze.github.io/tic-tac-toe/`},{name:`Cosmic Crystals`,description:`Travel through space and collect rare crystals.`,icon:(0,k.jsx)(dt,{}),gameURL:`https://giorgimumladze.github.io/cosmic-crystals/`},{name:`Asteroid Clicker`,description:`Destroy asteroids and upgrade your firepower.`,icon:(0,k.jsx)(pt,{}),gameURL:`https://giorgimumladze.github.io/asteroid-clicker/`},{name:`Spin The Wheel`,description:`Spin the wheel and test your luck.`,icon:(0,k.jsx)(pe,{}),gameURL:`https://giorgimumladze.github.io/spin-the-wheel/`},{name:`Color Memory`,description:`Remember and repeat increasingly complex patterns.`,icon:(0,k.jsx)(E,{}),gameURL:`https://giorgimumladze.github.io/color-memory/`},{name:`Rock Paper Scissors Advanced`,description:`Classic game with extra mechanics and twists.`,icon:(0,k.jsx)(D,{}),gameURL:`https://giorgimumladze.github.io/rock-paper-scissors-advanced/`},{name:`Reaction Time Tester`,description:`Test how fast your reflexes really are.`,icon:(0,k.jsx)(ct,{}),gameURL:`https://giorgimumladze.github.io/reaction-time-tester/`},{name:`Quiz Master`,description:`Challenge your knowledge across multiple categories.`,icon:(0,k.jsx)(me,{}),gameURL:`https://giorgimumladze.github.io/quiz-master/`},{name:`Hangman`,description:`Guess the word before you run out of chances.`,icon:(0,k.jsx)(ut,{}),gameURL:`https://giorgimumladze.github.io/hangman/`},{name:`Memory Card Game`,description:`Flip cards and find all matching pairs.`,icon:(0,k.jsx)(Je,{}),gameURL:`https://giorgimumladze.github.io/memory-card-game/`},{name:`Wordle`,description:`Find the hidden word in 6 attempts.`,icon:(0,k.jsx)(fe,{}),gameURL:`https://giorgimumladze.github.io/wordle-game/`},{name:`Rock Paper Scissors`,description:`Play against the computer and test your luck.`,icon:(0,k.jsx)(ft,{}),gameURL:`https://giorgimumladze.github.io/rock-paper-scissors-app/`}];function _t({item:e,setDesktopItems:t,getLayout:n,setChosenWebsite:r}){return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`games-app`,children:[(0,k.jsxs)(`div`,{className:`games-header`,children:[(0,k.jsxs)(`h1`,{style:{display:`flex`,alignItems:`center`},children:[(0,k.jsx)(ht,{style:{marginRight:`10px`,color:`rgb(105, 128, 228)`}}),` Games Center`]}),(0,k.jsx)(`p`,{children:`Play and explore mini games built with React & TypeScript.`})]}),(0,k.jsx)(`div`,{className:`games-grid`,children:gt.map(e=>(0,k.jsxs)(`div`,{className:`game-card`,children:[(0,k.jsx)(`div`,{className:`game-icon`,children:e.icon}),(0,k.jsxs)(`div`,{className:`game-info`,children:[(0,k.jsx)(`h3`,{children:e.name}),(0,k.jsx)(`p`,{children:e.description})]}),(0,k.jsx)(`button`,{className:`play-btn`,onClick:()=>{t(e=>{let t=Math.max(...e.map(e=>e.zIndex??0))+1;return e.map(e=>e.name===`Browser`?{...e,isOpen:!0,isMinimized:!1,zIndex:t}:e)}),r(e.gameURL||``)},children:`Play Game`})]},e.name))})]})})}function vt({item:e,setDesktopItems:t,getLayout:n}){return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`resume-container`,children:[(0,k.jsxs)(`div`,{className:`resume-toolbar`,children:[(0,k.jsx)(`span`,{children:`📄 Giorgi-Mumladze-CV.pdf`}),(0,k.jsx)(`div`,{className:`download-button`,onClick:()=>{let e=document.createElement(`a`);e.href=`images/CV-Giorgi-Mumladze.pdf`,e.download=`CV-Giorgi-Mumladze.pdf`,document.body.appendChild(e),e.click(),document.body.removeChild(e)},children:`Download PDF`})]}),(0,k.jsx)(`div`,{className:`resume-viewer`,children:(0,k.jsx)(`div`,{className:`pdf-container`,children:(0,k.jsx)(`img`,{src:`images/CV-Giorgi-Mumladze.png`,className:`cv-image`})})})]})})}function yt({item:e,setDesktopItems:t,getLayout:n,setWallpaper:r}){return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`wallpaper-app`,children:[(0,k.jsx)(`h2`,{className:`title`,children:`Wallpapers`}),(0,k.jsx)(`div`,{className:`wallpaper-grid`,children:[{id:`1`,name:`Sunset`,url:`images/desktop-wallpapers/desktop-wallpaper-1.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-1-thumb.jpg`},{id:`2`,name:`Night Sky`,url:`images/desktop-wallpapers/desktop-wallpaper-2.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-2-thumb.jpg`},{id:`3`,name:`Mountains`,url:`images/desktop-wallpapers/desktop-wallpaper-3.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-3-thumb.jpg`},{id:`4`,name:`Forest River`,url:`images/desktop-wallpapers/desktop-wallpaper-4.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-4-thumb.jpg`},{id:`5`,name:`Night Street`,url:`images/desktop-wallpapers/desktop-wallpaper-5.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-5-thumb.jpg`},{id:`6`,name:`City Road`,url:`images/desktop-wallpapers/desktop-wallpaper-6.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-6-thumb.jpg`},{id:`7`,name:`Pixel Art`,url:`images/desktop-wallpapers/desktop-wallpaper-7.jpg`,thumbnail:`images/desktop-wallpapers/desktop-wallpaper-7.jpg`}].map(e=>(0,k.jsxs)(`div`,{className:`wallpaper-item`,onClick:()=>r(e.url),children:[(0,k.jsx)(`img`,{src:e.thumbnail,alt:e.name,loading:`lazy`,decoding:`async`,fetchPriority:`low`}),(0,k.jsxs)(`div`,{className:`wallpaper-overlay`,children:[(0,k.jsx)(`span`,{className:`wallpaper-text`,children:e.name}),(0,k.jsx)(`span`,{className:`wallpaper-action`,children:`Set as wallpaper`})]})]},e.id))})]})})}function bt({item:e,setDesktopItems:t,getLayout:n}){let[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{l.current?.focus()},[]);let u={computer:`My Computer`,contact:`Contact`,about:`About Me`,projects:`Projects`,music:`Music`,games:`Games`,resume:`Resume`,wallpapers:`Wallpapers`,browser:`Browser`,command:`Command`,user:`User`,code:`Code`,note:`Note`,settings:`Settings`};return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`command-app`,children:[(0,k.jsxs)(`div`,{className:`terminal-header`,children:[(0,k.jsx)(`span`,{className:`dot red`}),(0,k.jsx)(`span`,{className:`dot yellow`}),(0,k.jsx)(`span`,{className:`dot green`}),(0,k.jsx)(`div`,{className:`terminal-title`,children:`GeorgieOS Command`})]}),(0,k.jsxs)(`div`,{className:`terminal-body`,onClick:()=>l.current?.focus(),children:[(0,k.jsx)(`div`,{className:`terminal-line`,children:`GeorgieOS Command v1.0`}),(0,k.jsxs)(`div`,{className:`terminal-line`,children:[`Type `,(0,k.jsx)(`span`,{className:`command-highlight`,children:`help`}),` to see available commands.`]}),r.map((e,t)=>(0,k.jsxs)(`div`,{className:`terminal-line`,children:[(0,k.jsx)(`span`,{className:`prompt`,children:`C:\\Users\\George>`}),(0,k.jsx)(`span`,{children:e})]},t)),s&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`br`,{}),(0,k.jsx)(`div`,{className:`terminal-line`,children:`Available Commands:`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`computer`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`contact`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`about`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`projects`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`music`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`games`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`resume`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`wallpapers`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`browser`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`command`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`user`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`code`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`note`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`settings`}),(0,k.jsx)(`div`,{className:`terminal-command`,children:`clear`}),(0,k.jsx)(`br`,{})]}),(0,k.jsxs)(`div`,{className:`terminal-input`,children:[(0,k.jsx)(`span`,{className:`prompt`,children:`C:\\Users\\George>`}),(0,k.jsx)(`input`,{ref:l,type:`text`,className:`command-input`,value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{if(e.key===`Enter`){let e=a.trim().toLowerCase();if(i(t=>[...t,e]),c(e===`help`),e===`clear`)i([]);else if(u[e]){let n=u[e];t(e=>{let t=Math.max(...e.map(e=>e.zIndex??0))+1;return e.map(e=>e.name===n?{...e,isOpen:!0,isMinimized:!1,zIndex:t}:e)})}o(``),requestAnimationFrame(()=>{l.current?.focus()})}}})]})]})]})})}function xt({item:e,setDesktopItems:t,getLayout:n,items:r,appsOpenedTotal:i}){let a=r.filter(e=>e.isOpen).length,[o,s]=(0,_.useState)(`0h 0m 0s`);(0,_.useEffect)(()=>{let e=localStorage.getItem(`georgie_os_start_time`);e||(e=Date.now().toString(),localStorage.setItem(`georgie_os_start_time`,e));let t=parseInt(e),n=setInterval(()=>{let e=Date.now()-t;s(`${Math.floor(e/36e5)}h ${Math.floor(e%36e5/6e4)}m ${Math.floor(e%6e4/1e3)}s`)},1e3);return()=>clearInterval(n)},[]);let c={name:`George`,role:`GeorgieOS User`,status:`Online`,avatar:`images/george-avatar.jpg`,uptime:o,appsOpened:i,windowsOpen:a};return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`user-app`,children:[(0,k.jsxs)(`div`,{className:`user-header`,children:[(0,k.jsx)(`img`,{className:`user-avatar`,src:c.avatar,alt:`avatar`}),(0,k.jsxs)(`div`,{className:`user-info`,children:[(0,k.jsx)(`h2`,{children:c.name}),(0,k.jsx)(`p`,{children:c.role}),(0,k.jsx)(`span`,{className:`status`,children:c.status})]})]}),(0,k.jsxs)(`div`,{className:`user-section`,children:[(0,k.jsx)(`h3`,{children:`System Overview`}),(0,k.jsxs)(`div`,{className:`stat-grid`,children:[(0,k.jsxs)(`div`,{className:`stat`,children:[(0,k.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`5px`},children:[(0,k.jsx)(Se,{}),` Uptime`]}),(0,k.jsx)(`b`,{children:c.uptime})]}),(0,k.jsxs)(`div`,{className:`stat`,children:[(0,k.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`5px`},children:[(0,k.jsx)(ye,{}),` Apps Opened`]}),(0,k.jsx)(`b`,{children:c.appsOpened})]}),(0,k.jsxs)(`div`,{className:`stat`,children:[(0,k.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`5px`},children:[(0,k.jsx)(Oe,{style:{color:`#4a90e2`}}),` Windows`]}),(0,k.jsx)(`b`,{children:c.windowsOpen})]})]})]})]})})}var St=`.app {\r
  width: 100vw;\r
  height: 100vh;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
body {\r
  margin: 0;\r
  overflow: hidden;\r
}\r
\r
* {\r
  box-sizing: border-box;\r
}\r
\r
.mobile-warning {\r
  position: fixed;\r
  inset: 0;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  padding: 16px;\r
  background:\r
    radial-gradient(circle at top, #1c2f63 0%, #090909 50%, #000 100%);\r
  z-index: 999999;\r
}\r
\r
.mobile-warning-box {\r
  width: min(100%, 550px);\r
  padding: clamp(20px, 4vw, 36px);\r
  background: rgba(18, 18, 24, 0.92);\r
  backdrop-filter: blur(12px);\r
  border: 1px solid rgba(255, 255, 255, 0.08);\r
  border-radius: clamp(14px, 2vw, 20px);\r
  color: white;\r
  text-align: center;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  box-shadow:\r
    0 0 40px rgba(0, 0, 0, 0.5),\r
    0 0 80px rgba(37, 99, 235, 0.12);\r
}\r
\r
.mobile-warning-box h1 {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  margin: 0 0 18px;\r
  font-size: clamp(1.25rem, 5vw, 2rem);\r
  font-weight: 700;\r
  line-height: 1.2;\r
}\r
\r
.mobile-warning-box h1 svg {\r
  flex-shrink: 0;\r
  font-size: clamp(1.4rem, 6vw, 2.2rem);\r
  color: #ffb300;\r
}\r
\r
.mobile-warning-box p {\r
  margin: 0 0 14px;\r
  color: #cfcfcf;\r
  font-size: clamp(0.9rem, 3.2vw, 1rem);\r
  line-height: 1.6;\r
  max-width: 420px;\r
}\r
\r
.mobile-warning-box button {\r
  margin-top: 10px;\r
  width: 100%;\r
  max-width: 280px;\r
  padding: clamp(12px, 3vw, 15px);\r
  border: none;\r
  border-radius: 12px;\r
  background: #2563eb;\r
  color: white;\r
  font-size: clamp(0.95rem, 3vw, 1rem);\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: 0.2s ease;\r
}\r
\r
.mobile-warning-box button:hover {\r
  background: #1e40af;\r
}\r
\r
.mobile-warning-box button:active {\r
  transform: translateY(0);\r
}\r
\r
@media (max-width: 400px) {\r
  .mobile-warning-box h1 {\r
    flex-direction: column;\r
    gap: 6px;\r
  }\r
}`,Ct=`import './App.css'
import TaskBar from './components/TaskBar'
import Footer from './components/Footer'
import Desktop from './components/Desktop'
import { useState, useEffect } from 'react'
import MyComputer from './components/desktop-apps/MyComputer'
import Contact from './components/desktop-apps/Contact'
import AboutMe from './components/desktop-apps/AboutMe'
import Projects from './components/desktop-apps/Projects'
import Music from './components/desktop-apps/Music'
import Games from './components/desktop-apps/Games'
import Resume from './components/desktop-apps/Resume'
import Wallpapers from './components/desktop-apps/Wallpapers'
import Command from './components/footer-apps/Command'
import User from './components/footer-apps/User'
import Code from './components/footer-apps/Code'
import Note from './components/footer-apps/Note'
import Settings from './components/footer-apps/Settings'
import Browser from './components/footer-apps/Browser'
import { ThemeContext } from './ThemeContext'
import { CiWarning } from "react-icons/ci";

type DesktopItem = {
  name: string;
  icon: string;
  isOpen: boolean;

  location: 'desktop' | 'footer';

  x: number;
  y: number;

  width: number;
  height: number;

  isMinimized?: boolean;
  isMaximized?: boolean;

  prevX?: number;
  prevY?: number;
  prevWidth?: number;
  prevHeight?: number;

  zIndex?: number;
};

function App() {

  const [items, setItems] = useState<DesktopItem[]>([
    {
      name: 'My Computer',
      icon: 'images/desktop-icons/my-computer.png',
      isOpen: false,

      x: 250,
      y: 80,
      width: 700,
      height: 500,

      prevX: 250,
      prevY: 80,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Contact',
      icon: 'images/desktop-icons/contact.png',
      isOpen: false,

      x: 300,
      y: 100,
      width: 700,
      height: 500,

      prevX: 300,
      prevY: 100,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'About Me',
      icon: 'images/desktop-icons/about-me.png',
      isOpen: false,

      x: 350,
      y: 120,
      width: 700,
      height: 500,

      prevX: 350,
      prevY: 120,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Projects',
      icon: 'images/desktop-icons/projects.png',
      isOpen: false,

      x: 400,
      y: 140,
      width: 700,
      height: 500,

      prevX: 400,
      prevY: 140,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Music',
      icon: 'images/desktop-icons/music.png',
      isOpen: false,

      x: 450,
      y: 160,
      width: 500,
      height: 500,

      prevX: 450,
      prevY: 160,
      prevWidth: 500,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Games',
      icon: 'images/desktop-icons/games.png',
      isOpen: false,

      x: 500,
      y: 180,
      width: 700,
      height: 500,

      prevX: 500,
      prevY: 180,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Resume',
      icon: 'images/desktop-icons/resume.png',
      isOpen: false,

      x: 550,
      y: 200,
      width: 700,
      height: 500,

      prevX: 550,
      prevY: 200,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Wallpapers',
      icon: 'images/desktop-icons/wallpapers.png',
      isOpen: false,

      x: 600,
      y: 220,
      width: 700,
      height: 500,

      prevX: 600,
      prevY: 220,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'desktop'
    },

    {
      name: 'Browser',
      icon: 'images/start-images/browser.png',
      isOpen: false,

      x: 250,
      y: 80,
      width: 700,
      height: 500,

      prevX: 250,
      prevY: 80,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'footer'
    },

    {
      name: 'Command',
      icon: 'images/start-images/command.png',
      isOpen: false,

      x: 300,
      y: 100,
      width: 700,
      height: 500,

      prevX: 300,
      prevY: 100,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'footer'
    },

    {
      name: 'User',
      icon: 'images/start-images/user.png',
      isOpen: false,

      x: 350,
      y: 120,
      width: 700,
      height: 500,

      prevX: 350,
      prevY: 120,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'footer'
    },

    {
      name: 'Code',
      icon: 'images/start-images/code.png',
      isOpen: false,

      x: 400,
      y: 140,
      width: 700,
      height: 500,

      prevX: 400,
      prevY: 140,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'footer'
    },

    {
      name: 'Note',
      icon: 'images/start-images/note.png',
      isOpen: false,

      x: 450,
      y: 160,
      width: 700,
      height: 500,

      prevX: 450,
      prevY: 160,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'footer'
    },

    {
      name: 'Settings',
      icon: 'images/start-images/settings.png',
      isOpen: false,

      x: 500,
      y: 180,
      width: 700,
      height: 500,

      prevX: 500,
      prevY: 180,
      prevWidth: 700,
      prevHeight: 500,

      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      location: 'footer'
    },
  ]);

  const [chosenWebsite, setChosenWebsite] = useState<string>('')
  const desktopItems = items.filter(item => item.location === 'desktop');
  const footerItems = items.filter(item => item.location === 'footer');

  const [startOpen, setStartOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState<string>('images/desktop-wallpapers/desktop-wallpaper-3.jpg');

  const [appsOpenedTotal, setAppsOpenedTotal] = useState(0);

  const appComponents: Record<string, React.ComponentType<any>> = {
    'My Computer': MyComputer,
    'Contact': Contact,
    'About Me': AboutMe,
    'Projects': Projects,
    'Music': Music,
    'Games': Games,
    'Resume': Resume,
    'Wallpapers': Wallpapers,
    'Browser': Browser,
    'Command': Command,
    'User': User,
    'Code': Code,
    'Note': Note,
    'Settings': Settings
  };

  const getLayout = () => {
    const taskbar = document.querySelector('.taskbar') as HTMLElement;

    const taskbarHeight = taskbar?.offsetHeight ?? 0;

    return {
      width: window.innerWidth,
      height: window.innerHeight - taskbarHeight,
      offsetY: taskbarHeight
    };
  };


  const [taskbarFooterColor, setTaskbarFooterColor] = useState<string>(' #0b1128de');
  const [chosenFont, setChosenFont] = useState<string>('Inter');
  const [windowColor, setWindowColor] = useState<string>('rgba(28, 28, 30, 0.72)');

  const [volume, setVolume] = useState(1);


  useEffect(() => {
    setItems(prev =>
      prev.map(item => {
        if (item.name !== 'Browser') return item;
        if (!item.isOpen) return item;

        const layout = getLayout();

        return {
          ...item,
          isMaximized: true,
          x: 0,
          y: layout.offsetY,
          width: layout.width,
          height: layout.height,
        };
      })
    );
  }, [items.find(i => i.name === 'Browser')?.isOpen]);



  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [continueAnyway, setContinueAnyway] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile && !continueAnyway) {
    return (
      <div className="mobile-warning">
        <div className="mobile-warning-box">
          <h1>
            <CiWarning />
            Unsupported Device
          </h1>
          <p>
            GeorgieOS was designed for desktop computers.
          </p>
          <p>
            Window dragging, resizing, multitasking, and other desktop interactions
            may not work correctly on mobile devices.
          </p>
          <button onClick={() => setContinueAnyway(true)}>
            Continue Anyway
          </button>
        </div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        windowColor,
        setWindowColor,
        chosenFont,
        setChosenFont,
        setChosenWebsite
      }}
    >
      <div className="app">
        <TaskBar
          taskbarFooterColor={taskbarFooterColor}
          chosenFont={chosenFont}
          volume={volume}
          setVolume={setVolume}
        />

        <Desktop
          desktopItems={desktopItems}
          setDesktopItems={setItems}
          wallpaper={wallpaper}
          setAppsOpenedTotal={setAppsOpenedTotal}
          chosenFont={chosenFont}
        />

        {items.map(item => {
          if (!item.isOpen) return null;
          const Component = appComponents[item.name];
          if (!Component) return null;

          return (
            <Component
              key={item.name}
              item={item}
              setDesktopItems={setItems}
              getLayout={getLayout}
              chosenWebsite={chosenWebsite}
              setChosenWebsite={setChosenWebsite}
              setWallpaper={setWallpaper}
              items={items}
              appsOpenedTotal={appsOpenedTotal}
              setTaskbarFooterColor={setTaskbarFooterColor}
              setChosenFont={setChosenFont}
              chosenFont={chosenFont}
              taskbarFooterColor={taskbarFooterColor}
              windowColor={windowColor}
              setWindowColor={setWindowColor}
              volume={volume}
              setVolume={setVolume}
            />
          );
        })}


        <Footer
          items={items}
          setDesktopItems={setItems}
          footerItems={footerItems}
          setStartOpen={setStartOpen}
          startOpen={startOpen}
          setAppsOpenedTotal={setAppsOpenedTotal}
          taskbarFooterColor={taskbarFooterColor}
          chosenFont={chosenFont}
        />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
`,wt=`import { createContext, useContext } from "react";\r
\r
type ThemeContextType = {\r
  windowColor: string;\r
  setWindowColor: (color: string) => void;\r
  chosenFont: string;\r
  setChosenFont: (font: string) => void;\r
  setChosenWebsite: React.Dispatch<React.SetStateAction<string>>\r
};\r
\r
export const ThemeContext = createContext<ThemeContextType | null>(null);\r
export const useTheme = () => {\r
  const ctx = useContext(ThemeContext);\r
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");\r
  return ctx;\r
};`,Tt=`.desktop {\r
  width: 100%;\r
  height: 100%;\r
  background-size: cover;\r
  background-position: center;\r
  padding: 70px 20px;\r
  user-select: none;\r
}\r
\r
.fullscreen-button {\r
  position: absolute;\r
  bottom: 10px;\r
  right: 10px;\r
  background-color: rgba(0, 0, 0, 0.5);\r
  color: white;\r
  border: none;\r
  padding: 10px;\r
  cursor: pointer;\r
  font-size: 20px;\r
}\r
\r
.fullscreen-button:hover {\r
  background-color: rgba(0, 0, 0, 0.7);\r
}\r
\r
.desktop-icons {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 20px;\r
  flex-direction: column;\r
}\r
\r
.desktop-icon {\r
  text-align: center;\r
  color: white;\r
  font-size: 12px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  padding: 5px;\r
  border-radius: 5px;\r
  max-width: 100px;\r
  max-height: 80px;\r
}\r
\r
.desktop-icon:hover {\r
  background-color: rgba(255, 255, 255, 0.2);\r
}\r
\r
.desktop-icon-image {\r
  width: 48px;\r
  height: 48px;\r
  object-fit: contain;\r
  margin-bottom: 5px;\r
}\r
\r
.recycle-bin-icon {\r
  text-align: center;\r
  color: white;\r
  font-size: 12px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  padding: 5px;\r
  border-radius: 5px;\r
  max-width: 100px;\r
  max-height: 80px;\r
  position: absolute;\r
  bottom: 100px;\r
  right: 40px;\r
}\r
\r
.recycle-bin-icon:hover {\r
  background-color: rgba(255, 255, 255, 0.2);\r
}\r
\r
.recycle-bin-label {\r
  color: white;\r
  font-size: 12px;\r
  text-align: center;\r
}\r
\r
.desktop-icon-name {\r
  color: white;\r
  font-size: 12px;\r
  text-align: center;\r
}\r
\r
.desktop-icon-image {\r
  width: 48px;\r
  height: 48px;\r
  object-fit: contain;\r
  margin-bottom: 5px;\r
}\r
\r
.nothing-to-see-hover-container {\r
  position: absolute;\r
  bottom: 100%;\r
  left: 50%;\r
  transform: translateX(-50%);\r
  background: #ffffe1;\r
  color: black;\r
  border: 1px solid #000;\r
  padding: 4px 8px;\r
  font-size: 11px;\r
  white-space: nowrap;\r
  opacity: 0;\r
  visibility: hidden;\r
  transition: opacity 0.15s ease;\r
  pointer-events: none;\r
  margin-bottom: 6px;\r
  z-index: 9999;\r
}\r
\r
.recycle-bin-icon:hover .nothing-to-see-hover-container {\r
  opacity: 1;\r
  visibility: visible;\r
}`,Et=`import './Desktop.css';\r
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri";\r
import { useEffect, useState } from 'react';\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  location: 'desktop' | 'footer';\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
\r
function Desktop({ desktopItems,\r
  setDesktopItems,\r
  wallpaper,\r
  setAppsOpenedTotal,\r
  chosenFont\r
}: {\r
  desktopItems: DesktopItem[],\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>,\r
  wallpaper: string,\r
  setAppsOpenedTotal: React.Dispatch<React.SetStateAction<number>>,\r
  chosenFont: string\r
}) {\r
\r
  const [isFullscreen, setIsFullscreen] = useState(false);\r
  const toggleFullscreen = () => {\r
    const elem = document.documentElement;\r
\r
    if (!document.fullscreenElement) {\r
      if (elem.requestFullscreen) {\r
        elem.requestFullscreen();\r
      } else if ((elem as any).webkitRequestFullscreen) {\r
        (elem as any).webkitRequestFullscreen();\r
      }\r
    } else {\r
      if (document.exitFullscreen) {\r
        document.exitFullscreen();\r
      }\r
    }\r
  };\r
  useEffect(() => {\r
    const handleChange = () => {\r
      setIsFullscreen(!!document.fullscreenElement);\r
    };\r
\r
    document.addEventListener("fullscreenchange", handleChange);\r
    document.addEventListener("webkitfullscreenchange", handleChange);\r
    document.addEventListener("msfullscreenchange", handleChange);\r
\r
    return () => {\r
      document.removeEventListener("fullscreenchange", handleChange);\r
      document.removeEventListener("webkitfullscreenchange", handleChange);\r
      document.removeEventListener("msfullscreenchange", handleChange);\r
    };\r
  }, []);\r
\r
  return (\r
    <div className="desktop" style={{\r
      backgroundImage: \`url(\${wallpaper})\`,\r
      fontFamily: chosenFont\r
    }}>\r
      <div className="desktop-icons">\r
        {\r
          desktopItems.map((icon, index) => (\r
            <div className="desktop-icon" key={index} onClick={() => {\r
              setDesktopItems(prev => {\r
                const highest =\r
                  Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
                return prev.map(i =>\r
                  i.name === icon.name\r
                    ? {\r
                      ...i,\r
                      isOpen: !i.isOpen,\r
                      isMinimized: false,\r
                      zIndex: highest\r
                    }\r
                    : i\r
                );\r
              });\r
\r
              setAppsOpenedTotal(prev => prev + 1);\r
            }}>\r
              <img src={icon.icon} alt={\`\${icon.name}-icon\`} className="desktop-icon-image" />\r
              <div className="desktop-icon-name">{icon.name}</div>\r
            </div>\r
          ))\r
        }\r
\r
        <div className="recycle-bin-icon">\r
          <div className="nothing-to-see-hover-container">Nothing To See</div>\r
          <img src="images/desktop-icons/recycle-bin.png" alt="Recycle Bin Icon" className="desktop-icon-image" />\r
          <div className="desktop-icon-name">Recycle Bin</div>\r
        </div>\r
      </div>\r
\r
      <div className="fullscreen-button" onClick={toggleFullscreen}>\r
        {isFullscreen ? <RiFullscreenExitLine /> : <RiFullscreenFill />}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default Desktop;`,Dt=`.footer {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-direction: row;\r
  padding: clamp(6px, 1vw, 10px) clamp(10px, 2vw, 20px);\r
  color: white;\r
  position: fixed;\r
  bottom: clamp(6px, 1vw, 10px);\r
  left: 50%;\r
  transform: translateX(-50%);\r
  border-radius: clamp(10px, 1.5vw, 16px);\r
  border-bottom: 2px solid #4b4b4b6b;\r
  width: fit-content;\r
  max-width: calc(100vw - 12px);\r
  gap: clamp(10px, 2vw, 20px);\r
  user-select: none;\r
}\r
\r
.footer-icons {\r
  display: flex;\r
  align-items: center;\r
  gap: clamp(10px, 2vw, 20px);\r
}\r
\r
.footer-icon {\r
  transition: transform 0.2s ease;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
}\r
\r
.footer-icon-start {\r
  transition: transform 0.2s ease;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  position: relative;\r
}\r
\r
.footer-icon:hover {\r
  transform: scale(1.15);\r
}\r
\r
.footer-icon-start:hover .footer-icon-image-start {\r
  transform: scale(1.15);\r
}\r
\r
.footer-icon-image {\r
  width: clamp(26px, 4vw, 40px);\r
  height: clamp(26px, 4vw, 40px);\r
  object-fit: contain;\r
}\r
\r
.footer-icon-image-start {\r
  width: clamp(26px, 4vw, 40px);\r
  height: clamp(26px, 4vw, 40px);\r
  object-fit: contain;\r
  transition: transform 0.2s ease;\r
}\r
\r
.footer-icon.minimized {\r
  opacity: 0.5;\r
}\r
\r
.start-container {\r
  display: flex;\r
  align-items: center;\r
  gap: clamp(10px, 2vw, 20px);\r
  position: absolute;\r
  left: clamp(10px, 2vw, 20px);\r
}\r
\r
.start-menu {\r
  position: fixed;\r
  bottom: 80px;\r
  left: 20px;\r
  border: 2px solid #4b4b4b6b;\r
  border-radius: clamp(10px, 1.5vw, 16px);\r
  padding: clamp(10px, 2vw, 20px);\r
  display: flex;\r
  flex-direction: column;\r
  gap: clamp(10px, 2vw, 20px);\r
  min-width: 200px;\r
  z-index: 1000;\r
  transform: none !important;\r
}\r
\r
.start-menu-item {\r
  display: flex;\r
  align-items: center;\r
  gap: clamp(10px, 2vw, 20px);\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: background-color 0.2s ease;\r
}\r
\r
.start-menu-item:hover {\r
  background-color: rgba(255, 255, 255, 0.1);\r
}\r
\r
.start-menu-icon {\r
  width: clamp(20px, 3vw, 30px);\r
  height: clamp(20px, 3vw, 30px);\r
  object-fit: contain;\r
}\r
\r
.start-menu-item-log-out {\r
  color: #e81123;\r
  display: flex;\r
  align-items: center;\r
  gap: clamp(10px, 2vw, 20px);\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: background-color 0.2s ease;\r
  font-size: 18px;\r
}\r
\r
.start-menu-item-log-out:hover {\r
  background-color: rgba(255, 17, 17, 0.1);\r
}`,A=`import './Footer.css';\r
import { CiLogout } from "react-icons/ci";\r
import { useRef, useEffect } from 'react';\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  location: 'desktop' | 'footer';\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
function Footer({\r
  items,\r
  setDesktopItems,\r
  footerItems,\r
  setStartOpen,\r
  startOpen,\r
  setAppsOpenedTotal,\r
  taskbarFooterColor,\r
  chosenFont\r
}: {\r
  items: DesktopItem[],\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>,\r
  footerItems: DesktopItem[],\r
  setStartOpen: React.Dispatch<React.SetStateAction<boolean>>,\r
  startOpen: boolean,\r
  setAppsOpenedTotal: React.Dispatch<React.SetStateAction<number>>,\r
  taskbarFooterColor: string,\r
  chosenFont: string\r
}) {\r
\r
  const startRef = useRef<HTMLDivElement>(null);\r
  useEffect(() => {\r
    if (!startOpen) return;\r
    const handleClickOutside = (e: MouseEvent) => {\r
      if (startRef.current && !startRef.current.contains(e.target as Node)) {\r
        setStartOpen(false);\r
      }\r
    };\r
\r
    document.addEventListener('mousedown', handleClickOutside);\r
    return () => document.removeEventListener('mousedown', handleClickOutside);\r
  }, [startOpen]);\r
\r
  const openDesktopItems = items.filter(\r
    item => item.isOpen && item.location === 'desktop'\r
  );\r
\r
\r
\r
  return (\r
    <div className='footer' style={{\r
      backgroundColor: taskbarFooterColor\r
    }}>\r
\r
      <div className="footer-icon-start" ref={startRef} onClick={() => setStartOpen(prev => !prev)}>\r
        <img src='images/start-images/start.png' alt='Start' className='footer-icon-image-start' />\r
        {startOpen && (\r
          <div className="start-menu" style={{\r
            backgroundColor: taskbarFooterColor,\r
            fontFamily: chosenFont\r
          }} onClick={(e) => e.stopPropagation()}>\r
            {footerItems.map((item) => (\r
              <div\r
                className="start-menu-item"\r
                key={\`start-\${item.name}\`}\r
                onClick={() => {\r
                  setDesktopItems(prev => {\r
\r
                    const highest =\r
                      Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
                    return prev.map(i =>\r
                      i.name === item.name\r
                        ? {\r
                          ...i,\r
                          isOpen: true,\r
                          isMinimized: false,\r
                          zIndex: highest\r
                        }\r
                        : i\r
                    );\r
                  });\r
                  setStartOpen(false);\r
                }}\r
              >\r
                <img src={item.icon} alt={item.name} className="start-menu-icon" />\r
                <span>{item.name}</span>\r
              </div>\r
            ))}\r
            <div className="start-menu-item-log-out" onClick={\r
              () => {\r
                window.close();\r
              }\r
            }><CiLogout style={{\r
              color: 'red',\r
            }} />Log Out</div>\r
          </div>\r
        )}\r
      </div>\r
\r
\r
      <div className="footer-icons">\r
        {footerItems.map((item) => (\r
          <div\r
            className={\`footer-icon \${item.isMinimized ? 'minimized' : ''}\`}\r
            key={item.name}\r
            style={{\r
              backgroundColor: item.isOpen ? 'rgba(255,255,255,0.3)' : 'transparent'\r
            }}\r
            onClick={() => {\r
              setDesktopItems(prev => {\r
\r
                const highest =\r
                  Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
                return prev.map(i =>\r
                  i.name === item.name\r
                    ? {\r
                      ...i,\r
                      isOpen: true,\r
                      isMinimized: i.isOpen ? !i.isMinimized : false,\r
                      zIndex: highest\r
                    }\r
                    : i\r
                );\r
              });\r
\r
              setAppsOpenedTotal(prev => prev + 1);\r
            }}\r
          >\r
            <img src={item.icon} alt={item.name} className="footer-icon-image" />\r
          </div>\r
        ))}\r
\r
        {openDesktopItems.map((item) => (\r
          <div\r
            className={\`footer-icon \${item.isMinimized ? 'minimized' : ''}\`}\r
            key={\`open-\${item.name}\`}\r
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}\r
            onClick={() => {\r
              setDesktopItems(prev => {\r
                const highest =\r
                  Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
                return prev.map(i =>\r
                  i.name === item.name\r
                    ? {\r
                      ...i,\r
                      isMinimized: false,\r
                      isOpen: true,\r
                      zIndex: highest\r
                    }\r
                    : i\r
                );\r
              });\r
            }}\r
          >\r
            <img src={item.icon} alt={item.name} className="footer-icon-image" />\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default Footer;`,Ot=`.taskbar {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 56px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 0 18px;\r
  color: #fff;\r
  backdrop-filter: blur(20px);\r
  z-index: 9999;\r
  user-select: none\r
}\r
\r
.taskbar-left-side {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  cursor: pointer;\r
  padding: 8px 12px;\r
  border-radius: 10px;\r
  transition: .2s\r
}\r
\r
.taskbar-left-side:hover,\r
.taskbar-icon:hover,\r
.taskbar-date:hover,\r
.taskbar-time:hover {\r
  background: rgba(255, 255, 255, 0.08)\r
}\r
\r
.react-icon {\r
  font-size: 28px;\r
  color: #61dafb;\r
  width: 28px;\r
  height: 28px;\r
}\r
\r
.taskbar-right-side {\r
  display: flex;\r
  align-items: center;\r
  gap: 14px\r
}\r
\r
.taskbar-icon {\r
  width: 32px;\r
  height: 32px;\r
  cursor: pointer;\r
  padding: 8px;\r
  border-radius: 8px;\r
  transition: .2s\r
}\r
\r
.taskbar-date,\r
.taskbar-time {\r
  font-size: 13px;\r
  padding: 6px 10px;\r
  border-radius: 8px;\r
  cursor: pointer;\r
  transition: .2s\r
}\r
\r
.taskbar-popup {\r
  position: fixed;\r
  top: 66px;\r
  right: 12px;\r
  background: rgba(20, 20, 20, 0.85);\r
  backdrop-filter: blur(18px);\r
  padding: 14px;\r
  border-radius: 16px;\r
  min-width: 260px;\r
  color: #fff;\r
  border: 1px solid rgba(255, 255, 255, 0.08);\r
  z-index: 10000;\r
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);\r
  animation: fadeIn .15s ease\r
}\r
\r
.start {\r
  left: 12px;\r
  right: auto;\r
  width: 320px\r
}\r
\r
.popup-title {\r
  font-size: 14px;\r
  margin-bottom: 10px;\r
  opacity: .9\r
}\r
\r
.hint {\r
  font-size: 12px;\r
  opacity: .6;\r
  margin-top: 6px\r
}\r
\r
.start-grid {\r
  display: grid;\r
  grid-template-columns: repeat(3, 1fr);\r
  gap: 10px\r
}\r
\r
.app-tile {\r
  background: rgba(255, 255, 255, 0.06);\r
  padding: 12px;\r
  border-radius: 10px;\r
  text-align: center;\r
  font-size: 12px;\r
  cursor: pointer;\r
  transition: .2s\r
}\r
\r
.app-tile:hover {\r
  background: rgba(255, 255, 255, 0.12);\r
  transform: scale(1.05)\r
}\r
\r
.wifi-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px\r
}\r
\r
.wifi-item {\r
  display: flex;\r
  justify-content: space-between;\r
  padding: 10px;\r
  border-radius: 10px;\r
  background: rgba(255, 255, 255, 0.05);\r
  cursor: pointer;\r
  transition: .2s\r
}\r
\r
.wifi-item:hover {\r
  background: rgba(255, 255, 255, 0.1)\r
}\r
\r
.wifi-bars {\r
  opacity: .8;\r
  display: flex;\r
  align-items: center;\r
  color: #0094bd;\r
}\r
\r
.volume-box {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px\r
}\r
\r
input[type="range"] {\r
  width: 100%\r
}\r
\r
.calendar-grid {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px\r
}\r
\r
.header {\r
  display: grid;\r
  grid-template-columns: repeat(7, 1fr);\r
  gap: 6px\r
}\r
\r
.header div {\r
  font-size: 11px;\r
  text-align: center;\r
  opacity: .6;\r
  padding: 4px 0\r
}\r
\r
.body {\r
  display: grid;\r
  grid-template-columns: repeat(7, 1fr);\r
  gap: 6px\r
}\r
\r
.day {\r
  text-align: center;\r
  font-size: 12px;\r
  padding: 7px;\r
  border-radius: 8px;\r
  cursor: pointer;\r
  transition: .2s;\r
  background: rgba(255, 255, 255, 0.04)\r
}\r
\r
.day:hover {\r
  background: rgba(255, 255, 255, 0.10)\r
}\r
\r
.active {\r
  background: rgba(255, 255, 255, 0.16);\r
  font-weight: 500\r
}\r
\r
@keyframes fadeIn {\r
  from {\r
    opacity: 0;\r
    transform: translateY(-6px)\r
  }\r
\r
  to {\r
    opacity: 1;\r
    transform: translateY(0)\r
  }\r
}`,kt=`import './TaskBar.css';\r
import { FaWifi } from "react-icons/fa";\r
import { AiFillSound } from "react-icons/ai";\r
import { useEffect, useRef, useState } from "react";\r
import { GoMute } from "react-icons/go";\r
import { FcSpeaker } from "react-icons/fc";\r
import { FaGripLinesVertical } from "react-icons/fa6";\r
\r
function TaskBar({\r
  taskbarFooterColor,\r
  chosenFont,\r
  volume,\r
  setVolume\r
}: {\r
  taskbarFooterColor: string,\r
  chosenFont: string,\r
  volume: number,\r
  setVolume: React.Dispatch<React.SetStateAction<number>>\r
}) {\r
\r
  const [ui, setUi] = useState({\r
    wifi: false,\r
    sound: false,\r
    calendar: false,\r
    time: false,\r
  });\r
\r
  const panelRef = useRef<HTMLDivElement | null>(null);\r
\r
  const toggleUI = (key: keyof typeof ui) => {\r
    setUi(prev => ({\r
      wifi: false,\r
      sound: false,\r
      calendar: false,\r
      time: false,\r
      [key]: !prev[key]\r
    }));\r
  };\r
\r
  useEffect(() => {\r
    const handleClickOutside = (e: MouseEvent) => {\r
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {\r
        setUi({ wifi: false, sound: false, calendar: false, time: false });\r
      }\r
    };\r
    document.addEventListener("mousedown", handleClickOutside);\r
    return () => document.removeEventListener("mousedown", handleClickOutside);\r
  }, []);\r
\r
  const now = new Date();\r
\r
  const currentDate = now.toLocaleDateString("en-US", {\r
    month: "long",\r
    day: "numeric",\r
    year: "numeric",\r
  });\r
\r
  const currentTime = now.toLocaleTimeString("en-US", {\r
    hour: "numeric",\r
    minute: "2-digit",\r
    hour12: true,\r
  });\r
\r
  const year = now.getFullYear();\r
  const month = now.getMonth();\r
  const firstDay = new Date(year, month, 1).getDay();\r
  const daysInMonth = new Date(year, month + 1, 0).getDate();\r
\r
  const wifiNetworks = [\r
    { name: "Georgie_WiFi", strength: 4 },\r
    { name: "Home_5G", strength: 3 },\r
    { name: "Cafe_Free", strength: 2 },\r
  ];\r
\r
  return (\r
    <div ref={panelRef}>\r
      <div className="taskbar" style={{ backgroundColor: taskbarFooterColor, fontFamily: chosenFont }}>\r
        <div className="taskbar-left-side">\r
          <img src='images/website-icon.png' className="react-icon" /> GeorgieOS\r
        </div>\r
\r
        <div className="taskbar-right-side">\r
          <FaWifi className="taskbar-icon" onClick={() => toggleUI("wifi")} />\r
          <AiFillSound className="taskbar-icon" onClick={() => toggleUI("sound")} />\r
          <div className="taskbar-date" onClick={() => toggleUI("calendar")}>{currentDate}</div>\r
          <div className="taskbar-time" onClick={() => toggleUI("time")}>{currentTime}</div>\r
        </div>\r
      </div>\r
\r
      {ui.wifi && (\r
        <div className="taskbar-popup" style={{\r
          fontFamily: chosenFont\r
        }}>\r
          <div className="popup-title">WiFi</div>\r
          <div className="wifi-list">\r
            {wifiNetworks.map(net => (\r
              <div key={net.name} className="wifi-item">\r
                <div>{net.name}</div>\r
                <div className="wifi-bars">\r
                  {Array.from({ length: net.strength }, (_, i) => (\r
                    <FaGripLinesVertical key={i} />\r
                  ))}\r
                </div>\r
              </div>\r
            ))}\r
          </div>\r
        </div>\r
      )}\r
\r
      {ui.sound && (\r
        <div className="taskbar-popup" style={{\r
          fontFamily: chosenFont\r
        }}>\r
          <div className="popup-title">Sound</div>\r
          <div className="volume-control">\r
            <span style={{\r
              cursor: "pointer",\r
              fontSize: "18px",\r
              display: 'flex',\r
              alignItems: 'center'\r
            }} onClick={\r
              () => setVolume(volume > 0 ? 0 : 1)\r
            }>{\r
                volume > 0 ? <FcSpeaker style={{\r
                  fontSize: "22px",\r
                }} /> : <GoMute style={{\r
                  fontSize: "22px",\r
                }} />\r
              }</span>\r
\r
            <input\r
              type="range"\r
              min="0"\r
              max="1"\r
              step="0.01"\r
              value={volume}\r
              onChange={(e) =>\r
                setVolume(Number(e.target.value))\r
              }\r
            />\r
          </div>\r
        </div>\r
      )}\r
\r
      {ui.calendar && (\r
        <div className="taskbar-popup calendar-popup" style={{\r
          fontFamily: chosenFont\r
        }}>\r
          <div className="popup-title">{currentDate}</div>\r
\r
          <div className="calendar-grid">\r
            <div className="header">\r
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => <div key={d}>{d}</div>)}\r
            </div>\r
\r
            <div className="body">\r
              {Array.from({ length: firstDay }).map((_, i) => <div key={"e" + i}></div>)}\r
              {Array.from({ length: daysInMonth }, (_, i) => {\r
                const day = i + 1;\r
                return (\r
                  <div key={day} className={\`day \${day === now.getDate() ? "active" : ""}\`}>\r
                    {day}\r
                  </div>\r
                );\r
              })}\r
            </div>\r
          </div>\r
        </div>\r
      )}\r
\r
      {ui.time && (\r
        <div className="taskbar-popup" style={{\r
          fontFamily: chosenFont\r
        }}>\r
          <div className="popup-title">System Time</div>\r
          <div className="hint">{currentTime}</div>\r
        </div>\r
      )}\r
    </div>\r
  );\r
}\r
\r
export default TaskBar;`,At=`.about-container {\r
  padding: 16px;\r
  font-family: sans-serif;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 16px;\r
  background: #f8fafc;\r
  color: #1f2937;\r
  border-radius: 12px;\r
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\r
  border: 1px solid rgba(0, 0, 0, 0.06);\r
  margin: 0 auto;\r
}\r
\r
.about-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  padding-bottom: 12px;\r
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r
}\r
\r
.avatar {\r
  width: 52px;\r
  height: 52px;\r
  border-radius: 14px;\r
  background: linear-gradient(135deg, #3b82f6, #06b6d4);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-weight: bold;\r
  color: white;\r
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);\r
}\r
\r
.about-header h2 {\r
  margin: 0;\r
  font-size: 18px;\r
  color: #111827;\r
}\r
\r
.subtitle {\r
  margin: 2px 0 0;\r
  font-size: 12px;\r
  color: #6b7280;\r
}\r
\r
.about-section h3 {\r
  margin: 0 0 6px;\r
  font-size: 13px;\r
  color: #374151;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.about-section p {\r
  margin: 0;\r
  font-size: 13px;\r
  color: #4b5563;\r
  line-height: 1.5;\r
}\r
\r
.tags {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 8px;\r
}\r
\r
.tags span {\r
  font-size: 12px;\r
  padding: 5px 10px;\r
  border-radius: 10px;\r
  background: #ffffff;\r
  border: 1px solid rgba(0, 0, 0, 0.08);\r
  color: #374151;\r
  transition: 0.2s;\r
}\r
\r
.tags span:hover {\r
  background: #e0f2fe;\r
  border-color: #93c5fd;\r
  transform: translateY(-1px);\r
}\r
\r
.about-section ul {\r
  margin: 0;\r
  padding-left: 16px;\r
  color: #4b5563;\r
  font-size: 13px;\r
}\r
\r
.about-section ul li {\r
  margin-bottom: 4px;\r
}\r
\r
.about-footer {\r
  margin-top: 4px;\r
  padding-top: 10px;\r
  border-top: 1px solid rgba(0, 0, 0, 0.08);\r
  font-size: 12px;\r
  color: #6b7280;\r
  text-align: center;\r
}`,jt=`import Window from "./Window";\r
import './AboutMe.css';\r
import { FcAbout, FcBarChart, FcFactory } from "react-icons/fc";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function AboutMe({\r
  item,\r
  setDesktopItems,\r
  getLayout\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="about-container">\r
\r
        <div className="about-header">\r
          <div className="avatar">GM</div>\r
\r
          <div>\r
            <h2>George Mumladze</h2>\r
            <p className="subtitle">Frontend Developer</p>\r
          </div>\r
        </div>\r
\r
        <div className="about-section">\r
          <h3><FcAbout /> About</h3>\r
          <p>\r
            I'm a frontend developer who enjoys building clean, interactive\r
            UI systems and desktop-style web apps. I focus on React, animations,\r
            and smooth user experiences.\r
          </p>\r
        </div>\r
\r
        <div className="about-section">\r
          <h3><FcBarChart /> Skills</h3>\r
          <div className="tags">\r
            <span>React</span>\r
            <span>TypeScript</span>\r
            <span>JavaScript</span>\r
            <span>HTML</span>\r
            <span>CSS</span>\r
            <span>Bootstrap</span>\r
            <span>Tailwind CSS</span>\r
            <span>Git</span>\r
            <span>GitHub</span>\r
            <span>Node.js</span>\r
            <span>Vitest</span>\r
            <span>Jasmine</span>\r
            <span>Responsive Design</span>\r
            <span>UI/UX</span>\r
          </div>\r
        </div>\r
\r
        <div className="about-section">\r
          <h3><FcFactory /> What I Build</h3>\r
          <ul>\r
            <li>Desktop-style web interfaces</li>\r
            <li>Interactive React apps</li>\r
            <li>UI/UX-focused projects</li>\r
          </ul>\r
        </div>\r
\r
        <div className="about-footer">\r
          <p>“Always building, always improving.”</p>\r
        </div>\r
\r
      </div>\r
    </Window>\r
  );\r
}`,Mt=`.contact-container {\r
  width: 100%;\r
  height: 100%;\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 18px;\r
  background: #f8fafc;\r
  overflow-y: auto;\r
}\r
\r
.contact-container::-webkit-scrollbar {\r
  width: 10px;\r
}\r
\r
.contact-container::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.contact-container::-webkit-scrollbar-thumb {\r
  background: #cbd5e1;\r
  border-radius: 999px;\r
  border: 2px solid #f8fafc;\r
}\r
\r
.contact-container::-webkit-scrollbar-thumb:hover {\r
  background: #94a3b8;\r
}\r
\r
.contact-header {\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 18px;\r
  padding: 20px;\r
  margin-bottom: 14px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, .05);\r
}\r
\r
.contact-header h1 {\r
  margin: 0 0 10px;\r
  font-size: 26px;\r
  font-weight: 700;\r
}\r
\r
.contact-header p {\r
  margin: 0;\r
  color: #6b7280;\r
  line-height: 1.6;\r
}\r
\r
.contact-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
}\r
\r
.contact-card {\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 14px;\r
  padding: 18px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  transition:\r
    transform .15s ease,\r
    box-shadow .15s ease,\r
    border-color .15s ease;\r
}\r
\r
.contact-card:hover {\r
  transform: translateY(-2px);\r
  border-color: #60a5fa;\r
  box-shadow:\r
    0 8px 20px rgba(59, 130, 246, .12);\r
}\r
\r
.contact-card h3 {\r
  margin: 0 0 6px;\r
  font-size: 16px;\r
  font-weight: 600;\r
}\r
\r
.contact-card p {\r
  margin: 0;\r
  color: #6b7280;\r
  font-size: 14px;\r
  word-break: break-word;\r
}\r
\r
.contact-card button {\r
  border: none;\r
  background: #2563eb;\r
  color: white;\r
  padding: 10px 18px;\r
  border-radius: 10px;\r
  cursor: pointer;\r
  font-weight: 600;\r
  transition:\r
    background .15s ease,\r
    transform .15s ease;\r
}\r
\r
.contact-card button:hover {\r
  background: #1d4ed8;\r
}\r
\r
.contact-card button:active {\r
  transform: scale(.97);\r
}\r
\r
.availability-card {\r
  margin-top: 14px;\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 14px;\r
  padding: 18px;\r
  text-align: center;\r
  font-weight: 600;\r
  color: #111827;\r
  box-shadow:\r
    0 4px 12px rgba(0, 0, 0, .05);\r
}\r
\r
.lets-connect-image {\r
  width: 42px;\r
  height: 42px;\r
  object-fit: contain;\r
}\r
\r
@media (max-width: 700px) {\r
  .contact-card {\r
    flex-direction: column;\r
    align-items: flex-start;\r
    gap: 14px;\r
  }\r
\r
  .contact-card button {\r
    width: 100%;\r
  }\r
}`,Nt=`import Window from "./Window";\r
import './Contact.css';\r
import { FaGithubSquare } from "react-icons/fa";\r
import { BiLogoGmail } from "react-icons/bi";\r
import { FaLinkedin } from "react-icons/fa";\r
import { FcHighBattery } from "react-icons/fc";\r
import { useState } from "react";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function Contact({\r
  item,\r
  setDesktopItems,\r
  getLayout\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
\r
  const [copied, setCopied] = useState(false);\r
\r
  const handleCopyEmail = async () => {\r
    try {\r
      await navigator.clipboard.writeText("georgemumladze13@gmail.com");\r
      setCopied(true);\r
      setTimeout(() => {\r
        setCopied(false);\r
      }, 1500);\r
    } catch (err) {\r
      console.error("Copy failed:", err);\r
    }\r
  };\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="contact-container">\r
\r
        <div className="contact-header">\r
          <h1 style={{\r
            display: 'flex',\r
            alignItems: 'center',\r
            gap: '10px',\r
            color: '#333'\r
          }}>\r
            <img src="images/desktop-icons/lets-connect.png" className="lets-connect-image" />\r
            {" "}Let's Connect\r
          </h1>\r
\r
          <p>\r
            I'm always open to discussing projects,\r
            freelance work and frontend opportunities.\r
          </p>\r
        </div>\r
\r
        <div className="contact-list">\r
\r
          <div className="contact-card">\r
            <div>\r
              <h3 style={{\r
                display: 'flex',\r
                alignItems: 'center',\r
                gap: '5px',\r
                color: '#d14836'\r
              }}>\r
                <BiLogoGmail /> Email\r
              </h3>\r
              <p>georgemumladze13@gmail.com</p>\r
            </div>\r
\r
            <button onClick={handleCopyEmail}>\r
              {copied ? "Copied" : "Copy"}\r
            </button>\r
          </div>\r
\r
          <div className="contact-card">\r
            <div>\r
              <h3 style={{\r
                display: 'flex',\r
                alignItems: 'center',\r
                gap: '5px',\r
                color: '#333'\r
              }}>\r
                <FaGithubSquare /> GitHub\r
              </h3>\r
              <p>https://github.com/GiorgiMumladze</p>\r
            </div>\r
\r
            <button onClick={() => {\r
              window.open(\r
                'https://github.com/GiorgiMumladze',\r
                '_blank'\r
              );\r
            }}>Visit</button>\r
          </div>\r
\r
          <div className="contact-card">\r
            <div>\r
              <h3 style={{\r
                display: 'flex',\r
                alignItems: 'center',\r
                gap: '5px',\r
                color: '#0077b5'\r
              }}>\r
                <FaLinkedin /> LinkedIn\r
              </h3>\r
              <p>https://www.linkedin.com/in/giorgi-mumladze-6b0816354/</p>\r
            </div>\r
\r
            <button onClick={() => {\r
              window.open(\r
                'https://www.linkedin.com/in/giorgi-mumladze-6b0816354/',\r
                '_blank'\r
              );\r
            }}>Visit</button>\r
          </div>\r
\r
        </div>\r
\r
        <div className="availability-card">\r
          <span style={{\r
            display: 'flex',\r
            alignItems: 'center',\r
            gap: '5px',\r
            color: '#333',\r
            justifyContent: 'center'\r
          }}>\r
            <FcHighBattery /> Available for Frontend Development\r
          </span>\r
        </div>\r
\r
      </div>\r
    </Window>\r
  );\r
}`,Pt=`.games-app {\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 20px;\r
  box-sizing: border-box;\r
  background: linear-gradient(180deg, #0f172a, #111827);\r
  color: white;\r
}\r
\r
.games-header {\r
  flex: 0 0 auto;\r
  margin-bottom: 20px;\r
}\r
\r
.games-header h1 {\r
  font-size: 2rem;\r
  margin-bottom: 8px;\r
}\r
\r
.games-header p {\r
  color: #b8c0cc;\r
}\r
\r
.games-grid {\r
  flex: 1;\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r
  gap: 16px;\r
  overflow-y: auto;\r
  padding-right: 6px;\r
}\r
\r
.game-card {\r
  background: rgba(255, 255, 255, 0.05);\r
  border: 1px solid rgba(255, 255, 255, 0.08);\r
  border-radius: 16px;\r
  padding: 20px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 16px;\r
  backdrop-filter: blur(10px);\r
  transition:\r
    transform 0.25s ease,\r
    border-color 0.25s ease,\r
    box-shadow 0.25s ease;\r
}\r
\r
.game-card:hover {\r
  transform: translateY(-4px);\r
  border-color: #4f8cff;\r
  box-shadow:\r
    0 10px 25px rgba(79, 140, 255, 0.25);\r
}\r
\r
.game-icon {\r
  width: 65px;\r
  height: 65px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 2rem;\r
  border-radius: 14px;\r
  background: linear-gradient(135deg,\r
      #4f8cff,\r
      #7b61ff);\r
}\r
\r
.game-info h3 {\r
  margin-bottom: 6px;\r
  font-size: 1.1rem;\r
}\r
\r
.game-info p {\r
  color: #c8d0db;\r
  font-size: 0.9rem;\r
  line-height: 1.5;\r
}\r
\r
.play-btn {\r
  margin-top: auto;\r
  border: none;\r
  cursor: pointer;\r
  padding: 12px;\r
  border-radius: 10px;\r
  background: linear-gradient(135deg,\r
      #4f8cff,\r
      #7b61ff);\r
\r
  color: white;\r
  font-weight: 600;\r
  transition: opacity 0.2s ease;\r
}\r
\r
.play-btn:hover {\r
  opacity: 0.9;\r
}\r
\r
.games-grid::-webkit-scrollbar {\r
  width: 8px;\r
}\r
\r
.games-grid::-webkit-scrollbar-thumb {\r
  background: rgba(255, 255, 255, 0.12);\r
  border-radius: 10px;\r
}\r
\r
.games-grid::-webkit-scrollbar-thumb:hover {\r
  background: rgba(255, 255, 255, 0.2);\r
}\r
\r
@media (max-width: 768px) {\r
  .games-app {\r
    padding: 16px;\r
  }\r
\r
  .games-header h1 {\r
    font-size: 1.6rem;\r
  }\r
\r
  .games-grid {\r
    grid-template-columns: 1fr;\r
  }\r
}`,Ft=`import Window from "./Window";\r
import "./Games.css";\r
import {\r
  FaKeyboard,\r
  FaDice,\r
  FaPalette,\r
  FaBrain,\r
  FaRegHandRock,\r
  FaGamepad,\r
} from "react-icons/fa";\r
import {\r
  GiCrystalBall,\r
  GiAsteroid,\r
  GiHangingSign,\r
  GiCardRandom\r
} from "react-icons/gi";\r
import { TbCircleDashed } from "react-icons/tb";\r
import { MdMemory } from "react-icons/md";\r
import { BsLightningChargeFill } from "react-icons/bs";\r
import { IoGameController } from "react-icons/io5";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
type Game = {\r
  name: string;\r
  description: string;\r
  icon: React.ReactNode;\r
  gameURL?: string;\r
}\r
\r
const games: Game[] = [\r
  {\r
    name: "Typing Speed Tester",\r
    description: "Measure your WPM and improve typing accuracy.",\r
    icon: <FaKeyboard />,\r
    gameURL: "https://giorgimumladze.github.io/typing-speed/"\r
  },\r
\r
  {\r
    name: "Tic Tac Toe",\r
    description: "Classic X vs O battle with AI or friend mode.",\r
    icon: <TbCircleDashed />,\r
    gameURL: "https://giorgimumladze.github.io/tic-tac-toe/"\r
  },\r
\r
  {\r
    name: "Cosmic Crystals",\r
    description: "Travel through space and collect rare crystals.",\r
    icon: <GiCrystalBall />,\r
    gameURL: "https://giorgimumladze.github.io/cosmic-crystals/"\r
  },\r
\r
  {\r
    name: "Asteroid Clicker",\r
    description: "Destroy asteroids and upgrade your firepower.",\r
    icon: <GiAsteroid />,\r
    gameURL: "https://giorgimumladze.github.io/asteroid-clicker/"\r
  },\r
\r
  {\r
    name: "Spin The Wheel",\r
    description: "Spin the wheel and test your luck.",\r
    icon: <FaDice />,\r
    gameURL: "https://giorgimumladze.github.io/spin-the-wheel/"\r
  },\r
\r
  {\r
    name: "Color Memory",\r
    description: "Remember and repeat increasingly complex patterns.",\r
    icon: <FaPalette />,\r
    gameURL: "https://giorgimumladze.github.io/color-memory/"\r
  },\r
\r
  {\r
    name: "Rock Paper Scissors Advanced",\r
    description: "Classic game with extra mechanics and twists.",\r
    icon: <FaRegHandRock />,\r
    gameURL: "https://giorgimumladze.github.io/rock-paper-scissors-advanced/"\r
  },\r
\r
  {\r
    name: "Reaction Time Tester",\r
    description: "Test how fast your reflexes really are.",\r
    icon: <BsLightningChargeFill />,\r
    gameURL: "https://giorgimumladze.github.io/reaction-time-tester/"\r
  },\r
\r
  {\r
    name: "Quiz Master",\r
    description: "Challenge your knowledge across multiple categories.",\r
    icon: <FaBrain />,\r
    gameURL: "https://giorgimumladze.github.io/quiz-master/"\r
  },\r
\r
  {\r
    name: "Hangman",\r
    description: "Guess the word before you run out of chances.",\r
    icon: <GiHangingSign />,\r
    gameURL: "https://giorgimumladze.github.io/hangman/"\r
  },\r
\r
  {\r
    name: "Memory Card Game",\r
    description: "Flip cards and find all matching pairs.",\r
    icon: <MdMemory />,\r
    gameURL: "https://giorgimumladze.github.io/memory-card-game/"\r
  },\r
\r
  {\r
    name: "Wordle",\r
    description: "Find the hidden word in 6 attempts.",\r
    icon: <FaGamepad />,\r
    gameURL: "https://giorgimumladze.github.io/wordle-game/"\r
  },\r
\r
  {\r
    name: "Rock Paper Scissors",\r
    description: "Play against the computer and test your luck.",\r
    icon: <GiCardRandom />,\r
    gameURL: "https://giorgimumladze.github.io/rock-paper-scissors-app/"\r
  }\r
];\r
\r
export default function Games({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  setChosenWebsite\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  setChosenWebsite: React.Dispatch<React.SetStateAction<string>>;\r
}) {\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="games-app">\r
        <div className="games-header">\r
          <h1 style={{\r
            display: "flex",\r
            alignItems: "center"\r
          }}><IoGameController style={{\r
            marginRight: "10px",\r
            color: 'rgb(105, 128, 228)'\r
          }} /> Games Center</h1>\r
          <p>Play and explore mini games built with React & TypeScript.</p>\r
        </div>\r
\r
        <div className="games-grid">\r
          {games.map((game) => (\r
            <div key={game.name} className="game-card">\r
              <div className="game-icon">{game.icon}</div>\r
\r
              <div className="game-info">\r
                <h3>{game.name}</h3>\r
                <p>{game.description}</p>\r
              </div>\r
\r
              <button className="play-btn" onClick={() => {\r
                setDesktopItems((prev) => {\r
                  const highest = Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
                  return prev.map((item) =>\r
                    item.name === "Browser"\r
                      ? {\r
                        ...item,\r
                        isOpen: true,\r
                        isMinimized: false,\r
                        zIndex: highest,\r
                      }\r
                      : item\r
                  );\r
                });\r
\r
                setChosenWebsite(game.gameURL || "");\r
              }}>\r
                Play Game\r
              </button>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,It=`.music-app {\r
  width: 100%;\r
  height: 100%;\r
  box-sizing: border-box;\r
  display: grid;\r
  grid-template-rows: auto auto 1fr;\r
  gap: 14px;\r
  padding: 18px;\r
  background: #f8fafc;\r
  overflow-y: auto;\r
}\r
\r
.music-app::-webkit-scrollbar {\r
  width: 10px;\r
}\r
\r
.music-app::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.music-app::-webkit-scrollbar-thumb {\r
  background: #cbd5e1;\r
  border-radius: 999px;\r
  border: 2px solid #f8fafc;\r
}\r
\r
.music-app::-webkit-scrollbar-thumb:hover {\r
  background: #94a3b8;\r
}\r
\r
.music-header {\r
  margin-bottom: 4px;\r
}\r
\r
.music-header h2 {\r
  margin: 0;\r
  color: #111827;\r
  font-size: clamp(20px, 2vw, 28px);\r
  font-weight: 700;\r
}\r
\r
.music-header p {\r
  margin: 4px 0 0;\r
  color: #6b7280;\r
  font-size: 13px;\r
}\r
\r
.now-playing {\r
  display: flex;\r
  gap: 18px;\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 18px;\r
  padding: 18px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\r
  min-width: 0;\r
}\r
\r
.album-cover {\r
  width: clamp(80px, 15vw, 120px);\r
  height: clamp(80px, 15vw, 120px);\r
  flex-shrink: 0;\r
  border-radius: 18px;\r
  background: linear-gradient(135deg,\r
      #2563eb,\r
      #7c3aed);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  color: white;\r
  font-size: 42px;\r
  font-weight: 700;\r
  overflow: hidden;\r
}\r
\r
.album-cover img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
\r
.track-info {\r
  flex: 1;\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
}\r
\r
.track-info h3 {\r
  margin: 0;\r
  color: #111827;\r
  font-size: clamp(16px, 2vw, 20px);\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.track-info p {\r
  margin: 4px 0 0;\r
  color: #6b7280;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.progress-bar {\r
  margin-top: 18px;\r
  width: 100%;\r
  height: 8px;\r
  background: #e5e7eb;\r
  border-radius: 999px;\r
  overflow: hidden;\r
}\r
\r
.progress {\r
  height: 100%;\r
  background: #2563eb;\r
  border-radius: 999px;\r
  transition: width 0.1s linear;\r
}\r
\r
.time-row {\r
  margin-top: 8px;\r
  display: flex;\r
  justify-content: space-between;\r
  color: #6b7280;\r
  font-size: 12px;\r
}\r
\r
.music-controls {\r
  margin-top: 12px;\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
\r
.music-btn {\r
  border: none;\r
  outline: none;\r
  cursor: pointer;\r
  padding: 10px 16px;\r
  border-radius: 10px;\r
  background: #2563eb;\r
  color: white;\r
  font-weight: 600;\r
  transition:\r
    transform 0.15s ease,\r
    opacity 0.15s ease;\r
  min-width: 100px;\r
}\r
\r
.music-btn:hover {\r
  opacity: 0.9;\r
}\r
\r
.music-btn:active {\r
  transform: scale(0.98);\r
}\r
\r
.volume-control {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  flex: 1;\r
  min-width: 120px;\r
}\r
\r
.volume-control span {\r
  flex-shrink: 0;\r
}\r
\r
.volume-control input {\r
  flex: 1;\r
  min-width: 80px;\r
  cursor: pointer;\r
}\r
\r
.playlist {\r
  overflow-y: auto;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
  padding-right: 4px;\r
}\r
\r
.playlist::-webkit-scrollbar {\r
  width: 8px;\r
}\r
\r
.playlist::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.playlist::-webkit-scrollbar-thumb {\r
  background: #cbd5e1;\r
  border-radius: 999px;\r
}\r
\r
.playlist::-webkit-scrollbar-thumb:hover {\r
  background: #94a3b8;\r
}\r
\r
.song-card {\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 12px;\r
  padding: 14px 16px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 10px;\r
  cursor: pointer;\r
  transition:\r
    transform 0.15s ease,\r
    box-shadow 0.15s ease,\r
    border-color 0.15s ease;\r
  min-width: 0;\r
}\r
\r
.song-card:hover {\r
  transform: translateX(4px);\r
  border-color: #3b82f6;\r
  box-shadow:\r
    0 6px 18px rgba(59, 130, 246, 0.12);\r
}\r
\r
.song-card.active {\r
  background: #eff6ff;\r
  border-color: #60a5fa;\r
  color: #2563eb;\r
  font-weight: 600;\r
}\r
\r
.song-card span:first-child {\r
  flex: 1;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.song-card span:last-child {\r
  flex-shrink: 0;\r
}\r
\r
@media (max-width: 700px) {\r
  .now-playing {\r
    flex-direction: column;\r
    align-items: center;\r
    text-align: center;\r
  }\r
\r
  .track-info {\r
    width: 100%;\r
  }\r
\r
  .music-controls {\r
    justify-content: center;\r
  }\r
\r
  .volume-control {\r
    width: 100%;\r
  }\r
\r
  .time-row {\r
    font-size: 11px;\r
  }\r
}\r
\r
\r
@media (max-width: 500px) {\r
  .music-app {\r
    padding: 12px;\r
  }\r
\r
  .music-header h2 {\r
    font-size: 20px;\r
  }\r
\r
  .music-header p {\r
    font-size: 12px;\r
  }\r
\r
  .song-card {\r
    padding: 10px 12px;\r
    font-size: 13px;\r
  }\r
\r
  .music-btn {\r
    width: 100%;\r
  }\r
\r
  .volume-control {\r
    width: 100%;\r
  }\r
\r
  .album-cover {\r
    width: 80px;\r
    height: 80px;\r
  }\r
}`,Lt=`import Window from "./Window";\r
import "./Music.css";\r
import { useEffect, useState } from "react";\r
import { BsPauseBtnFill } from "react-icons/bs";\r
import { BsPlayBtnFill } from "react-icons/bs";\r
import { GoMute } from "react-icons/go";\r
import { MdMusicNote } from "react-icons/md";\r
import { FcSpeaker } from "react-icons/fc";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
type Song = {\r
  title: string;\r
  artist: string;\r
  song: string;\r
  image: string;\r
  duration: string;\r
};\r
\r
export default function Music({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  volume,\r
  setVolume\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  volume: number;\r
  setVolume: React.Dispatch<React.SetStateAction<number>>;\r
}) {\r
  const songs: Song[] = [\r
    {\r
      title: "water afro",\r
      artist: "Kontraa",\r
      song: "music/songs/kontraa-water-afro-pop-music.mp3",\r
      image:\r
        "music/song-images/kontraa-water-afro-pop-music-image.jpg",\r
      duration: "01:09",\r
    },\r
    {\r
      title: "action rock",\r
      artist: "Magpiemusic",\r
      song: "music/songs/magpiemusic-action-trailer-promo-rock.mp3",\r
      image:\r
        "music/song-images/magpiemusic-action-trailer-promo-rock-image.jpg",\r
      duration: "01:43",\r
    },\r
    {\r
      title: "comedy cartoon",\r
      artist: "Starostin",\r
      song:\r
        "music/songs/starostin-comedy-cartoon-funny-background-music.mp3",\r
      image:\r
        "music/song-images/starostin-comedy-cartoon-funny-background-music-image.jpeg",\r
      duration: "02:28",\r
    },\r
    {\r
      title: "chill sunset",\r
      artist: "Finley",\r
      song: "music/songs/finley-chill-sunset-chill-nature.mp3",\r
      image:\r
        "music/song-images/finley-chill-sunset-chill-nature-image.jpg",\r
      duration: "02:49",\r
    },\r
    {\r
      title: "downtempo chill electronic",\r
      artist: "Alex Morgan",\r
      song:\r
        "music/songs/alex-morgan-downtempo-chill-electronic.mp3",\r
      image:\r
        "music/song-images/alex-morgan-downtempo-chill-electronic-image.jpg",\r
      duration: "03:18",\r
    },\r
    {\r
      title: "chill music",\r
      artist: "Mirostar",\r
      song: "music/songs/mirostar-chill-chill-music.mp3",\r
      image:\r
        "music/song-images/mirostar-chill-chill-music-image.png",\r
      duration: "01:43",\r
    },\r
  ];\r
\r
  const [audio] = useState(() => new Audio());\r
  const [activeSong, setActiveSong] = useState<Song | null>(songs[0]);\r
  const [currentTime, setCurrentTime] = useState(0);\r
  const [isPlaying, setIsPlaying] = useState(false);\r
\r
  useEffect(() => {\r
    audio.volume = volume;\r
  }, [audio, volume]);\r
\r
  useEffect(() => {\r
    audio.ontimeupdate = () => {\r
      setCurrentTime(audio.currentTime);\r
    };\r
\r
    audio.onended = () => {\r
      setIsPlaying(false);\r
    };\r
\r
    return () => {\r
      audio.pause();\r
    };\r
  }, [audio]);\r
\r
  const playSong = (song: Song) => {\r
    audio.pause();\r
\r
    audio.src = song.song;\r
    audio.currentTime = 0;\r
\r
    audio.play();\r
\r
    setCurrentTime(0);\r
    setActiveSong(song);\r
    setIsPlaying(true);\r
  };\r
\r
  const togglePlayPause = () => {\r
    if (!activeSong) return;\r
\r
    if (audio.paused) {\r
      audio.play();\r
      setIsPlaying(true);\r
    } else {\r
      audio.pause();\r
      setIsPlaying(false);\r
    }\r
  };\r
\r
  const formatTime = (seconds: number) => {\r
    const mins = Math.floor(seconds / 60);\r
    const secs = Math.floor(seconds % 60);\r
\r
    return \`\${String(mins).padStart(2, "0")}:\${String(\r
      secs\r
    ).padStart(2, "0")}\`;\r
  };\r
\r
  const progress =\r
    audio.duration && !isNaN(audio.duration)\r
      ? (currentTime / audio.duration) * 100\r
      : 0;\r
\r
\r
  useEffect(() => {\r
    if (songs.length > 0) {\r
      audio.src = songs[0].song;\r
    }\r
  }, []);\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="music-app">\r
        <div className="music-header">\r
          <h2>Music</h2>\r
          <p>Your personal playlist</p>\r
        </div>\r
\r
        <div className="now-playing">\r
          <div className="album-cover">\r
            {activeSong ? (\r
              <img\r
                src={activeSong.image}\r
                alt={activeSong.title}\r
                style={{\r
                  width: "100%",\r
                  height: "100%",\r
                  objectFit: "cover",\r
                  borderRadius: "12px",\r
                }}\r
              />\r
            ) : (\r
              <MdMusicNote style={{\r
                fontSize: "48px",\r
                color: "#888",\r
              }} />\r
            )}\r
          </div>\r
\r
          <div className="track-info">\r
            <h3>{activeSong?.title || "No song playing"}</h3>\r
            <p>{activeSong?.artist || ""}</p>\r
\r
            <div className="progress-bar">\r
              <div\r
                className="progress"\r
                style={{\r
                  width: \`\${progress}%\`,\r
                }}\r
              />\r
            </div>\r
\r
            <div className="time-row">\r
              <span>{formatTime(currentTime)}</span>\r
              <span>{activeSong?.duration || "00:00"}</span>\r
            </div>\r
\r
            <div className="music-controls">\r
\r
              <button\r
                className="music-btn"\r
                onClick={togglePlayPause}\r
              >\r
                {isPlaying ? (\r
                  <div style={{\r
                    display: "flex",\r
                    alignItems: "center",\r
                    gap: "6px",\r
                    justifyContent: 'center'\r
                  }}>\r
                    <BsPauseBtnFill style={{\r
                      fontSize: "18px",\r
                    }} />\r
                    {" "}Pause\r
                  </div>\r
                ) : (\r
                  <div style={{\r
                    display: "flex",\r
                    alignItems: "center",\r
                    gap: "6px",\r
                    justifyContent: 'center'\r
                  }}>\r
                    <BsPlayBtnFill style={{\r
                      fontSize: "18px",\r
                    }} />\r
                    {" "}Play\r
                  </div>\r
                )}\r
              </button>\r
\r
              <div className="volume-control">\r
                <span style={{\r
                  cursor: "pointer",\r
                  fontSize: "18px",\r
                  display: 'flex',\r
                  alignItems: 'center'\r
                }} onClick={\r
                  () => setVolume(volume > 0 ? 0 : 1)\r
                }>{\r
                    volume > 0 ? <FcSpeaker style={{\r
                      fontSize: "22px",\r
                    }} /> : <GoMute style={{\r
                      fontSize: "22px",\r
                    }} />\r
                  }</span>\r
\r
                <input\r
                  type="range"\r
                  min="0"\r
                  max="1"\r
                  step="0.01"\r
                  value={volume}\r
                  onChange={(e) =>\r
                    setVolume(Number(e.target.value))\r
                  }\r
                />\r
              </div>\r
\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="playlist">\r
          {songs.map((song, index) => (\r
            <div\r
              key={index}\r
              className={\`song-card \${activeSong?.title === song.title ? "active" : ""\r
                }\`}\r
              onClick={() => playSong(song)}\r
            >\r
              <span>{song.title}</span>\r
              <span>{song.duration}</span>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,Rt=`.my-computer-container {\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  background: #f8fafc;\r
  overflow: hidden;\r
}\r
\r
.my-computer-sidebar {\r
  width: 240px;\r
  background: white;\r
  border-right: 1px solid #e5e7eb;\r
  padding: 18px;\r
  overflow-y: auto;\r
  flex-shrink: 0;\r
}\r
\r
.my-computer-sidebar::-webkit-scrollbar {\r
  width: 8px;\r
}\r
\r
.my-computer-sidebar::-webkit-scrollbar-thumb {\r
  background: #cbd5e1;\r
  border-radius: 999px;\r
}\r
\r
.my-computer-sidebar::-webkit-scrollbar-thumb:hover {\r
  background: #94a3b8;\r
}\r
\r
.my-computer-sidebar h3 {\r
  margin: 0 0 12px;\r
  font-size: 13px;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: .5px;\r
  color: #64748b;\r
}\r
\r
.sidebar-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 10px 12px;\r
  margin-bottom: 4px;\r
  border-radius: 10px;\r
  cursor: pointer;\r
  transition:\r
    background .15s ease,\r
    transform .15s ease;\r
}\r
\r
.sidebar-item:hover {\r
  background: #eff6ff;\r
  transform: translateX(4px);\r
}\r
\r
.sidebar-item svg {\r
  font-size: 18px;\r
}\r
\r
.sidebar-divider {\r
  height: 1px;\r
  background: #e5e7eb;\r
  margin: 18px 0;\r
}\r
\r
.my-computer-content {\r
  flex: 1;\r
  padding: 18px;\r
  overflow-y: auto;\r
}\r
\r
.my-computer-content::-webkit-scrollbar {\r
  width: 10px;\r
}\r
\r
.my-computer-content::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.my-computer-content::-webkit-scrollbar-thumb {\r
  background: #cbd5e1;\r
  border-radius: 999px;\r
  border: 2px solid #f8fafc;\r
}\r
\r
.my-computer-content::-webkit-scrollbar-thumb:hover {\r
  background: #94a3b8;\r
}\r
\r
.welcome-card {\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 18px;\r
  padding: 24px;\r
  margin-bottom: 18px;\r
  box-shadow:\r
    0 4px 12px rgba(0, 0, 0, .05);\r
}\r
\r
.welcome-card h1 {\r
  margin: 0 0 10px;\r
  font-size: 30px;\r
  font-weight: 700;\r
  color: #111827;\r
}\r
\r
.welcome-card p {\r
  margin: 0;\r
  color: #6b7280;\r
  line-height: 1.6;\r
}\r
\r
.folder-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill,\r
      minmax(170px, 1fr));\r
  gap: 14px;\r
}\r
\r
.folder-card {\r
  background: white;\r
  border: 1px solid #e5e7eb;\r
  border-radius: 16px;\r
  padding: 20px;\r
  min-height: 150px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  transition:\r
    transform .15s ease,\r
    box-shadow .15s ease,\r
    border-color .15s ease;\r
}\r
\r
.folder-card:hover {\r
  transform: translateY(-4px);\r
  border-color: #60a5fa;\r
  box-shadow:\r
    0 10px 24px rgba(59, 130, 246, .12);\r
}\r
\r
.folder-card:active {\r
  transform: scale(.98);\r
}\r
\r
.folder-card-icon {\r
  width: 54px;\r
  height: 54px;\r
  margin-bottom: 12px;\r
  object-fit: contain;\r
}\r
\r
.folder-card p {\r
  margin: 0;\r
  text-align: center;\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: #111827;\r
}\r
\r
.folder-card p {\r
  margin: 0;\r
  font-size: 15px;\r
  font-weight: 600;\r
  color: #111827;\r
  text-align: center;\r
}\r
\r
.folder-card span {\r
  margin-top: 6px;\r
  text-align: center;\r
  font-size: 12px;\r
  line-height: 1.4;\r
  color: #6b7280;\r
}\r
\r
@media (max-width: 900px) {\r
  .my-computer-container {\r
    flex-direction: column;\r
  }\r
\r
  .my-computer-sidebar {\r
    width: 100%;\r
    border-right: none;\r
    border-bottom: 1px solid #e5e7eb;\r
  }\r
}`,zt=`import Window from "./Window";\r
import './MyComputer.css';\r
import { FaGithub } from "react-icons/fa";\r
import { FaLinkedin } from "react-icons/fa";\r
import { IoIosMail } from "react-icons/io";\r
import { FcBusinessContact } from "react-icons/fc";\r
import { FcViewDetails } from "react-icons/fc";\r
import { FcBusinessman } from "react-icons/fc";\r
import { FcBriefcase } from "react-icons/fc";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function MyComputer({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
\r
  const bringToFront = (prev: DesktopItem[], targetName: string) => {\r
    const highest = Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
    return prev.map(i =>\r
      i.name === targetName\r
        ? {\r
          ...i,\r
          isOpen: true,\r
          isMinimized: false,\r
          zIndex: highest\r
        }\r
        : i\r
    );\r
  };\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="my-computer-container">\r
\r
        <div className="my-computer-sidebar">\r
          <h3>Quick Access</h3>\r
\r
          <div className="sidebar-item" style={{\r
            color: '#333'\r
          }} onClick={() => {\r
            setDesktopItems(prev => bringToFront(prev, "About Me"));\r
          }}><FcBusinessman /> About Me</div>\r
\r
          <div className="sidebar-item" onClick={() => {\r
            setDesktopItems(prev => bringToFront(prev, "Contact"));\r
          }}><FcBusinessContact /> Contact</div>\r
\r
          <div className="sidebar-item" onClick={() => {\r
            setDesktopItems(prev => bringToFront(prev, "Projects"));\r
          }}><FcBriefcase /> Projects</div>\r
\r
          <div className="sidebar-item" onClick={() => {\r
            setDesktopItems(prev => bringToFront(prev, "Resume"));\r
          }}><FcViewDetails /> Resume.pdf</div>\r
\r
          <div className="sidebar-divider" />\r
\r
          <h3>Connect</h3>\r
\r
          <div className="sidebar-item" style={{\r
            color: '#333'\r
          }} onClick={() => {\r
            window.open(\r
              'https://github.com/GiorgiMumladze',\r
              '_blank'\r
            );\r
          }}><FaGithub /> GitHub</div>\r
          <div className="sidebar-item" style={{\r
            color: '#0077b5'\r
          }} onClick={\r
            () => {\r
              window.open(\r
                'https://www.linkedin.com/in/giorgi-mumladze-6b0816354/',\r
                '_blank'\r
              );\r
            }\r
          }><FaLinkedin /> LinkedIn</div>\r
          <div\r
            className="sidebar-item"\r
            style={{ color: '#c71610' }}\r
            onClick={() => {\r
              setDesktopItems(prev => bringToFront(prev, "Contact"));\r
            }}\r
          >\r
            <IoIosMail /> Email\r
          </div>\r
        </div>\r
\r
        <div className="my-computer-content">\r
\r
          <div className="welcome-card">\r
            <h1>Giorgi Mumladze</h1>\r
            <p>\r
              Frontend Developer focused on building modern,\r
              responsive and interactive web applications.\r
            </p>\r
          </div>\r
\r
          <div className="folder-grid">\r
\r
\r
            <div\r
              className="folder-card"\r
              onClick={() => {\r
                setDesktopItems(prev => bringToFront(prev, "Contact"));\r
              }}\r
            >\r
              <img\r
                src="images/desktop-icons/contact.png"\r
                alt="Contact"\r
                className="folder-card-icon"\r
              />\r
\r
              <p>Contact</p>\r
\r
              <span>\r
                Email, LinkedIn and GitHub\r
              </span>\r
            </div>\r
\r
            <div\r
              className="folder-card"\r
              onClick={() => {\r
                setDesktopItems(prev => bringToFront(prev, "About Me"));\r
              }}\r
            >\r
              <img\r
                src="images/desktop-icons/about-me.png"\r
                alt="About Me"\r
                className="folder-card-icon"\r
              />\r
\r
              <p>About Me</p>\r
\r
              <span>\r
                Skills, experience and technologies\r
              </span>\r
            </div>\r
\r
            <div\r
              className="folder-card"\r
              onClick={() => {\r
                setDesktopItems(prev => bringToFront(prev, "Projects"));\r
              }}\r
            >\r
              <img\r
                src="images/desktop-icons/projects.png"\r
                alt="Projects"\r
                className="folder-card-icon"\r
              />\r
\r
              <p>Projects</p>\r
\r
              <span>\r
                React apps, games and APIs\r
              </span>\r
            </div>\r
\r
            <div\r
              className="folder-card"\r
              onClick={() => {\r
                setDesktopItems(prev => bringToFront(prev, "Music"));\r
              }}\r
            >\r
              <img\r
                src="images/desktop-icons/music.png"\r
                alt="Music"\r
                className="folder-card-icon"\r
              />\r
\r
              <p>Music</p>\r
\r
              <span>\r
                Listen to some music while you explore my portfolio\r
              </span>\r
            </div>\r
\r
            <div\r
              className="folder-card"\r
              onClick={() => {\r
                setDesktopItems(prev => bringToFront(prev, "Games"));\r
              }}\r
            >\r
              <img\r
                src="images/desktop-icons/games.png"\r
                alt="Games"\r
                className="folder-card-icon"\r
              />\r
\r
              <p>Games</p>\r
\r
              <span>\r
                Play some fun games I built\r
              </span>\r
            </div>\r
\r
            <div\r
              className="folder-card"\r
              onClick={() => {\r
                setDesktopItems(prev => bringToFront(prev, "Resume"));\r
              }}\r
            >\r
              <img\r
                src="images/desktop-icons/resume.png"\r
                alt="Resume"\r
                className="folder-card-icon"\r
              />\r
\r
              <p>Resume.pdf</p>\r
\r
              <span>\r
                Download my latest CV\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,Bt=`import './Projects.css';\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function ProjectCard({\r
  title,\r
  description,\r
  tags,\r
  icon,\r
  url,\r
  setChosenWebsite,\r
  setDesktopItems\r
}: {\r
  title: string;\r
  description: string;\r
  tags: string[];\r
  icon: string;\r
  url: string;\r
  setChosenWebsite: React.Dispatch<React.SetStateAction<string>>;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
}) {\r
\r
  const openProject = () => {\r
    setChosenWebsite(url);\r
\r
    setDesktopItems(prev => {\r
      const highest = Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
      return prev.map(item =>\r
        item.name === "Browser"\r
          ? {\r
            ...item,\r
            isOpen: true,\r
            isMinimized: false,\r
            zIndex: highest\r
          }\r
          : item\r
      );\r
    });\r
  };\r
\r
  return (\r
    <div className="project-card" onClick={openProject}>\r
      <div className="project-icon">\r
        {icon}\r
      </div>\r
\r
      <div className="project-content">\r
        <h3>{title}</h3>\r
        <p>{description}</p>\r
        <div className="project-tags">\r
          {tags.map(tag => (\r
            <span key={tag}>{tag}</span>\r
          ))}\r
        </div>\r
      </div>\r
      <div className="project-footer">\r
        <span>Open Project</span>\r
        <span>↗</span>\r
      </div>\r
    </div>\r
  );\r
}`,Vt=`.projects-app {\r
  padding: 16px;\r
  background: #f8fafc;\r
  height: 100%;\r
  overflow-y: auto;\r
  margin: 0 auto;\r
}\r
\r
.projects-header {\r
  margin-bottom: 20px;\r
}\r
\r
.projects-header h2 {\r
  margin: 0;\r
  color: #111827;\r
  font-size: 24px;\r
}\r
\r
.projects-header p {\r
  margin-top: 4px;\r
  color: #6b7280;\r
}\r
\r
.projects-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\r
  gap: 16px;\r
}\r
\r
.project-card {\r
  background: white;\r
  border: 2px solid #e5e7eb;\r
  border-radius: 16px;\r
  padding: 18px;\r
  cursor: pointer;\r
  user-select: none;\r
  display: flex;\r
  flex-direction: column;\r
  min-height: 240px;\r
  transition:\r
    transform .15s ease,\r
    box-shadow .15s ease,\r
    border-color .15s ease;\r
}\r
\r
.project-card:hover {\r
  transform: translateY(-4px);\r
  border-color: #3b82f6;\r
  box-shadow:\r
    0 15px 30px rgba(59, 130, 246, .15);\r
}\r
\r
.project-card:active {\r
  transform: scale(.98);\r
}\r
\r
.project-icon {\r
  width: 54px;\r
  height: 54px;\r
  border-radius: 14px;\r
  background: linear-gradient(135deg,\r
      #2563eb,\r
      #60a5fa);\r
\r
  color: white;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 18px;\r
  font-weight: 700;\r
  margin-bottom: 14px;\r
  transition: transform .2s ease;\r
}\r
\r
.project-card:hover .project-icon {\r
  transform: scale(1.08);\r
}\r
\r
.project-content {\r
  flex: 1;\r
}\r
\r
.project-content h3 {\r
  margin: 0 0 10px;\r
  color: #111827;\r
  font-size: 17px;\r
}\r
\r
.project-content p {\r
  margin: 0;\r
  color: #6b7280;\r
  font-size: 13px;\r
  line-height: 1.5;\r
}\r
\r
.project-tags {\r
  margin-top: 14px;\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 6px;\r
}\r
\r
.project-tags span {\r
  padding: 5px 10px;\r
  border-radius: 999px;\r
  background: #eff6ff;\r
  color: #2563eb;\r
  font-size: 11px;\r
  font-weight: 600;\r
  border: 1px solid #bfdbfe;\r
}\r
\r
.project-footer {\r
  margin-top: 16px;\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding-top: 12px;\r
  border-top: 1px solid #e5e7eb;\r
  color: #2563eb;\r
  font-size: 13px;\r
  font-weight: 600;\r
}\r
\r
.project-card:hover .project-footer {\r
  color: #1d4ed8;\r
}`,Ht=`import Window from "./Window";\r
import './Projects.css';\r
import ProjectCard from "./ProjectCard";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function Projects({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  setChosenWebsite\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  setChosenWebsite: React.Dispatch<React.SetStateAction<string>>;\r
}) {\r
\r
  const projects = [\r
    {\r
      icon: "MG",\r
      title: "My Games",\r
      url: "https://giorgimumladze.github.io/my-games/",\r
      description:\r
        "A collection of browser games including Typing Speed Tester, Tic Tac Toe, Cosmic Crystals, Asteroid Clicker, Spin The Wheel, Color Memory, Reaction Time Tester, Quiz Master, Hangman and Wordle.",\r
      tags: ["React", "Games", "Algorithms"]\r
    },\r
\r
    {\r
      icon: "TB",\r
      title: "Tasty Bites",\r
      url: "https://giorgimumladze.github.io/tasty-bites/",\r
      description:\r
        "Modern e-commerce website for a cafe featuring product browsing, menu organization and responsive shopping experience.",\r
      tags: ["React", "E-Commerce", "Responsive Design"]\r
    },\r
\r
    {\r
      icon: "TR",\r
      title: "Translate App",\r
      url: "https://giorgimumladze.github.io/translate-app/",\r
      description:\r
        "Language translation application allowing users to translate text quickly between different languages.",\r
      tags: ["API", "React", "Utilities"]\r
    },\r
\r
    {\r
      icon: "CS",\r
      title: "Coffee Shop",\r
      url: "https://giorgimumladze.github.io/coffee-shop/#/",\r
      description:\r
        "E-commerce website focused on coffee products with product listings and modern UI.",\r
      tags: ["React", "E-Commerce", "UI Design"]\r
    },\r
\r
    {\r
      icon: "WA",\r
      title: "Weather App",\r
      url: "https://giorgimumladze.github.io/weather-app/",\r
      description:\r
        "Weather dashboard displaying current weather conditions and forecast information.",\r
      tags: ["React", "Weather API", "Data Fetching"]\r
    },\r
\r
    {\r
      icon: "IC",\r
      title: "Interactive Comments",\r
      url: "https://giorgimumladze.github.io/interactive-comments-section/",\r
      description:\r
        "Interactive comments section supporting replies, editing, deleting and dynamic interactions.",\r
      tags: ["React", "CRUD", "State Management"]\r
    },\r
\r
    {\r
      icon: "RC",\r
      title: "REST Countries API",\r
      url: "https://giorgimumladze.github.io/rest-countries-api/",\r
      description:\r
        "Explore countries around the world with filtering, searching and region selection.",\r
      tags: ["REST API", "React", "Search"]\r
    },\r
\r
    {\r
      icon: "CB",\r
      title: "Chatbot",\r
      url: "https://giorgimumladze.github.io/chatbot/",\r
      description:\r
        "Chat interface application featuring conversation flow and modern chat UI.",\r
      tags: ["React", "Chat UI", "Frontend"]\r
    },\r
\r
    {\r
      icon: "US",\r
      title: "URL Shortening API",\r
      url: "https://giorgimumladze.github.io/url-shortening-api/",\r
      description:\r
        "Converts long URLs into shorter links with copy-to-clipboard functionality.",\r
      tags: ["API", "React", "Utilities"]\r
    },\r
\r
    {\r
      icon: "MS",\r
      title: "Multi Step Form",\r
      url: "https://giorgimumladze.github.io/multi-step-form-app/",\r
      description:\r
        "Multi-stage form experience with validation and progress tracking.",\r
      tags: ["Forms", "React", "UX"]\r
    },\r
\r
    {\r
      icon: "TD",\r
      title: "Todo App",\r
      url: "https://giorgimumladze.github.io/todo-app/",\r
      description:\r
        "Task management application allowing users to create and organize tasks.",\r
      tags: ["React", "Productivity", "State Management"]\r
    }\r
  ];\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="projects-app">\r
\r
        <div className="projects-header">\r
          <h2>My Projects</h2>\r
          <p>Collection of apps, games & web tools I've built</p>\r
        </div>\r
\r
        <div className="projects-grid">\r
          {projects.map(project => (\r
            <ProjectCard\r
              key={project.title}\r
              title={project.title}\r
              description={project.description}\r
              tags={project.tags}\r
              icon={project.icon}\r
              url={project.url}\r
              setChosenWebsite={setChosenWebsite}\r
              setDesktopItems={setDesktopItems}\r
            />\r
          ))}\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,Ut=`.resume-container {\r
  display: flex;\r
  flex-direction: column;\r
  width: 100%;\r
  height: 100%;\r
  background: #1a1a1a;\r
}\r
\r
.resume-toolbar {\r
  height: 50px;\r
  flex-shrink: 0;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 0 18px;\r
  background: rgba(35, 35, 35, 0.95);\r
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\r
  backdrop-filter: blur(12px);\r
}\r
\r
.resume-toolbar span {\r
  color: white;\r
  font-size: 14px;\r
  font-weight: 500;\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
}\r
\r
.download-button {\r
  padding: 8px 16px;\r
  border-radius: 8px;\r
  background: #0078d4;\r
  color: white;\r
  font-size: 13px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
  user-select: none;\r
}\r
\r
.download-button:hover {\r
  background: #1084db;\r
  transform: translateY(-1px);\r
}\r
\r
.download-button:active {\r
  transform: translateY(1px);\r
}\r
\r
.resume-viewer {\r
  flex: 1;\r
  display: flex;\r
  justify-content: center;\r
  align-items: flex-start;\r
  overflow-y: auto;\r
  padding: 30px;\r
  background:\r
    radial-gradient(circle at top, #2d2d2d, #181818);\r
}\r
\r
.pdf-container {\r
  width: 100%;\r
  display: flex;\r
  justify-content: center;\r
}\r
\r
.cv-image {\r
  width: min(900px, 100%);\r
  height: auto;\r
  border-radius: 12px;\r
  box-shadow:\r
    0 20px 60px rgba(0, 0, 0, 0.6),\r
    0 0 0 1px rgba(255, 255, 255, 0.05);\r
\r
  background: white;\r
  transition: transform 0.2s ease;\r
}\r
\r
.cv-image:hover {\r
  transform: scale(1.01);\r
}\r
\r
.resume-viewer {\r
  scrollbar-width: thin;\r
  scrollbar-color: rgba(255, 255, 255, 0.18) transparent;\r
}\r
\r
.resume-viewer::-webkit-scrollbar {\r
  width: 10px;\r
}\r
\r
.resume-viewer::-webkit-scrollbar-track {\r
  background: transparent;\r
  margin: 10px 0;\r
}\r
\r
.resume-viewer::-webkit-scrollbar-thumb {\r
  background: linear-gradient(180deg,\r
      rgba(255, 255, 255, 0.18),\r
      rgba(255, 255, 255, 0.08));\r
  border-radius: 999px;\r
  border: 2px solid rgba(20, 20, 20, 0.6);\r
  transition: background 0.2s ease, transform 0.2s ease;\r
}\r
\r
.resume-viewer::-webkit-scrollbar-thumb:hover {\r
  background: linear-gradient(180deg,\r
      rgba(255, 255, 255, 0.28),\r
      rgba(255, 255, 255, 0.12));\r
}\r
\r
.resume-viewer::-webkit-scrollbar-thumb:active {\r
  background: rgba(255, 255, 255, 0.3);\r
}`,Wt=`import Window from "./Window";\r
import "./Resume.css";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function Resume({\r
  item,\r
  setDesktopItems,\r
  getLayout\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="resume-container">\r
        <div className="resume-toolbar">\r
          <span>📄 Giorgi-Mumladze-CV.pdf</span>\r
\r
          <div\r
            className="download-button"\r
            onClick={() => {\r
              const link = document.createElement("a");\r
              link.href = "images/CV-Giorgi-Mumladze.pdf";\r
              link.download = "CV-Giorgi-Mumladze.pdf";\r
              document.body.appendChild(link);\r
              link.click();\r
              document.body.removeChild(link);\r
            }}\r
          >\r
            Download PDF\r
          </div>\r
        </div>\r
\r
        <div className="resume-viewer">\r
          <div className="pdf-container">\r
            < img src='images/CV-Giorgi-Mumladze.png' className="cv-image" />\r
          </div>\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,Gt=`.wallpaper-app {\r
  width: 100%;\r
  height: 100%;\r
  padding: 16px;\r
  box-sizing: border-box;\r
  background: rgba(20, 20, 25, 0.55);\r
  color: #fff;\r
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
  overflow: auto;\r
  contain: paint;\r
}\r
\r
.title {\r
  margin: 0;\r
  font-size: 18px;\r
  font-weight: 600;\r
  letter-spacing: 0.3px;\r
  color: #eaeaea;\r
}\r
\r
.wallpaper-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\r
  gap: 12px;\r
  contain: layout paint;\r
}\r
\r
.wallpaper-item {\r
  position: relative;\r
  border-radius: 12px;\r
  overflow: hidden;\r
  cursor: pointer;\r
  height: 110px;\r
  background: rgba(255, 255, 255, 0.03);\r
  border: 1px solid rgba(255, 255, 255, 0.06);\r
  contain: paint;\r
  transition: transform 0.12s ease, border-color 0.12s ease;\r
  will-change: transform;\r
}\r
\r
.wallpaper-item img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
  display: block;\r
  image-rendering: auto;\r
  transform: translateZ(0);\r
}\r
\r
.wallpaper-overlay {\r
  position: absolute;\r
  inset: 0;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: flex-end;\r
  padding: 10px;\r
  background: rgba(0, 0, 0, 0);\r
  opacity: 0;\r
  transition: opacity 0.12s ease;\r
  will-change: opacity;\r
}\r
\r
.wallpaper-text {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: #fff;\r
}\r
\r
.wallpaper-action {\r
  font-size: 10px;\r
  color: #cfcfcf;\r
}\r
\r
.wallpaper-item:hover {\r
  transform: translateY(-2px);\r
  border-color: rgba(255, 255, 255, 0.14);\r
}\r
\r
.wallpaper-item:hover .wallpaper-overlay {\r
  opacity: 1;\r
}\r
\r
.wallpaper-item:active {\r
  transform: translateY(0px) scale(0.99);\r
}`,Kt=`import Window from "./Window";\r
import "./Wallpapers.css";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
type Wallpaper = {\r
  id: string;\r
  name: string;\r
  url: string;\r
  thumbnail: string;\r
}\r
\r
export default function Wallpapers({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  setWallpaper\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  setWallpaper: (url: string) => void;\r
}) {\r
\r
  const wallpapersList: Wallpaper[] = [\r
    { id: "1", name: "Sunset", url: "images/desktop-wallpapers/desktop-wallpaper-1.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-1-thumb.jpg" },\r
    { id: "2", name: "Night Sky", url: "images/desktop-wallpapers/desktop-wallpaper-2.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-2-thumb.jpg" },\r
    { id: "3", name: "Mountains", url: "images/desktop-wallpapers/desktop-wallpaper-3.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-3-thumb.jpg" },\r
    { id: "4", name: "Forest River", url: "images/desktop-wallpapers/desktop-wallpaper-4.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-4-thumb.jpg" },\r
    { id: "5", name: "Night Street", url: "images/desktop-wallpapers/desktop-wallpaper-5.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-5-thumb.jpg" },\r
    { id: "6", name: "City Road", url: "images/desktop-wallpapers/desktop-wallpaper-6.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-6-thumb.jpg" },\r
    { id: "7", name: "Pixel Art", url: "images/desktop-wallpapers/desktop-wallpaper-7.jpg", thumbnail: "images/desktop-wallpapers/desktop-wallpaper-7.jpg" }\r
  ];\r
\r
  return (\r
    <Window item={item} setDesktopItems={setDesktopItems} getLayout={getLayout}>\r
      <div className="wallpaper-app">\r
        <h2 className="title">Wallpapers</h2>\r
\r
        <div className="wallpaper-grid">\r
          {wallpapersList.map(wallpaper => (\r
            <div\r
              key={wallpaper.id}\r
              className="wallpaper-item"\r
              onClick={() => setWallpaper(wallpaper.url)}\r
            >\r
              <img\r
                src={wallpaper.thumbnail}\r
                alt={wallpaper.name}\r
                loading="lazy"\r
                decoding="async"\r
                fetchPriority="low"\r
              />\r
\r
              <div className="wallpaper-overlay">\r
                <span className="wallpaper-text">{wallpaper.name}</span>\r
                <span className="wallpaper-action">Set as wallpaper</span>\r
              </div>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,qt=`.window,\r
.window * {\r
  user-select: none;\r
}\r
\r
.window {\r
  position: absolute;\r
  display: flex;\r
  flex-direction: column;\r
  border: 1px solid rgba(255, 255, 255, 0.08);\r
  box-shadow:\r
    0 10px 30px rgba(0, 0, 0, 0.45),\r
    0 2px 10px rgba(0, 0, 0, 0.25);\r
  backdrop-filter: blur(18px);\r
  -webkit-backdrop-filter: blur(18px);\r
  overflow: hidden;\r
  transition: border-radius 0.2s ease, background 0.2s ease;\r
}\r
\r
.window-header {\r
  height: 42px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 0 8px 0 10px;\r
  background: rgba(255, 255, 255, 0.06);\r
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\r
  user-select: none;\r
  cursor: grab;\r
}\r
\r
.window-header:active {\r
  cursor: grabbing;\r
}\r
\r
.window-title {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  font-size: 13px;\r
  font-weight: 500;\r
  color: #e7e7e7;\r
  letter-spacing: 0.2px;\r
}\r
\r
.window-title img {\r
  width: 16px;\r
  height: 16px;\r
  border-radius: 3px;\r
}\r
\r
.window-controls {\r
  display: flex;\r
  align-items: center;\r
  gap: 4px;\r
}\r
\r
.window-controls button {\r
  width: 34px;\r
  height: 28px;\r
  border: none;\r
  outline: none;\r
  background: transparent;\r
  color: #cfcfcf;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 6px;\r
  transition: all 0.15s ease;\r
  cursor: pointer;\r
}\r
\r
.window-controls button:hover {\r
  background: rgba(255, 255, 255, 0.12);\r
  color: #ffffff;\r
}\r
\r
.window-controls button:last-child:hover {\r
  background: #e81123;\r
  color: white;\r
}\r
\r
.window-content {\r
  flex: 1;\r
  overflow: auto;\r
  background: rgba(20, 20, 22, 0.35);\r
}\r
\r
.resize-handle {\r
  position: absolute;\r
  z-index: 10;\r
}\r
\r
.resize-handle.right {\r
  top: 0;\r
  right: 0;\r
  width: 5px;\r
  height: 100%;\r
  cursor: ew-resize;\r
}\r
\r
.resize-handle.left {\r
  top: 0;\r
  left: 0;\r
  width: 5px;\r
  height: 100%;\r
  cursor: ew-resize;\r
}\r
\r
.resize-handle.top {\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 5px;\r
  cursor: ns-resize;\r
}\r
\r
.resize-handle.bottom {\r
  bottom: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 5px;\r
  cursor: ns-resize;\r
}\r
\r
.resize-handle.bottom-right {\r
  bottom: 0;\r
  right: 0;\r
  width: 10px;\r
  height: 10px;\r
  cursor: nwse-resize;\r
}\r
\r
.resize-handle.bottom-left {\r
  bottom: 0;\r
  left: 0;\r
  width: 10px;\r
  height: 10px;\r
  cursor: nesw-resize;\r
}\r
\r
.resize-handle.top-right {\r
  top: 0;\r
  right: 0;\r
  width: 10px;\r
  height: 10px;\r
  cursor: nesw-resize;\r
}\r
\r
.resize-handle.top-left {\r
  top: 0;\r
  left: 0;\r
  width: 10px;\r
  height: 10px;\r
  cursor: nwse-resize;\r
}\r
\r
.resize-handle:hover {\r
  background: rgba(255, 255, 255, 0.05);\r
}\r
\r
.window-content {\r
  overflow: auto;\r
  scroll-behavior: smooth;\r
}\r
\r
.window-content::-webkit-scrollbar {\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
.window-content::-webkit-scrollbar-track {\r
  background: rgba(255, 255, 255, 0.03);\r
  border-radius: 10px;\r
}\r
\r
.window-content::-webkit-scrollbar-thumb {\r
  background: rgba(255, 255, 255, 0.12);\r
  border-radius: 10px;\r
  border: 2px solid transparent;\r
  background-clip: padding-box;\r
  transition: background 0.2s ease;\r
}\r
\r
.window-content::-webkit-scrollbar-thumb:hover {\r
  background: rgba(255, 255, 255, 0.22);\r
}\r
\r
.window-content::-webkit-scrollbar-thumb:active {\r
  background: rgba(255, 255, 255, 0.3);\r
}\r
\r
.window-content::-webkit-scrollbar-corner {\r
  background: transparent;\r
}\r
\r
.browser-home-btn {\r
  padding: 5px 20px;\r
  border: none;\r
  background: rgb(202, 202, 202);\r
  color: #444444;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  cursor: pointer;\r
  transition: 0.15s;\r
}\r
\r
.browser-home-btn:hover {\r
  background: rgba(202, 202, 202, 0.658);\r
  color: white;\r
}`,Jt=`import { useRef } from 'react';\r
import './Window.css';\r
import {\r
  VscChromeMinimize,\r
  VscChromeMaximize,\r
  VscChromeClose,\r
  VscChromeRestore\r
} from "react-icons/vsc";\r
import { useTheme } from '../../ThemeContext';\r
import { MdRefresh } from "react-icons/md";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function Window({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  children,\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  children: React.ReactNode;\r
}) {\r
\r
  const {\r
    windowColor,\r
    chosenFont,\r
    setChosenWebsite\r
  } = useTheme();\r
\r
  const bringToFront = () => {\r
    setDesktopItems(prev => {\r
      const highest =\r
        Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
\r
      return prev.map(i =>\r
        i.name === item.name\r
          ? {\r
            ...i,\r
            zIndex: highest\r
          }\r
          : i\r
      );\r
    });\r
  };\r
\r
  const dragging = useRef(false);\r
\r
  const offset = useRef({ x: 0, y: 0 });\r
\r
\r
  const handleMouseDown = (e: React.MouseEvent) => {\r
    if (item.isMaximized) return;\r
\r
    dragging.current = true;\r
\r
    offset.current = {\r
      x: e.clientX - item.x,\r
      y: e.clientY - item.y\r
    };\r
\r
    const handleMouseMove = (e: MouseEvent) => {\r
      if (!dragging.current) return;\r
\r
      const newX = e.clientX - offset.current.x;\r
      const newY = e.clientY - offset.current.y;\r
\r
      setDesktopItems(prev =>\r
        prev.map(i =>\r
          i.name === item.name\r
            ? { ...i, x: newX, y: newY }\r
            : i\r
        )\r
      );\r
    };\r
\r
    const handleMouseUp = () => {\r
      dragging.current = false;\r
      document.removeEventListener('mousemove', handleMouseMove);\r
      document.removeEventListener('mouseup', handleMouseUp);\r
    };\r
\r
    document.addEventListener('mousemove', handleMouseMove);\r
    document.addEventListener('mouseup', handleMouseUp);\r
  };\r
\r
  const resizing = useRef(false);\r
\r
  const resizeDirection = useRef("");\r
\r
  const startMouse = useRef({ x: 0, y: 0 });\r
\r
  const startSize = useRef({\r
    width: 0,\r
    height: 0,\r
    x: 0,\r
    y: 0\r
  });\r
\r
  if (!item.isOpen || item.isMinimized) return null;\r
\r
  const handleResizeMouseDown = (\r
    e: React.MouseEvent,\r
    direction: string\r
  ) => {\r
\r
    e.stopPropagation();\r
\r
    if (item.isMaximized) return;\r
\r
    resizing.current = true;\r
\r
    resizeDirection.current = direction;\r
\r
    startMouse.current = {\r
      x: e.clientX,\r
      y: e.clientY\r
    };\r
\r
    startSize.current = {\r
      width: item.width,\r
      height: item.height,\r
      x: item.x,\r
      y: item.y\r
    };\r
\r
    const handleMouseMove = (e: MouseEvent) => {\r
\r
      if (!resizing.current) return;\r
\r
      const dx = e.clientX - startMouse.current.x;\r
      const dy = e.clientY - startMouse.current.y;\r
\r
      let newWidth = startSize.current.width;\r
      let newHeight = startSize.current.height;\r
\r
      let newX = startSize.current.x;\r
      let newY = startSize.current.y;\r
\r
      if (direction.includes("right")) {\r
        newWidth = startSize.current.width + dx;\r
      }\r
\r
      if (direction.includes("bottom")) {\r
        newHeight = startSize.current.height + dy;\r
      }\r
\r
      if (direction.includes("left")) {\r
        newWidth = startSize.current.width - dx;\r
        newX = startSize.current.x + dx;\r
      }\r
\r
      if (direction.includes("top")) {\r
        newHeight = startSize.current.height - dy;\r
        newY = startSize.current.y + dy;\r
      }\r
\r
      if (newWidth < 300) newWidth = 300;\r
      if (newHeight < 200) newHeight = 200;\r
\r
      setDesktopItems(prev =>\r
        prev.map(i =>\r
          i.name === item.name\r
            ? {\r
              ...i,\r
              width: newWidth,\r
              height: newHeight,\r
              x: newX,\r
              y: newY\r
            }\r
            : i\r
        )\r
      );\r
    };\r
\r
    const handleMouseUp = () => {\r
      resizing.current = false;\r
\r
      document.removeEventListener("mousemove", handleMouseMove);\r
      document.removeEventListener("mouseup", handleMouseUp);\r
    };\r
\r
    document.addEventListener("mousemove", handleMouseMove);\r
    document.addEventListener("mouseup", handleMouseUp);\r
  };\r
\r
  return (\r
    <div\r
      className="window"\r
      onMouseDown={bringToFront}\r
      style={{\r
        position: 'absolute',\r
        left: item.x,\r
        top: item.y,\r
        width: item.width,\r
        height: item.height,\r
        zIndex: item.zIndex,\r
        borderRadius: item.isMaximized ? 0 : 8,\r
        background: windowColor,\r
        fontFamily: chosenFont\r
      }}\r
    >\r
\r
      <div className="window-header" onMouseDown={handleMouseDown}>\r
\r
        <div className="window-title">\r
          <img src={item.icon} />\r
          {item.name}\r
          {item.name === "Browser" && (\r
            <button\r
              className="browser-home-btn"\r
              onMouseDown={(e) => e.stopPropagation()}\r
              onClick={() => setChosenWebsite("")}\r
            >\r
              <MdRefresh />\r
            </button>\r
          )}\r
        </div>\r
\r
        <div className="window-controls">\r
\r
          <button onClick={() => {\r
            setDesktopItems(prev =>\r
              prev.map(i =>\r
                i.name === item.name\r
                  ? { ...i, isMinimized: true }\r
                  : i\r
              )\r
            );\r
          }}>\r
            <VscChromeMinimize />\r
          </button>\r
\r
          <button onClick={() => {\r
            setDesktopItems(prev =>\r
              prev.map(i => {\r
\r
                if (i.name !== item.name) return i;\r
\r
                const layout = getLayout();\r
\r
                if (!i.isMaximized) {\r
                  return {\r
                    ...i,\r
                    prevX: i.x,\r
                    prevY: i.y,\r
                    prevWidth: i.width,\r
                    prevHeight: i.height,\r
\r
                    x: 0,\r
                    y: layout.offsetY,\r
                    width: layout.width,\r
                    height: layout.height,\r
\r
                    isMaximized: true\r
                  };\r
                }\r
\r
                return {\r
                  ...i,\r
                  x: i.prevX ?? 200,\r
                  y: i.prevY ?? 100,\r
                  width: i.prevWidth ?? 700,\r
                  height: i.prevHeight ?? 500,\r
                  isMaximized: false\r
                };\r
              })\r
            );\r
          }}>\r
            {item.isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}\r
          </button>\r
\r
          <button\r
            onClick={() => {\r
              setDesktopItems(prev =>\r
                prev.map(i => {\r
                  if (i.name !== item.name) return i;\r
\r
                  return {\r
                    ...i,\r
                    isOpen: false,\r
                    isMinimized: false,\r
\r
                    x: i.isMaximized ? (i.prevX ?? i.x) : i.x,\r
                    y: i.isMaximized ? (i.prevY ?? i.y) : i.y,\r
                    width: i.isMaximized\r
                      ? (i.prevWidth ?? i.width)\r
                      : i.width,\r
                    height: i.isMaximized\r
                      ? (i.prevHeight ?? i.height)\r
                      : i.height,\r
\r
                    isMaximized: false\r
                  };\r
                })\r
              );\r
            }}\r
          >\r
            <VscChromeClose />\r
          </button>\r
\r
        </div>\r
      </div>\r
\r
      <div className="window-content" style={{\r
        fontFamily: chosenFont\r
      }}>\r
        {children}\r
      </div>\r
\r
\r
      <div\r
        className="resize-handle right"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "right")}\r
      />\r
\r
      <div\r
        className="resize-handle bottom"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}\r
      />\r
\r
      <div\r
        className="resize-handle left"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "left")}\r
      />\r
\r
      <div\r
        className="resize-handle top"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "top")}\r
      />\r
\r
      <div\r
        className="resize-handle bottom-right"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}\r
      />\r
\r
      <div\r
        className="resize-handle bottom-left"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}\r
      />\r
\r
      <div\r
        className="resize-handle top-right"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}\r
      />\r
\r
      <div\r
        className="resize-handle top-left"\r
        onMouseDown={(e) => handleResizeMouseDown(e, "top-left")}\r
      />\r
    </div>\r
  );\r
}`,Yt=`.browser-app {\r
  width: 100%;\r
  height: 100%;\r
  background: radial-gradient(circle at top, #1a1d24, #0e0f13);\r
}\r
\r
.no-website-container {\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\r
.no-website-card {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  padding: 28px 26px;\r
  border-radius: 16px;\r
  background: rgba(255, 255, 255, 0.06);\r
  border: 1px solid rgba(255, 255, 255, 0.08);\r
  backdrop-filter: blur(14px);\r
  -webkit-backdrop-filter: blur(14px);\r
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\r
  min-width: 320px;\r
}\r
\r
.no-website-title {\r
  font-size: 1.2rem;\r
  font-weight: 600;\r
  color: #e5e7eb;\r
  margin-bottom: 6px;\r
}\r
\r
.no-website-subtitle {\r
  font-size: 0.9rem;\r
  color: #9ca3af;\r
  margin-bottom: 18px;\r
}\r
\r
.browser-buttons-container {\r
  display: flex;\r
  gap: 12px;\r
}\r
\r
.go-to-projects-button,\r
.go-to-games-button {\r
  padding: 10px 14px;\r
  border-radius: 10px;\r
  cursor: pointer;\r
  font-size: 0.9rem;\r
  font-weight: 500;\r
  transition: 0.2s ease;\r
  color: white;\r
  white-space: nowrap;\r
}\r
\r
.go-to-projects-button {\r
  background: linear-gradient(135deg, #3b82f6, #2563eb);\r
}\r
\r
.go-to-projects-button:hover {\r
  transform: translateY(-2px);\r
  box-shadow: 0 12px 25px rgba(37, 99, 235, 0.35);\r
}\r
\r
.go-to-games-button {\r
  background: linear-gradient(135deg, #22c55e, #16a34a);\r
}\r
\r
.go-to-games-button:hover {\r
  transform: translateY(-2px);\r
  box-shadow: 0 12px 25px rgba(34, 197, 94, 0.3);\r
}\r
\r
.go-to-projects-button:active,\r
.go-to-games-button:active {\r
  transform: scale(0.97);\r
}\r
\r
.browser {\r
  overflow: auto;\r
  scrollbar-width: thin;\r
  scrollbar-color: #4b5563 transparent;\r
}\r
\r
.browser::-webkit-scrollbar {\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
.browser::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.browser::-webkit-scrollbar-thumb {\r
  background: #4b5563;\r
  border-radius: 999px;\r
}\r
\r
.browser::-webkit-scrollbar-thumb:hover {\r
  background: #6b7280;\r
}\r
\r
.browser::-webkit-scrollbar-corner {\r
  background: transparent;\r
}`,Xt=`import Window from '../desktop-apps/Window';\r
import './Browser.css';\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function Browser({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  chosenWebsite\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  chosenWebsite: string;\r
}) {\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="browser-app">\r
        {\r
          chosenWebsite ?\r
            <iframe\r
              title="Browser"\r
              src={chosenWebsite}\r
              width="100%"\r
              height="100%"\r
              style={{ border: 'none' }}\r
            />\r
\r
            : (\r
              <div className="no-website-container">\r
                <div className="no-website-card">\r
                  <div className="no-website-title">No website chosen</div>\r
\r
                  <div className="no-website-subtitle">\r
                    Select a section to start browsing\r
                  </div>\r
\r
                  <div className="browser-buttons-container">\r
                    <div className="go-to-projects-button" onClick={() =>\r
                      setDesktopItems(prev => {\r
                        const highest = Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
                        return prev.map(i =>\r
                          i.name === "Projects"\r
                            ? {\r
                              ...i,\r
                              isOpen: true,\r
                              isMinimized: false,\r
                              zIndex: highest\r
                            }\r
                            : i\r
                        );\r
                      })\r
                    }>\r
                      Go to Projects\r
                    </div>\r
                    <div className="go-to-games-button" onClick={() =>\r
                      setDesktopItems(prev => {\r
                        const highest = Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
                        return prev.map(i =>\r
                          i.name === "Games"\r
                            ? {\r
                              ...i,\r
                              isOpen: true,\r
                              isMinimized: false,\r
                              zIndex: highest\r
                            }\r
                            : i\r
                        );\r
                      })\r
                    }>Go to Games</div>\r
                  </div>\r
                </div>\r
              </div>\r
            )\r
        }\r
      </div>\r
    </Window>\r
  );\r
}`,Zt=`.code-app {\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  background: #1e1e1e;\r
  color: #d4d4d4;\r
  overflow: hidden;\r
}\r
\r
.code-sidebar {\r
  width: 270px;\r
  background: #252526;\r
  border-right: 1px solid #333;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.code-sidebar-header {\r
  height: 35px;\r
  display: flex;\r
  align-items: center;\r
  padding: 0 12px;\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 1px;\r
  color: #cccccc;\r
  border-bottom: 1px solid #333;\r
  background: #2d2d30;\r
}\r
\r
.code-folder {\r
  flex: 1;\r
  overflow-y: auto;\r
  padding: 6px 0;\r
}\r
\r
.folder-title {\r
  height: 28px;\r
  display: flex;\r
  align-items: center;\r
  color: #cccccc;\r
  font-size: 13px;\r
  font-weight: 500;\r
  transition: .15s;\r
  user-select: none;\r
  border-radius: 4px;\r
}\r
\r
.folder-title:hover {\r
  background: #2a2d2e;\r
}\r
\r
.file-item {\r
  width: 100%;\r
  height: 28px;\r
  background: transparent;\r
  border: none;\r
  outline: none;\r
  color: #cccccc;\r
  font-size: 13px;\r
  cursor: pointer;\r
  transition: .15s;\r
  text-align: left;\r
}\r
\r
.file-item:hover {\r
  background: #2a2d2e;\r
}\r
\r
.file-item.active {\r
  background: #37373d;\r
  color: #ffffff;\r
}\r
\r
.code-editor {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  background: #1e1e1e;\r
}\r
\r
.editor-tabs {\r
  height: 36px;\r
  display: flex;\r
  align-items: center;\r
  background: #252526;\r
  border-bottom: 1px solid #333;\r
  overflow-x: auto;\r
  overflow-y: hidden;\r
}\r
\r
.editor-tabs::-webkit-scrollbar {\r
  height: 4px;\r
}\r
\r
.editor-tabs::-webkit-scrollbar-thumb {\r
  background: #444;\r
}\r
\r
.editor-tab {\r
  height: 100%;\r
  min-width: 160px;\r
  max-width: 220px;\r
  padding: 0 12px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 10px;\r
  background: #2d2d30;\r
  border-right: 1px solid #333;\r
  cursor: pointer;\r
  font-size: 13px;\r
  color: #969696;\r
  flex-shrink: 0;\r
  transition: .15s;\r
}\r
\r
.editor-tab:hover {\r
  background: #323233;\r
}\r
\r
.editor-tab.active {\r
  background: #1e1e1e;\r
  color: #ffffff;\r
}\r
\r
.tab-close {\r
  font-size: 16px;\r
  opacity: 0;\r
  padding: 2px;\r
  border-radius: 4px;\r
  transition: .15s;\r
  flex-shrink: 0;\r
}\r
\r
.editor-tab:hover .tab-close {\r
  opacity: .7;\r
}\r
\r
.tab-close:hover {\r
  opacity: 1 !important;\r
  background: #444;\r
}\r
\r
.editor-content {\r
  flex: 1;\r
  margin: 0;\r
  padding: 24px;\r
  overflow: auto;\r
  font-family: "Cascadia Code", "Consolas", monospace;\r
  font-size: 14px;\r
  line-height: 1.8;\r
  color: #d4d4d4;\r
  background: #1e1e1e;\r
}\r
\r
.editor-content code {\r
  white-space: pre;\r
}\r
\r
.editor-status {\r
  height: 24px;\r
  background: #007acc;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 0 12px;\r
  font-size: 12px;\r
  color: white;\r
}\r
\r
.code-folder::-webkit-scrollbar,\r
.editor-content::-webkit-scrollbar {\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
.code-folder::-webkit-scrollbar-track,\r
.editor-content::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.code-folder::-webkit-scrollbar-thumb,\r
.editor-content::-webkit-scrollbar-thumb {\r
  background: #424242;\r
  border-radius: 999px;\r
}\r
\r
.code-folder::-webkit-scrollbar-thumb:hover,\r
.editor-content::-webkit-scrollbar-thumb:hover {\r
  background: #555;\r
}\r
\r
.editor-empty {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  color: #858585;\r
  text-align: center;\r
}\r
\r
.editor-empty h2 {\r
  margin: 0;\r
  font-size: 28px;\r
  font-weight: 600;\r
  color: #d4d4d4;\r
}\r
\r
.editor-empty p {\r
  margin: 0;\r
  font-size: 14px;\r
}\r
\r
.github-status-link {\r
  height: 100%;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 0 12px;\r
  color: white;\r
  text-decoration: none;\r
  transition: .15s;\r
}\r
\r
.github-status-link:hover {\r
  background: rgba(255, 255, 255, 0.15);\r
}\r
\r
.github-status-link svg {\r
  font-size: 14px;\r
}\r
\r
.github-status-link:hover {\r
  text-decoration: underline;\r
}`,Qt=`.command-app {\r
  width: 100%;\r
  height: 100%;\r
  background: #0d1117;\r
  color: #e6edf3;\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  font-family: Consolas, Monaco, 'Courier New', monospace;\r
}\r
\r
.terminal-header {\r
  height: 42px;\r
  flex-shrink: 0;\r
  display: flex;\r
  align-items: center;\r
  padding: 0 14px;\r
  gap: 8px;\r
  background: #161b22;\r
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\r
}\r
\r
.dot {\r
  width: 12px;\r
  height: 12px;\r
  border-radius: 50%;\r
}\r
\r
.red {\r
  background: #ff5f57;\r
}\r
\r
.yellow {\r
  background: #febc2e;\r
}\r
\r
.green {\r
  background: #28c840;\r
}\r
\r
.terminal-title {\r
  margin-left: 10px;\r
  color: #8b949e;\r
  font-size: 13px;\r
  font-weight: 500;\r
  user-select: none;\r
}\r
\r
.terminal-body {\r
  flex: 1;\r
  padding: 18px;\r
  overflow-y: auto;\r
  overflow-x: hidden;\r
}\r
\r
.terminal-line {\r
  margin-bottom: 10px;\r
  color: #c9d1d9;\r
  line-height: 1.5;\r
}\r
\r
.command-highlight {\r
  color: #58a6ff;\r
  font-weight: 600;\r
}\r
\r
.terminal-command {\r
  color: #3fb950;\r
  margin-bottom: 6px;\r
  padding-left: 12px;\r
  transition: all 0.15s ease;\r
  cursor: default;\r
}\r
\r
.terminal-command:hover {\r
  color: #58a6ff;\r
  padding-left: 18px;\r
}\r
\r
.terminal-input {\r
  display: flex;\r
  align-items: center;\r
  margin-top: 20px;\r
}\r
\r
.prompt {\r
  color: #3fb950;\r
  font-weight: 600;\r
  white-space: nowrap;\r
}\r
\r
.command-input {\r
  flex: 1;\r
  width: 100%;\r
  min-width: 0;\r
  background: transparent;\r
  border: none;\r
  outline: none;\r
  color: #c9d1d9;\r
  font-family: inherit;\r
  font-size: 14px;\r
  margin-left: 6px;\r
  padding: 0;\r
  caret-color: #ffffff;\r
}\r
\r
.terminal-body::-webkit-scrollbar {\r
  width: 10px;\r
}\r
\r
.terminal-body::-webkit-scrollbar-track {\r
  background: #0d1117;\r
}\r
\r
.terminal-body::-webkit-scrollbar-thumb {\r
  background: #30363d;\r
  border-radius: 999px;\r
}\r
\r
.terminal-body::-webkit-scrollbar-thumb:hover {\r
  background: #484f58;\r
}\r
\r
.terminal-body {\r
  scrollbar-width: thin;\r
  scrollbar-color: #30363d #0d1117;\r
}\r
\r
.command-app ::selection {\r
  background: rgba(88, 166, 255, 0.35);\r
  color: #fff;\r
}\r
\r
@media (max-width: 768px) {\r
  .terminal-body {\r
    padding: 14px;\r
  }\r
\r
  .terminal-title {\r
    font-size: 12px;\r
  }\r
\r
  .terminal-command {\r
    font-size: 14px;\r
  }\r
}`,$t=`import Window from '../desktop-apps/Window';\r
import './Command.css';\r
import { useState, useRef, useEffect } from 'react';\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
export default function Command({\r
  item,\r
  setDesktopItems,\r
  getLayout\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
\r
  const [commandHistory, setCommandHistory] = useState<string[]>([]);\r
  const [commandInput, setCommandInput] = useState<string>('');\r
  const [showHelp, setShowHelp] = useState(false);\r
\r
  const inputRef = useRef<HTMLInputElement>(null);\r
  useEffect(() => {\r
    inputRef.current?.focus();\r
  }, []);\r
\r
  const commandMap: Record<string, string> = {\r
    computer: "My Computer",\r
    contact: "Contact",\r
    about: "About Me",\r
    projects: "Projects",\r
    music: "Music",\r
    games: "Games",\r
    resume: "Resume",\r
    wallpapers: "Wallpapers",\r
    browser: "Browser",\r
    command: "Command",\r
    user: "User",\r
    code: "Code",\r
    note: "Note",\r
    settings: "Settings",\r
  };\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="command-app">\r
        <div className="terminal-header">\r
          <span className="dot red"></span>\r
          <span className="dot yellow"></span>\r
          <span className="dot green"></span>\r
\r
          <div className="terminal-title">\r
            GeorgieOS Command\r
          </div>\r
        </div>\r
\r
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>\r
          <div className="terminal-line">\r
            GeorgieOS Command v1.0\r
          </div>\r
\r
          <div className="terminal-line">\r
            Type <span className="command-highlight">help</span> to see available commands.\r
          </div>\r
\r
          {\r
            commandHistory.map((cmd, index) => (\r
              <div key={index} className="terminal-line">\r
                <span className="prompt">\r
                  C:\\Users\\George&gt;\r
                </span>\r
                <span>{cmd}</span>\r
              </div>\r
            ))\r
          }\r
\r
          {\r
            showHelp && (\r
              <>\r
                <br />\r
                <div className="terminal-line">\r
                  Available Commands:\r
                </div>\r
\r
                <div className="terminal-command">computer</div>\r
                <div className="terminal-command">contact</div>\r
                <div className="terminal-command">about</div>\r
                <div className="terminal-command">projects</div>\r
                <div className="terminal-command">music</div>\r
                <div className="terminal-command">games</div>\r
                <div className="terminal-command">resume</div>\r
                <div className="terminal-command">wallpapers</div>\r
                <div className="terminal-command">browser</div>\r
                <div className="terminal-command">command</div>\r
                <div className="terminal-command">user</div>\r
                <div className="terminal-command">code</div>\r
                <div className="terminal-command">note</div>\r
                <div className="terminal-command">settings</div>\r
                <div className="terminal-command">clear</div>\r
                <br />\r
              </>\r
            )\r
          }\r
\r
          <div className="terminal-input">\r
            <span className="prompt">\r
              C:\\Users\\George&gt;\r
            </span>\r
\r
            <input\r
              ref={inputRef}\r
              type="text"\r
              className="command-input"\r
              value={commandInput}\r
              onChange={(e) => setCommandInput(e.target.value)}\r
              onKeyDown={(e) => {\r
                if (e.key === "Enter") {\r
                  const command = commandInput.trim().toLowerCase();\r
                  setCommandHistory(prev => [...prev, command]);\r
                  if (command === "help") {\r
                    setShowHelp(true);\r
                  } else {\r
                    setShowHelp(false);\r
                  }\r
\r
                  if (command === "clear") {\r
                    setCommandHistory([]);\r
                  }\r
                  else if (commandMap[command]) {\r
                    const targetName = commandMap[command];\r
\r
                    setDesktopItems(prev => {\r
                      const highest = Math.max(...prev.map(i => i.zIndex ?? 0)) + 1;\r
                      return prev.map(i =>\r
                        i.name === targetName\r
                          ? {\r
                            ...i,\r
                            isOpen: true,\r
                            isMinimized: false,\r
                            zIndex: highest,\r
                          }\r
                          : i\r
                      );\r
                    });\r
                  }\r
                  setCommandInput("");\r
                  requestAnimationFrame(() => {\r
                    inputRef.current?.focus();\r
                  });\r
                }\r
              }}\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,en=`.note-app {\r
  width: 100%;\r
  height: 100%;\r
  display: flex;\r
  background: #0b0f17;\r
  color: #e5e7eb;\r
  font-family: system-ui, sans-serif;\r
}\r
\r
.note-sidebar {\r
  width: 260px;\r
  min-width: 260px;\r
  background: #0f1624;\r
  border-right: 1px solid #1f2937;\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.note-sidebar-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 14px;\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: #cbd5e1;\r
  border-bottom: 1px solid #1f2937;\r
}\r
\r
.note-add-btn {\r
  width: 28px;\r
  height: 28px;\r
  border-radius: 6px;\r
  background: #1f2937;\r
  border: 1px solid #2b3648;\r
  color: #cbd5e1;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  transition: 0.15s ease;\r
}\r
\r
.note-add-btn:hover {\r
  background: #273244;\r
  border-color: #3a4a63;\r
}\r
\r
.note-list {\r
  flex: 1;\r
  overflow-y: auto;\r
}\r
\r
.note-item {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 10px 12px;\r
  font-size: 13px;\r
  cursor: pointer;\r
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\r
  transition: 0.15s ease;\r
  color: #cbd5e1;\r
}\r
\r
.note-item:hover {\r
  background: #121a2a;\r
}\r
\r
.note-item.active {\r
  background: #172033;\r
  border-left: 2px solid #3b82f6;\r
  padding-left: 10px;\r
}\r
\r
.note-delete-btn {\r
  width: 28px;\r
  height: 28px;\r
  min-width: 28px;\r
  min-height: 28px;\r
  border-radius: 6px;\r
  background: transparent;\r
  border: 1px solid transparent;\r
  color: #94a3b8;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  transition: 0.15s ease;\r
  padding: 0;\r
}\r
\r
.note-delete-btn:hover {\r
  color: #f87171;\r
  background: rgba(248, 113, 113, 0.08);\r
  border-color: rgba(248, 113, 113, 0.2);\r
}\r
\r
.note-editor {\r
  flex: 1;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 22px;\r
  gap: 10px;\r
}\r
\r
.note-title {\r
  font-size: 20px;\r
  font-weight: 600;\r
  background: transparent;\r
  border: none;\r
  outline: none;\r
  color: #e5e7eb;\r
}\r
\r
.note-content {\r
  flex: 1;\r
  background: transparent;\r
  border: none;\r
  outline: none;\r
  resize: none;\r
  font-size: 14px;\r
  line-height: 1.7;\r
  color: #cbd5e1;\r
}\r
\r
.note-save-btn {\r
  align-self: flex-start;\r
  padding: 8px 14px;\r
  font-size: 12px;\r
  border-radius: 6px;\r
  background: #1f2937;\r
  border: 1px solid #2b3648;\r
  color: #cbd5e1;\r
  cursor: pointer;\r
  transition: 0.15s ease;\r
}\r
\r
.note-save-btn:hover {\r
  background: #273244;\r
  border-color: #3a4a63;\r
}\r
\r
.empty-state {\r
  margin: auto;\r
  font-size: 13px;\r
  color: #64748b;\r
}`,tn=`import Window from "../desktop-apps/Window";\r
import "./Note.css";\r
import { useEffect, useState } from "react";\r
import { FaPlus } from "react-icons/fa6";\r
import { IoMdClose } from "react-icons/io";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
  x: number;\r
  y: number;\r
  width: number;\r
  height: number;\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
  zIndex?: number;\r
};\r
\r
type NoteData = {\r
  id: number;\r
  title: string;\r
  content: string;\r
};\r
\r
const STORAGE_KEY = "georgie-notes";\r
\r
export default function Note({\r
  item,\r
  setDesktopItems,\r
  getLayout\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
\r
  const [notes, setNotes] = useState<NoteData[]>(() => {\r
    const raw = localStorage.getItem(STORAGE_KEY);\r
    if (!raw) return [];\r
    try {\r
      const data = JSON.parse(raw);\r
      return Array.isArray(data?.notes) ? data.notes : [];\r
    } catch {\r
      return [];\r
    }\r
  });\r
\r
  const [selectedId, setSelectedId] = useState<number | null>(() => {\r
    const raw = localStorage.getItem(STORAGE_KEY);\r
    if (!raw) return null;\r
    try {\r
      const data = JSON.parse(raw);\r
      return data?.selectedId ?? null;\r
    } catch {\r
      return null;\r
    }\r
  });\r
\r
  const [title, setTitle] = useState("");\r
  const [content, setContent] = useState("");\r
\r
  useEffect(() => {\r
    const active = notes.find((n) => n.id === selectedId);\r
    if (active) {\r
      setTitle(active.title);\r
      setContent(active.content);\r
    } else {\r
      setTitle("");\r
      setContent("");\r
    }\r
  }, [selectedId]);\r
\r
  useEffect(() => {\r
    localStorage.setItem(\r
      STORAGE_KEY,\r
      JSON.stringify({\r
        notes,\r
        selectedId\r
      })\r
    );\r
  }, [notes, selectedId]);\r
\r
  const createNote = () => {\r
    const note: NoteData = {\r
      id: Date.now(),\r
      title: "Untitled Note",\r
      content: ""\r
    };\r
\r
    setNotes(prev => {\r
      const updated = [note, ...prev];\r
      setSelectedId(note.id);\r
      setTitle(note.title);\r
      setContent("");\r
      return updated;\r
    });\r
  };\r
\r
  const selectNote = (note: NoteData) => {\r
    setSelectedId(note.id);\r
    setTitle(note.title);\r
    setContent(note.content);\r
  };\r
\r
  const saveNote = () => {\r
    setNotes(prev =>\r
      prev.map(n =>\r
        n.id === selectedId\r
          ? { ...n, title, content }\r
          : n\r
      )\r
    );\r
  };\r
\r
  const deleteNote = (id: number) => {\r
    setNotes(prev => {\r
      const updated = prev.filter(n => n.id !== id);\r
\r
      if (selectedId === id) {\r
        const next = updated[0] || null;\r
        setSelectedId(next?.id ?? null);\r
        setTitle(next?.title ?? "");\r
        setContent(next?.content ?? "");\r
      }\r
\r
      return updated;\r
    });\r
  };\r
\r
  return (\r
    <Window item={item} setDesktopItems={setDesktopItems} getLayout={getLayout}>\r
      <div className="note-app">\r
\r
        <div className="note-sidebar">\r
          <div className="note-sidebar-header">\r
            <span>Notes</span>\r
\r
            <button className="note-add-btn" onClick={createNote}>\r
              <FaPlus />\r
            </button>\r
          </div>\r
\r
          <div className="note-list">\r
            {notes.map(note => (\r
              <div\r
                key={note.id}\r
                className={\`note-item \${selectedId === note.id ? "active" : ""}\`}\r
                onClick={() => selectNote(note)}\r
              >\r
                <span>{note.title || "Untitled Note"}</span>\r
\r
                <button\r
                  className="note-delete-btn"\r
                  onClick={(e) => {\r
                    e.stopPropagation();\r
                    deleteNote(note.id);\r
                  }}\r
                >\r
                  <IoMdClose />\r
                </button>\r
              </div>\r
            ))}\r
          </div>\r
        </div>\r
\r
        <div className="note-editor">\r
          {selectedId ? (\r
            <>\r
              <input\r
                className="note-title"\r
                value={title}\r
                maxLength={30}\r
                onChange={(e) => setTitle(e.target.value)}\r
                placeholder="Title..."\r
              />\r
\r
              <textarea\r
                className="note-content"\r
                value={content}\r
                onChange={(e) => setContent(e.target.value)}\r
                placeholder="Write your note..."\r
              />\r
\r
              <button className="note-save-btn" onClick={saveNote}>\r
                Save\r
              </button>\r
            </>\r
          ) : (\r
            <div className="empty-state">\r
              Create or select a note\r
            </div>\r
          )}\r
        </div>\r
\r
      </div>\r
    </Window>\r
  );\r
}`,nn=`.settings {\r
  width: 100%;\r
  height: 100%;\r
  overflow-y: auto;\r
  padding: 24px;\r
  background: linear-gradient(180deg,\r
      #111827 0%,\r
      #0f172a 100%);\r
  color: white;\r
  font-family: var(--app-font, Arial);\r
  display: flex;\r
  flex-direction: column;\r
  gap: 20px;\r
  box-sizing: border-box;\r
}\r
\r
.settings::-webkit-scrollbar {\r
  width: 10px;\r
}\r
\r
.settings::-webkit-scrollbar-track {\r
  background: transparent;\r
}\r
\r
.settings::-webkit-scrollbar-thumb {\r
  background: rgba(255, 255, 255, 0.15);\r
  border-radius: 999px;\r
}\r
\r
.settings::-webkit-scrollbar-thumb:hover {\r
  background: rgba(255, 255, 255, 0.3);\r
}\r
\r
.settings-title {\r
  margin: 0;\r
  font-size: 32px;\r
  font-weight: 700;\r
  letter-spacing: -0.5px;\r
}\r
\r
.settings-card {\r
  background: rgba(255, 255, 255, 0.04);\r
  border: 1px solid rgba(255, 255, 255, 0.08);\r
  border-radius: 18px;\r
  padding: 20px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 18px;\r
  backdrop-filter: blur(10px);\r
  box-shadow:\r
    0 10px 25px rgba(0, 0, 0, 0.25);\r
}\r
\r
.settings-card h2 {\r
  margin: 0;\r
  font-size: 18px;\r
  font-weight: 600;\r
}\r
\r
.settings-row {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  gap: 20px;\r
  padding: 12px 0;\r
}\r
\r
.settings-row:not(:last-child) {\r
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\r
}\r
\r
.settings-row label {\r
  font-size: 15px;\r
  font-weight: 500;\r
}\r
\r
.settings-control {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.settings-control select {\r
  min-width: 180px;\r
  padding: 10px 14px;\r
  border-radius: 10px;\r
  border: 1px solid rgba(255, 255, 255, 0.12);\r
  background: rgba(255, 255, 255, 0.06);\r
  color: white;\r
  outline: none;\r
  transition: 0.2s;\r
}\r
\r
.settings-control select:focus {\r
  border-color: #60a5fa;\r
}\r
\r
.settings-control select option {\r
  background: #1f2937;\r
  color: white;\r
}\r
\r
.settings-control input[type="color"] {\r
  width: 46px;\r
  height: 46px;\r
  border: none;\r
  border-radius: 10px;\r
  overflow: hidden;\r
  cursor: pointer;\r
  background: transparent;\r
}\r
\r
.settings-control button,\r
.settings-card button {\r
  border: none;\r
  border-radius: 10px;\r
  padding: 10px 14px;\r
  font-size: 14px;\r
  font-weight: 600;\r
  color: white;\r
  cursor: pointer;\r
  transition:\r
    transform 0.15s ease,\r
    background 0.15s ease;\r
}\r
\r
.settings-control button {\r
  background: #2563eb;\r
}\r
\r
.settings-control button:hover {\r
  background: #3b82f6;\r
  transform: translateY(-1px);\r
}\r
\r
.settings-card.danger {\r
  border: 1px solid rgba(239, 68, 68, 0.25);\r
  background: rgba(127, 29, 29, 0.15);\r
}\r
\r
.settings-card.danger h2 {\r
  color: #fca5a5;\r
}\r
\r
.settings-card.danger button {\r
  background: #dc2626;\r
  width: fit-content;\r
  padding-left: 18px;\r
  padding-right: 18px;\r
}\r
\r
.settings-card.danger button:hover {\r
  background: #ef4444;\r
  transform: translateY(-1px);\r
}\r
\r
.color-setting {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
}\r
\r
.color-preview {\r
  width: 32px;\r
  height: 32px;\r
\r
  border-radius: 50%;\r
\r
  border: 2px solid rgba(255, 255, 255, 0.15);\r
\r
  box-shadow:\r
    0 0 0 4px rgba(255, 255, 255, 0.03);\r
}`,rn=`import Window from "../desktop-apps/Window";\r
import "./Settings.css";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
  x: number;\r
  y: number;\r
  width: number;\r
  height: number;\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
  zIndex?: number;\r
};\r
\r
export default function Settings({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  setTaskbarFooterColor,\r
  setChosenFont,\r
  chosenFont,\r
  taskbarFooterColor,\r
  windowColor,\r
  setWindowColor\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  setTaskbarFooterColor: (color: string) => void;\r
  setChosenFont: (font: string) => void;\r
  chosenFont: string;\r
  taskbarFooterColor: string;\r
  windowColor: string;\r
  setWindowColor: (color: string) => void;\r
}) {\r
\r
  const applyFont = (value: string) => {\r
    setChosenFont(value);\r
    document.documentElement.style.setProperty("--app-font", value);\r
  };\r
\r
  const resetOS = () => {\r
    localStorage.clear();\r
    window.location.reload();\r
  };\r
\r
  const DEFAULT_FONT = "Inter";\r
  const DEFAULT_TASKBAR_COLOR = "#0b1128de";\r
\r
  const resetFont = () => {\r
    applyFont(DEFAULT_FONT);\r
  };\r
\r
  const resetTaskbarColor = () => {\r
    setTaskbarFooterColor(DEFAULT_TASKBAR_COLOR);\r
  };\r
\r
  const resetWindowColor = () => {\r
    setWindowColor('rgba(28, 28, 30, 0.72)');\r
  };\r
\r
  return (\r
    <Window item={item} setDesktopItems={setDesktopItems} getLayout={getLayout}>\r
      <div className="settings">\r
        <h1 className="settings-title">Settings</h1>\r
\r
        <div className="settings-card">\r
          <h2>Appearance</h2>\r
\r
          <div className="settings-row">\r
            <label>Taskbar color</label>\r
\r
            <div className="settings-control">\r
              <input\r
                type="color"\r
                value={taskbarFooterColor}\r
                onChange={(e) => setTaskbarFooterColor(e.target.value)}\r
              />\r
\r
              <button onClick={resetTaskbarColor}>\r
                Default\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div className="settings-row">\r
            <label>Window color</label>\r
\r
            <div className="settings-control">\r
              <input\r
                type="color"\r
                value={windowColor}\r
                onChange={(e) => setWindowColor(e.target.value)}\r
              />\r
\r
              <button onClick={resetWindowColor}>\r
                Default\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div className="settings-row">\r
            <label>Font</label>\r
\r
            <div className="settings-control">\r
              <select\r
                value={chosenFont}\r
                onChange={(e) => applyFont(e.target.value)}\r
              >\r
                <option value="Arial">Arial</option>\r
                <option value="Inter">Inter</option>\r
                <option value="Segoe UI">Segoe UI</option>\r
                <option value="Verdana">Verdana</option>\r
                <option value="Courier New">Courier</option>\r
              </select>\r
\r
              <button onClick={resetFont}>\r
                Default\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="settings-card danger">\r
          <h2>Reset</h2>\r
          <button onClick={resetOS}>Reset system (localStorage)</button>\r
        </div>\r
      </div>\r
    </Window>\r
  );\r
}`,an=`.user-app {\r
  padding: 18px;\r
  color: #eaeaea;\r
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;\r
  background: transparent;\r
}\r
\r
.user-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 14px;\r
  padding: 14px;\r
  border-radius: 14px;\r
  background: rgba(255, 255, 255, 0.04);\r
  border: 1px solid rgba(255, 255, 255, 0.06);\r
  backdrop-filter: blur(10px);\r
}\r
\r
.user-avatar {\r
  width: 54px;\r
  height: 54px;\r
  border-radius: 14px;\r
  object-fit: cover;\r
  border: 1px solid rgba(255, 255, 255, 0.1);\r
}\r
\r
.user-info h2 {\r
  margin: 0;\r
  font-size: 16px;\r
}\r
\r
.user-info p {\r
  margin: 2px 0;\r
  font-size: 12px;\r
  opacity: 0.7;\r
}\r
\r
.status {\r
  font-size: 11px;\r
  padding: 3px 8px;\r
  border-radius: 999px;\r
  background: rgba(0, 200, 120, 0.15);\r
  color: #2ee59d;\r
  display: inline-block;\r
  margin-top: 4px;\r
}\r
\r
.user-section {\r
  margin-top: 16px;\r
  padding: 14px;\r
  border-radius: 14px;\r
  background: rgba(255, 255, 255, 0.03);\r
  border: 1px solid rgba(255, 255, 255, 0.06);\r
}\r
\r
.user-section h3 {\r
  margin: 0 0 10px 0;\r
  font-size: 13px;\r
  opacity: 0.8;\r
}\r
\r
.stat-grid {\r
  display: grid;\r
  grid-template-columns: repeat(3, 1fr);\r
  gap: 10px;\r
}\r
\r
.stat {\r
  padding: 10px;\r
  border-radius: 12px;\r
  background: rgba(255, 255, 255, 0.04);\r
  border: 1px solid rgba(255, 255, 255, 0.06);\r
  display: flex;\r
  flex-direction: column;\r
  gap: 4px;\r
}\r
\r
.stat span {\r
  font-size: 11px;\r
  opacity: 0.6;\r
}\r
\r
.stat b {\r
  font-size: 14px;\r
}\r
\r
.button-row {\r
  display: flex;\r
  gap: 10px;\r
  margin-top: 8px;\r
}\r
\r
.btn {\r
  flex: 1;\r
  padding: 10px;\r
  border-radius: 10px;\r
  border: none;\r
  cursor: pointer;\r
  font-size: 12px;\r
  transition: 0.2s ease;\r
}\r
\r
.btn.primary {\r
  background: rgba(90, 140, 255, 0.2);\r
  color: #7aa6ff;\r
  border: 1px solid rgba(90, 140, 255, 0.3);\r
}\r
\r
.btn.primary:hover {\r
  background: rgba(90, 140, 255, 0.3);\r
}\r
\r
.btn.danger {\r
  background: rgba(255, 70, 70, 0.15);\r
  color: #ff6b6b;\r
  border: 1px solid rgba(255, 70, 70, 0.25);\r
}\r
\r
.btn.danger:hover {\r
  background: rgba(255, 70, 70, 0.25);\r
}\r
\r
.hint {\r
  font-size: 11px;\r
  opacity: 0.5;\r
  margin-top: 10px;\r
}`,on=`import { useEffect, useState } from "react";\r
import Window from '../desktop-apps/Window';\r
import './User.css';\r
import { FcFolder } from "react-icons/fc";\r
import { FaWindowMaximize } from "react-icons/fa6";\r
import { FcClock } from "react-icons/fc";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
  x: number;\r
  y: number;\r
  width: number;\r
  height: number;\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
  zIndex?: number;\r
};\r
\r
export default function User({\r
  item,\r
  setDesktopItems,\r
  getLayout,\r
  items,\r
  appsOpenedTotal\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
  items: DesktopItem[];\r
  appsOpenedTotal: number;\r
}) {\r
\r
\r
  const openedWindows = items.filter(i => i.isOpen).length;\r
\r
  const [uptime, setUptime] = useState("0h 0m 0s");\r
\r
  useEffect(() => {\r
    let startTime = localStorage.getItem("georgie_os_start_time");\r
\r
    if (!startTime) {\r
      startTime = Date.now().toString();\r
      localStorage.setItem("georgie_os_start_time", startTime);\r
    }\r
\r
    const start = parseInt(startTime);\r
\r
    const interval = setInterval(() => {\r
      const elapsed = Date.now() - start;\r
\r
      const hours = Math.floor(elapsed / 3600000);\r
      const minutes = Math.floor((elapsed % 3600000) / 60000);\r
      const seconds = Math.floor((elapsed % 60000) / 1000);\r
\r
      setUptime(\`\${hours}h \${minutes}m \${seconds}s\`);\r
    }, 1000);\r
\r
    return () => clearInterval(interval);\r
  }, []);\r
\r
  const user = {\r
    name: "George",\r
    role: "GeorgieOS User",\r
    status: "Online",\r
    avatar: "images/george-avatar.jpg",\r
    uptime,\r
    appsOpened: appsOpenedTotal,\r
    windowsOpen: openedWindows\r
  };\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="user-app">\r
\r
        <div className="user-header">\r
          <img className="user-avatar" src={user.avatar} alt="avatar" />\r
          <div className="user-info">\r
            <h2>{user.name}</h2>\r
            <p>{user.role}</p>\r
            <span className="status">{user.status}</span>\r
          </div>\r
        </div>\r
\r
        <div className="user-section">\r
          <h3>System Overview</h3>\r
          <div className="stat-grid">\r
            <div className="stat">\r
              <span style={{\r
                display: 'flex',\r
                alignItems: 'center',\r
                gap: '5px'\r
              }}><FcClock /> Uptime</span>\r
              <b>{user.uptime}</b>\r
            </div>\r
\r
            <div className="stat">\r
              <span style={{\r
                display: 'flex',\r
                alignItems: 'center',\r
                gap: '5px'\r
              }}><FcFolder /> Apps Opened</span>\r
              <b>{user.appsOpened}</b>\r
            </div>\r
\r
            <div className="stat">\r
              <span style={{\r
                display: 'flex',\r
                alignItems: 'center',\r
                gap: '5px'\r
              }}><FaWindowMaximize style={{\r
                color: '#4a90e2'\r
              }} /> Windows</span>\r
              <b>{user.windowsOpen}</b>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </Window>\r
  );\r
}`,sn=`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`,cn=`import Window from "../desktop-apps/Window";\r
import "./Code.css";\r
import { useState } from "react";\r
import { FcFile } from "react-icons/fc";\r
import { FcFolder } from "react-icons/fc";\r
import { MdKeyboardArrowRight } from "react-icons/md";\r
import { MdKeyboardArrowDown } from "react-icons/md";\r
import { MdClose } from "react-icons/md";\r
import selfSource from "./Code.tsx?raw";\r
import { FaGithub } from "react-icons/fa";\r
\r
type DesktopItem = {\r
  name: string;\r
  icon: string;\r
  isOpen: boolean;\r
\r
  x: number;\r
  y: number;\r
\r
  width: number;\r
  height: number;\r
\r
  isMinimized?: boolean;\r
  isMaximized?: boolean;\r
\r
  prevX?: number;\r
  prevY?: number;\r
  prevWidth?: number;\r
  prevHeight?: number;\r
\r
  zIndex?: number;\r
};\r
\r
type FileNode = {\r
  name: string;\r
  type: "file" | "folder";\r
  children?: FileNode[];\r
};\r
\r
export default function Code({\r
  item,\r
  setDesktopItems,\r
  getLayout\r
}: {\r
  item: DesktopItem;\r
  setDesktopItems: React.Dispatch<React.SetStateAction<DesktopItem[]>>;\r
  getLayout: () => { offsetY: number; width: number; height: number };\r
}) {\r
\r
\r
  const fileTree: FileNode[] = [\r
    {\r
      name: "App.tsx",\r
      type: "file"\r
    },\r
    {\r
      name: "App.css",\r
      type: "file"\r
    },\r
    {\r
      name: "ThemeContext.tsx",\r
      type: "file"\r
    },\r
    {\r
      name: "components",\r
      type: "folder",\r
      children: [\r
        {\r
          name: "Desktop.tsx",\r
          type: "file"\r
        },\r
        {\r
          name: "Desktop.css",\r
          type: "file"\r
        },\r
        {\r
          name: "Footer.tsx",\r
          type: "file"\r
        },\r
        {\r
          name: "Footer.css",\r
          type: "file"\r
        },\r
        {\r
          name: "TaskBar.tsx",\r
          type: "file"\r
        },\r
        {\r
          name: "TaskBar.css",\r
          type: "file"\r
        },\r
        {\r
          name: "desktop-apps",\r
          type: "folder",\r
          children: [\r
            { name: "AboutMe.tsx", type: "file" },\r
            { name: "AboutMe.css", type: "file" },\r
            { name: "Contact.tsx", type: "file" },\r
            { name: "Contact.css", type: "file" },\r
            { name: "Games.tsx", type: "file" },\r
            { name: "Games.css", type: "file" },\r
            { name: "Music.tsx", type: "file" },\r
            { name: "Music.css", type: "file" },\r
            { name: "MyComputer.tsx", type: "file" },\r
            { name: "MyComputer.css", type: "file" },\r
            { name: "Projects.tsx", type: "file" },\r
            { name: "Projects.css", type: "file" },\r
            { name: "ProjectCard.tsx", type: "file" },\r
            { name: "Resume.tsx", type: "file" },\r
            { name: "Resume.css", type: "file" },\r
            { name: "Wallpapers.tsx", type: "file" },\r
            { name: "Wallpapers.css", type: "file" },\r
            { name: "Window.tsx", type: "file" },\r
            { name: "Window.css", type: "file" }\r
          ]\r
        },\r
        {\r
          name: "footer-apps",\r
          type: "folder",\r
          children: [\r
            { name: "Browser.tsx", type: "file" },\r
            { name: "Browser.css", type: "file" },\r
            { name: "Code.tsx", type: "file" },\r
            { name: "Code.css", type: "file" },\r
            { name: "Command.tsx", type: "file" },\r
            { name: "Command.css", type: "file" },\r
            { name: "Note.tsx", type: "file" },\r
            { name: "Note.css", type: "file" },\r
            { name: "Settings.tsx", type: "file" },\r
            { name: "Settings.css", type: "file" },\r
            { name: "User.tsx", type: "file" },\r
            { name: "User.css", type: "file" }\r
          ]\r
        }\r
      ]\r
    }\r
  ];\r
\r
  const renderTree = (\r
    nodes: FileNode[],\r
    level = 0\r
  ) => {\r
    return nodes.map(node => {\r
      if (node.type === "folder") {\r
        return (\r
          <div key={node.name}>\r
            <div\r
              className="folder-title"\r
              onClick={() =>\r
                setOpenFolders(prev => ({\r
                  ...prev,\r
                  [node.name]: !prev[node.name]\r
                }))\r
              }\r
              style={{\r
                paddingLeft: \`\${level * 16}px\`,\r
                display: "flex",\r
                alignItems: "center",\r
                gap: "4px",\r
                cursor: "pointer"\r
              }}\r
            >\r
              {openFolders[node.name] ? (\r
                <MdKeyboardArrowDown size={16} />\r
              ) : (\r
                <MdKeyboardArrowRight size={16} />\r
              )}\r
\r
              <FcFolder />\r
\r
              <span>{node.name}</span>\r
            </div>\r
\r
            {openFolders[node.name] &&\r
              node.children &&\r
              renderTree(\r
                node.children,\r
                level + 1\r
              )}\r
          </div>\r
        );\r
      }\r
\r
      return (\r
        <button\r
          key={node.name}\r
          className={\`file-item \${selectedFile === node.name\r
            ? "active"\r
            : ""\r
            }\`}\r
          onClick={() =>\r
            openFile(node.name)\r
          }\r
          style={{\r
            paddingLeft: \`\${level * 16 + 10}px\`,\r
            display: "flex",\r
            alignItems: "center",\r
            gap: "5px"\r
          }}\r
        >\r
          <FcFile />\r
          {node.name}\r
        </button>\r
      );\r
    });\r
  };\r
\r
  const [openTabs, setOpenTabs] = useState<string[]>([]);\r
\r
  const [selectedFile, setSelectedFile] =\r
    useState("");\r
\r
  const openFile = (fileName: string) => {\r
    if (!openTabs.includes(fileName)) {\r
      setOpenTabs(prev => [...prev, fileName]);\r
    }\r
\r
    setSelectedFile(fileName);\r
  };\r
\r
  const [openFolders, setOpenFolders] =\r
    useState<Record<string, boolean>>({\r
      components: true,\r
      "desktop-apps": true,\r
      "footer-apps": true\r
    });\r
\r
\r
  const rawFiles = import.meta.glob(\r
    "../../**/*.{tsx,css}",\r
    {\r
      query: "?raw",\r
      import: "default",\r
      eager: true\r
    }\r
  );\r
\r
  const fileContents: Record<string, string> = {};\r
\r
  Object.entries(rawFiles).forEach(\r
    ([path, content]) => {\r
      const fileName =\r
        path.split("/").pop() || path;\r
\r
      fileContents[fileName] =\r
        content as string;\r
    }\r
  );\r
\r
  fileContents["Code.tsx"] = selfSource;\r
\r
  const codeContent =\r
    fileContents[selectedFile] ||\r
    "// File not found";\r
\r
  return (\r
    <Window\r
      item={item}\r
      setDesktopItems={setDesktopItems}\r
      getLayout={getLayout}\r
    >\r
      <div className="code-app">\r
        <aside className="code-sidebar">\r
          <div className="code-sidebar-header">\r
            EXPLORER\r
          </div>\r
\r
          <div className="code-folder">\r
            {renderTree(fileTree)}\r
          </div>\r
        </aside>\r
\r
        <section className="code-editor">\r
          <div className="editor-tabs">\r
            {openTabs.map(tab => (\r
              <div\r
                key={tab}\r
                className={\`editor-tab \${selectedFile === tab\r
                  ? "active"\r
                  : ""\r
                  }\`}\r
                onClick={() =>\r
                  setSelectedFile(tab)\r
                }\r
              >\r
                <span>{tab}</span>\r
\r
                <MdClose\r
                  className="tab-close"\r
                  onClick={(e) => {\r
                    e.stopPropagation();\r
\r
                    const remaining = openTabs.filter(\r
                      t => t !== tab\r
                    );\r
\r
                    setOpenTabs(remaining);\r
\r
                    if (selectedFile === tab) {\r
                      if (remaining.length > 0) {\r
                        setSelectedFile(\r
                          remaining[remaining.length - 1]\r
                        );\r
                      } else {\r
                        setSelectedFile("");\r
                      }\r
                    }\r
                  }}\r
                />\r
              </div>\r
            ))}\r
          </div>\r
\r
          {selectedFile ? (\r
            <pre className="editor-content">\r
              <code>{codeContent}</code>\r
            </pre>\r
          ) : (\r
            <div\r
              className="editor-empty"\r
            >\r
              <h2>GeorgieOS Code</h2>\r
              <p>No file is open.</p>\r
              <p>\r
                Select a file from the\r
                explorer to begin.\r
              </p>\r
            </div>\r
          )}\r
\r
          <div className="editor-status">\r
            <span>TypeScript React</span>\r
            <a\r
              href="https://github.com/GiorgiMumladze/GeorgieOS"\r
              target="_blank"\r
              rel="noopener noreferrer"\r
              className="github-status-link"\r
            >\r
              <FaGithub />\r
              <span>Source Code</span>\r
            </a>\r
          </div>\r
        </section>\r
      </div>\r
    </Window>\r
  );\r
}`;function ln({item:e,setDesktopItems:t,getLayout:n}){let r=[{name:`App.tsx`,type:`file`},{name:`App.css`,type:`file`},{name:`ThemeContext.tsx`,type:`file`},{name:`components`,type:`folder`,children:[{name:`Desktop.tsx`,type:`file`},{name:`Desktop.css`,type:`file`},{name:`Footer.tsx`,type:`file`},{name:`Footer.css`,type:`file`},{name:`TaskBar.tsx`,type:`file`},{name:`TaskBar.css`,type:`file`},{name:`desktop-apps`,type:`folder`,children:[{name:`AboutMe.tsx`,type:`file`},{name:`AboutMe.css`,type:`file`},{name:`Contact.tsx`,type:`file`},{name:`Contact.css`,type:`file`},{name:`Games.tsx`,type:`file`},{name:`Games.css`,type:`file`},{name:`Music.tsx`,type:`file`},{name:`Music.css`,type:`file`},{name:`MyComputer.tsx`,type:`file`},{name:`MyComputer.css`,type:`file`},{name:`Projects.tsx`,type:`file`},{name:`Projects.css`,type:`file`},{name:`ProjectCard.tsx`,type:`file`},{name:`Resume.tsx`,type:`file`},{name:`Resume.css`,type:`file`},{name:`Wallpapers.tsx`,type:`file`},{name:`Wallpapers.css`,type:`file`},{name:`Window.tsx`,type:`file`},{name:`Window.css`,type:`file`}]},{name:`footer-apps`,type:`folder`,children:[{name:`Browser.tsx`,type:`file`},{name:`Browser.css`,type:`file`},{name:`Code.tsx`,type:`file`},{name:`Code.css`,type:`file`},{name:`Command.tsx`,type:`file`},{name:`Command.css`,type:`file`},{name:`Note.tsx`,type:`file`},{name:`Note.css`,type:`file`},{name:`Settings.tsx`,type:`file`},{name:`Settings.css`,type:`file`},{name:`User.tsx`,type:`file`},{name:`User.css`,type:`file`}]}]}],i=(e,t=0)=>e.map(e=>e.type===`folder`?(0,k.jsxs)(`div`,{children:[(0,k.jsxs)(`div`,{className:`folder-title`,onClick:()=>d(t=>({...t,[e.name]:!t[e.name]})),style:{paddingLeft:`${t*16}px`,display:`flex`,alignItems:`center`,gap:`4px`,cursor:`pointer`},children:[u[e.name]?(0,k.jsx)(Xe,{size:16}):(0,k.jsx)(Ye,{size:16}),(0,k.jsx)(ye,{}),(0,k.jsx)(`span`,{children:e.name})]}),u[e.name]&&e.children&&i(e.children,t+1)]},e.name):(0,k.jsxs)(`button`,{className:`file-item ${s===e.name?`active`:``}`,onClick:()=>l(e.name),style:{paddingLeft:`${t*16+10}px`,display:`flex`,alignItems:`center`,gap:`5px`},children:[(0,k.jsx)(be,{}),e.name]},e.name)),[a,o]=(0,_.useState)([]),[s,c]=(0,_.useState)(``),l=e=>{a.includes(e)||o(t=>[...t,e]),c(e)},[u,d]=(0,_.useState)({components:!0,"desktop-apps":!0,"footer-apps":!0}),f=Object.assign({"../../App.css":St,"../../App.tsx":Ct,"../../ThemeContext.tsx":wt,"../Desktop.css":Tt,"../Desktop.tsx":Et,"../Footer.css":Dt,"../Footer.tsx":A,"../TaskBar.css":Ot,"../TaskBar.tsx":kt,"../desktop-apps/AboutMe.css":At,"../desktop-apps/AboutMe.tsx":jt,"../desktop-apps/Contact.css":Mt,"../desktop-apps/Contact.tsx":Nt,"../desktop-apps/Games.css":Pt,"../desktop-apps/Games.tsx":Ft,"../desktop-apps/Music.css":It,"../desktop-apps/Music.tsx":Lt,"../desktop-apps/MyComputer.css":Rt,"../desktop-apps/MyComputer.tsx":zt,"../desktop-apps/ProjectCard.tsx":Bt,"../desktop-apps/Projects.css":Vt,"../desktop-apps/Projects.tsx":Ht,"../desktop-apps/Resume.css":Ut,"../desktop-apps/Resume.tsx":Wt,"../desktop-apps/Wallpapers.css":Gt,"../desktop-apps/Wallpapers.tsx":Kt,"../desktop-apps/Window.css":qt,"../desktop-apps/Window.tsx":Jt,"./Browser.css":Yt,"./Browser.tsx":Xt,"./Code.css":Zt,"./Command.css":Qt,"./Command.tsx":$t,"./Note.css":en,"./Note.tsx":tn,"./Settings.css":nn,"./Settings.tsx":rn,"./User.css":an,"./User.tsx":on,"../../index.css":``,"../../main.tsx":sn}),p={};Object.entries(f).forEach(([e,t])=>{let n=e.split(`/`).pop()||e;p[n]=t}),p[`Code.tsx`]=cn;let m=p[s]||`// File not found`;return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`code-app`,children:[(0,k.jsxs)(`aside`,{className:`code-sidebar`,children:[(0,k.jsx)(`div`,{className:`code-sidebar-header`,children:`EXPLORER`}),(0,k.jsx)(`div`,{className:`code-folder`,children:i(r)})]}),(0,k.jsxs)(`section`,{className:`code-editor`,children:[(0,k.jsx)(`div`,{className:`editor-tabs`,children:a.map(e=>(0,k.jsxs)(`div`,{className:`editor-tab ${s===e?`active`:``}`,onClick:()=>c(e),children:[(0,k.jsx)(`span`,{children:e}),(0,k.jsx)(Ke,{className:`tab-close`,onClick:t=>{t.stopPropagation();let n=a.filter(t=>t!==e);o(n),s===e&&(n.length>0?c(n[n.length-1]):c(``))}})]},e))}),s?(0,k.jsx)(`pre`,{className:`editor-content`,children:(0,k.jsx)(`code`,{children:m})}):(0,k.jsxs)(`div`,{className:`editor-empty`,children:[(0,k.jsx)(`h2`,{children:`GeorgieOS Code`}),(0,k.jsx)(`p`,{children:`No file is open.`}),(0,k.jsx)(`p`,{children:`Select a file from the explorer to begin.`})]}),(0,k.jsxs)(`div`,{className:`editor-status`,children:[(0,k.jsx)(`span`,{children:`TypeScript React`}),(0,k.jsxs)(`a`,{href:`https://github.com/GiorgiMumladze/GeorgieOS`,target:`_blank`,rel:`noopener noreferrer`,className:`github-status-link`,children:[(0,k.jsx)(le,{}),(0,k.jsx)(`span`,{children:`Source Code`})]})]})]})]})})}var un=`georgie-notes`;function dn({item:e,setDesktopItems:t,getLayout:n}){let[r,i]=(0,_.useState)(()=>{let e=localStorage.getItem(un);if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t?.notes)?t.notes:[]}catch{return[]}}),[a,o]=(0,_.useState)(()=>{let e=localStorage.getItem(un);if(!e)return null;try{return JSON.parse(e)?.selectedId??null}catch{return null}}),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=r.find(e=>e.id===a);e?(c(e.title),u(e.content)):(c(``),u(``))},[a]),(0,_.useEffect)(()=>{localStorage.setItem(un,JSON.stringify({notes:r,selectedId:a}))},[r,a]);let d=()=>{let e={id:Date.now(),title:`Untitled Note`,content:``};i(t=>{let n=[e,...t];return o(e.id),c(e.title),u(``),n})},f=e=>{o(e.id),c(e.title),u(e.content)},p=()=>{i(e=>e.map(e=>e.id===a?{...e,title:s,content:l}:e))},m=e=>{i(t=>{let n=t.filter(t=>t.id!==e);if(a===e){let e=n[0]||null;o(e?.id??null),c(e?.title??``),u(e?.content??``)}return n})};return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`note-app`,children:[(0,k.jsxs)(`div`,{className:`note-sidebar`,children:[(0,k.jsxs)(`div`,{className:`note-sidebar-header`,children:[(0,k.jsx)(`span`,{children:`Notes`}),(0,k.jsx)(`button`,{className:`note-add-btn`,onClick:d,children:(0,k.jsx)(ke,{})})]}),(0,k.jsx)(`div`,{className:`note-list`,children:r.map(e=>(0,k.jsxs)(`div`,{className:`note-item ${a===e.id?`active`:``}`,onClick:()=>f(e),children:[(0,k.jsx)(`span`,{children:e.title||`Untitled Note`}),(0,k.jsx)(`button`,{className:`note-delete-btn`,onClick:t=>{t.stopPropagation(),m(e.id)},children:(0,k.jsx)(Qe,{})})]},e.id))})]}),(0,k.jsx)(`div`,{className:`note-editor`,children:a?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`input`,{className:`note-title`,value:s,maxLength:30,onChange:e=>c(e.target.value),placeholder:`Title...`}),(0,k.jsx)(`textarea`,{className:`note-content`,value:l,onChange:e=>u(e.target.value),placeholder:`Write your note...`}),(0,k.jsx)(`button`,{className:`note-save-btn`,onClick:p,children:`Save`})]}):(0,k.jsx)(`div`,{className:`empty-state`,children:`Create or select a note`})})]})})}function fn({item:e,setDesktopItems:t,getLayout:n,setTaskbarFooterColor:r,setChosenFont:i,chosenFont:a,taskbarFooterColor:o,windowColor:s,setWindowColor:c}){let l=e=>{i(e),document.documentElement.style.setProperty(`--app-font`,e)};return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsxs)(`div`,{className:`settings`,children:[(0,k.jsx)(`h1`,{className:`settings-title`,children:`Settings`}),(0,k.jsxs)(`div`,{className:`settings-card`,children:[(0,k.jsx)(`h2`,{children:`Appearance`}),(0,k.jsxs)(`div`,{className:`settings-row`,children:[(0,k.jsx)(`label`,{children:`Taskbar color`}),(0,k.jsxs)(`div`,{className:`settings-control`,children:[(0,k.jsx)(`input`,{type:`color`,value:o,onChange:e=>r(e.target.value)}),(0,k.jsx)(`button`,{onClick:()=>{r(`#0b1128de`)},children:`Default`})]})]}),(0,k.jsxs)(`div`,{className:`settings-row`,children:[(0,k.jsx)(`label`,{children:`Window color`}),(0,k.jsxs)(`div`,{className:`settings-control`,children:[(0,k.jsx)(`input`,{type:`color`,value:s,onChange:e=>c(e.target.value)}),(0,k.jsx)(`button`,{onClick:()=>{c(`rgba(28, 28, 30, 0.72)`)},children:`Default`})]})]}),(0,k.jsxs)(`div`,{className:`settings-row`,children:[(0,k.jsx)(`label`,{children:`Font`}),(0,k.jsxs)(`div`,{className:`settings-control`,children:[(0,k.jsxs)(`select`,{value:a,onChange:e=>l(e.target.value),children:[(0,k.jsx)(`option`,{value:`Arial`,children:`Arial`}),(0,k.jsx)(`option`,{value:`Inter`,children:`Inter`}),(0,k.jsx)(`option`,{value:`Segoe UI`,children:`Segoe UI`}),(0,k.jsx)(`option`,{value:`Verdana`,children:`Verdana`}),(0,k.jsx)(`option`,{value:`Courier New`,children:`Courier`})]}),(0,k.jsx)(`button`,{onClick:()=>{l(`Inter`)},children:`Default`})]})]})]}),(0,k.jsxs)(`div`,{className:`settings-card danger`,children:[(0,k.jsx)(`h2`,{children:`Reset`}),(0,k.jsx)(`button`,{onClick:()=>{localStorage.clear(),window.location.reload()},children:`Reset system (localStorage)`})]})]})})}function pn({item:e,setDesktopItems:t,getLayout:n,chosenWebsite:r}){return(0,k.jsx)(Ze,{item:e,setDesktopItems:t,getLayout:n,children:(0,k.jsx)(`div`,{className:`browser-app`,children:r?(0,k.jsx)(`iframe`,{title:`Browser`,src:r,width:`100%`,height:`100%`,style:{border:`none`}}):(0,k.jsx)(`div`,{className:`no-website-container`,children:(0,k.jsxs)(`div`,{className:`no-website-card`,children:[(0,k.jsx)(`div`,{className:`no-website-title`,children:`No website chosen`}),(0,k.jsx)(`div`,{className:`no-website-subtitle`,children:`Select a section to start browsing`}),(0,k.jsxs)(`div`,{className:`browser-buttons-container`,children:[(0,k.jsx)(`div`,{className:`go-to-projects-button`,onClick:()=>t(e=>{let t=Math.max(...e.map(e=>e.zIndex??0))+1;return e.map(e=>e.name===`Projects`?{...e,isOpen:!0,isMinimized:!1,zIndex:t}:e)}),children:`Go to Projects`}),(0,k.jsx)(`div`,{className:`go-to-games-button`,onClick:()=>t(e=>{let t=Math.max(...e.map(e=>e.zIndex??0))+1;return e.map(e=>e.name===`Games`?{...e,isOpen:!0,isMinimized:!1,zIndex:t}:e)}),children:`Go to Games`})]})]})})})})}function mn(){let[e,t]=(0,_.useState)([{name:`My Computer`,icon:`images/desktop-icons/my-computer.png`,isOpen:!1,x:250,y:80,width:700,height:500,prevX:250,prevY:80,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Contact`,icon:`images/desktop-icons/contact.png`,isOpen:!1,x:300,y:100,width:700,height:500,prevX:300,prevY:100,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`About Me`,icon:`images/desktop-icons/about-me.png`,isOpen:!1,x:350,y:120,width:700,height:500,prevX:350,prevY:120,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Projects`,icon:`images/desktop-icons/projects.png`,isOpen:!1,x:400,y:140,width:700,height:500,prevX:400,prevY:140,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Music`,icon:`images/desktop-icons/music.png`,isOpen:!1,x:450,y:160,width:500,height:500,prevX:450,prevY:160,prevWidth:500,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Games`,icon:`images/desktop-icons/games.png`,isOpen:!1,x:500,y:180,width:700,height:500,prevX:500,prevY:180,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Resume`,icon:`images/desktop-icons/resume.png`,isOpen:!1,x:550,y:200,width:700,height:500,prevX:550,prevY:200,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Wallpapers`,icon:`images/desktop-icons/wallpapers.png`,isOpen:!1,x:600,y:220,width:700,height:500,prevX:600,prevY:220,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`desktop`},{name:`Browser`,icon:`images/start-images/browser.png`,isOpen:!1,x:250,y:80,width:700,height:500,prevX:250,prevY:80,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`footer`},{name:`Command`,icon:`images/start-images/command.png`,isOpen:!1,x:300,y:100,width:700,height:500,prevX:300,prevY:100,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`footer`},{name:`User`,icon:`images/start-images/user.png`,isOpen:!1,x:350,y:120,width:700,height:500,prevX:350,prevY:120,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`footer`},{name:`Code`,icon:`images/start-images/code.png`,isOpen:!1,x:400,y:140,width:700,height:500,prevX:400,prevY:140,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`footer`},{name:`Note`,icon:`images/start-images/note.png`,isOpen:!1,x:450,y:160,width:700,height:500,prevX:450,prevY:160,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`footer`},{name:`Settings`,icon:`images/start-images/settings.png`,isOpen:!1,x:500,y:180,width:700,height:500,prevX:500,prevY:180,prevWidth:700,prevHeight:500,isMinimized:!1,isMaximized:!1,zIndex:1,location:`footer`}]),[n,r]=(0,_.useState)(``),i=e.filter(e=>e.location===`desktop`),a=e.filter(e=>e.location===`footer`),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(`images/desktop-wallpapers/desktop-wallpaper-3.jpg`),[u,d]=(0,_.useState)(0),f={"My Computer":et,Contact:nt,"About Me":rt,Projects:at,Music:lt,Games:_t,Resume:vt,Wallpapers:yt,Browser:pn,Command:bt,User:xt,Code:ln,Note:dn,Settings:fn},p=()=>{let e=document.querySelector(`.taskbar`)?.offsetHeight??0;return{width:window.innerWidth,height:window.innerHeight-e,offsetY:e}},[m,h]=(0,_.useState)(` #0b1128de`),[g,v]=(0,_.useState)(`Inter`),[y,b]=(0,_.useState)(`rgba(28, 28, 30, 0.72)`),[x,ee]=(0,_.useState)(1);(0,_.useEffect)(()=>{t(e=>e.map(e=>{if(e.name!==`Browser`||!e.isOpen)return e;let t=p();return{...e,isMaximized:!0,x:0,y:t.offsetY,width:t.width,height:t.height}}))},[e.find(e=>e.name===`Browser`)?.isOpen]);let[S,C]=(0,_.useState)(window.innerWidth<900),[te,ne]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=()=>{C(window.innerWidth<900)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]),S&&!te?(0,k.jsx)(`div`,{className:`mobile-warning`,children:(0,k.jsxs)(`div`,{className:`mobile-warning-box`,children:[(0,k.jsxs)(`h1`,{children:[(0,k.jsx)(Ne,{}),`Unsupported Device`]}),(0,k.jsx)(`p`,{children:`GeorgieOS was designed for desktop computers.`}),(0,k.jsx)(`p`,{children:`Window dragging, resizing, multitasking, and other desktop interactions may not work correctly on mobile devices.`}),(0,k.jsx)(`button`,{onClick:()=>ne(!0),children:`Continue Anyway`})]})}):(0,k.jsx)(Ue.Provider,{value:{windowColor:y,setWindowColor:b,chosenFont:g,setChosenFont:v,setChosenWebsite:r},children:(0,k.jsxs)(`div`,{className:`app`,children:[(0,k.jsx)(Me,{taskbarFooterColor:m,chosenFont:g,volume:x,setVolume:ee}),(0,k.jsx)(Re,{desktopItems:i,setDesktopItems:t,wallpaper:c,setAppsOpenedTotal:d,chosenFont:g}),e.map(i=>{if(!i.isOpen)return null;let a=f[i.name];return a?(0,k.jsx)(a,{item:i,setDesktopItems:t,getLayout:p,chosenWebsite:n,setChosenWebsite:r,setWallpaper:l,items:e,appsOpenedTotal:u,setTaskbarFooterColor:h,setChosenFont:v,chosenFont:g,taskbarFooterColor:m,windowColor:y,setWindowColor:b,volume:x,setVolume:ee},i.name):null}),(0,k.jsx)(Fe,{items:e,setDesktopItems:t,footerItems:a,setStartOpen:s,startOpen:o,setAppsOpenedTotal:d,taskbarFooterColor:m,chosenFont:g})]})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,k.jsx)(_.StrictMode,{children:(0,k.jsx)(mn,{})}));