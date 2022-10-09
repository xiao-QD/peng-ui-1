<template>
  <button
    class="peng-switch"
    @click="toggle"
    :class="{ 'peng-checked': value }"
  >
    <span></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  value: Boolean,
});

const emit = defineEmits(["changeShow"]);
const toggle = () => {
  emit("changeShow", !props.value);
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.peng-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #5775d2;
  border-radius: calc($h2 / 2);
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: calc($h2 / 2);
  transition: all 250ms;
}
button.peng-checked {
  background: #1890ff;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}

button:focus {
  outline: none;
}

button:active {
  > span {
    width: $h2 + 4px;
  }
}
button.peng-checked:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>
