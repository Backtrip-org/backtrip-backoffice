// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'

// The login action passes vuex commit helper that we will use to trigger mutations.
export default {
    login ({ commit }, userData) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post(`/auth/adminLogin`, { email: userData.email, password: userData.password })
                .then(response => {
                    const token = response.data.Authorization
                    const user = response.data.id
                    console.log(response)
                    // storing jwt in localStorage. https cookie is safer place to store
                    localStorage.setItem('token', token)
                    localStorage.setItem('user', user)
                    axios.defaults.headers.common['Authorization'] = token
                    // mutation to change state properties to the values passed along
                    commit('auth_success', { token, user })
                    resolve(response)
                })
                .catch(err => {
                    console.log('login error')
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    logout ({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }

}
