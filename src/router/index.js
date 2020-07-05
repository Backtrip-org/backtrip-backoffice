import Vue from 'vue';
import VueRouter from 'vue-router';
import Hi from "@/components/Hi";
import Login from "../components/Login";
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: HelloWorld
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
