import http from "@utils/request";

export const SearchApi = ()=>http({
    method:"get",
    url:"/yun/Show/Search/getHotWord",
    data:{
        version:"6.0.7",
        referer:2
    }
})

export const SearchDataApi = (keywords) => http({
    method:"get",
    url:"/yun/Show/Search/getShowList",
    data:{
        keywords,
        page:1,
        sort_type:1,
        version:"6.0.7",
        referer:2,
    }
})
