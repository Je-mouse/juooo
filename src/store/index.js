import Vue from "vue";
import Vuex from "vuex";
import classify from "./classify"
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        classify
    }
})


export default store;
