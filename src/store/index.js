import Vue from 'vue'
import Vuex from 'vuex'
import homepage from './homepage'
import buycard from './buycard'
Vue.use(Vuex)

const store=new Vuex.Store({
  modules:{
    homepage,
    buycard
  }
})


export default store;

