import{a as u,r as e}from"./app-2357662c.js";function i({message:t,className:n="",...o}){return t?u("p",{...o,className:"text-sm text-red-600 "+n,children:t}):null}const l=e.forwardRef(function({type:n="text",className:o="",isFocused:c=!1,...f},a){const s=e.useRef(null);return e.useImperativeHandle(a,()=>({focus:()=>{var r;return(r=s.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;c&&((r=s.current)==null||r.focus())},[]),u("input",{...f,type:n,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+o,ref:s})});export{i as I,l as T};
