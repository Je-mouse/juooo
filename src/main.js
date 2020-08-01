import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import VueTouch from "vue-touch";
<<<<<<< HEAD
import cookies from 'vue-cookies';
import JerryUI from "./lib/index.js";
=======


>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
import "@common/components";

Vue.prototype.$cookies=cookies;
Vue.use(VueTouch,{name:"v-touch"})
Vue.use(JerryUI)



Vue.config.productionTip = false

Vue.prototype.$observer=new Vue()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
