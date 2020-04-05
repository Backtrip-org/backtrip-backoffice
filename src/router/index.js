import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import Hi from "@/components/Hi";

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
        }
    ],
    mode: 'history'
})
