<template>
  <div>
    <div class="show-main__current__item" v-for="(item,index) in NowLists" :key="index">
      <div class="show-main__current__item__pic">
        <img :src="item.pic" alt />
        <!-- <span class="show-vip"></span> -->
        <div class="show-main__current__item__pic__overlay shade-overlay" v-if="item.status==1">
          <span class="show-main__current__item__pic__overlay--status shade-overlay__status">已抢光</span>
        </div>
      </div>
      <div class="show-main__current__item__info">
        <p class="show-main__current__item__info--date show-date">
          <strong>{{item.data}}</strong>
          <span>{{item.week}}</span>
          <span>{{item.time}}</span>
        </p>
        <h3 class="show-main__current__item__info--title text-double">{{item.schedular_name}}</h3>
        <p
          class="show-main__current__item__info--venue venue text-single"
        >{{item.city_name }}|{{item.venue_name}}</p>
        <p class="show-main__current__item__info--price price">
          <strong
            class="show-main__current__item__info--price__now"
          >￥{{parseInt(item.fixed_price) }}</strong>
          <span
            class="show-main__current__item__info--price__origin disabled"
          >￥{{parseInt(item.price)}}</span>
        </p>
        <!---->
      </div>
      <span class="show-main__current__item--btn" :class="item.status==1?'disabled':''">立即抢购</span>
    </div>
    <p class="load-more">
      <span class="load-more__tip">加载更多</span>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "homepageNow",
  created() {
    if (!sessionStorage.getItem("nowList")) {
      this.$store.dispatch("homepage/handleGetList","1");
    }
  },
  computed: {
    ...mapState({
      NowLists: state => state.homepage.nowList
    })
  }
};
</script>

<style>
</style>