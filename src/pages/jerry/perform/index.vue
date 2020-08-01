<template>
    <div id="perform">
        <Header title="巡回演出"/>
        <!-- <BScroll ref="scroll"> -->
            <section>
                <ol>
                    <li  v-for="(item,key) in datalist" :key="key">
                        <router-link class="imag" tag="a" :to="item.pc_url=='sid'?'/before/'+item.show_id:'/searchHot/k='+name[key]">
                            <img :src="item.pic"/>
                        </router-link>
                        <div id="right">
                            <a  href="#">
                                <h5>{{item.show_name}}</h5>
                            </a>
                            <h6><i>{{item.display_show_time}}</i></h6>
                            <div id="btn">
                                <a v-for="(n,i) in item.cityItems" :key="i">{{n.city_name}}</a>
                            </div>
                        </div>
                    </li>
                </ol>
            </section>             
        <!-- </BScroll> -->
           
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Perform",
    data(){
        return{
            datalist:"",
            name:[],
            flag:""
        }
    },
    created(){
        axios({
            method:"get",
            url:"http://localhost:3000/data",
        }).then((res)=>{
            this.datalist=res.data;
            this.getUrlName(this.datalist)
        })
    },
    methods:{
        getUrlName(data){//匹配出跳转的参数名字
            let name=[];
            data.forEach((ele) => {
                name.push(ele.show_name);
            });
            name.forEach((ele)=>{
                ele=ele.replace(/^([\u4e00-\u9fa5]|\w+)+/g,"")
                this.name.push(ele.replace(/([\u4e00-\u9fa5]+)$/g,""))
            })
          
        }
    }
}
</script>
<style>
    #perform section{background: white;position: absolute; left: 0;right: 0;top: 0; bottom: 0;overflow: auto;padding-top: .35rem;}
    #perform section ol{display: flex;padding: .08rem;flex-direction: column;margin-top: 0.02rem;}
    #perform section ol li{ list-style: none;display: flex;font-size: .14rem; color: #666; padding: 0.09rem 0;border-bottom: .01rem solid #eee;}
    #perform ol li img{ width: 0.8rem;border: .01rem solid #ebebeb;position: relative;overflow: hidden;border: none;}
    #perform ol li .imag{width: 0.8rem; display: block; position: relative;}
    #performol li .imag i{
        width: 0.2rem;
        height: 0.5rem;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        background: url(https://m.juooo.com/public/basic/Home/app/app-juooo4.2/images/juooo.png) 0 0 no-repeat;
        background-size: 100%;
    }

    #right{ margin-left: 0.1rem; }
    #perform ol li #right a h5{
        font-size: .12rem;
        font-weight: normal;
        color: #666;
    }
    #right h6{font-size: .12rem;color: #666;font-weight: normal;}
    #right h6 i{
        font-style: normal;
        transform: scale(0.9);
        display: inline-block;
        color: #bbb;
    }
    #btn{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 0.05rem;
    }
    #perform ol li #btn a{ 
        height: 0.25rem;
        width: 0.47rem;
        line-height: 0.25rem;
        font-size: .12rem;
        transform: scale(0.9);
        display: inline-block;
        border: .01rem solid #ebebeb;
        text-align: center;
        box-sizing: border-box;
        margin-bottom: .035rem;
    }
</style>