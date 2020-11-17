import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import login from '@/views/login'
import layout from '@/views/layout'
import user from '@/views/user'
import userprofile from '@/views/userprofile'
import userposts from '@/views/userposts'
import defaulthome from '@/views/defaulthome'
import NotFoundComponent from '@/views/NotFoundComponent'
// import sidebar from '@/views/sidebar'
// import main from '@/views/main'
// import { isAuthenticated } from '@/components/permission'
// import store from '@/store/index'
Vue.use(VueRouter)

const constRoutes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login, name: login.name },
  { path: '/home', component: layout,
    children: [
      { path: '', component: defaulthome, name: defaulthome.name }
    ]
  }
]

console.log(constRoutes)

export const asyncRouters = {
  "/todolist": () => import("@/views/todolist.vue"),
  "/tododetail": () => import("@/views/tododetail.vue")
}

const routes = [
  { path: '/', redirect: to => {
    // 方法接收 目标路由 作为参数
    // return 重定向的 字符串路径/路径对象
    // return { name: 'home' }
    // return '/home'
    return { path: '/home' }
  } },
  { path: '/home', component: home, name: 'home', alias: '/abc',
    children: [
      { path: '', component: defaulthome },
      { path: '/user/:id', component: user, props: (route) => ({ id: route.params.id }),
        children: [
          { path: 'profile', component: userprofile, name: 'profile' },
          { path: 'posts', component: userposts, name: 'posts',
            beforeEnter: (to, from, next) => {
              console.log('post页面独享守卫')
              next()
            } }
        ]
      }
    ]
  },
  { path: '*', component: NotFoundComponent }
]

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       components: {
//         sidebar: sidebar,
//         main: main
//       }
//     }
//   ]
// })

// const routes = [
//   { path: '/user/:id', component: user,
//     children: [
//       { path: 'profile', component: userprofile },
//       { path: 'posts', component: userposts }
//     ]
//   }
// ]

// constRoutes
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  console.log('before=====from=====', from.path)
  console.log('before=====to=======', to.path)
  if (to.path === from.path)next(false)
  next()
})

router.afterEach(route => {
  console.log('after======', route.path)
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
// router.beforeEach(async (to, from, next) => {
//   if (!isAuthenticated() && to.path !== '/login') {
//     next({ name: 'Login' })
//     return
//   }
//   if (isAuthenticated() && store.state.menulist && store.state.menulist.length === 0) {
//     await store.dispatch('getMenulist')
//     console.log(store.state)
//   }
//   next()
// })

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
