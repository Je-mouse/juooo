import http from "@utils/request";

/**
 * 获取分类商品信息
 */
export const classifyApi=(category=35,city_id=0)=>http({
    method:"get",
    url:"/yun/Show/Search/getShowList",
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
 * 获取积分页数据
*/
export const creditApi=(city_id=0)=>http({
    method:"post",
    url:"/yun/Scores/getAllScoresList",
    data:{
        city_id:city_id
    }
})
/**
 * 获取详情页商品
*/
export const detailApi=(schedular_id)=>http({
    method:"get",
    url:"/yun/Schedule/Schedule/getScheduleInfo",
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
    url:"/yun/Schedule/Schedule/getTour",
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
    url:"/yun/Promotion/Coupon/getCouponList",
    data:{
        // schedular_id:97846,
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
    url:"/yun/vip/index/getDiscountList",
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
 * 巡回演出
*/
export const performApi=()=>http({
    method:"post",
    url:"/yun/tour/ShowList",
    // headers:{'Content-Type':''}
    // url:"/Tour/moreTourShowList"
})
    
/**
 * theater---->热门场馆
*/
// export const theaterApi=()=>http({
//     method:"get",
//     url:"/Show/Search/getShowList",
//     data:{
//         keywords:"%25E5%2590%2589%25E5%25B1%258B%25E5%2587%25BA%25E7%25A7%259FRENT",
//         venue_id:"",
//         page:1,
//         sort_type:1,
//         version:"6.0.8",
//         referer:2
//     }
// })

/**
 * 热门场馆
*/
export const theaterApi=()=>http({
    method:"get",
    url:"/yun/theatre/index/getTheatreList",
    data:{
        page:1,
        version:"6.0.8",
        referer:2
    }
})

/**
 * 演出详情前篇
*/
export const BeforeApi=()=>http({
    method:"get",
    url:"/yun/Schedule/schedule/getTourShowInfo?",
    data:{
        show_id:36016,
        version:"6.0.8",
        referer:2
    }
})
