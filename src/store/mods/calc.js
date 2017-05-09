/**
 * Created by gongyuqi on 2017/5/9.
 */

const state = {
    count: 0,
    initCount: null
};

const getters = {
    initCount: state => state.initCount
};

const mutations = {
    INCREMENT (state) {
        state.count++
    },
    DECREMENT (state) {
        state.count--
    },
    SQUARE (state) {
        state.count = Math.pow(state.count, 2)
    },
    CUBIC (state) {
        state.count = Math.pow(state.count, 3)
    }
};

const actions = {
    increment ({commit}) {
        commit('INCREMENT')
    },
    decrement ({commit}) {
        commit('DECREMENT')
    },
    square ({commit}) {
        commit('SQUARE')
    },
    cubic ({commit}) {
        commit('CUBIC')
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}