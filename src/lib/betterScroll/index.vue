<template>
    <div id="scroll">
        <div class="font" v-if="flag">
            <i class="iconfont icon-loading" ></i>
        </div>
        <div class="wrapper" ref="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"BScroll",
    data(){
        return{
            flag:false
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            protoType:1,
            //下拉刷新
            pullDownRefersh:{
                threshold:50//下拉的高度
                // stop:10 决定刷新时机及回弹的距离
            },
            //上拉加载更多
            pullUpLoad:true,
            tap:true,//better-scroll会阻止原生点击事件，tap可监听原生事件
            click:true,//better-scroll会阻止原生点击事件
            scrollY:true

        })
        this.scroll.on("scroll",pro=>{
            if(pro.y>=50){
                this.flag=true;
                setTimeout(()=>{
                    this.scroll.refresh();
                     this.flag=false;
                },2000)
            }
        })
    },
    methods:{
        // handleScrollTo(y){
        //     this.scroll.scrollTo(0,y,300);
        // },
        // handlePullingDown(callback){
        //     this.scroll.on("pullingDown",()=>{
        //         callback()
        //     })
        // },
        // handleRefreshDown(){
            
        // }
    }
}
</script>

<style>
#scroll{height: 100%;}
.wrapper{height: 5.68rem;overflow: hidden;}
.font{    
    height: .5rem;
    width: .5rem;
    position: relative;
    z-index: 100;
    top: .37rem;
    left: 1.5rem;}
.font .icon-loading{
    font-size: .25rem;
    position: absolute;
    left: 0;
    top: 0;
    animation: load-effect 1s infinite linear;
}
@keyframes load-effect {
    25%{transform: rotate(90deg)}
    50%{transform: rotate(180deg)}
    75%{transform: rotate(270deg)}
    100%{transform: rotate(360deg)}
}
</style>