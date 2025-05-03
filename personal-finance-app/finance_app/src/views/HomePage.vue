<script>
import SideBar from '../components/SideBar.vue';
import OverView from '../components/OverView.vue';
import TransActions from '../components/TransActions.vue';
import BudGets from '../components/BudGets.vue';
import PotsCart from '../components/PotsCart.vue';
import RecurringBills from '../components/RecurringBills.vue';
import ModalPop from '../components/sub-component/ModalPop.vue';


export default {
  components: {
    SideBar,
    OverView,
    TransActions,
    BudGets,
    PotsCart,
    RecurringBills,
    ModalPop
  },
  data() {
    return {
      currentComponent: 'OverView',
    };
  },
};




</script>

<template>
  <article class="container">
    <SideBar @change-component="currentComponent = $event" />
   
    <transition name="fade" mode="out-in">
      <component :is="currentComponent" />
    </transition>
  </article>
</template>

<style scoped>
.container {
  font-family:Public Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
 /* Desktop - Home */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
isolation: isolate;

position: relative;
width: 1440px;

background: #F8F4F0;

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
