(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Gl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Wl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Fe(s)?d_(s):Wl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Fe(t))return t;if(_e(t))return t}}const l_=/;(?![^(]*\))/g,u_=/:([^]+)/,h_=/\/\*.*?\*\//gs;function d_(t){const e={};return t.replace(h_,"").split(l_).forEach(n=>{if(n){const s=n.split(u_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ql(t){let e="";if(Fe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Ql(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const f_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=Gl(f_);function lp(t){return!!t||t===""}function g_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=da(t[s],e[s]);return n}function da(t,e){if(t===e)return!0;let n=$h(t),s=$h(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ni(t),s=ni(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?g_(t,e):!1;if(n=_e(t),s=_e(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!da(t[o],e[o]))return!1}}return String(t)===String(e)}function m_(t,e){return t.findIndex(n=>da(n,e))}const Ke=t=>Fe(t)?t:t==null?"":z(t)||_e(t)&&(t.toString===dp||!ee(t.toString))?JSON.stringify(t,up,2):String(t),up=(t,e)=>e&&e.__v_isRef?up(t,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:pa(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!z(e)&&!fp(e)?String(e):e,Ee={},Bs=[],Vt=()=>{},y_=()=>!1,v_=/^on[^a-z]/,fa=t=>v_.test(t),Xl=t=>t.startsWith("onUpdate:"),at=Object.assign,Yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},__=Object.prototype.hasOwnProperty,ae=(t,e)=>__.call(t,e),z=Array.isArray,js=t=>Ai(t)==="[object Map]",pa=t=>Ai(t)==="[object Set]",$h=t=>Ai(t)==="[object Date]",ee=t=>typeof t=="function",Fe=t=>typeof t=="string",ni=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",hp=t=>_e(t)&&ee(t.then)&&ee(t.catch),dp=Object.prototype.toString,Ai=t=>dp.call(t),w_=t=>Ai(t).slice(8,-1),fp=t=>Ai(t)==="[object Object]",Jl=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mo=Gl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E_=/-(\w)/g,rn=ga(t=>t.replace(E_,(e,n)=>n?n.toUpperCase():"")),I_=/\B([A-Z])/g,fr=ga(t=>t.replace(I_,"-$1").toLowerCase()),ma=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=ga(t=>t?`on${ma(t)}`:""),si=(t,e)=>!Object.is(t,e),yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ko=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},No=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vh;const T_=()=>Vh||(Vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Lt;class pp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function b_(t){return new pp(t)}function C_(t,e=Lt){e&&e.active&&e.effects.push(t)}function S_(){return Lt}const Zl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gp=t=>(t.w&jn)>0,mp=t=>(t.n&jn)>0,A_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},R_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];gp(r)&&!mp(r)?r.delete(t):e[n++]=r,r.w&=~jn,r.n&=~jn}e.length=n}},Wc=new WeakMap;let Fr=0,jn=1;const Qc=30;let Mt;const ds=Symbol(""),Xc=Symbol("");class eu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,C_(this,s)}run(){if(!this.active)return this.fn();let e=Mt,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,xn=!0,jn=1<<++Fr,Fr<=Qc?A_(this):Bh(this),this.fn()}finally{Fr<=Qc&&R_(this),jn=1<<--Fr,Mt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(Bh(this),this.onStop&&this.onStop(),this.active=!1)}}function Bh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const yp=[];function pr(){yp.push(xn),xn=!1}function gr(){const t=yp.pop();xn=t===void 0?!0:t}function yt(t,e,n){if(xn&&Mt){let s=Wc.get(t);s||Wc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Zl()),vp(r)}}function vp(t,e){let n=!1;Fr<=Qc?mp(t)||(t.n|=jn,n=!gp(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function mn(t,e,n,s,r,i){const o=Wc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Jl(n)&&a.push(o.get("length")):(a.push(o.get(ds)),js(t)&&a.push(o.get(Xc)));break;case"delete":z(t)||(a.push(o.get(ds)),js(t)&&a.push(o.get(Xc)));break;case"set":js(t)&&a.push(o.get(ds));break}if(a.length===1)a[0]&&Yc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yc(Zl(c))}}function Yc(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&jh(s);for(const s of n)s.computed||jh(s)}function jh(t,e){(t!==Mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const k_=Gl("__proto__,__v_isRef,__isVue"),_p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ni)),N_=tu(),O_=tu(!1,!0),D_=tu(!0),Hh=P_();function P_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)yt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pr();const s=le(this)[e].apply(this,n);return gr(),s}}),t}function x_(t){const e=le(this);return yt(e,"has",t),e.hasOwnProperty(t)}function tu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?X_:bp:e?Tp:Ip).get(s))return s;const o=z(s);if(!t){if(o&&ae(Hh,r))return Reflect.get(Hh,r,i);if(r==="hasOwnProperty")return x_}const a=Reflect.get(s,r,i);return(ni(r)?_p.has(r):k_(r))||(t||yt(s,"get",r),e)?a:st(a)?o&&Jl(r)?a:a.value:_e(a)?t?Cp(a):mr(a):a}}const L_=wp(),M_=wp(!0);function wp(t=!1){return function(n,s,r,i){let o=n[s];if(er(o)&&st(o)&&!st(r))return!1;if(!t&&(!Oo(r)&&!er(r)&&(o=le(o),r=le(r)),!z(n)&&st(o)&&!st(r)))return o.value=r,!0;const a=z(n)&&Jl(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===le(i)&&(a?si(r,o)&&mn(n,"set",s,r):mn(n,"add",s,r)),c}}function U_(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&mn(t,"delete",e,void 0),s}function F_(t,e){const n=Reflect.has(t,e);return(!ni(e)||!_p.has(e))&&yt(t,"has",e),n}function $_(t){return yt(t,"iterate",z(t)?"length":ds),Reflect.ownKeys(t)}const Ep={get:N_,set:L_,deleteProperty:U_,has:F_,ownKeys:$_},V_={get:D_,set(t,e){return!0},deleteProperty(t,e){return!0}},B_=at({},Ep,{get:O_,set:M_}),nu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,s=!1){t=t.__v_raw;const r=le(t),i=le(e);n||(e!==i&&yt(r,"get",e),yt(r,"get",i));const{has:o}=ya(r),a=s?nu:n?iu:ri;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Yi(t,e=!1){const n=this.__v_raw,s=le(n),r=le(t);return e||(t!==r&&yt(s,"has",t),yt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ji(t,e=!1){return t=t.__v_raw,!e&&yt(le(t),"iterate",ds),Reflect.get(t,"size",t)}function qh(t){t=le(t);const e=le(this);return ya(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function Kh(t,e){e=le(e);const n=le(this),{has:s,get:r}=ya(n);let i=s.call(n,t);i||(t=le(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?si(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function zh(t){const e=le(this),{has:n,get:s}=ya(e);let r=n.call(e,t);r||(t=le(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&mn(e,"delete",t,void 0),i}function Gh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Zi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=le(o),c=e?nu:t?iu:ri;return!t&&yt(a,"iterate",ds),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function eo(t,e,n){return function(...s){const r=this.__v_raw,i=le(r),o=js(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?nu:e?iu:ri;return!e&&yt(i,"iterate",c?Xc:ds),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function j_(){const t={get(i){return Xi(this,i)},get size(){return Ji(this)},has:Yi,add:qh,set:Kh,delete:zh,clear:Gh,forEach:Zi(!1,!1)},e={get(i){return Xi(this,i,!1,!0)},get size(){return Ji(this)},has:Yi,add:qh,set:Kh,delete:zh,clear:Gh,forEach:Zi(!1,!0)},n={get(i){return Xi(this,i,!0)},get size(){return Ji(this,!0)},has(i){return Yi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Zi(!0,!1)},s={get(i){return Xi(this,i,!0,!0)},get size(){return Ji(this,!0)},has(i){return Yi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=eo(i,!1,!1),n[i]=eo(i,!0,!1),e[i]=eo(i,!1,!0),s[i]=eo(i,!0,!0)}),[t,n,e,s]}const[H_,q_,K_,z_]=j_();function su(t,e){const n=e?t?z_:K_:t?q_:H_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const G_={get:su(!1,!1)},W_={get:su(!1,!0)},Q_={get:su(!0,!1)},Ip=new WeakMap,Tp=new WeakMap,bp=new WeakMap,X_=new WeakMap;function Y_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J_(t){return t.__v_skip||!Object.isExtensible(t)?0:Y_(w_(t))}function mr(t){return er(t)?t:ru(t,!1,Ep,G_,Ip)}function Z_(t){return ru(t,!1,B_,W_,Tp)}function Cp(t){return ru(t,!0,V_,Q_,bp)}function ru(t,e,n,s,r){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=J_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Hs(t){return er(t)?Hs(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function Oo(t){return!!(t&&t.__v_isShallow)}function Sp(t){return Hs(t)||er(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Ap(t){return ko(t,"__v_skip",!0),t}const ri=t=>_e(t)?mr(t):t,iu=t=>_e(t)?Cp(t):t;function Rp(t){xn&&Mt&&(t=le(t),vp(t.dep||(t.dep=Zl())))}function kp(t,e){t=le(t);const n=t.dep;n&&Yc(n)}function st(t){return!!(t&&t.__v_isRef===!0)}function ew(t){return Np(t,!1)}function tw(t){return Np(t,!0)}function Np(t,e){return st(t)?t:new nw(t,e)}class nw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:ri(e)}get value(){return Rp(this),this._value}set value(e){const n=this.__v_isShallow||Oo(e)||er(e);e=n?e:le(e),si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ri(e),kp(this))}}function qs(t){return st(t)?t.value:t}const sw={get:(t,e,n)=>qs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return st(r)&&!st(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Op(t){return Hs(t)?t:new Proxy(t,sw)}var Dp;class rw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Dp]=!1,this._dirty=!0,this.effect=new eu(e,()=>{this._dirty||(this._dirty=!0,kp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=le(this);return Rp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Dp="__v_isReadonly";function iw(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=Vt):(s=t.get,r=t.set),new rw(s,r,i||!r,n)}function Ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){va(i,e,n)}return r}function kt(t,e,n,s){if(ee(t)){const i=Ln(t,e,n,s);return i&&hp(i)&&i.catch(o=>{va(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(kt(t[i],e,n,s));return r}function va(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ln(c,null,10,[t,o,a]);return}}ow(t,n,r,s)}function ow(t,e,n,s=!0){console.error(t)}let ii=!1,Jc=!1;const et=[];let Xt=0;const Ks=[];let un=null,ss=0;const Pp=Promise.resolve();let ou=null;function xp(t){const e=ou||Pp;return t?e.then(this?t.bind(this):t):e}function aw(t){let e=Xt+1,n=et.length;for(;e<n;){const s=e+n>>>1;oi(et[s])<t?e=s+1:n=s}return e}function au(t){(!et.length||!et.includes(t,ii&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?et.push(t):et.splice(aw(t.id),0,t),Lp())}function Lp(){!ii&&!Jc&&(Jc=!0,ou=Pp.then(Up))}function cw(t){const e=et.indexOf(t);e>Xt&&et.splice(e,1)}function lw(t){z(t)?Ks.push(...t):(!un||!un.includes(t,t.allowRecurse?ss+1:ss))&&Ks.push(t),Lp()}function Wh(t,e=ii?Xt+1:0){for(;e<et.length;e++){const n=et[e];n&&n.pre&&(et.splice(e,1),e--,n())}}function Mp(t){if(Ks.length){const e=[...new Set(Ks)];if(Ks.length=0,un){un.push(...e);return}for(un=e,un.sort((n,s)=>oi(n)-oi(s)),ss=0;ss<un.length;ss++)un[ss]();un=null,ss=0}}const oi=t=>t.id==null?1/0:t.id,uw=(t,e)=>{const n=oi(t)-oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Up(t){Jc=!1,ii=!0,et.sort(uw);const e=Vt;try{for(Xt=0;Xt<et.length;Xt++){const n=et[Xt];n&&n.active!==!1&&Ln(n,null,14)}}finally{Xt=0,et.length=0,Mp(),ii=!1,ou=null,(et.length||Ks.length)&&Up()}}function hw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ee;d&&(r=n.map(p=>Fe(p)?p.trim():p)),h&&(r=n.map(No))}let a,c=s[a=fc(e)]||s[a=fc(rn(e))];!c&&i&&(c=s[a=fc(fr(e))]),c&&kt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,r)}}function Fp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=Fp(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):at(o,i),_e(t)&&s.set(t,o),o)}function _a(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,fr(e))||ae(t,e))}let It=null,wa=null;function Do(t){const e=It;return It=t,wa=t&&t.type.__scopeId||null,e}function yr(t){wa=t}function vr(){wa=null}function dw(t,e=It,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&rd(-1);const i=Do(e);let o;try{o=t(...r)}finally{Do(i),s._d&&rd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function pc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:v,inheritAttrs:_}=t;let b,S;const D=Do(t);try{if(n.shapeFlag&4){const B=r||s;b=Qt(u.call(B,B,h,i,p,d,v)),S=c}else{const B=e;b=Qt(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),S=e.props?c:fw(c)}}catch(B){Gr.length=0,va(B,t,1),b=dt(jt)}let R=b;if(S&&_!==!1){const B=Object.keys(S),{shapeFlag:te}=R;B.length&&te&7&&(o&&B.some(Xl)&&(S=pw(S,o)),R=Hn(R,S))}return n.dirs&&(R=Hn(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),b=R,Do(D),b}const fw=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},pw=(t,e)=>{const n={};for(const s in t)(!Xl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Qh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!_a(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Qh(s,o,l):!0:!!o;return!1}function Qh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function mw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yw=t=>t.__isSuspense;function vw(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):lw(t)}function vo(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Bt(t,e,n=!1){const s=Oe||It;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}const to={};function zs(t,e,n){return $p(t,e,n)}function $p(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ee){const a=S_()===(Oe==null?void 0:Oe.scope)?Oe:null;let c,l=!1,u=!1;if(st(t)?(c=()=>t.value,l=Oo(t)):Hs(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(R=>Hs(R)||Oo(R)),c=()=>t.map(R=>{if(st(R))return R.value;if(Hs(R))return as(R);if(ee(R))return Ln(R,a,2)})):ee(t)?e?c=()=>Ln(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),kt(t,a,3,[d])}:c=Vt,e&&s){const R=c;c=()=>as(R())}let h,d=R=>{h=S.onStop=()=>{Ln(R,a,4)}},p;if(ci)if(d=Vt,e?n&&kt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const R=gE();p=R.__watcherHandles||(R.__watcherHandles=[])}else return Vt;let v=u?new Array(t.length).fill(to):to;const _=()=>{if(S.active)if(e){const R=S.run();(s||l||(u?R.some((B,te)=>si(B,v[te])):si(R,v)))&&(h&&h(),kt(e,a,3,[R,v===to?void 0:u&&v[0]===to?[]:v,d]),v=R)}else S.run()};_.allowRecurse=!!e;let b;r==="sync"?b=_:r==="post"?b=()=>gt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),b=()=>au(_));const S=new eu(c,b);e?n?_():v=S.run():r==="post"?gt(S.run.bind(S),a&&a.suspense):S.run();const D=()=>{S.stop(),a&&a.scope&&Yl(a.scope.effects,S)};return p&&p.push(D),D}function _w(t,e,n){const s=this.proxy,r=Fe(t)?t.includes(".")?Vp(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Oe;tr(this);const a=$p(r,i.bind(s),n);return o?tr(o):fs(),a}function Vp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function as(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))as(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)as(t[n],e);else if(pa(t)||js(t))t.forEach(n=>{as(n,e)});else if(fp(t))for(const n in t)as(t[n],e);return t}function ww(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kp(()=>{t.isMounted=!0}),zp(()=>{t.isUnmounting=!0}),t}const St=[Function,Array],Ew={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:St,onEnter:St,onAfterEnter:St,onEnterCancelled:St,onBeforeLeave:St,onLeave:St,onAfterLeave:St,onLeaveCancelled:St,onBeforeAppear:St,onAppear:St,onAfterAppear:St,onAppearCancelled:St},setup(t,{slots:e}){const n=aE(),s=ww();let r;return()=>{const i=e.default&&jp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==jt){o=_;break}}const a=le(t),{mode:c}=a;if(s.isLeaving)return gc(o);const l=Xh(o);if(!l)return gc(o);const u=Zc(l,a,s,n);el(l,u);const h=n.subTree,d=h&&Xh(h);let p=!1;const{getTransitionKey:v}=l.type;if(v){const _=v();r===void 0?r=_:_!==r&&(r=_,p=!0)}if(d&&d.type!==jt&&(!rs(l,d)||p)){const _=Zc(d,a,s,n);if(el(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},gc(o);c==="in-out"&&l.type!==jt&&(_.delayLeave=(b,S,D)=>{const R=Bp(s,d);R[String(d.key)]=d,b._leaveCb=()=>{S(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},Iw=Ew;function Bp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Zc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:_,onAppear:b,onAfterAppear:S,onAppearCancelled:D}=e,R=String(t.key),B=Bp(n,t),te=(G,we)=>{G&&kt(G,s,9,we)},ge=(G,we)=>{const me=we[1];te(G,we),z(G)?G.every(Qe=>Qe.length<=1)&&me():G.length<=1&&me()},Ne={mode:i,persisted:o,beforeEnter(G){let we=a;if(!n.isMounted)if(r)we=_||a;else return;G._leaveCb&&G._leaveCb(!0);const me=B[R];me&&rs(t,me)&&me.el._leaveCb&&me.el._leaveCb(),te(we,[G])},enter(G){let we=c,me=l,Qe=u;if(!n.isMounted)if(r)we=b||c,me=S||l,Qe=D||u;else return;let Xe=!1;const Ot=G._enterCb=cn=>{Xe||(Xe=!0,cn?te(Qe,[G]):te(me,[G]),Ne.delayedLeave&&Ne.delayedLeave(),G._enterCb=void 0)};we?ge(we,[G,Ot]):Ot()},leave(G,we){const me=String(t.key);if(G._enterCb&&G._enterCb(!0),n.isUnmounting)return we();te(h,[G]);let Qe=!1;const Xe=G._leaveCb=Ot=>{Qe||(Qe=!0,we(),Ot?te(v,[G]):te(p,[G]),G._leaveCb=void 0,B[me]===t&&delete B[me])};B[me]=t,d?ge(d,[G,Xe]):Xe()},clone(G){return Zc(G,e,n,s)}};return Ne}function gc(t){if(Ea(t))return t=Hn(t),t.children=null,t}function Xh(t){return Ea(t)?t.children?t.children[0]:void 0:t}function el(t,e){t.shapeFlag&6&&t.component?el(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ze?(o.patchFlag&128&&r++,s=s.concat(jp(o.children,e,a))):(e||o.type!==jt)&&s.push(a!=null?Hn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Hp(t){return ee(t)?{setup:t,name:t.name}:t}const _o=t=>!!t.type.__asyncLoader,Ea=t=>t.type.__isKeepAlive;function Tw(t,e){qp(t,"a",e)}function bw(t,e){qp(t,"da",e)}function qp(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ia(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ea(r.parent.vnode)&&Cw(s,e,n,r),r=r.parent}}function Cw(t,e,n,s){const r=Ia(e,t,s,!0);Gp(()=>{Yl(s[e],r)},n)}function Ia(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pr(),tr(n);const a=kt(e,n,t,o);return fs(),gr(),a});return s?r.unshift(i):r.push(i),i}}const Tn=t=>(e,n=Oe)=>(!ci||t==="sp")&&Ia(t,(...s)=>e(...s),n),Sw=Tn("bm"),Kp=Tn("m"),Aw=Tn("bu"),Rw=Tn("u"),zp=Tn("bum"),Gp=Tn("um"),kw=Tn("sp"),Nw=Tn("rtg"),Ow=Tn("rtc");function Dw(t,e=Oe){Ia("ec",t,e)}function mt(t,e){const n=It;if(n===null)return t;const s=Ca(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ee]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&as(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Zn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(pr(),kt(c,n,8,[t.el,a,t,e]),gr())}}const Wp="components";function cu(t,e){return xw(Wp,t,!0,e)||t}const Pw=Symbol();function xw(t,e,n=!0,s=!1){const r=It||Oe;if(r){const i=r.type;if(t===Wp){const a=dE(i,!1);if(a&&(a===e||a===rn(e)||a===ma(rn(e))))return i}const o=Yh(r[t]||i[t],e)||Yh(r.appContext[t],e);return!o&&s?i:o}}function Yh(t,e){return t&&(t[e]||t[rn(e)]||t[ma(rn(e))])}function Po(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const tl=t=>t?og(t)?Ca(t)||t.proxy:tl(t.parent):null,zr=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>lu(t),$forceUpdate:t=>t.f||(t.f=()=>au(t.update)),$nextTick:t=>t.n||(t.n=xp.bind(t.proxy)),$watch:t=>_w.bind(t)}),mc=(t,e)=>t!==Ee&&!t.__isScriptSetup&&ae(t,e),Lw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(mc(s,e))return o[e]=1,s[e];if(r!==Ee&&ae(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==Ee&&ae(n,e))return o[e]=4,n[e];nl&&(o[e]=0)}}const u=zr[e];let h,d;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return mc(r,e)?(r[e]=n,!0):s!==Ee&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&ae(t,o)||mc(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(zr,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let nl=!0;function Mw(t){const e=lu(t),n=t.proxy,s=t.ctx;nl=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:_,deactivated:b,beforeDestroy:S,beforeUnmount:D,destroyed:R,unmounted:B,render:te,renderTracked:ge,renderTriggered:Ne,errorCaptured:G,serverPrefetch:we,expose:me,inheritAttrs:Qe,components:Xe,directives:Ot,filters:cn}=e;if(l&&Uw(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ye in o){const fe=o[ye];ee(fe)&&(s[ye]=fe.bind(n))}if(r){const ye=r.call(n,n);_e(ye)&&(t.data=mr(ye))}if(nl=!0,i)for(const ye in i){const fe=i[ye],Dt=ee(fe)?fe.bind(n,n):ee(fe.get)?fe.get.bind(n,n):Vt,Jn=!ee(fe)&&ee(fe.set)?fe.set.bind(n):Vt,Pt=Et({get:Dt,set:Jn});Object.defineProperty(s,ye,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:pt=>Pt.value=pt})}if(a)for(const ye in a)Qp(a[ye],s,n,ye);if(c){const ye=ee(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(fe=>{vo(fe,ye[fe])})}u&&Jh(u,t,"c");function De(ye,fe){z(fe)?fe.forEach(Dt=>ye(Dt.bind(n))):fe&&ye(fe.bind(n))}if(De(Sw,h),De(Kp,d),De(Aw,p),De(Rw,v),De(Tw,_),De(bw,b),De(Dw,G),De(Ow,ge),De(Nw,Ne),De(zp,D),De(Gp,B),De(kw,we),z(me))if(me.length){const ye=t.exposed||(t.exposed={});me.forEach(fe=>{Object.defineProperty(ye,fe,{get:()=>n[fe],set:Dt=>n[fe]=Dt})})}else t.exposed||(t.exposed={});te&&t.render===Vt&&(t.render=te),Qe!=null&&(t.inheritAttrs=Qe),Xe&&(t.components=Xe),Ot&&(t.directives=Ot)}function Uw(t,e,n=Vt,s=!1){z(t)&&(t=sl(t));for(const r in t){const i=t[r];let o;_e(i)?"default"in i?o=Bt(i.from||r,i.default,!0):o=Bt(i.from||r):o=Bt(i),st(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Jh(t,e,n){kt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qp(t,e,n,s){const r=s.includes(".")?Vp(n,s):()=>n[s];if(Fe(t)){const i=e[t];ee(i)&&zs(r,i)}else if(ee(t))zs(r,t.bind(n));else if(_e(t))if(z(t))t.forEach(i=>Qp(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&zs(r,i,t)}}function lu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>xo(c,l,o,!0)),xo(c,e,o)),_e(e)&&i.set(e,c),c}function xo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&xo(t,i,n,!0),r&&r.forEach(o=>xo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Fw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fw={data:Zh,props:ts,emits:ts,methods:ts,computed:ts,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ts,directives:ts,watch:Vw,provide:Zh,inject:$w};function Zh(t,e){return e?t?function(){return at(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function $w(t,e){return ts(sl(t),sl(e))}function sl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?at(at(Object.create(null),t),e):e}function Vw(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function Bw(t,e,n,s=!1){const r={},i={};ko(i,ba,1),t.propsDefaults=Object.create(null),Xp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Z_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function jw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=le(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_a(t.emitsOptions,d))continue;const p=e[d];if(c)if(ae(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const v=rn(d);r[v]=rl(c,a,v,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Xp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=fr(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=rl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function Xp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const l=e[c];let u;r&&ae(r,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_a(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=le(n),l=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=rl(r,c,h,l[h],t,!ae(l,h))}}return o}function rl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(tr(r),s=l[n]=c.call(null,e),fs())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===fr(n))&&(s=!0))}return s}function Yp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,p]=Yp(h,e,!0);at(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return _e(t)&&s.set(t,Bs),Bs;if(z(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);ed(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=rn(u);if(ed(h)){const d=i[u],p=o[h]=z(d)||ee(d)?{type:d}:Object.assign({},d);if(p){const v=sd(Boolean,p.type),_=sd(String,p.type);p[0]=v>-1,p[1]=_<0||v<_,(v>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return _e(t)&&s.set(t,l),l}function ed(t){return t[0]!=="$"}function td(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function nd(t,e){return td(t)===td(e)}function sd(t,e){return z(e)?e.findIndex(n=>nd(n,t)):ee(e)&&nd(e,t)?0:-1}const Jp=t=>t[0]==="_"||t==="$stable",uu=t=>z(t)?t.map(Qt):[Qt(t)],Hw=(t,e,n)=>{if(e._n)return e;const s=dw((...r)=>uu(e(...r)),n);return s._c=!1,s},Zp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jp(r))continue;const i=t[r];if(ee(i))e[r]=Hw(r,i,s);else if(i!=null){const o=uu(i);e[r]=()=>o}}},eg=(t,e)=>{const n=uu(e);t.slots.default=()=>n},qw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),ko(e,"_",n)):Zp(e,t.slots={})}else t.slots={},e&&eg(t,e);ko(t.slots,ba,1)},Kw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(at(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Zp(e,r)),o=e}else e&&(eg(t,e),o={default:1});if(i)for(const a in r)!Jp(a)&&!(a in o)&&delete r[a]};function tg(){return{app:null,config:{isNativeTag:y_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zw=0;function Gw(t,e){return function(s,r=null){ee(s)||(s=Object.assign({},s)),r!=null&&!_e(r)&&(r=null);const i=tg(),o=new Set;let a=!1;const c=i.app={_uid:zw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:mE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=dt(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function il(t,e,n,s,r=!1){if(z(t)){t.forEach((d,p)=>il(d,e&&(z(e)?e[p]:e),n,s,r));return}if(_o(s)&&!r)return;const i=s.shapeFlag&4?Ca(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):st(l)&&(l.value=null)),ee(c))Ln(c,a,12,[o,u]);else{const d=Fe(c),p=st(c);if(d||p){const v=()=>{if(t.f){const _=d?ae(h,c)?h[c]:u[c]:c.value;r?z(_)&&Yl(_,i):z(_)?_.includes(i)||_.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,gt(v,n)):v()}}}const gt=vw;function Ww(t){return Qw(t)}function Qw(t,e){const n=T_();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Vt,insertStaticContent:v}=t,_=(f,g,y,w=null,T=null,N=null,M=!1,k=null,O=!!g.dynamicChildren)=>{if(f===g)return;f&&!rs(f,g)&&(w=P(f),pt(f,T,N,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:C,ref:q,shapeFlag:$}=g;switch(C){case Ta:b(f,g,y,w);break;case jt:S(f,g,y,w);break;case yc:f==null&&D(g,y,w,M);break;case ze:Xe(f,g,y,w,T,N,M,k,O);break;default:$&1?te(f,g,y,w,T,N,M,k,O):$&6?Ot(f,g,y,w,T,N,M,k,O):($&64||$&128)&&C.process(f,g,y,w,T,N,M,k,O,oe)}q!=null&&T&&il(q,f&&f.ref,N,g||f,!g)},b=(f,g,y,w)=>{if(f==null)s(g.el=a(g.children),y,w);else{const T=g.el=f.el;g.children!==f.children&&l(T,g.children)}},S=(f,g,y,w)=>{f==null?s(g.el=c(g.children||""),y,w):g.el=f.el},D=(f,g,y,w)=>{[f.el,f.anchor]=v(f.children,g,y,w,f.el,f.anchor)},R=({el:f,anchor:g},y,w)=>{let T;for(;f&&f!==g;)T=d(f),s(f,y,w),f=T;s(g,y,w)},B=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},te=(f,g,y,w,T,N,M,k,O)=>{M=M||g.type==="svg",f==null?ge(g,y,w,T,N,M,k,O):we(f,g,T,N,M,k,O)},ge=(f,g,y,w,T,N,M,k)=>{let O,C;const{type:q,props:$,shapeFlag:K,transition:Y,dirs:se}=f;if(O=f.el=o(f.type,N,$&&$.is,$),K&8?u(O,f.children):K&16&&G(f.children,O,null,w,T,N&&q!=="foreignObject",M,k),se&&Zn(f,null,w,"created"),Ne(O,f,f.scopeId,M,w),$){for(const pe in $)pe!=="value"&&!mo(pe)&&i(O,pe,null,$[pe],N,f.children,w,T,U);"value"in $&&i(O,"value",null,$.value),(C=$.onVnodeBeforeMount)&&Wt(C,w,f)}se&&Zn(f,null,w,"beforeMount");const ve=(!T||T&&!T.pendingBranch)&&Y&&!Y.persisted;ve&&Y.beforeEnter(O),s(O,g,y),((C=$&&$.onVnodeMounted)||ve||se)&&gt(()=>{C&&Wt(C,w,f),ve&&Y.enter(O),se&&Zn(f,null,w,"mounted")},T)},Ne=(f,g,y,w,T)=>{if(y&&p(f,y),w)for(let N=0;N<w.length;N++)p(f,w[N]);if(T){let N=T.subTree;if(g===N){const M=T.vnode;Ne(f,M,M.scopeId,M.slotScopeIds,T.parent)}}},G=(f,g,y,w,T,N,M,k,O=0)=>{for(let C=O;C<f.length;C++){const q=f[C]=k?An(f[C]):Qt(f[C]);_(null,q,g,y,w,T,N,M,k)}},we=(f,g,y,w,T,N,M)=>{const k=g.el=f.el;let{patchFlag:O,dynamicChildren:C,dirs:q}=g;O|=f.patchFlag&16;const $=f.props||Ee,K=g.props||Ee;let Y;y&&es(y,!1),(Y=K.onVnodeBeforeUpdate)&&Wt(Y,y,g,f),q&&Zn(g,f,y,"beforeUpdate"),y&&es(y,!0);const se=T&&g.type!=="foreignObject";if(C?me(f.dynamicChildren,C,k,y,w,se,N):M||fe(f,g,k,null,y,w,se,N,!1),O>0){if(O&16)Qe(k,g,$,K,y,w,T);else if(O&2&&$.class!==K.class&&i(k,"class",null,K.class,T),O&4&&i(k,"style",$.style,K.style,T),O&8){const ve=g.dynamicProps;for(let pe=0;pe<ve.length;pe++){const Pe=ve[pe],xt=$[Pe],Ds=K[Pe];(Ds!==xt||Pe==="value")&&i(k,Pe,xt,Ds,T,f.children,y,w,U)}}O&1&&f.children!==g.children&&u(k,g.children)}else!M&&C==null&&Qe(k,g,$,K,y,w,T);((Y=K.onVnodeUpdated)||q)&&gt(()=>{Y&&Wt(Y,y,g,f),q&&Zn(g,f,y,"updated")},w)},me=(f,g,y,w,T,N,M)=>{for(let k=0;k<g.length;k++){const O=f[k],C=g[k],q=O.el&&(O.type===ze||!rs(O,C)||O.shapeFlag&70)?h(O.el):y;_(O,C,q,null,w,T,N,M,!0)}},Qe=(f,g,y,w,T,N,M)=>{if(y!==w){if(y!==Ee)for(const k in y)!mo(k)&&!(k in w)&&i(f,k,y[k],null,M,g.children,T,N,U);for(const k in w){if(mo(k))continue;const O=w[k],C=y[k];O!==C&&k!=="value"&&i(f,k,C,O,M,g.children,T,N,U)}"value"in w&&i(f,"value",y.value,w.value)}},Xe=(f,g,y,w,T,N,M,k,O)=>{const C=g.el=f?f.el:a(""),q=g.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:K,slotScopeIds:Y}=g;Y&&(k=k?k.concat(Y):Y),f==null?(s(C,y,w),s(q,y,w),G(g.children,y,q,T,N,M,k,O)):$>0&&$&64&&K&&f.dynamicChildren?(me(f.dynamicChildren,K,y,T,N,M,k),(g.key!=null||T&&g===T.subTree)&&ng(f,g,!0)):fe(f,g,y,q,T,N,M,k,O)},Ot=(f,g,y,w,T,N,M,k,O)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?T.ctx.activate(g,y,w,M,O):cn(g,y,w,T,N,M,O):Dr(f,g,O)},cn=(f,g,y,w,T,N,M)=>{const k=f.component=oE(f,w,T);if(Ea(f)&&(k.ctx.renderer=oe),cE(k),k.asyncDep){if(T&&T.registerDep(k,De),!f.el){const O=k.subTree=dt(jt);S(null,O,g,y)}return}De(k,f,g,y,T,N,M)},Dr=(f,g,y)=>{const w=g.component=f.component;if(gw(f,g,y))if(w.asyncDep&&!w.asyncResolved){ye(w,g,y);return}else w.next=g,cw(w.update),w.update();else g.el=f.el,w.vnode=g},De=(f,g,y,w,T,N,M)=>{const k=()=>{if(f.isMounted){let{next:q,bu:$,u:K,parent:Y,vnode:se}=f,ve=q,pe;es(f,!1),q?(q.el=se.el,ye(f,q,M)):q=se,$&&yo($),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&Wt(pe,Y,q,se),es(f,!0);const Pe=pc(f),xt=f.subTree;f.subTree=Pe,_(xt,Pe,h(xt.el),P(xt),f,T,N),q.el=Pe.el,ve===null&&mw(f,Pe.el),K&&gt(K,T),(pe=q.props&&q.props.onVnodeUpdated)&&gt(()=>Wt(pe,Y,q,se),T)}else{let q;const{el:$,props:K}=g,{bm:Y,m:se,parent:ve}=f,pe=_o(g);if(es(f,!1),Y&&yo(Y),!pe&&(q=K&&K.onVnodeBeforeMount)&&Wt(q,ve,g),es(f,!0),$&&ne){const Pe=()=>{f.subTree=pc(f),ne($,f.subTree,f,T,null)};pe?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=pc(f);_(null,Pe,y,w,f,T,N),g.el=Pe.el}if(se&&gt(se,T),!pe&&(q=K&&K.onVnodeMounted)){const Pe=g;gt(()=>Wt(q,ve,Pe),T)}(g.shapeFlag&256||ve&&_o(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&gt(f.a,T),f.isMounted=!0,g=y=w=null}},O=f.effect=new eu(k,()=>au(C),f.scope),C=f.update=()=>O.run();C.id=f.uid,es(f,!0),C()},ye=(f,g,y)=>{g.component=f;const w=f.vnode.props;f.vnode=g,f.next=null,jw(f,g.props,w,y),Kw(f,g.children,y),pr(),Wh(),gr()},fe=(f,g,y,w,T,N,M,k,O=!1)=>{const C=f&&f.children,q=f?f.shapeFlag:0,$=g.children,{patchFlag:K,shapeFlag:Y}=g;if(K>0){if(K&128){Jn(C,$,y,w,T,N,M,k,O);return}else if(K&256){Dt(C,$,y,w,T,N,M,k,O);return}}Y&8?(q&16&&U(C,T,N),$!==C&&u(y,$)):q&16?Y&16?Jn(C,$,y,w,T,N,M,k,O):U(C,T,N,!0):(q&8&&u(y,""),Y&16&&G($,y,w,T,N,M,k,O))},Dt=(f,g,y,w,T,N,M,k,O)=>{f=f||Bs,g=g||Bs;const C=f.length,q=g.length,$=Math.min(C,q);let K;for(K=0;K<$;K++){const Y=g[K]=O?An(g[K]):Qt(g[K]);_(f[K],Y,y,null,T,N,M,k,O)}C>q?U(f,T,N,!0,!1,$):G(g,y,w,T,N,M,k,O,$)},Jn=(f,g,y,w,T,N,M,k,O)=>{let C=0;const q=g.length;let $=f.length-1,K=q-1;for(;C<=$&&C<=K;){const Y=f[C],se=g[C]=O?An(g[C]):Qt(g[C]);if(rs(Y,se))_(Y,se,y,null,T,N,M,k,O);else break;C++}for(;C<=$&&C<=K;){const Y=f[$],se=g[K]=O?An(g[K]):Qt(g[K]);if(rs(Y,se))_(Y,se,y,null,T,N,M,k,O);else break;$--,K--}if(C>$){if(C<=K){const Y=K+1,se=Y<q?g[Y].el:w;for(;C<=K;)_(null,g[C]=O?An(g[C]):Qt(g[C]),y,se,T,N,M,k,O),C++}}else if(C>K)for(;C<=$;)pt(f[C],T,N,!0),C++;else{const Y=C,se=C,ve=new Map;for(C=se;C<=K;C++){const _t=g[C]=O?An(g[C]):Qt(g[C]);_t.key!=null&&ve.set(_t.key,C)}let pe,Pe=0;const xt=K-se+1;let Ds=!1,Mh=0;const Pr=new Array(xt);for(C=0;C<xt;C++)Pr[C]=0;for(C=Y;C<=$;C++){const _t=f[C];if(Pe>=xt){pt(_t,T,N,!0);continue}let Gt;if(_t.key!=null)Gt=ve.get(_t.key);else for(pe=se;pe<=K;pe++)if(Pr[pe-se]===0&&rs(_t,g[pe])){Gt=pe;break}Gt===void 0?pt(_t,T,N,!0):(Pr[Gt-se]=C+1,Gt>=Mh?Mh=Gt:Ds=!0,_(_t,g[Gt],y,null,T,N,M,k,O),Pe++)}const Uh=Ds?Xw(Pr):Bs;for(pe=Uh.length-1,C=xt-1;C>=0;C--){const _t=se+C,Gt=g[_t],Fh=_t+1<q?g[_t+1].el:w;Pr[C]===0?_(null,Gt,y,Fh,T,N,M,k,O):Ds&&(pe<0||C!==Uh[pe]?Pt(Gt,y,Fh,2):pe--)}}},Pt=(f,g,y,w,T=null)=>{const{el:N,type:M,transition:k,children:O,shapeFlag:C}=f;if(C&6){Pt(f.component.subTree,g,y,w);return}if(C&128){f.suspense.move(g,y,w);return}if(C&64){M.move(f,g,y,oe);return}if(M===ze){s(N,g,y);for(let $=0;$<O.length;$++)Pt(O[$],g,y,w);s(f.anchor,g,y);return}if(M===yc){R(f,g,y);return}if(w!==2&&C&1&&k)if(w===0)k.beforeEnter(N),s(N,g,y),gt(()=>k.enter(N),T);else{const{leave:$,delayLeave:K,afterLeave:Y}=k,se=()=>s(N,g,y),ve=()=>{$(N,()=>{se(),Y&&Y()})};K?K(N,se,ve):ve()}else s(N,g,y)},pt=(f,g,y,w=!1,T=!1)=>{const{type:N,props:M,ref:k,children:O,dynamicChildren:C,shapeFlag:q,patchFlag:$,dirs:K}=f;if(k!=null&&il(k,null,y,f,!0),q&256){g.ctx.deactivate(f);return}const Y=q&1&&K,se=!_o(f);let ve;if(se&&(ve=M&&M.onVnodeBeforeUnmount)&&Wt(ve,g,f),q&6)I(f.component,y,w);else{if(q&128){f.suspense.unmount(y,w);return}Y&&Zn(f,null,g,"beforeUnmount"),q&64?f.type.remove(f,g,y,T,oe,w):C&&(N!==ze||$>0&&$&64)?U(C,g,y,!1,!0):(N===ze&&$&384||!T&&q&16)&&U(O,g,y),w&&Os(f)}(se&&(ve=M&&M.onVnodeUnmounted)||Y)&&gt(()=>{ve&&Wt(ve,g,f),Y&&Zn(f,null,g,"unmounted")},y)},Os=f=>{const{type:g,el:y,anchor:w,transition:T}=f;if(g===ze){Qi(y,w);return}if(g===yc){B(f);return}const N=()=>{r(y),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:k}=T,O=()=>M(y,N);k?k(f.el,N,O):O()}else N()},Qi=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},I=(f,g,y)=>{const{bum:w,scope:T,update:N,subTree:M,um:k}=f;w&&yo(w),T.stop(),N&&(N.active=!1,pt(M,f,g,y)),k&&gt(k,g),gt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},U=(f,g,y,w=!1,T=!1,N=0)=>{for(let M=N;M<f.length;M++)pt(f[M],g,y,w,T)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),j=(f,g,y)=>{f==null?g._vnode&&pt(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,y),Wh(),Mp(),g._vnode=f},oe={p:_,um:pt,m:Pt,r:Os,mt:cn,mc:G,pc:fe,pbc:me,n:P,o:t};let Ce,ne;return e&&([Ce,ne]=e(oe)),{render:j,hydrate:Ce,createApp:Gw(j,Ce)}}function es({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ng(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=An(r[i]),a.el=o.el),n||ng(o,a)),a.type===Ta&&(a.el=o.el)}}function Xw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Yw=t=>t.__isTeleport,ze=Symbol(void 0),Ta=Symbol(void 0),jt=Symbol(void 0),yc=Symbol(void 0),Gr=[];let Ut=null;function Ve(t=!1){Gr.push(Ut=t?null:[])}function Jw(){Gr.pop(),Ut=Gr[Gr.length-1]||null}let ai=1;function rd(t){ai+=t}function sg(t){return t.dynamicChildren=ai>0?Ut||Bs:null,Jw(),ai>0&&Ut&&Ut.push(t),t}function tt(t,e,n,s,r,i){return sg(m(t,e,n,s,r,i,!0))}function rg(t,e,n,s,r){return sg(dt(t,e,n,s,r,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function rs(t,e){return t.type===e.type&&t.key===e.key}const ba="__vInternal",ig=({key:t})=>t??null,wo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||st(t)||ee(t)?{i:It,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,i=t===ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ig(e),ref:e&&wo(e),scopeId:wa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:It};return a?(hu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),ai>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const dt=Zw;function Zw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Pw)&&(t=jt),ol(t)){const a=Hn(t,e,!0);return n&&hu(a,n),ai>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(fE(t)&&(t=t.__vccOpts),e){e=eE(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=Ql(a)),_e(c)&&(Sp(c)&&!z(c)&&(c=at({},c)),e.style=Wl(c))}const o=Fe(t)?1:yw(t)?128:Yw(t)?64:_e(t)?4:ee(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function eE(t){return t?Sp(t)||ba in t?at({},t):t:null}function Hn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?sE(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ig(a),ref:e&&e.ref?n&&r?z(r)?r.concat(wo(e)):[r,wo(e)]:wo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function tE(t=" ",e=0){return dt(Ta,null,t,e)}function nE(t="",e=!1){return e?(Ve(),rg(jt,null,t)):dt(jt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?dt(jt):z(t)?dt(ze,null,t.slice()):typeof t=="object"?An(t):dt(Ta,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function hu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ba in e)?e._ctx=It:r===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:It},n=32):(e=String(e),s&64?(n=16,e=[tE(e)]):n=8);t.children=e,t.shapeFlag|=n}function sE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ql([e.class,s.class]));else if(r==="style")e.style=Wl([e.style,s.style]);else if(fa(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Wt(t,e,n,s=null){kt(t,e,7,[n,s])}const rE=tg();let iE=0;function oE(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||rE,i={uid:iE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yp(s,r),emitsOptions:Fp(s,r),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hw.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const aE=()=>Oe||It,tr=t=>{Oe=t,t.scope.on()},fs=()=>{Oe&&Oe.scope.off(),Oe=null};function og(t){return t.vnode.shapeFlag&4}let ci=!1;function cE(t,e=!1){ci=e;const{props:n,children:s}=t.vnode,r=og(t);Bw(t,n,r,e),qw(t,s);const i=r?lE(t,e):void 0;return ci=!1,i}function lE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ap(new Proxy(t.ctx,Lw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?hE(t):null;tr(t),pr();const i=Ln(s,t,0,[t.props,r]);if(gr(),fs(),hp(i)){if(i.then(fs,fs),e)return i.then(o=>{id(t,o,e)}).catch(o=>{va(o,t,0)});t.asyncDep=i}else id(t,i,e)}else ag(t,e)}function id(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Op(e)),ag(t,n)}let od;function ag(t,e,n){const s=t.type;if(!t.render){if(!e&&od&&!s.render){const r=s.template||lu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=at(at({isCustomElement:i,delimiters:a},o),c);s.render=od(r,l)}}t.render=s.render||Vt}tr(t),pr(),Mw(t),gr(),fs()}function uE(t){return new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}})}function hE(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=uE(t))},slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Op(Ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zr)return zr[n](t)},has(e,n){return n in e||n in zr}}))}function dE(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function fE(t){return ee(t)&&"__vccOpts"in t}const Et=(t,e)=>iw(t,e,ci);function cg(t,e,n){const s=arguments.length;return s===2?_e(e)&&!z(e)?ol(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ol(n)&&(n=[n]),dt(t,e,n))}const pE=Symbol(""),gE=()=>Bt(pE),mE="3.2.47",yE="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,ad=is&&is.createElement("template"),vE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?is.createElementNS(yE,t):is.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>is.createTextNode(t),createComment:t=>is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ad.innerHTML=s?`<svg>${t}</svg>`:t;const a=ad.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _E(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wE(t,e,n){const s=t.style,r=Fe(n);if(n&&!r){if(e&&!Fe(e))for(const i in e)n[i]==null&&al(s,i,"");for(const i in n)al(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const cd=/\s*!important$/;function al(t,e,n){if(z(n))n.forEach(s=>al(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=EE(t,e);cd.test(n)?t.setProperty(fr(s),n.replace(cd,""),"important"):t[s]=n}}const ld=["Webkit","Moz","ms"],vc={};function EE(t,e){const n=vc[e];if(n)return n;let s=rn(e);if(s!=="filter"&&s in t)return vc[e]=s;s=ma(s);for(let r=0;r<ld.length;r++){const i=ld[r]+s;if(i in t)return vc[e]=i}return e}const ud="http://www.w3.org/1999/xlink";function IE(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ud,e.slice(6,e.length)):t.setAttributeNS(ud,e,n);else{const i=p_(e);n==null||i&&!lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function TE(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function os(t,e,n,s){t.addEventListener(e,n,s)}function bE(t,e,n,s){t.removeEventListener(e,n,s)}function CE(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=SE(e);if(s){const l=i[e]=kE(s,r);os(t,a,l,c)}else o&&(bE(t,a,o,c),i[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function SE(t){let e;if(hd.test(t)){e={};let s;for(;s=t.match(hd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fr(t.slice(2)),e]}let _c=0;const AE=Promise.resolve(),RE=()=>_c||(AE.then(()=>_c=0),_c=Date.now());function kE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kt(NE(s,n.value),e,5,[s])};return n.value=t,n.attached=RE(),n}function NE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const dd=/^on[a-z]/,OE=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?_E(t,s,r):e==="style"?wE(t,n,s):fa(e)?Xl(e)||CE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DE(t,e,s,r))?TE(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),IE(t,e,s,r))};function DE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dd.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dd.test(e)&&Fe(n)?!1:e in t}const PE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Iw.props;const Lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>yo(e,n):e};function xE(t){t.target.composing=!0}function fd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Lo(r);const i=s||r.props&&r.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=No(a)),t._assign(a)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",xE),os(t,"compositionend",fd),os(t,"change",fd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Lo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&No(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},LE={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=pa(e);os(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?No(Mo(o)):Mo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Lo(s)},mounted(t,{value:e}){pd(t,e)},beforeUpdate(t,e,n){t._assign=Lo(n)},updated(t,{value:e}){pd(t,e)}};function pd(t,e){const n=t.multiple;if(!(n&&!z(e)&&!pa(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Mo(i);if(n)z(e)?i.selected=m_(e,o)>-1:i.selected=e.has(o);else if(da(Mo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mo(t){return"_value"in t?t._value:t.value}const ME=["ctrl","shift","alt","meta"],UE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ME.some(n=>t[`${n}Key`]&&!e.includes(n))},FE=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=UE[e[r]];if(i&&i(n,e))return}return t(n,...s)},$E=at({patchProp:OE},vE);let gd;function VE(){return gd||(gd=Ww($E))}const BE=(...t)=>{const e=VE().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=jE(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function jE(t){return Fe(t)?document.querySelector(t):t}function HE(){return lg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function lg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const qE=typeof Proxy=="function",KE="devtools-plugin:setup",zE="plugin:settings:set";let Ps,cl;function GE(){var t;return Ps!==void 0||(typeof window<"u"&&window.performance?(Ps=!0,cl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ps=!0,cl=global.perf_hooks.performance):Ps=!1),Ps}function WE(){return GE()?cl.now():Date.now()}class QE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return WE()}},n&&n.on(zE,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function XE(t,e){const n=t,s=lg(),r=HE(),i=qE&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(KE,t,e);else{const o=i?new QE(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var ug="store";function yn(t){return t===void 0&&(t=null),Bt(t!==null?t:ug)}function _r(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function YE(t){return t!==null&&typeof t=="object"}function JE(t){return t&&typeof t.then=="function"}function ZE(t,e){return function(){return t(e)}}function hg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function dg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Sa(t,n,[],t._modules.root,!0),du(t,n,e)}function du(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=b_(!0);c.run(function(){_r(i,function(l,u){o[u]=ZE(l,t),a[u]=Et(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=mr({data:e}),t._scope=c,t.strict&&r0(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function Sa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=fu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=e0(t,o,n);s.forEachMutation(function(u,h){var d=o+h;t0(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,p=u.handler||u;n0(t,d,p,l)}),s.forEachGetter(function(u,h){var d=o+h;s0(t,d,u,l)}),s.forEachChild(function(u,h){Sa(t,e,n.concat(h),u,r)})}function e0(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=Uo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=Uo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return fg(t,e)}},state:{get:function(){return fu(t.state,n)}}}),r}function fg(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function t0(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function n0(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return JE(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function s0(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function r0(t){zs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function fu(t,e){return e.reduce(function(n,s){return n[s]},t)}function Uo(t,e,n){return YE(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var i0="vuex bindings",md="vuex:mutations",wc="vuex:actions",xs="vuex",o0=0;function a0(t,e){XE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[i0]},function(n){n.addTimelineLayer({id:md,label:"Vuex Mutations",color:yd}),n.addTimelineLayer({id:wc,label:"Vuex Actions",color:yd}),n.addInspector({id:xs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===xs)if(s.filter){var r=[];yg(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[mg(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===xs){var r=s.nodeId;fg(e,r),s.state=u0(d0(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===xs){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(xs),n.sendInspectorState(xs),n.addTimelineEvent({layerId:md,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=o0++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:wc,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:wc,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var yd=8702998,c0=6710886,l0=16777215,pg={label:"namespaced",textColor:l0,backgroundColor:c0};function gg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function mg(t,e){return{id:e||"root",label:gg(e),tags:t.namespaced?[pg]:[],children:Object.keys(t._children).map(function(n){return mg(t._children[n],e+n+"/")})}}function yg(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[pg]:[]}),Object.keys(e._children).forEach(function(r){yg(t,e._children[r],n,s+r+"/")})}function u0(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=h0(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?gg(o):o,editable:!1,value:ll(function(){return i[o]})}})}return r}function h0(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=ll(function(){return t[n]})}else e[n]=ll(function(){return t[n]})}),e}function d0(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ll(t){try{return t()}catch(e){return e}}var zt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},vg={namespaced:{configurable:!0}};vg.namespaced.get=function(){return!!this._rawModule.namespaced};zt.prototype.addChild=function(e,n){this._children[e]=n};zt.prototype.removeChild=function(e){delete this._children[e]};zt.prototype.getChild=function(e){return this._children[e]};zt.prototype.hasChild=function(e){return e in this._children};zt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};zt.prototype.forEachChild=function(e){_r(this._children,e)};zt.prototype.forEachGetter=function(e){this._rawModule.getters&&_r(this._rawModule.getters,e)};zt.prototype.forEachAction=function(e){this._rawModule.actions&&_r(this._rawModule.actions,e)};zt.prototype.forEachMutation=function(e){this._rawModule.mutations&&_r(this._rawModule.mutations,e)};Object.defineProperties(zt.prototype,vg);var Cs=function(e){this.register([],e,!1)};Cs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Cs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};Cs.prototype.update=function(e){_g([],this.root,e)};Cs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new zt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&_r(n.modules,function(a,c){r.register(e.concat(c),a,s)})};Cs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};Cs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function _g(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;_g(t.concat(s),e.getChild(s),n.modules[s])}}function f0(t){return new vt(t)}var vt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Cs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,p){return c.call(o,d,p)},this.commit=function(d,p,v){return l.call(o,d,p,v)},this.strict=r;var u=this._modules.root.state;Sa(this,u,[],this._modules.root),du(this,u),s.forEach(function(h){return h(n)})},pu={state:{configurable:!0}};vt.prototype.install=function(e,n){e.provide(n||ug,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&a0(e,this)};pu.state.get=function(){return this._state.data};pu.state.set=function(t){};vt.prototype.commit=function(e,n,s){var r=this,i=Uo(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};vt.prototype.dispatch=function(e,n){var s=this,r=Uo(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,d)})}catch{}h(d)})})}};vt.prototype.subscribe=function(e,n){return hg(e,this._subscribers,n)};vt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return hg(s,this._actionSubscribers,n)};vt.prototype.watch=function(e,n,s){var r=this;return zs(function(){return e(r.state,r.getters)},n,Object.assign({},s))};vt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};vt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Sa(this,this.state,e,this._modules.get(e),s.preserveState),du(this,this.state)};vt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=fu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),dg(this)};vt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};vt.prototype.hotUpdate=function(e){this._modules.update(e),dg(this,!0)};vt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(vt.prototype,pu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},p0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):p0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new g0;const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class g0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m0=function(t){const e=wg(t);return Eg.encodeByteArray(e,!0)},Fo=function(t){return m0(t).replace(/\./g,"")},Ig=function(t){try{return Eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=()=>y0().__FIREBASE_DEFAULTS__,_0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},w0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ig(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return v0()||_0()||w0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tg=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bg=t=>{const e=Tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},E0=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},Cg=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fo(JSON.stringify(n)),Fo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function b0(){var t;const e=(t=Aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function C0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function S0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A0(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=N0,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?O0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new an(r,a,s)}}function O0(t,e){return t.replace(D0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const D0=/\{\$([^}]+)}/g;function P0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vd(i)&&vd(o)){if(!$o(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Vr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function x0(t,e){const n=new L0(t,e);return n.subscribe.bind(n)}class L0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");M0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ec),r.error===void 0&&(r.error=Ec),r.complete===void 0&&(r.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new I0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($0(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(t){return t===ns?void 0:t}function $0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const B0={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},j0=ce.INFO,H0={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},q0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=H0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=j0,this._logHandler=q0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?B0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const K0=(t,e)=>e.some(n=>t instanceof n);let _d,wd;function z0(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G0(){return wd||(wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,ul=new WeakMap,Rg=new WeakMap,Ic=new WeakMap,mu=new WeakMap;function W0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ag.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function Q0(t){if(ul.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ul.set(t,e)}let hl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function X0(t){hl=t(hl)}function Y0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Tc(this),e,...n);return Rg.set(s,e.sort?e.sort():[e]),Mn(s)}:G0().includes(t)?function(...e){return t.apply(Tc(this),e),Mn(Ag.get(this))}:function(...e){return Mn(t.apply(Tc(this),e))}}function J0(t){return typeof t=="function"?Y0(t):(t instanceof IDBTransaction&&Q0(t),K0(t,z0())?new Proxy(t,hl):t)}function Mn(t){if(t instanceof IDBRequest)return W0(t);if(Ic.has(t))return Ic.get(t);const e=J0(t);return e!==t&&(Ic.set(t,e),mu.set(e,t)),e}const Tc=t=>mu.get(t);function Z0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],bc=new Map;function Ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=tI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||eI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return bc.set(e,i),i}X0(t=>({...t,get:(e,n,s)=>Ed(e,n)||t.get(e,n,s),has:(e,n)=>!!Ed(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Id="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new gu("@firebase/app"),rI="@firebase/app-compat",iI="@firebase/analytics-compat",oI="@firebase/analytics",aI="@firebase/app-check-compat",cI="@firebase/app-check",lI="@firebase/auth",uI="@firebase/auth-compat",hI="@firebase/database",dI="@firebase/database-compat",fI="@firebase/functions",pI="@firebase/functions-compat",gI="@firebase/installations",mI="@firebase/installations-compat",yI="@firebase/messaging",vI="@firebase/messaging-compat",_I="@firebase/performance",wI="@firebase/performance-compat",EI="@firebase/remote-config",II="@firebase/remote-config-compat",TI="@firebase/storage",bI="@firebase/storage-compat",CI="@firebase/firestore",SI="@firebase/firestore-compat",AI="firebase",RI="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="[DEFAULT]",kI={[dl]:"fire-core",[rI]:"fire-core-compat",[oI]:"fire-analytics",[iI]:"fire-analytics-compat",[cI]:"fire-app-check",[aI]:"fire-app-check-compat",[lI]:"fire-auth",[uI]:"fire-auth-compat",[hI]:"fire-rtdb",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[pI]:"fire-fn-compat",[gI]:"fire-iid",[mI]:"fire-iid-compat",[yI]:"fire-fcm",[vI]:"fire-fcm-compat",[_I]:"fire-perf",[wI]:"fire-perf-compat",[EI]:"fire-rc",[II]:"fire-rc-compat",[TI]:"fire-gcs",[bI]:"fire-gcs-compat",[CI]:"fire-fst",[SI]:"fire-fst-compat","fire-js":"fire-js",[AI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,pl=new Map;function NI(t,e){try{t.container.addComponent(e)}catch(n){ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(pl.has(e))return ys.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of Vo.values())NI(n,t);return!0}function Ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Ri("app","Firebase",OI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=RI;function kg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Un.create("bad-app-name",{appName:String(r)});if(n||(n=E0()),!n)throw Un.create("no-options");const i=Vo.get(r);if(i){if($o(n,i.options)&&$o(s,i.config))return i;throw Un.create("duplicate-app",{appName:r})}const o=new V0(r);for(const c of pl.values())o.addComponent(c);const a=new DI(n,s,o);return Vo.set(r,a),a}function yu(t=fl){const e=Vo.get(t);if(!e&&t===fl)return kg();if(!e)throw Un.create("no-app",{appName:t});return e}function Zt(t,e,n){var s;let r=(s=kI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ys.warn(a.join(" "));return}vs(new qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="firebase-heartbeat-database",xI=1,li="firebase-heartbeat-store";let Cc=null;function Ng(){return Cc||(Cc=Z0(PI,xI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function LI(t){try{return(await Ng()).transaction(li).objectStore(li).get(Og(t))}catch(e){if(e instanceof an)ys.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ys.warn(n.message)}}}async function Td(t,e){try{const s=(await Ng()).transaction(li,"readwrite");return await s.objectStore(li).put(e,Og(t)),s.done}catch(n){if(n instanceof an)ys.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ys.warn(s.message)}}}function Og(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=1024,UI=30*24*60*60*1e3;class FI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=UI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bd(),{heartbeatsToSend:n,unsentEntries:s}=$I(this._heartbeatsCache.heartbeats),r=Fo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bd(){return new Date().toISOString().substring(0,10)}function $I(t,e=MI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Cd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Cd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return Fo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){vs(new qn("platform-logger",e=>new nI(e),"PRIVATE")),vs(new qn("heartbeat",e=>new FI(e),"PRIVATE")),Zt(dl,Id,t),Zt(dl,Id,"esm2017"),Zt("fire-js","")}BI("");var jI="firebase",HI="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(jI,HI,"app");function vu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Dg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qI=Dg,Pg=new Ri("auth","Firebase",Dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new gu("@firebase/auth");function KI(t,...e){Bo.logLevel<=ce.WARN&&Bo.warn(`Auth (${Ss}): ${t}`,...e)}function Eo(t,...e){Bo.logLevel<=ce.ERROR&&Bo.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw _u(t,...e)}function en(t,...e){return _u(t,...e)}function xg(t,e,n){const s=Object.assign(Object.assign({},qI()),{[e]:n});return new Ri("auth","Firebase",s).create(e,{appName:t.name})}function zI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Nt(t,"argument-error"),xg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _u(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Pg.create(t,...e)}function W(t,e,...n){if(!t)throw _u(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function vn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GI(){return Sd()==="http:"||Sd()==="https:"}function Sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||C0()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=T0()||S0()}get(){return WI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new Ni(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,s,r={}){return Mg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Lg.fetch()(Ug(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Mg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},XI),e);try{const r=new JI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xg(t,u,l);Nt(t,u)}}catch(r){if(r instanceof an)throw r;Nt(t,"network-request-failed",{message:String(r)})}}async function Oi(t,e,n,s,r={}){const i=await Er(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ug(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?wu(t.config,r):`${t.config.apiScheme}://${r}`}class JI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),YI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=en(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function eT(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tT(t,e=!1){const n=Be(t),s=await n.getIdToken(e),r=Eu(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Wr(Sc(r.auth_time)),issuedAtTime:Wr(Sc(r.iat)),expirationTime:Wr(Sc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Eu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ig(n);return r?JSON.parse(r):(Eo("Failed to decode base64 JWT payload"),null)}catch(r){return Eo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function nT(t){const e=Eu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&sT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function sT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ui(t,eT(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?aT(i.providerUserInfo):[],a=oT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iT(t){const e=Be(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function aT(t){return t.map(e=>{var{providerId:n}=e,s=vu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(t,e){const n=await Mg(t,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ug(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await cT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new hi;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ps{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tT(this,e)}reload(){return iT(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ps(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ui(this,ZI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:B,isAnonymous:te,providerData:ge,stsTokenManager:Ne}=n;W(R&&Ne,e,"internal-error");const G=hi.fromJSON(this.name,Ne);W(typeof R=="string",e,"internal-error"),Cn(h,e.name),Cn(d,e.name),W(typeof B=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),Cn(p,e.name),Cn(v,e.name),Cn(_,e.name),Cn(b,e.name),Cn(S,e.name),Cn(D,e.name);const we=new ps({uid:R,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:te,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:G,createdAt:S,lastLoginAt:D});return ge&&Array.isArray(ge)&&(we.providerData=ge.map(me=>Object.assign({},me))),b&&(we._redirectEventId=b),we}static async _fromIdTokenResponse(e,n,s=!1){const r=new hi;r.updateFromServerResponse(n);const i=new ps({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await jo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;function fn(t){vn(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$g.type="NONE";const Rd=$g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Io(this.userKey,r.apiKey,i),this.fullPersistenceKey=Io("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ps._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Gs(fn(Rd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||fn(Rd);const o=Io(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ps._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Gs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qg(e))return"Blackberry";if(Kg(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Bg(e))&&!e.includes("edge/"))return"Chrome";if(Hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vg(t=ct()){return/firefox\//i.test(t)}function Iu(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bg(t=ct()){return/crios\//i.test(t)}function jg(t=ct()){return/iemobile/i.test(t)}function Hg(t=ct()){return/android/i.test(t)}function qg(t=ct()){return/blackberry/i.test(t)}function Kg(t=ct()){return/webos/i.test(t)}function ka(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lT(t=ct()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uT(){return A0()&&document.documentMode===10}function zg(t=ct()){return ka(t)||Hg(t)||Kg(t)||qg(t)||/windows phone/i.test(t)||jg(t)}function hT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e=[]){let n;switch(t){case"Browser":n=kd(ct());break;case"Worker":n=`${kd(ct())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${s}`}async function Wg(t,e){return Er(t,"GET","/v2/recaptchaConfig",wr(t,e))}function Nd(t){return t!==void 0&&t.enterprise!==void 0}class Qg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=en("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",dT().appendChild(s)})}function fT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pT="https://www.google.com/recaptcha/enterprise.js?render=",gT="recaptcha-enterprise",mT="NO_RECAPTCHA";class Yg{constructor(e){this.type=gT,this.auth=As(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Wg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Qg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Nd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(mT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Nd(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xg(pT+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ho(t,e,n,s=!1){const r=new Yg(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}async initializeRecaptchaConfig(){const e=await Wg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Yg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function As(t){return Be(t)}class Od{constructor(e){this.auth=e,this.observer=null,this.addObserver=x0(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){const n=Ra(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if($o(i,e??{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function wT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ET(t,e,n){const s=As(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Jg(e),{host:o,port:a}=IT(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||TT()}function Jg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IT(t){const e=Jg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Dd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Dd(o)}}}function Dd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function bT(t,e){return Er(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(t,e){return Oi(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function ST(t,e){return Oi(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Tu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new di(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Ho(e,s,"signInWithPassword");return Ac(e,r)}else return Ac(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ho(e,s,"signInWithPassword");return Ac(e,i)}else return Promise.reject(r)});case"emailLink":return CT(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ST(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return Oi(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="http://localhost";class _s extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=vu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new _s(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:AT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kT(t){const e=$r(Vr(t)).link,n=e?$r(Vr(e)).deep_link_id:null,s=$r(Vr(t)).deep_link_id;return(s?$r(Vr(s)).link:null)||s||n||e||t}class bu{constructor(e){var n,s,r,i,o,a;const c=$r(Vr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=RT((r=c.mode)!==null&&r!==void 0?r:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kT(e);try{return new bu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.providerId=Ir.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=bu.parseLink(n);return W(s,"argument-error"),di._fromEmailAndCode(e,s.code,s.tenantId)}}Ir.PROVIDER_ID="password";Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Di{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Di{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Di{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return On.credential(n,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(t,e){return Oi(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ps._fromIdTokenResponse(e,s,r),o=Pd(s);return new ws({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Pd(s);return new ws({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Pd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends an{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qo(e,n,s,r)}}function Zg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,i,e,s):i})}async function NT(t,e,n=!1){const s=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ui(t,Zg(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=Eu(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),ws._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e,n=!1){const s="signIn",r=await Zg(t,s,e),i=await ws._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function DT(t,e){return em(As(t),e)}async function PT(t,e,n){var s;const r=As(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await Ho(r,i,"signUpPassword");o=Rc(r,l)}else o=Rc(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ho(r,i,"signUpPassword");return Rc(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await ws._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function xT(t,e,n){return DT(Be(t),Ir.credential(e,n))}function LT(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function MT(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function UT(t){return Be(t).signOut()}const Ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){const t=ct();return Iu(t)||ka(t)}const $T=1e3,VT=10;class nm extends tm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FT()&&hT(),this.fallbackToPolling=zg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);uT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,VT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nm.type="LOCAL";const BT=nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends tm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sm.type="SESSION";const rm=sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await jT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Su("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function qT(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function KT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GT(){return im()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firebaseLocalStorageDb",WT=1,zo="firebaseLocalStorage",am="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function QT(){const t=indexedDB.deleteDatabase(om);return new Pi(t).toPromise()}function ml(){const t=indexedDB.open(om,WT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zo,{keyPath:am})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zo)?e(s):(s.close(),await QT(),e(await ml()))})})}async function xd(t,e,n){const s=Oa(t,!0).put({[am]:e,value:n});return new Pi(s).toPromise()}async function XT(t,e){const n=Oa(t,!1).get(e),s=await new Pi(n).toPromise();return s===void 0?null:s.value}function Ld(t,e){const n=Oa(t,!0).delete(e);return new Pi(n).toPromise()}const YT=800,JT=3;class cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(GT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new HT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await xd(e,Ko,"1"),await Ld(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>xd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>XT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ld(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oa(r,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cm.type="LOCAL";const ZT=cm;new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e){return e?fn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eb(t){return em(t.auth,new Au(t),t.bypassAuthState)}function tb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),OT(n,new Au(t),t.bypassAuthState)}async function nb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),NT(n,new Au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:Nt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new Ni(2e3,1e4);async function rb(t,e,n){const s=As(t);zI(t,e,Cu);const r=lm(s,n);return new cs(s,"signInViaPopup",e,r).executeNotNull()}class cs extends um{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sb.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="pendingRedirect",To=new Map;class ob extends um{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const s=await ab(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ab(t,e){const n=ub(e),s=lb(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function cb(t,e){To.set(t._key(),e)}function lb(t){return fn(t._redirectPersistence)}function ub(t){return Io(ib,t.config.apiKey,t.name)}async function hb(t,e,n=!1){const s=As(t),r=lm(s,e),o=await new ob(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=10*60*1e3;class fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=db&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yb=/^https?/;async function vb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gb(t);for(const n of e)try{if(_b(n))return}catch{}Nt(t,"unauthorized-domain")}function _b(t){const e=gl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!yb.test(n))return!1;if(mb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new Ni(3e4,6e4);function Ud(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Eb(t){return new Promise((e,n)=>{var s,r,i;function o(){Ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(en(t,"network-request-failed"))},timeout:wb.get()})}if(!((r=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const a=fT("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Xg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function Ib(t){return bo=bo||Eb(t),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=new Ni(5e3,15e3),bb="__/auth/iframe",Cb="emulator/auth/iframe",Sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rb(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wu(e,Cb):`https://${t.config.authDomain}/${bb}`,s={apiKey:e.apiKey,appName:t.name,v:Ss},r=Ab.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ki(s).slice(1)}`}async function kb(t){const e=await Ib(t),n=tn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:Rb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{i(o)},Tb.get());function c(){tn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ob=500,Db=600,Pb="_blank",xb="http://localhost";class Fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lb(t,e,n,s=Ob,r=Db){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Nb),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ct().toLowerCase();n&&(a=Bg(l)?Pb:n),Vg(l)&&(e=e||xb,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(lT(l)&&a!=="_self")return Mb(e||"",a),new Fd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Fd(h)}function Mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="__/auth/handler",Fb="emulator/auth/handler",$b=encodeURIComponent("fac");async function $d(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ss,eventId:r};if(e instanceof Cu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",P0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Di){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$b}=${encodeURIComponent(c)}`:"";return`${Vb(t)}?${ki(a).slice(1)}${l}`}function Vb({config:t}){return t.emulator?wu(t,Fb):`https://${t.authDomain}/${Ub}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="webStorageSupport";class Bb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rm,this._completeRedirectFn=hb,this._overrideRedirectResult=cb}async _openPopup(e,n,s,r){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $d(e,n,s,gl(),r);return Lb(e,o,Su())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await $d(e,n,s,gl(),r);return qT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kb(e),s=new fb(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zg()||Iu()||ka()}}const jb=Bb;var Vd="@firebase/auth",Bd="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Kb(t){vs(new qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),W(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gg(t)},l=new vT(s,r,i,c);return wT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vs(new qn("auth-internal",e=>{const n=As(e.getProvider("auth").getImmediate());return(s=>new Hb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Vd,Bd,qb(t)),Zt(Vd,Bd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=5*60,Gb=Cg("authIdTokenMaxAge")||zb;let jd=null;const Wb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Gb)return;const r=n==null?void 0:n.token;jd!==r&&(jd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Qb(t=yu()){const e=Ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_T(t,{popupRedirectResolver:jb,persistence:[ZT,BT,rm]}),s=Cg("authTokenSyncURL");if(s){const i=Wb(s);MT(n,i,()=>i(n.currentUser)),LT(n,o=>i(o))}const r=Tg("auth");return r&&ET(n,`http://${r}`),n}Kb("Browser");var Xb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Ru=Ru||{},X=Xb||self;function Go(){}function Da(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Yb(t){return Object.prototype.hasOwnProperty.call(t,Nc)&&t[Nc]||(t[Nc]=++Jb)}var Nc="closure_uid_"+(1e9*Math.random()>>>0),Jb=0;function Zb(t,e,n){return t.call.apply(t.bind,arguments)}function eC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=Zb:rt=eC,rt.apply(null,arguments)}function so(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Wn(){this.s=this.s,this.o=this.o}var tC=0;Wn.prototype.s=!1;Wn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),tC!=0)&&Yb(this)};Wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ku(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Hd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Da(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var nC=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Go,e),X.removeEventListener("test",Go,e)}catch{}return t}();function Wo(t){return/^[\s\xa0]*$/.test(t)}var qd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Oc(t,e){return t<e?-1:t>e?1:0}function Pa(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return Pa().indexOf(t)!=-1}function Nu(t){return Nu[" "](t),t}Nu[" "]=Go;function fm(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var sC=Yt("Opera"),nr=Yt("Trident")||Yt("MSIE"),pm=Yt("Edge"),yl=pm||nr,gm=Yt("Gecko")&&!(Pa().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),rC=Pa().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function mm(){var t=X.document;return t?t.documentMode:void 0}var Qo;e:{var Dc="",Pc=function(){var t=Pa();if(gm)return/rv:([^\);]+)(\)|;)/.exec(t);if(pm)return/Edge\/([\d\.]+)/.exec(t);if(nr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rC)return/WebKit\/(\S+)/.exec(t);if(sC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pc&&(Dc=Pc?Pc[1]:""),nr){var xc=mm();if(xc!=null&&xc>parseFloat(Dc)){Qo=String(xc);break e}}Qo=Dc}var iC={};function oC(){return fm(iC,9,function(){let t=0;const e=qd(String(Qo)).split("."),n=qd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Oc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Oc(r[2].length==0,i[2].length==0)||Oc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var vl;if(X.document&&nr){var Kd=mm();vl=Kd||parseInt(Qo,10)||void 0}else vl=void 0;var aC=vl;function fi(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gm){e:{try{Nu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fi.$.h.call(this)}}He(fi,it);var cC={2:"touch",3:"pen",4:"mouse"};fi.prototype.h=function(){fi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Li="closure_listenable_"+(1e6*Math.random()|0),lC=0;function uC(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++lC,this.fa=this.ia=!1}function xa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ou(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ym(t){const e={};for(const n in t)e[n]=t[n];return e}const zd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<zd.length;i++)n=zd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function La(t){this.src=t,this.g={},this.h=0}La.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new uC(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function _l(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=dm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Du="closure_lm_"+(1e6*Math.random()|0),Lc={};function _m(t,e,n,s,r){if(s&&s.once)return Em(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)_m(t,e[i],n,s,r);return null}return n=Lu(n),t&&t[Li]?t.O(e,n,xi(s)?!!s.capture:!!s,r):wm(t,e,n,!1,s,r)}function wm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=xi(r)?!!r.capture:!!r,a=xu(t);if(a||(t[Du]=a=new La(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=hC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)nC||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Tm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hC(){function t(n){return e.call(t.src,t.listener,n)}const e=dC;return t}function Em(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Em(t,e[i],n,s,r);return null}return n=Lu(n),t&&t[Li]?t.P(e,n,xi(s)?!!s.capture:!!s,r):wm(t,e,n,!0,s,r)}function Im(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Im(t,e[i],n,s,r);else s=xi(s)?!!s.capture:!!s,n=Lu(n),t&&t[Li]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wl(i,n,s,r),-1<n&&(xa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=xu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wl(e,n,s,r)),(n=-1<t?e[t]:null)&&Pu(n))}function Pu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Li])_l(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Tm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=xu(e))?(_l(n,t),n.h==0&&(n.src=null,e[Du]=null)):xa(t)}}}function Tm(t){return t in Lc?Lc[t]:Lc[t]="on"+t}function dC(t,e){if(t.fa)t=!0;else{e=new fi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Pu(t),t=n.call(s,e)}return t}function xu(t){return t=t[Du],t instanceof La?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lu(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function je(){Wn.call(this),this.i=new La(this),this.S=this,this.J=null}He(je,Wn);je.prototype[Li]=!0;je.prototype.removeEventListener=function(t,e,n,s){Im(this,t,e,n,s)};function We(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(s,t),vm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ro(o,s,!0,e)&&r}if(o=e.g=t,r=ro(o,s,!0,e)&&r,r=ro(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ro(o,s,!1,e)&&r}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xa(n[s]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ro(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&_l(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Mu=X.JSON.stringify;function fC(){var t=Sm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pC{constructor(){this.h=this.g=null}add(e,n){const s=bm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var bm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gC,t=>t.reset());class gC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mC(t){X.setTimeout(()=>{throw t},0)}function Cm(t,e){El||yC(),Il||(El(),Il=!0),Sm.add(t,e)}var El;function yC(){var t=X.Promise.resolve(void 0);El=function(){t.then(vC)}}var Il=!1,Sm=new pC;function vC(){for(var t;t=fC();){try{t.h.call(t.g)}catch(n){mC(n)}var e=bm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Il=!1}function Ma(t,e){je.call(this),this.h=t||1,this.g=e||X,this.j=rt(this.qb,this),this.l=Date.now()}He(Ma,je);x=Ma.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Uu(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Ma.$.N.call(this),Uu(this),delete this.g};function Fu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Am(t){t.g=Fu(()=>{t.g=null,t.i&&(t.i=!1,Am(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _C extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Am(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Wn.call(this),this.h=t,this.g={}}He(pi,Wn);var Gd=[];function Rm(t,e,n,s){Array.isArray(n)||(n&&(Gd[0]=n.toString()),n=Gd);for(var r=0;r<n.length;r++){var i=_m(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function km(t){Ou(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pu(e)},t),t.g={}}pi.prototype.N=function(){pi.$.N.call(this),km(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ua(){this.g=!0}Ua.prototype.Ea=function(){this.g=!1};function wC(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function EC(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Vs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TC(t,n)+(s?" "+s:"")})}function IC(t,e){t.info(function(){return"TIMEOUT: "+e})}Ua.prototype.info=function(){};function TC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Mu(n)}catch{return e}}var Rs={},Wd=null;function Fa(){return Wd=Wd||new je}Rs.Ta="serverreachability";function Nm(t){it.call(this,Rs.Ta,t)}He(Nm,it);function gi(t){const e=Fa();We(e,new Nm(e))}Rs.STAT_EVENT="statevent";function Om(t,e){it.call(this,Rs.STAT_EVENT,t),this.stat=e}He(Om,it);function ft(t){const e=Fa();We(e,new Om(e,t))}Rs.Ua="timingevent";function Dm(t,e){it.call(this,Rs.Ua,t),this.size=e}He(Dm,it);function Mi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var $a={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $u(){}$u.prototype.h=null;function Qd(t){return t.h||(t.h=t.i())}function xm(){}var Ui={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vu(){it.call(this,"d")}He(Vu,it);function Bu(){it.call(this,"c")}He(Bu,it);var Tl;function Va(){}He(Va,$u);Va.prototype.g=function(){return new XMLHttpRequest};Va.prototype.i=function(){return{}};Tl=new Va;function Fi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new pi(this),this.P=bC,t=yl?125:void 0,this.V=new Ma(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Lm}function Lm(){this.i=null,this.g="",this.h=!1}var bC=45e3,bl={},Xo={};x=Fi.prototype;x.setTimeout=function(t){this.P=t};function Cl(t,e,n){t.L=1,t.v=ja(_n(e)),t.s=n,t.S=!0,Mm(t,null)}function Mm(t,e){t.G=Date.now(),$i(t),t.A=_n(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),qm(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Lm,t.g=hy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new _C(rt(t.Pa,t,t.g),t.O)),Rm(t.U,t.g,"readystatechange",t.nb),e=t.I?ym(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),gi(),wC(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&pn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yl||this.g&&(this.h.h||this.g.ja()||Zd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gi(3):gi(2)),Ba(this);var n=this.g.da();this.aa=n;t:if(Um(this)){var s=Zd(this.g);t="";var r=s.length,i=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),Qr(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,EC(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wo(a)){var l=a;break t}}l=null}if(n=l)Vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,n);else{this.i=!1,this.o=3,ft(12),ls(this),Qr(this);break e}}this.S?(Fm(this,u,o),yl&&this.i&&u==3&&(Rm(this.U,this.V,"tick",this.mb),this.V.start())):(Vs(this.j,this.m,o,null),Sl(this,o)),u==4&&ls(this),this.i&&!this.J&&(u==4?ay(this.l,this):(this.i=!1,$i(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),ls(this),Qr(this)}}}catch{}finally{}};function Um(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Fm(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=CC(t,n),r==Xo){e==4&&(t.o=4,ft(14),s=!1),Vs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==bl){t.o=4,ft(15),Vs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Vs(t.j,t.m,r,null),Sl(t,r);Um(t)&&r!=Xo&&r!=bl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ft(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wu(e),e.L=!0,ft(11))):(Vs(t.j,t.m,n,"[Invalid Chunked Response]"),ls(t),Qr(t))}x.mb=function(){if(this.g){var t=pn(this.g),e=this.g.ja();this.C<e.length&&(Ba(this),Fm(this,t,e),this.i&&t!=4&&$i(this))}};function CC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Xo:(n=Number(e.substring(n,s)),isNaN(n)?bl:(s+=1,s+n>e.length?Xo:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.J=!0,ls(this)};function $i(t){t.Y=Date.now()+t.P,$m(t,t.P)}function $m(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mi(rt(t.lb,t),e)}function Ba(t){t.B&&(X.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(IC(this.j,this.A),this.L!=2&&(gi(),ft(17)),ls(this),this.o=2,Qr(this)):$m(this,this.Y-t)};function Qr(t){t.l.H==0||t.J||ay(t.l,t)}function ls(t){Ba(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Uu(t.V),km(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Sl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Al(n.h,t))){if(!t.K&&Al(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Zo(n),Ka(n);else break e;Gu(n),ft(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Mi(rt(n.ib,n),6e3));if(1>=Gm(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else us(n,11)}else if((t.K||n.g==t)&&Zo(n),!Wo(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ju(i,i.h),i.h=null))}if(s.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,be(s.G,s.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=uy(s,s.I?s.oa:null,s.Y),o.K){Wm(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ba(a),$i(a)),s.g=o}else iy(s);0<n.i.length&&za(n)}else l[0]!="stop"&&l[0]!="close"||us(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?us(n,7):zu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}gi(4)}catch{}}function SC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Da(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function AC(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Da(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Vm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Da(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AC(t),s=SC(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Bm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof gs){this.h=e!==void 0?e:t.h,Yo(this,t.j),this.s=t.s,this.g=t.g,Jo(this,t.m),this.l=t.l,e=t.i;var n=new mi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xd(this,n),this.o=t.o}else t&&(n=String(t).match(Bm))?(this.h=!!e,Yo(this,n[1]||"",!0),this.s=Br(n[2]||""),this.g=Br(n[3]||"",!0),Jo(this,n[4]),this.l=Br(n[5]||"",!0),Xd(this,n[6]||"",!0),this.o=Br(n[7]||"")):(this.h=!!e,this.i=new mi(null,this.h))}gs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jr(e,Yd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(jr(e,Yd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(jr(n,n.charAt(0)=="/"?OC:NC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jr(n,PC)),t.join("")};function _n(t){return new gs(t)}function Yo(t,e,n){t.j=n?Br(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xd(t,e,n){e instanceof mi?(t.i=e,xC(t.i,t.h)):(n||(e=jr(e,DC)),t.i=new mi(e,t.h))}function be(t,e,n){t.i.set(e,n)}function ja(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Br(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yd=/[#\/\?@]/g,NC=/[#\?:]/g,OC=/[#\?]/g,DC=/[#\?@]/g,PC=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&RC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=mi.prototype;x.add=function(t,e){Qn(this),this.i=null,t=Tr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jm(t,e){Qn(t),e=Tr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hm(t,e){return Qn(t),e=Tr(t,e),t.g.has(e)}x.forEach=function(t,e){Qn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.sa=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.Z=function(t){Qn(this);let e=[];if(typeof t=="string")Hm(this,t)&&(e=e.concat(this.g.get(Tr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Qn(this),this.i=null,t=Tr(this,t),Hm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function qm(t,e,n){jm(t,e),0<n.length&&(t.i=null,t.g.set(Tr(t,e),ku(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Tr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xC(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(jm(this,s),qm(this,r,n))},t)),t.j=e}var LC=class{constructor(t,e){this.h=t,this.g=e}};function Km(t){this.l=t||MC,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MC=10;function zm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gm(t){return t.h?1:t.g?t.g.size:0}function Al(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ju(t,e){t.g?t.g.add(e):t.h=e}function Wm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Km.prototype.cancel=function(){if(this.i=Qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ku(t.i)}function Hu(){}Hu.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Hu.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function UC(){this.g=new Hu}function FC(t,e,n){const s=n||"";try{Vm(t,function(r,i){let o=r;xi(r)&&(o=Mu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function $C(t,e){const n=new Ua;if(X.Image){const s=new Image;s.onload=so(io,n,s,"TestLoadImage: loaded",!0,e),s.onerror=so(io,n,s,"TestLoadImage: error",!1,e),s.onabort=so(io,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=so(io,n,s,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function io(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Vi(t){this.l=t.fc||null,this.j=t.ob||!1}He(Vi,$u);Vi.prototype.g=function(){return new Ha(this.l,this.j)};Vi.prototype.i=function(t){return function(){return t}}({});function Ha(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Ha,je);var qu=0;x=Ha.prototype;x.open=function(t,e){if(this.readyState!=qu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=qu};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Xm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bi(this):yi(this),this.readyState==3&&Xm(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Bi(this))};x.Ya=function(t){this.g&&(this.response=t,Bi(this))};x.ka=function(){this.g&&Bi(this)};function Bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var VC=X.JSON.parse;function Ae(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ym,this.L=this.M=!1}He(Ae,je);var Ym="",BC=/^https?$/i,jC=["POST","PUT"];x=Ae.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tl.g(),this.C=this.u?Qd(this.u):Qd(Tl),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Jd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=X.FormData&&t instanceof X.FormData,!(0<=dm(jC,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ey(this),0<this.B&&((this.L=HC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Fu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jd(this,i)}};function HC(t){return nr&&oC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Ru<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function Jd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jm(t),qa(t)}function Jm(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),qa(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qa(this,!0)),Ae.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?Zm(this):this.kb())};x.kb=function(){Zm(this)};function Zm(t){if(t.h&&typeof Ru<"u"&&(!t.C[1]||pn(t)!=4||t.da()!=2)){if(t.v&&pn(t)==4)Fu(t.La,0,t);else if(We(t,"readystatechange"),pn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(Bm)[1]||null;if(!r&&X.self&&X.self.location){var i=X.self.location.protocol;r=i.substr(0,i.length-1)}s=!BC.test(r?r.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var o=2<pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",Jm(t)}}finally{qa(t)}}}}function qa(t,e){if(t.g){ey(t);const n=t.g,s=t.C[0]?Go:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch{}}}function ey(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function pn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),VC(e)}};function Zd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ym:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ty(t){let e="";return Ou(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ku(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ty(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function xr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ny(t){this.Ga=0,this.i=[],this.j=new Ua,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xr("baseRetryDelayMs",5e3,t),this.hb=xr("retryDelaySeedMs",1e4,t),this.eb=xr("forwardChannelMaxRetries",2,t),this.xa=xr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Km(t&&t.concurrentRequestLimit),this.Ja=new UC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}x=ny.prototype;x.qa=8;x.H=1;function zu(t){if(sy(t),t.H==3){var e=t.W++,n=_n(t.G);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),ji(t,n),e=new Fi(t,t.j,e,void 0),e.L=2,e.v=ja(_n(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=hy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),$i(e)}ly(t)}function Ka(t){t.g&&(Wu(t),t.g.cancel(),t.g=null)}function sy(t){Ka(t),t.u&&(X.clearTimeout(t.u),t.u=null),Zo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function za(t){zm(t.h)||t.m||(t.m=!0,Cm(t.Na,t),t.C=0)}function qC(t,e){return Gm(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Mi(rt(t.Na,t,e),cy(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Fi(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=ym(i),vm(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ry(this,r,e),n=_n(this.G),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),ji(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(ty(i)))+"&"+e:this.o&&Ku(n,this.o,i)),ju(this.h,r),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),r.ba=!0,Cl(r,n,null)):Cl(r,n,e),this.H=2}}else this.H==3&&(t?ef(this,t):this.i.length==0||zm(this.h)||ef(this))};function ef(t,e){var n;e?n=e.m:n=t.W++;const s=_n(t.G);be(s,"SID",t.J),be(s,"RID",n),be(s,"AID",t.V),ji(t,s),t.o&&t.s&&Ku(s,t.o,t.s),n=new Fi(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=ry(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ju(t.h,n),Cl(n,s,e)}function ji(t,e){t.ma&&Ou(t.ma,function(n,s){be(e,s,n)}),t.l&&Vm({},function(n,s){be(e,s,n)})}function ry(t,e,n){n=Math.min(t.i.length,n);var s=t.l?rt(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{FC(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function iy(t){t.g||t.u||(t.ba=1,Cm(t.Ma,t),t.A=0)}function Gu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Mi(rt(t.Ma,t),cy(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,oy(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Mi(rt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ft(10),Ka(this),oy(this))};function Wu(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function oy(t){t.g=new Fi(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.M?"0":"1"),be(e,"AID",t.V),be(e,"TYPE","xmlhttp"),ji(t,e),t.o&&t.s&&Ku(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ja(_n(e)),n.s=null,n.S=!0,Mm(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Ka(this),Gu(this),ft(19))};function Zo(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function ay(t,e){var n=null;if(t.g==e){Zo(t),Wu(t),t.g=null;var s=2}else if(Al(t.h,e))n=e.F,Wm(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Fa(),We(s,new Dm(s,n)),za(t)}else iy(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&qC(t,e)||s==2&&Gu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}}function cy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=rt(t.pb,t);n||(n=new gs("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Yo(n,"https"),ja(n)),$C(n.toString(),s)}else ft(2);t.H=0,t.l&&t.l.za(e),ly(t),sy(t)}x.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function ly(t){if(t.H=0,t.pa=[],t.l){const e=Qm(t.h);(e.length!=0||t.i.length!=0)&&(Hd(t.pa,e),Hd(t.pa,t.i),t.h.i.length=0,ku(t.i),t.i.length=0),t.l.ya()}}function uy(t,e,n){var s=n instanceof gs?_n(n):new gs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Jo(s,s.m);else{var r=X.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gs(null,void 0);s&&Yo(i,s),e&&(i.g=e),r&&Jo(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&be(s,n,e),be(s,"VER",t.qa),ji(t,s),s}function hy(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new Vi({ob:!0})):new Ae(t.va),e.Oa(t.I),e}function dy(){}x=dy.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.Va=function(){};function ea(){if(nr&&!(10<=Number(aC)))throw Error("Environmental error: no available transport.")}ea.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){je.call(this),this.g=new ny(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new br(this)}He(Ct,je);Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ft(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=uy(t,null,t.Y),za(t)};Ct.prototype.close=function(){zu(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mu(t),t=n);e.i.push(new LC(e.fb++,t)),e.H==3&&za(e)};Ct.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,Ct.$.N.call(this)};function fy(t){Vu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(fy,Vu);function py(){Bu.call(this),this.status=1}He(py,Bu);function br(t){this.g=t}He(br,dy);br.prototype.Ba=function(){We(this.g,"a")};br.prototype.Aa=function(t){We(this.g,new fy(t))};br.prototype.za=function(t){We(this.g,new py)};br.prototype.ya=function(){We(this.g,"b")};function KC(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Ht,KC);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Uc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Uc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Uc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Uc(this,s),r=0;break}}this.h=r,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function de(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var zC={};function Qu(t){return-128<=t&&128>t?fm(zC,t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return Ge(Jt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Rl;return new de(e,0)}function gy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(gy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),s=Qs,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Jt(Math.pow(e,i)),s=s.R(i).add(Jt(o))):(s=s.R(n),s=s.add(Jt(o)))}return s}var Rl=4294967296,Qs=Qu(0),kl=Qu(1),tf=Qu(16777216);x=de.prototype;x.ea=function(){if(At(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Rl+s)*e,e*=Rl}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(At(this))return"-"+Ge(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,s="";;){var r=na(n,e).g;n=ta(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,gn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}x.X=function(t){return t=ta(this,t),At(t)?-1:gn(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new de(n,~t.h).add(kl)}x.abs=function(){return At(this)?Ge(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function ta(t,e){return t.add(Ge(e))}x.R=function(t){if(gn(this)||gn(t))return Qs;if(At(this))return At(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(At(t))return Ge(this.R(Ge(t)));if(0>this.X(tf)&&0>t.X(tf))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,oo(n,2*s+2*r),n[2*s+2*r+1]+=i*c,oo(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,oo(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,oo(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new de(n,0)};function oo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Lr(t,e){this.g=t,this.h=e}function na(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new Lr(Qs,Qs);if(At(t))return e=na(Ge(t),e),new Lr(Ge(e.g),Ge(e.h));if(At(e))return e=na(t,Ge(e)),new Lr(Ge(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=kl,s=e;0>=s.X(t);)n=nf(n),s=nf(s);var r=Ls(n,1),i=Ls(s,1);for(s=Ls(s,2),n=Ls(n,2);!gn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ls(s,1),n=Ls(n,1)}return e=ta(t,r.R(e)),new Lr(r,e)}for(r=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Jt(n),o=i.R(e);At(o)||0<o.X(t);)n-=s,i=Jt(n),o=i.R(e);gn(i)&&(i=kl),r=r.add(i),t=ta(t,o)}return new Lr(r,t)}x.gb=function(t){return na(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new de(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new de(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new de(n,this.h^t.h)};function nf(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new de(n,t.h)}function Ls(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(r,t.h)}ea.prototype.createWebChannel=ea.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;$a.NO_ERROR=0;$a.TIMEOUT=8;$a.HTTP_ERROR=6;Pm.COMPLETE="complete";xm.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";je.prototype.listen=je.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Jt;de.fromString=gy;var GC=function(){return new ea},WC=function(){return Fa()},Fc=$a,QC=Pm,XC=Rs,sf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},YC=Vi,ao=xm,JC=Ae,ZC=Ht,Xs=de;const rf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new gu("@firebase/firestore");function of(){return Es.logLevel}function V(t,...e){if(Es.logLevel<=ce.DEBUG){const n=e.map(Xu);Es.debug(`Firestore (${Cr}): ${t}`,...n)}}function wn(t,...e){if(Es.logLevel<=ce.ERROR){const n=e.map(Xu);Es.error(`Firestore (${Cr}): ${t}`,...n)}}function sr(t,...e){if(Es.logLevel<=ce.WARN){const n=e.map(Xu);Es.warn(`Firestore (${Cr}): ${t}`,...n)}}function Xu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Te(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class tS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nS{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new my(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Je(e)}}class sS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class rS{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new sS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.T=n.token,new iS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=aS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function rr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends vi{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const cS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends vi{construct(e,n,s){return new nt(e,n,s)}static isValidIdentifier(e){return cS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ie.fromString(e))}static fromName(e){return new H(Ie.fromString(e).popFirst(5))}static empty(){return new H(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ie(e.slice()))}}function lS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new Kn(r,H.empty(),e)}function uS(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Kn(J.min(),H.empty(),-1)}static max(){return new Kn(J.max(),H.empty(),-1)}}function hS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==dS)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Yu.ct=-1;function Ga(t){return t==null}function sa(t){return t===0&&1/t==-1/0}function pS(t){return typeof t=="number"&&Number.isInteger(t)&&!sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??qe.RED,this.left=r??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cf(this.data.getIterator())}getIteratorFrom(e){return new cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ot(nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new _y("Invalid base64 string: "+r):r}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const gS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=gS.exec(t);if(Te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zu(t){const e=t.mapValue.fields.__previous_value__;return Ju(e)?Zu(e):e}function _i(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ju(t)?4:yS(t)?9007199254740991:10:Q()}function on(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=zn(s.timestampValue),o=zn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Is(s.bytesValue).isEqual(Is(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?sa(i)===sa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return rr(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(af(i)!==af(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!on(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Ei(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function ir(t,e){if(t===e)return 0;const n=Ts(t),s=Ts(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lf(t.timestampValue,e.timestampValue);case 4:return lf(_i(t),_i(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Is(r),a=Is(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Le(r.latitude),Le(i.latitude));return o!==0?o:ue(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ir(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===lo.mapValue&&i===lo.mapValue)return 0;if(r===lo.mapValue)return 1;if(i===lo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=ir(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=zn(t),s=zn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function or(t){return Nl(t)}function Nl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=zn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Is(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Nl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Nl(s.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ol(t){return!!t&&"integerValue"in t}function eh(t){return!!t&&"arrayValue"in t}function hf(t){return!!t&&"nullValue"in t}function df(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Co(t){return!!t&&"mapValue"in t}function Xr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Xr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(n)}setAll(e){let n=nt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Xr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Co(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Sr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Rt(Xr(this.value))}}function wy(t){const e=[];return Sr(t.fields,(n,s)=>{const r=new nt([n]);if(Co(s)){const i=wy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,J.min(),J.min(),J.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ze(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new Ze(e,2,n,J.min(),J.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,J.min(),J.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.position=e,this.inclusive=n}}function ff(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=ir(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function vS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{}class Me extends Ey{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new wS(e,n,s):n==="array-contains"?new TS(e,s):n==="in"?new bS(e,s):n==="not-in"?new CS(e,s):n==="array-contains-any"?new SS(e,s):new Me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ES(e,s):new IS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ir(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(ir(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qt extends Ey{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new qt(e,n)}matches(e){return Iy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Iy(t){return t.op==="and"}function Ty(t){return _S(t)&&Iy(t)}function _S(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Dl(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+or(t.value);if(Ty(t))return t.filters.map(e=>Dl(e)).join(",");{const e=t.filters.map(n=>Dl(n)).join(",");return`${t.op}(${e})`}}function by(t,e){return t instanceof Me?function(n,s){return s instanceof Me&&n.op===s.op&&n.field.isEqual(s.field)&&on(n.value,s.value)}(t,e):t instanceof qt?function(n,s){return s instanceof qt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&by(i,s.filters[o]),!0):!1}(t,e):void Q()}function Cy(t){return t instanceof Me?function(e){return`${e.field.canonicalString()} ${e.op} ${or(e.value)}`}(t):t instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cy).join(" ,")+"}"}(t):"Filter"}class wS extends Me{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class ES extends Me{constructor(e,n){super(e,"in",n),this.keys=Sy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IS extends Me{constructor(e,n){super(e,"not-in",n),this.keys=Sy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class TS extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eh(n)&&Ei(n.arrayValue,this.value)}}class bS extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ei(this.value.arrayValue,n)}}class CS extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ei(this.value.arrayValue,n)}}class SS extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ei(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function gf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new AS(t,e,n,s,r,i,o)}function th(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>or(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>or(s)).join(",")),e.ft=n}return e.ft}function nh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!by(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pf(t.startAt,e.startAt)&&pf(t.endAt,e.endAt)}function Pl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function RS(t,e,n,s,r,i,o,a){return new Ar(t,e,n,s,r,i,o,a)}function Ay(t){return new Ar(t)}function mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ry(t){return t.collectionGroup!==null}function Js(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=Wa(e),s=sh(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Ys(n)),e.dt.push(new Ys(nt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ys(nt.keyField(),i))}}}return e.dt}function En(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=gf(e.path,e.collectionGroup,Js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Js(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ys(i.field,o))}const s=e.endAt?new ra(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ra(e.startAt.position,e.startAt.inclusive):null;e._t=gf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function xl(t,e){e.getFirstInequalityField(),Wa(t);const n=t.filters.concat([e]);return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ia(t,e,n){return new Ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qa(t,e){return nh(En(t),En(e))&&t.limitType===e.limitType}function ky(t){return`${th(En(t))}|lt:${t.limitType}`}function Ll(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Cy(s)).join(", ")}]`),Ga(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>or(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>or(s)).join(",")),`Target(${n})`}(En(t))}; limitType=${t.limitType})`}function Xa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Js(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ff(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Js(n),s)||n.endAt&&!function(r,i,o){const a=ff(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Js(n),s))}(t,e)}function kS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ny(t){return(e,n)=>{let s=!1;for(const r of Js(t)){const i=NS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function NS(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ir(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return vy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=new Se(H.comparator);function In(){return OS}const Oy=new Se(H.comparator);function Hr(...t){let e=Oy;for(const n of t)e=e.insert(n.key,n);return e}function Dy(t){let e=Oy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function hs(){return Yr()}function Py(){return Yr()}function Yr(){return new Rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const DS=new Se(H.comparator),PS=new ot(H.comparator);function re(...t){let e=PS;for(const n of t)e=e.add(n);return e}const xS=new ot(ue);function LS(){return xS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sa(e)?"-0":e}}function Ly(t){return{integerValue:""+t}}function MS(t,e){return pS(e)?Ly(e):xy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this._=void 0}}function US(t,e,n){return t instanceof oa?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ju(r)&&(r=Zu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ii?Uy(t,e):t instanceof Ti?Fy(t,e):function(s,r){const i=My(s,r),o=yf(i)+yf(s.wt);return Ol(i)&&Ol(s.wt)?Ly(o):xy(s.serializer,o)}(t,e)}function FS(t,e,n){return t instanceof Ii?Uy(t,e):t instanceof Ti?Fy(t,e):n}function My(t,e){return t instanceof aa?Ol(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class oa extends Ya{}class Ii extends Ya{constructor(e){super(),this.elements=e}}function Uy(t,e){const n=$y(e);for(const s of t.elements)n.some(r=>on(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ti extends Ya{constructor(e){super(),this.elements=e}}function Fy(t,e){let n=$y(e);for(const s of t.elements)n=n.filter(r=>!on(r,s));return{arrayValue:{values:n}}}class aa extends Ya{constructor(e,n){super(),this.serializer=e,this.wt=n}}function yf(t){return Le(t.integerValue||t.doubleValue)}function $y(t){return eh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $S(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ii&&s instanceof Ii||n instanceof Ti&&s instanceof Ti?rr(n.elements,s.elements,on):n instanceof aa&&s instanceof aa?on(n.wt,s.wt):n instanceof oa&&s instanceof oa}(t.transform,e.transform)}class VS{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ja{}function Vy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rh(t.key,nn.none()):new Ki(t.key,t.data,nn.none());{const n=t.data,s=Rt.empty();let r=new ot(nt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ks(t.key,s,new Ft(r.toArray()),nn.none())}}function BS(t,e,n){t instanceof Ki?function(s,r,i){const o=s.value.clone(),a=_f(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ks?function(s,r,i){if(!So(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=_f(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(By(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Jr(t,e,n,s){return t instanceof Ki?function(r,i,o,a){if(!So(r.precondition,i))return o;const c=r.value.clone(),l=wf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ks?function(r,i,o,a){if(!So(r.precondition,i))return o;const c=wf(r.fieldTransforms,a,i),l=i.data;return l.setAll(By(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return So(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function jS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=My(s.transform,r||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function vf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&rr(n,s,(r,i)=>$S(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ki extends Ja{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ks extends Ja{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function By(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function _f(t,e,n){const s=new Map;Te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,FS(o,a,n[r]))}return s}function wf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,US(i,o,e))}return s}class rh extends Ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HS extends Ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&BS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Jr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Jr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Py();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Vy(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&rr(this.mutations,e.mutations,(n,s)=>vf(n,s))&&rr(this.baseMutations,e.baseMutations,(n,s)=>vf(n,s))}}class ih{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Te(e.mutations.length===s.length);let r=DS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ih(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,ie;function GS(t){switch(t){default:return Q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function jy(t){if(t===void 0)return wn("GRPC error has no .code"),E.UNKNOWN;switch(t){case xe.OK:return E.OK;case xe.CANCELLED:return E.CANCELLED;case xe.UNKNOWN:return E.UNKNOWN;case xe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case xe.INTERNAL:return E.INTERNAL;case xe.UNAVAILABLE:return E.UNAVAILABLE;case xe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case xe.NOT_FOUND:return E.NOT_FOUND;case xe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case xe.ABORTED:return E.ABORTED;case xe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case xe.DATA_LOSS:return E.DATA_LOSS;default:return Q()}}(ie=xe||(xe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return uo}static getOrCreateInstance(){return uo===null&&(uo=new oh),uo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let uo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Xs([4294967295,4294967295],0);function Ef(t){const e=WS().encode(t),n=new ZC;return n.update(e),new Uint8Array(n.digest())}function If(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xs([n,s],0),new Xs([r,i],0)]}class ah{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new qr(`Invalid padding: ${n}`);if(s<0)throw new qr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new qr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new qr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Xs.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(Xs.fromNumber(s)));return r.compare(QS)===1&&(r=new Xs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Ef(e),[s,r]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ah(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Ef(e),[s,r]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class qr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,zi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Za(J.min(),r,new Se(ue),In(),re())}}class zi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new zi(s,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class Hy{constructor(e,n){this.targetId=e,this.bt=n}}class qy{constructor(e,n,s=lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Tf{constructor(){this.Vt=0,this.St=Cf(),this.Dt=lt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=re(),n=re(),s=re();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new zi(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Cf()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class XS{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=In(),this.jt=bf(),this.zt=new Se(ue)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(Pl(o))if(r===0){const a=new H(o.path);this.Jt(s,a,Ze.newNoDocument(a,J.min()))}else Te(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=oh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,v,_,b,S;const D={localCacheCount:u,existenceFilterCount:h.count},R=h.unchangedNames;return R&&(D.bloomFilter={applied:l===0,hashCount:(d=R==null?void 0:R.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(v=(p=R==null?void 0:R.bits)===null||p===void 0?void 0:p.bitmap)===null||v===void 0?void 0:v.length)!==null&&_!==void 0?_:0,padding:(S=(b=R==null?void 0:R.bits)===null||b===void 0?void 0:b.padding)!==null&&S!==void 0?S:0}),D}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=Is(i).toUint8Array()}catch(u){if(u instanceof _y)return sr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new ah(c,o,a)}catch(u){return sr(u instanceof qr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&Pl(a.target)){const c=new H(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,Ze.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=re();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new Za(e,n,this.zt,this.Qt,s);return this.Qt=In(),this.jt=bf(),this.zt=new Se(ue),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Tf,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ot(ue),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Tf),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function bf(){return new Se(H.comparator)}function Cf(){return new Se(H.comparator)}const YS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZS=(()=>({and:"AND",or:"OR"}))();class eA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ml(t,e){return t.useProto3Json||Ga(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ky(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tA(t,e){return ca(t,e.toTimestamp())}function sn(t){return Te(!!t),J.fromTimestamp(function(e){const n=zn(e);return new Ue(n.seconds,n.nanos)}(t))}function ch(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zy(t){const e=Ie.fromString(t);return Te(Xy(e)),e}function Ul(t,e){return ch(t.databaseId,e.path)}function $c(t,e){const n=zy(e);if(n.get(1)!==t.databaseId.projectId)throw new F(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Gy(n))}function Fl(t,e){return ch(t.databaseId,e)}function nA(t){const e=zy(t);return e.length===4?Ie.emptyPath():Gy(e)}function $l(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gy(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sf(t,e,n){return{name:Ul(t,e),fields:n.value.mapValue.fields}}function sA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Te(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:jy(c.code);return new F(l,c.message||"")}(o);n=new qy(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=$c(t,s.document.name),i=sn(s.document.updateTime),o=s.document.createTime?sn(s.document.createTime):J.min(),a=new Rt({mapValue:{fields:s.document.fields}}),c=Ze.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ao(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=$c(t,s.document),i=s.readTime?sn(s.readTime):J.min(),o=Ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ao([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=$c(t,s.document),i=s.removedTargetIds||[];n=new Ao([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new zS(r,i),a=s.targetId;n=new Hy(a,o)}}return n}function rA(t,e){let n;if(e instanceof Ki)n={update:Sf(t,e.key,e.value)};else if(e instanceof rh)n={delete:Ul(t,e.key)};else if(e instanceof ks)n={update:Sf(t,e.key,e.data),updateMask:fA(e.fieldMask)};else{if(!(e instanceof HS))return Q();n={verify:Ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof oa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ii)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof aa)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:tA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function iA(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?sn(s.updateTime):sn(r);return i.isEqual(J.min())&&(i=sn(r)),new VS(i,s.transformResults||[])}(n,e))):[]}function oA(t,e){return{documents:[Fl(t,e.path)]}}function aA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Fl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Qy(qt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Us(u.field),direction:uA(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ml(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function cA(t){let e=nA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Wy(u);return h instanceof qt&&Ty(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ys(Fs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ga(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ra(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ra(d,h)}(n.endAt)),RS(e,r,o,i,a,"F",c,l)}function lA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Fs(e.unaryFilter.field);return Me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Fs(e.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fs(e.unaryFilter.field);return Me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Fs(e.unaryFilter.field);return Me.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return Me.create(Fs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(n=>Wy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function uA(t){return YS[t]}function hA(t){return JS[t]}function dA(t){return ZS[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Fs(t){return nt.fromServerFormat(t.fieldPath)}function Qy(t){return t instanceof Me?function(e){if(e.op==="=="){if(df(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NAN"}};if(hf(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(df(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NOT_NAN"}};if(hf(e.value))return{unaryFilter:{field:Us(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(e.field),op:hA(e.op),value:e.value}}}(t):t instanceof qt?function(e){const n=e.getFilters().map(s=>Qy(s));return n.length===1?n[0]:{compositeFilter:{op:dA(e.op),filters:n}}}(t):Q()}function fA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s,r,i=J.min(),o=J.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.le=e}}function gA(t){const e=cA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ia(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(){this.sn=new yA}addToCollectionParentIndex(e,n){return this.sn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Kn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class yA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ar(0)}static kn(){return new ar(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.changes=new Rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Jr(s.mutation,r,Ft.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=re()){const r=hs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Hr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=hs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,re()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=In();const o=Yr(),a=Yr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ks)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Jr(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new _A(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Yr();let r=new Se((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Ft.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||re()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Py();u.forEach(d=>{if(!i.has(d)){const p=Vy(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ry(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(hs());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Dy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=Hr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Hr();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Ar(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ze.newInvalidDocument(l)))});let o=Hr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Jr(l.mutation,c,Ft.empty(),Ue.now()),Xa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return A.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:sn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:gA(s.bundledQuery),readTime:sn(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.overlays=new Se(H.comparator),this.hs=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=hs();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=hs(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=hs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=hs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new KS(n,s));let i=this.hs.get(n);i===void 0&&(i=re(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.ls=new ot($e.fs),this.ds=new ot($e._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new $e(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new $e(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new H(new Ie([])),s=new $e(n,e),r=new $e(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new H(new Ie([])),s=new $e(n,e),r=new $e(n,e+1);let i=re();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return H.comparator(e.key,n.key)||ue(e.Es,n.Es)}static _s(e,n){return ue(e.Es,n.Es)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ot($e.fs)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(ue);return n.forEach(r=>{const i=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),A.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new $e(new H(i),0);let a=new ot(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),A.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Te(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,r=>{const i=new $e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new $e(n,0),r=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.Ss=e,this.docs=new Se(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let s=In();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ze.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=In();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||hS(uS(u),s)<=0||(r.has(u.key)||Xa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Q()}Ds(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new CA(this)}getSize(e){return A.resolve(this.size)}}class CA extends vA{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.persistence=e,this.Cs=new Rr(n=>th(n),nh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.xs=0,this.Ns=new lh,this.targetCount=0,this.ks=ar.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),A.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ar(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.$n(n),A.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Yu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new SA(this),this.indexManager=new mA,this.remoteDocumentCache=function(s){return new bA(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new pA(n),this.Ls=new EA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new TA(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new RA(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return A.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class RA extends fS{constructor(e){super(),this.currentSequenceNumber=e}}class uh{constructor(e){this.persistence=e,this.Gs=new lh,this.Qs=null}static js(e){return new uh(e)}get zs(){if(this.Qs)return this.Qs;throw Q()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.zs,s=>{const r=H.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return A.or([()=>A.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=re(),r=re();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(mf(n))return A.resolve(null);let s=En(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ia(n,null,"F"),s=En(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=re(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,ia(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return mf(n)||r.isEqual(J.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(of()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ll(n)),this.zi(e,o,n,lS(r,-1)))})}Qi(e,n){let s=new ot(Ny(e));return n.forEach((r,i)=>{Xa(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return of()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ll(n)),this.qi.getDocumentsMatchingQuery(e,n,Kn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new Se(ue),this.Ji=new Rr(i=>th(i),nh),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wA(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function OA(t,e,n,s){return new NA(t,e,n,s)}async function Yy(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=re();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function DA(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(v=>{const _=c.docVersions.get(p);Te(_!==null),v.version.compareTo(_)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Jy(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function PA(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(lt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(v,_,b){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Fs.updateTargetData(i,p))});let c=In(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(xA(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(J.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function xA(t,e,n){let s=re(),r=re();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=In();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function LA(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function MA(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Pn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function Vl(t,e,n){const s=Z(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qi(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function Af(t,e,n){const s=Z(t);let r=J.min(),i=re();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Ji.get(l);return h!==void 0?A.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,En(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:re())).next(a=>(UA(s,kS(e),a),{documents:a,sr:i})))}function UA(t,e,n){let s=t.Yi.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class Rf{constructor(){this.activeTargetIds=LS()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FA{constructor(){this.Wr=new Rf,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Rf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho=null;function Vc(){return ho===null?ho=268435456+Math.round(2147483648*Math.random()):ho++,"0x"+ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class jA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Vc(),a=this.Io(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw sr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=VA[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Vc();return new Promise((o,a)=>{const c=new JC;c.setWithCredentials(!0),c.listenOnce(QC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();V(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:V(Ye,`RPC '${e}' ${i} timed out`),a(new F(E.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if(V(Ye,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(_){const b=_.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(b)>=0?b:E.UNKNOWN}(p.status);a(new F(v,p.message))}else a(new F(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(E.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V(Ye,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(Ye,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Vc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GC(),a=WC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new YC({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Ye,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const p=new BA({io:_=>{d?V(Ye,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(h||(V(Ye,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(Ye,`RPC '${e}' stream ${r} sending:`,_),u.send(_))},ro:()=>u.close()}),v=(_,b,S)=>{_.listen(b,D=>{try{S(D)}catch(R){setTimeout(()=>{throw R},0)}})};return v(u,ao.EventType.OPEN,()=>{d||V(Ye,`RPC '${e}' stream ${r} transport opened.`)}),v(u,ao.EventType.CLOSE,()=>{d||(d=!0,V(Ye,`RPC '${e}' stream ${r} transport closed`),p.fo())}),v(u,ao.EventType.ERROR,_=>{d||(d=!0,sr(Ye,`RPC '${e}' stream ${r} transport errored:`,_),p.fo(new F(E.UNAVAILABLE,"The operation could not be completed")))}),v(u,ao.EventType.MESSAGE,_=>{var b;if(!d){const S=_.data[0];Te(!!S);const D=S,R=D.error||((b=D[0])===null||b===void 0?void 0:b.error);if(R){V(Ye,`RPC '${e}' stream ${r} received error:`,R);const B=R.status;let te=function(Ne){const G=xe[Ne];if(G!==void 0)return jy(G)}(B),ge=R.message;te===void 0&&(te=E.INTERNAL,ge="Unknown error status: "+B+" with message "+R.message),d=!0,p.fo(new F(te,ge)),u.close()}else V(Ye,`RPC '${e}' stream ${r} received:`,S),p._o(S)}}),v(a,XC.STAT_EVENT,_=>{_.stat===sf.PROXY?V(Ye,`RPC '${e}' stream ${r} detected buffering proxy`):_.stat===sf.NOPROXY&&V(Ye,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}function Bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return new eA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Zy(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new F(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HA extends ev{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=sA(this.serializer,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?sn(i.readTime):J.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=$l(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Pl(a)?{documents:oA(r,a)}:{query:aA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Ky(r,i.resumeToken);const c=Ml(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(J.min())>0){o.readTime=ca(r,i.snapshotVersion.toTimestamp());const c=Ml(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=lA(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=$l(this.serializer),n.removeTarget=e,this.zo(n)}}class qA extends ev{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=iA(e.writeResults,e.commitTime),s=sn(e.commitTime);return this.listener.uu(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=$l(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>rA(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new F(E.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(E.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(E.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class zA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(wn(n),this.wu=!1):V("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Ns(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.Au.add(4),await Gi(c),c.Pu.set("Unknown"),c.Au.delete(4),await tc(c)}(this))})}),this.Pu=new zA(s,r)}}async function tc(t){if(Ns(t))for(const e of t.Ru)await e(!0)}async function Gi(t){for(const e of t.Ru)await e(!1)}function tv(t,e){const n=Z(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),ph(n)?fh(n):kr(n).Uo()&&dh(n,e))}function nv(t,e){const n=Z(t),s=kr(n);n.Eu.delete(e),s.Uo()&&sv(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():Ns(n)&&n.Pu.set("Unknown"))}function dh(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}kr(t).nu(e)}function sv(t,e){t.bu.Lt(e),kr(t).su(e)}function fh(t){t.bu=new XS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),kr(t).start(),t.Pu.mu()}function ph(t){return Ns(t)&&!kr(t).qo()&&t.Eu.size>0}function Ns(t){return Z(t).Au.size===0}function rv(t){t.bu=void 0}async function WA(t){t.Eu.forEach((e,n)=>{dh(t,e)})}async function QA(t,e){rv(t),ph(t)?(t.Pu.pu(e),fh(t)):t.Pu.set("Unknown")}async function XA(t,e,n){if(t.Pu.set("Online"),e instanceof qy&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await la(t,s)}else if(e instanceof Ao?t.bu.Wt(e):e instanceof Hy?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(J.min()))try{const s=await Jy(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(lt.EMPTY_BYTE_STRING,l.snapshotVersion)),sv(r,a);const u=new Pn(l.target,a,c,l.sequenceNumber);dh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await la(t,s)}}async function la(t,e,n){if(!qi(e))throw e;t.Au.add(1),await Gi(t),t.Pu.set("Offline"),n||(n=()=>Jy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await tc(t)})}function iv(t,e){return e().catch(n=>la(t,n,e))}async function nc(t){const e=Z(t),n=Gn(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;YA(e);)try{const r=await LA(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,JA(e,r)}catch(r){await la(e,r)}ov(e)&&av(e)}function YA(t){return Ns(t)&&t.Tu.length<10}function JA(t,e){t.Tu.push(e);const n=Gn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function ov(t){return Ns(t)&&!Gn(t).qo()&&t.Tu.length>0}function av(t){Gn(t).start()}async function ZA(t){Gn(t).au()}async function e1(t){const e=Gn(t);for(const n of t.Tu)e.ou(n.mutations)}async function t1(t,e,n){const s=t.Tu.shift(),r=ih.from(s,e,n);await iv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await nc(t)}async function n1(t,e){e&&Gn(t).ru&&await async function(n,s){if(r=s.code,GS(r)&&r!==E.ABORTED){const i=n.Tu.shift();Gn(n).Go(),await iv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nc(n)}var r}(t,e),ov(t)&&av(t)}async function Nf(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=Ns(n);n.Au.add(3),await Gi(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await tc(n)}async function s1(t,e){const n=Z(t);e?(n.Au.delete(2),await tc(n)):e||(n.Au.add(2),await Gi(n),n.Pu.set("Unknown"))}function kr(t){return t.Vu||(t.Vu=function(e,n,s){const r=Z(e);return r.lu(),new HA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:WA.bind(null,t),co:QA.bind(null,t),eu:XA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),ph(t)?fh(t):t.Pu.set("Unknown")):(await t.Vu.stop(),rv(t))})),t.Vu}function Gn(t){return t.Su||(t.Su=function(e,n,s){const r=Z(e);return r.lu(),new qA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:ZA.bind(null,t),co:n1.bind(null,t),cu:e1.bind(null,t),uu:t1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await nc(t)):(await t.Su.stop(),t.Tu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new gh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mh(t,e){if(wn("AsyncQueue",`${e}: ${t}`),qi(t))return new F(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Hr(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Zs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.Du=new Se(H.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):Q():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class cr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new cr(e,n,Zs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.xu=void 0,this.listeners=[]}}class i1{constructor(){this.queries=new Rr(e=>ky(e),Qa),this.onlineState="Unknown",this.Nu=new Set}}async function o1(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new r1),r)try{i.xu=await n.onListen(s)}catch(o){const a=mh(o,`Initialization of query '${Ll(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&yh(n)}async function a1(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function c1(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&yh(n)}function l1(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function yh(t){t.Nu.forEach(e=>{e.next()})}class u1{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new cr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.key=e}}class lv{constructor(e){this.key=e}}class h1{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=re(),this.mutatedKeys=re(),this.Zu=Ny(e),this.tc=new Zs(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Of,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Xa(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(s.track({type:3,doc:p}),b=!0):this.ic(d,p)||(s.track({type:2,doc:p}),b=!0,(c&&this.Zu(p,c)>0||l&&this.Zu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),b=!0):d&&!p&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new cr(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Of,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=re(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new lv(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new cv(s))}),n}ac(e){this.Ju=e.sr,this.Xu=re();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return cr.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class d1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class f1{constructor(e){this.key=e,this.lc=!1}}class p1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Rr(a=>ky(a),Qa),this._c=new Map,this.wc=new Set,this.mc=new Se(H.comparator),this.gc=new Map,this.yc=new lh,this.Ic={},this.Tc=new Map,this.Ec=ar.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function g1(t,e){const n=C1(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await MA(n.localStore,En(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await m1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&tv(n.remoteStore,o)}return r}async function m1(t,e,n,s,r){t.Rc=(h,d,p)=>async function(v,_,b,S){let D=_.view.nc(b);D.ji&&(D=await Af(v.localStore,_.query,!1).then(({documents:te})=>_.view.nc(te,D)));const R=S&&S.targetChanges.get(_.targetId),B=_.view.applyChanges(D,v.isPrimaryClient,R);return Pf(v,_.targetId,B.uc),B.snapshot}(t,h,d,p);const i=await Af(t.localStore,e,!0),o=new h1(e,i.sr),a=o.nc(i.documents),c=zi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Pf(t,n,l.uc);const u=new d1(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function y1(t,e){const n=Z(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Qa(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),nv(n.remoteStore,s.targetId),Bl(n,s.targetId)}).catch(Hi)):(Bl(n,s.targetId),await Vl(n.localStore,s.targetId,!0))}async function v1(t,e,n){const s=S1(t);try{const r=await function(i,o){const a=Z(i),c=Ue.now(),l=o.reduce((d,p)=>d.add(p.key),re());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=In(),v=re();return a.Xi.getEntries(d,l).next(_=>{p=_,p.forEach((b,S)=>{S.isValidDocument()||(v=v.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{u=_;const b=[];for(const S of o){const D=jS(S,u.get(S.key).overlayedDocument);D!=null&&b.push(new ks(S.key,D,wy(D.value.mapValue),nn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(_=>{h=_;const b=_.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Dy(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new Se(ue)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await Wi(s,r.changes),await nc(s.remoteStore)}catch(r){const i=mh(r,"Failed to persist write");n.reject(i)}}async function uv(t,e){const n=Z(t);try{const s=await PA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(Te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?Te(o.lc):r.removedDocuments.size>0&&(Te(o.lc),o.lc=!1))}),await Wi(n,s,e)}catch(s){await Hi(s)}}function Df(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&yh(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _1(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new Se(H.comparator);o=o.insert(i,Ze.newNoDocument(i,J.min()));const a=re().add(i),c=new Za(J.min(),new Map,new Se(ue),o,a);await uv(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),vh(s)}else await Vl(s.localStore,e,!1).then(()=>Bl(s,e,n)).catch(Hi)}async function w1(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await DA(n.localStore,e);dv(n,s,null),hv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Wi(n,r)}catch(r){await Hi(r)}}async function E1(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);dv(s,e,n),hv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Wi(s,r)}catch(r){await Hi(r)}}function hv(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function dv(t,e,n){const s=Z(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function Bl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||fv(t,s)})}function fv(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(nv(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),vh(t))}function Pf(t,e,n){for(const s of n)s instanceof cv?(t.yc.addReference(s.key,e),I1(t,s)):s instanceof lv?(V("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||fv(t,s.key)):Q()}function I1(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.wc.add(s),vh(t))}function vh(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new H(Ie.fromString(e)),s=t.Ec.next();t.gc.set(s,new f1(n)),t.mc=t.mc.insert(n,s),tv(t.remoteStore,new Pn(En(Ay(n.path)),s,"TargetPurposeLimboResolution",Yu.ct))}}async function Wi(t,e,n){const s=Z(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=hh.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!qi(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);l.Hi=l.Hi.insert(h,v)}}}(s.localStore,i))}async function T1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Yy(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new F(E.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wi(n,s.tr)}}function b1(t,e){const n=Z(t),s=n.gc.get(e);if(s&&s.lc)return re().add(s.key);{let r=re();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function C1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_1.bind(null,e),e.fc.eu=c1.bind(null,e.eventManager),e.fc.vc=l1.bind(null,e.eventManager),e}function S1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=w1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=E1.bind(null,e),e}class xf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return OA(this.persistence,new kA,e.initialUser,this.serializer)}createPersistence(e){return new AA(uh.js,this.serializer)}createSharedClientState(e){return new FA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class A1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Df(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=T1.bind(null,this.syncEngine),await s1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new i1}createDatastore(e){const n=ec(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new jA(r));var r;return function(i,o,a,c){return new KA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Df(this.syncEngine,a,0),o=kf.D()?new kf:new $A,new GA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new p1(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);V("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Gi(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Je.UNAUTHENTICATED,this.clientId=yy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=mh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Yy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await O1(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Nf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Nf(e.remoteStore,i)),t._onlineComponents=e}function N1(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function O1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!N1(n))throw n;sr("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new xf)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new xf);return t._offlineComponents}async function pv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Lf(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Lf(t,new A1))),t._onlineComponents}function D1(t){return pv(t).then(e=>e.syncEngine)}async function P1(t){const e=await pv(t),n=e.eventManager;return n.onListen=g1.bind(null,e.syncEngine),n.onUnlisten=y1.bind(null,e.syncEngine),n}function x1(t,e,n={}){const s=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new R1({next:h=>{i.enqueueAndForget(()=>a1(r,u)),h.fromCache&&a.source==="server"?c.reject(new F(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new u1(o,l,{includeMetadataChanges:!0,Uu:!0});return o1(r,u)}(await P1(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e,n){if(!n)throw new F(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function L1(t,e,n,s){if(e===!0&&s===!0)throw new F(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uf(t){if(!H.isDocumentKey(t))throw new F(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(H.isDocumentKey(t))throw new F(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sc(t);throw new F(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function M1(t,e){if(e<=0)throw new F(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $f({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $f(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eS;switch(n.type){case"firstParty":return new rS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Mf.get(e);n&&(V("ComponentProvider","Removing Datastore"),Mf.delete(e),n.terminate())}(this),Promise.resolve()}}function U1(t,e,n,s={}){var r;const i=(t=lr(t,rc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&sr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Je.MOCK_USER;else{o=Sg(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Je(c)}t._authCredentials=new tS(new my(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Xn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class $n extends Xn{constructor(e,n,s){super(e,n,Ay(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new H(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function Vn(t,e,...n){if(t=Be(t),gv("collection","path",e),t instanceof rc){const s=Ie.fromString(e,...n);return Ff(s),new $n(t,null,s)}{if(!(t instanceof bt||t instanceof $n))throw new F(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Ff(s),new $n(t.firestore,null,s)}}function _h(t,e,...n){if(t=Be(t),arguments.length===1&&(e=yy.A()),gv("doc","path",e),t instanceof rc){const s=Ie.fromString(e,...n);return Uf(s),new bt(t,null,new H(s))}{if(!(t instanceof bt||t instanceof $n))throw new F(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Uf(s),new bt(t.firestore,t instanceof $n?t.converter:null,new H(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Zy(this,"async_queue_retry"),this.Yc=()=>{const n=Bc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Fn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!qi(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw wn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=gh.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&Q()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class ic extends rc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new F1,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yv(this),this._firestoreClient.terminate()}}function $1(t,e){const n=typeof t=="object"?t:yu(),s=typeof t=="string"?t:e||"(default)",r=Ra(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=bg("firestore");i&&U1(r,...i)}return r}function mv(t){return t._firestoreClient||yv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yv(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new mS(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new k1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(lt.fromBase64String(e))}catch(n){throw new F(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=/^__.*__$/;class B1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ki(e,this.data,n,this.fieldTransforms)}}function _v(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ih{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return ua(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(_v(this.ua)&&V1.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class j1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ec(e)}ga(e,n,s,r=!1){return new Ih({ua:e,methodName:n,ma:s,path:nt.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wv(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new j1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function H1(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Tv("Data must be an object, but it was:",o,s);const a=Ev(s,o);let c,l;if(i.merge)c=new Ft(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=K1(e,h,n);if(!o.contains(d))throw new F(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);G1(u,d)||u.push(d)}c=new Ft(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new B1(new Rt(a),c,l)}function q1(t,e,n,s=!1){return Th(n,t.ga(s?4:3,e))}function Th(t,e){if(Iv(t=Be(t)))return Tv("Unsupported field value:",e,t),Ev(t,e);if(t instanceof vv)return function(n,s){if(!_v(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Th(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return MS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:ca(s.serializer,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ca(s.serializer,r)}}if(n instanceof Eh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ur)return{bytesValue:Ky(s.serializer,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ch(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${sc(n)}`)}(t,e)}function Ev(t,e){const n={};return vy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(s,r)=>{const i=Th(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Iv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Eh||t instanceof ur||t instanceof bt||t instanceof vv)}function Tv(t,e,n){if(!Iv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=sc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function K1(t,e,n){if((e=Be(e))instanceof wh)return e._internalPath;if(typeof e=="string")return bv(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const z1=new RegExp("[~\\*/\\[\\]]");function bv(t,e,n){if(e.search(z1)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wh(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(E.INVALID_ARGUMENT,a+t+c)}function G1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class W1 extends Cv{data(){return super.data()}}function oc(t,e){return typeof e=="string"?bv(t,e):e instanceof wh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bh{}class Ch extends bh{}function bi(t,e,...n){let s=[];e instanceof bh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Sh).length,o=r.filter(a=>a instanceof ac).length;if(i>1||i>0&&o>0)throw new F(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ac extends Ch{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ac(e,n,s)}_apply(e){const n=this._parse(e);return Sv(e._query,n),new Xn(e.firestore,e.converter,xl(e._query,n))}_parse(e){const n=wv(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Bf(u,l);const d=[];for(const p of u)d.push(Vf(a,r,p));h={arrayValue:{values:d}}}else h=Vf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Bf(u,l),h=q1(o,i,u,l==="in"||l==="not-in");return Me.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jl(t,e,n){const s=e,r=oc("where",t);return ac._create(r,s,n)}class Sh extends bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Sv(i,a),i=xl(i,a)}(e._query,n),new Xn(e.firestore,e.converter,xl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ah extends Ch{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ah(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ys(r,i);return function(a,c){if(sh(a)===null){const l=Wa(a);l!==null&&Av(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Xn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ar(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function X1(t,e="asc"){const n=e,s=oc("orderBy",t);return Ah._create(s,n)}class Rh extends Ch{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Rh(e,n,s)}_apply(e){return new Xn(e.firestore,e.converter,ia(e._query,this._limit,this._limitType))}}function Y1(t){return M1("limit",t),Rh._create("limit",t,"F")}function Vf(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new F(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ry(e)&&n.indexOf("/")!==-1)throw new F(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ie.fromString(n));if(!H.isDocumentKey(s))throw new F(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return uf(t,new H(s))}if(n instanceof bt)return uf(t,n._key);throw new F(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sc(n)}.`)}function Bf(t,e){if(!Array.isArray(t)||t.length===0)throw new F(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sv(t,e){if(e.isInequality()){const s=Wa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=sh(t);i!==null&&Av(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Av(t,e,n){if(!n.isEqual(e))throw new F(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class J1{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Sr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Eh(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Zu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const n=zn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);Te(Xy(s));const r=new wi(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eR extends Cv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(oc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ro extends eR{data(e={}){return super.data(e)}}class tR{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new fo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ro(this._firestore,this._userDataWriter,s.key,s,new fo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ro(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:nR(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class sR extends J1{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function Ci(t){t=lr(t,Xn);const e=lr(t.firestore,ic),n=mv(e),s=new sR(e);return Q1(t._query),x1(n,t._query).then(r=>new tR(e,s,t,r))}function Rv(t,e,n){t=lr(t,bt);const s=lr(t.firestore,ic),r=Z1(t.converter,e,n);return kv(s,[H1(wv(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,nn.none())])}function rR(t){return kv(lr(t.firestore,ic),[new rh(t._key,nn.none())])}function kv(t,e){return function(n,s){const r=new Fn;return n.asyncQueue.enqueueAndForget(async()=>v1(await D1(n),s,r)),r.promise}(mv(t),e)}(function(t,e=!0){(function(n){Cr=n})(Ss),vs(new qn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ic(new nS(n.getProvider("auth-internal")),new oS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Zt(rf,"3.11.0",t),Zt(rf,"3.11.0","esm2017")})();const iR={apiKey:"AIzaSyAWHOQmFmsqzl6KuzcG3xDtb589E47fl0g",authDomain:"bilets-aeb1e.firebaseapp.com",projectId:"bilets-aeb1e",storageBucket:"bilets-aeb1e.appspot.com",messagingSenderId:"585163155500",appId:"1:585163155500:web:d7f887a14e0d07ed974989",measurementId:"G-K5PKHKN72D"},Nv=kg(iR),Bn=$1(Nv),Kr=Qb(Nv);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $s=typeof window<"u";function oR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Hc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Kt(r)?r.map(t):t(r)}return n}const Zr=()=>{},Kt=Array.isArray,aR=/\/$/,cR=t=>t.replace(aR,"");function qc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=dR(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function lR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uR(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&hr(e.matched[s],n.matched[r])&&Ov(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ov(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hR(t[n],e[n]))return!1;return!0}function hR(t,e){return Kt(t)?Hf(t,e):Kt(e)?Hf(e,t):t===e}function Hf(t,e){return Kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ei||(ei={}));function fR(t){if(!t)if($s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cR(t)}const pR=/^[^#]+#/;function gR(t,e){return t.replace(pR,"#")+e}function mR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const cc=()=>({left:window.pageXOffset,top:window.pageYOffset});function yR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=mR(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function qf(t,e){return(history.state?history.state.position-e:-1)+t}const Hl=new Map;function vR(t,e){Hl.set(t,e)}function _R(t){const e=Hl.get(t);return Hl.delete(t),e}let wR=()=>location.protocol+"//"+location.host;function Dv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),jf(c,"")}return jf(n,t)+s+r}function ER(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Dv(t,location),v=n.value,_=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===v){o=null;return}b=_?d.position-_.position:0}else s(p);r.forEach(S=>{S(n.value,v,{delta:b,type:Si.pop,direction:b?b>0?ei.forward:ei.back:ei.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:cc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Kf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?cc():null}}function IR(t){const{history:e,location:n}=window,s={value:Dv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:wR()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,Kf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:cc()});i(u.current,u,!0);const h=he({},Kf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function TR(t){t=fR(t);const e=IR(t),n=ER(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:gR.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function bR(t){return typeof t=="string"||t&&typeof t=="object"}function Pv(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xv=Symbol("");var zf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zf||(zf={}));function dr(t,e){return he(new Error,{type:t,[xv]:!0},e)}function ln(t,e){return t instanceof Error&&xv in t&&(e==null||!!(t.type&e))}const Gf="[^/]+?",CR={sensitive:!1,strict:!1,start:!0,end:!0},SR=/[.+*?^${}()[\]/\\]/g;function AR(t,e){const n=he({},CR,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(SR,"\\$&"),p+=40;else if(d.type===1){const{value:v,repeatable:_,optional:b,regexp:S}=d;i.push({name:v,repeatable:_,optional:b});const D=S||Gf;if(D!==Gf){p+=10;try{new RegExp(`(${D})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${v}" (${D}): `+B.message)}}let R=_?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(R=b&&l.length<2?`(?:/${R})`:"/"+R),b&&(R+="?"),r+=R,p+=20,b&&(p+=-8),_&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",v=i[d-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:_,optional:b}=p,S=v in l?l[v]:"";if(Kt(S)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const D=Kt(S)?S.join("/"):S;if(!D)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function RR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kR(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=RR(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Wf(s))return 1;if(Wf(r))return-1}return r.length-s.length}function Wf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NR={type:0,value:""},OR=/[a-zA-Z0-9_]/;function DR(t){if(!t)return[[]];if(t==="/")return[[NR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:OR.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function PR(t,e,n){const s=AR(DR(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function xR(t,e){const n=[],s=new Map;e=Yf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,v=LR(u);v.aliasOf=d&&d.record;const _=Yf(e,u),b=[v];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of R)b.push(he({},v,{components:d?d.record.components:v.components,path:B,aliasOf:d?d.record:v}))}let S,D;for(const R of b){const{path:B}=R;if(h&&B[0]!=="/"){const te=h.record.path,ge=te[te.length-1]==="/"?"":"/";R.path=h.record.path+(B&&ge+B)}if(S=PR(R,h,_),d?d.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),p&&u.name&&!Xf(S)&&o(u.name)),v.children){const te=v.children;for(let ge=0;ge<te.length;ge++)i(te[ge],S,d&&d.children[ge])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return D?()=>{o(D)}:Zr}function o(u){if(Pv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&kR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Lv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Xf(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},v,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw dr(1,{location:u});_=d.record.name,p=he(Qf(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Qf(u.params,d.keys.map(D=>D.name))),v=d.stringify(p)}else if("path"in u)v=u.path,d=n.find(D=>D.re.test(v)),d&&(p=d.parse(v),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw dr(1,{location:u,currentLocation:h});_=d.record.name,p=he({},h.params,u.params),v=d.stringify(p)}const b=[];let S=d;for(;S;)b.unshift(S.record),S=S.parent;return{name:_,path:v,params:p,matched:b,meta:UR(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Qf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function LR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:MR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function MR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function UR(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Yf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Lv(t,e){return e.children.some(n=>n===t||Lv(t,n))}const Mv=/#/g,FR=/&/g,$R=/\//g,VR=/=/g,BR=/\?/g,Uv=/\+/g,jR=/%5B/g,HR=/%5D/g,Fv=/%5E/g,qR=/%60/g,$v=/%7B/g,KR=/%7C/g,Vv=/%7D/g,zR=/%20/g;function kh(t){return encodeURI(""+t).replace(KR,"|").replace(jR,"[").replace(HR,"]")}function GR(t){return kh(t).replace($v,"{").replace(Vv,"}").replace(Fv,"^")}function ql(t){return kh(t).replace(Uv,"%2B").replace(zR,"+").replace(Mv,"%23").replace(FR,"%26").replace(qR,"`").replace($v,"{").replace(Vv,"}").replace(Fv,"^")}function WR(t){return ql(t).replace(VR,"%3D")}function QR(t){return kh(t).replace(Mv,"%23").replace(BR,"%3F")}function XR(t){return t==null?"":QR(t).replace($R,"%2F")}function ha(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function YR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Uv," "),o=i.indexOf("="),a=ha(o<0?i:i.slice(0,o)),c=o<0?null:ha(i.slice(o+1));if(a in e){let l=e[a];Kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Jf(t){let e="";for(let n in t){const s=t[n];if(n=WR(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(s)?s.map(i=>i&&ql(i)):[s&&ql(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function JR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const ZR=Symbol(""),Zf=Symbol(""),lc=Symbol(""),Bv=Symbol(""),Kl=Symbol("");function Mr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(dr(4,{from:n,to:e})):h instanceof Error?a(h):bR(h)?a(dr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Kc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ek(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Rn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=oR(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Rn(d,n,s,i,o)()}))}}return r}function ek(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ep(t){const e=Bt(lc),n=Bt(Bv),s=Et(()=>e.resolve(qs(t.to))),r=Et(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(hr.bind(null,u));if(d>-1)return d;const p=tp(c[l-2]);return l>1&&tp(u)===p&&h[h.length-1].path!==p?h.findIndex(hr.bind(null,c[l-2])):d}),i=Et(()=>r.value>-1&&rk(n.params,s.value.params)),o=Et(()=>r.value>-1&&r.value===n.matched.length-1&&Ov(n.params,s.value.params));function a(c={}){return sk(c)?e[qs(t.replace)?"replace":"push"](qs(t.to)).catch(Zr):Promise.resolve()}return{route:s,href:Et(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const tk=Hp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ep,setup(t,{slots:e}){const n=mr(ep(t)),{options:s}=Bt(lc),r=Et(()=>({[np(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[np(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),nk=tk;function sk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function tp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const np=(t,e,n)=>t??e??n,ik=Hp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Bt(Kl),r=Et(()=>t.route||s.value),i=Bt(Zf,0),o=Et(()=>{let l=qs(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Et(()=>r.value.matched[o.value]);vo(Zf,Et(()=>o.value+1)),vo(ZR,a),vo(Kl,r);const c=ew();return zs(()=>[c.value,a.value,t.name],([l,u,h],[d,p,v])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!hr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return sp(n.default,{Component:d,route:l});const p=h.props[u],v=p?p===!0?l.params:typeof p=="function"?p(l):p:null,b=cg(d,he({},v,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return sp(n.default,{Component:b,route:l})||b}}});function sp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ok=ik;function ak(t){const e=xR(t.routes,t),n=t.parseQuery||YR,s=t.stringifyQuery||Jf,r=t.history,i=Mr(),o=Mr(),a=Mr(),c=tw(Sn);let l=Sn;$s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hc.bind(null,I=>""+I),h=Hc.bind(null,XR),d=Hc.bind(null,ha);function p(I,U){let P,j;return Pv(I)?(P=e.getRecordMatcher(I),j=U):j=I,e.addRoute(j,P)}function v(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function _(){return e.getRoutes().map(I=>I.record)}function b(I){return!!e.getRecordMatcher(I)}function S(I,U){if(U=he({},U||c.value),typeof I=="string"){const f=qc(n,I,U.path),g=e.resolve({path:f.path},U),y=r.createHref(f.fullPath);return he(f,g,{params:d(g.params),hash:ha(f.hash),redirectedFrom:void 0,href:y})}let P;if("path"in I)P=he({},I,{path:qc(n,I.path,U.path).path});else{const f=he({},I.params);for(const g in f)f[g]==null&&delete f[g];P=he({},I,{params:h(I.params)}),U.params=h(U.params)}const j=e.resolve(P,U),oe=I.hash||"";j.params=u(d(j.params));const Ce=lR(s,he({},I,{hash:GR(oe),path:j.path})),ne=r.createHref(Ce);return he({fullPath:Ce,hash:oe,query:s===Jf?JR(I.query):I.query||{}},j,{redirectedFrom:void 0,href:ne})}function D(I){return typeof I=="string"?qc(n,I,c.value.path):he({},I)}function R(I,U){if(l!==I)return dr(8,{from:U,to:I})}function B(I){return Ne(I)}function te(I){return B(he(D(I),{replace:!0}))}function ge(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:P}=U;let j=typeof P=="function"?P(I):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=D(j):{path:j},j.params={}),he({query:I.query,hash:I.hash,params:"path"in j?{}:I.params},j)}}function Ne(I,U){const P=l=S(I),j=c.value,oe=I.state,Ce=I.force,ne=I.replace===!0,f=ge(P);if(f)return Ne(he(D(f),{state:typeof f=="object"?he({},oe,f.state):oe,force:Ce,replace:ne}),U||P);const g=P;g.redirectedFrom=U;let y;return!Ce&&uR(s,j,P)&&(y=dr(16,{to:g,from:j}),Jn(j,j,!0,!1)),(y?Promise.resolve(y):we(g,j)).catch(w=>ln(w)?ln(w,2)?w:Dt(w):ye(w,g,j)).then(w=>{if(w){if(ln(w,2))return Ne(he({replace:ne},D(w.to),{state:typeof w.to=="object"?he({},oe,w.to.state):oe,force:Ce}),U||g)}else w=Qe(g,j,!0,ne,oe);return me(g,j,w),w})}function G(I,U){const P=R(I,U);return P?Promise.reject(P):Promise.resolve()}function we(I,U){let P;const[j,oe,Ce]=ck(I,U);P=Kc(j.reverse(),"beforeRouteLeave",I,U);for(const f of j)f.leaveGuards.forEach(g=>{P.push(Rn(g,I,U))});const ne=G.bind(null,I,U);return P.push(ne),Ms(P).then(()=>{P=[];for(const f of i.list())P.push(Rn(f,I,U));return P.push(ne),Ms(P)}).then(()=>{P=Kc(oe,"beforeRouteUpdate",I,U);for(const f of oe)f.updateGuards.forEach(g=>{P.push(Rn(g,I,U))});return P.push(ne),Ms(P)}).then(()=>{P=[];for(const f of I.matched)if(f.beforeEnter&&!U.matched.includes(f))if(Kt(f.beforeEnter))for(const g of f.beforeEnter)P.push(Rn(g,I,U));else P.push(Rn(f.beforeEnter,I,U));return P.push(ne),Ms(P)}).then(()=>(I.matched.forEach(f=>f.enterCallbacks={}),P=Kc(Ce,"beforeRouteEnter",I,U),P.push(ne),Ms(P))).then(()=>{P=[];for(const f of o.list())P.push(Rn(f,I,U));return P.push(ne),Ms(P)}).catch(f=>ln(f,8)?f:Promise.reject(f))}function me(I,U,P){for(const j of a.list())j(I,U,P)}function Qe(I,U,P,j,oe){const Ce=R(I,U);if(Ce)return Ce;const ne=U===Sn,f=$s?history.state:{};P&&(j||ne?r.replace(I.fullPath,he({scroll:ne&&f&&f.scroll},oe)):r.push(I.fullPath,oe)),c.value=I,Jn(I,U,P,ne),Dt()}let Xe;function Ot(){Xe||(Xe=r.listen((I,U,P)=>{if(!Qi.listening)return;const j=S(I),oe=ge(j);if(oe){Ne(he(oe,{replace:!0}),j).catch(Zr);return}l=j;const Ce=c.value;$s&&vR(qf(Ce.fullPath,P.delta),cc()),we(j,Ce).catch(ne=>ln(ne,12)?ne:ln(ne,2)?(Ne(ne.to,j).then(f=>{ln(f,20)&&!P.delta&&P.type===Si.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(P.delta&&r.go(-P.delta,!1),ye(ne,j,Ce))).then(ne=>{ne=ne||Qe(j,Ce,!1),ne&&(P.delta&&!ln(ne,8)?r.go(-P.delta,!1):P.type===Si.pop&&ln(ne,20)&&r.go(-1,!1)),me(j,Ce,ne)}).catch(Zr)}))}let cn=Mr(),Dr=Mr(),De;function ye(I,U,P){Dt(I);const j=Dr.list();return j.length?j.forEach(oe=>oe(I,U,P)):console.error(I),Promise.reject(I)}function fe(){return De&&c.value!==Sn?Promise.resolve():new Promise((I,U)=>{cn.add([I,U])})}function Dt(I){return De||(De=!I,Ot(),cn.list().forEach(([U,P])=>I?P(I):U()),cn.reset()),I}function Jn(I,U,P,j){const{scrollBehavior:oe}=t;if(!$s||!oe)return Promise.resolve();const Ce=!P&&_R(qf(I.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return xp().then(()=>oe(I,U,Ce)).then(ne=>ne&&yR(ne)).catch(ne=>ye(ne,I,U))}const Pt=I=>r.go(I);let pt;const Os=new Set,Qi={currentRoute:c,listening:!0,addRoute:p,removeRoute:v,hasRoute:b,getRoutes:_,resolve:S,options:t,push:B,replace:te,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Dr.add,isReady:fe,install(I){const U=this;I.component("RouterLink",nk),I.component("RouterView",ok),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>qs(c)}),$s&&!pt&&c.value===Sn&&(pt=!0,B(r.location).catch(oe=>{}));const P={};for(const oe in Sn)P[oe]=Et(()=>c.value[oe]);I.provide(lc,U),I.provide(Bv,mr(P)),I.provide(Kl,c);const j=I.unmount;Os.add(I),I.unmount=function(){Os.delete(I),Os.size<1&&(l=Sn,Xe&&Xe(),Xe=null,c.value=Sn,pt=!1,De=!1),j()}}};return Qi}function Ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ck(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>hr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hr(l,c))||r.push(c))}return[n,s,r]}function Nr(){return Bt(lc)}const Yn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},lk={data(){return{email:"",pass:"",store:yn(),router:Nr()}},methods:{async login(){try{await this.store.dispatch("login",{email:this.email,password:this.pass}),this.router.push("/")}catch(t){window.alert(t)}},async loginGoogle(){try{await this.store.dispatch("loginGoogle",{}),this.router.push("/")}catch(t){window.alert(t)}}}},uc=t=>(yr("data-v-66181c6d"),t=t(),vr(),t),uk={class:"box"},hk={class:"container"},dk=uc(()=>m("div",{class:"top-header"},[m("span",null,"Have an account?"),m("header",null,"Login")],-1)),fk={class:"input-field"},pk=uc(()=>m("i",{class:"bx bx-user"},null,-1)),gk={class:"input-field"},mk=uc(()=>m("i",{class:"bx bx-lock-alt"},null,-1)),yk={class:"input-button"},vk=uc(()=>m("div",{class:"bottom"},[m("div",{class:"right"},[m("a",{class:"que",href:"/register"},"Don't have an account?")])],-1)),_k={class:"input-button"};function wk(t,e,n,s,r,i){return Ve(),tt("div",uk,[m("div",hk,[dk,m("div",fk,[mt(m("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Username",required:""},null,512),[[wt,r.email]]),pk]),m("div",gk,[mt(m("input",{type:"password",class:"input","onUpdate:modelValue":e[1]||(e[1]=o=>r.pass=o),placeholder:"Password",required:""},null,512),[[wt,r.pass]]),mk]),m("div",yk,[m("input",{type:"submit",class:"submit",onClick:e[2]||(e[2]=o=>{this.login()}),value:"Login"})]),vk,m("div",_k,[m("button",{onClick:e[3]||(e[3]=o=>{this.loginGoogle()})},"Login with Google")])])])}const Ek=Yn(lk,[["render",wk],["__scopeId","data-v-66181c6d"]]),Ik="/assets/BiletX-4e74b105.svg",Tk="/assets/vector-9f045491.svg";const bk={data(){return{store:yn(),userEmail:""}},methods:{getHeaderStr(){return this.store.getters.user.loggedIn?(this.userEmail=this.store.getters.user.data.email,this.store.getters.user.data.email):"Login"},getHeaderLink(){return this.store.getters.user.loggedIn?"/profile":"/login"}}},jv=t=>(yr("data-v-d37c7c58"),t=t(),vr(),t),Ck={class:"container-fluid pt-5"},Sk={class:"row header"},Ak=jv(()=>m("div",{class:"col-lg-6 text-start"},[m("a",{href:"/"},[m("img",{class:"logo",src:Ik,alt:"logo"})])],-1)),Rk={class:"col-lg-6 header-items"},kk=["href"],Nk=jv(()=>m("img",{class:"account-logo",src:Tk,alt:"acc-logo"},null,-1));function Ok(t,e,n,s,r,i){return Ve(),tt("div",Ck,[m("div",Sk,[Ak,m("div",Rk,[m("a",{class:"header-links",id:"account-link",href:this.getHeaderLink()},Ke(i.getHeaderStr()),9,kk),Nk])])])}const Hv=Yn(bk,[["render",Ok],["__scopeId","data-v-d37c7c58"]]);const Dk={data(){return{store:yn(),router:Nr(),event_:{date:""}}},async mounted(){await this.getEvent();var t=L.map("mapContainer").setView([this.event_.place._lat,this.event_.place._long],13);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t),L.marker([this.event_.place._lat,this.event_.place._long]).addTo(t)},methods:{async getEvent(){let t=await Ci(bi(Vn(Bn,"events"),jl("id","==",parseInt(this.$route.params.event_id,10))));this.event_=t.docs[0].data()},async submitReservation(){const t=_h(Vn(Bn,"tickets"),"tickets-"+this.store.getters.user.data.email+"-"+this.event_.id);await Rv(t,{user_email:this.store.getters.user.data.email,event_id:this.event_.id}),navigator.vibrate(300),this.router.push("/")},share(){navigator.share({url:"/event/"+this.event_.id,title:"Event",text:"I want to share this event with you"})}},components:{Header:Hv}},Pk=m("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet"},null,-1),xk={class:"row main"},Lk={class:"col-lg-6 left"},Mk={class:"left-div"},Uk=["src"],Fk={class:"col-lg-6 right"},$k={class:"right-div"},Vk={class:"event-name"},Bk={class:"description"},jk={class:"event-data"},Hk={class:"event-data"},qk=m("div",{class:"map",id:"mapContainer"},null,-1),Kk=m("div",{class:"container-fluid mt-5 footer"},[m("div",{class:"row"},[m("p",{class:"authors"}," Ryhor Hapkala 218524 "),m("p",{class:"authors"}," Yahor Lashko  219145 ")])],-1);function zk(t,e,n,s,r,i){const o=cu("Header");return Ve(),tt(ze,null,[Pk,dt(o),m("div",xk,[m("div",Lk,[m("div",Mk,[m("img",{class:"event-img",src:r.event_.preview_image},null,8,Uk)])]),m("div",Fk,[m("div",$k,[m("h2",Vk,Ke(r.event_.name)+" - "+Ke(r.event_.price)+" zł",1),m("p",Bk,Ke(r.event_.description),1),m("h3",jk,"When? "+Ke(new Date(this.event_.date.seconds*1e3).toLocaleString()),1),m("h3",Hk,"Where? "+Ke(r.event_.address),1)])]),qk]),this.store.getters.user.loggedIn?(Ve(),tt("button",{key:0,class:"add-reservaion-button",onClick:e[0]||(e[0]=(...a)=>i.submitReservation&&i.submitReservation(...a))},"Submit a reservaion")):nE("",!0),m("button",{class:"add-reservaion-button",onClick:e[1]||(e[1]=(...a)=>i.share&&i.share(...a))},"Share"),Kk],64)}const Gk=Yn(Dk,[["render",zk]]);const Wk={components:{Header:Hv},data(){return{store:yn(),router:Nr(),events:{popular:[],top:[]}}},methods:{async getEvents(){this.events={popular:[],top:[]},(await Ci(bi(Vn(Bn,"events")))).forEach(e=>{let n=e.data();switch(n.category){case"Popular":this.events.popular.push(n);break;case"Top":this.events.top.push(n);break}}),console.log(this.events)}},async mounted(){await this.getEvents()}},Nh=t=>(yr("data-v-d1f992e6"),t=t(),vr(),t),Qk=Nh(()=>m("div",{class:"container mt-5 title-container"},[m("p",{class:"title"},"POPULAR EVENTS")],-1)),Xk={class:"container-fluid media-scroller snaps-inline"},Yk={class:"media-element"},Jk=["href"],Zk=["src"],eN={class:"scroller-title"},tN=Nh(()=>m("div",{class:"container mb-3 title-container"},[m("p",{class:"title"},"TOP EVENTS")],-1)),nN={class:"container-fluid"},sN={class:"row"},rN={class:"col-sm mb-3"},iN={class:"card"},oN=["href"],aN=["src"],cN={class:"card-title"},lN=Nh(()=>m("div",{class:"container-fluid mt-5 footer"},[m("div",{class:"row"},[m("p",{class:"authors"}," Ryhor Hapkala 218524 "),m("p",{class:"authors"}," Yahor Lashko  219145 ")])],-1));function uN(t,e,n,s,r,i){const o=cu("Header");return Ve(),tt(ze,null,[dt(o),Qk,m("div",Xk,[(Ve(!0),tt(ze,null,Po(r.events.popular,a=>(Ve(),tt("div",Yk,[m("a",{href:"event/"+a.id},[m("img",{class:"scroller-element",src:a.preview_image},null,8,Zk)],8,Jk),m("p",eN,Ke(a.name)+" - "+Ke(a.price)+" zł",1)]))),256))]),tN,m("div",nN,[m("div",sN,[(Ve(!0),tt(ze,null,Po(r.events.top,a=>(Ve(),tt("div",rN,[m("div",iN,[m("a",{href:"event/"+a.id},[m("img",{class:"card-img",src:a.preview_image,alt:"event-preview"},null,8,aN)],8,oN),m("p",cN,Ke(a.name)+" - "+Ke(a.price)+" zł",1)])]))),256))])]),lN],64)}const hN=Yn(Wk,[["render",uN],["__scopeId","data-v-d1f992e6"]]);const dN={data(){return{email:"",pass:"",store:yn(),router:Nr()}},methods:{async register(){try{await this.store.dispatch("register",{email:this.email,password:this.pass}),this.router.push("/")}catch(t){window.alert(t)}}}},hc=t=>(yr("data-v-74c2d5bd"),t=t(),vr(),t),fN={class:"box"},pN={class:"container"},gN=hc(()=>m("div",{class:"top-header"},[m("span",null,"Don't have an account?"),m("header",null,"Register")],-1)),mN={class:"input-field"},yN=hc(()=>m("i",{class:"bx bx-user"},null,-1)),vN={class:"input-field"},_N=hc(()=>m("i",{class:"bx bx-lock-alt"},null,-1)),wN={class:"input-button"},EN=hc(()=>m("div",{class:"bottom"},[m("div",{class:"right"},[m("a",{class:"que",href:"/login"},"Already got an account?")])],-1));function IN(t,e,n,s,r,i){return Ve(),tt("div",fN,[m("div",pN,[gN,m("div",mN,[mt(m("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Username",required:""},null,512),[[wt,r.email]]),yN]),m("div",vN,[mt(m("input",{type:"password",class:"input","onUpdate:modelValue":e[1]||(e[1]=o=>r.pass=o),placeholder:"Password",required:""},null,512),[[wt,r.pass]]),_N]),m("div",wN,[m("input",{type:"submit",class:"submit",onClick:e[2]||(e[2]=o=>{this.register()}),value:"Register"})]),EN])])}const TN=Yn(dN,[["render",IN],["__scopeId","data-v-74c2d5bd"]]);const bN={data(){return{store:yn(),router:Nr(),events:[],user:null,futureEvents:[],pastEvents:[]}},watch:{user:async function(){await this.getReservations()}},methods:{async signout(){await this.store.dispatch("logout",{}),this.router.push("/")},async getReservations(){if(!this.store.getters.user.loggedIn)return;this.futureEvents=[],this.pastEvents=[],this.events=[];let t=await Ci(bi(Vn(Bn,"tickets"),jl("user_email","==",this.store.getters.user.data.email))),e=[];t.forEach(n=>{e.push(parseInt(n.data().event_id))}),await this.getEventsForReservations(e)},async getEventsForReservations(t){(await Ci(bi(Vn(Bn,"events"),jl("id","in",t)))).forEach(s=>{this.events.push(s.data())});for(let s=0;s<this.events.length;s++){let r=this.events[s].date.seconds;var n=new Date().getTime()/1e3;r>n?this.futureEvents.push(this.events[s]):this.pastEvents.push(this.events[s])}},getUser(){return this.store.getters.user.loggedIn?(this.user=this.store.getters.user.data,this.store.getters.user.data):null},async cancel(t){const e=_h(Vn(Bn,"tickets"),"tickets-"+this.store.getters.user.data.email+"-"+t);await rR(e),await this.getReservations()}}},dc=t=>(yr("data-v-539bbad3"),t=t(),vr(),t),CN={class:"page-title"},SN={class:"d-flex buttons-container"},AN=dc(()=>m("div",{class:"title-container"},[m("p",{class:"page-title"},"Active tickets")],-1)),RN={class:"container-fluid mt-5"},kN={class:"ticket active"},NN={class:"row"},ON={class:"col-sm event-info"},DN=["href"],PN=["src"],xN={class:"col event-info"},LN={class:"event-name"},MN={class:"col event-info"},UN={class:"event-price"},FN={class:"col event-info"},$N={class:"event-date"},VN=dc(()=>m("i",{class:"bx bx-active bx-time bx-md"},null,-1)),BN={class:"col event-info"},jN=["onClick"],HN=dc(()=>m("div",{class:"title-container"},[m("p",{class:"page-title"},"History")],-1)),qN={class:"container-fluid mt-5"},KN={class:"ticket unactive"},zN={class:"row"},GN={class:"col-sm event-info"},WN=["href"],QN=["src"],XN={class:"col event-info"},YN={class:"event-name"},JN={class:"col event-info"},ZN={class:"event-price"},eO={class:"col event-info"},tO={class:"event-date"},nO=dc(()=>m("i",{class:"bx bx-unactive bx-time bx-md"},null,-1));function sO(t,e,n,s,r,i){return Ve(),tt(ze,null,[m("h2",CN,"Hello, "+Ke(i.getUser().email),1),m("div",SN,[m("button",{onClick:e[0]||(e[0]=(...o)=>i.signout&&i.signout(...o))},"Sign out"),m("button",{onClick:e[1]||(e[1]=o=>r.router.push("/newevent"))},"New event")]),AN,(Ve(!0),tt(ze,null,Po(r.futureEvents,o=>(Ve(),tt("div",RN,[m("div",kN,[m("div",NN,[m("div",ON,[m("a",{href:"/event/"+o.id},[m("img",{class:"preview",src:o.preview_image},null,8,PN)],8,DN)]),m("div",xN,[m("p",LN,Ke(o.name),1)]),m("div",MN,[m("p",UN,Ke(o.price)+" zł",1)]),m("div",FN,[m("p",$N,Ke(new Date(o.date.seconds*1e3).toLocaleString()),1),VN]),m("div",BN,[m("button",{class:"btn-lg",onClick:a=>i.cancel(o.id)},"Cancel",8,jN)])])])]))),256)),HN,(Ve(!0),tt(ze,null,Po(r.pastEvents,o=>(Ve(),tt("div",qN,[m("div",KN,[m("div",zN,[m("div",GN,[m("a",{href:"/event/"+o.id},[m("img",{class:"preview",src:o.preview_image},null,8,QN)],8,WN)]),m("div",XN,[m("p",YN,Ke(o.name),1)]),m("div",JN,[m("p",ZN,Ke(o.price)+" zł",1)]),m("div",eO,[m("p",tO,Ke(new Date(o.date.seconds*1e3).toLocaleString()),1),nO])])])]))),256))],64)}const rO=Yn(bN,[["render",sO],["__scopeId","data-v-539bbad3"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="firebasestorage.googleapis.com",Kv="storageBucket",iO=2*60*1e3,oO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends an{constructor(e,n,s=0){super(zc(e),`Firebase Storage: ${n} (${zc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function zc(t){return"storage/"+t}function Oh(){const t="An unknown error occurred, please check the error payload for server response.";return new ke(Re.UNKNOWN,t)}function aO(t){return new ke(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function cO(t){return new ke(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Re.UNAUTHENTICATED,t)}function uO(){return new ke(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hO(t){return new ke(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dO(){return new ke(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fO(){return new ke(Re.CANCELED,"User canceled the upload/download.")}function pO(t){return new ke(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function gO(t){return new ke(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mO(){return new ke(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Kv+"' property when initializing the app?")}function yO(){return new ke(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vO(){return new ke(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _O(t){return new ke(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zl(t){return new ke(Re.INVALID_ARGUMENT,t)}function zv(){return new ke(Re.APP_DELETED,"The Firebase app was deleted.")}function wO(t){return new ke(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ti(t,e){return new ke(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ur(t){throw new ke(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(s.path==="")return s;throw gO(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),v={bucket:1,path:3},_=n===qv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",S=new RegExp(`^https?://${_}/${r}/${b}`,"i"),R=[{regex:a,indices:c,postModify:i},{regex:p,indices:v,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<R.length;B++){const te=R[B],ge=te.regex.exec(e);if(ge){const Ne=ge[te.indices.bucket];let G=ge[te.indices.path];G||(G=""),s=new Tt(Ne,G),te.postModify(s);break}}if(s==null)throw pO(e);return s}}class EO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(p,c())},b)}function d(){i&&clearTimeout(i)}function p(b,...S){if(l){d();return}if(b){d(),u.call(null,b,...S);return}if(c()||o){d(),u.call(null,b,...S);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let v=!1;function _(b){v||(v=!0,d(),!l&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function TO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){return t!==void 0}function CO(t){return typeof t=="object"&&!Array.isArray(t)}function Dh(t){return typeof t=="string"||t instanceof String}function rp(t){return Ph()&&t instanceof Blob}function Ph(){return typeof Blob<"u"&&!b0()}function ip(t,e,n,s){if(s<e)throw zl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw zl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Gv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ms;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ms||(ms={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new po(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ms.NO_ERROR,c=i.getStatus();if(!a||SO(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ms.ABORT;s(!1,new po(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new po(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());bO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Oh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?zv():fO();o(c)}else{const c=dO();o(c)}};this.canceled_?n(!1,new po(!1,null,!0)):this.backoffId_=IO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class po{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function RO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function kO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DO(t,e,n,s,r,i,o=!0){const a=Gv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return NO(l,e),RO(l,n),kO(l,i),OO(l,s),new AO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xO(...t){const e=PO();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ph())return new Blob(t);throw new ke(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){if(typeof atob>"u")throw _O("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gc{constructor(e,n){this.data=e,this.contentType=n||null}}function Wv(t,e){switch(t){case $t.RAW:return new Gc(Qv(e));case $t.BASE64:case $t.BASE64URL:return new Gc(Xv(t,e));case $t.DATA_URL:return new Gc(FO(e),$O(e))}throw Oh()}function Qv(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function UO(t){let e;try{e=decodeURIComponent(t)}catch{throw ti($t.DATA_URL,"Malformed data URL.")}return Qv(e)}function Xv(t,e){switch(t){case $t.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw ti(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case $t.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw ti(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=MO(e)}catch(r){throw r.message.includes("polyfill")?r:ti(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Yv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ti($t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=VO(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function FO(t){const e=new Yv(t);return e.base64?Xv($t.BASE64,e.rest):UO(e.rest)}function $O(t){return new Yv(t).contentType}function VO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){let s=0,r="";rp(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(rp(this.data_)){const s=this.data_,r=LO(s,e,n);return r===null?null:new Dn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Dn(s,!0)}}static getBlob(...e){if(Ph()){const n=e.map(s=>s instanceof Dn?s.data_:s);return new Dn(xO.apply(null,n))}else{const n=e.map(o=>Dh(o)?Wv($t.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Dn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){let e;try{e=JSON.parse(t)}catch{return null}return CO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jO(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Zv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e){return e}class ut{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||HO}}let go=null;function qO(t){return!Dh(t)||t.length<2?t:Zv(t)}function e_(){if(go)return go;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return qO(o)}const n=new ut("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ut("size");return r.xform=s,t.push(r),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),go=t,go}function KO(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Tt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zO(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return KO(s,t),s}function t_(t,e,n){const s=Jv(e);return s===null?null:zO(t,s,n)}function GO(t,e,n,s){const r=Jv(e);if(r===null||!Dh(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=xh(d,n,s),v=Gv({alt:"media",token:l});return p+v})[0]}function WO(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class n_{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){if(!t)throw Oh()}function QO(t,e){function n(s,r){const i=t_(t,r,e);return s_(i!==null),i}return n}function XO(t,e){function n(s,r){const i=t_(t,r,e);return s_(i!==null),GO(i,r,t.host,t._protocol)}return n}function r_(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=uO():r=lO():n.getStatus()===402?r=cO(t.bucket):n.getStatus()===403?r=hO(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function YO(t){const e=r_(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=aO(t.path)),i.serverResponse=r.serverResponse,i}return n}function JO(t,e,n){const s=e.fullServerUrl(),r=xh(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new n_(r,i,XO(t,n),o);return a.errorHandler=YO(e),a}function ZO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function eD(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=ZO(null,e)),s}function tD(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let B=0;B<2;B++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=eD(e,s,r),u=WO(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Dn.getBlob(h,s,d);if(p===null)throw yO();const v={name:l.fullPath},_=xh(i,t.host,t._protocol),b="POST",S=t.maxUploadRetryTime,D=new n_(_,b,QO(t,n),S);return D.urlParams=v,D.headers=o,D.body=p.uploadData(),D.errorHandler=r_(e),D}class nD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ms.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ms.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ms.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ur("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ur("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ur("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ur("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ur("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sD extends nD{initXhr(){this.xhr_.responseType="text"}}function i_(){return new sD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bs(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zv(this._location.path)}get storage(){return this._service}get parent(){const e=BO(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new bs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wO(e)}}function rD(t,e,n){t._throwIfRoot("uploadBytes");const s=tD(t.storage,t._location,e_(),new Dn(e,!0),n);return t.storage.makeRequestWithTokens(s,i_).then(r=>({metadata:r,ref:t}))}function iD(t,e,n=$t.RAW,s){t._throwIfRoot("uploadString");const r=Wv(n,e),i=Object.assign({},s);return i.contentType==null&&r.contentType!=null&&(i.contentType=r.contentType),rD(t,r.data,i)}function oD(t){t._throwIfRoot("getDownloadURL");const e=JO(t.storage,t._location,e_());return t.storage.makeRequestWithTokens(e,i_).then(n=>{if(n===null)throw vO();return n})}function aD(t,e){const n=jO(t._location.path,e),s=new Tt(t._location.bucket,n);return new bs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){return/^[A-Za-z]+:\/\//.test(t)}function lD(t,e){return new bs(t,e)}function o_(t,e){if(t instanceof Lh){const n=t;if(n._bucket==null)throw mO();const s=new bs(n,n._bucket);return e!=null?o_(s,e):s}else return e!==void 0?aD(t,e):t}function uD(t,e){if(e&&cD(e)){if(t instanceof Lh)return lD(t,e);throw zl("To use ref(service, url), the first argument must be a Storage instance.")}else return o_(t,e)}function op(t,e){const n=e==null?void 0:e[Kv];return n==null?null:Tt.makeFromBucketSpec(n,t)}function hD(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Sg(r,t.app.options.projectId))}class Lh{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=qv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iO,this._maxUploadRetryTime=oO,this._requests=new Set,r!=null?this._bucket=Tt.makeFromBucketSpec(r,this._host):this._bucket=op(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=op(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ip("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ip("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new EO(zv());{const o=DO(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ap="@firebase/storage",cp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="storage";function dD(t,e,n,s){return t=Be(t),iD(t,e,n,s)}function fD(t){return t=Be(t),oD(t)}function pD(t,e){return t=Be(t),uD(t,e)}function gD(t=yu(),e){t=Be(t);const s=Ra(t,a_).getImmediate({identifier:e}),r=bg("storage");return r&&mD(s,...r),s}function mD(t,e,n,s={}){hD(t,e,n,s)}function yD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Lh(n,s,r,e,Ss)}function vD(){vs(new qn(a_,yD,"PUBLIC").setMultipleInstances(!0)),Zt(ap,cp,""),Zt(ap,cp,"esm2017")}vD();const _D={data(){return{store:yn(),router:Nr(),name:"",category:"Top",imageLink:"",description:"",date:"",lat:"",lng:"",price:"",address:"",maxUsers:"",map:null,recording:!1,height:1280,width:720,storage:gD(),uploadFromCamera:!1}},watch:{lat(){this.map==null&&(document.getElementById("mapContainer").removeAttribute("hidden"),this.map=L.map("mapContainer").setView([this.lat,this.lng],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(this.map),this.markersGroup=L.layerGroup(),this.map.addLayer(this.markersGroup),this.map.on("click",t=>{this.addMarker(t,this.markersGroup,this.map)}))}},methods:{async getCoordinates(){navigator.geolocation.getCurrentPosition(t=>{this.lat=t.coords.latitude,this.lng=t.coords.longitude})},addMarker(t,e){e.clearLayers(),this.newMarker=new L.marker(t.latlng).addTo(e),this.lat=t.latlng.lat,this.lng=t.latlng.lng},async compressImage(){var t=document.getElementById("photo-canvas"),e=t.toDataURL("image/jpeg",.75);document.getElementById("photo-img").src=e,this.uploadFromCamera=!0},removeImage(){document.getElementById("photo-img").setAttribute("src",""),this.uploadFromCamera=!1},async createFirestoreEvent(t){await Rv(_h(Vn(Bn,"events"),"event-"+t),{name:this.name,place:{_lat:this.lat,_long:this.lng},id:t,users:0,category:this.category,date:new Date(this.date),price:parseInt(this.price),description:this.description,address:this.address,max_users:parseInt(this.maxUsers),preview_image:this.imageLink,description:this.description})},async createEvent(){const t=document.getElementById("photo-img").src,e=await Ci(bi(Vn(Bn,"events"),X1("id","desc"),Y1(1)));let n=0;if(e.forEach(s=>{n=parseInt(s.data().id)+1}),this.uploadFromCamera){const s=pD(this.storage,n+".jpg");dD(s,t,"data_url").then(r=>{fD(r.ref).then(i=>{console.log("File available at",i),this.imageLink=i}).then(async()=>{await this.createFirestoreEvent(n),this.router.push("/")})})}else await this.createFirestoreEvent(n),this.router.push("/")},recordVideo(){navigator.mediaDevices.getUserMedia({video:{facingMode:{exact:"environment"}},audio:!1}).then(t=>{video.srcObject=t,video.play()}).catch(t=>{console.error(`An error occurred: ${t}`)})}},mounted(){this.image;let t=document.getElementById("video"),e=document.getElementById("photo-canvas");t.addEventListener("canplay",n=>{if(!this.recording)this.height=t.videoHeight/t.videoWidth*this.width,t.setAttribute("width",this.width),t.setAttribute("height",this.height),e.setAttribute("width",this.width),e.setAttribute("height",this.height),document.getElementById("photo-img").setAttribute("hidden",""),document.getElementById("video").removeAttribute("hidden"),this.recording=!0;else{this.recording=!1,document.getElementById("video").setAttribute("hidden",""),document.getElementById("photo-img").removeAttribute("hidden");const s=e.getContext("2d");e.width=this.width,e.height=this.height,s.drawImage(t,0,0,this.width,this.height),this.compressImage()}})}},Or=t=>(yr("data-v-44d01439"),t=t(),vr(),t),wD={class:"main"},ED={class:"buttons"},ID=Or(()=>m("video",{id:"video",hidden:""},null,-1)),TD=Or(()=>m("canvas",{id:"photo-canvas",hidden:""},null,-1)),bD=Or(()=>m("img",{id:"photo-img",src:"",hidden:"",alt:""},null,-1)),CD=Or(()=>m("div",{id:"mapContainer",class:"mapContainer",hidden:""},null,-1)),SD=Or(()=>m("option",{selected:""},"Top",-1)),AD=Or(()=>m("option",null,"Popular",-1)),RD=[SD,AD];function kD(t,e,n,s,r,i){return Ve(),tt("div",wD,[m("div",ED,[m("button",{onClick:e[0]||(e[0]=(...o)=>i.recordVideo&&i.recordVideo(...o))},"Make a picture"),m("button",{onClick:e[1]||(e[1]=(...o)=>i.removeImage&&i.removeImage(...o))},"Remove image"),ID,TD,bD,m("button",{onClick:e[2]||(e[2]=(...o)=>i.getCoordinates&&i.getCoordinates(...o))},"Get coordinates")]),m("form",{action:"/",onSubmit:e[14]||(e[14]=FE((...o)=>i.createEvent&&i.createEvent(...o),["prevent"]))},[CD,mt(m("input",{class:"col-sm input-area",required:"","onUpdate:modelValue":e[3]||(e[3]=o=>r.name=o),placeholder:"Event name"},null,512),[[wt,r.name]]),mt(m("select",{class:"col-sm select-area",required:"","onUpdate:modelValue":e[4]||(e[4]=o=>r.category=o)},RD,512),[[LE,r.category]]),mt(m("input",{type:"datetime-local",class:"col-sm input-area",required:"","onUpdate:modelValue":e[5]||(e[5]=o=>r.date=o),placeholder:"Date"},null,512),[[wt,r.date]]),mt(m("input",{type:"text",class:"col-sm input-area",required:"","onUpdate:modelValue":e[6]||(e[6]=o=>r.imageLink=o),placeholder:"Image url"},null,512),[[wt,r.imageLink]]),mt(m("input",{type:"number",class:"col-sm input-area",required:"","onUpdate:modelValue":e[7]||(e[7]=o=>r.lat=o),placeholder:"Coordinates (lat)"},null,512),[[wt,r.lat]]),mt(m("input",{type:"number",class:"col-sm input-area",required:"","onUpdate:modelValue":e[8]||(e[8]=o=>r.lng=o),placeholder:"Coordinates (lng)"},null,512),[[wt,r.lng]]),mt(m("input",{type:"text",class:"col-sm input-area",required:"","onUpdate:modelValue":e[9]||(e[9]=o=>r.address=o),placeholder:"Address"},null,512),[[wt,r.address]]),mt(m("input",{type:"number",class:"col-sm input-area",required:"","onUpdate:modelValue":e[10]||(e[10]=o=>r.maxUsers=o),placeholder:"Max users"},null,512),[[wt,r.maxUsers]]),mt(m("input",{type:"number",class:"col-sm input-area",required:"","onUpdate:modelValue":e[11]||(e[11]=o=>r.price=o),placeholder:"Price"},null,512),[[wt,r.price]]),mt(m("textarea",{placeholder:"Description",class:"col-sm input-area",required:"","onUpdate:modelValue":e[12]||(e[12]=o=>r.description=o)},null,512),[[wt,r.description]]),m("button",{onClick:e[13]||(e[13]=(...o)=>i.createEvent&&i.createEvent(...o))},"Create event")],32)])}const ND=Yn(_D,[["render",kD],["__scopeId","data-v-44d01439"]]),OD=[{path:"/",name:"main",component:hN},{path:"/event/:event_id",name:"event page",component:Gk},{path:"/login",name:"login",component:Ek},{path:"/register",name:"register",component:TN},{path:"/profile",name:"profile",component:rO},{path:"/newevent",name:"new_event",component:ND}],c_=ak({history:TR(),routes:OD});const DD={setup(){const t=yn();Kr.onAuthStateChanged(e=>{t.dispatch("fetchUser",e)})},data(){return{router:c_,store:yn()}}};function PD(t,e,n,s,r,i){const o=cu("router-view");return Ve(),rg(o)}const xD=Yn(DD,[["render",PD],["__scopeId","data-v-644690ac"]]),LD=new hn,MD=f0({state:{user:{loggedIn:!1,data:null}},getters:{user(t){return t.user}},mutations:{SET_LOGGED_IN(t,e){t.user.loggedIn=e},SET_USER(t,e){t.user.data=e}},actions:{async register(t,{email:e,password:n}){const s=await PT(Kr,e,n);if(s)t.commit("SET_USER",s.user);else throw new Error("Unable to register user")},async loginGoogle(t,{}){const e=await rb(Kr,LD);if(e)t.commit("SET_USER",e.user);else throw new Error("Unable to register user")},async login(t,{email:e,password:n}){const s=await xT(Kr,e,n);if(s)t.commit("SET_USER",s.user);else throw new Error("login failed")},async logout(t){await UT(Kr),t.commit("SET_USER",null)},async fetchUser(t,e){t.commit("SET_LOGGED_IN",e!==null),e?t.commit("SET_USER",{displayName:e.displayName,email:e.email}):t.commit("SET_USER",null)}}}),UD=BE(xD).use(MD).use(c_);UD.mount("#app");
