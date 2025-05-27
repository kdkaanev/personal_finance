import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AuthPage from '../views/AuthPage.vue';


const routes = [
  { path: '/home/', name: 'home', component: HomePage },
  { path: '/', name: 'auth', component: AuthPage },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
