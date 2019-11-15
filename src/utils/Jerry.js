export const load =(function(){
    var start=0;
    return function(callback,time=300){
        var end = new Date().getTime();
        if(end-start>time){
            callback();
            start=end;
        }
    }
})()