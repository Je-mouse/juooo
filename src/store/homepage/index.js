import {homepageApi} from "@api/homepage";

let state={
    nowList:JSON.parse(sessionStorage.getItem("nowList")) || [],
    commingList:JSON.parse(sessionStorage.getItem("commingList")) || [],
}

let actions={
    async handleGetList({commit},type) {
        console.log(123)
        let data = await homepageApi(type);
        commit("handleList",{data:data,type:type})
      },
    // async handleGetNowList({commit}) {
    //     let data = await homepageNowApi();
    //     commit("handleNowList",data)
    //   },
    //   async handleGetCommingList({commit}){
    //     let data = await homepageCommingApi();
    //     commit("handleCommingList",data)
    //   }
}

let mutations={
    handleList(state,params){
        // console.log(params)
        if(params.type==1){
            state.nowList=params.data.data.list
            sessionStorage.setItem('nowList',JSON.stringify(params.data.data.list))
        }else{
            state.commingList = params.data.data.list;
            sessionStorage.setItem('commingList',JSON.stringify(params.data.data.list))
        }
    },
    // handleNowList(state,now){
    //     state.nowList = now.data.list;
    //     sessionStorage.setItem('nowList',JSON.stringify(now.data.list))
    // },
    // handleCommingList(state,comming){
    //     state.commingList = comming.data.list;
    //     sessionStorage.setItem('commingList',JSON.stringify(comming.data.list))
    // }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}