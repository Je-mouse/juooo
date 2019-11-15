import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:"hash",
  routes:[
    {
        path:"/classify",
        component:_=>import("@pages/jerry/classify"),
        name:"classify",
       
        /**es的import方法实现懒加载：
         const HelloWorld = ()=>import("@/components/HelloWorld")
         routers:{
              component:HelloWorld
         }
        **/
    },
    {
        path:"/detail/:id",
        component:_=>import("@pages/jerry/detail"),
        name:"detail"
    },
    {
        path:"/credit",
        component:_=>import("@pages/jerry/credit"),
        name:"credit"
    },
    {    
        path:"/discount",
        component:_=>import("@pages/jerry/discount"),
        name:"discount"
    },
    {    
        path:"/perform",
        // component:_=>import("@pages/jerry/perform"),
        component:resolve=>(require(["@pages/jerry/perform"],resolve)),
        name:"perform"
        //路由异步实现懒加载 component: resolve=>(require(["@/components/HelloWorld"],resolve))
    },
    {
        path:"/searchHot/:k",
        component:_=>import("@pages/jerry/searchHot"),
        name:"searchHot"
    },
    {
        path:"/theater",
        component:_=>import("@pages/jerry/theater"),
        name:"theater"
    },
    {
        path:"/ticket",
        component:_=>import("@pages/jerry/ticket"),
        name:"ticket"
    },
    {
        path:"/before/:show_id",
        component:_=>import("@pages/jerry/before"),
        name:"before"
    }
  ]
})

export default router;
