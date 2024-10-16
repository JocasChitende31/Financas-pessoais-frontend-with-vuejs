import Expenses from "@/views/expenses.vue";
import Home from "@/views/Home.vue";
import Infos from "@/views/infos.vue";
import Perfil from "@/views/perfil.vue";
import Saving from "@/views/saving.vue";
import Sources from "@/views/sources.vue";
import { createWebHashHistory, createMemoryHistory, createRouter } from "vue-router";
import _menagerSavings from "@/views/_menagerSavings.vue";
import _menagerSources from "@/views/_menagerSources.vue";
import _menagerExpenses from "@/views/_menagerExpenses.vue";
import _homeSources from "@/views/_homeSources.vue";
import _homeExpenses from "@/views/_homeExpenses.vue";
import _homeSavings from "@/views/_homeSavings.vue";
import _formSource from "@/views/_formSource.vue";
import _formExpense from "@/views/_formExpense.vue";
import _formSaving from "@/views/_formSaving.vue";
import _listSource from "@/views/_listSource.vue";
import _listExpenses from "@/views/_listExpenses.vue";
import _listSavings from "@/views/_listSavings.vue";
import _othreSource from "@/views/_othreSource.vue";
import _otherExpense from "@/views/_otherExpense.vue";
import _otherSaving from "@/views/_otherSaving.vue";

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
        path: '/user/name',
        component: Perfil,
    },
    {
        path: '/user/_menagerSources',
        component: _menagerSources,
        children: [
            {
                path: '/user/_menagerSources/home', component: _homeSources
            }
            ,
            {

                path: '/menagerSource/_all', component: _listSource
            },
            {
                path: '/menagerSource/_add', component: _formSource
            },
            {
                path: '/menagerSource/_settings', component: _othreSource
            }
        ]
    },
    {
        path: '/user/_menagerExpenses',
        component: _menagerExpenses,
        children: [
            { path: '/user/_menagerExpense', component: _homeExpenses },
            { path: '/_all_e', component: _listExpenses },
            { path: '/_add_e', component: _formExpense },
            { path: '/_settings_e', component: _otherExpense }
        ]
    },
    {
        path: '/user/_menagerSavings',
        component: _menagerSavings,
        children: [
            { path: '/user/_menagerSaving', component: _homeSavings },
            { path: '/_all_sv', component: _listSavings },
            { path: '/_add_sv', component: _formSaving },
            { path: '/_settings_sv', component: _otherSaving }
        ]
    },
    {
        path: '/about',
        component: Infos
    }
]

const router = createRouter({
    linkActiveClass: 'border-indigo-500',
    linkExactActiveClass: 'border-indigo-700',
    history: createWebHashHistory(),
    routes
});

export default router;
