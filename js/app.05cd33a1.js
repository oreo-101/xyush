(function(){"use strict";var e={7284:function(e,t,n){var a=n(9242),o=n(3396);function s(e,t,n,a,s,i){const r=(0,o.up)("NavBar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o.Wm)(l)],64)}n(1703);const i=Symbol("USER_MANAGER_KEY"),r=e=>{const t=(0,o.f3)(e);if(!t)throw new Error("cannot find provided key: "+e);return t};var l=n(2482),u=n(6265),c=n.n(u);const d="???",p=c().create({baseURL:d});var v=p;function m(e){return"/api"+("/"===e.charAt(0)?"":"/")+e}var g={POSTINGS_API:m("/post/all"),POSTS_CREATE:m("/post/create"),SIGN_IN:m("/auth/signin"),SIGN_UP:m("/auth/signup"),AUTH_TEST:m("/auth/test")};const f=e=>v.post(g.SIGN_IN,e),_=e=>v.post(g.SIGN_UP,e);var h=n(4870);class w{constructor(){(0,l.Z)(this,"username",(0,h.iH)("")),(0,l.Z)(this,"email",(0,h.iH)("")),(0,l.Z)(this,"id",(0,h.iH)(-1)),(0,l.Z)(this,"roles",(0,h.iH)([])),(0,l.Z)(this,"error",(0,h.iH)("")),(0,l.Z)(this,"token",(0,h.iH)("")),(0,l.Z)(this,"isSignedIn",(0,o.Fl)((()=>""!==this.username.value&&""===this.error.value)))}login(e){return f(e).then((e=>{this.username.value=e.data.username,this.email.value=e.data.email,this.id.value=e.data.id,this.roles.value=e.data.roles,this.token.value=e.data.token})).catch((e=>{throw 401===e.response?.status&&(console.log("Not authorized"),this.error.value="Not authorized"),e}))}}const b=(0,o.Uk)("Home"),k=(0,o.Uk)(" | "),y=(0,o.Uk)("科大圈"),C={key:0},T=(0,o.Uk)(" | "),I=(0,o.Uk)("Login Page"),S={key:1},U=(0,o.Uk)(" | "),D=(0,o.Uk)("Singup Page"),Z={key:2},P=(0,o.Uk)(" | "),H=(0,o.Uk)("My Details");function x(e,t,n,a,s,i){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("span",null,[(0,o.Wm)(r,{to:{name:"Home"}},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("span",null,[k,(0,o.Wm)(r,{to:{name:"CampusCircle"}},{default:(0,o.w5)((()=>[y])),_:1})]),e.isSignedIn?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",C,[T,(0,o.Wm)(r,{to:{name:"Login"}},{default:(0,o.w5)((()=>[I])),_:1})])),e.isSignedIn?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",S,[U,e.isSignedIn?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(r,{key:0,to:{name:"Signup"}},{default:(0,o.w5)((()=>[D])),_:1}))])),e.isSignedIn?((0,o.wg)(),(0,o.iD)("span",Z,[P,e.isSignedIn?((0,o.wg)(),(0,o.j4)(r,{key:0,to:{name:"MyInfo"}},{default:(0,o.w5)((()=>[H])),_:1})):(0,o.kq)("",!0)])):(0,o.kq)("",!0)])}var W=(0,o.aZ)({name:"NavBar",setup(){const e=r(i);return{isSignedIn:e.isSignedIn}}}),A=n(89);const O=(0,A.Z)(W,[["render",x]]);var V=O,z=(0,o.aZ)({name:"App",components:{NavBar:V},setup(){(0,o.JJ)(i,new w)}});const M=(0,A.Z)(z,[["render",s]]);var N=M,j=n(678);const E=e=>((0,o.dD)("data-v-73731481"),e=e(),(0,o.Cn)(),e),F={id:"body"},R=E((()=>(0,o._)("div",{class:"banner"},[(0,o._)("img",{src:"https://st.depositphotos.com/2010047/2144/i/600/depositphotos_21443135-stock-photo-3d-small-with-a-question.jpg",alt:""})],-1))),L={class:"navigation-box"},q={id:"课表",class:"navigation-button"},G=E((()=>(0,o._)("div",null,"课表",-1))),Y={id:"成绩",class:"navigation-button"},J=E((()=>(0,o._)("div",null,"成绩",-1))),K={id:"考试",class:"navigation-button"},$=E((()=>(0,o._)("div",null,"考试",-1))),B={id:"空教室",class:"navigation-button"},Q=E((()=>(0,o._)("div",null,"空教室",-1))),X={id:"外卖红包",class:"navigation-button"},ee=E((()=>(0,o._)("div",null,"外卖红包",-1))),te={id:"电话本",class:"navigation-button"},ne=E((()=>(0,o._)("div",null,"电话本",-1))),ae={id:"地图",class:"navigation-button"},oe=E((()=>(0,o._)("div",null,"地图",-1))),se={id:"黑商",class:"navigation-button"},ie=E((()=>(0,o._)("div",null,"黑商",-1))),re=E((()=>(0,o._)("h3",null,"???",-1)));function le(e,t,n,a,s,i){const r=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",F,[R,(0,o._)("div",L,[(0,o._)("div",q,[(0,o.Wm)(r,{class:"icon",icon:"fa-regular fa-calendar-days"}),G]),(0,o._)("div",Y,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-chart-column"}),J]),(0,o._)("div",K,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-pencil"}),$]),(0,o._)("div",B,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-magnifying-glass-location"}),Q]),(0,o._)("div",X,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-coins"}),ee]),(0,o._)("div",te,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-address-book"}),ne]),(0,o._)("div",ae,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-location-dot"}),oe]),(0,o._)("div",se,[(0,o.Wm)(r,{class:"icon",icon:"fa-solid fa-store"}),ie])]),re])}var ue=(0,o.aZ)({name:"LandingPage",setup(){}});const ce=(0,A.Z)(ue,[["render",le],["__scopeId","data-v-73731481"]]);var de=ce,pe=n(7139);const ve=e=>((0,o.dD)("data-v-06c8ea7a"),e=e(),(0,o.Cn)(),e),me={class:"container"},ge=ve((()=>(0,o._)("h1",{class:"heading"},"Signup Form",-1))),fe={class:"singup-form"},_e={class:"input-group"},he=ve((()=>(0,o._)("div",{class:"label"},"User Name",-1))),we={class:"input-group"},be=ve((()=>(0,o._)("div",{class:"label"},"Email",-1))),ke={class:"input-group"},ye=ve((()=>(0,o._)("div",{class:"label"},"Password",-1)));function Ce(e,t,n,s,i,r){return(0,o.wg)(),(0,o.iD)("div",me,[ge,(0,o.Uk)(" "+(0,pe.zw)(e.notification)+" ",1),(0,o._)("div",fe,[(0,o._)("div",_e,[he,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),type:"text",placeholder:"username"},null,512),[[a.nr,e.username]])]),(0,o._)("div",we,[be,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.email=t),type:"text",placeholder:"email"},null,512),[[a.nr,e.email]])]),(0,o._)("div",ke,[ye,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t),type:"text",placeholder:"password"},null,512),[[a.nr,e.password]])]),(0,o._)("button",{type:"submit",onClick:t[3]||(t[3]=(...t)=>e.register&&e.register(...t))},"Signup")])])}var Te=(0,o.aZ)({name:"SingupForm",setup(){const e=(0,h.iH)(""),t=(0,h.iH)(""),n=(0,h.iH)(""),a=(0,h.iH)(""),o=()=>{const o=new Set;o.add("ROLE_USER");const s={username:e.value,email:t.value,password:n.value,roles:o};_(s).then((e=>{a.value=e.data})).catch((e=>{a.value=e}))};return{username:e,email:t,password:n,notification:a,register:o}}});const Ie=(0,A.Z)(Te,[["render",Ce],["__scopeId","data-v-06c8ea7a"]]);var Se=Ie;const Ue=e=>((0,o.dD)("data-v-606afdda"),e=e(),(0,o.Cn)(),e),De={class:"container"},Ze=Ue((()=>(0,o._)("h1",{class:"heading"},"Login Form",-1))),Pe={class:"singup-form"},He={class:"input-group"},xe=Ue((()=>(0,o._)("div",{class:"label"},"User Name",-1))),We={class:"input-group"},Ae=Ue((()=>(0,o._)("div",{class:"label"},"Password",-1)));function Oe(e,t,n,s,i,r){return(0,o.wg)(),(0,o.iD)("div",De,[Ze,(0,o.Uk)(" "+(0,pe.zw)(e.notification)+" ",1),(0,o._)("div",Pe,[(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)((()=>{}),["prevent"]))},[(0,o._)("div",He,[xe,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.usernameInput=t),type:"text",placeholder:"username"},null,512),[[a.nr,e.usernameInput]])]),(0,o._)("div",We,[Ae,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.passwordInput=t),type:"text",placeholder:"password"},null,512),[[a.nr,e.passwordInput]])]),(0,o._)("button",{type:"submit",onClick:t[2]||(t[2]=(...t)=>e.loginUser&&e.loginUser(...t))},"Login")],32)])])}var Ve=(0,o.aZ)({name:"LoginForm",setup(){const e=(0,j.yj)(),t=e.params?.next,n=(0,h.iH)(""),a=(0,h.iH)(""),o=(0,h.iH)(""),s=r(i),l=()=>{s.login({username:n.value,password:a.value}).then((()=>{t&&!(0,pe.kJ)(t)?jt.push({name:t}):jt.push({name:"MyInfo"})}))};return{usernameInput:n,passwordInput:a,notification:o,loginUser:l}}});const ze=(0,A.Z)(Ve,[["render",Oe],["__scopeId","data-v-606afdda"]]);var Me=ze;const Ne=(0,o.Uk)("Roles: "),je={id:"test"};function Ee(e,t,n,a,s,i){const r=(0,o.up)("TagTsVue");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h1",null,"Hello "+(0,pe.zw)(e.userManager.username.value),1),(0,o._)("div",null,[(0,o._)("div",null,"UserName: "+(0,pe.zw)(e.userManager.username.value),1),(0,o._)("div",null,"Email: "+(0,pe.zw)(e.userManager.email.value),1),(0,o._)("div",null,[Ne,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.userManager.roles.value,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e},[(0,o.Wm)(r,{text:e},null,8,["text"])])))),128))])]),(0,o._)("div",je,[(0,o._)("button",{onClick:t[0]||(t[0]=t=>e.apiTestAll())},"api test all"),(0,o._)("button",{onClick:t[1]||(t[1]=t=>e.apiTestUser())},"api test user"),(0,o._)("button",{onClick:t[2]||(t[2]=t=>e.apiTestMod())},"api test mod"),(0,o._)("button",{onClick:t[3]||(t[3]=t=>e.apiTestAdmin())},"api test admin")])])}function Fe(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("span",{style:(0,pe.j5)(e.styles),class:"tag"},[(0,o.Uk)((0,pe.zw)(e.text),1),(0,o.WI)(e.$slots,"default",{},void 0,!0)],4)}function Re(e){if(!e)return[0,0,0];let t=0;for(var n=0;n<e.length;n++)t<<=2,t+=e.charCodeAt(n),t%=16581375;let a=t%255,o=t/255%255,s=t/255/255%255;return[a,o,s].map((e=>e>150?e:255-e))}function Le([e,t,n]){return`rgb(${e}, ${t}, ${n})`}var qe=(0,o.aZ)({name:"TagComp",props:{text:{type:String}},setup(e){return{styles:{backgroundColor:Le(Re(e.text))}}}});const Ge=(0,A.Z)(qe,[["render",Fe],["__scopeId","data-v-3a79badd"]]);var Ye=Ge,Je=(0,o.aZ)({name:"MyInfoPage",props:{msg:String},components:{TagTsVue:Ye},setup(){const e=r(i);e.username.value||jt.push({name:"Login",params:{next:"MyInfo"}});const t=()=>{v.get("/api/test/all").then((e=>console.log(e.data))).catch((e=>console.log(e)))},n=()=>{v.get("/api/test/user",{headers:{Authorization:e.token.value}}).then((e=>console.log(e.data))).catch((e=>console.log(e)))},a=()=>{v.get("/api/test/mod").then((e=>console.log(e.data))).catch((e=>console.log(e)))},o=()=>{v.get("/api/test/admin").then((e=>console.log(e.data))).catch((e=>console.log(e)))};return{userManager:e,apiTestAll:t,apiTestUser:n,apiTestMod:a,apiTestAdmin:o}}});const Ke=(0,A.Z)(Je,[["render",Ee]]);var $e=Ke;const Be=e=>((0,o.dD)("data-v-a0be9b1c"),e=e(),(0,o.Cn)(),e),Qe={id:"body"},Xe=Be((()=>(0,o._)("div",{id:"action-bar"},"action bar",-1))),et={id:"category-select-bar"},tt={id:"filter-bar"},nt={id:"content-box"};function at(e,t,n,a,s,i){const r=(0,o.up)("TabSelectTs"),l=(0,o.up)("PostingsViewTs");return(0,o.wg)(),(0,o.iD)("div",Qe,[Xe,(0,o._)("div",et,[(0,o.Wm)(r,{items:e.postCategories,selected:e.selectedCategory,onTabClick:e.changeCategory},null,8,["items","selected","onTabClick"])]),(0,o._)("div",tt,[(0,o.Wm)(r,{items:e.filterCategories,selected:e.selectedFilterCat,onTabClick:e.changeFilter},null,8,["items","selected","onTabClick"])]),(0,o._)("div",nt,[(0,o.Wm)(l)])])}const ot={id:"container"},st=["onClick"];function it(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("div",ot,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(t=>((0,o.wg)(),(0,o.iD)("span",{key:t,class:(0,pe.C_)({tab:!0,selected:e.selected===t}),onClick:n=>e.emit("tabClick",t)},(0,pe.zw)(t),11,st)))),128))])}var rt=(0,o.aZ)({name:"TabSelect",props:{items:{type:Array,required:!0},selected:{type:String,required:!0}},setup(e,t){return{emit:t.emit}}});const lt=(0,A.Z)(rt,[["render",it],["__scopeId","data-v-5dbd9c34"]]);var ut=lt;function ct(e,t,n,a,s,i){const r=(0,o.up)("CreatePostForm"),l=(0,o.up)("PostItem");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.posts.data,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e.id,data:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,pe.zw)(e),1)])),_:2},1032,["data"])))),128))])])}const dt=e=>{const t=(0,h.iH)({data:[]});return v.get(g.POSTINGS_API,{headers:{Authorization:e.token.value}}).then((e=>e.data)).then((e=>{t.value.data=e})).catch((e=>console.error(e))),t},pt=e=>t=>v.post(g.POSTS_CREATE,t,{headers:{Authorization:e.token.value}}),vt={class:"container"},mt={class:"form"},gt={class:"input-group"},ft=(0,o._)("div",{class:"label"},"Create a new post",-1);function _t(e,t,n,s,i,r){return(0,o.wg)(),(0,o.iD)("div",vt,[(0,o._)("div",mt,[(0,o._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((()=>{}),["prevent"]))},[(0,o._)("div",gt,[ft,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.content=t),type:"text",placeholder:"Content..."},null,512),[[a.nr,e.content]])]),(0,o._)("button",{type:"submit",onClick:t[1]||(t[1]=(...t)=>e.createPost&&e.createPost(...t))},"Create Post")],32)])])}var ht=(0,o.aZ)({name:"CreatePostForm.ts.vue",setup(){const e=(0,h.iH)(""),t=r(i),n=pt(t),a=()=>{n(e.value).then((e=>{e.data})).catch((e=>{console.log(e)}))};return{content:e,createPost:a}}});const wt=(0,A.Z)(ht,[["render",_t]]);var bt=wt;const kt={class:"postContainer"};function yt(e,t,n,a,s,i){const r=(0,o.up)("UserTagTsVue");return(0,o.wg)(),(0,o.iD)("div",kt,[(0,o._)("div",null,[(0,o.Uk)((0,pe.zw)(e.postData.id)+" ",1),(0,o.Wm)(r,{data:e.postData.user},null,8,["data"]),(0,o.Uk)(" "+(0,pe.zw)(e.postData.createdAt),1)]),(0,o._)("div",null,(0,pe.zw)(e.postData.content),1)])}const Ct={class:"container"};function Tt(e,t,n,a,s,i){const r=(0,o.up)("TagTsVue");return(0,o.wg)(),(0,o.iD)("div",Ct,[(0,o.Uk)((0,pe.zw)(e.userViewData.username)+" ",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.userViewData.roles,(t=>((0,o.wg)(),(0,o.j4)(r,{key:t.id,text:e.trimRole(t.name)},null,8,["text"])))),128))])}function It(e){return e.substring(5)}var St=(0,o.aZ)({name:"TagComp",props:{data:{type:Object}},components:{TagTsVue:Ye},setup(e){return{userViewData:e.data,trimRole:It}}});const Ut=(0,A.Z)(St,[["render",Tt],["__scopeId","data-v-05b4664a"]]);var Dt=Ut,Zt=(0,o.aZ)({name:"PostItem",props:{data:{type:Object}},components:{UserTagTsVue:Dt},setup(e){return{postData:e.data}}});const Pt=(0,A.Z)(Zt,[["render",yt],["__scopeId","data-v-4a493d12"]]);var Ht=Pt,xt=(0,o.aZ)({name:"PostingsView",components:{CreatePostForm:bt,PostItem:Ht},setup(){const e=r(i),t=dt(e);return{isSignedIn:e.isSignedIn,posts:t}}});const Wt=(0,A.Z)(xt,[["render",ct]]);var At=Wt,Ot=(0,o.aZ)({name:"CampusCirclePage",components:{TabSelectTs:ut,PostingsViewTs:At},setup(){const e=(0,h.iH)("广场"),t=t=>{e.value=t},n=(0,h.iH)("最近热议"),a=e=>{n.value=e};return{selectedCategory:e,changeCategory:t,postCategories:["广场","热门","精选","扩列","二手","游戏","招新"],selectedFilterCat:n,changeFilter:a,filterCategories:["最近热议","最新发布"]}}});const Vt=(0,A.Z)(Ot,[["render",at],["__scopeId","data-v-a0be9b1c"]]);var zt=Vt;const Mt=[{path:"/",name:"Home",component:de},{path:"/campus-circle",name:"CampusCircle",component:zt},{path:"/signup",name:"Signup",component:Se},{path:"/login",name:"Login",component:Me},{path:"/my",name:"MyInfo",component:$e}],Nt=(0,j.p7)({history:(0,j.PO)(),routes:Mt});var jt=Nt,Et=n(8125),Ft=n(7749),Rt=n(2274),Lt=n(8321);Et.vI.add(Rt.WRo,Lt.Ma4,Lt.TzT,Lt.bln,Lt.owJ,Lt.hVn,Lt.opg,Lt.vJI),(0,a.ri)(N).component("font-awesome-icon",Ft.GN).use(jt).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],s=e[c][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,i=a[0],r=a[1],l=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var c=l(n)}for(t&&t(a);u<i.length;u++)s=i[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7284)}));a=n.O(a)})();
//# sourceMappingURL=app.05cd33a1.js.map