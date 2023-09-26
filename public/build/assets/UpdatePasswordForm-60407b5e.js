import{r as f,W as y,j as a,a as s}from"./app-2357662c.js";import{T as d,I as c}from"./TextInput-728e9c5a.js";import{I as p}from"./InputLabel-be6b4ef7.js";import{P as x}from"./PrimaryButton-beb1b841.js";import{t as N}from"./transition-4d47329a.js";function E({className:h=""}){const l=f.useRef(),u=f.useRef(),{data:e,setData:t,errors:o,put:v,reset:n,processing:g,recentlySuccessful:_}=y({current_password:"",password:"",password_confirmation:""});return a("section",{className:h,children:[a("header",{children:[s("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),a("form",{onSubmit:r=>{r.preventDefault(),v(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:i=>{var m,w;i.password&&(n("password","password_confirmation"),(m=l.current)==null||m.focus()),i.current_password&&(n("current_password"),(w=u.current)==null||w.focus())}})},className:"mt-6 space-y-6",children:[a("div",{children:[s(p,{htmlFor:"current_password",value:"Current Password"}),s(d,{id:"current_password",ref:u,value:e.current_password,onChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:o.current_password,className:"mt-2"})]}),a("div",{children:[s(p,{htmlFor:"password",value:"New Password"}),s(d,{id:"password",ref:l,value:e.password,onChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:o.password,className:"mt-2"})]}),a("div",{children:[s(p,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(d,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:o.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center gap-4",children:[s(x,{disabled:g,children:"Save"}),s(N,{show:_,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{E as default};
