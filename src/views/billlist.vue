<template>
  <div>
    <div>对账单列表</div>
    <el-button type="primary" @click="btnClick">
      详情
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Billlist',
  methods: {
    btnClick () {
      this.$router.push.push('Billdetail')
    }
  }
}
</script>

<style>

</style>
