import{r as Ma,at as Oa,P as La,Y as Ca,a0 as Ao,a1 as Eo,d as ja,Q as Ra}from"./index-XLkOeDcy.js";var Pa=Object.defineProperty,ls=t=>{throw TypeError(t)},Ta=(t,e,r)=>e in t?Pa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Un=(t,e,r)=>Ta(t,typeof e!="symbol"?e+"":e,r),lo=(t,e,r)=>e.has(t)||ls("Cannot "+r),tt=(t,e,r)=>(lo(t,e,"read from private field"),r?r.call(t):e.get(t)),Ge=(t,e,r)=>e.has(t)?ls("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Ei=(t,e,r,n)=>(lo(t,e,"write to private field"),e.set(t,r),r),le=(t,e,r)=>(lo(t,e,"access private method"),r);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=globalThis,co=Cn.ShadowRoot&&(Cn.ShadyCSS===void 0||Cn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cs=Symbol(),ko=new WeakMap;let Ia=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==cs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(co&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=ko.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ko.set(e,t))}return t}toString(){return this.cssText}};const Da=t=>new Ia(typeof t=="string"?t:t+"",void 0,cs),Ha=(t,e)=>{if(co)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=Cn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},So=co?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Da(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Na,defineProperty:Ba,getOwnPropertyDescriptor:Fa,getOwnPropertyNames:za,getOwnPropertySymbols:Ua,getPrototypeOf:Wa}=Object,yr=globalThis,Mo=yr.trustedTypes,qa=Mo?Mo.emptyScript:"",Oo=yr.reactiveElementPolyfillSupport,Yr=(t,e)=>t,Ti={toAttribute(t,e){switch(e){case Boolean:t=t?qa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},us=(t,e)=>!Na(t,e),Lo={attribute:!0,type:String,converter:Ti,reflect:!1,hasChanged:us};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),yr.litPropertyMetadata??(yr.litPropertyMetadata=new WeakMap);class fr extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Lo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Ba(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=Fa(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i?.call(this)},set(s){const l=i?.call(this);o.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Lo}static _$Ei(){if(this.hasOwnProperty(Yr("elementProperties")))return;const e=Wa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yr("properties"))){const r=this.properties,n=[...za(r),...Ua(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(So(i))}else e!==void 0&&r.push(So(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ha(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ti).toAttribute(r,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:Ti;this._$Em=o,this[o]=l.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??us)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$EO)==null||e.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw r=!1,this._$EU(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}fr.elementStyles=[],fr.shadowRootOptions={mode:"open"},fr[Yr("elementProperties")]=new Map,fr[Yr("finalized")]=new Map,Oo?.({ReactiveElement:fr}),(yr.reactiveElementVersions??(yr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=globalThis,Tn=Pn.trustedTypes,Co=Tn?Tn.createPolicy("lit-html",{createHTML:t=>t}):void 0,uo="$lit$",wt=`lit$${Math.random().toFixed(9).slice(2)}$`,ho="?"+wt,Va=`<${ho}>`,Yt=document,Zr=()=>Yt.createComment(""),Jr=t=>t===null||typeof t!="object"&&typeof t!="function",po=Array.isArray,hs=t=>po(t)||typeof t?.[Symbol.iterator]=="function",ki=`[ 	
\f\r]`,Br=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jo=/-->/g,Ro=/>/g,Ut=RegExp(`>|${ki}(?:([^\\s"'>=/]+)(${ki}*=${ki}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Po=/'/g,To=/"/g,ds=/^(?:script|style|textarea|title)$/i,Ya=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Z=Ya(1),Mt=Symbol.for("lit-noChange"),ge=Symbol.for("lit-nothing"),Io=new WeakMap,Vt=Yt.createTreeWalker(Yt,129);function ps(t,e){if(!po(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Co!==void 0?Co.createHTML(e):e}const fs=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=Br;for(let l=0;l<r;l++){const c=t[l];let h,f,m=-1,x=0;for(;x<c.length&&(s.lastIndex=x,f=s.exec(c),f!==null);)x=s.lastIndex,s===Br?f[1]==="!--"?s=jo:f[1]!==void 0?s=Ro:f[2]!==void 0?(ds.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=Ut):f[3]!==void 0&&(s=Ut):s===Ut?f[0]===">"?(s=i??Br,m=-1):f[1]===void 0?m=-2:(m=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?Ut:f[3]==='"'?To:Po):s===To||s===Po?s=Ut:s===jo||s===Ro?s=Br:(s=Ut,i=void 0);const v=s===Ut&&t[l+1].startsWith("/>")?" ":"";o+=s===Br?c+Va:m>=0?(n.push(h),c.slice(0,m)+uo+c.slice(m)+wt+v):c+wt+(m===-2?l:v)}return[ps(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Gr{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[h,f]=fs(e,r);if(this.el=Gr.createElement(h,n),Vt.currentNode=this.el.content,r===2||r===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Vt.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(uo)){const x=f[s++],v=i.getAttribute(m).split(wt),_=/([.?@])?(.*)/.exec(x);c.push({type:1,index:o,name:_[2],strings:v,ctor:_[1]==="."?ys:_[1]==="?"?vs:_[1]==="@"?bs:en}),i.removeAttribute(m)}else m.startsWith(wt)&&(c.push({type:6,index:o}),i.removeAttribute(m));if(ds.test(i.tagName)){const m=i.textContent.split(wt),x=m.length-1;if(x>0){i.textContent=Tn?Tn.emptyScript:"";for(let v=0;v<x;v++)i.append(m[v],Zr()),Vt.nextNode(),c.push({type:2,index:++o});i.append(m[x],Zr())}}}else if(i.nodeType===8)if(i.data===ho)c.push({type:2,index:o});else{let m=-1;for(;(m=i.data.indexOf(wt,m+1))!==-1;)c.push({type:7,index:o}),m+=wt.length-1}o++}}static createElement(e,r){const n=Yt.createElement("template");return n.innerHTML=e,n}}function Zt(t,e,r=t,n){var i,o;if(e===Mt)return e;let s=n!==void 0?(i=r.o)==null?void 0:i[n]:r.l;const l=Jr(e)?void 0:e._$litDirective$;return s?.constructor!==l&&((o=s?._$AO)==null||o.call(s,!1),l===void 0?s=void 0:(s=new l(t),s._$AT(t,r,n)),n!==void 0?(r.o??(r.o=[]))[n]=s:r.l=s),s!==void 0&&(e=Zt(t,s._$AS(t,e.values),s,n)),e}class gs{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=(e?.creationScope??Yt).importNode(r,!0);Vt.currentNode=i;let o=Vt.nextNode(),s=0,l=0,c=n[0];for(;c!==void 0;){if(s===c.index){let h;c.type===2?h=new Wn(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new xs(o,this,e)),this._$AV.push(h),c=n[++l]}s!==c?.index&&(o=Vt.nextNode(),s++)}return Vt.currentNode=Yt,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}let Wn=class ms{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,r,n,i){this.type=2,this._$AH=ge,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Zt(this,e,r),Jr(e)?e===ge||e==null||e===""?(this._$AH!==ge&&this._$AR(),this._$AH=ge):e!==this._$AH&&e!==Mt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ge&&Jr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Gr.createElement(ps(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new gs(o,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(e){let r=Io.get(e.strings);return r===void 0&&Io.set(e.strings,r=new Gr(e)),r}k(e){po(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new ms(this.O(Zr()),this.O(Zr()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this.v=e,(r=this._$AP)==null||r.call(this,e))}};class en{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=ge,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ge}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Zt(this,e,r,0),s=!Jr(e)||e!==this._$AH&&e!==Mt,s&&(this._$AH=e);else{const l=e;let c,h;for(e=o[0],c=0;c<o.length-1;c++)h=Zt(this,l[n+c],r,c),h===Mt&&(h=this._$AH[c]),s||(s=!Jr(h)||h!==this._$AH[c]),h===ge?e=ge:e!==ge&&(e+=(h??"")+o[c+1]),this._$AH[c]=h}s&&!i&&this.j(e)}j(e){e===ge?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ys extends en{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ge?void 0:e}}class vs extends en{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ge)}}class bs extends en{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Zt(this,e,r,0)??ge)===Mt)return;const n=this._$AH,i=e===ge&&n!==ge||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==ge&&(n===ge||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class xs{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Zt(this,e)}}const Za={M:uo,P:wt,A:ho,C:1,L:fs,R:gs,D:hs,V:Zt,I:Wn,H:en,N:vs,U:bs,B:ys,F:xs},Do=Pn.litHtmlPolyfillSupport;Do?.(Gr,Wn),(Pn.litHtmlVersions??(Pn.litHtmlVersions=[])).push("3.2.0");const Ja=(t,e,r)=>{const n=r?.renderBefore??e;let i=n._$litPart$;if(i===void 0){const o=r?.renderBefore??null;n._$litPart$=i=new Wn(e.insertBefore(Zr(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ke extends fr{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const r=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=r.firstChild),r}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Ja(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return Mt}}var Ho;Ke._$litElement$=!0,Ke.finalized=!0,(Ho=globalThis.litElementHydrateSupport)==null||Ho.call(globalThis,{LitElement:Ke});const No=globalThis.litElementPolyfillSupport;No?.({LitElement:Ke});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*qn(t,e){if(t!==void 0){let r=0;for(const n of t)yield e(n,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(t,e,r){return t?e(t):r?.(t)}const Ga=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,tn=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: #fff;
  --padding: 0.5rem;
  --text-transform: capitalize;
}
* {
  font-family: Roboto, sans-serif;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  position: absolute;
  right: 8px;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
`,Xa=`:root,:host { --spacing: 1rem; --block-spacing-vertical: calc(var(--spacing) * 2); --block-spacing-horizontal: var(--spacing); --background-color: var(--eox-background-color, white); --color: var(--eox-color, #2c3d49); --h-color: var(--eox-h-color, var(--color)); --hover-transparency: var(--eox-hover-transparency, 20%); --bg-hover-transparency: var(--eox-bg-hover-transparency, 40%); --btn-hover-transparency: var(--eox-btn-hover-transparency, 80%); --primary-color: var(--eox-primary-color, #004170); --primary-color-hover: color-mix( in srgb, var(--primary-color) var(--hover-transparency), transparent ); --primary-bg-color-hover: color-mix( in srgb, var(--primary-color) var(--bg-hover-transparency), transparent ); --primary-btn-color-hover: color-mix( in srgb, var(--primary-color) var(--btn-hover-transparency), transparent ); --secondary-color: var(--eox-secondary-color, #c6d4df); --secondary-color-hover: color-mix( in srgb, var(--secondary-color) var(--hover-transparency), transparent ); --secondary-bg-color-hover: color-mix( in srgb, var(--secondary-color) var(--bg-hover-transparency), transparent ); --secondary-btn-color-hover: color-mix( in srgb, var(--secondary-color) var(--btn-hover-transparency), transparent ); --success: var(--eox-success, #26cc0f); --warning: var(--eox-warning, #f18e32); --error: var(--eox-error, #ff5252); --header-font-family: var(--eox-header-font-family, "Roboto", sans-serif); --body-font-family: var(--eox-body-font-family, "Roboto", sans-serif);}* { font-size: normal; font-family: var(--body-font-family); color: var(--eox-color);}h1,h2,h3,h4,h5,h6 { font-family: var(--header-font-family);}span,p,div,main,label { font-family: var(--body-font-family);}@media (min-width: 576px) { .container { max-width: 510px; padding-right: 0; padding-left: 0; --block-spacing-vertical: calc(var(--spacing) * 2.5); }}@media (min-width: 768px) { .container { max-width: 700px; --block-spacing-vertical: calc(var(--spacing) * 3); }}@media (min-width: 992px) { .container { max-width: 920px; --block-spacing-vertical: calc(var(--spacing) * 3.5); }}@media (min-width: 1200px) { .container { max-width: 1130px; --block-spacing-vertical: calc(var(--spacing) * 4); }}.container { width: 100%; margin-right: auto; margin-left: auto; display: block; padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);}h1,h2,h3 { line-height: 120%; margin-top: 0.8rem; margin-bottom: 0.8rem;}p { --font-size: 1rem; font-weight: 400; line-height: 170%; margin-top: 0.8rem; margin-bottom: 1.6rem; font-size: var(--font-size);}body { padding: 0; margin: 0;}.sb-show-main.sb-main-padded { padding: 0;}h1,h2,h3,h4,h5,h6 { --font-weight: 700;}h1 { --font-size: 3rem; --typography-spacing-vertical: 0.5rem;}h2 { --font-size: 2rem; --typography-spacing-vertical: 0.5rem;}h3 { --font-size: 1.75rem; --typography-spacing-vertical: 0.5rem;}h4 { --font-size: 1.5rem; --typography-spacing-vertical: 0.5rem;}h5 { --font-size: 1.25rem; --typography-spacing-vertical: 0.5rem;}h1,h2,h3,h4,h5,h6 { margin-top: 0; margin-bottom: var(--typography-spacing-vertical); color: var(--h-color); font-weight: var(--font-weight); font-size: var(--font-size); font-family: var(--header-font-family);}button,.button { display: inline-flex; position: relative; align-items: center; color: #fff; border-width: 0; outline: none; border-radius: 4px; padding: 16px; height: 36px; cursor: pointer; font-family: inherit; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 1.25px; font-weight: 500; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); transition-property: box-shadow, transform, opacity, background; transition-duration: 0.28s; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);}button:hover:not([disabled]):not(.icon):not(.json-editor-btntype-*),.button:hover:not([disabled]):not(.icon) { box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); background: var(--primary-btn-color-hover);}button,button:active,.button,.button:active { background: var(--primary-color);}button[disabled],.button[disabled] { opacity: 0.5; cursor: not-allowed;}button.block,.button.block { display: block;}button.outline,.button.outline { background: transparent; box-shadow: none; color: var(--primary-color); outline: 1px solid var(--primary-color);}button.outline:hover,.button.outline:hover { background: transparent;}button.icon,.button.icon,button[class*="json-editor-btntype-"] { background: transparent; border: none; box-shadow: none; padding: 0; border-radius: 50%; width: 24px; height: 24px; text-indent: -9999px;}button.icon-text,.button.icon-text { text-indent: 26px;}button.icon-text.block,.button.icon-text.block { text-indent: 20px;}button.icon:before,button.icon-text:before,.button.icon:before,.button.icon-text:before { position: absolute; text-indent: 0; line-height: initial;}button.icon-text.block:before,.button.icon-text.block:before { text-indent: -54px;}button.icon:before,.button.icon:before,button[class*="json-editor-btntype-"]::before { width: 24px; height: 24px; margin-right: 0;}button.icon-text:before,.button.icon-text:before { width: 18px; height: 18px;}button.small,.button.small { height: 28px; padding: 12.4px; font-size: 0.75rem;}button.smallest.icon,button.smallest.icon::before { height: 16px; width: 16px; padding: 0;}input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}textarea { height: 90px; resize: none; border-radius: 4px; box-sizing: border-box !important; width: 100%; padding: 5px 7px; border: 1px solid var(--secondary-color); font-size: smaller; background: var(--background-color);}input[type="text"],input[type="url"],input[type="email"],input[type="password"],input[type="text"],input[type="number"],input[type="search"],input[type="tel"],select { box-sizing: border-box; width: 100%; margin-top: 0.5rem; margin-bottom: 0.5rem; padding: 5px 7px; border-radius: 4px; border: 1px solid #0004;}ul.list-wrap { padding: 0;}ul.list-wrap li:hover,ul.list-wrap li.selected { background: var(--secondary-bg-color-hover);}ul.list-wrap li { list-style: none; padding: 4px;}ul.list-wrap li { border-bottom: 1.2px solid var(--secondary-color);}ul.list-wrap li:first-child { border-top: 1.2px solid var(--secondary-color);}ul.list-wrap li .list { width: 100%; align-items: center; justify-content: space-between; display: flex; align-items: center; cursor: pointer; font-size: small; gap: 10px;}ul.list-wrap li .list span { display: flex; align-items: center; cursor: pointer; font-size: small; flex-grow: 1;}input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}input[type="range"] { -webkit-appearance: none; width: 90%; margin-left: 5%; height: 6px; border-radius: 5px; background: #d7dcdf; outline: none; padding: 0;}input[type="range"]::-webkit-slider-thumb { appearance: none; width: 15px; height: 15px; border-radius: 50%; background: #2c3e50; cursor: pointer; transition: background 0.15s ease-in-out;}.range-slider { margin: 60px 0 0 0;}.range-slider { width: 100%;}input[type="range"]::-webkit-slider-thumb:hover { background: #00416f;}input[type="range"]:active::-webkit-slider-thumb { background: #00416f;}input[type="range"]::-moz-range-thumb { width: 15px; height: 15px; border: 0; border-radius: 50%; background: #2c3e50; cursor: pointer; transition: background 0.15s ease-in-out;}input[type="range"]::-moz-range-thumb:hover { background: #00416f;}input[type="range"]:active::-moz-range-thumb { background: #00416f;}input[type="range"]:focus::-webkit-slider-thumb { box-shadow: 0 0 0 3px #fff0, 0 0 0 6px #00416f00;}.range-slider__value { display: inline-block; position: relative; width: 60px; color: #fff; line-height: 20px; text-align: center; border-radius: 3px; background: #2c3e50; padding: 5px 10px; margin-left: 8px;}.range-slider__value:after { position: absolute; top: 8px; left: -7px; width: 0; height: 0; border-top: 7px solid transparent; border-right: 7px solid #2c3e50; border-bottom: 7px solid transparent; content: "";}input::-moz-focus-inner,input::-moz-focus-outer { border: 0;}`;var Ii,ws;class Ka extends Ke{constructor(){super(),Ge(this,Ii),this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return Z`
      <style>
        ${!this.unstyled&&tn}
      </style>

      ${We(this.filterObject.featured,()=>Z`<slot name="filter"></slot>`,()=>Z`<details
          @toggle="${le(this,Ii,ws)}"
          class="details-filter"
          ?open=${this.filterObject.expanded||ge}
        >
          <summary>
            <span
              class="title"
              style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
            >
              ${this.filterObject.title||this.filterObject.key||"Filter"}
              <slot name="reset-button"></slot>
            </span>
          </summary>
          <div>
            <slot name="filter"></slot>
          </div>
        </details>`)}
    `}}Ii=new WeakSet,ws=function(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Ka);function $t(t){return Array.isArray?Array.isArray(t):As(t)==="[object Array]"}const Qa=1/0;function el(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Qa?"-0":e}function tl(t){return t==null?"":el(t)}function dt(t){return typeof t=="string"}function $s(t){return typeof t=="number"}function rl(t){return t===!0||t===!1||nl(t)&&As(t)=="[object Boolean]"}function _s(t){return typeof t=="object"}function nl(t){return _s(t)&&t!==null}function Je(t){return t!=null}function Si(t){return!t.trim().length}function As(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const il="Incorrect 'index' type",ol=t=>`Invalid value for key ${t}`,sl=t=>`Pattern length exceeds max of ${t}.`,al=t=>`Missing ${t} property in key`,ll=t=>`Property 'weight' in key '${t}' must be a positive integer`,Bo=Object.prototype.hasOwnProperty;class cl{constructor(e){this._keys=[],this._keyMap={};let r=0;e.forEach(n=>{let i=Es(n);this._keys.push(i),this._keyMap[i.id]=i,r+=i.weight}),this._keys.forEach(n=>{n.weight/=r})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Es(t){let e=null,r=null,n=null,i=1,o=null;if(dt(t)||$t(t))n=t,e=Fo(t),r=Di(t);else{if(!Bo.call(t,"name"))throw new Error(al("name"));const s=t.name;if(n=s,Bo.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(ll(s));e=Fo(s),r=Di(s),o=t.getFn}return{path:e,id:r,weight:i,src:n,getFn:o}}function Fo(t){return $t(t)?t:t.split(".")}function Di(t){return $t(t)?t.join("."):t}function ul(t,e){let r=[],n=!1;const i=(o,s,l)=>{if(Je(o))if(!s[l])r.push(o);else{let c=s[l];const h=o[c];if(!Je(h))return;if(l===s.length-1&&(dt(h)||$s(h)||rl(h)))r.push(tl(h));else if($t(h)){n=!0;for(let f=0,m=h.length;f<m;f+=1)i(h[f],s,l+1)}else s.length&&i(h,s,l+1)}};return i(t,dt(e)?e.split("."):e,0),n?r:r[0]}const hl={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},dl={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},pl={location:0,threshold:.6,distance:100},fl={useExtendedSearch:!1,getFn:ul,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Y={...dl,...hl,...pl,...fl};const gl=/[^ ]+/g;function ml(t=1,e=3){const r=new Map,n=Math.pow(10,e);return{get(i){const o=i.match(gl).length;if(r.has(o))return r.get(o);const s=1/Math.pow(o,.5*t),l=parseFloat(Math.round(s*n)/n);return r.set(o,l),l},clear(){r.clear()}}}class fo{constructor({getFn:e=Y.getFn,fieldNormWeight:r=Y.fieldNormWeight}={}){this.norm=ml(r,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((r,n)=>{this._keysMap[r.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,dt(this.docs[0])?this.docs.forEach((e,r)=>{this._addString(e,r)}):this.docs.forEach((e,r)=>{this._addObject(e,r)}),this.norm.clear())}add(e){const r=this.size();dt(e)?this._addString(e,r):this._addObject(e,r)}removeAt(e){this.records.splice(e,1);for(let r=e,n=this.size();r<n;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(e,r){return e[this._keysMap[r]]}size(){return this.records.length}_addString(e,r){if(!Je(e)||Si(e))return;let n={v:e,i:r,n:this.norm.get(e)};this.records.push(n)}_addObject(e,r){let n={i:r,$:{}};this.keys.forEach((i,o)=>{let s=i.getFn?i.getFn(e):this.getFn(e,i.path);if(Je(s)){if($t(s)){let l=[];const c=[{nestedArrIndex:-1,value:s}];for(;c.length;){const{nestedArrIndex:h,value:f}=c.pop();if(Je(f))if(dt(f)&&!Si(f)){let m={v:f,i:h,n:this.norm.get(f)};l.push(m)}else $t(f)&&f.forEach((m,x)=>{c.push({nestedArrIndex:x,value:m})})}n.$[o]=l}else if(dt(s)&&!Si(s)){let l={v:s,n:this.norm.get(s)};n.$[o]=l}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ks(t,e,{getFn:r=Y.getFn,fieldNormWeight:n=Y.fieldNormWeight}={}){const i=new fo({getFn:r,fieldNormWeight:n});return i.setKeys(t.map(Es)),i.setSources(e),i.create(),i}function yl(t,{getFn:e=Y.getFn,fieldNormWeight:r=Y.fieldNormWeight}={}){const{keys:n,records:i}=t,o=new fo({getFn:e,fieldNormWeight:r});return o.setKeys(n),o.setIndexRecords(i),o}function kn(t,{errors:e=0,currentLocation:r=0,expectedLocation:n=0,distance:i=Y.distance,ignoreLocation:o=Y.ignoreLocation}={}){const s=e/t.length;if(o)return s;const l=Math.abs(n-r);return i?s+l/i:l?1:s}function vl(t=[],e=Y.minMatchCharLength){let r=[],n=-1,i=-1,o=0;for(let s=t.length;o<s;o+=1){let l=t[o];l&&n===-1?n=o:!l&&n!==-1&&(i=o-1,i-n+1>=e&&r.push([n,i]),n=-1)}return t[o-1]&&o-n>=e&&r.push([n,o-1]),r}const qt=32;function bl(t,e,r,{location:n=Y.location,distance:i=Y.distance,threshold:o=Y.threshold,findAllMatches:s=Y.findAllMatches,minMatchCharLength:l=Y.minMatchCharLength,includeMatches:c=Y.includeMatches,ignoreLocation:h=Y.ignoreLocation}={}){if(e.length>qt)throw new Error(sl(qt));const f=e.length,m=t.length,x=Math.max(0,Math.min(n,m));let v=o,_=x;const k=l>1||c,z=k?Array(m):[];let D;for(;(D=t.indexOf(e,_))>-1;){let ue=kn(e,{currentLocation:D,expectedLocation:x,distance:i,ignoreLocation:h});if(v=Math.min(ue,v),_=D+f,k){let we=0;for(;we<f;)z[D+we]=1,we+=1}}_=-1;let G=[],J=1,de=f+m;const Q=1<<f-1;for(let ue=0;ue<f;ue+=1){let we=0,Ae=de;for(;we<Ae;)kn(e,{errors:ue,currentLocation:x+Ae,expectedLocation:x,distance:i,ignoreLocation:h})<=v?we=Ae:de=Ae,Ae=Math.floor((de-we)/2+we);de=Ae;let pe=Math.max(1,x-Ae+1),ie=s?m:Math.min(x+Ae,m)+f,qe=Array(ie+2);qe[ie+1]=(1<<ue)-1;for(let Pe=ie;Pe>=pe;Pe-=1){let H=Pe-1,M=r[t.charAt(H)];if(k&&(z[H]=+!!M),qe[Pe]=(qe[Pe+1]<<1|1)&M,ue&&(qe[Pe]|=(G[Pe+1]|G[Pe])<<1|1|G[Pe+1]),qe[Pe]&Q&&(J=kn(e,{errors:ue,currentLocation:H,expectedLocation:x,distance:i,ignoreLocation:h}),J<=v)){if(v=J,_=H,_<=x)break;pe=Math.max(1,2*x-_)}}if(kn(e,{errors:ue+1,currentLocation:x,expectedLocation:x,distance:i,ignoreLocation:h})>v)break;G=qe}const ne={isMatch:_>=0,score:Math.max(.001,J)};if(k){const ue=vl(z,l);ue.length?c&&(ne.indices=ue):ne.isMatch=!1}return ne}function xl(t){let e={};for(let r=0,n=t.length;r<n;r+=1){const i=t.charAt(r);e[i]=(e[i]||0)|1<<n-r-1}return e}class Ss{constructor(e,{location:r=Y.location,threshold:n=Y.threshold,distance:i=Y.distance,includeMatches:o=Y.includeMatches,findAllMatches:s=Y.findAllMatches,minMatchCharLength:l=Y.minMatchCharLength,isCaseSensitive:c=Y.isCaseSensitive,ignoreLocation:h=Y.ignoreLocation}={}){if(this.options={location:r,threshold:n,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:h},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(x,v)=>{this.chunks.push({pattern:x,alphabet:xl(x),startIndex:v})},m=this.pattern.length;if(m>qt){let x=0;const v=m%qt,_=m-v;for(;x<_;)f(this.pattern.substr(x,qt),x),x+=qt;if(v){const k=m-qt;f(this.pattern.substr(k),k)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:r,includeMatches:n}=this.options;if(r||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return n&&(_.indices=[[0,e.length-1]]),_}const{location:i,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:c,ignoreLocation:h}=this.options;let f=[],m=0,x=!1;this.chunks.forEach(({pattern:_,alphabet:k,startIndex:z})=>{const{isMatch:D,score:G,indices:J}=bl(e,_,k,{location:i+z,distance:o,threshold:s,findAllMatches:l,minMatchCharLength:c,includeMatches:n,ignoreLocation:h});D&&(x=!0),m+=G,D&&J&&(f=[...f,...J])});let v={isMatch:x,score:x?m/this.chunks.length:1};return x&&n&&(v.indices=f),v}}class Ct{constructor(e){this.pattern=e}static isMultiMatch(e){return zo(e,this.multiRegex)}static isSingleMatch(e){return zo(e,this.singleRegex)}search(){}}function zo(t,e){const r=t.match(e);return r?r[1]:null}class wl extends Ct{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const r=e===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class $l extends Ct{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class _l extends Ct{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const r=e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class Al extends Ct{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const r=!e.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class El extends Ct{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const r=e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class kl extends Ct{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const r=!e.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Ms extends Ct{constructor(e,{location:r=Y.location,threshold:n=Y.threshold,distance:i=Y.distance,includeMatches:o=Y.includeMatches,findAllMatches:s=Y.findAllMatches,minMatchCharLength:l=Y.minMatchCharLength,isCaseSensitive:c=Y.isCaseSensitive,ignoreLocation:h=Y.ignoreLocation}={}){super(e),this._bitapSearch=new Ss(e,{location:r,threshold:n,distance:i,includeMatches:o,findAllMatches:s,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Os extends Ct{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let r=0,n;const i=[],o=this.pattern.length;for(;(n=e.indexOf(this.pattern,r))>-1;)r=n+o,i.push([n,r-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const Hi=[wl,Os,_l,Al,kl,El,$l,Ms],Uo=Hi.length,Sl=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ml="|";function Ol(t,e={}){return t.split(Ml).map(r=>{let n=r.trim().split(Sl).filter(o=>o&&!!o.trim()),i=[];for(let o=0,s=n.length;o<s;o+=1){const l=n[o];let c=!1,h=-1;for(;!c&&++h<Uo;){const f=Hi[h];let m=f.isMultiMatch(l);m&&(i.push(new f(m,e)),c=!0)}if(!c)for(h=-1;++h<Uo;){const f=Hi[h];let m=f.isSingleMatch(l);if(m){i.push(new f(m,e));break}}}return i})}const Ll=new Set([Ms.type,Os.type]);class Cl{constructor(e,{isCaseSensitive:r=Y.isCaseSensitive,includeMatches:n=Y.includeMatches,minMatchCharLength:i=Y.minMatchCharLength,ignoreLocation:o=Y.ignoreLocation,findAllMatches:s=Y.findAllMatches,location:l=Y.location,threshold:c=Y.threshold,distance:h=Y.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:n,minMatchCharLength:i,findAllMatches:s,ignoreLocation:o,location:l,threshold:c,distance:h},this.pattern=r?e:e.toLowerCase(),this.query=Ol(this.pattern,this.options)}static condition(e,r){return r.useExtendedSearch}searchIn(e){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,s=[],l=0;for(let c=0,h=r.length;c<h;c+=1){const f=r[c];s.length=0,o=0;for(let m=0,x=f.length;m<x;m+=1){const v=f[m],{isMatch:_,indices:k,score:z}=v.search(e);if(_){if(o+=1,l+=z,n){const D=v.constructor.type;Ll.has(D)?s=[...s,...k]:s.push(k)}}else{l=0,o=0,s.length=0;break}}if(o){let m={isMatch:!0,score:l/o};return n&&(m.indices=s),m}}return{isMatch:!1,score:1}}}const Ni=[];function jl(...t){Ni.push(...t)}function Bi(t,e){for(let r=0,n=Ni.length;r<n;r+=1){let i=Ni[r];if(i.condition(t,e))return new i(t,e)}return new Ss(t,e)}const In={AND:"$and",OR:"$or"},Fi={PATH:"$path",PATTERN:"$val"},zi=t=>!!(t[In.AND]||t[In.OR]),Rl=t=>!!t[Fi.PATH],Pl=t=>!$t(t)&&_s(t)&&!zi(t),Wo=t=>({[In.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ls(t,e,{auto:r=!0}={}){const n=i=>{let o=Object.keys(i);const s=Rl(i);if(!s&&o.length>1&&!zi(i))return n(Wo(i));if(Pl(i)){const c=s?i[Fi.PATH]:o[0],h=s?i[Fi.PATTERN]:i[c];if(!dt(h))throw new Error(ol(c));const f={keyId:Di(c),pattern:h};return r&&(f.searcher=Bi(h,e)),f}let l={children:[],operator:o[0]};return o.forEach(c=>{const h=i[c];$t(h)&&h.forEach(f=>{l.children.push(n(f))})}),l};return zi(t)||(t=Wo(t)),n(t)}function Tl(t,{ignoreFieldNorm:e=Y.ignoreFieldNorm}){t.forEach(r=>{let n=1;r.matches.forEach(({key:i,norm:o,score:s})=>{const l=i?i.weight:null;n*=Math.pow(s===0&&l?Number.EPSILON:s,(l||1)*(e?1:o))}),r.score=n})}function Il(t,e){const r=t.matches;e.matches=[],Je(r)&&r.forEach(n=>{if(!Je(n.indices)||!n.indices.length)return;const{indices:i,value:o}=n;let s={indices:i,value:o};n.key&&(s.key=n.key.src),n.idx>-1&&(s.refIndex=n.idx),e.matches.push(s)})}function Dl(t,e){e.score=t.score}function Hl(t,e,{includeMatches:r=Y.includeMatches,includeScore:n=Y.includeScore}={}){const i=[];return r&&i.push(Il),n&&i.push(Dl),t.map(o=>{const{idx:s}=o,l={item:e[s],refIndex:s};return i.length&&i.forEach(c=>{c(o,l)}),l})}class jt{constructor(e,r={},n){this.options={...Y,...r},this.options.useExtendedSearch,this._keyStore=new cl(this.options.keys),this.setCollection(e,n)}setCollection(e,r){if(this._docs=e,r&&!(r instanceof fo))throw new Error(il);this._myIndex=r||ks(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){Je(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const r=[];for(let n=0,i=this._docs.length;n<i;n+=1){const o=this._docs[n];e(o,n)&&(this.removeAt(n),n-=1,i-=1,r.push(o))}return r}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:r=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:o,sortFn:s,ignoreFieldNorm:l}=this.options;let c=dt(e)?dt(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Tl(c,{ignoreFieldNorm:l}),o&&c.sort(s),$s(r)&&r>-1&&(c=c.slice(0,r)),Hl(c,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(e){const r=Bi(e,this.options),{records:n}=this._myIndex,i=[];return n.forEach(({v:o,i:s,n:l})=>{if(!Je(o))return;const{isMatch:c,score:h,indices:f}=r.searchIn(o);c&&i.push({item:o,idx:s,matches:[{score:h,value:o,norm:l,indices:f}]})}),i}_searchLogical(e){const r=Ls(e,this.options),n=(l,c,h)=>{if(!l.children){const{keyId:m,searcher:x}=l,v=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(c,m),searcher:x});return v&&v.length?[{idx:h,item:c,matches:v}]:[]}const f=[];for(let m=0,x=l.children.length;m<x;m+=1){const v=l.children[m],_=n(v,c,h);if(_.length)f.push(..._);else if(l.operator===In.AND)return[]}return f},i=this._myIndex.records,o={},s=[];return i.forEach(({$:l,i:c})=>{if(Je(l)){let h=n(r,l,c);h.length&&(o[c]||(o[c]={idx:c,item:l,matches:[]},s.push(o[c])),h.forEach(({matches:f})=>{o[c].matches.push(...f)}))}}),s}_searchObjectList(e){const r=Bi(e,this.options),{keys:n,records:i}=this._myIndex,o=[];return i.forEach(({$:s,i:l})=>{if(!Je(s))return;let c=[];n.forEach((h,f)=>{c.push(...this._findMatches({key:h,value:s[f],searcher:r}))}),c.length&&o.push({idx:l,item:s,matches:c})}),o}_findMatches({key:e,value:r,searcher:n}){if(!Je(r))return[];let i=[];if($t(r))r.forEach(({v:o,i:s,n:l})=>{if(!Je(o))return;const{isMatch:c,score:h,indices:f}=n.searchIn(o);c&&i.push({score:h,key:e,value:o,idx:s,norm:l,indices:f})});else{const{v:o,n:s}=r,{isMatch:l,score:c,indices:h}=n.searchIn(o);l&&i.push({score:c,key:e,value:o,norm:s,indices:h})}return i}}jt.version="7.0.0";jt.createIndex=ks;jt.parseIndex=yl;jt.config=Y;jt.parseQuery=Ls;jl(Cl);function Cs(t,e){const r=new jt(e.filterProperties,{keys:["title"]}),n=t.target.value,i=r.search(n).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(e.filters).forEach(o=>{e.querySelector(`[data-details="${o}"]`).parentElement.style.display=i.includes(o)||!n?"":"none"})}function Nl(t,e){const r=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${r}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const Ui=Math.min,gr=Math.max,Dn=Math.round,Sn=Math.floor,Ot=t=>({x:t,y:t});function js(t){return t.split("-")[0]}function Bl(t){return t.split("-")[1]}function Fl(t){return t==="x"?"y":"x"}function zl(t){return t==="y"?"height":"width"}function Rs(t){return["top","bottom"].includes(js(t))?"y":"x"}function Ul(t){return Fl(Rs(t))}function Ps(t){const{x:e,y:r,width:n,height:i}=t;return{width:n,height:i,top:r,left:e,right:e+n,bottom:r+i,x:e,y:r}}function qo(t,e,r){let{reference:n,floating:i}=t;const o=Rs(e),s=Ul(e),l=zl(s),c=js(e),h=o==="y",f=n.x+n.width/2-i.width/2,m=n.y+n.height/2-i.height/2,x=n[l]/2-i[l]/2;let v;switch(c){case"top":v={x:f,y:n.y-i.height};break;case"bottom":v={x:f,y:n.y+n.height};break;case"right":v={x:n.x+n.width,y:m};break;case"left":v={x:n.x-i.width,y:m};break;default:v={x:n.x,y:n.y}}switch(Bl(e)){case"start":v[s]-=x*(r&&h?-1:1);break;case"end":v[s]+=x*(r&&h?-1:1);break}return v}const Wl=async(t,e,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:s}=r,l=o.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let h=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:m}=qo(h,n,c),x=n,v={},_=0;for(let k=0;k<l.length;k++){const{name:z,fn:D}=l[k],{x:G,y:J,data:de,reset:Q}=await D({x:f,y:m,initialPlacement:n,placement:x,strategy:i,middlewareData:v,rects:h,platform:s,elements:{reference:t,floating:e}});f=G??f,m=J??m,v={...v,[z]:{...v[z],...de}},Q&&_<=50&&(_++,typeof Q=="object"&&(Q.placement&&(x=Q.placement),Q.rects&&(h=Q.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):Q.rects),{x:f,y:m}=qo(h,x,c)),k=-1)}return{x:f,y:m,placement:x,strategy:i,middlewareData:v}};function Vn(){return typeof window<"u"}function xr(t){return Ts(t)?(t.nodeName||"").toLowerCase():"#document"}function Qe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ft(t){var e;return(e=(Ts(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ts(t){return Vn()?t instanceof Node||t instanceof Qe(t).Node:!1}function st(t){return Vn()?t instanceof Element||t instanceof Qe(t).Element:!1}function pt(t){return Vn()?t instanceof HTMLElement||t instanceof Qe(t).HTMLElement:!1}function Vo(t){return!Vn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qe(t).ShadowRoot}function rn(t){const{overflow:e,overflowX:r,overflowY:n,display:i}=at(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+r)&&!["inline","contents"].includes(i)}function ql(t){return["table","td","th"].includes(xr(t))}function Yn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function go(t){const e=mo(),r=st(t)?at(t):t;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Vl(t){let e=Lt(t);for(;pt(e)&&!vr(e);){if(go(e))return e;if(Yn(e))return null;e=Lt(e)}return null}function mo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vr(t){return["html","body","#document"].includes(xr(t))}function at(t){return Qe(t).getComputedStyle(t)}function Zn(t){return st(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Lt(t){if(xr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Vo(t)&&t.host||ft(t);return Vo(e)?e.host:e}function Is(t){const e=Lt(t);return vr(e)?t.ownerDocument?t.ownerDocument.body:t.body:pt(e)&&rn(e)?e:Is(e)}function Xr(t,e,r){var n;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Is(t),o=i===((n=t.ownerDocument)==null?void 0:n.body),s=Qe(i);if(o){const l=Wi(s);return e.concat(s,s.visualViewport||[],rn(i)?i:[],l&&r?Xr(l):[])}return e.concat(i,Xr(i,[],r))}function Wi(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ds(t){const e=at(t);let r=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=pt(t),o=i?t.offsetWidth:r,s=i?t.offsetHeight:n,l=Dn(r)!==o||Dn(n)!==s;return l&&(r=o,n=s),{width:r,height:n,$:l}}function yo(t){return st(t)?t:t.contextElement}function mr(t){const e=yo(t);if(!pt(e))return Ot(1);const r=e.getBoundingClientRect(),{width:n,height:i,$:o}=Ds(e);let s=(o?Dn(r.width):r.width)/n,l=(o?Dn(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Yl=Ot(0);function Hs(t){const e=Qe(t);return!mo()||!e.visualViewport?Yl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Zl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Qe(t)?!1:e}function Jt(t,e,r,n){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),o=yo(t);let s=Ot(1);e&&(n?st(n)&&(s=mr(n)):s=mr(t));const l=Zl(o,r,n)?Hs(o):Ot(0);let c=(i.left+l.x)/s.x,h=(i.top+l.y)/s.y,f=i.width/s.x,m=i.height/s.y;if(o){const x=Qe(o),v=n&&st(n)?Qe(n):n;let _=x,k=Wi(_);for(;k&&n&&v!==_;){const z=mr(k),D=k.getBoundingClientRect(),G=at(k),J=D.left+(k.clientLeft+parseFloat(G.paddingLeft))*z.x,de=D.top+(k.clientTop+parseFloat(G.paddingTop))*z.y;c*=z.x,h*=z.y,f*=z.x,m*=z.y,c+=J,h+=de,_=Qe(k),k=Wi(_)}}return Ps({width:f,height:m,x:c,y:h})}function Jl(t){let{elements:e,rect:r,offsetParent:n,strategy:i}=t;const o=i==="fixed",s=ft(n),l=e?Yn(e.floating):!1;if(n===s||l&&o)return r;let c={scrollLeft:0,scrollTop:0},h=Ot(1);const f=Ot(0),m=pt(n);if((m||!m&&!o)&&((xr(n)!=="body"||rn(s))&&(c=Zn(n)),pt(n))){const x=Jt(n);h=mr(n),f.x=x.x+n.clientLeft,f.y=x.y+n.clientTop}return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-c.scrollLeft*h.x+f.x,y:r.y*h.y-c.scrollTop*h.y+f.y}}function Gl(t){return Array.from(t.getClientRects())}function qi(t,e){const r=Zn(t).scrollLeft;return e?e.left+r:Jt(ft(t)).left+r}function Xl(t){const e=ft(t),r=Zn(t),n=t.ownerDocument.body,i=gr(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),o=gr(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-r.scrollLeft+qi(t);const l=-r.scrollTop;return at(n).direction==="rtl"&&(s+=gr(e.clientWidth,n.clientWidth)-i),{width:i,height:o,x:s,y:l}}function Kl(t,e){const r=Qe(t),n=ft(t),i=r.visualViewport;let o=n.clientWidth,s=n.clientHeight,l=0,c=0;if(i){o=i.width,s=i.height;const h=mo();(!h||h&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:s,x:l,y:c}}function Ql(t,e){const r=Jt(t,!0,e==="fixed"),n=r.top+t.clientTop,i=r.left+t.clientLeft,o=pt(t)?mr(t):Ot(1),s=t.clientWidth*o.x,l=t.clientHeight*o.y,c=i*o.x,h=n*o.y;return{width:s,height:l,x:c,y:h}}function Yo(t,e,r){let n;if(e==="viewport")n=Kl(t,r);else if(e==="document")n=Xl(ft(t));else if(st(e))n=Ql(e,r);else{const i=Hs(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return Ps(n)}function Ns(t,e){const r=Lt(t);return r===e||!st(r)||vr(r)?!1:at(r).position==="fixed"||Ns(r,e)}function ec(t,e){const r=e.get(t);if(r)return r;let n=Xr(t,[],!1).filter(l=>st(l)&&xr(l)!=="body"),i=null;const o=at(t).position==="fixed";let s=o?Lt(t):t;for(;st(s)&&!vr(s);){const l=at(s),c=go(s);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&i&&["absolute","fixed"].includes(i.position)||rn(s)&&!c&&Ns(t,s))?n=n.filter(h=>h!==s):i=l,s=Lt(s)}return e.set(t,n),n}function tc(t){let{element:e,boundary:r,rootBoundary:n,strategy:i}=t;const o=[...r==="clippingAncestors"?Yn(e)?[]:ec(e,this._c):[].concat(r),n],s=o[0],l=o.reduce((c,h)=>{const f=Yo(e,h,i);return c.top=gr(f.top,c.top),c.right=Ui(f.right,c.right),c.bottom=Ui(f.bottom,c.bottom),c.left=gr(f.left,c.left),c},Yo(e,s,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function rc(t){const{width:e,height:r}=Ds(t);return{width:e,height:r}}function nc(t,e,r){const n=pt(e),i=ft(e),o=r==="fixed",s=Jt(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const c=Ot(0);if(n||!n&&!o)if((xr(e)!=="body"||rn(i))&&(l=Zn(e)),n){const v=Jt(e,!0,o,e);c.x=v.x+e.clientLeft,c.y=v.y+e.clientTop}else i&&(c.x=qi(i));let h=0,f=0;if(i&&!n&&!o){const v=i.getBoundingClientRect();f=v.top+l.scrollTop,h=v.left+l.scrollLeft-qi(i,v)}const m=s.left+l.scrollLeft-c.x-h,x=s.top+l.scrollTop-c.y-f;return{x:m,y:x,width:s.width,height:s.height}}function Mi(t){return at(t).position==="static"}function Zo(t,e){if(!pt(t)||at(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return ft(t)===r&&(r=r.ownerDocument.body),r}function Bs(t,e){const r=Qe(t);if(Yn(t))return r;if(!pt(t)){let i=Lt(t);for(;i&&!vr(i);){if(st(i)&&!Mi(i))return i;i=Lt(i)}return r}let n=Zo(t,e);for(;n&&ql(n)&&Mi(n);)n=Zo(n,e);return n&&vr(n)&&Mi(n)&&!go(n)?r:n||Vl(t)||r}const ic=async function(t){const e=this.getOffsetParent||Bs,r=this.getDimensions,n=await r(t.floating);return{reference:nc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function oc(t){return at(t).direction==="rtl"}const sc={convertOffsetParentRelativeRectToViewportRelativeRect:Jl,getDocumentElement:ft,getClippingRect:tc,getOffsetParent:Bs,getElementRects:ic,getClientRects:Gl,getDimensions:rc,getScale:mr,isElement:st,isRTL:oc};function ac(t,e){let r=null,n;const i=ft(t);function o(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const{left:h,top:f,width:m,height:x}=t.getBoundingClientRect();if(l||e(),!m||!x)return;const v=Sn(f),_=Sn(i.clientWidth-(h+m)),k=Sn(i.clientHeight-(f+x)),z=Sn(h),D={rootMargin:-v+"px "+-_+"px "+-k+"px "+-z+"px",threshold:gr(0,Ui(1,c))||1};let G=!0;function J(de){const Q=de[0].intersectionRatio;if(Q!==c){if(!G)return s();Q?s(!1,Q):n=setTimeout(()=>{s(!1,1e-7)},1e3)}G=!1}try{r=new IntersectionObserver(J,{...D,root:i.ownerDocument})}catch{r=new IntersectionObserver(J,D)}r.observe(t)}return s(!0),o}function lc(t,e,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,h=yo(t),f=i||o?[...h?Xr(h):[],...Xr(e)]:[];f.forEach(D=>{i&&D.addEventListener("scroll",r,{passive:!0}),o&&D.addEventListener("resize",r)});const m=h&&l?ac(h,r):null;let x=-1,v=null;s&&(v=new ResizeObserver(D=>{let[G]=D;G&&G.target===h&&v&&(v.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var J;(J=v)==null||J.observe(e)})),r()}),h&&!c&&v.observe(h),v.observe(e));let _,k=c?Jt(t):null;c&&z();function z(){const D=Jt(t);k&&(D.x!==k.x||D.y!==k.y||D.width!==k.width||D.height!==k.height)&&r(),k=D,_=requestAnimationFrame(z)}return r(),()=>{var D;f.forEach(G=>{i&&G.removeEventListener("scroll",r),o&&G.removeEventListener("resize",r)}),m?.(),(D=v)==null||D.disconnect(),v=null,c&&cancelAnimationFrame(_)}}const cc=(t,e,r)=>{const n=new Map,i={platform:sc,...r},o={...i.platform,_c:n};return Wl(t,e,{...i,platform:o})};function uc(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),r=t.renderRoot.querySelector("[popover]");return lc(e,r,()=>{r.matches(":popover-open")&&cc(e,r,{strategy:"fixed"}).then(({x:n,y:i})=>{Object.assign(r.style,{left:`${n}px`,top:`${i}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Fs(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Cs({target:{value:""}},t)}function hc(t,e){e.inlineMode&&t.stopPropagation()}function dc(t){t.inlineMode&&(t.showDropdown=!0)}function pc(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function fc(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Fs(e),e.showDropdown=!1)}function gc(t,e){e.inlineMode&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Fs(e),e.showDropdown=!1)}function mc(t,e){var r=0,n=0,i=0,o=0,s=0,l=0,c=0,h=0,f=null,m=null,x=t[0],v=t[1],_=e.length;for(r;r<_;r++){n=0;var k=e[r].length-1,z=e[r];if(f=z[0],f[0]!==z[k][0]&&f[1]!==z[k][1])throw new Error("First and last coordinates in a ring must be the same");for(s=f[0]-x,l=f[1]-v,n;n<k;n++){if(m=z[n+1],h=m[1]-v,l<0&&h<0||l>0&&h>0){f=m,l=h,s=f[0]-x;continue}if(c=m[0]-t[0],h>0&&l<=0){if(o=s*h-c*l,o>0)i=i+1;else if(o===0)return 0}else if(l>0&&h<=0){if(o=s*h-c*l,o<0)i=i+1;else if(o===0)return 0}else if(h===0&&l<0){if(o=s*h-c*l,o===0)return 0}else if(l===0&&h<0){if(o=s*h-c*l,o===0)return 0}else if(l===0&&h===0&&(c<=0&&s>=0||s<=0&&c>=0))return 0;f=m,l=h,s=c}}return i%2!==0}function Gt(t,e,r={}){const n={type:"Feature"};return(r.id===0||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=e||{},n.geometry=t,n}function yc(t,e,r={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Jo(t[0])||!Jo(t[1]))throw new Error("coordinates must contain numbers");return Gt({type:"Point",coordinates:t},e,r)}function vc(t,e,r={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Gt({type:"LineString",coordinates:t},e,r)}function Vi(t,e={}){const r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function bc(t,e,r={}){return Gt({type:"MultiLineString",coordinates:t},e,r)}function Jo(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function zs(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function xc(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function br(t){return t.type==="Feature"?t.geometry:t}function rt(t,e,r={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const n=zs(t),i=br(e),o=i.type,s=e.bbox;let l=i.coordinates;if(s&&wc(n,s)===!1)return!1;o==="Polygon"&&(l=[l]);let c=!1;for(var h=0;h<l.length;++h){const f=mc(n,l[h]);if(f===0)return!r.ignoreBoundary;f&&(c=!0)}return c}function wc(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Us{constructor(e=[],r=$c){if(this.data=e,this.length=this.data.length,this.compare=r,this.length>0)for(let n=(this.length>>1)-1;n>=0;n--)this._down(n)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],r=this.data.pop();return this.length--,this.length>0&&(this.data[0]=r,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:r,compare:n}=this,i=r[e];for(;e>0;){const o=e-1>>1,s=r[o];if(n(i,s)>=0)break;r[e]=s,e=o}r[e]=i}_down(e){const{data:r,compare:n}=this,i=this.length>>1,o=r[e];for(;e<i;){let s=(e<<1)+1,l=r[s];const c=s+1;if(c<this.length&&n(r[c],l)<0&&(s=c,l=r[c]),n(l,o)>=0)break;r[e]=l,e=s}r[e]=o}}function $c(t,e){return t<e?-1:t>e?1:0}function Ws(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function _c(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class Go{constructor(e,r,n,i){this.p={x:e[0],y:e[1]},this.featureId=r,this.ringId=n,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Ac(t,e){if(t.type==="FeatureCollection"){const r=t.features;for(let n=0;n<r.length;n++)Xo(r[n],e)}else Xo(t,e)}let Mn=0,On=0,Ln=0;function Xo(t,e){const r=t.type==="Feature"?t.geometry:t;let n=r.coordinates;(r.type==="Polygon"||r.type==="MultiLineString")&&(n=[n]),r.type==="LineString"&&(n=[[n]]);for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){let s=n[i][o][0],l=null;On=On+1;for(let c=0;c<n[i][o].length-1;c++){l=n[i][o][c+1];const h=new Go(s,Mn,On,Ln),f=new Go(l,Mn,On,Ln+1);h.otherEvent=f,f.otherEvent=h,Ws(h,f)>0?(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1):(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1),e.push(h),e.push(f),s=l,Ln=Ln+1}}Mn=Mn+1}class Ec{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function kc(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const r=t.leftSweepEvent.p.x,n=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,s=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,h=e.rightSweepEvent.p.y,f=(h-l)*(i-r)-(c-s)*(o-n),m=(c-s)*(n-l)-(h-l)*(r-s),x=(i-r)*(n-l)-(o-n)*(r-s);if(f===0)return!1;const v=m/f,_=x/f;if(v>=0&&v<=1&&_>=0&&_<=1){const k=r+v*(i-r),z=n+v*(o-n);return[k,z]}return!1}function Sc(t,e){e=e||!1;const r=[],n=new Us([],_c);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new Ec(i);for(let s=0;s<n.data.length;s++){const l=n.data[s];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const c=kc(o,l);c!==!1&&r.push(c)}n.push(o)}else i.isLeftEndpoint===!1&&n.pop()}return r}function Mc(t,e){const r=new Us([],Ws);return Ac(t,r),Sc(r,e)}var Oc=Mc;function vo(t,e,r={}){const{removeDuplicates:n=!0,ignoreSelfIntersections:i=!1}=r;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Gt(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Gt(e));const s=Oc(Vi(o),i);let l=[];if(n){const c={};s.forEach(h=>{const f=h.join(",");c[f]||(c[f]=!0,l.push(h))})}else l=s;return Vi(l.map(c=>yc(c)))}function qs(t,e,r){if(t!==null)for(var n,i,o,s,l,c,h,f=0,m=0,x,v=t.type,_=v==="FeatureCollection",k=v==="Feature",z=_?t.features.length:1,D=0;D<z;D++){h=_?t.features[D].geometry:k?t.geometry:t,x=h?h.type==="GeometryCollection":!1,l=x?h.geometries.length:1;for(var G=0;G<l;G++){var J=0,de=0;if(s=x?h.geometries[G]:h,s!==null){c=s.coordinates;var Q=s.type;switch(f=0,Q){case null:break;case"Point":if(e(c,m,D,J,de)===!1)return!1;m++,J++;break;case"LineString":case"MultiPoint":for(n=0;n<c.length;n++){if(e(c[n],m,D,J,de)===!1)return!1;m++,Q==="MultiPoint"&&J++}Q==="LineString"&&J++;break;case"Polygon":case"MultiLineString":for(n=0;n<c.length;n++){for(i=0;i<c[n].length-f;i++){if(e(c[n][i],m,D,J,de)===!1)return!1;m++}Q==="MultiLineString"&&J++,Q==="Polygon"&&de++}Q==="Polygon"&&J++;break;case"MultiPolygon":for(n=0;n<c.length;n++){for(de=0,i=0;i<c[n].length;i++){for(o=0;o<c[n][i].length-f;o++){if(e(c[n][i][o],m,D,J,de)===!1)return!1;m++}de++}J++}break;case"GeometryCollection":for(n=0;n<s.geometries.length;n++)if(qs(s.geometries[n],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Lc(t,e){var r,n,i,o,s,l,c,h,f,m,x=0,v=t.type==="FeatureCollection",_=t.type==="Feature",k=v?t.features.length:1;for(r=0;r<k;r++){for(l=v?t.features[r].geometry:_?t.geometry:t,h=v?t.features[r].properties:_?t.properties:{},f=v?t.features[r].bbox:_?t.bbox:void 0,m=v?t.features[r].id:_?t.id:void 0,c=l?l.type==="GeometryCollection":!1,s=c?l.geometries.length:1,i=0;i<s;i++){if(o=c?l.geometries[i]:l,o===null){if(e(null,x,h,f,m)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,x,h,f,m)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<o.geometries.length;n++)if(e(o.geometries[n],x,h,f,m)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}x++}}function Hn(t,e){Lc(t,function(r,n,i,o,s){var l=r===null?null:r.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Gt(r,i,{bbox:o,id:s}),n,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var h=0;h<r.coordinates.length;h++){var f=r.coordinates[h],m={type:c,coordinates:f};if(e(Gt(m,i),n,h)===!1)return!1}})}function Yi(t,e={}){const r=br(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),r.type){case"Polygon":return Cc(r,e);case"MultiPolygon":return jc(r,e);default:throw new Error("invalid poly")}}function Cc(t,e={}){const r=br(t).coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Vs(r,n)}function jc(t,e={}){const r=br(t).coordinates,n=e.properties?e.properties:t.type==="Feature"?t.properties:{},i=[];return r.forEach(o=>{i.push(Vs(o,n))}),Vi(i)}function Vs(t,e){return t.length>1?bc(t,e):vc(t[0],e)}function Rc(t,e,r={}){var n;const i=(n=r.ignoreSelfIntersections)!=null?n:!1;let o=!0;return Hn(t,s=>{Hn(e,l=>{if(o===!1)return!1;o=Pc(s.geometry,l.geometry,i)})}),o}function Pc(t,e,r){switch(t.type){case"Point":switch(e.type){case"Point":return!Hc(t.coordinates,e.coordinates);case"LineString":return!Ko(e,t);case"Polygon":return!rt(t,e)}break;case"LineString":switch(e.type){case"Point":return!Ko(t,e);case"LineString":return!Tc(t,e,r);case"Polygon":return!Qo(e,t,r)}break;case"Polygon":switch(e.type){case"Point":return!rt(e,t);case"LineString":return!Qo(t,e,r);case"Polygon":return!Ic(e,t,r)}}return!1}function Ko(t,e){for(let r=0;r<t.coordinates.length-1;r++)if(Dc(t.coordinates[r],t.coordinates[r+1],e.coordinates))return!0;return!1}function Tc(t,e,r){return vo(t,e,{ignoreSelfIntersections:r}).features.length>0}function Qo(t,e,r){for(const n of e.coordinates)if(rt(n,t))return!0;return vo(e,Yi(t),{ignoreSelfIntersections:r}).features.length>0}function Ic(t,e,r){for(const n of t.coordinates[0])if(rt(n,e))return!0;for(const n of e.coordinates[0])if(rt(n,t))return!0;return vo(Yi(t),Yi(e),{ignoreSelfIntersections:r}).features.length>0}function Dc(t,e,r){const n=r[0]-t[0],i=r[1]-t[1],o=e[0]-t[0],s=e[1]-t[1];return n*s-i*o!==0?!1:Math.abs(o)>=Math.abs(s)?o>0?t[0]<=r[0]&&r[0]<=e[0]:e[0]<=r[0]&&r[0]<=t[0]:s>0?t[1]<=r[1]&&r[1]<=e[1]:e[1]<=r[1]&&r[1]<=t[1]}function Hc(t,e){return t[0]===e[0]&&t[1]===e[1]}function Nc(t,e,r={}){var n;const i=(n=r.ignoreSelfIntersections)!=null?n:!1;let o=!1;return Hn(t,s=>{Hn(e,l=>{if(o===!0)return!0;o=!Rc(s.geometry,l.geometry,{ignoreSelfIntersections:i})})}),o}var Bc=Nc;function Nn(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const r=[1/0,1/0,-1/0,-1/0];return qs(t,n=>{r[0]>n[0]&&(r[0]=n[0]),r[1]>n[1]&&(r[1]=n[1]),r[2]<n[0]&&(r[2]=n[0]),r[3]<n[1]&&(r[3]=n[1])}),r}function Bn(t,e,r={}){const n=zs(t),i=xc(e);for(let o=0;o<i.length-1;o++){let s=!1;if(r.ignoreEndVertices&&(o===0&&(s="start"),o===i.length-2&&(s="end"),o===0&&o+1===i.length-1&&(s="both")),Fc(i[o],i[o+1],n,s,typeof r.epsilon>"u"?null:r.epsilon))return!0}return!1}function Fc(t,e,r,n,i){const o=r[0],s=r[1],l=t[0],c=t[1],h=e[0],f=e[1],m=r[0]-l,x=r[1]-c,v=h-l,_=f-c,k=m*_-x*v;if(i!==null){if(Math.abs(k)>i)return!1}else if(k!==0)return!1;if(n){if(n==="start")return Math.abs(v)>=Math.abs(_)?v>0?l<o&&o<=h:h<=o&&o<l:_>0?c<s&&s<=f:f<=s&&s<c;if(n==="end")return Math.abs(v)>=Math.abs(_)?v>0?l<=o&&o<h:h<o&&o<=l:_>0?c<=s&&s<f:f<s&&s<=c;if(n==="both")return Math.abs(v)>=Math.abs(_)?v>0?l<o&&o<h:h<o&&o<l:_>0?c<s&&s<f:f<s&&s<c}else return Math.abs(v)>=Math.abs(_)?v>0?l<=o&&o<=h:h<=o&&o<=l:_>0?c<=s&&s<=f:f<=s&&s<=c;return!1}function zc(t,e){var r=br(t),n=br(e),i=r.type,o=n.type;switch(i){case"Point":switch(o){case"MultiPoint":return Uc(r,n);case"LineString":return Bn(r,n,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return rt(r,n,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Wc(r,n);case"LineString":return qc(r,n);case"Polygon":case"MultiPolygon":return Vc(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Yc(r,n);case"Polygon":case"MultiPolygon":return Zc(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Jc(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Uc(t,e){var r,n=!1;for(r=0;r<e.coordinates.length;r++)if(Zs(e.coordinates[r],t.coordinates)){n=!0;break}return n}function Wc(t,e){for(var r=0;r<t.coordinates.length;r++){for(var n=!1,i=0;i<e.coordinates.length;i++)Zs(t.coordinates[r],e.coordinates[i])&&(n=!0);if(!n)return!1}return!0}function qc(t,e){for(var r=!1,n=0;n<t.coordinates.length;n++){if(!Bn(t.coordinates[n],e))return!1;r||(r=Bn(t.coordinates[n],e,{ignoreEndVertices:!0}))}return r}function Vc(t,e){for(var r=!0,n=!1,i=0;i<t.coordinates.length;i++){if(n=rt(t.coordinates[i],e),!n){r=!1;break}n=rt(t.coordinates[i],e,{ignoreBoundary:!0})}return r&&n}function Yc(t,e){for(var r=0;r<t.coordinates.length;r++)if(!Bn(t.coordinates[r],e))return!1;return!0}function Zc(t,e){var r=Nn(e),n=Nn(t);if(!Ys(r,n))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!rt(t.coordinates[o],e))return!1;if(i||(i=rt(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var s=Gc(t.coordinates[o],t.coordinates[o+1]);i=rt(s,e,{ignoreBoundary:!0})}}return i}function Jc(t,e){var r=Nn(t),n=Nn(e);if(!Ys(n,r))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!rt(t.coordinates[0][i],e))return!1;return!0}function Ys(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Zs(t,e){return t[0]===e[0]&&t[1]===e[1]}function Gc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Xc=zc;const Kc=(t,e)=>e?Bc(t,e):!0,Qc=(t,e)=>e?Xc(t,e):!0;function eu(t,e="highlight",r="title"){const n=(o,s,l)=>{const c=s.split(".");let h;for(h=0;h<c.length-1;h++)o=o[c[h]];o[c[h]]=l},i=(o,s=[])=>{let l="",c=0;return s.forEach(h=>{const f=h[1]+1;l+=[o.substring(c,h[0]),`<mark class="${e}">`,o.substring(h[0],f),"</mark>"].join(""),c=f}),l+=o.substring(c),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:s})=>{const l={...o};return s.forEach(c=>{c.key===r&&n(l,c.key,i(c.value,c.indices))}),l})}var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Js={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(Xe,function(){var r=1e3,n=6e4,i=36e5,o="millisecond",s="second",l="minute",c="hour",h="day",f="week",m="month",x="quarter",v="year",_="date",k="Invalid Date",z=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(H){var M=["th","st","nd","rd"],E=H%100;return"["+H+(M[(E-20)%10]||M[E]||M[0])+"]"}},J=function(H,M,E){var T=String(H);return!T||T.length>=M?H:""+Array(M+1-T.length).join(E)+H},de={s:J,z:function(H){var M=-H.utcOffset(),E=Math.abs(M),T=Math.floor(E/60),O=E%60;return(M<=0?"+":"-")+J(T,2,"0")+":"+J(O,2,"0")},m:function H(M,E){if(M.date()<E.date())return-H(E,M);var T=12*(E.year()-M.year())+(E.month()-M.month()),O=M.clone().add(T,m),q=E-O<0,V=M.clone().add(T+(q?-1:1),m);return+(-(T+(E-O)/(q?O-V:V-O))||0)},a:function(H){return H<0?Math.ceil(H)||0:Math.floor(H)},p:function(H){return{M:m,y:v,w:f,d:h,D:_,h:c,m:l,s,ms:o,Q:x}[H]||String(H||"").toLowerCase().replace(/s$/,"")},u:function(H){return H===void 0}},Q="en",ne={};ne[Q]=G;var ue="$isDayjsObject",we=function(H){return H instanceof qe||!(!H||!H[ue])},Ae=function H(M,E,T){var O;if(!M)return Q;if(typeof M=="string"){var q=M.toLowerCase();ne[q]&&(O=q),E&&(ne[q]=E,O=q);var V=M.split("-");if(!O&&V.length>1)return H(V[0])}else{var ce=M.name;ne[ce]=M,O=ce}return!T&&O&&(Q=O),O||!T&&Q},pe=function(H,M){if(we(H))return H.clone();var E=typeof M=="object"?M:{};return E.date=H,E.args=arguments,new qe(E)},ie=de;ie.l=Ae,ie.i=we,ie.w=function(H,M){return pe(H,{locale:M.$L,utc:M.$u,x:M.$x,$offset:M.$offset})};var qe=function(){function H(E){this.$L=Ae(E.locale,null,!0),this.parse(E),this.$x=this.$x||E.x||{},this[ue]=!0}var M=H.prototype;return M.parse=function(E){this.$d=function(T){var O=T.date,q=T.utc;if(O===null)return new Date(NaN);if(ie.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var V=O.match(z);if(V){var ce=V[2]-1||0,be=(V[7]||"0").substring(0,3);return q?new Date(Date.UTC(V[1],ce,V[3]||1,V[4]||0,V[5]||0,V[6]||0,be)):new Date(V[1],ce,V[3]||1,V[4]||0,V[5]||0,V[6]||0,be)}}return new Date(O)}(E),this.init()},M.init=function(){var E=this.$d;this.$y=E.getFullYear(),this.$M=E.getMonth(),this.$D=E.getDate(),this.$W=E.getDay(),this.$H=E.getHours(),this.$m=E.getMinutes(),this.$s=E.getSeconds(),this.$ms=E.getMilliseconds()},M.$utils=function(){return ie},M.isValid=function(){return this.$d.toString()!==k},M.isSame=function(E,T){var O=pe(E);return this.startOf(T)<=O&&O<=this.endOf(T)},M.isAfter=function(E,T){return pe(E)<this.startOf(T)},M.isBefore=function(E,T){return this.endOf(T)<pe(E)},M.$g=function(E,T,O){return ie.u(E)?this[T]:this.set(O,E)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(E,T){var O=this,q=!!ie.u(T)||T,V=ie.p(E),ce=function(Me,te){var Oe=ie.w(O.$u?Date.UTC(O.$y,te,Me):new Date(O.$y,te,Me),O);return q?Oe:Oe.endOf(h)},be=function(Me,te){return ie.w(O.toDate()[Me].apply(O.toDate("s"),(q?[0,0,0,0]:[23,59,59,999]).slice(te)),O)},_e=this.$W,Ee=this.$M,De=this.$D,Se="set"+(this.$u?"UTC":"");switch(V){case v:return q?ce(1,0):ce(31,11);case m:return q?ce(1,Ee):ce(0,Ee+1);case f:var He=this.$locale().weekStart||0,oe=(_e<He?_e+7:_e)-He;return ce(q?De-oe:De+(6-oe),Ee);case h:case _:return be(Se+"Hours",0);case c:return be(Se+"Minutes",1);case l:return be(Se+"Seconds",2);case s:return be(Se+"Milliseconds",3);default:return this.clone()}},M.endOf=function(E){return this.startOf(E,!1)},M.$set=function(E,T){var O,q=ie.p(E),V="set"+(this.$u?"UTC":""),ce=(O={},O[h]=V+"Date",O[_]=V+"Date",O[m]=V+"Month",O[v]=V+"FullYear",O[c]=V+"Hours",O[l]=V+"Minutes",O[s]=V+"Seconds",O[o]=V+"Milliseconds",O)[q],be=q===h?this.$D+(T-this.$W):T;if(q===m||q===v){var _e=this.clone().set(_,1);_e.$d[ce](be),_e.init(),this.$d=_e.set(_,Math.min(this.$D,_e.daysInMonth())).$d}else ce&&this.$d[ce](be);return this.init(),this},M.set=function(E,T){return this.clone().$set(E,T)},M.get=function(E){return this[ie.p(E)]()},M.add=function(E,T){var O,q=this;E=Number(E);var V=ie.p(T),ce=function(Ee){var De=pe(q);return ie.w(De.date(De.date()+Math.round(Ee*E)),q)};if(V===m)return this.set(m,this.$M+E);if(V===v)return this.set(v,this.$y+E);if(V===h)return ce(1);if(V===f)return ce(7);var be=(O={},O[l]=n,O[c]=i,O[s]=r,O)[V]||1,_e=this.$d.getTime()+E*be;return ie.w(_e,this)},M.subtract=function(E,T){return this.add(-1*E,T)},M.format=function(E){var T=this,O=this.$locale();if(!this.isValid())return O.invalidDate||k;var q=E||"YYYY-MM-DDTHH:mm:ssZ",V=ie.z(this),ce=this.$H,be=this.$m,_e=this.$M,Ee=O.weekdays,De=O.months,Se=O.meridiem,He=function(te,Oe,lt,xe){return te&&(te[Oe]||te(T,q))||lt[Oe].slice(0,xe)},oe=function(te){return ie.s(ce%12||12,te,"0")},Me=Se||function(te,Oe,lt){var xe=te<12?"AM":"PM";return lt?xe.toLowerCase():xe};return q.replace(D,function(te,Oe){return Oe||function(lt){switch(lt){case"YY":return String(T.$y).slice(-2);case"YYYY":return ie.s(T.$y,4,"0");case"M":return _e+1;case"MM":return ie.s(_e+1,2,"0");case"MMM":return He(O.monthsShort,_e,De,3);case"MMMM":return He(De,_e);case"D":return T.$D;case"DD":return ie.s(T.$D,2,"0");case"d":return String(T.$W);case"dd":return He(O.weekdaysMin,T.$W,Ee,2);case"ddd":return He(O.weekdaysShort,T.$W,Ee,3);case"dddd":return Ee[T.$W];case"H":return String(ce);case"HH":return ie.s(ce,2,"0");case"h":return oe(1);case"hh":return oe(2);case"a":return Me(ce,be,!0);case"A":return Me(ce,be,!1);case"m":return String(be);case"mm":return ie.s(be,2,"0");case"s":return String(T.$s);case"ss":return ie.s(T.$s,2,"0");case"SSS":return ie.s(T.$ms,3,"0");case"Z":return V}return null}(te)||V.replace(":","")})},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(E,T,O){var q,V=this,ce=ie.p(T),be=pe(E),_e=(be.utcOffset()-this.utcOffset())*n,Ee=this-be,De=function(){return ie.m(V,be)};switch(ce){case v:q=De()/12;break;case m:q=De();break;case x:q=De()/3;break;case f:q=(Ee-_e)/6048e5;break;case h:q=(Ee-_e)/864e5;break;case c:q=Ee/i;break;case l:q=Ee/n;break;case s:q=Ee/r;break;default:q=Ee}return O?q:ie.a(q)},M.daysInMonth=function(){return this.endOf(m).$D},M.$locale=function(){return ne[this.$L]},M.locale=function(E,T){if(!E)return this.$L;var O=this.clone(),q=Ae(E,T,!0);return q&&(O.$L=q),O},M.clone=function(){return ie.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},H}(),Pe=qe.prototype;return pe.prototype=Pe,[["$ms",o],["$s",s],["$m",l],["$H",c],["$W",h],["$M",m],["$y",v],["$D",_]].forEach(function(H){Pe[H[1]]=function(M){return this.$g(M,H[0],H[1])}}),pe.extend=function(H,M){return H.$i||(H(M,qe,pe),H.$i=!0),pe},pe.locale=Ae,pe.isDayjs=we,pe.unix=function(H){return pe(1e3*H)},pe.en=ne[Q],pe.Ls=ne,pe.p={},pe})})(Js);var tu=Js.exports;const Kr=Jn(tu);let Gs;const ru=(t,e)=>{Gs=new jt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},nu=async(t,e,r)=>{const n=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,h])=>{const f="$or",m=[],x=(v,_)=>{const k={};h.type==="text"?k[v]=`${_}`:k[c]=`="${v}"`,m.push(k)};return Object.entries(h.state).filter(([,v])=>v).forEach(([v,_])=>x(v,_)),m.length>0&&l.push({[f]:m}),l},[]);let i;if(!(n.length>0)&&r.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...n]},c=Gs.search(l);i=r.enableHighlighting?eu(c,"highlight",r.titleProperty):c.map(h=>h.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,h])=>(l[c]={min:h.state.min,max:h.state.max,format:h.format},l),{});if(Object.keys(o).length>0){const l=[];for(let c=0;c<i.length;c++){const h={};for(const[f,m]of Object.entries(o)){const x=v=>m.format==="date"?Kr(v).unix():v;Object.prototype.hasOwnProperty.call(i[c],f)?Array.isArray(i[c][f])?h[f]=o[f].min<=x(i[c][f][1])&&x(i[c][f][0])<=o[f].max:x(i[c][f])>=o[f].min&&x(i[c][f])<=o[f].max?h[f]=!0:h[f]=!1:h[f]=!0}Object.values(h).every(f=>!!f)&&l.push(i[c])}i=[...l]}const s=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,h])=>(l[c]={geometry:h.state.geometry,mode:h.state.mode},l),{});if(Object.values(s).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const h={};for(const f of Object.keys(s)){const m=s[f].mode||"within";Object.prototype.hasOwnProperty.call(i[c],f)&&(m==="within"?Qc(i[c][f],s[f].geometry):Kc(i[c][f],s[f].geometry))?h[f]=!0:h[f]=!1}Object.values(h).every(f=>!!f)&&l.push(i[c])}i=[...l]}return i};function iu(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Gn(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const e in t.state)t.state.hasOwnProperty(e)&&(t.state[e]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const e in t.state)t.state.hasOwnProperty(e)&&(t.state[e]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(e=>{t.state[e]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function es(t,e){return t*2+e}function ou(t){return Object.keys(t).map(e=>({title:Z`${t[e].title}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function Zi(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function su(t,e,r){return await(await fetch(`${r.externalFilter(t,e)}`)).json()}function Xs(t,e,r){let n;if(t.detail?n=t.detail.target:n=t.target,n!=null&&n.classList.contains("details-filter")){if(!n.open||e!=null&&e.expandMultipleFilters)return;r.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==n&&o.removeAttribute("open")})}else{if(!(n!=null&&n.open)||e!=null&&e.expandMultipleResults)return;r.querySelectorAll("details").forEach(i=>{i!==n&&i.removeAttribute("open")})}}var Ie,ts,Ji,Gi,Ks,Xi,Ki,Qs,Qi,ea,ta;class au extends Ke{constructor(){super(),Ge(this,Ie),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=le(this,Ie,Ks).bind(this),this._handleKeyDown=le(this,Ie,Xi).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(e){this.renderRoot.querySelector("[popover]").togglePopover(e)}get showDropdown(){var e;return(e=this.renderRoot.querySelector("[popover]"))==null?void 0:e.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&le(this,Ie,Ji).call(this)}disconnectedCallback(){this.inlineMode&&le(this,Ie,Gi).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(e){e.has("inlineMode")&&(this.inlineMode?le(this,Ie,Ji).call(this):le(this,Ie,Gi).call(this))}render(){return Z`
      <style>
        ${!this.unstyled&&tn}
      </style>
      ${this.inlineMode?Z`
            <div
              class="inline-container-wrapper"
              @click="${le(this,Ie,Ki)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${ou(this.filters)}
                      .controller=${{remove:e=>le(this,Ie,ea).call(this,e)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${We(Zi(this.filters),()=>Z`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${Zi(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${le(this,Ie,Ki)}"
                    @focus="${le(this,Ie,Qs)}"
                    @input="${le(this,Ie,ta)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${le(this,Ie,Xi)}"
                  @click="${le(this,Ie,Qi)}"
                  @focus="${le(this,Ie,Qi)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:Z`<slot name="section"></slot>`}
    `}}Ie=new WeakSet,ts=function(){setTimeout(()=>this._overlayCleanup=uc(this))},Ji=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),le(this,Ie,ts).call(this)},Gi=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Ks=function(t){gc(t,this)},Xi=function(t){fc(t,this)},Ki=function(t){pc(t,this)},Qs=function(){dc(this)},Qi=function(t){hc(t,this)},ea=function(t){Nl(t,this)},ta=function(t){Cs(t,this)};customElements.define("eox-itemfilter-container",au);var lu="Expected a function",rs=NaN,cu="[object Symbol]",uu=/^\s+|\s+$/g,hu=/^[-+]0x[0-9a-f]+$/i,du=/^0b[01]+$/i,pu=/^0o[0-7]+$/i,fu=parseInt,gu=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,mu=typeof self=="object"&&self&&self.Object===Object&&self,yu=gu||mu||Function("return this")(),vu=Object.prototype,bu=vu.toString,xu=Math.max,wu=Math.min,Oi=function(){return yu.Date.now()};function $u(t,e,r){var n,i,o,s,l,c,h=0,f=!1,m=!1,x=!0;if(typeof t!="function")throw new TypeError(lu);e=ns(e)||0,eo(r)&&(f=!!r.leading,m="maxWait"in r,o=m?xu(ns(r.maxWait)||0,e):o,x="trailing"in r?!!r.trailing:x);function v(ne){var ue=n,we=i;return n=i=void 0,h=ne,s=t.apply(we,ue),s}function _(ne){return h=ne,l=setTimeout(D,e),f?v(ne):s}function k(ne){var ue=ne-c,we=ne-h,Ae=e-ue;return m?wu(Ae,o-we):Ae}function z(ne){var ue=ne-c,we=ne-h;return c===void 0||ue>=e||ue<0||m&&we>=o}function D(){var ne=Oi();if(z(ne))return G(ne);l=setTimeout(D,k(ne))}function G(ne){return l=void 0,x&&n?v(ne):(n=i=void 0,s)}function J(){l!==void 0&&clearTimeout(l),h=0,n=c=i=l=void 0}function de(){return l===void 0?s:G(Oi())}function Q(){var ne=Oi(),ue=z(ne);if(n=arguments,i=this,c=ne,ue){if(l===void 0)return _(c);if(m)return l=setTimeout(D,e),v(c)}return l===void 0&&(l=setTimeout(D,e)),s}return Q.cancel=J,Q.flush=de,Q}function eo(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function _u(t){return!!t&&typeof t=="object"}function Au(t){return typeof t=="symbol"||_u(t)&&bu.call(t)==cu}function ns(t){if(typeof t=="number")return t;if(Au(t))return rs;if(eo(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=eo(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(uu,"");var r=du.test(t);return r||pu.test(t)?fu(t.slice(2),r?2:8):hu.test(t)?rs:+t}var Eu=$u;const Xn=Jn(Eu);function ku(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Gn(t.filterObject),t.requestUpdate()}function Su(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(r=>{t.filterObject.state[r]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}function Mu(t){Gn(t.filterObject),t.requestUpdate()}function Ou(t,e){const[r,n]=t.detail.values;(r!==e.filterObject.state.min||n!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[r,n],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Kr(r)} - ${Kr(n)}`:`${r} - ${n}`),e.dispatchEvent(new CustomEvent("filter")),r===e.filterObject.min&&n===e.filterObject.max?e.reset():e.requestUpdate()}function Lu(t,e,r){const n=r.filterObject.format==="date",i=r.filterObject.state[t],o=n?Kr.unix(i):i;return Z`<div class="range-${e}">${o}</div>`}function Cu(t){ju(-1,t),Gn(t.filterObject),t.requestUpdate()}function ju(t,e){e.selectedItems=[],bo(e),na(e)}function ra(t,e){const r=e.selectedItems.indexOf(t);r>=0?e.selectedItems=e.selectedItems.filter((n,i)=>i!==r):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),bo(e),na(e)}function Ru(t,e){e.query=t.target.value,e.showSuggestions=!0}function Pu(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&ra(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Tu(t,e){(t.has("suggestions")||t.has("query"))&&bo(e)}function Iu(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return e.sort(n).map(i=>i)}function bo(t){var e,r,n;let i;t.query&&(i=new jt(t.suggestions,{threshold:.4}).search(t.query).map(o=>o.item)),t.filteredSuggestions=Iu(t,i||t.suggestions),(e=t.filterObject)!=null&&e.filterKeys&&(t.filteredSuggestions=(r=t.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),t.filterObject.state=(n=t.filterObject)==null?void 0:n.filterKeys.map(o=>`${o}`).reduce((o,s)=>(s in o||(o[s]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function na(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Du(t){Gn(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function Hu(t){t.renderRoot.querySelector("#eox-map").innerHTML="",ia(t)}function Nu(t,e){e.filterObject.state.mode=t;const r=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(r)}function ia(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const r=t.geometry&&Bu(t.geometry),n=iu(t.geometry,r);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=n;const i=o=>{const s=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(s)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function Bu(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var to;class Fu extends Ke{constructor(){super(),Ge(this,to,()=>{Su(this)}),Un(this,"debouncedInputHandler",Xn(tt(this,to),500,{leading:!0})),this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){ku(this)}createRenderRoot(){return this}render(){return We(this.filterObject,()=>{var e;return Z`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((e=this.filterObject.validation)==null?void 0:e.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}to=new WeakMap;customElements.define("eox-itemfilter-text",Fu);class oa extends Ke{constructor(){super(...arguments),this.templates={},this._renderedTemplates={}}setBindingSyntax(e,r){this._startExpression=e,this._endExpression=r;const n=this.escapeRegex(this._startExpression),i=this.escapeRegex(this._endExpression);this._expression=new RegExp(`${n}\\s*([$\\w\\.,'"\\s()\\[\\]]+)\\s*${i}`,"g")}hasTemplate(e){return this.templates&&!!this.templates[e]}renderTemplate(e,r,n){if(!this.hasTemplate(e))return null;n=n||e;const i=Z` <slot name=${n}></slot> `,o={[e]:{...r}};if(this._renderedTemplates.hasOwnProperty(n)){const{slot:l}=this._renderedTemplates[n];this.contains(l)&&this.removeChild(l)}const s=document.createElement("div");return s.slot=n,s.dataset.generated="template",this._renderTemplate(s,this.templates[e],o),this.appendChild(s),this._renderedTemplates[n]={context:o,slot:s},i}getTemplates(){const e={};for(let r=0;r<this.children.length;r++){const n=this.children[r];if(n.nodeName==="RENDER-TEMPLATE"){const i=n;i.dataset.type?e[i.dataset.type]=i:e.default=i,i.templateOrder=r}}return e}_renderTemplate(e,r,n){let i;if(r&&r.childNodes.length){const o=r.cloneNode(!0);i=this.renderNode(o,e,n)}i&&e.appendChild(i)}expandExpressionsAsString(e,r){return e.replace(this.expression,(n,i)=>{const o=this.evalInContext(i||this.trimExpression(n),r);return o?typeof o=="object"?JSON.stringify(o):o.toString():""})}get expression(){return this._expression||this.setBindingSyntax("{{","}}"),this._expression}escapeRegex(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}evalInContext(e,r){r={...r};const n=new Function("with(this) { return "+e+";}");let i;try{i=n.call(r)}catch{}return i}trimExpression(e){return e=e.trim(),e.startsWith(this._startExpression)&&e.endsWith(this._endExpression)&&(e=e.substr(this._startExpression.length,e.length-this._startExpression.length-this._endExpression.length),e=e.trim()),e}renderNode(e,r,n){if(e.nodeName==="#text")return e.textContent=this.expandExpressionsAsString(e.textContent,n),e;if(e.nodeName==="TEMPLATE")return e.$parentTemplateContext=n,e;for(let i=0;i<e.childNodes.length;i++){const o=e.childNodes[i];this.renderNode(o,r,n)}return e}firstUpdated(){this.templates=this.getTemplates()}}function zu(t,e,r){return t.filter(n=>{const i=n[r.config.aggregateResults];let o;return r.filters[r.config.aggregateResults]&&(o=Object.keys(r.filters[r.config.aggregateResults]).filter(s=>r.filters[r.config.aggregateResults].state[s])),(!(o!=null&&o.length)||o.includes(e))&&Array.isArray(i)?i.includes(e):i===e})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},aa=t=>(...e)=>({_$litDirective$:t,values:e});class la{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this.t=e,this._$AM=r,this.i=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Uu}=Za,is=()=>document.createComment(""),Fr=(t,e,r)=>{var n;const i=t._$AA.parentNode,o=e===void 0?t._$AB:e._$AA;if(r===void 0){const s=i.insertBefore(is(),o),l=i.insertBefore(is(),o);r=new Uu(s,l,t,t.options)}else{const s=r._$AB.nextSibling,l=r._$AM,c=l!==t;if(c){let h;(n=r._$AQ)==null||n.call(r,t),r._$AM=t,r._$AP!==void 0&&(h=t._$AU)!==l._$AU&&r._$AP(h)}if(s!==o||c){let h=r._$AA;for(;h!==s;){const f=h.nextSibling;i.insertBefore(h,o),h=f}}}return r},Wt=(t,e,r=t)=>(t._$AI(e,r),t),Wu={},qu=(t,e=Wu)=>t._$AH=e,Vu=t=>t._$AH,Li=t=>{var e;(e=t._$AP)==null||e.call(t,!1,!0);let r=t._$AA;const n=t._$AB.nextSibling;for(;r!==n;){const i=r.nextSibling;r.remove(),r=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},Yu=aa(class extends la{constructor(t){if(super(t),t.type!==sa.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],o=[];let s=0;for(const l of t)i[s]=n?n(l,s):s,o[s]=r(l,s),s++;return{values:o,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=Vu(t),{values:o,keys:s}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=s,o;const l=this.ut??(this.ut=[]),c=[];let h,f,m=0,x=i.length-1,v=0,_=o.length-1;for(;m<=x&&v<=_;)if(i[m]===null)m++;else if(i[x]===null)x--;else if(l[m]===s[v])c[v]=Wt(i[m],o[v]),m++,v++;else if(l[x]===s[_])c[_]=Wt(i[x],o[_]),x--,_--;else if(l[m]===s[_])c[_]=Wt(i[m],o[_]),Fr(t,c[_+1],i[m]),m++,_--;else if(l[x]===s[v])c[v]=Wt(i[x],o[v]),Fr(t,i[m],i[x]),x--,v++;else if(h===void 0&&(h=os(s,v,_),f=os(l,m,x)),h.has(l[m]))if(h.has(l[x])){const k=f.get(s[v]),z=k!==void 0?i[k]:null;if(z===null){const D=Fr(t,i[m]);Wt(D,o[v]),c[v]=D}else c[v]=Wt(z,o[v]),Fr(t,i[m],z),i[k]=null;v++}else Li(i[x]),x--;else Li(i[m]),m++;for(;v<=_;){const k=Fr(t,c[_+1]);Wt(k,o[v]),c[v++]=k}for(;m<=x;){const k=i[m++];k!==null&&Li(k)}return this.ut=s,qu(t,c),Mt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ro extends la{constructor(e){if(super(e),this.it=ge,e.type!==sa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ge||e==null)return this._t=void 0,this.it=e;if(e===Mt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ro.directiveName="unsafeHTML",ro.resultType=1;const Ci=aa(ro);function Zu(t,e){return Z`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||ge}
    >
      <summary>
        <span class="title">
          ${t}
          <span class="count"
            >${e.aggregateResults(e.results,t).length}</span
          >
        </span>
      </summary>
      <div>
        ${ca(t,e)}
      </div>
    </details>
  `}function ca(t,e){const r=e.results,n=t?e.aggregateResults(r,t):r,i=e.config,o=s=>{var l;return((l=e.selectedResult)==null?void 0:l[i.idProperty])===s[i.idProperty]?"highlighted":ge};return Z`
    <ul>
      ${Yu(n,s=>s.id,s=>Z`
          <li class=${o(s)}>
            <span
              id="${s.id}"
              @click=${()=>{e.selectedResult===s?e.selectedResult=null:e.selectedResult=s,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            >
              ${We(e.hasTemplate("result"),()=>e.renderTemplate("result",s,`result-${s.id}`),()=>Z`
                  ${We(i.subTitleProperty,()=>Z`
                      <div class="title-container">
                        <span class="title"
                          >${Ci(s[i.titleProperty])}</span
                        >
                        <span class="subtitle"
                          >${Ci(s[i.subTitleProperty])}</span
                        >
                      </div>
                    `,()=>Z`
                      <span class="title"
                        >${Ci(s[i.titleProperty])}</span
                      >
                    `)}
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var zr,no,ua;class Ju extends oa{constructor(){super(),Ge(this,zr),this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object}}}aggregateResults(e,r){return zu(e,r,this)}createRenderRoot(){return this}handleAccordion(e){Xs(e,this.config,this)}render(){return Z`
      <section id="section-results">
        <div>
          <h6 class="main-heading">Results</h6>
        </div>
        <div id="container-results" class="scroll">
          ${We(this.results.length<1,()=>Z`<small class="no-results">No matching items</small>`,()=>ge)}
          <ul id="results" part="results">
            ${We(this.config.aggregateResults,()=>qn(this.resultAggregation.filter(e=>this.aggregateResults(this.results,e).length),e=>Z`${We(this.aggregateResults(this.results,e).length===1&&this.config.autoSpreadSingle,()=>Z`<div style="margin-left: -8px">
                          ${le(this,zr,no).call(this,e)}
                        </div>`,()=>le(this,zr,ua).call(this,e))}`),()=>le(this,zr,no).call(this))}
          </ul>
        </div>
      </section>
    `}}zr=new WeakSet,no=function(t){return ca(t,this)},ua=function(t){return Zu(t,this)};customElements.define("eox-itemfilter-results",Ju);const Gu=`input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}`,Xu=`input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}`;var Ur,ha,da,pa;class fa extends Ke{constructor(){super(),Ge(this,Ur),Un(this,"debouncedInputHandler",Xn(le(this,Ur,pa),500,{leading:!0})),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(e){Tu(e,this)}reset(){Cu(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(e=>this.filterObject.state[e]?e:null).filter(e=>!!e),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const e=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":ge;return Z`
      <style>
        ${!this.unstyled&&tn}
        ${!this.unstyled&&Gu}
        ${!this.unstyled&&Xu}
      </style>
      ${We(this.suggestions.length>10,()=>Z`<div class="autocomplete-container">
          <div class="autocomplete-container-wrapper">
            <input
              autocomplete="off"
              tabindex=${this.tabIndex}
              class="autocomplete-input"
              type="text"
              .value=${this.query}
              placeholder="${this.filterObject.placeholder||""}"
              @input=${le(this,Ur,ha)}
              @keydown=${le(this,Ur,da)}
              @blur=${()=>this.showSuggestions=!1}
              @focus=${()=>this.showSuggestions=!0}
            />
          </div>
        </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(n=>Z`
              <li
                data-identifier="${n.toString().toLowerCase()}"
                data-title="${n}"
              >
                <label>
                  <input
                    type="${e}"
                    name=${n}
                    .checked=${this.selectedItems.includes(n)}
                    @change=${()=>this.debouncedInputHandler(n)}
                    @keydown=${i=>{i.key===" "&&this.inlineMode&&this.debouncedInputHandler(n)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${n}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Ur=new WeakSet,ha=function(t){Ru(t,this)},da=function(t){Pu(t,this)},pa=function(t){ra(t,this)},Un(fa,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",fa);(()=>{var t=Object.defineProperty,e=Math.pow,r=(u,g,$)=>g in u?t(u,g,{enumerable:!0,configurable:!0,writable:!0,value:$}):u[g]=$,n=(u,g,$)=>(r(u,typeof g!="symbol"?g+"":g,$),$),i=(u,g)=>` ${g&&g.length>0?g.map($=>`<link rel="stylesheet" href="${$}" />`).join(""):""} <style> ${u} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,o=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",s="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",h="range-dragging",f="data",m="min",x="max",v="step",_="round",k="type",z="theme",D="rtl",G="btt",J="disabled",de="keyboard-disabled",Q="mousewheel-disabled",ne="slider-width",ue="slider-height",we="slider-radius",Ae="slider-bg",pe="slider-bg-hover",ie="slider-bg-fill",qe="pointer-width",Pe="pointer-height",H="pointer-radius",M="pointer-bg",E="pointer-bg-hover",T="pointer-bg-focus",O="pointer-shadow",q="pointer-shadow-hover",V="pointer-shadow-focus",ce="pointer-border",be="pointer-border-hover",_e="pointer-border-focus",Ee="animate-onclick",De="css-links",Se="vertical",He="horizontal",oe=(u,g,$,b,S)=>{let B=g-u;return B===0?$:(b-$)*(S-u)/B+$},Me=u=>!isNaN(parseFloat(u))&&isFinite(u),te=(u,g)=>Me(u)?Number(u):g,Oe=(u,g)=>g===0?0:Math.round(u/g)*g,lt=(u,g=1/0)=>{if(g===1/0)return u;let $=e(10,g);return Math.round(u*$)/$},xe=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true",ei=(u,g)=>{u.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:g}}))},nn=(u,g)=>{u.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:g}}))},on=(u,g)=>{u.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:g}}))},sn=(u,g)=>{u.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:g}}))},ti=(u,g)=>{if(!g||g.length<=0)return;let $=g.map(S=>Me(S)?te(S,S):S),b={values:$||[]};b.value=$[0],b.value0=$[0],b.value1=$[0];for(let S=1;S<$.length;S++)b[`value${S+1}`]=$[S];u.dispatchEvent(new CustomEvent("change",{detail:b}))},_r=(u,g,$)=>{let b=0,S,B,F,L,j=!1,X=(U,fe,Le,ke,$e,ye)=>{let Ne=b;Le!==void 0&&U>Le&&(U=Le),fe!==void 0&&U<fe&&(U=fe),b=U;let Be=b;return(ke===Se&&ye||ke===He&&$e)&&(Be=100-Be),ke===Se?g.style.top=`${Be}%`:g.style.left=`${Be}%`,Ne!==b},re=U=>U===g||g.contains(U),N=(U,fe,Le,ke)=>{S=U,B=fe,F=Le,L=ke},se=U=>{j=U,g.classList.toggle("disabled",j),j?g.setAttribute("aria-disabled","true"):g.hasAttribute("aria-disabled")&&g.removeAttribute("aria-disabled")},Ye=(U,fe)=>{fe==null?g.removeAttribute(U):g.setAttribute(U,fe)},je=U=>g.getAttribute(U),I=U=>{if(!j){switch(U.key){case"ArrowLeft":{U.preventDefault(),typeof S=="function"&&S($);break}case"ArrowRight":{U.preventDefault(),typeof B=="function"&&B($);break}case"ArrowUp":{U.preventDefault(),typeof F=="function"&&F($);break}case"ArrowDown":{U.preventDefault(),typeof L=="function"&&L($);break}}sn(u,U)}},ee=()=>{j||ei(u,g)};return g.className=`pointer pointer-${$}`,g.addEventListener("keydown",I),g.addEventListener("click",ee),{$pointer:g,get percent(){return b},get disabled(){return j},set disabled(U){se(U)},updatePosition:X,isClicked:re,setCallbacks:N,setAttr:Ye,getAttr:je,destroy:()=>{g.removeEventListener("keydown",I),g.removeEventListener("click",ee),g.remove()}}},ri=u=>{if(u==null)return;if(Array.isArray(u))return u;if(u.trim()==="")return;let g=u.split(","),$=[],b=!0;for(let S=0;S<g.length;S++){let B=g[S].trim();B!==""&&($.push(B),Me(B)||(b=!1))}return b?$.map(S=>Number(S)):$},ni=(u,g)=>g?g.findIndex($=>$===u||$.toString().trim()===u.toString().trim()):-1,ii=u=>({updatePosition:(g,$,b,S)=>{if($.length<=0)return;let B=$.length===1,F=$[0],L=$[$.length-1];g===Se?(u.style.removeProperty("width"),u.style.removeProperty("right"),u.style.removeProperty("left"),B?u.style.height=`${F}%`:u.style.height=`${Math.abs(F-L)}%`,S?(u.style.bottom="0%",B?u.style.top="auto":u.style.top=`${Math.min(100-L,100-F)}%`):(u.style.bottom="auto",B?u.style.top="0%":u.style.top=`${Math.min(F,L)}%`)):(u.style.removeProperty("height"),u.style.removeProperty("top"),u.style.removeProperty("bottom"),B?u.style.width=`${F}%`:u.style.width=`${Math.abs(F-L)}%`,b?(u.style.right="0%",B?u.style.left="auto":u.style.left=`${Math.min(100-L,100-F)}%`):(u.style.right="auto",B?u.style.left="0%":u.style.left=`${Math.min(F,L)}%`))}}),an="--animate-onclick",oi="--width",Ar="--height",si="--panel-bg-border-radius",ai="--panel-bg",li="--panel-bg-hover",ci="--panel-bg-fill",ui="--pointer-width",Kt="--pointer-height",Er="--pointer-border-radius",ln="--pointer-bg",cn="--pointer-bg-hover",nt="--pointer-bg-focus",_t="--pointer-shadow",hi="--pointer-shadow-hover",Qt="--pointer-shadow-focus",un="--pointer-border",di="--pointer-border-hover",pi="--pointer-border-focus",Rt=(u,g,$)=>{let b=new Map;for(let S of u.attributes){let B=S.nodeName.trim().toLowerCase();if(!g.test(B))continue;let F=B.replace(/\D/g,"").trim(),L=F===""||F==="0"||F==="1"?0:te(F,0)-1,j=$&&typeof $=="function"?$(S.value):S.value;b.set(L,j)}return b},fi=u=>{if(!u)return null;let g=u.getAttribute(De);if(!g)return null;let $=g.split(";"),b=[];for(let S of $)S.trim()!==""&&b.push(S.trim());return b},er=[[oi,ne,"sliderWidth",null],[Ar,ue,"sliderHeight",null],[si,we,"sliderRadius",null],[ai,Ae,"sliderBg",null],[li,pe,"sliderBgHover",null],[ci,ie,"sliderBgFill",null],[ui,qe,"pointer#Width",/^pointer([0-9]*)-width$/],[Kt,Pe,"pointer#Height",/^pointer([0-9]*)-height$/],[Er,H,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ln,M,"pointer#Bg",/^pointer([0-9]*)-bg$/],[cn,E,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[nt,T,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[_t,O,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[hi,q,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Qt,V,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[un,ce,"pointer#Border",/^pointer([0-9]*)-border$/],[di,be,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[pi,_e,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Pt=(u,g,$)=>{let b=null,S=[],B=new Map,F=(I,ee=g)=>{let U=[...ee.classList];for(let fe of U)fe.startsWith(I)&&g.classList.remove(fe)},L=()=>{F("shape");let I=g.querySelectorAll(".pointer");for(let ee of I)F("shape",ee)},j=I=>{b=I,F("theme-"),typeof I=="string"&&g.classList.add(`theme-${I}`)},X=()=>{if(L(),!(S.length<=0)){g.classList.add("shape",`shape-${S[0]}`);for(let I=1;I<S.length;I++){let ee=S[I];if(!ee)continue;let U=g.querySelector(`.pointer-${I}`);!U||U.classList.add("shape",`shape-${ee}`)}}},re=(I,ee)=>{S[I]=ee,X()},N=()=>{L();let I=Rt(u,/^pointer([0-9]*)-shape$/);if(!(I.size<=0)){for(let ee of I){let U=ee[0];S[U]=ee[1]}X()}},se=(I,ee)=>`${I}-${ee}`,Ye=(I,ee,U)=>{let fe=$[U];if(!fe)return;let Le=U===0?g:fe.$pointer;if(ee==null){B.has(se(I,U))&&B.delete(se(I,U)),Le.style.removeProperty(I);return}B.set(se(I,U),ee),Le.style.setProperty(I,ee)},je=(I,ee)=>B.get(se(I,ee));return(()=>{for(let I of er){let[ee,U,fe,Le]=I;if(Le){let $e=Rt(u,Le);for(let ye of $e){let Ne=ye[0],Be=ye[1];Ye(ee,Be,Ne)}}else{let $e=u.getAttribute(U);Ye(ee,$e,0)}let ke=[];if(fe.indexOf("#")===-1)ke.push([fe,0]);else{ke.push([fe.replace("#",""),0]),ke.push([fe.replace("#","0"),0]),ke.push([fe.replace("#","1"),0]);for(let $e=1;$e<$.length;$e++)ke.push([fe.replace("#",($e+1).toString()),$e])}for(let $e of ke)try{let ye=$e[0],Ne=$e[1];Object.prototype.hasOwnProperty.call(u,ye)||Object.defineProperty(u,ye,{get(){return je(ee,Ne)},set:Be=>{Ye(ee,Be,Ne)}})}catch(ye){console.error(ye)}}j(u.getAttribute(z)),N()})(),{setStyle:Ye,getStyle:je,get theme(){return b},set theme(I){j(I)},get pointerShapes(){return S},setPointerShape:re}},ct="animate-on-click",tr="range-dragging",kr=(u,g,$,b)=>{let S=[],B=re=>{for(let N of S)N.update&&typeof N.update=="function"&&N.update(re)},F=()=>{for(let re of S)re.destroy&&typeof re.destroy=="function"&&re.destroy()},L=(re,N)=>{for(let se of S)se.onAttrChange&&typeof se.onAttrChange=="function"&&se.onAttrChange(re,N)},j=re=>{if(re.gettersAndSetters){for(let N of re.gettersAndSetters)if(!(!N.name||!N.attributes))try{Object.prototype.hasOwnProperty.call(u,N.name)||Object.defineProperty(u,N.name,N.attributes)}catch(se){console.error("defineSettersGetters error:",se)}}},X=re=>{var N;if(!re.css)return;let se=(N=u.shadowRoot)==null?void 0:N.querySelector("style");!se||(se.innerHTML+=re.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let re of window.tcRangeSliderPlugins){let N=re();S.push(N),N.init&&typeof N.init=="function"&&(N.init(u,g,$,b),j(N),X(N))}},update:B,onAttrChange:L,destroy:F}},Tt=10,hn=20,gi=(u,g)=>{let $=new Map,b=/^value([0-9]*)$/;for(let L of u.attributes){let j=L.nodeName.trim().toLowerCase();if(!b.test(j))continue;let X=j.replace("value","").trim(),re=X===""||X==="0"||X==="1"?0:te(X,0)-1,N=Me(L.value)?te(L.value,0):L.value;$.set(re,N)}let S=Math.max(...Array.from($.keys())),B=[];B.push([_r(u,g,0),$.get(0)]);let F=g;for(let L=1;L<=S;L++){let j=g.cloneNode(!0);F.after(j),F=j,B.push([_r(u,j,L),$.get(L)])}return B},dn=(u,g,$,b,S,B,F)=>{try{Object.defineProperty(u,b,{configurable:!0,get(){if(!g)return;let L=g.pointers[$];if(!L)return;let j=g.getTextValue(L.percent);return Me(j)?te(j,j):j},set:L=>{g.pointers[$]?g?.setValue(L,$):g?.addPointer(L)}}),Object.defineProperty(u,S,{configurable:!0,get(){var L,j;return(j=(L=g?.pointers[$])==null?void 0:L.getAttr("aria-label"))!=null?j:void 0},set:L=>{!g||g.setAriaLabel($,L)}}),Object.defineProperty(u,B,{configurable:!0,get(){var L,j;return(j=(L=g?.styles)==null?void 0:L.pointerShapes[$])!=null?j:null},set:L=>{!g||!g.styles||g.styles.setPointerShape($,L)}}),Object.defineProperty(u,F,{configurable:!0,get(){var L;return(L=g?.pointers[$].disabled)!=null?L:!1},set:L=>{if(!g)return;let j=g?.pointers[$];!j||(j.disabled=L)}})}catch(L){console.error(L)}},mi=(u,g)=>{let $=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let b=2;b<Tt;b++)$.push([`value${b}`,`ariaLabel${b}`,`pointer${b}Shape`,`pointer${b}Disabled`,b-1]);for(let b of $)dn(u,g,b[4],b[0],b[1],b[2],b[3])},pn=(u,g,$)=>{var b;let S=(b=$.shadowRoot)==null?void 0:b.querySelector(".container");if(S)for(let B of u)g?S.prepend(B.$pointer):S.append(B.$pointer)},rr=(u,g)=>{if(!(!g||u.length<=1)){for(let $ of u)$.$pointer.style.zIndex=hn.toString();g.$pointer.style.zIndex=(hn*2).toString()}},It=0,At=100,Ve=2,fn="0.3s",yi=(u,g,$)=>{let b=$.map(p=>p[0]),S=null,B=null,F=null,L=null,j=It,X=At,re,N,se=He,Ye=Ve,je=!1,I=!1,ee=!1,U=0,fe=1/0,Le=!1,ke,$e,ye=!1,Ne=!1,Be=!1,ut=fn,gn=[],Mr=p=>{ye||(p.preventDefault&&p.preventDefault(),gt(p),window.addEventListener("mousemove",gt),window.addEventListener("mouseup",nr),nn(u,p))},nr=p=>{ye||(ke=void 0,$e=void 0,window.removeEventListener("mousemove",gt),window.removeEventListener("mouseup",nr),ut&&g.classList.add(ct),on(u,p))},xi=(p,w)=>{if(b.length<=0)return;if(b.length===1)return b[0].isClicked(p)&&ut&&g.classList.remove(ct),b[0];let R=$i(p);if(Le){let ae=w,Ue=Nt(ae);Ue!==void 0&&(ae=Oe(ae,Ue)),R?(ke=ae,$e=0,ut&&g.classList.remove(ct)):ke!==void 0&&($e=ae-ke,ke=ae)}if(!wi(p)&&!R){for(let ae of b)if(!(!ae.isClicked(p)||ae.disabled))return ut&&g.classList.remove(ct),ae;for(let ae of b)if(S===ae)return ae}let K=1/0,he=null;for(let ae of b){if(ae.disabled)continue;let Ue=Math.abs(w-ae.percent);Ue<K&&(K=Ue,he=ae)}return he},ir=()=>b.findIndex(p=>S===p&&!p.disabled),gt=p=>{let w;if(se===Se){let{height:K,top:he}=g.getBoundingClientRect(),ae=p.type.indexOf("mouse")!==-1?p.clientY:p.touches[0].clientY;w=Math.min(Math.max(0,ae-he),K)*100/K}else{let{width:K,left:he}=g.getBoundingClientRect(),ae=p.type.indexOf("mouse")!==-1?p.clientX:p.touches[0].clientX;w=Math.min(Math.max(0,ae-he),K)*100/K}if((je||I)&&(w=100-w),S=xi(p.target,w),S&&rr(b,S),Le&&b.length>1&&$e!==void 0){let K=b[0],he=b[b.length-1],ae=K.percent+$e<0,Ue=he.percent+$e>100;if(ae||Ue)return;for(let xt=0;xt<b.length;xt++)Ce(xt,b[xt].percent+$e);return}let R=ir();R!==-1&&(Ce(R,w),S?.$pointer.focus())},or=p=>{if(ye||document.activeElement!==u||S!=null&&S.disabled)return;p.stopPropagation(),p.preventDefault();let w=p.deltaY<0,R=je||I,K=w?!R:R,he=ir();he!==-1&&(K?Dt(he,b[he].percent):Ht(he,b[he].percent))},mn=p=>{ye||Ne||(se===Se?I?Ce(p,100):Ce(p,0):je?Ht(p,b[p].percent):Dt(p,b[p].percent))},yn=p=>{ye||Ne||(se===Se?I?Ce(p,0):Ce(p,100):je?Dt(p,b[p].percent):Ht(p,b[p].percent))},vn=p=>{ye||Ne||(se===Se?I?Ht(p,b[p].percent):Dt(p,b[p].percent):je?Ce(p,100):Ce(p,0))},bn=p=>{ye||Ne||(se===Se?I?Dt(p,b[p].percent):Ht(p,b[p].percent):je?Ce(p,0):Ce(p,100))},wi=p=>p.classList.contains("panel"),$i=p=>p.classList.contains("panel-fill"),Dt=(p,w)=>{if(w===void 0)return;let R=Nt(w);R==null&&(R=1),w-=R,w<0&&(w=0),Ce(p,w)},Ht=(p,w)=>{if(w===void 0)return;let R=Nt(w);R==null&&(R=1),w+=R,w>100&&(w=100),Ce(p,w)},mt=()=>{!L||L.update({percents:wn(),values:$n(),$pointers:Lr(),min:Bt(),max:_n(),data:Cr(),step:Or(),round:ar(),type:jr(),textMin:sr(),textMax:yt(),rightToLeft:it(),bottomToTop:Pr(),pointersOverlap:zt(),pointersMinDistance:lr(),pointersMaxDistance:Rr(),rangeDragging:Ze(),disabled:Tr(),keyboardDisabled:Ft(),mousewheelDisabled:ur()})},xn=()=>{mt()},_i=p=>{if(!(ee||b.length<=1||X===j))if(p===0){let w=fe*100/(X-j);return Math.max(0,b[p+1].percent-w)}else{let w=U*100/(X-j);return Math.min(b[p-1].percent+w,100)}},Ai=p=>{if(!(ee||b.length<=1||X===j))if(p===b.length-1){let w=fe*100/(X-j);return Math.min(b[p-1].percent+w,100)}else{let w=U*100/(X-j);return Math.max(0,b[p+1].percent-w)}},Nt=p=>{let w;if(typeof re=="function"){let R=oe(0,100,j,X,p);w=re(R,p)}else w=re;if(Me(w)){let R=X-j;return w=R===0?0:w*100/R,w}},Et=p=>{if(p===void 0)return;let w=oe(0,100,j,X,p);return N!==void 0?N[Math.round(w)]:lt(w,Ye)},sr=()=>N!==void 0?N[j]:j,yt=()=>N!==void 0?N[X]:X,Or=()=>re,kt=p=>{var w;return p<=0||ee?sr():(w=Et(b[p-1].percent))!=null?w:""},ht=p=>{var w;return b.length<=1||p>=b.length-1||ee?yt():(w=Et(b[p+1].percent))!=null?w:""},wn=()=>b.map(p=>p.percent),$n=()=>b.map(p=>Et(p.percent)),Lr=()=>b.map(p=>p.$pointer),Bt=()=>j,_n=()=>X,Cr=()=>N,jr=()=>se,ar=()=>Ye,lr=()=>U,Rr=()=>fe,cr=p=>gn[p],it=()=>je,Pr=()=>I,Tr=()=>ye,Ft=()=>Ne,ur=()=>Be,zt=()=>ee,Ze=()=>Le,Ce=(p,w)=>{if(w===void 0)return;let R=Nt(w);R!==void 0&&(w=Oe(w,R));let K=b[p];if(!K)return;let he=K.updatePosition(w,_i(p),Ai(p),se,je,I);B?.updatePosition(se,b.map(ae=>ae.percent),je,I),mt();for(let ae of b){let Ue=Et(ae.percent);Ue!==void 0&&(ae.setAttr("aria-valuenow",Ue.toString()),ae.setAttr("aria-valuetext",Ue.toString()))}Ir(),he&&ti(u,b.map(ae=>Et(ae.percent)))},et=()=>{for(let p=0;p<b.length;p++)Ce(p,b[p].percent)},An=(p,w)=>{j=N!==void 0?0:te(p,It),X=N!==void 0?N.length-1:te(w,At),vt(j),bt(X)},Ir=()=>{var p,w;for(let R=0;R<b.length;R++){let K=b[R];K.setAttr("aria-valuemin",((p=kt(R))!=null?p:"").toString()),K.setAttr("aria-valuemax",((w=ht(R))!=null?w:"").toString())}},vt=p=>{j=te(p,It),j>X&&(X=j+At),et()},bt=p=>{X=te(p,At),X<j&&(X=j+At),et()},hr=p=>{ee=!0;for(let w=0;w<p.length;w++)dr(p[w],w);ee=!1;for(let w=0;w<p.length;w++)dr(p[w],w)},dr=(p,w)=>{let R;N!==void 0?(R=p==null?0:ni(p,N),R===-1&&(R=0)):(R=te(p,j),R<j&&(R=j),R>X&&(R=X));let K=oe(j,X,0,100,R);Ce(w,K)},pr=p=>{if(p==null){re=void 0;return}if(typeof p=="function"){re=p,et();return}if(Me(p)){re=te(p,1);let w=Math.abs(X-j);re>w&&(re=void 0),et();return}re=void 0},Dr=p=>{ee=p,et()},Hr=p=>{(!Me(p)||p<0)&&(p=0),U=p},St=p=>{(!Me(p)||p<0)&&(p=1/0),fe=p},Nr=p=>{ye=p,g.classList.toggle("disabled",ye),ye?g.setAttribute("aria-disabled","true"):g.hasAttribute("aria-disabled")&&g.removeAttribute("aria-disabled")},En=p=>{Ne=p},a=p=>{Be=p,Be?document.removeEventListener("wheel",or):document.addEventListener("wheel",or,{passive:!1})},d=p=>{if(p==null){N=void 0;return}if(N=ri(p),N===void 0||N.length<=0){N=void 0;return}vt(0),bt(N.length-1),re===void 0&&pr(1)},y=p=>{var w;typeof p=="string"?se=p.trim().toLowerCase()===Se?Se:He:se=He;let R=(w=u.shadowRoot)==null?void 0:w.querySelector(".range-slider-box");if(!R)return;R.className=`range-slider-box type-${se}`,et();let K=se===Se?"vertical":"horizontal";for(let he of b)he.setAttr("aria-orientation",K)},A=p=>{je=p,b.length>1&&pn(b,je,u),et(),mt()},P=p=>{I=p,b.length>1&&pn(b,I,u),et(),mt()},C=p=>{Ye=te(p,Ve),Ye<0&&(Ye=Ve),mt()},W=p=>{p==null||p.toString().trim().toLowerCase()==="false"?(ut=void 0,g.style.removeProperty(an),g.classList.remove(ct)):(ut=p.toString(),g.style.setProperty(an,ut),g.classList.add(ct))},ve=(p,w)=>{let R=b[p];!R||(R.setAttr("aria-label",w),gn[p]=w)},me=p=>{if(ke=void 0,b.length<=1){Le=!1,g.classList.remove(tr);return}Le=p,g.classList.toggle(tr,Le)},Re=()=>{Nr(xe(u.getAttribute(J))),Ne=xe(u.getAttribute(de)),Be=xe(u.getAttribute(Q));let p=Rt(u,/^pointer([0-9]*)-disabled$/,w=>xe(w));for(let w of p){let R=w[0];!b[R]||(b[R].disabled=w[1])}},Fe=()=>{let p=Rt(u,/^aria-label([0-9]*)$/);for(let w of p){let R=w[0];ve(R,w[1])}},ze=p=>{let w=b.length,R=b[w-1].$pointer,K=R.cloneNode(!0);R.after(K);let he=_r(u,K,w);return he.setCallbacks(mn,yn,vn,bn),b.push(he),dr(p,w),et(),mt(),w},Te=()=>{let p=b.length,w=b[p-1];return w?(w.destroy(),b.pop(),b.length<=1&&me(!1),et(),mt(),p-1):-1};return(()=>{var p,w;for(let K of b)K.setCallbacks(mn,yn,vn,bn);let R=(p=u.shadowRoot)==null?void 0:p.querySelector(".panel-fill");R&&(B=ii(R)),y(u.getAttribute(k)),A(xe(u.getAttribute(D))),P(xe(u.getAttribute(G))),An(u.getAttribute(m),u.getAttribute(x)),pr(u.getAttribute(v)),d(u.getAttribute(f)),hr($.map(K=>K[1])),Dr(xe(u.getAttribute(s))),Hr(te(u.getAttribute(l),0)),St(te(u.getAttribute(c),1/0)),me(xe(u.getAttribute(h))),C(te(u.getAttribute(_),Ve)),Re(),Fe(),F=Pt(u,g,b),W((w=u.getAttribute(Ee))!=null?w:fn),g.addEventListener("mousedown",Mr),g.addEventListener("mouseup",nr),g.addEventListener("touchmove",gt),g.addEventListener("touchstart",gt),Be||document.addEventListener("wheel",or,{passive:!1}),L=kr(u,xn,{setValues:hr,setMin:vt,setMax:bt,setStep:pr,setPointersOverlap:Dr,setPointersMinDistance:Hr,setPointersMaxDistance:St,setDisabled:Nr,setType:y,setRightToLeft:A,setBottomToTop:P,setRound:C,setKeyboardDisabled:En,setMousewheelDisabled:a,setRangeDragging:me,setData:d},{getPercents:wn,getValues:$n,getPointerElements:Lr,getMin:Bt,getMax:_n,getStep:Or,getData:Cr,getType:jr,getRound:ar,getTextMin:sr,getTextMax:yt,isRightToLeft:it,isBottomToTop:Pr,isDisabled:Tr,isKeyboardDisabled:Ft,isMousewheelDisabled:ur,isPointersOverlap:zt,isRangeDraggingEnabled:Ze,getPointersMinDistance:lr,getPointersMaxDistance:Rr}),L.init()})(),{get pointers(){return b},get styles(){return F},get pluginsManager(){return L},get min(){return sr()},get max(){return yt()},get step(){return Or()},get pointersOverlap(){return zt()},set pointersOverlap(p){Dr(p)},get pointersMinDistance(){return lr()},set pointersMinDistance(p){Hr(p)},get pointersMaxDistance(){return Rr()},set pointersMaxDistance(p){St(p)},get disabled(){return Tr()},set disabled(p){Nr(p)},get data(){return Cr()},get type(){return jr()},set type(p){y(p)},get rightToLeft(){return it()},set rightToLeft(p){A(p)},get bottomToTop(){return Pr()},set bottomToTop(p){P(p)},get round(){return ar()},set round(p){C(p)},get animateOnClick(){return ut},set animateOnClick(p){W(p)},get keyboardDisabled(){return Ft()},set keyboardDisabled(p){En(p)},get mousewheelDisabled(){return ur()},set mousewheelDisabled(p){a(p)},get rangeDragging(){return Ze()},set rangeDragging(p){me(p)},setMin:vt,setMax:bt,setValue:dr,setStep:pr,setData:d,getTextValue:Et,setAriaLabel:ve,getAriaLabel:cr,addPointer:ze,removePointer:Te,destroy:()=>{g.removeEventListener("mousedown",Mr),g.removeEventListener("mouseup",nr),g.removeEventListener("touchmove",gt),g.removeEventListener("touchstart",gt),document.removeEventListener("wheel",or);for(let p of b)p.destroy();L?.destroy()}}},vi=(u,g,$)=>{let b=er.find(([L,j,X,re])=>j.replace("#","")===g.replace(/\d+/g,""));if(b&&u.styles){let[L,j,X,re]=b,N=g.replace(/\D/g,"").trim(),se=N===""||N==="0"||N==="1"?0:te(N,0)-1;u.styles.setStyle(L,$,se);return}switch(u&&u.pluginsManager&&u.pluginsManager.onAttrChange(g,$),g){case m:{u.setMin($);break}case x:{u.setMax($);break}case v:{u.setStep($);break}case s:{u.pointersOverlap=xe($);break}case l:{u.pointersMinDistance=te($,0);break}case h:{u.rangeDragging=xe($);break}case c:{u.pointersMaxDistance=te($,1/0);break}case J:{u.disabled=xe($);break}case de:{u.keyboardDisabled=xe($);break}case Q:{u.mousewheelDisabled=xe($);break}case f:{u.setData($);break}case k:{u.type=$;break}case D:{u.rightToLeft=xe($);break}case G:{u.bottomToTop=xe($);break}case _:{u.round=te($,Ve);break}case z:{u.styles&&(u.styles.theme=$);break}case Ee:{u.animateOnClick=$;break}}let S=null;if(/^value([0-9]*)$/.test(g)&&(S="value"),/^pointer([0-9]*)-disabled$/.test(g)&&(S="pointer-disabled"),/^aria-label([0-9]*)$/.test(g)&&(S="aria-label"),/^pointer([0-9]*)-shape$/.test(g)&&(S="pointer-shape"),!S)return;let B=g.replace(/\D/g,"").trim(),F=B===""||B==="0"||B==="1"?0:te(B,0)-1;switch(S){case"value":{u.setValue($,F);break}case"pointer-disabled":{let L=u?.pointers[F];if(!L)return;L.disabled=xe($);break}case"aria-label":{u.setAriaLabel(F,$);break}case"pointer-shape":{u.styles&&u.styles.setPointerShape(F,$);break}}},bi=class extends HTMLElement{constructor(){super(),n(this,"slider"),n(this,"_externalCSSList",[]),n(this,"_observer",null),this.attachShadow({mode:"open"})}set step(u){this.slider&&this.slider.setStep(u)}get step(){var u;return(u=this.slider)==null?void 0:u.step}set disabled(u){this.slider&&(this.slider.disabled=u)}get disabled(){var u,g;return(g=(u=this.slider)==null?void 0:u.disabled)!=null?g:!1}set data(u){var g;(g=this.slider)==null||g.setData(u)}get data(){var u;return(u=this.slider)==null?void 0:u.data}set min(u){var g;(g=this.slider)==null||g.setMin(u)}get min(){var u;return(u=this.slider)==null?void 0:u.min}set max(u){var g;(g=this.slider)==null||g.setMax(u)}get max(){var u;return(u=this.slider)==null?void 0:u.max}set round(u){!this.slider||(this.slider.round=u)}get round(){var u,g;return(g=(u=this.slider)==null?void 0:u.round)!=null?g:Ve}set type(u){!this.slider||(this.slider.type=u??He)}get type(){var u;return((u=this.slider)==null?void 0:u.type)||He}set pointersOverlap(u){!this.slider||(this.slider.pointersOverlap=u)}get pointersOverlap(){var u,g;return(g=(u=this.slider)==null?void 0:u.pointersOverlap)!=null?g:!1}set pointersMinDistance(u){!this.slider||(this.slider.pointersMinDistance=u)}get pointersMinDistance(){var u,g;return(g=(u=this.slider)==null?void 0:u.pointersMinDistance)!=null?g:0}set pointersMaxDistance(u){!this.slider||(this.slider.pointersMaxDistance=u)}get pointersMaxDistance(){var u,g;return(g=(u=this.slider)==null?void 0:u.pointersMaxDistance)!=null?g:1/0}set theme(u){!this.slider||!this.slider.styles||(this.slider.styles.theme=u)}get theme(){var u,g,$;return($=(g=(u=this.slider)==null?void 0:u.styles)==null?void 0:g.theme)!=null?$:null}set rtl(u){!this.slider||(this.slider.rightToLeft=u)}get rtl(){var u,g;return(g=(u=this.slider)==null?void 0:u.rightToLeft)!=null?g:!1}set btt(u){!this.slider||(this.slider.bottomToTop=u)}get btt(){var u,g;return(g=(u=this.slider)==null?void 0:u.bottomToTop)!=null?g:!1}set keyboardDisabled(u){!this.slider||(this.slider.keyboardDisabled=u)}get keyboardDisabled(){var u,g;return(g=(u=this.slider)==null?void 0:u.keyboardDisabled)!=null?g:!1}set mousewheelDisabled(u){!this.slider||(this.slider.mousewheelDisabled=u)}get mousewheelDisabled(){var u,g;return(g=(u=this.slider)==null?void 0:u.mousewheelDisabled)!=null?g:!1}set animateOnClick(u){!this.slider||(this.slider.animateOnClick=u)}get animateOnClick(){var u;return(u=this.slider)==null?void 0:u.animateOnClick}get rangeDragging(){var u,g;return(g=(u=this.slider)==null?void 0:u.rangeDragging)!=null?g:!1}set rangeDragging(u){this.slider&&(this.slider.rangeDragging=xe(u))}get externalCSSList(){return this._externalCSSList}addPointer(u){var g,$;if(!this.slider)return;let b=($=(g=this.slider)==null?void 0:g.addPointer(u))!=null?$:0;dn(this,this.slider,b,`value${b+1}`,`ariaLabel${b+1}`,`pointerShape${b+1}`,`pointer${b+1}Disabled`)}removePointer(){var u;!this.slider||(u=this.slider)==null||u.removePointer()}addCSS(u){if(!this.shadowRoot)return;let g=document.createElement("style");g.textContent=u,this.shadowRoot.appendChild(g)}connectedCallback(){var u,g;if(!this.shadowRoot)return;this._externalCSSList=fi(this),this.shadowRoot.innerHTML=i(o,this._externalCSSList);let $=(u=this.shadowRoot)==null?void 0:u.querySelector(".pointer");if(!$)return;let b=(g=this.shadowRoot)==null?void 0:g.getElementById("range-slider");if(!b)return;let S=gi(this,$);this.slider=yi(this,b,S),mi(this,this.slider),this._observer=new MutationObserver(B=>{B.forEach(F=>{var L;if(!this.slider||F.type!=="attributes")return;let j=F.attributeName;!j||vi(this.slider,j,(L=this.getAttribute(j))!=null?L:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Sr=bi;window.tcRangeSlider=Sr,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Sr),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Sr{})})();var Wr,ga,io;class ma extends Ke{constructor(){super(),Ge(this,Wr),this.filterObject={},this.tabIndex=0,this.inputHandler=le(this,Wr,ga).bind(this),this.debouncedInputHandler=Xn(this.inputHandler,0,{leading:!0})}reset(){Mu(this)}createRenderRoot(){return this}render(){return We(this.filterObject,()=>Z`
        ${le(this,Wr,io).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.min||this.filterObject.state.min}"
          value2="${this.filterObject.max||this.filterObject.state.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${le(this,Wr,io).call(this,"max","after")}
      `)}}Wr=new WeakSet,ga=function(t){Ou(t,this)},io=function(t,e){return Lu(t,e,this)},Un(ma,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",ma);var oo,ya;class Ku extends Ke{constructor(){super(),Ge(this,oo),this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Du(this)}createRenderRoot(){return this}render(){return We(this.filterObject,()=>{var e;return Z`
        <form style="display: inline">
          ${qn(["intersects","within"],r=>Z`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||ge}"
                  value="${r}"
                  @click=${()=>le(this,oo,ya).call(this,r)}
                />
                <small>${r} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(e=this.filterObject.state)==null?void 0:e.geometry}"
          @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}oo=new WeakSet,ya=function(t){Nu(t,this)};customElements.define("eox-itemfilter-spatial",Ku);var so,va;class Qu extends Ke{constructor(){super(),Ge(this,so),this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){le(this,so,va).call(this)}reset(){Hu(this)}render(){return Z`<div id="eox-map"></div>`}}so=new WeakSet,va=function(){ia(this)};customElements.define("eox-itemfilter-spatial-filter",Qu);function eh(t,e){e.renderRoot.querySelectorAll(".chip").forEach(r=>{r.classList.remove("highlighted")}),t.target.classList.add("highlighted"),e.requestUpdate()}function th(t,e){const{code:r,target:n}=t;n.id==="eox-itemfilter-input-search"&&(e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(r)||(r==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(r)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(r)&&rh(r,t.target.value??"",e)))}function rh(t,e,r){const n=r.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&n&&n.classList.remove("highlighted"),t==="Backspace"&&!e){if(r.items.length){n&&(n.querySelector(".chip-item-close").click(),r.items.splice(Array.from(r.renderRoot.querySelectorAll(".chip")).indexOf(n),1));const i=r.renderRoot.querySelectorAll(".chip")[r.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),r.requestUpdate()}r._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(r.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=r.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(r.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=r.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>r.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(r.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var qr,ao,ba;class nh extends Ke{constructor(){super(),Ge(this,qr),this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",le(this,qr,ao).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",le(this,qr,ao).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return Z`
      <style>
        ${tn}
      </style>
      <span class="chip-container">
        ${qn(this.items,e=>Z`
            <span class="chip" @click=${le(this,qr,ba).bind(this)}>
              <span class="chip-title">${e.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${e.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}qr=new WeakSet,ao=function(t){th(t,this)},ba=function(t){eh(t,this)};customElements.define("eox-itemfilter-chips",nh);const ih=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),ss=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var oh=200,xo="__lodash_hash_undefined__",sh=1/0,ah="[object Function]",lh="[object GeneratorFunction]",ch=/[\\^$.*+?()[\]{}|]/g,uh=/^\[object .+?Constructor\]$/,hh=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,dh=typeof self=="object"&&self&&self.Object===Object&&self,wo=hh||dh||Function("return this")();function ph(t,e){var r=t?t.length:0;return!!r&&gh(t,e,0)>-1}function fh(t,e,r,n){for(var i=t.length,o=r+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function gh(t,e,r){if(e!==e)return fh(t,mh,r);for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}function mh(t){return t!==t}function yh(t,e){return t.has(e)}function vh(t,e){return t?.[e]}function bh(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function xa(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var xh=Array.prototype,wh=Function.prototype,wa=Object.prototype,ji=wo["__core-js_shared__"],as=function(){var t=/[^.]+$/.exec(ji&&ji.keys&&ji.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),$a=wh.toString,$o=wa.hasOwnProperty,$h=wa.toString,_h=RegExp("^"+$a.call($o).replace(ch,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ah=xh.splice,Eh=_o(wo,"Map"),Ri=_o(wo,"Set"),Qr=_o(Object,"create");function Xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kh(){this.__data__=Qr?Qr(null):{}}function Sh(t){return this.has(t)&&delete this.__data__[t]}function Mh(t){var e=this.__data__;if(Qr){var r=e[t];return r===xo?void 0:r}return $o.call(e,t)?e[t]:void 0}function Oh(t){var e=this.__data__;return Qr?e[t]!==void 0:$o.call(e,t)}function Lh(t,e){var r=this.__data__;return r[t]=Qr&&e===void 0?xo:e,this}Xt.prototype.clear=kh;Xt.prototype.delete=Sh;Xt.prototype.get=Mh;Xt.prototype.has=Oh;Xt.prototype.set=Lh;function wr(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ch(){this.__data__=[]}function jh(t){var e=this.__data__,r=Kn(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Ah.call(e,r,1),!0}function Rh(t){var e=this.__data__,r=Kn(e,t);return r<0?void 0:e[r][1]}function Ph(t){return Kn(this.__data__,t)>-1}function Th(t,e){var r=this.__data__,n=Kn(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}wr.prototype.clear=Ch;wr.prototype.delete=jh;wr.prototype.get=Rh;wr.prototype.has=Ph;wr.prototype.set=Th;function $r(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ih(){this.__data__={hash:new Xt,map:new(Eh||wr),string:new Xt}}function Dh(t){return Qn(this,t).delete(t)}function Hh(t){return Qn(this,t).get(t)}function Nh(t){return Qn(this,t).has(t)}function Bh(t,e){return Qn(this,t).set(t,e),this}$r.prototype.clear=Ih;$r.prototype.delete=Dh;$r.prototype.get=Hh;$r.prototype.has=Nh;$r.prototype.set=Bh;function Fn(t){var e=-1,r=t?t.length:0;for(this.__data__=new $r;++e<r;)this.add(t[e])}function Fh(t){return this.__data__.set(t,xo),this}function zh(t){return this.__data__.has(t)}Fn.prototype.add=Fn.prototype.push=Fh;Fn.prototype.has=zh;function Kn(t,e){for(var r=t.length;r--;)if(Gh(t[r][0],e))return r;return-1}function Uh(t){if(!_a(t)||Yh(t))return!1;var e=Xh(t)||bh(t)?_h:uh;return e.test(Zh(t))}function Wh(t,e,r){var n=-1,i=ph,o=t.length,s=!0,l=[],c=l;if(o>=oh){var h=qh(t);if(h)return xa(h);s=!1,i=yh,c=new Fn}else c=l;e:for(;++n<o;){var f=t[n],m=f;if(f=f!==0?f:0,s&&m===m){for(var x=c.length;x--;)if(c[x]===m)continue e;l.push(f)}else i(c,m,r)||(c!==l&&c.push(m),l.push(f))}return l}var qh=Ri&&1/xa(new Ri([,-0]))[1]==sh?function(t){return new Ri(t)}:Kh;function Qn(t,e){var r=t.__data__;return Vh(e)?r[typeof e=="string"?"string":"hash"]:r.map}function _o(t,e){var r=vh(t,e);return Uh(r)?r:void 0}function Vh(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Yh(t){return!!as&&as in t}function Zh(t){if(t!=null){try{return $a.call(t)}catch{}try{return t+""}catch{}}return""}function Jh(t){return t&&t.length?Wh(t):[]}function Gh(t,e){return t===e||t!==t&&e!==e}function Xh(t){var e=_a(t)?$h.call(t):"";return e==ah||e==lh}function _a(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Kh(){}var Qh=Jh;const Aa=Jn(Qh);var zn={exports:{}};zn.exports;(function(t,e){var r=200,n="Expected a function",i="__lodash_hash_undefined__",o=1,s=2,l=1/0,c=9007199254740991,h="[object Arguments]",f="[object Array]",m="[object Boolean]",x="[object Date]",v="[object Error]",_="[object Function]",k="[object GeneratorFunction]",z="[object Map]",D="[object Number]",G="[object Object]",J="[object Promise]",de="[object RegExp]",Q="[object Set]",ne="[object String]",ue="[object Symbol]",we="[object WeakMap]",Ae="[object ArrayBuffer]",pe="[object DataView]",ie="[object Float32Array]",qe="[object Float64Array]",Pe="[object Int8Array]",H="[object Int16Array]",M="[object Int32Array]",E="[object Uint8Array]",T="[object Uint8ClampedArray]",O="[object Uint16Array]",q="[object Uint32Array]",V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/,be=/^\./,_e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ee=/[\\^$.*+?()[\]{}|]/g,De=/\\(\\)?/g,Se=/^\[object .+?Constructor\]$/,He=/^(?:0|[1-9]\d*)$/,oe={};oe[ie]=oe[qe]=oe[Pe]=oe[H]=oe[M]=oe[E]=oe[T]=oe[O]=oe[q]=!0,oe[h]=oe[f]=oe[Ae]=oe[m]=oe[pe]=oe[x]=oe[v]=oe[_]=oe[z]=oe[D]=oe[G]=oe[de]=oe[Q]=oe[ne]=oe[we]=!1;var Me=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,te=typeof self=="object"&&self&&self.Object===Object&&self,Oe=Me||te||Function("return this")(),lt=e&&!e.nodeType&&e,xe=lt&&!0&&t&&!t.nodeType&&t,ei=xe&&xe.exports===lt,nn=ei&&Me.process,on=function(){try{return nn&&nn.binding("util")}catch{}}(),sn=on&&on.isTypedArray;function ti(a,d){for(var y=-1,A=a?a.length:0,P=Array(A);++y<A;)P[y]=d(a[y],y,a);return P}function _r(a,d){for(var y=-1,A=d.length,P=a.length;++y<A;)a[P+y]=d[y];return a}function ri(a,d){for(var y=-1,A=a?a.length:0;++y<A;)if(d(a[y],y,a))return!0;return!1}function ni(a){return function(d){return d?.[a]}}function ii(a,d){for(var y=-1,A=Array(a);++y<a;)A[y]=d(y);return A}function an(a){return function(d){return a(d)}}function oi(a,d){return a?.[d]}function Ar(a){var d=!1;if(a!=null&&typeof a.toString!="function")try{d=!!(a+"")}catch{}return d}function si(a){var d=-1,y=Array(a.size);return a.forEach(function(A,P){y[++d]=[P,A]}),y}function ai(a,d){return function(y){return a(d(y))}}function li(a){var d=-1,y=Array(a.size);return a.forEach(function(A){y[++d]=A}),y}var ci=Array.prototype,ui=Function.prototype,Kt=Object.prototype,Er=Oe["__core-js_shared__"],ln=function(){var a=/[^.]+$/.exec(Er&&Er.keys&&Er.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),cn=ui.toString,nt=Kt.hasOwnProperty,_t=Kt.toString,hi=RegExp("^"+cn.call(nt).replace(Ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qt=Oe.Symbol,un=Oe.Uint8Array,di=Kt.propertyIsEnumerable,pi=ci.splice,Rt=Qt?Qt.isConcatSpreadable:void 0,fi=ai(Object.keys,Object),er=kt(Oe,"DataView"),Pt=kt(Oe,"Map"),ct=kt(Oe,"Promise"),tr=kt(Oe,"Set"),kr=kt(Oe,"WeakMap"),Tt=kt(Object,"create"),hn=it(er),gi=it(Pt),dn=it(ct),mi=it(tr),pn=it(kr),rr=Qt?Qt.prototype:void 0,It=rr?rr.valueOf:void 0,At=rr?rr.toString:void 0;function Ve(a){var d=-1,y=a?a.length:0;for(this.clear();++d<y;){var A=a[d];this.set(A[0],A[1])}}function fn(){this.__data__=Tt?Tt(null):{}}function yi(a){return this.has(a)&&delete this.__data__[a]}function vi(a){var d=this.__data__;if(Tt){var y=d[a];return y===i?void 0:y}return nt.call(d,a)?d[a]:void 0}function bi(a){var d=this.__data__;return Tt?d[a]!==void 0:nt.call(d,a)}function Sr(a,d){var y=this.__data__;return y[a]=Tt&&d===void 0?i:d,this}Ve.prototype.clear=fn,Ve.prototype.delete=yi,Ve.prototype.get=vi,Ve.prototype.has=bi,Ve.prototype.set=Sr;function u(a){var d=-1,y=a?a.length:0;for(this.clear();++d<y;){var A=a[d];this.set(A[0],A[1])}}function g(){this.__data__=[]}function $(a){var d=this.__data__,y=ye(d,a);if(y<0)return!1;var A=d.length-1;return y==A?d.pop():pi.call(d,y,1),!0}function b(a){var d=this.__data__,y=ye(d,a);return y<0?void 0:d[y][1]}function S(a){return ye(this.__data__,a)>-1}function B(a,d){var y=this.__data__,A=ye(y,a);return A<0?y.push([a,d]):y[A][1]=d,this}u.prototype.clear=g,u.prototype.delete=$,u.prototype.get=b,u.prototype.has=S,u.prototype.set=B;function F(a){var d=-1,y=a?a.length:0;for(this.clear();++d<y;){var A=a[d];this.set(A[0],A[1])}}function L(){this.__data__={hash:new Ve,map:new(Pt||u),string:new Ve}}function j(a){return yt(this,a).delete(a)}function X(a){return yt(this,a).get(a)}function re(a){return yt(this,a).has(a)}function N(a,d){return yt(this,a).set(a,d),this}F.prototype.clear=L,F.prototype.delete=j,F.prototype.get=X,F.prototype.has=re,F.prototype.set=N;function se(a){var d=-1,y=a?a.length:0;for(this.__data__=new F;++d<y;)this.add(a[d])}function Ye(a){return this.__data__.set(a,i),this}function je(a){return this.__data__.has(a)}se.prototype.add=se.prototype.push=Ye,se.prototype.has=je;function I(a){this.__data__=new u(a)}function ee(){this.__data__=new u}function U(a){return this.__data__.delete(a)}function fe(a){return this.__data__.get(a)}function Le(a){return this.__data__.has(a)}function ke(a,d){var y=this.__data__;if(y instanceof u){var A=y.__data__;if(!Pt||A.length<r-1)return A.push([a,d]),this;y=this.__data__=new F(A)}return y.set(a,d),this}I.prototype.clear=ee,I.prototype.delete=U,I.prototype.get=fe,I.prototype.has=Le,I.prototype.set=ke;function $e(a,d){var y=Ze(a)||zt(a)?ii(a.length,String):[],A=y.length,P=!!A;for(var C in a)nt.call(a,C)&&!(P&&(C=="length"||Lr(C,A)))&&y.push(C);return y}function ye(a,d){for(var y=a.length;y--;)if(ur(a[y][0],d))return y;return-1}var Ne=_i(gn);function Be(a,d,y,A,P){var C=-1,W=a.length;for(y||(y=$n),P||(P=[]);++C<W;){var ve=a[C];y(ve)?_r(P,ve):P[P.length]=ve}return P}var ut=Ai();function gn(a,d){return a&&ut(a,d,St)}function Mr(a,d){d=Bt(d,a)?[d]:xn(d);for(var y=0,A=d.length;a!=null&&y<A;)a=a[cr(d[y++])];return y&&y==A?a:void 0}function nr(a){return _t.call(a)}function xi(a,d){return a!=null&&d in Object(a)}function ir(a,d,y,A,P){return a===d?!0:a==null||d==null||!vt(a)&&!bt(d)?a!==a&&d!==d:gt(a,d,ir,y,A,P)}function gt(a,d,y,A,P,C){var W=Ze(a),ve=Ze(d),me=f,Re=f;W||(me=ht(a),me=me==h?G:me),ve||(Re=ht(d),Re=Re==h?G:Re);var Fe=me==G&&!Ar(a),ze=Re==G&&!Ar(d),Te=me==Re;if(Te&&!Fe)return C||(C=new I),W||dr(a)?Nt(a,d,y,A,P,C):Et(a,d,me,y,A,P,C);if(!(P&s)){var p=Fe&&nt.call(a,"__wrapped__"),w=ze&&nt.call(d,"__wrapped__");if(p||w){var R=p?a.value():a,K=w?d.value():d;return C||(C=new I),y(R,K,A,P,C)}}return Te?(C||(C=new I),sr(a,d,y,A,P,C)):!1}function or(a,d,y,A){var P=y.length,C=P;if(a==null)return!C;for(a=Object(a);P--;){var W=y[P];if(W[2]?W[1]!==a[W[0]]:!(W[0]in a))return!1}for(;++P<C;){W=y[P];var ve=W[0],me=a[ve],Re=W[1];if(W[2]){if(me===void 0&&!(ve in a))return!1}else{var Fe=new I,ze;if(!(ze===void 0?ir(Re,me,A,o|s,Fe):ze))return!1}}return!0}function mn(a){if(!vt(a)||Cr(a))return!1;var d=An(a)||Ar(a)?hi:Se;return d.test(it(a))}function yn(a){return bt(a)&&Ir(a.length)&&!!oe[_t.call(a)]}function vn(a){return typeof a=="function"?a:a==null?Nr:typeof a=="object"?Ze(a)?Dt(a[0],a[1]):$i(a):En(a)}function bn(a){if(!jr(a))return fi(a);var d=[];for(var y in Object(a))nt.call(a,y)&&y!="constructor"&&d.push(y);return d}function wi(a,d){var y=-1,A=Ce(a)?Array(a.length):[];return Ne(a,function(P,C,W){A[++y]=d(P,C,W)}),A}function $i(a){var d=Or(a);return d.length==1&&d[0][2]?lr(d[0][0],d[0][1]):function(y){return y===a||or(y,a,d)}}function Dt(a,d){return Bt(a)&&ar(d)?lr(cr(a),d):function(y){var A=Dr(y,a);return A===void 0&&A===d?Hr(y,a):ir(d,A,void 0,o|s)}}function Ht(a){return function(d){return Mr(d,a)}}function mt(a){if(typeof a=="string")return a;if(hr(a))return At?At.call(a):"";var d=a+"";return d=="0"&&1/a==-l?"-0":d}function xn(a){return Ze(a)?a:Rr(a)}function _i(a,d){return function(y,A){if(y==null)return y;if(!Ce(y))return a(y,A);for(var P=y.length,C=-1,W=Object(y);++C<P&&A(W[C],C,W)!==!1;);return y}}function Ai(a){return function(d,y,A){for(var P=-1,C=Object(d),W=A(d),ve=W.length;ve--;){var me=W[++P];if(y(C[me],me,C)===!1)break}return d}}function Nt(a,d,y,A,P,C){var W=P&s,ve=a.length,me=d.length;if(ve!=me&&!(W&&me>ve))return!1;var Re=C.get(a);if(Re&&C.get(d))return Re==d;var Fe=-1,ze=!0,Te=P&o?new se:void 0;for(C.set(a,d),C.set(d,a);++Fe<ve;){var p=a[Fe],w=d[Fe];if(A)var R=W?A(w,p,Fe,d,a,C):A(p,w,Fe,a,d,C);if(R!==void 0){if(R)continue;ze=!1;break}if(Te){if(!ri(d,function(K,he){if(!Te.has(he)&&(p===K||y(p,K,A,P,C)))return Te.add(he)})){ze=!1;break}}else if(!(p===w||y(p,w,A,P,C))){ze=!1;break}}return C.delete(a),C.delete(d),ze}function Et(a,d,y,A,P,C,W){switch(y){case pe:if(a.byteLength!=d.byteLength||a.byteOffset!=d.byteOffset)return!1;a=a.buffer,d=d.buffer;case Ae:return!(a.byteLength!=d.byteLength||!A(new un(a),new un(d)));case m:case x:case D:return ur(+a,+d);case v:return a.name==d.name&&a.message==d.message;case de:case ne:return a==d+"";case z:var ve=si;case Q:var me=C&s;if(ve||(ve=li),a.size!=d.size&&!me)return!1;var Re=W.get(a);if(Re)return Re==d;C|=o,W.set(a,d);var Fe=Nt(ve(a),ve(d),A,P,C,W);return W.delete(a),Fe;case ue:if(It)return It.call(a)==It.call(d)}return!1}function sr(a,d,y,A,P,C){var W=P&s,ve=St(a),me=ve.length,Re=St(d),Fe=Re.length;if(me!=Fe&&!W)return!1;for(var ze=me;ze--;){var Te=ve[ze];if(!(W?Te in d:nt.call(d,Te)))return!1}var p=C.get(a);if(p&&C.get(d))return p==d;var w=!0;C.set(a,d),C.set(d,a);for(var R=W;++ze<me;){Te=ve[ze];var K=a[Te],he=d[Te];if(A)var ae=W?A(he,K,Te,d,a,C):A(K,he,Te,a,d,C);if(!(ae===void 0?K===he||y(K,he,A,P,C):ae)){w=!1;break}R||(R=Te=="constructor")}if(w&&!R){var Ue=a.constructor,xt=d.constructor;Ue!=xt&&"constructor"in a&&"constructor"in d&&!(typeof Ue=="function"&&Ue instanceof Ue&&typeof xt=="function"&&xt instanceof xt)&&(w=!1)}return C.delete(a),C.delete(d),w}function yt(a,d){var y=a.__data__;return _n(d)?y[typeof d=="string"?"string":"hash"]:y.map}function Or(a){for(var d=St(a),y=d.length;y--;){var A=d[y],P=a[A];d[y]=[A,P,ar(P)]}return d}function kt(a,d){var y=oi(a,d);return mn(y)?y:void 0}var ht=nr;(er&&ht(new er(new ArrayBuffer(1)))!=pe||Pt&&ht(new Pt)!=z||ct&&ht(ct.resolve())!=J||tr&&ht(new tr)!=Q||kr&&ht(new kr)!=we)&&(ht=function(a){var d=_t.call(a),y=d==G?a.constructor:void 0,A=y?it(y):void 0;if(A)switch(A){case hn:return pe;case gi:return z;case dn:return J;case mi:return Q;case pn:return we}return d});function wn(a,d,y){d=Bt(d,a)?[d]:xn(d);for(var A,P=-1,W=d.length;++P<W;){var C=cr(d[P]);if(!(A=a!=null&&y(a,C)))break;a=a[C]}if(A)return A;var W=a?a.length:0;return!!W&&Ir(W)&&Lr(C,W)&&(Ze(a)||zt(a))}function $n(a){return Ze(a)||zt(a)||!!(Rt&&a&&a[Rt])}function Lr(a,d){return d=d??c,!!d&&(typeof a=="number"||He.test(a))&&a>-1&&a%1==0&&a<d}function Bt(a,d){if(Ze(a))return!1;var y=typeof a;return y=="number"||y=="symbol"||y=="boolean"||a==null||hr(a)?!0:ce.test(a)||!V.test(a)||d!=null&&a in Object(d)}function _n(a){var d=typeof a;return d=="string"||d=="number"||d=="symbol"||d=="boolean"?a!=="__proto__":a===null}function Cr(a){return!!ln&&ln in a}function jr(a){var d=a&&a.constructor,y=typeof d=="function"&&d.prototype||Kt;return a===y}function ar(a){return a===a&&!vt(a)}function lr(a,d){return function(y){return y==null?!1:y[a]===d&&(d!==void 0||a in Object(y))}}var Rr=Ft(function(a){a=pr(a);var d=[];return be.test(a)&&d.push(""),a.replace(_e,function(y,A,P,C){d.push(P?C.replace(De,"$1"):A||y)}),d});function cr(a){if(typeof a=="string"||hr(a))return a;var d=a+"";return d=="0"&&1/a==-l?"-0":d}function it(a){if(a!=null){try{return cn.call(a)}catch{}try{return a+""}catch{}}return""}function Pr(a,d){return Be(Tr(a,d))}function Tr(a,d){var y=Ze(a)?ti:wi;return y(a,vn(d))}function Ft(a,d){if(typeof a!="function"||d&&typeof d!="function")throw new TypeError(n);var y=function(){var A=arguments,P=d?d.apply(this,A):A[0],C=y.cache;if(C.has(P))return C.get(P);var W=a.apply(this,A);return y.cache=C.set(P,W),W};return y.cache=new(Ft.Cache||F),y}Ft.Cache=F;function ur(a,d){return a===d||a!==a&&d!==d}function zt(a){return et(a)&&nt.call(a,"callee")&&(!di.call(a,"callee")||_t.call(a)==h)}var Ze=Array.isArray;function Ce(a){return a!=null&&Ir(a.length)&&!An(a)}function et(a){return bt(a)&&Ce(a)}function An(a){var d=vt(a)?_t.call(a):"";return d==_||d==k}function Ir(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=c}function vt(a){var d=typeof a;return!!a&&(d=="object"||d=="function")}function bt(a){return!!a&&typeof a=="object"}function hr(a){return typeof a=="symbol"||bt(a)&&_t.call(a)==ue}var dr=sn?an(sn):yn;function pr(a){return a==null?"":mt(a)}function Dr(a,d,y){var A=a==null?void 0:Mr(a,d);return A===void 0?y:A}function Hr(a,d){return a!=null&&wn(a,d,xi)}function St(a){return Ce(a)?$e(a):bn(a)}function Nr(a){return a}function En(a){return Bt(a)?ni(cr(a)):Ht(a)}t.exports=Pr})(zn,zn.exports);var ed=zn.exports;const Ea=Jn(ed);function td(t,e,r){let n=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const s={},l=h=>o.format==="date"?Kr(h).unix():parseFloat(h);e.forEach(h=>{var f;if(o.type==="range"){if(Array.isArray(h[o.key])){const m=[l(h[o.key][0]),l(h[o.key][1])];s.min=s.min!==void 0?Math.min(s.min,m[0]):m[0],s.max=s.max!==void 0?Math.max(s.max,m[1]):m[1]}else{const m=l(h[o.key]);s.min=s.min!==void 0?Math.min(s.min,m):m,s.max=s.max!==void 0?Math.max(s.max,m):m}return}Array.isArray(h[o.key])?h[o.key].forEach(m=>{s[m]=void 0}):o.type==="spatial"?(s.geometry=void 0,s.mode=o.mode||"intersects"):(f=o.key)!=null&&f.includes(".")?Aa(Ea(r.items,o.key)).filter(m=>m).forEach(m=>{s[m]=void 0}):s[h[o.key]]=void 0});const c=o.key||o.keys.join("|");r.filters[c]=Object.assign({type:o.type||"multiselect",dirty:o.state?!1:void 0,key:c},o.type==="range"?{min:s.min,max:s.max,format:o.format}:{},o),r.filters[c].state=Object.assign({},s,o.state)}),t.matchAllWhenEmpty!==!1&&(r.results=r.sortResults(e),r.requestUpdate()),t.aggregateResults&&(n=Array.from(new Set(e.reduce((o,s)=>o.concat(s[t.aggregateResults]),[]))).sort((o,s)=>o.localeCompare(s)));const i=[];return Object.values(r.filters).forEach(o=>{o.type==="text"?o.keys.forEach(s=>{i.includes(s)||i.push(s)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),ru(e,Object.assign({keys:i},t.fuseConfig)),n}async function rd(t,e,r){let n;r.externalFilter?n=await su(e,r.filters,t):n=await nu(e,r.filters,t),r.results=r.sortResults(n)}function nd(t,e,r){const n=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return Z`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${n}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${r.unstyled}
        @filter=${()=>r.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return Z`
        <eox-itemfilter-select
          .inlineMode=${r.inlineMode||!1}
          data-type="filter"
          id="${n}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Aa(Ea(r.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${r.unstyled}
          @filter=${()=>r.search()}
        ></eox-itemfilter-select>
      `;case"range":return Z`
        <eox-itemfilter-range
          id="${n}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${r.unstyled}
          @filter=${()=>r.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return Z`
        <eox-itemfilter-spatial
          id="${n}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>r.search()}
        ></eox-itemfilter-spatial>
      `;default:return Z``}}function id(t,e){return[...t].sort((r,n)=>r[e.titleProperty].localeCompare(n[e.titleProperty]))}function od(t,e,r){return Z`
    ${We(t.dirty,()=>Z`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${n=>{const i=n.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),r.search(),r.requestUpdate()}}
        >
          ${r.unstyled?"Reset":ge}
        </button>
      `)}
  `}function sd(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var jn,Vr,ot,Rn,ka,Sa;class ad extends oa{constructor(){super(),Ge(this,Rn),Ge(this,jn,[]),Ge(this,Vr,[]),Ge(this,ot,ih),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Xn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},unstyled:{type:Boolean}}}apply(){Ei(this,jn,td(tt(this,ot),tt(this,Vr),this)),this.search()}async searchHandler(){await rd(tt(this,ot),tt(this,Vr),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(e){return id(e,tt(this,ot))}resetFilters(){sd(this)}firstUpdated(e){var r;let n={};ss.map(i=>{n={...n,[i]:this[i]}}),Ei(this,ot,n),Ei(this,Vr,((r=this.items)==null?void 0:r.map((i,o)=>Object.assign({id:i[this.idProperty]||`item-${o}`},i)))||[]),this.apply()}updated(e){ss.map(r=>{if(e.has(r))return this.firstUpdated(),!0})}updateResult(e){this.selectedResult=e.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var e;return Z`
      <style>
        ${Ga}
        ${!this.unstyled&&tn}
        ${!this.unstyled&&Xa}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":ge}
        @submit="${r=>r.preventDefault()}"
      >
        ${We(this.filterProperties,()=>Z`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${We(!this.inlineMode,()=>Z`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${qn(Object.values(this.filters),(r,n)=>Z` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${i=>Xs(i,tt(this,ot),this)}
                          data-details="${r.key}"
                        >
                          ${le(this,Rn,Sa).call(this,r,es(n,1))}
                          ${le(this,Rn,ka).call(this,r,es(n,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${We(!this.inlineMode&&tt(this,ot).filterProperties&&!this.inlineMode&&tt(this,ot).filterProperties&&Zi(this.filters),()=>Z`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${We(((e=tt(this,ot))==null?void 0:e.showResults)&&this.results,()=>Z`
            <eox-itemfilter-results
              .config=${tt(this,ot)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${tt(this,jn)}
              .selectedResult=${this.selectedResult}
              @result=${this.updateResult}
            ></eox-itemfilter-results>
          `)}
      </form>
    `}}jn=new WeakMap,Vr=new WeakMap,ot=new WeakMap,Rn=new WeakSet,ka=function(t,e){return nd(t,e,this)},Sa=function(t,e){return od(t,e,this)};customElements.define("eox-itemfilter",ad);const ld={slot:"filterstitle",style:{margin:"14px 8px"}},cd={slot:"resultstitle",style:{margin:"14px 8px"}},Pi="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:white;",ud="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:#9bcaeb;",dd={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:""},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:"themes"},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},setup(t){const e=t,r=async l=>{i.value?.shadowRoot?.querySelectorAll(".compareMapButton").forEach(h=>h.setAttribute("style",Pi));const c=l.detail;c&&(o.resetSelectedCompareSTAC(),await o.loadSelectedSTAC(c.href))},n={titleProperty:e.titleProperty,filterProperties:e.filterProperties,aggregateResults:e.aggregateResults,enableHighlighting:e.enableHighlighting,expandMultipleFilters:e.expandMultipleFilters,expandMultipleResults:e.expandMultipleResults},i=Ma(null),o=Oa(),s=()=>{setTimeout(()=>{i.value?.shadowRoot.querySelectorAll("details>summary").forEach(l=>l.setAttribute("style","width: 100%")),i.value?.shadowRoot.querySelectorAll("details>div li").forEach(l=>{let c=document.createElement("button");c.className="compareMapButton",c.dataset.id=l.children[0].id,c.onclick=async m=>{i.value?.shadowRoot?.querySelectorAll(".compareMapButton").forEach(_=>{_.setAttribute("style",Pi)});const x=m.currentTarget;x?.setAttribute("style",ud);const v=i.value?.items.find(_=>_.id===x?.dataset.id);v&&await o.loadSelectedCompareSTAC(v.href)},c.setAttribute("style",Pi);const h=document.createElementNS("http://www.w3.org/2000/svg","svg"),f=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("width","15"),h.setAttribute("height","15"),h.setAttribute("viewBox","0 0 24 24"),f.setAttribute("d","M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"),h.appendChild(f),c.appendChild(h),l.append(c)})},100)};return La(()=>{const l=document.createElement("style");l.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,i.value?.shadowRoot?.appendChild(l);const c=o.stac?.filter(h=>h.rel==="child");i.value.items=c,e.enableCompare&&s()}),(l,c)=>(Ra(),Ca("eox-itemfilter",ja({class:"fill-height"},n,{ref_key:"eoxItemFilter",ref:i,style:{overflow:"auto"},onSelect:r}),[Ao("h4",ld,Eo(t.filtersTitle),1),Ao("h4",cd,Eo(t.resultsTitle),1)],16))}};export{dd as default};
