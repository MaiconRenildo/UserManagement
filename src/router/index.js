import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Admin/Users.vue'
import Edit from '../views/Admin/Edit.vue'
import Forgot from '../views/RecoverPassword/Forgot.vue'
import CodeVerification from '../views/RecoverPassword/CodeVerification.vue'
import NewPassword from '../views/RecoverPassword/NewPassword.vue'
import axios from 'axios'


function adminAuth(to,from,next){
  let req={
    headers:{
      Authorization:"Bearer "+localStorage.getItem('token')
    }
  }

  //Envia a requisição para uma rota intermediaria que é mediada pelo middleware
  axios.post("http://localhost:8686/validate",{},req).then(res=>{
    console.log(res);
    next();
  }).catch(err=>{
    console.log(err.response.data)
    next('/login')
  })
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/admin/users',
    name:'Users',
    component:Users,
    beforeEnter:adminAuth
  },
  {
    path:'/admin/users/edit/:id',
    name:'UserEdit',
    component:Edit,
    beforeEnter:adminAuth
  },
  {
    path:'/recoverPassword',
    name:'recover',
    component:Forgot
  },
  {
    path:'/tokenValidate',
    name:'tokenValidate',
    component:CodeVerification
  },
  {
    path:'/newPassword',
    name:'newPassword',
    component:NewPassword
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
