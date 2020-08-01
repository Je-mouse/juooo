<template>
    <div class="credit">
        <div>
             <Header title="积分商城"/>
            <nav>
                <span></span>
                <strong>6</strong>
                <div class="score">
                    积分详细
                    <i class="iconfont icon-xiangyou"></i>
                </div>
            </nav>
            <aside>
                <figure>
                    <v-touch tag="p" @tap="handleShowCity()" :class="tag==1?'active':''">{{city}}<i class="iconfont icon-xiangxia"></i></v-touch>
                    <p>积分<i class="iconfont icon-xiangxia"></i></p>
                </figure>
                <div class="city" v-show="isShow2">
                    <v-touch tag="p" @tap="handleCity()">全国</v-touch>
                    <v-touch tag="p" @tap="handleCity(12)">重庆</v-touch>
                    <v-touch tag="p" @tap="handleCity(14)">长沙</v-touch>
                    <v-touch tag="p" @tap="handleCity(51)">西安</v-touch>
                    <v-touch tag="p" @tap="handleCity(52)">昆明</v-touch>
                    <v-touch tag="p" @tap="handleCity(10001)">合肥</v-touch>
                    <v-touch tag="p" @tap="handleCity(10067)">柳州</v-touch>
                </div>
            </aside>
        </div>
        
        <hgroup v-show="isShow1">
            <ul>
                <router-link v-for="(item,key) in goods" :key="key" tag="li" :to="'/detail/'+item.schedular_id">
                    <a href="#"><img :src="'https://image.juooo.com/'+item.pic"/></a>
                    <div class="right">
                        <a href="#">{{item.schedular_name}}</a>
                        <p>时间：<span>{{item.show_time}}</span></p>
                        <p>城市：<span>{{item.city_time}}</span></p>
                        <p>场馆：<span>{{item.venue_time}}</span></p>
                        <h6><b>{{item.scores}}</b>积分</h6><del>￥{{item.ticket_price}}</del>
                    </div>
                </router-link>
            </ul>
        </hgroup>
    </div>
</template>
<script>
import {creditApi} from "@api/classify"
export default {
    name:"Credit",
    data(){
        return{
            city:"城市",
            cityId:0,
            goods:[],
            tag:"",
            isShow2:"",
            isShow1:true
        }
    },
    created(){
        this.getGoods();
    },
    methods:{
        async getGoods(params){
            let data= await creditApi(params);
            this.goods=data.data.list;
        },
        handleShowCity(){
            if(this.tag==1){        //显示----->隐藏
                this.isShow2=false;
                this.isShow1=true;
                this.tag=0;
            }else{                  //隐藏----->显示
                this.tag=1;
                this.isShow2=true;
                this.isShow1=false;
            }  
        },
        handleCity(index){
            this.isShow2=false;
            this.isShow1=true;
            this.cityId=index;
            this.getGoods(this.cityId);
        }
        
    }
}
</script>
<style>
     /* 积分 */
    .credit nav{height: .6rem;line-height: 1rem;color: #b2b2b2;background: #fff;text-align: center;z-index: 499;display: flex;justify-content: space-between;align-items: center;}
    .credit nav span{ width: .67rem;display: inline-block;}
    .credit nav strong{
        background: url(https://m.juooo.com/public/basic/Home/app/app-juooo4.2/images/icon-adr.png) no-repeat left center;
        width: .1rem;
        padding-left: .15rem;
        background-size: .13rem;
        font-size: .18rem;
        color: #424242;
    }
    .credit nav .score{ font-size: .11rem; color: #b2b2b2;}
    /* 城市选择*/ 
    .credit aside{height: .4rem;z-index: 100;}
    .credit figure{
        border-top: .01rem solid #e7e7e7;
        height: .35rem;
        display: flex;
        width: 100%;
        text-align: center;
        align-items: center;
        background: #fff;
        justify-content: space-around;
        color: #666;
    }
    .credit figure p{ font-size: .13rem;}
    .credit .city{
        font-size: .14rem;
        color:#999;
    }
    .credit .city p{padding: 0 .1rem;border-bottom: .01rem solid #efefef;line-height: .5rem;font-size: .12rem;
    color: #666;}
    /*商品*/
    .credit hgroup{
        padding-top: 0.05rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: top;
        margin-top: 1.3rem;
        overflow: auto;
        background: #f0f0f0;
    }
    .credit hgroup ul{ background: #fff; padding: .1rem;}
    .credit hgroup ul li{
        border-bottom: .01rem solid #eee;
        padding-bottom: .1rem;
        display: flex;
        font-size: .14rem;
        margin-top: .1rem;
    }
    .credit hgroup ul li img{width: .75rem; }
    .credit hgroup .right{margin-left: .1rem; }
    .credit hgroup .right a{font-weight: normal;color: #333;display: block;margin-bottom: .05rem;}
    .credit hgroup .right p{font-size: .11rem;color: #666;}
    .credit hgroup .right p:nth-of-type(3){margin-bottom: .05rem; }
    .credit hgroup .right h6{
        display: inline-block;
        color: #ff7919;
        font-size: .1rem;
        transform: scale(0.8);
        font-weight: normal;
    }
    .credit hgroup .right h6 b{
        font-weight: normal;
        font-size: .18rem;
        transform: scale(0.9);
    }
    .credit hgroup .right del{
        font-size: .11rem;
        color:  #ccc;
        transform: scale(0.8);
        display: inline-block;
        margin-left: -0.1rem;
    } 
    .credit .active{color: red}
</style>