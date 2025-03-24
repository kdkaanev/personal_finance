import { createRouter, createWebHistory } from 'vue-router';
import BudGets from '../components/BudGets.vue';
import OverView from '../components/OverView.vue';
import PotsCart from '../components/PotsCart.vue';
import RecurringBills from '../components/RecurringBills.vue';
import TransActions from '../components/TransActions.vue';
import HomePage from '../views/HomePage.vue';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LogIn },
  { path: '/signup', name: 'signup', component: SignUp },
/*   { path: '/overview', name: 'overview', component: OverView },
  { path: '/budget', name: 'budget', component: BudGets },
  { path: '/pots', name: 'pots', component: PotsCart },
  { path: '/transactions', name: 'transactions', component: TransActions },
  { path: '/recurring', name: 'recurring', component: RecurringBills }, */

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
