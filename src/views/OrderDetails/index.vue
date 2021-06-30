<template>
  <div class="about">
    <h1>ORDER DETAILS</h1>
    <el-row type="flex" justify="center">
      <el-col span="20">
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/item.png"
               class="image">
          <div style="padding: 14px;">
            <span>Order ID: {{orderId}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ order.order_date }}</time>
              <div v-for="(field, name) in order" :key="name" class="text item">
              {{'List item ' + field }}
            </div>
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./script.js"></script>

<style lang="sass">
@import "style"
</style>
