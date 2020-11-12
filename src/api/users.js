/**
 * article模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '@/utils/http' // 导入http中创建的axios实例

const users = {
  // 登录
  login (params) {
    return axios.post(`${base.bd}/users/login`, params)
  },
  // 注册
  regist (params) {
    return axios.post(`${base.bd}/users/regist`, params)
  },
  // 菜单
  menu (params) {
    return axios.post(`${base.bd}/users/menu`, params)
  }
}

export default users
