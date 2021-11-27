import { createApp } from 'vue'
import App from './4-computed和watch/App.vue'

const app = createApp(App);

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
