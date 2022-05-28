const jg=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};jg();var qa={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),Xg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),$g=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Kg=Symbol.for("react.forward_ref"),Jg=Symbol.for("react.suspense"),e0=Symbol.for("react.memo"),t0=Symbol.for("react.lazy"),Ef=Symbol.iterator;function n0(t){return t===null||typeof t!="object"?null:(t=Ef&&t[Ef]||t["@@iterator"],typeof t=="function"?t:null)}var ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tp=Object.assign,np={};function is(t,e,n){this.props=t,this.context=e,this.refs=np,this.updater=n||ep}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ip(){}ip.prototype=is.prototype;function yc(t,e,n){this.props=t,this.context=e,this.refs=np,this.updater=n||ep}var Mc=yc.prototype=new ip;Mc.constructor=yc;tp(Mc,is.prototype);Mc.isPureReactComponent=!0;var Tf=Array.isArray,rp=Object.prototype.hasOwnProperty,Sc={current:null},sp={key:!0,ref:!0,__self:!0,__source:!0};function op(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rp.call(e,i)&&!sp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:lo,type:t,key:s,ref:o,props:r,_owner:Sc.current}}function i0(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function r0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cf=/\/+/g;function vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r0(""+t.key):e.toString(36)}function sa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lo:case Xg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vl(o,0):i,Tf(r)?(n="",t!=null&&(n=t.replace(Cf,"$&/")+"/"),sa(r,e,n,"",function(u){return u})):r!=null&&(wc(r)&&(r=i0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vl(s,a);o+=sa(s,e,n,l,r)}else if(l=n0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vl(s,a++),o+=sa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(t,e,n){if(t==null)return t;var i=[],r=0;return sa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},oa={transition:null},o0={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:oa,ReactCurrentOwner:Sc};be.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};be.Component=is;be.Fragment=qg;be.Profiler=Yg;be.PureComponent=yc;be.StrictMode=$g;be.Suspense=Jg;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rp.call(e,l)&&!sp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:lo,type:t.type,key:r,ref:s,props:i,_owner:o}};be.createContext=function(t){return t={$$typeof:Qg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zg,_context:t},t.Consumer=t};be.createElement=op;be.createFactory=function(t){var e=op.bind(null,t);return e.type=t,e};be.createRef=function(){return{current:null}};be.forwardRef=function(t){return{$$typeof:Kg,render:t}};be.isValidElement=wc;be.lazy=function(t){return{$$typeof:t0,_payload:{_status:-1,_result:t},_init:s0}};be.memo=function(t,e){return{$$typeof:e0,type:t,compare:e===void 0?null:e}};be.startTransition=function(t){var e=oa.transition;oa.transition={};try{t()}finally{oa.transition=e}};be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};be.useCallback=function(t,e){return Lt.current.useCallback(t,e)};be.useContext=function(t){return Lt.current.useContext(t)};be.useDebugValue=function(){};be.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};be.useEffect=function(t,e){return Lt.current.useEffect(t,e)};be.useId=function(){return Lt.current.useId()};be.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};be.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};be.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};be.useMemo=function(t,e){return Lt.current.useMemo(t,e)};be.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};be.useRef=function(t){return Lt.current.useRef(t)};be.useState=function(t){return Lt.current.useState(t)};be.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};be.useTransition=function(){return Lt.current.useTransition()};be.version="18.1.0";qa.exports=be;var a0=qa.exports,yu={},ap={exports:{}},jt={},lp={exports:{}},up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var z=P.length;P.push(D);e:for(;0<z;){var $=z-1>>>1,W=P[$];if(0<r(W,D))P[$]=D,P[z]=W,z=$;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var D=P[0],z=P.pop();if(z!==D){P[0]=z;e:for(var $=0,W=P.length,Z=W>>>1;$<Z;){var ae=2*($+1)-1,de=P[ae],G=ae+1,Ie=P[G];if(0>r(de,z))G<W&&0>r(Ie,de)?(P[$]=Ie,P[G]=z,$=G):(P[$]=de,P[ae]=z,$=ae);else if(G<W&&0>r(Ie,z))P[$]=Ie,P[G]=z,$=G;else break e}}return D}function r(P,D){var z=P.sortIndex-D.sortIndex;return z!==0?z:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var D=n(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=P)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(P){if(p=!1,x(P),!_)if(n(l)!==null)_=!0,V(S);else{var D=n(u);D!==null&&X(w,D.startTime-P)}}function S(P,D){_=!1,p&&(p=!1,m(y),y=-1),g=!0;var z=f;try{for(x(D),d=n(l);d!==null&&(!(d.expirationTime>D)||P&&!k());){var $=d.callback;if(typeof $=="function"){d.callback=null,f=d.priorityLevel;var W=$(d.expirationTime<=D);D=t.unstable_now(),typeof W=="function"?d.callback=W:d===n(l)&&i(l),x(D)}else i(l);d=n(l)}if(d!==null)var Z=!0;else{var ae=n(u);ae!==null&&X(w,ae.startTime-D),Z=!1}return Z}finally{d=null,f=z,g=!1}}var C=!1,A=null,y=-1,b=5,I=-1;function k(){return!(t.unstable_now()-I<b)}function ne(){if(A!==null){var P=t.unstable_now();I=P;var D=!0;try{D=A(!0,P)}finally{D?K():(C=!1,A=null)}}else C=!1}var K;if(typeof v=="function")K=function(){v(ne)};else if(typeof MessageChannel!="undefined"){var F=new MessageChannel,q=F.port2;F.port1.onmessage=ne,K=function(){q.postMessage(null)}}else K=function(){h(ne,0)};function V(P){A=P,C||(C=!0,K())}function X(P,D){y=h(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,V(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var z=f;f=D;try{return P()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=f;f=P;try{return D()}finally{f=z}},t.unstable_scheduleCallback=function(P,D,z){var $=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,P){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=z+W,P={id:c++,callback:D,priorityLevel:P,startTime:z,expirationTime:W,sortIndex:-1},z>$?(P.sortIndex=z,e(u,P),n(l)===null&&P===n(u)&&(p?(m(y),y=-1):p=!0,X(w,z-$))):(P.sortIndex=W,e(l,P),_||g||(_=!0,V(S))),P},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(P){var D=f;return function(){var z=f;f=D;try{return P.apply(this,arguments)}finally{f=z}}}})(up);lp.exports=up;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp=qa.exports,Wt=lp.exports;function Y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fp=new Set,Gs={};function rr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(Gs[t]=e,t=0;t<e.length;t++)fp.add(e[t])}var Kn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Mu=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Lf={};function u0(t){return Mu.call(Lf,t)?!0:Mu.call(bf,t)?!1:l0.test(t)?Lf[t]=!0:(bf[t]=!0,!1)}function c0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function f0(t,e,n,i){if(e===null||typeof e=="undefined"||c0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ec,Tc);ht[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ec,Tc);ht[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ec,Tc);ht[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cc(t,e,n,i){var r=ht.hasOwnProperty(e)?ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(f0(e,n,r,i)&&(n=null),i||r===null?u0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ni=cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),dp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),di=Symbol.for("react.lazy"),pp=Symbol.for("react.offscreen"),Af=Symbol.iterator;function ds(t){return t===null||typeof t!="object"?null:(t=Af&&t[Af]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,_l;function Ts(t){if(_l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_l=e&&e[1]||""}return`
`+_l+t}var xl=!1;function yl(t,e){if(!t||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function d0(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=yl(t.type,!1),t;case 11:return t=yl(t.type.render,!1),t;case 1:return t=yl(t.type,!0),t;default:return""}}function Tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cr:return"Fragment";case Tr:return"Portal";case Su:return"Profiler";case bc:return"StrictMode";case wu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hp:return(t.displayName||"Context")+".Consumer";case dp:return(t._context.displayName||"Context")+".Provider";case Lc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ac:return e=t.displayName||null,e!==null?e:Tu(t.type)||"Memo";case di:e=t._payload,t=t._init;try{return Tu(t(e))}catch{}}return null}function h0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(e);case 8:return e===bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p0(t){var e=mp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function So(t){t._valueTracker||(t._valueTracker=p0(t))}function gp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _a(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cu(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Pf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vp(t,e){e=e.checked,e!=null&&Cc(t,"checked",e,!1)}function bu(t,e){vp(t,e);var n=Ci(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lu(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lu(t,e,n){(e!=="number"||_a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Ur(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Df(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Y(92));if(Cs(n)){if(1<n.length)throw Error(Y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function _p(t,e){var n=Ci(e.value),i=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function If(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,yp=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){m0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function Mp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function Sp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var g0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(g0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fu=null,Or=null,Br=null;function Ff(t){if(t=fo(t)){if(typeof Fu!="function")throw Error(Y(280));var e=t.stateNode;e&&(e=Ka(e),Fu(t.stateNode,t.type,e))}}function wp(t){Or?Br?Br.push(t):Br=[t]:Or=t}function Ep(){if(Or){var t=Or,e=Br;if(Br=Or=null,Ff(t),e)for(t=0;t<e.length;t++)Ff(e[t])}}function Tp(t,e){return t(e)}function Cp(){}var Ml=!1;function bp(t,e,n){if(Ml)return t(e,n);Ml=!0;try{return Tp(t,e,n)}finally{Ml=!1,(Or!==null||Br!==null)&&(Cp(),Ep())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var i=Ka(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var Nu=!1;if(Kn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Nu=!1}function v0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ds=!1,xa=null,ya=!1,zu=null,_0={onError:function(t){Ds=!0,xa=t}};function x0(t,e,n,i,r,s,o,a,l){Ds=!1,xa=null,v0.apply(_0,arguments)}function y0(t,e,n,i,r,s,o,a,l){if(x0.apply(this,arguments),Ds){if(Ds){var u=xa;Ds=!1,xa=null}else throw Error(Y(198));ya||(ya=!0,zu=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(sr(t)!==t)throw Error(Y(188))}function M0(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nf(r),t;if(s===i)return Nf(r),e;s=s.sibling}throw Error(Y(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function Ap(t){return t=M0(t),t!==null?Pp(t):null}function Pp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pp(t);if(e!==null)return e;t=t.sibling}return null}var Rp=Wt.unstable_scheduleCallback,zf=Wt.unstable_cancelCallback,S0=Wt.unstable_shouldYield,w0=Wt.unstable_requestPaint,Ke=Wt.unstable_now,E0=Wt.unstable_getCurrentPriorityLevel,Rc=Wt.unstable_ImmediatePriority,Dp=Wt.unstable_UserBlockingPriority,Ma=Wt.unstable_NormalPriority,T0=Wt.unstable_LowPriority,Ip=Wt.unstable_IdlePriority,$a=null,In=null;function C0(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot($a,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:A0,b0=Math.log,L0=Math.LN2;function A0(t){return t>>>=0,t===0?32:31-(b0(t)/L0|0)|0}var Eo=64,To=4194304;function bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=bs(a):(s&=o,s!==0&&(i=bs(s)))}else o=n&~r,o!==0?i=bs(o):s!==0&&(i=bs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-gn(e),r=1<<n,i|=t[n],e&=~r;return i}function P0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=P0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fp(){var t=Eo;return Eo<<=1,(Eo&4194240)===0&&(Eo=64),t}function Sl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function D0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ue=0;function Np(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zp,Ic,kp,Up,Op,Uu=!1,Co=[],_i=null,xi=null,yi=null,js=new Map,Xs=new Map,pi=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":yi=null;break;case"pointerover":case"pointerout":js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function ps(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fo(e),e!==null&&Ic(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function F0(t,e,n,i,r){switch(e){case"focusin":return _i=ps(_i,t,e,n,i,r),!0;case"dragenter":return xi=ps(xi,t,e,n,i,r),!0;case"mouseover":return yi=ps(yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return js.set(s,ps(js.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xs.set(s,ps(Xs.get(s)||null,t,e,n,i,r)),!0}return!1}function Bp(t){var e=Gi(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Lp(n),e!==null){t.blockedOn=e,Op(t.priority,function(){kp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Iu=i,n.target.dispatchEvent(i),Iu=null}else return e=fo(n),e!==null&&Ic(e),t.blockedOn=n,!1;e.shift()}return!0}function Uf(t,e,n){aa(t)&&n.delete(e)}function N0(){Uu=!1,_i!==null&&aa(_i)&&(_i=null),xi!==null&&aa(xi)&&(xi=null),yi!==null&&aa(yi)&&(yi=null),js.forEach(Uf),Xs.forEach(Uf)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,N0)))}function qs(t){function e(r){return ms(r,t)}if(0<Co.length){ms(Co[0],t);for(var n=1;n<Co.length;n++){var i=Co[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_i!==null&&ms(_i,t),xi!==null&&ms(xi,t),yi!==null&&ms(yi,t),js.forEach(e),Xs.forEach(e),n=0;n<pi.length;n++)i=pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pi.length&&(n=pi[0],n.blockedOn===null);)Bp(n),n.blockedOn===null&&pi.shift()}var Vr=ni.ReactCurrentBatchConfig,wa=!0;function z0(t,e,n,i){var r=Ue,s=Vr.transition;Vr.transition=null;try{Ue=1,Fc(t,e,n,i)}finally{Ue=r,Vr.transition=s}}function k0(t,e,n,i){var r=Ue,s=Vr.transition;Vr.transition=null;try{Ue=4,Fc(t,e,n,i)}finally{Ue=r,Vr.transition=s}}function Fc(t,e,n,i){if(wa){var r=Ou(t,e,n,i);if(r===null)Dl(t,e,i,Ea,n),kf(t,i);else if(F0(r,t,e,n,i))i.stopPropagation();else if(kf(t,i),e&4&&-1<I0.indexOf(t)){for(;r!==null;){var s=fo(r);if(s!==null&&zp(s),s=Ou(t,e,n,i),s===null&&Dl(t,e,i,Ea,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dl(t,e,i,null,n)}}var Ea=null;function Ou(t,e,n,i){if(Ea=null,t=Pc(i),t=Gi(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ea=t,null}function Vp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case Rc:return 1;case Dp:return 4;case Ma:case T0:return 16;case Ip:return 536870912;default:return 16}default:return 16}}var gi=null,Nc=null,la=null;function Gp(){if(la)return la;var t,e=Nc,n=e.length,i,r="value"in gi?gi.value:gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return la=r.slice(t,1<i?1-i:void 0)}function ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function Of(){return!1}function Xt(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:Of,this.isPropagationStopped=Of,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=Xt(rs),co=Ye({},rs,{view:0,detail:0}),U0=Xt(co),wl,El,gs,Ya=Ye({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(wl=t.screenX-gs.screenX,El=t.screenY-gs.screenY):El=wl=0,gs=t),wl)},movementY:function(t){return"movementY"in t?t.movementY:El}}),Bf=Xt(Ya),O0=Ye({},Ya,{dataTransfer:0}),B0=Xt(O0),V0=Ye({},co,{relatedTarget:0}),Tl=Xt(V0),G0=Ye({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Xt(G0),W0=Ye({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j0=Xt(W0),X0=Ye({},rs,{data:0}),Vf=Xt(X0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y0[t])?!!e[t]:!1}function kc(){return Z0}var Q0=Ye({},co,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K0=Xt(Q0),J0=Ye({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Xt(J0),ev=Ye({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),tv=Xt(ev),nv=Ye({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=Xt(nv),rv=Ye({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=Xt(rv),ov=[9,13,27,32],Uc=Kn&&"CompositionEvent"in window,Is=null;Kn&&"documentMode"in document&&(Is=document.documentMode);var av=Kn&&"TextEvent"in window&&!Is,Hp=Kn&&(!Uc||Is&&8<Is&&11>=Is),Hf=String.fromCharCode(32),Wf=!1;function Wp(t,e){switch(t){case"keyup":return ov.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function lv(t,e){switch(t){case"compositionend":return jp(e);case"keypress":return e.which!==32?null:(Wf=!0,Hf);case"textInput":return t=e.data,t===Hf&&Wf?null:t;default:return null}}function uv(t,e){if(br)return t==="compositionend"||!Uc&&Wp(t,e)?(t=Gp(),la=Nc=gi=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hp&&e.locale!=="ko"?null:e.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cv[t.type]:e==="textarea"}function Xp(t,e,n,i){wp(i),e=Ta(e,"onChange"),0<e.length&&(n=new zc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fs=null,$s=null;function fv(t){im(t,0)}function Za(t){var e=Pr(t);if(gp(e))return t}function dv(t,e){if(t==="change")return e}var qp=!1;if(Kn){var Cl;if(Kn){var bl="oninput"in document;if(!bl){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),bl=typeof Xf.oninput=="function"}Cl=bl}else Cl=!1;qp=Cl&&(!document.documentMode||9<document.documentMode)}function qf(){Fs&&(Fs.detachEvent("onpropertychange",$p),$s=Fs=null)}function $p(t){if(t.propertyName==="value"&&Za($s)){var e=[];Xp(e,$s,t,Pc(t)),bp(fv,e)}}function hv(t,e,n){t==="focusin"?(qf(),Fs=e,$s=n,Fs.attachEvent("onpropertychange",$p)):t==="focusout"&&qf()}function pv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za($s)}function mv(t,e){if(t==="click")return Za(e)}function gv(t,e){if(t==="input"||t==="change")return Za(e)}function vv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:vv;function Ys(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mu.call(e,r)||!_n(t[r],e[r]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,e){var n=$f(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function Yp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zp(){for(var t=window,e=_a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_a(t.document)}return e}function Oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _v(t){var e=Zp(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yp(n.ownerDocument.documentElement,n)){if(i!==null&&Oc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yf(n,s);var o=Yf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xv=Kn&&"documentMode"in document&&11>=document.documentMode,Lr=null,Bu=null,Ns=null,Vu=!1;function Zf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||Lr==null||Lr!==_a(i)||(i=Lr,"selectionStart"in i&&Oc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ns&&Ys(Ns,i)||(Ns=i,i=Ta(Bu,"onSelect"),0<i.length&&(e=new zc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Lr)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ar={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Ll={},Qp={};Kn&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Qa(t){if(Ll[t])return Ll[t];if(!Ar[t])return t;var e=Ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qp)return Ll[t]=e[n];return t}var Kp=Qa("animationend"),Jp=Qa("animationiteration"),em=Qa("animationstart"),tm=Qa("transitionend"),nm=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(t,e){nm.set(t,e),rr(e,[t])}for(var Al=0;Al<Qf.length;Al++){var Pl=Qf[Al],yv=Pl.toLowerCase(),Mv=Pl[0].toUpperCase()+Pl.slice(1);Ai(yv,"on"+Mv)}Ai(Kp,"onAnimationEnd");Ai(Jp,"onAnimationIteration");Ai(em,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(tm,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function Kf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,y0(i,e,void 0,t),t.currentTarget=null}function im(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kf(r,a,u),s=l}}}if(ya)throw t=zu,ya=!1,zu=null,t}function Ge(t,e){var n=e[Xu];n===void 0&&(n=e[Xu]=new Set);var i=t+"__bubble";n.has(i)||(rm(e,t,2,!1),n.add(i))}function Rl(t,e,n){var i=0;e&&(i|=4),rm(n,t,i,e)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[Ao]){t[Ao]=!0,fp.forEach(function(n){n!=="selectionchange"&&(Sv.has(n)||Rl(n,!1,t),Rl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ao]||(e[Ao]=!0,Rl("selectionchange",!1,e))}}function rm(t,e,n,i){switch(Vp(e)){case 1:var r=z0;break;case 4:r=k0;break;default:r=Fc}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Dl(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bp(function(){var u=s,c=Pc(n),d=[];e:{var f=nm.get(t);if(f!==void 0){var g=zc,_=t;switch(t){case"keypress":if(ua(n)===0)break e;case"keydown":case"keyup":g=K0;break;case"focusin":_="focus",g=Tl;break;case"focusout":_="blur",g=Tl;break;case"beforeblur":case"afterblur":g=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=tv;break;case Kp:case Jp:case em:g=H0;break;case tm:g=iv;break;case"scroll":g=U0;break;case"wheel":g=sv;break;case"copy":case"cut":case"paste":g=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gf}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?f!==null?f+"Capture":null:f;p=[];for(var v=u,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Ws(v,m),w!=null&&p.push(Qs(v,w,x)))),h)break;v=v.return}0<p.length&&(f=new g(f,_,null,n,c),d.push({event:f,listeners:p}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Iu&&(_=n.relatedTarget||n.fromElement)&&(Gi(_)||_[Jn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Gi(_):null,_!==null&&(h=sr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(p=Bf,w="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=Gf,w="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?f:Pr(g),x=_==null?f:Pr(_),f=new p(w,v+"leave",g,n,c),f.target=h,f.relatedTarget=x,w=null,Gi(c)===u&&(p=new p(m,v+"enter",_,n,c),p.target=x,p.relatedTarget=h,w=p),h=w,g&&_)t:{for(p=g,m=_,v=0,x=p;x;x=ur(x))v++;for(x=0,w=m;w;w=ur(w))x++;for(;0<v-x;)p=ur(p),v--;for(;0<x-v;)m=ur(m),x--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=ur(p),m=ur(m)}p=null}else p=null;g!==null&&Jf(d,f,g,p,!1),_!==null&&h!==null&&Jf(d,h,_,p,!0)}}e:{if(f=u?Pr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=dv;else if(jf(f))if(qp)S=gv;else{S=pv;var C=hv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=mv);if(S&&(S=S(t,u))){Xp(d,S,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Lu(f,"number",f.value)}switch(C=u?Pr(u):window,t){case"focusin":(jf(C)||C.contentEditable==="true")&&(Lr=C,Bu=u,Ns=null);break;case"focusout":Ns=Bu=Lr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Zf(d,n,c);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":Zf(d,n,c)}var A;if(Uc)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else br?Wp(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Hp&&n.locale!=="ko"&&(br||y!=="onCompositionStart"?y==="onCompositionEnd"&&br&&(A=Gp()):(gi=c,Nc="value"in gi?gi.value:gi.textContent,br=!0)),C=Ta(u,y),0<C.length&&(y=new Vf(y,t,null,n,c),d.push({event:y,listeners:C}),A?y.data=A:(A=jp(n),A!==null&&(y.data=A)))),(A=av?lv(t,n):uv(t,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(c=new Vf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}im(d,e)})}function Qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ta(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ws(t,n),s!=null&&i.unshift(Qs(t,s,r)),s=Ws(t,e),s!=null&&i.push(Qs(t,s,r))),t=t.return}return i}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ws(n,s),l!=null&&o.unshift(Qs(n,l,a))):r||(l=Ws(n,s),l!=null&&o.push(Qs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wv=/\r\n?/g,Ev=/\u0000|\uFFFD/g;function ed(t){return(typeof t=="string"?t:""+t).replace(wv,`
`).replace(Ev,"")}function Po(t,e,n){if(e=ed(e),ed(t)!==e&&n)throw Error(Y(425))}function Ca(){}var Gu=null,Hu=null;function Wu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,Tv=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof td!="undefined"?function(t){return td.resolve(null).then(t).catch(bv)}:ju;function bv(t){setTimeout(function(){throw t})}function Il(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qs(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),An="__reactFiber$"+ss,Ks="__reactProps$"+ss,Jn="__reactContainer$"+ss,Xu="__reactEvents$"+ss,Lv="__reactListeners$"+ss,Av="__reactHandles$"+ss;function Gi(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nd(t);t!==null;){if(n=t[An])return n;t=nd(t)}return e}t=n,n=t.parentNode}return null}function fo(t){return t=t[An]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Y(33))}function Ka(t){return t[Ks]||null}var qu=[],Rr=-1;function Pi(t){return{current:t}}function He(t){0>Rr||(t.current=qu[Rr],qu[Rr]=null,Rr--)}function Ve(t,e){Rr++,qu[Rr]=t.current,t.current=e}var bi={},yt=Pi(bi),Nt=Pi(!1),Qi=bi;function qr(t,e){var n=t.type.contextTypes;if(!n)return bi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function zt(t){return t=t.childContextTypes,t!=null}function ba(){He(Nt),He(yt)}function id(t,e,n){if(yt.current!==bi)throw Error(Y(168));Ve(yt,e),Ve(Nt,n)}function sm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,h0(t)||"Unknown",r));return Ye({},n,i)}function La(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||bi,Qi=yt.current,Ve(yt,t),Ve(Nt,Nt.current),!0}function rd(t,e,n){var i=t.stateNode;if(!i)throw Error(Y(169));n?(t=sm(t,e,Qi),i.__reactInternalMemoizedMergedChildContext=t,He(Nt),He(yt),Ve(yt,t)):He(Nt),Ve(Nt,n)}var Xn=null,Ja=!1,Fl=!1;function om(t){Xn===null?Xn=[t]:Xn.push(t)}function Pv(t){Ja=!0,om(t)}function Ri(){if(!Fl&&Xn!==null){Fl=!0;var t=0,e=Ue;try{var n=Xn;for(Ue=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xn=null,Ja=!1}catch(r){throw Xn!==null&&(Xn=Xn.slice(t+1)),Rp(Rc,Ri),r}finally{Ue=e,Fl=!1}}return null}var Rv=ni.ReactCurrentBatchConfig;function cn(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Aa=Pi(null),Pa=null,Dr=null,Bc=null;function Vc(){Bc=Dr=Pa=null}function Gc(t){var e=Aa.current;He(Aa),t._currentValue=e}function $u(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gr(t,e){Pa=t,Bc=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ft=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Bc!==t)if(t={context:t,memoizedValue:e,next:null},Dr===null){if(Pa===null)throw Error(Y(308));Dr=t,Pa.dependencies={lanes:0,firstContext:t}}else Dr=Dr.next=t;return e}var pn=null,hi=!1;function Hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mi(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,Zm(t)?(t=n.interleaved,t===null?(e.next=e,pn===null?pn=[n]:pn.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dc(t,n)}}function sd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,i){var r=t.updateQueue;hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,p=a;switch(f=e,g=n,p.tag){case 1:if(_=p.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=Ye({},d,f);break e;case 2:hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);er|=o,t.lanes=o,t.memoizedState=d}}function od(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var lm=new cp.Component().refs;function Yu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var el={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Tt(),r=wi(t),s=Zn(i,r);s.payload=e,n!=null&&(s.callback=n),Mi(t,s),e=Jt(t,r,i),e!==null&&ca(e,t,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Tt(),r=wi(t),s=Zn(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Mi(t,s),e=Jt(t,r,i),e!==null&&ca(e,t,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),i=wi(t),r=Zn(n,i);r.tag=2,e!=null&&(r.callback=e),Mi(t,r),e=Jt(t,i,n),e!==null&&ca(e,t,i)}};function ad(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,i)||!Ys(r,s):!0}function um(t,e,n){var i=!1,r=bi,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(r=zt(e)?Qi:yt.current,i=e.contextTypes,s=(i=i!=null)?qr(t,r):bi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=el,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ld(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&el.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=lm,Hc(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=en(s):(s=zt(e)?Qi:yt.current,r.context=qr(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&el.enqueueReplaceState(r,r.state,null),Ra(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}var Ir=[],Fr=0,Da=null,Ia=0,$t=[],Yt=0,Ki=null,$n=1,Yn="";function ki(t,e){Ir[Fr++]=Ia,Ir[Fr++]=Da,Da=t,Ia=e}function cm(t,e,n){$t[Yt++]=$n,$t[Yt++]=Yn,$t[Yt++]=Ki,Ki=t;var i=$n;t=Yn;var r=32-gn(i)-1;i&=~(1<<r),n+=1;var s=32-gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,$n=1<<32-gn(e)+r|n<<r|i,Yn=s+t}else $n=1<<s|n<<r|i,Yn=t}function Wc(t){t.return!==null&&(ki(t,1),cm(t,1,0))}function jc(t){for(;t===Da;)Da=Ir[--Fr],Ir[Fr]=null,Ia=Ir[--Fr],Ir[Fr]=null;for(;t===Ki;)Ki=$t[--Yt],$t[Yt]=null,Yn=$t[--Yt],$t[Yt]=null,$n=$t[--Yt],$t[Yt]=null}var Ht=null,It=null,We=!1,dn=null;function fm(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ud(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,It=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:$n,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,It=null,!0):!1;default:return!1}}function Qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ku(t){if(We){var e=It;if(e){var n=e;if(!ud(t,e)){if(Qu(t))throw Error(Y(418));e=qn(n.nextSibling);var i=Ht;e&&ud(t,e)?fm(i,n):(t.flags=t.flags&-4097|2,We=!1,Ht=t)}}else{if(Qu(t))throw Error(Y(418));t.flags=t.flags&-4097|2,We=!1,Ht=t}}}function cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function vs(t){if(t!==Ht)return!1;if(!We)return cd(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wu(t.type,t.memoizedProps)),e&&(e=It)){if(Qu(t)){for(t=It;t;)t=qn(t.nextSibling);throw Error(Y(418))}for(;e;)fm(t,e),e=qn(e.nextSibling)}if(cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Ht?qn(t.stateNode.nextSibling):null;return!0}function $r(){It=Ht=null,We=!1}function Xc(t){dn===null?dn=[t]:dn.push(t)}function _s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var i=n.stateNode}if(!i)throw Error(Y(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===lm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,t))}return t}function Ro(t,e){throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fd(t){var e=t._init;return e(t._payload)}function dm(t){function e(m,v){if(t){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Li(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,w){return v===null||v.tag!==6?(v=Bl(x,m.mode,w),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,w){var S=x.type;return S===Cr?c(m,v,x.props.children,w,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===di&&fd(S)===v.type)?(w=r(v,x.props),w.ref=_s(m,v,x),w.return=m,w):(w=ma(x.type,x.key,x.props,null,m.mode,w),w.ref=_s(m,v,x),w.return=m,w)}function u(m,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Vl(x,m.mode,w),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function c(m,v,x,w,S){return v===null||v.tag!==7?(v=$i(x,m.mode,w,S),v.return=m,v):(v=r(v,x),v.return=m,v)}function d(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Bl(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mo:return x=ma(v.type,v.key,v.props,null,m.mode,x),x.ref=_s(m,null,v),x.return=m,x;case Tr:return v=Vl(v,m.mode,x),v.return=m,v;case di:var w=v._init;return d(m,w(v._payload),x)}if(Cs(v)||ds(v))return v=$i(v,m.mode,x,null),v.return=m,v;Ro(m,v)}return null}function f(m,v,x,w){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Mo:return x.key===S?l(m,v,x,w):null;case Tr:return x.key===S?u(m,v,x,w):null;case di:return S=x._init,f(m,v,S(x._payload),w)}if(Cs(x)||ds(x))return S!==null?null:c(m,v,x,w,null);Ro(m,x)}return null}function g(m,v,x,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(v,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mo:return m=m.get(w.key===null?x:w.key)||null,l(v,m,w,S);case Tr:return m=m.get(w.key===null?x:w.key)||null,u(v,m,w,S);case di:var C=w._init;return g(m,v,x,C(w._payload),S)}if(Cs(w)||ds(w))return m=m.get(x)||null,c(v,m,w,S,null);Ro(v,w)}return null}function _(m,v,x,w){for(var S=null,C=null,A=v,y=v=0,b=null;A!==null&&y<x.length;y++){A.index>y?(b=A,A=null):b=A.sibling;var I=f(m,A,x[y],w);if(I===null){A===null&&(A=b);break}t&&A&&I.alternate===null&&e(m,A),v=s(I,v,y),C===null?S=I:C.sibling=I,C=I,A=b}if(y===x.length)return n(m,A),We&&ki(m,y),S;if(A===null){for(;y<x.length;y++)A=d(m,x[y],w),A!==null&&(v=s(A,v,y),C===null?S=A:C.sibling=A,C=A);return We&&ki(m,y),S}for(A=i(m,A);y<x.length;y++)b=g(A,m,y,x[y],w),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?y:b.key),v=s(b,v,y),C===null?S=b:C.sibling=b,C=b);return t&&A.forEach(function(k){return e(m,k)}),We&&ki(m,y),S}function p(m,v,x,w){var S=ds(x);if(typeof S!="function")throw Error(Y(150));if(x=S.call(x),x==null)throw Error(Y(151));for(var C=S=null,A=v,y=v=0,b=null,I=x.next();A!==null&&!I.done;y++,I=x.next()){A.index>y?(b=A,A=null):b=A.sibling;var k=f(m,A,I.value,w);if(k===null){A===null&&(A=b);break}t&&A&&k.alternate===null&&e(m,A),v=s(k,v,y),C===null?S=k:C.sibling=k,C=k,A=b}if(I.done)return n(m,A),We&&ki(m,y),S;if(A===null){for(;!I.done;y++,I=x.next())I=d(m,I.value,w),I!==null&&(v=s(I,v,y),C===null?S=I:C.sibling=I,C=I);return We&&ki(m,y),S}for(A=i(m,A);!I.done;y++,I=x.next())I=g(A,m,y,I.value,w),I!==null&&(t&&I.alternate!==null&&A.delete(I.key===null?y:I.key),v=s(I,v,y),C===null?S=I:C.sibling=I,C=I);return t&&A.forEach(function(ne){return e(m,ne)}),We&&ki(m,y),S}function h(m,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Cr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Mo:e:{for(var S=x.key,C=v;C!==null;){if(C.key===S){if(S=x.type,S===Cr){if(C.tag===7){n(m,C.sibling),v=r(C,x.props.children),v.return=m,m=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===di&&fd(S)===C.type){n(m,C.sibling),v=r(C,x.props),v.ref=_s(m,C,x),v.return=m,m=v;break e}n(m,C);break}else e(m,C);C=C.sibling}x.type===Cr?(v=$i(x.props.children,m.mode,w,x.key),v.return=m,m=v):(w=ma(x.type,x.key,x.props,null,m.mode,w),w.ref=_s(m,v,x),w.return=m,m=w)}return o(m);case Tr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=Vl(x,m.mode,w),v.return=m,m=v}return o(m);case di:return C=x._init,h(m,v,C(x._payload),w)}if(Cs(x))return _(m,v,x,w);if(ds(x))return p(m,v,x,w);Ro(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,x),v.return=m,m=v):(n(m,v),v=Bl(x,m.mode,w),v.return=m,m=v),o(m)):n(m,v)}return h}var Yr=dm(!0),hm=dm(!1),ho={},Fn=Pi(ho),Js=Pi(ho),eo=Pi(ho);function Hi(t){if(t===ho)throw Error(Y(174));return t}function qc(t,e){switch(Ve(eo,e),Ve(Js,t),Ve(Fn,ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}He(Fn),Ve(Fn,e)}function Zr(){He(Fn),He(Js),He(eo)}function pm(t){Hi(eo.current);var e=Hi(Fn.current),n=Pu(e,t.type);e!==n&&(Ve(Js,t),Ve(Fn,n))}function $c(t){Js.current===t&&(He(Fn),He(Js))}var Xe=Pi(0);function Fa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nl=[];function Yc(){for(var t=0;t<Nl.length;t++)Nl[t]._workInProgressVersionPrimary=null;Nl.length=0}var fa=ni.ReactCurrentDispatcher,zl=ni.ReactCurrentBatchConfig,Ji=0,$e=null,it=null,lt=null,Na=!1,zs=!1,to=0,Dv=0;function gt(){throw Error(Y(321))}function Zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function Qc(t,e,n,i,r,s){if(Ji=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fa.current=t===null||t.memoizedState===null?zv:kv,t=n(i,r),zs){s=0;do{if(zs=!1,to=0,25<=s)throw Error(Y(301));s+=1,lt=it=null,e.updateQueue=null,fa.current=Uv,t=n(i,r)}while(zs)}if(fa.current=za,e=it!==null&&it.next!==null,Ji=0,lt=it=$e=null,Na=!1,e)throw Error(Y(300));return t}function Kc(){var t=to!==0;return to=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?$e.memoizedState=lt=t:lt=lt.next=t,lt}function tn(){if(it===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=lt===null?$e.memoizedState:lt.next;if(e!==null)lt=e,it=t;else{if(t===null)throw Error(Y(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},lt===null?$e.memoizedState=lt=t:lt=lt.next=t}return lt}function no(t,e){return typeof e=="function"?e(t):e}function kl(t){var e=tn(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=it,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ji&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,$e.lanes|=c,er|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,_n(i,e.memoizedState)||(Ft=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,$e.lanes|=s,er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ul(t){var e=tn(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);_n(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function mm(){}function gm(t,e){var n=$e,i=tn(),r=e(),s=!_n(i.memoizedState,r);if(s&&(i.memoizedState=r,Ft=!0),i=i.queue,Jc(xm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,io(9,_m.bind(null,n,i,r,e),void 0,null),st===null)throw Error(Y(349));(Ji&30)!==0||vm(n,e,r)}return r}function vm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _m(t,e,n,i){e.value=n,e.getSnapshot=i,ym(e)&&Jt(t,1,-1)}function xm(t,e,n){return n(function(){ym(e)&&Jt(t,1,-1)})}function ym(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function dd(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=Nv.bind(null,$e,t),[e.memoizedState,t]}function io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mm(){return tn().memoizedState}function da(t,e,n,i){var r=bn();$e.flags|=t,r.memoizedState=io(1|e,n,void 0,i===void 0?null:i)}function tl(t,e,n,i){var r=tn();i=i===void 0?null:i;var s=void 0;if(it!==null){var o=it.memoizedState;if(s=o.destroy,i!==null&&Zc(i,o.deps)){r.memoizedState=io(e,n,s,i);return}}$e.flags|=t,r.memoizedState=io(1|e,n,s,i)}function hd(t,e){return da(8390656,8,t,e)}function Jc(t,e){return tl(2048,8,t,e)}function Sm(t,e){return tl(4,2,t,e)}function wm(t,e){return tl(4,4,t,e)}function Em(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tm(t,e,n){return n=n!=null?n.concat([t]):null,tl(4,4,Em.bind(null,e,t),n)}function ef(){}function Cm(t,e){var n=tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zc(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bm(t,e){var n=tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zc(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lm(t,e,n){return(Ji&21)===0?(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n):(_n(n,e)||(n=Fp(),$e.lanes|=n,er|=n,t.baseState=!0),e)}function Iv(t,e){var n=Ue;Ue=n!==0&&4>n?n:4,t(!0);var i=zl.transition;zl.transition={};try{t(!1),e()}finally{Ue=n,zl.transition=i}}function Am(){return tn().memoizedState}function Fv(t,e,n){var i=wi(t);n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Pm(t)?Rm(e,n):(Dm(t,e,n),n=Tt(),t=Jt(t,i,n),t!==null&&Im(t,e,i))}function Nv(t,e,n){var i=wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pm(t))Rm(e,r);else{Dm(t,e,r);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,_n(a,o))return}catch{}finally{}n=Tt(),t=Jt(t,i,n),t!==null&&Im(t,e,i)}}function Pm(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Rm(t,e){zs=Na=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dm(t,e,n){Zm(t)?(t=e.interleaved,t===null?(n.next=n,pn===null?pn=[e]:pn.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function Im(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dc(t,n)}}var za={readContext:en,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},zv={readContext:en,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:hd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,da(4194308,4,Em.bind(null,e,t),n)},useLayoutEffect:function(t,e){return da(4194308,4,t,e)},useInsertionEffect:function(t,e){return da(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=bn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Fv.bind(null,$e,t),[i.memoizedState,t]},useRef:function(t){var e=bn();return t={current:t},e.memoizedState=t},useState:dd,useDebugValue:ef,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=dd(!1),e=t[0];return t=Iv.bind(null,t[1]),bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=$e,r=bn();if(We){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),st===null)throw Error(Y(349));(Ji&30)!==0||vm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hd(xm.bind(null,i,s,t),[t]),i.flags|=2048,io(9,_m.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=bn(),e=st.identifierPrefix;if(We){var n=Yn,i=$n;n=(i&~(1<<32-gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kv={readContext:en,useCallback:Cm,useContext:en,useEffect:Jc,useImperativeHandle:Tm,useInsertionEffect:Sm,useLayoutEffect:wm,useMemo:bm,useReducer:kl,useRef:Mm,useState:function(){return kl(no)},useDebugValue:ef,useDeferredValue:function(t){var e=tn();return Lm(e,it.memoizedState,t)},useTransition:function(){var t=kl(no)[0],e=tn().memoizedState;return[t,e]},useMutableSource:mm,useSyncExternalStore:gm,useId:Am,unstable_isNewReconciler:!1},Uv={readContext:en,useCallback:Cm,useContext:en,useEffect:Jc,useImperativeHandle:Tm,useInsertionEffect:Sm,useLayoutEffect:wm,useMemo:bm,useReducer:Ul,useRef:Mm,useState:function(){return Ul(no)},useDebugValue:ef,useDeferredValue:function(t){var e=tn();return it===null?e.memoizedState=t:Lm(e,it.memoizedState,t)},useTransition:function(){var t=Ul(no)[0],e=tn().memoizedState;return[t,e]},useMutableSource:mm,useSyncExternalStore:gm,useId:Am,unstable_isNewReconciler:!1};function tf(t,e){try{var n="",i=e;do n+=d0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r}}function Ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ov=typeof WeakMap=="function"?WeakMap:Map;function Fm(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ua||(Ua=!0,lc=i),Ju(t,e)},n}function Nm(t,e,n){n=Zn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ju(t,e),typeof i!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ov;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Kv.bind(null,t,e,n),e.then(t,t))}function md(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gd(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Mi(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var zm,ec,km,Um;zm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};km=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hi(Fn.current);var s=null;switch(n){case"input":r=Cu(t,r),i=Cu(t,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=Au(t,r),i=Au(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ca)}Ru(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Um=function(t,e,n,i){n!==i&&(e.flags|=4)};function xs(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Bv(t,e,n){var i=e.pendingProps;switch(jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return zt(e.type)&&ba(),vt(e),null;case 3:return i=e.stateNode,Zr(),He(Nt),He(yt),Yc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,dn!==null&&(fc(dn),dn=null))),ec(t,e),vt(e),null;case 5:$c(e);var r=Hi(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)km(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return vt(e),null}if(t=Hi(Fn.current),vs(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[An]=e,i[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":case"embed":Ge("load",i);break;case"video":case"audio":for(r=0;r<Ls.length;r++)Ge(Ls[r],i);break;case"source":Ge("error",i);break;case"img":case"image":case"link":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"input":Pf(i,s),Ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ge("invalid",i);break;case"textarea":Df(i,s),Ge("invalid",i)}Ru(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,a,t),r=["children",""+a]):Gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ge("scroll",i)}switch(n){case"input":So(i),Rf(i,s,!0);break;case"textarea":So(i),If(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ca)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[An]=e,t[Ks]=i,zm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Du(n,i),n){case"dialog":Ge("cancel",t),Ge("close",t),r=i;break;case"iframe":case"object":case"embed":Ge("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ls.length;r++)Ge(Ls[r],t);r=i;break;case"source":Ge("error",t),r=i;break;case"img":case"image":case"link":Ge("error",t),Ge("load",t),r=i;break;case"details":Ge("toggle",t),r=i;break;case"input":Pf(t,i),r=Cu(t,i),Ge("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),Ge("invalid",t);break;case"textarea":Df(t,i),r=Au(t,i),Ge("invalid",t);break;default:r=i}Ru(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hs(t,l):typeof l=="number"&&Hs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ge("scroll",t):l!=null&&Cc(t,s,l,o))}switch(n){case"input":So(t),Rf(t,i,!1);break;case"textarea":So(t),If(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ci(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ur(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ur(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)Um(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(n=Hi(eo.current),Hi(Fn.current),vs(e)){if(i=e.stateNode,n=e.memoizedProps,i[An]=e,(s=i.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[An]=e,e.stateNode=i}return vt(e),null;case 13:if(He(Xe),i=e.memoizedState,We&&It!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(i=It;i;)i=qn(i.nextSibling);return $r(),e.flags|=98560,e}if(i!==null&&i.dehydrated!==null){if(i=vs(e),t===null){if(!i)throw Error(Y(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Y(317));i[An]=e}else $r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return vt(e),null}return dn!==null&&(fc(dn),dn=null),(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,n=!1,t===null?vs(e):n=t.memoizedState!==null,i!==n&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Xe.current&1)!==0?rt===0&&(rt=3):lf())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Zr(),ec(t,e),t===null&&Zs(e.stateNode.containerInfo),vt(e),null;case 10:return Gc(e.type._context),vt(e),null;case 17:return zt(e.type)&&ba(),vt(e),null;case 19:if(He(Xe),s=e.memoizedState,s===null)return vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xs(s,!1);else{if(rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Fa(t),o!==null){for(e.flags|=128,xs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>Qr&&(e.flags|=128,i=!0,xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!We)return vt(e),null}else 2*Ke()-s.renderingStartTime>Qr&&n!==1073741824&&(e.flags|=128,i=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Xe.current,Ve(Xe,i?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return af(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Vt&1073741824)!==0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}var Vv=ni.ReactCurrentOwner,Ft=!1;function wt(t,e,n,i){e.child=t===null?hm(e,null,n,i):Yr(e,t.child,n,i)}function vd(t,e,n,i,r){n=n.render;var s=e.ref;return Gr(e,r),i=Qc(t,e,n,i,s,r),n=Kc(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ei(t,e,r)):(We&&n&&Wc(e),e.flags|=1,wt(t,e,i,r),e.child)}function _d(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Om(t,e,s,i,r)):(t=ma(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(o,i)&&t.ref===e.ref)return ei(t,e,r)}return e.flags|=1,t=Li(s,i),t.ref=e.ref,t.return=e,e.child=t}function Om(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ys(s,i)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(Ft=!0);else return e.lanes=t.lanes,ei(t,e,r)}return tc(t,e,n,i,r)}function Bm(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(zr,Vt),Vt|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ve(zr,Vt),Vt|=i;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(zr,Vt),Vt|=t,null;else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ve(zr,Vt),Vt|=i;return wt(t,e,r,n),e.child}function Vm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tc(t,e,n,i,r){var s=zt(n)?Qi:yt.current;return s=qr(e,s),Gr(e,r),n=Qc(t,e,n,i,s,r),i=Kc(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ei(t,e,r)):(We&&i&&Wc(e),e.flags|=1,wt(t,e,n,r),e.child)}function xd(t,e,n,i,r){if(zt(n)){var s=!0;La(e)}else s=!1;if(Gr(e,r),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),um(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=zt(n)?Qi:yt.current,u=qr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ld(e,o,i,u),hi=!1;var f=e.memoizedState;o.state=f,Ra(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Nt.current||hi?(typeof c=="function"&&(Yu(e,n,c,i),l=e.memoizedState),(a=hi||ad(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,am(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:cn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=zt(n)?Qi:yt.current,l=qr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ld(e,o,i,l),hi=!1,f=e.memoizedState,o.state=f,Ra(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Nt.current||hi?(typeof g=="function"&&(Yu(e,n,g,i),_=e.memoizedState),(u=hi||ad(e,n,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return nc(t,e,n,i,s,r)}function nc(t,e,n,i,r,s){Vm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rd(e,n,!1),ei(t,e,s);i=e.stateNode,Vv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Yr(e,t.child,null,s),e.child=Yr(e,null,a,s)):wt(t,e,a,s),e.memoizedState=i.state,r&&rd(e,n,!0),e.child}function Gm(t){var e=t.stateNode;e.pendingContext?id(t,e.pendingContext,e.pendingContext!==e.context):e.context&&id(t,e.context,!1),qc(t,e.containerInfo)}function yd(t,e,n,i,r){return $r(),Xc(r),e.flags|=256,wt(t,e,n,i),e.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Io(t){return{baseLanes:t,cachePool:null,transitions:null}}function Md(t,e){return{baseLanes:t.baseLanes|e,cachePool:null,transitions:t.transitions}}function Hm(t,e,n){var i=e.pendingProps,r=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ve(Xe,r&1),t===null)return Ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(r=i.children,t=i.fallback,s?(i=e.mode,s=e.child,r={mode:"hidden",children:r},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=r):s=Va(r,i,0,null),t=$i(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Io(n),e.memoizedState=Do,t):ic(e,r));if(r=t.memoizedState,r!==null){if(a=r.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,Fo(t,e,n,Error(Y(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Va({mode:"visible",children:i.children},r,0,null),s=$i(s,r,n,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Yr(e,t.child,null,n),e.child.memoizedState=Io(n),e.memoizedState=Do,s);if((e.mode&1)===0)e=Fo(t,e,n,null);else if(a.data==="$!")e=Fo(t,e,n,Error(Y(419)));else if(i=(n&t.childLanes)!==0,Ft||i){if(i=st,i!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}i=(s&(i.suspendedLanes|n))!==0?0:s,i!==0&&i!==r.retryLane&&(r.retryLane=i,Jt(t,i,-1))}lf(),e=Fo(t,e,n,Error(Y(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=Jv.bind(null,t),a._reactRetry=e,e=null):(n=r.treeContext,It=qn(a.nextSibling),Ht=e,We=!0,dn=null,n!==null&&($t[Yt++]=$n,$t[Yt++]=Yn,$t[Yt++]=Ki,$n=n.id,Yn=n.overflow,Ki=e),e=ic(e,e.pendingProps.children),e.flags|=4096);return e}return s?(i=wd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?Io(n):Md(r,n),s.childLanes=t.childLanes&~n,e.memoizedState=Do,i):(n=Sd(t,e,i.children,n),e.memoizedState=null,n)}return s?(i=wd(t,e,i.children,i.fallback,n),s=e.child,r=t.child.memoizedState,s.memoizedState=r===null?Io(n):Md(r,n),s.childLanes=t.childLanes&~n,e.memoizedState=Do,i):(n=Sd(t,e,i.children,n),e.memoizedState=null,n)}function ic(t,e){return e=Va({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sd(t,e,n,i){var r=t.child;return t=r.sibling,n=Li(r,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n}function wd(t,e,n,i,r){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Li(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?i=Li(o,i):(i=$i(i,s,r,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,i}function Fo(t,e,n,i){return i!==null&&Xc(i),Yr(e,t.child,null,n),t=ic(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ed(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$u(t.return,e,n)}function Ol(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wm(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(wt(t,e,i.children,n),i=Xe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ed(t,n,e);else if(t.tag===19)Ed(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ve(Xe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ol(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ol(e,!0,n,null,s);break;case"together":Ol(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),er|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=Li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gv(t,e,n){switch(e.tag){case 3:Gm(e),$r();break;case 5:pm(e);break;case 1:zt(e.type)&&La(e);break;case 4:qc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(Aa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(Xe,Xe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Hm(t,e,n):(Ve(Xe,Xe.current&1),t=ei(t,e,n),t!==null?t.sibling:null);Ve(Xe,Xe.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Wm(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(Xe,Xe.current),i)break;return null;case 22:case 23:return e.lanes=0,Bm(t,e,n)}return ei(t,e,n)}function Hv(t,e){switch(jc(e),e.tag){case 1:return zt(e.type)&&ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),He(Nt),He(yt),Yc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return $c(e),null;case 13:if(He(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));$r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Xe),null;case 4:return Zr(),null;case 10:return Gc(e.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var No=!1,xt=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,oe=null;function Nr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Qe(t,e,i)}else n.current=null}function rc(t,e,n){try{n()}catch(i){Qe(t,e,i)}}var Td=!1;function jv(t,e){if(Gu=wa,t=Zp(),Oc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},wa=!1,oe=e;oe!==null;)if(e=oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,oe=t;else for(;oe!==null;){e=oe;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:cn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;if(x.nodeType===1)x.textContent="";else if(x.nodeType===9){var w=x.body;w!=null&&(w.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(S){Qe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,oe=t;break}oe=e.return}return _=Td,Td=!1,_}function ks(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rc(e,n,s)}r=r.next}while(r!==i)}}function nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jm(t){var e=t.alternate;e!==null&&(t.alternate=null,jm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[Ks],delete e[Xu],delete e[Lv],delete e[Av])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xm(t){return t.tag===5||t.tag===3||t.tag===4}function Cd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ca));else if(i!==4&&(t=t.child,t!==null))for(oc(t,e,n),t=t.sibling;t!==null;)oc(t,e,n),t=t.sibling}function ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ac(t,e,n),t=t.sibling;t!==null;)ac(t,e,n),t=t.sibling}var ft=null,fn=!1;function ri(t,e,n){for(n=n.child;n!==null;)qm(t,e,n),n=n.sibling}function qm(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:xt||Nr(n,e);case 6:var i=ft,r=fn;ft=null,ri(t,e,n),ft=i,fn=r,ft!==null&&(fn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(fn?(t=ft,n=n.stateNode,t.nodeType===8?Il(t.parentNode,n):t.nodeType===1&&Il(t,n),qs(t)):Il(ft,n.stateNode));break;case 4:i=ft,r=fn,ft=n.stateNode.containerInfo,fn=!0,ri(t,e,n),ft=i,fn=r;break;case 0:case 11:case 14:case 15:if(!xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&rc(n,e,o),r=r.next}while(r!==i)}ri(t,e,n);break;case 1:if(!xt&&(Nr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Qe(n,e,a)}ri(t,e,n);break;case 21:ri(t,e,n);break;case 22:n.mode&1?(xt=(i=xt)||n.memoizedState!==null,ri(t,e,n),xt=i):ri(t,e,n);break;default:ri(t,e,n)}}function bd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wv),e.forEach(function(i){var r=e_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,fn=!1;break e;case 3:ft=a.stateNode.containerInfo,fn=!0;break e;case 4:ft=a.stateNode.containerInfo,fn=!0;break e}a=a.return}if(ft===null)throw Error(Y(160));qm(s,o,r),ft=null,fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$m(e,t),e=e.sibling}function $m(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),En(t),i&4){try{ks(3,t,t.return),nl(3,t)}catch(_){Qe(t,t.return,_)}try{ks(5,t,t.return)}catch(_){Qe(t,t.return,_)}}break;case 1:sn(e,t),En(t),i&512&&n!==null&&Nr(n,n.return);break;case 5:if(sn(e,t),En(t),i&512&&n!==null&&Nr(n,n.return),t.flags&32){var r=t.stateNode;try{Hs(r,"")}catch(_){Qe(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vp(r,s),Du(a,o);var u=Du(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Sp(r,d):c==="dangerouslySetInnerHTML"?yp(r,d):c==="children"?Hs(r,d):Cc(r,c,d,u)}switch(a){case"input":bu(r,s);break;case"textarea":_p(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ur(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ur(r,!!s.multiple,s.defaultValue,!0):Ur(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ks]=s}catch(_){Qe(t,t.return,_)}}break;case 6:if(sn(e,t),En(t),i&4){if(t.stateNode===null)throw Error(Y(162));u=t.stateNode,c=t.memoizedProps;try{u.nodeValue=c}catch(_){Qe(t,t.return,_)}}break;case 3:if(sn(e,t),En(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(_){Qe(t,t.return,_)}break;case 4:sn(e,t),En(t);break;case 13:sn(e,t),En(t),u=t.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(sf=Ke()),i&4&&bd(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(c=xt)||u,sn(e,t),xt=c):sn(e,t),En(t),i&8192){c=t.memoizedState!==null;e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mp("display",o))}catch(_){Qe(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Qe(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}if(c&&!u&&(t.mode&1)!==0)for(oe=t,t=t.child;t!==null;){for(u=oe=t;oe!==null;){switch(c=oe,d=c.child,c.tag){case 0:case 11:case 14:case 15:ks(4,c,c.return);break;case 1:if(Nr(c,c.return),s=c.stateNode,typeof s.componentWillUnmount=="function"){f=c,g=c.return;try{r=f,s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(_){Qe(f,g,_)}}break;case 5:Nr(c,c.return);break;case 22:if(c.memoizedState!==null){Ad(u);continue}}d!==null?(d.return=c,oe=d):Ad(u)}t=t.sibling}}break;case 19:sn(e,t),En(t),i&4&&bd(t);break;case 21:break;default:sn(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xm(n)){var i=n;break e}n=n.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Hs(r,""),i.flags&=-33);var s=Cd(t);ac(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cd(t);oc(t,a,o);break;default:throw Error(Y(161))}}catch(l){Qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xv(t,e,n){oe=t,Ym(t)}function Ym(t,e,n){for(var i=(t.mode&1)!==0;oe!==null;){var r=oe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||No;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||xt;a=No;var u=xt;if(No=o,(xt=l)&&!u)for(oe=r;oe!==null;)o=oe,l=o.child,o.tag===22&&o.memoizedState!==null?Pd(r):l!==null?(l.return=o,oe=l):Pd(r);for(;s!==null;)oe=s,Ym(s),s=s.sibling;oe=r,No=a,xt=u}Ld(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,oe=s):Ld(t)}}function Ld(t){for(;oe!==null;){var e=oe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:xt||nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&od(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}od(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&qs(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(Y(163))}xt||e.flags&512&&sc(e)}catch(f){Qe(e,e.return,f)}}if(e===t){oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,oe=n;break}oe=e.return}}function Ad(t){for(;oe!==null;){var e=oe;if(e===t){oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,oe=n;break}oe=e.return}}function Pd(t){for(;oe!==null;){var e=oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nl(4,e)}catch(l){Qe(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{sc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{sc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===t){oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,oe=a;break}oe=e.return}}var qv=Math.ceil,ka=ni.ReactCurrentDispatcher,nf=ni.ReactCurrentOwner,Kt=ni.ReactCurrentBatchConfig,Re=0,st=null,tt=null,dt=0,Vt=0,zr=Pi(0),rt=0,ro=null,er=0,il=0,rf=0,Us=null,Rt=null,sf=0,Qr=1/0,Wn=null,Ua=!1,lc=null,Si=null,zo=!1,vi=null,Oa=0,Os=0,uc=null,ha=-1,pa=0;function Tt(){return(Re&6)!==0?Ke():ha!==-1?ha:ha=Ke()}function wi(t){return(t.mode&1)===0?1:(Re&2)!==0&&dt!==0?dt&-dt:Rv.transition!==null?(pa===0&&(pa=Fp()),pa):(t=Ue,t!==0||(t=window.event,t=t===void 0?16:Vp(t.type)),t)}function Jt(t,e,n){if(50<Os)throw Os=0,uc=null,Error(Y(185));var i=rl(t,e);return i===null?null:(uo(i,e,n),((Re&2)===0||i!==st)&&(i===st&&((Re&2)===0&&(il|=e),rt===4&&mi(i,dt)),kt(i,n),e===1&&Re===0&&(t.mode&1)===0&&(Qr=Ke()+500,Ja&&Ri())),i)}function rl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Zm(t){return(st!==null||pn!==null)&&(t.mode&1)!==0&&(Re&2)===0}function kt(t,e){var n=t.callbackNode;R0(t,e);var i=Sa(t,t===st?dt:0);if(i===0)n!==null&&zf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zf(n),e===1)t.tag===0?Pv(Rd.bind(null,t)):om(Rd.bind(null,t)),Cv(function(){Re===0&&Ri()}),n=null;else{switch(Np(i)){case 1:n=Rc;break;case 4:n=Dp;break;case 16:n=Ma;break;case 536870912:n=Ip;break;default:n=Ma}n=rg(n,Qm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qm(t,e){if(ha=-1,pa=0,(Re&6)!==0)throw Error(Y(327));var n=t.callbackNode;if(Hr()&&t.callbackNode!==n)return null;var i=Sa(t,t===st?dt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Ba(t,i);else{e=i;var r=Re;Re|=2;var s=Jm();(st!==t||dt!==e)&&(Wn=null,Qr=Ke()+500,qi(t,e));do try{Zv();break}catch(a){Km(t,a)}while(1);Vc(),ka.current=s,Re=r,tt!==null?e=0:(st=null,dt=0,e=rt)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=cc(t,r))),e===1)throw n=ro,qi(t,0),mi(t,i),kt(t,Ke()),n;if(e===6)mi(t,i);else{if(r=t.current.alternate,(i&30)===0&&!$v(r)&&(e=Ba(t,i),e===2&&(s=ku(t),s!==0&&(i=s,e=cc(t,s))),e===1))throw n=ro,qi(t,0),mi(t,i),kt(t,Ke()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:Ui(t,Rt,Wn);break;case 3:if(mi(t,i),(i&130023424)===i&&(e=sf+500-Ke(),10<e)){if(Sa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Tt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(Ui.bind(null,t,Rt,Wn),e);break}Ui(t,Rt,Wn);break;case 4:if(mi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qv(i/1960))-i,10<i){t.timeoutHandle=ju(Ui.bind(null,t,Rt,Wn),i);break}Ui(t,Rt,Wn);break;case 5:Ui(t,Rt,Wn);break;default:throw Error(Y(329))}}}return kt(t,Ke()),t.callbackNode===n?Qm.bind(null,t):null}function cc(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(qi(t,e).flags|=256),t=Ba(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&fc(e)),t}function fc(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function $v(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mi(t,e){for(e&=~rf,e&=~il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),i=1<<n;t[n]=-1,e&=~i}}function Rd(t){if((Re&6)!==0)throw Error(Y(327));Hr();var e=Sa(t,0);if((e&1)===0)return kt(t,Ke()),null;var n=Ba(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=cc(t,i))}if(n===1)throw n=ro,qi(t,0),mi(t,e),kt(t,Ke()),n;if(n===6)throw Error(Y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ui(t,Rt,Wn),kt(t,Ke()),null}function of(t,e){var n=Re;Re|=1;try{return t(e)}finally{Re=n,Re===0&&(Qr=Ke()+500,Ja&&Ri())}}function tr(t){vi!==null&&vi.tag===0&&(Re&6)===0&&Hr();var e=Re;Re|=1;var n=Kt.transition,i=Ue;try{if(Kt.transition=null,Ue=1,t)return t()}finally{Ue=i,Kt.transition=n,Re=e,(Re&6)===0&&Ri()}}function af(){Vt=zr.current,He(zr)}function qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Tv(n)),tt!==null)for(n=tt.return;n!==null;){var i=n;switch(jc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ba();break;case 3:Zr(),He(Nt),He(yt),Yc();break;case 5:$c(i);break;case 4:Zr();break;case 13:He(Xe);break;case 19:He(Xe);break;case 10:Gc(i.type._context);break;case 22:case 23:af()}n=n.return}if(st=t,tt=t=Li(t.current,null),dt=Vt=e,rt=0,ro=null,rf=il=er=0,Rt=Us=null,pn!==null){for(e=0;e<pn.length;e++)if(n=pn[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pn=null}return t}function Km(t,e){do{var n=tt;try{if(Vc(),fa.current=za,Na){for(var i=$e.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Na=!1}if(Ji=0,lt=it=$e=null,zs=!1,to=0,nf.current=null,n===null||n.return===null){rt=1,ro=e,tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=md(o);if(g!==null){g.flags&=-257,gd(g,o,a,s,e),g.mode&1&&pd(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){pd(s,u,e),lf();break e}l=Error(Y(426))}}else if(We&&a.mode&1){var h=md(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),gd(h,o,a,s,e),Xc(l);break e}}s=l,rt!==4&&(rt=2),Us===null?Us=[s]:Us.push(s),l=tf(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=Fm(a,l,e);sd(a,m);break e;case 1:s=l;var v=a.type,x=a.stateNode;if((a.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Si===null||!Si.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var w=Nm(a,s,e);sd(a,w);break e}}a=a.return}while(a!==null)}tg(n)}catch(S){e=S,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(1)}function Jm(){var t=ka.current;return ka.current=za,t===null?za:t}function lf(){(rt===0||rt===3||rt===2)&&(rt=4),st===null||(er&268435455)===0&&(il&268435455)===0||mi(st,dt)}function Ba(t,e){var n=Re;Re|=2;var i=Jm();(st!==t||dt!==e)&&(Wn=null,qi(t,e));do try{Yv();break}catch(r){Km(t,r)}while(1);if(Vc(),Re=n,ka.current=i,tt!==null)throw Error(Y(261));return st=null,dt=0,rt}function Yv(){for(;tt!==null;)eg(tt)}function Zv(){for(;tt!==null&&!S0();)eg(tt)}function eg(t){var e=ig(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?tg(t):tt=e,nf.current=null}function tg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Bv(n,e,Vt),n!==null){tt=n;return}}else{if(n=Hv(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,tt=null;return}}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);rt===0&&(rt=5)}function Ui(t,e,n){var i=Ue,r=Kt.transition;try{Kt.transition=null,Ue=1,Qv(t,e,n,i)}finally{Kt.transition=r,Ue=i}return null}function Qv(t,e,n,i){do Hr();while(vi!==null);if((Re&6)!==0)throw Error(Y(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D0(t,s),t===st&&(tt=st=null,dt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||zo||(zo=!0,rg(Ma,function(){return Hr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Kt.transition,Kt.transition=null;var o=Ue;Ue=1;var a=Re;Re|=4,nf.current=null,jv(t,n),$m(n,t),_v(Hu),wa=!!Gu,Hu=Gu=null,t.current=n,Xv(n),w0(),Re=a,Ue=o,Kt.transition=s}else t.current=n;if(zo&&(zo=!1,vi=t,Oa=r),s=t.pendingLanes,s===0&&(Si=null),C0(n.stateNode),kt(t,Ke()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)i(e[n]);if(Ua)throw Ua=!1,t=lc,lc=null,t;return(Oa&1)!==0&&t.tag!==0&&Hr(),s=t.pendingLanes,(s&1)!==0?t===uc?Os++:(Os=0,uc=t):Os=0,Ri(),null}function Hr(){if(vi!==null){var t=Np(Oa),e=Kt.transition,n=Ue;try{if(Kt.transition=null,Ue=16>t?16:t,vi===null)var i=!1;else{if(t=vi,vi=null,Oa=0,(Re&6)!==0)throw Error(Y(331));var r=Re;for(Re|=4,oe=t.current;oe!==null;){var s=oe,o=s.child;if((oe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(oe=u;oe!==null;){var c=oe;switch(c.tag){case 0:case 11:case 15:ks(8,c,s)}var d=c.child;if(d!==null)d.return=c,oe=d;else for(;oe!==null;){c=oe;var f=c.sibling,g=c.return;if(jm(c),c===u){oe=null;break}if(f!==null){f.return=g,oe=f;break}oe=g}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}oe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,oe=o;else e:for(;oe!==null;){if(s=oe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ks(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,oe=m;break e}oe=s.return}}var v=t.current;for(oe=v;oe!==null;){o=oe;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,oe=x;else e:for(o=v;oe!==null;){if(a=oe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:nl(9,a)}}catch(S){Qe(a,a.return,S)}if(a===o){oe=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,oe=w;break e}oe=a.return}}if(Re=r,Ri(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot($a,t)}catch{}i=!0}return i}finally{Ue=n,Kt.transition=e}}return!1}function Dd(t,e,n){e=tf(n,e),e=Fm(t,e,1),Mi(t,e),e=Tt(),t=rl(t,1),t!==null&&(uo(t,1,e),kt(t,e))}function Qe(t,e,n){if(t.tag===3)Dd(t,t,n);else for(;e!==null;){if(e.tag===3){Dd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Si===null||!Si.has(i))){t=tf(n,t),t=Nm(e,t,1),Mi(e,t),t=Tt(),e=rl(e,1),e!==null&&(uo(e,1,t),kt(e,t));break}}e=e.return}}function Kv(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(dt&n)===n&&(rt===4||rt===3&&(dt&130023424)===dt&&500>Ke()-sf?qi(t,0):rf|=n),kt(t,e)}function ng(t,e){e===0&&((t.mode&1)===0?e=1:(e=To,To<<=1,(To&130023424)===0&&(To=4194304)));var n=Tt();t=rl(t,e),t!==null&&(uo(t,e,n),kt(t,n))}function Jv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ng(t,n)}function e_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),ng(t,n)}var ig;ig=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Ft=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ft=!1,Gv(t,e,n);Ft=(t.flags&131072)!==0}else Ft=!1,We&&(e.flags&1048576)!==0&&cm(e,Ia,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var r=qr(e,yt.current);Gr(e,n),r=Qc(null,e,i,t,r,n);var s=Kc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(i)?(s=!0,La(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hc(e),r.updater=el,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=nc(null,e,i,!0,s,n)):(e.tag=0,We&&s&&Wc(e),wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=n_(i),t=cn(i,t),r){case 0:e=tc(null,e,i,t,n);break e;case 1:e=xd(null,e,i,t,n);break e;case 11:e=vd(null,e,i,t,n);break e;case 14:e=_d(null,e,i,cn(i.type,t),n);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:cn(i,r),tc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:cn(i,r),xd(t,e,i,r,n);case 3:e:{if(Gm(e),t===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,am(t,e),Ra(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Error(Y(423)),e=yd(t,e,i,n,r);break e}else if(i!==r){r=Error(Y(424)),e=yd(t,e,i,n,r);break e}else for(It=qn(e.stateNode.containerInfo.firstChild),Ht=e,We=!0,dn=null,n=hm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),i===r){e=ei(t,e,n);break e}wt(t,e,i,n)}e=e.child}return e;case 5:return pm(e),t===null&&Ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wu(i,r)?o=null:s!==null&&Wu(i,s)&&(e.flags|=32),Vm(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return Hm(t,e,n);case 4:return qc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yr(e,null,i,n):wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:cn(i,r),vd(t,e,i,r,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(Aa,i._currentValue),i._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===r.children&&!Nt.current){e=ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$u(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$u(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gr(e,n),r=en(r),i=i(r),e.flags|=1,wt(t,e,i,n),e.child;case 14:return i=e.type,r=cn(i,e.pendingProps),r=cn(i.type,r),_d(t,e,i,r,n);case 15:return Om(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:cn(i,r),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,zt(i)?(t=!0,La(e)):t=!1,Gr(e,n),um(e,i,r),Zu(e,i,r,n),nc(null,e,i,!0,t,n);case 19:return Wm(t,e,n);case 22:return Bm(t,e,n)}throw Error(Y(156,e.tag))};function rg(t,e){return Rp(t,e)}function t_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,i){return new t_(t,e,n,i)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n_(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lc)return 11;if(t===Ac)return 14}return 2}function Li(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cr:return $i(n.children,r,s,e);case bc:o=8,r|=8;break;case Su:return t=Qt(12,n,e,r|2),t.elementType=Su,t.lanes=s,t;case wu:return t=Qt(13,n,e,r),t.elementType=wu,t.lanes=s,t;case Eu:return t=Qt(19,n,e,r),t.elementType=Eu,t.lanes=s,t;case pp:return Va(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dp:o=10;break e;case hp:o=9;break e;case Lc:o=11;break e;case Ac:o=14;break e;case di:o=16,i=null;break e}throw Error(Y(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $i(t,e,n,i){return t=Qt(7,t,i,e),t.lanes=n,t}function Va(t,e,n,i){return t=Qt(22,t,i,e),t.elementType=pp,t.lanes=n,t.stateNode={},t}function Bl(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Vl(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function i_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cf(t,e,n,i,r,s,o,a,l){return t=new i_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(s),t}function r_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function sg(t){if(!t)return bi;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(Y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(t.tag===1){var n=t.type;if(zt(n))return sm(t,n,e)}return e}function og(t,e,n,i,r,s,o,a,l){return t=cf(n,i,!0,t,r,s,o,a,l),t.context=sg(null),n=t.current,i=Tt(),r=wi(n),s=Zn(i,r),s.callback=e!=null?e:null,Mi(n,s),t.current.lanes=r,uo(t,r,i),kt(t,i),t}function sl(t,e,n,i){var r=e.current,s=Tt(),o=wi(r);return n=sg(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),Mi(r,e),t=Jt(r,o,s),t!==null&&ca(t,r,o),o}function Ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){Id(t,e),(t=t.alternate)&&Id(t,e)}function s_(){return null}var ag=typeof reportError=="function"?reportError:function(t){console.error(t)};function df(t){this._internalRoot=t}ol.prototype.render=df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));sl(t,e,null,null)};ol.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tr(function(){sl(null,t,null,null)}),e[Jn]=null}};function ol(t){this._internalRoot=t}ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Up();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pi.length&&e!==0&&e<pi[n].priority;n++);pi.splice(n,0,t),n===0&&Bp(t)}};function hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function o_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ga(o);s.call(u)}}var o=og(e,i,t,0,null,!1,!1,"",Fd);return t._reactRootContainer=o,t[Jn]=o.current,Zs(t.nodeType===8?t.parentNode:t),tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ga(l);a.call(u)}}var l=cf(t,0,!1,null,null,!1,!1,"",Fd);return t._reactRootContainer=l,t[Jn]=l.current,Zs(t.nodeType===8?t.parentNode:t),tr(function(){sl(e,l,n,i)}),l}function ll(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ga(o);a.call(l)}}sl(e,o,t,r)}else o=o_(n,e,t,r,i);return Ga(o)}zp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bs(e.pendingLanes);n!==0&&(Dc(e,n|1),kt(e,Ke()),(Re&6)===0&&(Qr=Ke()+500,Ri()))}break;case 13:var i=Tt();tr(function(){return Jt(t,1,i)}),ff(t,1)}};Ic=function(t){if(t.tag===13){var e=Tt();Jt(t,134217728,e),ff(t,134217728)}};kp=function(t){if(t.tag===13){var e=Tt(),n=wi(t);Jt(t,n,e),ff(t,n)}};Up=function(){return Ue};Op=function(t,e){var n=Ue;try{return Ue=t,e()}finally{Ue=n}};Fu=function(t,e,n){switch(e){case"input":if(bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ka(i);if(!r)throw Error(Y(90));gp(i),bu(i,r)}}}break;case"textarea":_p(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};Tp=of;Cp=tr;var a_={usingClientEntryPoint:!1,Events:[fo,Pr,Ka,wp,Ep,of]},ys={findFiberByHostInstance:Gi,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},l_={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ap(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{$a=ko.inject(l_),In=ko}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hf(e))throw Error(Y(200));return r_(t,e,null,n)};jt.createRoot=function(t,e){if(!hf(t))throw Error(Y(299));var n=!1,i="",r=ag;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cf(t,1,!1,null,null,n,!1,i,r),t[Jn]=e.current,Zs(t.nodeType===8?t.parentNode:t),new df(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=Ap(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return tr(t)};jt.hydrate=function(t,e,n){if(!al(e))throw Error(Y(200));return ll(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!hf(t))throw Error(Y(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=ag;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=og(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Jn]=e.current,Zs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ol(e)};jt.render=function(t,e,n){if(!al(e))throw Error(Y(200));return ll(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!al(t))throw Error(Y(40));return t._reactRootContainer?(tr(function(){ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};jt.unstable_batchedUpdates=of;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!al(n))throw Error(Y(200));if(t==null||t._reactInternals===void 0)throw Error(Y(38));return ll(t,e,n,!1,i)};jt.version="18.1.0-next-22edb9f77-20220426";function lg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lg)}catch(t){console.error(t)}}lg(),ap.exports=jt;var Nd=ap.exports;yu.createRoot=Nd.createRoot,yu.hydrateRoot=Nd.hydrateRoot;var u_="/assets/sun.f6a78520.jpg",c_="/assets/milky-way.590d9f39.jpg";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="141",f_=0,zd=1,d_=2,ug=1,h_=2,As=3,so=0,vn=1,Kr=2,p_=1,Ei=0,Wr=1,kd=2,Ud=3,Od=4,m_=5,Er=100,g_=101,v_=102,Bd=103,Vd=104,__=200,x_=201,y_=202,M_=203,cg=204,fg=205,S_=206,w_=207,E_=208,T_=209,C_=210,b_=0,L_=1,A_=2,dc=3,P_=4,R_=5,D_=6,I_=7,ul=0,F_=1,N_=2,Qn=0,z_=1,k_=2,U_=3,O_=4,B_=5,dg=300,Jr=301,es=302,hc=303,pc=304,cl=306,mc=1e3,hn=1001,gc=1002,Dt=1003,Gd=1004,Hd=1005,Zt=1006,V_=1007,fl=1008,nr=1009,G_=1010,H_=1011,hg=1012,W_=1013,Wi=1014,ji=1015,oo=1016,j_=1017,X_=1018,jr=1020,q_=1021,$_=1022,mn=1023,Y_=1024,Z_=1025,Yi=1026,ts=1027,Q_=1028,K_=1029,J_=1030,ex=1031,tx=1033,Gl=33776,Hl=33777,Wl=33778,jl=33779,Wd=35840,jd=35841,Xd=35842,qd=35843,nx=36196,$d=37492,Yd=37496,Zd=37808,Qd=37809,Kd=37810,Jd=37811,eh=37812,th=37813,nh=37814,ih=37815,rh=37816,sh=37817,oh=37818,ah=37819,lh=37820,uh=37821,ch=36492,ir=3e3,je=3001,ix=3200,rx=3201,os=0,sx=1,jn="srgb",Xi="srgb-linear",Xl=7680,ox=519,fh=35044,dh="300 es",vc=1035;class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ct=[];for(let t=0;t<256;t++)ct[t]=(t<16?"0":"")+t.toString(16);let hh=1234567;const Bs=Math.PI/180,Ha=180/Math.PI;function ls(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[t&255]+ct[t>>8&255]+ct[t>>16&255]+ct[t>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[n&63|128]+ct[n>>8&255]+"-"+ct[n>>16&255]+ct[n>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function Et(t,e,n){return Math.max(e,Math.min(n,t))}function mf(t,e){return(t%e+e)%e}function ax(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function lx(t,e,n){return t!==e?(n-t)/(e-t):0}function Vs(t,e,n){return(1-n)*t+n*e}function ux(t,e,n,i){return Vs(t,e,1-Math.exp(-n*i))}function cx(t,e=1){return e-Math.abs(mf(t,e*2)-e)}function fx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function dx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function hx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function px(t,e){return t+Math.random()*(e-t)}function mx(t){return t*(.5-Math.random())}function gx(t){t!==void 0&&(hh=t);let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(t){return t*Bs}function _x(t){return t*Ha}function _c(t){return(t&t-1)===0&&t!==0}function xx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Wa(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yx(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),g=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*f,a*u);break;case"YZY":t.set(l*f,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*f,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*g,a*u);break;case"YXY":t.set(l*g,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*g,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mx(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sx(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var wx=Object.freeze({__proto__:null,DEG2RAD:Bs,RAD2DEG:Ha,generateUUID:ls,clamp:Et,euclideanModulo:mf,mapLinear:ax,inverseLerp:lx,lerp:Vs,damp:ux,pingpong:cx,smoothstep:fx,smootherstep:dx,randInt:hx,randFloat:px,randFloatSpread:mx,seededRandom:gx,degToRad:vx,radToDeg:_x,isPowerOfTwo:_c,ceilPowerOfTwo:xx,floorPowerOfTwo:Wa,setQuaternionFromProperEuler:yx,normalize:Sx,denormalize:Mx});class Ae{constructor(e=0,n=0){this.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],_=i[8],p=r[0],h=r[3],m=r[6],v=r[1],x=r[4],w=r[7],S=r[2],C=r[5],A=r[8];return s[0]=o*p+a*v+l*S,s[3]=o*h+a*x+l*C,s[6]=o*m+a*w+l*A,s[1]=u*p+c*v+d*S,s[4]=u*h+c*x+d*C,s[7]=u*m+c*w+d*A,s[2]=f*p+g*v+_*S,s[5]=f*h+g*x+_*C,s[8]=f*m+g*w+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,_=n*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(c*n-r*l)*p,e[5]=(r*s-a*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function ao(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ga(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ql={[jn]:{[Xi]:Zi},[Xi]:{[jn]:ga}},on={legacyMode:!0,get workingColorSpace(){return Xi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(ql[e]&&ql[e][n]!==void 0){const i=ql[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={r:0,g:0,b:0},an={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function $l(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Oo(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xi){return this.r=e,this.g=n,this.b=i,on.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xi){if(e=mf(e,1),n=Et(n,0,1),i=Et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$l(o,s,e+1/3),this.g=$l(o,s,e),this.b=$l(o,s,e-1/3)}return on.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,on.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,on.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,on.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,on.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=jn){const i=mg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return on.fromWorkingColorSpace(Oo(this,nt),e),Et(nt.r*255,0,255)<<16^Et(nt.g*255,0,255)<<8^Et(nt.b*255,0,255)<<0}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xi){on.fromWorkingColorSpace(Oo(this,nt),n);const i=nt.r,r=nt.g,s=nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Xi){return on.fromWorkingColorSpace(Oo(this,nt),n),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=jn){return on.fromWorkingColorSpace(Oo(this,nt),e),e!==jn?`color(${e} ${nt.r} ${nt.g} ${nt.b})`:`rgb(${nt.r*255|0},${nt.g*255|0},${nt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(an),an.h+=e,an.s+=n,an.l+=i,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(an),e.getHSL(Uo);const i=Vs(an.h,Uo.h,n),r=Vs(an.s,Uo.s,n),s=Vs(an.l,Uo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ye.NAMES=mg;let cr;class gg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cr===void 0&&(cr=ao("canvas")),cr.width=e.width,cr.height=e.height;const i=cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=ao("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vg{constructor(e=null){this.isSource=!0,this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yl(r[o].image)):s.push(Yl(r[o]))}else s=Yl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yl(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?gg.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ex=0;class nn extends as{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=hn,r=hn,s=Zt,o=fl,a=mn,l=nr,u=1,c=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=ls(),this.name="",this.source=new vg(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=dg;class qe{constructor(e=0,n=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],_=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,w=(g+1)/2,S=(m+1)/2,C=(c+f)/4,A=(d+p)/4,y=(_+h)/4;return x>w&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):w>S?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((h-_)*(h-_)+(d-p)*(d-p)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(d-p)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ti extends as{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qe(0,0,e,n),this.scissorTest=!1,this.viewport=new qe(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _g extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tx extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,n,r)}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=_,e[n+3]=p;return}if(d!==p||l!==f||u!==g||c!==_){let h=1-a;const m=l*f+u*g+c*_+d*p,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,m*v);h=Math.sin(h*C)/S,a=Math.sin(a*C)/S}const w=a*v;if(l=l*h+f*w,u=u*h+g*w,c=c*h+_*w,d=d*h+p*w,h===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+c*d+l*g-u*f,e[n+1]=l*_+c*f+u*d-a*g,e[n+2]=u*_+c*g+a*f-l*d,e[n+3]=c*_-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d-f*g*_;break;case"YXZ":this._x=f*c*d+u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d+f*g*_;break;case"ZXY":this._x=f*c*d-u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d-f*g*_;break;case"ZYX":this._x=f*c*d-u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d+f*g*_;break;case"YZX":this._x=f*c*d+u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d-f*g*_;break;case"XZY":this._x=f*c*d-u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){this.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ph.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new R,ph=new po;class mo{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Fi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fi)}else i.boundingBox===null&&i.computeBoundingBox(),Ql.copy(i.boundingBox),Ql.applyMatrix4(e.matrixWorld),this.union(Ql);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),Bo.subVectors(this.max,Ms),fr.subVectors(e.a,Ms),dr.subVectors(e.b,Ms),hr.subVectors(e.c,Ms),si.subVectors(dr,fr),oi.subVectors(hr,dr),Ni.subVectors(fr,hr);let n=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Ni.z,Ni.y,si.z,0,-si.x,oi.z,0,-oi.x,Ni.z,0,-Ni.x,-si.y,si.x,0,-oi.y,oi.x,0,-Ni.y,Ni.x,0];return!Kl(n,fr,dr,hr,Bo)||(n=[1,0,0,0,1,0,0,0,1],!Kl(n,fr,dr,hr,Bo))?!1:(Vo.crossVectors(si,oi),n=[Vo.x,Vo.y,Vo.z],Kl(n,fr,dr,hr,Bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new R,new R,new R,new R,new R,new R,new R,new R],Fi=new R,Ql=new mo,fr=new R,dr=new R,hr=new R,si=new R,oi=new R,Ni=new R,Ms=new R,Bo=new R,Vo=new R,zi=new R;function Kl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zi.fromArray(t,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),u=n.dot(zi),c=i.dot(zi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Cx=new mo,mh=new R,Go=new R,Jl=new R;class gf{constructor(e=new R,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Cx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Jl.subVectors(e,this.center);const n=Jl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Jl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Go.set(0,0,1).multiplyScalar(e.radius):Go.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(mh.copy(e.center).add(Go)),this.expandByPoint(mh.copy(e.center).sub(Go)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new R,eu=new R,Ho=new R,ai=new R,tu=new R,Wo=new R,nu=new R;class bx{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bn.copy(this.direction).multiplyScalar(n).add(this.origin),Bn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){eu.copy(e).add(n).multiplyScalar(.5),Ho.copy(n).sub(e).normalize(),ai.copy(this.origin).sub(eu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ho),a=ai.dot(this.direction),l=-ai.dot(Ho),u=ai.lengthSq(),c=Math.abs(1-o*o);let d,f,g,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const p=1/c;d*=p,f*=p,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Ho).multiplyScalar(f).add(eu),g}intersectSphere(e,n){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,n,i,r,s){tu.subVectors(n,e),Wo.subVectors(i,e),nu.crossVectors(tu,Wo);let o=this.direction.dot(nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(Wo.crossVectors(ai,Wo));if(l<0)return null;const u=a*this.direction.dot(tu.cross(ai));if(u<0||l+u>o)return null;const c=-a*ai.dot(nu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,l,u,c,d,f,g,_,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=_,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,_=a*c,p=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+_*u,n[5]=f-p*u,n[9]=-a*l,n[2]=p-f*u,n[6]=_+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,_=u*c,p=u*d;n[0]=f+p*a,n[4]=_*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-_,n[6]=p+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,_=u*c,p=u*d;n[0]=f-p*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*c,n[9]=p-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,_=a*c,p=a*d;n[0]=l*c,n[4]=_*u-g,n[8]=f*u+p,n[1]=l*d,n[5]=p*u+f,n[9]=g*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=p-f*d,n[8]=_*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+_,n[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+p,n[5]=o*c,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*c,n[10]=p*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lx,e,Ax)}lookAt(e,n,i){const r=this.elements;return Ot.subVectors(e,n),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),li.crossVectors(i,Ot),li.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),li.crossVectors(i,Ot)),li.normalize(),jo.crossVectors(Ot,li),r[0]=li.x,r[4]=jo.x,r[8]=Ot.x,r[1]=li.y,r[5]=jo.y,r[9]=Ot.y,r[2]=li.z,r[6]=jo.z,r[10]=Ot.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],_=i[2],p=i[6],h=i[10],m=i[14],v=i[3],x=i[7],w=i[11],S=i[15],C=r[0],A=r[4],y=r[8],b=r[12],I=r[1],k=r[5],ne=r[9],K=r[13],F=r[2],q=r[6],V=r[10],X=r[14],P=r[3],D=r[7],z=r[11],$=r[15];return s[0]=o*C+a*I+l*F+u*P,s[4]=o*A+a*k+l*q+u*D,s[8]=o*y+a*ne+l*V+u*z,s[12]=o*b+a*K+l*X+u*$,s[1]=c*C+d*I+f*F+g*P,s[5]=c*A+d*k+f*q+g*D,s[9]=c*y+d*ne+f*V+g*z,s[13]=c*b+d*K+f*X+g*$,s[2]=_*C+p*I+h*F+m*P,s[6]=_*A+p*k+h*q+m*D,s[10]=_*y+p*ne+h*V+m*z,s[14]=_*b+p*K+h*X+m*$,s[3]=v*C+x*I+w*F+S*P,s[7]=v*A+x*k+w*q+S*D,s[11]=v*y+x*ne+w*V+S*z,s[15]=v*b+x*K+w*X+S*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],_=e[3],p=e[7],h=e[11],m=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+p*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+h*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],_=e[12],p=e[13],h=e[14],m=e[15],v=d*h*u-p*f*u+p*l*g-a*h*g-d*l*m+a*f*m,x=_*f*u-c*h*u-_*l*g+o*h*g+c*l*m-o*f*m,w=c*p*u-_*d*u+_*a*g-o*p*g-c*a*m+o*d*m,S=_*d*l-c*p*l-_*a*f+o*p*f+c*a*h-o*d*h,C=n*v+i*x+r*w+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(p*f*s-d*h*s-p*r*g+i*h*g+d*r*m-i*f*m)*A,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*A,e[4]=x*A,e[5]=(c*h*s-_*f*s+_*r*g-n*h*g-c*r*m+n*f*m)*A,e[6]=(_*l*s-o*h*s-_*r*u+n*h*u+o*r*m-n*l*m)*A,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*A,e[8]=w*A,e[9]=(_*d*s-c*p*s-_*i*g+n*p*g+c*i*m-n*d*m)*A,e[10]=(o*p*s-_*a*s+_*i*u-n*p*u-o*i*m+n*a*m)*A,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*A,e[12]=S*A,e[13]=(c*p*r-_*d*r+_*i*f-n*p*f-c*i*h+n*d*h)*A,e[14]=(_*a*r-o*p*r-_*i*l+n*p*l+o*i*h-n*a*h)*A,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,_=s*d,p=o*c,h=o*d,m=a*d,v=l*u,x=l*c,w=l*d,S=i.x,C=i.y,A=i.z;return r[0]=(1-(p+m))*S,r[1]=(g+w)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(g-w)*C,r[5]=(1-(f+m))*C,r[6]=(h+v)*C,r[7]=0,r[8]=(_+x)*A,r[9]=(h-v)*A,r[10]=(1-(f+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const u=1/s,c=1/o,d=1/a;return ln.elements[0]*=u,ln.elements[1]*=u,ln.elements[2]*=u,ln.elements[4]*=c,ln.elements[5]*=c,ln.elements[6]*=c,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,n.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const pr=new R,ln=new ot,Lx=new R(0,0,0),Ax=new R(1,1,1),li=new R,jo=new R,Ot=new R,gh=new ot,vh=new po;class go{constructor(e=0,n=0,i=0,r=go.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}go.DefaultOrder="XYZ";go.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Px=0;const _h=new R,mr=new po,Vn=new ot,Xo=new R,Ss=new R,Rx=new R,Dx=new po,xh=new R(1,0,0),yh=new R(0,1,0),Mh=new R(0,0,1),Ix={type:"added"},Sh={type:"removed"};class rn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DefaultUp.clone();const e=new R,n=new go,i=new po,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Rn}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=rn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new xg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mr.setFromAxisAngle(e,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,n){return mr.setFromAxisAngle(e,n),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,n){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ss,Xo,this.up):Vn.lookAt(Xo,Ss,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(Vn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ix)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DefaultUp=new R(0,1,0);rn.DefaultMatrixAutoUpdate=!0;const un=new R,Gn=new R,iu=new R,Hn=new R,gr=new R,vr=new R,wh=new R,ru=new R,su=new R,ou=new R;class Pn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),un.subVectors(e,n),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){un.subVectors(r,n),Gn.subVectors(i,n),iu.subVectors(e,n);const o=un.dot(un),a=un.dot(Gn),l=un.dot(iu),u=Gn.dot(Gn),c=Gn.dot(iu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Hn),l.set(0,0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l}static isFrontFacing(e,n,i,r){return un.subVectors(i,n),Gn.subVectors(e,n),un.cross(Gn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),un.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Pn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;gr.subVectors(r,i),vr.subVectors(s,i),ru.subVectors(e,i);const l=gr.dot(ru),u=vr.dot(ru);if(l<=0&&u<=0)return n.copy(i);su.subVectors(e,r);const c=gr.dot(su),d=vr.dot(su);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(gr,o);ou.subVectors(e,s);const g=gr.dot(ou),_=vr.dot(ou);if(_>=0&&g<=_)return n.copy(s);const p=g*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(vr,a);const h=c*_-g*d;if(h<=0&&d-c>=0&&g-_>=0)return wh.subVectors(s,r),a=(d-c)/(d-c+(g-_)),n.copy(r).addScaledVector(wh,a);const m=1/(h+p+f);return o=p*m,a=f*m,n.copy(i).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fx=0;class pt extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Wr,this.side=so,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cg,this.blendDst=fg,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ox,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===p_;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==so&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}pt.fromType=function(){return null};class vf extends pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new R,qo=new Ae;class Nn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=fh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ye),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ae),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new R),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new qe),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)et.fromBufferAttribute(this,n),et.applyMatrix3(e),this.setXYZ(n,et.x,et.y,et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)et.fromBufferAttribute(this,n),et.applyMatrix4(e),this.setXYZ(n,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)et.fromBufferAttribute(this,n),et.applyNormalMatrix(e),this.setXYZ(n,et.x,et.y,et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)et.fromBufferAttribute(this,n),et.transformDirection(e),this.setXYZ(n,et.x,et.y,et.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class yg extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mg extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Nx=0;const qt=new ot,au=new rn,_r=new R,Bt=new mo,ws=new mo,at=new R;class Di extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Mg:yg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Rn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,n,i){return qt.makeTranslation(e,n,i),this.applyMatrix4(qt),this}scale(e,n,i){return qt.makeScale(e,n,i),this.applyMatrix4(qt),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Bt.min,ws.min),Bt.expandByPoint(at),at.addVectors(Bt.max,ws.max),Bt.expandByPoint(at)):(Bt.expandByPoint(ws.min),Bt.expandByPoint(ws.max))}Bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(at));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)at.fromBufferAttribute(a,u),l&&(_r.fromBufferAttribute(e,u),at.add(_r)),r=Math.max(r,i.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let I=0;I<a;I++)u[I]=new R,c[I]=new R;const d=new R,f=new R,g=new R,_=new Ae,p=new Ae,h=new Ae,m=new R,v=new R;function x(I,k,ne){d.fromArray(r,I*3),f.fromArray(r,k*3),g.fromArray(r,ne*3),_.fromArray(o,I*2),p.fromArray(o,k*2),h.fromArray(o,ne*2),f.sub(d),g.sub(d),p.sub(_),h.sub(_);const K=1/(p.x*h.y-h.x*p.y);!isFinite(K)||(m.copy(f).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(K),v.copy(g).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(K),u[I].add(m),u[k].add(m),u[ne].add(m),c[I].add(v),c[k].add(v),c[ne].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let I=0,k=w.length;I<k;++I){const ne=w[I],K=ne.start,F=ne.count;for(let q=K,V=K+F;q<V;q+=3)x(i[q+0],i[q+1],i[q+2])}const S=new R,C=new R,A=new R,y=new R;function b(I){A.fromArray(s,I*3),y.copy(A);const k=u[I];S.copy(k),S.sub(A.multiplyScalar(A.dot(k))).normalize(),C.crossVectors(y,k);const K=C.dot(c[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=K}for(let I=0,k=w.length;I<k;++I){const ne=w[I],K=ne.start,F=ne.count;for(let q=K,V=K+F;q<V;q+=3)b(i[q+0]),b(i[q+1]),b(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,u=new R,c=new R,d=new R;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let d=0,f=u;d<c;d++,f++)o[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)at.fromBufferAttribute(e,n),at.normalize(),e.setXYZ(n,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)f[_++]=u[g++]}return new Nn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new ot,xr=new bx,lu=new gf,ui=new R,ci=new R,fi=new R,uu=new R,cu=new R,fu=new R,$o=new R,Yo=new R,Zo=new R,Qo=new Ae,Ko=new Ae,Jo=new Ae,du=new R,ea=new R;class Dn extends rn{constructor(e=new Di,n=new vf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(s),e.ray.intersectsSphere(lu)===!1)||(Eh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Eh),i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=x,C=w;S<C;S+=3){const A=a.getX(S),y=a.getX(S+1),b=a.getX(S+2);o=ta(this,v,e,xr,l,u,c,d,f,A,y,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const x=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);o=ta(this,r,e,xr,l,u,c,d,f,x,w,S),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=x,C=w;S<C;S+=3){const A=S,y=S+1,b=S+2;o=ta(this,v,e,xr,l,u,c,d,f,A,y,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const x=m,w=m+1,S=m+2;o=ta(this,r,e,xr,l,u,c,d,f,x,w,S),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function zx(t,e,n,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Kr,a),l===null)return null;ea.copy(a),ea.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ea);return u<n.near||u>n.far?null:{distance:u,point:ea.clone(),object:t}}function ta(t,e,n,i,r,s,o,a,l,u,c,d){ui.fromBufferAttribute(r,u),ci.fromBufferAttribute(r,c),fi.fromBufferAttribute(r,d);const f=t.morphTargetInfluences;if(s&&f){$o.set(0,0,0),Yo.set(0,0,0),Zo.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=f[_],m=s[_];h!==0&&(uu.fromBufferAttribute(m,u),cu.fromBufferAttribute(m,c),fu.fromBufferAttribute(m,d),o?($o.addScaledVector(uu,h),Yo.addScaledVector(cu,h),Zo.addScaledVector(fu,h)):($o.addScaledVector(uu.sub(ui),h),Yo.addScaledVector(cu.sub(ci),h),Zo.addScaledVector(fu.sub(fi),h)))}ui.add($o),ci.add(Yo),fi.add(Zo)}t.isSkinnedMesh&&(t.boneTransform(u,ui),t.boneTransform(c,ci),t.boneTransform(d,fi));const g=zx(t,e,n,i,ui,ci,fi,du);if(g){a&&(Qo.fromBufferAttribute(a,u),Ko.fromBufferAttribute(a,c),Jo.fromBufferAttribute(a,d),g.uv=Pn.getUV(du,ui,ci,fi,Qo,Ko,Jo,new Ae)),l&&(Qo.fromBufferAttribute(l,u),Ko.fromBufferAttribute(l,c),Jo.fromBufferAttribute(l,d),g.uv2=Pn.getUV(du,ui,ci,fi,Qo,Ko,Jo,new Ae));const _={a:u,b:c,c:d,normal:new R,materialIndex:0};Pn.getNormal(ui,ci,fi,_.normal),g.face=_}return g}class vo extends Di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(u,3)),this.setAttribute("normal",new zn(c,3)),this.setAttribute("uv",new zn(d,2));function _(p,h,m,v,x,w,S,C,A,y,b){const I=w/A,k=S/y,ne=w/2,K=S/2,F=C/2,q=A+1,V=y+1;let X=0,P=0;const D=new R;for(let z=0;z<V;z++){const $=z*k-K;for(let W=0;W<q;W++){const Z=W*I-ne;D[p]=Z*v,D[h]=$*x,D[m]=F,u.push(D.x,D.y,D.z),D[p]=0,D[h]=0,D[m]=C>0?1:-1,c.push(D.x,D.y,D.z),d.push(W/A),d.push(1-z/y),X+=1}}for(let z=0;z<y;z++)for(let $=0;$<A;$++){const W=f+$+q*z,Z=f+$+q*(z+1),ae=f+($+1)+q*(z+1),de=f+($+1)+q*z;l.push(W,Z,de),l.push(Z,ae,de),P+=6}a.addGroup(g,P,b),g+=P,f+=X}}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _t(t){const e={};for(let n=0;n<t.length;n++){const i=ns(t[n]);for(const r in i)e[r]=i[r]}return e}const kx={clone:ns,merge:_t};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ux,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Sg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=90,Mr=1;class Bx extends rn{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Gt(yr,Mr,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Gt(yr,Mr,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new Gt(yr,Mr,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new Gt(yr,Mr,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new Gt(yr,Mr,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const u=new Gt(yr,Mr,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new R(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Qn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class wg extends nn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Jr,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends Ti{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vo(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ei});s.uniforms.tEquirect.value=n;const o=new Dn(r,s),a=n.minFilter;return n.minFilter===fl&&(n.minFilter=Zt),new Bx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const hu=new R,Gx=new R,Hx=new Rn;class Oi{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(Gx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Hx.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new gf,na=new R;class _f{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],h=i[12],m=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,d-l,p-f,x-h).normalize(),n[1].setComponents(a+r,d+l,p+f,x+h).normalize(),n[2].setComponents(a+s,d+u,p+g,x+m).normalize(),n[3].setComponents(a-s,d-u,p-g,x-m).normalize(),n[4].setComponents(a-o,d-c,p-_,x-v).normalize(),n[5].setComponents(a+o,d+c,p+_,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Wx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class xf extends Di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],_=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*f-o;for(let x=0;x<u;x++){const w=x*d-s;_.push(w,-v,0),p.push(0,0,1),h.push(x/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+u*m,w=v+u*(m+1),S=v+1+u*(m+1),C=v+1+u*m;g.push(x,w,C),g.push(w,S,C)}this.setIndex(g),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(p,3)),this.setAttribute("uv",new zn(h,2))}static fromJSON(e){return new xf(e.width,e.height,e.widthSegments,e.heightSegments)}}var jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx="vec3 transformed = vec3( position );",Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ey=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,ty=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cy=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,fy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,My=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ay=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Iy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Uy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Oy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,By=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,uM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,SM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,EM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,FM=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,NM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,UM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,OM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,BM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,XM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,qM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$M=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,YM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,sS=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,uS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_S=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:jx,alphamap_pars_fragment:Xx,alphatest_fragment:qx,alphatest_pars_fragment:$x,aomap_fragment:Yx,aomap_pars_fragment:Zx,begin_vertex:Qx,beginnormal_vertex:Kx,bsdfs:Jx,iridescence_fragment:ey,bumpmap_pars_fragment:ty,clipping_planes_fragment:ny,clipping_planes_pars_fragment:iy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:sy,color_fragment:oy,color_pars_fragment:ay,color_pars_vertex:ly,color_vertex:uy,common:cy,cube_uv_reflection_fragment:fy,defaultnormal_vertex:dy,displacementmap_pars_vertex:hy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:gy,encodings_fragment:vy,encodings_pars_fragment:_y,envmap_fragment:xy,envmap_common_pars_fragment:yy,envmap_pars_fragment:My,envmap_pars_vertex:Sy,envmap_physical_pars_fragment:Iy,envmap_vertex:wy,fog_vertex:Ey,fog_pars_vertex:Ty,fog_fragment:Cy,fog_pars_fragment:by,gradientmap_pars_fragment:Ly,lightmap_fragment:Ay,lightmap_pars_fragment:Py,lights_lambert_vertex:Ry,lights_pars_begin:Dy,lights_toon_fragment:Fy,lights_toon_pars_fragment:Ny,lights_phong_fragment:zy,lights_phong_pars_fragment:ky,lights_physical_fragment:Uy,lights_physical_pars_fragment:Oy,lights_fragment_begin:By,lights_fragment_maps:Vy,lights_fragment_end:Gy,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:Xy,map_fragment:qy,map_pars_fragment:$y,map_particle_fragment:Yy,map_particle_pars_fragment:Zy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:Ky,morphcolor_vertex:Jy,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:oM,normal_vertex:aM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:uM,clearcoat_normal_fragment_maps:cM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:dM,output_fragment:hM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:vM,dithering_pars_fragment:_M,roughnessmap_fragment:xM,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:MM,shadowmap_pars_vertex:SM,shadowmap_vertex:wM,shadowmask_pars_fragment:EM,skinbase_vertex:TM,skinning_pars_vertex:CM,skinning_vertex:bM,skinnormal_vertex:LM,specularmap_fragment:AM,specularmap_pars_fragment:PM,tonemapping_fragment:RM,tonemapping_pars_fragment:DM,transmission_fragment:IM,transmission_pars_fragment:FM,uv_pars_fragment:NM,uv_pars_vertex:zM,uv_vertex:kM,uv2_pars_fragment:UM,uv2_pars_vertex:OM,uv2_vertex:BM,worldpos_vertex:VM,background_vert:GM,background_frag:HM,cube_vert:WM,cube_frag:jM,depth_vert:XM,depth_frag:qM,distanceRGBA_vert:$M,distanceRGBA_frag:YM,equirect_vert:ZM,equirect_frag:QM,linedashed_vert:KM,linedashed_frag:JM,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:rS,meshmatcap_frag:sS,meshnormal_vert:oS,meshnormal_frag:aS,meshphong_vert:lS,meshphong_frag:uS,meshphysical_vert:cS,meshphysical_frag:fS,meshtoon_vert:dS,meshtoon_frag:hS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:vS,sprite_vert:_S,sprite_frag:xS},re={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rn},uv2Transform:{value:new Rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}}},Ln={basic:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:_t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:_t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:_t([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:_t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:_t([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:_t([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Rn},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:_t([re.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:_t([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:_t([re.lights,re.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ln.physical={uniforms:_t([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function yS(t,e,n,i,r,s){const o=new ye(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function g(p,h){let m=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cl)?(u===void 0&&(u=new Dn(new vo(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:ns(Ln.cube.uniforms),vertexShader:Ln.cube.vertexShader,fragmentShader:Ln.cube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||d!==v.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,d=v.version,f=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dn(new xf(2,2),new ti({name:"BackgroundMaterial",uniforms:ns(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:so,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,d=v.version,f=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){n.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:g}}function MS(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function d(F,q,V,X,P){let D=!1;if(o){const z=p(X,V,q);u!==z&&(u=z,g(u.object)),D=m(F,X,V,P),D&&v(F,X,V,P)}else{const z=q.wireframe===!0;(u.geometry!==X.id||u.program!==V.id||u.wireframe!==z)&&(u.geometry=X.id,u.program=V.id,u.wireframe=z,D=!0)}P!==null&&n.update(P,34963),(D||c)&&(c=!1,y(F,q,V,X),P!==null&&t.bindBuffer(34963,n.get(P).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,q,V){const X=V.wireframe===!0;let P=a[F.id];P===void 0&&(P={},a[F.id]=P);let D=P[q.id];D===void 0&&(D={},P[q.id]=D);let z=D[X];return z===void 0&&(z=h(f()),D[X]=z),z}function h(F){const q=[],V=[],X=[];for(let P=0;P<r;P++)q[P]=0,V[P]=0,X[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:V,attributeDivisors:X,object:F,attributes:{},index:null}}function m(F,q,V,X){const P=u.attributes,D=q.attributes;let z=0;const $=V.getAttributes();for(const W in $)if($[W].location>=0){const ae=P[W];let de=D[W];if(de===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(de=F.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;z++}return u.attributesNum!==z||u.index!==X}function v(F,q,V,X){const P={},D=q.attributes;let z=0;const $=V.getAttributes();for(const W in $)if($[W].location>=0){let ae=D[W];ae===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),P[W]=de,z++}u.attributes=P,u.attributesNum=z,u.index=X}function x(){const F=u.newAttributes;for(let q=0,V=F.length;q<V;q++)F[q]=0}function w(F){S(F,0)}function S(F,q){const V=u.newAttributes,X=u.enabledAttributes,P=u.attributeDivisors;V[F]=1,X[F]===0&&(t.enableVertexAttribArray(F),X[F]=1),P[F]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),P[F]=q)}function C(){const F=u.newAttributes,q=u.enabledAttributes;for(let V=0,X=q.length;V<X;V++)q[V]!==F[V]&&(t.disableVertexAttribArray(V),q[V]=0)}function A(F,q,V,X,P,D){i.isWebGL2===!0&&(V===5124||V===5125)?t.vertexAttribIPointer(F,q,V,P,D):t.vertexAttribPointer(F,q,V,X,P,D)}function y(F,q,V,X){if(i.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const P=X.attributes,D=V.getAttributes(),z=q.defaultAttributeValues;for(const $ in D){const W=D[$];if(W.location>=0){let Z=P[$];if(Z===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){const ae=Z.normalized,de=Z.itemSize,G=n.get(Z);if(G===void 0)continue;const Ie=G.buffer,Se=G.type,we=G.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,Oe=le.stride,Le=Z.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)S(W.location+_e,le.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<W.locationSize;_e++)w(W.location+_e);t.bindBuffer(34962,Ie);for(let _e=0;_e<W.locationSize;_e++)A(W.location+_e,de/W.locationSize,Se,ae,Oe*we,(Le+de/W.locationSize*_e)*we)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)S(W.location+le,Z.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<W.locationSize;le++)w(W.location+le);t.bindBuffer(34962,Ie);for(let le=0;le<W.locationSize;le++)A(W.location+le,de/W.locationSize,Se,ae,de*we,de/W.locationSize*le*we)}}else if(z!==void 0){const ae=z[$];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(W.location,ae);break;case 3:t.vertexAttrib3fv(W.location,ae);break;case 4:t.vertexAttrib4fv(W.location,ae);break;default:t.vertexAttrib1fv(W.location,ae)}}}}C()}function b(){ne();for(const F in a){const q=a[F];for(const V in q){const X=q[V];for(const P in X)_(X[P].object),delete X[P];delete q[V]}delete a[F]}}function I(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const V in q){const X=q[V];for(const P in X)_(X[P].object),delete X[P];delete q[V]}delete a[F.id]}function k(F){for(const q in a){const V=a[q];if(V[F.id]===void 0)continue;const X=V[F.id];for(const P in X)_(X[P].object),delete X[P];delete V[F.id]}}function ne(){K(),c=!0,u!==l&&(u=l,g(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:K,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function SS(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function wS(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),_=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),x=f>0,w=o||e.has("OES_texture_float"),S=x&&w,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:C}}function ES(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Oi,a=new Rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const _=d.length!==0||f||i!==0||r;return r=f,n=c(d,g,0),i=d.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const _=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,m=t.get(d);if(!r||_===null||_.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,x=v*4;let w=m.clippingState||null;l.value=w,w=c(_,f,x,g);for(let S=0;S!==x;++S)w[S]=n[S];m.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,_){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const m=g+p*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let x=0,w=g;x!==p;++x,w+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(h,w),h[w+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function TS(t){let e=new WeakMap;function n(o,a){return a===hc?o.mapping=Jr:a===pc&&(o.mapping=es),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Vx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class CS extends Sg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const kr=4,Th=[.125,.215,.35,.446,.526,.582],Vi=20,pu=new CS,Ch=new ye;let mu=null;const Bi=(1+Math.sqrt(5))/2,wr=1/Bi,bh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Bi,wr),new R(0,Bi,-wr),new R(wr,0,Bi),new R(-wr,0,Bi),new R(Bi,wr,0),new R(-Bi,wr,0)];class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){mu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu),e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:oo,format:mn,encoding:ir,depthBuffer:!1},r=Ah(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bS(s)),this._blurMaterial=LS(s,e,n)}return r}_compileMaterial(e){const n=new Dn(this._lodPlanes[0],e);this._renderer.compile(n,pu)}_sceneToCubeUV(e,n,i,r){const a=new Gt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Ch),c.toneMapping=Qn,c.autoClear=!1;const g=new vf({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new Dn(new vo,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Ch),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const x=this._cubeSize;ia(r,v*x,m>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ia(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(r-1)%bh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Dn(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Vi-1),p=s/_,h=isFinite(s)?1+Math.floor(c*p):Vi;h>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Vi}`);const m=[];let v=0;for(let A=0;A<Vi;++A){const y=A/p,b=Math.exp(-y*y/2);m.push(b),A===0?v+=b:A<h&&(v+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const w=this._sizeLods[r],S=3*w*(r>x-kr?r-x+kr:0),C=4*(this._cubeSize-w);ia(n,S,C,3*w,2*w),l.setRenderTarget(n),l.render(d,pu)}}function bS(t){const e=[],n=[],i=[];let r=t;const s=t-kr+1+Th.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-kr?l=Th[o-t+kr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,_=6,p=3,h=2,m=1,v=new Float32Array(p*_*g),x=new Float32Array(h*_*g),w=new Float32Array(m*_*g);for(let C=0;C<g;C++){const A=C%3*2/3-1,y=C>2?0:-1,b=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(b,p*_*C),x.set(f,h*_*C);const I=[C,C,C,C,C,C];w.set(I,m*_*C)}const S=new Di;S.setAttribute("position",new Nn(v,p)),S.setAttribute("uv",new Nn(x,h)),S.setAttribute("faceIndex",new Nn(w,m)),e.push(S),r>kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ah(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LS(t,e,n){const i=new Float32Array(Vi),r=new R(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ph(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Rh(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hc||l===pc,c=l===Jr||l===es;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Lh(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Lh(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RS(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const g=d.morphAttributes;for(const _ in g){const p=g[_];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(d){const f=[],g=d.index,_=d.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let x=0,w=v.length;x<w;x+=3){const S=v[x+0],C=v[x+1],A=v[x+2];f.push(S,C,C,A,A,S)}}else{const v=_.array;p=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const S=x+0,C=x+1,A=x+2;f.push(S,C,C,A,A,S)}}const h=new(pg(f)?Mg:yg)(f,1);h.version=p;const m=s.get(d);m&&e.remove(m),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function DS(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,_){if(_===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,f*l,_),n.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function IS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FS(t,e){return t[0]-e[0]}function NS(t,e){return Math.abs(e[1])-Math.abs(t[1])}function gu(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function zS(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new qe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let V=function(){F.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const w=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let I=0;w===!0&&(I=1),S===!0&&(I=2),C===!0&&(I=3);let k=c.attributes.position.count*I,ne=1;k>e.maxTextureSize&&(ne=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const K=new Float32Array(k*ne*4*h),F=new _g(K,k,ne,h);F.type=ji,F.needsUpdate=!0;const q=I*4;for(let X=0;X<h;X++){const P=A[X],D=y[X],z=b[X],$=k*ne*4*X;for(let W=0;W<P.count;W++){const Z=W*q;w===!0&&(o.fromBufferAttribute(P,W),P.normalized===!0&&gu(o,P),K[$+Z+0]=o.x,K[$+Z+1]=o.y,K[$+Z+2]=o.z,K[$+Z+3]=0),S===!0&&(o.fromBufferAttribute(D,W),D.normalized===!0&&gu(o,D),K[$+Z+4]=o.x,K[$+Z+5]=o.y,K[$+Z+6]=o.z,K[$+Z+7]=0),C===!0&&(o.fromBufferAttribute(z,W),z.normalized===!0&&gu(o,z),K[$+Z+8]=o.x,K[$+Z+9]=o.y,K[$+Z+10]=o.z,K[$+Z+11]=z.itemSize===4?o.w:1)}}m={count:h,texture:F,size:new Ae(k,ne)},s.set(c,m),c.addEventListener("dispose",V)}let v=0;for(let w=0;w<g.length;w++)v+=g[w];const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let S=0;S<p;S++)h[S]=[S,0];i[c.id]=h}for(let S=0;S<p;S++){const C=h[S];C[0]=S,C[1]=g[S]}h.sort(NS);for(let S=0;S<8;S++)S<p&&h[S][1]?(a[S][0]=h[S][0],a[S][1]=h[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(FS);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=a[S],A=C[0],y=C[1];A!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[A]&&c.setAttribute("morphTarget"+S,m[A]),v&&c.getAttribute("morphNormal"+S)!==v[A]&&c.setAttribute("morphNormal"+S,v[A]),r[S]=y,x+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const w=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",w),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function kS(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Tg=new nn,Cg=new _g,bg=new Tx,Lg=new wg,Dh=[],Ih=[],Fh=new Float32Array(16),Nh=new Float32Array(9),zh=new Float32Array(4);function us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dh[r];if(s===void 0&&(s=new Float32Array(r),Dh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dl(t,e){let n=Ih[e];n===void 0&&(n=new Int32Array(e),Ih[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function US(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function OS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function BS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function VS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function GS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;zh.set(i),t.uniformMatrix2fv(this.addr,!1,zh),bt(n,i)}}function HS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Nh.set(i),t.uniformMatrix3fv(this.addr,!1,Nh),bt(n,i)}}function WS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Fh.set(i),t.uniformMatrix4fv(this.addr,!1,Fh),bt(n,i)}}function jS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XS(t,e){const n=this.cache;Ct(n,e)||(t.uniform2iv(this.addr,e),bt(n,e))}function qS(t,e){const n=this.cache;Ct(n,e)||(t.uniform3iv(this.addr,e),bt(n,e))}function $S(t,e){const n=this.cache;Ct(n,e)||(t.uniform4iv(this.addr,e),bt(n,e))}function YS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZS(t,e){const n=this.cache;Ct(n,e)||(t.uniform2uiv(this.addr,e),bt(n,e))}function QS(t,e){const n=this.cache;Ct(n,e)||(t.uniform3uiv(this.addr,e),bt(n,e))}function KS(t,e){const n=this.cache;Ct(n,e)||(t.uniform4uiv(this.addr,e),bt(n,e))}function JS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Tg,r)}function e1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bg,r)}function t1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lg,r)}function n1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cg,r)}function i1(t){switch(t){case 5126:return US;case 35664:return OS;case 35665:return BS;case 35666:return VS;case 35674:return GS;case 35675:return HS;case 35676:return WS;case 5124:case 35670:return jS;case 35667:case 35671:return XS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return YS;case 36294:return ZS;case 36295:return QS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(t,e){t.uniform1fv(this.addr,e)}function s1(t,e){const n=us(e,this.size,2);t.uniform2fv(this.addr,n)}function o1(t,e){const n=us(e,this.size,3);t.uniform3fv(this.addr,n)}function a1(t,e){const n=us(e,this.size,4);t.uniform4fv(this.addr,n)}function l1(t,e){const n=us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function u1(t,e){const n=us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function c1(t,e){const n=us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function f1(t,e){t.uniform1iv(this.addr,e)}function d1(t,e){t.uniform2iv(this.addr,e)}function h1(t,e){t.uniform3iv(this.addr,e)}function p1(t,e){t.uniform4iv(this.addr,e)}function m1(t,e){t.uniform1uiv(this.addr,e)}function g1(t,e){t.uniform2uiv(this.addr,e)}function v1(t,e){t.uniform3uiv(this.addr,e)}function _1(t,e){t.uniform4uiv(this.addr,e)}function x1(t,e,n){const i=e.length,r=dl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Tg,r[s])}function y1(t,e,n){const i=e.length,r=dl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||bg,r[s])}function M1(t,e,n){const i=e.length,r=dl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||Lg,r[s])}function S1(t,e,n){const i=e.length,r=dl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Cg,r[s])}function w1(t){switch(t){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return u1;case 35676:return c1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return h1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return S1}}class E1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=i1(n.type)}}class T1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=w1(n.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function kh(t,e){t.seq.push(e),t.map[e.id]=e}function b1(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),o=vu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){kh(n,u===void 0?new E1(a,t,e):new T1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new C1(a),kh(n,d)),n=d}}}class va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);b1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Uh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let L1=0;function A1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function P1(t){switch(t){case ir:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Oh(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+A1(t.getShaderSource(e),o)}else return r}function R1(t,e){const n=P1(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function D1(t,e){let n;switch(e){case z_:n="Linear";break;case k_:n="Reinhard";break;case U_:n="OptimizedCineon";break;case O_:n="ACESFilmic";break;case B_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function I1(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function F1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function N1(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ps(t){return t!==""}function Bh(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(t){return t.replace(z1,k1)}function k1(t,e){const n=Ce[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return xc(n)}const U1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,O1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(t){return t.replace(O1,Ag).replace(U1,B1)}function B1(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ag(t,e,n,i)}function Ag(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function G1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case es:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function W1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case F_:e="ENVMAP_BLENDING_MIX";break;case N_:e="ENVMAP_BLENDING_ADD";break}return e}function j1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function X1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=V1(n),u=G1(n),c=H1(n),d=W1(n),f=j1(n),g=n.isWebGL2?"":I1(n),_=F1(s),p=r.createProgram();let h,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[_].filter(Ps).join(`
`),h.length>0&&(h+=`
`),m=[g,_].filter(Ps).join(`
`),m.length>0&&(m+=`
`)):(h=[Hh(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),m=[g,Hh(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qn?"#define TONE_MAPPING":"",n.toneMapping!==Qn?Ce.tonemapping_pars_fragment:"",n.toneMapping!==Qn?D1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,R1("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ps).join(`
`)),o=xc(o),o=Bh(o,n),o=Vh(o,n),a=xc(a),a=Bh(a,n),a=Vh(a,n),o=Gh(o),a=Gh(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+h+o,w=v+m+a,S=Uh(r,35633,x),C=Uh(r,35632,w);if(r.attachShader(p,S),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(S).trim(),k=r.getShaderInfoLog(C).trim();let ne=!0,K=!0;if(r.getProgramParameter(p,35714)===!1){ne=!1;const F=Oh(r,S,"vertex"),q=Oh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+F+`
`+q)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(I===""||k==="")&&(K=!1);K&&(this.diagnostics={runnable:ne,programLog:b,vertexShader:{log:I,prefix:h},fragmentShader:{log:k,prefix:m}})}r.deleteShader(S),r.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new va(r,p)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=N1(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let q1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new Y1(e);n.set(e,i)}return n.get(e)}}class Y1{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}}function Z1(t,e,n,i,r,s,o){const a=new xg,l=new $1,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,b,I,k,ne){const K=k.fog,F=ne.geometry,q=y.isMeshStandardMaterial?k.environment:null,V=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),X=!!V&&V.mapping===cl?V.image.height:null,P=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const D=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,z=D!==void 0?D.length:0;let $=0;F.morphAttributes.position!==void 0&&($=1),F.morphAttributes.normal!==void 0&&($=2),F.morphAttributes.color!==void 0&&($=3);let W,Z,ae,de;if(P){const Oe=Ln[P];W=Oe.vertexShader,Z=Oe.fragmentShader}else W=y.vertexShader,Z=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const G=t.getRenderTarget(),Ie=y.alphaTest>0,Se=y.clearcoat>0,we=y.iridescence>0;return{isWebGL2:c,shaderID:P,shaderName:y.type,vertexShader:W,fragmentShader:Z,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?t.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:ir,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:X,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===sx,tangentSpaceNormalMap:y.normalMapType===os,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===je,clearcoat:Se,clearcoatMap:Se&&!!y.clearcoatMap,clearcoatRoughnessMap:Se&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!y.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!y.iridescenceMap,iridescenceThicknessMap:we&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Wr,alphaMap:!!y.alphaMap,alphaTest:Ie,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!K,useFog:y.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ne.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Qn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kr,flipSided:y.side===vn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)b.push(I),b.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(b,y),v(b,y),b.push(t.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),b.fog&&a.enable(33),y.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.morphTargets&&a.enable(4),b.morphNormals&&a.enable(5),b.morphColors&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),b.decodeVideoTexture&&a.enable(22),b.opaque&&a.enable(23),y.push(a.mask)}function x(y){const b=_[y.type];let I;if(b){const k=Ln[b];I=kx.clone(k.uniforms)}else I=y.uniforms;return I}function w(y,b){let I;for(let k=0,ne=u.length;k<ne;k++){const K=u[k];if(K.cacheKey===b){I=K,++I.usedTimes;break}}return I===void 0&&(I=new X1(t,b,y,s),u.push(I)),I}function S(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:A}}function Q1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function K1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,_,p,h){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:p,group:h},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=p,m.group=h),e++,m}function a(d,f,g,_,p,h){const m=o(d,f,g,_,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,_,p,h){const m=o(d,f,g,_,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||K1),i.length>1&&i.sort(f||Wh),r.length>1&&r.sort(f||Wh)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function J1(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new jh,t.set(i,[s])):r>=t.get(i).length?(s=new jh,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function ew(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new ye};break;case"SpotLight":n={position:new R,direction:new R,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nw=0;function iw(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function rw(t,e){const n=new ew,i=tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,o=new ot,a=new ot;function l(c,d){let f=0,g=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let p=0,h=0,m=0,v=0,x=0,w=0,S=0,C=0;c.sort(iw);const A=d!==!0?Math.PI:1;for(let b=0,I=c.length;b<I;b++){const k=c[b],ne=k.color,K=k.intensity,F=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=ne.r*K*A,g+=ne.g*K*A,_+=ne.b*K*A;else if(k.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(k.sh.coefficients[V],K);else if(k.isDirectionalLight){const V=n.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const X=k.shadow,P=i.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.directionalShadow[p]=P,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=k.shadow.matrix,w++}r.directional[p]=V,p++}else if(k.isSpotLight){const V=n.get(k);if(V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(ne).multiplyScalar(K*A),V.distance=F,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,k.castShadow){const X=k.shadow,P=i.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.spotShadow[m]=P,r.spotShadowMap[m]=q,r.spotShadowMatrix[m]=k.shadow.matrix,C++}r.spot[m]=V,m++}else if(k.isRectAreaLight){const V=n.get(k);V.color.copy(ne).multiplyScalar(K),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=V,v++}else if(k.isPointLight){const V=n.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*A),V.distance=k.distance,V.decay=k.decay,k.castShadow){const X=k.shadow,P=i.get(k);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,r.pointShadow[h]=P,r.pointShadowMap[h]=q,r.pointShadowMatrix[h]=k.shadow.matrix,S++}r.point[h]=V,h++}else if(k.isHemisphereLight){const V=n.get(k);V.skyColor.copy(k.color).multiplyScalar(K*A),V.groundColor.copy(k.groundColor).multiplyScalar(K*A),r.hemi[x]=V,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==m||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==w||y.numPointShadows!==S||y.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=C,y.directionalLength=p,y.pointLength=h,y.spotLength=m,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=w,y.numPointShadows=S,y.numSpotShadows=C,r.version=nw++)}function u(c,d){let f=0,g=0,_=0,p=0,h=0;const m=d.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const w=c[v];if(w.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(w.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),_++}else if(w.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){const S=r.hemi[h];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Xh(t,e){const n=new rw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function sw(t,e){let n=new WeakMap;function i(s,o){let a;return n.has(s)===!1?(a=new Xh(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Xh(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class Pg extends pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rg extends pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lw(t,e,n){let i=new _f;const r=new Ae,s=new Ae,o=new qe,a=new Pg({depthPacking:rx}),l=new Rg,u={},c=n.maxTextureSize,d={0:vn,1:so,2:Kr},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:ow,fragmentShader:aw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Dn(_,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug,this.render=function(w,S,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ei),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let k=0,ne=w.length;k<ne;k++){const K=w[k],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const q=F.getFrameExtents();if(r.multiply(q),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===As&&(F.map=new Ti(r.x,r.y),F.map.texture.name=K.name+".shadowMap",F.mapPass=new Ti(r.x,r.y),F.camera.updateProjectionMatrix()),F.map===null){const X={minFilter:Dt,magFilter:Dt,format:mn};F.map=new Ti(r.x,r.y,X),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const V=F.getViewportCount();for(let X=0;X<V;X++){const P=F.getViewport(X);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),I.viewport(o),F.updateMatrices(K,X),i=F.getFrustum(),x(S,C,F.camera,K,this.type)}!F.isPointLightShadow&&this.type===As&&m(F,C),F.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(A,y,b)};function m(w,S){const C=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(S,null,C,f,p,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(S,null,C,g,p,null)}function v(w,S,C,A,y,b){let I=null;const k=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0?I=k:I=C.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ne=I.uuid,K=S.uuid;let F=u[ne];F===void 0&&(F={},u[ne]=F);let q=F[K];q===void 0&&(q=I.clone(),F[K]=q),I=q}return I.visible=S.visible,I.wireframe=S.wireframe,b===As?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:d[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=A,I.farDistance=y),I}function x(w,S,C,A,y){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===As)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const k=e.update(w),ne=w.material;if(Array.isArray(ne)){const K=k.groups;for(let F=0,q=K.length;F<q;F++){const V=K[F],X=ne[V.materialIndex];if(X&&X.visible){const P=v(w,X,A,C.near,C.far,y);t.renderBufferDirect(C,null,k,P,w,V)}}}else if(ne.visible){const K=v(w,ne,A,C.near,C.far,y);t.renderBufferDirect(C,null,k,K,w,null)}}const I=w.children;for(let k=0,ne=I.length;k<ne;k++)x(I[k],S,C,A,y)}}function uw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ie=new qe;let te=null;const pe=new qe(0,0,0,0);return{setMask:function(ce){te!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),te=ce)},setLocked:function(ce){L=ce},setClear:function(ce,ge,J,ve,Ne){Ne===!0&&(ce*=ve,ge*=ve,J*=ve),ie.set(ce,ge,J,ve),pe.equals(ie)===!1&&(t.clearColor(ce,ge,J,ve),pe.copy(ie))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function s(){let L=!1,ie=null,te=null,pe=null;return{setTest:function(ce){ce?de(2929):G(2929)},setMask:function(ce){ie!==ce&&!L&&(t.depthMask(ce),ie=ce)},setFunc:function(ce){if(te!==ce){if(ce)switch(ce){case b_:t.depthFunc(512);break;case L_:t.depthFunc(519);break;case A_:t.depthFunc(513);break;case dc:t.depthFunc(515);break;case P_:t.depthFunc(514);break;case R_:t.depthFunc(518);break;case D_:t.depthFunc(516);break;case I_:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);te=ce}},setLocked:function(ce){L=ce},setClear:function(ce){pe!==ce&&(t.clearDepth(ce),pe=ce)},reset:function(){L=!1,ie=null,te=null,pe=null}}}function o(){let L=!1,ie=null,te=null,pe=null,ce=null,ge=null,J=null,ve=null,Ne=null;return{setTest:function(ze){L||(ze?de(2960):G(2960))},setMask:function(ze){ie!==ze&&!L&&(t.stencilMask(ze),ie=ze)},setFunc:function(ze,Mt,yn){(te!==ze||pe!==Mt||ce!==yn)&&(t.stencilFunc(ze,Mt,yn),te=ze,pe=Mt,ce=yn)},setOp:function(ze,Mt,yn){(ge!==ze||J!==Mt||ve!==yn)&&(t.stencilOp(ze,Mt,yn),ge=ze,J=Mt,ve=yn)},setLocked:function(ze){L=ze},setClear:function(ze){Ne!==ze&&(t.clearStencil(ze),Ne=ze)},reset:function(){L=!1,ie=null,te=null,pe=null,ce=null,ge=null,J=null,ve=null,Ne=null}}}const a=new r,l=new s,u=new o;let c={},d={},f=new WeakMap,g=[],_=null,p=!1,h=null,m=null,v=null,x=null,w=null,S=null,C=null,A=!1,y=null,b=null,I=null,k=null,ne=null;const K=t.getParameter(35661);let F=!1,q=0;const V=t.getParameter(7938);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=q>=2);let X=null,P={};const D=t.getParameter(3088),z=t.getParameter(2978),$=new qe().fromArray(D),W=new qe().fromArray(z);function Z(L,ie,te){const pe=new Uint8Array(4),ce=t.createTexture();t.bindTexture(L,ce),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let ge=0;ge<te;ge++)t.texImage2D(ie+ge,0,6408,1,1,0,6408,5121,pe);return ce}const ae={};ae[3553]=Z(3553,3553,1),ae[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(2929),l.setFunc(dc),mt(!1),Pt(zd),de(2884),Le(Ei);function de(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function G(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function Ie(L,ie){return d[L]!==ie?(t.bindFramebuffer(L,ie),d[L]=ie,i&&(L===36009&&(d[36160]=ie),L===36160&&(d[36009]=ie)),!0):!1}function Se(L,ie){let te=g,pe=!1;if(L)if(te=f.get(ie),te===void 0&&(te=[],f.set(ie,te)),L.isWebGLMultipleRenderTargets){const ce=L.texture;if(te.length!==ce.length||te[0]!==36064){for(let ge=0,J=ce.length;ge<J;ge++)te[ge]=36064+ge;te.length=ce.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function we(L){return _!==L?(t.useProgram(L),_=L,!0):!1}const le={[Er]:32774,[g_]:32778,[v_]:32779};if(i)le[Bd]=32775,le[Vd]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(le[Bd]=L.MIN_EXT,le[Vd]=L.MAX_EXT)}const Oe={[__]:0,[x_]:1,[y_]:768,[cg]:770,[C_]:776,[E_]:774,[S_]:772,[M_]:769,[fg]:771,[T_]:775,[w_]:773};function Le(L,ie,te,pe,ce,ge,J,ve){if(L===Ei){p===!0&&(G(3042),p=!1);return}if(p===!1&&(de(3042),p=!0),L!==m_){if(L!==h||ve!==A){if((m!==Er||w!==Er)&&(t.blendEquation(32774),m=Er,w=Er),ve)switch(L){case Wr:t.blendFuncSeparate(1,771,1,771);break;case kd:t.blendFunc(1,1);break;case Ud:t.blendFuncSeparate(0,769,0,1);break;case Od:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wr:t.blendFuncSeparate(770,771,1,771);break;case kd:t.blendFunc(770,1);break;case Ud:t.blendFuncSeparate(0,769,0,1);break;case Od:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,x=null,S=null,C=null,h=L,A=ve}return}ce=ce||ie,ge=ge||te,J=J||pe,(ie!==m||ce!==w)&&(t.blendEquationSeparate(le[ie],le[ce]),m=ie,w=ce),(te!==v||pe!==x||ge!==S||J!==C)&&(t.blendFuncSeparate(Oe[te],Oe[pe],Oe[ge],Oe[J]),v=te,x=pe,S=ge,C=J),h=L,A=null}function _e(L,ie){L.side===Kr?G(2884):de(2884);let te=L.side===vn;ie&&(te=!te),mt(te),L.blending===Wr&&L.transparent===!1?Le(Ei):Le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const pe=L.stencilWrite;u.setTest(pe),pe&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?de(32926):G(32926)}function mt(L){y!==L&&(L?t.frontFace(2304):t.frontFace(2305),y=L)}function Pt(L){L!==f_?(de(2884),L!==b&&(L===zd?t.cullFace(1029):L===d_?t.cullFace(1028):t.cullFace(1032))):G(2884),b=L}function Ut(L){L!==I&&(F&&t.lineWidth(L),I=L)}function xn(L,ie,te){L?(de(32823),(k!==ie||ne!==te)&&(t.polygonOffset(ie,te),k=ie,ne=te)):G(32823)}function ut(L){L?de(3089):G(3089)}function Be(L){L===void 0&&(L=33984+K-1),X!==L&&(t.activeTexture(L),X=L)}function kn(L,ie){X===null&&Be();let te=P[X];te===void 0&&(te={type:void 0,texture:void 0},P[X]=te),(te.type!==L||te.texture!==ie)&&(t.bindTexture(L,ie||ae[L]),te.type=L,te.texture=ie)}function Un(){const L=P[X];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){$.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),$.copy(L))}function fe(L){W.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function ue(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},X=null,P={},d={},f=new WeakMap,g=[],_=null,p=!1,h=null,m=null,v=null,x=null,w=null,S=null,C=null,A=!1,y=null,b=null,I=null,k=null,ne=null,$.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:de,disable:G,bindFramebuffer:Ie,drawBuffers:Se,useProgram:we,setBlending:Le,setMaterial:_e,setFlipSided:mt,setCullFace:Pt,setLineWidth:Ut,setPolygonOffset:xn,setScissorTest:ut,activeTexture:Be,bindTexture:kn,unbindTexture:Un,compressedTexImage2D:T,texImage2D:xe,texImage3D:B,texStorage2D:ee,texStorage3D:se,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:Q,scissor:he,viewport:fe,reset:ue}}function cw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return m?new OffscreenCanvas(T,M):ao("canvas")}function x(T,M,H,Q){let ee=1;if((T.width>Q||T.height>Q)&&(ee=Q/Math.max(T.width,T.height)),ee<1||M===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const se=M?Wa:Math.floor,xe=se(ee*T.width),B=se(ee*T.height);p===void 0&&(p=v(xe,B));const he=H?v(xe,B):p;return he.width=xe,he.height=B,he.getContext("2d").drawImage(T,0,0,xe,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+B+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function w(T){return _c(T.width)&&_c(T.height)}function S(T){return a?!1:T.wrapS!==hn||T.wrapT!==hn||T.minFilter!==Dt&&T.minFilter!==Zt}function C(T,M){return T.generateMipmaps&&M&&T.minFilter!==Dt&&T.minFilter!==Zt}function A(T){t.generateMipmap(T)}function y(T,M,H,Q,ee=!1){if(a===!1)return M;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=M;return M===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),M===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),M===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=Q===je&&ee===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(T,M,H){return C(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function I(T){return T===Dt||T===Gd||T===Hd?9728:9729}function k(T){const M=T.target;M.removeEventListener("dispose",k),K(M),M.isVideoTexture&&_.delete(M)}function ne(T){const M=T.target;M.removeEventListener("dispose",ne),q(M)}function K(T){const M=i.get(T);if(M.__webglInit===void 0)return;const H=T.source,Q=h.get(H);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(T),Object.keys(Q).length===0&&h.delete(H)}i.remove(T)}function F(T){const M=i.get(T);t.deleteTexture(M.__webglTexture);const H=T.source,Q=h.get(H);delete Q[M.__cacheKey],o.memory.textures--}function q(T){const M=T.texture,H=i.get(T),Q=i.get(M);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)t.deleteFramebuffer(H.__webglFramebuffer[ee]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ee]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,se=M.length;ee<se;ee++){const xe=i.get(M[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(T)}let V=0;function X(){V=0}function P(){const T=V;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),V+=1,T}function D(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function z(T,M){const H=i.get(T);if(T.isVideoTexture&&kn(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(H,T,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,H.__webglTexture)}function $(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Se(H,T,M);return}n.activeTexture(33984+M),n.bindTexture(35866,H.__webglTexture)}function W(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Se(H,T,M);return}n.activeTexture(33984+M),n.bindTexture(32879,H.__webglTexture)}function Z(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){we(H,T,M);return}n.activeTexture(33984+M),n.bindTexture(34067,H.__webglTexture)}const ae={[mc]:10497,[hn]:33071,[gc]:33648},de={[Dt]:9728,[Gd]:9984,[Hd]:9986,[Zt]:9729,[V_]:9985,[fl]:9987};function G(T,M,H){if(H?(t.texParameteri(T,10242,ae[M.wrapS]),t.texParameteri(T,10243,ae[M.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,ae[M.wrapR]),t.texParameteri(T,10240,de[M.magFilter]),t.texParameteri(T,10241,de[M.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(M.wrapS!==hn||M.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,I(M.magFilter)),t.texParameteri(T,10241,I(M.minFilter)),M.minFilter!==Dt&&M.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===oo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ie(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",k));const Q=M.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const se=D(M);if(se!==T.__cacheKey){ee[se]===void 0&&(ee[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[se].usedTimes++;const xe=ee[T.__cacheKey];xe!==void 0&&(ee[T.__cacheKey].usedTimes--,xe.usedTimes===0&&F(M)),T.__cacheKey=se,T.__webglTexture=ee[se].texture}return H}function Se(T,M,H){let Q=3553;M.isDataArrayTexture&&(Q=35866),M.isData3DTexture&&(Q=32879);const ee=Ie(T,M),se=M.source;if(n.activeTexture(33984+H),n.bindTexture(Q,T.__webglTexture),se.version!==se.__currentVersion||ee===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const xe=S(M)&&w(M.image)===!1;let B=x(M.image,xe,!1,c);B=Un(M,B);const he=w(B)||a,fe=s.convert(M.format,M.encoding);let ue=s.convert(M.type),L=y(M.internalFormat,fe,ue,M.encoding,M.isVideoTexture);G(Q,M,he);let ie;const te=M.mipmaps,pe=a&&M.isVideoTexture!==!0,ce=se.__currentVersion===void 0||ee===!0,ge=b(M,B,he);if(M.isDepthTexture)L=6402,a?M.type===ji?L=36012:M.type===Wi?L=33190:M.type===jr?L=35056:L=33189:M.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Yi&&L===6402&&M.type!==hg&&M.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Wi,ue=s.convert(M.type)),M.format===ts&&L===6402&&(L=34041,M.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=jr,ue=s.convert(M.type))),ce&&(pe?n.texStorage2D(3553,1,L,B.width,B.height):n.texImage2D(3553,0,L,B.width,B.height,0,fe,ue,null));else if(M.isDataTexture)if(te.length>0&&he){pe&&ce&&n.texStorage2D(3553,ge,L,te[0].width,te[0].height);for(let J=0,ve=te.length;J<ve;J++)ie=te[J],pe?n.texSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ue,ie.data):n.texImage2D(3553,J,L,ie.width,ie.height,0,fe,ue,ie.data);M.generateMipmaps=!1}else pe?(ce&&n.texStorage2D(3553,ge,L,B.width,B.height),n.texSubImage2D(3553,0,0,0,B.width,B.height,fe,ue,B.data)):n.texImage2D(3553,0,L,B.width,B.height,0,fe,ue,B.data);else if(M.isCompressedTexture){pe&&ce&&n.texStorage2D(3553,ge,L,te[0].width,te[0].height);for(let J=0,ve=te.length;J<ve;J++)ie=te[J],M.format!==mn?fe!==null?pe?n.compressedTexSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ie.data):n.compressedTexImage2D(3553,J,L,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?n.texSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ue,ie.data):n.texImage2D(3553,J,L,ie.width,ie.height,0,fe,ue,ie.data)}else if(M.isDataArrayTexture)pe?(ce&&n.texStorage3D(35866,ge,L,B.width,B.height,B.depth),n.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,fe,ue,B.data)):n.texImage3D(35866,0,L,B.width,B.height,B.depth,0,fe,ue,B.data);else if(M.isData3DTexture)pe?(ce&&n.texStorage3D(32879,ge,L,B.width,B.height,B.depth),n.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,fe,ue,B.data)):n.texImage3D(32879,0,L,B.width,B.height,B.depth,0,fe,ue,B.data);else if(M.isFramebufferTexture){if(ce)if(pe)n.texStorage2D(3553,ge,L,B.width,B.height);else{let J=B.width,ve=B.height;for(let Ne=0;Ne<ge;Ne++)n.texImage2D(3553,Ne,L,J,ve,0,fe,ue,null),J>>=1,ve>>=1}}else if(te.length>0&&he){pe&&ce&&n.texStorage2D(3553,ge,L,te[0].width,te[0].height);for(let J=0,ve=te.length;J<ve;J++)ie=te[J],pe?n.texSubImage2D(3553,J,0,0,fe,ue,ie):n.texImage2D(3553,J,L,fe,ue,ie);M.generateMipmaps=!1}else pe?(ce&&n.texStorage2D(3553,ge,L,B.width,B.height),n.texSubImage2D(3553,0,0,0,fe,ue,B)):n.texImage2D(3553,0,L,fe,ue,B);C(M,he)&&A(Q),se.__currentVersion=se.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function we(T,M,H){if(M.image.length!==6)return;const Q=Ie(T,M),ee=M.source;if(n.activeTexture(33984+H),n.bindTexture(34067,T.__webglTexture),ee.version!==ee.__currentVersion||Q===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const se=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,B=[];for(let J=0;J<6;J++)!se&&!xe?B[J]=x(M.image[J],!1,!0,u):B[J]=xe?M.image[J].image:M.image[J],B[J]=Un(M,B[J]);const he=B[0],fe=w(he)||a,ue=s.convert(M.format,M.encoding),L=s.convert(M.type),ie=y(M.internalFormat,ue,L,M.encoding),te=a&&M.isVideoTexture!==!0,pe=ee.__currentVersion===void 0||Q===!0;let ce=b(M,he,fe);G(34067,M,fe);let ge;if(se){te&&pe&&n.texStorage2D(34067,ce,ie,he.width,he.height);for(let J=0;J<6;J++){ge=B[J].mipmaps;for(let ve=0;ve<ge.length;ve++){const Ne=ge[ve];M.format!==mn?ue!==null?te?n.compressedTexSubImage2D(34069+J,ve,0,0,Ne.width,Ne.height,ue,Ne.data):n.compressedTexImage2D(34069+J,ve,ie,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?n.texSubImage2D(34069+J,ve,0,0,Ne.width,Ne.height,ue,L,Ne.data):n.texImage2D(34069+J,ve,ie,Ne.width,Ne.height,0,ue,L,Ne.data)}}}else{ge=M.mipmaps,te&&pe&&(ge.length>0&&ce++,n.texStorage2D(34067,ce,ie,B[0].width,B[0].height));for(let J=0;J<6;J++)if(xe){te?n.texSubImage2D(34069+J,0,0,0,B[J].width,B[J].height,ue,L,B[J].data):n.texImage2D(34069+J,0,ie,B[J].width,B[J].height,0,ue,L,B[J].data);for(let ve=0;ve<ge.length;ve++){const ze=ge[ve].image[J].image;te?n.texSubImage2D(34069+J,ve+1,0,0,ze.width,ze.height,ue,L,ze.data):n.texImage2D(34069+J,ve+1,ie,ze.width,ze.height,0,ue,L,ze.data)}}else{te?n.texSubImage2D(34069+J,0,0,0,ue,L,B[J]):n.texImage2D(34069+J,0,ie,ue,L,B[J]);for(let ve=0;ve<ge.length;ve++){const Ne=ge[ve];te?n.texSubImage2D(34069+J,ve+1,0,0,ue,L,Ne.image[J]):n.texImage2D(34069+J,ve+1,ie,ue,L,Ne.image[J])}}}C(M,fe)&&A(34067),ee.__currentVersion=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function le(T,M,H,Q,ee){const se=s.convert(H.format,H.encoding),xe=s.convert(H.type),B=y(H.internalFormat,se,xe,H.encoding);i.get(M).__hasExternalTextures||(ee===32879||ee===35866?n.texImage3D(ee,0,B,M.width,M.height,M.depth,0,se,xe,null):n.texImage2D(ee,0,B,M.width,M.height,0,se,xe,null)),n.bindFramebuffer(36160,T),Be(M)?f.framebufferTexture2DMultisampleEXT(36160,Q,ee,i.get(H).__webglTexture,0,ut(M)):t.framebufferTexture2D(36160,Q,ee,i.get(H).__webglTexture,0),n.bindFramebuffer(36160,null)}function Oe(T,M,H){if(t.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let Q=33189;if(H||Be(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ji?Q=36012:ee.type===Wi&&(Q=33190));const se=ut(M);Be(M)?f.renderbufferStorageMultisampleEXT(36161,se,Q,M.width,M.height):t.renderbufferStorageMultisample(36161,se,Q,M.width,M.height)}else t.renderbufferStorage(36161,Q,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const Q=ut(M);H&&Be(M)===!1?t.renderbufferStorageMultisample(36161,Q,35056,M.width,M.height):Be(M)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<Q.length;ee++){const se=Q[ee],xe=s.convert(se.format,se.encoding),B=s.convert(se.type),he=y(se.internalFormat,xe,B,se.encoding),fe=ut(M);H&&Be(M)===!1?t.renderbufferStorageMultisample(36161,fe,he,M.width,M.height):Be(M)?f.renderbufferStorageMultisampleEXT(36161,fe,he,M.width,M.height):t.renderbufferStorage(36161,he,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function Le(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ee=ut(M);if(M.depthTexture.format===Yi)Be(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):t.framebufferTexture2D(36160,36096,3553,Q,0);else if(M.depthTexture.format===ts)Be(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):t.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function _e(T){const M=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(36160,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),Oe(M.__webglDepthbuffer[Q],T,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Oe(M.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function mt(T,M,H){const Q=i.get(T);M!==void 0&&le(Q.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&_e(T)}function Pt(T){const M=T.texture,H=i.get(T),Q=i.get(M);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,xe=w(T)||a;if(ee){H.__webglFramebuffer=[];for(let B=0;B<6;B++)H.__webglFramebuffer[B]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),se)if(r.drawBuffers){const B=T.texture;for(let he=0,fe=B.length;he<fe;he++){const ue=i.get(B[he]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Be(T)===!1){const B=se?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let he=0;he<B.length;he++){const fe=B[he];H.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(36161,H.__webglColorRenderbuffer[he]);const ue=s.convert(fe.format,fe.encoding),L=s.convert(fe.type),ie=y(fe.internalFormat,ue,L,fe.encoding),te=ut(T);t.renderbufferStorageMultisample(36161,te,ie,T.width,T.height),t.framebufferRenderbuffer(36160,36064+he,36161,H.__webglColorRenderbuffer[he])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(ee){n.bindTexture(34067,Q.__webglTexture),G(34067,M,xe);for(let B=0;B<6;B++)le(H.__webglFramebuffer[B],T,M,36064,34069+B);C(M,xe)&&A(34067),n.unbindTexture()}else if(se){const B=T.texture;for(let he=0,fe=B.length;he<fe;he++){const ue=B[he],L=i.get(ue);n.bindTexture(3553,L.__webglTexture),G(3553,ue,xe),le(H.__webglFramebuffer,T,ue,36064+he,3553),C(ue,xe)&&A(3553)}n.unbindTexture()}else{let B=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?B=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(B,Q.__webglTexture),G(B,M,xe),le(H.__webglFramebuffer,T,M,36064,B),C(M,xe)&&A(B),n.unbindTexture()}T.depthBuffer&&_e(T)}function Ut(T){const M=w(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,ee=H.length;Q<ee;Q++){const se=H[Q];if(C(se,M)){const xe=T.isWebGLCubeRenderTarget?34067:3553,B=i.get(se).__webglTexture;n.bindTexture(xe,B),A(xe),n.unbindTexture()}}}function xn(T){if(a&&T.samples>0&&Be(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,Q=T.height;let ee=16384;const se=[],xe=T.stencilBuffer?33306:36096,B=i.get(T),he=T.isWebGLMultipleRenderTargets===!0;if(he)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,null),n.bindFramebuffer(36160,B.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,null,0);n.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,B.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){se.push(36064+fe),T.depthBuffer&&se.push(xe);const ue=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(ue===!1&&(T.depthBuffer&&(ee|=256),T.stencilBuffer&&(ee|=1024)),he&&t.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[fe]),ue===!0&&(t.invalidateFramebuffer(36008,[xe]),t.invalidateFramebuffer(36009,[xe])),he){const L=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,L,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,9728),g&&t.invalidateFramebuffer(36008,se)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),he)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,B.__webglColorRenderbuffer[fe]);const ue=i.get(M[fe]).__webglTexture;n.bindFramebuffer(36160,B.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,ue,0)}n.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function ut(T){return Math.min(d,T.samples)}function Be(T){const M=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kn(T){const M=o.render.frame;_.get(T)!==M&&(_.set(T,M),T.update())}function Un(T,M){const H=T.encoding,Q=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===vc||H!==ir&&(H===je?a===!1?e.has("EXT_sRGB")===!0&&Q===mn?(T.format=vc,T.minFilter=Zt,T.generateMipmaps=!1):M=gg.sRGBToLinear(M):(Q!==mn||ee!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=P,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=mt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Be}function fw(t,e,n){const i=n.isWebGL2;function r(s,o){let a;if(s===nr)return 5121;if(s===j_)return 32819;if(s===X_)return 32820;if(s===G_)return 5120;if(s===H_)return 5122;if(s===hg)return 5123;if(s===W_)return 5124;if(s===Wi)return 5125;if(s===ji)return 5126;if(s===oo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===q_)return 6406;if(s===mn)return 6408;if(s===Y_)return 6409;if(s===Z_)return 6410;if(s===Yi)return 6402;if(s===ts)return 34041;if(s===Q_)return 6403;if(s===$_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===vc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===K_)return 36244;if(s===J_)return 33319;if(s===ex)return 33320;if(s===tx)return 36249;if(s===Gl||s===Hl||s===Wl||s===jl)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Gl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Gl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===jd||s===Xd||s===qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$d||s===Yd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$d)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yd)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zd||s===Qd||s===Kd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zd)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jd)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===th)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ih)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ah)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ch)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ch)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===jr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class dw extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hw={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred")if(a!==null&&(r=n.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hw))),u&&e.hand){o=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new ra;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class pw extends nn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Yi,c!==Yi&&c!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Yi&&(i=Wi),i===void 0&&c===ts&&(i=jr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}class mw extends as{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const _=n.getContextAttributes();let p=null,h=null;const m=[],v=new Map,x=new Gt;x.layers.enable(1),x.viewport=new qe;const w=new Gt;w.layers.enable(2),w.viewport=new qe;const S=[x,w],C=new dw;C.layers.enable(1),C.layers.enable(2);let A=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let z=m[D];return z===void 0&&(z=new _u,m[D]=z),z.getTargetRaySpace()},this.getControllerGrip=function(D){let z=m[D];return z===void 0&&(z=new _u,m[D]=z),z.getGripSpace()},this.getHand=function(D){let z=m[D];return z===void 0&&(z=new _u,m[D]=z),z.getHandSpace()};function b(D){const z=v.get(D.inputSource);z!==void 0&&z.dispatchEvent({type:D.type,data:D.inputSource})}function I(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",k),v.forEach(function(D,z){D!==void 0&&D.disconnect(z)}),v.clear(),A=null,y=null,e.setRenderTarget(p),f=null,d=null,c=null,r=null,h=null,P.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",I),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:f}),h=new Ti(f.framebufferWidth,f.framebufferHeight,{format:mn,type:nr,encoding:e.outputEncoding})}else{let z=null,$=null,W=null;_.depth&&(W=_.stencil?35056:33190,z=_.stencil?ts:Yi,$=_.stencil?jr:Wi);const Z={colorFormat:e.outputEncoding===je?35907:32856,depthFormat:W,scaleFactor:s};c=new XRWebGLBinding(r,n),d=c.createProjectionLayer(Z),r.updateRenderState({layers:[d]}),h=new Ti(d.textureWidth,d.textureHeight,{format:mn,type:nr,depthTexture:new pw(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ae=e.properties.get(h);ae.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),P.setContext(r),P.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(D){const z=r.inputSources;for(let $=0;$<z.length;$++){const W=z[$].handedness==="right"?1:0;v.set(z[$],m[W])}for(let $=0;$<D.removed.length;$++){const W=D.removed[$],Z=v.get(W);Z&&(Z.dispatchEvent({type:"disconnected",data:W}),v.delete(W))}for(let $=0;$<D.added.length;$++){const W=D.added[$],Z=v.get(W);Z&&Z.dispatchEvent({type:"connected",data:W})}}const ne=new R,K=new R;function F(D,z,$){ne.setFromMatrixPosition(z.matrixWorld),K.setFromMatrixPosition($.matrixWorld);const W=ne.distanceTo(K),Z=z.projectionMatrix.elements,ae=$.projectionMatrix.elements,de=Z[14]/(Z[10]-1),G=Z[14]/(Z[10]+1),Ie=(Z[9]+1)/Z[5],Se=(Z[9]-1)/Z[5],we=(Z[8]-1)/Z[0],le=(ae[8]+1)/ae[0],Oe=de*we,Le=de*le,_e=W/(-we+le),mt=_e*-we;z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(mt),D.translateZ(_e),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Pt=de+_e,Ut=G+_e,xn=Oe-mt,ut=Le+(W-mt),Be=Ie*G/Ut*Pt,kn=Se*G/Ut*Pt;D.projectionMatrix.makePerspective(xn,ut,Be,kn,Pt,Ut)}function q(D,z){z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;C.near=w.near=x.near=D.near,C.far=w.far=x.far=D.far,(A!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,y=C.far);const z=D.parent,$=C.cameras;q(C,z);for(let Z=0;Z<$.length;Z++)q($[Z],z);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.position.copy(C.position),D.quaternion.copy(C.quaternion),D.scale.copy(C.scale),D.matrix.copy(C.matrix),D.matrixWorld.copy(C.matrixWorld);const W=D.children;for(let Z=0,ae=W.length;Z<ae;Z++)W[Z].updateMatrixWorld(!0);$.length===2?F(C,x,w):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(D){d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)};let V=null;function X(D,z){if(u=z.getViewerPose(l||o),g=z,u!==null){const W=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let Z=!1;W.length!==C.cameras.length&&(C.cameras.length=0,Z=!0);for(let ae=0;ae<W.length;ae++){const de=W[ae];let G=null;if(f!==null)G=f.getViewport(de);else{const Se=c.getViewSubImage(d,de);G=Se.viewport,ae===0&&(e.setRenderTargetTextures(h,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(h))}let Ie=S[ae];Ie===void 0&&(Ie=new Gt,Ie.layers.enable(ae),Ie.viewport=new qe,S[ae]=Ie),Ie.matrix.fromArray(de.transform.matrix),Ie.projectionMatrix.fromArray(de.projectionMatrix),Ie.viewport.set(G.x,G.y,G.width,G.height),ae===0&&C.matrix.copy(Ie.matrix),Z===!0&&C.cameras.push(Ie)}}const $=r.inputSources;for(let W=0;W<m.length;W++){const Z=$[W],ae=v.get(Z);ae!==void 0&&ae.update(Z,z,l||o)}V&&V(D,z),g=null}const P=new Eg;P.setAnimationLoop(X),this.setAnimationLoop=function(D){V=D},this.dispose=function(){}}}function gw(t,e){function n(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===vn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===vn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===vn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vw(){const t=ao("canvas");return t.style.display="block",t}function _w(t){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:vw(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ir,this.physicallyCorrectLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,x=null,w=-1,S=null;const C=new qe,A=new qe;let y=null,b=e.width,I=e.height,k=1,ne=null,K=null;const F=new qe(0,0,b,I),q=new qe(0,0,b,I);let V=!1;const X=new _f;let P=!1,D=!1,z=null;const $=new ot,W=new Ae,Z=new R,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?k:1}let G=n;function Ie(E,N){for(let O=0;O<E.length;O++){const U=E[O],j=e.getContext(U,N);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pf}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",te,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),G=Ie(N,E),G===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,we,le,Oe,Le,_e,mt,Pt,Ut,xn,ut,Be,kn,Un,T,M,H,Q,ee,se,xe,B,he;function fe(){Se=new PS(G),we=new wS(G,Se,t),Se.init(we),B=new fw(G,Se,we),le=new uw(G,Se,we),Oe=new IS(G),Le=new Q1,_e=new cw(G,Se,le,Le,we,B,Oe),mt=new TS(p),Pt=new AS(p),Ut=new Wx(G,we),he=new MS(G,Se,Ut,we),xn=new RS(G,Ut,Oe,he),ut=new kS(G,xn,Ut,Oe),ee=new zS(G,we,_e),M=new ES(Le),Be=new Z1(p,mt,Pt,Se,we,he,M),kn=new gw(p,Le),Un=new J1,T=new sw(Se,we),Q=new yS(p,mt,le,ut,c,o),H=new lw(p,ut,we),se=new SS(G,Se,Oe,we),xe=new DS(G,Se,Oe,we),Oe.programs=Be.programs,p.capabilities=we,p.extensions=Se,p.properties=Le,p.renderLists=Un,p.shadowMap=H,p.state=le,p.info=Oe}fe();const ue=new mw(p,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(b,I,!1))},this.getSize=function(E){return E.set(b,I)},this.setSize=function(E,N,O){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,I=N,e.width=Math.floor(E*k),e.height=Math.floor(N*k),O!==!1&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(b*k,I*k).floor()},this.setDrawingBufferSize=function(E,N,O){b=E,I=N,k=O,e.width=Math.floor(E*O),e.height=Math.floor(N*O),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,N,O,U){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,N,O,U),le.viewport(C.copy(F).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,N,O,U){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,N,O,U),le.scissor(A.copy(q).multiplyScalar(k).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){le.setScissorTest(V=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(E=!0,N=!0,O=!0){let U=0;E&&(U|=16384),N&&(U|=256),O&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",te,!1),Un.dispose(),T.dispose(),Le.dispose(),mt.dispose(),Pt.dispose(),ut.dispose(),he.dispose(),Be.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ne),ue.removeEventListener("sessionend",ze),z&&(z.dispose(),z=null),Mt.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Oe.autoReset,N=H.enabled,O=H.autoUpdate,U=H.needsUpdate,j=H.type;fe(),Oe.autoReset=E,H.enabled=N,H.autoUpdate=O,H.needsUpdate=U,H.type=j}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){const N=E.target;N.removeEventListener("dispose",pe),ce(N)}function ce(E){ge(E),Le.remove(E)}function ge(E){const N=Le.get(E).programs;N!==void 0&&(N.forEach(function(O){Be.releaseProgram(O)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,O,U,j,me){N===null&&(N=ae);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Te=Gg(E,N,O,U,j);le.setMaterial(U,Me);let Ee=O.index;const ke=O.attributes.position;if(Ee===null){if(ke===void 0||ke.count===0)return}else if(Ee.count===0)return;let Pe=1;U.wireframe===!0&&(Ee=xn.getWireframeAttribute(O),Pe=2),he.setup(j,U,Te,O,Ee);let De,Ze=se;Ee!==null&&(De=Ut.get(Ee),Ze=xe,Ze.setIndex(De));const Ii=Ee!==null?Ee.count:ke.count,or=O.drawRange.start*Pe,ar=O.drawRange.count*Pe,Mn=me!==null?me.start*Pe:0,Fe=me!==null?me.count*Pe:1/0,lr=Math.max(or,Mn),Je=Math.min(Ii,or+ar,Mn+Fe)-1,Sn=Math.max(0,Je-lr+1);if(Sn!==0){if(j.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*de()),Ze.setMode(1)):Ze.setMode(4);else if(j.isLine){let ii=U.linewidth;ii===void 0&&(ii=1),le.setLineWidth(ii*de()),j.isLineSegments?Ze.setMode(1):j.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else j.isPoints?Ze.setMode(0):j.isSprite&&Ze.setMode(4);if(j.isInstancedMesh)Ze.renderInstances(lr,Sn,j.count);else if(O.isInstancedBufferGeometry){const ii=Math.min(O.instanceCount,O._maxInstanceCount);Ze.renderInstances(lr,Sn,ii)}else Ze.render(lr,Sn)}},this.compile=function(E,N){f=T.get(E),f.init(),_.push(f),E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(O){const U=O.material;if(U)if(Array.isArray(U))for(let j=0;j<U.length;j++){const me=U[j];pl(me,E,O)}else pl(U,E,O)}),_.pop(),f=null};let J=null;function ve(E){J&&J(E)}function Ne(){Mt.stop()}function ze(){Mt.start()}const Mt=new Eg;Mt.setAnimationLoop(ve),typeof self!="undefined"&&Mt.setContext(self),this.setAnimationLoop=function(E){J=E,ue.setAnimationLoop(E),E===null?Mt.stop():Mt.start()},ue.addEventListener("sessionstart",Ne),ue.addEventListener("sessionend",ze),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,N,x),f=T.get(E,_.length),f.init(),_.push(f),$.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix($),D=this.localClippingEnabled,P=M.init(this.clippingPlanes,D,N),d=Un.get(E,g.length),d.init(),g.push(d),yn(E,N,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(ne,K),P===!0&&M.beginShadows();const O=f.state.shadowsArray;if(H.render(O,E,N),P===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(d,E),f.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const U=N.cameras;for(let j=0,me=U.length;j<me;j++){const Me=U[j];Sf(d,E,Me,Me.viewport)}}else Sf(d,E,N);x!==null&&(_e.updateMultisampleRenderTarget(x),_e.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(p,E,N),he.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function yn(E,N,O,U){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){U&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Me=ut.update(E),Te=E.material;Te.visible&&d.push(E,Me,Te,O,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Oe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Oe.render.frame),!E.frustumCulled||X.intersectsObject(E))){U&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Me=ut.update(E),Te=E.material;if(Array.isArray(Te)){const Ee=Me.groups;for(let ke=0,Pe=Ee.length;ke<Pe;ke++){const De=Ee[ke],Ze=Te[De.materialIndex];Ze&&Ze.visible&&d.push(E,Me,Ze,O,Z.z,De)}}else Te.visible&&d.push(E,Me,Te,O,Z.z,null)}}const me=E.children;for(let Me=0,Te=me.length;Me<Te;Me++)yn(me[Me],N,O,U)}function Sf(E,N,O,U){const j=E.opaque,me=E.transmissive,Me=E.transparent;f.setupLightsView(O),me.length>0&&Bg(j,N,O),U&&le.viewport(C.copy(U)),j.length>0&&xo(j,N,O),me.length>0&&xo(me,N,O),Me.length>0&&xo(Me,N,O),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Bg(E,N,O){const U=we.isWebGL2;z===null&&(z=new Ti(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?oo:nr,minFilter:fl,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(W),U?z.setSize(W.x,W.y):z.setSize(Wa(W.x),Wa(W.y));const j=p.getRenderTarget();p.setRenderTarget(z),p.clear();const me=p.toneMapping;p.toneMapping=Qn,xo(E,N,O),p.toneMapping=me,_e.updateMultisampleRenderTarget(z),_e.updateRenderTargetMipmap(z),p.setRenderTarget(j)}function xo(E,N,O){const U=N.isScene===!0?N.overrideMaterial:null;for(let j=0,me=E.length;j<me;j++){const Me=E[j],Te=Me.object,Ee=Me.geometry,ke=U===null?Me.material:U,Pe=Me.group;Te.layers.test(O.layers)&&Vg(Te,N,O,Ee,ke,Pe)}}function Vg(E,N,O,U,j,me){E.onBeforeRender(p,N,O,U,j,me),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(p,N,O,U,E,me),j.transparent===!0&&j.side===Kr?(j.side=vn,j.needsUpdate=!0,p.renderBufferDirect(O,N,U,j,E,me),j.side=so,j.needsUpdate=!0,p.renderBufferDirect(O,N,U,j,E,me),j.side=Kr):p.renderBufferDirect(O,N,U,j,E,me),E.onAfterRender(p,N,O,U,j,me)}function pl(E,N,O){N.isScene!==!0&&(N=ae);const U=Le.get(E),j=f.state.lights,me=f.state.shadowsArray,Me=j.state.version,Te=Be.getParameters(E,j.state,me,N,O),Ee=Be.getProgramCacheKey(Te);let ke=U.programs;U.environment=E.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(E.isMeshStandardMaterial?Pt:mt).get(E.envMap||U.environment),ke===void 0&&(E.addEventListener("dispose",pe),ke=new Map,U.programs=ke);let Pe=ke.get(Ee);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===Me)return wf(E,Te),Pe}else Te.uniforms=Be.getUniforms(E),E.onBuild(O,Te,p),E.onBeforeCompile(Te,p),Pe=Be.acquireProgram(Te,Ee),ke.set(Ee,Pe),U.uniforms=Te.uniforms;const De=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=M.uniform),wf(E,Te),U.needsLights=Wg(E),U.lightsStateVersion=Me,U.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotShadowMatrix.value=j.state.spotShadowMatrix,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ze=Pe.getUniforms(),Ii=va.seqWithValue(Ze.seq,De);return U.currentProgram=Pe,U.uniformsList=Ii,Pe}function wf(E,N){const O=Le.get(E);O.outputEncoding=N.outputEncoding,O.instancing=N.instancing,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function Gg(E,N,O,U,j){N.isScene!==!0&&(N=ae),_e.resetTextureUnits();const me=N.fog,Me=U.isMeshStandardMaterial?N.environment:null,Te=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ir,Ee=(U.isMeshStandardMaterial?Pt:mt).get(U.envMap||Me),ke=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!U.normalMap&&!!O.attributes.tangent,De=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,Ii=!!O.morphAttributes.color,or=U.toneMapped?p.toneMapping:Qn,ar=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Mn=ar!==void 0?ar.length:0,Fe=Le.get(U),lr=f.state.lights;if(P===!0&&(D===!0||E!==S)){const wn=E===S&&U.id===w;M.setState(U,E,wn)}let Je=!1;U.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==lr.state.version||Fe.outputEncoding!==Te||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ee||U.fog===!0&&Fe.fog!==me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==M.numPlanes||Fe.numIntersection!==M.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Pe||Fe.morphTargets!==De||Fe.morphNormals!==Ze||Fe.morphColors!==Ii||Fe.toneMapping!==or||we.isWebGL2===!0&&Fe.morphTargetsCount!==Mn)&&(Je=!0):(Je=!0,Fe.__version=U.version);let Sn=Fe.currentProgram;Je===!0&&(Sn=pl(U,N,j));let ii=!1,cs=!1,ml=!1;const St=Sn.getUniforms(),fs=Fe.uniforms;if(le.useProgram(Sn.program)&&(ii=!0,cs=!0,ml=!0),U.id!==w&&(w=U.id,cs=!0),ii||S!==E){if(St.setValue(G,"projectionMatrix",E.projectionMatrix),we.logarithmicDepthBuffer&&St.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,cs=!0,ml=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const wn=St.map.cameraPosition;wn!==void 0&&wn.setValue(G,Z.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&St.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||j.isSkinnedMesh)&&St.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){St.setOptional(G,j,"bindMatrix"),St.setOptional(G,j,"bindMatrixInverse");const wn=j.skeleton;wn&&(we.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),St.setValue(G,"boneTexture",wn.boneTexture,_e),St.setValue(G,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gl=O.morphAttributes;return(gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0&&we.isWebGL2===!0)&&ee.update(j,O,U,Sn),(cs||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,St.setValue(G,"receiveShadow",j.receiveShadow)),cs&&(St.setValue(G,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&Hg(fs,ml),me&&U.fog===!0&&kn.refreshFogUniforms(fs,me),kn.refreshMaterialUniforms(fs,U,k,I,z),va.upload(G,Fe.uniformsList,fs,_e)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(va.upload(G,Fe.uniformsList,fs,_e),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&St.setValue(G,"center",j.center),St.setValue(G,"modelViewMatrix",j.modelViewMatrix),St.setValue(G,"normalMatrix",j.normalMatrix),St.setValue(G,"modelMatrix",j.matrixWorld),Sn}function Hg(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Wg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,N,O){Le.get(E.texture).__webglTexture=N,Le.get(E.depthTexture).__webglTexture=O;const U=Le.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const O=Le.get(E);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,O=0){x=E,m=N,v=O;let U=!0;if(E){const Ee=Le.get(E);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),U=!1):Ee.__webglFramebuffer===void 0?_e.setupRenderTarget(E):Ee.__hasExternalTextures&&_e.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture)}let j=null,me=!1,Me=!1;if(E){const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(Me=!0);const ke=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=ke[N],me=!0):we.isWebGL2&&E.samples>0&&_e.useMultisampledRTT(E)===!1?j=Le.get(E).__webglMultisampledFramebuffer:j=ke,C.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else C.copy(F).multiplyScalar(k).floor(),A.copy(q).multiplyScalar(k).floor(),y=V;if(le.bindFramebuffer(36160,j)&&we.drawBuffers&&U&&le.drawBuffers(E,j),le.viewport(C),le.scissor(A),le.setScissorTest(y),me){const Ee=Le.get(E.texture);G.framebufferTexture2D(36160,36064,34069+N,Ee.__webglTexture,O)}else if(Me){const Ee=Le.get(E.texture),ke=N||0;G.framebufferTextureLayer(36160,36064,Ee.__webglTexture,O||0,ke)}w=-1},this.readRenderTargetPixels=function(E,N,O,U,j,me,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){le.bindFramebuffer(36160,Te);try{const Ee=E.texture,ke=Ee.format,Pe=Ee.type;if(ke!==mn&&B.convert(ke)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===oo&&(Se.has("EXT_color_buffer_half_float")||we.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Pe!==nr&&B.convert(Pe)!==G.getParameter(35738)&&!(Pe===ji&&(we.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-U&&O>=0&&O<=E.height-j&&G.readPixels(N,O,U,j,B.convert(ke),B.convert(Pe),me)}finally{const Ee=x!==null?Le.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(E,N,O=0){const U=Math.pow(2,-O),j=Math.floor(N.image.width*U),me=Math.floor(N.image.height*U);_e.setTexture2D(N,0),G.copyTexSubImage2D(3553,O,0,0,E.x,E.y,j,me),le.unbindTexture()},this.copyTextureToTexture=function(E,N,O,U=0){const j=N.image.width,me=N.image.height,Me=B.convert(O.format),Te=B.convert(O.type);_e.setTexture2D(O,0),G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment),N.isDataTexture?G.texSubImage2D(3553,U,E.x,E.y,j,me,Me,Te,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(3553,U,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):G.texSubImage2D(3553,U,E.x,E.y,Me,Te,N.image),U===0&&O.generateMipmaps&&G.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,N,O,U,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,Ee=B.convert(U.format),ke=B.convert(U.type);let Pe;if(U.isData3DTexture)_e.setTexture3D(U,0),Pe=32879;else if(U.isDataArrayTexture)_e.setTexture2DArray(U,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const De=G.getParameter(3314),Ze=G.getParameter(32878),Ii=G.getParameter(3316),or=G.getParameter(3315),ar=G.getParameter(32877),Mn=O.isCompressedTexture?O.mipmaps[0]:O.image;G.pixelStorei(3314,Mn.width),G.pixelStorei(32878,Mn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),O.isDataTexture||O.isData3DTexture?G.texSubImage3D(Pe,j,N.x,N.y,N.z,me,Me,Te,Ee,ke,Mn.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Pe,j,N.x,N.y,N.z,me,Me,Te,Ee,Mn.data)):G.texSubImage3D(Pe,j,N.x,N.y,N.z,me,Me,Te,Ee,ke,Mn),G.pixelStorei(3314,De),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Ii),G.pixelStorei(3315,or),G.pixelStorei(32877,ar),j===0&&U.generateMipmaps&&G.generateMipmap(Pe),le.unbindTexture()},this.initTexture=function(E){_e.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){m=0,v=0,x=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dg extends _w{}Dg.prototype.isWebGL1Renderer=!0;class xw extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class yw extends pt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Ig extends pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Mw extends pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new R;new R;new R;new R;new Pn;class ja extends Di{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new R,f=new R,g=[],_=[],p=[],h=[];for(let m=0;m<=i;m++){const v=[],x=m/i;let w=0;m==0&&o==0?w=.5/n:m==i&&l==Math.PI&&(w=-.5/n);for(let S=0;S<=n;S++){const C=S/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),p.push(f.x,f.y,f.z),h.push(C+w,1-x),v.push(u++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const x=c[m][v+1],w=c[m][v],S=c[m+1][v],C=c[m+1][v+1];(m!==0||o>0)&&g.push(x,w,C),(m!==i-1||l<Math.PI)&&g.push(w,S,C)}this.setIndex(g),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(p,3)),this.setAttribute("uv",new zn(h,2))}static fromJSON(e){return new ja(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sw extends pt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ww extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xa extends pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ew extends Xa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tw extends pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cw extends pt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class bw extends pt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Lw extends pt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Aw extends pt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pw extends Ig{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Rw={ShadowMaterial:Sw,SpriteMaterial:yw,RawShaderMaterial:ww,ShaderMaterial:ti,PointsMaterial:Mw,MeshPhysicalMaterial:Ew,MeshStandardMaterial:Xa,MeshPhongMaterial:Tw,MeshToonMaterial:Cw,MeshNormalMaterial:bw,MeshLambertMaterial:Lw,MeshDepthMaterial:Pg,MeshDistanceMaterial:Rg,MeshBasicMaterial:vf,MeshMatcapMaterial:Aw,LineDashedMaterial:Pw,LineBasicMaterial:Ig,Material:pt};pt.fromType=function(t){return new Rw[t]};const qh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Dw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],_=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return _}return null}}}const Iw=new Dw;class Fg{constructor(e){this.manager=e!==void 0?e:Iw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Fw extends Fg{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ao("img");function l(){c(),qh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $h extends Fg{constructor(e){super(e)}load(e,n,i,r){const s=new nn,o=new Fw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ng extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Yh=new ot,Zh=new R,Qh=new R;class Nw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _f,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zh),Qh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qh),n.updateMatrixWorld(),Yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kh=new ot,Es=new R,xu=new R;class zw extends Nw{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),i.position.copy(Es),xu.copy(i.position),xu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(xu),i.updateMatrixWorld(),r.makeTranslation(-Es.x,-Es.y,-Es.z),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh)}}class kw extends Ng{constructor(e,n,i=0,r=1){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uw extends Ng{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const zg="\\[\\]\\.:\\/",Mf="[^"+zg+"]",Ow="[^"+zg.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Mf);/(WCOD+)?/.source.replace("WCOD",Ow);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mf);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mf);const Tn=new Uint32Array(512),Cn=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(Tn[t]=0,Tn[t|256]=32768,Cn[t]=24,Cn[t|256]=24):e<-14?(Tn[t]=1024>>-e-14,Tn[t|256]=1024>>-e-14|32768,Cn[t]=-e-1,Cn[t|256]=-e-1):e<=15?(Tn[t]=e+15<<10,Tn[t|256]=e+15<<10|32768,Cn[t]=13,Cn[t|256]=13):e<128?(Tn[t]=31744,Tn[t|256]=64512,Cn[t]=24,Cn[t|256]=24):(Tn[t]=31744,Tn[t|256]=64512,Cn[t]=13,Cn[t|256]=13)}const kg=new Uint32Array(2048),_o=new Uint32Array(64),Bw=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,n=0;for(;(e&8388608)===0;)e<<=1,n-=8388608;e&=-8388609,n+=947912704,kg[t]=e|n}for(let t=1024;t<2048;++t)kg[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)_o[t]=t<<23;_o[31]=1199570944;_o[32]=2147483648;for(let t=33;t<63;++t)_o[t]=2147483648+(t-32<<23);_o[63]=3347054592;for(let t=1;t<64;++t)t!==32&&(Bw[t]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);function Vw(){const t=new xw,e=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Dg({canvas:document.querySelector("#bg")});t.background=new $h().load(c_),n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),e.position.setZ(30),n.render(t,e);const i=new Dn(new ja(5,32,16),new Xa({map:new $h().load(u_)}));t.add(i);const r=new kw(16777215);r.position.set(5,5,5);const s=new Uw(16777215);t.add(r,s);function o(){requestAnimationFrame(o),i.rotateX(.001),i.rotateY(.001),i.rotateZ(.001),n.render(t,e)}for(let a=0;a<200;a++){const l=new ja(.25,24,24),u=new Xa({color:16777215}),c=new Dn(l,u),[d,f,g]=Array(3).fill(void 0).map(()=>wx.randFloatSpread(100));c.position.set(d,f,g),t.add(c)}return o(),null}var Ug={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gw=qa.exports,Hw=Symbol.for("react.element"),Ww=Symbol.for("react.fragment"),jw=Object.prototype.hasOwnProperty,Xw=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qw={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jw.call(e,i)&&!qw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hw,type:t,key:s,ref:o,props:r,_owner:Xw.current}}hl.Fragment=Ww;hl.jsx=Og;hl.jsxs=Og;Ug.exports=hl;const Jh=Ug.exports.jsx;yu.createRoot(document.getElementById("bg")).render(Jh(a0.StrictMode,{children:Jh(Vw,{})}));
