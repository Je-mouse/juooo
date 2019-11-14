import vue from "vue"
// import loadingView from "./index.vue";
class JSLoding{
    constructor(){
        let LoadingFn=vue.extend(loadingView)
        new LoadingFn({	//相当于new Vue
            el:document.createElement("div")
        })
    }
	loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
	loadingDestroy(){
	    document.body.appendChild(this.loadingVm.$mount().$el)
    }
}
let mount=new JSLoding();
let loadingMount=mount.loadingMount();
let loadingDestroy=mount.loadingDestroy();
export default{
    loadingMount,
    loadingDestroy
}