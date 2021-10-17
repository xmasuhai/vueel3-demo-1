import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '@/views/Home.vue';
import Docs from '@/views/Docs.vue';
import SwitchDemo from '@/components/SwitchDemo.vue';
import ButtonDemo from '@/components/ButtonDemo.vue';
import DialogDemo from '@/components/DialogDemo.vue';
import TabsDemo from '@/components/TabsDemo.vue';
import DocsDemo from '@/components/DocsDemo.vue';
import Intro from '@/views/Intro.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/docs', component: Docs,
      children: [
        {path: '', component: DocsDemo},
        {path: 'intro', component: Intro},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    },
  ]
});
