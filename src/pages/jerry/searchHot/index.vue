<template>
    <div id="searchHot">
        <header>
            <div class="inner">
                <input type="text" placeholder="搜索热门演出"/>
                <div class="search"></div> 
                <div class="cancel"></div>
            </div>  
            <router-link class="out" tag="a" to="/perform">取消</router-link> 
        </header>
        <div class="other">
            <dl>
                <dd v-for="(item,i) in list" :key="i">
                    <router-link :to="'/detail/'+item.schedular_id" tag="div"><img :src="item.pic"/></router-link>
                    <hgroup>
                        <h5>{{item.show_time_top}}</h5>
                        <h6><p v-html="item.name"></p></h6>
                        <span>{{item.city_name}}<i>|</i>{{item.venue_name}}</span>
                        <span><strong>￥{{item.min_price}}</strong>起</span>
                    </hgroup> 
                </dd>
            </dl>
        </div> 
        <router-view></router-view>   
    </div>
</template>
<script>
import {hotSearchApi} from "@api/classify"
export default {
    name:"searchHot",
    data(){
        return{
            list:""
        }
    },
    created(){
        let params=this.$route.params;
        this.getSearchList(params);
    },
    methods:{
        async getSearchList(params){
            let data= await hotSearchApi(params);
            this.list=data.data.list;
            console.log(this.list);
        }
    },
}
</script>
<style>
    header{    
        border: none;
        position: fixed;
        height: .37rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        background: white;
        padding: 0 .1rem;
        box-sizing: border-box;
        }
    .inner{
        width: 2.577rem;
        height: .2559rem;
        background: #f5f5f5;
        border-radius: .2rem;
        border: 1px solid #ebebeb;
        display: flex;
        padding: 0 .25rem;
        box-sizing: border-box;
        position: relative;
    }
    .inner input{
        border: none;
        background: transparent;
        display: inherit;
        outline: none;
    }
    .inner .search{
        background: url(https://m.juooo.com/static/img/search_icon.c387af4.png) no-repeat;
        width: .1706rem;
        height: .1706rem;
        position: absolute;
        left: .08rem;
        top: .035rem;
        background-size: cover;
    }
    .inner .cancel{
        background: url(https://m.juooo.com/static/img/cancel.4cc4580.png) no-repeat;
        width: .1706rem;
        height: .1706rem;
        position: absolute;
        right: .08rem;
        top: .035rem;
        background-size: cover;
    }
    header .out{font-size: .12rem;color: #666;}

    .other{background: white;padding: 0 .128rem;padding-top: .37rem;}
    .other dl{font-weight: normal;margin-top: .1rem;display: block;}
    .other dl dd{display: flex;margin-bottom: .2rem}
    .other dl dd div{height: 1.2288rem;width: .8959rem;}
    .other dl dd div img{height: 100%;}
    .other hgroup{margin-left: .1rem;display: flex;justify-content: space-around;flex-direction: column;}
    .other hgroup h5{font-size: .12rem;}
    .other hgroup h6{height: .3925rem;font-size: .14rem;}
    .other hgroup p{
        font-size: .14rem;
        color: #232323;
        line-height: .19rem;
        height: .38rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
    }
    .other hgroup span i{font-style: normal;margin: 0 .1rem;}
    .other hgroup span{font-size: .12rem;color: #666;}
    .other hgroup strong{color: #ff6743;font-size: .14rem;}
    .other hgroup h6 .c_ff6 {
        color: #ff6743!important;
        font-size: .14rem;
    }
</style>