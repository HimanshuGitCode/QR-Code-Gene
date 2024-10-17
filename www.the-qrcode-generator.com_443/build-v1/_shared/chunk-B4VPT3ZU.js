import{a as P}from"/build-v1/_shared/chunk-C6G2CU7L.js";import{e as S}from"/build-v1/_shared/chunk-Y24IREY5.js";function me(e,r,t=!0){return{...e,default:r,decode:(...o)=>{let a=e.decode(...o);return a===void 0||t&&a===null?r:a}}}function N(e,r){if(e==null)return e;if(e.length===0&&(!r||r&&e!==""))return null;let t=e instanceof Array?e[0]:e;return t==null?t:!r&&t===""?null:t}function T(e){if(e==null)return e;let r=e.getFullYear(),t=e.getMonth()+1,n=e.getDate();return`${r}-${t<10?`0${t}`:t}-${n<10?`0${n}`:n}`}function _(e){let r=N(e);if(r==null)return r;let t=r.split("-");t[1]!=null?t[1]-=1:(t[1]=0,t[2]=1);let n=new Date(...t);return isNaN(n.getTime())?null:n}function R(e){return e==null?e:String(e)}function M(e){let r=N(e);return r==null?r:r===""?null:+r}function L(e){return e==null?e:String(e)}function U(e){let r=N(e,!0);return r==null?r:String(r)}function $(e){return e==null?e:JSON.stringify(e)}function V(e){let r=N(e);if(r==null)return r;let t=null;try{t=JSON.parse(r)}catch{}return t}var h={encode:L,decode:U};var Ee={encode:R,decode:M};var xe={encode:$,decode:V},Te={encode:T,decode:_,equals:(e,r)=>e===r?!0:e==null||r==null?e===r:e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()};function q(e,r){let t={},n=Object.keys(r);for(let o of n){let a=r[o];e[o]?t[o]=e[o].encode(r[o]):t[o]=a==null?a:String(a)}return t}function b(e){let r=new URLSearchParams,t=Object.entries(e);for(let[n,o]of t)if(o!==void 0&&o!==null)if(Array.isArray(o))for(let a of o)r.append(n,a??"");else r.append(n,o);return r.toString()}var Xe='{}[],":'.split("").map(e=>[e,encodeURIComponent(e)]);function D(e){let r=new URLSearchParams(e),t={};for(let[n,o]of r)Object.prototype.hasOwnProperty.call(t,n)?Array.isArray(t[n])?t[n].push(o):t[n]=[t[n],o]:t[n]=o;return t}var f=S(P());var J=class{constructor(){this.paramsMap=new Map,this.registeredParams=new Map}set(r,t,n,o){this.paramsMap.set(r,{stringified:t,decoded:n,decode:o})}has(r,t,n){if(!this.paramsMap.has(r))return!1;let o=this.paramsMap.get(r);return o?o.stringified===t&&(n==null||o.decode===n):!1}get(r){var t;if(this.paramsMap.has(r))return(t=this.paramsMap.get(r))==null?void 0:t.decoded}registerParams(r){for(let t of r){let n=this.registeredParams.get(t)||0;this.registeredParams.set(t,n+1)}}unregisterParams(r){for(let t of r){let n=(this.registeredParams.get(t)||0)-1;n<=0?(this.registeredParams.delete(t),this.paramsMap.has(t)&&this.paramsMap.delete(t)):this.registeredParams.set(t,n)}}clear(){this.paramsMap.clear(),this.registeredParams.clear()}},y=new J;function G(e,r){var t,n,o;let a={},i=!1,c=Object.keys(e),u=c;if(r.includeKnownParams||r.includeKnownParams!==!1&&c.length===0){let d=Object.keys((t=r.params)!=null?t:{});u.push(...d)}for(let d of u){let s=e[d];if(s!=null&&typeof s=="object"){a[d]=s;continue}i=!0,a[d]=(o=(n=r.params)==null?void 0:n[d])!=null?o:h}return i?a:e}function O(e,r,t,n){var o;if(!t||!r.length)return e;let a={...e},i=!1;for(let c of r)Object.prototype.hasOwnProperty.call(a,c)||(a[c]=(o=t[c])!=null?o:n,i=!0);return i?a:e}var _e=Object.prototype.hasOwnProperty;function Y(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function A(e,r,t){var n,o;if(Y(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;let a=Object.keys(e),i=Object.keys(r);if(a.length!==i.length)return!1;for(let c=0;c<a.length;c++){let u=(o=(n=t?.[a[c]])==null?void 0:n.equals)!=null?o:Y;if(!_e.call(r,a[c])||!u(e[a[c]],r[a[c]]))return!1}return!0}function K(e,r,t){let n={},o=Object.keys(r);for(let a of o){let i=r[a],c=e[a],u;if(t.has(a,c,i.decode))u=t.get(a);else{if(u=i.decode(c),i.equals&&t.has(a,c)){let l=t.get(a);i.equals(u,l)&&(u=l)}u!==void 0&&t.set(a,c,u,i.decode)}u===void 0&&i.default!==void 0&&(u=i.default),n[a]=u}return n}function H(){let e;function r(t,n,o){let a=K(t,n,o);return e!=null&&A(e,a)?e:(e=a,a)}return r}function W(e){let r;for(let t in e)if(e[t].urlName){let o=`${e[t].urlName}\0${t}`;r?r.push(o):r=[o]}return r?r.join(`
`):void 0}function X(e){if(!!e)return Object.fromEntries(e.split(`
`).map(r=>r.split("\0")))}function Z(e,r){var t;let n={};for(let o in e)((t=r[o])==null?void 0:t.urlName)!=null?n[r[o].urlName]=e[o]:n[o]=e[o];return n}var B,ee,re,C={},j=(e,r,t)=>{if(B===r&&re===e&&ee===t)return C;B=r,re=e;let n=e(r??"");ee=t;let o=X(t);for(let[a,i]of Object.entries(n)){o?.[a]&&(delete n[a],a=o[a],n[a]=i);let c=C[a];A(i,c)&&(n[a]=c)}return C=n,n};var te={searchStringToObject:D,objectToSearchString:b,updateType:"pushIn",includeKnownParams:void 0,includeAllParams:!1,removeDefaultsFromUrl:!1,enableBatching:!1,skipUpdateWhenNoChange:!0};function v(e,r){r==null&&(r={});let t={...e,...r};return r.params&&e.params&&(t.params={...e.params,...r.params}),t}var m=S(P());var oe={adapter:{},options:te},F=m.createContext(oe);function ae(){let e=m.useContext(F);if(e===void 0||e===oe)throw new Error("useQueryParams must be used within a QueryParamProvider");return e}function ne({children:e,adapter:r,options:t}){let{adapter:n,options:o}=m.useContext(F),a=m.useMemo(()=>({adapter:r??n,options:v(o,t)}),[r,t,n,o]);return m.createElement(F.Provider,{value:a},e)}function Re({children:e,adapter:r,options:t}){let n=r;return n?m.createElement(n,null,o=>m.createElement(ne,{adapter:o,options:t},e)):m.createElement(ne,{options:t},e)}function ce(e,r){var t;for(let n in e)((t=r[n])==null?void 0:t.default)!==void 0&&e[n]!==void 0&&r[n].encode(r[n].default)===e[n]&&(e[n]=void 0)}function Me({changes:e,updateType:r,currentSearchString:t,paramConfigMap:n,options:o}){let{searchStringToObject:a,objectToSearchString:i}=o;r==null&&(r=o.updateType);let c,u=j(a,t),l=O(n,Object.keys(e),o.params),d;if(typeof e=="function"){let g=K(u,l,y);d=e(g)}else d=e;c=q(l,d),o.removeDefaultsFromUrl&&ce(c,l),c=Z(c,l);let s;return r==="push"||r==="replace"?s=i(c):s=i({...u,...c}),s?.length&&s[0]!=="?"&&(s=`?${s}`),s??""}function Le({searchString:e,adapter:r,navigate:t,updateType:n}){let a={...r.location,search:e};t&&(typeof n=="string"&&n.startsWith("replace")?r.replace(a):r.push(a))}var Ue=e=>e(),$e=e=>setTimeout(()=>e(),0),Q=[];function ie(e,{immediate:r}={}){Q.push(e);let t=r?Ue:$e;Q.length===1&&t(()=>{let n=Q.slice();Q.length=0;let o=n[0].currentSearchString,a;for(let i=0;i<n.length;++i){let c=i===0?n[i]:{...n[i],currentSearchString:a};a=Me(c)}e.options.skipUpdateWhenNoChange&&a===o||Le({searchString:a??"",adapter:n[n.length-1].adapter,navigate:!0,updateType:n[n.length-1].updateType})})}function ue(e,r){let{adapter:t,options:n}=ae(),[o]=(0,f.useState)(H),{paramConfigMap:a,options:i}=Ve(e,r),c=(0,f.useMemo)(()=>v(n,i),[n,i]),u=G(a,c),l=j(c.searchStringToObject,t.location.search,W(u));c.includeAllParams&&(u=O(u,Object.keys(l),c.params,h));let d=o(l,u,y),s=Object.keys(u).join("\0");(0,f.useEffect)(()=>{let z=s.split("\0");return y.registerParams(z),()=>{y.unregisterParams(z)}},[s]);let g={adapter:t,paramConfigMap:u,options:c},p=(0,f.useRef)(g);p.current==null&&(p.current=g),(0,f.useEffect)(()=>{p.current.adapter=t,p.current.paramConfigMap=u,p.current.options=c},[t,u,c]);let[se]=(0,f.useState)(()=>(le,E)=>{let{adapter:I,paramConfigMap:de,options:x}=p.current;E==null&&(E=x.updateType),ie({changes:le,updateType:E,currentSearchString:I.location.search,paramConfigMap:de,options:x,adapter:I},{immediate:!x.enableBatching})});return[d,se]}var w=ue;function Ve(e,r){let t,n;return e===void 0?(t={},n=r):Array.isArray(e)?(t=Object.fromEntries(e.map(o=>[o,"inherit"])),n=r):(t=e,n=r),{paramConfigMap:t,options:n}}var k=S(P());var qe=(e,r,t)=>{let n=(0,k.useMemo)(()=>({[e]:r??"inherit"}),[e,r]),[o,a]=w(n,t),i=o[e],c=(0,k.useCallback)((u,l)=>a(typeof u=="function"?d=>{let s=u(d[e]);return{[e]:s}}:{[e]:u},l),[e,a]);return[i,c]};var Je=S(P());export{me as a,h as b,Ee as c,xe as d,Te as e,q as f,Re as g,ue as h,qe as i};
