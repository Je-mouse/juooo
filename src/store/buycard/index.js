import { buyCardListApi, buyCardContentApi } from "@api/buycard";

let state = {
    cate_card: JSON.parse(sessionStorage.getItem("cate_card")) || [],
    once_card: JSON.parse(sessionStorage.getItem("once_card")) || [],
    store_card:JSON.parse(sessionStorage.getItem("store_card")) || [],
    store_title:JSON.parse(sessionStorage.getItem("store_title")) || [],
    equity_list:JSON.parse(sessionStorage.getItem("equity_list")) || [],
}

let actions = {
    async handleGetList({ commit }) {

        let data = await buyCardListApi();
        // console.log(data, 111)
        commit("handlebuyCardList",data.data)
    },
    async handleGetContent({ commit }) {
        let data = await buyCardContentApi();
        // console.log(data, 222)
        commit("handlebuyCardContent",data.data)
    }

}

let mutations = {
    handlebuyCardList(state, params) {
        
       state.equity_list=params.vip_rule_data.equity_list;
    //    console.log(params,333)
       sessionStorage.setItem("equity_list",JSON.stringify(params.vip_rule_data.equity_list))
    },
    handlebuyCardContent(state, params){
        // console.log(params,222)
        var obj={};
        var arr=[]
        state.cate_card=params.cate_card;
        state.once_card=params.once_card;
        state.store_card=params.store_card;
        obj.title=params.store_title
        arr.push(obj)
        state.store_title=arr;
        sessionStorage.setItem("cate_card",JSON.stringify(params.cate_card))
        sessionStorage.setItem("once_card",JSON.stringify(params.once_card))
        sessionStorage.setItem("store_card",JSON.stringify(params.store_card))
        sessionStorage.setItem("store_title",JSON.stringify(arr))
       
    }

}
// // cate_card: [{…}]

// once_card: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// store_card: [{…}]
// store_title: "全国通用，购卡充值送200元"
// __proto__: Object

// vip_info: {…}, vip_rule_data: {…}, login: {…}}
// login: {is_login: 0}
// vip_info: {vip_state: 0, vip_start_time: 0, vip_end_time: 0, vip_display_start_time: "", vip_display_end_time: "", …}
// vip_rule_data:
// equity_list: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// open_data: {vip_item_id: 1, time_type: 1, price: 99, time_exp: 365}
// renew_data: {vip_item_id: 2, time_type: 1, price: 99, time_exp: 365}

export default {
    state,
    actions,
    mutations,
    namespaced: true
}