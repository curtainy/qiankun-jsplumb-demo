import Vue from 'vue';
import VueRouter from 'vue-router';
import jsplumb from '../views/jsplumb.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: jsplumb,
  },
];

export default routes;
