<template>
    <div id="header">
        <!-- <v-touch tag="a" class="iconfont icon-iconfanhui"  v-if="icon1?false:true"  @tap="handleBack()"></v-touch> -->
        <router-link tag="a" class="iconfont icon-iconfanhui"  v-if="icon1?false:true" :to="flag?'/classify':'/Home'"></router-link>
            <h1>{{title}}</h1>
        <v-touch class="iconfont icon-icongengduo" v-if="icon2?false:true" tag="a" @tap="handleToast()"></v-touch>
        <slot name="iconfont"></slot>
    </div >
</template>
<script>
import Toast from "../../../lib/Toast/index.js"
export default {
   name:"Header", 
   props:{
        title:{
            type:String,
            default:"演出"
        },
        icon1:{
            type:String,
            default:""
        },
        icon2:{
            type:String,
            default:""
        },
        flag:{
            type:String,
            default:""
        }
   },
   methods:{
       handleToast(){
           console.log(Toast);
            Toast({
                message: '提示',
                position: 'bottom',
                duration: 5000
           });
       }
   },
//    beforeDestroy(){
//        Toast.handleClose();
//    }
  
}
</script>
<style>
    #header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .37rem;
        width: 100%;
        background-color: #fff;
        color: #232323;
        padding: 0 .1rem;
        box-sizing: border-box;
        border-bottom: .01rem solid #ebebeb;
        z-index: 100;
        position: relative;
    }
    #header h1{
        font-weight: normal;
        font-size: .15rem;
    }
    .icon-icon-test{
        height:.2rem;
        width: .2rem;
        font-size: .2rem;
    }
</style>