import{q as e}from"/build-v1/_shared/chunk-YRXIICRT.js";import{x as g,y as a,z as i}from"/build-v1/_shared/chunk-N64KLDO5.js";import{a as d}from"/build-v1/_shared/chunk-C6G2CU7L.js";import{e as s}from"/build-v1/_shared/chunk-Y24IREY5.js";var r=s(d());var t="G-0XDT1VJX84",c=(n,o)=>{if(!window.gtag){console.warn("window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet.");return}window.gtag("config",o,{page_path:n})},p=(n,o={})=>{if(!window.gtag){console.warn("window.gtag is not defined. This could mean your google analytics script has not loaded on the page yet.");return}window.gtag("event",n,o),console.log(`${n} event was triggered`)};function l(){let n=e();return(0,r.useEffect)(()=>{t?.length&&c(n.pathname,t)},[n]),i(g,{children:[a("script",{defer:!0,src:`https://www.googletagmanager.com/gtag/js?id=${t}`}),a("script",{defer:!0,id:"gtag-init",dangerouslySetInnerHTML:{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${t}', {
            page_path: window.location.pathname,
          });
        `}})]})}export{p as a,l as b};
