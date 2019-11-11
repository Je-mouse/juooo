const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "api":{
                target:"https://m.juooo.com",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src")
            }
        }
    }
}