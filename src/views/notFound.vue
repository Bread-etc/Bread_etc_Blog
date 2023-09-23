<!-- NotFound.vue for 404 Page -->
<template>
  <div :class="$style.container">
    <div :class="$style.content">
        <div :class="$style.card">
            <div :class="$style.notFound">
                <div :class="$style.textContent">
                    <h1>💩 404 Not Found</h1>
                    <h2>不妨休息一下吧！</h2>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
@import "~router/NotFound.module.scss";
</style>
