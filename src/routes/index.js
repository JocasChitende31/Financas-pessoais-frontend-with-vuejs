import Expenses from "@/views/expenses.vue";
import Home from "@/views/Home.vue";
import Infos from "@/views/infos.vue";
import Perfil from "@/views/perfil.vue";
import Saving from "@/views/saving.vue";
import Sources from "@/views/sources.vue";
import { createWebHashHistory, createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/meus-ganhos',
        component: Sources
    },
    {
        path: '/minhas-despesas',
        component: Expenses
    },
    {
        path: '/minhas-poupancas',
        component: Saving
    },
    {
        path: '/meu-perfil',
        component: Perfil
    },
    {
        path: '/about',
        component: Infos
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
