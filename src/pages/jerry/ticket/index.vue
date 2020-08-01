<template>
    <div id="ticket">
         <Header title="票夹"/>
    <section>
        <img src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png"/>
    </section>
        <TabBar/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #ticket #header{justify-content: space-between;}

    #ticket section{padding-bottom: .48rem;
    display: flex;justify-content: center; position: absolute; left: 0;right: 0;top: 0; bottom: 0;overflow: auto;padding-top: .37rem;}
    #ticket section img{margin-top: 1.5744rem;width: .93rem;height: .66rem;}

    .footer{width:100%;height:.4159rem;box-sizing: border-box;border-top:.01rem solid #ccc;
    position:fixed;left:0;bottom:0;z-index: 3;background:#fff;}
    .footer ul{width:100%;height:.4159rem;display:flex;justify-content: space-around;align-items: center;}
    .footer ul li{text-align: center;list-style: none;}
    .footer ul li div{display: flex;flex-direction: column;margin-top: -.05rem; }
    .footer ul li a{font-size:.25rem;}
    .footer ul li p{font-size: .12rem;}
    .footer ul li:nth-child(3) a{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAwFBMV…678DRNPza6G8DXjJvzmYEugLx20JkJDCNWgkdsRsa/4B0n/rWAY2vEwQAAAABJRU5ErkJggg==) no-repeat;}
</style>