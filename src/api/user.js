import http from "@utils/request";

export const userApi = ()=>http({
    method:"get",
    url:"user/account/basicInfo",
    data:{
        version:"6.0.7",
        referer:2
    }
})


