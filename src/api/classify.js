import http from "@utils/request";

/**
 * 获取分类商品信息
 */
export const classifyApi=(category=35,city_id=0)=>http({
    method:"get",
<<<<<<< HEAD
    url:"/Jerry/Show/Search/getShowList",
=======
    url:"/yun/Show/Search/getShowList",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
=======
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
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
 * 获取详情页商品
*/
export const detailApi=(schedular_id)=>http({
    method:"get",
<<<<<<< HEAD
    url:"/Jerry/Schedule/Schedule/getScheduleInfo",
=======
    url:"/yun/Schedule/Schedule/getScheduleInfo",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
    url:"/Jerry/Schedule/Schedule/getTour",
=======
    url:"/yun/Schedule/Schedule/getTour",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
    url:"/Jerry/Promotion/Coupon/getCouponList",
=======
    url:"/yun/Promotion/Coupon/getCouponList",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
    url:"/Jerry/vip/index/getDiscountList",
=======
    url:"/yun/vip/index/getDiscountList",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
=======
export const performApi=()=>http({
    method:"post",
    url:"/yun/tour/ShowList",
    // headers:{'Content-Type':''}
    // url:"/Tour/moreTourShowList"
})
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
    
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
<<<<<<< HEAD
    url:"/Jerry/theatre/index/getTheatreList",
=======
    url:"/yun/theatre/index/getTheatreList",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
    url:"/Jerry/Schedule/schedule/getTourShowInfo",
=======
    url:"/yun/Schedule/schedule/getTourShowInfo?",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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