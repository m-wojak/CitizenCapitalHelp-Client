import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView,
    children: [
      {
        path: "/help_sections/:id",
        name: "help_section-by-id",
        component: () => import(/* webpackChunkName: "about" */ '../views/HelpSection')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddHelpSection.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
