"use strict";(self["webpackChunktodolist"]=self["webpackChunktodolist"]||[]).push([[177],{7556:function(e,t,l){l.r(t),l.d(t,{default:function(){return K}});var a=l(3396);const n=e=>((0,a.dD)("data-v-75a109b3"),e=e(),(0,a.Cn)(),e),o={class:"body"},i=n((()=>(0,a._)("h3",{class:"title"},"To Do List",-1)));function d(e,t,l,n,d,r){const s=(0,a.up)("nav-header"),u=(0,a.up)("nav-main"),c=(0,a.up)("nav-footer");return(0,a.wg)(),(0,a.iD)("div",o,[i,(0,a.Wm)(s,{onAdd:e.add},null,8,["onAdd"]),(0,a.Wm)(u,{list:e.list,onDel:e.del,onUpdate:e.update},null,8,["list","onDel","onUpdate"]),(0,a.Wm)(c,{list:e.list,onClear:e.clear},null,8,["list","onClear"])])}l(7658);var r=l(9242);function s(e,t,l,n,o,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.wy)((0,a._)("input",{placeholder:"请输入任务名称","onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),onKeydown:t[1]||(t[1]=(0,r.D2)(((...t)=>e.enter&&e.enter(...t)),["enter"]))},null,544),[[r.nr,e.value]])])}var u=l(4870),c=(0,a.aZ)({name:"navHeader",setup(e,t){let l=(0,u.iH)(""),a=()=>{t.emit("add",l.value),l.value=""};return{value:l,enter:a}}}),p=l(89);const v=(0,p.Z)(c,[["render",s],["__scopeId","data-v-312c066d"]]);var m=v,k=l(7139);const _={key:0},w={class:"item"},D=["onClick","onUpdate:modelValue"],y=["onClick"],C={key:1,class:"none"};function f(e,t,l,n,o,i){return e.list.length>0?((0,a.wg)(),(0,a.iD)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,((t,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l},[(0,a._)("div",w,[(0,a.wy)((0,a._)("input",{type:"checkbox",onClick:a=>e.update(t,l),"onUpdate:modelValue":e=>t.complete=e},null,8,D),[[r.e8,t.complete]]),(0,a.Uk)(" "+(0,k.zw)(t.title)+" ",1),(0,a._)("button",{class:"del",onClick:a=>e.del(t,l)},"删除",8,y)])])))),128))])):((0,a.wg)(),(0,a.iD)("div",C," 暂无任务0.0 "))}var g=(0,a.aZ)({name:"navMain",props:{list:{type:Array,required:!0}},emits:["del","update"],setup(e,t){let l=(e,l)=>{t.emit("del",l)},a=(l,a)=>{t.emit("update",e.list)};return{del:l,update:a}}});const h=(0,p.Z)(g,[["render",f],["__scopeId","data-v-948d38a2"]]);var b=h;const U={class:"container"},Z={class:"box"},H={class:"num"},A={class:"num"},F={key:0};function I(e,t,l,n,o,i){return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("div",Z,[(0,a.Uk)(" 已完成"),(0,a._)("div",H,(0,k.zw)(e.isComplete),1),(0,a.Uk)(" / 全部 "),(0,a._)("div",A,(0,k.zw)(e.list.length),1)]),e.isComplete>0?((0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("button",{onClick:t[0]||(t[0]=(...t)=>e.clear&&e.clear(...t)),class:"btn"},"清除已完成")])):(0,a.kq)("",!0)])}var T=(0,a.aZ)({name:"navFooter",props:{list:{type:Array,required:!0}},setup(e,t){let l=(0,a.Fl)((()=>{let t=e.list.filter((e=>e.complete));return t.length})),n=()=>{let l=e.list.filter((e=>!1===e.complete));t.emit("clear",l)};return{isComplete:l,clear:n}}});const q=(0,p.Z)(T,[["render",I],["__scopeId","data-v-6046863c"]]);var z=q,N=l(65),V=l(2483),W=(0,a.aZ)({name:"home",props:{},components:{NavHeader:m,NavMain:b,NavFooter:z},setup(e,t){let l=(0,N.oR)(),n=(0,a.Fl)((()=>l.state.list)),o=(0,V.tv)(),i=()=>{o.push("/about")},d=(0,u.iH)(""),r=e=>{d.value=e;let t=!0;n.value.map((e=>{e.title==d.value&&(t=!1,alert("任务已存在"))})),t&&l.commit("addTodo",{title:e,complete:!1})},s=e=>{l.commit("delTodo",e)},c=e=>{l.commit("clearTodo",e)},p=e=>{l.commit("updateDone",e)};return{list:n,goto:i,add:r,del:s,clear:c,update:p}}});const x=(0,p.Z)(W,[["render",d],["__scopeId","data-v-75a109b3"]]);var K=x}}]);
//# sourceMappingURL=home.37a3d145.js.map