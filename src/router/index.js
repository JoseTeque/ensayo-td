import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Home from '../views/Home.vue';
import Login from "../views/Login.vue";
import Course from '../views/Course.vue';
import AddCourse from '../views/AddCourse.vue';
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ["/home"],
    meta:{
      login:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/course',
    name: "Course",
    component: Course,
    meta:{
      login:true
    }
  },
  {
    path: '/addCourse',
    name: "AddCourse",
    component: AddCourse,
    meta:{
      login:true
    }
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound,
}, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser

  let authRequired = to.matched.some(route => route.meta.login)
  if(!user && authRequired){
    next('/login')
  } else {
    next()
  }
})

export default router
