import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'

const routes = [
  {
    path: '/',  // 路由路径，必须以/开头
    name: 'start',
    component: StartView // 路由组件
  },
  {
    path: '/home',  // 路由路径，必须以/开头
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // 按需引入：如果没有访问/about，就不会加载组件
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
