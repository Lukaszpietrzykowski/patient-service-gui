import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./scss/style.scss"
import axios from "axios";


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('loggedIn') == true) {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        next()
    }
})





axios.defaults.withCredentials = true;
createApp(App).use(router).mount('#app');