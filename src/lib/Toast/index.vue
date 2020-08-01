<template>
    <div id="Toast">
        <div>
            <p>{{message}}</p>
            <span>确定执行此操作？</span>
            <v-touch tag="button" @tap="handleClose()">确定</v-touch>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style>
#Toast{
    height: 1rem;
    width: 2rem;
    background: black;
    position: relative;
    opacity: .7;
    font-size: .14rem;
    color: white;
    margin-top: .75rem;
    left: .6rem;
}
#Toast div p{
    text-align: center;
    line-height: .3rem;
}
#Toast div span{
    font-size: .12rem;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    line-height: .9rem;
}
#Toast button{
    position: absolute;
    left: .85rem;
    bottom: .1rem;
    font-weight: bold;
    border: none;
    padding:0 .05rem
}
</style>