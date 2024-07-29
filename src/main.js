import { createApp } from 'vue';
import App from './App.vue';
import './main.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BootstrapVue3 from 'bootstrap-vue-3';

import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Category from './pages/Category.vue'; // Import Category component
import Error404 from './pages/Error404.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/404', component: Error404 },
  { path: '/category/:name', component: Category, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Add navigation guard to validate category name
router.beforeEach((to, from, next) => {
  if (to.params.name) {
    const validNames = [
      'Home',
      'Business',
      'Politics',
      'Environment',
      'World',
      'Technology',
      'Sports',
      'Health',
      'Entertainment',
      'Lifestyle'
    ];
    if (validNames.includes(to.params.name)) {
      next();
    } else {
      next({ path: '/404' }); // Redirect to Home if the category name is not valid
    }
  } else {
    next();
  }
});

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);

app.mount('#app');
