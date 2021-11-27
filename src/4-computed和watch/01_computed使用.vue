<template>
  <div id="app">
    <h2>{{ firstName }}- {{ lastName }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script type="text/javascript">
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("尘");
    const lastName = ref("浮生");

    // 1.用法一：传入一个getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + lastName.value);

    // 2.用法二：传入一个对象，对象包含getter/setter
    const fullName = computed({
      get: () => firstName.value + lastName.value,
      set(newValue) {
        const name = newValue.split(" ");
        firstName.value = name[0];
        lastName.value = name[1];
      },
    });
    const changeName = () => {
      // firstName.value = "流";
      fullName.value = "coder chen";
    };

    return {
      firstName,
      lastName,
      fullName,
      changeName,
    };
  },
};
</script>

<style scoped>
</style>
