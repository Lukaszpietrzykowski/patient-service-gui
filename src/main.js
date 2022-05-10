import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./scss/style.scss"


// import Vue from 'vue';
// import VueFilter from 'vue-filter';


createApp(App).use(router).mount('#app');
// Vue.use(VueFilter);