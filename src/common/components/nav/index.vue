<template>
     <nav>
        <ul>
            <v-touch @tap="handleCheck(1)" tag="li">全部</v-touch>
            <v-touch @tap="handleCheck(1)" tag="li">演唱会</v-touch>
            <v-touch @tap="handleCheck(2)" tag="li">音乐会</v-touch>
            <v-touch @tap="handleCheck(3)" tag="li">话剧歌剧</v-touch>
            <v-touch @tap="handleCheck(4)" tag="li">儿童亲子</v-touch>
            <v-touch @tap="handleCheck(5)" tag="li">音乐剧</v-touch>
            <v-touch @tap="handleCheck(6)" tag="li">戏曲综艺</v-touch>
            <v-touch @tap="handleCheck(7)" tag="li">展览</v-touch>
            <v-touch @tap="handleCheck(8)" tag="li">舞蹈芭蕾</v-touch>
        </ul>
        <a href="#">{{family?family:"全国"}}<i :class="font?font:''"></i></a>
    </nav>        
</template>
<script>
import {classifyApi} from "@api/classify"
export default {
    name:"Nav",
    data(){
        return{
            gid:38
        }
    },
    props:{
       font:{
           type:String,
           default:""
        },
        family:{
            type:String,
            default:""
        } 
    },
    created(){
      
    },
    methods:{
        handleCheck(index){
            switch(index){
                case 1:this.id=35;break;
                case 2:this.id=36;break;
                case 3:this.id=37;break;
                case 4:this.id=38;break;
                case 5:this.id=79;break;
                case 6:this.id=91;break;
                case 7:this.id=99;break;
                case 8:this.id=86;break;
            } 
            this.$emit("handle",this.id);
        },
    }
    
}
</script>
<style>
/* 导航 */
 nav{
    display: flex;
    padding: .1rem .1rem;
    background: #fefefe;
    left: 0;
    top: 1rem;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
    color: #666;
    font-size: .14rem;
    overflow: hidden;
    height: .36rem;
    position: relative;
    top: 0;
}
nav ul{
    flex: 1;
    width: 4rem;
    margin-right: .13333rem;
    overflow: auto;
    display: flex;
    flex-wrap:nowrap ;
    line-height: .16rem;
    height: .38rem;
}
nav ul li{
    list-style: none;
    white-space: nowrap;
    margin: 0 .06rem;
    padding: 0 .03rem;
    height: .2rem;
    border-bottom: .01rem solid transparent;
}
.active{
     border-bottom-color: #ff6743;;
     color: #ff6743;;
}
nav a{
    color: #666;
    display: inline-block;
    padding: 0 .05rem;
    width: .4rem;
    border-left: .01rem solid #e6e6e6;
    text-align: center;
    line-height: .16rem;
    height: .16rem;
    background: url(https://m.juooo.com/static/img/add_icon_small.13b13aa.png) no-repeat right center;
    background-size: .1rem;
}
</style>