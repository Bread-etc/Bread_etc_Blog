import { createApp } from 'vue'

import App from './App.vue'
import store from './stores/index'
import router from './router/index'
// 导入样式
import './assets/styles/index.scss'
// 导入打字机typed.js
import vuetyped from 'vue3typed'

const app = createApp(App)

// 挂载app
app.use(vuetyped).use(store).use(router).mount('#app')
