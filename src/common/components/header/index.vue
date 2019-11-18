<template>
    <div id="header">
        <v-touch tag="a" class="iconfont icon-iconfanhui"  v-if="icon1?false:true"  @tap="handleBack()"></v-touch>
            <h1>{{title}}</h1>
        <a class="iconfont icon-icongengduo" v-if="icon2?false:true"></a>
        <slot name="iconfont"></slot>
    </div >
</template>
<script>
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
        }
   },
   methods:{
       handleBack(){
            this.$router.go(-1);
        }
   }
  
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