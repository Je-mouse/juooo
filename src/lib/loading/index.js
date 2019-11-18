import vue from "vue"
import loadingView from "./index.vue";
class JSLoding{
    constructor(){
        let LoadingFn=vue.extend(loadingView)
        this.loadingVm = new LoadingFn({	//相当于new Vue
            el:document.createElement("div")
        })
    }
	loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    
    loadingDestroy(){
        if(document.body.children.length == 4){
            document.body.removeChild(this.loadingVm.$mount().$el)
        }
    }
	
}

export default new JSLoding();
   