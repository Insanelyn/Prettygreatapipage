import VueRouter from 'vue-router';
import Articles from '@/components/Articles'
import Card from '@/components/Card'

import Article from '@/components/Article'
import Category from '@/components/Category'
import Checkout from '@/components/Checkout'
import Thankyou from '@/components/Thankyou'
const routes = [
    {
        path: '/',
        name:'home',
        component: Articles
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
        props: true
    },
    {
        path: '/categories/:category',
        name: 'category',
        component: Category,
        props: true
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
    },
    {
        path: '/Thankyou',
        name: 'thankyou',
        component: Thankyou,
    },
    {
        path: '/reviews',
        name: 'review',
        component: Card,
}


];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
