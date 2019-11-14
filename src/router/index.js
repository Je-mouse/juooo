import Vue from 'vue'
import VueRouter from 'vue-router'
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

export default router;
