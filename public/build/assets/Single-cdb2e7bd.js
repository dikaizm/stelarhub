import{c as w,r as C,g as st,m as I,j as g,F as he,a as h,b as ct,e as ut,_ as ft}from"./app-df876f9b.js";import{N as dt}from"./Navbar-cd07a206.js";import{l as pt}from"./index.m-803090db.js";import{g as ht,C as mt}from"./CardPost-e487603c.js";import{r as vt}from"./random-image-c6bab16a.js";import{F as gt}from"./Footer-6c7aa248.js";/* empty css            */function yt(e){const t=new Date(e),r=["January","February","March","April","May","June","July","August","September","October","November","December"],n=t.getDate(),a=r[t.getMonth()],s=t.getFullYear();return`${n} ${a} ${s}`}var ne={},ie={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(ie);var f={},_=w&&w.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),L=w&&w.__assign||function(){return L=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},L.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});f.cloneNode=f.hasChildren=f.isDocument=f.isDirective=f.isComment=f.isText=f.isCDATA=f.isTag=f.Element=f.Document=f.CDATA=f.NodeWithChildren=f.ProcessingInstruction=f.Comment=f.Text=f.DataNode=f.Node=void 0;var b=ie,ae=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),oe(this,t)},e}();f.Node=ae;var V=function(e){_(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(ae);f.DataNode=V;var De=function(e){_(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=b.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(V);f.Text=De;var Me=function(e){_(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=b.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(V);f.Comment=Me;var Le=function(e){_(t,e);function t(r,n){var a=e.call(this,n)||this;return a.name=r,a.type=b.ElementType.Directive,a}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(V);f.ProcessingInstruction=Le;var $=function(e){_(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(ae);f.NodeWithChildren=$;var He=function(e){_(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=b.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}($);f.CDATA=He;var Fe=function(e){_(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=b.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}($);f.Document=Fe;var je=function(e){_(t,e);function t(r,n,a,s){a===void 0&&(a=[]),s===void 0&&(s=r==="script"?b.ElementType.Script:r==="style"?b.ElementType.Style:b.ElementType.Tag);var c=e.call(this,a)||this;return c.name=r,c.attribs=n,c.type=s,c}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var a,s;return{name:n,value:r.attribs[n],namespace:(a=r["x-attribsNamespace"])===null||a===void 0?void 0:a[n],prefix:(s=r["x-attribsPrefix"])===null||s===void 0?void 0:s[n]}})},enumerable:!1,configurable:!0}),t}($);f.Element=je;function ze(e){return(0,b.isTag)(e)}f.isTag=ze;function Be(e){return e.type===b.ElementType.CDATA}f.isCDATA=Be;function Ve(e){return e.type===b.ElementType.Text}f.isText=Ve;function $e(e){return e.type===b.ElementType.Comment}f.isComment=$e;function Ge(e){return e.type===b.ElementType.Directive}f.isDirective=Ge;function Ue(e){return e.type===b.ElementType.Root}f.isDocument=Ue;function Et(e){return Object.prototype.hasOwnProperty.call(e,"children")}f.hasChildren=Et;function oe(e,t){t===void 0&&(t=!1);var r;if(Ve(e))r=new De(e.data);else if($e(e))r=new Me(e.data);else if(ze(e)){var n=t?K(e.children):[],a=new je(e.name,L({},e.attribs),n);n.forEach(function(i){return i.parent=a}),e.namespace!=null&&(a.namespace=e.namespace),e["x-attribsNamespace"]&&(a["x-attribsNamespace"]=L({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(a["x-attribsPrefix"]=L({},e["x-attribsPrefix"])),r=a}else if(Be(e)){var n=t?K(e.children):[],s=new He(n);n.forEach(function(l){return l.parent=s}),r=s}else if(Ue(e)){var n=t?K(e.children):[],c=new Fe(n);n.forEach(function(l){return l.parent=c}),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),r=c}else if(Ge(e)){var o=new Le(e.name,e.data);e["x-name"]!=null&&(o["x-name"]=e["x-name"],o["x-publicId"]=e["x-publicId"],o["x-systemId"]=e["x-systemId"]),r=o}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}f.cloneNode=oe;function K(e){for(var t=e.map(function(n){return oe(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=w&&w.__createBinding||(Object.create?function(o,i,l,p){p===void 0&&(p=l);var v=Object.getOwnPropertyDescriptor(i,l);(!v||("get"in v?!i.__esModule:v.writable||v.configurable))&&(v={enumerable:!0,get:function(){return i[l]}}),Object.defineProperty(o,p,v)}:function(o,i,l,p){p===void 0&&(p=l),o[p]=i[l]}),r=w&&w.__exportStar||function(o,i){for(var l in o)l!=="default"&&!Object.prototype.hasOwnProperty.call(i,l)&&t(i,o,l)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=ie,a=f;r(f,e);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},c=function(){function o(i,l,p){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof l=="function"&&(p=l,l=s),typeof i=="object"&&(l=i,i=void 0),this.callback=i??null,this.options=l??s,this.elementCB=p??null}return o.prototype.onparserinit=function(i){this.parser=i},o.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},o.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},o.prototype.onerror=function(i){this.handleCallback(i)},o.prototype.onclosetag=function(){this.lastNode=null;var i=this.tagStack.pop();this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(i)},o.prototype.onopentag=function(i,l){var p=this.options.xmlMode?n.ElementType.Tag:void 0,v=new a.Element(i,l,void 0,p);this.addNode(v),this.tagStack.push(v)},o.prototype.ontext=function(i){var l=this.lastNode;if(l&&l.type===n.ElementType.Text)l.data+=i,this.options.withEndIndices&&(l.endIndex=this.parser.endIndex);else{var p=new a.Text(i);this.addNode(p),this.lastNode=p}},o.prototype.oncomment=function(i){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=i;return}var l=new a.Comment(i);this.addNode(l),this.lastNode=l},o.prototype.oncommentend=function(){this.lastNode=null},o.prototype.oncdatastart=function(){var i=new a.Text(""),l=new a.CDATA([i]);this.addNode(l),i.parent=l,this.lastNode=i},o.prototype.oncdataend=function(){this.lastNode=null},o.prototype.onprocessinginstruction=function(i,l){var p=new a.ProcessingInstruction(i,l);this.addNode(p)},o.prototype.handleCallback=function(i){if(typeof this.callback=="function")this.callback(i,this.dom);else if(i)throw i},o.prototype.addNode=function(i){var l=this.tagStack[this.tagStack.length-1],p=l.children[l.children.length-1];this.options.withStartIndices&&(i.startIndex=this.parser.startIndex),this.options.withEndIndices&&(i.endIndex=this.parser.endIndex),l.children.push(i),p&&(i.prev=p,p.next=i),i.parent=l,this.lastNode=null},o}();e.DomHandler=c,e.default=c})(ne);var me="html",ve="head",F="body",Tt=/<([a-zA-Z]+[0-9]?)/,ge=/<head[^]*>/i,ye=/<body[^]*>/i,z=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},te=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},Ee=typeof window=="object"&&window.DOMParser;if(typeof Ee=="function"){var bt=new Ee,St="text/html";te=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),bt.parseFromString(e,St)},z=te}if(typeof document=="object"&&document.implementation){var j=document.implementation.createHTMLDocument();z=function(e,t){if(t){var r=j.documentElement.querySelector(t);return r.innerHTML=e,j}return j.documentElement.innerHTML=e,j}}var Z=typeof document=="object"?document.createElement("template"):{},re;Z.content&&(re=function(e){return Z.innerHTML=e,Z.content.childNodes});function xt(e){var t,r=e.match(Tt);r&&r[1]&&(t=r[1].toLowerCase());var n,a,s;switch(t){case me:return n=te(e),ge.test(e)||(a=n.querySelector(ve),a&&a.parentNode.removeChild(a)),ye.test(e)||(a=n.querySelector(F),a&&a.parentNode.removeChild(a)),n.querySelectorAll(me);case ve:case F:return n=z(e),s=n.querySelectorAll(t),ye.test(e)&&ge.test(e)?s[0].parentNode.childNodes:s;default:return re?re(e):(a=z(e,F).querySelector(F),a.childNodes)}}var wt=xt,le={},Xe={};Xe.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"];var G=ne,Ot=Xe,Te=Ot.CASE_SENSITIVE_TAG_NAMES,Ct=G.Comment,kt=G.Element,_t=G.ProcessingInstruction,Nt=G.Text,We={},Q;for(var ee=0,At=Te.length;ee<At;ee++)Q=Te[ee],We[Q.toLowerCase()]=Q;function Pt(e){return We[e]}function Ye(e){for(var t={},r,n=0,a=e.length;n<a;n++)r=e[n],t[r.name]=r.value;return t}function Rt(e){e=e.toLowerCase();var t=Pt(e);return t||e}function qe(e,t,r){t=t||null;for(var n=[],a,s=0,c=e.length;s<c;s++){var o=e[s],i;switch(o.nodeType){case 1:a=Rt(o.nodeName),i=new kt(a,Ye(o.attributes)),i.children=qe(a==="template"?o.content.childNodes:o.childNodes,i);break;case 3:i=new Nt(o.nodeValue);break;case 8:i=new Ct(o.nodeValue);break;default:continue}var l=n[s-1]||null;l&&(l.next=i),i.parent=t,i.prev=l,i.next=null,n.push(i)}return r&&(i=new _t(r.substring(0,r.indexOf(" ")).toLowerCase(),r),i.next=n[0]||null,i.parent=t,n.unshift(i),n[1]&&(n[1].prev=n[0])),n}le.formatAttributes=Ye;le.formatDOM=qe;var It=wt,Dt=le,Mt=Dt.formatDOM,Lt=/<(![a-zA-Z\s]+)>/;function Ht(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(e==="")return[];var t=e.match(Lt),r;return t&&t[1]&&(r=t[1]),Mt(It(e),null,r)}var Ft=Ht,S={},U={},jt=0;U.SAME=jt;var zt=1;U.CAMELCASE=zt;U.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};Object.defineProperty(S,"__esModule",{value:!0});function Bt(e,t){return Vt(e)||$t(e,t)||Gt(e,t)||Ut()}function Vt(e){if(Array.isArray(e))return e}function $t(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,s=!1,c,o;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(i){s=!0,o=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(s)throw o}}return n}}function Gt(e,t){if(e){if(typeof e=="string")return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return be(e,t)}}function be(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Je=0,N=1,X=2,W=3,se=4,Ke=5,Ze=6;function Xt(e){return y.hasOwnProperty(e)?y[e]:null}function T(e,t,r,n,a,s,c){this.acceptsBooleans=t===X||t===W||t===se,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var y={},Wt=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];Wt.forEach(function(e){y[e]=new T(e,Je,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=Bt(e,2),r=t[0],n=t[1];y[r]=new T(r,N,!1,n,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){y[e]=new T(e,X,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){y[e]=new T(e,X,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){y[e]=new T(e,W,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){y[e]=new T(e,W,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){y[e]=new T(e,se,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){y[e]=new T(e,Ze,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){y[e]=new T(e,Ke,!1,e.toLowerCase(),null,!1,!1)});var ce=/[\-\:]([a-z])/g,ue=function(t){return t[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(ce,ue);y[t]=new T(t,N,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(ce,ue);y[t]=new T(t,N,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ce,ue);y[t]=new T(t,N,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){y[e]=new T(e,N,!1,e.toLowerCase(),null,!1,!1)});var Yt="xlinkHref";y[Yt]=new T("xlinkHref",N,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){y[e]=new T(e,N,!1,e.toLowerCase(),null,!0,!0)});var fe=U,qt=fe.CAMELCASE,Jt=fe.SAME,Se=fe.possibleStandardNames,Kt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Zt=Kt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Qt=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Zt+"]*$")),er=Object.keys(Se).reduce(function(e,t){var r=Se[t];return r===Jt?e[t]=t:r===qt?e[t.toLowerCase()]=t:e[t]=r,e},{});S.BOOLEAN=W;S.BOOLEANISH_STRING=X;S.NUMERIC=Ke;S.OVERLOADED_BOOLEAN=se;S.POSITIVE_NUMERIC=Ze;S.RESERVED=Je;S.STRING=N;S.getPropertyInfo=Xt;S.isCustomAttribute=Qt;S.possibleStandardNames=er;var de={},pe={exports:{}},xe=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,tr=/\n/g,rr=/^\s*/,nr=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ir=/^:\s*/,ar=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,or=/^[;\s]*/,lr=/^\s+|\s+$/g,sr=`
`,we="/",Oe="*",R="",cr="comment",ur="declaration",fr=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function a(d){var u=d.match(tr);u&&(r+=u.length);var m=d.lastIndexOf(sr);n=~m?d.length-m:n+d.length}function s(){var d={line:r,column:n};return function(u){return u.position=new c(d),l(),u}}function c(d){this.start=d,this.end={line:r,column:n},this.source=t.source}c.prototype.content=e;function o(d){var u=new Error(t.source+":"+r+":"+n+": "+d);if(u.reason=d,u.filename=t.source,u.line=r,u.column=n,u.source=e,!t.silent)throw u}function i(d){var u=d.exec(e);if(u){var m=u[0];return a(m),e=e.slice(m.length),u}}function l(){i(rr)}function p(d){var u;for(d=d||[];u=v();)u!==!1&&d.push(u);return d}function v(){var d=s();if(!(we!=e.charAt(0)||Oe!=e.charAt(1))){for(var u=2;R!=e.charAt(u)&&(Oe!=e.charAt(u)||we!=e.charAt(u+1));)++u;if(u+=2,R===e.charAt(u-1))return o("End of comment missing");var m=e.slice(2,u-2);return n+=2,a(m),e=e.slice(u),n+=2,d({type:cr,comment:m})}}function E(){var d=s(),u=i(nr);if(u){if(v(),!i(ir))return o("property missing ':'");var m=i(ar),x=d({type:ur,property:Ce(u[0].replace(xe,R)),value:m?Ce(m[0].replace(xe,R)):R});return i(or),x}}function P(){var d=[];p(d);for(var u;u=E();)u!==!1&&(d.push(u),p(d));return d}return l(),P()};function Ce(e){return e?e.replace(lr,R):R}var dr=fr;function Qe(e,t){var r=null;if(!e||typeof e!="string")return r;for(var n,a=dr(e),s=typeof t=="function",c,o,i=0,l=a.length;i<l;i++)n=a[i],c=n.property,o=n.value,s?t(c,o,n):o&&(r||(r={}),r[c]=o);return r}pe.exports=Qe;pe.exports.default=Qe;var pr=pe.exports,Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.camelCase=void 0;var hr=/^--[a-zA-Z0-9-]+$/,mr=/-([a-z])/g,vr=/^[^-]+$/,gr=/^-(webkit|moz|ms|o|khtml)-/,yr=/^-(ms)-/,Er=function(e){return!e||vr.test(e)||hr.test(e)},Tr=function(e,t){return t.toUpperCase()},ke=function(e,t){return"".concat(t,"-")},br=function(e,t){return t===void 0&&(t={}),Er(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(yr,ke):e=e.replace(gr,ke),e.replace(mr,Tr))};Y.camelCase=br;var Sr=w&&w.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});var xr=Sr(pr),wr=Y;function Or(e,t){var r={};return!e||typeof e!="string"||(0,xr.default)(e,function(n,a){n&&a&&(r[(0,wr.camelCase)(n,t)]=a)}),r}de.default=Or;var Cr=C,kr=de.default;function _r(e,t){if(!e||typeof e!="object")throw new TypeError("First argument must be an object");var r=typeof t=="function",n={},a={};for(var s in e){var c=e[s];if(r&&(n=t(s,c),n&&n.length===2)){a[n[0]]=n[1];continue}typeof c=="string"&&(a[c]=s)}return a}var Nr=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function Ar(e,t){return e.indexOf("-")===-1?t&&typeof t.is=="string":!Nr.has(e)}var Pr={reactCompat:!0};function Rr(e,t){if(e!=null)try{t.style=kr(e,Pr)}catch{t.style={}}}var Ir=Cr.version.split(".")[0]>=16,et=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function Dr(e){return!et.has(e.name)}function Mr(e){return e}var tt={PRESERVE_CUSTOM_ATTRIBUTES:Ir,ELEMENTS_WITH_NO_TEXT_CHILDREN:et,invertObject:_r,isCustomComponent:Ar,setStyleProp:Rr,canTextBeChildOfNode:Dr,returnFirstArg:Mr},M=S,_e=tt,Lr=["checked","value"],Hr=["input","select","textarea"],Fr={reset:!0,submit:!0},rt=function(t,r){t=t||{};var n,a,s,c,o,i={},l=t.type&&Fr[t.type];for(n in t){if(s=t[n],M.isCustomAttribute(n)){i[n]=s;continue}if(a=n.toLowerCase(),c=Ne(a),c){switch(o=M.getPropertyInfo(c),Lr.indexOf(c)!==-1&&Hr.indexOf(r)!==-1&&!l&&(c=Ne("default"+a)),i[c]=s,o&&o.type){case M.BOOLEAN:i[c]=!0;break;case M.OVERLOADED_BOOLEAN:s===""&&(i[c]=!0);break}continue}_e.PRESERVE_CUSTOM_ATTRIBUTES&&(i[n]=s)}return _e.setStyleProp(t.style,i),i};function Ne(e){return M.possibleStandardNames[e]}var jr=C,zr=rt,H=tt,Br=H.setStyleProp,Vr=H.canTextBeChildOfNode;function nt(e,t){t=t||{};for(var r=t.library||jr,n=r.cloneElement,a=r.createElement,s=r.isValidElement,c=[],o,i,l=typeof t.replace=="function",p=t.transform||H.returnFirstArg,v,E,P,d=t.trim,u=0,m=e.length;u<m;u++){if(o=e[u],l&&(v=t.replace(o),s(v))){m>1&&(v=n(v,{key:v.key||u})),c.push(p(v,o,u));continue}if(o.type==="text"){if(i=!o.data.trim().length,i&&o.parent&&!Vr(o.parent)||d&&i)continue;c.push(p(o.data,o,u));continue}switch(E=o.attribs,$r(o)?Br(E.style,E):E&&(E=zr(E,o.name)),P=null,o.type){case"script":case"style":o.children[0]&&(E.dangerouslySetInnerHTML={__html:o.children[0].data});break;case"tag":o.name==="textarea"&&o.children[0]?E.defaultValue=o.children[0].data:o.children&&o.children.length&&(P=nt(o.children,t));break;default:continue}m>1&&(E.key=u),c.push(p(a(o.name,E,P),o,u))}return c.length===1?c[0]:c}function $r(e){return H.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&H.isCustomComponent(e.name,e.attribs)}var Gr=nt,q=ne,D=Ft,Ur=rt,it=Gr;D=typeof D.default=="function"?D.default:D;var Xr={lowerCaseAttributeNames:!1};function O(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");return e===""?[]:(t=t||{},it(D(e,t.htmlparser2||Xr),t))}O.domToReact=it;O.htmlToDOM=D;O.attributesToProps=Ur;O.Comment=q.Comment;O.Element=q.Element;O.ProcessingInstruction=q.ProcessingInstruction;O.Text=q.Text;var Wr=O;O.default=O;const A=st(Wr);A.domToReact;A.htmlToDOM;A.attributesToProps;A.Comment;A.Element;A.ProcessingInstruction;A.Text;var at={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},B=I.createContext&&I.createContext(at),k=globalThis&&globalThis.__assign||function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},k.apply(this,arguments)},Yr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function ot(e){return e&&e.map(function(t,r){return I.createElement(t.tag,k({key:r},t.attr),ot(t.child))})}function J(e){return function(t){return I.createElement(qr,k({attr:k({},e.attr)},t),ot(e.child))}}function qr(e){var t=function(r){var n=e.attr,a=e.size,s=e.title,c=Yr(e,["attr","size","title"]),o=a||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),I.createElement("svg",k({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:i,style:k(k({color:e.color||r.color},r.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&I.createElement("title",null,s),e.children)};return B!==void 0?I.createElement(B.Consumer,null,function(r){return t(r)}):t(at)}function Ae(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Pe(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function Re(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function Ie(e){return J({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",clipRule:"evenodd"}}]})(e)}function nn({post:e,postsByCategory:t}){const a=yt(e.updated_at),s=ht(e.body),[c,o]=C.useState("default"),[i,l]=C.useState(!1),[p,v]=C.useState(!1),[E,P]=C.useState(0),d=C.useRef(null),u=m=>{ut.post(pt("post.like",{id:e.id,isLike:m})).then(x=>{x.data.feedbackType==="1"?o("like"):o("dislike")}).catch(x=>{ft.error("Oops! Terjadi kesalahan",{duration:3e3,position:"top-center",style:{borderRadius:"999px"},icon:"😢"})})};return C.useEffect(()=>{if(d.current){const x=d.current.clientHeight;P(x),v(window.scrollY>x-250)}const m=()=>{const x=window.scrollY,lt=80;E&&v(x>E-250),x>=lt?l(!0):l(!1)};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[E]),g(he,{children:[h(ct,{title:e.title}),h(dt,{}),g("main",{id:"stories_single",children:[g("article",{className:"container",children:[h("div",{className:"breadcrumb",children:g("span",{children:["Home ",">"," Stories ",">"," ",e.category.name," ",">"," ",e.title]})}),g("section",{className:"article-wrapper",ref:d,children:[h("aside",{className:`article-share-aside ${i?"fixed":""} ${p?"hide":""}`,children:g("div",{className:"flex-col",children:[h("span",{children:"Bagikan"}),g(B.Provider,{value:{size:"1.8rem",className:"share-icons"},children:[h(Re,{}),h(Pe,{}),h(Ae,{}),h(Ie,{})]})]})}),g("div",{className:"article-container",children:[g("div",{className:"article-header",children:[h("div",{className:"article-title",children:h("h1",{children:e.title})}),g("div",{className:"article-attr",children:[g("div",{className:"attr-info",children:[g("span",{children:[e.author.name," • ",a]}),g("span",{children:["Baca ",s," menit"]})]}),h("div",{className:"article-image",children:h("img",{src:vt,alt:""})})]})]}),h("div",{className:"article-content",children:A(e.body)})]})]}),g("div",{className:"article-share-row",children:[g("div",{className:"feedback-wrapper",children:[h("span",{className:`feedback-message ${c!=="default"?"active":""}`,children:c==="default"?"Apakah informasi ini membantu?":c==="like"?"🚀 Terima kasih atas tanggapanmu!":c==="dislike"?"😔 Kami mendengarmu, terima kasih!":null}),c==="default"&&g(he,{children:[h("button",{type:"button",onClick:()=>u(!0),children:"Ya"}),h("button",{type:"button",onClick:()=>u(!1),children:"Tidak"})]})]}),g("div",{className:"share-wrapper",children:[h("span",{children:"Bagikan"}),g(B.Provider,{value:{size:"1.8rem",className:"share-icons"},children:[h(Re,{}),h(Pe,{}),h(Ae,{}),h(Ie,{})]})]})]})]}),g("section",{className:"collection related-articles",children:[g("div",{className:"container section-title-wrapper",children:[h("div",{className:"flex-col",children:h("h2",{className:"section-title",children:"Artikel Terkait"})}),h("div",{className:"btn-wrapper",children:h("a",{href:"#",className:"btn btn-primary",children:"VIEW MORE"})})]}),h("div",{className:"container section-content-wrapper",children:h("div",{className:"carousel",children:t&&t.length>0&&t.map(m=>h(mt,{data:m},m.id))})})]})]}),h(gt,{})]})}export{nn as default};
