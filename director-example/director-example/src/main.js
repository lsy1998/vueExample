import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import permission from './directives/permission.js'

const app = createApp(App)
app.directive('permission', permission)
app.use(createPinia())
app.use(router)

app.mount('#app')
