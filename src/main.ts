import { createApp } from 'vue'
import store from './stores/index'
import router from './router/index'
// 导入全局scss文件
import '../src/assets/scss/style.scss'
// 导入所有bootstrap的js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// 导入打字机typed.js
import vuetyped from 'vue3typed'
import App from './App.vue'

const app = createApp(App)

// 使用插件并挂载app
app.use(vuetyped)
app.use(store)
app.use(router)
app.mount('#app')
