<template>
  <div class="mycards">
      <header>
        <a href="#" class="iconfont icon-iconfanhui" @click="handleBack()">&lt;</a>
        <h1>我的卡包</h1>
        <a href="#" class="iconfont">&#xe604;</a>
    </header>

    <div class="container">
        <div class="empty">
            <p> 暂无可用卡 </p>
        </div>
    </div>

    <footer>
        <div class="bottom">
            <div class="bottom_tit">购买新卡</div>
            <div class="bottom_border"></div>
            <div class="bottom_tit">绑定新卡</div>
            <div class="bottom_border"></div>
            <div class="bottom_tit">我的卡包</div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name:"Mycard",
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
*{margin:0;padding:0;}

html,body{position:relative;height:100%;background:#fff;}
html{font-size:31.25vw;}
body{font-size:14px;display:flex;flex-direction: column;}
li{list-style:none;}

.mycards{height:100%;position:relative;}
.container{position:absolute;left:0;top:0;right: 0;bottom:0;padding-bottom:.3753rem;}
.container .empty{width:100%;height:1.3rem;position: relative;;margin-top:1.536rem;text-align: center;background:url(https://m.juooo.com/static/img/no-card-icon.fb286f5.png) no-repeat center;
                background-size:1rem;}
.container .empty p{width:100%;height:.168rem;color: #999;font-size:.1rem;position:absolute;left:0;bottom:0;}


footer{position: fixed;left: 0;right: 0;bottom: 0;height: 0.3753rem;border-top: 1px solid #ebebeb;background: pink;}
.bottom{display: flex; background: #fefefe; align-items: center;}
.bottom_border{ width: 1px;height: 0.148rem;background: #ccc;margin: auto 0;}
.bottom_tit{line-height: .38rem;font-size: .13rem;text-align: center;color: #1a1a1a;flex: 1;}
</style>