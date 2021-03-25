import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import images from '@/views/images.vue'
import blog from '@/views/blog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/blog',
    name:'blog',
    component:blog
  },
  {
    path:'/images',
    name:'images',
    component:images
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
