import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/app/Curriculo/Main'
import curriculoRoutes from '@/app/Curriculo/Routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/curriculos'
    },
    {
      path: '/curriculos/',
      name: 'Curriculos',
      component: Main,
      children: curriculoRoutes
    }
  ]
})
