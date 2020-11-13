import Vuex from 'vuex'
import Vue from 'vue'
import { addDynamicRoute } from '@/router/index'
import api from '@/api/index'
import { setToken } from '@/components/permission.js'
import router from '@/router/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: null,
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
    getUserInfo ({ commit }, payload) {
      api.users.login(payload).then(res => {
        store.commit('setUserInfo', res)
        setToken(res['token'])
        store.dispatch('getMenulist', payload)
        router.push('/home')
      }).catch(err => {
        console.log(err)
      })
    },
    getMenulist ({ commit }, payload) {
      api.users.menu(payload).then(res => {
        addDynamicRoute(res['menulist'])
        commit('setMenulist', res['menulist'])
      }).catch(err => {
        console.log(err)
      })
    }
  }
})

export default store
