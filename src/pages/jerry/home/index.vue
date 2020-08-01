<template>
    <div class="home">
        <h2>☺    聚橙网    ☺</h2>
        <ul>
            <router-link to="/classify" tag="li">所有分类</router-link>
            <router-link to="/discount" tag="li">专享折扣</router-link>
            <router-link to="/theater" tag="li">热门场馆</router-link>
            <router-link to="/perform" tag="li">巡回演出</router-link>
        </ul>
        <TabBar/>
    </div>
</template>
<script>
export default({
    name:"Home"
})
</script>
<style>
    .home{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background:url(../../../../public/img/login_bg.png) no-repeat;
        background-size: 100%;
    }
    .home h2{font-size: .4rem;color: #ff00ff;margin:.5rem 0;text-align: center;}
    .home ul{display: flex;flex-direction: column;}
    .home ul li{font-size: .18rem;list-style: circle;line-height: .4rem;}
</style>