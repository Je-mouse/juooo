<template>
    <div id="detail">
        <Loading v-if="isshow==true?'false':''"/>
        <div v-show="isshow">
            <div class="imag" >
                <img :src="static_data.pic"/>
            </div>
            <div class="image"></div>
            <div class="top" >
                <Header title="演出详情" icon2="1">
                    <template>
                        <div slot="iconfont">
                            <a href="#" class="iconfont icon-fenxiang"></a>
                            <a href="#" class="iconfont icon-zhuye"></a>
                        </div>
                    </template>
                </Header>
                <div class="content" >
                    <div class="page">
                        <img :src="static_data.pic" />
                    </div>
                    <div class="right">
                        <p>{{static_data.show_name}}</p>
                        <span>￥{{static_data.price_range}}</span>
                    </div>
                </div>
            </div>
            <section >
                <div class="one">
                    <a>{{show_time}}<i class="iconfont icon-xiangyou"></i></a>
                    <div class="addr">
                        <div>
                            <h3>{{city_name}}|{{venue_name}}</h3>
                            <span>{{venue_address}}</span>
                        </div>
                        <p><i class="iconfont icon-dingwei"></i></p>
                    </div>
                </div>
                <div class="card">
                <a><img :src="static_data.pic"/></a> 
                </div>
                <div class="two">
                    <div class="list">
                        <span>VIP+：</span>
                        <div class="vip">
                            V+会员专享活动，指定票价
                            <i class="credit">{{discount}}</i>
                            折
                        </div>
                        <a class="iconfont icon-icongengduo"></a>
                    </div>
                    <div class="list">
                        <span>优惠：</span>
                        <div class="cut">
                            <i class="cut1">折扣</i>
                            <i class="cut2">满满满400减120</i>
                        </div>
                        <a class="iconfont icon-xiangyou"></a>
                    </div>
                    <div class="list">
                        <span>入场：</span>
                        <div class="come">{{desc}}</div>
                    </div>
                    <div class="list">
                        <span>支持：</span>
                        <div class="agree">
                            <a v-for="(item,key) in support" :key="key">{{item}}</a>
                        </div>
                    </div>
                </div>
                <div class="three">
                    <div class="head">
                        <h2>巡演城市</h2>
                        <span><i>{{city.length}}</i>场<a class="iconfont icon-icongengduo"></a></span>
                    </div>
                    <div class="main">
                        <ul>
                            <li v-for="(item,key) in city" :key="key">
                                <h5>{{item.city_name}}</h5>
                                <p>{{item.show_time}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <article>
                    <h2>演出介绍</h2>
                    <div class="passage">
                        <div><img :src="share_pic"/></div>
                        <p>&nbsp;</p>
                        <p><strong>故事简介</strong></p>
                        <p>{{share_data}}</p>
                    </div>
                </article>
                <div class="tip">
                <aside>
                    <h2>温馨提示</h2>
                    <a class="iconfont icon-icongengduo"></a>
                </aside>
                <ol>
                    <li><div></div>配送说明</li>
                    <li><div></div>订票说明</li>
                    <li><div></div>确认订单</li>
                    <li><div></div>购票提醒</li>
                </ol>
                </div>
                <div class="other">
                    <h2>相关推荐</h2>
                    <dl>
                        <!-- <a href=""> -->
                        <dd v-for="(item,key) in show_data" :key="key">
                            <div><img :src="item.pic"/></div>
                            <hgroup>
                                <h5>{{item.show_time_top}}</h5>
                                <h6><p>{{item.name}}</p></h6>
                                <span>{{item.city_name}}<i>|</i>{{item.venue_name}}</span>
                                <span><strong>￥{{item.min_price}}</strong>起</span>
                            </hgroup> 
                        </dd>
                    </dl>
                </div>    
            </section>
            <footer >
                <div class="tel">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC"/>
                    <span>客服</span>
                </div>
                <input type="button" value="立即购买"/>
            </footer>            
        </div>

    </div>
</template>
<script>
import Loading from "../../../lib/loading/index.vue"
import {detailApi} from "@api/classify.js"
import {detailCutApi} from "@api/classify.js"
import {detailCityApi} from "@api/classify.js"
import {classifyApi} from "@api/classify.js"

export default {
    name:"Detail",
    components:{
        Loading
    },
    data(){
        return{
            static_data:"",//基本数据
            share_data:"",//介绍数据
            share_pic:"", //介绍图片
            support:"", //支持
            city_name:"",   //城市名
            city_id:"",     //城市ID
            venue_name:"",  //场馆
            venue_address:"",   //地址
            city:"",        //演出的城市
            desc:"",           //入场规则
            discount:"",    //折扣---------->未获取
            show_time:"",       //演出时间
            show_data:"" ,   //推荐演出
            full_path:"",    //记录哪个路由进入的
            isshow:"" ,  //是否进入时显示
            timer:1300
        }
    },
    created(from){
        clearTimeout(this.timer);  //清除延迟执行 
        
        this.timer = setTimeout(()=>{   //设置延迟执行
            this.isshow=true;
        },1000)
        this.getDetailGood(this.$route.params.id);
        this.getClassifygoods();
    },
    methods:{
        async getDetailGood(goodsId){
            let data =await detailApi(goodsId);
            // console.log(data);
            if(data.data.item_list.length){
                this.show_time=data.data.item_list[0].project_time;
            }
            
            // this.share_list=data.data.share_data;
            this.static_data=data.data.static_data;//获取基本数据
            this.share_data=data.data.share_data.share_desc;//获取介绍数据
            this.share_pic=data.data.share_data.share_pic;//获取介绍数据
            this.support=data.data.static_data.support.list;//获取支持数据
            // console.log(this.support);

            let show_id=this.static_data.show_id;   //演出ID
            let venue_id=this.static_data.venue.venue_id;   //地点ID

            this.city_name=this.static_data.city.city_name; //城市名
            this.city_id=this.static_data.city.city_id; //城市id
            this.venue_name=this.static_data.venue.venue_name;  //演出地点名
            this.venue_address=this.static_data.venue.venue_address;     //演出地址
            this.desc=this.static_data.tips.desc;

            // this.getDetailCut(this.ticket_list[0].ticke_id);
            this.getDetailCity(show_id,venue_id);
        },
        async getDetailCut(id){//获取优惠
            let data = await detailCutApi(id);
        },
        async getDetailCity(show_id,venue_id){//获取城市
            let data =await detailCityApi(show_id,venue_id)
            this.city=data.data.tour_list;
        },
        async getClassifygoods(){
            let data= await classifyApi(this.static_data.cate_parent_id,this.city_id);
            this.show_data=data.data.list.slice(2);
        },
        
    }
}
</script>
<style>
/*头部*/
    h2{font-size: .16rem;}
   #detail .image{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1.8559rem;
        background-color: rgba(0,0,0,.24);
        overflow: hidden;
    }
   #detail .imag{
        height: 1.8559rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        overflow: hidden;
    }
   #detail .imag img{    
        width: 100%;
        height: 100%;
        background-color: #b8abab;
        border: none;
        border-color: transparent;
        vertical-align: middle;
        filter: blur(.1rem);
    }

   #detail .top{    
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1.8559rem;
        overflow: hidden;
    }
   #detail .top #header{background: transparent;color: white;border-bottom: none;}
   #detail .top #header h1{font-weight: bold;}
   #detail .top #header a{color: white;    display: block;width: .5rem;}
   #detail .top #header div{height: .37rem; display: flex;justify-content: space-around;align-items: center;width: .5rem;}
   #detail .top #header div a:nth-child(2){font-size: .2rem;}

   #detail .top .content{display: flex;height: 1.248rem;padding: 0 .125rem;}
   #detail .top .content .page{width: .94rem;margin-top: .09rem;}
   #detail .top .content .page img{width: .94rem;}
   #detail .top .content .right{ margin-top: .192rem;
            margin-left: .1237rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: .14rem;
            color: white;
        }
   #detail .top .content .right p{font-weight: bold;font-size: .145rem;}
   #detail .top .content .right span{font-size: .14rem;font-weight: bold;margin-left: -.05rem;}
    /*内容*/
   #detail section{padding-top: 1.858rem;background-color: #f5f5f5;padding-bottom: .4692rem;}
   #detail section .one{
        height: 1.0166rem;
        color: black;
        padding: 0 .128rem .1834rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        background: white;
    }
    #detail section a{font-size: .1536rem;font-weight: bold;}
    #detail section a i{font-size: .08rem;}
    #detail .one .addr{display: flex;font-size: .128rem;justify-content: space-between;}
    #detail .one .addr p{height: .3413rem;width: .3413rem;border-radius: 50%;line-height: .3413rem;text-align: center;background: #ededed;}
    #detail .one .addr span{font-size: .12rem;height: .15rem;overflow: hidden;display: block;width: 2.5rem;white-space: nowrap;text-overflow: ellipsis;}
    #detail .one .addr h3{font-size:.14rem}

   #detail section .card{height: .3753rem;display: flex;justify-content: center;align-items: center;padding: 0 .1208rem .1408rem;margin-bottom: .1rem;background: white;}
    .card a{width: 2.944rem;height: .3753rem;}
    .card a img{height: 100%;height: 100%;}

   #detail section .two{margin: .1rem 0;display: flex;flex-direction: column;padding: 0 .1rem;background:white;color: #999;font-size: .12rem;}
    .two i{font-style: normal;}
    .two .list{display: flex;height: .409rem;box-sizing: border-box;align-items: center;}
    .two span{width: .38rem;display: block;}
    .two .first a{font-weight: normal;}
    .quan{display: flex;color: white;width: 2.371rem;align-items: center;}
    .quan i{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAuCAMAAAC27sMlAAAAM1BMVEUAAAD/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0NvQ9IYAAAAEHRSTlMABg320G4urMfr6n15G8urlF+gTgAAAK9JREFUaN7t2UsOwyAMRdFnCIR86/2vtkmlKkzC/Eo+K7gDDEiWZKVlh8itmC7H5CjTIRms+ao2Fccpao7ThJnBR5YDRfSLiI7ogYiO6IGIvsnqtjjIslfTJc2OMSf9YapnPdLqCGtSZ3eETb3qCFU9cwRTLzmC8Y8HcRCRVx7wcSE945/0KyZ+mBwool9EdEQPRHRED0T0jbm+QC6KkCs55PITuWaWrJyYacxnMekL/575apnVEBYAAAAASUVORK5CYII=) no-repeat;
       
        padding: .01rem;
        background-size: .76rem .203rem;
        height: .203rem;
        line-height: .203rem;
        margin-right: .1rem;
        }
    .two .vip{font-size: .12rem;color: #222;width: 2.371rem;align-items: center;}
    .vip .credit{color: #ff6743;}
    /*  */
    .two .cut{display: flex;width: 2.371rem;align-items: center;font-size: .12rem;color: #222;}
    .cut1{transform: scale(0.8);color: #ff6743;font-size: .12rem;border: .01rem solid #ff6743;line-height: .14rem;padding: .01rem;border-radius: .04rem;}
     /*  */
    .two .come{font-size: .12rem;color: #222;white-space: nowrap; width: 2.4rem;overflow: hidden;text-overflow: ellipsis;}
     /*  */
    .two .agree{display: flex;}
    #detail .agree a{display: block;padding: 0 .1rem;border-right: 1px solid #999;height: .12rem;color: #999;font-weight: normal;font-size: .12rem;line-height: .12rem;}
    #detail .agree a:last-child{border: none;}

    #detail section .three{height: 1.175rem;font-size: .12rem;padding: .1024rem;background: white;}
    .three .head{display: flex;justify-content: space-between;padding: 0 .05rem 0 0;height: .4692rem;}
        
    .three .head i{ color: #ff6743;font-style: normal;}
    .three .head a{margin-left: .1rem;}
    .three .main{height: .6rem;overflow: hidden;}
    .three .main ul{display: flex;justify-content: space-between;overflow-x: scroll;height: .8rem;}
    .three .main ul li{
        height:.511rem ;
        width: .768rem;
        color: #ebebeb;
        border:.01rem solid #ebebeb;
        border-radius: .1rem;
        display: flex;
        flex-direction: column;
        font-size: .12rem;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        margin:0 .2rem;
    }
    .main li h5{color: #232323;white-space: nowrap;margin: 0 .15rem;}
    .main li p{color: #666;}
    
   #detail article{margin-top: .1rem;padding: 0 .128rem;background: white;}
   #detail article h2{height: .3rem;line-height: .4rem;}
   #detail.passage div{width: 2.944rem;height: 1.959rem;} 
    .passage div img{height: 100%;width: 100%;}
    .passage p{text-align: center;white-space: pre-wrap;font-size: .12rem;line-height: .2rem;}
    .passage p strong{font-size: .18rem;}

    .tip{background: white;height: .768rem;margin-top: .1rem;padding: .17rem .128rem 0;display: flex;flex-direction: column;}
    .tip aside{display: flex;justify-content: space-between;}
    .tip ol{display: flex;justify-content: space-between;margin-top: .1536rem;}
    ol li{font-size: .12rem;color: #999;list-style: none;display: flex;align-items: center;}
    ol li div{height: .03rem;width: .03rem;background: #999;margin-right: .1rem;border-radius: 50%;}

    .other{background: white;margin-top: .1rem;padding: .1877rem .128rem .128rem;}
    .other dl dd{display: flex;font-weight: normal;margin-top: .2rem;}
    .other dl dd div{height: 1.2288rem;width: .8959rem;}
    .other dl dd div img{height: 100%;}
    .other hgroup{margin-left: .1rem;display: flex;justify-content: space-around;flex-direction: column;}
    .other hgroup h5{font-size: .14rem;}
    .other hgroup h6{height: .3925rem;font-size: .14rem;}
    .other hgroup p{overflow:hidden;font-size: .14rem;color: #232323;line-height: .19rem;height: .38rem;display: -webkit-box;-webkit-box-orient: vertical; -webkit-line-clamp: 2;}
    .other hgroup span{font-size: .12rem;color: #666;}
    .other hgroup strong{color: #ff6743;font-size: .14rem;}

    #detail footer{
        width: 100%;
        height: .4692rem;
        background: white;
        position: fixed;
        left: 0;bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .05rem;
        box-sizing: border-box;
    }
   #detail footer .tel{align-items: center;display: flex;flex-direction: column;font-size: .12rem;color: #666;}
    .tel img{height: .176rem;    width: .176rem;}
   #detail footer input{border: none;height: .3413rem;width: 2.7448rem;text-align: center;line-height: .3443rem;color: white;border-radius: .2rem;    background-image: linear-gradient(50deg,#ff9a34,#ff4d4a);}
</style>