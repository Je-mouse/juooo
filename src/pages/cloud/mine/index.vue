<template>
  <div>
      <div class="header">
        <div class="she">
            <router-link class="iconfont" tag="i" to="/setup">&#xe6b7;</router-link>
        </div>
        <div class="userinfo">
            <div class="userinfo_head">
                <div class="userinfo_headimg">
                    <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt="">
                </div>
                <span class="name">橙子</span>
                <span class="userid">ID: 6870944</span>
            </div>
            <div class="vip">
                <p>普通会员</p>
            </div>
            <div class="situation">
                <ul>
                    <li>
                        <p>0</p>
                        <p>账户余额</p>
                        <div class="line"></div>
                    </li>
                    <li>
                        <p>10</p>
                        <p>积分</p>
                        <div class="line"></div>
                    </li>
                    <li>
                        <p>0</p>
                        <p>优惠卷</p>
                        <div class="line"></div>
                    </li>
                    <li>
                        <p style="color:#000;font-size:0.1rem;line-height:.2rem;">立即开通</p>
                        <p>橙PLUS卡</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="card">
        <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt="">
    </div>

    <div class="mine">
        <ul>
            <li>
                <i class="iconfont">&#xe62e;</i>
                <p>我的订单</p>
            </li>
            <li>
                <i class="iconfont">&#xe62f;</i>
                <p>我的票夹</p>
            </li>
            <li @click="handleforword()">
                <i class="iconfont">&#xe6e0;</i>
                <p>我的卡包</p>
            </li>
        </ul>
        <ul id="twoceng">
            <li>
                <i class="iconfont shink">&#xe616;</i>
                <p>实名购票人</p>
            </li>
            <li>
                <i class="iconfont shink">&#xe623;</i>
                <p>收货地址</p>
            </li>
            <li>
                <i class="iconfont shink">&#xe619;</i>
                <p>意见反馈</p>
            </li>
            <li>
                <i class="iconfont shink">&#xe751;</i>
                <p style="color:#ff6743;">客服帮助</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import {userApi} from "@api/user";
export default {
    name:"Mine",
    data(){
        return{
            info:[]
        }
    },
    created(){
        this.handleGetInfo();
    },
    methods:{
        async handleGetInfo(){
            let data = await userApi();
            console.log(data)  //拿不到登录之后的接口，拿到的是未登录的接口
        },
        handlejump(){
            this.$router.push("/setup");
        },
        handleforword(){
            this.$router.push("/mycard");
        }
    }
}
</script>

<style scoped>
   *{margin:0;padding:0;}
    html, body {position: relative;height: 100%;font-size:31.25vw;}
    body {font-size: 14px;display:flex;flex-direction: column;background:#ebebeb;}
    li{list-style: none;}
    #twoceng .shink{font-size:.2rem;}

    .header{width:100%;height:1.787rem;position:relative;background:url(https://m.juooo.com/static/img/personal_bg_1.f5fc96c.png) 0 ;background-size: 100%;}
    .header .she{position: absolute;right:.2rem;top:.1rem;}
    .header .she .iconfont{color:#fff;}
    .header .userinfo{width:2.944rem;height:1.318rem;background:#fff;margin:0.49rem 0.128rem 0;border-radius:0.03rem;position: absolute;}
    .header .userinfo .userinfo_head{width:2.688rem;height:0.434rem;padding:0 0.128rem;position: relative;}
    .header .userinfo .userinfo_head .userinfo_headimg{width:0.495rem;height:0.495rem;margin-top:0.102rem;margin-right:0.08rem;position: absolute;top:-0.2rem;}
    .header .userinfo .userinfo_head .userinfo_headimg img{width:100%;}
    .header .userinfo .userinfo_head .name{ position: absolute;color: #232323;font-weight: 700;margin-left:0.6rem;margin-top:0.1rem;}
    .header .userinfo .userinfo_head .userid{color: #999;font-size:0.01rem;margin-left:0.6rem;margin-top:0.3rem;position: absolute}
    .header .userinfo .vip{width:2.944rem;height:0.219rem;}
    .header .userinfo .vip p{width:0.478rem;height:0.16rem;padding:0.03rem 0.08rem;float:right;background:#f5dea9;border-radius:1rem  0 0 1rem;color: #454341;
                font-weight: 700;font-size:0.115rem;text-align: center;line-height:0.16rem;}
    .header .userinfo .situation{width:100%;height:0.66rem;}
    .header .userinfo .situation ul{display:flex;width:100%;}
    .header .userinfo .situation ul li{box-sizing: border-box;width:25%;padding:0.128rem 0 0.166rem;height:0.694rem;position:relative;text-align: center;}
    .header .userinfo .situation ul li p:nth-of-type(1){height:0.2rem;margin-bottom:0.064rem;color: #ff6743;font-size:.17rem;}
    .header .userinfo .situation ul li p:nth-of-type(2){height:0.136rem;font-size:0.1rem;}
    .header .userinfo .situation ul li .line{width:0.01rem;height:0.256rem;background: #ebebeb;position:absolute;right:0;bottom:0.16rem;}
    
    
    .card{width:100%;height:0.768rem;box-sizing:border-box;padding:0 0.021rem;margin-top:.03rem;}
    .card img{width:100%;}


    .mine{width:100%;height:1.608rem;box-sizing: border-box;padding:0 0.128rem;}
    .mine ul{width:100%;height:0.753rem;margin-bottom:0.102rem;background:#fff;display:flex;} 
    .mine ul li{width:25%;box-sizing: border-box;padding:0.14rem 0 .17rem;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
    .mine ul li i{font-size:.3rem;}
    .mine ul li p{font-size:.1rem;}
</style>