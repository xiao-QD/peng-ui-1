<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

const width = document.documentElement.clientWidth;
const menuVisible = ref(width > 500 ? true : false);
provide("menuVisible", menuVisible);

router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});
</script>

<style scoped></style>
