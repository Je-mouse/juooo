<template>
    <div class="classify">
        <div id="all">
            <Header title="演出"/>
            <Nav @handle="getCheckIndex"/>
        </div>
        <section>
             <ol>
                <router-link v-for="(item,key) in data" :key="key" tag="li" :to="'/detail/'+item.schedular_id">
                    <a href="#"><img :src="item.pic"/></a>
                    <div id="right">
                        <strong>{{item.show_time_top}}</strong><span>{{item.show_time_bottom}}</span>
                        <h5>{{item.name}}</h5>
                        <p>{{item.city_name}}<i>|</i>{{item.venue_name}}</p>
                        <b>￥{{item.min_price}}<span>起</span></b>
                    </div>
                </router-link>
            </ol>      
        </section>  
         <keep-alive><router-view></router-view></keep-alive>
    </div>
</template>
<script>
import {classifyApi} from "@api/classify"
export default {
    name:"classify",
    data(){
        return{
            id:35,
            data:[],
            timer:1300,
            isshow:"" ,  //是否进入时显示
        }
    },
    created(){
        this.getGoodsList(this.id);
    },
    methods:{
        //导航实现
        getCheckIndex(index){
            this.id=index;
            this.getGoodsList(this.id);
        },
        async getGoodsList(id){
              let data=await classifyApi(id);
              this.data=data.data.list;
        }
    }
}
</script>
<style>
       #all{background: white;z-index: 999; height: .73rem;position: absolute;width: 100%}
    /* 数据渲染 */
        .classify section{background: white; position: absolute; left: 0;right: 0;top: 0; bottom: 0;overflow: auto;padding-top: .71rem;}
        .classify section ol{display: flex;padding: .07rem;flex-direction: column;}
        .classify section ol li{ list-style: none;display: flex;font-size: .14rem; color: #666; padding: 0.05rem 0;}
       
        ol li img{ width: 0.9rem;border-radius: .08rem;border: .01rem solid #ebebeb;position: relative;overflow: hidden;}

        .classify #right{ margin-left: 0.1rem; }
        .classify #right strong,span{font-size: .13rem;}
        .classify #right strong{ color: #232323;margin-right: .05rem;}
        
        .classify #right h5{
            color: #232323;
            font-size: .14rem; 
            margin-top: .1rem;
            padding-right: .1rem;
            width: 1.9rem;
            height: .38rem;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            }
        /* #right a h6{ white-space: nowrap;width: 2rem;overflow: hidden;text-overflow: ellipsis; } */
        /* #right a h5{} */
        
        .classify #right p{overflow:hidden;height:.15rem;margin-top: .1rem;width: 2rem;font-size: .1rem;color: #999;height: 0.15rem;line-height: 0.15rem;margin-bottom: 0.1rem;}
        .classify #right p i{ font-style: normal; margin: 0 .05rem;}
        .classify #right b{color: #ff6643;;font-size: .13rem;}
        .classify #right b span{color: #999; margin-left: 0.05rem;display: inline;}
</style>