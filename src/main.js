import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Aside from '@/views/layout/aside/index.vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.component('Aside', Aside);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
