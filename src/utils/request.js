import axios from "axios";
// import loading from "../lib/loading";

const server = axios.create({
    timeout:5000,
    //baseUrl:"",
    withCredentials:true
})

//请求的拦截
server.interceptors.request.use((config)=>{
    if(config.method == "get" ){
        config.params = {...config.data};
    }
    // loading.loadingMount()
    // config.headers["content-type"] = "application/x-www-form-urlencoded"
    return config;
    

},(err)=>{
    return Promise.reject(err)
})


//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
    // loading.LoadingDestroy()
},(err)=>{
    return Promise.reject(err)
})


export default server;