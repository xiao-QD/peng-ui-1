<template>
  <div>
    <Switch :value="bool" @changeShow="bool = $event"></Switch>
  </div>
</template>

<script setup lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
const bool = ref(true);
</script>

<style scoped></style>
