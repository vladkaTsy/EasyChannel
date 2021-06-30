import { apiOrder } from '@/api/orders';

export default {
  data: () => ({
    orderId: 0,
    order: {},
  }),
  created() {
    this.orderId = this.$route.params.order_id;
    this.getOrder();
  },
  methods: {
    async getOrder() {
      try {
        const order = await apiOrder(this.orderId);
        this.order = order.data;
        console.log(this.order);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
