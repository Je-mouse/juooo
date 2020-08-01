<template>
  <div id="tabBar">
        <ul>
            <router-link tag="li" v-for="item in tabbar" :key="item.id" :to="item.path">
                <i :class="'iconfont '+item.icon" ></i>
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
                    icon:"icon-zhuye",
                    path:"/Home"
                },
                {
                    id:1,
                    text:"影院",
                    icon:"icon-yingyuan",
                    path:"/theater"
                },
                {
                    id:2,
                    text:"票夹",
                    icon:"icon-piaojia_",
                    path:"/ticket"
                },
                {
                    id:3,
                    text:"我的",
                    icon:"icon-wode",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
  /* html, body {position: relative;height: 100%;font-size:31.25vw;}
  body {font-size: 14px;display:flex;flex-direction: column;background:#ebebeb;} */



#tabBar{width:100%;height:0.48rem;box-sizing: border-box;border-top:1px solid #ccc;position:fixed;left:0;bottom:0;z-index: 3;background:#fff;}
#tabBar ul{align-items: center;flex-direction: row;width:100%;height:.48rem;display:flex;justify-content: space-around;align-items: center;}
#tabBar ul li{    text-align: center;
    list-style: none;
    line-height: normal;
    height: .48rem;
    width: .6rem;
    display: flex;
    flex-direction: column;}
#tabBar ul li:nth-child(1){font-weight: bold}
#tabBar ul .router-link-active{color:orange;}
#tabBar ul li i{font-size:.256rem;}
#tabBar ul li p{font-size:0.05rem;}
</style>