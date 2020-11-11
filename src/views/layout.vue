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
          active-text-color="#409EFF"
          :router="true"
        >
          <template v-for="route in menulist">
            <el-menu-item :key="route.url" :index="route.url">
              {{ route.menuName }}
            </el-menu-item>
          </template>
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
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    myheader
  },
  computed: mapState([
    'menulist'
  ])
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
