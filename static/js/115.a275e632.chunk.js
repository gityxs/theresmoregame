"use strict";(self.webpackChunkTheresmore=self.webpackChunkTheresmore||[]).push([[115],{4115:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var s=r(5671),a=r(3144),n=r(136),o=r(7277),i=r(7313),p=r(2126),l=r(6646),d=r(8561),c=r.n(d),h=r(8966),m=r(8982),u=r(8519),y=r(6417),x=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleQty1=function(t){e.props.MainStore.ArmyStore.setArmyStepQty(1),t.currentTarget.blur()},e.handleQty10=function(t){e.props.MainStore.ArmyStore.setArmyStepQty(10),t.currentTarget.blur()},e.handleQty50=function(t){e.props.MainStore.ArmyStore.setArmyStepQty(50),t.currentTarget.blur()},e}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props.MainStore.ArmyStore.armyStepQty,t="btn relative w-full",r=t+" rounded-l-full rounded-r-none"+(1===e?" btn-blue":" btn-dark"),s=t+" rounded-l-none rounded-r-none -ml-px"+(10===e?" btn-blue":" btn-dark"),a=t+" rounded-l-none rounded-r-full -ml-px"+(50===e?" btn-blue":" btn-dark");return(0,y.jsx)("div",{className:"flex flex-col",children:(0,y.jsxs)("span",{className:"relative inline-flex shadow-sm rounded-full",children:[(0,y.jsx)("button",{type:"button",className:r,onClick:this.handleQty1,children:"+1"}),(0,y.jsx)("button",{type:"button",className:s,onClick:this.handleQty10,children:"+10"}),(0,y.jsx)("button",{type:"button",className:a,onClick:this.handleQty50,children:"+50"})]})})}}]),r}(i.Component),f=(0,p.f3)("MainStore")((0,p.Pi)(x)),b=r(4862),g=r(7914),k=r(5339),v=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(e){var a;return(0,s.Z)(this,r),(a=t.call(this,e)).handleAdd=function(){a.props.sD?a.props.MainStore.ArmyStore.addArmyQty(a.props.id):!a.state.progress&&a.props.buildable&&(a.setState({progress:!0}),setTimeout((function(){a.props.MainStore.ArmyStore.addArmyQty(a.props.id),a.setState({progress:!1})}),1e3))},a.handleDismiss=function(){a.props.MainStore.ArmyStore.dismissArmy(a.props.id)},a.state={progress:!1},a}return(0,a.Z)(r,[{key:"render",value:function(){var e="undefined"!==typeof this.props.cap&&this.props.qty>=this.props.cap,t=this.props.MainStore.ReqGenStore.reqTooltipData("army",this.props.req,this.props.qty),r=this.props.MainStore.ReqGenStore.genTooltipData(this.props.gen),s="btn btn-dark relative rounded-l-full rounded-r-none w-full",a="btn btn-dark relative rounded-r-full rounded-l-none -ml-px w-min",n="";switch(this.props.type){case"recon":s+=" !border-blue-500 dark:!border-blue-700"+(n+=" text-blue-700 dark:text-blue-300"),a+=" !border-blue-500 dark:!border-blue-700"+n;break;case"spy":s+=" !border-violet-500 dark:!border-violet-700"+(n+=" text-violet-900 dark:text-violet-300"),a+=" !border-violet-500 dark:!border-violet-700"+n}return this.props.buildable?this.state.progress&&(s+=" btn-progress btn-progress-1"):s+=e?" btn-off btn-cap":" btn-off",s+=this.props.qty>0?"":" rounded-r-full",this.props.qty-this.props.away>=1?a+="":a+=" btn-off",(0,y.jsx)("div",{className:"flex flex-col",children:(0,y.jsxs)("span",{className:"relative inline-flex shadow-sm rounded-full",children:[(0,y.jsx)(g.a,{content:(0,y.jsx)(k.Z,{id:this.props.id,title:(0,m.K)("uni_"+this.props.id),titleClasses:n,description:(0,m.K)("uni_"+this.props.id+"_description")+(0!==this.props.category?" ("+(0,m.K)("uni_cat_"+this.props.category)+")":""),owned:!1,reqTooltipData:t,genTooltipData:r,prefix:"uni"}),className:"!max-w-[260px]",touch:["hold",500],placement:b.tq?"top":"bottom",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","top","right","left"]}}]},children:(0,y.jsxs)("button",{type:"button",className:s,onClick:this.handleAdd,children:[(0,m.K)("uni_"+this.props.id),(0,y.jsx)("span",{className:"absolute right-0 inline-block py-px px-2 text-gray-600 dark:text-mydark-50 z-[1]",children:1===this.props.category?(0,y.jsx)(c(),{path:h.YFH,className:"icon !w-3.5 opacity-40"}):2===this.props.category?(0,y.jsx)(c(),{path:h.Hne,className:"icon !w-3.5 opacity-40"}):3===this.props.category?(0,y.jsx)(c(),{path:h.hhU,className:"icon !w-3.5 opacity-40"}):4===this.props.category?(0,y.jsx)(c(),{path:h.XWK,className:"icon !w-3.5 opacity-40"}):"recon"===this.props.type?(0,y.jsx)(c(),{path:h.r8w,className:"icon !w-3.5 opacity-40"}):"spy"===this.props.type?(0,y.jsx)(c(),{path:h.XT1,className:"icon !w-3.5 opacity-40"}):null}),this.props.qty>0&&!this.state.progress?(0,y.jsx)("span",{className:"absolute -top-2 -right-3 inline-block py-px px-2 rounded-full font-bold text-xs bg-gray-300 text-gray-600 dark:bg-mydark-200 dark:text-mydark-50 z-[1]",children:this.props.qty}):null]})}),this.props.qty>0?(0,y.jsx)(g.a,{content:(0,m.K)("dismiss"),touch:["hold",500],placement:b.tq?"top":"bottom",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","top","right","left"]}}]},children:(0,y.jsx)("button",{type:"button",className:a,onClick:this.handleDismiss,children:(0,y.jsx)(c(),{path:h.$Qg,className:"icon"})})}):null]})})}}]),r}(i.Component),j=(0,p.f3)("MainStore")((0,p.Pi)(v)),S=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props.MainStore,t=e.run,r=e.sD,s=this.props.MainStore.ArmyStore,a=s.visibleArmy,n=s.buildableArmy;return(0,y.jsx)(y.Fragment,{children:a.length>0?(0,y.jsx)("div",{className:"tab-container sub-container",children:(0,y.jsx)("div",{className:"flex flex-wrap min-w-full mt-3 p-3 shadow rounded-lg ring-1 ring-gray-300 dark:ring-mydark-200 bg-gray-100 dark:bg-mydark-600",children:(0,y.jsxs)("div",{className:"grid gap-3 grid-cols-fill-180 min-w-full px-12 xl:px-0",children:[(0,y.jsx)(f,{}),a.map((function(e){var s=t.army.findIndex((function(t){return t.id===e.id})),a=-1!==s?t.army[s].value:0,o=-1!==s?t.army[s].away:0,i=-1!==(s=n.findIndex((function(t){return t.id===e.id})));return(0,y.jsx)(j,{id:e.id,qty:a,away:o,buildable:i,req:e.req,gen:e.gen,cap:e.cap,type:e.type,category:e.category,sD:r},"army_create_"+e.id)}))]})})}):null})}}]),r}(i.Component),w=(0,p.f3)("MainStore")((0,p.Pi)(S)),N=r(1231),A=r(2171),M=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t,r,s){s>1?t+="increase"===r?s:-s:"shift"===e.props.MainStore.keyPress?t+="increase"===r?4:-4:"ctrl"===e.props.MainStore.keyPress&&(t+="increase"===r?9:-9),"defense"===e.props.type?e.props.MainStore.ArmyStore.updateDefense(e.props.id,t):e.props.MainStore.ArmyStore.updateAway(e.props.id,t)},e}return(0,a.Z)(r,[{key:"render",value:function(){var e=this;return(0,y.jsxs)("div",{className:"p-4 bg-gray-100 dark:bg-mydark-400 border border-gray-300 dark:border-mydark-200 rounded-lg shadow flex flex-col",children:[(0,y.jsxs)("div",{className:"flex-1 text-center relative px-12 2xl:px-0 mb-2 "+(this.props.reqAttackTooltip?"lg:mb-0":"lg:mb-4"),children:[(0,y.jsx)(g.a,{content:(0,y.jsx)(k.Z,{id:this.props.id,title:(0,m.K)("uni_"+this.props.id),description:(0,m.K)("uni_"+this.props.id+"_description")+(0!==this.props.category?" ("+(0,m.K)("uni_cat_"+this.props.category)+")":""),reqTooltipData:this.props.reqAttackTooltip,prefix:"uni_spinner",titleClasses:" pt-3",containerClasses:" lg:hidden"}),className:"!max-w-[260px]",touch:["hold",500],placement:b.tq?"top":"bottom",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","top","right","left"]}}]},children:(0,y.jsx)("h5",{className:"font-bold whitespace-nowrap inline",children:(0,m.K)("uni_"+this.props.id)})}),(0,y.jsx)("div",{className:"absolute top-0 right-0",children:1===this.props.category?(0,y.jsx)(c(),{path:h.YFH,className:"icon !w-4 opacity-40"}):2===this.props.category?(0,y.jsx)(c(),{path:h.Hne,className:"icon !w-4 opacity-40"}):3===this.props.category?(0,y.jsx)(c(),{path:h.hhU,className:"icon !w-4 opacity-40"}):4===this.props.category?(0,y.jsx)(c(),{path:h.XWK,className:"icon !w-4 opacity-40"}):"recon"===this.props.uniType?(0,y.jsx)(c(),{path:h.r8w,className:"icon !w-4 opacity-40"}):"spy"===this.props.uniType?(0,y.jsx)(c(),{path:h.XT1,className:"icon !w-4 opacity-40"}):null}),this.props.reqAttackTooltip?(0,y.jsx)("table",{className:"min-w-full my-4 hidden lg:table",children:(0,y.jsx)("tbody",{className:"bg-gray-300 dark:bg-mydark-600 text-sm",children:this.props.reqAttackTooltip.map((function(t,r){return(0,y.jsxs)("tr",{className:r%2===0?"bg-gray-200 dark:bg-mydark-300":"",children:[(0,y.jsx)("td",{className:"text-left px-4 py-1 whitespace-nowrap",children:t.label}),(0,y.jsx)("td",{className:"text-right px-4 py-1",children:t.value})]},e.props.id+"_uni_"+r)}))})}):null]}),(0,y.jsx)(A.Z,{value:this.props.qty,max:this.props.cap,forceMax:this.props.forceMax,onChange:this.handleChange,disabled:this.props.disabled},"spinner_"+this.props.id)]})}}]),r}(i.Component),_=(0,p.f3)("MainStore")((0,p.Pi)(M)),C=r(3737),Z=r(8215),K=r(1048),T=r(6934),P=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(e){var a;return(0,s.Z)(this,r),(a=t.call(this,e)).toggleModal=function(){a.setState({open:!a.state.open})},a.selectEnemy=function(e){"spy"===a.props.type?a.props.MainStore.updateSpy(e):a.props.MainStore.updateEnemy(e),a.toggleModal()},a.state={open:!1},a}return(0,a.Z)(r,[{key:"enemyRow",value:function(e,t){var r=this,s=t%2===0?"bg-gray-200 dark:bg-mydark-300":"",a=[];if("undefined"!==typeof e.level&&e.level>0)for(var n=0;n<e.level;n++)a.push((0,y.jsx)(c(),{path:h.h27,className:"icon inline mr-1 !w-3.5 -mt-1"},"enemy-level-"+e.value+n));return(0,y.jsx)("tr",{onClick:function(){return r.selectEnemy(e.value)},className:s+" hover:bg-gray-300 dark:hover:bg-mydark-700 cursor-pointer "+("spy"===this.props.type?"hover:text-violet-500":"hover:text-red-600"),children:(0,y.jsxs)("td",{className:"px-4 lg:px-6 py-4",children:[(0,y.jsx)("h5",{className:"text-xl font-bold",children:1===e.flag?(0,m.K)("dip_"+e.value):(0,m.K)("ene_"+e.value)}),(0,y.jsx)("div",{children:a}),e.label]})},"enemy-"+e.value)}},{key:"render",value:function(){var e=this,t=this.props.MainStore.ArmyStore,r=t.enemiesOptions,s=t.spyOption,a=t.enemyOption,n=t.progressSpy,o=t.progressAttack,p=r.length<=0;("spy"===this.props.type&&n||"attack"===this.props.type&&o)&&(p=!0);var l=r.length>0?"spy"===this.props.type?(0,m.K)("select_spy"):(0,m.K)("select_enemy"):"spy"===this.props.type?(0,m.K)("no_spy_enemy"):(0,m.K)("no_attackable_enemy"),d="";return"spy"===this.props.type&&""!==s.label?(l=s.label,d=" border-violet-500 dark:border-violet-700"):"attack"===this.props.type&&""!==a.label&&(l=a.label,d=" border-red-500 dark:border-red-700"),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{type:"button",className:"btn btn-dark w-full mb-4"+d,onClick:this.toggleModal,disabled:p,children:l}),(0,y.jsx)(C.u.Root,{show:this.state.open,as:i.Fragment,children:(0,y.jsxs)(Z.V,{as:"div",className:"relative z-50",onClose:this.toggleModal,children:[(0,y.jsx)(T.Z,{}),(0,y.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,y.jsx)("div",{className:"flex items-center justify-center min-h-full p-4 text-center lg:p-0",children:(0,y.jsx)(C.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:(0,y.jsxs)(Z.V.Panel,{className:"modal-container lg:my-8 lg:max-w-xl lg:pt-6",children:[(0,y.jsx)(K.Z,{onClick:this.toggleModal}),(0,y.jsx)("div",{children:(0,y.jsxs)("div",{className:"mt-0",children:[(0,y.jsx)(Z.V.Title,{as:"h3",className:"modal-title",children:(0,m.K)("enemies").toLowerCase()}),(0,y.jsx)("div",{className:"mt-5",children:(0,y.jsx)("table",{className:"min-w-full",children:(0,y.jsx)("tbody",{className:"bg-gray-100 dark:bg-mydark-600 text-sm",children:r.map((function(t,r){return e.enemyRow(t,r)}))})})})]})})]})})})})]})})]})}}]),r}(i.Component),q=(0,p.f3)("MainStore")((0,p.Pi)(P)),I=r(8806),O=r(8033),R=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(e){var a;return(0,s.Z)(this,r),(a=t.call(this,e)).fps=250,a.step=100/(a.props.MainStore.ArmyStore.waitTime/a.fps),a.workerInstance=void 0,a.handleExplore=function(){a.props.MainStore.ArmyStore.setProgressScout(a.step),a.props.MainStore.ArmyStore.startExplore(),a.workerInstance.postMessage(a.fps)},a.handleSpy=function(){a.props.MainStore.ArmyStore.setProgressSpy(a.step),a.props.MainStore.ArmyStore.startSpy(),a.workerInstance.postMessage(a.fps)},a.handleAttack=function(){a.props.MainStore.ArmyStore.setProgressAttack(a.step),a.props.MainStore.ArmyStore.startAttack(),a.workerInstance.postMessage(a.fps)},a.resetExplore=function(){a.props.MainStore.ArmyStore.resetArmy("recon")},a.resetSpy=function(){a.props.MainStore.ArmyStore.resetArmy("spy")},a.resetAttack=function(){a.props.MainStore.ArmyStore.resetArmy("army")},a._progressInterval=function(){"scout"===a.props.type?a.props.MainStore.ArmyStore.progressScout>=100?(a.workerInstance.postMessage("stop"),setTimeout((function(){a.props.MainStore.ArmyStore.setProgressScout(0)}),a.fps)):a.props.MainStore.ArmyStore.setProgressScout(a.props.MainStore.ArmyStore.progressScout+a.step):"spy"===a.props.type?a.props.MainStore.ArmyStore.progressSpy>=100?(a.workerInstance.postMessage("stop"),setTimeout((function(){a.props.MainStore.ArmyStore.setProgressSpy(0)}),a.fps)):a.props.MainStore.ArmyStore.setProgressSpy(a.props.MainStore.ArmyStore.progressSpy+a.step):"attack"===a.props.type&&(a.props.MainStore.ArmyStore.progressAttack>=100?(a.workerInstance.postMessage("stop"),setTimeout((function(){a.props.MainStore.ArmyStore.setProgressAttack(0)}),a.fps)):a.props.MainStore.ArmyStore.setProgressAttack(a.props.MainStore.ArmyStore.progressAttack+a.step))},a.workerInstance=new Worker(I.E),a.workerInstance.onmessage=function(){a._progressInterval()},a}return(0,a.Z)(r,[{key:"componentWillUnmount",value:function(){this.props.check&&this.workerInstance.terminate()}},{key:"render",value:function(){var e=this,t=this.props.MainStore.ArmyStore,r=t.progressScout,s=t.progressSpy,a=t.progressAttack,n=t.exploreInProgress,o=t.spyInProgress,i=t.attackInProgress,p=-1,l="scout"===this.props.type?n:"spy"===this.props.type?o:i;return(0,y.jsx)("div",{className:"p-4 bg-gray-100 dark:bg-mydark-400 border border-gray-300 dark:border-mydark-200 rounded-lg shadow flex flex-col",children:(0,y.jsxs)("div",{className:"flex-1 text-center relative",children:[(0,y.jsx)("h5",{className:"text-xl lg:text-base font-bold whitespace-nowrap inline "+("scout"===this.props.type?"text-blue-600 dark:text-blue-500":"spy"===this.props.type?"text-violet-600 dark:text-violet-500":"text-red-600"),children:"scout"===this.props.type?(0,m.K)("explore"):"spy"===this.props.type?(0,m.K)("tec_espionage"):(0,m.K)("attack")}),Object.keys(this.props.costs).length>0?(0,y.jsxs)(y.Fragment,{children:[l?null:(0,y.jsx)("div",{className:"absolute top-0 right-0",children:(0,y.jsx)("button",{type:"button",className:"text-gray-400 dark:text-mydark-200 hover:text-red-600 dark:hover:text-red-600 focus:text-red-600 dark:focus:text-red-600",onClick:"scout"===this.props.type?this.resetExplore:"spy"===this.props.type?this.resetSpy:this.resetAttack,children:(0,y.jsx)(c(),{path:h.M_e,className:"icon"})})}),(0,y.jsx)("div",{className:"flex px-12 2xl:px-0",children:(0,y.jsx)("table",{className:"min-w-full my-4",children:(0,y.jsx)("tbody",{className:"bg-gray-300 dark:bg-mydark-600 text-sm",children:O.v.map((function(t){return"undefined"!==typeof e.props.costs[t.id]?(p++,(0,y.jsxs)("tr",{className:p%2===0?"bg-gray-200 dark:bg-mydark-300":"",children:[(0,y.jsx)("td",{className:"text-left px-4 py-1 whitespace-nowrap",children:(0,m.K)("res_"+t.id)}),(0,y.jsx)("td",{className:"text-right px-4 py-1",children:e.props.costs[t.id].toLocaleString()})]},e.props.type+"_cost_"+t.id)):null}))})})})]}):(0,y.jsx)("div",{className:"flex justify-center my-4 text-sm",children:(0,y.jsx)("div",{className:"w-auto",children:(0,y.jsx)(N.Z,{text:(0,m.K)(this.props.type+"_empty"),type:"info",small:!0})})}),"scout"===this.props.type?(0,y.jsx)("div",{className:"flex flex-wrap px-8 2xl:px-0",children:r>0?(0,y.jsx)("div",{className:"relative w-full pt-1 pb-px lg:pt-0",children:(0,y.jsx)("div",{className:"overflow-hidden h-4 mt-2 mb-3 flex rounded-full bg-gray-100 dark:bg-mydark-500 border border-gray-300 dark:border-mydark-200",children:(0,y.jsx)("div",{style:{width:r+"%"},className:"flex flex-col bg-blue-500"})})}):(0,y.jsxs)("button",{type:"button",className:"btn mt-[-1px] w-full btn-blue "+(this.props.check?"":"btn-off border-blue-500 dark:border-blue-700"),onClick:this.handleExplore,disabled:!this.props.check,children:[(0,y.jsx)(c(),{path:h.r8w,className:"icon mr-1 mt-[1px]"}),(0,m.K)("send_to_explore")]})}):"spy"===this.props.type?(0,y.jsxs)("div",{className:"flex flex-wrap px-8 2xl:px-0",children:[(0,y.jsx)(q,{type:"spy"}),s>0?(0,y.jsx)("div",{className:"relative w-full pt-1 lg:pt-0",children:(0,y.jsx)("div",{className:"overflow-hidden h-4 mt-2 mb-3 flex rounded-full bg-gray-100 dark:bg-mydark-500 border border-gray-300 dark:border-mydark-200",children:(0,y.jsx)("div",{style:{width:s+"%"},className:"flex flex-col bg-violet-500"})})}):(0,y.jsxs)("button",{type:"button",className:"btn mt-[-2px] w-full text-white bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:bg-violet-800 "+(this.props.check?"":"btn-off border-violet-500 dark:border-violet-700"),onClick:this.handleSpy,disabled:!this.props.check,children:[(0,y.jsx)(c(),{path:h.XT1,className:"icon mr-1 mt-[1px]"}),(0,m.K)("send_to_spy")]})]}):"attack"===this.props.type?(0,y.jsxs)("div",{className:"flex flex-wrap px-8 2xl:px-0",children:[(0,y.jsx)(q,{type:"attack"}),a>0?(0,y.jsx)("div",{className:"relative w-full pt-1 lg:pt-0",children:(0,y.jsx)("div",{className:"overflow-hidden h-4 mt-2 mb-3 flex rounded-full bg-gray-100 dark:bg-mydark-500 border border-gray-300 dark:border-mydark-200",children:(0,y.jsx)("div",{style:{width:a+"%"},className:"flex flex-col bg-red-600 dark:bg-red-700"})})}):(0,y.jsxs)("button",{type:"button",className:"btn mt-[-2px] w-full btn-red "+(this.props.check?"":"btn-off border-red-500 dark:border-red-700"),onClick:this.handleAttack,disabled:!this.props.check,children:[(0,y.jsx)(c(),{path:h.Hne,className:"icon mr-1 mt-[1px]"}),(0,m.K)("send_to_attack")]})]}):null]})})}}]),r}(i.Component),D=(0,p.f3)("MainStore")((0,p.Pi)(R)),X=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this,t=this.props.MainStore.run,r=this.props.MainStore.ArmyStore,s=r.defenseCount,a=r.scoutCount,n=r.ownedScout,o=r.exploreInProgress,i=r.costsScout,p=r.checkScout,l=r.spyCount,d=r.ownedSpy,c=r.spyInProgress,h=r.costsSpy,u=r.checkSpy,x=r.armyCount,f=r.ownedArmy,b=r.attackInProgress,g=r.costsAttack,k=r.checkAttack,v="scout"===this.props.type?i:"spy"===this.props.type?h:g,j="scout"===this.props.type?p:"spy"===this.props.type?u:k,S="defense"===this.props.type?a+l+x:"scout"===this.props.type?a:"spy"===this.props.type?l:x,w="defense"===this.props.type?n.concat(d).concat(f):"scout"===this.props.type?n:"spy"===this.props.type?d:f,A="scout"===this.props.type?o:"spy"===this.props.type?c:b;return(0,y.jsx)(y.Fragment,{children:S>0?(0,y.jsx)("div",{className:"tab-container sub-container",children:(0,y.jsx)("div",{className:"flex flex-wrap min-w-full mt-3",children:(0,y.jsxs)("div",{className:"grid gap-3 grid-cols-fill-240 min-w-full",children:["defense"!==this.props.type?(0,y.jsx)(D,{costs:v,check:j,type:this.props.type}):null,w.map((function(r){if("defense"===e.props.type){var a=t.army.findIndex((function(e){return e.id===r.id})),n=-1!==a&&"undefined"!==typeof t.army[a].value?t.army[a].value:0,i=-1!==a&&"undefined"!==typeof t.army[a].away?n-t.army[a].away:0;return A="recon"===r.type?o:"spy"===r.type?c:b,(0,y.jsx)(_,{id:r.id,qty:i,cap:n,forceMax:!1,disabled:A,category:r.category,type:e.props.type,uniType:r.type},"army_defense_"+r.id)}var p=t.army.findIndex((function(e){return e.id===r.id})),l=-1!==p&&"undefined"!==typeof t.army[p].value?t.army[p].value:0,d=-1!==p&&"undefined"!==typeof t.army[p].away?t.army[p].away:0,h=e.props.MainStore.ReqGenStore.reqTooltipData("armyAttack",r.reqAttack,!1,d);return(0,y.jsx)(_,{id:r.id,qty:d,cap:l,forceMax:0===s,reqAttackTooltip:h,disabled:A,category:r.category,type:e.props.type,uniType:r.type},"army_combat_"+r.id)}))]})})}):(0,y.jsx)("div",{className:"flex justify-center my-6 text-lg",children:(0,y.jsx)("div",{className:"w-auto",children:(0,y.jsx)(N.Z,{text:(0,m.K)(this.props.type+"_empty"),type:"info"})})})})}}]),r}(i.Component),Q=(0,p.f3)("MainStore")((0,p.Pi)(X)),E=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props.MainStore.ReqGenStore.genTooltipData(this.props.gen);return(0,y.jsx)("div",{className:"flex flex-col",children:(0,y.jsx)(g.a,{content:(0,y.jsx)(k.Z,{id:this.props.id,title:"kingdom"===this.props.type?(0,m.K)("dip_"+this.props.id):(0,m.K)("ene_"+this.props.id),description:"kingdom"===this.props.type?(0,m.K)("dip_"+this.props.id+"_description"):(0,m.K)("ene_"+this.props.id+"_description"),genTooltipData:e,prefix:"ene"}),className:"!max-w-[260px]",touch:["hold",500],placement:b.tq?"top":"bottom",popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","top","right","left"]}}]},children:(0,y.jsx)("button",{type:"button",className:"btn btn-dark btn-off btn-cap",children:"kingdom"===this.props.type?this.props.owned?(0,m.K)("dip_owned"):(0,m.K)("dip_"+this.props.id):(0,m.K)("ene_"+this.props.id)})})})}}]),r}(i.Component),F=(0,p.f3)("MainStore")((0,p.Pi)(E)),H=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props.MainStore.ArmyStore.ownedEnemies,t=this.props.MainStore.DiplomacyStore.ownedDiplomacy;return(0,y.jsx)(y.Fragment,{children:e.length>0||t.length>0?(0,y.jsx)("div",{className:"tab-container sub-container",children:(0,y.jsx)("div",{className:"flex flex-wrap min-w-full mt-3 p-3 shadow rounded-lg ring-1 ring-gray-300 dark:ring-mydark-200 bg-gray-100 dark:bg-mydark-600",children:(0,y.jsxs)("div",{className:"grid gap-3 grid-cols-fill-180 min-w-full px-12 xl:px-0",children:[t.map((function(e){return(0,y.jsx)(F,{id:e.id,gen:e.gen,type:"kingdom"},"kingdom_owned_"+e.id)})),e.map((function(e){return(0,y.jsx)(F,{id:e.id,gen:e.gen},"enemy_owned_"+e.id)}))]})})}):(0,y.jsx)("div",{className:"flex justify-center my-6 text-lg",children:(0,y.jsx)("div",{className:"w-auto",children:(0,y.jsx)(N.Z,{text:(0,m.K)("enemies_empty"),type:"info"})})})})}}]),r}(i.Component),U=(0,p.f3)("MainStore")((0,p.Pi)(H)),G=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleSelect=function(t){e.props.MainStore.ArmyStore.selectTab(t)},e}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props.MainStore.ArmyStore,t=e.selectedTab,r=e.visibleEspionage,s=e.cap,a=e.ownedCount,n=e.scoutCount,o=e.scoutAwayCount,i=e.spyCount,p=e.spyAwayCount,d=e.armyCount,x=e.armyAwayCount,f=e.defenseCount,b=(0,u.AK)("armies",r?"espionage":""),g="inline-flex justify-center rounded-full border shadow-sm px-3 py-2 text-sm whitespace-nowrap border-gray-400 dark:border-gray-500";g+=" xl:block xl:rounded-none xl:border-0 xl:shadow-none lg:px-2 xl:border-transparent xl:dark:border-transparent",g+=" xl:border-b-2 xl:m-[-1px] 4xl:px-6 3xl:text-base";var k="!border-ancestor text-ancestor",v="xl:border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-mydark-50 hover:border-gray-400 dark:hover:border-gray-500";return(0,y.jsxs)(l.O.Group,{selectedIndex:t,onChange:this.handleSelect,children:[(0,y.jsx)("div",{className:"mx-auto border-b border-gray-300 dark:border-mydark-200 flex justify-center mt-1 xl:mt-0",children:(0,y.jsxs)(l.O.List,{className:"grid grid-cols-2 gap-3 my-2 mb-3 lg:gap-1 lg:mt-0 lg:mb-1 xl:flex xl:mb-0 2xl:gap-3",children:[(0,y.jsxs)(l.O,{className:function(e){var t=e.selected;return(0,u.AK)(g,t?k:v)},children:[(0,m.K)("army"),(0,y.jsx)(c(),{path:h.UeY,className:"icon inline 3xl:-mt-1 mx-1"}),a," / ",s]}),(0,y.jsxs)(l.O,{className:function(e){var t=e.selected;return(0,u.AK)(g,t?k:v)},children:[(0,m.K)("explore"),(0,y.jsx)(c(),{path:h.r8w,className:"icon inline 3xl:-mt-1 mx-1"}),o," / ",n]}),r?(0,y.jsxs)(l.O,{className:function(e){var t=e.selected;return(0,u.AK)(g,t?k:v)},children:[(0,m.K)("spy"),(0,y.jsx)(c(),{path:h.XT1,className:"icon inline 3xl:-mt-1 mx-1"}),p," / ",i]}):null,(0,y.jsxs)(l.O,{className:function(e){var t=e.selected;return(0,u.AK)(g,t?k:v)},children:[(0,m.K)("attack"),(0,y.jsx)(c(),{path:h.Hne,className:"icon inline 3xl:-mt-1 mx-1"}),x," / ",d]}),(0,y.jsxs)(l.O,{className:function(e){var t=e.selected;return(0,u.AK)(g,t?k:v)},children:[(0,m.K)("garrison"),(0,y.jsx)(c(),{path:h.pCE,className:"icon inline 3xl:-mt-1 mx-1"}),f," / ",a]}),(0,y.jsxs)(l.O,{className:function(e){var t=e.selected;return(0,u.AK)(g,t?k:v)},children:[(0,y.jsx)(c(),{path:h.YKm,className:"icon inline lg:-mt-1 mr-1"}),(0,m.K)("enemies")]})]})}),(0,y.jsxs)(l.O.Panels,{children:[(0,y.jsx)(l.O.Panel,{children:(0,y.jsx)(w,{})}),(0,y.jsx)(l.O.Panel,{children:(0,y.jsx)(Q,{type:"scout"})}),r?(0,y.jsx)(l.O.Panel,{children:(0,y.jsx)(Q,{type:"spy"})}):null,(0,y.jsx)(l.O.Panel,{children:(0,y.jsx)(Q,{type:"attack"})}),(0,y.jsx)(l.O.Panel,{children:(0,y.jsx)(Q,{type:"defense"})}),(0,y.jsx)(l.O.Panel,{children:(0,y.jsx)(U,{})})]})]},b)}}]),r}(i.Component),z=(0,p.f3)("MainStore")((0,p.Pi)(G))},2171:function(e,t,r){r.d(t,{Z:function(){return h}});var s=r(5671),a=r(3144),n=r(136),o=r(7277),i=r(7313),p=r(8561),l=r.n(p),d=r(8966),c=r(6417),h=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(e){var a;return(0,s.Z)(this,r),(a=t.call(this,e)).decrease=function(e){e.currentTarget.blur(),a._decrease(a.state.step)},a.decreaseX=function(e){e.currentTarget.blur(),a._decrease(a.state.stepX)},a.increase=function(e){e.currentTarget.blur(),a._increase(a.state.step)},a.increaseX=function(e){e.currentTarget.blur(),a._increase(a.state.stepX)},a.state={value:a.props.value,min:0,max:a.props.max,forceMax:a.props.forceMax,step:1,stepX:9,minReached:a.props.value<=0,maxReached:a.props.value>=a.props.max||a.props.forceMax,disabled:"undefined"!==typeof a.props.disabled&&a.props.disabled},a}return(0,a.Z)(r,[{key:"componentDidUpdate",value:function(e){this.props.max===e.max&&this.props.forceMax===e.forceMax&&this.props.value===e.value&&this.props.disabled===e.disabled||this.setState({value:this.props.value,max:this.props.max,forceMax:this.props.forceMax,minReached:this.props.value<=0,maxReached:this.props.value>=this.props.max||this.props.forceMax,disabled:"undefined"!==typeof this.props.disabled&&this.props.disabled})}},{key:"_decrease",value:function(e){var t=!1,r=this.state.value-1;r<=this.state.min&&(r=this.state.min,t=!0),this.setState({value:r,minReached:t,maxReached:r>=this.state.max||this.state.forceMax}),this.props.onChange(r,"decrease",e)}},{key:"_increase",value:function(e){var t=!1,r=this.state.value+1;this.state.forceMax?(r=this.state.value,t=!0):r>=this.state.max&&(r=this.state.max,t=!0),this.setState({value:r,maxReached:t,minReached:r<=this.state.min}),this.props.onChange(r,"increase",e)}},{key:"render",value:function(){var e="btn shadow-none px-2.5 w-min",t=e;e+=" rounded-none lg:rounded-xl lg:rounded-r-none",t+=" lg:hidden rounded-xl rounded-r-none",this.state.minReached||this.state.disabled?(e+=" btn-dark",t+=" btn-dark !border-r-transparent"):(e+=" btn-red",t+=" btn-red border-r-red-600 dark:border-r-red-700");var r="btn shadow-none px-2.5 w-min",s=r;return r+=" rounded-none lg:rounded-xl lg:rounded-l-none",s+=" lg:hidden rounded-xl rounded-l-none",this.state.maxReached||this.state.disabled?(r+=" btn-dark",s+=" btn-dark !border-l-transparent"):(r+=" btn-green",s+=" btn-green border-l-green-700"),(0,c.jsxs)("div",{className:"relative inline-flex min-w-full shadow-sm rounded-full "+(this.props.small?"px-4 lg:px-12 xl:px-0":"px-4 lg:px-12 2xl:px-0"),children:[(0,c.jsx)("button",{className:t,type:"button",onClick:this.decreaseX,disabled:this.state.minReached||this.state.disabled,children:(0,c.jsx)(l(),{path:d.UHA,className:"icon"})}),(0,c.jsxs)("button",{className:e,type:"button",onClick:this.decrease,disabled:this.state.minReached||this.state.disabled,children:[(0,c.jsx)(l(),{path:d.v5B,className:"icon lg:hidden"}),(0,c.jsx)(l(),{path:d.UHA,className:"icon hidden lg:block"})]}),(0,c.jsx)("input",{type:"text",className:"w-full text-center lg:text-sm text-gray-700 bg-gray-100 dark:text-mydark-50 dark:bg-mydark-400 border-y border-gray-400 dark:border-mydark-200",value:this.state.value+" / "+this.state.max,disabled:!0}),(0,c.jsxs)("button",{className:r,type:"button",onClick:this.increase,disabled:this.state.maxReached||this.state.disabled,children:[(0,c.jsx)(l(),{path:d.MUM,className:"icon lg:hidden"}),(0,c.jsx)(l(),{path:d.qX5,className:"icon hidden lg:block"})]}),(0,c.jsx)("button",{className:s,type:"button",onClick:this.increaseX,disabled:this.state.maxReached||this.state.disabled,children:(0,c.jsx)(l(),{path:d.qX5,className:"icon"})})]})}}]),r}(i.Component)}}]);