export default {
    path:"/classify",
    component:_=>import("@pages/jerry/classify"),
    name:"classify",
    children:[
        {
            path:"music",
            component:_=>import("@components/music"),
            name:"music",
        },
        {
            path:"opera",
            component:_=>import("@components/opera"),
            name:"opera",
        },
        // {
        //     path:"child",
        //     component:_=>import("@components/child"),
        //     name:"child",
        // },
    ]
}