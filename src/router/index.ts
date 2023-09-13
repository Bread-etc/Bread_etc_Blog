import { createRouter, createWebHistory } from 'vue-router'

// 定义并配置路由
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('@/views/home.vue')
    },
    {
        path: '/essay',
        name: 'essay',
        meta: {
            title: '随笔'
        },
        component: () => import('@/views/essay.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        meta: {
            title: '留言板'
        },
        component: () => import('@/views/contact.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于'
        },
        component: () => import('@/views/about.vue')
    },
]

// 定义路由器
const router = createRouter({
    // 使用HTML5，需要在服务器下使用
    history: createWebHistory(),
    routes,
})

export default router