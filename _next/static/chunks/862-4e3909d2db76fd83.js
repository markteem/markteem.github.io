"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{3862:function(e,t,o){o.d(t,{Snippet:function(){return ex}});var r=o(2226),n=o(2068),a=(0,n.tv)({slots:{base:"inline-flex items-center justify-between h-fit rounded-large gap-2",pre:"bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap",content:"flex flex-col",symbol:"select-none",copyButton:["group","relative","z-10","text-large","text-inherit","data-[hover=true]:bg-transparent"],copyIcon:["absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50"],checkIcon:["absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100"]},variants:{variant:{flat:"",solid:"",bordered:"border-medium bg-transparent",shadow:""},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{base:"px-1.5 py-0.5 text-tiny rounded-small"},md:{base:"px-3 py-1.5 text-small rounded-medium"},lg:{base:"px-4 py-2 text-medium rounded-large"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},fullWidth:{true:{base:"w-full"}},disableAnimation:{true:{},false:{copyIcon:"transition-transform-opacity",checkIcon:"transition-transform-opacity"}}},defaultVariants:{color:"default",variant:"flat",size:"md",fullWidth:!1},compoundVariants:[{variant:["solid","shadow"],color:"default",class:{copyButton:"data-[focus-visible]:outline-default-foreground"}},{variant:["solid","shadow"],color:"primary",class:{copyButton:"data-[focus-visible]:outline-primary-foreground"}},{variant:["solid","shadow"],color:"secondary",class:{copyButton:"data-[focus-visible]:outline-secondary-foreground"}},{variant:["solid","shadow"],color:"success",class:{copyButton:"data-[focus-visible]:outline-success-foreground"}},{variant:["solid","shadow"],color:"warning",class:{copyButton:"data-[focus-visible]:outline-warning-foreground"}},{variant:["solid","shadow"],color:"danger",class:{copyButton:"data-[focus-visible]:outline-danger-foreground"}},{variant:"flat",color:"default",class:{base:r.J.flat.default}},{variant:"flat",color:"primary",class:{base:r.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:r.J.flat.secondary}},{variant:"flat",color:"success",class:{base:r.J.flat.success}},{variant:"flat",color:"warning",class:{base:r.J.flat.warning}},{variant:"flat",color:"danger",class:{base:r.J.flat.danger}},{variant:"solid",color:"default",class:{base:r.J.solid.default}},{variant:"solid",color:"primary",class:{base:r.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:r.J.solid.secondary}},{variant:"solid",color:"success",class:{base:r.J.solid.success}},{variant:"solid",color:"warning",class:{base:r.J.solid.warning}},{variant:"solid",color:"danger",class:{base:r.J.solid.danger}},{variant:"shadow",color:"default",class:{base:r.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:r.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:r.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:r.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:r.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:r.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:r.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:r.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:r.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:r.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:r.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:r.J.bordered.danger}}]}),l=o(2094),s=o(5971),i=o(6242),c=o(5300),d=o(6222),u=o(5263),p=o(3640),f=o(2265),m=o(3389),g=o(1821);let b={},h=0,v=!1,y=null,w=null;var x=o(277),E=o(5729),k=o(3892),C=o(1816),P=o(9743),O=o(357),L=o(541);function T(e,t=-1/0,o=1/0){return Math.min(Math.max(e,t),o)}let j={top:"top",bottom:"top",left:"left",right:"left"},B={top:"bottom",bottom:"top",left:"right",right:"left"},D={top:"left",left:"top"},z={top:"height",left:"width"},J={width:"totalWidth",height:"totalHeight"},M={},N="undefined"!=typeof document&&window.visualViewport;function _(e){let t=0,o=0,r=0,n=0,a=0,l=0,s={},i=(null==N?void 0:N.scale)>1;if("BODY"===e.tagName){var c,d;let i=document.documentElement;r=i.clientWidth,n=i.clientHeight,t=null!==(c=null==N?void 0:N.width)&&void 0!==c?c:r,o=null!==(d=null==N?void 0:N.height)&&void 0!==d?d:n,s.top=i.scrollTop||e.scrollTop,s.left=i.scrollLeft||e.scrollLeft,N&&(a=N.offsetTop,l=N.offsetLeft)}else({width:t,height:o,top:a,left:l}=W(e)),s.top=e.scrollTop,s.left=e.scrollLeft,r=t,n=o;return(0,L.Pf)()&&("BODY"===e.tagName||"HTML"===e.tagName)&&i&&(s.top=0,s.left=0,a=N.pageTop,l=N.pageLeft),{width:t,height:o,totalWidth:r,totalHeight:n,scroll:s,top:a,left:l}}function H(e,t,o,r,n,a,l){let s=n.scroll[e],i=r[z[e]],c=r.scroll[j[e]]+a,d=i+r.scroll[j[e]]-a,u=t-s+l[e]-r[j[e]],p=t-s+o+l[e]-r[j[e]];return u<c?c-u:p>d?Math.max(d-p,c-u):0}function I(e){if(M[e])return M[e];let[t,o]=e.split(" "),r=j[t]||"right",n=D[r];j[o]||(o="center");let a=z[r],l=z[n];return M[e]={placement:t,crossPlacement:o,axis:r,crossAxis:n,size:a,crossSize:l},M[e]}function S(e,t,o,r,n,a,l,s,i,c){let{placement:d,crossPlacement:u,axis:p,crossAxis:f,size:m,crossSize:g}=r,b={};b[f]=e[f],"center"===u?b[f]+=(e[g]-o[g])/2:u!==f&&(b[f]+=e[g]-o[g]),b[f]+=a;let h=e[f]-o[g]+i+c,v=e[f]+e[g]-i-c;if(b[f]=T(b[f],h,v),d===p){let o=s?l[m]:t[J[m]];b[B[p]]=Math.floor(o-e[p]+n)}else b[p]=Math.floor(e[p]+e[m]+n);return b}function R(e,t,o,r,n,a){let{placement:l,axis:s,size:i}=a;return l===s?Math.max(0,o[s]-e[s]-e.scroll[s]+t[s]-r[s]-r[B[s]]-n):Math.max(0,e[i]+e[s]+e.scroll[s]-t[s]-o[s]-o[i]-r[s]-r[B[s]]-n)}function W(e){let{top:t,left:o,width:r,height:n}=e.getBoundingClientRect(),{scrollTop:a,scrollLeft:l,clientTop:s,clientLeft:i}=document.documentElement;return{top:t+a-s,left:o+l-i,width:r,height:n}}function X(e,t){let o,r=window.getComputedStyle(e);if("fixed"===r.position){let{top:t,left:r,width:n,height:a}=e.getBoundingClientRect();o={top:t,left:r,width:n,height:a}}else{o=W(e);let r=W(t),n=window.getComputedStyle(t);r.top+=(parseInt(n.borderTopWidth,10)||0)-t.scrollTop,r.left+=(parseInt(n.borderLeftWidth,10)||0)-t.scrollLeft,o.top-=r.top,o.left-=r.left}return o.top-=parseInt(r.marginTop,10)||0,o.left-=parseInt(r.marginLeft,10)||0,o}function A(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}let Y=new WeakMap;var F=o(9248),V=o(573),K=o(4909);let $="undefined"!=typeof document&&window.visualViewport;var G=o(7546),U=o(579),q=o(7854);function Z(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}var Q=o(8381);let ee=[];var et=o(1616),eo=(0,n.tv)({slots:{base:["z-0","relative","bg-transparent","before:content-['']","before:hidden","before:z-[-1]","before:absolute","before:rotate-45","before:w-2.5","before:h-2.5","before:rounded-sm","data-[arrow=true]:before:block","data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top]:before:left-1/2","data-[placement=top]:before:-translate-x-1/2","data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-start]:before:left-3","data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-end]:before:right-3","data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom]:before:left-1/2","data-[placement=bottom]:before:-translate-x-1/2","data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-start]:before:left-3","data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-end]:before:right-3","data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=left]:before:top-1/2","data-[placement=left]:before:-translate-y-1/2","data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-start]:before:top-1/4","data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-end]:before:bottom-1/4","data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=right]:before:top-1/2","data-[placement=right]:before:-translate-y-1/2","data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-start]:before:top-1/4","data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-end]:before:bottom-1/4",...et.Dh],content:["z-10","px-2.5","py-1","w-full","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","outline-none","box-border"],trigger:["z-10"],backdrop:["hidden"],arrow:[]},variants:{size:{sm:{content:"text-tiny"},md:{content:"text-small"},lg:{content:"text-medium"}},color:{default:{base:"before:bg-content1 before:shadow-small",content:"bg-content1"},foreground:{base:"before:bg-foreground",content:r.J.solid.foreground},primary:{base:"before:bg-primary",content:r.J.solid.primary},secondary:{base:"before:bg-secondary",content:r.J.solid.secondary},success:{base:"before:bg-success",content:r.J.solid.success},warning:{base:"before:bg-warning",content:r.J.solid.warning},danger:{base:"before:bg-danger",content:r.J.solid.danger}},radius:{none:{content:"rounded-none"},sm:{content:"rounded-small"},md:{content:"rounded-medium"},lg:{content:"rounded-large"},full:{content:"rounded-full"}},shadow:{sm:{content:"shadow-small"},md:{content:"shadow-medium"},lg:{content:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}},isTriggerDisabled:{true:{trigger:"opacity-disabled pointer-events-none"},false:{}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]}),er=o(5262),en=e=>{let t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},ea=e=>({top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"})[e],el=(e,t)=>{if(t.includes("-")){let[,o]=t.split("-");return"".concat(e,"-").concat(o)}return e},es=o(6896),ei=o(1671),ec=o(980),ed=o(4191),eu=o(8029),ep=o(5127),ef=o(9046),em=o(1144),eg=o(7437),eb=(0,s.Gp)((e,t)=>{let o;let{Component:r,children:n,content:a,isOpen:c,portalContainer:m,placement:L,disableAnimation:j,motionProps:D,getTriggerProps:z,getTooltipProps:M,getTooltipContentProps:N}=function(e){var t,o;let r=(0,l.w)(),[n,a]=(0,s.oe)(e,eo.variantKeys),{ref:c,as:m,isOpen:L,content:j,children:D,defaultOpen:z,onOpenChange:M,isDisabled:N,trigger:et,shouldFlip:en=!0,containerPadding:ei=12,placement:ec="top",delay:ed=0,closeDelay:eu=500,showArrow:ep=!1,offset:ef=7,crossOffset:em=0,isDismissable:eg,shouldCloseOnBlur:eb=!0,portalContainer:eh,isKeyboardDismissDisabled:ev=!1,updatePositionDeps:ey=[],shouldCloseOnInteractOutside:ew,className:ex,onClose:eE,motionProps:ek,classNames:eC,...eP}=n,eO=null!=(o=null!=(t=null==e?void 0:e.disableAnimation)?t:null==r?void 0:r.disableAnimation)&&o,eL=function(e={}){let{delay:t=1500,closeDelay:o=500}=e,{isOpen:r,open:n,close:a}=function(e){let[t,o]=(0,g.z)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),r=(0,f.useCallback)(()=>{o(!0)},[o]),n=(0,f.useCallback)(()=>{o(!1)},[o]),a=(0,f.useCallback)(()=>{o(!t)},[o,t]);return{isOpen:t,setOpen:o,open:r,close:n,toggle:a}}(e),l=(0,f.useMemo)(()=>`${++h}`,[]),s=(0,f.useRef)(),i=()=>{b[l]=u},c=()=>{for(let e in b)e!==l&&(b[e](!0),delete b[e])},d=()=>{clearTimeout(s.current),s.current=null,c(),i(),v=!0,n(),y&&(clearTimeout(y),y=null),w&&(clearTimeout(w),w=null)},u=e=>{e||o<=0?(clearTimeout(s.current),s.current=null,a()):s.current||(s.current=setTimeout(()=>{s.current=null,a()},o)),y&&(clearTimeout(y),y=null),v&&(w&&clearTimeout(w),w=setTimeout(()=>{delete b[l],w=null,v=!1},Math.max(500,o)))},p=()=>{c(),i(),r||y||v?r||d():y=setTimeout(()=>{y=null,v=!0,d()},t)};return(0,f.useEffect)(()=>()=>{clearTimeout(s.current),b[l]&&delete b[l]},[l]),{isOpen:r,open:e=>{e||!(t>0)||s.current?d():p()},close:u}}({delay:ed,closeDelay:eu,isDisabled:N,defaultOpen:z,isOpen:L,onOpenChange:e=>{null==M||M(e),e||null==eE||eE()}}),eT=(0,f.useRef)(null),ej=(0,f.useRef)(null),eB=(0,f.useId)(),eD=eL.isOpen&&!N;(0,f.useImperativeHandle)(c,()=>(0,i.fg)(ej));let{triggerProps:ez,tooltipProps:eJ}=function(e,t,o){let{isDisabled:r,trigger:n}=e,a=(0,C.Me)(),l=(0,f.useRef)(!1),s=(0,f.useRef)(!1),i=()=>{(l.current||s.current)&&t.open(s.current)},c=e=>{l.current||s.current||t.close(e)};(0,f.useEffect)(()=>{let e=e=>{o&&o.current&&"Escape"===e.key&&(e.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[o,t]);let d=()=>{s.current=!1,l.current=!1,c(!0)},{hoverProps:u}=(0,k.X)({isDisabled:r,onHoverStart:()=>{"focus"!==n&&("pointer"===(0,E.Jz)()?l.current=!0:l.current=!1,i())},onHoverEnd:()=>{"focus"!==n&&(s.current=!1,l.current=!1,c())}}),{focusableProps:p}=(0,P.k)({isDisabled:r,onFocus:()=>{(0,E.E)()&&(s.current=!0,i())},onBlur:()=>{s.current=!1,l.current=!1,c(!0)}},o);return{triggerProps:{"aria-describedby":t.isOpen?a:void 0,...(0,x.d)(p,u,{onPointerDown:d,onKeyDown:d})},tooltipProps:{id:a}}}({isDisabled:N,trigger:et},eL,eT),{tooltipProps:eM}=function(e,t){let o=(0,O.z)(e,{labelable:!0}),{hoverProps:r}=(0,k.X)({onHoverStart:()=>null==t?void 0:t.open(!0),onHoverEnd:()=>null==t?void 0:t.close()});return{tooltipProps:(0,x.d)(o,r,{role:"tooltip"})}}({isOpen:eD,...(0,x.d)(n,eJ)},eL),{overlayProps:eN,placement:e_,updatePosition:eH}=function(e){let{direction:t}=(0,K.j)(),{arrowSize:o=0,targetRef:r,overlayRef:n,scrollRef:a=n,placement:l="bottom",containerPadding:s=12,shouldFlip:i=!0,boundaryElement:c="undefined"!=typeof document?document.body:null,offset:d=0,crossOffset:u=0,shouldUpdatePosition:p=!0,isOpen:m=!0,onClose:g,maxHeight:b,arrowBoundaryOffset:h=0}=e,[v,y]=(0,f.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),w=[p,l,n.current,r.current,a.current,s,i,c,d,u,m,t,b,h,o],x=(0,f.useRef)(null==$?void 0:$.scale);(0,f.useEffect)(()=>{m&&(x.current=null==$?void 0:$.scale)},[m]);let E=(0,f.useCallback)(()=>{var e,f;if(!1===p||!m||!n.current||!r.current||!a.current||!c||(null==$?void 0:$.scale)!==x.current)return;let g=n.current;!b&&n.current&&(g.style.top="0px",g.style.bottom="",g.style.maxHeight=(null!==(f=null===(e=window.visualViewport)||void 0===e?void 0:e.height)&&void 0!==f?f:window.innerHeight)+"px");let v=function(e){let t,{placement:o,targetNode:r,overlayNode:n,scrollNode:a,padding:l,shouldFlip:s,boundaryElement:i,offset:c,crossOffset:d,maxHeight:u,arrowSize:p=0,arrowBoundaryOffset:f=0}=e,m=n instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!A(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!A(t);)t=t.parentElement;return t||document.documentElement}(n):document.documentElement,g=m===document.documentElement,b=window.getComputedStyle(m).position,h=g?W(r):X(r,m);if(!g){let{marginTop:e,marginLeft:t}=window.getComputedStyle(r);h.top+=parseInt(e,10)||0,h.left+=parseInt(t,10)||0}let v=W(n),y={top:parseInt((t=window.getComputedStyle(n)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};v.width+=y.left+y.right,v.height+=y.top+y.bottom;let w={top:a.scrollTop,left:a.scrollLeft,width:a.scrollWidth,height:a.scrollHeight},x=_(i),E=_(m),k="BODY"===i.tagName?W(m):X(m,i);return"HTML"===m.tagName&&"BODY"===i.tagName&&(E.scroll.top=0,E.scroll.left=0),function(e,t,o,r,n,a,l,s,i,c,d,u,p,f,m,g){let b=I(e),{size:h,crossAxis:v,crossSize:y,placement:w,crossPlacement:x}=b,E=S(t,s,o,b,d,u,c,p,m,g),k=d,C=R(s,c,t,n,a+d,b);if(l&&r[h]>C){let e=I(`${B[w]} ${x}`),r=S(t,s,o,e,d,u,c,p,m,g);R(s,c,t,n,a+d,e)>C&&(b=e,E=r,k=d)}let P="bottom";"top"===b.axis?"top"===b.placement?P="top":"bottom"===b.placement&&(P="bottom"):"top"===b.crossAxis&&("top"===b.crossPlacement?P="bottom":"bottom"===b.crossPlacement&&(P="top"));let O=H(v,E[v],o[y],s,i,a,c);E[v]+=O;let L=function(e,t,o,r,n,a,l,s){let i=r?o.height:t[J.height],c=null!=e.top?o.top+e.top:o.top+(i-e.bottom-l),d="top"!==s?Math.max(0,t.height+t.top+t.scroll.top-c-(n.top+n.bottom+a)):Math.max(0,c+l-(t.top+t.scroll.top)-(n.top+n.bottom+a));return Math.min(t.height-2*a,d)}(E,s,c,p,n,a,o.height,P);f&&f<L&&(L=f),o.height=Math.min(o.height,L),O=H(v,(E=S(t,s,o,b,k,u,c,p,m,g))[v],o[y],s,i,a,c),E[v]+=O;let j={},D=t[v]+.5*t[y]-E[v],z=m/2+g,M=o[y]-m/2-g,N=T(D,t[v]-E[v]+m/2,t[v]+t[y]-E[v]-m/2);return j[v]=T(N,z,M),{position:E,maxHeight:L,arrowOffsetLeft:j.left,arrowOffsetTop:j.top,placement:b.placement}}(o,h,v,w,y,l,s,x,E,k,c,d,!!b&&"static"!==b,u,p,f)}({placement:"rtl"===t?l.replace("start","right").replace("end","left"):l.replace("start","left").replace("end","right"),overlayNode:n.current,targetNode:r.current,scrollNode:a.current,padding:s,shouldFlip:i,boundaryElement:c,offset:d,crossOffset:u,maxHeight:b,arrowSize:o,arrowBoundaryOffset:h});g.style.top="",g.style.bottom="",Object.keys(v.position).forEach(e=>g.style[e]=v.position[e]+"px"),g.style.maxHeight=null!=v.maxHeight?v.maxHeight+"px":void 0,y(v)},w);(0,F.b)(E,w),(0,F.b)(()=>(window.addEventListener("resize",E,!1),()=>{window.removeEventListener("resize",E,!1)}),[E]),(0,V.y)({ref:n,onResize:E});let k=(0,f.useRef)(!1);(0,F.b)(()=>{let e;let t=()=>{k.current=!0,clearTimeout(e),e=setTimeout(()=>{k.current=!1},500),E()},o=()=>{k.current&&t()};return null==$||$.addEventListener("resize",t),null==$||$.addEventListener("scroll",o),()=>{null==$||$.removeEventListener("resize",t),null==$||$.removeEventListener("scroll",o)}},[E]);let C=(0,f.useCallback)(()=>{k.current||g()},[g,k]);return!function(e){let{triggerRef:t,isOpen:o,onClose:r}=e;(0,f.useEffect)(()=>{if(!o||null===r)return;let e=e=>{let o=e.target;if(!t.current||o instanceof Node&&!o.contains(t.current))return;let n=r||Y.get(t.current);n&&n()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[o,r,t])}({triggerRef:r,isOpen:m,onClose:g&&C}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...v.position,maxHeight:v.maxHeight}},placement:v.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:v.arrowOffsetLeft,top:v.arrowOffsetTop}},updatePosition:E}}({isOpen:eD,targetRef:eT,placement:ea(ec),overlayRef:ej,offset:ep?ef+3:ef,crossOffset:em,shouldFlip:en,containerPadding:ei});(0,es.G)(()=>{ey.length&&eH()},ey);let{overlayProps:eI}=function(e,t){let{onClose:o,shouldCloseOnBlur:r,isOpen:n,isDismissable:a=!1,isKeyboardDismissDisabled:l=!1,shouldCloseOnInteractOutside:s}=e;(0,f.useEffect)(()=>(n&&ee.push(t),()=>{let e=ee.indexOf(t);e>=0&&ee.splice(e,1)}),[n,t]);let i=()=>{ee[ee.length-1]===t&&o&&o()};!function(e){let{ref:t,onInteractOutside:o,isDisabled:r,onInteractOutsideStart:n}=e,a=(0,f.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),l=(0,U.i)(e=>{o&&Z(e,t)&&(n&&n(e),a.current.isPointerDown=!0)}),s=(0,U.i)(e=>{o&&o(e)});(0,f.useEffect)(()=>{let e=a.current;if(r)return;let o=t.current,n=(0,q.r)(o);if("undefined"!=typeof PointerEvent){let o=o=>{e.isPointerDown&&Z(o,t)&&s(o),e.isPointerDown=!1};return n.addEventListener("pointerdown",l,!0),n.addEventListener("pointerup",o,!0),()=>{n.removeEventListener("pointerdown",l,!0),n.removeEventListener("pointerup",o,!0)}}{let o=o=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&Z(o,t)&&s(o),e.isPointerDown=!1},r=o=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&Z(o,t)&&s(o),e.isPointerDown=!1};return n.addEventListener("mousedown",l,!0),n.addEventListener("mouseup",o,!0),n.addEventListener("touchstart",l,!0),n.addEventListener("touchend",r,!0),()=>{n.removeEventListener("mousedown",l,!0),n.removeEventListener("mouseup",o,!0),n.removeEventListener("touchstart",l,!0),n.removeEventListener("touchend",r,!0)}}},[t,r,l,s])}({ref:t,onInteractOutside:a&&n?e=>{(!s||s(e.target))&&(ee[ee.length-1]===t&&(e.stopPropagation(),e.preventDefault()),i())}:null,onInteractOutsideStart:e=>{(!s||s(e.target))&&ee[ee.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:c}=(0,Q.L)({isDisabled:!r,onBlurWithin:e=>{!(!e.relatedTarget||(0,G.cW)(e.relatedTarget))&&(!s||s(e.relatedTarget))&&o()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||l||e.nativeEvent.isComposing||(e.stopPropagation(),e.preventDefault(),i())},...c},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}({isOpen:eD,onClose:eL.close,isDismissable:eg,shouldCloseOnBlur:eb,isKeyboardDismissDisabled:ev,shouldCloseOnInteractOutside:ew},ej),eS=(0,f.useMemo)(()=>{var t,o,r;return eo({...a,disableAnimation:eO,radius:null!=(t=null==e?void 0:e.radius)?t:"md",size:null!=(o=null==e?void 0:e.size)?o:"md",shadow:null!=(r=null==e?void 0:e.shadow)?r:"sm"})},[(0,d.Xx)(a),eO,null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),eR=(0,f.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...(0,x.d)(ez,e),ref:(0,er.l)(t,eT),"aria-describedby":eD?eB:void 0}},[ez,eD,eB,eL]),eW=(0,f.useCallback)(()=>({ref:ej,"data-slot":"base","data-open":(0,p.PB)(eD),"data-arrow":(0,p.PB)(ep),"data-disabled":(0,p.PB)(N),"data-placement":el(e_,ec),...(0,x.d)(eM,eI,eP),style:(0,x.d)(eN.style,eP.style,n.style),className:eS.base({class:null==eC?void 0:eC.base}),id:eB}),[eS,eD,ep,N,e_,ec,eM,eI,eP,eN,n,eB]),eX=(0,f.useCallback)(()=>({"data-slot":"content","data-open":(0,p.PB)(eD),"data-arrow":(0,p.PB)(ep),"data-disabled":(0,p.PB)(N),"data-placement":el(e_,ec),className:eS.content({class:(0,u.W)(null==eC?void 0:eC.content,ex)})}),[eS,eD,ep,N,e_,ec,eC]);return{Component:m||"div",content:j,children:D,isOpen:eD,triggerRef:eT,showArrow:ep,portalContainer:eh,placement:ec,disableAnimation:eO,isDisabled:N,motionProps:ek,getTooltipContentProps:eX,getTriggerProps:eR,getTooltipProps:eW}}({...e,ref:t});try{let e=f.Children.count(n);if(1!==e)throw Error();o=(0,f.isValidElement)(n)?(0,f.cloneElement)(n,z(n.props,n.ref)):(0,eg.jsx)("p",{...z(),children:n})}catch(e){o=(0,eg.jsx)("span",{}),(0,em.Z)("Tooltip must have only one child node. Please, check your code.")}let{ref:et,id:eb,style:eh,...ev}=M(),ey=(0,eg.jsx)("div",{ref:et,id:eb,style:eh,children:(0,eg.jsx)(ec.X,{features:ed.H,children:(0,eg.jsx)(eu.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:ef.y7.scaleSpring,...(0,x.d)(D,ev),style:{...en(L)},children:(0,eg.jsx)(r,{...N(),children:a})})})});return(0,eg.jsxs)(eg.Fragment,{children:[o,j&&c?(0,eg.jsx)(ei.Xj,{portalContainer:m,children:(0,eg.jsx)("div",{ref:et,id:eb,style:eh,...ev,children:(0,eg.jsx)(r,{...N(),children:a})})}):(0,eg.jsx)(ep.M,{children:c?(0,eg.jsx)(ei.Xj,{portalContainer:m,children:ey}):null})]})});eb.displayName="NextUI.Tooltip";var eh=e=>(0,eg.jsxs)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:[(0,eg.jsx)("path",{d:"M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"}),(0,eg.jsx)("path",{d:"M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"}),(0,eg.jsx)("path",{d:"M16 12.9C16 9.4 14.6 8 11.1 8"})]}),ev=e=>(0,eg.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:(0,eg.jsx)("polyline",{points:"20 6 9 17 4 12"})}),ey=o(5128),ew=(0,s.Gp)((e,t)=>{let{Component:o,domRef:r,preRef:n,children:g,slots:b,classNames:h,copied:v,copyIcon:y=(0,eg.jsx)(eh,{}),checkIcon:w=(0,eg.jsx)(ev,{}),symbolBefore:x,disableCopy:E,disableTooltip:k,hideSymbol:C,hideCopyButton:P,tooltipProps:O,isMultiLine:L,onCopy:T,getSnippetProps:j,getCopyButtonProps:B}=function(e){var t,o,r,n;let g=(0,l.w)(),[b,h]=(0,s.oe)(e,a.variantKeys),{ref:v,as:y,children:w,symbol:x="$",classNames:E,timeout:k,copyIcon:C,checkIcon:P,codeString:O,disableCopy:L=!1,disableTooltip:T=!1,hideCopyButton:j=!1,autoFocus:B=!1,hideSymbol:D=!1,onCopy:z,tooltipProps:J={},copyButtonProps:M={},className:N,..._}=b,H=y||"div",I="string"==typeof H,S=null!=(o=null!=(t=null==e?void 0:e.disableAnimation)?t:null==g?void 0:g.disableAnimation)&&o,R={offset:15,delay:1e3,content:"Copy to clipboard",color:null!=(n=null==e?void 0:e.color)?n:null==(r=a.defaultVariants)?void 0:r.color,isDisabled:b.disableCopy,...J},W=(0,i.gy)(v),X=(0,f.useRef)(null),{copy:A,copied:Y}=function({timeout:e=2e3}={}){let[t,o]=(0,f.useState)(null),[r,n]=(0,f.useState)(!1),[a,l]=(0,f.useState)(null),s=(0,f.useCallback)(()=>{a&&clearTimeout(a)},[a]),i=(0,f.useCallback)(t=>{s(),l(setTimeout(()=>n(!1),e)),n(t)},[s,e]);return{copy:(0,f.useCallback)(e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>i(!0)).catch(e=>o(e)):o(Error("useClipboard: navigator.clipboard is not supported"))},[i]),reset:(0,f.useCallback)(()=>{n(!1),o(null),s()},[s]),error:t,copied:r}}({timeout:k}),F=w&&Array.isArray(w),{isFocusVisible:V,isFocused:K,focusProps:$}=(0,m.F)({autoFocus:B}),G=(0,f.useMemo)(()=>a({...h,disableAnimation:S}),[(0,d.Xx)(h),S]),U=(0,f.useMemo)(()=>{if(!x||"string"!=typeof x)return x;let e=x.trim();return e?"".concat(e," "):""},[x]),q=(0,u.W)(null==E?void 0:E.base,N),Z=(0,f.useCallback)(()=>({className:G.base({class:q}),...(0,c.z)(_,{enabled:I})}),[G,q,F,_]),Q=(0,f.useCallback)(()=>{var e;if(L)return;let t="";"string"==typeof w?t=w:Array.isArray(w)&&w.forEach(e=>{var o,r;let n="string"==typeof e?e:null==(r=null==(o=null==e?void 0:e.props)?void 0:o.children)?void 0:r.toString();n&&(t+=n+"\n")});let o=O||t||(null==(e=X.current)?void 0:e.textContent)||"";A(o),null==z||z(o)},[A,O,L,z,w]),ee={"aria-label":"string"==typeof R.content?R.content:"Copy to clipboard",size:"sm",variant:"light",isDisabled:L,onPress:Q,isIconOnly:!0,...M},et=(0,f.useCallback)(()=>({...ee,"data-copied":(0,p.PB)(Y),className:G.copyButton({class:(0,u.W)(null==E?void 0:E.copyButton)})}),[G,V,K,L,null==E?void 0:E.copyButton,ee,$]);return{Component:H,as:y,domRef:W,preRef:X,children:w,slots:G,classNames:E,copied:Y,onCopy:Q,copyIcon:C,checkIcon:P,symbolBefore:U,isMultiLine:F,isFocusVisible:V,hideCopyButton:j,disableCopy:L,disableTooltip:T,hideSymbol:D,tooltipProps:R,getSnippetProps:Z,getCopyButtonProps:et}}({...e,ref:t}),D=(0,f.useCallback)(e=>{let{children:t}=e;return(0,eg.jsx)(eb,{...O,isDisabled:v||O.isDisabled,children:t})},[(0,d.Xx)(O)]),z=(0,f.useMemo)(()=>{if(P)return null;let e=w&&(0,f.cloneElement)(w,{className:b.checkIcon()}),t=y&&(0,f.cloneElement)(y,{className:b.copyIcon()}),o=(0,eg.jsxs)(ey.A,{...B(),children:[e,t]});return k?o:(0,eg.jsx)(D,{children:o})},[b,null==h?void 0:h.copyButton,v,w,y,T,D,E,k,P]),J=(0,f.useMemo)(()=>L&&g&&Array.isArray(g)?(0,eg.jsx)("div",{className:b.content({class:null==h?void 0:h.content}),children:g.map((e,t)=>(0,eg.jsxs)("pre",{className:b.pre({class:null==h?void 0:h.pre}),children:[!C&&(0,eg.jsx)("span",{className:b.symbol({class:null==h?void 0:h.symbol}),children:x}),e]},"".concat(t,"-").concat(e)))}):(0,eg.jsxs)("pre",{ref:n,className:b.pre({class:null==h?void 0:h.pre}),children:[!C&&(0,eg.jsx)("span",{className:b.symbol({class:null==h?void 0:h.symbol}),children:x}),g]}),[g,C,L,x,null==h?void 0:h.pre,b]);return(0,eg.jsxs)(o,{ref:r,...j(),children:[J,z]})});ew.displayName="NextUI.Snippet";var ex=ew}}]);