import Vue from 'vue';
import VueRouter from 'vue-router';
import Hi from "@/components/Hi";
import Login from "../components/Login";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/hi',
            component: Hi
        },
        {
            path: '/login',
            component: Login
        }
    ],
    mode: 'history'
})
