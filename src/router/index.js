import { createRouter, createWebHashHistory } from 'vue-router'
// import Vue from 'vue'
// import HomeView from '../views/HomeView.vue'
import LoginPanel from '../components/LoginPanel.vue'
import MainMenu from '../components/MainMenu.vue'
// import '../'


const routes = [
    // {
    //     path: '/login',
    //     name: 'loginpage',
    //     component: LoginPanel
    // },
    {
        path: '/hospitals',
        name: 'MainMenu',
        component: MainMenu
    },
    {
        path: '/',
        name: 'LoginPanel',
        component: LoginPanel
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router