<template>
<<<<<<< HEAD
  <div id="tabBar">
        <ul>
            <router-link tag="li" v-for="item in tabbar" :key="item.id" :to="item.path">
                <i :class="'iconfont '+item.icon" ></i>
=======
  <div class="footer">
        <ul>
            <router-link tag="li" v-for="item in tabbar" :key="item.id" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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
<<<<<<< HEAD
                    icon:"icon-zhuye",
                    path:"/Home"
=======
                    icon:"&#xe601;",
                    path:"/juooo"
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
                },
                {
                    id:1,
                    text:"影院",
<<<<<<< HEAD
                    icon:"icon-yingyuan",
                    path:"/theater"
=======
                    icon:"&#xe675;",
                    path:"/cinema"
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
                },
                {
                    id:2,
                    text:"票夹",
<<<<<<< HEAD
                    icon:"icon-piaojia_",
=======
                    icon:"&#xe62f;",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
                    path:"/ticket"
                },
                {
                    id:3,
                    text:"我的",
<<<<<<< HEAD
                    icon:"icon-wode",
=======
                    icon:"&#xe653;",
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
<<<<<<< HEAD
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
=======
  html, body {position: relative;height: 100%;font-size:31.25vw;}
  body {font-size: 14px;display:flex;flex-direction: column;background:#ebebeb;}
  li{list-style: none;}


.footer{width:100%;height:0.418rem;box-sizing: border-box;border-top:1px solid #ccc;position:fixed;left:0;bottom:0;z-index: 3;background:#fff;}
.footer ul{width:100%;height:.418rem;display:flex;justify-content: space-around;align-items: center;}
.footer ul li{text-align: center;}
.footer ul .router-link-active{color:orange;}
.footer ul li i{font-size:.256rem;}
.footer ul li p{font-size:0.05rem;}
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
</style>