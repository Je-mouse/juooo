import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from "vue-touch";
import cookies from 'vue-cookies';
import JerryUI from "./lib/index.js";
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
