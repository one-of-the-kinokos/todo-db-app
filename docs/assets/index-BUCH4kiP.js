import{r as le,a as s,u as ie,b as ce,c as q,d as ue,e as de,f as fe,g as A,h as he,i as B,j as pe,k as c,F as me,M as K}from"./index-Dkqzk6lW.js";import{S as ve}from"./spacer-zQq_582z.js";const xe="Error preloading route! ☝️";var ye=le();function ge(t,v){const a=ie(),[u,x]=s.useState(!1),m=s.useRef(!1),l=ce(v),{activeProps:y=()=>({className:"active"}),inactiveProps:U=()=>({}),activeOptions:o,to:g,preload:I,preloadDelay:O,hashScrollIntoView:V,replace:W,startTransition:$,resetScroll:G,viewTransition:J,children:M,target:f,disabled:n,style:T,className:S,onClick:b,onFocus:P,onMouseEnter:k,onMouseLeave:R,onTouchStart:E,ignoreBlocker:Q,...X}=t,{params:be,search:Pe,hash:ke,state:Re,mask:Ee,reloadDocument:Ce,..._}=X,F=s.useMemo(()=>{try{return new URL(`${g}`),"external"}catch{}return"internal"},[g]),Y=q({select:e=>e.location.search,structuralSharing:!0});t={from:ue({strict:!1,select:e=>e.pathname}),...t};const i=s.useMemo(()=>a.buildLocation(t),[a,t,Y]),h=s.useMemo(()=>t.reloadDocument?!1:I??a.options.defaultPreload,[a.options.defaultPreload,I,t.reloadDocument]),Z=O??a.options.defaultPreloadDelay??0,C=q({select:e=>{if(o!=null&&o.exact){if(!he(e.location.pathname,i.pathname,a.basepath))return!1}else{const r=B(e.location.pathname,a.basepath).split("/");if(!B(i.pathname,a.basepath).split("/").every((oe,se)=>oe===r[se]))return!1}return((o==null?void 0:o.includeSearch)??!0)&&!pe(e.location.search,i.search,{partial:!(o!=null&&o.exact),ignoreUndefined:!(o!=null&&o.explicitUndefined)})?!1:o!=null&&o.includeHash?e.location.hash===i.hash:!0}}),d=s.useCallback(()=>{a.preloadRoute(t).catch(e=>{console.warn(e),console.warn(xe)})},[t,a]),ee=s.useCallback(e=>{e!=null&&e.isIntersecting&&d()},[d]);if(de(l,ee,{rootMargin:"100px"},{disabled:!!n||h!=="viewport"}),fe(()=>{m.current||!n&&h==="render"&&(d(),m.current=!0)},[n,d,h]),F==="external")return{..._,ref:l,type:F,href:g,...M&&{children:M},...f&&{target:f},...n&&{disabled:n},...T&&{style:T},...S&&{className:S},...b&&{onClick:b},...P&&{onFocus:P},...k&&{onMouseEnter:k},...R&&{onMouseLeave:R},...E&&{onTouchStart:E}};const te=e=>{if(!n&&!Se(e)&&!e.defaultPrevented&&(!f||f==="_self")&&e.button===0){e.preventDefault(),ye.flushSync(()=>{x(!0)});const r=a.subscribe("onResolved",()=>{r(),x(!1)});return a.navigate({...t,replace:W,resetScroll:G,hashScrollIntoView:V,startTransition:$,viewTransition:J,ignoreBlocker:Q})}},L=e=>{n||h&&d()},ae=L,re=e=>{if(n)return;const r=e.target||{};if(h){if(r.preloadTimeout)return;r.preloadTimeout=setTimeout(()=>{r.preloadTimeout=null,d()},Z)}},ne=e=>{if(n)return;const r=e.target||{};r.preloadTimeout&&(clearTimeout(r.preloadTimeout),r.preloadTimeout=null)},p=e=>r=>{var w;(w=r.persist)==null||w.call(r),e.filter(Boolean).forEach(N=>{r.defaultPrevented||N(r)})},D=C?A(y,{})??{}:{},j=C?{}:A(U,{}),H=[S,D.className,j.className].filter(Boolean).join(" "),z={...T,...D.style,...j.style};return{..._,...D,...j,href:n?void 0:i.maskedLocation?a.history.createHref(i.maskedLocation.href):a.history.createHref(i.href),ref:l,onClick:p([b,te]),onFocus:p([P,L]),onMouseEnter:p([k,re]),onMouseLeave:p([R,ne]),onTouchStart:p([E,ae]),disabled:!!n,target:f,...Object.keys(z).length&&{style:z},...H&&{className:H},...n&&{role:"link","aria-disabled":!0},...C&&{"data-status":"active","aria-current":"page"},...u&&{"data-transitioning":"transitioning"}}}const Te=s.forwardRef((t,v)=>{const{_asChild:a,...u}=t,{type:x,ref:m,...l}=ge(u,v),y=typeof u.children=="function"?u.children({isActive:l["data-status"]==="active"}):u.children;return typeof a>"u"&&delete l.disabled,s.createElement(a||"a",{...l,ref:m},y)});function Se(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Ie=function(){return c.jsx(c.Fragment,{children:c.jsxs(me,{width:"100vw",height:"auto",minHeight:"100vh",direction:"column",justifyContent:"center",alignItems:"center",bgColor:"purple.400",children:[c.jsx(K,{fontSize:"5xl",fontWeight:"bold",children:"Todo-DB"}),c.jsx(ve,{minH:"20px",maxH:"20px"}),c.jsx(Te,{to:"/todo",children:c.jsx(K,{fontSize:"xl",textDecoration:"underline",children:"― START ―"})})]})})};export{Ie as component};
