<template>
  <div class="footer">
        <ul>
            <router-link tag="li" v-for="item in tabbar" :key="item.id" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <p>{{item.text}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            tabbar:[
                {
                    id:0,
                    text:"首页",
                    icon:"&#xe601;",
                    path:"/juooo"
                },
                {
                    id:1,
                    text:"影院",
                    icon:"&#xe675;",
                    path:"/cinema"
                },
                {
                    id:2,
                    text:"票夹",
                    icon:"&#xe62f;",
                    path:"/ticket"
                },
                {
                    id:3,
                    text:"我的",
                    icon:"&#xe653;",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
  html, body {position: relative;height: 100%;font-size:31.25vw;}
  body {font-size: 14px;display:flex;flex-direction: column;background:#ebebeb;}
  li{list-style: none;}


.footer{width:100%;height:0.418rem;box-sizing: border-box;border-top:1px solid #ccc;position:fixed;left:0;bottom:0;z-index: 3;background:#fff;}
.footer ul{width:100%;height:.418rem;display:flex;justify-content: space-around;align-items: center;}
.footer ul li{text-align: center;}
.footer ul .router-link-active{color:orange;}
.footer ul li i{font-size:.256rem;}
.footer ul li p{font-size:0.05rem;}
</style>