<template>
  <div :class="$style.switch">
    <el-switch
      inline-prompt
      v-model="isDark"
      @change="toggleDark"
      style="
        --el-switch-on-color: $bg-color-content;
        --el-switch-off-color: $bg-color-content;
        --el-switch-border-color: #8e8e93;
      "
      :active-action-icon="Moon"
      :inactive-action-icon="Sunny"
    >
    </el-switch>
  </div>
</template>

<script lang="ts" setup>
import { ElSwitch } from "element-plus";
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useDarkModeStore } from "../../stores/modules/theme";
import { onMounted, ref } from "vue";

// 深色模式切换
const darkMode = useDarkModeStore();
const isDark = ref(false);


const toggleDark = (value: boolean) => {
  document.documentElement.classList.toggle("dark");
  isDark.value = value;
  darkMode.isDarkValue = isDark.value;
  // 存储isDarkMode值到localStorage
  localStorage.setItem('isDarkMode', JSON.stringify({ isDarkMode: isDark.value }));
  // console.log("darkMode:", darkMode.isDarkValue);
};

// 在组件加载的时候初始化深色模式状态
onMounted(() => {
  darkMode.initDarkMode();
  isDark.value = darkMode.isDarkValue;
  console.log("darkMode:", darkMode.isDarkValue);
})
</script>

<style lang="scss" module>
.switch {
  padding: 0 10px;
}
</style>
