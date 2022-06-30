import { customRef } from "vue";

// 自定义ref
export default function (value, delay = 300) {
  let timer = null;
  // customRef要去传入的是一个函数
  // track:什么时候收集依赖； trigger:什么时候触发依赖进行更新
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
