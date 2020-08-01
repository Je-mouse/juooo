import http from "@utils/request";

export const juoooApi = (city_id)=>http({
    method:"get",
    url:"/yun/home/index/getClassifyHome",
    data:{
        city_id,
        abbreviation:"BJ",
        version:"6.0.7",
        referer:2
    }
})

export const juoooMiddleApi = (city_id)=>http({
    method:"get",
    url:"/yun/home/index/getHotsRecommendList",
    data:{
        city_id,
        version:"6.0.7",
        referer:2
    }
})

export const juoooForYouApi = (cityAdd)=>http({
    method:"get",
    url:"/yun/home/index/getRecommendShow",
    data:{
        cityAdd,
        page:1,
        version:"6.0.7",
        referer:2
    }
})

export const juooofenleiApi = (city_id)=>http({
    method:"get",
    url:"/yun/home/index/getFloorShow",
    data:{
        city_id,
        version:"6.0.7",
        referer:2
    }
})

export const juoooXunHuiApi =(city_id)=>http({
    method:"get",
    url:"/yun/home/index/getTourRecommendList",
    data:{
        city_id,
        version:"6.0.8",
        referer:2
    }
})

export const juoooHotGuanApi = ()=>http({
    method:"get",
    url:"/yun/home/index/getHotTheatre",
    data:{
        version:"6.0.8",
        referer:2
    }
})
