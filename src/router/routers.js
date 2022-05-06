import Home from '@/components/HomePage.vue'
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import UpdateRestaurant from '@/components/UpdateRestaurant.vue'
import AddRestaurant from '@/components/AddRestaurant.vue'
import store from '@/store/store.js'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
        meta: {
            title: 'Home Page',
            requiresAuth: true,
        }
    },
    {
        name: 'Signup',
        component: Signup,
        path: '/signup',
        meta: {
            title: 'Sign-up'
        }
    },
    {
        name: 'Login',
        component: Login,
        path: '/login',
        meta: {
            title: 'login'
        }
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/add-restaurent',
        meta: {
            title: 'Add Restaurant'
        }
    },
    {
        name: 'updateRestaurant',
        component: UpdateRestaurant,
        path: '/update-restaurant/:id',
        meta: {
            title: 'Update Restaurant'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Restaurent Application`;
    let user = localStorage.getItem(store.state.userNameLocalStorage);
    if(to.path === '/login' && user) {
        next('/')
        return
    }
    if(to.matched.some(record => record.meta.requiresAuth) && !user) {
        next('/login')
        return
    }
    next()
})

export default router;