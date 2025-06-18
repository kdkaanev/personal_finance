import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/useUserStore';
import HomePage from '../views/HomePage.vue';
import AuthPage from '../views/AuthPage.vue';


const routes = [
  { path: '/home/', name: 'home', component: HomePage , meta: { requiresAuth: true } },
  { path: '/', name: 'auth', component: AuthPage },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  // Only re-authenticate if no user and a CSRF cookie exists
  if (!userStore.user && document.cookie.includes('csrftoken')) {
    await userStore.reAuthUser();
  }

  // If route requires auth and user not logged in → redirect to login
  if (to.meta.requiresAuth && !userStore.user) {
    return next('/');
  }

  next();
});


  export default router;
