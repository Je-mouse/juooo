<template>
  <div>
    <div class="header">
      <div class="top">
        <div class="head-address">
          <i class="iconfont">&#xe600;</i>
          <span>全国</span>
        </div>
        <input type="text" placeholder="搜索热门演出" @click="handleSearch()"/>
        <div class="head-space" v-for="(img,imgpic) in top_icon" :key="imgpic">
          <img 
            :src="img.pic"
            alt
          />
        </div>
      </div>
      <div class="swiper-container" ref="wrapper1">
        <div class="swiper-wrapper" id="wrapper">
          <div class="swiper-slide" v-for="(slide,index) in slide_list" :key="index" >
            <img 
              :src="slide.image_url"
            />
          </div>
        </div>
        <div class="swiper-pagination" ref="swp1"></div>
      </div>
    </div>
    <div class="middle">
      <div class="main">
        <div class="label">
          <ul>
            <li v-for="classify in classify_list" :key="classify.id" >
              <img
                :src="classify.pic"
                alt
              />
              <p>{{classify.name}}</p>
            </li>
          </ul>
        </div>
        <div class="card">
          <img
            :src="advert"
            alt
          />
        </div>
        <div class="operation">
          <ol>
            <li v-for="(ollist,bu) in ollist" :key="bu">
              <h3>{{ollist.name}}</h3>
              <div v-html="ollist.describe"></div>
              <img
                :src="ollist.pic"
                alt
              />
            </li>
          </ol>
          <ul>
            <li v-for="(ullist,ji) in ullist" :key="ji">
              <h3>{{ullist.name}}</h3>
              <div v-html="ullist.describe"></div>
              <div>
                <img
                  :src="ullist.pic"
                  alt
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="section">
        <h3>
          热门演出
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
              alt
            />
          </span>
        </h3>
        <ul>
          <li v-for="(hots_show_list,wei) in show_list" :key="wei">
            <img
              :src="hots_show_list.pic"
              alt
            />
            <h4>{{hots_show_list.show_name}}</h4>
          </li>
        </ul>
      </div>

      <div class="show">
            <h3 class="h3">巡回演出
                <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""></span>
            </h3>
            <ul class="show_box">
              <div>
                <li class="show_heng" v-for="(xunhuiList,xun) in xunhuiList" :key="xun">
                    <img :src="xunhuiList.pic">
                    <h3>{{xunhuiList.show_name}}</h3>
                    <p>{{xunhuiList.schedular_num}}场巡演</p>
                </li>
              </div>
            </ul>
        </div>

      <div class="vip">
        <div class="member">
          <img src="../../../../public/img/vip.jpg" alt />
        </div>
        <div class="vip_box">
          <div class="left">
            <h3>
              免费观影
              <span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
                  alt
                />
              </span>
            </h3>
            <div class="left_vip" v-if="zhuan[0]">
              <img
                :src="zhuan[0].pic"
                alt
              />
              <p>
                ￥{{0}}
                <del>￥{{parseInt(zhuan[0].price)}}</del>
              </p>
            </div>
          </div>
          <div class="right">
            <h3>
              专享折扣
              <span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
                  alt
                />
              </span>
            </h3>
            <div class="right_vip" v-if="zhe">
              <img
                :src="zhe.pic"
                alt
              />
              <p>
                {{zhe.min_discount}}
                <span>折</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="warp">
        <div class="warp_list">
          <h3>
            演唱会
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
                alt
              />
            </span>
          </h3>
          <div class="warp_list-box">
            <div class="warp_list-row" v-if="music">
              <img
                :src="music.pic"
                alt
              />
              <div class="warp_list-info">
                <p>
                  <b>{{music.date}}</b>
                  <span>{{music.week}}</span>
                </p>
                <h3>{{music.schedular_name}}</h3>
                <p>{{music.city_name}} | {{music.venue_name}}</p>
              </div>
            </div>
          </div>
          <div class="warp_list-column" v-if="musiclist">
            <ul>
              <li v-for="(musiclist,sche_id) in musiclist" :key="sche_id">
                <img
                  :src="musiclist.pic"
                  alt
                />
                <h3>{{musiclist.schedular_name}}</h3>
                <p>
                  <b>¥{{parseInt(musiclist.low_price)}}</b>
                  <span>起</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="place">
        <h3 class="flexbox">
          热门场馆
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg=="
              alt
            />
          </span>
        </h3>
        <div class="bao">
          <div class="place_box" v-for="(hotguan,index) in hotguan" :key="index">
            <div class="place_box-list">
              <div class="addres">
                <div class="addres_img">
                  <img
                    :src="hotguan.pic"
                    alt
                  />
                </div>
                <div class="addres_font">
                  <div class="ell">
                    <h3>{{hotguan.name}}</h3>
                  </div>
                  <p>{{hotguan.count}}场在售演出</p>
                </div>
                <div class="addres_icon">
                  <i>...</i>
                </div>
              </div>
              <div class="data">
                <p v-for="(n,i) in hotguan.showList" :key="i">
                  <span>{{n.show_time}}</span>
                  <span></span>
                </p>
              </div>
              <ul>
                <li v-for="(n,i) in hotguan.showList" :key="i">
                  <img
                    :src="n.pic"
                    alt
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      
    </div>
    <div class="foryou">
      <h4>为你推荐</h4>
      <div class="all">
        <div class="showlist" v-for="(foryou,red) in foryou" :key="red" >
          <div class="showlist_img">
            <img
              :src="foryou.schePic"
              alt
            />
          </div>
          <div class="showlist_info">
            <div class="showlist_info-time">
              <span>{{foryou.show_time}}</span>
            </div>
            <div class="showlist_info-jieshaobox">
              <div class="showlist_info-jieshao">{{foryou.show_name}}</div>
            </div>
            <p>{{foryou.c_name}} | {{foryou.v_name}}</p>
            <div class="showlist_info-monay">
              <b>￥{{parseInt(foryou.low_price)}}</b>
              <span>起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {juoooApi,juoooMiddleApi,juoooForYouApi ,juooofenleiApi,juoooXunHuiApi,juoooHotGuanApi} from "@api/juooo";
