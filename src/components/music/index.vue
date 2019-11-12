<template>
<div id="music">
    <section>
        <ol>
            <h2>music</h2>
            <li v-for="(item,key) in data" :key="key">
                <a href="#"><img :src="item.pic"/></a>
                <div id="right">
                    <strong>{{item.show_time_top}}</strong><span>{{item.show_time_bottom}}</span>
                    <a  href="#">
                        <h5>{{item.name}}</h5>
                    </a>
                    <p>{{item.city_name}}<i>|</i>{{item.venue_name}}</p>
                    <b>￥{{item.min_price}}<span>起</span></b>
                </div>
            </li>
        </ol>
    </section>   
</div>
</template>
<script>
// import {classifyApi} from "@api/classify"
export default {
    name:"Music",
    // created(){
    //     this.getGoodsList(36);
    // },
    // methods:{
    //     async getGoodsList(id){
    //           let data=await classifyApi(id);
    //           let list=data.data.list;
    //           console.log(list);
    //     }
    // }
     
}
</script>
<style>
h2{font-size: .18rem}
    section{ position: absolute; left: 0;right: 0;top: 0; bottom: 0;overflow: auto;padding-top: .71rem;}
        section ol{display: flex;padding: .07rem;flex-direction: column;}
        section ol li{ list-style: none;display: flex;font-size: .14rem; color: #666; padding: 0.05rem 0;}
       
        ol li img{ width: 0.9rem;border-radius: .08rem;border: .01rem solid #ebebeb;position: relative;overflow: hidden;}

        #right{ margin-left: 0.1rem; }
        #right strong,span{font-size: .13rem;}
        #right strong{ color: #232323;margin-right: .05rem;}
        
        #right a h5{
            color: #232323;
            font-size: .14rem; 
            margin-top: .1rem;
            padding-right: .1rem;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 1.9rem;
            height: .38rem;
            }
        /* #right a h6{ white-space: nowrap;width: 2rem;overflow: hidden;text-overflow: ellipsis; } */
        /* #right a h5{} */
        
        #right p{overflow:hidden;height:.15rem;margin-top: .1rem;width: 2rem;font-size: .1rem;color: #999;height: 0.15rem;line-height: 0.15rem;margin-bottom: 0.1rem;}
        #right p i{ font-style: normal; margin: 0 .05rem;}
        #right b{font-weight: normal;color: #ff664383;font-size: .13rem;}
        #right b span{color: #999; margin-left: 0.05rem;}
</style>