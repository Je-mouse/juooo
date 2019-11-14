const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "/home":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/vip":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/user":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/Show":{
                target:"https://api.juooo.com",
                changeOrigin:true
            }

        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
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