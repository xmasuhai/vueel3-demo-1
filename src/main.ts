import App from '@/App.vue';
import '@/assets/icon/svg.js';
import '@/lib/var.scss';
import {router} from '@/router';
import '@/styles/index.scss';
import 'github-markdown-css/github-markdown-light.css';
import {createApp} from 'vue';
import mitt from 'mitt';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$evbus = mitt;

app.mount('#app');
