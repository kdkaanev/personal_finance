<template>
  <nav>
    <h1>
      SideBar
    </h1>
  </nav>
</template>

<style scoped>
nav {
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

}
.out{
    /* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;
}
</style>
