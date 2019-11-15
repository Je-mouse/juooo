import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from "vue-touch";
import store from "./store";
import "@common/components";

Vue.use(VueTouch,{name:"v-touch"})

Vue.config.productionTip = false

Vue.prototype.$observer=new Vue()
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
