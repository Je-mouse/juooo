<template>
  <div>
      <header>
        <a href="#" class="iconfont icon-iconfanhui" @click="handlejump()">&lt;</a>
        <h1>账户设置</h1>
        <a href="#" class="iconfont">&#xe604;</a>
    </header>

    <div class="head">
        <div class="headimg box">
            <span>头像</span>
            <img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt="">
        </div>
        <div class="headname topline">
            <span class="left">昵称</span>
        </div>
    </div>

    <div class="container">
        <div class="tel box">
            <span class="left">手机号</span>
            <span class="right">182****4461</span>
        </div>
        <div class="tong box topline">
            <span class="left">邮箱</span>
        </div>
        <div class="tong box topline">
            <span class="left">生日信息</span>
            <span class="right yici">(只允许设置一次)</span>
            <span class="right">2019-11-06</span>
        </div>
        <div class="tong box topline" @click="handleChangeloginpwd()">
            <span class="left">登录密码</span>
            <span class="right">修改 ></span>
        </div>
        <div class="tong box topline">
            <span class="left">支付密码</span>
            <span class="right">设置 ></span>
        </div>
        <div class="tong box topline">
            <span class="left">实名认证</span>
            <span class="right">未认证 ></span>
        </div>
        <div class="tong box topline">
            <span class="left">用户协议</span>
            <span class="right">用户协议 ></span>
        </div>
    </div>

    <div class="btn_bottom">
        <button>退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Setup",
    methods:{
        handlejump(){
            this.$router.back();
        },
        handleChangeloginpwd(){
            this.$router.push("/changeloginpwd")
        }
    }
}
</script>

<style>
*{margin:0;padding:0;}
html,body{position:relative;height:100%;}
html{font-size:31.25vw;}
body{font-size:14px;display:flex;flex-direction: column;background:#ebebeb;}
li{list-style:none;}


header{display: flex;justify-content: space-between;align-items: center;height: .37rem;width: 100%;
    background-color: #fff;color: #232323;padding: 0 .1rem;box-sizing: border-box;border-bottom: .01rem solid #ebebeb;z-index: 100;}
header h1{font-weight: normal;font-size: .15rem;}
.icon-icon-test{ height:.2rem;width: .2rem;font-size: .2rem;}

/* 底下公用样式 */
.topline{border-top: .0005rem solid #ebebeb;}
.box{display:flex;justify-content: space-between;align-items: center;}
.left{font-size:0.12rem;line-height:.384rem;}
.right{color: #999;font-size:.01rem;}
.headimg,.headname,.tel,.tong{margin:0 0.128rem 0 .137rem;}

.head{width:100%;height:0.896rem;margin-top:0.093rem;background:#fff;}
.head .headimg{width:2.936rem;height:0.512rem;}
.head .headimg span{font-size:0.12rem;}
.head .headimg img{width:0.341rem;height:.341rem;margin-top:0.085rem;margin-right:.105rem;}


.container{width:100%;height:2.688rem;margin-top:0.093rem;background:#fff;}
.container .yici{flex:1;padding-left:.1rem;}

.btn_bottom{width:2.936rem;height:.367rem;margin:.239rem .128rem .128rem .137rem;}
.btn_bottom button{width:100%;height:100%;box-sizing: border-box;padding:0 .107rem;background:#fff;border:0;outline: none;}
</style>