import {vipApi} from "@api/vip";
export default {
  name: "Juooo",
  data(){
    return{
      top_icon:[],//头部的gif图
      advert:"",//椭圆图
      classify_list:[], //五种剧类型
      slide_list:[],//轮播图
      operation_list:[],//operation部分
      ollist:[],//operation上部分
      ullist:[],//operation下部分
      show_list:[],//热门演出
      foryou:[],//为你推荐
      zhuan:"",//专属票价
      zhe:"",//专享折扣
      music:"",//音乐会
      musiclist:[],//音乐会例表
      xunhuiList:[],//巡回演出
      hotguan:[],//热门场馆
    }
  },
  created(){
    this.handleGetJuoooList();
    this.handleGetShowList();
    this.handleGetForList();
    this.handleGetDiscount();//折扣
    this.handleGetFenLei();
    this.handleGetXunHui();
    this.handleGetHotGuan();
  },
  methods:{
    async handleGetJuoooList(){
      let data = await juoooApi();
      this.top_icon = data.data.top_icon;
      this.advert = data.data.ad_list.insert_ad[0].pic;
      this.classify_list = data.data.classify_list;
      this.slide_list = data.data.slide_list;
      // console.log(this.slide_list)
      console.log(this.classify_list)
      this.operation_list = data.data.operation_list;
      for(var i=0;i<this.operation_list.length;i++){
        this.ollist = this.operation_list.slice(0,2);
        this.ullist = this.operation_list.slice(-3); 
      }
    },
    async handleGetShowList(){
      let data = await juoooMiddleApi();
      this.show_list = data.data.hots_show_list;
      
    },
    async handleGetForList(){
      let data = await juoooForYouApi();
      this.foryou = data.data.recommend_show_list;
    },
    async handleGetDiscount(){
      let data = await vipApi();
      this.zhuan = data.data.watchList;//免费观影
      this.zhe = data.data.discountList[0];
    },
    async handleGetFenLei(){
      let data = await juooofenleiApi();
      this.music = data.data[4].list.slice(0,1)[0];
      this.musiclist = data.data[4].list.slice(1)
      //console.log(this.musiclist)
      //console.log(this.music)
      //console.log(data)
    },
    async handleGetXunHui(){
      let data = await juoooXunHuiApi();
      this.xunhuiList = data.data.tour_show_list;
    },
    async handleGetHotGuan(){
      let data = await juoooHotGuanApi();
      this.hotguan = data.data.theatre_list;
    },
    handleSearch(){
      this.$router.push("/search")
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.wrapper1, {
      loop: true,
      autoplay: true,
      autoplay: {
        disableOnInteraction: false
      },
      observer: true, 
      observeParents: true,
      pagination: {
        el: this.$refs.swp1
      }
    });
  },
}
</script>

