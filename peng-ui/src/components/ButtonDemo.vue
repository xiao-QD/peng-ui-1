<template>
  <div>Button按钮示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
const onClick = () => {
  console.log("11");
};
</script>

<style></style>
