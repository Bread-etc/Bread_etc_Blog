import { createApp } from 'vue'
import App from './App.vue'
import store from './stores/index'
import router from './router/index'


const app = createApp(App)

// 挂载app
app.use(store).use(router).mount('#app')
