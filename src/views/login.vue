<template>
  <div>
    <div v-loading="loading" class="container">
      <el-form ref="formdata" :model="formdata" :rules="rules" label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formdata.username" type="text" placeholder="请输入账号" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formdata.password" type="password" placeholder="请输入密码" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitBtnClick">
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
import { setToken } from "@/components/permission.js"
export default {
  name: 'Login',
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      },
      rules: {
        username: [
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
    submitBtnClick () {
      this.$refs.formdata.validate((valid) => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            const token = '12123'
            this.$message.success('登录成功')
            setToken(token)
            this.$router.push('/home')
          }, 500)
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
