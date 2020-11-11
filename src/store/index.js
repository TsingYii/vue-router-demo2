import Vuex from 'vuex'
import Vue from 'vue'
import { addDynamicRoute } from '@/router/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menulist: []
  },
  mutations: {
    setMenulist (state, payload) {
      state.menulist = payload
    }
  },
  actions: {
    getMenulist ({ commit }, payload) {
      setTimeout(() => {
        const result = [
          {
            "id": 3,
            "menuCode": "CD002",
            "menuName": "订单管理",
            "fatherMenuCode": "0",
            "url": "/orderlist",
            "serialNumber": 120,
            "status": 2,
            "createUser": "09686",
            "updateUser": "09686",
            "isDeleted": 0,
            "createTime": "2020-07-10T20:03:04.000+0800",
            "updateTime": "2020-07-21T11:31:58.000+0800",
            "childMenus": [
              {
                "id": 6,
                "menuCode": "CD002-1",
                "menuName": "订单管理详情",
                "fatherMenuCode": "CD002",
                "url": "/orderdetail",
                "serialNumber": 121,
                "status": 3,
                "createUser": "09686",
                "updateUser": "09686",
                "isDeleted": 0,
                "createTime": "2020-07-31T20:03:04.000+0800",
                "updateTime": "2020-07-21T11:32:16.000+0800"
              }
            ]
          },
          {
            "id": 5,
            "menuCode": "CD003",
            "menuName": "退货单管理",
            "fatherMenuCode": "0",
            "url": "/refundlist",
            "serialNumber": 150,
            "status": 2,
            "createUser": "09686",
            "updateUser": "09686",
            "isDeleted": 0,
            "createTime": "2020-07-06T20:03:04.000+0800",
            "updateTime": "2020-07-21T11:32:05.000+0800",
            "childMenus": [
              {
                "id": 7,
                "menuCode": "CD003-1",
                "menuName": "退货单管理详情",
                "fatherMenuCode": "CD003",
                "url": "/refunddetail",
                "serialNumber": 151,
                "status": 3,
                "createUser": "09686",
                "updateUser": "09686",
                "isDeleted": 0,
                "createTime": "2020-07-19T20:03:04.000+0800",
                "updateTime": "2020-07-21T15:31:44.000+0800"
              }
            ]
          },
          {
            "id": 8,
            "menuCode": "CD004",
            "menuName": "账单管理",
            "fatherMenuCode": "0",
            "url": "/billlist",
            "serialNumber": 152,
            "status": 2,
            "createUser": "09686",
            "updateUser": "09686",
            "isDeleted": 0,
            "createTime": "2020-10-29T10:32:49.000+0800",
            "updateTime": "2020-10-29T10:35:15.000+0800",
            "childMenus": [
              {
                "id": 10,
                "menuCode": "CD004-1",
                "menuName": "账单详情",
                "fatherMenuCode": "CD004",
                "url": "/billdetail",
                "serialNumber": 154,
                "status": 3,
                "createUser": "09686",
                "updateUser": "09686",
                "isDeleted": 0,
                "createTime": "2020-10-29T10:36:28.000+0800",
                "updateTime": "2020-10-29T10:37:58.000+0800"
              }
            ]
          },
          {
            "id": 9,
            "menuCode": "CD005",
            "menuName": "发票管理",
            "fatherMenuCode": "0",
            "url": "/invoicelist",
            "serialNumber": 153,
            "status": 2,
            "createUser": "09686",
            "updateUser": "09686",
            "isDeleted": 0,
            "createTime": "2020-10-29T10:34:57.000+0800",
            "updateTime": "2020-10-29T10:36:14.000+0800",
            "childMenus": [
              {
                "id": 11,
                "menuCode": "CD005-1",
                "menuName": "发票详情",
                "fatherMenuCode": "CD005",
                "url": "/invoicedetail",
                "serialNumber": 155,
                "status": 3,
                "createUser": "09686",
                "updateUser": "09686",
                "isDeleted": 0,
                "createTime": "2020-10-29T10:38:26.000+0800",
                "updateTime": "2020-10-29T10:40:12.000+0800"
              }
            ]
          }
        ]
        // 更新菜单栏目
        commit('setMenulist', result)
        addDynamicRoute(result)
      }, 500)
    }
  }
})

export default store
