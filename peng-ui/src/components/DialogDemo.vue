<template>
  <h1>示例1</h1>
  <button @click="toggle">弹窗</button>
  <Dialog
    :visible="x"
    @update:visible="x = $event"
    :closeOnclickOverlay="true"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>大标题 </strong>
    </template>
    <template v-slot:content>
      <div>1</div>
      <div>2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <button @click="showDialog">一键展示弹窗</button>
</template>

<script setup lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";

const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () => {
  return false;
};
const f2 = () => {};

const showDialog = () => {
  openDialog({
    title: "标题1",
    content: "内容1",
    ok: () => {
      console.log("ok");
    },
    cancel: () => {
      console.log("cancel");
    },
  });
};
</script>

<style scoped></style>
