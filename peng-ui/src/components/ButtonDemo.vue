<template>
  <div>Button 示例</div>
  <h1>示例1,不同类型</h1>
  <div>
    <Button>普通</Button>
    <Button theme="button">普通</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <h1>示例2,不同大小和类型</h1>
  <div>
    <Button size="big">大号</Button>
    <Button>普通 </Button>
    <Button size="small">小号</Button>
  </div>
  <div>
    <Button theme="link" size="big">大号</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="small">小号</Button>
  </div>
  <div>
    <Button theme="text" size="big">大号</Button>
    <Button theme="text">普通 </Button>
    <Button theme="text" size="small">小号</Button>
  </div>
  <h1>示例3,不同level和类型</h1>
  <div>
    <Button level="main">主要</Button>
    <Button>普通</Button>
    <Button level="danger">危险</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="danger">危险链接</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文本</Button>
    <Button theme="text">普通文本</Button>
    <Button theme="text" level="danger">危险文本</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
const onClick = () => {
  console.log("11");
};
</script>

<style></style>
