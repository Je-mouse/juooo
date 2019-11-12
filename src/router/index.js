import Vue from 'vue'
import VueRouter from 'vue-router'
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


export default router;
