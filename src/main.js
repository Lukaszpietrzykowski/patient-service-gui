import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./scss/style.scss"
import axios from "axios";


// import Vue from 'vue';
// import VueFilter from 'vue-filter';

axios.defaults.withCredentials = true;
createApp(App).use(router).mount('#app');
// Vue.use(VueFilter);