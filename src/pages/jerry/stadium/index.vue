<template>
    <div id="stadium">
        <Header/>
        <section>
            <div class="imag">
                <img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwkofmAL-_QAABmWPaQR80742.jpg"/>
            </div>
            <div class="main">
                <ul>
                    <li>
                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-show.png "/>
                        <span>演出</span>
                    </li>
                    <li>
                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-calendar.png "/>
                        <span>日历</span>
                    </li>
                    <li>
                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-theater.png "/>
                        <span>剧院</span>
                    </li>
                    <li>
                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-offer.png "/>
                        <span>特惠</span>
                    </li>
                </ul>
            </div>
            <div class="hot">
                <h3>热门演出</h3>
                <div class="content">
                    <ul>
                        <li>
                            <img src="https://image.juooo.com//group1/M00/03/A4/rAoKNV1bbiCAByPWAACd4p459zo654.jpg"/>
                            <div class="right">
                                <h5>均反馈热量高利润</h5>
                                <h6>均反馈热量高利润</h6>
                                <h6>kdemwld</h6>
                                <span>￥809</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {stadiumApi} from "@api/classify"
export default {
    data(){
        return{
            data:""
        }
    },
    created(){
        this.getStadium();
    },
    methods:{
        async getStadium(){
            let data=await stadiumApi();
            this.data=data;
        }
    }
}
</script>

<style>
    #stadium section{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        padding-top: .38rem;
        overflow: auto;
    }
    #stadium .imag{height: 1.3rem;}
    .imag img{height: 100%;width: 100%}
    #stadium .main{
        height: .75rem;
        color: #666;
        font-size: .12rem;
        margin-top: .23rem;
        padding: 0 .14rem;
    }
    #stadium .main ul{
        display: flex;
        justify-content: space-around
    }
    #stadium .main ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: .6rem;
        text-align: center;
    }
    #stadium .main ul li img{width: .35rem;}
    #stadium .main ul li span{transform: scale(0.8);}

    #stadium .hot h3{font-size: .15rem;line-height: .35rem;padding-left: .1rem;}
    #stadium .hot ul{display: flex;flex-direction: column;padding: .1rem}
    #stadium .hot ul li{
        display: flex;
        font-size: .16rem
    }
    #stadium .hot ul li img{width: .8rem;margin-right: .1rem;}
    #stadium .hot ul li .right{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
    }
    #stadium .hot ul li .right h5{
        height: .4rem;
        font-size: .12rem;
        color: #666;
        font-weight: normal;
        width: 100%;
    }
    #stadium .hot ul li .right h6{
        color: #999;
        font-size: .12rem;
        transform: scaleY(.9);
        font-weight: normal;
    }
    #stadium .hot ul li .right span{
        color: #ff7919;
        font-size: .12rem;
    }
</style>