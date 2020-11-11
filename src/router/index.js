import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import orderlist from '@/views/orderlist'
import orderdetail from '@/views/orderdetail'
import refundlist from '@/views/refundlist'
import refunddetail from '@/views/refunddetail'
import billlist from '@/views/billlist'
import billdetail from '@/views/billdetail'
import invoicelist from '@/views/invoicelist'
import invoicedetail from '@/views/invoicedetail'
import layout from '@/views/layout'
import { isAuthenticated } from '@/components/permission'
Vue.use(VueRouter)

const constRoutes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: login, name: login.name }
]

export const asyncRouters = [
  { path: '/home', component: home },
  { path: '/orderlist', component: orderlist },
  { path: '/orderdetail', component: orderdetail },
  { path: '/refundlist', component: refundlist },
  { path: '/refunddetail', component: refunddetail },
  { path: '/billlist', component: billlist },
  { path: '/billdetail', component: billdetail },
  { path: '/invoicelist', component: invoicelist },
  { path: '/invoicedetail', component: invoicedetail }
]

const tmp = {
  path: '/layout',
  component: layout,
  children: [

  ]
}

asyncRouters.forEach(route => {
  const subtmp = {
    path: route.path,
    component: route.component,
    name: route.component.name
  }
  tmp.children.push(subtmp)
})

const routes = constRoutes.concat(tmp)
console.log(routes)
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
