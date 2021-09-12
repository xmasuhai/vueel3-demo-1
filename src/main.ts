import {createApp} from 'vue';
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'vue-router';
import NewVue from './components/NewVue.vue';
import Home from './components/Home.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: NewVue},
    {path: '/xxx', component: Home},
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
