<script>
export default {
  emits: ['change-component'],
  data() {
    return {
      buttons: [
        { label: 'Overview', icon: 'icon-nav-overview.svg', component: 'OverView' },
        { label: 'Transactions', icon: 'icon-nav-transactions.svg', component: 'TransActions' },
        { label: 'Budgets', icon: 'icon-nav-budgets.svg', component: 'BudGets' },
        { label: 'Pots', icon: 'icon-nav-pots.svg', component: 'PotsCart' },
        { label: 'Recurring Bills', icon: 'icon-nav-recurring-bills.svg', component: 'RecurringBills' },
       

      ],
      activeIndex: null,
      hoverIndex: null,
      isMinimized: false,
    };
  },

  methods: {
    setActive(index, component) {
      this.activeIndex = index;
      this.$emit("change-component", component)
    },
    getIconPath(icon) {
      return new URL(`../assets/icons/${icon}`, import.meta.url).href;
    },
    toggleMenu() {
      this.isMinimized = !this.isMinimized;
    }
  
  },
  computed: {
    isMinimized() {
      return this.isMinimized;
    }
  }
};
</script>

<template>
  <nav :class="['show-bar', { 'hide-bar': isMinimized }]">
    <img class="logo" src="../assets/icons/logo-large.svg" alt="logo">
    <div class="nav-links">
      <button
        v-for="(button, index) in buttons" :key="index"
        class="btn-nav" :class="[{ active: activeIndex === index }]"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        @click="setActive(index, button.component)"
      >
        <img :src="getIconPath(button.icon)" alt="icon">
        <span class="btn-label">{{ button.label }}</span>
      </button>
    
    </div>
      <button v-if="!isMinimized" class="btn-min" @click="toggleMenu">
        <img class="icon-nav" src="../assets/icons/icon-minimize-menu.svg" alt="house">Minimize Menue
    </button>
    <button v-else class="btn-min"
    @click="toggleMenu">
      <img class="icon-min" src="../assets/icons/icon-menu.svg" alt="house">
    </button>
  
  
  </nav>
     


</template>

<style scoped>
.show-bar {
/* Sidebar/Sidebar */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 24px;
gap: 24px;

width: 300px;
height: 1064px;

background: #201F24;
border-radius: 0px 16px 16px 0px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
z-index: 0;

}
.logo {
  /* Logo */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 40px 32px;
gap: 8px;

width: 300px;
height: 101.76px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}
.nav-links {
  /* Menu Section */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 24px 0px 0px;
gap: 4px;

width: 300px;
height: 800px;
max-height: 800px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;

}
.btn-nav {
  /* Sidebar/Sidebar Menu */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 32px;
gap: 16px;

width: 276px;
height: 56px;
color: #fff;
opacity: 0.6;
background:none;
border-left: 4px solid #277C78;
border-radius: 0px 12px 12px 0px;
cursor: pointer;
transition: background 0.3s ease ransform 0.2s ease;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

}


.btn-nav img {
  /* Icons/Icons Collection (Phosphor Icons) */

width: 24px;
height: 24px;
color: #fff;
transition: filter 0.3s ease, transform 0.2s ease;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}

/* Sidebar/test */

.btn-nav:hover {
  color: #fff;
  opacity: 1;
  transition: background-color 1s ease;
}
.btn-nav.active {
  background: #fff;
  color:black;
  opacity: 1;
}
.btn-nav.active img {
  filter: brightness(0) saturate(100%) invert(28%) sepia(38%) saturate(384%) hue-rotate(133deg) brightness(92%) contrast(92%);
  transform: scale(1.1);
}


.btn-min {
  /* Sidebar/Sidebar Minimize Button */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 32px;
gap: 16px;

width: 300px;
height: 56px;

border-radius: 0px 12px 12px 0px;
color: #F8F4F0;
cursor: pointer;
/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.hide-bar {
  /* Sidebar/Sidebar */
  width: 90px;
}
.hide-bar .btn-label {
  display: none;
}
.hide-bar .logo {
  padding: 40px 8px;
}
.hide-bar .btn-nav {
  background-color: transparent;
  border-left: none;
}
.icon-min {
  width: 32px;
  height: 32px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  transition: filter 0.3s ease, transform 0.2s ease;
}
</style>
