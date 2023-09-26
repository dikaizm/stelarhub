import{m as p,r as u,c as rt,e as le,a as v,j as k,W as ot}from"./app-2357662c.js";import{T as lt,I as at}from"./TextInput-728e9c5a.js";import{I as it}from"./InputLabel-be6b4ef7.js";import{l as ee,s as j,a as M,u as O,b as fe,D as $,X as T,o as E,c as me,y as P,p as ut,f as Se,T as st,d as Pe,S as ye,C as ct,e as X,t as ne}from"./transition-4d47329a.js";var be;let I=(be=p.useId)!=null?be:function(){let e=ee(),[t,n]=p.useState(e?()=>j.nextId():null);return M(()=>{t===null&&n(j.nextId())},[t]),t!=null?""+t:void 0};function Le(e){return j.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),De=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(De||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function mt(e,t=0){var n;return e===((n=Le(e))==null?void 0:n.body)?!1:O(t,{[0](){return e.matches(ae)},[1](){let r=e;for(;r!==null;){if(r.matches(ae))return!0;r=r.parentElement}return!1}})}var pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let gt=["textarea","input"].join(",");function vt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,gt))!=null?n:!1}function ht(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function J(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?ht(e):e:ft(e);l.length>0&&o.length>1&&(o=o.filter(m=>!l.includes(m))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},d=0,f=o.length,g;do{if(d>=f||d+f<=0)return 0;let m=s+d;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}g=o[m],g==null||g.focus(c),d+=i}while(g!==a.activeElement);return t&6&&vt(g)&&g.select(),2}function z(e,t,n){let r=fe(t);u.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function Ce(e,t,n){let r=fe(t);u.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}function wt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let c=function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let d of c){if(d===null)continue;let f=d instanceof HTMLElement?d:d.current;if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!mt(s,Fe.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let a=u.useRef(null);z("pointerdown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),z("mousedown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),z("click",o=>{a.current&&(l(o,()=>a.current),a.current=null)},!0),z("touchend",o=>l(o,()=>o.target instanceof HTMLElement?o.target:null),!0),Ce("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Et(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&yt(n)?!1:r}function yt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let bt="div";var Q=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Q||{});function $t(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return T({ourProps:l,theirProps:r,slot:{},defaultTag:bt,name:"Hidden"})}let ie=$($t);var Ne=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ne||{});function pe(e,t){let n=u.useRef([]),r=E(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function Tt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function W(...e){return u.useMemo(()=>Le(...e),[...e])}var U=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(U||{});function xt(){let e=u.useRef(0);return Ce("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Me(e,t,n,r){let l=fe(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ae(e){let t=E(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,me(()=>{n.current&&t()})}),[t])}function Re(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Pt="div";var ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ke||{});function Lt(e,t){let n=u.useRef(null),r=P(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;ee()||(o=1);let s=W(n);Ct({ownerDocument:s},!!(o&16));let c=Nt({ownerDocument:s,container:n,initialFocus:l},!!(o&2));Mt({ownerDocument:s,container:n,containers:a,previousActiveElement:c},!!(o&8));let d=xt(),f=E(h=>{let x=n.current;x&&(L=>L())(()=>{O(d.current,{[U.Forwards]:()=>{J(x,F.First,{skipElements:[h.relatedTarget]})},[U.Backwards]:()=>{J(x,F.Last,{skipElements:[h.relatedTarget]})}})})}),g=ut(),m=u.useRef(!1),A={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,g.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let x=Re(a);n.current instanceof HTMLElement&&x.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Oe(x,L)||(m.current?J(n.current,O(d.current,{[U.Forwards]:()=>F.Next,[U.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&N(h.target)))}};return p.createElement(p.Fragment,null,!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Q.Focusable}),T({ourProps:A,theirProps:i,defaultTag:Pt,name:"FocusTrap"}),!!(o&4)&&p.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Q.Focusable}))}let Dt=$(Lt),H=Object.assign(Dt,{features:ke}),D=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Ft(e=!0){let t=u.useRef(D.slice());return pe(([n],[r])=>{r===!0&&n===!1&&me(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ct({ownerDocument:e},t){let n=Ft(t);pe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]),Ae(()=>{t&&N(n())})}function Nt({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=Se();return pe(()=>{if(!r)return;let o=t.current;o&&me(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?N(n.current):J(o,F.First)===De.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function Mt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=Se();Me(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Re(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=o.target;c&&c instanceof HTMLElement?Oe(i,c)?(r.current=c,N(c)):(o.preventDefault(),o.stopPropagation(),N(s)):N(r.current)},!0)}function Oe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ie=u.createContext(!1);function At(){return u.useContext(Ie)}function ue(e){return p.createElement(Ie.Provider,{value:e.force},e.children)}function Rt(e){let t=At(),n=u.useContext(He),r=W(e),[l,a]=u.useState(()=>{if(!t&&n!==null||j.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let kt=u.Fragment;function Ot(e,t){let n=e,r=u.useRef(null),l=P(st(d=>{r.current=d}),t),a=W(r),o=Rt(r),[i]=u.useState(()=>{var d;return j.isServer?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),s=u.useContext(se),c=ee();return M(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),M(()=>{if(i&&s)return s.register(i)},[s,i]),Ae(()=>{var d;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),c?!o||!i?null:rt.createPortal(T({ourProps:{ref:l},theirProps:n,defaultTag:kt,name:"Portal"}),i):null}let It=u.Fragment,He=u.createContext(null);function Ht(e,t){let{target:n,...r}=e,l={ref:P(t)};return p.createElement(He.Provider,{value:n},T({ourProps:l,theirProps:r,defaultTag:It,name:"Popover.Group"}))}let se=u.createContext(null);function Bt(){let e=u.useContext(se),t=u.useRef([]),n=E(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=E(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),l=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:a}){return p.createElement(se.Provider,{value:l},a)},[l])]}let Ut=$(Ot),jt=$(Ht),ce=Object.assign(Ut,{Group:jt}),Be=u.createContext(null);function Ue(){let e=u.useContext(Be);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function Wt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=E(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Be.Provider,{value:l},n.children)},[t])]}let _t="p";function Vt(e,t){let n=I(),{id:r=`headlessui-description-${n}`,...l}=e,a=Ue(),o=P(t);M(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return T({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:_t,name:a.name||"Description"})}let Yt=$(Vt),Gt=Object.assign(Yt,{}),ge=u.createContext(()=>{});ge.displayName="StackContext";var de=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(de||{});function qt(){return u.useContext(ge)}function Kt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=qt(),o=E((...i)=>{t==null||t(...i),a(...i)});return M(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),p.createElement(ge.Provider,{value:o},e)}function Xt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const zt=typeof Object.is=="function"?Object.is:Xt,{useState:Jt,useEffect:Qt,useLayoutEffect:Zt,useDebugValue:en}=le;function tn(e,t,n){const r=t(),[{inst:l},a]=Jt({inst:{value:r,getSnapshot:t}});return Zt(()=>{l.value=r,l.getSnapshot=t,re(l)&&a({inst:l})},[e,r,t]),Qt(()=>(re(l)&&a({inst:l}),e(()=>{re(l)&&a({inst:l})})),[e]),en(r),r}function re(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!zt(n,r)}catch{return!0}}function nn(e,t,n){return t()}const rn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",on=!rn,ln=on?nn:tn,an="useSyncExternalStore"in le?(e=>e.useSyncExternalStore)(le):ln;function un(e){return an(e.subscribe,e.getSnapshot,e.getSnapshot)}function sn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function cn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function dn(){if(!Tt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(a){return r.containers.flatMap(o=>o()).some(o=>o.contains(a))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=Pe();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!l(c)&&(a=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}}function fn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function mn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=sn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Pe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:mn(n)},l=[dn(),cn(),fn()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function pn(e,t,n){let r=un(C),l=e?r.get(e):void 0,a=l?l.count>0:!1;return M(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),a}let oe=new Map,B=new Map;function $e(e,t=!0){M(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=B.get(r))!=null?o:1;if(i===1?B.delete(r):B.set(r,i-1),i!==1)return;let s=oe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,oe.delete(r))}let a=(n=B.get(r))!=null?n:0;return B.set(r,a+1),a!==0||(oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function gn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=u.useRef((r=n==null?void 0:n.current)!=null?r:null),a=W(l),o=E(()=>{var i;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(l.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:o,contains:E(i=>o().some(s=>s.contains(i))),mainTreeNodeRef:l,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:p.createElement(ie,{features:Q.Hidden,ref:l})},[l,n])}}var vn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vn||{}),hn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(hn||{});let wn={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Z=u.createContext(null);Z.displayName="DialogContext";function _(e){let t=u.useContext(Z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function En(e,t,n=()=>[document.body]){pn(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function yn(e,t){return O(t.type,wn,e,t)}let bn="div",$n=ye.RenderStrategy|ye.Static;function Tn(e,t){var n;let r=I(),{id:l=`headlessui-dialog-${r}`,open:a,onClose:o,initialFocus:i,__demoMode:s=!1,...c}=e,[d,f]=u.useState(0),g=ct();a===void 0&&g!==null&&(a=(g&X.Open)===X.Open);let m=u.useRef(null),A=P(m,t),h=W(m),x=e.hasOwnProperty("open")||g!==null,L=e.hasOwnProperty("onClose");if(!x&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!x)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let y=a?0:1,[V,je]=u.useReducer(yn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),R=E(()=>o(!1)),ve=E(w=>je({type:0,id:w})),Y=ee()?s?!1:y===0:!1,G=d>1,he=u.useContext(Z)!==null,[We,_e]=Bt(),{resolveContainers:te,mainTreeNodeRef:q,MainTreeNode:Ve}=gn({portals:We,defaultContainers:[(n=V.panelRef.current)!=null?n:m.current]}),Ye=G?"parent":"leaf",we=g!==null?(g&X.Closing)===X.Closing:!1,Ge=(()=>he||we?!1:Y)(),qe=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("body > *"))!=null?w:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(q.current)&&b instanceof HTMLElement))!=null?S:null},[q]);$e(qe,Ge);let Ke=(()=>G?!0:Y)(),Xe=u.useCallback(()=>{var w,S;return(S=Array.from((w=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(b=>b.contains(q.current)&&b instanceof HTMLElement))!=null?S:null},[q]);$e(Xe,Ke);let ze=(()=>!(!Y||G))();wt(te,R,ze);let Je=(()=>!(G||y!==0))();Me(h==null?void 0:h.defaultView,"keydown",w=>{Je&&(w.defaultPrevented||w.key===Ne.Escape&&(w.preventDefault(),w.stopPropagation(),R()))});let Qe=(()=>!(we||y!==0||he))();En(h,Qe,te),u.useEffect(()=>{if(y!==0||!m.current)return;let w=new ResizeObserver(S=>{for(let b of S){let K=b.target.getBoundingClientRect();K.x===0&&K.y===0&&K.width===0&&K.height===0&&R()}});return w.observe(m.current),()=>w.disconnect()},[y,m,R]);let[Ze,et]=Wt(),tt=u.useMemo(()=>[{dialogState:y,close:R,setTitleId:ve},V],[y,V,R,ve]),Ee=u.useMemo(()=>({open:y===0}),[y]),nt={ref:A,id:l,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":V.titleId,"aria-describedby":Ze};return p.createElement(Kt,{type:"Dialog",enabled:y===0,element:m,onUpdate:E((w,S)=>{S==="Dialog"&&O(w,{[de.Add]:()=>f(b=>b+1),[de.Remove]:()=>f(b=>b-1)})})},p.createElement(ue,{force:!0},p.createElement(ce,null,p.createElement(Z.Provider,{value:tt},p.createElement(ce.Group,{target:m},p.createElement(ue,{force:!1},p.createElement(et,{slot:Ee,name:"Dialog.Description"},p.createElement(H,{initialFocus:i,containers:te,features:Y?O(Ye,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},p.createElement(_e,null,T({ourProps:nt,theirProps:c,slot:Ee,defaultTag:bn,features:$n,visible:y===0,name:"Dialog"}))))))))),p.createElement(Ve,null))}let xn="div";function Sn(e,t){let n=I(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=_("Dialog.Overlay"),i=P(t),s=E(d=>{if(d.target===d.currentTarget){if(Et(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),o()}}),c=u.useMemo(()=>({open:a===0}),[a]);return T({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:c,defaultTag:xn,name:"Dialog.Overlay"})}let Pn="div";function Ln(e,t){let n=I(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Backdrop"),i=P(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return p.createElement(ue,{force:!0},p.createElement(ce,null,T({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:Pn,name:"Dialog.Backdrop"})))}let Dn="div";function Fn(e,t){let n=I(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=_("Dialog.Panel"),i=P(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),c=E(d=>{d.stopPropagation()});return T({ourProps:{ref:i,id:r,onClick:c},theirProps:l,slot:s,defaultTag:Dn,name:"Dialog.Panel"})}let Cn="h2";function Nn(e,t){let n=I(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=_("Dialog.Title"),i=P(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return T({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:Cn,name:"Dialog.Title"})}let Mn=$(Tn),An=$(Ln),Rn=$(Fn),kn=$(Sn),On=$(Nn),Te=Object.assign(Mn,{Backdrop:An,Panel:Rn,Overlay:kn,Title:On,Description:Gt});function xe({className:e="",disabled:t,children:n,...r}){return v("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function In({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v(ne,{show:t,as:u.Fragment,leave:"duration-200",children:k(Te,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[v(ne.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v("div",{className:"absolute inset-0 bg-gray-500/75"})}),v(ne.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v(Te.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Hn({type:e="button",className:t="",disabled:n,children:r,...l}){return v("button",{...l,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function _n({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:l,setData:a,delete:o,processing:i,reset:s,errors:c}=ot({password:""}),d=()=>{n(!0)},f=m=>{m.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>{var A;return(A=r.current)==null?void 0:A.focus()},onFinish:()=>s()})},g=()=>{n(!1),s()};return k("section",{className:`space-y-6 ${e}`,children:[k("header",{children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v(xe,{onClick:d,children:"Delete Account"}),v(In,{show:t,onClose:g,children:k("form",{onSubmit:f,className:"p-6",children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),k("div",{className:"mt-6",children:[v(it,{htmlFor:"password",value:"Password",className:"sr-only"}),v(lt,{id:"password",type:"password",name:"password",ref:r,value:l.password,onChange:m=>a("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v(at,{message:c.password,className:"mt-2"})]}),k("div",{className:"mt-6 flex justify-end",children:[v(Hn,{onClick:g,children:"Cancel"}),v(xe,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{_n as default};
