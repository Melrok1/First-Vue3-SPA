import { createRouter, createWebHistory } from 'vue-router'
// import {users} from '@/assets/users.js'
import store from '@/store'
import Home from '../views/Home.vue'
import UserProfile from '@/views/UserProfile.vue'
import AdminPage from '@/views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {
  const user = store.state.user;

  if(!user) {
    await store.dispatch('setUser', {userName: '@_?'});
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if(requiresAdmin && !isAdmin) next({name: 'Home'})
  else next();
})

export default router
