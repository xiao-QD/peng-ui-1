<template>
  <h1>示例1</h1>
  <button @click="toggle">弹窗</button>
  <Dialog
    :visible="x"
    @update:visible="x = $event"
    :closeOnclickOverlay="true"
  ></Dialog>
</template>

<script setup lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
</script>

<style scoped></style>
