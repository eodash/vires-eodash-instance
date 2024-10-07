import{_ as b,x as y,M as f,N as c,Q as t,R as r,S as l,a0 as _,U as n,Y as u,T as d,W as h,d as p,X as g,F as x,Z as v,a2 as w}from"./index-XLkOeDcy.js";import{V as k}from"./VMain-BNujb8fK.js";import"./ssrBoot-DoHKvnVn.js";class A extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(s,a,o){a!==o&&(this[s]=o),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(s,a,o){a!==o&&(this[s]=o),this.render()}}customElements.define("eox-layout",A);customElements.define("eox-layout-item",C);const L=["gap"],M={key:0,class:"bg-panel bg-surface",x:"0",y:"0",h:"12",w:"12"},T=["h","w","x","y"],$={__name:"DashboardLayout",setup(i){const s=y(f),[a]=c([s.template?.background]),o=c(s.template?.widgets);return(E,B)=>(t(),r(k,null,{default:l(()=>[_("eox-layout",{gap:n(s).template.gap??2},[n(a).component?(t(),u("eox-layout-item",M,[(t(),r(d,{suspensible:""},{default:l(()=>[(t(),r(h(n(a).component),p({id:"bg-widget"},n(a).props),null,16))]),_:1}))])):g("v-if",!0),(t(!0),u(x,null,v(n(o),(e,m)=>(t(),r(w,{key:m,name:"fade"},{default:l(()=>[e.value.component?(t(),u("eox-layout-item",{key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(t(),r(d,{suspensible:""},{default:l(()=>[(t(),r(h(e.value.component),p({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,T)):g("v-if",!0)]),_:2},1024))),128))],8,L)]),_:1}))}},V=b($,[["__scopeId","data-v-6b134f31"]]);export{V as default};
