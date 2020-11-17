<template>
  <div class="appContainer">
    用户主页{{ id }}
    <el-button type="primary" @click="go2setting">
      用户设置
    </el-button>
    <el-button type="primary" @click="go2posts">
      用户文章
    </el-button>
    <el-button type="primary" @click="go2otherUser">
      其他用户
    </el-button>
    <el-button type="primary" @click="go1">
      go1
    </el-button>
    <el-button type="primary" @click="gofu1">
      gofu1
    </el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    id: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    go2setting () {
      this.$router.push({ name: 'profile', params: { userid: '12' }})
    },
    go2posts () {
      this.$router.push({ path: 'posts', params: { userid: '12' }, query: { userid: '22' }})
    },
    go2otherUser () {
      this.$router.replace('/user/bar')
    },
    go1 () {
      this.$router.go(1)
    },
    gofu1 () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.appContainer{
  height: 100%;
  background-color: green;
}
</style>
