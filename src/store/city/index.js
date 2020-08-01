import {cityApi} from "@api/city";

let state = {
    hotCity:JSON.parse(sessionStorage.getItem("hotCity"))||[],
    cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
    name:sessionStorage.getItem("name") || "北京",
    cityId:sessionStorage.getItem("cityId")||1,
    py:"BJ"
}

let actions = {
    async handleGetCityList({commit}){
        let data = await cityApi();
        //console.log(data.data)
        commit("handleCityList",data.data);
    }
}

let mutations = {
    handleUpdateCityInfo(state,params){
        state.cityId = params.id;
        state.name = params.name;
        sessionStorage.setItem("cityId",params.id);
        sessionStorage.setItem("name",params.name)
    },
    handleCityList(state,data){
        let hotCity = [],cityList = [],datalist = [];
        //热门城市
       //console.log(typeof data)
        for(var key in data){
            datalist.push(data[key])
        }
        console.log(datalist)
        for(let i=0;i<datalist.length;i++){
            for(let j=0;j<datalist[i].list.length;j++){
                if(datalist[i].list[j].is_city == 0){
                    hotCity.push({id:datalist[i].list[j].id,nm:datalist[i].list[j].name});
                    
                }
            }
            
        }
        //console.log(hotCity)

        //城市列表
        cityList = datalist
        console.log(cityList)

        state.hotCity = hotCity;
        state.cityList = cityList;
        
        sessionStorage.setItem("hotCity",JSON.stringify(hotCity));
        sessionStorage.setItem("cityList",JSON.stringify(cityList));   
    }
}
let getters = {

}
export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}