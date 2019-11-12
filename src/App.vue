<template>
  <div id="app">
    
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.toggle"/>
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
