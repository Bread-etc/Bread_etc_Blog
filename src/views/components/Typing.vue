<script setup>
import { reactive, onMounted  } from 'vue'
// 引入
import EasyTyper from 'easy-typer-js'

// 计算属性
const obj = reactive({
  output: '',
  isEnd: false,
  speed: 200,
  singleBack: true,
  sleep: 50,
  type: 'rollback',
  backSpeed: 100,
  sentencePause: true
})

// 实例化
onMounted(() => {
  // @ts-ignore
  const typed = new EasyTyper(obj, [`Bread_etc's Blog`, `Welcome to my blog!`])
})

</script>

<template>
  <div :class="$style.type">
      <div>{{ obj.output }}</div>
  </div>
</template>

<style module lang="scss">
.type {
  align-items: center;
  line-height: 20px;
  color: $homePage-text-color;
  font-size: 1.1rem;
  height: 1.1rem;
  font-weight: 600;
  font-family: 'LXGW WenKai';
}
</style>