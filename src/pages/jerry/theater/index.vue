<template>
    <div id="theater">
        <Header title="剧院" icon1="1" icon2="1"/>
        <section>
            <ul>
                <li v-for="(item,key) in list" :key="key">
                    <div class="head">
                        <div class="left">
                            <img :src="item.pic"/>
                            <div>
                                <h2>{{item.name}}</h2>
                                <span>{{item.showList.length}}场在售演出</span>
                            </div>
                        </div>
                        <a href="#" class="iconfont icon-icongengduo"></a>
                    </div> 
                    <div class="content">
                        <dl>
                            <dd v-for="(n,i) in item.showList" :key="i">
                                <div class="time">
                                    <p>{{n.show_time}}</p>
                                    <span></span>
                                </div>
                                <a><img :src="n.pic"/></a>
                            </dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import {theaterApi} from "@api/classify"
export default {
    data(){
        return{
            list:"",
        }
    },
    created(){
        this.getTheater();
    },
    methods:{
        async getTheater(){
            let data = await theaterApi();
            this.list=data.data.theatre_list;
            console.log(data.data.theatre_list);
        }
    }
}
</script>
<style>
    #header{justify-content: center;position: fixed;}
    section{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin-top: .35rem;
        padding: .1rem;
        background:#fdfdfd;
    }
    section ul li{
        border: .01rem solid #ebebeb;
        border-radius: .05rem;
        display: flex;
        flex-direction: column;
        padding: .1749rem .1408rem .1749rem;
        background: #fff; height: 2.4424rem;
        box-sizing: border-box;
        box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
        margin-bottom: .1rem;
    }
    ul li .head{
        display: flex;
        height:.42rem ;
        justify-content: center;
        align-items: center;
    }
    ul li .left{
        display: flex;
        flex: 1;
        width: 2rem;
        
    }
    ul li .left div{margin-left: .1rem;}
    ul li .head h2{font-size: .14rem !important;color: black !important;}
    ul li .head h2,span{
        font-size: .12rem;
        display: block;
        width: 1.5rem;
        color: #666;
    }
    ul li img{width: .42rem;border-radius: .02rem;height: .42rem;}

    .content{
        height: 1.64rem;
        margin-top: .1rem;
        overflow: hidden;
    }
    .content dl{
            display: flex;overflow-x: scroll;
    }
    .content dd{
        height: 2rem;
        width: .9727rem;
        padding-bottom: .1rem;
    }
    .time{
        height: .2424rem;
        border-bottom: 1px solid #ebebeb;
        color: #b3b3b3;
        font-size:.12rem ;
        text-align: center;
        margin-bottom: .1rem;
        position: relative;
    }
    .time span{
        display: inline-block;
        height:.0597rem ;
        width:.0597rem ;
        position: absolute;
        background:#ccc ;
        left: .45rem;
        top: .22rem;
        border-radius: 50%;
    }
    .content a{
        display: inline-block;
        width: .9727rem;
    }
    .content img{
        width: .913rem;
        height: 1.2458rem;
    }
</style>