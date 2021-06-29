export default {
  data: () => ({
    orderId: 0,
  }),
  created() {
    this.orderId = this.$route.params.order_id;
  },
};
