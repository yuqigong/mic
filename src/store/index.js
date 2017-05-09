import Vue from 'vue';
import Vuex from 'vuex';
import calc from './mods/calc';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        calc
    }
});

export default store
