import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPanel from '../components/LoginPanel.vue'
import style from '../scss/style.scss'
import MainMenu from '../components/MainMenu.vue'

const routes = [{
        path: '/login',
        name: 'loginpage',
        component: LoginPanel,
        style
    },
    {
        path: '/hospitalsview',
        name: 'menu',
        component: MainMenu,
        style
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
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