import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from '@/store/index'
import api from './api' // 导入api接口

Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
