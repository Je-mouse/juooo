<template>
  <div>
      <header>
        <div class="inner">
            <input type="text"  placeholder="搜索热门演出" v-model="tuijian" ref="cancel"/>
            <div class="search"></div> 
            <v-touch  class="cancel" @tap="handleValue()"></v-touch>
        </div>  
        <a class="out" @click="handleSearchBack()">取消</a> 
    </header>

    <div class="container">
        <div class="main">
            <p>热门搜索</p>
            <ul>
                <li ref="searchdata" v-for="(item,index) in hotShow" :key="index" @click="handleSearchData(index)">{{item}}</li>
            </ul>
        </div>
    </div>
    
    <div class="searchListCall"  v-if="flag">
        <router-link tag="div" :to="'/detail?'+searchList.schedular_id" class="searchListCall_data" v-for="(searchList,ren) in searchList" :key="ren">
            <div class="imginfo">
                <img :src="searchList.pic">
            </div>
            <div class="searchlist_info" v-if="searchList">
                <p class="riqi">{{searchList.show_time_top}}<span style="color:#999;">{{searchList.show_time_bottom}}</span></p>
                <h4 v-html="searchList.name"></h4>
                <p style="color:#999;font-size:.1rem">{{searchList.city_name}} | {{searchList.venue_name}}</p>
                <p class="price">￥{{parseInt(searchList.min_price)}}<span>起</span></p>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import {SearchApi,SearchDataApi} from "@api/show";
import {throttle} from "@utils/cloud"
export default {
    name:"Search",
    data(){
        return{
            flag:false,
            hotShow:[],
            inputValue:"",
            searchList:[],
            tuijian:""
        }
    },
    created(){
        this.handleHotShow();
        this.handledata();
    },
    watch:{
        tuijian(){
            this.handledata()
        }
    },
    methods:{
        async handleHotShow(){
            let data = await SearchApi();
            this.hotShow = data.data
        },
        handleSearchBack(){
            this.$router.back()
        },
        async handleSearchData(index){
            this.tuijian = this.hotShow[index];
            let data = await SearchDataApi(this.tuijian);
            this.searchList = data.data.list;
            this.flag = true ;
        },
        handleValue(){
            this.$refs.cancel.value = "";
            this.flag = false;
        },
        async handledata(){
            throttle(async ()=>{
                let data = await SearchDataApi(this.tuijian);
                this.searchList = data.data.list;
            })
            // console.log(this.searchList)
            if(this.tuijian.length == ! 0){
                this.flag = true;
            }else{
                this.flag = false;
            }
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
html{
    font-size:31.25vw;
}
html,body{
    height: 100%;
}
body{
    display: flex;
    flex-direction: column;
}
a{
    text-decoration: none;
    color: #232323;
}
img{
    border: none;
}
/* 头部 */
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .37rem;
    width: 100%;
    background-color: #fff;
    color: #232323;
    padding: 0 .1rem;
    box-sizing: border-box;
    border-bottom: .01rem solid #ebebeb;
    z-index: 100;
}
header h1{
    font-weight: normal;
    font-size: .15rem;
}
.icon-icon-test{
    height:.2rem;
    width: .2rem;
    font-size: .2rem;
}
header{border: none;}
body{font-size:14px;background:#fff}
li{list-style: none;}
img{vertical-align: top;}
.inner{width: 2.577rem;height: .2559rem;background: #f5f5f5;border-radius: .2rem;border: 1px solid #ebebeb;display: flex;padding: 0 .25rem;
        box-sizing: border-box;position: relative;}
.inner input{border: none;background: transparent;display: inherit;outline: none;}
.inner .search{background: url(https://m.juooo.com/static/img/search_icon.c387af4.png) no-repeat;width: .1706rem;height: .1706rem;position: absolute;
        left: .08rem;top: .035rem;background-size: cover;}
.inner .cancel{background: url(https://m.juooo.com/static/img/cancel.4cc4580.png) no-repeat;width: .1706rem;height: .1706rem;position: absolute;
        right: .08rem; top: .035rem; background-size: cover;}
header .out{font-size: .12rem;color: #666;}


.container{width:100%;height:1.792rem;}
.container .main{width:100%;height:1.792rem;box-sizing: border-box;padding:.222rem .128rem 0;}
.container .main p{width:100%;height:.171rem;font-size:.1rem;color: #666;}
.container .main ul{width:100%;margin-top:.171rem;display:flex;flex-wrap:wrap;}
.container .main ul li{line-height:.299rem;padding:0 .213rem;margin-bottom:.111rem;background-color: #f5f5f5;font-size:.14rem;margin-right:.04rem;}


.searchListCall{width:100%;min-height:5.3rem;position:absolute;top: .37rem;background:#fff;}
.searchListCall_data{width:100%;height:1.24rem;box-sizing: border-box;padding:0 .1rem;display: flex;margin-bottom:.256rem;}
.imginfo img{width:.896rem;height:1.22rem;}
.searchlist_info{width:1.9rem;height:1.24rem;box-sizing: border-box;padding-top:.042rem;margin-left:.128rem;display: flex;flex-direction: column;justify-content: space-around;}
.searchlist_info h4{ width:1.7rem;
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;}
.riqi{font-weight:bold;}
.riqi span{font-weight: normal;margin-left:.1rem;}
.price{color:#ff6743;}
.price span{color:#999;margin-left:.05rem;}
</style>