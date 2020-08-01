import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:"hash",
  routes:[
<<<<<<< HEAD
    {
        path:"/Home",
        component:_=>import("@pages/jerry/home"),
        name:"Home",
    },
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
    },
    {
        path:"/mine",
        component:_=>import("@pages/jerry/mine"),
        name:"mine"
    },
    {
        path:"/stadium/:id",
        component:_=>import("@pages/jerry/stadium"),
        name:"stadium"
    }
  ]
})
=======
    homepage,
    {
      path:"/",
      redirect:"/juooo",
      meta:{
        toggle:true,
        requiredAuth:false
      }
    },
    {
      path:"/juooo",
      component:_=>import("@pages/cloud/juooo"),
      name:"juooo", 
      meta:{
        toggle:true,
        requiredAuth:false
      }
    },
    {
      path:"/cinema",
      component:_=>import("@pages/cloud/cinema"),
      name:"cinema",
      meta:{
        toggle:true,
        requiredAuth:false
      }
    },
    {
      path:"/ticket",
      component:_=>import("@pages/cloud/ticket"),
      name:"ticket",
      meta:{
        toggle:true,
        requiredAuth:true  //合并时改成true
      }
    },
    {
      path:"/mine",
      component:_=>import("@pages/cloud/mine"),
      name:"mine",
      meta:{
        toggle:true,
        requiredAuth:true  //合并时改成true
      }
    },
    {
      path:"/setup",
      component:_=>import("@pages/cloud/setup"),
      name:"setup",
      meta:{
        requiredAuth:false
      }
    },
    {
      path:"/mycard",
      component:_=>import("@pages/cloud/mycard"),
      name:"mycard",
      meta:{
        requiredAuth:true  //合并时改成true
      }
    },
    {
      path:"/search",
      component:_=>import("@pages/cloud/search"),
      name:"search",
      meta:{
        
      }
    },
    {
      path:"/changeloginpwd",
      component:_=>import("@pages/cloud/changeloginpwd"),
      name:"changeloginpwd",
      meta:{
        requiredAuth:true  //合并时改成true
      },
    },
    {
      path:"/changeloginpwdstate",
      component:_=>import("@pages/cloud/changeloginpwdstate"),
      name:"changeloginpwdstate",
      meta:{
        requiredAuth:true  //合并时改成true
      },
    },
    {
      path:"/city",
      component:_=>import("@pages/cloud/city"),
      name:"city"
    },
    {
      path: "/buycard",//购买新卡
      name: "buycard",
      meta: {
          flag: true,
          requiredAuth: true
      },
      component: _ => import("@pages/grace/buycard")
  },
  {
      path: "/login",//登录
      name: "login",
      meta: {
          flag: false,
          requiredAuth: true
      },
      component: _ => import("@pages/grace/login")
  },
  {
      path: "/savemoney",//省钱攻略
      name: "savemoney",
      meta: {
          flag: false,
          requiredAuth: true
      },
      component: _ => import("@pages/grace/savemoney")
  },
  {
      path: "/member",//省钱攻略
      name: "member",
      meta: {
          flag: false,
          requiredAuth: true
      },
      component: _ => import("@pages/grace/member")
  },
  {
    path: "/detail",//省钱攻略
    name: "detail",
    meta: {
        flag: false,
        requiredAuth: true
    },
    component: _ => import("@pages/jerry/detail")
  }
  ]
})

router.beforeEach((to,from,next)=>{ 
  if(to.path !="/login" && to.meta.requiredAuth){
      if(document.cookie.indexOf("token") != -1){
          next();
      }else{
          next({name:"login",params:{to:to.path}})
      }
  }else{
      next();
  }
})

>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
export default router;
