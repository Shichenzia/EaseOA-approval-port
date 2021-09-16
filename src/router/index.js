import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateApproval from "../views/CreateApproval/Index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createApproval',
    name: 'CreateApproval',
    component: CreateApproval
  }
]

const router = new VueRouter({
  routes
})

export default router
