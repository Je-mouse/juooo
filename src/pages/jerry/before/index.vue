<template>
    <div id="before">
        <div class="imag">
            <img :src="list.pic"/>
        </div>
        <div class="image"></div>
        <div class="top">
            <Header title="演出详情" icon2="1">
                <template>
                    <div slot="iconfont">
                        <a href="#" class="iconfont icon-fenxiang"></a>
                        <a href="#" class="iconfont icon-zhuye"></a>
                    </div>
                </template>
            </Header>
            <div class="content">
                <div class="page">
                    <img :src="list.pic" />
                </div>
                <div class="right">
                    <p>{{list.show_name}}</p>
                    <h5>{{list.total_city}}个城市<i>|</i>{{list.total_show}}场演出</h5>
                    <!-- <span>{{fe_time}}</span> -->
                </div>
            </div>
        </div>
        <section>
            <router-link class="list_item" v-for="(n,i) in tour_list" :key="i" tag="div" :to="'/detail/'+n.id">
                <p>{{time[i]}}</p>
                <div class="date">
                    <h2>{{n.schedular_name}}</h2>
                    <h3>{{n.city_name}}<i>|</i>{{n.venue_name}}</h3>
                    <span><strong>￥{{n.low_price}}</strong>起</span>
                </div>
            </router-link>
        </section>
        <router-view></router-view>
    </div>
</template>
<script>
import {BeforeApi} from "@api/classify"
export default {
    name:"before",
    data(){
        return{
            list:"",
            tour_list:[],
            time:[]
        }
    },
    created(){
        this.getBeforeList(this.$route.params.show_id);
    },
    methods:{
        async getBeforeList(id){
            let data = await BeforeApi(id);
            this.list=data.data;
            let tour_list=data.data.tour_list;

            for(var k in tour_list){
                this.tour_list.push(tour_list[k]);
            }
            this.getTime();
        },
        getTime(){
            for(var n in this.tour_list){
              this.time.push(new Date(parseInt(this.tour_list[n].show_time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')) ; 
            }
        }
    }
}
</script>
<style >
/*头部*/
    h2{font-size: .16rem;}
   #before .image{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1.8559rem;
        background-color: rgba(0,0,0,.24);
        overflow: hidden;
    }
   #before .imag{
        height: 1.8559rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        overflow: hidden;
    }
   #before .imag img{    
        width: 100%;
        height: 100%;
        background-color: #b8abab;
        border: none;
        border-color: transparent;
        vertical-align: middle;
        filter: blur(.1rem);
    }

   #before .top{    
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1.8559rem;
        overflow: hidden;
    }
   #before .top #header{background: transparent;color: white;border-bottom: none;}
   #before .top #header h1{font-weight: bold;}
   #before .top #header a{color: white;    display: block;width: .5rem;}
   #before .top #header div{height: .37rem; display: flex;justify-content: space-around;align-items: center;width: .5rem;}
   #before .top #header div a:nth-child(2){font-size: .2rem;}

   #before .top .content{display: flex;height: 1.248rem;padding: 0 .125rem;}
   #before .top .content .page{width: .94rem;margin-top: .09rem;}
   #before .top .content .page img{width: .94rem;}
   #before .top .content .right{
        margin-top: .192rem;
        margin-left: .1237rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: .14rem;
        color: white;
    }
   #before .top .content .right p{font-weight: bold;font-size: .145rem;}
   #before .top .content .right h5{font-weight: normal;font-size: .12rem;color: hsla(0,0%,100%,.7);}
   #before i{font-style: normal;margin: 0 .05rem}
   #before .top .content .right span{font-size: .14rem;font-weight: bold;margin-left: -.05rem;}

   #before section{
       background-color: #f5f5f5;
       padding-top: 1.85rem;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
   #before section .list_item{display: flex;width: 2.94rem;height: .9rem;background: #f5f5f5;margin-top: .1rem;}
   #before section .list_item p{
        border-radius: .05rem;
        margin-right:.05rem;
        font-size: .12rem;
        width: .9rem;
        height: .9rem;
        background: white;
        border-radius: .1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .1rem;
        box-sizing: border-box;
    }
   #before section .list_item .date{
        width: 1.96rem;
        height: .9rem;
        background: white;
        border-radius: .05rem;
        padding: .1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
   #before section .list_item .date h2{font-size: .13rem;color: black;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
   #before section .list_item .date h3{
       font-size: .12rem;
       color: #666;
       font-weight: normal;
       overflow: hidden;
       width: 1.7rem;
       text-overflow: ellipsis;
       white-space: nowrap;
    }   
    #before section .list_item .date h3 i{margin: 0 .1rem}
   #before section .list_item .date span{font-size: .13rem;color: black;}
   #before section .list_item .date span strong{color: #ff6743;margin-right: .05rem;}
</style>