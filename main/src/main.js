import Vue from 'vue';
import { registerMicroApps, start } from 'qiankun';
import App from './App.vue';
import router from './router';

// 注册微应用
registerMicroApps([
  {
    name: 'vue',
    entry: '//localhost:7101',
    container: '#subapp-container',
    activeRule: '/vue',
  },
]);
// 启动qiankun
start();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
