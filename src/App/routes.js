import VueRouter from 'vue-router'
import Login from './Pages/Login/Login'
import Console from './Pages/Console/Console'

const routes = [
  { path: '/', component: Console },
  { path: '/login', component: Login }
]

export const router = new VueRouter({routes})