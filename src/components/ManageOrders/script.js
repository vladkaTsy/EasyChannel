import { apiDeleteOrder } from '@/api/orders';

export default {
  data: () => ({
    totalItems: 0,
  }),
  async created() {
    await this.$store.dispatch('fetchOrders', { page: 1 });
    this.totalItems = this.$store.state.totalOrders;
  },
  computed: {
    tableData() {
      return this.$store.state.orders.length ? this.$store.state.orders : [];
    },
  },
  methods: {
    handleViewDetails(id) {
      this.$router.push({ name: 'OrderDetails', params: { order_id: id } });
    },
    async handleDelete(index, row, id) {
      console.log(index, row, id);
      try {
        const res = await apiDeleteOrder(id);
        console.log(res);
        this.tableData.splice(index, 1);
      } catch (err) {
        console.log('kaka');
        console.error(err);
      }
    },
    async onPaginationChange(value) {
      await this.$store.dispatch('fetchOrders', { page: value });
    },
  },
};
