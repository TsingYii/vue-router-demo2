<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="20">
        <div class="wel">
          {{ name+'  欢迎您！' }}
        </div>
      </el-col>
      <el-col :span="2" :v-if="url">
        <el-image
          style="width: 60px; height: 60px"
          :src="url"
        />
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
  computed: {
    name () {
      return this.$store.state.userInfo.phone
    },
    url () {
      return this.$store.state.userInfo.avatarUrl
    }
  },
  methods: {
    logout () {
      this.fullscreenLoading = true
      this.$api.users.logout().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
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
.el-image{
  border-radius: 50%;
  background-color: #B3C0D1;
  border: 1px solid #d5d5d5;
}
</style>
