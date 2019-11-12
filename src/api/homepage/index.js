import http from "@utils/request";



/***
 * @params 
 */
// export const homepageNowApi = () => http({
//     method: "get",
//     url: "/vip/index/getFlashPurchase",
//     data: {
//         position: 2,
//         type: 1,
//         page: 1,
//         limit: 4
//     }
// }) 

export const homepageApi = (type) => http({
    method: "get",
    url: "/vip/index/getFlashPurchase",
    data: {
        position: 2,
        type: type,
        page: 1,
        limit: 4
    }
}) 

// export const homepageCommingApi = _ => http({
//     method: "get",
//     url: "/vip/index/getFlashPurchase",
//     data: {
//         position: 2,
//         type: 2,
//         page: 1,
//         limit: 4
//     }
// }) 
// https://api.juooo.com/vip/index/getFlashPurchase?position=2&type=2&page=1&limit=4