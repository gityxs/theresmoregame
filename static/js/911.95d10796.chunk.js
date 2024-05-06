"use strict";(self.webpackChunkTheresmore=self.webpackChunkTheresmore||[]).push([[911],{5911:function(e,t,r){r.r(t),r.d(t,{default:function(){return we}});var n=r(5671),a=r(3144),i=r(9340),o=r(2882),s=r(7313),l=r(2126),c=r(927),u=r(8561),d=r.n(u),p=r(8966),f=r(1231),x=r(885),v=r(4925),h=r(2982),b=r(4942),m=r(1413),g=r(5218),y=r(6971),S=r(200),j=r(7992);function R(e,t){var r=(0,s.useState)(e),n=(0,x.Z)(r,2),a=n[0],i=n[1],o=(0,j.E)(e);return(0,S.e)((function(){return i(o.current)}),[o,i].concat((0,h.Z)(t))),a}var Z=r(1267),w=r(6497),k=r(8281),N=r(9167),O=r(3352);var I,P=((I=P||{})[I.First=0]="First",I[I.Previous=1]="Previous",I[I.Next=2]="Next",I[I.Last=3]="Last",I[I.Specific=4]="Specific",I[I.Nothing=5]="Nothing",I);function C(e,t){var r=t.resolveItems();if(r.length<=0)return null;var n=t.resolveActiveIndex(),a=null!=n?n:-1,i=function(){switch(e.focus){case 0:return r.findIndex((function(e){return!t.resolveDisabled(e)}));case 1:var n=r.slice().reverse().findIndex((function(e,r,n){return!(-1!==a&&n.length-r-1>=a)&&!t.resolveDisabled(e)}));return-1===n?n:r.length-1-n;case 2:return r.findIndex((function(e,r){return!(r<=a)&&!t.resolveDisabled(e)}));case 3:var i=r.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===i?i:r.length-1-i;case 4:return r.findIndex((function(r){return t.resolveId(r)===e.id}));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===i?n:i}var M,T,D,L=r(6698),_=r(3759),E=r(426),K=r(4527),A=r(5941),z=r(5678),F=r(375),q=r(7626),Q=r(1464),V=["value","name","onChange","disabled","horizontal","multiple"],G=["disabled","value"],U=((D=U||{})[D.Open=0]="Open",D[D.Closed=1]="Closed",D),B=function(e){return e[e.Single=0]="Single",e[e.Multi=1]="Multi",e}(B||{}),Y=function(e){return e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e}(Y||{}),H=((T=H||{})[T.OpenListbox=0]="OpenListbox",T[T.CloseListbox=1]="CloseListbox",T[T.SetDisabled=2]="SetDisabled",T[T.SetOrientation=3]="SetOrientation",T[T.GoToOption=4]="GoToOption",T[T.Search=5]="Search",T[T.ClearSearch=6]="ClearSearch",T[T.RegisterOption=7]="RegisterOption",T[T.UnregisterOption=8]="UnregisterOption",T);function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},r=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,n=(0,_.z2)(t(e.options.slice()),(function(e){return e.dataRef.current.domRef.current})),a=r?n.indexOf(r):null;return-1===a&&(a=null),{options:n,activeOptionIndex:a}}var W=(M={},(0,b.Z)(M,1,(function(e){return e.disabled||1===e.listboxState?e:(0,m.Z)((0,m.Z)({},e),{},{activeOptionIndex:null,listboxState:1})})),(0,b.Z)(M,0,(function(e){if(e.disabled||0===e.listboxState)return e;var t=e.activeOptionIndex,r=e.propsRef.current,n=r.value,a=r.mode,i=r.compare,o=e.options.findIndex((function(e){var t,r=e.dataRef.current.value;return(0,k.E)(a,(t={},(0,b.Z)(t,1,(function(){return n.some((function(e){return i(e,r)}))})),(0,b.Z)(t,0,(function(){return i(n,r)})),t))}));return-1!==o&&(t=o),(0,m.Z)((0,m.Z)({},e),{},{listboxState:0,activeOptionIndex:t})})),(0,b.Z)(M,2,(function(e,t){return e.disabled===t.disabled?e:(0,m.Z)((0,m.Z)({},e),{},{disabled:t.disabled})})),(0,b.Z)(M,3,(function(e,t){return e.orientation===t.orientation?e:(0,m.Z)((0,m.Z)({},e),{},{orientation:t.orientation})})),(0,b.Z)(M,4,(function(e,t){var r;if(e.disabled||1===e.listboxState)return e;var n=J(e),a=C(t,{resolveItems:function(){return n.options},resolveActiveIndex:function(){return n.activeOptionIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return(0,m.Z)((0,m.Z)((0,m.Z)({},e),n),{},{searchQuery:"",activeOptionIndex:a,activationTrigger:null!=(r=t.trigger)?r:1})})),(0,b.Z)(M,5,(function(e,t){if(e.disabled||1===e.listboxState)return e;var r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((function(e){var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))})),i=a?e.options.indexOf(a):-1;return-1===i||i===e.activeOptionIndex?(0,m.Z)((0,m.Z)({},e),{},{searchQuery:n}):(0,m.Z)((0,m.Z)({},e),{},{searchQuery:n,activeOptionIndex:i,activationTrigger:1})})),(0,b.Z)(M,6,(function(e){return e.disabled||1===e.listboxState||""===e.searchQuery?e:(0,m.Z)((0,m.Z)({},e),{},{searchQuery:""})})),(0,b.Z)(M,7,(function(e,t){var r={id:t.id,dataRef:t.dataRef},n=J(e,(function(e){return[].concat((0,h.Z)(e),[r])}));if(null===e.activeOptionIndex){var a,i=e.propsRef.current,o=i.value,s=i.mode,l=i.compare,c=t.dataRef.current.value;(0,k.E)(s,(a={},(0,b.Z)(a,1,(function(){return o.some((function(e){return l(e,c)}))})),(0,b.Z)(a,0,(function(){return l(o,c)})),a))&&(n.activeOptionIndex=n.options.indexOf(r))}return(0,m.Z)((0,m.Z)({},e),n)})),(0,b.Z)(M,8,(function(e,t){var r=J(e,(function(e){var r=e.findIndex((function(e){return e.id===t.id}));return-1!==r&&e.splice(r,1),e}));return(0,m.Z)((0,m.Z)((0,m.Z)({},e),r),{},{activationTrigger:1})})),M),X=(0,s.createContext)(null);function $(e){var t=(0,s.useContext)(X);if(null===t){var r=new Error("<".concat(e," /> is missing a parent <Listbox /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}return t}function ee(e,t){return(0,k.E)(t.type,W,e,t)}X.displayName="ListboxContext";var te=s.Fragment,re=(0,w.yV)((function(e,t){var r,n=e.value,a=e.name,i=e.onChange,o=e.disabled,l=void 0!==o&&o,c=e.horizontal,u=void 0!==c&&c,d=e.multiple,p=void 0!==d&&d,f=(0,v.Z)(e,V),h=u?"horizontal":"vertical",g=(0,Z.T)(t),y=(0,s.useReducer)(ee,{listboxState:1,propsRef:{current:{value:n,onChange:i,mode:p?1:0,compare:(0,Q.z)((function(e,t){return e===t}))}},labelRef:(0,s.createRef)(),buttonRef:(0,s.createRef)(),optionsRef:(0,s.createRef)(),disabled:l,orientation:h,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),j=(0,x.Z)(y,2),R=j[0],N=R.listboxState,O=R.propsRef,I=R.optionsRef,P=R.buttonRef,C=j[1];O.current.value=n,O.current.mode=p?1:0,(0,S.e)((function(){O.current.onChange=function(e){var t;return(0,k.E)(O.current.mode,(t={},(0,b.Z)(t,0,(function(){return i(e)})),(0,b.Z)(t,1,(function(){var t=O.current.value.slice(),r=t.indexOf(e);return-1===r?t.push(e):t.splice(r,1),i(t)})),t))}}),[i,O]),(0,S.e)((function(){return C({type:2,disabled:l})}),[l]),(0,S.e)((function(){return C({type:3,orientation:h})}),[h]),(0,A.O)([P,I],(function(e,t){var r;C({type:1}),(0,_.sP)(t,_.tJ.Loose)||(e.preventDefault(),null==(r=P.current)||r.focus())}),0===N);var M=(0,s.useMemo)((function(){return{open:0===N,disabled:l}}),[N,l]),T={ref:g};return s.createElement(X.Provider,{value:y},s.createElement(E.up,{value:(0,k.E)(N,(r={},(0,b.Z)(r,0,E.ZM.Open),(0,b.Z)(r,1,E.ZM.Closed),r))},null!=a&&null!=n&&(0,F.t)((0,b.Z)({},a,n)).map((function(e){var t=(0,x.Z)(e,2),r=t[0],n=t[1];return s.createElement(z._,(0,m.Z)({features:z.A.Hidden},(0,w.oA)({key:r,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:r,value:n})))})),(0,w.sY)({ourProps:T,theirProps:f,slot:M,defaultTag:te,name:"Listbox"})))})),ne=(0,w.yV)((function(e,t){var r,n=$("Listbox.Button"),a=(0,x.Z)(n,2),i=a[0],o=a[1],l=(0,Z.T)(i.buttonRef,t),c="headlessui-listbox-button-".concat((0,y.M)()),u=(0,g.G)(),d=(0,Q.z)((function(e){switch(e.key){case O.R.Space:case O.R.Enter:case O.R.ArrowDown:e.preventDefault(),o({type:0}),u.nextFrame((function(){i.propsRef.current.value||o({type:4,focus:P.First})}));break;case O.R.ArrowUp:e.preventDefault(),o({type:0}),u.nextFrame((function(){i.propsRef.current.value||o({type:4,focus:P.Last})}))}})),p=(0,Q.z)((function(e){if(e.key===O.R.Space)e.preventDefault()})),f=(0,Q.z)((function(e){if((0,L.P)(e.currentTarget))return e.preventDefault();0===i.listboxState?(o({type:1}),u.nextFrame((function(){var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),o({type:0}))})),v=R((function(){if(i.labelRef.current)return[i.labelRef.current.id,c].join(" ")}),[i.labelRef.current,c]),h=(0,s.useMemo)((function(){return{open:0===i.listboxState,disabled:i.disabled}}),[i]),b=e,m={ref:l,id:c,type:(0,K.f)(e,i.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=i.optionsRef.current)?void 0:r.id,"aria-expanded":i.disabled?void 0:0===i.listboxState,"aria-labelledby":v,disabled:i.disabled,onKeyDown:d,onKeyUp:p,onClick:f};return(0,w.sY)({ourProps:m,theirProps:b,slot:h,defaultTag:"button",name:"Listbox.Button"})})),ae=(0,w.yV)((function(e,t){var r=$("Listbox.Label"),n=(0,x.Z)(r,1)[0],a="headlessui-listbox-label-".concat((0,y.M)()),i=(0,Z.T)(n.labelRef,t),o=(0,Q.z)((function(){var e;return null==(e=n.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),l=(0,s.useMemo)((function(){return{open:0===n.listboxState,disabled:n.disabled}}),[n]);return(0,w.sY)({ourProps:{ref:i,id:a,onClick:o},theirProps:e,slot:l,defaultTag:"label",name:"Listbox.Label"})})),ie=w.AN.RenderStrategy|w.AN.Static,oe=(0,w.yV)((function(e,t){var r,n=$("Listbox.Options"),a=(0,x.Z)(n,2),i=a[0],o=a[1],l=(0,Z.T)(i.optionsRef,t),c="headlessui-listbox-options-".concat((0,y.M)()),u=(0,g.G)(),d=(0,g.G)(),p=(0,E.oJ)(),f=null!==p?p===E.ZM.Open:0===i.listboxState;(0,s.useEffect)((function(){var e,t=i.optionsRef.current;!t||0===i.listboxState&&t!==(null==(e=(0,q.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})}),[i.listboxState,i.optionsRef]);var v=(0,Q.z)((function(e){switch(d.dispose(),e.key){case O.R.Space:if(""!==i.searchQuery)return e.preventDefault(),e.stopPropagation(),o({type:5,value:e.key});case O.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==i.activeOptionIndex){var t=i.options[i.activeOptionIndex].dataRef;i.propsRef.current.onChange(t.current.value)}0===i.propsRef.current.mode&&(o({type:1}),(0,N.k)().nextFrame((function(){var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})})));break;case(0,k.E)(i.orientation,{vertical:O.R.ArrowDown,horizontal:O.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),o({type:4,focus:P.Next});case(0,k.E)(i.orientation,{vertical:O.R.ArrowUp,horizontal:O.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),o({type:4,focus:P.Previous});case O.R.Home:case O.R.PageUp:return e.preventDefault(),e.stopPropagation(),o({type:4,focus:P.First});case O.R.End:case O.R.PageDown:return e.preventDefault(),e.stopPropagation(),o({type:4,focus:P.Last});case O.R.Escape:return e.preventDefault(),e.stopPropagation(),o({type:1}),u.nextFrame((function(){var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));case O.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(o({type:5,value:e.key}),d.setTimeout((function(){return o({type:6})}),350))}})),h=R((function(){var e,t,r;return null!=(r=null==(e=i.labelRef.current)?void 0:e.id)?r:null==(t=i.buttonRef.current)?void 0:t.id}),[i.labelRef.current,i.buttonRef.current]),b=(0,s.useMemo)((function(){return{open:0===i.listboxState}}),[i]),m=e,S={"aria-activedescendant":null===i.activeOptionIndex||null==(r=i.options[i.activeOptionIndex])?void 0:r.id,"aria-multiselectable":1===i.propsRef.current.mode||void 0,"aria-labelledby":h,"aria-orientation":i.orientation,id:c,onKeyDown:v,role:"listbox",tabIndex:0,ref:l};return(0,w.sY)({ourProps:S,theirProps:m,slot:b,defaultTag:"ul",features:ie,visible:f,name:"Listbox.Options"})})),se=(0,w.yV)((function(e,t){var r,n=e.disabled,a=void 0!==n&&n,i=e.value,o=(0,v.Z)(e,G),l=$("Listbox.Option"),c=(0,x.Z)(l,2),u=c[0],d=c[1],p="headlessui-listbox-option-".concat((0,y.M)()),f=null!==u.activeOptionIndex&&u.options[u.activeOptionIndex].id===p,h=u.propsRef.current,m=h.value,g=h.compare,j=(0,k.E)(u.propsRef.current.mode,(r={},(0,b.Z)(r,1,(function(){return m.some((function(e){return g(e,i)}))})),(0,b.Z)(r,0,(function(){return g(m,i)})),r)),R=(0,s.useRef)(null),O=(0,Z.T)(t,R);(0,S.e)((function(){if(0===u.listboxState&&f&&0!==u.activationTrigger){var e=(0,N.k)();return e.requestAnimationFrame((function(){var e,t;null==(t=null==(e=R.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}}),[R,f,u.listboxState,u.activationTrigger,u.activeOptionIndex]);var I=(0,s.useRef)({disabled:a,value:i,domRef:R});(0,S.e)((function(){I.current.disabled=a}),[I,a]),(0,S.e)((function(){I.current.value=i}),[I,i]),(0,S.e)((function(){var e,t;I.current.textValue=null==(t=null==(e=R.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[I,R]);var C=(0,Q.z)((function(){return u.propsRef.current.onChange(i)}));(0,S.e)((function(){return d({type:7,id:p,dataRef:I}),function(){return d({type:8,id:p})}}),[I,p]);var M=(0,Q.z)((function(e){if(a)return e.preventDefault();C(),0===u.propsRef.current.mode&&(d({type:1}),(0,N.k)().nextFrame((function(){var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})})))})),T=(0,Q.z)((function(){if(a)return d({type:4,focus:P.Nothing});d({type:4,focus:P.Specific,id:p})})),D=(0,Q.z)((function(){a||f||d({type:4,focus:P.Specific,id:p,trigger:0})})),L=(0,Q.z)((function(){a||!f||d({type:4,focus:P.Nothing})})),_=(0,s.useMemo)((function(){return{active:f,selected:j,disabled:a}}),[f,j,a]);return(0,w.sY)({ourProps:{id:p,ref:O,role:"option",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,"aria-selected":!0===j||void 0,disabled:void 0,onClick:M,onFocus:T,onPointerMove:D,onMouseMove:D,onPointerLeave:L,onMouseLeave:L},theirProps:o,slot:_,defaultTag:"li",name:"Listbox.Option"})})),le=Object.assign(re,{Button:ne,Label:ae,Options:oe,Option:se}),ce=r(7794),ue=["title","titleId"];var de=s.forwardRef((function(e,t){var r=e.title,n=e.titleId,a=(0,v.Z)(e,ue);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},a),r?s.createElement("title",{id:n},r):null,s.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))})),pe=r(8982),fe=r(6417),xe=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this;return(0,fe.jsx)(le,{value:this.props.selected,onChange:this.props.onChange,children:(0,fe.jsxs)("div",{className:"",children:[(0,fe.jsxs)(le.Button,{className:"relative w-full cursor-default rounded-lg py-2 pl-1 pr-10 text-center text-sm 3xl:text-base whitespace-nowrap",children:[(0,fe.jsx)("span",{className:"block truncate",children:(0,pe.K)(this.props.prefix+"_"+this.props.selected)}),(0,fe.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,fe.jsx)(de,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,fe.jsx)(ce.u,{as:s.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,fe.jsx)(le.Options,{className:"absolute z-10 max-h-60 min-w-40 w-auto overflow-auto rounded-md bg-gray-200 dark:bg-mydark-300 py-1 shadow-lg focus:outline-none border border-gray-400 dark:border-mydark-200",children:this.props.options.map((function(t){return(0,fe.jsx)(le.Option,{className:function(e){var t=e.active;return"relative cursor-default select-none py-4 xl:py-2 px-4 ".concat(t?"bg-gray-300 dark:bg-mydark-700 text-ancestor":"")},value:t,children:function(){return(0,fe.jsx)("span",{className:"block truncate",children:(0,pe.K)(e.props.prefix+"_"+t)})}},"select-"+t)}))})})]})})}}]),r}(s.Component),ve=xe,he=r(8519),be=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleToggleSpell=function(){e.props.MainStore.MagicStore.toggleSpell(e.props.id)},e}return(0,a.Z)(r,[{key:"render",value:function(){var e=this,t=this.props.MainStore.ResourcesStore.mana;return(0,fe.jsxs)("div",{className:"p-4 bg-gray-100 dark:bg-mydark-400 border border-gray-300 dark:border-mydark-200 rounded-lg shadow flex flex-col "+(this.props.active?" border-green-500 dark:border-green-700":""),children:[(0,fe.jsxs)("div",{className:"flex-1 text-center relative",children:[(0,fe.jsx)("h5",{className:"font-bold whitespace-nowrap inline "+(this.props.active?" !text-green-600 dark:!text-green-500":""),children:(0,pe.K)("fai_"+this.props.id)}),(0,fe.jsx)("div",{className:"absolute top-0 right-0",children:"resource"===this.props.category?(0,fe.jsx)(d(),{path:p.f_y,className:"icon !w-4 opacity-40"}):"army"===this.props.category?(0,fe.jsx)(d(),{path:p.Hne,className:"icon !w-4 opacity-40"}):"defense"===this.props.category?(0,fe.jsx)(d(),{path:p.pCE,className:"icon !w-4 opacity-40"}):null}),(0,fe.jsx)("table",{className:"min-w-full my-4",children:(0,fe.jsx)("tbody",{className:"bg-gray-300 dark:bg-mydark-600 text-sm",children:this.props.gen.map((function(t,r){return"resource"===t.type?(0,fe.jsxs)("tr",{className:r%2===0?"bg-gray-200 dark:bg-mydark-300":"",children:[(0,fe.jsx)("td",{className:"text-left px-4 py-1 whitespace-nowrap",children:(0,pe.K)("res_"+t.id)}),(0,fe.jsxs)("td",{className:(0,he.AK)(t.value<0?"text-red-600":"","text-right px-4 py-1"),children:[t.value>0?"+":"",t.value.toLocaleString(),t.perc?"%":"/s"]})]},e.props.id+"_spell_"+r):"army"===t.type_id?(0,fe.jsxs)("tr",{className:r%2===0?"bg-gray-200 dark:bg-mydark-300":"",children:[(0,fe.jsxs)("td",{className:"text-left px-4 py-1 whitespace-nowrap",children:[(0,pe.K)("uni_"+t.id)," ",(0,pe.K)(t.gen).toLowerCase()]}),(0,fe.jsxs)("td",{className:(0,he.AK)(t.value<0?"text-red-600":"","text-right px-4 py-1"),children:["+",t.value.toLocaleString()]})]},e.props.id+"_spell_"+r):null}))})})]}),(0,fe.jsx)("div",{className:"text-center px-12 xl:px-0",children:this.props.active?(0,fe.jsxs)("button",{type:"button",className:"btn btn-dark",onClick:this.handleToggleSpell,children:[(0,fe.jsx)(d(),{path:p.UEB,className:"icon mr-1 lg:mt-[1px]"}),(0,pe.K)("fai_spell_cancel")]}):(0,fe.jsxs)("button",{type:"button",className:"btn btn-green "+(t<=0?" btn-off border-green-500 dark:border-green-700":""),onClick:this.handleToggleSpell,children:[(0,fe.jsx)(d(),{path:p._VZ,className:"icon mr-1 lg:mt-[1px]"}),(0,pe.K)("fai_spell_accept")]})})]})}}]),r}(s.Component),me=(0,l.f3)("MainStore")((0,l.Pi)(be)),ge=r(4862),ye=r(7914),Se=r(5339),je=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(e){var a;return(0,n.Z)(this,r),(a=t.call(this,e)).handleAdd=function(){a.props.sD?a.props.MainStore.MagicStore.addPrayer(a.props.id):!a.state.progress&&a.props.buildable&&(a.setState({progress:!0}),setTimeout((function(){a.props.MainStore.MagicStore.addPrayer(a.props.id)}),3e3))},a.state={progress:!1},a}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props.MainStore.ReqGenStore.reqTooltipData("prayer",this.props.req),t=this.props.MainStore.ReqGenStore.genTooltipData(this.props.gen),r="btn btn-dark";return this.props.owned?r+=" btn-off btn-cap":this.props.buildable?this.state.progress&&(r+=" btn-progress"):r+=" btn-off",(0,fe.jsx)("div",{className:"flex flex-col",children:(0,fe.jsx)(ye.a,{content:(0,fe.jsx)(Se.Z,{id:this.props.id,title:(0,pe.K)("fai_"+this.props.id),description:(0,pe.K)("fai_"+this.props.id+"_description"),owned:this.props.owned,reqTooltipData:e,genTooltipData:t,prefix:"pray"}),className:"!max-w-[260px]",touch:["hold",500],placement:ge.tq?"top":"bottom",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","top","right","left"]}}]},children:(0,fe.jsx)("button",{type:"button",className:r,onClick:this.handleAdd,children:(0,pe.K)("fai_"+this.props.id)})})})}}]),r}(s.Component),Re=(0,l.f3)("MainStore")((0,l.Pi)(je)),Ze=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).selectSpellChange=function(t){e.props.MainStore.MagicStore.setFilterSpells(t)},e.handleSelect=function(t){e.props.MainStore.MagicStore.selectTab(t)},e}return(0,a.Z)(r,[{key:"render",value:function(){var e=this,t=this.props.MainStore.sD,r=this.props.MainStore.MagicStore,n=r.visiblePrayers,a=r.buildablePrayers,i=r.ownedPrayers,o=r.visibleSpells,s=r.selectedTab,l=r.spellFilters,u=r.filterSpells,x="inline-flex justify-center rounded-full border shadow-sm text-sm whitespace-nowrap border-gray-400 dark:border-gray-500",v=x;x+=" px-3 py-2",x+=" xl:block xl:rounded-none xl:border-0 xl:shadow-none lg:px-2 xl:border-transparent xl:dark:border-transparent",x+=" xl:border-b-2 xl:m-[-1px] 4xl:px-6 3xl:text-base";var h="!border-ancestor text-ancestor",b="xl:border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-mydark-50 hover:border-gray-400 dark:hover:border-gray-500";return(0,fe.jsxs)(c.O.Group,{selectedIndex:s,onChange:this.handleSelect,children:[0===s&&i.length>0?(0,fe.jsxs)("div",{className:"absolute ml-2 w-40 hidden xl:flex",children:[(0,fe.jsx)(d(),{path:p.Qbm,className:"icon opacity-60"}),(0,fe.jsx)(ve,{options:l,prefix:"spells",selected:u,onChange:this.selectSpellChange})]}):null,(0,fe.jsx)("div",{className:"mx-auto border-b border-gray-300 dark:border-mydark-200 flex justify-center mt-1 xl:mt-0",children:(0,fe.jsxs)(c.O.List,{className:"grid grid-cols-2 gap-3 my-2 mb-3 lg:flex lg:gap-1 lg:mt-0 lg:mb-1 xl:mb-0 2xl:gap-3",children:[(0,fe.jsxs)(c.O,{className:function(e){var t=e.selected;return(0,he.AK)(x,t?h:b)},children:[(0,fe.jsx)(d(),{path:p.g7x,className:"icon inline 3xl:-mt-1 mr-1"}),(0,pe.K)("spells")]}),(0,fe.jsxs)(c.O,{className:function(e){var t=e.selected;return(0,he.AK)(x,t?h:b)},children:[(0,fe.jsx)(d(),{path:p.h_8,className:"icon inline 3xl:-mt-1 mr-1"}),(0,pe.K)("prayers"),n.length>0?(0,fe.jsx)("span",{className:"inline-block ml-2 py-px px-2 rounded-full font-bold text-xs bg-gray-300 text-gray-600 dark:bg-mydark-200 dark:text-mydark-50",children:n.length}):null]}),(0,fe.jsxs)(c.O,{className:function(e){var t=e.selected;return(0,he.AK)(x,t?h:b)},children:[(0,fe.jsx)(d(),{path:p.YKm,className:"icon inline lg:-mt-1 mr-1"}),(0,pe.K)("completed")]})]})}),(0,fe.jsxs)(c.O.Panels,{children:[(0,fe.jsxs)(c.O.Panel,{children:[i.length>0?(0,fe.jsx)("div",{className:"my-3 w-full flex justify-center xl:hidden",children:(0,fe.jsxs)("div",{className:v+" pl-3 pr-1",children:[(0,fe.jsx)(d(),{path:p.Qbm,className:"icon opacity-60"}),(0,fe.jsx)(ve,{options:l,prefix:"spells",selected:u,onChange:this.selectSpellChange})]})}):null,o.length>0?(0,fe.jsx)("div",{className:"tab-container sub-container",children:(0,fe.jsx)("div",{className:"flex flex-wrap min-w-full xl:mt-3",children:(0,fe.jsx)("div",{className:"grid gap-3 grid-cols-fill-270 min-w-full",children:o.map((function(t){var r=e.props.MainStore.MagicStore.activeSpell(t.id);return(0,fe.jsx)(me,{id:t.id,active:r,gen:t.gen,category:t.cat},"fai_"+t.id)}))})})}):null,0===o.length?(0,fe.jsx)("div",{className:"flex justify-center my-6 text-lg",children:(0,fe.jsx)("div",{className:"min-w-[40%] w-auto",children:(0,fe.jsx)(f.Z,{text:(0,pe.K)("spells_empty"),type:"info"})})}):null]}),(0,fe.jsxs)(c.O.Panel,{children:[n.length>0?(0,fe.jsx)("div",{className:"tab-container sub-container",children:(0,fe.jsx)("div",{className:"flex flex-wrap min-w-full mt-3 p-3 shadow rounded-lg ring-1 ring-gray-300 dark:ring-mydark-200 bg-gray-100 dark:bg-mydark-600",children:(0,fe.jsx)("div",{className:"grid gap-3 grid-cols-fill-180 min-w-full px-12 xl:px-0",children:n.map((function(e){var r=-1!==a.findIndex((function(t){return t.id===e.id}));return(0,fe.jsx)(Re,{id:e.id,buildable:r,req:e.req,gen:e.gen,sD:t},"fai_"+e.id)}))})})}):null,0===n.length?(0,fe.jsx)("div",{className:"flex justify-center my-6 text-lg",children:(0,fe.jsx)("div",{className:"min-w-[40%] w-auto",children:(0,fe.jsx)(f.Z,{text:(0,pe.K)("prayer_empty"),type:"info"})})}):null]}),(0,fe.jsxs)(c.O.Panel,{children:[i.length>0?(0,fe.jsx)("div",{className:"tab-container sub-container",children:(0,fe.jsx)("div",{className:"flex flex-wrap min-w-full mt-3 p-3 shadow rounded-lg ring-1 ring-gray-300 dark:ring-mydark-200 bg-gray-100 dark:bg-mydark-600",children:(0,fe.jsx)("div",{className:"grid gap-3 grid-cols-fill-180 min-w-full px-12 xl:px-0",children:i.map((function(e){return(0,fe.jsx)(Re,{id:e.id,buildable:!1,req:e.req,gen:e.gen,sD:t,owned:!0},"fai_"+e.id)}))})})}):null,0===i.length?(0,fe.jsx)("div",{className:"flex justify-center my-6 text-lg",children:(0,fe.jsx)("div",{className:"min-w-[40%] w-auto",children:(0,fe.jsx)(f.Z,{text:(0,pe.K)("prayer_empty"),type:"info"})})}):null]})]})]})}}]),r}(s.Component),we=(0,l.f3)("MainStore")((0,l.Pi)(Ze))}}]);