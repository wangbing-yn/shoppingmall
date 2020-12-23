import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import Hed from '../components/Hed'
import Sou from '../components/Sou'
import Fot from '../components/Fot'
import Tab from '../components/Tab'
import Good from '../view/Good'
import Daohang from '../components/Daohang'
import Daohang1 from '../components/Daohang1'
import Daohang2 from '../components/Daohang2'
import carshop from '../view/carshop'
import dan from '../view/dan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../components/login.vue")
    },
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/Hed',
      component: Hed
    },
    {
      path: '/Sou',
      component: Sou
    },
    {
      path: '/Fot',
      component: Fot
    },
    {
      path: '/Tab',
      component: Tab
    },
    {
      path: '/Good',
      component: Good,
      name:'Good',
      redirect: '/Good/Daohang',
      children: [
        {
          path: 'Daohang',
          component: Daohang
        },
        {
          path: 'Daohang1',
          component: Daohang1
        },
        {
          path: 'Daohang2',
          component: Daohang2
        },
      ]
    },
    {
      path: '/carshop',
      component: carshop
    },
    {
      path: '/dan',
      component: dan
    },
  ]
})
