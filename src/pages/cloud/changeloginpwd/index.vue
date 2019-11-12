<template>
  <div>
      <header>
        <a href="#" class="iconfont icon-iconfanhui" @click="handleBack()">&lt;</a>
        <h1>修改登录密码</h1>
        <i></i>
    </header>

    <div class="tips">
        为保障您的账户安全，修改前请先验证原密码
    </div>

    <div class="tab-wrap">
        <div class="tab-panel">
            <i class="iconfont">&#xe6be;</i>
            <input type="password" placeholder="输入当前密码">
        </div>
        <div class="tab-next">
            <button @click="handleNextpwd()">下一步</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Changeloginpwd",
    methods:{
        handleBack(){
            this.$router.back()
        },
        handleNextpwd(){
            this.$router.push("/changeloginpwdstate")
        }
    }
}
</script>

<style>
*{margin:0;padding:0;}
html{font-size:31.25vw;}
body{font-size:14px;display:flex;flex-direction: column;background:#ebebeb;}
html, body {height: 100%;}
li{list-style: none;}


header{display: flex;justify-content: space-between;align-items: center;height: .37rem;width: 100%;
    background-color: #fff;color: #232323;padding: 0 .1rem;box-sizing: border-box;border-bottom: .01rem solid #ebebeb;z-index: 100;}
header h1{font-weight: normal;font-size: .15rem;}
.icon-icon-test{ height:.2rem;width: .2rem;font-size: .2rem;}

.tips{width:100%;height:.392rem;box-sizing: border-box;padding:.128rem;color: #999;font-size:.1rem;}

.tab-wrap{width:100%;height:.994rem;}
.tab-wrap .tab-panel{width:100%;height:.388rem;background:#fff;}
.tab-wrap .tab-panel .iconfont{color:#999;font-size:.14rem;line-height: .388rem;margin:0 .1rem;}
.tab-wrap .tab-panel input{width:2.684rem;height:.35rem;border:none;outline: none;font-size:.1rem;}
.tab-wrap .tab-next{width:2.936rem;height:.367rem;margin:.239rem .128rem 0 .136rem;}
.tab-wrap .tab-next button{width:100%;height:100%;box-sizing: border-box;padding:0 .107rem;color: #fff;background-color: #ff7919;border:0;outline: none;}
</style>