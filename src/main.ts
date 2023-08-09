import { createApp } from 'vue'
import store from './stores/index'
import router from './router/index'
// 导入全局scss文件
import '../src/assets/scss/style.scss'
// 导入所有bootstrap的js
import 'bootstrap'
import App from './App.vue'

const app = createApp(App)

// 使用插件并挂载app
app.use(store)
app.use(router)
app.mount('#app')
