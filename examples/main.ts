import { createApp } from 'vue'
import App from './App.vue'
import DataUI from '~/index'

const app = createApp(App);
app.use(DataUI);

app.mount('#app')
