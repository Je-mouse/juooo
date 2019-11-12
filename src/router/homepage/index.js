export default {
    path: "/homepage",//双11首页
    name: "homepage",
    meta: {
        flag: false,
        requiredAuth: false
    },
    component: _ => import("@pages/grace/homepage"),
    children: [
        {
            path: '/homepage',
            redirect: '/homepage/homepageNow'
        },
        {
            path: 'homepagenow',
            component: _ => import("@components/homepageNow"),
            name: "homepagenow",
            meta: {
                flag: false,
                requiredAuth: false
            },
        },
        {
            path: 'homepagecomming',
            component: _ => import("@components/homepageComming"),
            name: "homepagecomming",
            meta: {
                flag: false,
                requiredAuth: false
            },
        }
    ]
}

