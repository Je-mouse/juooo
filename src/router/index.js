import Vue from 'vue'
import VueRouter from 'vue-router'
import classify from './classify'
import credit from './credit'
import detail from './detail'
import discount from './discount'
import perform from './perform'
import searchHot from './searchHot'
import theater from './theater'
import ticket from './ticket'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:"hash",
  routes:[
    classify,
    credit,
    detail,
    discount,
    perform,
    searchHot,
    theater,
    ticket
  ]
})

export default router;
