import Home from "@/views/Home.vue";
import { createWebHashHistory, createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
