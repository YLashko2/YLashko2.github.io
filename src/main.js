import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store'
import router from './routes';
const vApp = createApp(App).use(store).use(router);
vApp.mount('#app');
export default vApp;
