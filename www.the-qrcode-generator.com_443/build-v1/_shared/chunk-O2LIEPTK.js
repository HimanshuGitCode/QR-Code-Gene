import{a as $e}from"/build-v1/_shared/chunk-C6G2CU7L.js";import{c as ze,e as Ke}from"/build-v1/_shared/chunk-Y24IREY5.js";var pt=ze((ae,ge)=>{(function(e,i){if(typeof define=="function"&&define.amd)define(["exports","module"],i);else if(typeof ae<"u"&&typeof ge<"u")i(ae,ge);else{var t={exports:{}};i(t.exports,t),e.fetchJsonp=t.exports}})(ae,function(e,i){"use strict";var t={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function n(s){try{delete window[s]}catch{window[s]=void 0}}function r(s){var l=document.getElementById(s);l&&document.getElementsByTagName("head")[0].removeChild(l)}function f(s){var l=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],o=s,c=l.timeout||t.timeout,m=l.jsonpCallback||t.jsonpCallback,v=void 0;return new Promise(function(C,P){var p=l.jsonpCallbackFunction||a(),h=m+"_"+p;window[p]=function(U){C({ok:!0,json:function(){return Promise.resolve(U)}}),v&&clearTimeout(v),r(h),n(p)},o+=o.indexOf("?")===-1?"?":"&";var u=document.createElement("script");u.setAttribute("src",""+o+m+"="+p),l.charset&&u.setAttribute("charset",l.charset),l.nonce&&u.setAttribute("nonce",l.nonce),l.referrerPolicy&&u.setAttribute("referrerPolicy",l.referrerPolicy),u.id=h,document.getElementsByTagName("head")[0].appendChild(u),v=setTimeout(function(){P(new Error("JSONP request to "+s+" timed out")),n(p),r(h),window[p]=function(){n(p)}},c),u.onerror=function(){P(new Error("JSONP request to "+s+" failed")),n(p),r(h),v&&clearTimeout(v)}})}i.exports=f})});var d=Ke($e(),1);function Ae(e,i,t,a){function n(r){return r instanceof t?r:new t(function(f){f(r)})}return new(t||(t=Promise))(function(r,f){function s(c){try{o(a.next(c))}catch(m){f(m)}}function l(c){try{o(a.throw(c))}catch(m){f(m)}}function o(c){c.done?r(c.value):n(c.value).then(s,l)}o((a=a.apply(e,i||[])).next())})}function Fe(e,i){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,n,r,f;return f={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function s(o){return function(c){return l([o,c])}}function l(o){if(a)throw new TypeError("Generator is already executing.");for(;t;)try{if(a=1,n&&(r=o[0]&2?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[o[0]&2,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,n=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){t.label=o[1];break}if(o[0]===6&&t.label<r[1]){t.label=r[1],r=o;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(o);break}r[2]&&t.ops.pop(),t.trys.pop();continue}o=i.call(e,t)}catch(c){o=[6,c],n=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var x=function(){},w=x(),Q=Object,y=function(e){return e===w},N=function(e){return typeof e=="function"},V=function(e,i){return Q.assign({},e,i)},we="undefined",Ee=function(){return typeof window!=we},Ge=function(){return typeof document!=we},Qe=function(){return Ee()&&typeof window.requestAnimationFrame!=we},re=new WeakMap,Xe=0,Z=function(e){var i=typeof e,t=e&&e.constructor,a=t==Date,n,r;if(Q(e)===e&&!a&&t!=RegExp){if(n=re.get(e),n)return n;if(n=++Xe+"~",re.set(e,n),t==Array){for(n="@",r=0;r<e.length;r++)n+=Z(e[r])+",";re.set(e,n)}if(t==Q){n="#";for(var f=Q.keys(e).sort();!y(r=f.pop());)y(e[r])||(n+=r+":"+Z(e[r])+",");re.set(e,n)}}else n=a?e.toJSON():i=="symbol"?e.toString():i=="string"?JSON.stringify(e):""+e;return n},de=!0,Ye=function(){return de},Ve=Ee(),ye=Ge(),he=Ve&&window.addEventListener?window.addEventListener.bind(window):x,Ze=ye?document.addEventListener.bind(document):x,me=Ve&&window.removeEventListener?window.removeEventListener.bind(window):x,et=ye?document.removeEventListener.bind(document):x,tt=function(){var e=ye&&document.visibilityState;return y(e)||e!=="hidden"},rt=function(e){return Ze("visibilitychange",e),he("focus",e),function(){et("visibilitychange",e),me("focus",e)}},nt=function(e){var i=function(){de=!0,e()},t=function(){de=!1};return he("online",i),he("offline",t),function(){me("online",i),me("offline",t)}},at={isOnline:Ye,isVisible:tt},it={initFocus:rt,initReconnect:nt},ne=!Ee()||"Deno"in window,ut=function(e){return Qe()?window.requestAnimationFrame(e):setTimeout(e,1)},X=ne?d.useEffect:d.useLayoutEffect,le=typeof navigator<"u"&&navigator.connection,De=!ne&&le&&(["slow-2g","2g"].includes(le.effectiveType)||le.saveData),We=function(e){if(N(e))try{e=e()}catch{e=""}var i=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Z(e):"";var t=e?"$swr$"+e:"";return[e,i,t]},q=new WeakMap,_e=0,Me=1,Ne=2,Y=function(e,i,t,a,n,r,f){f===void 0&&(f=!0);var s=q.get(e),l=s[0],o=s[1],c=s[3],m=l[i],v=o[i];if(f&&v)for(var C=0;C<v.length;++C)v[C](t,a,n);return r&&(delete c[i],m&&m[0])?m[0](Ne).then(function(){return e.get(i)}):e.get(i)},ot=0,pe=function(){return++ot},Pe=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return Ae(void 0,void 0,void 0,function(){var t,a,n,r,f,s,l,o,c,m,v,C,P,p,h,u,U,W,A,O,j;return Fe(this,function(_){switch(_.label){case 0:if(t=e[0],a=e[1],n=e[2],r=e[3],f=typeof r=="boolean"?{revalidate:r}:r||{},s=y(f.populateCache)?!0:f.populateCache,l=f.revalidate!==!1,o=f.rollbackOnError!==!1,c=f.optimisticData,m=We(a),v=m[0],C=m[2],!v)return[2];if(P=q.get(t),p=P[2],e.length<3)return[2,Y(t,v,t.get(v),w,w,l,!0)];if(h=n,U=pe(),p[v]=[U,0],W=!y(c),A=t.get(v),W&&(O=N(c)?c(A):c,t.set(v,O),Y(t,v,O)),N(h))try{h=h(t.get(v))}catch(k){u=k}return h&&N(h.then)?[4,h.catch(function(k){u=k})]:[3,2];case 1:if(h=_.sent(),U!==p[v][0]){if(u)throw u;return[2,h]}else u&&W&&o&&(s=!0,h=A,t.set(v,A));_.label=2;case 2:return s&&(u||(N(s)&&(h=s(h,A)),t.set(v,h)),t.set(C,V(t.get(C),{error:u}))),p[v][1]=pe(),[4,Y(t,v,h,u,w,l,!!s)];case 3:if(j=_.sent(),u)throw u;return[2,s?j:h]}})})},Ie=function(e,i){for(var t in e)e[t][0]&&e[t][0](i)},Ue=function(e,i){if(!q.has(e)){var t=V(it,i),a={},n=Pe.bind(w,e),r=x;if(q.set(e,[a,{},{},{},n]),!ne){var f=t.initFocus(setTimeout.bind(w,Ie.bind(w,a,_e))),s=t.initReconnect(setTimeout.bind(w,Ie.bind(w,a,Me)));r=function(){f&&f(),s&&s(),q.delete(e)}}return[e,n,r]}return[e,q.get(e)[4]]},ft=function(e,i,t,a,n){var r=t.errorRetryCount,f=n.retryCount,s=~~((Math.random()+.5)*(1<<(f<8?f:8)))*t.errorRetryInterval;!y(r)&&f>r||setTimeout(a,s,n)},je=Ue(new Map),ke=je[0],st=je[1],Le=V({onLoadingSlow:x,onSuccess:x,onError:x,onErrorRetry:ft,onDiscarded:x,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:De?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:De?5e3:3e3,compare:function(e,i){return Z(e)==Z(i)},isPaused:function(){return!1},cache:ke,mutate:st,fallback:{}},at),qe=function(e,i){var t=V(e,i);if(i){var a=e.use,n=e.fallback,r=i.use,f=i.fallback;a&&r&&(t.use=a.concat(r)),n&&f&&(t.fallback=V(n,f))}return t},be=(0,d.createContext)({}),ct=function(e){var i=e.value,t=qe((0,d.useContext)(be),i),a=i&&i.provider,n=(0,d.useState)(function(){return a?Ue(a(t.cache||ke),i):w})[0];return n&&(t.cache=n[0],t.mutate=n[1]),X(function(){return n?n[2]:w},[]),(0,d.createElement)(be.Provider,V(e,{value:t}))},lt=function(e,i){var t=(0,d.useState)({})[1],a=(0,d.useRef)(e),n=(0,d.useRef)({data:!1,error:!1,isValidating:!1}),r=(0,d.useCallback)(function(f){var s=!1,l=a.current;for(var o in f){var c=o;l[c]!==f[c]&&(l[c]=f[c],n.current[c]&&(s=!0))}s&&!i.current&&t({})},[]);return X(function(){a.current=e}),[a,n.current,r]},vt=function(e){return N(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},dt=function(){return V(Le,(0,d.useContext)(be))},ht=function(e){return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];var n=dt(),r=vt(t),f=r[0],s=r[1],l=r[2],o=qe(n,l),c=e,m=o.use;if(m)for(var v=m.length;v-- >0;)c=m[v](c);return c(f,s||o.fetcher,o)}},xe=function(e,i,t){var a=i[e]||(i[e]=[]);return a.push(t),function(){var n=a.indexOf(t);n>=0&&(a[n]=a[a.length-1],a.pop())}},ve={dedupe:!0},mt=function(e,i,t){var a=t.cache,n=t.compare,r=t.fallbackData,f=t.suspense,s=t.revalidateOnMount,l=t.refreshInterval,o=t.refreshWhenHidden,c=t.refreshWhenOffline,m=q.get(a),v=m[0],C=m[1],P=m[2],p=m[3],h=We(e),u=h[0],U=h[1],W=h[2],A=(0,d.useRef)(!1),O=(0,d.useRef)(!1),j=(0,d.useRef)(u),_=(0,d.useRef)(i),k=(0,d.useRef)(t),b=function(){return k.current},ie=function(){return b().isVisible()&&b().isOnline()},ee=function(S){return a.set(W,V(a.get(W),S))},Re=a.get(u),He=y(r)?t.fallback[u]:r,F=y(Re)?He:Re,Ce=a.get(W)||{},B=Ce.error,Se=!A.current,Te=function(){return Se&&!y(s)?s:b().isPaused()?!1:f?y(F)?!1:t.revalidateIfStale:y(F)||t.revalidateIfStale},Je=function(){return!u||!i?!1:Ce.isValidating?!0:Se&&Te()},ue=Je(),oe=lt({data:F,error:B,isValidating:ue},O),H=oe[0],fe=oe[1],te=oe[2],L=(0,d.useCallback)(function(S){return Ae(void 0,void 0,void 0,function(){var g,R,T,z,K,D,E,M,I,se,$,J,ce;return Fe(this,function(G){switch(G.label){case 0:if(g=_.current,!u||!g||O.current||b().isPaused())return[2,!1];z=!0,K=S||{},D=!p[u]||!K.dedupe,E=function(){return!O.current&&u===j.current&&A.current},M=function(){var Oe=p[u];Oe&&Oe[1]===T&&delete p[u]},I={isValidating:!1},se=function(){ee({isValidating:!1}),E()&&te(I)},ee({isValidating:!0}),te({isValidating:!0}),G.label=1;case 1:return G.trys.push([1,3,,4]),D&&(Y(a,u,H.current.data,H.current.error,!0),t.loadingTimeout&&!a.get(u)&&setTimeout(function(){z&&E()&&b().onLoadingSlow(u,t)},t.loadingTimeout),p[u]=[g.apply(void 0,U),pe()]),ce=p[u],R=ce[0],T=ce[1],[4,R];case 2:return R=G.sent(),D&&setTimeout(M,t.dedupingInterval),!p[u]||p[u][1]!==T?(D&&E()&&b().onDiscarded(u),[2,!1]):(ee({error:w}),I.error=w,$=P[u],!y($)&&(T<=$[0]||T<=$[1]||$[1]===0)?(se(),D&&E()&&b().onDiscarded(u),[2,!1]):(n(H.current.data,R)?I.data=H.current.data:I.data=R,n(a.get(u),R)||a.set(u,R),D&&E()&&b().onSuccess(R,u,t),[3,4]));case 3:return J=G.sent(),M(),b().isPaused()||(ee({error:J}),I.error=J,D&&E()&&(b().onError(J,u,t),(typeof t.shouldRetryOnError=="boolean"&&t.shouldRetryOnError||N(t.shouldRetryOnError)&&t.shouldRetryOnError(J))&&ie()&&b().onErrorRetry(J,u,t,L,{retryCount:(K.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return z=!1,se(),E()&&D&&Y(a,u,I.data,I.error,!1),[2,!0]}})})},[u]),Be=(0,d.useCallback)(Pe.bind(w,a,function(){return j.current}),[]);if(X(function(){_.current=i,k.current=t}),X(function(){if(!!u){var S=u!==j.current,g=L.bind(w,ve),R=function(E,M,I){te(V({error:M,isValidating:I},n(H.current.data,E)?w:{data:E}))},T=0,z=function(E){if(E==_e){var M=Date.now();b().revalidateOnFocus&&M>T&&ie()&&(T=M+b().focusThrottleInterval,g())}else if(E==Me)b().revalidateOnReconnect&&ie()&&g();else if(E==Ne)return L()},K=xe(u,C,R),D=xe(u,v,z);return O.current=!1,j.current=u,A.current=!0,S&&te({data:F,error:B,isValidating:ue}),Te()&&(y(F)||ne?g():ut(g)),function(){O.current=!0,K(),D()}}},[u,L]),X(function(){var S;function g(){var T=N(l)?l(F):l;T&&S!==-1&&(S=setTimeout(R,T))}function R(){!H.current.error&&(o||b().isVisible())&&(c||b().isOnline())?L(ve).then(g):g()}return g(),function(){S&&(clearTimeout(S),S=-1)}},[l,o,c,L]),(0,d.useDebugValue)(F),f&&y(F)&&u)throw _.current=i,k.current=t,O.current=!1,y(B)?L(ve):B;return{mutate:Be,get data(){return fe.data=!0,F},get error(){return fe.error=!0,B},get isValidating(){return fe.isValidating=!0,ue}}},bt=Q.defineProperty(ct,"default",{value:Le});var wt=ht(mt);export{pt as a,wt as b};
/*! For license information please see /build-v1/_shared/chunk-O2LIEPTK.js.LEGAL.txt */
