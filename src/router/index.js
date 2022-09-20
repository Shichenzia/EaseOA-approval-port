import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Index.vue'
import CreateApproval from "../views/CreateApproval/Index.vue";
import AppAdmin from "../components/appAdmin/Index.vue";
import Authority from "../components/Authority/Index.vue";
import DataEduce from "../components/DataEduce/Index.vue";
import Feature from "../components/Feature/Index.vue";
import Departmentanduser from "../components/Team/Departmentanduser.vue";
import Team from "../components/Team/Index.vue"
import Role from "../components/Team/Role.vue";
import member from "../components/Team/member.vue";
import group from "../components/Team/group.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Home,
    children: [
      {
        path: 'appAdmin',
        name: 'AppAdmin',
        component: AppAdmin
      },
      {
        path: 'authority',
        name: 'Authority',
        component: Authority
      }, 
      {
        path: 'dataEduce',
        name: 'DataEduce',
        component: DataEduce
      },
      {
        path: 'feature',
        name: 'Feature',
        component: Feature
      },
      {
        path: 'team',
        name: 'Team',
        component: Team,
        children: [
          {
            path: 'departmentanduser',
            name: 'Departmentanduser',
            component: Departmentanduser,
            children: [
              {
                path: 'member',
                name: 'member',
                component: member
              },
              {
                path: 'group',
                name: 'group',
                component: group
              },
            ]
          },
          {
            path: 'role',
            name: 'Role',
            component: Role,
          }
        ]
      }
    ]
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
