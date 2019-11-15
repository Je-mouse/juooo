import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const router = new VueRouter({
  mode:"hash",
  routes:[
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
        requiredAuth:false  //合并时改成true
      }
    },
    {
      path:"/mine",
      component:_=>import("@pages/cloud/mine"),
      name:"mine",
      meta:{
        toggle:true,
        requiredAuth:false  //合并时改成true
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
        requiredAuth:false  //合并时改成true
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
        requiredAuth:false  //合并时改成true
      },
    },
    {
      path:"/changeloginpwdstate",
      component:_=>import("@pages/cloud/changeloginpwdstate"),
      name:"changeloginpwdstate",
      meta:{
        requiredAuth:false  //合并时改成true
      },
    },
    {
      path:"/city",
      component:_=>import("@pages/cloud/city"),
      name:"city"
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path !="/login" && to.meta.requiredAuth){
      if(localStorage.getItem("token")){
          next();
      }else{
          next({name:"login",params:{to:to.path}})
      }
  }else{
      next();
  }
})


export default router;
