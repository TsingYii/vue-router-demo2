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
import { asyncRouters } from '@/router/index.js'
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
            // 获取路由
            const res = { "code": 0, "msg": "成功", "result": [{ "id": 3, "menuCode": "CD002", "menuName": "订单管理", "fatherMenuCode": "0", "url": "/order", "serialNumber": 120, "status": 2, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-07-10T20:03:04.000+0800", "updateTime": "2020-07-21T11:31:58.000+0800", "childMenus": [{ "id": 6, "menuCode": "CD002-1", "menuName": "订单管理详情", "fatherMenuCode": "CD002", "url": "/orderdetail", "serialNumber": 121, "status": 3, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-07-31T20:03:04.000+0800", "updateTime": "2020-07-21T11:32:16.000+0800" }] }, { "id": 5, "menuCode": "CD003", "menuName": "退货单管理", "fatherMenuCode": "0", "url": "/refundOrder", "serialNumber": 150, "status": 2, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-07-06T20:03:04.000+0800", "updateTime": "2020-07-21T11:32:05.000+0800", "childMenus": [{ "id": 7, "menuCode": "CD003-1", "menuName": "退货单管理详情", "fatherMenuCode": "CD003", "url": "/returnorderdetail", "serialNumber": 151, "status": 3, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-07-19T20:03:04.000+0800", "updateTime": "2020-07-21T15:31:44.000+0800" }] }, { "id": 8, "menuCode": "CD004", "menuName": "账单管理", "fatherMenuCode": "0", "url": "/billlist", "serialNumber": 152, "status": 2, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-10-29T10:32:49.000+0800", "updateTime": "2020-10-29T10:35:15.000+0800", "childMenus": [{ "id": 10, "menuCode": "CD004-1", "menuName": "账单详情", "fatherMenuCode": "CD004", "url": "/billdetail", "serialNumber": 154, "status": 3, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-10-29T10:36:28.000+0800", "updateTime": "2020-10-29T10:37:58.000+0800" }] }, { "id": 9, "menuCode": "CD005", "menuName": "发票管理", "fatherMenuCode": "0", "url": "/invoicelist", "serialNumber": 153, "status": 2, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-10-29T10:34:57.000+0800", "updateTime": "2020-10-29T10:36:14.000+0800", "childMenus": [{ "id": 11, "menuCode": "CD005-1", "menuName": "发票详情", "fatherMenuCode": "CD005", "url": "/invoicedetail", "serialNumber": 155, "status": 3, "createUser": "09686", "updateUser": "09686", "isDeleted": 0, "createTime": "2020-10-29T10:38:26.000+0800", "updateTime": "2020-10-29T10:40:12.000+0800" }] }] }
            const result = res.result
            result.forEach(item => {
              // 配置路由

            })
            // 重新登录
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
