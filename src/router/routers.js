import Home from '@/components/HomePage.vue'
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
import UpdateRestaurant from '@/components/UpdateRestaurant.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
        meta: {
            title: 'Home Page'
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
    next()
})

export default router;