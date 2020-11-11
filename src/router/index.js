import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import layout from '@/views/layout'
import { isAuthenticated } from '@/components/permission'
import store from '@/store/index'
Vue.use(VueRouter)

const constRoutes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: login, name: login.name },
  { path: '/layout', component: layout,
    children: [
      { path: '/home', component: home, name: home.name }
    ]
  }
]

export const asyncRouters = {
  '/orderlist': () => import('@/views/orderlist'),
  '/orderdetail': () => import('@/views/orderdetail'),
  '/refundlist': () => import('@/views/refundlist'),
  '/refunddetail': () => import('@/views/refunddetail'),
  '/billlist': () => import('@/views/billlist'),
  '/billdetail': () => import('@/views/billdetail'),
  '/invoicelist': () => import('@/views/invoicelist'),
  '/invoicedetail': () => import('@/views/invoicedetail')
}

const routes = constRoutes
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!isAuthenticated() && to.path !== '/login') {
    next({ name: 'Login' })
  } else if (store.state.menulist.length === 0) {
    store.dispatch('getMenulist')
    console.log(store.state)
  }
  next()
})

export function addDynamicRoute (result) {
  const tmp = {
    path: '/layout',
    component: layout,
    children: [

    ]
  }
  // 根据获取的路由重新配置路由
  result.forEach(item => {
    const subtmp = {
      path: item.url,
      component: asyncRouters[item.url],
      name: asyncRouters[item.url].name,
      children: [

      ]
    }
    if (item.childMenus && item.childMenus.length) {
      item.childMenus.forEach(cItem => {
        const ssubtmp = {
          path: cItem.url,
          component: asyncRouters[cItem.url],
          name: asyncRouters[cItem.url].name
        }
        console.log(asyncRouters[cItem.url].name)
        subtmp.children.push(ssubtmp)
      })
    }
    tmp.children.push(subtmp)
  })
  // 添加路由
  router.addRoutes([tmp])
}

export default router
