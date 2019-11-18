<template>
  <div class="city_container" ref="citycontainer">
    
      <div class="city_header">
        <v-touch tag="div" @tap="handleback()" class="back" >&lt;</v-touch>
        <div class="option">城市选择</div>
      </div>

      <div class="city_body" ref="cityBody">
          <!--热门城市-->
          <div class="hot_city">
            <div class="hot_title">热门城市</div>
            <div class="hot_city_list">
              <v-touch class="hot_city_name" 
                  tag="div"
                  v-for="(item,index) in hotCity" :key="index"
                  @tap="handleHotCityTo(item)"
              >{{item.nm}}</v-touch>
            </div>
          </div>
          <!--城市列表-->
          <div class="city_list" ref="cityList">
            <div class="city_list_item" v-for="(item) in cityList" :key="item.id">
              <div class="city_title_letter">{{item.id}}</div>
              <div class="city_list_name">
                <v-touch
                  tag="div"
                  @tap="handleCityTo(child)"
                  class="city_list_name_item"
                  v-for="(child) in item.list"
                  :key="child.id"
                >{{child.name}}</v-touch>
              </div>
            </div>
          </div>
        </div>
      
        <!--城市列表下标-->
        <div class="city_list_index">
          <v-touch class="index_item" 
              tag="div"
              @tap="handleTo(index)"
              v-for="(item,index) in cityList" :key="item.id"
          >{{item.id}}</v-touch>
        </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "City",
  created() {
    if (!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))) {
      this.$store.dispatch("city/handleGetCityList");
    }
  },
  computed: {
    ...mapState({
      hotCity: state => state.city.hotCity,
      cityList: state => state.city.cityList
    })
  },
  methods: {
    handleTo(index) {
      let t = this.$refs.cityList.querySelectorAll(".city_title_letter")[index].offsetTop;
      this.$refs.citycontainer.scrollTop = t; 
    },
    handleCityTo(city){
      //console.log(city)
      // let path = this.$route.query.path || "/"
      this.$store.commit("city/handleUpdateCityInfo",city)
      this.$router.push("/");
    },
    handleHotCityTo(item){
      console.log(item)
    },
    handleback(){
      this.$router.back("/juooo")
    }
  }
};
</script>

<style>
.city_header{
  width:100%;
  height:.36rem;
  background:#Fff;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.city_header .back{
  margin-left:.1rem;
}
.city_header .option{
  flex:1;text-align: center;
}


.city_container{
  height: 100%;
  overflow: auto;
}
.city_body {
  background: #ebebeb;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.3rem;
  padding-left: 0.13rem;
  font-size: 0.14rem;
}
.hot_city_list,
.city_list_name {
  background: #f5f5f5;
  padding-bottom: 0.08rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.15rem;
  width: .95rem;
  height: 0.33rem;
  background: #fff;
  text-align: center;
  line-height: 0.33rem;
  font-size: 0.14rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.45rem;
  margin-left: 0.13rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.14rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: .5rem;
}
.city_list_index > div {
  padding: 0.05rem 0.025rem;
  font-size: 0.125rem;
}
</style>