(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Nl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Dl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Le(s)?wv(s):Dl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Le(t))return t;if(ve(t))return t}}const yv=/;(?![^(]*\))/g,vv=/:([^]+)/,_v=/\/\*.*?\*\//gs;function wv(t){const e={};return t.replace(_v,"").split(yv).forEach(n=>{if(n){const s=n.split(vv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ol(t){let e="";if(Le(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Ol(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Iv=Nl(Ev);function Uf(t){return!!t||t===""}function Tv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ea(t[s],e[s]);return n}function ea(t,e){if(t===e)return!0;let n=vh(t),s=vh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qr(t),s=qr(e),n||s)return t===e;if(n=K(t),s=K(e),n||s)return n&&s?Tv(t,e):!1;if(n=ve(t),s=ve(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ea(t[o],e[o]))return!1}}return String(t)===String(e)}function bv(t,e){return t.findIndex(n=>ea(n,e))}const dt=t=>Le(t)?t:t==null?"":K(t)||ve(t)&&(t.toString===Vf||!ee(t.toString))?JSON.stringify(t,Ff,2):String(t),Ff=(t,e)=>e&&e.__v_isRef?Ff(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!K(e)&&!Bf(e)?String(e):e,we={},Ns=[],xt=()=>{},Sv=()=>!1,Cv=/^on[^a-z]/,ta=t=>Cv.test(t),Pl=t=>t.startsWith("onUpdate:"),st=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Av=Object.prototype.hasOwnProperty,ae=(t,e)=>Av.call(t,e),K=Array.isArray,Ds=t=>mi(t)==="[object Map]",na=t=>mi(t)==="[object Set]",vh=t=>mi(t)==="[object Date]",ee=t=>typeof t=="function",Le=t=>typeof t=="string",qr=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",$f=t=>ve(t)&&ee(t.then)&&ee(t.catch),Vf=Object.prototype.toString,mi=t=>Vf.call(t),Rv=t=>mi(t).slice(8,-1),Bf=t=>mi(t)==="[object Object]",Ml=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kv=/-(\w)/g,Jt=sa(t=>t.replace(kv,(e,n)=>n?n.toUpperCase():"")),Nv=/\B([A-Z])/g,sr=sa(t=>t.replace(Nv,"-$1").toLowerCase()),ra=sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Za=sa(t=>t?`on${ra(t)}`:""),Kr=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _h;const Dv=()=>_h||(_h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class jf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ov(t){return new jf(t)}function Pv(t,e=Nt){e&&e.active&&e.effects.push(t)}function xv(){return Nt}const Ll=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hf=t=>(t.w&Ln)>0,qf=t=>(t.n&Ln)>0,Mv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ln},Lv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Hf(r)&&!qf(r)?r.delete(t):e[n++]=r,r.w&=~Ln,r.n&=~Ln}e.length=n}},Oc=new WeakMap;let Rr=0,Ln=1;const Pc=30;let Dt;const rs=Symbol(""),xc=Symbol("");class Ul{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pv(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,An=!0,Ln=1<<++Rr,Rr<=Pc?Mv(this):wh(this),this.fn()}finally{Rr<=Pc&&Lv(this),Ln=1<<--Rr,Dt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(wh(this),this.onStop&&this.onStop(),this.active=!1)}}function wh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const Kf=[];function rr(){Kf.push(An),An=!1}function ir(){const t=Kf.pop();An=t===void 0?!0:t}function ft(t,e,n){if(An&&Dt){let s=Oc.get(t);s||Oc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ll()),zf(r)}}function zf(t,e){let n=!1;Rr<=Pc?qf(t)||(t.n|=Ln,n=!Hf(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function cn(t,e,n,s,r,i){const o=Oc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Ml(n)&&a.push(o.get("length")):(a.push(o.get(rs)),Ds(t)&&a.push(o.get(xc)));break;case"delete":K(t)||(a.push(o.get(rs)),Ds(t)&&a.push(o.get(xc)));break;case"set":Ds(t)&&a.push(o.get(rs));break}if(a.length===1)a[0]&&Mc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Mc(Ll(c))}}function Mc(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&Eh(s);for(const s of n)s.computed||Eh(s)}function Eh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Uv=Nl("__proto__,__v_isRef,__isVue"),Gf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qr)),Fv=Fl(),$v=Fl(!1,!0),Vv=Fl(!0),Ih=Bv();function Bv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)ft(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rr();const s=le(this)[e].apply(this,n);return ir(),s}}),t}function jv(t){const e=le(this);return ft(e,"has",t),e.hasOwnProperty(t)}function Fl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?r_:Jf:e?Xf:Yf).get(s))return s;const o=K(s);if(!t){if(o&&ae(Ih,r))return Reflect.get(Ih,r,i);if(r==="hasOwnProperty")return jv}const a=Reflect.get(s,r,i);return(qr(r)?Gf.has(r):Uv(r))||(t||ft(s,"get",r),e)?a:Ze(a)?o&&Ml(r)?a:a.value:ve(a)?t?Zf(a):or(a):a}}const Hv=Wf(),qv=Wf(!0);function Wf(t=!1){return function(n,s,r,i){let o=n[s];if(Hs(o)&&Ze(o)&&!Ze(r))return!1;if(!t&&(!_o(r)&&!Hs(r)&&(o=le(o),r=le(r)),!K(n)&&Ze(o)&&!Ze(r)))return o.value=r,!0;const a=K(n)&&Ml(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===le(i)&&(a?Kr(r,o)&&cn(n,"set",s,r):cn(n,"add",s,r)),c}}function Kv(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&cn(t,"delete",e,void 0),s}function zv(t,e){const n=Reflect.has(t,e);return(!qr(e)||!Gf.has(e))&&ft(t,"has",e),n}function Gv(t){return ft(t,"iterate",K(t)?"length":rs),Reflect.ownKeys(t)}const Qf={get:Fv,set:Hv,deleteProperty:Kv,has:zv,ownKeys:Gv},Wv={get:Vv,set(t,e){return!0},deleteProperty(t,e){return!0}},Qv=st({},Qf,{get:$v,set:qv}),$l=t=>t,ia=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,s=!1){t=t.__v_raw;const r=le(t),i=le(e);n||(e!==i&&ft(r,"get",e),ft(r,"get",i));const{has:o}=ia(r),a=s?$l:n?jl:zr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Vi(t,e=!1){const n=this.__v_raw,s=le(n),r=le(t);return e||(t!==r&&ft(s,"has",t),ft(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Bi(t,e=!1){return t=t.__v_raw,!e&&ft(le(t),"iterate",rs),Reflect.get(t,"size",t)}function Th(t){t=le(t);const e=le(this);return ia(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function bh(t,e){e=le(e);const n=le(this),{has:s,get:r}=ia(n);let i=s.call(n,t);i||(t=le(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kr(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function Sh(t){const e=le(this),{has:n,get:s}=ia(e);let r=n.call(e,t);r||(t=le(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&cn(e,"delete",t,void 0),i}function Ch(){const t=le(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function ji(t,e){return function(s,r){const i=this,o=i.__v_raw,a=le(o),c=e?$l:t?jl:zr;return!t&&ft(a,"iterate",rs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Hi(t,e,n){return function(...s){const r=this.__v_raw,i=le(r),o=Ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?$l:e?jl:zr;return!e&&ft(i,"iterate",c?xc:rs),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function yn(t){return function(...e){return t==="delete"?!1:this}}function Yv(){const t={get(i){return $i(this,i)},get size(){return Bi(this)},has:Vi,add:Th,set:bh,delete:Sh,clear:Ch,forEach:ji(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return Bi(this)},has:Vi,add:Th,set:bh,delete:Sh,clear:Ch,forEach:ji(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return Bi(this,!0)},has(i){return Vi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:ji(!0,!1)},s={get(i){return $i(this,i,!0,!0)},get size(){return Bi(this,!0)},has(i){return Vi.call(this,i,!0)},add:yn("add"),set:yn("set"),delete:yn("delete"),clear:yn("clear"),forEach:ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hi(i,!1,!1),n[i]=Hi(i,!0,!1),e[i]=Hi(i,!1,!0),s[i]=Hi(i,!0,!0)}),[t,n,e,s]}const[Xv,Jv,Zv,e_]=Yv();function Vl(t,e){const n=e?t?e_:Zv:t?Jv:Xv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const t_={get:Vl(!1,!1)},n_={get:Vl(!1,!0)},s_={get:Vl(!0,!1)},Yf=new WeakMap,Xf=new WeakMap,Jf=new WeakMap,r_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o_(t){return t.__v_skip||!Object.isExtensible(t)?0:i_(Rv(t))}function or(t){return Hs(t)?t:Bl(t,!1,Qf,t_,Yf)}function a_(t){return Bl(t,!1,Qv,n_,Xf)}function Zf(t){return Bl(t,!0,Wv,s_,Jf)}function Bl(t,e,n,s,r){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=o_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Os(t){return Hs(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function _o(t){return!!(t&&t.__v_isShallow)}function ep(t){return Os(t)||Hs(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function tp(t){return yo(t,"__v_skip",!0),t}const zr=t=>ve(t)?or(t):t,jl=t=>ve(t)?Zf(t):t;function np(t){An&&Dt&&(t=le(t),zf(t.dep||(t.dep=Ll())))}function sp(t,e){t=le(t);const n=t.dep;n&&Mc(n)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function c_(t){return rp(t,!1)}function l_(t){return rp(t,!0)}function rp(t,e){return Ze(t)?t:new u_(t,e)}class u_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:zr(e)}get value(){return np(this),this._value}set value(e){const n=this.__v_isShallow||_o(e)||Hs(e);e=n?e:le(e),Kr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zr(e),sp(this))}}function Ps(t){return Ze(t)?t.value:t}const h_={get:(t,e,n)=>Ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ze(r)&&!Ze(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ip(t){return Os(t)?t:new Proxy(t,h_)}var op;class d_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[op]=!1,this._dirty=!0,this.effect=new Ul(e,()=>{this._dirty||(this._dirty=!0,sp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=le(this);return np(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}op="__v_isReadonly";function f_(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=xt):(s=t.get,r=t.set),new d_(s,r,i||!r,n)}function Rn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){oa(i,e,n)}return r}function St(t,e,n,s){if(ee(t)){const i=Rn(t,e,n,s);return i&&$f(i)&&i.catch(o=>{oa(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(St(t[i],e,n,s));return r}function oa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rn(c,null,10,[t,o,a]);return}}p_(t,n,r,s)}function p_(t,e,n,s=!0){console.error(t)}let Gr=!1,Lc=!1;const Ye=[];let Kt=0;const xs=[];let nn=null,Yn=0;const ap=Promise.resolve();let Hl=null;function cp(t){const e=Hl||ap;return t?e.then(this?t.bind(this):t):e}function g_(t){let e=Kt+1,n=Ye.length;for(;e<n;){const s=e+n>>>1;Wr(Ye[s])<t?e=s+1:n=s}return e}function ql(t){(!Ye.length||!Ye.includes(t,Gr&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?Ye.push(t):Ye.splice(g_(t.id),0,t),lp())}function lp(){!Gr&&!Lc&&(Lc=!0,Hl=ap.then(hp))}function m_(t){const e=Ye.indexOf(t);e>Kt&&Ye.splice(e,1)}function y_(t){K(t)?xs.push(...t):(!nn||!nn.includes(t,t.allowRecurse?Yn+1:Yn))&&xs.push(t),lp()}function Ah(t,e=Gr?Kt+1:0){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function up(t){if(xs.length){const e=[...new Set(xs)];if(xs.length=0,nn){nn.push(...e);return}for(nn=e,nn.sort((n,s)=>Wr(n)-Wr(s)),Yn=0;Yn<nn.length;Yn++)nn[Yn]();nn=null,Yn=0}}const Wr=t=>t.id==null?1/0:t.id,v_=(t,e)=>{const n=Wr(t)-Wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hp(t){Lc=!1,Gr=!0,Ye.sort(v_);const e=xt;try{for(Kt=0;Kt<Ye.length;Kt++){const n=Ye[Kt];n&&n.active!==!1&&Rn(n,null,14)}}finally{Kt=0,Ye.length=0,up(),Gr=!1,Hl=null,(Ye.length||xs.length)&&hp()}}function __(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||we;d&&(r=n.map(g=>Le(g)?g.trim():g)),h&&(r=n.map(vo))}let a,c=s[a=Za(e)]||s[a=Za(Jt(e))];!c&&i&&(c=s[a=Za(sr(e))]),c&&St(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,r)}}function dp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=dp(l,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):st(o,i),ve(t)&&s.set(t,o),o)}function aa(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,sr(e))||ae(t,e))}let _t=null,ca=null;function wo(t){const e=_t;return _t=t,ca=t&&t.type.__scopeId||null,e}function ar(t){ca=t}function cr(){ca=null}function w_(t,e=_t,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Uh(-1);const i=wo(e);let o;try{o=t(...r)}finally{wo(i),s._d&&Uh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ec(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:_,inheritAttrs:v}=t;let k,C;const U=wo(t);try{if(n.shapeFlag&4){const X=r||s;k=qt(u.call(X,X,h,i,g,d,_)),C=c}else{const X=e;k=qt(X.length>1?X(i,{attrs:c,slots:a,emit:l}):X(i,null)),C=e.props?c:E_(c)}}catch(X){Lr.length=0,oa(X,t,1),k=at(Lt)}let D=k;if(C&&v!==!1){const X=Object.keys(C),{shapeFlag:ie}=D;X.length&&ie&7&&(o&&X.some(Pl)&&(C=I_(C,o)),D=Un(D,C))}return n.dirs&&(D=Un(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),k=D,wo(U),k}const E_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},I_=(t,e)=>{const n={};for(const s in t)(!Pl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function T_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Rh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!aa(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Rh(s,o,l):!0:!!o;return!1}function Rh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function b_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const S_=t=>t.__isSuspense;function C_(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):y_(t)}function ro(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Re||_t;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s.proxy):e}}const qi={};function Ms(t,e,n){return fp(t,e,n)}function fp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=we){const a=xv()===(Re==null?void 0:Re.scope)?Re:null;let c,l=!1,u=!1;if(Ze(t)?(c=()=>t.value,l=_o(t)):Os(t)?(c=()=>t,s=!0):K(t)?(u=!0,l=t.some(D=>Os(D)||_o(D)),c=()=>t.map(D=>{if(Ze(D))return D.value;if(Os(D))return es(D);if(ee(D))return Rn(D,a,2)})):ee(t)?e?c=()=>Rn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),St(t,a,3,[d])}:c=xt,e&&s){const D=c;c=()=>es(D())}let h,d=D=>{h=C.onStop=()=>{Rn(D,a,4)}},g;if(Xr)if(d=xt,e?n&&St(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const D=Iw();g=D.__watcherHandles||(D.__watcherHandles=[])}else return xt;let _=u?new Array(t.length).fill(qi):qi;const v=()=>{if(C.active)if(e){const D=C.run();(s||l||(u?D.some((X,ie)=>Kr(X,_[ie])):Kr(D,_)))&&(h&&h(),St(e,a,3,[D,_===qi?void 0:u&&_[0]===qi?[]:_,d]),_=D)}else C.run()};v.allowRecurse=!!e;let k;r==="sync"?k=v:r==="post"?k=()=>ut(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),k=()=>ql(v));const C=new Ul(c,k);e?n?v():_=C.run():r==="post"?ut(C.run.bind(C),a&&a.suspense):C.run();const U=()=>{C.stop(),a&&a.scope&&xl(a.scope.effects,C)};return g&&g.push(U),U}function A_(t,e,n){const s=this.proxy,r=Le(t)?t.includes(".")?pp(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=Re;qs(this);const a=fp(r,i.bind(s),n);return o?qs(o):is(),a}function pp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function es(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ze(t))es(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)es(t[n],e);else if(na(t)||Ds(t))t.forEach(n=>{es(n,e)});else if(Bf(t))for(const n in t)es(t[n],e);return t}function R_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _p(()=>{t.isMounted=!0}),wp(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],k_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=pw(),s=R_();let r;return()=>{const i=e.default&&mp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Lt){o=v;break}}const a=le(t),{mode:c}=a;if(s.isLeaving)return tc(o);const l=kh(o);if(!l)return tc(o);const u=Uc(l,a,s,n);Fc(l,u);const h=n.subTree,d=h&&kh(h);let g=!1;const{getTransitionKey:_}=l.type;if(_){const v=_();r===void 0?r=v:v!==r&&(r=v,g=!0)}if(d&&d.type!==Lt&&(!Xn(l,d)||g)){const v=Uc(d,a,s,n);if(Fc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},tc(o);c==="in-out"&&l.type!==Lt&&(v.delayLeave=(k,C,U)=>{const D=gp(s,d);D[String(d.key)]=d,k._leaveCb=()=>{C(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=U})}return o}}},N_=k_;function gp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Uc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:v,onAppear:k,onAfterAppear:C,onAppearCancelled:U}=e,D=String(t.key),X=gp(n,t),ie=(J,_e)=>{J&&St(J,s,9,_e)},be=(J,_e)=>{const ge=_e[1];ie(J,_e),K(J)?J.every(Ke=>Ke.length<=1)&&ge():J.length<=1&&ge()},xe={mode:i,persisted:o,beforeEnter(J){let _e=a;if(!n.isMounted)if(r)_e=v||a;else return;J._leaveCb&&J._leaveCb(!0);const ge=X[D];ge&&Xn(t,ge)&&ge.el._leaveCb&&ge.el._leaveCb(),ie(_e,[J])},enter(J){let _e=c,ge=l,Ke=u;if(!n.isMounted)if(r)_e=k||c,ge=C||l,Ke=U||u;else return;let ze=!1;const Ct=J._enterCb=en=>{ze||(ze=!0,en?ie(Ke,[J]):ie(ge,[J]),xe.delayedLeave&&xe.delayedLeave(),J._enterCb=void 0)};_e?be(_e,[J,Ct]):Ct()},leave(J,_e){const ge=String(t.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return _e();ie(h,[J]);let Ke=!1;const ze=J._leaveCb=Ct=>{Ke||(Ke=!0,_e(),Ct?ie(_,[J]):ie(g,[J]),J._leaveCb=void 0,X[ge]===t&&delete X[ge])};X[ge]=t,d?be(d,[J,ze]):ze()},clone(J){return Uc(J,e,n,s)}};return xe}function tc(t){if(la(t))return t=Un(t),t.children=null,t}function kh(t){return la(t)?t.children?t.children[0]:void 0:t}function Fc(t,e){t.shapeFlag&6&&t.component?Fc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===je?(o.patchFlag&128&&r++,s=s.concat(mp(o.children,e,a))):(e||o.type!==Lt)&&s.push(a!=null?Un(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function yp(t){return ee(t)?{setup:t,name:t.name}:t}const io=t=>!!t.type.__asyncLoader,la=t=>t.type.__isKeepAlive;function D_(t,e){vp(t,"a",e)}function O_(t,e){vp(t,"da",e)}function vp(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ua(e,s,n),n){let r=n.parent;for(;r&&r.parent;)la(r.parent.vnode)&&P_(s,e,n,r),r=r.parent}}function P_(t,e,n,s){const r=ua(e,t,s,!0);Ep(()=>{xl(s[e],r)},n)}function ua(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rr(),qs(n);const a=St(e,n,t,o);return is(),ir(),a});return s?r.unshift(i):r.push(i),i}}const gn=t=>(e,n=Re)=>(!Xr||t==="sp")&&ua(t,(...s)=>e(...s),n),x_=gn("bm"),_p=gn("m"),M_=gn("bu"),L_=gn("u"),wp=gn("bum"),Ep=gn("um"),U_=gn("sp"),F_=gn("rtg"),$_=gn("rtc");function V_(t,e=Re){ua("ec",t,e)}function ht(t,e){const n=_t;if(n===null)return t;const s=fa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&es(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function zn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(rr(),St(c,n,8,[t.el,a,t,e]),ir())}}const Ip="components";function Kl(t,e){return j_(Ip,t,!0,e)||t}const B_=Symbol();function j_(t,e,n=!0,s=!1){const r=_t||Re;if(r){const i=r.type;if(t===Ip){const a=_w(i,!1);if(a&&(a===e||a===Jt(e)||a===ra(Jt(e))))return i}const o=Nh(r[t]||i[t],e)||Nh(r.appContext[t],e);return!o&&s?i:o}}function Nh(t,e){return t&&(t[e]||t[Jt(e)]||t[ra(Jt(e))])}function Eo(t,e,n,s){let r;const i=n&&n[s];if(K(t)||Le(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ve(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const $c=t=>t?xp(t)?fa(t)||t.proxy:$c(t.parent):null,Mr=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$emit:t=>t.emit,$options:t=>zl(t),$forceUpdate:t=>t.f||(t.f=()=>ql(t.update)),$nextTick:t=>t.n||(t.n=cp.bind(t.proxy)),$watch:t=>A_.bind(t)}),nc=(t,e)=>t!==we&&!t.__isScriptSetup&&ae(t,e),H_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(nc(s,e))return o[e]=1,s[e];if(r!==we&&ae(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==we&&ae(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const u=Mr[e];let h,d;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return nc(r,e)?(r[e]=n,!0):s!==we&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ae(t,o)||nc(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(Mr,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Vc=!0;function q_(t){const e=zl(t),n=t.proxy,s=t.ctx;Vc=!1,e.beforeCreate&&Dh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:v,deactivated:k,beforeDestroy:C,beforeUnmount:U,destroyed:D,unmounted:X,render:ie,renderTracked:be,renderTriggered:xe,errorCaptured:J,serverPrefetch:_e,expose:ge,inheritAttrs:Ke,components:ze,directives:Ct,filters:en}=e;if(l&&K_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const fe=o[me];ee(fe)&&(s[me]=fe.bind(n))}if(r){const me=r.call(n,n);ve(me)&&(t.data=or(me))}if(Vc=!0,i)for(const me in i){const fe=i[me],At=ee(fe)?fe.bind(n,n):ee(fe.get)?fe.get.bind(n,n):xt,Kn=!ee(fe)&&ee(fe.set)?fe.set.bind(n):xt,Rt=vt({get:At,set:Kn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:lt=>Rt.value=lt})}if(a)for(const me in a)Tp(a[me],s,n,me);if(c){const me=ee(c)?c.call(n):c;Reflect.ownKeys(me).forEach(fe=>{ro(fe,me[fe])})}u&&Dh(u,t,"c");function ke(me,fe){K(fe)?fe.forEach(At=>me(At.bind(n))):fe&&me(fe.bind(n))}if(ke(x_,h),ke(_p,d),ke(M_,g),ke(L_,_),ke(D_,v),ke(O_,k),ke(V_,J),ke($_,be),ke(F_,xe),ke(wp,U),ke(Ep,X),ke(U_,_e),K(ge))if(ge.length){const me=t.exposed||(t.exposed={});ge.forEach(fe=>{Object.defineProperty(me,fe,{get:()=>n[fe],set:At=>n[fe]=At})})}else t.exposed||(t.exposed={});ie&&t.render===xt&&(t.render=ie),Ke!=null&&(t.inheritAttrs=Ke),ze&&(t.components=ze),Ct&&(t.directives=Ct)}function K_(t,e,n=xt,s=!1){K(t)&&(t=Bc(t));for(const r in t){const i=t[r];let o;ve(i)?"default"in i?o=Mt(i.from||r,i.default,!0):o=Mt(i.from||r):o=Mt(i),Ze(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Dh(t,e,n){St(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tp(t,e,n,s){const r=s.includes(".")?pp(n,s):()=>n[s];if(Le(t)){const i=e[t];ee(i)&&Ms(r,i)}else if(ee(t))Ms(r,t.bind(n));else if(ve(t))if(K(t))t.forEach(i=>Tp(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Ms(r,i,t)}}function zl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Io(c,l,o,!0)),Io(c,e,o)),ve(e)&&i.set(e,c),c}function Io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Io(t,i,n,!0),r&&r.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const z_={data:Oh,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Wn,directives:Wn,watch:W_,provide:Oh,inject:G_};function Oh(t,e){return e?t?function(){return st(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function G_(t,e){return Wn(Bc(t),Bc(e))}function Bc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?st(st(Object.create(null),t),e):e}function W_(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=ot(t[s],e[s]);return n}function Q_(t,e,n,s=!1){const r={},i={};yo(i,da,1),t.propsDefaults=Object.create(null),bp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:a_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Y_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=le(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(aa(t.emitsOptions,d))continue;const g=e[d];if(c)if(ae(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const _=Jt(d);r[_]=jc(c,a,_,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{bp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=sr(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=jc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&cn(t,"set","$attrs")}function bp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(no(c))continue;const l=e[c];let u;r&&ae(r,u=Jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:aa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=jc(r,c,h,l[h],t,!ae(l,h))}}return o}function jc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(qs(r),s=l[n]=c.call(null,e),is())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===sr(n))&&(s=!0))}return s}function Sp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[d,g]=Sp(h,e,!0);st(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ve(t)&&s.set(t,Ns),Ns;if(K(i))for(let u=0;u<i.length;u++){const h=Jt(i[u]);Ph(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Jt(u);if(Ph(h)){const d=i[u],g=o[h]=K(d)||ee(d)?{type:d}:Object.assign({},d);if(g){const _=Lh(Boolean,g.type),v=Lh(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return ve(t)&&s.set(t,l),l}function Ph(t){return t[0]!=="$"}function xh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Mh(t,e){return xh(t)===xh(e)}function Lh(t,e){return K(e)?e.findIndex(n=>Mh(n,t)):ee(e)&&Mh(e,t)?0:-1}const Cp=t=>t[0]==="_"||t==="$stable",Gl=t=>K(t)?t.map(qt):[qt(t)],X_=(t,e,n)=>{if(e._n)return e;const s=w_((...r)=>Gl(e(...r)),n);return s._c=!1,s},Ap=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Cp(r))continue;const i=t[r];if(ee(i))e[r]=X_(r,i,s);else if(i!=null){const o=Gl(i);e[r]=()=>o}}},Rp=(t,e)=>{const n=Gl(e);t.slots.default=()=>n},J_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),yo(e,"_",n)):Ap(e,t.slots={})}else t.slots={},e&&Rp(t,e);yo(t.slots,da,1)},Z_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ap(e,r)),o=e}else e&&(Rp(t,e),o={default:1});if(i)for(const a in r)!Cp(a)&&!(a in o)&&delete r[a]};function kp(){return{app:null,config:{isNativeTag:Sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ew=0;function tw(t,e){return function(s,r=null){ee(s)||(s=Object.assign({},s)),r!=null&&!ve(r)&&(r=null);const i=kp(),o=new Set;let a=!1;const c=i.app={_uid:ew++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=at(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,fa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Hc(t,e,n,s,r=!1){if(K(t)){t.forEach((d,g)=>Hc(d,e&&(K(e)?e[g]:e),n,s,r));return}if(io(s)&&!r)return;const i=s.shapeFlag&4?fa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ze(l)&&(l.value=null)),ee(c))Rn(c,a,12,[o,u]);else{const d=Le(c),g=Ze(c);if(d||g){const _=()=>{if(t.f){const v=d?ae(h,c)?h[c]:u[c]:c.value;r?K(v)&&xl(v,i):K(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ut(_,n)):_()}}}const ut=C_;function nw(t){return sw(t)}function sw(t,e){const n=Dv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=xt,insertStaticContent:_}=t,v=(f,p,m,w=null,T=null,R=null,x=!1,A=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Xn(f,p)&&(w=O(f),lt(f,T,R,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:b,ref:H,shapeFlag:$}=p;switch(b){case ha:k(f,p,m,w);break;case Lt:C(f,p,m,w);break;case sc:f==null&&U(p,m,w,x);break;case je:ze(f,p,m,w,T,R,x,A,N);break;default:$&1?ie(f,p,m,w,T,R,x,A,N):$&6?Ct(f,p,m,w,T,R,x,A,N):($&64||$&128)&&b.process(f,p,m,w,T,R,x,A,N,oe)}H!=null&&T&&Hc(H,f&&f.ref,R,p||f,!p)},k=(f,p,m,w)=>{if(f==null)s(p.el=a(p.children),m,w);else{const T=p.el=f.el;p.children!==f.children&&l(T,p.children)}},C=(f,p,m,w)=>{f==null?s(p.el=c(p.children||""),m,w):p.el=f.el},U=(f,p,m,w)=>{[f.el,f.anchor]=_(f.children,p,m,w,f.el,f.anchor)},D=({el:f,anchor:p},m,w)=>{let T;for(;f&&f!==p;)T=d(f),s(f,m,w),f=T;s(p,m,w)},X=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ie=(f,p,m,w,T,R,x,A,N)=>{x=x||p.type==="svg",f==null?be(p,m,w,T,R,x,A,N):_e(f,p,T,R,x,A,N)},be=(f,p,m,w,T,R,x,A)=>{let N,b;const{type:H,props:$,shapeFlag:q,transition:Q,dirs:ne}=f;if(N=f.el=o(f.type,R,$&&$.is,$),q&8?u(N,f.children):q&16&&J(f.children,N,null,w,T,R&&H!=="foreignObject",x,A),ne&&zn(f,null,w,"created"),xe(N,f,f.scopeId,x,w),$){for(const pe in $)pe!=="value"&&!no(pe)&&i(N,pe,null,$[pe],R,f.children,w,T,M);"value"in $&&i(N,"value",null,$.value),(b=$.onVnodeBeforeMount)&&Ht(b,w,f)}ne&&zn(f,null,w,"beforeMount");const ye=(!T||T&&!T.pendingBranch)&&Q&&!Q.persisted;ye&&Q.beforeEnter(N),s(N,p,m),((b=$&&$.onVnodeMounted)||ye||ne)&&ut(()=>{b&&Ht(b,w,f),ye&&Q.enter(N),ne&&zn(f,null,w,"mounted")},T)},xe=(f,p,m,w,T)=>{if(m&&g(f,m),w)for(let R=0;R<w.length;R++)g(f,w[R]);if(T){let R=T.subTree;if(p===R){const x=T.vnode;xe(f,x,x.scopeId,x.slotScopeIds,T.parent)}}},J=(f,p,m,w,T,R,x,A,N=0)=>{for(let b=N;b<f.length;b++){const H=f[b]=A?wn(f[b]):qt(f[b]);v(null,H,p,m,w,T,R,x,A)}},_e=(f,p,m,w,T,R,x)=>{const A=p.el=f.el;let{patchFlag:N,dynamicChildren:b,dirs:H}=p;N|=f.patchFlag&16;const $=f.props||we,q=p.props||we;let Q;m&&Gn(m,!1),(Q=q.onVnodeBeforeUpdate)&&Ht(Q,m,p,f),H&&zn(p,f,m,"beforeUpdate"),m&&Gn(m,!0);const ne=T&&p.type!=="foreignObject";if(b?ge(f.dynamicChildren,b,A,m,w,ne,R):x||fe(f,p,A,null,m,w,ne,R,!1),N>0){if(N&16)Ke(A,p,$,q,m,w,T);else if(N&2&&$.class!==q.class&&i(A,"class",null,q.class,T),N&4&&i(A,"style",$.style,q.style,T),N&8){const ye=p.dynamicProps;for(let pe=0;pe<ye.length;pe++){const Ne=ye[pe],kt=$[Ne],ws=q[Ne];(ws!==kt||Ne==="value")&&i(A,Ne,kt,ws,T,f.children,m,w,M)}}N&1&&f.children!==p.children&&u(A,p.children)}else!x&&b==null&&Ke(A,p,$,q,m,w,T);((Q=q.onVnodeUpdated)||H)&&ut(()=>{Q&&Ht(Q,m,p,f),H&&zn(p,f,m,"updated")},w)},ge=(f,p,m,w,T,R,x)=>{for(let A=0;A<p.length;A++){const N=f[A],b=p[A],H=N.el&&(N.type===je||!Xn(N,b)||N.shapeFlag&70)?h(N.el):m;v(N,b,H,null,w,T,R,x,!0)}},Ke=(f,p,m,w,T,R,x)=>{if(m!==w){if(m!==we)for(const A in m)!no(A)&&!(A in w)&&i(f,A,m[A],null,x,p.children,T,R,M);for(const A in w){if(no(A))continue;const N=w[A],b=m[A];N!==b&&A!=="value"&&i(f,A,b,N,x,p.children,T,R,M)}"value"in w&&i(f,"value",m.value,w.value)}},ze=(f,p,m,w,T,R,x,A,N)=>{const b=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:q,slotScopeIds:Q}=p;Q&&(A=A?A.concat(Q):Q),f==null?(s(b,m,w),s(H,m,w),J(p.children,m,H,T,R,x,A,N)):$>0&&$&64&&q&&f.dynamicChildren?(ge(f.dynamicChildren,q,m,T,R,x,A),(p.key!=null||T&&p===T.subTree)&&Np(f,p,!0)):fe(f,p,m,H,T,R,x,A,N)},Ct=(f,p,m,w,T,R,x,A,N)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?T.ctx.activate(p,m,w,x,N):en(p,m,w,T,R,x,N):Tr(f,p,N)},en=(f,p,m,w,T,R,x)=>{const A=f.component=fw(f,w,T);if(la(f)&&(A.ctx.renderer=oe),gw(A),A.asyncDep){if(T&&T.registerDep(A,ke),!f.el){const N=A.subTree=at(Lt);C(null,N,p,m)}return}ke(A,f,p,m,T,R,x)},Tr=(f,p,m)=>{const w=p.component=f.component;if(T_(f,p,m))if(w.asyncDep&&!w.asyncResolved){me(w,p,m);return}else w.next=p,m_(w.update),w.update();else p.el=f.el,w.vnode=p},ke=(f,p,m,w,T,R,x)=>{const A=()=>{if(f.isMounted){let{next:H,bu:$,u:q,parent:Q,vnode:ne}=f,ye=H,pe;Gn(f,!1),H?(H.el=ne.el,me(f,H,x)):H=ne,$&&so($),(pe=H.props&&H.props.onVnodeBeforeUpdate)&&Ht(pe,Q,H,ne),Gn(f,!0);const Ne=ec(f),kt=f.subTree;f.subTree=Ne,v(kt,Ne,h(kt.el),O(kt),f,T,R),H.el=Ne.el,ye===null&&b_(f,Ne.el),q&&ut(q,T),(pe=H.props&&H.props.onVnodeUpdated)&&ut(()=>Ht(pe,Q,H,ne),T)}else{let H;const{el:$,props:q}=p,{bm:Q,m:ne,parent:ye}=f,pe=io(p);if(Gn(f,!1),Q&&so(Q),!pe&&(H=q&&q.onVnodeBeforeMount)&&Ht(H,ye,p),Gn(f,!0),$&&te){const Ne=()=>{f.subTree=ec(f),te($,f.subTree,f,T,null)};pe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ne()):Ne()}else{const Ne=f.subTree=ec(f);v(null,Ne,m,w,f,T,R),p.el=Ne.el}if(ne&&ut(ne,T),!pe&&(H=q&&q.onVnodeMounted)){const Ne=p;ut(()=>Ht(H,ye,Ne),T)}(p.shapeFlag&256||ye&&io(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&ut(f.a,T),f.isMounted=!0,p=m=w=null}},N=f.effect=new Ul(A,()=>ql(b),f.scope),b=f.update=()=>N.run();b.id=f.uid,Gn(f,!0),b()},me=(f,p,m)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,Y_(f,p.props,w,m),Z_(f,p.children,m),rr(),Ah(),ir()},fe=(f,p,m,w,T,R,x,A,N=!1)=>{const b=f&&f.children,H=f?f.shapeFlag:0,$=p.children,{patchFlag:q,shapeFlag:Q}=p;if(q>0){if(q&128){Kn(b,$,m,w,T,R,x,A,N);return}else if(q&256){At(b,$,m,w,T,R,x,A,N);return}}Q&8?(H&16&&M(b,T,R),$!==b&&u(m,$)):H&16?Q&16?Kn(b,$,m,w,T,R,x,A,N):M(b,T,R,!0):(H&8&&u(m,""),Q&16&&J($,m,w,T,R,x,A,N))},At=(f,p,m,w,T,R,x,A,N)=>{f=f||Ns,p=p||Ns;const b=f.length,H=p.length,$=Math.min(b,H);let q;for(q=0;q<$;q++){const Q=p[q]=N?wn(p[q]):qt(p[q]);v(f[q],Q,m,null,T,R,x,A,N)}b>H?M(f,T,R,!0,!1,$):J(p,m,w,T,R,x,A,N,$)},Kn=(f,p,m,w,T,R,x,A,N)=>{let b=0;const H=p.length;let $=f.length-1,q=H-1;for(;b<=$&&b<=q;){const Q=f[b],ne=p[b]=N?wn(p[b]):qt(p[b]);if(Xn(Q,ne))v(Q,ne,m,null,T,R,x,A,N);else break;b++}for(;b<=$&&b<=q;){const Q=f[$],ne=p[q]=N?wn(p[q]):qt(p[q]);if(Xn(Q,ne))v(Q,ne,m,null,T,R,x,A,N);else break;$--,q--}if(b>$){if(b<=q){const Q=q+1,ne=Q<H?p[Q].el:w;for(;b<=q;)v(null,p[b]=N?wn(p[b]):qt(p[b]),m,ne,T,R,x,A,N),b++}}else if(b>q)for(;b<=$;)lt(f[b],T,R,!0),b++;else{const Q=b,ne=b,ye=new Map;for(b=ne;b<=q;b++){const mt=p[b]=N?wn(p[b]):qt(p[b]);mt.key!=null&&ye.set(mt.key,b)}let pe,Ne=0;const kt=q-ne+1;let ws=!1,gh=0;const br=new Array(kt);for(b=0;b<kt;b++)br[b]=0;for(b=Q;b<=$;b++){const mt=f[b];if(Ne>=kt){lt(mt,T,R,!0);continue}let jt;if(mt.key!=null)jt=ye.get(mt.key);else for(pe=ne;pe<=q;pe++)if(br[pe-ne]===0&&Xn(mt,p[pe])){jt=pe;break}jt===void 0?lt(mt,T,R,!0):(br[jt-ne]=b+1,jt>=gh?gh=jt:ws=!0,v(mt,p[jt],m,null,T,R,x,A,N),Ne++)}const mh=ws?rw(br):Ns;for(pe=mh.length-1,b=kt-1;b>=0;b--){const mt=ne+b,jt=p[mt],yh=mt+1<H?p[mt+1].el:w;br[b]===0?v(null,jt,m,yh,T,R,x,A,N):ws&&(pe<0||b!==mh[pe]?Rt(jt,m,yh,2):pe--)}}},Rt=(f,p,m,w,T=null)=>{const{el:R,type:x,transition:A,children:N,shapeFlag:b}=f;if(b&6){Rt(f.component.subTree,p,m,w);return}if(b&128){f.suspense.move(p,m,w);return}if(b&64){x.move(f,p,m,oe);return}if(x===je){s(R,p,m);for(let $=0;$<N.length;$++)Rt(N[$],p,m,w);s(f.anchor,p,m);return}if(x===sc){D(f,p,m);return}if(w!==2&&b&1&&A)if(w===0)A.beforeEnter(R),s(R,p,m),ut(()=>A.enter(R),T);else{const{leave:$,delayLeave:q,afterLeave:Q}=A,ne=()=>s(R,p,m),ye=()=>{$(R,()=>{ne(),Q&&Q()})};q?q(R,ne,ye):ye()}else s(R,p,m)},lt=(f,p,m,w=!1,T=!1)=>{const{type:R,props:x,ref:A,children:N,dynamicChildren:b,shapeFlag:H,patchFlag:$,dirs:q}=f;if(A!=null&&Hc(A,null,m,f,!0),H&256){p.ctx.deactivate(f);return}const Q=H&1&&q,ne=!io(f);let ye;if(ne&&(ye=x&&x.onVnodeBeforeUnmount)&&Ht(ye,p,f),H&6)I(f.component,m,w);else{if(H&128){f.suspense.unmount(m,w);return}Q&&zn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,m,T,oe,w):b&&(R!==je||$>0&&$&64)?M(b,p,m,!1,!0):(R===je&&$&384||!T&&H&16)&&M(N,p,m),w&&_s(f)}(ne&&(ye=x&&x.onVnodeUnmounted)||Q)&&ut(()=>{ye&&Ht(ye,p,f),Q&&zn(f,null,p,"unmounted")},m)},_s=f=>{const{type:p,el:m,anchor:w,transition:T}=f;if(p===je){Fi(m,w);return}if(p===sc){X(f);return}const R=()=>{r(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:x,delayLeave:A}=T,N=()=>x(m,R);A?A(f.el,R,N):N()}else R()},Fi=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},I=(f,p,m)=>{const{bum:w,scope:T,update:R,subTree:x,um:A}=f;w&&so(w),T.stop(),R&&(R.active=!1,lt(x,f,p,m)),A&&ut(A,p),ut(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(f,p,m,w=!1,T=!1,R=0)=>{for(let x=R;x<f.length;x++)lt(f[x],p,m,w,T)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),B=(f,p,m)=>{f==null?p._vnode&&lt(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,m),Ah(),up(),p._vnode=f},oe={p:v,um:lt,m:Rt,r:_s,mt:en,mc:J,pc:fe,pbc:ge,n:O,o:t};let Se,te;return e&&([Se,te]=e(oe)),{render:B,hydrate:Se,createApp:tw(B,Se)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Np(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=wn(r[i]),a.el=o.el),n||Np(o,a)),a.type===ha&&(a.el=o.el)}}function rw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const iw=t=>t.__isTeleport,je=Symbol(void 0),ha=Symbol(void 0),Lt=Symbol(void 0),sc=Symbol(void 0),Lr=[];let Ot=null;function Fe(t=!1){Lr.push(Ot=t?null:[])}function ow(){Lr.pop(),Ot=Lr[Lr.length-1]||null}let Qr=1;function Uh(t){Qr+=t}function Dp(t){return t.dynamicChildren=Qr>0?Ot||Ns:null,ow(),Qr>0&&Ot&&Ot.push(t),t}function Xe(t,e,n,s,r,i){return Dp(y(t,e,n,s,r,i,!0))}function Op(t,e,n,s,r){return Dp(at(t,e,n,s,r,!0))}function qc(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const da="__vInternal",Pp=({key:t})=>t??null,oo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Ze(t)||ee(t)?{i:_t,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,r=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pp(e),ref:e&&oo(e),scopeId:ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_t};return a?(Wl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),Qr>0&&!o&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const at=aw;function aw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===B_)&&(t=Lt),qc(t)){const a=Un(t,e,!0);return n&&Wl(a,n),Qr>0&&!i&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag|=-2,a}if(ww(t)&&(t=t.__vccOpts),e){e=cw(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Ol(a)),ve(c)&&(ep(c)&&!K(c)&&(c=st({},c)),e.style=Dl(c))}const o=Le(t)?1:S_(t)?128:iw(t)?64:ve(t)?4:ee(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function cw(t){return t?ep(t)||da in t?st({},t):t:null}function Un(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?uw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pp(a),ref:e&&e.ref?n&&r?K(r)?r.concat(oo(e)):[r,oo(e)]:oo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yr(t=" ",e=0){return at(ha,null,t,e)}function lw(t="",e=!1){return e?(Fe(),Op(Lt,null,t)):at(Lt,null,t)}function qt(t){return t==null||typeof t=="boolean"?at(Lt):K(t)?at(je,null,t.slice()):typeof t=="object"?wn(t):at(ha,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function Wl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(da in e)?e._ctx=_t:r===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),s&64?(n=16,e=[Yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function uw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ol([e.class,s.class]));else if(r==="style")e.style=Dl([e.style,s.style]);else if(ta(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){St(t,e,7,[n,s])}const hw=kp();let dw=0;function fw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||hw,i={uid:dw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new jf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sp(s,r),emitsOptions:dp(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=__.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const pw=()=>Re||_t,qs=t=>{Re=t,t.scope.on()},is=()=>{Re&&Re.scope.off(),Re=null};function xp(t){return t.vnode.shapeFlag&4}let Xr=!1;function gw(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,r=xp(t);Q_(t,n,r,e),J_(t,s);const i=r?mw(t,e):void 0;return Xr=!1,i}function mw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=tp(new Proxy(t.ctx,H_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?vw(t):null;qs(t),rr();const i=Rn(s,t,0,[t.props,r]);if(ir(),is(),$f(i)){if(i.then(is,is),e)return i.then(o=>{Fh(t,o,e)}).catch(o=>{oa(o,t,0)});t.asyncDep=i}else Fh(t,i,e)}else Mp(t,e)}function Fh(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=ip(e)),Mp(t,n)}let $h;function Mp(t,e,n){const s=t.type;if(!t.render){if(!e&&$h&&!s.render){const r=s.template||zl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=st(st({isCustomElement:i,delimiters:a},o),c);s.render=$h(r,l)}}t.render=s.render||xt}qs(t),rr(),q_(t),ir(),is()}function yw(t){return new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}})}function vw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=yw(t))},slots:t.slots,emit:t.emit,expose:e}}function fa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ip(tp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mr)return Mr[n](t)},has(e,n){return n in e||n in Mr}}))}function _w(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function ww(t){return ee(t)&&"__vccOpts"in t}const vt=(t,e)=>f_(t,e,Xr);function Lp(t,e,n){const s=arguments.length;return s===2?ve(e)&&!K(e)?qc(e)?at(t,null,[e]):at(t,e):at(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qc(n)&&(n=[n]),at(t,e,n))}const Ew=Symbol(""),Iw=()=>Mt(Ew),Tw="3.2.47",bw="http://www.w3.org/2000/svg",Jn=typeof document<"u"?document:null,Vh=Jn&&Jn.createElement("template"),Sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Jn.createElementNS(bw,t):Jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Vh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Vh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Aw(t,e,n){const s=t.style,r=Le(n);if(n&&!r){if(e&&!Le(e))for(const i in e)n[i]==null&&Kc(s,i,"");for(const i in n)Kc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Bh=/\s*!important$/;function Kc(t,e,n){if(K(n))n.forEach(s=>Kc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rw(t,e);Bh.test(n)?t.setProperty(sr(s),n.replace(Bh,""),"important"):t[s]=n}}const jh=["Webkit","Moz","ms"],rc={};function Rw(t,e){const n=rc[e];if(n)return n;let s=Jt(e);if(s!=="filter"&&s in t)return rc[e]=s;s=ra(s);for(let r=0;r<jh.length;r++){const i=jh[r]+s;if(i in t)return rc[e]=i}return e}const Hh="http://www.w3.org/1999/xlink";function kw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hh,e.slice(6,e.length)):t.setAttributeNS(Hh,e,n);else{const i=Iv(e);n==null||i&&!Uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Uf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Zn(t,e,n,s){t.addEventListener(e,n,s)}function Dw(t,e,n,s){t.removeEventListener(e,n,s)}function Ow(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pw(e);if(s){const l=i[e]=Lw(s,r);Zn(t,a,l,c)}else o&&(Dw(t,a,o,c),i[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function Pw(t){let e;if(qh.test(t)){e={};let s;for(;s=t.match(qh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let ic=0;const xw=Promise.resolve(),Mw=()=>ic||(xw.then(()=>ic=0),ic=Date.now());function Lw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(Uw(s,n.value),e,5,[s])};return n.value=t,n.attached=Mw(),n}function Uw(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Kh=/^on[a-z]/,Fw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Cw(t,s,r):e==="style"?Aw(t,n,s):ta(e)?Pl(e)||Ow(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$w(t,e,s,r))?Nw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kw(t,e,s,r))};function $w(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Kh.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Kh.test(e)&&Le(n)?!1:e in t}const Vw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};N_.props;const To=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>so(e,n):e};function Bw(t){t.target.composing=!0}function zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=To(r);const i=s||r.props&&r.props.type==="number";Zn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vo(a)),t._assign(a)}),n&&Zn(t,"change",()=>{t.value=t.value.trim()}),e||(Zn(t,"compositionstart",Bw),Zn(t,"compositionend",zh),Zn(t,"change",zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=To(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&vo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jw={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=na(e);Zn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vo(bo(o)):bo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=To(s)},mounted(t,{value:e}){Gh(t,e)},beforeUpdate(t,e,n){t._assign=To(n)},updated(t,{value:e}){Gh(t,e)}};function Gh(t,e){const n=t.multiple;if(!(n&&!K(e)&&!na(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=bo(i);if(n)K(e)?i.selected=bv(e,o)>-1:i.selected=e.has(o);else if(ea(bo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bo(t){return"_value"in t?t._value:t.value}const Hw=["ctrl","shift","alt","meta"],qw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Hw.some(n=>t[`${n}Key`]&&!e.includes(n))},Kw=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=qw[e[r]];if(i&&i(n,e))return}return t(n,...s)},zw=st({patchProp:Fw},Sw);let Wh;function Gw(){return Wh||(Wh=nw(zw))}const Ww=(...t)=>{const e=Gw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qw(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Qw(t){return Le(t)?document.querySelector(t):t}function Yw(){return Up().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Up(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Xw=typeof Proxy=="function",Jw="devtools-plugin:setup",Zw="plugin:settings:set";let Es,zc;function eE(){var t;return Es!==void 0||(typeof window<"u"&&window.performance?(Es=!0,zc=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Es=!0,zc=global.perf_hooks.performance):Es=!1),Es}function tE(){return eE()?zc.now():Date.now()}class nE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return tE()}},n&&n.on(Zw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function sE(t,e){const n=t,s=Up(),r=Yw(),i=Xw&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(Jw,t,e);else{const o=i?new nE(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Fp="store";function ln(t){return t===void 0&&(t=null),Mt(t!==null?t:Fp)}function lr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function rE(t){return t!==null&&typeof t=="object"}function iE(t){return t&&typeof t.then=="function"}function oE(t,e){return function(){return t(e)}}function $p(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Vp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;pa(t,n,[],t._modules.root,!0),Ql(t,n,e)}function Ql(t,e,n){var s=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=Ov(!0);c.run(function(){lr(i,function(l,u){o[u]=oE(l,t),a[u]=vt(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=or({data:e}),t._scope=c,t.strict&&hE(t),s&&n&&t._withCommit(function(){s.data=null}),r&&r.stop()}function pa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=Yl(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=aE(t,o,n);s.forEachMutation(function(u,h){var d=o+h;cE(t,d,u,l)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;lE(t,d,g,l)}),s.forEachGetter(function(u,h){var d=o+h;uE(t,d,u,l)}),s.forEachChild(function(u,h){pa(t,e,n.concat(h),u,r)})}function aE(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=So(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=So(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Bp(t,e)}},state:{get:function(){return Yl(t.state,n)}}}),r}function Bp(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function cE(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function lE(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return iE(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function uE(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function hE(t){Ms(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Yl(t,e){return e.reduce(function(n,s){return n[s]},t)}function So(t,e,n){return rE(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var dE="vuex bindings",Qh="vuex:mutations",oc="vuex:actions",Is="vuex",fE=0;function pE(t,e){sE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[dE]},function(n){n.addTimelineLayer({id:Qh,label:"Vuex Mutations",color:Yh}),n.addTimelineLayer({id:oc,label:"Vuex Actions",color:Yh}),n.addInspector({id:Is,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Is)if(s.filter){var r=[];Kp(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[qp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Is){var r=s.nodeId;Bp(e,r),s.state=yE(_E(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Is){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Is),n.sendInspectorState(Is),n.addTimelineEvent({layerId:Qh,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=fE++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:oc,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:oc,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var Yh=8702998,gE=6710886,mE=16777215,jp={label:"namespaced",textColor:mE,backgroundColor:gE};function Hp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function qp(t,e){return{id:e||"root",label:Hp(e),tags:t.namespaced?[jp]:[],children:Object.keys(t._children).map(function(n){return qp(t._children[n],e+n+"/")})}}function Kp(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[jp]:[]}),Object.keys(e._children).forEach(function(r){Kp(t,e._children[r],n,s+r+"/")})}function yE(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=vE(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Hp(o):o,editable:!1,value:Gc(function(){return i[o]})}})}return r}function vE(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=Gc(function(){return t[n]})}else e[n]=Gc(function(){return t[n]})}),e}function _E(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Gc(t){try{return t()}catch(e){return e}}var Bt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},zp={namespaced:{configurable:!0}};zp.namespaced.get=function(){return!!this._rawModule.namespaced};Bt.prototype.addChild=function(e,n){this._children[e]=n};Bt.prototype.removeChild=function(e){delete this._children[e]};Bt.prototype.getChild=function(e){return this._children[e]};Bt.prototype.hasChild=function(e){return e in this._children};Bt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Bt.prototype.forEachChild=function(e){lr(this._children,e)};Bt.prototype.forEachGetter=function(e){this._rawModule.getters&&lr(this._rawModule.getters,e)};Bt.prototype.forEachAction=function(e){this._rawModule.actions&&lr(this._rawModule.actions,e)};Bt.prototype.forEachMutation=function(e){this._rawModule.mutations&&lr(this._rawModule.mutations,e)};Object.defineProperties(Bt.prototype,zp);var gs=function(e){this.register([],e,!1)};gs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};gs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};gs.prototype.update=function(e){Gp([],this.root,e)};gs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Bt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&lr(n.modules,function(a,c){r.register(e.concat(c),a,s)})};gs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};gs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Gp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Gp(t.concat(s),e.getChild(s),n.modules[s])}}function wE(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new gs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,_){return l.call(o,d,g,_)},this.strict=r;var u=this._modules.root.state;pa(this,u,[],this._modules.root),Ql(this,u),s.forEach(function(h){return h(n)})},Xl={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||Fp,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&pE(e,this)};Xl.state.get=function(){return this._state.data};Xl.state.set=function(t){};gt.prototype.commit=function(e,n,s){var r=this,i=So(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};gt.prototype.dispatch=function(e,n){var s=this,r=So(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,d)})}catch{}h(d)})})}};gt.prototype.subscribe=function(e,n){return $p(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return $p(s,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,s){var r=this;return Ms(function(){return e(r.state,r.getters)},n,Object.assign({},s))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),pa(this,this.state,e,this._modules.get(e),s.preserveState),Ql(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Yl(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Vp(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),Vp(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,Xl);/**
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
 */const Wp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},EE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new IE;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TE=function(t){const e=Wp(t);return Qp.encodeByteArray(e,!0)},Co=function(t){return TE(t).replace(/\./g,"")},Yp=function(t){try{return Qp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SE=()=>bE().__FIREBASE_DEFAULTS__,CE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yp(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return SE()||CE()||AE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xp=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RE=t=>{const e=Xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kE=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},Jp=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function DE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Co(JSON.stringify(n)),Co(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function PE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ME(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LE(){try{return typeof indexedDB=="object"}catch{return!1}}function UE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const FE="FirebaseError";class mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=FE,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$E(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new mn(r,a,s)}}function $E(t,e){return t.replace(VE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const VE=/\{\$([^}]+)}/g;function BE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xh(i)&&Xh(o)){if(!Ao(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jE(t,e){const n=new HE(t,e);return n.subscribe.bind(n)}class HE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ac),r.error===void 0&&(r.error=ac),r.complete===void 0&&(r.complete=ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class KE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new NE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(t){return t===Qn?void 0:t}function GE(t){return t.instantiationMode==="EAGER"}/**
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
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const QE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},YE=ce.INFO,XE={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},JE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=XE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=YE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const ZE=(t,e)=>e.some(n=>t instanceof n);let Jh,Zh;function e0(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t0(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zp=new WeakMap,Wc=new WeakMap,eg=new WeakMap,cc=new WeakMap,eu=new WeakMap;function n0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zp.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function s0(t){if(Wc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wc.set(t,e)}let Qc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function r0(t){Qc=t(Qc)}function i0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(lc(this),e,...n);return eg.set(s,e.sort?e.sort():[e]),kn(s)}:t0().includes(t)?function(...e){return t.apply(lc(this),e),kn(Zp.get(this))}:function(...e){return kn(t.apply(lc(this),e))}}function o0(t){return typeof t=="function"?i0(t):(t instanceof IDBTransaction&&s0(t),ZE(t,e0())?new Proxy(t,Qc):t)}function kn(t){if(t instanceof IDBRequest)return n0(t);if(cc.has(t))return cc.get(t);const e=o0(t);return e!==t&&(cc.set(t,e),eu.set(e,t)),e}const lc=t=>eu.get(t);function a0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=kn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kn(o.result),c.oldVersion,c.newVersion,kn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const c0=["get","getKey","getAll","getAllKeys","count"],l0=["put","add","delete","clear"],uc=new Map;function ed(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=l0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||c0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return uc.set(e,i),i}r0(t=>({...t,get:(e,n,s)=>ed(e,n)||t.get(e,n,s),has:(e,n)=>!!ed(e,n)||t.has(e,n)}));/**
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
 */class u0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function h0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yc="@firebase/app",td="0.9.9";/**
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
 */const ls=new Zl("@firebase/app"),d0="@firebase/app-compat",f0="@firebase/analytics-compat",p0="@firebase/analytics",g0="@firebase/app-check-compat",m0="@firebase/app-check",y0="@firebase/auth",v0="@firebase/auth-compat",_0="@firebase/database",w0="@firebase/database-compat",E0="@firebase/functions",I0="@firebase/functions-compat",T0="@firebase/installations",b0="@firebase/installations-compat",S0="@firebase/messaging",C0="@firebase/messaging-compat",A0="@firebase/performance",R0="@firebase/performance-compat",k0="@firebase/remote-config",N0="@firebase/remote-config-compat",D0="@firebase/storage",O0="@firebase/storage-compat",P0="@firebase/firestore",x0="@firebase/firestore-compat",M0="firebase",L0="9.21.0";/**
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
 */const Xc="[DEFAULT]",U0={[Yc]:"fire-core",[d0]:"fire-core-compat",[p0]:"fire-analytics",[f0]:"fire-analytics-compat",[m0]:"fire-app-check",[g0]:"fire-app-check-compat",[y0]:"fire-auth",[v0]:"fire-auth-compat",[_0]:"fire-rtdb",[w0]:"fire-rtdb-compat",[E0]:"fire-fn",[I0]:"fire-fn-compat",[T0]:"fire-iid",[b0]:"fire-iid-compat",[S0]:"fire-fcm",[C0]:"fire-fcm-compat",[A0]:"fire-perf",[R0]:"fire-perf-compat",[k0]:"fire-rc",[N0]:"fire-rc-compat",[D0]:"fire-gcs",[O0]:"fire-gcs-compat",[P0]:"fire-fst",[x0]:"fire-fst-compat","fire-js":"fire-js",[M0]:"fire-js-all"};/**
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
 */const Ro=new Map,Jc=new Map;function F0(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ks(t){const e=t.name;if(Jc.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of Ro.values())F0(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new yi("app","Firebase",$0);/**
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
 */class V0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=L0;function tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Nn.create("bad-app-name",{appName:String(r)});if(n||(n=kE()),!n)throw Nn.create("no-options");const i=Ro.get(r);if(i){if(Ao(n,i.options)&&Ao(s,i.config))return i;throw Nn.create("duplicate-app",{appName:r})}const o=new WE(r);for(const c of Jc.values())o.addComponent(c);const a=new V0(n,s,o);return Ro.set(r,a),a}function ng(t=Xc){const e=Ro.get(t);if(!e&&t===Xc)return tg();if(!e)throw Nn.create("no-app",{appName:t});return e}function Dn(t,e,n){var s;let r=(s=U0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}Ks(new cs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const B0="firebase-heartbeat-database",j0=1,Jr="firebase-heartbeat-store";let hc=null;function sg(){return hc||(hc=a0(B0,j0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),hc}async function H0(t){try{return(await sg()).transaction(Jr).objectStore(Jr).get(rg(t))}catch(e){if(e instanceof mn)ls.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function nd(t,e){try{const s=(await sg()).transaction(Jr,"readwrite");return await s.objectStore(Jr).put(e,rg(t)),s.done}catch(n){if(n instanceof mn)ls.warn(n.message);else{const s=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(s.message)}}}function rg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const q0=1024,K0=30*24*60*60*1e3;class z0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=K0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sd(),{heartbeatsToSend:n,unsentEntries:s}=G0(this._heartbeatsCache.heartbeats),r=Co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function sd(){return new Date().toISOString().substring(0,10)}function G0(t,e=q0){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),rd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),rd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class W0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LE()?UE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await H0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rd(t){return Co(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Q0(t){Ks(new cs("platform-logger",e=>new u0(e),"PRIVATE")),Ks(new cs("heartbeat",e=>new z0(e),"PRIVATE")),Dn(Yc,td,t),Dn(Yc,td,"esm2017"),Dn("fire-js","")}Q0("");var Y0="firebase",X0="9.21.0";/**
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
 */Dn(Y0,X0,"app");function nu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function ig(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J0=ig,og=new yi("auth","Firebase",ig());/**
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
 */const ko=new Zl("@firebase/auth");function Z0(t,...e){ko.logLevel<=ce.WARN&&ko.warn(`Auth (${ur}): ${t}`,...e)}function ao(t,...e){ko.logLevel<=ce.ERROR&&ko.error(`Auth (${ur}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw su(t,...e)}function Wt(t,...e){return su(t,...e)}function eI(t,e,n){const s=Object.assign(Object.assign({},J0()),{[e]:n});return new yi("auth","Firebase",s).create(e,{appName:t.name})}function su(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return og.create(t,...e)}function z(t,e,...n){if(!t)throw su(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function un(t,e){t||sn(e)}/**
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
 */function Zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tI(){return id()==="http:"||id()==="https:"}function id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||PE()||"connection"in navigator)?navigator.onLine:!0}function sI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=OE()||xE()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ru(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ag{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iI=new _i(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dr(t,e,n,s,r={}){return cg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ag.fetch()(lg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function cg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},rI),e);try{const r=new oI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ki(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ki(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ki(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ki(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw eI(t,u,l);Ut(t,u)}}catch(r){if(r instanceof mn)throw r;Ut(t,"network-request-failed",{message:String(r)})}}async function wi(t,e,n,s,r={}){const i=await dr(t,e,n,s,r);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function lg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ru(t.config,r):`${t.config.apiScheme}://${r}`}class oI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Wt(this.auth,"network-request-failed")),iI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Wt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function aI(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function cI(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lI(t,e=!1){const n=pt(t),s=await n.getIdToken(e),r=iu(s);z(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ur(dc(r.auth_time)),issuedAtTime:Ur(dc(r.iat)),expirationTime:Ur(dc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dc(t){return Number(t)*1e3}function iu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yp(n);return r?JSON.parse(r):(ao("Failed to decode base64 JWT payload"),null)}catch(r){return ao("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function uI(t){const e=iu(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof mn&&hI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function hI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ug{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function No(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Zr(t,cI(n,{idToken:s}));z(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gI(i.providerUserInfo):[],a=pI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ug(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function fI(t){const e=pt(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function gI(t){return t.map(e=>{var{providerId:n}=e,s=nu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function mI(t,e){const n=await cg(t,{},async()=>{const s=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=lg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ag.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await mI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ei;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(z(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function vn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class os{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ug(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lI(this,e)}reload(){return fI(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zr(this,aI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:X,isAnonymous:ie,providerData:be,stsTokenManager:xe}=n;z(D&&xe,e,"internal-error");const J=ei.fromJSON(this.name,xe);z(typeof D=="string",e,"internal-error"),vn(h,e.name),vn(d,e.name),z(typeof X=="boolean",e,"internal-error"),z(typeof ie=="boolean",e,"internal-error"),vn(g,e.name),vn(_,e.name),vn(v,e.name),vn(k,e.name),vn(C,e.name),vn(U,e.name);const _e=new os({uid:D,auth:e,email:d,emailVerified:X,displayName:h,isAnonymous:ie,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:J,createdAt:C,lastLoginAt:U});return be&&Array.isArray(be)&&(_e.providerData=be.map(ge=>Object.assign({},ge))),k&&(_e._redirectEventId=k),_e}static async _fromIdTokenResponse(e,n,s=!1){const r=new ei;r.updateFromServerResponse(n);const i=new os({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await No(i),i}}/**
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
 */const od=new Map;function rn(t){un(t instanceof Function,"Expected a class definition");let e=od.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,od.set(t,e),e)}/**
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
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hg.type="NONE";const ad=hg;/**
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
 */function co(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=co(this.userKey,r.apiKey,i),this.fullPersistenceKey=co("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ls(rn(ad),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||rn(ad);const o=co(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=os._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ls(i,e,s))}}/**
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
 */function cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(yg(e))return"Webos";if(ou(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function dg(t=rt()){return/firefox\//i.test(t)}function ou(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(t=rt()){return/crios\//i.test(t)}function pg(t=rt()){return/iemobile/i.test(t)}function gg(t=rt()){return/android/i.test(t)}function mg(t=rt()){return/blackberry/i.test(t)}function yg(t=rt()){return/webos/i.test(t)}function ga(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yI(t=rt()){var e;return ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vI(){return ME()&&document.documentMode===10}function vg(t=rt()){return ga(t)||gg(t)||yg(t)||mg(t)||/windows phone/i.test(t)||pg(t)}function _I(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _g(t,e=[]){let n;switch(t){case"Browser":n=cd(rt());break;case"Worker":n=`${cd(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${s}`}async function wg(t,e){return dr(t,"GET","/v2/recaptchaConfig",hr(t,e))}function ld(t){return t!==void 0&&t.enterprise!==void 0}class Eg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function wI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ig(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Wt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",wI().appendChild(s)})}function EI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const II="https://www.google.com/recaptcha/enterprise.js?render=",TI="recaptcha-enterprise",bI="NO_RECAPTCHA";class Tg{constructor(e){this.type=TI,this.auth=fr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Eg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;ld(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(bI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&ld(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ig(II+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Do(t,e,n,s=!1){const r=new Tg(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class SI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class CI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new SI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}async initializeRecaptchaConfig(){const e=await wg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Eg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Tg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Z0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fr(t){return pt(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function AI(t,e){const n=tu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ao(i,e??{}))return r;Ut(r,"already-initialized")}return n.initialize({options:e})}function RI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function kI(t,e,n){const s=fr(t);z(s._canInitEmulator,s,"emulator-config-failed"),z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=bg(e),{host:o,port:a}=NI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||DI()}function bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NI(t){const e=bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:hd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:hd(o)}}}function hd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function OI(t,e){return dr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function fc(t,e){return wi(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
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
 */async function PI(t,e){return wi(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function xI(t,e){return wi(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
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
 */class ti extends au{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ti(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ti(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Do(e,s,"signInWithPassword");return fc(e,r)}else return fc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Do(e,s,"signInWithPassword");return fc(e,i)}else return Promise.reject(r)});case"emailLink":return PI(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return OI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Us(t,e){return wi(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const MI="http://localhost";class us extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=nu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new us(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:MI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function LI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UI(t){const e=kr(Nr(t)).link,n=e?kr(Nr(e)).deep_link_id:null,s=kr(Nr(t)).deep_link_id;return(s?kr(Nr(s)).link:null)||s||n||e||t}class cu{constructor(e){var n,s,r,i,o,a;const c=kr(Nr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=LI((r=c.mode)!==null&&r!==void 0?r:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UI(e);try{return new cu(n)}catch{return null}}}/**
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
 */class pr{constructor(){this.providerId=pr.PROVIDER_ID}static credential(e,n){return ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=cu.parseLink(n);return z(s,"argument-error"),ti._fromEmailAndCode(e,s.code,s.tenantId)}}pr.PROVIDER_ID="password";pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ei extends Sg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends Ei{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class bn extends Ei{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Sn extends Ei{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sn.credential(n,s)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */async function pc(t,e){return wi(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
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
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await os._fromIdTokenResponse(e,s,r),o=dd(s);return new hs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=dd(s);return new hs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oo extends mn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oo(e,n,s,r)}}function Cg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,s):i})}async function FI(t,e,n=!1){const s=await Zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",s)}/**
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
 */async function $I(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Zr(t,Cg(s,r,e,t),n);z(i.idToken,s,"internal-error");const o=iu(i.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),hs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(s,"user-mismatch"),i}}/**
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
 */async function Ag(t,e,n=!1){const s="signIn",r=await Cg(t,s,e),i=await hs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function VI(t,e){return Ag(fr(t),e)}async function BI(t,e,n){var s;const r=fr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const l=await Do(r,i,"signUpPassword");o=pc(r,l)}else o=pc(r,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Do(r,i,"signUpPassword");return pc(r,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await hs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function jI(t,e,n){return VI(pt(t),pr.credential(e,n))}function HI(t,e,n,s){return pt(t).onIdTokenChanged(e,n,s)}function qI(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function KI(t){return pt(t).signOut()}const Po="__sak";/**
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
 */class Rg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zI(){const t=rt();return ou(t)||ga(t)}const GI=1e3,WI=10;class kg extends Rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zI()&&_I(),this.fallbackToPolling=vg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);vI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,WI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},GI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kg.type="LOCAL";const QI=kg;/**
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
 */class Ng extends Rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ng.type="SESSION";const Dg=Ng;/**
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
 */function YI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await YI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
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
 */function lu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=lu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function JI(t){Qt().location.href=t}/**
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
 */function Og(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function ZI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tT(){return Og()?self:null}/**
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
 */const Pg="firebaseLocalStorageDb",nT=1,xo="firebaseLocalStorage",xg="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([xo],e?"readwrite":"readonly").objectStore(xo)}function sT(){const t=indexedDB.deleteDatabase(Pg);return new Ii(t).toPromise()}function el(){const t=indexedDB.open(Pg,nT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xo,{keyPath:xg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xo)?e(s):(s.close(),await sT(),e(await el()))})})}async function fd(t,e,n){const s=ya(t,!0).put({[xg]:e,value:n});return new Ii(s).toPromise()}async function rT(t,e){const n=ya(t,!1).get(e),s=await new Ii(n).toPromise();return s===void 0?null:s.value}function pd(t,e){const n=ya(t,!0).delete(e);return new Ii(n).toPromise()}const iT=800,oT=3;class Mg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await el(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>oT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(tT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZI(),!this.activeServiceWorker)return;this.sender=new XI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await el();return await fd(e,Po,"1"),await pd(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>rT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ya(r,!1).getAll();return new Ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mg.type="LOCAL";const aT=Mg;new _i(3e4,6e4);/**
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
 */function cT(t,e){return e?rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lT(t){return Ag(t.auth,new uu(t),t.bypassAuthState)}function uT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),$I(n,new uu(t),t.bypassAuthState)}async function hT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),FI(n,new uu(t),t.bypassAuthState)}/**
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
 */class Lg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return hT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:Ut(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dT=new _i(2e3,1e4);class Rs extends Lg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dT.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const fT="pendingRedirect",lo=new Map;class pT extends Lg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const s=await gT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gT(t,e){const n=vT(e),s=yT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function mT(t,e){lo.set(t._key(),e)}function yT(t){return rn(t._redirectPersistence)}function vT(t){return co(fT,t.config.apiKey,t.name)}async function _T(t,e,n=!1){const s=fr(t),r=cT(s,e),o=await new pT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const wT=10*60*1e3;class ET{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ug(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ug({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ug(t);default:return!1}}/**
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
 */async function TT(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
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
 */const bT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ST=/^https?/;async function CT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TT(t);for(const n of e)try{if(AT(n))return}catch{}Ut(t,"unauthorized-domain")}function AT(t){const e=Zc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ST.test(n))return!1;if(bT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const RT=new _i(3e4,6e4);function md(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kT(t){return new Promise((e,n)=>{var s,r,i;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{md(),n(Wt(t,"network-request-failed"))},timeout:RT.get()})}if(!((r=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=EI("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},Ig(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw uo=null,e})}let uo=null;function NT(t){return uo=uo||kT(t),uo}/**
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
 */const DT=new _i(5e3,15e3),OT="__/auth/iframe",PT="emulator/auth/iframe",xT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LT(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,PT):`https://${t.config.authDomain}/${OT}`,s={apiKey:e.apiKey,appName:t.name,v:ur},r=MT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${vi(s).slice(1)}`}async function UT(t){const e=await NT(t),n=Qt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:LT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},DT.get());function c(){Qt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const FT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$T=500,VT=600,BT="_blank",jT="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HT(t,e,n,s=$T,r=VT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},FT),{width:s.toString(),height:r.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=fg(l)?BT:n),dg(l)&&(e=e||jT,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(yI(l)&&a!=="_self")return qT(e||"",a),new yd(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new yd(h)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const KT="__/auth/handler",zT="emulator/auth/handler",GT=encodeURIComponent("fac");async function vd(t,e,n,s,r,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ur,eventId:r};if(e instanceof Sg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ei){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${GT}=${encodeURIComponent(c)}`:"";return`${WT(t)}?${vi(a).slice(1)}${l}`}function WT({config:t}){return t.emulator?ru(t,zT):`https://${t.authDomain}/${KT}`}/**
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
 */const gc="webStorageSupport";class QT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dg,this._completeRedirectFn=_T,this._overrideRedirectResult=mT}async _openPopup(e,n,s,r){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vd(e,n,s,Zc(),r);return HT(e,o,lu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await vd(e,n,s,Zc(),r);return JI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await UT(e),s=new ET(e);return n.register("authEvent",r=>(z(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gc,{type:gc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[gc];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vg()||ou()||ga()}}const YT=QT;var _d="@firebase/auth",wd="0.23.1";/**
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
 */class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZT(t){Ks(new cs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),z(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(t)},l=new CI(s,r,i,c);return RI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ks(new cs("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(s=>new XT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(_d,wd,JT(t)),Dn(_d,wd,"esm2017")}/**
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
 */const eb=5*60,tb=Jp("authIdTokenMaxAge")||eb;let Ed=null;const nb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>tb)return;const r=n==null?void 0:n.token;Ed!==r&&(Ed=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sb(t=ng()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AI(t,{popupRedirectResolver:YT,persistence:[aT,QI,Dg]}),s=Jp("authTokenSyncURL");if(s){const i=nb(s);qI(n,i,()=>i(n.currentUser)),HI(n,o=>i(o))}const r=Xp("auth");return r&&kI(n,`http://${r}`),n}ZT("Browser");var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,hu=hu||{},W=rb||self;function Mo(){}function va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ib(t){return Object.prototype.hasOwnProperty.call(t,mc)&&t[mc]||(t[mc]=++ob)}var mc="closure_uid_"+(1e9*Math.random()>>>0),ob=0;function ab(t,e,n){return t.call.apply(t.bind,arguments)}function cb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=ab:et=cb,et.apply(null,arguments)}function zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Bn(){this.s=this.s,this.o=this.o}var lb=0;Bn.prototype.s=!1;Bn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),lb!=0)&&ib(this)};Bn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function du(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Id(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(va(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var ub=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Mo,e),W.removeEventListener("test",Mo,e)}catch{}return t}();function Lo(t){return/^[\s\xa0]*$/.test(t)}var Td=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function yc(t,e){return t<e?-1:t>e?1:0}function _a(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return _a().indexOf(t)!=-1}function fu(t){return fu[" "](t),t}fu[" "]=Mo;function $g(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var hb=zt("Opera"),zs=zt("Trident")||zt("MSIE"),Vg=zt("Edge"),tl=Vg||zs,Bg=zt("Gecko")&&!(_a().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),db=_a().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function jg(){var t=W.document;return t?t.documentMode:void 0}var Uo;e:{var vc="",_c=function(){var t=_a();if(Bg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vg)return/Edge\/([\d\.]+)/.exec(t);if(zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(db)return/WebKit\/(\S+)/.exec(t);if(hb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_c&&(vc=_c?_c[1]:""),zs){var wc=jg();if(wc!=null&&wc>parseFloat(vc)){Uo=String(wc);break e}}Uo=vc}var fb={};function pb(){return $g(fb,9,function(){let t=0;const e=Td(String(Uo)).split("."),n=Td("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=yc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||yc(r[2].length==0,i[2].length==0)||yc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var nl;if(W.document&&zs){var bd=jg();nl=bd||parseInt(Uo,10)||void 0}else nl=void 0;var gb=nl;function ni(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bg){e:{try{fu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ni.$.h.call(this)}}Ve(ni,tt);var mb={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bi="closure_listenable_"+(1e6*Math.random()|0),yb=0;function vb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++yb,this.fa=this.ia=!1}function wa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Hg(t){const e={};for(const n in t)e[n]=t[n];return e}const Sd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Sd.length;i++)n=Sd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ea(t){this.src=t,this.g={},this.h=0}Ea.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=rl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new vb(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function sl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Fg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var gu="closure_lm_"+(1e6*Math.random()|0),Ec={};function Kg(t,e,n,s,r){if(s&&s.once)return Gg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kg(t,e[i],n,s,r);return null}return n=vu(n),t&&t[bi]?t.O(e,n,Ti(s)?!!s.capture:!!s,r):zg(t,e,n,!1,s,r)}function zg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ti(r)?!!r.capture:!!r,a=yu(t);if(a||(t[gu]=a=new Ea(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=_b(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ub||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Qg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _b(){function t(n){return e.call(t.src,t.listener,n)}const e=wb;return t}function Gg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gg(t,e[i],n,s,r);return null}return n=vu(n),t&&t[bi]?t.P(e,n,Ti(s)?!!s.capture:!!s,r):zg(t,e,n,!0,s,r)}function Wg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wg(t,e[i],n,s,r);else s=Ti(s)?!!s.capture:!!s,n=vu(n),t&&t[bi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=rl(i,n,s,r),-1<n&&(wa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=yu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rl(e,n,s,r)),(n=-1<t?e[t]:null)&&mu(n))}function mu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[bi])sl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Qg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=yu(e))?(sl(n,t),n.h==0&&(n.src=null,e[gu]=null)):wa(t)}}}function Qg(t){return t in Ec?Ec[t]:Ec[t]="on"+t}function wb(t,e){if(t.fa)t=!0;else{e=new ni(e,this);var n=t.listener,s=t.la||t.src;t.ia&&mu(t),t=n.call(s,e)}return t}function yu(t){return t=t[gu],t instanceof Ea?t:null}var Ic="__closure_events_fn_"+(1e9*Math.random()>>>0);function vu(t){return typeof t=="function"?t:(t[Ic]||(t[Ic]=function(e){return t.handleEvent(e)}),t[Ic])}function $e(){Bn.call(this),this.i=new Ea(this),this.S=this,this.J=null}Ve($e,Bn);$e.prototype[bi]=!0;$e.prototype.removeEventListener=function(t,e,n,s){Wg(this,t,e,n,s)};function qe(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var r=e;e=new tt(s,t),qg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Gi(o,s,!0,e)&&r}if(o=e.g=t,r=Gi(o,s,!0,e)&&r,r=Gi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Gi(o,s,!1,e)&&r}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)wa(n[s]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&sl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var _u=W.JSON.stringify;function Eb(){var t=Jg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ib{constructor(){this.h=this.g=null}add(e,n){const s=Yg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Yg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tb,t=>t.reset());class Tb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bb(t){W.setTimeout(()=>{throw t},0)}function Xg(t,e){il||Sb(),ol||(il(),ol=!0),Jg.add(t,e)}var il;function Sb(){var t=W.Promise.resolve(void 0);il=function(){t.then(Cb)}}var ol=!1,Jg=new Ib;function Cb(){for(var t;t=Eb();){try{t.h.call(t.g)}catch(n){bb(n)}var e=Yg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ol=!1}function Ia(t,e){$e.call(this),this.h=t||1,this.g=e||W,this.j=et(this.qb,this),this.l=Date.now()}Ve(Ia,$e);P=Ia.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(wu(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Ia.$.N.call(this),wu(this),delete this.g};function Eu(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Zg(t){t.g=Eu(()=>{t.g=null,t.i&&(t.i=!1,Zg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ab extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zg(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(t){Bn.call(this),this.h=t,this.g={}}Ve(si,Bn);var Cd=[];function em(t,e,n,s){Array.isArray(n)||(n&&(Cd[0]=n.toString()),n=Cd);for(var r=0;r<n.length;r++){var i=Kg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function tm(t){pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&mu(e)},t),t.g={}}si.prototype.N=function(){si.$.N.call(this),tm(this)};si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ta(){this.g=!0}Ta.prototype.Ea=function(){this.g=!1};function Rb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kb(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ks(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Db(t,n)+(s?" "+s:"")})}function Nb(t,e){t.info(function(){return"TIMEOUT: "+e})}Ta.prototype.info=function(){};function Db(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _u(n)}catch{return e}}var ms={},Ad=null;function ba(){return Ad=Ad||new $e}ms.Ta="serverreachability";function nm(t){tt.call(this,ms.Ta,t)}Ve(nm,tt);function ri(t){const e=ba();qe(e,new nm(e))}ms.STAT_EVENT="statevent";function sm(t,e){tt.call(this,ms.STAT_EVENT,t),this.stat=e}Ve(sm,tt);function ct(t){const e=ba();qe(e,new sm(e,t))}ms.Ua="timingevent";function rm(t,e){tt.call(this,ms.Ua,t),this.size=e}Ve(rm,tt);function Si(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Sa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},im={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Iu(){}Iu.prototype.h=null;function Rd(t){return t.h||(t.h=t.i())}function om(){}var Ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Tu(){tt.call(this,"d")}Ve(Tu,tt);function bu(){tt.call(this,"c")}Ve(bu,tt);var al;function Ca(){}Ve(Ca,Iu);Ca.prototype.g=function(){return new XMLHttpRequest};Ca.prototype.i=function(){return{}};al=new Ca;function Ai(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new si(this),this.P=Ob,t=tl?125:void 0,this.V=new Ia(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new am}function am(){this.i=null,this.g="",this.h=!1}var Ob=45e3,cl={},Fo={};P=Ai.prototype;P.setTimeout=function(t){this.P=t};function ll(t,e,n){t.L=1,t.v=Ra(hn(e)),t.s=n,t.S=!0,cm(t,null)}function cm(t,e){t.G=Date.now(),Ri(t),t.A=hn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),mm(n.i,"t",s),t.C=0,n=t.l.I,t.h=new am,t.g=Um(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ab(et(t.Pa,t,t.g),t.O)),em(t.U,t.g,"readystatechange",t.nb),e=t.I?Hg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ri(),Rb(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&on(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=on(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||tl||this.g&&(this.h.h||this.g.ja()||Od(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ri(3):ri(2)),Aa(this);var n=this.g.da();this.aa=n;t:if(lm(this)){var s=Od(this.g);t="";var r=s.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ts(this),Fr(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kb(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lo(a)){var l=a;break t}}l=null}if(n=l)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ul(this,n);else{this.i=!1,this.o=3,ct(12),ts(this),Fr(this);break e}}this.S?(um(this,u,o),tl&&this.i&&u==3&&(em(this.U,this.V,"tick",this.mb),this.V.start())):(ks(this.j,this.m,o,null),ul(this,o)),u==4&&ts(this),this.i&&!this.J&&(u==4?Pm(this.l,this):(this.i=!1,Ri(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),ts(this),Fr(this)}}}catch{}finally{}};function lm(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function um(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=Pb(t,n),r==Fo){e==4&&(t.o=4,ct(14),s=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(r==cl){t.o=4,ct(15),ks(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ks(t.j,t.m,r,null),ul(t,r);lm(t)&&r!=Fo&&r!=cl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Du(e),e.L=!0,ct(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),ts(t),Fr(t))}P.mb=function(){if(this.g){var t=on(this.g),e=this.g.ja();this.C<e.length&&(Aa(this),um(this,t,e),this.i&&t!=4&&Ri(this))}};function Pb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fo:(n=Number(e.substring(n,s)),isNaN(n)?cl:(s+=1,s+n>e.length?Fo:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,ts(this)};function Ri(t){t.Y=Date.now()+t.P,hm(t,t.P)}function hm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Si(et(t.lb,t),e)}function Aa(t){t.B&&(W.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Nb(this.j,this.A),this.L!=2&&(ri(),ct(17)),ts(this),this.o=2,Fr(this)):hm(this,this.Y-t)};function Fr(t){t.l.H==0||t.J||Pm(t.l,t)}function ts(t){Aa(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,wu(t.V),tm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ul(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hl(n.h,t))){if(!t.K&&hl(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Bo(n),Da(n);else break e;Nu(n),ct(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Si(et(n.ib,n),6e3));if(1>=_m(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ns(n,11)}else if((t.K||n.g==t)&&Bo(n),!Lo(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.h;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Su(i,i.h),i.h=null))}if(s.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,Te(s.G,s.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Lm(s,s.I?s.oa:null,s.Y),o.K){wm(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Aa(a),Ri(a)),s.g=o}else Dm(s);0<n.i.length&&Oa(n)}else l[0]!="stop"&&l[0]!="close"||ns(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ns(n,7):ku(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ri(4)}catch{}}function xb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(va(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Mb(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function dm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Mb(t),s=xb(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function as(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof as){this.h=e!==void 0?e:t.h,$o(this,t.j),this.s=t.s,this.g=t.g,Vo(this,t.m),this.l=t.l,e=t.i;var n=new ii;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kd(this,n),this.o=t.o}else t&&(n=String(t).match(fm))?(this.h=!!e,$o(this,n[1]||"",!0),this.s=Dr(n[2]||""),this.g=Dr(n[3]||"",!0),Vo(this,n[4]),this.l=Dr(n[5]||"",!0),kd(this,n[6]||"",!0),this.o=Dr(n[7]||"")):(this.h=!!e,this.i=new ii(null,this.h))}as.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Or(e,Nd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Or(e,Nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Or(n,n.charAt(0)=="/"?$b:Fb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Or(n,Bb)),t.join("")};function hn(t){return new as(t)}function $o(t,e,n){t.j=n?Dr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kd(t,e,n){e instanceof ii?(t.i=e,jb(t.i,t.h)):(n||(e=Or(e,Vb)),t.i=new ii(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function Ra(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ub),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ub(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nd=/[#\/\?@]/g,Fb=/[#\?:]/g,$b=/[#\?]/g,Vb=/[#\?@]/g,Bb=/#/g;function ii(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jn(t){t.g||(t.g=new Map,t.h=0,t.i&&Lb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=ii.prototype;P.add=function(t,e){jn(this),this.i=null,t=gr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pm(t,e){jn(t),e=gr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gm(t,e){return jn(t),e=gr(t,e),t.g.has(e)}P.forEach=function(t,e){jn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};P.sa=function(){jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};P.Z=function(t){jn(this);let e=[];if(typeof t=="string")gm(this,t)&&(e=e.concat(this.g.get(gr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return jn(this),this.i=null,t=gr(this,t),gm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function mm(t,e,n){pm(t,e),0<n.length&&(t.i=null,t.g.set(gr(t,e),du(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function gr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jb(t,e){e&&!t.j&&(jn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(pm(this,s),mm(this,r,n))},t)),t.j=e}var Hb=class{constructor(t,e){this.h=t,this.g=e}};function ym(t){this.l=t||qb,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qb=10;function vm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _m(t){return t.h?1:t.g?t.g.size:0}function hl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Su(t,e){t.g?t.g.add(e):t.h=e}function wm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ym.prototype.cancel=function(){if(this.i=Em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Em(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return du(t.i)}function Cu(){}Cu.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};Cu.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function Kb(){this.g=new Cu}function zb(t,e,n){const s=n||"";try{dm(t,function(r,i){let o=r;Ti(r)&&(o=_u(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Gb(t,e){const n=new Ta;if(W.Image){const s=new Image;s.onload=zi(Wi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zi(Wi,n,s,"TestLoadImage: error",!1,e),s.onabort=zi(Wi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zi(Wi,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Wi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ki(t){this.l=t.fc||null,this.j=t.ob||!1}Ve(ki,Iu);ki.prototype.g=function(){return new ka(this.l,this.j)};ki.prototype.i=function(t){return function(){return t}}({});function ka(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(ka,$e);var Au=0;P=ka.prototype;P.open=function(t,e){if(this.readyState!=Au)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oi(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=Au};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Im(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Im(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):oi(this),this.readyState==3&&Im(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};P.Ya=function(t){this.g&&(this.response=t,Ni(this))};P.ka=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oi(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Wb=W.JSON.parse;function Ae(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tm,this.L=this.M=!1}Ve(Ae,$e);var Tm="",Qb=/^https?$/i,Yb=["POST","PUT"];P=Ae.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():al.g(),this.C=this.u?Rd(this.u):Rd(al),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Dd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=Fg(Yb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cm(this),0<this.B&&((this.L=Xb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Eu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dd(this,i)}};function Xb(t){return zs&&pb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof hu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Dd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bm(t),Na(t)}function bm(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Na(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Na(this,!0)),Ae.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Sm(this):this.kb())};P.kb=function(){Sm(this)};function Sm(t){if(t.h&&typeof hu<"u"&&(!t.C[1]||on(t)!=4||t.da()!=2)){if(t.v&&on(t)==4)Eu(t.La,0,t);else if(qe(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(fm)[1]||null;if(!r&&W.self&&W.self.location){var i=W.self.location.protocol;r=i.substr(0,i.length-1)}s=!Qb.test(r?r.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",bm(t)}}finally{Na(t)}}}}function Na(t,e){if(t.g){Cm(t);const n=t.g,s=t.C[0]?Mo:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function Cm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wb(e)}};function Od(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Tm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Am(t){let e="";return pu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ru(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Am(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rm(t){this.Ga=0,this.i=[],this.j=new Ta,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sr("baseRetryDelayMs",5e3,t),this.hb=Sr("retryDelaySeedMs",1e4,t),this.eb=Sr("forwardChannelMaxRetries",2,t),this.xa=Sr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new ym(t&&t.concurrentRequestLimit),this.Ja=new Kb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=Rm.prototype;P.qa=8;P.H=1;function ku(t){if(km(t),t.H==3){var e=t.W++,n=hn(t.G);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),Di(t,n),e=new Ai(t,t.j,e,void 0),e.L=2,e.v=Ra(hn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Um(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ri(e)}Mm(t)}function Da(t){t.g&&(Du(t),t.g.cancel(),t.g=null)}function km(t){Da(t),t.u&&(W.clearTimeout(t.u),t.u=null),Bo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Oa(t){vm(t.h)||t.m||(t.m=!0,Xg(t.Na,t),t.C=0)}function Jb(t,e){return _m(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Si(et(t.Na,t,e),xm(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ai(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Hg(i),qg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nm(this,r,e),n=hn(this.G),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),Di(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Am(i)))+"&"+e:this.o&&Ru(n,this.o,i)),Su(this.h,r),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),r.ba=!0,ll(r,n,null)):ll(r,n,e),this.H=2}}else this.H==3&&(t?Pd(this,t):this.i.length==0||vm(this.h)||Pd(this))};function Pd(t,e){var n;e?n=e.m:n=t.W++;const s=hn(t.G);Te(s,"SID",t.J),Te(s,"RID",n),Te(s,"AID",t.V),Di(t,s),t.o&&t.s&&Ru(s,t.o,t.s),n=new Ai(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Nm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Su(t.h,n),ll(n,s,e)}function Di(t,e){t.ma&&pu(t.ma,function(n,s){Te(e,s,n)}),t.l&&dm({},function(n,s){Te(e,s,n)})}function Nm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?et(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{zb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Dm(t){t.g||t.u||(t.ba=1,Xg(t.Ma,t),t.A=0)}function Nu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Si(et(t.Ma,t),xm(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Om(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Si(et(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ct(10),Da(this),Om(this))};function Du(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Om(t){t.g=new Ai(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=hn(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.M?"0":"1"),Te(e,"AID",t.V),Te(e,"TYPE","xmlhttp"),Di(t,e),t.o&&t.s&&Ru(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ra(hn(e)),n.s=null,n.S=!0,cm(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Da(this),Nu(this),ct(19))};function Bo(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Pm(t,e){var n=null;if(t.g==e){Bo(t),Du(t),t.g=null;var s=2}else if(hl(t.h,e))n=e.F,wm(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=ba(),qe(s,new rm(s,n)),Oa(t)}else Dm(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&Jb(t,e)||s==2&&Nu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ns(t,5);break;case 4:ns(t,10);break;case 3:ns(t,6);break;default:ns(t,2)}}}function xm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function ns(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=et(t.pb,t);n||(n=new as("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||$o(n,"https"),Ra(n)),Gb(n.toString(),s)}else ct(2);t.H=0,t.l&&t.l.za(e),Mm(t),km(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Mm(t){if(t.H=0,t.pa=[],t.l){const e=Em(t.h);(e.length!=0||t.i.length!=0)&&(Id(t.pa,e),Id(t.pa,t.i),t.h.i.length=0,du(t.i),t.i.length=0),t.l.ya()}}function Lm(t,e,n){var s=n instanceof as?hn(n):new as(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Vo(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new as(null,void 0);s&&$o(i,s),e&&(i.g=e),r&&Vo(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Te(s,n,e),Te(s,"VER",t.qa),Di(t,s),s}function Um(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new ki({ob:!0})):new Ae(t.va),e.Oa(t.I),e}function Fm(){}P=Fm.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function jo(){if(zs&&!(10<=Number(gb)))throw Error("Environmental error: no available transport.")}jo.prototype.g=function(t,e){return new Et(t,e)};function Et(t,e){$e.call(this),this.g=new Rm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mr(this)}Ve(Et,$e);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Lm(t,null,t.Y),Oa(t)};Et.prototype.close=function(){ku(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_u(t),t=n);e.i.push(new Hb(e.fb++,t)),e.H==3&&Oa(e)};Et.prototype.N=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,Et.$.N.call(this)};function $m(t){Tu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve($m,Tu);function Vm(){bu.call(this),this.status=1}Ve(Vm,bu);function mr(t){this.g=t}Ve(mr,Fm);mr.prototype.Ba=function(){qe(this.g,"a")};mr.prototype.Aa=function(t){qe(this.g,new $m(t))};mr.prototype.za=function(t){qe(this.g,new Vm)};mr.prototype.ya=function(){qe(this.g,"b")};function Zb(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ve(Ft,Zb);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Tc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Tc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Tc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Tc(this,s),r=0;break}}this.h=r,this.i+=e};Ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function de(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var eS={};function Ou(t){return-128<=t&&128>t?$g(eS,t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Gt(t){if(isNaN(t)||!isFinite(t))return Fs;if(0>t)return He(Gt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=dl;return new de(e,0)}function Bm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(Bm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gt(Math.pow(e,8)),s=Fs,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Gt(Math.pow(e,i)),s=s.R(i).add(Gt(o))):(s=s.R(n),s=s.add(Gt(o)))}return s}var dl=4294967296,Fs=Ou(0),fl=Ou(1),xd=Ou(16777216);P=de.prototype;P.ea=function(){if(Tt(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:dl+s)*e,e*=dl}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(an(this))return"0";if(Tt(this))return"-"+He(this).toString(t);for(var e=Gt(Math.pow(t,6)),n=this,s="";;){var r=qo(n,e).g;n=Ho(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,an(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function an(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}P.X=function(t){return t=Ho(this,t),Tt(t)?-1:an(t)?0:1};function He(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new de(n,~t.h).add(fl)}P.abs=function(){return Tt(this)?He(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Ho(t,e){return t.add(He(e))}P.R=function(t){if(an(this)||an(t))return Fs;if(Tt(this))return Tt(t)?He(this).R(He(t)):He(He(this).R(t));if(Tt(t))return He(this.R(He(t)));if(0>this.X(xd)&&0>t.X(xd))return Gt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Qi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Qi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Qi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Qi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new de(n,0)};function Qi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Cr(t,e){this.g=t,this.h=e}function qo(t,e){if(an(e))throw Error("division by zero");if(an(t))return new Cr(Fs,Fs);if(Tt(t))return e=qo(He(t),e),new Cr(He(e.g),He(e.h));if(Tt(e))return e=qo(t,He(e)),new Cr(He(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fl,s=e;0>=s.X(t);)n=Md(n),s=Md(s);var r=Ts(n,1),i=Ts(s,1);for(s=Ts(s,2),n=Ts(n,2);!an(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ts(s,1),n=Ts(n,1)}return e=Ho(t,r.R(e)),new Cr(r,e)}for(r=Fs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Gt(n),o=i.R(e);Tt(o)||0<o.X(t);)n-=s,i=Gt(n),o=i.R(e);an(i)&&(i=fl),r=r.add(i),t=Ho(t,o)}return new Cr(r,t)}P.gb=function(t){return qo(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new de(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new de(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new de(n,this.h^t.h)};function Md(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new de(n,t.h)}function Ts(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(r,t.h)}jo.prototype.createWebChannel=jo.prototype.g;Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;Sa.NO_ERROR=0;Sa.TIMEOUT=8;Sa.HTTP_ERROR=6;im.COMPLETE="complete";om.EventType=Ci;Ci.OPEN="a";Ci.CLOSE="b";Ci.ERROR="c";Ci.MESSAGE="d";$e.prototype.listen=$e.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Gt;de.fromString=Bm;var tS=function(){return new jo},nS=function(){return ba()},bc=Sa,sS=im,rS=ms,Ld={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},iS=ki,Yi=om,oS=Ae,aS=Ft,$s=de;const Ud="@firebase/firestore";/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let yr="9.21.0";/**
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
 */const ds=new Zl("@firebase/firestore");function Fd(){return ds.logLevel}function V(t,...e){if(ds.logLevel<=ce.DEBUG){const n=e.map(Pu);ds.debug(`Firestore (${yr}): ${t}`,...n)}}function dn(t,...e){if(ds.logLevel<=ce.ERROR){const n=e.map(Pu);ds.error(`Firestore (${yr}): ${t}`,...n)}}function Gs(t,...e){if(ds.logLevel<=ce.WARN){const n=e.map(Pu);ds.warn(`Firestore (${yr}): ${t}`,...n)}}function Pu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+t;throw dn(e),new Error(e)}function Ie(t,e){t||G()}function Z(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class lS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uS{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ie(typeof s.accessToken=="string"),new jm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new We(e)}}class hS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=We.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class dS{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new hS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new fS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Hm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=gS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Me(0,0))}static max(){return new Y(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ai{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ai{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const mS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends ai{construct(e,n,s){return new Je(e,n,s)}static isValidIdentifier(e){return mS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ee.fromString(e))}static fromName(e){return new j(Ee.fromString(e).popFirst(5))}static empty(){return new j(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ee(e.slice()))}}function yS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new Fn(r,j.empty(),e)}function vS(t){return new Fn(t.readTime,t.key,-1)}class Fn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fn(Y.min(),j.empty(),-1)}static max(){return new Fn(Y.max(),j.empty(),-1)}}function _S(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const wS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ES{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==wS)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Pi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}xu.ct=-1;function Pa(t){return t==null}function Ko(t){return t===0&&1/t==-1/0}function IS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Be.RED,this.left=r??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Be(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vd(this.data.getIterator())}getIteratorFrom(e){return new Vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new nt(Je.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Km extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Km("Invalid base64 string: "+r):r}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const TS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=TS.exec(t);if(Ie(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lu(t){const e=t.mapValue.fields.__previous_value__;return Mu(e)?Lu(e):e}function ci(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class bS{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mu(t)?4:SS(t)?9007199254740991:10:G()}function Zt(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$n(s.timestampValue),o=$n(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return fs(s.bytesValue).isEqual(fs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Oe(s.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Oe(s.integerValue)===Oe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Oe(s.doubleValue),o=Oe(r.doubleValue);return i===o?Ko(i)===Ko(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if($d(i)!==$d(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Zt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function ui(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Qs(t,e){if(t===e)return 0;const n=ps(t),s=ps(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Oe(r.integerValue||r.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bd(t.timestampValue,e.timestampValue);case 4:return Bd(ci(t),ci(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=fs(r),a=fs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Oe(r.latitude),Oe(i.latitude));return o!==0?o:ue(Oe(r.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Qs(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ji.mapValue&&i===Ji.mapValue)return 0;if(r===Ji.mapValue)return 1;if(i===Ji.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=Qs(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Bd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=$n(t),s=$n(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Ys(t){return pl(t)}function pl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$n(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=pl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${pl(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function jd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gl(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function Hd(t){return!!t&&"nullValue"in t}function qd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function $r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=$r(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$r(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(n)}setAll(e){let n=Je.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=$r(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ho(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){vr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt($r(this.value))}}function zm(t){const e=[];return vr(t.fields,(n,s)=>{const r=new Je([n]);if(ho(s)){const i=zm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Pt(e)}/**
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
 */class Qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,Y.min(),Y.min(),Y.min(),bt.empty(),0)}static newFoundDocument(e,n,s,r){return new Qe(e,1,n,Y.min(),s,r,0)}static newNoDocument(e,n){return new Qe(e,2,n,Y.min(),Y.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,Y.min(),Y.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zo{constructor(e,n){this.position=e,this.inclusive=n}}function Kd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Qs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function zd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function CS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Gm{}class Pe extends Gm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new RS(e,n,s):n==="array-contains"?new DS(e,s):n==="in"?new OS(e,s):n==="not-in"?new PS(e,s):n==="array-contains-any"?new xS(e,s):new Pe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new kS(e,s):new NS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qs(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $t extends Gm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new $t(e,n)}matches(e){return Wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Wm(t){return t.op==="and"}function Qm(t){return AS(t)&&Wm(t)}function AS(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function ml(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(Qm(t))return t.filters.map(e=>ml(e)).join(",");{const e=t.filters.map(n=>ml(n)).join(",");return`${t.op}(${e})`}}function Ym(t,e){return t instanceof Pe?function(n,s){return s instanceof Pe&&n.op===s.op&&n.field.isEqual(s.field)&&Zt(n.value,s.value)}(t,e):t instanceof $t?function(n,s){return s instanceof $t&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ym(i,s.filters[o]),!0):!1}(t,e):void G()}function Xm(t){return t instanceof Pe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ys(e.value)}`}(t):t instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(Xm).join(" ,")+"}"}(t):"Filter"}class RS extends Pe{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class kS extends Pe{constructor(e,n){super(e,"in",n),this.keys=Jm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NS extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Jm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class DS extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&ui(n.arrayValue,this.value)}}class OS extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class PS extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ui(this.value.arrayValue,n)}}class xS extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ui(this.value.arrayValue,s))}}/**
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
 */class MS{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Gd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new MS(t,e,n,s,r,i,o)}function Fu(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ml(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ys(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ys(s)).join(",")),e.ft=n}return e.ft}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ym(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zd(t.startAt,e.startAt)&&zd(t.endAt,e.endAt)}function yl(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _r{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function LS(t,e,n,s,r,i,o,a){return new _r(t,e,n,s,r,i,o,a)}function Zm(t){return new _r(t)}function Wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function xa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ey(t){return t.collectionGroup!==null}function Bs(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=xa(e),s=Vu(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Vs(n)),e.dt.push(new Vs(Je.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Vs(Je.keyField(),i))}}}return e.dt}function fn(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=Gd(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vs(i.field,o))}const s=e.endAt?new zo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new zo(e.startAt.position,e.startAt.inclusive):null;e._t=Gd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function vl(t,e){e.getFirstInequalityField(),xa(t);const n=t.filters.concat([e]);return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Go(t,e,n){return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ma(t,e){return $u(fn(t),fn(e))&&t.limitType===e.limitType}function ty(t){return`${Fu(fn(t))}|lt:${t.limitType}`}function _l(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Xm(s)).join(", ")}]`),Pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ys(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ys(s)).join(",")),`Target(${n})`}(fn(t))}; limitType=${t.limitType})`}function La(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Bs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Kd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Bs(n),s)||n.endAt&&!function(r,i,o){const a=Kd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Bs(n),s))}(t,e)}function US(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ny(t){return(e,n)=>{let s=!1;for(const r of Bs(t)){const i=FS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function FS(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Qs(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
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
 */class wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return qm(this.inner)}size(){return this.innerSize}}/**
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
 */const $S=new Ce(j.comparator);function pn(){return $S}const sy=new Ce(j.comparator);function Pr(...t){let e=sy;for(const n of t)e=e.insert(n.key,n);return e}function ry(t){let e=sy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ss(){return Vr()}function iy(){return Vr()}function Vr(){return new wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const VS=new Ce(j.comparator),BS=new nt(j.comparator);function se(...t){let e=BS;for(const n of t)e=e.add(n);return e}const jS=new nt(ue);function HS(){return jS}/**
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
 */function oy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ko(e)?"-0":e}}function ay(t){return{integerValue:""+t}}function qS(t,e){return IS(e)?ay(e):oy(t,e)}/**
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
 */class Ua{constructor(){this._=void 0}}function KS(t,e,n){return t instanceof Wo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Mu(r)&&(r=Lu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof hi?ly(t,e):t instanceof di?uy(t,e):function(s,r){const i=cy(s,r),o=Qd(i)+Qd(s.wt);return gl(i)&&gl(s.wt)?ay(o):oy(s.serializer,o)}(t,e)}function zS(t,e,n){return t instanceof hi?ly(t,e):t instanceof di?uy(t,e):n}function cy(t,e){return t instanceof Qo?gl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Wo extends Ua{}class hi extends Ua{constructor(e){super(),this.elements=e}}function ly(t,e){const n=hy(e);for(const s of t.elements)n.some(r=>Zt(r,s))||n.push(s);return{arrayValue:{values:n}}}class di extends Ua{constructor(e){super(),this.elements=e}}function uy(t,e){let n=hy(e);for(const s of t.elements)n=n.filter(r=>!Zt(r,s));return{arrayValue:{values:n}}}class Qo extends Ua{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Qd(t){return Oe(t.integerValue||t.doubleValue)}function hy(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof hi&&s instanceof hi||n instanceof di&&s instanceof di?Ws(n.elements,s.elements,Zt):n instanceof Qo&&s instanceof Qo?Zt(n.wt,s.wt):n instanceof Wo&&s instanceof Wo}(t.transform,e.transform)}class WS{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fa{}function dy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bu(t.key,Yt.none()):new xi(t.key,t.data,Yt.none());{const n=t.data,s=bt.empty();let r=new nt(Je.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ys(t.key,s,new Pt(r.toArray()),Yt.none())}}function QS(t,e,n){t instanceof xi?function(s,r,i){const o=s.value.clone(),a=Xd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ys?function(s,r,i){if(!fo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Xd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fy(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Br(t,e,n,s){return t instanceof xi?function(r,i,o,a){if(!fo(r.precondition,i))return o;const c=r.value.clone(),l=Jd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ys?function(r,i,o,a){if(!fo(r.precondition,i))return o;const c=Jd(r.fieldTransforms,a,i),l=i.data;return l.setAll(fy(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return fo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function YS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=cy(s.transform,r||null);i!=null&&(n===null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function Yd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ws(n,s,(r,i)=>GS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xi extends Fa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ys extends Fa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Xd(t,e,n){const s=new Map;Ie(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,zS(o,a,n[r]))}return s}function Jd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,KS(i,o,e))}return s}class Bu extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XS extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&QS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=iy();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=dy(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,s)=>Yd(n,s))&&Ws(this.baseMutations,e.baseMutations,(n,s)=>Yd(n,s))}}class ju{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ie(e.mutations.length===s.length);let r=VS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ju(e,n,s,r)}}/**
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
 */class ZS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,re;function tC(t){switch(t){default:return G();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function py(t){if(t===void 0)return dn("GRPC error has no .code"),E.UNKNOWN;switch(t){case De.OK:return E.OK;case De.CANCELLED:return E.CANCELLED;case De.UNKNOWN:return E.UNKNOWN;case De.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case De.INTERNAL:return E.INTERNAL;case De.UNAVAILABLE:return E.UNAVAILABLE;case De.UNAUTHENTICATED:return E.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case De.NOT_FOUND:return E.NOT_FOUND;case De.ALREADY_EXISTS:return E.ALREADY_EXISTS;case De.PERMISSION_DENIED:return E.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case De.ABORTED:return E.ABORTED;case De.OUT_OF_RANGE:return E.OUT_OF_RANGE;case De.UNIMPLEMENTED:return E.UNIMPLEMENTED;case De.DATA_LOSS:return E.DATA_LOSS;default:return G()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zi}static getOrCreateInstance(){return Zi===null&&(Zi=new Hu),Zi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Zi=null;/**
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
 */function nC(){return new TextEncoder}/**
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
 */const sC=new $s([4294967295,4294967295],0);function Zd(t){const e=nC().encode(t),n=new aS;return n.update(e),new Uint8Array(n.digest())}function ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $s([n,s],0),new $s([r,i],0)]}class qu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new xr(`Invalid padding: ${n}`);if(s<0)throw new xr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new xr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=$s.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply($s.fromNumber(s)));return r.compare(sC)===1&&(r=new $s([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Zd(e),[s,r]=ef(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Zd(e),[s,r]=ef(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class xr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $a{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new $a(Y.min(),r,new Ce(ue),pn(),se())}}class Mi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Mi(s,n,se(),se(),se())}}/**
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
 */class po{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class gy{constructor(e,n){this.targetId=e,this.bt=n}}class my{constructor(e,n,s=it.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class tf{constructor(){this.Vt=0,this.St=sf(),this.Dt=it.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=se(),n=se(),s=se();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new Mi(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=sf()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class rC{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=pn(),this.jt=nf(),this.zt=new Ce(ue)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(yl(o))if(r===0){const a=new j(o.path);this.Jt(s,a,Qe.newNoDocument(a,Y.min()))}else Ie(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=Hu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,_,v,k,C;const U={localCacheCount:u,existenceFilterCount:h.count},D=h.unchangedNames;return D&&(U.bloomFilter={applied:l===0,hashCount:(d=D==null?void 0:D.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(_=(g=D==null?void 0:D.bits)===null||g===void 0?void 0:g.bitmap)===null||_===void 0?void 0:_.length)!==null&&v!==void 0?v:0,padding:(C=(k=D==null?void 0:D.bits)===null||k===void 0?void 0:k.padding)!==null&&C!==void 0?C:0}),U}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=fs(i).toUint8Array()}catch(u){if(u instanceof Km)return Gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new qu(c,o,a)}catch(u){return Gs(u instanceof xr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&yl(a.target)){const c=new j(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,Qe.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=se();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new $a(e,n,this.zt,this.Qt,s);return this.Qt=pn(),this.jt=nf(),this.zt=new Ce(ue),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new tf,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new nt(ue),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new tf),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function nf(){return new Ce(j.comparator)}function sf(){return new Ce(j.comparator)}const iC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),oC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aC=(()=>({and:"AND",or:"OR"}))();class cC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wl(t,e){return t.useProto3Json||Pa(e)?e:{value:e}}function Yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lC(t,e){return Yo(t,e.toTimestamp())}function Xt(t){return Ie(!!t),Y.fromTimestamp(function(e){const n=$n(e);return new Me(n.seconds,n.nanos)}(t))}function Ku(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vy(t){const e=Ee.fromString(t);return Ie(Iy(e)),e}function El(t,e){return Ku(t.databaseId,e.path)}function Sc(t,e){const n=vy(e);if(n.get(1)!==t.databaseId.projectId)throw new F(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(_y(n))}function Il(t,e){return Ku(t.databaseId,e)}function uC(t){const e=vy(t);return e.length===4?Ee.emptyPath():_y(e)}function Tl(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _y(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rf(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function hC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ie(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(Ie(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:py(c.code);return new F(l,c.message||"")}(o);n=new my(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Sc(t,s.document.name),i=Xt(s.document.updateTime),o=s.document.createTime?Xt(s.document.createTime):Y.min(),a=new bt({mapValue:{fields:s.document.fields}}),c=Qe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new po(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Sc(t,s.document),i=s.readTime?Xt(s.readTime):Y.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Sc(t,s.document),i=s.removedTargetIds||[];n=new po([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new eC(r,i),a=s.targetId;n=new gy(a,o)}}return n}function dC(t,e){let n;if(e instanceof xi)n={update:rf(t,e.key,e.value)};else if(e instanceof Bu)n={delete:El(t,e.key)};else if(e instanceof ys)n={update:rf(t,e.key,e.data),updateMask:EC(e.fieldMask)};else{if(!(e instanceof XS))return G();n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Wo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof di)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qo)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:lC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function fC(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Xt(s.updateTime):Xt(r);return i.isEqual(Y.min())&&(i=Xt(r)),new WS(i,s.transformResults||[])}(n,e))):[]}function pC(t,e){return{documents:[Il(t,e.path)]}}function gC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Il(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Il(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ey($t.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ss(u.field),direction:vC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=wl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mC(t){let e=uC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ie(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=wy(u);return h instanceof $t&&Qm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Vs(Cs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new zo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new zo(d,h)}(n.endAt)),LS(e,r,o,i,a,"F",c,l)}function yC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cs(e.unaryFilter.field);return Pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(e.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cs(e.unaryFilter.field);return Pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cs(e.unaryFilter.field);return Pe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return Pe.create(Cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(n=>wy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function vC(t){return iC[t]}function _C(t){return oC[t]}function wC(t){return aC[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Cs(t){return Je.fromServerFormat(t.fieldPath)}function Ey(t){return t instanceof Pe?function(e){if(e.op==="=="){if(qd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NAN"}};if(Hd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NAN"}};if(Hd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(e.field),op:_C(e.op),value:e.value}}}(t):t instanceof $t?function(e){const n=e.getFilters().map(s=>Ey(s));return n.length===1?n[0]:{compositeFilter:{op:wC(e.op),filters:n}}}(t):G()}function EC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Iy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Cn{constructor(e,n,s,r,i=Y.min(),o=Y.min(),a=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IC{constructor(e){this.le=e}}function TC(t){const e=mC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Go(e,e.limit,"L"):e}/**
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
 */class bC{constructor(){this.sn=new SC}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Fn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class SC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new nt(Ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new nt(Ee.comparator)).toArray()}}/**
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
 */class Xs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Xs(0)}static kn(){return new Xs(-1)}}/**
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
 */class CC{constructor(){this.changes=new wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Br(s.mutation,r,Pt.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=ss();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Pr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ss();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=pn();const o=Vr(),a=Vr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ys)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Br(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new AC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Vr();let r=new Ce((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Pt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=iy();u.forEach(d=>{if(!i.has(d)){const g=dy(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ey(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(ss());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:ry(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=Pr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Pr();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new _r(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=Pr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Br(l.mutation,c,Pt.empty(),Me.now()),La(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class kC{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return S.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:Xt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:TC(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class NC{constructor(){this.overlays=new Ce(j.comparator),this.hs=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ss();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=ss(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ss(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ss(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ZS(n,s));let i=this.hs.get(n);i===void 0&&(i=se(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
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
 */class zu{constructor(){this.ls=new nt(Ue.fs),this.ds=new nt(Ue._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Ue(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new j(new Ee([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new j(new Ee([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=se();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return j.comparator(e.key,n.key)||ue(e.Es,n.Es)}static _s(e,n){return ue(e.Es,n.Es)||j.comparator(e.key,n.key)}}/**
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
 */class DC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new nt(Ue.fs)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new nt(ue);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),S.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new j(i),0);let a=new nt(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),S.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ie(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return S.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Ue(n,0),r=this.Rs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OC{constructor(e){this.Ss=e,this.docs=new Ce(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=pn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=pn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||_S(vS(u),s)<=0||(r.has(u.key)||La(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){G()}Ds(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new PC(this)}getSize(e){return S.resolve(this.size)}}class PC extends CC{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class xC{constructor(e){this.persistence=e,this.Cs=new wr(n=>Fu(n),$u),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.xs=0,this.Ns=new zu,this.targetCount=0,this.ks=Xs.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),S.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Xs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.$n(n),S.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ns.containsKey(n))}}/**
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
 */class MC{constructor(e,n){this.Ms={},this.overlays={},this.Os=new xu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new xC(this),this.indexManager=new bC,this.remoteDocumentCache=function(s){return new OC(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new IC(n),this.Ls=new kC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new DC(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new LC(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return S.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class LC extends ES{constructor(e){super(),this.currentSequenceNumber=e}}class Gu{constructor(e){this.persistence=e,this.Gs=new zu,this.Qs=null}static js(e){return new Gu(e)}get zs(){if(this.Qs)return this.Qs;throw G()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),S.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.zs,s=>{const r=j.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,Y.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return S.or([()=>S.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Wu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wu(e,n.fromCache,s,r)}}/**
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
 */class UC{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(Wd(n))return S.resolve(null);let s=fn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Go(n,null,"F"),s=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,Go(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return Wd(n)||r.isEqual(Y.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(Fd()<=ce.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_l(n)),this.zi(e,o,n,yS(r,-1)))})}Qi(e,n){let s=new nt(ny(e));return n.forEach((r,i)=>{La(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return Fd()<=ce.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",_l(n)),this.qi.getDocumentsMatchingQuery(e,n,Fn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class FC{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new Ce(ue),this.Ji=new wr(i=>Fu(i),$u),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RC(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function $C(t,e,n,s){return new FC(t,e,n,s)}async function Ty(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function VC(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(_=>{const v=c.docVersions.get(g);Ie(v!==null),_.version.compareTo(v)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function by(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function BC(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(it.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(_,v,k){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,u)&&a.push(n.Fs.updateTargetData(i,g))});let c=pn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(jC(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(Y.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function jC(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=pn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function HC(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function qC(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Cn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function bl(t,e,n){const s=Z(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Pi(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function of(t,e,n){const s=Z(t);let r=Y.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Ji.get(l);return h!==void 0?S.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:Y.min(),n?i:se())).next(a=>(KC(s,US(e),a),{documents:a,sr:i})))}function KC(t,e,n){let s=t.Yi.get(e)||Y.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class af{constructor(){this.activeTargetIds=HS()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zC{constructor(){this.Wr=new af,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new af,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GC{Jr(e){}shutdown(){}}/**
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
 */class cf{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eo=null;function Cc(){return eo===null?eo=268435456+Math.round(2147483648*Math.random()):eo++,"0x"+eo.toString(16)}/**
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
 */const WC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class QC{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const Ge="WebChannelConnection";class YC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=Cc(),a=this.Io(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>(V("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Gs("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+yr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=WC[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=Cc();return new Promise((o,a)=>{const c=new oS;c.setWithCredentials(!0),c.listenOnce(sS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case bc.NO_ERROR:const u=c.getResponseJson();V(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case bc.TIMEOUT:V(Ge,`RPC '${e}' ${i} timed out`),a(new F(E.DEADLINE_EXCEEDED,"Request time out"));break;case bc.HTTP_ERROR:const h=c.getStatus();if(V(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(v){const k=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(k)>=0?k:E.UNKNOWN}(g.status);a(new F(_,g.message))}else a(new F(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(E.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{V(Ge,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);V(Ge,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Cc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tS(),a=nS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new iS({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");V(Ge,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new QC({io:v=>{d?V(Ge,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(V(Ge,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),V(Ge,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},ro:()=>u.close()}),_=(v,k,C)=>{v.listen(k,U=>{try{C(U)}catch(D){setTimeout(()=>{throw D},0)}})};return _(u,Yi.EventType.OPEN,()=>{d||V(Ge,`RPC '${e}' stream ${r} transport opened.`)}),_(u,Yi.EventType.CLOSE,()=>{d||(d=!0,V(Ge,`RPC '${e}' stream ${r} transport closed`),g.fo())}),_(u,Yi.EventType.ERROR,v=>{d||(d=!0,Gs(Ge,`RPC '${e}' stream ${r} transport errored:`,v),g.fo(new F(E.UNAVAILABLE,"The operation could not be completed")))}),_(u,Yi.EventType.MESSAGE,v=>{var k;if(!d){const C=v.data[0];Ie(!!C);const U=C,D=U.error||((k=U[0])===null||k===void 0?void 0:k.error);if(D){V(Ge,`RPC '${e}' stream ${r} received error:`,D);const X=D.status;let ie=function(xe){const J=De[xe];if(J!==void 0)return py(J)}(X),be=D.message;ie===void 0&&(ie=E.INTERNAL,be="Unknown error status: "+X+" with message "+D.message),d=!0,g.fo(new F(ie,be)),u.close()}else V(Ge,`RPC '${e}' stream ${r} received:`,C),g._o(C)}}),_(a,rS.STAT_EVENT,v=>{v.stat===Ld.PROXY?V(Ge,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Ld.NOPROXY&&V(Ge,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Ac(){return typeof document<"u"?document:null}/**
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
 */function Va(t){return new cC(t,!0)}/**
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
 */class Sy{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class Cy{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Sy(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new F(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XC extends Cy{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=hC(this.serializer,e),s=function(r){if(!("targetChange"in r))return Y.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?Xt(i.readTime):Y.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Tl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=yl(a)?{documents:pC(r,a)}:{query:gC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=yy(r,i.resumeToken);const c=wl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(Y.min())>0){o.readTime=Yo(r,i.snapshotVersion.toTimestamp());const c=wl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=yC(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Tl(this.serializer),n.removeTarget=e,this.zo(n)}}class JC extends Cy{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=fC(e.writeResults,e.commitTime),s=Xt(e.commitTime);return this.listener.uu(s,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Tl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>dC(this.serializer,s))};this.zo(n)}}/**
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
 */class ZC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new F(E.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(E.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(E.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class e1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(dn(n),this.wu=!1):V("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class t1{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{vs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c.Au.add(4),await Li(c),c.Pu.set("Unknown"),c.Au.delete(4),await Ba(c)}(this))})}),this.Pu=new e1(s,r)}}async function Ba(t){if(vs(t))for(const e of t.Ru)await e(!0)}async function Li(t){for(const e of t.Ru)await e(!1)}function Ay(t,e){const n=Z(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Xu(n)?Yu(n):Er(n).Uo()&&Qu(n,e))}function Ry(t,e){const n=Z(t),s=Er(n);n.Eu.delete(e),s.Uo()&&ky(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():vs(n)&&n.Pu.set("Unknown"))}function Qu(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Er(t).nu(e)}function ky(t,e){t.bu.Lt(e),Er(t).su(e)}function Yu(t){t.bu=new rC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Er(t).start(),t.Pu.mu()}function Xu(t){return vs(t)&&!Er(t).qo()&&t.Eu.size>0}function vs(t){return Z(t).Au.size===0}function Ny(t){t.bu=void 0}async function n1(t){t.Eu.forEach((e,n)=>{Qu(t,e)})}async function s1(t,e){Ny(t),Xu(t)?(t.Pu.pu(e),Yu(t)):t.Pu.set("Unknown")}async function r1(t,e,n){if(t.Pu.set("Online"),e instanceof my&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xo(t,s)}else if(e instanceof po?t.bu.Wt(e):e instanceof gy?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Y.min()))try{const s=await by(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(it.EMPTY_BYTE_STRING,l.snapshotVersion)),ky(r,a);const u=new Cn(l.target,a,c,l.sequenceNumber);Qu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Xo(t,s)}}async function Xo(t,e,n){if(!Pi(e))throw e;t.Au.add(1),await Li(t),t.Pu.set("Offline"),n||(n=()=>by(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Ba(t)})}function Dy(t,e){return e().catch(n=>Xo(t,n,e))}async function ja(t){const e=Z(t),n=Vn(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;i1(e);)try{const r=await HC(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,o1(e,r)}catch(r){await Xo(e,r)}Oy(e)&&Py(e)}function i1(t){return vs(t)&&t.Tu.length<10}function o1(t,e){t.Tu.push(e);const n=Vn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Oy(t){return vs(t)&&!Vn(t).qo()&&t.Tu.length>0}function Py(t){Vn(t).start()}async function a1(t){Vn(t).au()}async function c1(t){const e=Vn(t);for(const n of t.Tu)e.ou(n.mutations)}async function l1(t,e,n){const s=t.Tu.shift(),r=ju.from(s,e,n);await Dy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ja(t)}async function u1(t,e){e&&Vn(t).ru&&await async function(n,s){if(r=s.code,tC(r)&&r!==E.ABORTED){const i=n.Tu.shift();Vn(n).Go(),await Dy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ja(n)}var r}(t,e),Oy(t)&&Py(t)}async function lf(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=vs(n);n.Au.add(3),await Li(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Ba(n)}async function h1(t,e){const n=Z(t);e?(n.Au.delete(2),await Ba(n)):e||(n.Au.add(2),await Li(n),n.Pu.set("Unknown"))}function Er(t){return t.Vu||(t.Vu=function(e,n,s){const r=Z(e);return r.lu(),new XC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:n1.bind(null,t),co:s1.bind(null,t),eu:r1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Xu(t)?Yu(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Ny(t))})),t.Vu}function Vn(t){return t.Su||(t.Su=function(e,n,s){const r=Z(e);return r.lu(),new JC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:a1.bind(null,t),co:u1.bind(null,t),cu:c1.bind(null,t),uu:l1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await ja(t)):(await t.Su.stop(),t.Tu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Ju{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ju(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zu(t,e){if(dn("AsyncQueue",`${e}: ${t}`),Pi(t))return new F(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class js{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Pr(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new js;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class uf{constructor(){this.Du=new Ce(j.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):G():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Js{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Js(e,n,js.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class d1{constructor(){this.xu=void 0,this.listeners=[]}}class f1{constructor(){this.queries=new wr(e=>ty(e),Ma),this.onlineState="Unknown",this.Nu=new Set}}async function p1(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new d1),r)try{i.xu=await n.onListen(s)}catch(o){const a=Zu(o,`Initialization of query '${_l(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&eh(n)}async function g1(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function m1(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&eh(n)}function y1(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function eh(t){t.Nu.forEach(e=>{e.next()})}class v1{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Js(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class xy{constructor(e){this.key=e}}class My{constructor(e){this.key=e}}class _1{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=se(),this.mutatedKeys=se(),this.Zu=ny(e),this.tc=new js(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new uf,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=La(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),k=!0):this.ic(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Zu(g,c)>0||l&&this.Zu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||l)&&(a=!0)),k&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new Js(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new uf,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=se(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new My(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new xy(s))}),n}ac(e){this.Ju=e.sr,this.Xu=se();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Js.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class w1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class E1{constructor(e){this.key=e,this.lc=!1}}class I1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new wr(a=>ty(a),Ma),this._c=new Map,this.wc=new Set,this.mc=new Ce(j.comparator),this.gc=new Map,this.yc=new zu,this.Ic={},this.Tc=new Map,this.Ec=Xs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function T1(t,e){const n=P1(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await qC(n.localStore,fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await b1(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Ay(n.remoteStore,o)}return r}async function b1(t,e,n,s,r){t.Rc=(h,d,g)=>async function(_,v,k,C){let U=v.view.nc(k);U.ji&&(U=await of(_.localStore,v.query,!1).then(({documents:ie})=>v.view.nc(ie,U)));const D=C&&C.targetChanges.get(v.targetId),X=v.view.applyChanges(U,_.isPrimaryClient,D);return df(_,v.targetId,X.uc),X.snapshot}(t,h,d,g);const i=await of(t.localStore,e,!0),o=new _1(e,i.sr),a=o.nc(i.documents),c=Mi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);df(t,n,l.uc);const u=new w1(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function S1(t,e){const n=Z(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Ma(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ry(n.remoteStore,s.targetId),Sl(n,s.targetId)}).catch(Oi)):(Sl(n,s.targetId),await bl(n.localStore,s.targetId,!0))}async function C1(t,e,n){const s=x1(t);try{const r=await function(i,o){const a=Z(i),c=Me.now(),l=o.reduce((d,g)=>d.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=pn(),_=se();return a.Xi.getEntries(d,l).next(v=>{g=v,g.forEach((k,C)=>{C.isValidDocument()||(_=_.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{u=v;const k=[];for(const C of o){const U=YS(C,u.get(C.key).overlayedDocument);U!=null&&k.push(new ys(C.key,U,zm(U.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(v=>{h=v;const k=v.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:h.batchId,changes:ry(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new Ce(ue)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ui(s,r.changes),await ja(s.remoteStore)}catch(r){const i=Zu(r,"Failed to persist write");n.reject(i)}}async function Ly(t,e){const n=Z(t);try{const s=await BC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(Ie(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?Ie(o.lc):r.removedDocuments.size>0&&(Ie(o.lc),o.lc=!1))}),await Ui(n,s,e)}catch(s){await Oi(s)}}function hf(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&eh(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function A1(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new Ce(j.comparator);o=o.insert(i,Qe.newNoDocument(i,Y.min()));const a=se().add(i),c=new $a(Y.min(),new Map,new Ce(ue),o,a);await Ly(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),th(s)}else await bl(s.localStore,e,!1).then(()=>Sl(s,e,n)).catch(Oi)}async function R1(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await VC(n.localStore,e);Fy(n,s,null),Uy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ui(n,r)}catch(r){await Oi(r)}}async function k1(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ie(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Fy(s,e,n),Uy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ui(s,r)}catch(r){await Oi(r)}}function Uy(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Fy(t,e,n){const s=Z(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||$y(t,s)})}function $y(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Ry(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),th(t))}function df(t,e,n){for(const s of n)s instanceof xy?(t.yc.addReference(s.key,e),N1(t,s)):s instanceof My?(V("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||$y(t,s.key)):G()}function N1(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.wc.add(s),th(t))}function th(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new j(Ee.fromString(e)),s=t.Ec.next();t.gc.set(s,new E1(n)),t.mc=t.mc.insert(n,s),Ay(t.remoteStore,new Cn(fn(Zm(n.path)),s,"TargetPurposeLimboResolution",xu.ct))}}async function Ui(t,e,n){const s=Z(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Wu.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Pi(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);l.Hi=l.Hi.insert(h,_)}}}(s.localStore,i))}async function D1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await Ty(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new F(E.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ui(n,s.tr)}}function O1(t,e){const n=Z(t),s=n.gc.get(e);if(s&&s.lc)return se().add(s.key);{let r=se();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function P1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A1.bind(null,e),e.fc.eu=m1.bind(null,e.eventManager),e.fc.vc=y1.bind(null,e.eventManager),e}function x1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k1.bind(null,e),e}class ff{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Va(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $C(this.persistence,new UC,e.initialUser,this.serializer)}createPersistence(e){return new MC(Gu.js,this.serializer)}createSharedClientState(e){return new zC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class M1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=D1.bind(null,this.syncEngine),await h1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new f1}createDatastore(e){const n=Va(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new YC(r));var r;return function(i,o,a,c){return new ZC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>hf(this.syncEngine,a,0),o=cf.D()?new cf:new GC,new t1(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new I1(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);V("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Li(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class L1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class U1{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=Hm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Zu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ty(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $1(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>lf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lf(e.remoteStore,i)),t._onlineComponents=e}function F1(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!F1(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new ff)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new ff);return t._offlineComponents}async function Vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await pf(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await pf(t,new M1))),t._onlineComponents}function V1(t){return Vy(t).then(e=>e.syncEngine)}async function B1(t){const e=await Vy(t),n=e.eventManager;return n.onListen=T1.bind(null,e.syncEngine),n.onUnlisten=S1.bind(null,e.syncEngine),n}function j1(t,e,n={}){const s=new On;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new L1({next:h=>{i.enqueueAndForget(()=>g1(r,u)),h.fromCache&&a.source==="server"?c.reject(new F(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new v1(o,l,{includeMetadataChanges:!0,Uu:!0});return p1(r,u)}(await B1(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const gf=new Map;/**
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
 */function By(t,e,n){if(!n)throw new F(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function H1(t,e,n,s){if(e===!0&&s===!0)throw new F(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!j.isDocumentKey(t))throw new F(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yf(t){if(j.isDocumentKey(t))throw new F(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Zs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ha(t);throw new F(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function q1(t,e){if(e<=0)throw new F(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class vf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class qa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cS;switch(n.type){case"firstParty":return new dS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gf.get(e);n&&(V("ComponentProvider","Removing Datastore"),gf.delete(e),n.terminate())}(this),Promise.resolve()}}function K1(t,e,n,s={}){var r;const i=(t=Zs(t,qa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Gs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=We.MOCK_USER;else{o=DE(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(c)}t._authCredentials=new lS(new jm(o,a))}}/**
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
 */class wt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Hn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class Pn extends Hn{constructor(e,n,s){super(e,n,Zm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new j(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function xn(t,e,...n){if(t=pt(t),By("collection","path",e),t instanceof qa){const s=Ee.fromString(e,...n);return yf(s),new Pn(t,null,s)}{if(!(t instanceof wt||t instanceof Pn))throw new F(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return yf(s),new Pn(t.firestore,null,s)}}function nh(t,e,...n){if(t=pt(t),arguments.length===1&&(e=Hm.A()),By("doc","path",e),t instanceof qa){const s=Ee.fromString(e,...n);return mf(s),new wt(t,null,new j(s))}{if(!(t instanceof wt||t instanceof Pn))throw new F(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return mf(s),new wt(t.firestore,t instanceof Pn?t.converter:null,new j(s))}}/**
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
 */class z1{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Sy(this,"async_queue_retry"),this.Yc=()=>{const n=Ac();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Ac();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new On;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Pi(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw dn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Ju.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&G()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Ka extends qa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new z1,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hy(this),this._firestoreClient.terminate()}}function G1(t,e){const n=typeof t=="object"?t:ng(),s=typeof t=="string"?t:e||"(default)",r=tu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=RE("firestore");i&&K1(r,...i)}return r}function jy(t){return t._firestoreClient||Hy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new bS(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new U1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(it.fromBase64String(e))}catch(n){throw new F(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qy{constructor(e){this._methodName=e}}/**
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
 */class rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const W1=/^__.*__$/;class Q1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new xi(e,this.data,n,this.fieldTransforms)}}function Ky(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ih{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Jo(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Ky(this.ua)&&W1.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Y1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Va(e)}ga(e,n,s,r=!1){return new ih({ua:e,methodName:n,ma:s,path:Je.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zy(t){const e=t._freezeSettings(),n=Va(t._databaseId);return new Y1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function X1(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Qy("Data must be an object, but it was:",o,s);const a=Gy(s,o);let c,l;if(i.merge)c=new Pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Z1(e,h,n);if(!o.contains(d))throw new F(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tA(u,d)||u.push(d)}c=new Pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Q1(new bt(a),c,l)}function J1(t,e,n,s=!1){return oh(n,t.ga(s?4:3,e))}function oh(t,e){if(Wy(t=pt(t)))return Qy("Unsupported field value:",e,t),Gy(t,e);if(t instanceof qy)return function(n,s){if(!Ky(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=oh(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Me.fromDate(n);return{timestampValue:Yo(s.serializer,r)}}if(n instanceof Me){const r=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yo(s.serializer,r)}}if(n instanceof rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:yy(s.serializer,n._byteString)};if(n instanceof wt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ku(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ha(n)}`)}(t,e)}function Gy(t,e){const n={};return qm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(s,r)=>{const i=oh(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Wy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof rh||t instanceof er||t instanceof wt||t instanceof qy)}function Qy(t,e,n){if(!Wy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ha(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Z1(t,e,n){if((e=pt(e))instanceof sh)return e._internalPath;if(typeof e=="string")return Yy(t,e);throw Jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const eA=new RegExp("[~\\*/\\[\\]]");function Yy(t,e,n){if(e.search(eA)>=0)throw Jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sh(...e.split("."))._internalPath}catch{throw Jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(E.INVALID_ARGUMENT,a+t+c)}function tA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(za("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nA extends Xy{data(){return super.data()}}function za(t,e){return typeof e=="string"?Yy(t,e):e instanceof sh?e._internalPath:e._delegate._internalPath}/**
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
 */function sA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ah{}class ch extends ah{}function fi(t,e,...n){let s=[];e instanceof ah&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof lh).length,o=r.filter(a=>a instanceof Ga).length;if(i>1||i>0&&o>0)throw new F(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ga extends ch{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ga(e,n,s)}_apply(e){const n=this._parse(e);return Jy(e._query,n),new Hn(e.firestore,e.converter,vl(e._query,n))}_parse(e){const n=zy(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){wf(u,l);const d=[];for(const g of u)d.push(_f(a,r,g));h={arrayValue:{values:d}}}else h=_f(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||wf(u,l),h=J1(o,i,u,l==="in"||l==="not-in");return Pe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Cl(t,e,n){const s=e,r=za("where",t);return Ga._create(r,s,n)}class lh extends ah{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Jy(i,a),i=vl(i,a)}(e._query,n),new Hn(e.firestore,e.converter,vl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uh extends ch{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new uh(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vs(r,i);return function(a,c){if(Vu(a)===null){const l=xa(a);l!==null&&Zy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Hn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new _r(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function rA(t,e="asc"){const n=e,s=za("orderBy",t);return uh._create(s,n)}class hh extends ch{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new hh(e,n,s)}_apply(e){return new Hn(e.firestore,e.converter,Go(e._query,this._limit,this._limitType))}}function iA(t){return q1("limit",t),hh._create("limit",t,"F")}function _f(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new F(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ey(e)&&n.indexOf("/")!==-1)throw new F(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ee.fromString(n));if(!j.isDocumentKey(s))throw new F(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jd(t,new j(s))}if(n instanceof wt)return jd(t,n._key);throw new F(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ha(n)}.`)}function wf(t,e){if(!Array.isArray(t)||t.length===0)throw new F(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jy(t,e){if(e.isInequality()){const s=xa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Vu(t);i!==null&&Zy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Zy(t,e,n){if(!n.isEqual(e))throw new F(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class oA{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return vr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rh(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Lu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ee.fromString(e);Ie(Iy(s));const r=new li(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||dn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function aA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cA extends Xy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(za("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class go extends cA{data(e={}){return super.data(e)}}class lA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new to(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new go(this._firestore,this._userDataWriter,s.key,s,new to(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new go(s._firestore,s._userDataWriter,o.doc.key,o.doc,new to(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new go(s._firestore,s._userDataWriter,o.doc.key,o.doc,new to(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:uA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class hA extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function pi(t){t=Zs(t,Hn);const e=Zs(t.firestore,Ka),n=jy(e),s=new hA(e);return sA(t._query),j1(n,t._query).then(r=>new lA(e,s,t,r))}function ev(t,e,n){t=Zs(t,wt);const s=Zs(t.firestore,Ka),r=aA(t.converter,e,n);return tv(s,[X1(zy(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Yt.none())])}function dA(t){return tv(Zs(t.firestore,Ka),[new Bu(t._key,Yt.none())])}function tv(t,e){return function(n,s){const r=new On;return n.asyncQueue.enqueueAndForget(async()=>C1(await V1(n),s,r)),r.promise}(jy(t),e)}(function(t,e=!0){(function(n){yr=n})(ur),Ks(new cs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ka(new uS(n.getProvider("auth-internal")),new pS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Dn(Ud,"3.11.0",t),Dn(Ud,"3.11.0","esm2017")})();const fA={apiKey:"AIzaSyAWHOQmFmsqzl6KuzcG3xDtb589E47fl0g",authDomain:"bilets-aeb1e.firebaseapp.com",projectId:"bilets-aeb1e",storageBucket:"bilets-aeb1e.appspot.com",messagingSenderId:"585163155500",appId:"1:585163155500:web:d7f887a14e0d07ed974989",measurementId:"G-K5PKHKN72D"},nv=tg(fA),Mn=G1(nv),mo=sb(nv);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof window<"u";function pA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function kc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Vt(r)?r.map(t):t(r)}return n}const jr=()=>{},Vt=Array.isArray,gA=/\/$/,mA=t=>t.replace(gA,"");function Nc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=wA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function yA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&tr(e.matched[s],n.matched[r])&&sv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_A(t[n],e[n]))return!1;return!0}function _A(t,e){return Vt(t)?If(t,e):Vt(e)?If(e,t):t===e}function If(t,e){return Vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function wA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var gi;(function(t){t.pop="pop",t.push="push"})(gi||(gi={}));var Hr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hr||(Hr={}));function EA(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mA(t)}const IA=/^[^#]+#/;function TA(t,e){return t.replace(IA,"#")+e}function bA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function SA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=bA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tf(t,e){return(history.state?history.state.position-e:-1)+t}const Al=new Map;function CA(t,e){Al.set(t,e)}function AA(t){const e=Al.get(t);return Al.delete(t),e}let RA=()=>location.protocol+"//"+location.host;function rv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ef(c,"")}return Ef(n,t)+s+r}function kA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=rv(t,location),_=n.value,v=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===_){o=null;return}k=v?d.position-v.position:0}else s(g);r.forEach(C=>{C(n.value,_,{delta:k,type:gi.pop,direction:k?k>0?Hr.forward:Hr.back:Hr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:Wa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function bf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Wa():null}}function NA(t){const{history:e,location:n}=window,s={value:rv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:RA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,bf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:Wa()});i(u.current,u,!0);const h=he({},bf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function DA(t){t=EA(t);const e=NA(t),n=kA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:TA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function OA(t){return typeof t=="string"||t&&typeof t=="object"}function iv(t){return typeof t=="string"||typeof t=="symbol"}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ov=Symbol("");var Sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sf||(Sf={}));function nr(t,e){return he(new Error,{type:t,[ov]:!0},e)}function tn(t,e){return t instanceof Error&&ov in t&&(e==null||!!(t.type&e))}const Cf="[^/]+?",PA={sensitive:!1,strict:!1,start:!0,end:!0},xA=/[.+*?^${}()[\]/\\]/g;function MA(t,e){const n=he({},PA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(xA,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:v,optional:k,regexp:C}=d;i.push({name:_,repeatable:v,optional:k});const U=C||Cf;if(U!==Cf){g+=10;try{new RegExp(`(${U})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${_}" (${U}): `+X.message)}}let D=v?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(D=k&&l.length<2?`(?:/${D})`:"/"+D),k&&(D+="?"),r+=D,g+=20,k&&(g+=-8),v&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=i[d-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:k}=g,C=_ in l?l[_]:"";if(Vt(C)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const U=Vt(C)?C.join("/"):C;if(!U)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=U}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function LA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function UA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=LA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Af(s))return 1;if(Af(r))return-1}return r.length-s.length}function Af(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const FA={type:0,value:""},$A=/[a-zA-Z0-9_]/;function VA(t){if(!t)return[[]];if(t==="/")return[[FA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:$A.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function BA(t,e,n){const s=MA(VA(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jA(t,e){const n=[],s=new Map;e=Nf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,_=HA(u);_.aliasOf=d&&d.record;const v=Nf(e,u),k=[_];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const X of D)k.push(he({},_,{components:d?d.record.components:_.components,path:X,aliasOf:d?d.record:_}))}let C,U;for(const D of k){const{path:X}=D;if(h&&X[0]!=="/"){const ie=h.record.path,be=ie[ie.length-1]==="/"?"":"/";D.path=h.record.path+(X&&be+X)}if(C=BA(D,h,v),d?d.alias.push(C):(U=U||C,U!==C&&U.alias.push(C),g&&u.name&&!kf(C)&&o(u.name)),_.children){const ie=_.children;for(let be=0;be<ie.length;be++)i(ie[be],C,d&&d.children[be])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return U?()=>{o(U)}:jr}function o(u){if(iv(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&UA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!av(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!kf(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},_,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw nr(1,{location:u});v=d.record.name,g=he(Rf(h.params,d.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&Rf(u.params,d.keys.map(U=>U.name))),_=d.stringify(g)}else if("path"in u)_=u.path,d=n.find(U=>U.re.test(_)),d&&(g=d.parse(_),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(U=>U.re.test(h.path)),!d)throw nr(1,{location:u,currentLocation:h});v=d.record.name,g=he({},h.params,u.params),_=d.stringify(g)}const k=[];let C=d;for(;C;)k.unshift(C.record),C=C.parent;return{name:v,path:_,params:g,matched:k,meta:KA(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Rf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function HA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function kf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KA(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Nf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function av(t,e){return e.children.some(n=>n===t||av(t,n))}const cv=/#/g,zA=/&/g,GA=/\//g,WA=/=/g,QA=/\?/g,lv=/\+/g,YA=/%5B/g,XA=/%5D/g,uv=/%5E/g,JA=/%60/g,hv=/%7B/g,ZA=/%7C/g,dv=/%7D/g,eR=/%20/g;function dh(t){return encodeURI(""+t).replace(ZA,"|").replace(YA,"[").replace(XA,"]")}function tR(t){return dh(t).replace(hv,"{").replace(dv,"}").replace(uv,"^")}function Rl(t){return dh(t).replace(lv,"%2B").replace(eR,"+").replace(cv,"%23").replace(zA,"%26").replace(JA,"`").replace(hv,"{").replace(dv,"}").replace(uv,"^")}function nR(t){return Rl(t).replace(WA,"%3D")}function sR(t){return dh(t).replace(cv,"%23").replace(QA,"%3F")}function rR(t){return t==null?"":sR(t).replace(GA,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(lv," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),c=o<0?null:Zo(i.slice(o+1));if(a in e){let l=e[a];Vt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Df(t){let e="";for(let n in t){const s=t[n];if(n=nR(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(s)?s.map(i=>i&&Rl(i)):[s&&Rl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Vt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const aR=Symbol(""),Of=Symbol(""),Qa=Symbol(""),fv=Symbol(""),kl=Symbol("");function Ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function En(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(nr(4,{from:n,to:e})):h instanceof Error?a(h):OA(h)?a(nr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Dc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(cR(a)){const l=(a.__vccOpts||a)[e];l&&r.push(En(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=pA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&En(d,n,s,i,o)()}))}}return r}function cR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pf(t){const e=Mt(Qa),n=Mt(fv),s=vt(()=>e.resolve(Ps(t.to))),r=vt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(tr.bind(null,u));if(d>-1)return d;const g=xf(c[l-2]);return l>1&&xf(u)===g&&h[h.length-1].path!==g?h.findIndex(tr.bind(null,c[l-2])):d}),i=vt(()=>r.value>-1&&dR(n.params,s.value.params)),o=vt(()=>r.value>-1&&r.value===n.matched.length-1&&sv(n.params,s.value.params));function a(c={}){return hR(c)?e[Ps(t.replace)?"replace":"push"](Ps(t.to)).catch(jr):Promise.resolve()}return{route:s,href:vt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const lR=yp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pf,setup(t,{slots:e}){const n=or(Pf(t)),{options:s}=Mt(Qa),r=vt(()=>({[Mf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Lp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),uR=lR;function hR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dR(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Vt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function xf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mf=(t,e,n)=>t??e??n,fR=yp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(kl),r=vt(()=>t.route||s.value),i=Mt(Of,0),o=vt(()=>{let l=Ps(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=vt(()=>r.value.matched[o.value]);ro(Of,vt(()=>o.value+1)),ro(aR,a),ro(kl,r);const c=c_();return Ms(()=>[c.value,a.value,t.name],([l,u,h],[d,g,_])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!tr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Lf(n.default,{Component:d,route:l});const g=h.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=Lp(d,he({},_,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Lf(n.default,{Component:k,route:l})||k}}});function Lf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pR=fR;function gR(t){const e=jA(t.routes,t),n=t.parseQuery||iR,s=t.stringifyQuery||Df,r=t.history,i=Ar(),o=Ar(),a=Ar(),c=l_(_n);let l=_n;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kc.bind(null,I=>""+I),h=kc.bind(null,rR),d=kc.bind(null,Zo);function g(I,M){let O,B;return iv(I)?(O=e.getRecordMatcher(I),B=M):B=I,e.addRoute(B,O)}function _(I){const M=e.getRecordMatcher(I);M&&e.removeRoute(M)}function v(){return e.getRoutes().map(I=>I.record)}function k(I){return!!e.getRecordMatcher(I)}function C(I,M){if(M=he({},M||c.value),typeof I=="string"){const f=Nc(n,I,M.path),p=e.resolve({path:f.path},M),m=r.createHref(f.fullPath);return he(f,p,{params:d(p.params),hash:Zo(f.hash),redirectedFrom:void 0,href:m})}let O;if("path"in I)O=he({},I,{path:Nc(n,I.path,M.path).path});else{const f=he({},I.params);for(const p in f)f[p]==null&&delete f[p];O=he({},I,{params:h(I.params)}),M.params=h(M.params)}const B=e.resolve(O,M),oe=I.hash||"";B.params=u(d(B.params));const Se=yA(s,he({},I,{hash:tR(oe),path:B.path})),te=r.createHref(Se);return he({fullPath:Se,hash:oe,query:s===Df?oR(I.query):I.query||{}},B,{redirectedFrom:void 0,href:te})}function U(I){return typeof I=="string"?Nc(n,I,c.value.path):he({},I)}function D(I,M){if(l!==I)return nr(8,{from:M,to:I})}function X(I){return xe(I)}function ie(I){return X(he(U(I),{replace:!0}))}function be(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:O}=M;let B=typeof O=="function"?O(I):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=U(B):{path:B},B.params={}),he({query:I.query,hash:I.hash,params:"path"in B?{}:I.params},B)}}function xe(I,M){const O=l=C(I),B=c.value,oe=I.state,Se=I.force,te=I.replace===!0,f=be(O);if(f)return xe(he(U(f),{state:typeof f=="object"?he({},oe,f.state):oe,force:Se,replace:te}),M||O);const p=O;p.redirectedFrom=M;let m;return!Se&&vA(s,B,O)&&(m=nr(16,{to:p,from:B}),Kn(B,B,!0,!1)),(m?Promise.resolve(m):_e(p,B)).catch(w=>tn(w)?tn(w,2)?w:At(w):me(w,p,B)).then(w=>{if(w){if(tn(w,2))return xe(he({replace:te},U(w.to),{state:typeof w.to=="object"?he({},oe,w.to.state):oe,force:Se}),M||p)}else w=Ke(p,B,!0,te,oe);return ge(p,B,w),w})}function J(I,M){const O=D(I,M);return O?Promise.reject(O):Promise.resolve()}function _e(I,M){let O;const[B,oe,Se]=mR(I,M);O=Dc(B.reverse(),"beforeRouteLeave",I,M);for(const f of B)f.leaveGuards.forEach(p=>{O.push(En(p,I,M))});const te=J.bind(null,I,M);return O.push(te),bs(O).then(()=>{O=[];for(const f of i.list())O.push(En(f,I,M));return O.push(te),bs(O)}).then(()=>{O=Dc(oe,"beforeRouteUpdate",I,M);for(const f of oe)f.updateGuards.forEach(p=>{O.push(En(p,I,M))});return O.push(te),bs(O)}).then(()=>{O=[];for(const f of I.matched)if(f.beforeEnter&&!M.matched.includes(f))if(Vt(f.beforeEnter))for(const p of f.beforeEnter)O.push(En(p,I,M));else O.push(En(f.beforeEnter,I,M));return O.push(te),bs(O)}).then(()=>(I.matched.forEach(f=>f.enterCallbacks={}),O=Dc(Se,"beforeRouteEnter",I,M),O.push(te),bs(O))).then(()=>{O=[];for(const f of o.list())O.push(En(f,I,M));return O.push(te),bs(O)}).catch(f=>tn(f,8)?f:Promise.reject(f))}function ge(I,M,O){for(const B of a.list())B(I,M,O)}function Ke(I,M,O,B,oe){const Se=D(I,M);if(Se)return Se;const te=M===_n,f=As?history.state:{};O&&(B||te?r.replace(I.fullPath,he({scroll:te&&f&&f.scroll},oe)):r.push(I.fullPath,oe)),c.value=I,Kn(I,M,O,te),At()}let ze;function Ct(){ze||(ze=r.listen((I,M,O)=>{if(!Fi.listening)return;const B=C(I),oe=be(B);if(oe){xe(he(oe,{replace:!0}),B).catch(jr);return}l=B;const Se=c.value;As&&CA(Tf(Se.fullPath,O.delta),Wa()),_e(B,Se).catch(te=>tn(te,12)?te:tn(te,2)?(xe(te.to,B).then(f=>{tn(f,20)&&!O.delta&&O.type===gi.pop&&r.go(-1,!1)}).catch(jr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),me(te,B,Se))).then(te=>{te=te||Ke(B,Se,!1),te&&(O.delta&&!tn(te,8)?r.go(-O.delta,!1):O.type===gi.pop&&tn(te,20)&&r.go(-1,!1)),ge(B,Se,te)}).catch(jr)}))}let en=Ar(),Tr=Ar(),ke;function me(I,M,O){At(I);const B=Tr.list();return B.length?B.forEach(oe=>oe(I,M,O)):console.error(I),Promise.reject(I)}function fe(){return ke&&c.value!==_n?Promise.resolve():new Promise((I,M)=>{en.add([I,M])})}function At(I){return ke||(ke=!I,Ct(),en.list().forEach(([M,O])=>I?O(I):M()),en.reset()),I}function Kn(I,M,O,B){const{scrollBehavior:oe}=t;if(!As||!oe)return Promise.resolve();const Se=!O&&AA(Tf(I.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return cp().then(()=>oe(I,M,Se)).then(te=>te&&SA(te)).catch(te=>me(te,I,M))}const Rt=I=>r.go(I);let lt;const _s=new Set,Fi={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:k,getRoutes:v,resolve:C,options:t,push:X,replace:ie,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Tr.add,isReady:fe,install(I){const M=this;I.component("RouterLink",uR),I.component("RouterView",pR),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ps(c)}),As&&!lt&&c.value===_n&&(lt=!0,X(r.location).catch(oe=>{}));const O={};for(const oe in _n)O[oe]=vt(()=>c.value[oe]);I.provide(Qa,M),I.provide(fv,or(O)),I.provide(kl,c);const B=I.unmount;_s.add(I),I.unmount=function(){_s.delete(I),_s.size<1&&(l=_n,ze&&ze(),ze=null,c.value=_n,lt=!1,ke=!1),B()}}};return Fi}function bs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function mR(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>tr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>tr(l,c))||r.push(c))}return[n,s,r]}function Ir(){return Mt(Qa)}const qn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},yR={data(){return{email:"",pass:"",store:ln(),router:Ir()}},methods:{async login(){try{await this.store.dispatch("login",{email:this.email,password:this.pass}),this.router.push("/")}catch(t){window.alert(t)}}}},Ya=t=>(ar("data-v-323058bb"),t=t(),cr(),t),vR={class:"box"},_R={class:"container"},wR=Ya(()=>y("div",{class:"top-header"},[y("span",null,"Have an account?"),y("header",null,"Login")],-1)),ER={class:"input-field"},IR=Ya(()=>y("i",{class:"bx bx-user"},null,-1)),TR={class:"input-field"},bR=Ya(()=>y("i",{class:"bx bx-lock-alt"},null,-1)),SR={class:"input-button"},CR=Ya(()=>y("div",{class:"bottom"},[y("div",{class:"right"},[y("a",{class:"que",href:"/register"},"Don't have an account?")])],-1));function AR(t,e,n,s,r,i){return Fe(),Xe("div",vR,[y("div",_R,[wR,y("div",ER,[ht(y("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Username",required:""},null,512),[[yt,r.email]]),IR]),y("div",TR,[ht(y("input",{type:"password",class:"input","onUpdate:modelValue":e[1]||(e[1]=o=>r.pass=o),placeholder:"Password",required:""},null,512),[[yt,r.pass]]),bR]),y("div",SR,[y("input",{type:"submit",class:"submit",onClick:e[2]||(e[2]=o=>{this.login()}),value:"Login"})]),CR])])}const RR=qn(yR,[["render",AR],["__scopeId","data-v-323058bb"]]),kR="/assets/BiletX-4e74b105.svg",NR="/assets/vector-9f045491.svg";const DR={data(){return{store:ln(),userEmail:""}},methods:{getHeaderStr(){return this.store.getters.user.loggedIn?(this.userEmail=this.store.getters.user.data.email,this.store.getters.user.data.email):"Login"},getHeaderLink(){return this.store.getters.user.loggedIn?"/profile":"/login"}}},fh=t=>(ar("data-v-066859bc"),t=t(),cr(),t),OR={class:"container-fluid pt-5"},PR={class:"row header"},xR=fh(()=>y("div",{class:"col-lg-4 text-start"},[y("img",{class:"logo",src:kR,alt:"logo"})],-1)),MR=fh(()=>y("div",{class:"col-lg-4 search-container text-start"},[y("a",{class:"header-links searchbar",href:"#"},"Search")],-1)),LR={class:"col-lg-4 header-items"},UR=["href"],FR=fh(()=>y("img",{class:"account-logo",src:NR,alt:"acc-logo"},null,-1));function $R(t,e,n,s,r,i){return Fe(),Xe("div",OR,[y("div",PR,[xR,MR,y("div",LR,[y("a",{class:"header-links",id:"account-link",href:this.getHeaderLink()},dt(i.getHeaderStr()),9,UR),FR])])])}const pv=qn(DR,[["render",$R],["__scopeId","data-v-066859bc"]]);const VR={data(){return{store:ln(),router:Ir(),event_:{date:""}}},async mounted(){await this.getEvent();var t=L.map("mapContainer").setView([this.event_.place._lat,this.event_.place._long],13);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(t)},methods:{async getEvent(){let t=await pi(fi(xn(Mn,"events"),Cl("id","==",parseInt(this.$route.params.event_id,10))));this.event_=t.docs[0].data()},async submitReservation(){const t=nh(xn(Mn,"tickets"),"tickets-"+this.store.getters.user.data.email+"-"+this.event_.id);await ev(t,{user_email:this.store.getters.user.data.email,event_id:this.event_.id}),this.router.push("/")}},components:{Header:pv}},BR=y("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet"},null,-1),jR={class:"row main"},HR={class:"col-lg-6 left"},qR={class:"left-div"},KR=["src"],zR={class:"col-lg-6 right"},GR={class:"right-div"},WR={class:"event-name"},QR={class:"description"},YR={class:"event-data"},XR={class:"event-data"},JR=y("div",{class:"map",id:"mapContainer"},null,-1),ZR=y("div",{class:"container-fluid mt-5 footer"},[y("div",{class:"row"},[y("div",{class:"by mt-3"},[y("p",{class:"authors"},[Yr(" Ryhor Hapkala 218524 "),y("br"),Yr(" Yahor Lashko  219145 ")])])])],-1);function ek(t,e,n,s,r,i){const o=Kl("Header");return Fe(),Xe(je,null,[BR,at(o),y("div",jR,[y("div",HR,[y("div",qR,[y("img",{class:"event-img",src:r.event_.preview_image},null,8,KR)])]),y("div",zR,[y("div",GR,[y("h2",WR,dt(r.event_.name),1),y("p",QR,dt(r.event_.description),1),y("h3",YR,"When? "+dt(new Date(this.event_.date.seconds*1e3).toLocaleString()),1),y("h3",XR,"Where? "+dt(r.event_.address),1)])]),JR]),this.store.getters.user.loggedIn?(Fe(),Xe("button",{key:0,class:"add-reservaion-button",onClick:e[0]||(e[0]=(...a)=>i.submitReservation&&i.submitReservation(...a))},"Submit a reservaion")):lw("",!0),ZR],64)}const tk=qn(VR,[["render",ek]]);const nk={components:{Header:pv},data(){return{store:ln(),router:Ir(),events:{popular:[],top:[]}}},methods:{async getEvents(){this.events={popular:[],top:[]},(await pi(fi(xn(Mn,"events")))).forEach(e=>{let n=e.data();switch(n.category){case"Popular":this.events.popular.push(n);break;case"Top":this.events.top.push(n);break}}),console.log(this.events)}},async mounted(){await this.getEvents()}},ph=t=>(ar("data-v-aa63003b"),t=t(),cr(),t),sk=ph(()=>y("div",{class:"container mt-5 title-container"},[y("p",{class:"title"},"POPULAR EVENTS")],-1)),rk={class:"container-fluid media-scroller snaps-inline"},ik={class:"media-element"},ok=["href"],ak=["src"],ck={class:"scroller-title"},lk=ph(()=>y("div",{class:"container mb-3 title-container"},[y("p",{class:"title"},"TOP EVENTS")],-1)),uk={class:"container-fluid"},hk={class:"row"},dk={class:"col-sm mb-3"},fk={class:"card"},pk=["href"],gk=["src"],mk={class:"card-title"},yk=ph(()=>y("div",{class:"container-fluid mt-5 footer"},[y("div",{class:"row"},[y("div",{class:"by mt-3"},[y("p",{class:"authors"},[Yr(" Ryhor Hapkala 218524 "),y("br"),Yr(" Yahor Lashko  219145 ")])])])],-1));function vk(t,e,n,s,r,i){const o=Kl("Header");return Fe(),Xe(je,null,[at(o),sk,y("div",rk,[(Fe(!0),Xe(je,null,Eo(r.events.popular,a=>(Fe(),Xe("div",ik,[y("a",{href:"event/"+a.id},[y("img",{class:"scroller-element",src:a.preview_image},null,8,ak)],8,ok),y("p",ck,dt(a.name),1)]))),256))]),lk,y("div",uk,[y("div",hk,[(Fe(!0),Xe(je,null,Eo(r.events.top,a=>(Fe(),Xe("div",dk,[y("div",fk,[y("a",{href:"event/"+a.id},[y("img",{class:"card-img",src:a.preview_image,alt:"event-preview"},null,8,gk)],8,pk),y("p",mk,dt(a.name),1)])]))),256))])]),yk],64)}const _k=qn(nk,[["render",vk],["__scopeId","data-v-aa63003b"]]);const wk={data(){return{email:"",pass:"",store:ln(),router:Ir()}},methods:{async register(){try{await this.store.dispatch("register",{email:this.email,password:this.pass}),this.router.push("/")}catch(t){window.alert(t)}}}},Xa=t=>(ar("data-v-034b55bf"),t=t(),cr(),t),Ek={class:"box"},Ik={class:"container"},Tk=Xa(()=>y("div",{class:"top-header"},[y("span",null,"Don't have an account?"),y("header",null,"Register")],-1)),bk={class:"input-field"},Sk=Xa(()=>y("i",{class:"bx bx-user"},null,-1)),Ck={class:"input-field"},Ak=Xa(()=>y("i",{class:"bx bx-lock-alt"},null,-1)),Rk={class:"input-button"},kk=Xa(()=>y("div",{class:"bottom"},[y("div",{class:"right"},[y("a",{class:"que",href:"/login"},"Already got an account?")])],-1));function Nk(t,e,n,s,r,i){return Fe(),Xe("div",Ek,[y("div",Ik,[Tk,y("div",bk,[ht(y("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Username",required:""},null,512),[[yt,r.email]]),Sk]),y("div",Ck,[ht(y("input",{type:"password",class:"input","onUpdate:modelValue":e[1]||(e[1]=o=>r.pass=o),placeholder:"Password",required:""},null,512),[[yt,r.pass]]),Ak]),y("div",Rk,[y("input",{type:"submit",class:"submit",onClick:e[2]||(e[2]=o=>{this.register()}),value:"Register"})]),kk])])}const Dk=qn(wk,[["render",Nk],["__scopeId","data-v-034b55bf"]]);const Ok={data(){return{store:ln(),router:Ir(),events:[],user:null,futureEvents:[],pastEvents:[]}},watch:{user:async function(){await this.getReservations()}},methods:{async signout(){await this.store.dispatch("logout",{}),this.router.push("/")},async getReservations(){if(!this.store.getters.user.loggedIn)return;this.futureEvents=[],this.pastEvents=[],this.events=[];let t=await pi(fi(xn(Mn,"tickets"),Cl("user_email","==",this.store.getters.user.data.email))),e=[];t.forEach(n=>{e.push(parseInt(n.data().event_id))}),await this.getEventsForReservations(e)},async getEventsForReservations(t){(await pi(fi(xn(Mn,"events"),Cl("id","in",t)))).forEach(s=>{this.events.push(s.data())});for(let s=0;s<this.events.length;s++){let r=this.events[s].date.seconds;var n=new Date().getTime()/1e3;r>n?this.futureEvents.push(this.events[s]):this.pastEvents.push(this.events[s])}},getUser(){return this.store.getters.user.loggedIn?(this.user=this.store.getters.user.data,this.store.getters.user.data):null},async cancel(t){const e=nh(xn(Mn,"tickets"),"tickets-"+this.store.getters.user.data.email+"-"+t);await dA(e),await this.getReservations()}}},Ja=t=>(ar("data-v-0837bc89"),t=t(),cr(),t),Pk=Ja(()=>y("div",{class:"title-container"},[y("p",{class:"page-title"},"Active tickets")],-1)),xk={class:"container-fluid mt-5"},Mk={class:"ticket active"},Lk={class:"row"},Uk={class:"col-sm event-info"},Fk=["src"],$k={class:"col event-info"},Vk={class:"event-name"},Bk={class:"col event-info"},jk={class:"event-price"},Hk={class:"col event-info"},qk={class:"event-date"},Kk=Ja(()=>y("i",{class:"bx bx-active bx-time bx-md"},null,-1)),zk={class:"col event-info"},Gk=["onClick"],Wk=Ja(()=>y("div",{class:"title-container"},[y("p",{class:"page-title"},"History")],-1)),Qk={class:"container-fluid mt-5"},Yk={class:"ticket unactive"},Xk={class:"row"},Jk={class:"col-sm event-info"},Zk=["src"],eN={class:"col event-info"},tN={class:"event-name"},nN={class:"col event-info"},sN={class:"event-price"},rN={class:"col event-info"},iN={class:"event-date"},oN=Ja(()=>y("i",{class:"bx bx-active bx-time bx-md"},null,-1));function aN(t,e,n,s,r,i){return Fe(),Xe(je,null,[y("h2",null,"Hello, "+dt(i.getUser().email),1),y("button",{onClick:e[0]||(e[0]=(...o)=>i.signout&&i.signout(...o))},"Sign out"),Pk,(Fe(!0),Xe(je,null,Eo(r.futureEvents,o=>(Fe(),Xe("div",xk,[y("div",Mk,[y("div",Lk,[y("div",Uk,[y("img",{class:"preview",src:o.preview_image},null,8,Fk)]),y("div",$k,[y("p",Vk,dt(o.name),1)]),y("div",Bk,[y("p",jk,dt(o.price)+" zł",1)]),y("div",Hk,[y("p",qk,dt(new Date(o.date.seconds*1e3).toLocaleString()),1),Kk]),y("div",zk,[y("button",{class:"btn-lg",onClick:a=>i.cancel(o.id)},"Cancel",8,Gk)])])])]))),256)),Wk,(Fe(!0),Xe(je,null,Eo(r.pastEvents,o=>(Fe(),Xe("div",Qk,[y("div",Yk,[y("div",Xk,[y("div",Jk,[y("img",{class:"preview",src:o.preview_image},null,8,Zk)]),y("div",eN,[y("p",tN,dt(o.name),1)]),y("div",nN,[y("p",sN,dt(o.price)+" zł",1)]),y("div",rN,[y("p",iN,dt(new Date(o.date.seconds*1e3).toLocaleString()),1),oN])])])]))),256))],64)}const cN=qn(Ok,[["render",aN],["__scopeId","data-v-0837bc89"]]);const lN={data(){return{store:ln(),router:Ir(),name:"",category:"Top",imageLink:"",description:"",date:"",lat:"",lng:"",price:"",address:"",maxUsers:""}},methods:{getCoordinates(){navigator.geolocation.getCurrentPosition(t=>{this.lat=t.coords.latitude,this.lng=t.coords.longitude})},async createEvent(){const t=await pi(fi(xn(Mn,"events"),rA("id","desc"),iA(1)));let e=0;t.forEach(n=>{e=parseInt(n.data().id)+1}),await ev(nh(xn(Mn,"events"),"event-"+e),{name:this.name,place:{_lat:this.lat,_long:this.lng},id:e,users:0,category:this.category,date:new Date(this.date),price:parseInt(this.price),description:this.description,address:this.address,max_users:parseInt(this.maxUsers),preview_image:this.imageLink,description:this.description})}}},gv=t=>(ar("data-v-88f5746e"),t=t(),cr(),t),uN={class:"main"},hN=gv(()=>y("option",{selected:""},"Top",-1)),dN=gv(()=>y("option",null,"Popular",-1)),fN=[hN,dN];function pN(t,e,n,s,r,i){return Fe(),Xe("div",uN,[y("button",{onClick:e[0]||(e[0]=(...o)=>i.getCoordinates&&i.getCoordinates(...o))},"Get coordinates from your current position"),y("form",{action:"/",onSubmit:e[12]||(e[12]=Kw((...o)=>i.createEvent&&i.createEvent(...o),["prevent"]))},[ht(y("input",{required:"","onUpdate:modelValue":e[1]||(e[1]=o=>r.name=o),placeholder:"Name"},null,512),[[yt,r.name]]),ht(y("select",{required:"","onUpdate:modelValue":e[2]||(e[2]=o=>r.category=o)},fN,512),[[jw,r.category]]),ht(y("input",{required:"","onUpdate:modelValue":e[3]||(e[3]=o=>r.date=o),placeholder:"date"},null,512),[[yt,r.date]]),ht(y("input",{required:"","onUpdate:modelValue":e[4]||(e[4]=o=>r.imageLink=o),placeholder:"image_link"},null,512),[[yt,r.imageLink]]),ht(y("input",{required:"","onUpdate:modelValue":e[5]||(e[5]=o=>r.lat=o),placeholder:"Coordinates (lat)"},null,512),[[yt,r.lat]]),ht(y("input",{required:"","onUpdate:modelValue":e[6]||(e[6]=o=>r.lng=o),placeholder:"Coordinates (lng)"},null,512),[[yt,r.lng]]),ht(y("input",{required:"","onUpdate:modelValue":e[7]||(e[7]=o=>r.address=o),placeholder:"Address"},null,512),[[yt,r.address]]),ht(y("input",{required:"","onUpdate:modelValue":e[8]||(e[8]=o=>r.maxUsers=o),placeholder:"Max users"},null,512),[[yt,r.maxUsers]]),ht(y("input",{required:"","onUpdate:modelValue":e[9]||(e[9]=o=>r.price=o),placeholder:"Price"},null,512),[[yt,r.price]]),ht(y("textarea",{required:"","onUpdate:modelValue":e[10]||(e[10]=o=>r.description=o)},null,512),[[yt,r.description]]),y("button",{onClick:e[11]||(e[11]=(...o)=>i.createEvent&&i.createEvent(...o))},"Create event")],32)])}const gN=qn(lN,[["render",pN],["__scopeId","data-v-88f5746e"]]),mN=[{path:"/",name:"main",component:_k},{path:"/event/:event_id",name:"event page",component:tk},{path:"/login",name:"login",component:RR},{path:"/register",name:"register",component:Dk},{path:"/profile",name:"profile",component:cN},{path:"/newevent",name:"new_event",component:gN}],mv=gR({history:DA(),routes:mN});const yN={setup(){const t=ln();mo.onAuthStateChanged(e=>{t.dispatch("fetchUser",e)})},data(){return{router:mv,store:ln()}}};function vN(t,e,n,s,r,i){const o=Kl("router-view");return Fe(),Op(o)}const _N=qn(yN,[["render",vN],["__scopeId","data-v-644690ac"]]),wN=wE({state:{user:{loggedIn:!1,data:null}},getters:{user(t){return t.user}},mutations:{SET_LOGGED_IN(t,e){t.user.loggedIn=e},SET_USER(t,e){t.user.data=e}},actions:{async register(t,{email:e,password:n}){const s=await BI(mo,e,n);if(s)t.commit("SET_USER",s.user);else throw new Error("Unable to register user")},async login(t,{email:e,password:n}){const s=await jI(mo,e,n);if(s)t.commit("SET_USER",s.user);else throw new Error("login failed")},async logout(t){await KI(mo),t.commit("SET_USER",null)},async fetchUser(t,e){t.commit("SET_LOGGED_IN",e!==null),e?t.commit("SET_USER",{displayName:e.displayName,email:e.email}):t.commit("SET_USER",null)}}}),EN=Ww(_N).use(wN).use(mv);EN.mount("#app");
