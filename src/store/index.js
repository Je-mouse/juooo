import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './homepage'
import buycard from './buycard'
import classify from "./classify"
Vue.use(Vuex)

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    homepage,
    buycard,
    classify
  }
  


})




export default store;
