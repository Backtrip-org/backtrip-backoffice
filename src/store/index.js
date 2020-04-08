import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// States of the application
const state = {
    hello: 'Hello you!'
};

// Modify state; always synchronous
const mutations = {

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
