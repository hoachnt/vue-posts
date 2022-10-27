import Main from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    meta: { auth: true },
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
    name: "posts",
  },
  {
    path: "/about",
    meta: { auth: true },
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    meta: { auth: true },
    component: PostIdPage,
  },
  {
    path: "/register",
    component: Register,
    name: 'register',
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const requireAuth = to.matched.some(page => page.meta.auth)

  if(!token && requireAuth) {
    next('/register')
  } else {
    next()
  }
})

export default router;
