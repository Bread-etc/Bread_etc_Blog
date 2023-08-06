import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import store from './stores/index'
import router from './router/index'
import App from './App.vue'

const app = createApp(App)

// 使用插件并挂载app
app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
