<template>
  <div>
    <div class="container">
      <el-form ref="formdata" v-model="formdata" :rules="rules" label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formdata.username" type="text" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formdata.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitBtnClick('formdata')">
            登陆
          </el-button>
          <el-button type="primary" @click="resetBtnClick('formdata')">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
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
      }
    }
  },
  methods: {
    submitBtnClick () {
      // const username = this.formdata.username
      // const password = this.formdata.password
      console.log('登陆')
    },
    resetBtnClick (formdata) {
      this.$refs[formdata].resetFields()
      debugger
      console.log('重置')
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
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
}

.el-form{
  padding: 20px;
}

.el-button{
  margin: 0 auto;
}
</style>
