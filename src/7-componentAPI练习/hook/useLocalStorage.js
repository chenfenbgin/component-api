import { ref, watch } from 'vue'

// 本地缓存， 需要传入key value
export default function (key, value) {
  //只要传进来value，立马变成响应式的
  const data = ref(value);

  // 保存值, -> 不管传进来的是对象，数组，普通数据类型，都可以保存
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    // 拿到的是字符串，需要使用JSON.parse解析
    data.value = JSON.parse(window.localStorage.getItem(key));
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  })

  return data;
}

// 一个参数： 取值
// const data = useLocalStorage("name")
// 拿到之后可以改变值
// data.value = "chen"

// 两个参数： 保存值
// useLocalStorage("name")