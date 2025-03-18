<script>
export default {
  data() {
    return {
      buttons: [
        { label: 'Overview', icon: 'icon-nav-overview.svg' },
        { label: 'Transactions', icon: 'icon-nav-transactions.svg' },
        { label: 'Budgets', icon: 'icon-nav-budgets.svg' },
        { label: 'Pots', icon: 'icon-nav-pots.svg' },
        { label: 'Recurring Bills', icon: 'icon-nav-recurring-bills.svg' },

      ],
      activeIndex: null,
      hoverIndex: null,
    };
  },

  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
    getIconPath(icon) {
      return new URL(`../assets/icons/${icon}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <nav>
    <img class="logo" src="../assets/icons/logo-large.svg" alt="logo">
    <div class="nav-links">
      <button
        v-for="(button, index) in buttons" :key="index"
        class="btn-nav" :class="[{ active: activeIndex === index }]"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        @click="setActive(index)"
      >
        <img :src="getIconPath(button.icon)" alt="icon">
        <span>{{ button.label }}</span>
      </button>
    
    </div>
    <button class="btn-min">
        <img class="icon-nav" src="../assets/icons/icon-minimize-menu.svg" alt="house">Minimize Menue
      </button>
  </nav>

<!--   <nav>
    <img class="logo" src="../assets/picture/logo-large.svg" alt="logo">
    <ul class="nav-links">
      <li>
        <button class=" btn-nav">
          <img class="icon-nav" src="../assets/picture/icon-nav-overview.svg" alt="house"> Overview
        </button>
      </li>
      <li>
        <button class="btn-nav">
          <img class="icon-nav" src="../assets/picture/icon-nav-transactions.svg" alt="house"> Transactions
        </button>
      </li>
      <li>
        <button class="btn-nav">
          <img class="icon-nav" src="../assets/picture/icon-nav-budgets.svg" alt="house"> Budgets
        </button>
      </li>
      <li>
        <button class="btn-nav">
          <img class="icon-nav" src="../assets/picture/icon-nav-pots.svg" alt="house"> Pots
        </button>
      </li>
      <li>
        <button class="btn-nav">
          <img class="icon-nav" src="../assets/picture/icon-nav-recurring-bills.svg" alt="house"> Recurring Bills
        </button>
      </li>
    </ul>
    <button class="btn-min">
      <img class="icon-nav" src="../assets/picture/icon-minimize-menu.svg" alt="house">Minimize Menue
    </button>
  </nav> -->
</template>

<style scoped>
nav {
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

background:none;
border-left: 4px solid #277C78;
border-radius: 0px 12px 12px 0px;
cursor: pointer;
  transition: background 0.3s ease;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

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
/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

}
.icon-nav {
  /* Icons/Icons Collection (Phosphor Icons) */

width: 24px;
height: 24px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

}

/* Sidebar/test */
.sidebar {
  /* Sidebar/Sidebar */
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
}
.menu-button {
  /* Sidebar/Sidebar Menu */
  padding: 10px;
  border: none;
  background: none;
  color:#ddd;
  cursor: pointer;
  transition: background 0.3s ease;
}
.btn-nav:hover {
  background: #bbb;
}
.btn-nav.active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.btn-nav.active img {
  filter: invert(1) brightness(0);
}
</style>