<style>
*{margin:0;padding:0;}
html,body{position:relative;height:100%;}
html{font-size:31.25vw;}
body{font-size:14px;display:flex;flex-direction: column;}
li{list-style:none;}


.header{width:100%;height:1.672rem;position: relative;}
.header .swiper-container {width: 100%; height: 100%;}
.header .swiper-wrapper{position: relative;}
.header .swiper-container .swiper-slide {width:100%;height:1.672rem;}
.header .swiper-container .swiper-slide img{width:100%;}
.top {width:100%;height:0.375rem;background:#fff;position:fixed;top:0;z-index: 2;padding:0 .128rem;box-sizing: border-box;
        display:flex;justify-content: space-between;align-items: center;}
.top .head-address{font-size: .15rem;color: #232323;width:.89rem;}
.top .head-address i{color:orange;font-size:.2rem}
.top .head-address span{font-size:.14rem;font-weight:bold;}
.top input{width: 2.04rem;height: 0.259rem;display: flex;align-items: center;border: 1px solid hsla(0,0%,88%,.2); outline: none;
            border-radius: .266rem;border-color: #ebebeb;padding-left:0.36rem;
            background:#f5f5f5 url(https://m.juooo.com/static/img/search_icon.c387af4.png) no-repeat .15rem center;
            background-size:.2rem;}
.top .head-space img{width:.27rem;}


.middle{width:100%;position:absolute;left:0;top:0;padding-top:1.67rem;padding-bottom:0.42rem;background:#fff;}
.main{width:100%;height:4.58rem;box-sizing: border-box;padding:.2rem .15rem;}
.main .label{margin-bottom:.2rem;}
.main .label ul{width:100%;height:.753rem;display:flex;justify-content: space-around;align-items: center;}
.main .label ul li{width:.51rem;height:.753rem;text-align: center;}
.main .label ul li img{width:100%;}

.main .card{width:100%;height:1rem;margin-bottom:.1rem;border-radius: .5rem;overflow: hidden;}
.main .card img{width:100%;height:100%;}

.main .operation{width:100%;height:2.021rem;background:#f5f5f5;border: .02rem solid #f5f5f5;}
.main .operation ol{display: flex;justify-content: space-between;width:100%;height:.9rem;}
.main .operation ol li{width:1.42rem;height:.9rem;background:#fff;position:relative;}
.main .operation ol li h3{width:.9rem;height:0.125rem;font-size:.165rem;line-height:.65rem;box-sizing: border-box;margin-left:.15rem;}
.main .operation ol li p{width:.9rem;height:.4rem;font-size:.1rem;line-height:.9rem;margin-left:.15rem;}
.main .operation ol li p span{color:#f00;}
.main .operation ol li img{width:0.4rem;display:block;margin-left:.97rem;position:absolute;bottom:.24rem;}
.main .operation ul{display: flex;justify-content: space-between;width:100%;height:1.065rem;margin-top:.06rem;}
.main .operation ul li{width:.944rem;height:1.06rem;background:#fff;display: flex;justify-content: space-around;align-items:center; flex-direction: column;}
.main .operation ul li h3{font-size:.13rem;}
.main .operation ul li p{font-size:.1rem;}
.main .operation ul li p span{color:red;}
.main .operation ul li div img{width:.384rem;}



.section{width:100%;height:2.717rem;box-sizing: border-box;padding:.2rem 0 .32rem .15rem;overflow: hidden;font-size:.23rem;}
.section h3{width:100%;height:.23rem;display: flex;justify-content: space-between;font-size:.196rem;}
.section span img{width:.2rem;}
.section ul{width:100%;height:3.517rem;margin-top:.15rem;display: flex;overflow: auto;}
.section ul li{width:1.07rem;height:2.017rem;margin-right:.08rem;}
.section ul li img{width:1.07rem;}
.section ul li h4{font-size:.125rem; width:1.07rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;
              -webkit-line-clamp:2;}


.show{width:100%;height:2rem;padding:.2rem 0 .13rem;position:relative;background:#f5f5f5;}
.show .h3{width:100%;height:.23rem;display: flex;justify-content: space-between;padding-left:.15rem;box-sizing: border-box;font-size:.23rem;}
.show span img{width:.2rem;}
.show .show_box{width:100%;height:2rem;margin-top:.15rem;overflow: hidden;}
.show .show_box div{width:100%;overflow: auto;display: flex;}
.show .show_box .show_heng{width:2.09rem;margin-right:.2rem;}
.show .show_box .show_heng  img{width:2.09rem;height:1.07rem;}
.show .show_box .show_heng  h3{text-align:center;height:.2rem;font-size:.15rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.show .show_box .show_heng  p{height:.2rem;font-size:.05rem;color: #666;line-height:.2rem; text-align: center;}



.vip{width:100%;height:2.744rem;overflow: hidden;}
.vip .member{width:100%;height:.4rem;}
.vip .member img{width:100%;}
.vip .vip_box{width:100%;height:2.194rem;box-sizing:border-box;padding:0 .15rem .15rem;display:flex;background:#f5f5f5;}
.vip .vip_box .left{width:66.66%;height:2.194rem;}
.vip .vip_box .left h3{width:100%;height:.415rem;display: flex;justify-content: space-between;line-height:.415rem;}
.vip .vip_box .left span img{width:.2rem;vertical-align: middle;}
.vip .vip_box .left .left_vip img{width:1.065rem;}
.vip .vip_box .left .left_vip p{width:.95rem;height:0.248rem;padding:.12rem;font-size:.15rem;color:#ff6743;}
.vip .vip_box .left .left_vip p del{font-size:0.1rem;color: #999;}
.vip .vip_box .right{width:33.33%;height:2.194rem;}
.vip .vip_box .right h3{width:100%;height:.415rem;display: flex;justify-content: space-between;line-height:.415rem;}
.vip .vip_box .right span img{width:.2rem;vertical-align: middle;}
.vip .vip_box .right .right_vip img{width:1.065rem;}
.vip .vip_box .right .right_vip p{width:.95rem;height:0.248rem;padding:.12rem;font-size:.15rem;color:#ff6743;}
.vip .vip_box .right .right_vip p span{font-size:0.1rem;color: #999;}



.warp{width:100%;min-height:4.407rem;}
.warp .warp_list{width:100%;height:4.407rem;padding-bottom:.3rem;}
.warp .warp_list h3{width:100%;height:.23rem;display:flex;font-size:.23rem;justify-content: space-between;box-sizing: border-box;line-height:.23rem;}
.warp .warp_list h3 span img{width:.2rem;vertical-align: middle;}
.warp .warp_list .warp_list-box{width:100%;height:1.66rem;margin-top:.15rem;background: rgb(78, 67, 68);}
.warp .warp_list .warp_list-row{width:100%;height:1.66rem;box-sizing:border-box;padding:.14rem 0 .14rem .15rem;display:flex;}
.warp .warp_list .warp_list-row img{width:1rem;display:block;}
.warp .warp_list .warp_list-row .warp_list-info{height:2.22rem;padding-top:.16rem;margin-left:.15rem;color:#fff;}
.warp .warp_list .warp_list-row .warp_list-info p:nth-of-type(1){height:.24rem;}
.warp .warp_list .warp_list-row .warp_list-info p:nth-of-type(1) b{width:.45rem;;font-size:.175rem;margin-right:.05rem;}
.warp .warp_list .warp_list-row .warp_list-info h3{height:.448rem;margin-top:.1rem;font-size:.15rem;overflow:hidden;text-overflow:ellipsis;
                display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
.warp .warp_list .warp_list-row .warp_list-info p:nth-of-type(2){height:.24rem;margin-top:.1rem;}

.warp .warp_list .warp_list-column{width:100%;height:2.3rem;box-sizing:border-box;padding-top:.15rem;padding-left:.15rem;overflow: hidden;}
.warp .warp_list .warp_list-column ul{width:100%;height:2.4rem;overflow: auto;display: flex;}
.warp .warp_list .warp_list-column ul li{height:2.215rem;margin-right:.06rem;} 
.warp .warp_list .warp_list-column ul li img{width:1.07rem;}
.warp .warp_list .warp_list-column ul li h3{width:1.07rem;height:.425rem;margin-top:.05rem;font-size:.125rem;overflow:hidden;text-overflow:ellipsis;
                display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
.warp .warp_list .warp_list-column ul li p{width:1.07rem;height:.2rem;}
.warp .warp_list .warp_list-column ul li p b{color: #ff6743;font-size:.15rem;margin-right:.05rem;}
.warp .warp_list .warp_list-column ul li p span{color: #999;font-size:.1rem;}



.place{width:100%;height:2.871rem;box-sizing: border-box;padding-left:.128rem;margin-bottom:.17rem;overflow: hidden;}
.place .flexbox{width:100%;height:.208rem;display:flex;font-size:.208rem;justify-content: space-between;box-sizing: border-box;line-height:.208rem;}
.place .flexbox span img{width:.2rem;vertical-align: middle;}
.place .bao{display: flex;overflow: auto;}
.place .place_box{width:100%;height:2.65rem;margin-top:.128rem;}
.place .place_box .place_box-list{width:1.93rem;height:2.173rem;padding:.17rem .145rem;border:1px solid #ebebeb;border-radius:0.05rem;margin-right:.2rem;}
.place .place_box .place_box-list .addres{width:100%;height:.435rem;display:flex;justify-content: space-around;}
.place .place_box .place_box-list .addres_img{width:.445rem;height:.445rem;}
.place .place_box .place_box-list .addres_img img{width:100%;height:100%;}
.place .place_box .place_box-list .addres_font{width:1.07rem;height:.405rem;}
.place .place_box .place_box-list .addres_font .ell{width:1.07rem;height:.192rem;}
.place .place_box .place_box-list .addres_font h3{font-size:.15rem;width:1.05rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.place .place_box .place_box-list .addres_font p{width:100%;height:.128rem;margin-top:.1rem;color: #666;font-size:.1rem;}
.place .place_box .place_box-list .data{width:100%;height:.017rem;margin-top:0.341rem;background-color: #ebebeb;position:relative;}
.place .place_box .place_box-list .data p:nth-of-type(1){width:50%;height:0.29rem;position:absolute;display:flex;flex-direction: column;justify-content: space-between;align-items: center;color:#b3b3b3;top:-0.25rem;}
.place .place_box .place_box-list .data p:nth-of-type(1) span:nth-of-type(2){display: block;width:0.06rem;height:0.06rem;background-color: #ccc;border-radius: 50%;}
.place .place_box .place_box-list .data p:nth-of-type(2){width:50%;height:0.29rem;position:absolute;display:flex;flex-direction: column;justify-content: space-between;align-items: center;color:#b3b3b3;top:-0.25rem;margin-left:50%;}
.place .place_box .place_box-list .data p:nth-of-type(2) span:nth-of-type(2){display: block;width:0.06rem;height:0.06rem;background-color: #ccc;border-radius: 50%;}
.place .place_box .place_box-list ul{width:100%;height:1.266rem;margin-top:.15rem;display:flex;justify-content: space-between;}
.place .place_box .place_box-list ul li{border: 1px solid #ebebeb;}
.place .place_box .place_box-list ul li img{width:.824rem;height:1.236rem;}




.foryou{width:100%;box-sizing: border-box;padding:0 .128rem;margin-top:.256rem;}
.foryou h4{height:.208rem;font-size:.208rem;}
.foryou .all{width:100%;margin-top:.128rem;}
.foryou .all .showlist{width:100%;height:1.2rem;margin-bottom:.206rem;display:flex;}
.foryou .all .showlist .showlist_img{width:.896rem;}
.foryou .all .showlist .showlist_img img{width:.896rem;}
.foryou .all .showlist .showlist_info{height:1.229rem;margin-left:.128rem;}
.foryou .all .showlist .showlist_info .showlist_info-time{height:.14rem;margin-top:.05rem;font-weight: bold;}
.foryou .all .showlist .showlist_info .showlist_info-jieshaobox{height:.6rem;display:flex;flex-direction: column;justify-content: center;}
.foryou .all .showlist .showlist_info .showlist_info-jieshaobox .showlist_info-jieshao{height:.45rem;font-weight: bold;font-size:.165rem;overflow:hidden;
                  text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
.foryou .all .showlist .showlist_info p{font-size:.125rem;color: #666;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.foryou .all .showlist .showlist_info .showlist_info-monay b{font-size: .15rem;color: #ff6743;font-weight: 400;}
.foryou .all .showlist .showlist_info .showlist_info-monay span{color: #999;}
</style>