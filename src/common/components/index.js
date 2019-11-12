import Vue from "vue";
import Header from "./header_home";
// import BScroll from "./bscroll"
let componentMap = [
    Header,
]


componentMap.forEach((item)=>{
    // console.log(item)
    Vue.component(item.name,item)
})