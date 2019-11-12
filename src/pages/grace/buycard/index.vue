<template>
  <div class="card">
    <Header title="购买新卡" back put />
    <section>
      <!-- 1 -->
      <div class="card_swiper">
        <div class="card_swiper-bg">
          <div class="img_baba">
            <img
              src="https://image.juooo.com/group1/M00/03/DC/rAoKNV2ylVyAVjhhAAQVA51NnaY944.png"
              alt
            />
          </div>
        </div>
      </div>


      <!-- 2 VIP+  -->
      <div class="card_vipadd entry-block">
        <div class="card_vipadd-title">
          <div class="entry-block__title">
            VIP+
            <span class="entry-block__title__desc">开通VIP+，演出随心看</span>
          </div>
          <i class="iconfont">&#xe7d5;</i>
        </div>
        <div class="card_vipadd-list entry-block">
          <div class="right-list">


            <div class="right-list_cell" v-for="(item,index) in equity_list" :key="index">
              <div class="right-list_icon" :class="item.benefits_icon"></div>
              <div class="right-cell__name">{{item.benefits_name}}</div>
            </div>
            
          </div>
        </div>
      </div>



      <!-- 3 储值卡  -->
      <div class="margin-top entry-block">
        <div class="entry-block__title">
          储值卡
          <span class="entry-block__title__desc" v-for="(item,index) in store_title" :key="index">{{item.title}}</span>
          <!---->
        </div>
        <div class="card-list">
          <div class="card-list__item"  v-for="(item,index) in store_card" :key="index">
            <div class="orange-plus">
              <div class="card-cell">
                <div class="ju-image card-cell__bg-img">
                  <img
                    :src="item.card_image"
                    class="ju-image__img"
                  />
                  <div class="ju-image__mask" style="background-color: rgba(255, 255, 255, 0);"></div>
                </div>
                <div class="card-cell__desc">
                  <div class="card-cell__desc__top">{{item.name}}</div>
                  <div class="card-cell__desc__middle">有效期： 长期有效</div>
                  <div class="card-cell__desc__bottom">
                    <div class="orange-plus__price">
                      <span class="orange-plus__price__num">¥{{item.card_price}}</span>
                      <span class="orange-plus__price__give">{{item.give_vip==1?'赠VIP+':''}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <!-- 4 品类 + 次卡 -->
      <div class="margin-top entry-block" v-for="(item,index) in cate_card" :key="index">
        <div class="entry-block__title">
          <div class="entry-title">
            品类
            <span class="entry-title__point"></span>{{item.card_type_name}}
          </div>
          <!---->
        </div>
        <div class="card-list">
          <div class="card-list__item">
            <div class="orange-plus">
              <div class="card-cell">
                <div class="ju-image card-cell__bg-img">
                  <img
                    :src="item.card_image"
                    class="ju-image__img"
                  />
                  <div class="ju-image__mask" style="background-color: rgba(255, 255, 255, 0);"></div>
                </div>
                <div class="card-cell__desc">
                  <div class="card-cell__desc__top">{{item.name}}</div>
                  <div class="card-cell__desc__middle">有效期： {{item.avail_mouth}}个月</div>
                  <div class="card-cell__desc__bottom">
                    <div class="orange-plus__price">
                      <span class="orange-plus__price__num">¥{{item.card_price}}</span>
                      <span class="orange-plus__price__give">兑换券{{item.use_limit}}张</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <!-- 4 城市 + 次卡 -->
      <div class="margin-top entry-block">
        <div class="entry-block__title">
          <div class="entry-title">
            城市
            <span class="entry-title__point"></span>次卡
          </div>
          <!---->
        </div>
        <div class="card-list">
          <div class="card-list__item" v-for="(item,index) in once_card" :key="index">
            <div class="orange-plus">
              <div class="card-cell">
                <div class="ju-image card-cell__bg-img">
                  <img
                    :src="item.card_image"
                    class="ju-image__img"
                  />
                  <div class="ju-image__mask" style="background-color: rgba(255, 255, 255, 0);"></div>
                </div>
                <div class="card-cell__desc">
                  <div class="card-cell__desc__top">{{item.name}}</div>
                  <div class="card-cell__desc__middle">有效期：{{item.avail_mouth}}个月</div>
                  <div class="card-cell__desc__bottom">
                    <div class="orange-plus__price">
                      <span class="orange-plus__price__num">¥{{item.card_price}}</span>
                      <span class="orange-plus__price__give">兑换券{{item.use_limit}}张</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="card-bottom-placeholder"></div>
    </section>
    <footer>
      <div class="bottom">
        <div class="bottom_tit">购买新卡</div>
        <div class="bottom_border"></div>
        <div class="bottom_tit">绑定新卡</div>
        <div class="bottom_border"></div>
        <div class="bottom_tit">我的卡包</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@common/components";
export default {
  name: "buycard",
  created() {
    if (
      !(
        sessionStorage.getItem("cate_card") &&
        sessionStorage.getItem("once_card") &&
        sessionStorage.getItem("store_card") &&
        sessionStorage.getItem("equity_list")&&
        sessionStorage.getItem("store_title")
      )
    ) {
      console.log(123)
      this.$store.dispatch("buycard/handleGetList");
      this.$store.dispatch("buycard/handleGetContent");
      
    }
  },
  computed:{
    ...mapState({
        cate_card:state=>state.buycard.cate_card,
        once_card:state=>state.buycard.once_card,
        store_card:state=>state.buycard.store_card,
        equity_list:state=>state.buycard.equity_list,
        store_title:state=>state.buycard.store_title,
    })
  }
};

</script>

<style>
.card {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

nav {
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

nav span {
  position: absolute;
  text-align: center;
  height: 0.3753rem;
  line-height: 0.3753rem;
  left: 0;
  right: 0;
  pointer-events: none;
}

nav .title_back,
nav .title_ellipsis {
  position: relative;
  padding: 0.09rem 0.17rem;
  font-size: 0.16rem;
}

section {
  /* position: absolute; */
  height: auto;
  width: 100%;
  /* left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  padding-top: 0.3753rem;
  padding-bottom: 0.3753rem;
  background: #f5f5f5;
  overflow-x: scroll;
}

section .card_swiper {
  background: #fff;
  margin-top: -0.3753rem;
}

section .card_swiper .card_swiper-bg {
  position: relative;
  box-sizing: border-box;
  height: 2.37rem;
  padding: 0.53rem 0 0.33rem;
  background: url("https://m.juooo.com/static/img/card_market_top_bg.dd98990.png")
    no-repeat;
  background-size: 100%;
}

section .card_swiper .card_swiper-bg img {
  display: block;
  width: 2.94rem;
  height: 100%;
  background-color: #efefef;
  border-radius: 0.10667rem;
  margin: 0 auto;
}

section .card_vipadd {
  width: 100%;
  background-color: #fff;
  padding: 0.19rem 0.13rem;
  box-sizing: border-box;
  overflow: hidden;
}

section .card_vipadd .card_vipadd-title {
  padding-bottom: 0.15rem;
  height: 0.37rem;
  line-height: 0.37rem;
  color: #232323;
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

section .card_vipadd .card_vipadd-list .right-list {
  display: flex;
  overflow-x: scroll;
  height: auto;
}

section .card_vipadd .card_vipadd-list {
  overflow: hidden;
  padding-bottom: 0;
  padding-right: 0;
}

section .card_vipadd .card_vipadd-list .right-list .right-list_cell {
  margin-right: 0.18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 0.51rem;
  flex-shrink: 0;
  height: 0.77rem;
}

section .right-list_cell .right-list_icon {
  width: 0.5119rem;
  height: 0.4rem;
  display: block;
  pointer-events: none;
  background-size: 1.9rem;
  background-image: url("https://m.juooo.com/static/img/vip_plus_right.61e731b.png");
  
}
section .right-list_cell .right-list_icon.prior-buy{
  background-position: -9rem -0.52rem;
}
section .right-list_cell .right-list_icon.price{
  background-position: -8.06rem -.04rem;
}
section .right-list_cell .right-list_icon.discount{
  background-position: -8.55rem -.04rem;
}
section .right-list_cell .right-list_icon.coupon{
  background-position:-9rem -.04rem;
}
section .right-list_cell .right-list_icon.free-shipping{
  background-position: 1.9rem  -0.52rem;
}
section .right-list_cell .right-list_icon.double-points{
  background-position: -8.06rem -0.52rem;
}
section .right-list_cell .right-list_icon.free-ticket{
  background-position:  -8.55rem  -0.52rem;
}
section .right-list_cell .right-list_icon.activity{
  background-position: -9rem  -0.52rem;
}
section .right-list_cell .right-list_icon.periodical{
  background-position:1.9rem  -0.99rem;
}
section .right-list_cell .right-list_icon.birthday{
  background-position: -8.06rem -0.99rem;
}
/* section .right-list_cell .right-list_icon.birthday{
  background-position:  -8.55rem  -0.99rem;
} */

/*  prior-buy
    price
    discount
    coupon
    free-shipping
    double-points
    free-ticket
    activity
    periodical
    birthday */
.right-cell__name {
  color: #514843;
  margin-top: 0.0768rem;
  font-size: 0.12rem;
}

.entry-block__title {
  margin-left: 0.08rem;
  padding-bottom: 0.15rem;
  height: 0.37rem;
  line-height: 0.37rem;
  color: #232323;
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.entry-block__title__desc {
  font-size: 0.13rem;
  color: #666;
  font-weight: 400;
  flex: 1;
  margin-left: 0.08rem;
}

.margin-top {
  margin-top: 0.1rem;
}

.entry-block {
  width: 100%;
  background-color: #fff;
  padding: 0.19rem 0.13rem;
  box-sizing: border-box;
  overflow: hidden;
}

.card-list {
  margin-top: -0.17rem;
  margin-bottom: -0.21rem;
}

.card-list__item {
  padding: 0.21rem 0;
  border-bottom: 1px solid #f5f5f5;
}

.card-cell {
  display: flex;
}

.ju-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.card-cell__bg-img,
.card-cell__default {
  width: 1.3653rem;
  height: 0.8533rem;
  border-radius: 0.0367rem;
  overflow: hidden;
}

.ju-image__img {
  width: 100%;
  height: 100%;
}

.ju-image__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.card-cell__desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.128rem 0;
  margin-left: 0.064rem;
}

.card-cell__desc__top {
  color: #232323;
  font-size: 0.13rem;
  font-weight: 700;
}

.card-cell__desc__middle {
  color: #999;
  font-size: 0.13rem;
  height: 0.2047rem;
  line-height: 0.2047rem;
}

.card-cell__desc__bottom {
  height: 0.2047rem;
  line-height: 0.2047rem;
}

.orange-plus__price__num {
  color: #ff6743;
  font-size: 0.13rem;
  font-weight: 700;
}

.orange-plus__price__give {
  display: inline-block;
  height: 0.145rem;
  background: rgba(255, 129, 0, 0.1);
  border-radius: 0.08rem;
  text-align: center;
  line-height: 0.145rem;
  font-size: 0.13rem;
  color: #d5a370;
  padding: 1px 0;
  box-sizing: border-box;
  margin-left: 0.13rem;
}
.card-bottom-placeholder {
  height: 0.3676rem;
}
.entry-title {
  display: flex;
  align-items: center;
}

.entry-title__point {
  display: block;
  width: 0.0341rem;
  height: 0.0341rem;
  border-radius: 50%;
  background: #232323;
  margin: 0.0512rem;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.3753rem;
  border-top: 1px solid #ebebeb;
  background: pink;
}
.bottom {
  display: flex;
  background: #fefefe;
  align-items: center;
}
.bottom_border {
  width: 1px;
  height: 0.148rem;
  background: #ccc;
  margin: auto 0;
}
.bottom_tit {
  line-height: 0.38rem;
  font-size: 0.13rem;
  text-align: center;
  color: #1a1a1a;
  flex: 1;
}
</style>