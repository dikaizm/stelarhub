import{r as d,a as e,j as s}from"./app-a963bc04.js";const p="/build/assets/work-in-progress-f983fd5c.svg";function w({targetDate:h}){const t=new Date(h).getTime(),[r,u]=d.useState(n(t));d.useEffect(()=>{const i=setInterval(()=>{u(n(t))},1e3);return()=>clearInterval(i)},[t]);function n(i){const f=new Date().getTime(),a=i-f;let[c,l,m,o]=[0,0,0,0];return a>0&&(c=Math.floor(a/(1e3*60*60*24)),l=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),m=Math.floor(a%(1e3*60*60)/(1e3*60)),o=Math.floor(a%(1e3*60)/1e3)),{days:c,hours:l,minutes:m,seconds:o}}return e("section",{className:"s-feature-countdown",children:s("div",{className:"container",children:[e("div",{className:"image-container",children:e("img",{src:p,alt:"Work in progress..."})}),s("div",{className:"content-wrapper",children:[s("div",{className:"content-head",children:[e("h1",{children:"Kami akan segera hadir."}),e("p",{children:"Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified."})]}),s("div",{className:"timer-wrapper",children:[s("div",{className:"timer-item",children:[e("span",{className:"timer-num",children:r.days}),e("span",{className:"timer-label",children:"Hari"})]}),s("div",{className:"timer-item",children:[e("span",{className:"timer-num",children:r.hours}),e("span",{className:"timer-label",children:"Jam"})]}),s("div",{className:"timer-item",children:[e("span",{className:"timer-num",children:r.minutes}),e("span",{className:"timer-label",children:"Menit"})]}),s("div",{className:"timer-item",children:[e("span",{className:"timer-num",children:r.seconds}),e("span",{className:"timer-label",children:"Detik"})]})]})]})]})})}export{w as F};