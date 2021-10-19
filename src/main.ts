import App from '@/App.vue';
import '@/lib/svg.js';
import '@/lib/var.scss';
import {router} from '@/router';
import '@/styles/index.scss';
import 'github-markdown-css/github-markdown-light.css';
import {createApp} from 'vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
