import { ref, watch } from 'vue'

export default function (title = "默认title") {

  const titleRef = ref(title)

  //返回之后希望👇下面的title重新执行
  // document.title = title
  watch(titleRef, (newValue) => {
    document.title = newValue
  },{
    immediate: true
  })

  return titleRef
}