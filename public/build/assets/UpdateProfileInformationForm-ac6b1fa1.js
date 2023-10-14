import{q as v,W as g,j as t,a as e,d as x}from"./app-a963bc04.js";import{T as m,I as o}from"./TextInput-80a55e6b.js";import{I as l}from"./InputLabel-96ae9913.js";import{P as y}from"./PrimaryButton-2ba85ff9.js";import{t as N}from"./transition-5452aed9.js";/* empty css            */function S({mustVerifyEmail:c,status:d,className:u=""}){const r=v().props.auth.user,{data:i,setData:s,patch:f,errors:n,processing:p,recentlySuccessful:h}=g({name:r.name,email:r.email});return t("section",{className:u,children:[t("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),t("form",{onSubmit:a=>{a.preventDefault(),f(route("profile.update"))},className:"mt-6 space-y-6",children:[t("div",{children:[e(l,{htmlFor:"name",value:"Name"}),e(m,{id:"name",className:"mt-1 block w-full",value:i.name,onChange:a=>s("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e(o,{className:"mt-2",message:n.name})]}),t("div",{children:[e(l,{htmlFor:"email",value:"Email"}),e(m,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,onChange:a=>s("email",a.target.value),required:!0,autoComplete:"username"}),e(o,{className:"mt-2",message:n.email})]}),c&&r.email_verified_at===null&&t("div",{children:[t("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e(x,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),t("div",{className:"flex items-center gap-4",children:[e(y,{disabled:p,children:"Save"}),e(N,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{S as default};