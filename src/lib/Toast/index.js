import Toast from "./index.vue"
import Vue from "vue";

export default(()=>{
    let defaultValue={
        message: '提示',
        position: 'bottom',
        duration: 5000,
        close:function(){}
    }
    let ToastTip=Vue.extend(Toast);

    let ToastTipCallback=(options)=>{
        for(var key in options){
            defaultValue[key]=options[key];
        }
        let ToastVm=new ToastTip({
            el:document.createElement("div"),
            data:{
                message:defaultValue.message,
                position:defaultValue.position,
                duration:defaultValue.duration
            },
            methods:{
                handleClose(){
                    document.body.removeChild(ToastVm.$mount().$el);
                    defaultValue.close && defaultValue.close();
                }
            },
        })
        document.body.appendChild(ToastVm.$mount().$el);
    }
    ToastTipCallback.type="function";

    return ToastTipCallback;

})()