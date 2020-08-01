import http from "@utils/request";

/**
 * 获取分类商品信息
 */
export const classifyApi=(category=35,city_id=0)=>http({
    method:"get",
    url:"/Jerry/Show/Search/getShowList",
    data:{
        category:category,
        city_id:city_id,
        page:1,
        keywords:"",
        version:"6.0.7",
        referer:2
    }
})
/**
 * 获取详情页商品
*/
export const detailApi=(schedular_id)=>http({
    method:"get",
    url:"/Jerry/Schedule/Schedule/getScheduleInfo",
    data:{
        schedular_id:schedular_id,
        version:"6.0.8",
        referer:2
    }
})
/**
 * 获取详情页城市信息
*/
export const detailCityApi=(show_id,venue_id)=>http({
    mothod:"get",
    url:"/Jerry/Schedule/Schedule/getTour",
    data:{
        show_id:show_id,
        venue_id:venue_id,
        version:"6.0.7",
        referer:2
    }
})
/**
 * 获取详情页优惠信息
*/
export const detailCutApi=(id)=>http({
    method:"post",
    url:"/Jerry/Promotion/Coupon/getCouponList",
    data:{
        id:id,
        version:"6.0.7",
        referer:2
    }
})
/**
 * 获取专享折扣信息
*/
export const discountApi=(cate_id)=>http({
    method:"get",
    url:"/Jerry/vip/index/getDiscountList",
    data:{
        page:1,
        city_id:0,
        cate_id:cate_id,
        discount_id:0,
        version:"6.0.7",
        referer:2
    }
})
/**
 * 巡回演出-------mock数据
*/
    
/**
 * Hot_search---->热门场馆-->热门搜索 
*/
export const hotSearchApi=(keywords)=>http({
    method:"get",
    url:"/Jerry/Show/Search/getShowList",
    data:{
        keywords:keywords,
        venue_id:"",
        page:1,
        sort_type:1,
        version:"6.0.8",
        referer:2
    }
})

/**
 * 热门场馆
*/
export const theaterApi=()=>http({
    method:"get",
    url:"/Jerry/theatre/index/getTheatreList",
    data:{
        page:1,
        version:"6.0.8",
        referer:2
    }
})

/**
 * 演出详情前篇
*/
export const BeforeApi=(show_id)=>http({
    method:"get",
    url:"/Jerry/Schedule/schedule/getTourShowInfo",
    data:{
        show_id:show_id,
        version:"6.0.8",
        referer:2
    }
})
/**
 * 获取积分页数据
*/
export const creditApi=(city_id=0)=>http({
    method:"post",
    url:"/Juooo/Scores/getAllScoresList",
    data:{
        city_id:city_id
    }
})
/**
 * 获得场馆信息
*/
export const stadiumApi=(tid=2)=>http({
    method:"get",
    url:"/Juooo/theatre/index",
    data:{
        tid:tid
    }
})