import{r as o,j as a,F as m,a as e,b}from"./app-a963bc04.js";import{N as g}from"./Navbar-8cd4d75d.js";import{C as n}from"./CardPost-4751053f.js";import{F as f}from"./Footer-ffa9d059.js";/* empty css            */import"./index.m-803090db.js";import"./random-image-c6bab16a.js";const w="/build/assets/stories-search-44f2a50e.svg";function B({posts:s,categories:t,recommendations:l}){const[d,p]=o.useState({website:[],machine_learning:[]}),[h,N]=o.useState({}),[u,v]=o.useState("");return o.useEffect(()=>{if(s){const r=s.filter(c=>c.category.codename==="WEB"),i=s.filter(c=>c.category.codename==="MLG");p({website:r,machine_learning:i})}if(t){const r={};for(let i=0;i<t.length;i++){const c=t[i];r[c.codename]=c.desc}N(r)}},[s,t]),a(m,{children:[e(b,{title:"Stories"}),e(g,{}),a("main",{id:"stories",children:[a("section",{className:"container hero",children:[a("div",{className:"flex-col hero-title-wrapper",children:[e("h1",{className:"hero-title-generic text-blue-g",children:"Ada Apa di Stelar"}),e("p",{className:"hero-desc",children:"Cerita kami, berita seru, dan tips terkini. Baca semua artikel soal Stelar di sini."})]}),a("div",{className:"flex-row hero-search-wrapper",children:[e("label",{htmlFor:"stories-search"}),a("div",{className:"search-bar",children:[e("input",{className:"search-input",id:"stories-search",type:"text",name:"stories-search",placeholder:"Search",value:u,onChange:r=>{v(r.target.value)}}),a("button",{className:"search-submit",children:[e("img",{src:w,alt:""}),e("span",{children:"Cari"})]})]})]})]}),s&&a(m,{children:[e("section",{className:"container recommended",children:e("div",{className:"section-content-wrapper",children:l&&l.length>0&&a("div",{className:"grid-wrapper",children:[e("div",{className:"main-col",children:e(n,{data:l[0],isCategoryVisible:!0})}),e("div",{className:"side-col",children:l.slice(1,5).map((r,i)=>e(n,{data:r,isDescVisible:!1},i))})]})})}),a("section",{className:"collection",children:[a("div",{className:"container section-title-wrapper",children:[a("div",{className:"flex-col",children:[e("h2",{className:"section-title",children:"Artikel Terbaru"}),e("span",{className:"section-desc",children:"Supply and allocation algorithms that match users, drivers, and vendors in the real world"})]}),e("div",{className:"btn-wrapper",children:e("a",{href:"#",className:"btn btn-primary",children:"VIEW MORE"})})]}),e("div",{className:"container section-content-wrapper",children:e("div",{className:"carousel",children:s.length>0&&s.map(r=>e(n,{data:r},r.id))})})]}),a("section",{className:"collection",children:[a("div",{className:"container section-title-wrapper",children:[a("div",{className:"flex-col",children:[e("h2",{className:"section-title",children:"Website"}),e("span",{className:"section-desc",children:h.WEB})]}),e("div",{className:"btn-wrapper",children:e("a",{href:"#",className:"btn btn-primary",children:"VIEW MORE"})})]}),e("div",{className:"container section-content-wrapper",children:e("div",{className:"carousel",children:d.website.length>0&&d.website.map(r=>e(n,{data:r},r.id))})})]}),a("section",{className:"collection",children:[a("div",{className:"container section-title-wrapper",children:[a("div",{className:"flex-col",children:[e("h2",{className:"section-title",children:"Machine Learning"}),e("span",{className:"section-desc",children:h.MLG})]}),e("div",{className:"btn-wrapper",children:e("a",{href:"#",className:"btn btn-primary",children:"VIEW MORE"})})]}),e("div",{className:"container section-content-wrapper",children:e("div",{className:"carousel",children:d.machine_learning.length>0&&d.machine_learning.map(r=>e(n,{data:r},r.id))})})]})]})]}),e(f,{})]})}export{B as default};