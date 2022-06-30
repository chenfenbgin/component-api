<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改Info</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";

export default {
  setup() {
    const info = shallowRef({ name: "why" });

    const changeInfo = () => {
      info.value.name = "james";
      // 浅层的ref,如果我们想触发{{info}}中的数据刷新，可以使用triggerRef()
      triggerRef(info);
    };

    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped></style>
