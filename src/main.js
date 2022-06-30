import { createApp } from "vue";
import App from "./4-computed和watch/06-watch侦听多个数据源.vue";

const app = createApp(App);

// 全局混入mixin
// app.mixin({
//   data() {
//     return {

//     }

//   },
//   methods: {

//   },
//   created() {
//     console.log("全局的生命周期created函数");
//   }
// })

app.mount("#app");
