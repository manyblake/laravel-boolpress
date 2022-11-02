window.Vue = require("vue");

window.axios = require("axios");

import VueRouter from "vue-router";
import Home from "../js/components/pages/Home.vue";

Vue.use(VueRouter);

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes,
});

import App from "./views/App.vue";

const app = new Vue({
    el: "#app",
    render: (h) => h(App),
    router: router,
});
