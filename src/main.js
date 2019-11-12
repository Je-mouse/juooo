import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch'
import store from './store'
Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})
Vue.prototype.$observer=new Vue()
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
