import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Category from '../pages/Category.vue';

const baseUrl = import.meta.env.BASE_URL || '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: Category
  }
];

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes
});

export default router;
