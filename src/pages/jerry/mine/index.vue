<template>
  <div>
      <div id="mine">
        <div class="she">
            <router-link class="iconfont icon-shezhi" tag="i" to="/setup"></router-link>
        </div>
        <div class="userinfo">
            <div class="userinfo_head">
                <div class="userinfo_headimg">
                    <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt="">
                </div>
                <div style="    height: .3rem;
    display: flex;
    flex-direction: column;">
                    <span class="name" style="font-size:.14rem">橙子</span>
                    <span class="userid">ID: 6870944</span>
                </div>
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
                <i class="iconfont icon-icon2-copy"></i>
                <p>我的订单</p>
            </li>
            <li>
                <i class="iconfont icon-piaojia_" ></i>
                <p>我的票夹</p>
            </li>
            <li @click="handleforword()">
                <i class="iconfont icon-wodeqiabao"></i>
                <p>我的卡包</p>
            </li>
        </ul>
        <ul id="twoceng">
            <li>
                <i class="iconfont shink icon-shiming"></i>
                <p>实名购票人</p>
            </li>
            <li>
                <i class="iconfont shink icon-dingwei"></i>
                <p>收货地址</p>
            </li>
            <li>
                <i class="iconfont shink icon-yijianfankui"></i>
                <p>意见反馈</p>
            </li>
            <li>
                <i class="iconfont shink icon-kefubangzhu"></i>
                <p style="color:#ff6743;">客服帮助</p>
            </li>
        </ul>
    </div>
    <TabBar/>
  </div>
</template>

<script>
export default {
    name:"Mine",
    data(){
        return{
        }
    },
}
</script>

<style scoped>
   /* *{margin:0;padding:0;}
    html, body {position: relative;height: 100%;font-size:31.25vw;}
    body {font-size: 14px;display:flex;flex-direction: column;background:#ebebeb;}
    li{list-style: none;} */
    #twoceng .shink{font-size:.2rem;}
    #mine li{list-style: none;}
    #mine{width:100%;height:1.787rem;position:relative;background:url(https://m.juooo.com/static/img/personal_bg_1.f5fc96c.png) 0 ;background-size: 100%;}
    #mine .she{    height: .3rem;
    display: flex;
    width: .3rem;
    margin-left: 2.7rem;}
    #mine .she .iconfont{color:#fff;font-size: .26rem;margin-top: .1rem;}
    #mine .userinfo{width:2.944rem;height:1.318rem;background:#fff;border-radius:0.03rem;margin: .17rem .13rem 0 .13rem;}
    #mine .userinfo .userinfo_head{width: 2.688rem;
    height: 0.434rem;
    padding: 0 0.128rem;
    display: flex;}
    #mine .userinfo .userinfo_head .userinfo_headimg{width:0.495rem;height:0.495rem;margin-top:0.102rem;margin-right:0.08rem;display: flex;}
    #mine .userinfo .userinfo_head .userinfo_headimg img{width:100%;}
    #mine .userinfo .userinfo_head .name{ position: absolute;color: #232323;font-weight: 700;margin-left:0.1rem;margin-top:0.1rem;}
    #mine .userinfo .userinfo_head .userid{color: #999;font-size:0.01rem;margin-left:0.1rem;margin-top:0.3rem;position: absolute}
    #mine .userinfo .vip{width:2.944rem;height:0.219rem;}
    #mine .userinfo .vip p{width:0.578rem;height:0.16rem;padding:0.03rem 0.08rem;float:right;background:#f5dea9;border-radius:1rem  0 0 1rem;color: #454341;
                font-weight: 700;font-size:0.115rem;text-align: center;line-height:0.16rem;}
    #mine .userinfo .situation{width:100%;height:0.66rem;}
    #mine .userinfo .situation ul{display:flex;width:100%;}
    #mine .userinfo .situation ul li{box-sizing: border-box;width:25%;padding:0.128rem 0 0.166rem;height:0.694rem;position:relative;text-align: center;}
    #mine .userinfo .situation ul li p:nth-of-type(1){height:0.2rem;margin-bottom:0.064rem;color: #ff6743;font-size:.17rem;}
    #mine .userinfo .situation ul li p:nth-of-type(2){height:0.136rem;font-size:0.1rem;}
    #mine .userinfo .situation ul li .line{width:0.01rem;height:0.256rem;background: #ebebeb;position:absolute;right:0;bottom:0.16rem;}
    
    
    .card{width:100%;height:0.768rem;box-sizing:border-box;padding:0 0.021rem;margin-top:.03rem;display: flex;}
    .card img{width:100%;}


    .mine{width:100%;height:1.608rem;box-sizing: border-box;padding:0 0.128rem;}
    .mine ul{width:100%;height:0.753rem;margin-bottom:0.102rem;background:#fff;display:flex;} 
    .mine ul li{width:25%;box-sizing: border-box;padding:0.14rem 0 .17rem;display: flex;justify-content: space-around;align-items: center;flex-direction: column;}
    .mine ul li i{font-size:.25rem;}
    .mine ul li p{font-size:.1rem;}
</style>