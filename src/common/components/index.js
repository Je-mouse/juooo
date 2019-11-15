import Vue from "vue";
import Header from "./header";
import Nav from "./nav";

let componentMap=[
    Header,
    Nav
]
componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})