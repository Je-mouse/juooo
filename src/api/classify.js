import http from "@utils/request";

export const classifyApi=(category=35)=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        category:category,
        city_id:0,
        page:1,
        keywords:"",
        version:"6.0.7",
        referer:2
    }
})