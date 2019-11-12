<template>
  <div>
    <div class="show-main__current__item" v-for="{item,index} in CommingLists" :key="index">
      <div class="show-main__current__item__pic">
        <img :src="item.pic" alt />
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
      <span class="show-main__current__item--btn">立即预定</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "homepageComming",
  created() {
    if (!sessionStorage.getItem("commingList")) {
      this.$store.dispatch("homepage/handleGetList", "2");
    }
  },
  computed: {
    ...mapState({
      CommingLists: state => state.homepage.commingList
    })
  }
};
</script>

<style>
</style>