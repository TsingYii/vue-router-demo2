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

Vue.use(VueRouter)

const constRoutes = [
  { path: '/home', component: home },
  { path: '/login', component: login }
]

const asycnRouters = [
  { path: '/orderlist', component: orderlist },
  { path: '/orderdetail', component: orderdetail },
  { path: '/refundlist', component: refundlist },
  { path: '/refunddetail', component: refunddetail },
  { path: '/billlist', component: billlist },
  { path: '/billdetail', component: billdetail },
  { path: '/invoicelist', component: invoicelist },
  { path: '/invoicedetail', component: invoicedetail }
]

const routes = constRoutes.concat(asycnRouters)

const router = new VueRouter({
  routes
})

export default router
