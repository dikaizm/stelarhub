import{c as P,g as St,r as Ot,j as B,F as wt,a as O,b as jt}from"./app-a963bc04.js";import{F as xt}from"./FeatureCountdown-b2fdbbc0.js";import{N as Pt}from"./Navbar-8cd4d75d.js";/* empty css            */var F={exports:{}},et={exports:{}},Rt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Et=Rt,At=Et;function rt(){}function nt(){}nt.resetWarningCache=rt;var It=function(){function t(u,g,y,z,J,_){if(_!==At){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:nt,resetWarningCache:rt};return n.PropTypes=n,n};et.exports=It();var Mt=et.exports,ot=9007199254740991,kt="[object Arguments]",Ft="[object Function]",Dt="[object GeneratorFunction]",D="[object Map]",Wt="[object Object]",X="[object Promise]",W="[object Set]",Ct="[object String]",Y="[object WeakMap]",Z="[object DataView]",Lt=/[\\^$.*+?()[\]{}|]/g,Nt=/^\[object .+?Constructor\]$/,$t=/^(?:0|[1-9]\d*)$/,H="\\ud800-\\udfff",it="\\u0300-\\u036f\\ufe20-\\ufe23",at="\\u20d0-\\u20f0",st="\\ufe0e\\ufe0f",Vt="["+H+"]",C="["+it+at+"]",L="\\ud83c[\\udffb-\\udfff]",Ut="(?:"+C+"|"+L+")",ut="[^"+H+"]",ct="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",ft="\\u200d",lt=Ut+"?",ht="["+st+"]?",Gt="(?:"+ft+"(?:"+[ut,ct,pt].join("|")+")"+ht+lt+")*",Ht=ht+lt+Gt,Kt="(?:"+[ut+C+"?",C,ct,pt,Vt].join("|")+")",zt=RegExp(L+"(?="+L+")|"+Kt+Ht,"g"),Jt=RegExp("["+ft+H+it+at+st+"]"),qt=typeof P=="object"&&P&&P.Object===Object&&P,Bt=typeof self=="object"&&self&&self.Object===Object&&self,b=qt||Bt||Function("return this")();function Xt(t,e){for(var n=-1,u=t?t.length:0,g=Array(u);++n<u;)g[n]=e(t[n],n,t);return g}function Yt(t){return t.split("")}function Zt(t,e){for(var n=-1,u=Array(t);++n<t;)u[n]=e(n);return u}function Qt(t,e){return Xt(e,function(n){return t[n]})}function te(t,e){return t==null?void 0:t[e]}function ee(t){return Jt.test(t)}function re(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function ne(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function oe(t){var e=-1,n=Array(t.size);return t.forEach(function(u,g){n[++e]=[g,u]}),n}function ie(t,e){return function(n){return t(e(n))}}function ae(t){var e=-1,n=Array(t.size);return t.forEach(function(u){n[++e]=u}),n}function se(t){return ee(t)?ue(t):Yt(t)}function ue(t){return t.match(zt)||[]}var ce=Function.prototype,R=Object.prototype,M=b["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),gt=ce.toString,E=R.hasOwnProperty,w=R.toString,pe=RegExp("^"+gt.call(E).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=b.Symbol,k=tt?tt.iterator:void 0,fe=R.propertyIsEnumerable,le=ie(Object.keys,Object),N=j(b,"DataView"),$=j(b,"Map"),V=j(b,"Promise"),U=j(b,"Set"),G=j(b,"WeakMap"),he=T(N),ge=T($),ye=T(V),de=T(U),ve=T(G);function me(t,e){var n=yt(t)||xe(t)?Zt(t.length,String):[],u=n.length,g=!!u;for(var y in t)(e||E.call(t,y))&&!(g&&(y=="length"||Oe(y,u)))&&n.push(y);return n}function be(t){return w.call(t)}function Te(t){if(!vt(t)||we(t))return!1;var e=dt(t)||re(t)?pe:Nt;return e.test(T(t))}function _e(t){if(!je(t))return le(t);var e=[];for(var n in Object(t))E.call(t,n)&&n!="constructor"&&e.push(n);return e}function Se(t,e){var n=-1,u=t.length;for(e||(e=Array(u));++n<u;)e[n]=t[n];return e}function j(t,e){var n=te(t,e);return Te(n)?n:void 0}var m=be;(N&&m(new N(new ArrayBuffer(1)))!=Z||$&&m(new $)!=D||V&&m(V.resolve())!=X||U&&m(new U)!=W||G&&m(new G)!=Y)&&(m=function(t){var e=w.call(t),n=e==Wt?t.constructor:void 0,u=n?T(n):void 0;if(u)switch(u){case he:return Z;case ge:return D;case ye:return X;case de:return W;case ve:return Y}return e});function Oe(t,e){return e=e??ot,!!e&&(typeof t=="number"||$t.test(t))&&t>-1&&t%1==0&&t<e}function we(t){return!!Q&&Q in t}function je(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||R;return t===n}function T(t){if(t!=null){try{return gt.call(t)}catch{}try{return t+""}catch{}}return""}function xe(t){return Pe(t)&&E.call(t,"callee")&&(!fe.call(t,"callee")||w.call(t)==kt)}var yt=Array.isArray;function K(t){return t!=null&&Re(t.length)&&!dt(t)}function Pe(t){return mt(t)&&K(t)}function dt(t){var e=vt(t)?w.call(t):"";return e==Ft||e==Dt}function Re(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ot}function vt(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function mt(t){return!!t&&typeof t=="object"}function Ee(t){return typeof t=="string"||!yt(t)&&mt(t)&&w.call(t)==Ct}function Ae(t){if(!t)return[];if(K(t))return Ee(t)?se(t):Se(t);if(k&&t[k])return ne(t[k]());var e=m(t),n=e==D?oe:e==W?ae:Me;return n(t)}function Ie(t){return K(t)?me(t):_e(t)}function Me(t){return t?Qt(t,Ie(t)):[]}var ke=Ae;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(c){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(c[r]=a[r])}return c},u=function(){function c(o,a){for(var r=0;r<a.length;r++){var i=a[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}return function(o,a,r){return a&&c(o.prototype,a),r&&c(o,r),o}}(),g=function(o,a,r){var i=!0;t:for(;i;){var s=o,p=a,l=r;i=!1,s===null&&(s=Function.prototype);var h=Object.getOwnPropertyDescriptor(s,p);if(h===void 0){var d=Object.getPrototypeOf(s);if(d===null)return;o=d,a=p,r=l,i=!0,h=d=void 0;continue t}else{if("value"in h)return h.value;var v=h.get;return v===void 0?void 0:v.call(l)}}};function y(c,o){var a={};for(var r in c)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(c,r)&&(a[r]=c[r]);return a}function z(c,o){if(!(c instanceof o))throw new TypeError("Cannot call a class as a function")}function J(c,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);c.prototype=Object.create(o&&o.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(c,o):c.__proto__=o)}var _=Ot,f=Mt,S=ke,A=function(c){J(o,c);function o(a){z(this,o),g(Object.getPrototypeOf(o.prototype),"constructor",this).call(this,a);var r=this.props,i=r.items,s=r.random;this.state={index:s?Math.floor(Math.random()*Math.floor(i.length)):0,output:"",substrLength:0},this.timeouts=[]}return u(o,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map(function(r){return clearTimeout(r)})}},{key:"_loop",value:function(r,i){var s=setTimeout(r,i);this.timeouts.push(s);var p=100;this.timeouts.length>p&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(r,i){var s=this.state.output,p=this.props.typingInterval,l=this._type.bind(this,r,i),h=S(r);this.setState({output:h.slice(0,S(s).length+1).join("")}),s.length<h.length?this._loop(l,p):(typeof this.props.onTypingEnd=="function"&&this.props.onTypingEnd(),i())}},{key:"_erase",value:function(r){var i=this.state.output,s=this.props.deletingInterval,p=this._erase.bind(this,r),l=S(i);typeof this.props.onDeletingStart=="function"&&this.props.onDeletingStart(),this.setState({output:l.slice(0,l.length-1).join("")}),l.length!==0?this._loop(p,s):(typeof this.props.onDeletingEnd=="function"&&this.props.onDeletingEnd(),r())}},{key:"_overwrite",value:function(r,i){var s=this.state,p=s.output,l=s.substrLength,h=this.props.deletingInterval,d=this._overwrite.bind(this,r,i),v=S(r),I=S(p);this.setState({output:v.slice(0,l).concat(I.slice(l)),substrLength:l+1}),v.length!==l?this._loop(d,h):(this.setState({output:r,substrLength:0}),i())}},{key:"_animate",value:function(){var r=this,i=this.state.index,s=this.props,p=s.items,l=s.pause,h=s.emptyPause,d=s.eraseMode,v=s.random,I=this._type,bt=this._erase,Tt=this._overwrite,_t=this._animate.bind(this),x=void 0;v?x=Math.floor(Math.random()*Math.floor(p.length)):x=i===p.length-1?0:i+1;var q=function(){r.setState({index:x}),r._loop(_t,h)};typeof this.props.onTypingStart=="function"&&this.props.onTypingStart(),I.bind(this)(p[i],function(){d==="overwrite"?r._loop(Tt.bind(r,p[x],q),l):r._loop(bt.bind(r,q),l)})}},{key:"render",value:function(){var r=this.props,i=r.color,s=r.cursor;r.deletingInterval,r.emptyPause,r.items,r.pause,r.eraseMode,r.typingInterval,r.random;var p=y(r,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]);return _.createElement("span",n({style:{color:i}},p),this.state.output,s?_.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),o}(_.Component);A.propTypes={color:f.string,cursor:f.bool,deletingInterval:f.number,emptyPause:f.number,eraseMode:f.string,items:f.array,pause:f.number,typingInterval:f.number,random:f.bool,onTypingStart:f.func,onTypingEnd:f.func,onDeletingStart:f.func,onDeletingEnd:f.func},A.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=A,t.exports=e.default})(F,F.exports);var Fe=F.exports;const De=St(Fe);function Ve({data:t}){return B(wt,{children:[O(jt,{title:""}),O(Pt,{}),O(xt,{targetDate:"2023-10-18T23:59:59"}),B("div",{children:[O(De,{items:["first","second","third"]}),O("span",{children:".com"})]})]})}export{Ve as default};