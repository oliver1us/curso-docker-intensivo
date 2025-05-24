import { createApp } from 'vue'
import App from './App.vue'
import { loadConfig } from './config'

loadConfig().then(() => {
  createApp(App).mount('#app')
})
    .catch((error) => {
        console.error('Failed to load configuration:', error)
    })