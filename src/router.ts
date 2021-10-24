import ButtonDemo from '@/components/ButtonDemo.vue';
import DialogDemo from '@/components/DialogDemo.vue';
import DocsDemo from '@/components/DocsDemo.vue';
import SwitchDemo from '@/components/SwitchDemo.vue';
import TabsDemo from '@/components/TabsDemo.vue';
import GetStarted from '@/markdown/getStarted.md';
import Install from '@/markdown/install.md';
import Intro from '@/markdown/intro.md';
import Docs from '@/views/Docs.vue';
import Home from '@/views/Home.vue';

import {createRouter, createWebHashHistory} from 'vue-router';

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
        {path: 'get-started', component: GetStarted},
        {path: 'install', component: Install},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
      ]
    },
  ]
});
