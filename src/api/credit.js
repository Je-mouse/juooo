import http from "@utils/request";

export const creditApi=(city_id=0)=>http({
    method:"post",
    url:"/Scores/getAllScoresList",
    data:{
        city_id:city_id
    }
})