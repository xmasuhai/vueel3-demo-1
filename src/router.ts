import {createRouter, createWebHashHistory} from 'vue-router';
import IconsDemo from '@/components/ComponentsDemos/IconsDemos.vue';
import ButtonDemo from '@/components/ComponentsDemos/ButtonDemos.vue';
import SwitchDemo from '@/components/ComponentsDemos/SwitchDemos.vue';
import TabsDemo from '@/components/ComponentsDemos/TabsDemos.vue';
import DialogDemo from '@/components/ComponentsDemos/DialogDemos.vue';
import CollapseDemos from '@/components/ComponentsDemos/CollapseDemos.vue';
import Docs from '@/views/Docs.vue';
import Home from '@/views/Home.vue';
// use 'vite-plugin-md' import markdown
import GetStarted from '@/markdown/getStarted.md';
import Install from '@/markdown/install.md';
import Intro from '@/markdown/intro.md';
import Readme from '../README.md';

// const history = createWebHashHistory();

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {
      path: '/docs', component: Docs,
      children: [
        {path: '', redirect: '/docs/intro'},
        {path: 'readme', component: Readme},
        {path: 'intro', component: Intro},
        {path: 'get-started', component: GetStarted},
        {path: 'install', component: Install},
        {path: 'icons', component: IconsDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'collapse', component: CollapseDemos},
      ]
    },
  ]
});
