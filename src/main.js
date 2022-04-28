import { createApp } from 'vue'
import router from './router/routers'
import App from './App.vue'
import store from './store/store'

const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app')
