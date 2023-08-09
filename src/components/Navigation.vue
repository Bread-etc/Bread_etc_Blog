<!-- Navigation.vue for top -->
<template>
  <nav class="navbar">
    <div class="container">
      <div>
        <div>
          <img src="@/assets/images/egg.png" alt="image/nav-image">
          <div>
            Bread_etc's Blog
          </div>
        </div>
      </div>
      <div>
        <router-link to="/" >首页</router-link>
      </div>
      <div>
        <router-link to="/study" >学习</router-link>
      </div>
      <div>
        <router-link to="/daily" >日常</router-link>
      </div>
      <div>
        <router-link to="/contact" >留言板</router-link>
      </div>
      <div>
        <router-link to="/about" >关于</router-link>
      </div>
    </div>
  </nav>
  <div :class="$style.wrapper">
     
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/Navigation.module.scss';
</style>