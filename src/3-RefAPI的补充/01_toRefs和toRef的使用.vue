<template>
  <div id="app">
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script type="text/javascript">
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    // 响应式的
    const info = reactive({ name: "chen", age: 12 });

    // 我们从info中直接解构出来，只是赋值而已，不是响应式的
    // let { name, age } = info;

    // 我们希望解构出来的name，age还是响应式的, 会创建两个ref对对象，相当于 ref(name) 跟 ref(age)
    // 1.toRefs：将reactive对象中的所有属性都转成ref，建立连接, 相当于引用的同一个地方
    let { name, age } = toRefs(info);

    // 2.toRef: 对其中一个属性进行转换ref，建立连接
    let { name1 } = info;
    let age1 = toRef(info, "age"); //不需要再进行解构操作

    const changeAge = () => {
      // 有改，但是不是响应式的
      // age++;

      age1.value++;
      console.log("age", age.value);
      console.log(name1);

      //这个时候，我们改变info里面的age,也是会发生改变的
      // info.age++;
    };

    return {
      info,
      changeAge,
      age,
      name,
    };
  },
};
</script>

<style scoped></style>
