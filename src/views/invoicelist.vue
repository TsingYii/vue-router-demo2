<template>
  <div>
    <div>发票列表</div>
    <el-button type="primary" @click="btnClick">
      详情
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Invoicelist',
  methods: {
    btnClick () {
      this.$router.push('Invoicedetail')
    }
  }
}
</script>

<style>

</style>
