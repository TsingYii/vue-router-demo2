<template>
  <div>
    <div v-loading="loading" class="container">
      <el-form ref="formdata" :model="formdata" :rules="rules" label-width="60px">
        <el-form-item label="账号" prop="phone">
          <el-input v-model="formdata.phone" type="text" placeholder="请输入账号" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formdata.password" type="password" placeholder="请输入密码" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registBtnClick">
            注册
          </el-button>
          <el-button type="primary" @click="loginBtnClick">
            登陆
          </el-button>
          <el-button type="primary" @click="resetBtnClick">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/components/permission.js'
import { addDynamicRoute } from '@/router/index.js'
export default {
  name: 'Login',
  data () {
    return {
      formdata: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    created () {

    },
    registBtnClick () {
      const that = this
      this.$refs.formdata.validate((valid) => {
        if (valid) {
          that.loading = true
          this.$api.users.regist(this.formdata)
            .then(function (response) {
              console.log(response)
              that.$message.success('注册成功，请登录')
              that.loading = false
            })
            .catch(function (error) {
              that.loading = false
              console.log(error)
            })
        } else {
          that.$message.error('账号或密码错误')
          return false
        }
      })
    },
    loginBtnClick () {
      const that = this
      this.$refs.formdata.validate((valid) => {
        if (valid) {
          that.loading = true
          this.$api.users.login(this.formdata)
            .then(function (response) {
              console.log(response)
              that.loading = false
              that.$store.commit('setUserInfo', response)
              await that.$store.dispatch('getMenulist', that.formdata)
              that.$message.success('登录成功')
              setToken(response['token'])
              that.$router.push('/home')
            })
            .catch(function (error) {
              that.loading = false
              console.log(error)
            })
        } else {
          this.$message.error('账号或密码错误')
          return false
        }
      })
    },
    resetBtnClick () {
      this.$refs.formdata.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 500px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #409EFF;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%,0);
  border-radius: 10px;
}

.el-form{
  padding: 20px;
}

.el-button{
  margin: 0 auto;
}
</style>
