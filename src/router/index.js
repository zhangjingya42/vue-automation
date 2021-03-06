import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import frist from '@/components/views/frist'
import vant from '../components/views/vant.vue'

Vue.use(Router)
// let Login = (resolve) => require(['@/components/Account/Login.vue'], resolve)
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'frist',
      component:frist
    },
    {
      path: '/vant',
      name: 'vant',
      component:vant
    },
  
  ]
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
