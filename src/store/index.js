import Vuex from 'vuex'
import Vue from 'vue'
import { addDynamicRoute } from '@/router/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      token: '',
      avatarUrl: '',
      phone: '',
      password: ''
    },
    menulist: []
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
    },
    setMenulist (state, payload) {
      state.menulist = payload
    }
  },
  actions: {
    getMenulist ({ commit }, payload) {
      this.$api.user.menu(payload).then(res => {
        console.log(res)
        addDynamicRoute(res['menulist'])
        commit('setMenulist', res['menulist'])
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

export default store
