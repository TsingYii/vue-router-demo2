<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="22">
        <div class="wel">
          欢迎来到德莱联盟！
        </div>
      </el-col>
      <el-col :span="2">
        <el-button v-loading.fullscreen.lock="fullscreenLoading" type="text" class="logout" @click="logout">
          退出登录
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { removeToken } from '@/components/permission.js'
export default {
  name: 'Myheader',
  data () {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    logout () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
        this.$message.success('退出成功')
        removeToken()
        this.$router.push('/login')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.wel{
  text-align: left;
  font-size: 40px;
  font-style: bold;
}
</style>
