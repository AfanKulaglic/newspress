import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import BootstrapVue3 from 'bootstrap-vue-3'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
    ]
});

const app = createApp(App)

// Use plugins before mounting the app
app.use(router);
app.use(BootstrapVue3);

app.mount('#app');
