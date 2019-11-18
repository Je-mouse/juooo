import http from "@utils/request";

export const vipApi = ()=>http({
    method:"get",
    url:"/yun/vip/index/getVipHomeSchedular",
    data:{
        version:"6.0.7",
        referer:2
    }
})