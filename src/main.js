import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from "vue-touch";
import cookies from 'vue-cookies';
import "@common/components";

Vue.prototype.$cookies=cookies;
Vue.use(VueTouch,{name:"v-touch"})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
