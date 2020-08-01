import axios from "axios";
import loading from "../lib/loading/index.js"
<<<<<<< HEAD


const server = axios.create({
    timeout:5000,
    withCredentials:true
})

//请求的拦截
server.interceptors.request.use((config)=>{
    if(config.method == "get" ){
        config.params = {...config.data};
    }
    loading.loadingMount();
    return config;
    

=======
const server = axios.create({
    timeout:5000,
    //baseUrl:"",
    withCredentials:true
})

//请求拦截
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data}
    }
    loading.loadingMount();
    return config;
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
},(err)=>{
    return Promise.reject(err)
})

//响应的拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        loading.loadingDestroy();
        return res.data;
<<<<<<< HEAD
        
=======
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
    }
},(err)=>{
    return Promise.reject(err)
})

export default server;