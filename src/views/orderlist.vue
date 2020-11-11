<template>
  <div>
    <div>
      <div>订单列表</div>
      <el-button type="primary" @click="btnClick">
        详情
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orderlist',
  methods: {
    btnClick () {
      this.$router.push('/orderdetail')
    }
  }
}
</script>

<style>

</style>
