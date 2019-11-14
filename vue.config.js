const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "/Show":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/Scores":{
                target:"https://m.juooo.com",
                changeOrigin:true
            },
            "/Schedule":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/Promotion":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/vip":{
                target:"https://api.juooo.com",
                changeOrigin:true
            },
            "/tour":{
                target:"https://m.juooo.com",
                changeOrigin:true
            },
            "/theatre":{
                target:"https://api.juooo.com",
                changeOrigin:true
            }
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
                "@lib": path.join(__dirname, "./src/lib"),
            }
        }
    }
}