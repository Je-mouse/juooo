<template>
    <div id="ticket">
         <Header title="票夹"/>
    <section>
        <img src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png"/>
    </section>
    <div class="footer">
            <ul>
                <li>
                    <div>
                         <a class="iconfont icon-zhuye">
                        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAXVBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNLZYnxAAAAHnRSTlMAoNAGw38S7dr6PK/xXVoj4KQ4JrimkYpzaVAxDuItXUgYAAABA0lEQVRIx+2S646DIBBGR0e8FIvV3i/7vf9jLlk3sAnYwWb/tOH8IiOHwImUybwlk+7R6+klV2FGrVd5BNDqFsDIK926ArqtXWw7oKpXufsWaDY/y00DtPs0zQsDzQzuIBl31eAJyZkLJg8XqdF5jOxULrqc2QRjI0b3mQOC6FJmj48uZhb+GyFzgBydtfv27HTNC7eCEXoaxN9VwkISsJThuEefJNt94Xi6HJPk42WiCEWSXBB9tHz9ur4ulyiznOX/lFmQeVE+AXdBvgOnuHwDqsdT+VEBN4pTAo0uZswf2fzOdAM7WGDYwcNOZnh2Ay1Rn51+IIvqFFkOTj3XlMms4huH9iEk3eJ+9QAAAABJRU5ErkJggg==" alt="">
                         >&#xe675;&#xe62f;&#xe653;&#xe687;-->
                        </a>
                        <p>首页</p>
                    </div>
                </li>
                <li>
                    <div> 
                        <a class="iconfont icon-icongengduo"></a>
                        <p>影院</p>
                    </div>
                </li>
                <li>
                    <div>
                         <a class="iconfont icon-icongengduo"></a>
                        <p>票夹</p>
                    </div>
                </li>
                <li>
                    <div>
                        <a class="iconfont icon-icongengduo"></a>
                        <p>我的</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #header{justify-content: space-between;}

    section{display: flex;justify-content: center; position: absolute; left: 0;right: 0;top: 0; bottom: 0;overflow: auto;padding-top: .37rem;}
    section img{margin-top: 1.5744rem;width: .93rem;height: .66rem;}

    .footer{width:100%;height:.4159rem;box-sizing: border-box;border-top:.01rem solid #ccc;position:fixed;left:0;bottom:0;z-index: 3;background:#fff;}
    .footer ul{width:100%;height:.4159rem;display:flex;justify-content: space-around;align-items: center;}
    .footer ul li{text-align: center;list-style: none;}
    .footer ul li div{display: flex;flex-direction: column;margin-top: -.05rem; }
    .footer ul li a{font-size:.25rem;}
    .footer ul li p{font-size: .12rem;}
    .footer ul li:nth-child(3) a{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAwFBMV…678DRNPza6G8DXjJvzmYEugLx20JkJDCNWgkdsRsa/4B0n/rWAY2vEwQAAAABJRU5ErkJggg==) no-repeat;}
</style>