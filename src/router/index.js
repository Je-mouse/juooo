import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from './homepage'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:"hash",
  routes:[
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

export default router;
