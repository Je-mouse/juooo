import http from "@utils/request";

export const juoooApi = ()=>http({
    method:"get",
    url:"/home/index/getClassifyHome",
    data:{
        city_id:5,
        abbreviation:"BJ",
        version:"6.0.7",
        referer:2
    }
})

export const juoooMiddleApi = ()=>http({
    method:"get",
    url:"home/index/getHotsRecommendList",
    data:{
        city_id:5,
        version:"6.0.7",
        referer:2
    }
})

export const juoooForYouApi = ()=>http({
    method:"get",
    url:"home/index/getRecommendShow",
    data:{
        cityAdd:"BJ",
        page:1,
        version:"6.0.7",
        referer:2
    }
})

export const juooofenleiApi = ()=>http({
    method:"get",
    url:"/home/index/getFloorShow",
    data:{
        city_id:5,
        version:"6.0.7",
        referer:2
    }
})

