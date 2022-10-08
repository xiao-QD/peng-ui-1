<template>
  <div>
    <Switch :value="y" @changeShow="y = $event"></Switch>
  </div>
</template>

<script setup lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
const y = ref(true);
// const changeShow = () => {
//   y.value = !y.value;
// };
</script>

<style scoped></style>
