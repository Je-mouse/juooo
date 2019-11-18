import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import VueTouch from "vue-touch";


import "@common/components";

Vue.use(VueTouch,{name:"v-touch"})



Vue.config.productionTip = false

Vue.prototype.$observer=new Vue()
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
