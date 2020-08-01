const path=require("path");
module.exports={
    devServer:{
        proxy:{
<<<<<<< HEAD
            "/Jerry":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/Jerry":""
                }
            },
            "/Juooo":{
=======
            "/yun":{
                target:"https://api.juooo.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/yun":""
                }
            },
            "/Scores":{
                target:"https://m.juooo.com",
                changeOrigin:true
            },
            "/tour":{
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
                target:"https://m.juooo.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/Juooo":""
                }
            },
<<<<<<< HEAD
=======
            // "/user":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // },
            // "/city":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // },
            // "/Card":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            //     // https://api.juooo.com/vip/index/getFlashPurchase?position=2&type=2&page=1&limit=4
            // },
            // "/Show":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // },
            
            // "/Schedule":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // },
            // "/Promotion":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // },
            // "/vip":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // },
            
            // "/theatre":{
            //     target:"https://api.juooo.com",
            //     changeOrigin:true
            // }
>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
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