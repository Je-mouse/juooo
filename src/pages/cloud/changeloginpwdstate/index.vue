<template>
  <div>
      <header>
        <a href="#" class="iconfont icon-iconfanhui" @click="handleBack()">&lt;</a>
        <h1>修改登录密码</h1>
        <i></i>
    </header>

    <div class="tab-wrap">
        <div class="tab-panel">
            <i class="iconfont">&#xe6be;</i>
            <input type="password" placeholder="新密码长度6~16位，不支持特殊字符">
        </div>
        <div class="tab-next">
            <button @click="handleToMine()">确定</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"changeloginpwdstate",
    methods:{
        handleBack(){
          this.$router.back()
        },
        handleToMine(){
          this.$router.push("/mine")
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


.tab-wrap{width:100%;height:.994rem;margin-top:.1rem;}
.tab-wrap .tab-panel{width:100%;height:.388rem;background:#fff;}
.tab-wrap .tab-panel .iconfont{color:#999;font-size:.14rem;line-height: .388rem;margin:0 .1rem;}
.tab-wrap .tab-panel input{width:2.684rem;height:.35rem;border:none;outline: none;font-size:.1rem;}
.tab-wrap .tab-next{width:2.936rem;height:.367rem;margin:.239rem .128rem 0 .136rem;}
.tab-wrap .tab-next button{width:100%;height:100%;box-sizing: border-box;padding:0 .107rem;color: #fff;background-color: #ff7919;border:0;outline: none;}
</style>