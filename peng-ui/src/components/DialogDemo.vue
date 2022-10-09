<template>
  <h1>示例1</h1>
  <button @click="x = !x">弹窗</button>
  <Dialog :visible="x"></Dialog>
</template>

<script setup lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

const x = ref(false);
</script>

<style scoped></style>
