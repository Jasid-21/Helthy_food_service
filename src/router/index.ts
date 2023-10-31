import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServiceView from '../views/ServiceView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },

  {
    path: '/services/:title',
    name: 'services',
    component: ServiceView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes
});

export default router;
