<template>
  <div>
    <div>退货单列表</div>
    <el-button type="primary" @click="btnClick">
      详情
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Refundlist',
  methods: {
    btnClick () {
      this.$router.push('/refunddetail')
    }
  }
}
</script>

<style>

</style>
