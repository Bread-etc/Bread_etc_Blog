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
import { useDarkModeStore } from "@/stores/modules/theme";
import { ref } from "vue";

const darkMode = useDarkModeStore();

// 深色模式切换
const isDark = ref(darkMode.isDarkValue);

const toggleDark = (v: boolean) => {
  document.documentElement.classList.toggle("dark");
  isDark.value = v;
  darkMode.isDarkValue = isDark.value;
  console.log("darkMode:", darkMode.isDarkValue);
};
</script>

<style lang="scss" module>
.switch {
  padding: 0 10px;
}
</style>
