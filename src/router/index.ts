import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue' // Import component Login.vue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/login', // URL để truy cập trang đăng nhập
      name: 'login',
      component: Login, // Chỉ định component Login.vue
    },

  ],
})

export default router
