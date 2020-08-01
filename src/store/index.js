import Vue from "vue";
import Vuex from "vuex";
import city from "./city"
import homepage from './homepage'
import buycard from './buycard'
import classify from "./classify"
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        city,
        homepage,
        buycard,
        classify
    }
})

export default store;
