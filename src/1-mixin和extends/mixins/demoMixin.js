// 可以混入到任何组件中，我们先弄到App.vue中
export const demoMixin = {
  data() {
    return {
      message: 'hello DemoMixin'
    }
  },
  methods: {
    foo() {
      console.log("demo mixin foo");
    }
  }, 
  created(){
    console.log("执行了demo mixin created");
  }
}