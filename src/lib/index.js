import bscroll from "./betterScroll"
const UIcomponents=[
    bscroll
]

const install=(Vue)=>{
    UIcomponents.forEach(item=>{
        Vue.component(item.name,item)
    })
}

export default{
    install
}