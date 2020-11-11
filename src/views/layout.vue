<template>
  <el-container>
    <el-header>
      <myheader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          background-color="#D3DCE6"
          text-color="black"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="orderlist">
            订单管理
          </el-menu-item>
          <el-menu-item index="refundlist">
            退货单管理
          </el-menu-item>
          <el-menu-item index="billlist">
            账单管理
          </el-menu-item>
          <el-menu-item index="invoicelist">
            发票管理
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myheader from '@/views/myheader'
export default {
  name: 'Layout',
  components: {
    myheader
  },
  watch: {
    $route () {
      console.log('=========', this.$route.path)
    }
  }
}
</script>

<style>
 .el-container{
   height: 100%;
 }
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
