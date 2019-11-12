import http from "@utils/request";


export const buyCardListApi = () => http({
    method: "get",
    url: "/vip/index/getVipRule",
    data: {
        version:"6.0.7",
        referer:2
    }
})
//https://api.juooo.com/vip/index/getVipRule?version=6.0.7&referer=2
//https://api.juooo.com/Card/index/getCardGroupList?version=6.0.7&referer=2

export const buyCardContentApi = () => http({
    method: "get",
    url: "/Card/index/getCardGroupList",
    data: {
        version:"6.0.7",
        referer:2
    }
})