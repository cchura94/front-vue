import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

function authGuard(to, from, next){
  try{
    const authToken = JSON.parse(atob(localStorage.getItem("token")))
    console.log(authToken.token)
    //&& !auth.loggedIn()
    if(authToken && authToken.token ){
      next();
    }else{
      next({name: 'Login'})
    }
    

  }catch(error){
    localStorage.clear();
    next({name: 'Login'});
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requireAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/productos',
    name: 'Producto',
    component: () => import(/* webpackChunkName: "producto" */ '../views/cliente/Producto.vue')
  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: () => import(/* webpackChunkName: "acerca_de" */ '../views/cliente/Acerca.vue'),
    
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/cliente/Contacto.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/cliente/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
    beforeEnter: authGuard,
    meta: {requireAuth: true},
    children: [
      {
        path: "producto",
        name: 'Producto',
        component: () => import(/* webpackChunkName: "producto" */ '../views/admin/Producto.vue'),
    beforeEnter: authGuard,
      },
      {
        path: "pedido",
        name: 'Pedido',
        component: () => import(/* webpackChunkName: "pedidos" */ '../views/admin/Pedidos.vue')

      },
      {
        path: "cliente",
        name: 'Cliente',
        component: () => import(/* webpackChunkName: "cliente" */ '../views/admin/Cliente.vue')

      }
    ]
  }

]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if(to.meta.requireAuth){

    try{
    const authToken = JSON.parse(atob(localStorage.getItem("token")))
    console.log(authToken.token)
    if(authToken && authToken.token){
      next();
    }else{
      next({name: 'Login'})
    }
    

  }catch(error){
    localStorage.clear();
    next({name: 'Login'});
  }


  }
  next()
})

export default router
