import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from '@/components/lib.js';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(createPinia())

app.mount('#app')
