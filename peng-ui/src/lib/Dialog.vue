<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="peng-dialog-overlay" @click="onclickOverlay"></div>
      <div class="peng-dialog-wrapper">
        <div class="peng-dialog">
          <header>
            <slot name="title"></slot>
            <span @click="close" class="peng-dialog-close"></span>
          </header>
          <main>
            <!-- 使用插槽，将外界内容传进来 -->
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="cancel">取消</Button>
            <Button @click="ok" level="main">确定</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  closeOnclickOverlay: {
    type: Boolean,
    default: true,
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
  //外界传进来的标题
});
const emits = defineEmits(["update:visible", "ok", "cancel"]);
const close = () => {
  emits("update:visible", false);
};
const onclickOverlay = () => {
  if (props.closeOnclickOverlay) {
    close();
  }
};

const cancel = () => {
  if (props.ok && props.ok() != false) {
    //如果ok函数存在且返回值不为false
    close();
  }
};
const ok = () => {
  if (props.cancel && props.cancel() != false) {
    //如果cancel函数存在且返回值不为false
    close();
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.peng-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
