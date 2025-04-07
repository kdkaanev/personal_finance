import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';
import TransActions from '../components/TransActions.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LogIn },
  { path: '/signup', name: 'signup', component: SignUp },
  { path: '/transactions', name: 'transactions', component: TransActions},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
