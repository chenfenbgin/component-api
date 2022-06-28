import { createApp } from 'vue'
import App from './7-componentAPI练习/App.vue'

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


app.mount('#app')
