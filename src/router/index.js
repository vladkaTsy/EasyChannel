import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout/Layout/index.vue';
import ManageOrders from '@/components/ManageOrders/index.vue';
import OrderDetails from '@/views/OrderDetails/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/manage-orders',
    component: Layout,
    children: [
      {
        path: 'manage-orders',
        name: 'ManageOrders',
        component: ManageOrders,
      },
    ],
  },
  {
    path: '/order-details/:order_id',
    name: 'OrderDetails',
    component: OrderDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
