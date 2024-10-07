import{aS as ae,g as p,e as g,J as te,a as f,b as a,p as S,f as L,aT as C,E as F,F as T,aA as _,ab as B,a5 as ne,a3 as se,a6 as le,aU as ie,aV as de,aW as oe,a7 as re,aX as ce,h as ue,aY as me,aZ as ye,i as ve,a8 as pe,a_ as ge,G as fe,a4 as be,a9 as ke,a$ as Ve,b0 as Ce,b1 as xe,aa as Se,b2 as he,c as x,t as Ae,v as Ie,b3 as Pe,b4 as Te,d as _e,_ as Be,b5 as Le,b6 as Ne,r as $e,R as we,S as d,b7 as De,Q as h,a0 as c,$ as V,a1 as N,U as A,b8 as I,Y as $,b9 as Ee,X as Fe,av as Me,ba as Oe,Z as Re,V as w,bb as ze,bc as P,aM as D}from"./index-DdgTHYVx.js";import Je from"./PopUp-Bw-XNe0k.js";import{V as Ue}from"./index-CPvf9m9L.js";import{V as M}from"./VCardTitle-BNJkBgLR.js";import{V as E,a as je}from"./VDivider-BfxFQpXY.js";import{V as Xe}from"./VImg-y3bhav3-.js";import"./VOverlay-TO2IebUo.js";import"./forwardRefs-XuLtFsPi.js";import"./transition-Dv7lyQvx.js";import"./dialog-transition-DqxAID0l.js";const Ye=ae("v-spacer","div","VSpacer"),O=p()({name:"VCardActions",props:g(),setup(e,l){let{slots:n}=l;return te({VBtn:{slim:!0,variant:"text"}}),f(()=>a("div",{class:["v-card-actions",e.class],style:e.style},[n.default?.()])),{}}}),Ze=S({opacity:[Number,String],...g(),...L()},"VCardSubtitle"),qe=p()({name:"VCardSubtitle",props:Ze(),setup(e,l){let{slots:n}=l;return f(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),Ge=S({appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:[String,Number],title:[String,Number],...g(),...F()},"VCardItem"),He=p()({name:"VCardItem",props:Ge(),setup(e,l){let{slots:n}=l;return f(()=>{const t=!!(e.prependAvatar||e.prependIcon),u=!!(t||n.prepend),r=!!(e.appendAvatar||e.appendIcon),m=!!(r||n.append),o=!!(e.title!=null||n.title),s=!!(e.subtitle!=null||n.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[u&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(B,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):a(T,null,[e.prependAvatar&&a(E,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(_,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[o&&a(M,{key:"title"},{default:()=>[n.title?.()??e.title]}),s&&a(qe,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),m&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(B,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):a(T,null,[e.appendIcon&&a(_,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(E,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Qe=S({opacity:[Number,String],...g(),...L()},"VCardText"),R=p()({name:"VCardText",props:Qe(),setup(e,l){let{slots:n}=l;return f(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),We=S({appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ne(),...g(),...F(),...se(),...le(),...ie(),...de(),...oe(),...re(),...ce(),...L(),...ue(),...me({variant:"elevated"})},"VCard"),Ke=p()({name:"VCard",directives:{Ripple:ye},props:We(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:u}=ve(e),{borderClasses:r}=pe(e),{colorClasses:m,colorStyles:o,variantClasses:s}=ge(e),{densityClasses:i}=fe(e),{dimensionStyles:y}=be(e),{elevationClasses:v}=ke(e),{loaderClasses:z}=Ve(e),{locationStyles:J}=Ce(e),{positionClasses:U}=xe(e),{roundedClasses:j}=Se(e),b=he(e,n),X=x(()=>e.link!==!1&&b.isLink.value),k=x(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return f(()=>{const Y=X.value?"a":e.tag,Z=!!(t.title||e.title!=null),q=!!(t.subtitle||e.subtitle!=null),G=Z||q,H=!!(t.append||e.appendAvatar||e.appendIcon),Q=!!(t.prepend||e.prependAvatar||e.prependIcon),W=!!(t.image||e.image),K=G||Q||H,ee=!!(t.text||e.text!=null);return Ae(a(Y,_e({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},u.value,r.value,m.value,i.value,v.value,z.value,U.value,j.value,s.value,e.class],style:[o.value,y.value,J.value,e.style],onClick:k.value&&b.navigate,tabindex:e.disabled?-1:void 0},b.linkProps),{default:()=>[W&&a("div",{key:"image",class:"v-card__image"},[t.image?a(B,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(Xe,{key:"image-img",cover:!0,src:e.image},null)]),a(Pe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),K&&a(He,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ee&&a(R,{key:"text"},{default:()=>[t.text?.()??e.text]}),t.default?.(),t.actions&&a(O,null,{default:t.actions}),Te(k.value,"v-card")]}),[[Ie("ripple"),k.value&&e.ripple]])}),{}}}),ea={class:"pa-3 code-block"},aa={style:{position:"absolute",bottom:"15px"}},ta={key:0,class:"text-success mr-3"},na={__name:"ExportState",props:Le({getLayers:{type:Function,default:De}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Ne(e,"modelValue"),n=e,t=$e(!1),u=[{id:Symbol(),copyFn:async()=>await P(m.value,t),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await P(JSON.stringify(n.getLayers()),t),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await P(r.value,t),copyAs:"map tour section"}],r=x(()=>{const[o,s,i]=D.value,y="### <!--{ layers=",v=`zoom="${i}" center=[${[o,s]}] animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${y}'${JSON.stringify(I(n.getLayers()))}' ${v}`}),m=x(()=>{const[o,s,i]=D.value,y='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',v=`zoom="${i}" center=[${[o,s]}] }-->`;return`${y}'${JSON.stringify(I(n.getLayers()))}' ${v}`});return(o,s)=>(h(),we(Je,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},{default:d(()=>[a(Ke,{style:{"max-height":"498px"}},{default:d(()=>[a(M,{class:"bg-primary",style:{"max-height":"49px"}},{default:d(()=>s[2]||(s[2]=[c("h5",{class:"text-h5"},"Storytelling map configuration",-1)])),_:1}),a(R,{class:"py-5 overflow-auto",style:{height:"400px"}},{default:d(()=>[s[4]||(s[4]=c("p",{class:"text-body-2"},[V(" Copy and paste this code into the map "),c("b",null,"layers field"),V(" of the storytelling editor: ")],-1)),c("div",ea,N(A(I)(e.getLayers())),1),c("div",aa,[a(Ue,null,{default:d(()=>[t.value?(h(),$("div",ta,[a(_,{color:"success",left:"",icon:[A(Ee)]},null,8,["icon"]),s[3]||(s[3]=c("small",null,"copied!",-1))])):Fe("v-if",!0)]),_:1})]),a(Me,{class:"d-flex pt-3 justify-end"},{default:d(()=>[a(Oe,{cols:"6",class:"flex-column align-center text-end"},{default:d(()=>[(h(),$(T,null,Re(u,i=>a(w,{class:"text-body-2",onClick:i.copyFn,key:i.id,small:"",variant:"text","prepend-icon":[A(ze)]},{default:d(()=>[V(" copy as "+N(i.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),a(je),a(O,{style:{"max-height":"49px"}},{default:d(()=>[a(Ye),a(w,{variant:"text",onClick:s[0]||(s[0]=i=>l.value=!l.value)},{default:d(()=>s[5]||(s[5]=[V(" Close ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},va=Be(na,[["__scopeId","data-v-b8c788e8"]]);export{va as default};
