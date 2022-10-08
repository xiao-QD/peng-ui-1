<template>
  <button class="peng-button" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  theme: {
    type: String,
    default: "button",
  },
});
</script>

<style scoped></style>
