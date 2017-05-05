import Vue from 'vue'
import Router from 'vue-router'

// components / views
import Hello from '@/components/ShirtList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
