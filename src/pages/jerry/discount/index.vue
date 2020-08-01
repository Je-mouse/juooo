<template>
    <div id="discount">
        <div>
            <Header title="专享折扣"/>
            <Nav font="iconfont icon-shaixuan" family="筛选"  @handle="getCheckIndex"/>
        </div>
        <section>
            <ul>
                <router-link v-for="(item,key) in count_list" :key="key" tag="li" :to="'/detail/'+item.schedular_id">
                    <div class="content">
                        <a style="height: 1.18rem;"><img :src="item.pic"/></a>
                        <div class="right">
                            <h4>{{item.date}}</h4>
                            <h4>{{item.schedular_name}}</h4>
                            <p>{{item.city_name}}<i>|</i>{{item.venue_name}}</p>
                            <b>￥{{item.min_price}}<span>起</span></b>
                        </div>
                    </div>
                    <div class="footer">
                        <span><i>{{item.end_time}}</i>结束</span>
                        <span><i>{{item.min_discount}}</i>折起</span>
                    </div>
                </router-link>
                <div :class="flag!=0?'not_show':'nothing'">
                    <img src="https://m.juooo.com/static/img/schedule_empty.82d078c.png"/>
                    <span>暂无演出项目</span>
                </div>
            </ul>
        </section>
    </div>
</template>
<script>
import {discountApi} from "@api/classify"

export default {
    name:"Discount",
    data(){
        return{
            count_list:"",
            cate_id:0,
            flag:"",
            // timer:1300,
            // isshow:""   //是否进入时显示
        }
    },
    created(){
        this.getDiscount(this.cate_id);
    },
    methods:{
        async getDiscount(cate_id){
            let data= await discountApi(cate_id);
            this.count_list=data.data.list;
             this.flag=this.count_list.length;
           
        },
        getCheckIndex(index){
           this.cate_id=index;
          
           this.getDiscount(this.cate_id);
           
        }
    }
}
</script>
<style>
nav{align-items: flex-start;height: .4rem;}
nav a{
        background: none;
        font-size: .14rem;
        padding: 0; 
        display: inline-block;
        width: .55rem;
        line-height: .16rem;
    }
#discount section{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        padding-top: .73rem;
        background: #e6e6e6;
    }
  #discount section ul li{
        padding: 0 .1rem;
        height: 1.7rem;
        margin-bottom: .1rem;
        background: white;
        padding-top: .1rem;
    }
    .none{display: none;}
   #discount section .content{
        display: flex;
        height: 1.3rem;
        border-bottom: .01rem solid #eee;
    }
   #discount section .content .right{
        margin-left: .1rem;
    }
   #discount section .content h4{
        font-size: .14rem;
    }
   #discount section .content h4:nth-of-type(1){
        font-size: .12rem;
        margin-bottom: .1rem;
    }
    #discount section .content h4:nth-of-type(2){
        height: .38rem;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
   #discount section .content img{
        width: .89rem;
    }
   #discount section .content p{
         margin-top: .1rem;
        width: 2rem;
        font-size: .1rem;
        color: #666;
        height: 0.15rem;
        line-height: 0.15rem;
        margin-bottom: 0.1rem;
    }
   #discount section .content p i{
            font-style: normal;
            margin: 0 .05rem;
    }
   #discount section .content b{
        font-weight: normal;
        color: #ff6743;
        font-size: .13rem;
        display: block;
    }
   #discount section .content b span{
        color: #999;
        margin-left: 0.05rem;
    }
   #discount section .footer{
        font-size: .12rem;
        float: right;
        line-height: .4rem;
        color: #999;
    }
   #discount section .footer i{
        font-style: normal;
        color: #ff6743;
        padding: 0 .05rem;
    }
   #discount section .footer span:nth-child(1){
        border-right: .01rem solid #e0e0e0;;
        padding-right: .1rem;
        height: .12rem;
        display: inline-block;
        line-height: .12rem;
    }
    #discount .not_show{display: none;}
    #discount .nothing{font-size: .12rem;color: #999;display: flex;justify-content: center; align-items: center;flex-direction: column;}
    #discount .nothing img{height: .8rem}
</style>