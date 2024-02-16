<template>
  <div :class="$style.switch">
    <n-switch
      @update:value="toggleTheme"
      :checked-value="true"
      :unchecked-value="false"
      :default-value="isDark"
    >
      <template #checked-icon>
        <n-icon :component="WeatherMoon16Regular"/>
      </template>
      <template #unchecked-icon>
        <n-icon :component="WeatherSunny16Regular"/>
      </template>
    </n-switch>
  </div>
</template>

<script lang="ts" setup>
import { NSwitch, NIcon } from "naive-ui";
import { WeatherMoon16Regular, WeatherSunny16Regular } from "@vicons/fluent";
import { useDarkModeStore } from "../../stores/modules/theme";
import { onMounted, ref } from "vue";

// 深色模式切换及保存
const darkMode = useDarkModeStore();
const isDark = ref(JSON.parse(localStorage.getItem('theme')));

const toggleTheme = (value: boolean) => {
  if(value) {
    document.documentElement.classList.toggle("dark");
    darkMode.toggleMode(value);
  } else {
    document.documentElement.classList.remove("dark");
    darkMode.toggleMode(value);
  }
  console.log('darkMode:',value); 
};

// 页面加载初始化深色模式状态
onMounted(() => {
  darkMode.initMode();
});

</script>

<style lang="scss" module>
.switch {
  padding: 0 10px;
}
</style>
