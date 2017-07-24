import Vue from 'vue'
import Router from 'vue-router'
import Public from '@/components/Public'
import Home from '@/components/Home'
import Ya from '@/components/Ya'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/ya',
          name: 'ya',
          component: Ya
        }]
    }
  ]
})
