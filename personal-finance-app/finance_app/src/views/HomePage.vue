<script setup>
import OverView from '../components/OverView.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
  
    <article class="container" >
    <SideBar />
    <OverView />
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
height: 1064px;

background: #F8F4F0;

}

</style>
