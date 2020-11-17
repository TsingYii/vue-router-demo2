<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          router
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="/home">
            首页
          </el-menu-item>
          <el-submenu index="/user">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="userhome()">
                用户主页
              </el-menu-item>
              <!-- <el-menu-item :index="userprofile()">
                用户信息
              </el-menu-item>
              <el-menu-item :index="userposts()">
                用户文章
              </el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      id: 'foo'
    }
  },
  computed: {

  },
  methods: {
    gotoUser (param) {
      this.$router.push('/user/' + param)
    },
    userhome () {
      return '/user/' + this.id
    },
    userprofile () {
      return '/user/' + this.id + '/profile'
    },
    userposts () {
      return '/user/' + this.id + '/posts'
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
