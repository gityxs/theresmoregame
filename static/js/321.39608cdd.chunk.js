"use strict";(self.webpackChunkTheresmore=self.webpackChunkTheresmore||[]).push([[321],{7321:(e,r,s)=>{s.r(r),s.d(r,{default:()=>u});var l=s(9950),t=s(8232),d=s(1377),a=s(346),n=s(443),o=s(5970),i=s(4414);class c extends l.Component{constructor(){super(...arguments),this.handleSell10=e=>{e.stopPropagation(),d.Fr||e.currentTarget.blur(),this.props.MainStore.MarketStore.sell(this.props.id,10)},this.handleSell100=e=>{e.stopPropagation(),d.Fr||e.currentTarget.blur(),this.props.MainStore.MarketStore.sell(this.props.id,100)},this.handleSell1000=e=>{e.stopPropagation(),d.Fr||e.currentTarget.blur(),this.props.MainStore.MarketStore.sell(this.props.id,1e3)},this.handleBuy10=e=>{e.stopPropagation(),d.Fr||e.currentTarget.blur(),this.props.MainStore.MarketStore.buy(this.props.id,10)},this.handleBuy100=e=>{e.stopPropagation(),d.Fr||e.currentTarget.blur(),this.props.MainStore.MarketStore.buy(this.props.id,100)},this.handleBuy1000=e=>{e.stopPropagation(),d.Fr||e.currentTarget.blur(),this.props.MainStore.MarketStore.buy(this.props.id,1e3)}}render(){const{run:e,defaultNumberFormat:r,bigNumberFormat:s,twoNumberFormat:l}=this.props.MainStore,t=this.props.ownedGold>=10*this.props.buyValue,c=this.props.ownedGold>=100*this.props.buyValue,p=this.props.ownedGold>=1e3*this.props.buyValue,h="btn btn-green bg-green-700 hover:bg-green-800 focus:bg-green-900 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:bg-green-700",u=t?h:"btn btn-dark",b=c?h:"btn btn-dark",x=p?h:"btn btn-dark",m=this.props.ownedId>=10,g=this.props.ownedId>=100,f=this.props.ownedId>=1e3,k="btn btn-red bg-red-600 hover:bg-red-700 focus:bg-red-800 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:bg-red-700",y=m?k:"btn btn-dark",j=g?k:"btn btn-dark",N=f?k:"btn btn-dark",v="btn relative w-full",w=v+" rounded-l-full rounded-r-none",S=v+" rounded-l-none rounded-r-none -ml-px",M=v+" rounded-l-none rounded-r-full -ml-px";let C=0,F=e.resources.findIndex((e=>e.id===this.props.id));-1!==F&&"undefined"!==typeof e.resources[F].value&&(C=e.resources[F].value);const V=(0,o.ZV)(Math.floor(C),r,s);let P=0;F=e.resources.findIndex((e=>"gold"===e.id)),-1!==F&&"undefined"!==typeof e.resources[F].value&&(P=e.resources[F].value);const _=(0,o.ZV)(Math.floor(P),r,s);return(0,i.jsxs)("div",{className:"p-4 bg-gray-100 dark:bg-mydark-400 border border-gray-300 dark:border-mydark-200 rounded-lg shadow flex flex-col",children:[(0,i.jsx)("div",{className:"flex-1 text-center",children:(0,i.jsx)("h5",{className:"font-bold whitespace-nowrap w-full",children:(0,n.v)("res_"+this.props.id)})}),(0,i.jsxs)("div",{className:"relative p-4 bg-gray-100 dark:bg-mydark-400 border border-gray-300 dark:border-mydark-200 rounded-lg shadow flex flex-col my-3",children:[(0,i.jsx)("label",{className:"absolute -top-2 left-3 -mt-px inline-block px-1 text-xs font-medium z-10 px-1.5 rounded-full bg-gray-100 dark:bg-mydark-400",children:(0,n.v)("sell")}),(0,i.jsx)("div",{className:"flex-1 text-center",children:(0,i.jsx)("table",{className:"min-w-[60%] mx-auto mb-4",children:(0,i.jsx)("tbody",{className:"text-sm",children:(0,i.jsxs)("tr",{className:"bg-gray-200 dark:bg-mydark-200/50",children:[(0,i.jsx)("td",{className:"text-left px-4 py-1 whitespace-nowrap",children:(0,n.v)("res_gold")}),(0,i.jsx)("td",{className:"text-right px-4 py-1",children:l.format(Math.round(100*this.props.sellValue)/100)})]})})})}),d.Fr?(0,i.jsx)("div",{className:"grid gap-3",children:(0,i.jsx)("div",{className:"flex flex-col relative",children:(0,i.jsx)(a.l,{content:(0,i.jsxs)(i.Fragment,{children:[(0,n.v)("res_"+this.props.id)+": "+V,(0,i.jsx)("br",{}),(0,n.v)("res_gold")+": "+_]}),touch:!d.un||["hold",500],placement:"auto",popperOptions:{modifiers:[{name:"flip",options:{allowedAutoPlacements:["top"]}}]},children:(0,i.jsxs)("span",{className:"relative inline-flex shadow-sm rounded-full",children:[(0,i.jsx)("button",{type:"button",className:w+" "+y,onClick:e=>this.handleSell10(e),disabled:!m,children:"10"}),(0,i.jsx)("button",{type:"button",className:S+" "+j+(g?" border-l-red-700 dark:border-l-red-800":""),onClick:e=>this.handleSell100(e),disabled:!g,children:"100"}),(0,i.jsx)("button",{type:"button",className:M+" "+N+(f?" border-l-red-700 dark:border-l-red-800":""),onClick:e=>this.handleSell1000(e),disabled:!f,children:"1000"})]})})})}):(0,i.jsx)("div",{className:"grid gap-3",children:(0,i.jsx)("div",{className:"flex flex-col relative",children:(0,i.jsxs)("span",{className:"relative inline-flex shadow-sm rounded-full",children:[(0,i.jsx)("button",{type:"button",className:w+" "+y,onClick:e=>this.handleSell10(e),disabled:!m,children:"10"}),(0,i.jsx)("button",{type:"button",className:S+" "+j+(g?" border-l-red-700 dark:border-l-red-800":""),onClick:e=>this.handleSell100(e),disabled:!g,children:"100"}),(0,i.jsx)("button",{type:"button",className:M+" "+N+(f?" border-l-red-700 dark:border-l-red-800":""),onClick:e=>this.handleSell1000(e),disabled:!f,children:"1000"})]})})})]}),(0,i.jsxs)("div",{className:"relative p-4 bg-gray-100 dark:bg-mydark-400 border border-gray-300 dark:border-mydark-200 rounded-lg shadow flex flex-col",children:[(0,i.jsx)("label",{className:"absolute -top-2 left-3 -mt-px inline-block px-1 text-xs font-medium z-10 px-1.5 rounded-full bg-gray-100 dark:bg-mydark-400",children:(0,n.v)("buy")}),(0,i.jsx)("div",{className:"flex-1 text-center",children:(0,i.jsx)("table",{className:"min-w-[60%] mx-auto mb-4",children:(0,i.jsx)("tbody",{className:"text-sm",children:(0,i.jsxs)("tr",{className:"bg-gray-200 dark:bg-mydark-200/50",children:[(0,i.jsx)("td",{className:"text-left px-4 py-1 whitespace-nowrap",children:(0,n.v)("res_gold")}),(0,i.jsx)("td",{className:"text-right px-4 py-1",children:l.format(Math.round(100*this.props.buyValue)/100)})]})})})}),d.Fr?(0,i.jsx)("div",{className:"grid gap-3",children:(0,i.jsx)("div",{className:"flex flex-col relative",children:(0,i.jsx)(a.l,{content:(0,i.jsxs)(i.Fragment,{children:[(0,n.v)("res_"+this.props.id)+": "+V,(0,i.jsx)("br",{}),(0,n.v)("res_gold")+": "+_]}),touch:!d.un||["hold",500],placement:"auto",popperOptions:{modifiers:[{name:"flip",options:{allowedAutoPlacements:["top"]}}]},children:(0,i.jsxs)("span",{className:"relative inline-flex shadow-sm rounded-full",children:[(0,i.jsx)("button",{type:"button",className:w+" "+u,onClick:e=>this.handleBuy10(e),disabled:!t,children:"10"}),(0,i.jsx)("button",{type:"button",className:S+" "+b+(c?" border-l-green-800":""),onClick:e=>this.handleBuy100(e),disabled:!c,children:"100"}),(0,i.jsx)("button",{type:"button",className:M+" "+x+(p?" border-l-green-800":""),onClick:e=>this.handleBuy1000(e),disabled:!p,children:"1000"})]})})})}):(0,i.jsx)("div",{className:"grid gap-3",children:(0,i.jsx)("div",{className:"flex flex-col relative",children:(0,i.jsxs)("span",{className:"relative inline-flex shadow-sm rounded-full",children:[(0,i.jsx)("button",{type:"button",className:w+" "+u,onClick:e=>this.handleBuy10(e),disabled:!t,children:"10"}),(0,i.jsx)("button",{type:"button",className:S+" "+b+(c?" border-l-green-800":""),onClick:e=>this.handleBuy100(e),disabled:!c,children:"100"}),(0,i.jsx)("button",{type:"button",className:M+" "+x+(p?" border-l-green-800":""),onClick:e=>this.handleBuy1000(e),disabled:!p,children:"1000"})]})})})]})]})}}const p=(0,t.WQ)("MainStore")((0,t.PA)(c));class h extends l.Component{render(){const{stocks:e}=this.props.MainStore.MarketStore,{resources:r}=this.props.MainStore.ResourcesStore,s=this.props.MainStore.ResourcesStore.resourceValue("gold");return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"tab-container",children:(0,i.jsx)("div",{className:"flex flex-wrap min-w-full mt-3",children:(0,i.jsx)("div",{className:"grid gap-3 grid-cols-fill-240 min-w-full",children:e.map((e=>{if(-1!==r.findIndex((r=>r.id===e.id))){const r=this.props.MainStore.ResourcesStore.resourceValue(e.id);return(0,i.jsx)(p,{id:e.id,sellValue:e.sell_value,buyValue:e.buy_value,ownedGold:s,ownedId:r},"stock_"+e.id)}return null}))})})})})}}const u=(0,t.WQ)("MainStore")((0,t.PA)(h))}}]);