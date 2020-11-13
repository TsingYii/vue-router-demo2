import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import layout from '@/views/layout'
import { isAuthenticated } from '@/components/permission'
import store from '@/store/index'
Vue.use(VueRouter)

const constRoutes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login, name: login.name },
  { path: '/layout', component: layout,
    children: [
      { path: '/home', component: home, name: home.name }
    ]
  }
]

export const asyncRouters = {
  "/todolist": () => import("@/views/todolist.vue"),
  "/tododetail": () => import("@/views/tododetail.vue")
}

const routes = constRoutes
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!isAuthenticated() && to.path !== '/login') {
    next({ name: 'Login' })
    return
  }
  if (isAuthenticated() && store.state.menulist && store.state.menulist.length === 0) {
    await store.dispatch('getMenulist')
    console.log(store.state)
  }
  next()
})

export function addDynamicRoute (result) {
  // 根据获取的路由重新配置路由
  const res = []
  result.forEach(item => {
    const tmp = {
      path: item.url,
      component: layout,
      children: [
        {
          path: item.url,
          component: asyncRouters[item.url],
          name: asyncRouters[item.url].name
        }
      ]
    }

    if (item.childMenus && item.childMenus.length) {
      item.childMenus.forEach(cItem => {
        const subtmp = {
          path: cItem.url,
          component: asyncRouters[cItem.url],
          name: asyncRouters[cItem.url].name
        }
        tmp.children.push(subtmp)
      })
    }
    res.push(tmp)
  })
  // 添加路由
  router.addRoutes(res)
}

export default router
