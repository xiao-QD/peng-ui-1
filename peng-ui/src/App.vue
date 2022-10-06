<template>
  <div>
    导航栏|<router-link to="/">Peng</router-link>|
    <router-link to="/Peng2">Peng2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Peng from "./components/Peng.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
