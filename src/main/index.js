import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// import FastClick from 'fastclick';
import { LazyLoad as LazyLoad } from '../components/index';


import routes from './routes.js';
// FastClick.attach(document.body);


Vue.use(VueRouter);
Vue.use(LazyLoad, {
    loading: require('../components/lazy-load/loading.svg'),
    try: 3
})

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
