import{a as e,j as r,r as t,F as m,d as h}from"./app-84fbb9be.js";import{l as w}from"./index.m-803090db.js";function N(){return e("section",{className:"s-testimoni",children:e("div",{className:"container",children:r("div",{className:"flex",children:[e("img",{src:"assets/testimonial-01.png",alt:""}),r("div",{className:"content-w",children:[e("p",{className:"quote",children:"I really enjoyed working with you guys, you guys are very communicative and quick to do the job. I really can't wait to work with you again!"}),r("div",{className:"profile-w",children:[e("img",{src:"https://images.unsplash.com/photo-1584611139207-9cf4fed64188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",alt:""}),r("div",{className:"name-w",children:[e("p",{className:"name",children:"Stefani Mila"}),e("p",{className:"position",children:"CEO, Brainware"})]})]})]}),r("div",{className:"slider",children:[e("svg",{viewBox:"0 0 8 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"4",cy:"4",r:"4"})}),e("svg",{viewBox:"0 0 8 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"4",cy:"4",r:"4"})}),e("svg",{viewBox:"0 0 8 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"4",cy:"4",r:"4"})})]})]})})})}const g="/build/assets/arrow-btn-555c6b9a.svg",f="/build/assets/random-image3-c20856ce.jpg";function u(s){if(!s)return!1;const i=s.clientHeight;return s.scrollHeight>i}function l(s,i){if(s.current){const c=u(s.current);i(c)}}const v=({data:s,desc:i=!1,button:c=!1})=>{const a=t.useRef(null),[d,n]=t.useState(!1);return t.useEffect(()=>(l(a,n),window.addEventListener("resize",()=>l(a,n)),()=>{window.addEventListener("resize",()=>l(a,n))}),[]),e(m,{children:e(h,{href:w("work.show",{slug:s.slug}),className:"card-container",children:e("div",{className:"card-content",children:r("div",{className:"wrapper",children:[r("div",{className:"card-thumbnail",children:[e("img",{className:"card-image-works",src:f,alt:""}),e("div",{className:"work-category",children:e("div",{className:"category-wrapper",children:s&&s.categories&&s.categories.map(o=>e("span",{className:"category-item",children:o.name},o.id))})})]}),r("div",{className:"text",children:[e("span",{className:"card-client",children:s.client_name}),e("h2",{ref:a,className:"card-title works",children:s.title}),e("p",{className:"card-desc",children:s.excerpt}),d&&e("div",{className:"popup-text",children:s.title})]}),c&&r("div",{className:"btn btn-card",children:[e("span",{children:"See case study"}),e("img",{src:g,alt:""})]})]})})})})},y=v;export{y as C,N as T};
