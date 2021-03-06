import { ref } from "vue";
export default function () {
  //监听鼠标所在的位置
  const mouseX = ref(0);
  const mouseY = ref(0);

  window.addEventListener("mousemove", (event) => {
    // event:鼠标事件
    mouseX.value = event.pageX;
    mouseY.value = event.pageY;
  });

  return {
    mouseX,
    mouseY,
  };
}
