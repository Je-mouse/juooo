import {classifyApi} from "@api/classify";
let state={
    goods:[]
}
let actions={
    async handleGetGoods({commit}){
        let data =await classifyApi();
        console.log(data);
        commit("handleSaveGoods",data)
    }

}
let mutations={
    handleSaveGoods(state,data){
        state.goods=data;
    }
}
let getters={

}
export default {
    state,
    actions,
    mutations,
    getters,
    
}