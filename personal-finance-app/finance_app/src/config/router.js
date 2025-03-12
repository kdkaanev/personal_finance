import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LogIn },
  { path: '/signup', name: 'signup', component: SignUp },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
