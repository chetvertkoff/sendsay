import VueRouter from 'vue-router'
import Login from './Pages/Login/Login'
import Console from './Pages/Console/Console'

const routes = {
  mode: 'history',
  routes: [
    { path: '/', component: Console },
    { path: '/login', component: Login },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
}

export const router = new VueRouter(routes)