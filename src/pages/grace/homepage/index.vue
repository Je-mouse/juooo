<template>
  <div id="app" class="card">
    <div class="content-wrap">
      <div class="content">
        <div class="content-block">
          <div class="content-block_banner">
            <div class="content-block_home">
              <img src="../../../../public/img/nav_icon_home.png" />
            </div>
          </div>
          <div class="content-block_list">
            <img src="../../../../public/img/list.jpg" />
          </div>
          <div class="content-block_ljkk">
            <img src="../../../../public/img/lijikaika.jpg" />
          </div>
        </div>

        <div class="show-block">
          <div class="VIP_block">
            <div class="sub_top">
              <div class="sub-top__title">
                <span class="sub-top__title--title">VIP+会员</span>
              </div>
              <p class="sub-top__tip">尊享10大权益</p>
            </div>
            <div class="vip-advert__content">
              <ul class="showlist">
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
                <li class="showlist_item">
                  <img
                    src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/vip_icon_1.png"
                    alt
                    class="showlist_item-img"
                  />
                  <span class="showlist_item-tip">优先购票</span>
                </li>
              </ul>
              <div class="vip-img">
                <img src="../../../../public/img/vip.png" alt />
              </div>
              <p class="vip-advert__content--tips">Tips：参与城市北京、上海、广州、深圳</p>
              <div class="vip-advert__content__btn">
                <span class="vip-advert__content__btn--tip">
                  立即开通
                  ￥99/年
                </span>
              </div>
            </div>
          </div>
          <div class="you_xgp">
            <div class="sub_top">
              <div class="sub-top__title">
                <span class="sub-top__title--title">优先购票</span>
              </div>
              <p class="sub-top__tip">VIP+会员权益，尊享优先购票</p>
            </div>
            <div class="you_xgp_swiper">
              <div class="vip-ahead__list__item">
                <a href=" " class="vip-ahead__list__item__wrap">
                  <img
                    src="https://image.juooo.com/group1/M00/03/3D/rAoKmV3FL3GAFowZAACN1grBQME851.jpg"
                    class="vip-ahead__list__item__wrap__pic"
                  />
                </a>
              </div>
              <div class="vip-ahead__list__info">
                <a href=" ">
                  <h3 class="vip-ahead__list__info__title text-double">
                    弗洛朗·莫特 Florent Mothe 2019演唱会
                    -西安站
                  </h3>
                  <p class="vip-ahead__list__info__venue text-single">西安 | 别克陕西大剧院·戏剧厅</p>
                  <p class="vip-ahead__list__info__tip">
                    <span class="vip-ahead__list__info__tip--time">11/12 18:00</span>
                    <span class="vip-ahead__list__info__tip__text">结束</span>
                  </p>
                </a>
              </div>
              <a href=" ">
                <span class="vip-ahead__list__lab">开售提醒</span>
              </a>
            </div>
            <div class="you_xgp_quan">
              <img src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/family_card.png" />
            </div>
          </div>

          <div class="you_xgp mei_rxsg">
            <div class="sub_top">
              <div class="sub-top__title">
                <span class="sub-top__title--title">每日限时购</span>
              </div>
              <p class="sub-top__tip">限时限量低价抢票，每日10点更新</p>
            </div>
            <div class="mei_rxsg_swiper">
              <div class="show-main__tabs">
                <router-link tag="div" to="/homepage/homepagenow" class="show-main__tabs__item">
                  <span class="show-main__tabs__item--title active--title">正在抢购</span>
                  <span class="show-main__tabs__item--date">-----</span>
                </router-link>

                <router-link tag="div" to="/homepage/homepagecomming" class="show-main__tabs__item">
                  <div class="show-main__tabs__item--title active--title">下期预告</div>
                  <span class="show-main__tabs__item--date">-----</span>
                  <!---->
                </router-link>
              </div>

              <div class="show-main__current">
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
                
              </div>
            </div>
            <div class="you_xgp_quan">
              <img src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/family_card.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="bottom-foot">
      <router-link tag="div" to="/homepage" class="bottom-foot__item">
        <img
          src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/tab_icon_home_2.png"
          alt
          class="bottom-foot__item--img"
        />
        <span class="bottom-foot__item--lab">主会场</span>
      </router-link>
      <router-link tag="div" to="/buycard" class="bottom-foot__item">
        <img
          src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/tab_icon_card_2.png"
          alt
          class="bottom-foot__item--img"
        />
        <span class="bottom-foot__item--lab">欢乐家庭年卡</span>
      </router-link>
      <router-link tag="div" to="/dredgeorange" class="bottom-foot__item">
        <img
          src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/tab_icon_plus_2.png"
          alt
          class="bottom-foot__item--img"
        />
        <span class="bottom-foot__item--lab">橙PLUS卡</span>
      </router-link>
      <router-link tag="div" to="/member" class="bottom-foot__item">
        <img
          src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/tab_icon_vip_2.png"
          alt
          class="bottom-foot__item--img"
        />
        <span class="bottom-foot__item--lab">V+会员</span>
      </router-link>
    </footer>

    <div class="float-block">
      <router-link tag="a" to="/savemoney">
        <img src="http://zhuanti.juooo.com/zhuanti/2019/1111/images/float.png" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
};
</script>

