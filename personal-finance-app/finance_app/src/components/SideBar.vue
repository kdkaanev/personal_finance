<template>

      
  
  <nav>
    <img class="logo" src="../assets/picture/logo-large.svg" alt="logo">
    <ul class="nav-links">
      <li><button class="btn-nav"><img class="icon-nav" src="../assets/picture/icon-nav-overview.svg" alt="house"> Overview</button></li>
      <li><button class="btn-nav"><img class="icon-nav" src="../assets/picture/icon-nav-transactions.svg" alt="house"> Transactions</button></li>
      <li><button class="btn-nav"><img class="icon-nav" src="../assets/picture/icon-nav-budgets.svg" alt="house"> Budgets</button></li>
      <li><button class="btn-nav"><img class="icon-nav" src="../assets/picture/icon-nav-pots.svg" alt="house"> Pots</button></li>
      <li><button class="btn-nav"><img class="icon-nav" src="../assets/picture/icon-nav-recurring-bills.svg" alt="house"> Recurring Bills</button></li>

    </ul>
    <button class="btn-min"><img class="icon-nav" src="../assets/picture/icon-minimize-menu.svg" alt="house">Minimize Menue</button>
  </nav>
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

background: #F8F4F0;
border-left: 4px solid #277C78;
border-radius: 0px 12px 12px 0px;

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

</style>
