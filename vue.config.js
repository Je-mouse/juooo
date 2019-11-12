const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "/vip":{
                target:"https://api.juooo.com",
                changeOrigin:true
                // https://api.juooo.com/vip/index/getFlashPurchase?position=2&type=2&page=1&limit=4
            },
            "/Card":{
                target:"https://api.juooo.com",
                changeOrigin:true
                // https://api.juooo.com/vip/index/getFlashPurchase?position=2&type=2&page=1&limit=4
            },

        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@": path.join(__dirname, "./src"),
                "@assets": path.join(__dirname, "./src/assets"),
                "@common": path.join(__dirname, "./src/common"),
                "@components": path.join(__dirname, "./src/components"),
                "@pages": path.join(__dirname, "./src/pages"),
                "@router": path.join(__dirname, "./src/router"),
                "@store": path.join(__dirname, "./src/store"),
                "@utils": path.join(__dirname, "./src/utils"),
                "@api": path.join(__dirname, "./src/api"),
            }
        }
    }
}