<style>
.card {
  position: relative;
  width: 100%;
  overflow: scroll;
}

.content {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.content-block_banner {
  background-image: url("../../../../public/img/bg.png");
  height: 2.2rem;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 100% 2.2rem;
  position: relative;
  overflow: hidden;
}

.content-block_home {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  left: 0.15rem;
  top: 0.11rem;
}

.content-block_home img {
  border: none;
  border-color: transparent;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

.content-block_list {
  margin-top: -0.071rem;
  width: 100%;
  height: 1.5rem;
}

.content-block_list img,
.content-block_ljkk img {
  width: 100%;
  height: 100%;
}

.content-block_ljkk {
  width: 100%;
  height: 2rem;
  padding: 0.101rem;
}

.content-block {
  background-image: linear-gradient(
      180deg,
      #fe604f 0%,
      #ff705b 19%,
      #ff7f66 32%,
      #ffaba2 100%
    ),
    linear-gradient(#fea444, #fea444);
}

.show-block {
  width: 100%;
  padding: 0.17rem;
  box-sizing: border-box;
  background-color: #ffeae7;
}

.sub_top {
  color: #f3724a;
  text-align: center;
  padding-bottom: 0.21333rem;
  padding-top: 0.085333rem;
}

.vip-advert__content {
  width: 100%;
  padding-bottom: 0.24rem;
  background-color: #fff3ee;
  border-radius: 0.08333rem;
  border: solid 1px #d5a370;
}

.sub-top__title--title {
  display: inline-block;
  font-size: 0.14rem;
  height: 0.213rem;
  line-height: 0.213rem;
  font-weight: normal;
  position: relative;
}

.sub-top__title--title::before {
  left: -1.85rem;
  background-image: url("../../../../public/img/title_decoration_1.png");
}

.sub-top__title--title::after {
  background-image: url("../../../../public/img/title_decoration_2.png");
  right: -1.85rem;
}

.sub-top__title--title::before,
.sub-top__title--title::after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  top: 0.05rem;
  width: 1.766rem;
  height: 0.1193rem;
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: cover;
}

.sub-top__tip {
  font-size: 0.12rem;
  line-height: 0.12rem;
  margin-top: 0.0821rem;
}

.showlist {
  overflow: hidden;
  padding: 0.24rem 0.08rem 0;
  display: flex;
  flex-wrap: wrap;
}

.showlist_item {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0.156rem;
  width: 25%;
}

.showlist_item-img {
  width: 0.55rem;
  height: 0.55rem;
}

.showlist_item-tip {
  color: #896039;
  font-size: 0.12rem;
  margin-top: 0.08533rem;
  line-height: 0.12rem;
}

.vip-img {
  padding: 0 0.08rem;
  margin: 0 auto;
}

.vip-img img {
  height: 0.75rem;
  width: 100%;
}

.vip-advert__content--tips {
  font-size: 0.12rem;
  color: rgba(174, 27, 0, 0.8);
  margin-left: 0.10533rem;
  line-height: 0.18267rem;
  margin-top: 0.0667rem;
}

.vip-advert__content__btn {
  margin-top: 0.13667rem;
  text-align: center;
}

.vip-advert__content__btn--tip {
  display: inline-block;
  width: 2.04533rem;
  height: 0.344rem;
  line-height: 0.344rem;
  background: #ae1b00;
  border-radius: 0.18267rem;
  font-size: 0.14rem;
  color: #fefefe;
  text-align: center;
}

.you_xgp {
  padding-top: 0.085333rem;
}

.you_xgp_swiper {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.home-banner-wrap {
  padding-bottom: 0.08533rem;
}

.home-banner-wrap .swiper-wrapper .swiper-slide {
  border: 1px solid rgba(213, 163, 112, 0.5);
  background-color: rgba(255, 252, 245, 0.5);
  border-radius: 0.0128rem;
  box-sizing: border-box;
}

.vip-ahead__list {
  display: flex;
  /* padding: 0.256rem 0.256rem 0.21333rem; */
  position: relative;
}

.vip-ahead__list__item {
  width: 0.8rem;
  height: 1.28rem;
  border-radius: 0.0833rem;
  overflow: hidden;
}

.vip-ahead__list__info {
  padding-top: 0.04266rem;
  margin-left: 0.056rem;
  flex: 1;
}

.vip-ahead__list__item__wrap {
  display: block;
  width: 100%;
  height: 100%;
}

.vip-ahead__list__info a {
  display: block;
}

.vip-ahead__list__info__title {
  width: 100%;
  font-size: 0.12rem;
  color: #232323;
  /* line-height: 0.34333rem; */
  /* min-height: 0.34333rem; */
  /* max-height: 0.68266rem; */
}

.vip-ahead__list__info__venue {
  /* margin-top: 0.1706rem;
        width: 3.41328rem;
        font-size: 0.18rem;
        height: 0.29688rem; */
  line-height: 0.29688rem;
  color: #666;
}

.vip-ahead__list__info__tip {
  font-size: 0.1418rem;
  margin-top: 0.17066rem;
}

.vip-ahead__list__info__tip--time {
  color: #ff6743;
}

.vip-ahead__list__info__tip__text {
  color: #666;
}

.vip-ahead__list__lab {
  position: absolute;
  right: 0.0056rem;
  bottom: 0rem;
  width: 0.8rem;
  height: 0.209531rem;
  border-radius: 0.23333rem;
  font-size: 0.12rem;
  color: #ff6743;
  border: solid 1px #ff6743;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vip-ahead__list__item__wrap__pic {
  width: 100%;
  height: 100%;
}

.you_xgp_quan {
  width: 100%;
  height: 0.901rem;
  border-radius: 0.0213rem;
  overflow: hidden;
  margin-top: 0.242rem;
}

.you_xgp_quan img {
  width: 100%;
  height: 100%;
}
.mei_rxsg_swiper {
  width: 100%;
  padding: 0.05rem 0.1067rem;
  border-radius: 0.1333rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: rgba(254, 254, 254, 0.7);
}
.show-main__tabs {
  display: flex;
}
.show-main__tabs__item.router-link-active {
  border-bottom-color: rgba(131, 20, 0, 0.2);
}
.show-main__tabs__item {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.024rem solid transparent;
  padding-bottom: 0.11rem;
  color: #666;
}

.show-main__tabs__item.router-link-active .active--title {
  color: #242424;
  font-weight: bold;
}

.show-main__tabs__item--title {
  font-size: 0.166rem;
  /* line-height: 0.3584rem; */
}
.show-main__tabs__item--date {
  margin-top: 0.06827rem;
  font-size: 0.12rem;
  /* line-height: 0.206rem; */
}

.show-main__current {
  width: 100%;
}
.show-main__current__item {
  width: 100%;
  border-bottom: 1px solid rgba(131, 20, 0, 0.2);
  padding: 0.1rem 0;
  display: flex;
  position: relative;
}
.show-main__current__item__pic {
  width: 0.8rem;
  height: 1.28rem;
  border-radius: 0.0833rem;
  border: solid 1px #aaa;
  position: relative;
  overflow: hidden;
}

.show-main__current__item__pic img {
  border: none;
  border-color: transparent;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

.show-main__current__item__info {
  flex: 1;
  margin-left: 0.1rem;
  width: 60%;
}

.show-main__current__item__info--date {
  font-size: 0.12rem;
  letter-spacing: 1px;
  color: #666;
}
.show-main__current__item__info--date strong {
  font-size: 0.14rem;
  color: #232323;
}

.show-main__current__item__info--title {
  width: 100%;
  font-size: 0.14rem;
  line-height: 0.24rem;
  margin-top: 0.1rem;
  color: #232323;
}
.text-double {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.show-main__current__item__info--venue {
  font-size: 0.12rem;

  margin-top: 0.1rem;
  color: #666;
}

.text-single {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.show-main__current__item__info--price {
  margin-top: 0.17067rem;
  color: #ff6743;
}
.show-main__current__item__info--price__now {
  display: block;
  float: left;
  font-size: 0.14rem;
  font-weight: normal;
  margin-right: 0.1rem;
}

.show-main__current__item__info--price__origin.disabled {
  color: #999;
  text-decoration: line-through;
}

.show-main__current__item__info--price__origin {
  float: left;
  display: block;
  font-size: 0.12rem;
  margin-right: 0.05rem;
}
/* 如果已抢光  .disabled  */
.show-main__current__item--btn.disabled {
  border: 1px solid #ccc;
  color: #b3b3b3;
}
.show-main__current__item--btn {
  display: block;
  width: 0.7rem;
  height: 0.2359rem;
  line-height: 0.2333rem;
  font-size: 0.14rem;
  text-align: center;
  border: 1px solid #ff6743;
  border-radius: 0.2576rem;
  color: #ff6743;
  position: absolute;
  bottom: 0.1rem;
  right: 0;
}
/* 已抢光 */
.shade-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.show-main__current__item__pic__overlay--status {
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.55rem;
}
.shade-overlay__status {
  display: block;
  text-align: center;
  border: 2px solid rgba(254, 254, 254, 0.54);
  border-radius: 50%;
  font-size: 0.14rem;
  color: #fefefe;
}
.load-more {
  text-align: center;
  margin-top: 0.1rem;
}

.bottom-foot {
  width: 100%;
  height: 0.29rem;
  background: linear-gradient(0deg, #fe5b48, #f54d39);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
}

.bottom-foot__item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.bottom-foot__item--img {
  width: 0.7rem;
  height: 0.28rem;
  margin-top: -0.2rem;
}

.bottom-foot__item--lab {
  color: #fbe8c3;
  font-size: 0.12rem;
}

.float-block {
  position: fixed;
  bottom: 0.58rem;
  right: 0.1rem;
  width: 100%;
  height: 100%;
  z-index: 99;
  width: 0.658rem;
  height: 0.58rem;
}
.float-block img {
  width: 100%;
  height: 100%;
}
</style>