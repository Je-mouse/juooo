<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <keep-alive> -->
      <router-view :key="$route.fullPath"></router-view>
    <!-- </keep-alive> -->
=======
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.toggle"/>
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
  </div>
</template>
<script>
import TabBar from "@common/components/tabBar";
export default {
  name:"App",
  components:{
    TabBar
  }
}
</script>
<style>
  #app{height:100%;}
</style>
