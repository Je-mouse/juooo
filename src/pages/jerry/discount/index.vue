<template>
    <div id="discount">
        <div>
            <Header title="专享折扣"/>
            <Nav font="iconfont icon-shaixuan" family="筛选"/>
        </div>
        <section>
            <ul>
                <li>
                    <div class="content">
                        <a style="height: 1.18rem;"><img src="https://image.juooo.com/group1/M00/02/FE/rAoKmV1fNxaAPbsCAAB_-x8YGi8341.jpg"/></a>
                        <div class="right">
                            <h4>11/13-11/17</h4>
                            <h4>音乐剧史诗巨作《贝隆夫人》Evita-杭州站</h4>
                            <p>杭州<i>|</i>杭州大剧院（歌剧院）</p>
                            <b>￥180<span>起</span></b>
                        </div>
                    </div>
                    <div class="footer">
                        <span><i>11/17 19:30</i>结束</span>
                        <span><i>9.5</i>折起</span>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <a style="height: 1.18rem;"><img src="https://image.juooo.com/group1/M00/02/FE/rAoKmV1fNxaAPbsCAAB_-x8YGi8341.jpg"/></a>
                        <div class="right">
                            <h4>11/13-11/17</h4>
                            <h4>音乐剧史诗巨作《贝隆夫人》Evita-杭州站</h4>
                            <p>杭州<i>|</i>杭州大剧院（歌剧院）</p>
                            <b>￥180<span>起</span></b>
                        </div>
                    </div>
                    <div class="footer">
                        <span><i>11/17 19:30</i>结束</span>
                        <span><i>9.5</i>折起</span>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <a style="height: 1.18rem;"><img src="https://image.juooo.com/group1/M00/02/FE/rAoKmV1fNxaAPbsCAAB_-x8YGi8341.jpg"/></a>
                        <div class="right">
                            <h4>11/13-11/17</h4>
                            <h4>音乐剧史诗巨作《贝隆夫人》Evita-杭州站</h4>
                            <p>杭州<i>|</i>杭州大剧院（歌剧院）</p>
                            <b>￥180<span>起</span></b>
                        </div>
                    </div>
                    <div class="footer">
                        <span><i>11/17 19:30</i>结束</span>
                        <span><i>9.5</i>折起</span>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <a style="height: 1.18rem;"><img src="https://image.juooo.com/group1/M00/02/FE/rAoKmV1fNxaAPbsCAAB_-x8YGi8341.jpg"/></a>
                        <div class="right">
                            <h4>11/13-11/17</h4>
                            <h4>音乐剧史诗巨作《贝隆夫人》Evita-杭州站</h4>
                            <p>杭州<i>|</i>杭州大剧院（歌剧院）</p>
                            <b>￥180<span>起</span></b>
                        </div>
                    </div>
                    <div class="footer">
                        <span><i>11/17 19:30</i>结束</span>
                        <span><i>9.5</i>折起</span>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <a style="height: 1.18rem;"><img src="https://image.juooo.com/group1/M00/02/FE/rAoKmV1fNxaAPbsCAAB_-x8YGi8341.jpg"/></a>
                        <div class="right">
                            <h4>11/13-11/17</h4>
                            <h4>音乐剧史诗巨作《贝隆夫人》Evita-杭州站</h4>
                            <p>杭州<i>|</i>杭州大剧院（歌剧院）</p>
                            <b>￥180<span>起</span></b>
                        </div>
                    </div>
                    <div class="footer">
                        <span><i>11/17 19:30</i>结束</span>
                        <span><i>9.5</i>折起</span>
                    </div>
                </li>
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

        }
    },
    created(){
        this.getDiscount();
    },
    methods:{
        async getDiscount(){
            let data= await discountApi()
            console.log(data);
        }
    }
}
</script>
<style>
nav{align-items: flex-start}
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
</style>