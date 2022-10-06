import Main from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutPage from '@/pages/AboutPage'
import PostIdPage from '@/pages/PostIdPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router