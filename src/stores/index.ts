// Pinia 入口文件
import { createPinia } from "pinia";
import piniaPersist from 'pinia-plugin-persist';

const store = createPinia()
store.use(piniaPersist)

export default store