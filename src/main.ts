import './lib/var.scss';
import './lib/vue-reset.scss';
import '@/styles/index.scss';
import {createApp} from 'vue';
import App from '@/App.vue';
import {router} from '@/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
