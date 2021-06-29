<template>
  <div>
    <div class="orders-head">
      <span>Manage your Orders</span>
      <p>Manage your orders from the past 90 days -
        send messages, add tracking numbers, and more.</p>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="Item"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.buyer.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Date"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.order_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Order Details"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.order_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Profit"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.order_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Buyer Details"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.order_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Shipping Date"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.order_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        width="180"
      >
        <template slot-scope="scope">
          <div class="actions-wrapper">
            <el-button
              size="mini"
              @click="handleViewDetails(scope.row.id)"
            >
              View Order
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row, scope.row.id)">Delete
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalItems"
      class="pagination-bar"
      @current-change="onPaginationChange"
    >
    </el-pagination>
  </div>
</template>

<script src="./script.js"></script>

<style lang="sass">
@import "style"
</style>
