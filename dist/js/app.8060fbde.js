(function(){"use strict";var t={2256:function(t,e,o){var s=o(9963),r=o(6252);const a={class:"app"};function n(t,e,o,s,n,l){const i=(0,r.up)("navbar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r._)("div",a,[(0,r.Wm)(c)])],64)}o(7658);var l=o.p+"img/logo.965b105d.png";const i=t=>((0,r.dD)("data-v-682aba9a"),t=t(),(0,r.Cn)(),t),c=i((()=>(0,r._)("div",{class:"navbar-head"},null,-1))),u={class:"navbar"},d=i((()=>(0,r._)("img",{src:l,alt:"",class:"logo"},null,-1))),p=[d],h={class:"navbar__btn"},m=i((()=>(0,r._)("div",{class:"activeBtn"},null,-1))),v={class:"navbar__btn bottombar__btn"},f=i((()=>(0,r._)("div",{class:"activeBtn"},null,-1)));function y(t,e,o,s,a,n){const l=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[c,(0,r._)("div",u,[(0,r._)("div",{style:{cursor:"pointer",color:"#000"},onClick:e[0]||(e[0]=e=>t.$router.push("/")),class:"icon"},p),(0,r._)("div",h,[(0,r.Wm)(l,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,r.w5)((()=>[(0,r.Uk)("Posts")])),_:1}),(0,r.Wm)(l,{onClick:e[2]||(e[2]=e=>t.$router.push("/about"))},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),m])]),(0,r._)("div",v,[(0,r.Wm)(l,{onClick:e[3]||(e[3]=e=>t.$router.push("/posts"))},{default:(0,r.w5)((()=>[(0,r.Uk)("Posts")])),_:1}),(0,r.Wm)(l,{onClick:e[4]||(e[4]=e=>t.$router.push("/about"))},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),f])],64)}var g={mounted(){const t=document.querySelectorAll(".navbar__btn > button");document.querySelector(".icon");function e(){t.forEach((t=>{t.addEventListener("click",(()=>{o(),t.classList.add("active")}))}))}function o(){t.forEach((t=>{t.classList.remove("active")}))}e()}},b=o(3744);const w=(0,b.Z)(g,[["render",y],["__scopeId","data-v-682aba9a"]]);var P=w,_={components:{Navbar:P}};const k=(0,b.Z)(_,[["render",n]]);var C=k;const S={class:"btn"};function D(t,e,o,s,a,n){return(0,r.wg)(),(0,r.iD)("button",S,[(0,r.WI)(t.$slots,"default",{},void 0,!0)])}var W={name:"my-button"};const O=(0,b.Z)(W,[["render",D],["__scopeId","data-v-2a986e26"]]);var $=O;const x=["value"];function I(t,e,o,s,a,n){return(0,r.wg)(),(0,r.iD)("input",{value:o.value,onInput:e[0]||(e[0]=(...t)=>n.updateInput&&n.updateInput(...t)),type:"text",name:"text",class:"input"},null,40,x)}var U={name:"my-input",props:{value:[Number,String]},methods:{updateInput(t){this.$emit("update:value",t.target.value)}}};const T=(0,b.Z)(U,[["render",I],["__scopeId","data-v-066fdc30"]]);var L=T;function H(t,e,o,a,n,l){return t.show?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(...e)=>t.hideDialog&&t.hideDialog(...e))},[(0,r._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,r.WI)(t.$slots,"default",{},void 0,!0)])])):(0,r.kq)("",!0)}var E={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}},M={name:"my-dialog",mixins:[E]};const Q=(0,b.Z)(M,[["render",H],["__scopeId","data-v-3bd40fcd"]]);var j=Q,V=[$,L,j];const Z=(0,r._)("h1",null,"Welcome",-1),A=(0,r._)("p",null,"Here you can see posts from other people",-1);function q(t,e,o,s,a,n){const l=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("div",null,[Z,A,(0,r.Wm)(l,{onClick:e[0]||(e[0]=e=>t.$router.push("/posts")),class:"go-to-posts"},{default:(0,r.w5)((()=>[(0,r.Uk)("Posts Here!")])),_:1})])}var B={data(){return{dark:!1,root:null}},mounted(){this.root=document.documentElement},watch:{dark:{handler:function(){this.$nextTick((()=>{this.dark?(this.root.style.setProperty("--main-background-color","#f2f2f2"),this.root.style.setProperty("--dark-background-color","#000"),this.root.style.setProperty("--main-text-color","#000"),this.root.style.setProperty("--white-text-color","#fff"),this.root.style.setProperty("--white-color","#fff"),this.root.style.setProperty("--main-button-color","#42b883"),this.root.style.setProperty("--delete-color","#c21e56"),this.root.style.setProperty("--page-wrapper-bg","rgba(32, 32, 32, 0.1)")):(this.root.style.setProperty("--main-background-color","#000"),this.root.style.setProperty("--dark-background-color","#fff"),this.root.style.setProperty("--main-text-color","#fff"),this.root.style.setProperty("--white-text-color","#000"),this.root.style.setProperty("--white-color","#202124"),this.root.style.setProperty("--main-button-color","#2EE59D"),this.root.style.setProperty("--delete-color","#fa0b5b"),this.root.style.setProperty("--page-wrapper-bg","rgb(31 255 131 / 10%)"))}))},immediate:!0}}};const F=(0,b.Z)(B,[["render",q]]);var N=F;const R=(0,r._)("h1",null,"Posts",-1),Y={class:"app__btns"},z={key:1,style:{"will-change":"transform"},class:"posts-loading"},K={class:"observer"};function G(t,e,o,a,n,l){const i=(0,r.up)("my-input"),c=(0,r.up)("my-button"),u=(0,r.up)("my-select"),d=(0,r.up)("post-form"),p=(0,r.up)("my-dialog"),h=(0,r.up)("post-list"),m=(0,r.Q2)("focus"),v=(0,r.Q2)("intersection");return(0,r.wg)(),(0,r.j4)(s.uT,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[R,(0,r.wy)((0,r.Wm)(i,{value:a.searchQuery,"onUpdate:value":e[0]||(e[0]=t=>a.searchQuery=t),placeholder:"Search..."},null,8,["value"]),[[m]]),(0,r._)("div",Y,[(0,r.Wm)(c,{onClick:l.showDialog,class:"create-post"},{default:(0,r.w5)((()=>[(0,r.Uk)("Create Post")])),_:1},8,["onClick"]),(0,r.Wm)(u,{modelValue:a.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>a.selectedSort=t),class:"select",options:t.sortOptions},null,8,["modelValue","options"])]),(0,r.Wm)(s.uT,{name:"modal-show"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t),style:{"will-change":"transform"}},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"])])),_:1}),(0,r.Wm)(s.uT,null,{default:(0,r.w5)((()=>[a.isPostLoading?((0,r.wg)(),(0,r.iD)("div",z," Posts Loading... ")):((0,r.wg)(),(0,r.j4)(h,{key:0,posts:a.searchedPosts,onRemove:l.removePost,style:{"will-change":"transform"},class:"posts"},null,8,["posts","onRemove"]))])),_:1}),(0,r.wy)((0,r._)("div",K,null,512),[[v,a.loadMorePosts]])])])),_:1})}o(541);const J=t=>((0,r.dD)("data-v-1048011a"),t=t(),(0,r.Cn)(),t),X=J((()=>(0,r._)("h2",{style:{color:"var(--main-text-color)"}},"Create Post",-1)));function tt(t,e,o,a,n,l){const i=(0,r.up)("my-input"),c=(0,r.up)("my-button"),u=(0,r.Q2)("focus");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[X,(0,r.wy)((0,r.Wm)(i,{value:n.post.title,"onUpdate:value":e[0]||(e[0]=t=>n.post.title=t),type:"text",placeholder:"Title",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),[[u]]),(0,r.Wm)(i,{value:n.post.body,onInput:e[1]||(e[1]=t=>n.post.body=t.target.value),type:"text",placeholder:"Description",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),(0,r.Wm)(c,{class:"btn",onClick:l.canClickBtn,type:"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)("Create")])),_:1},8,["onClick"])],32)}var et={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.$emit("create",this.post),this.post={title:"",body:""}},canClickBtn(){let t=document.querySelector(".input-modal");if(t.value.length>10)return this.createPost()}},mounted(){}};const ot=(0,b.Z)(et,[["render",tt],["__scopeId","data-v-1048011a"]]);var st=ot;const rt={key:0},at={key:1,style:{color:"#c21e56","text-align":"center",display:"block"}};function nt(t,e,o,a,n,l){const i=(0,r.up)("post-item");return this.posts.length>0?((0,r.wg)(),(0,r.iD)("div",rt,[(0,r.Wm)(s.W3,{name:"post-list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.posts,(e=>((0,r.wg)(),(0,r.j4)(i,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e),style:{"will-change":"transform"}},null,8,["post","onRemove"])))),128))])),_:1})])):((0,r.wg)(),(0,r.iD)("h2",at," POST LIST IS EMPTY! "))}var lt=o(3577);const it={class:"post-wrapper"},ct={class:"post"},ut={class:"post-main title"},dt={class:"post-main"},pt={class:"buttons"};function ht(t,e,o,a,n,l){const i=(0,r.up)("my-button");return(0,r.wg)(),(0,r.j4)(s.uT,null,{default:(0,r.w5)((()=>[(0,r._)("div",it,[(0,r._)("div",ct,[(0,r._)("div",null,[(0,r._)("div",ut,(0,lt.zw)(o.post.title),1),(0,r._)("div",dt,(0,lt.zw)(o.post.body),1)]),(0,r._)("div",pt,[(0,r.Wm)(i,{class:"btn-read_more-post",onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,r.w5)((()=>[(0,r.Uk)("Read More")])),_:1}),(0,r.Wm)(i,{class:"btn-delete-post",onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,r.w5)((()=>[(0,r.Uk)("Remove")])),_:1})])])])])),_:1})}var mt={props:{post:{type:Object,required:!0}},methods:{copyPost(){return this.post}}};const vt=(0,b.Z)(mt,[["render",ht],["__scopeId","data-v-03f20896"]]);var ft=vt,yt={components:{postItem:ft},props:{posts:{type:Array,required:!0}}};const gt=(0,b.Z)(yt,[["render",nt],["__scopeId","data-v-47589b6a"]]);var bt=gt;const wt=t=>((0,r.dD)("data-v-5db465aa"),t=t(),(0,r.Cn)(),t),Pt=wt((()=>(0,r._)("option",{disabled:"",value:""},"Select",-1))),_t=["value"];function kt(t,e,o,a,n,l){return(0,r.wy)(((0,r.wg)(),(0,r.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),onChange:e[1]||(e[1]=(...t)=>l.changeOption&&l.changeOption(...t))},[Pt,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.options,(t=>((0,r.wg)(),(0,r.iD)("option",{key:t.value,value:t.value},(0,lt.zw)(t.name),9,_t)))),128))],544)),[[s.bM,o.modelValue]])}var Ct={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const St=(0,b.Z)(Ct,[["render",kt],["__scopeId","data-v-5db465aa"]]);var Dt=St,Wt=o(9669),Ot=o.n(Wt),$t=o(3907),xt=o(2262);function It(t){let e=(0,xt.iH)(1);const o=(0,xt.iH)("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/items/posts"),s=(0,xt.iH)("total_count"),a=(0,xt.iH)([]),n=(0,xt.iH)(0),l=(0,xt.iH)(!0),i=async()=>{try{const r=await Ot().get(o.value,{params:{page:e.value,limit:t,meta:s.value}});n.value=Math.ceil(r.data.meta.total_count/t),a.value=await r.data.data}catch(r){console.log(r.name,r.message)}finally{setTimeout((()=>l.value=!1),0)}},c=async()=>{try{e.value+=1;const s=await Ot().get(o.value,{params:{page:e.value,limit:t}});a.value=await([...a.value,...s.data.data])}catch(s){document.location.reload(!0)}};return(0,r.bv)(i),{posts:a,totalPages:n,isPostLoading:l,page:e,meta:s,serverUrl:o,loadMorePosts:c}}function Ut(t){const e=(0,xt.iH)(""),o=(0,r.Fl)((()=>[...t.value].sort(((t,o)=>t[e.value]?.localeCompare(o[e.value])))));return{selectedSort:e,sortedPosts:o}}function Tt(t){const e=(0,xt.iH)(""),o=(0,r.Fl)((()=>t.value.filter((t=>t.title.toLowerCase().includes(e.value.toLowerCase())))));return{searchQuery:e,searchedPosts:o}}var Lt={components:{postList:bt,postForm:st,MySelect:Dt},data(){return{dialogVisible:!1}},setup(t){const{posts:e,totalPages:o,isPostLoading:s,page:r,meta:a,serverUrl:n,loadMorePosts:l}=It(10),{selectedSort:i,sortedPosts:c}=Ut(e),{searchQuery:u,searchedPosts:d}=Tt(c);return{posts:e,totalPages:o,isPostLoading:s,page:r,meta:a,serverUrl:n,loadMorePosts:l,selectedSort:i,sortedPosts:c,searchQuery:u,searchedPosts:d}},methods:{...(0,$t.nv)({}),...(0,$t.OI)({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"}),reversePosts(){this.posts.reverse()},createPost(t){return this.posts.unshift(t),this.dialogVisible=!1,Ot().post(this.serverUrl,{title:t.title,body:t.body}).then((()=>{setTimeout((()=>document.location.reload(!0)),1e3)}))},removePost(t){return this.posts=this.posts.filter((e=>e.id!==t.id)),Ot()["delete"](`${this.serverUrl}/${t.id}`)},showDialog(){this.dialogVisible=!0},changePage(t){this.page=t}},mounted(){this.root=document.documentElement},computed:{...(0,$t.rn)({dark:t=>t.post.dark,metaAll:t=>t.post.metaAll,totalPages:t=>t.post.totalPages,sortOptions:t=>t.post.sortOptions}),...(0,$t.Se)({})},watch:{dark:{handler:function(){this.$nextTick((()=>{this.dark?(this.root.style.setProperty("--main-background-color","#f2f2f2"),this.root.style.setProperty("--dark-background-color","#000"),this.root.style.setProperty("--main-text-color","#000"),this.root.style.setProperty("--white-text-color","#fff"),this.root.style.setProperty("--white-color","#fff"),this.root.style.setProperty("--main-button-color","#42b883"),this.root.style.setProperty("--delete-color","#c21e56"),this.root.style.setProperty("--page-wrapper-bg","rgba(32, 32, 32, 0.1)")):(this.root.style.setProperty("--main-background-color","#000"),this.root.style.setProperty("--dark-background-color","#fff"),this.root.style.setProperty("--main-text-color","#fff"),this.root.style.setProperty("--white-text-color","#000"),this.root.style.setProperty("--white-color","#202124"),this.root.style.setProperty("--main-button-color","#2EE59D"),this.root.style.setProperty("--delete-color","#fa0b5b"),this.root.style.setProperty("--page-wrapper-bg","rgb(31 255 131 / 10%)"))}))},immediate:!0}}};const Ht=(0,b.Z)(Lt,[["render",G]]);var Et=Ht;const Mt=(0,r._)("h1",null,"About site",-1),Qt=(0,r._)("p",null,"This website was build by Nguyen Tien Hoach",-1),jt=[Mt,Qt];function Vt(t,e,o,s,a,n){return(0,r.wg)(),(0,r.iD)("div",null,jt)}var Zt={};const At=(0,b.Z)(Zt,[["render",Vt]]);var qt=At;function Bt(t,e,o,s,a,n){const l=(0,r.up)("post-item");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h1",null,"Page with id post: "+(0,lt.zw)(t.$route.params.id),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.posts,(t=>((0,r.wg)(),(0,r.j4)(l,{post:t,key:t.id,style:{"will-change":"transform"}},null,8,["post"])))),128))])}var Ft={components:{postItem:ft},data(){return{posts:[]}},methods:{filterPost(){this.posts=this.posts.filter((t=>t.id==this.$route.params.id))},async fetchPost(){try{const t=await Ot().get(this.$store.state.post.serverUrl);this.posts=t.data.data,this.filterPost()}catch(t){}}},mounted(){this.fetchPost()}};const Nt=(0,b.Z)(Ft,[["render",Bt]]);var Rt=Nt,Yt=o(2201);const zt=[{path:"/",component:N},{path:"/posts",component:Et},{path:"/about",component:qt},{path:"/posts/:id",component:Rt}],Kt=(0,Yt.p7)({routes:zt,history:(0,Yt.PO)("/")});var Gt=Kt,Jt={mounted(t){t.focus()},name:"focus"},Xt={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},r=new IntersectionObserver(s,o);r.observe(t)},name:"intersection"},te=[Jt,Xt];const ee={state:()=>({posts:[],isPostLoading:!1,dark:!1,root:null,selectedSort:"",searchQuery:"",page:1,limit:1,metaAll:0,meta:"total_count",totalPages:0,serverUrl:"https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/items/posts",sortOptions:[{value:"title",name:"Title"},{value:"body",name:"Description"}]}),getters:{sortedPosts(t){return[...t.posts].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))},searchedPosts(t,e){return e.sortedPosts.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setPostLoading(t,e){t.isPostLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setTotalPages(t,e){t.totalPages=e},setSearchQuery(t,e){t.searchQuery=e}},actions:{},namespaced:!0};var oe=(0,$t.MT)({modules:{post:ee}}),se=o(5205);(0,se.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});const re=(0,s.ri)(C);V.forEach((t=>{re.component(t.name,t)})),te.forEach((t=>{re.directive(t.name,t)})),re.use(oe).use(Gt).mount("#app")}},e={};function o(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,r,a){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],a=t[u][2];for(var l=!0,i=0;i<s.length;i++)(!1&a||n>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[i])}))?s.splice(i--,1):(l=!1,a<n&&(n=a));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,n=s[0],l=s[1],i=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(i)var u=i(o)}for(e&&e(s);c<n.length;c++)a=n[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},s=self["webpackChunkvue_posts"]=self["webpackChunkvue_posts"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(2256)}));s=o.O(s)})();
//# sourceMappingURL=app.8060fbde.js.map