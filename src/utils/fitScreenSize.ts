import {provide, ref} from 'vue';
import useEmitter from '@/lib/hooks/useEmitter';

const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500);
provide('asideVisible', asideVisible);
const emitter = useEmitter();
provide('evBus', emitter);

const updateSideMenu = () => {
  // 发布更新侧边栏事件
  emitter.emit('update:asideVisible');
  asideVisible.value = false;
}

export default function() {
// 判断屏幕尺寸是否为移动端，决定侧边栏是否可见 // 屏幕宽度大于768px 显示代码行数 prismjs line-numbers
  width <= 768
    ? updateSideMenu()
    : document.querySelector('body')?.classList.add('line-numbers');

}
