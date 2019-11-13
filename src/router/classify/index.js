export default {
    path:"/classify",
    component:_=>import("@pages/jerry/classify"),
    name:"classify",
    children:[
        {
            path:"detail/:id",
            component:_=>import("@pages/jerry/detail"),
            name:"detail"
        },
    //     {
    //         path:"opera",
    //         component:_=>import("@components/opera"),
    //         name:"opera",
    //     },
    //     // {
    //     //     path:"child",
    //     //     component:_=>import("@components/child"),
    //     //     name:"child",
    //     // },
    ]
}