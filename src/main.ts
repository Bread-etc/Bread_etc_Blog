import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './stores/index'
import router from './router/index'
// 导入样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/index.scss'
// 导入打字机typed.js
import vuetyped from 'vue3typed'

const app = createApp(App)

// 使用插件并挂载app
app.use(vuetyped)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
