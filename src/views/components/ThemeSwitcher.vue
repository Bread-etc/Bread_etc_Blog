<template>
  <div :class="$style.switch">
    <el-switch
      inline-prompt
      v-model="isDark"
      @change="toggleTheme"
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
import { onBeforeMount, ref } from "vue";

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
onBeforeMount(() => {
  darkMode.initMode();
});

</script>

<style lang="scss" module>
.switch {
  padding: 0 10px;
}
</style>
