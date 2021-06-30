import { apiDeleteOrder } from '@/api/orders';

export default {
  data: () => ({
    tableData: [],
  }),
  created() {
    this.$store.dispatch('fetchOrders', { page: 1 }).then((response) => {
      this.tableData = response;
    });
  },
  computed: {
    totalItems() {
      return this.$store.getters.totalOrders;
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
        console.error(err);
      }
    },
    onPaginationChange(value) {
      this.$store.dispatch('fetchOrders', { page: value }).then((response) => {
        this.tableData = response;
      });
    },
  },
};
