<template>
  <div>
    <h2>Hello World</h2>
    <!-- 2.defineProps定义后直接使用就行 -->
    <h2>{{ message }}</h2>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from "vue";

// 1.props的定义需要改成下面这样
const props = defineProps({
  message: {
    type: String,
    default: "哈哈哈",
  },
});

// 3.发出的时间需要改成这样子
const emit = defineEmit(["increment", "decrement"]);

const emitEvent = () => {
  emit("increment", "100000");
};
</script>

<style scoped></style>
