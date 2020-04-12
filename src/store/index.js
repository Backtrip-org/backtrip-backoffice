import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// States of the application
const state = {
    hello: 'Hello you!',
    access_token: localStorage.getItem('access_token') || ''
};

// Modify state; always synchronous
const mutations = {
    setAccessToken: (state, access_token) => {
        localStorage.setItem('access_token', access_token)
        state.access_token = access_token
    }
};

// Asynchronous treatments; should call mutations
const actions = {

};

// Getters for state when you need to transform data before returning it
const getters = {

};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
