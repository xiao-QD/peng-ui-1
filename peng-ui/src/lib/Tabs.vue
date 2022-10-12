<template>
  <!-- <div>tabs</div>
  <button @click="show">打印</button> -->
  <slot></slot>
</template>

<script setup lang="ts">
import { useSlots, getCurrentInstance, onMounted } from "vue";
const slotaa = useSlots();
const Curr = getCurrentInstance();
// const show = () => {
//   console.log(slotaa);
//   //   console.log(Curr);
// };

onMounted(() => {
  console.log(slotaa);
});
</script>

<style scoped></style>
