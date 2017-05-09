import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';

import App from './App.vue';
import store from '../store/index';
import routes from './routes.js';
import { LazyLoad as LazyLoad } from '../components/index';
FastClick.attach(document.body);

Vue.use(VueRouter);
Vue.use(LazyLoad, {
    loading: require('../components/lazy-load/loading.svg'),
    try: 3
});

const router = new VueRouter({
    // mode: 'history',
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
