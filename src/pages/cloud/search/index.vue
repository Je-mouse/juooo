<template>
  <div>
      <header>
        <div class="inner">
            <input type="text" placeholder="搜索热门演出"/>
            <div class="search"></div> 
            <div class="cancel"></div>
        </div>  
        <a class="out">取消</a> 
    </header>

    <div class="container">
        <div class="main">
            <p>热门搜索</p>
            <ul>
                <li>猫CATS</li>
                <li>w-inds.</li>
                <li>来自远方</li>
                <li>永不消逝的电波</li>
                <li>梁心頤</li>
                <li>摇滚红与黑</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
header{border: none;}
body{font-size:14px;background:#fff}
li{list-style: none;}
.inner{width: 2.577rem;height: .2559rem;background: #f5f5f5;border-radius: .2rem;border: 1px solid #ebebeb;display: flex;padding: 0 .25rem;
        box-sizing: border-box;position: relative;}
.inner input{border: none;background: transparent;display: inherit;outline: none;}
.inner .search{background: url(https://m.juooo.com/static/img/search_icon.c387af4.png) no-repeat;width: .1706rem;height: .1706rem;position: absolute;
        left: .08rem;top: .035rem;background-size: cover;}
.inner .cancel{background: url(https://m.juooo.com/static/img/cancel.4cc4580.png) no-repeat;width: .1706rem;height: .1706rem;position: absolute;
        right: .08rem; top: .035rem; background-size: cover;}
header .out{font-size: .12rem;color: #666;}


.container{width:100%;height:1.792rem;}
.container .main{width:100%;height:1.792rem;box-sizing: border-box;padding:.222rem .128rem 0;}
.container .main p{width:100%;height:.171rem;font-size:.1rem;color: #666;}
.container .main ul{width:100%;margin-top:.171rem;display:flex;flex-wrap:wrap;}
.container .main ul li{line-height:.299rem;padding:0 .213rem;margin-bottom:.111rem;background-color: #f5f5f5;font-size:.14rem;margin-right:.04rem;}
</style>