import App from '@/App.vue';
import '@/lib/svg/svg.js';
import '@/lib/styles/var.scss';
import '@/styles/index.scss';
import 'github-markdown-css/github-markdown-light.css';
import {router} from '@/router';
import {createApp} from 'vue';
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);
app.use(router);
app.config.globalProperties.emitter = emitter;

app.mount('#app');
