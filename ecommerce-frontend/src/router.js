import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ProductList from './components/ProductList.vue';
import About from "./pages/about.vue";
import Home from "./pages/Home.vue";
import MainLayout from "./pages/MainLayout.vue";
import Basket from "./pages/Basket.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainLayout
      },
    {
        path: '/ProductList',
        name: 'ProductList',
        component: ProductList
      },
    { 
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {public: true}
    },
    {
        name: 'Register',
        path: '/Register',
        component: Register,
        meta: {public: true}
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        meta: {public: true}
    },
    {
        name: 'basket',
        path: '/basket',
        component: Basket,
        meta: {public: true}
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');

    if (!to.meta.public && !isAuthenticated) {
        next({ name: 'Login' });
    }else{
        next();
    }
}
);
export default router;