import Vue from 'vue'
import Router from 'vue-router'
import loading from '../components/Loading'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: loading
    }
  ]
})

export default router
