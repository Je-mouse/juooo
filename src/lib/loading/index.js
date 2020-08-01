<<<<<<< HEAD
import loadingView from "./index.vue";
import Vue from "vue"

class JSLoading {
    constructor(){
        let LoadingFn=Vue.extend(loadingView)
        this.loadingVm=new LoadingFn({	//相当于new Vue
=======
import vue from "vue"
import loadingView from "./index.vue";
class JSLoding{
    constructor(){
        let LoadingFn=vue.extend(loadingView)
        this.loadingVm = new LoadingFn({	//相当于new Vue
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
            el:document.createElement("div")
        })
    }
    static type = "class";
	loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
<<<<<<< HEAD
	loadingDestroy(){
        if(document.body.children.length>=4){
=======
    
    loadingDestroy(){
        if(document.body.children.length == 4){
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
            document.body.removeChild(this.loadingVm.$mount().$el)
        }
    }
	
}
<<<<<<< HEAD
export default new JSLoading();
=======

export default new JSLoding();
   
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
