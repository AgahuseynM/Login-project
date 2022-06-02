import {RouteRecordRaw} from 'vue-router';
import Public from '@/core/layouts/public/public.component.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'public',
        component: Public,
        children: [
            {
                path: '/',
                name: 'login',
                component: () => import('../pages/login/login.component.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../pages/register/register.component.vue')
            }
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/about/about.component.vue')
    },
];

export default routes;
