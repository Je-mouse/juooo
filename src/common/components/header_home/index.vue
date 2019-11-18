<template>
  <nav id="header">
    <span>{{title}}</span>
    <v-touch @tap="handleBack()" v-if="back">
      <i class="iconfont title_back">&#xe607;</i>
    </v-touch>
    <v-touch v-if="put" @tap="handlePut()">
      <i class="iconfont title_ellipsis">&#xe636;</i>
    </v-touch>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "购买新卡"
    },
    back: {
      type: Boolean
    },
    put: {
      type: Boolean
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handlePut() {
      console.log(2123);
    }
  }
};
</script>

<style>

#header {
  position: fixed;
  top: 0;
  z-index: 100;
  /* height: .4rem; */
  height: 0.3753rem;
  width: 100%;
  background-color: #fff;
  font-size: 0.16rem;
  color: #232323;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
}

#header span {
  position: absolute;
  text-align: center;
  height: 0.3753rem;
  line-height: 0.3753rem;
  left: 0;
  right: 0;
  pointer-events: none;
}

#header .title_back,
#header .title_ellipsis {
  position: relative;
  padding: 0.09rem 0.17rem;
  font-size: 0.16rem;
}
</style>