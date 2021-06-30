import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstIndex from '../views/FirstIndex.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstIndex',
    component: FirstIndex
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // {
  //   path: '/index',
  //   name: 'index',
   
  //   component: () => import( '../views/index.vue')
  // },
  {
    path: '/botnav',
    name: 'botnav',
   
    component: () => import( '../components/Botnav.vue'),

    children:[
      {
        path: 'index',
        name: 'index',
       
        component: () => import( '../views/index.vue')
      },
      {
        path: 'order',
        name: 'order',
        // meta:{
        //   requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        // },
        component: () => import( '../views/order.vue')
      },
      {
        path: 'publish',
        name: 'publish',
       
        component: () => import( '../views/publish.vue')
      },
      {
        path: 'mine',
        name: 'mine',
       
        component: () => import( '../views/mine.vue')
      },
      {
        path: 'subpub',
        name: 'subpub',
        
       
        component: () => import( '../views/subpub.vue')
      },
      
    {
      path:'myactivity',
      name:'myactivity',
      component: () => import( '../views/Collection/activity.vue')
    },
    {
      path:'Ballroom',
      name:'Ballroom',
      component: () => import( '../views/Collection/Ballroom.vue')
    },  
    {
      path:'coach',
      name:'coach',
      component: () => import( '../views/Collection/coach.vue')
    }


       
    ]
  },
]

const router = new VueRouter({

  routes
})

export default router
