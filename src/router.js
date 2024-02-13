import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component : () => import("@/views/Home.vue")
    },
    {
        path: "/com",
        component : () => import("@/views/Com.vue")
    },
]

const router = createRouter({
    routes,
    history : createWebHistory()
});

export default router;