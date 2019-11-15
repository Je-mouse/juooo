import loadingView from "./index.vue";
import Vue from "vue"

class JSLoading {
    constructor(){
        let LoadingFn=Vue.extend(loadingView)
        this.loadingVm=new LoadingFn({	//相当于new Vue
            el:document.createElement("div")
        })
    }
    static type = "class";
	loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
	loadingDestroy(){
	    document.body.removeChild(this.loadingVm.$mount().$el)
    }
}
export default new JSLoading();