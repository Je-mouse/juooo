import http from "@utils/request";

export const cityApi = (city_id,abbreviation)=>http({
    method:"get",
    url:"/yun/city/city/getSortedCityList",
    data:{
        city_id,
        abbreviation,
        version:"6.0.8",
        referer:2
    }
})
