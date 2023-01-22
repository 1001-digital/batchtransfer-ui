import { createApp } from 'vue'
import { VagmiPlugin } from 'vagmi'
import App from './App.vue'
import { client } from './helpers/ethereum'
import './styles/index.css'

const app = createApp(App)

app.use(VagmiPlugin(client))

app.mount('#app')
