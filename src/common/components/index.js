import Vue from "vue";
import Header from "./header";
import Nav from "./nav";
import tabBar from "./tabBar";

let componentMap=[
    Header,
    Nav,
    tabBar
]
componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})