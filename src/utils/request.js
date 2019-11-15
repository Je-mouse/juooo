import axios from "axios";
import loadingUI from "../lib/loading/index.js"

const server = axios.create({
    timeout:5000,
    withCredentials:true
})

//请求的拦截
server.interceptors.request.use((config)=>{
    if(config.method == "get" ){
        config.params = {...config.data};
    }
    loadingUI.loadingMount()
    return config;
    

},(err)=>{
    return Promise.reject(err)
})

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        loadingUI.loadingDestroy()
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default server;