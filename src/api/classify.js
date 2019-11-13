import http from "@utils/request";

export const classifyApi=(category=35,city_id=0)=>http({
    method:"get",
    url:"/Show/Search/getShowList",
    data:{
        category:category,
        city_id:city_id,
        page:1,
        keywords:"",
        version:"6.0.7",
        referer:2
    }
})
export const detailApi=(schedular_id)=>http({
    method:"get",
    url:"/Schedule/Schedule/getScheduleInfo",
    data:{
        schedular_id:schedular_id,
        version:"6.0.7",
        referer:2
    }
})
export const detailCityApi=(show_id,venue_id)=>http({
    mothod:"get",
    url:"/Schedule/Schedule/getTour",
    data:{
        show_id:show_id,
        venue_id:venue_id,
        version:"6.0.7",
        referer:2
    }
})
export const detailCutApi=(id)=>http({
    method:"post",
    url:"/Promotion/Coupon/getCouponList",
    data:{
        // schedular_id:97846,
        id:id,
        version:"6.0.7",
        referer:2
    }
})
export const discountApi=()=>http({
    method:"get",
    url:"/vip/index/getDiscountList",
    data:{
        page:1,
        city_id:0,
        cate_id:0,
        discount_id:0,
        version:"6.0.7",
        referer:2
    }
})