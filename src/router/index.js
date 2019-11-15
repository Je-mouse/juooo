import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import homepage from './homepage'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/homepage'
        },
        homepage,
        {
            path: "/buycard",//购买新卡
            name: "buycard",
            meta: {
                flag: true,
                requiredAuth: false
            },
            component: _ => import("@pages/grace/buycard")
        },
        {
            path: "/login",//登录
            name: "login",
            meta: {
                flag: false,
                requiredAuth: false
            },
            component: _ => import("@pages/grace/login")
        },
        {
            path: "/savemoney",//省钱攻略
            name: "savemoney",
            meta: {
                flag: false,
                requiredAuth: false
            },
            component: _ => import("@pages/grace/savemoney")
        },
        {
            path: "/member",//省钱攻略
            name: "member",
            meta: {
                flag: false,
                requiredAuth: false
            },
            component: _ => import("@pages/grace/member")
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path != "/login" && to.meta.requiredAuth) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next({ name: "login", params: { to: to.path } })
        }
    } else {
        next();
    }
})


=======
import classify from './classify'
// import credit from './credit'
import detail from './detail'
import discount from './discount'
import perform from './perform'
import searchHot from './searchHot'
import theater from './theater'
import ticket from './ticket'
import before from './before'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:"hash",
  routes:[
    classify,
    detail,
    {
      path:"/credit",
      component:_=>import("@pages/jerry/credit"),
      name:"credit"
    },
    discount,
    perform,
    searchHot,
    theater,
    ticket,
    before
  ]
})

>>>>>>> b1e3eb347d6b81c59dcc391e3cdcd46291f55270
export default router;
