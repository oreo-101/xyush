import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.ts.vue";
import SignupForm from "@/components/SignupForm.ts.vue";
import LoginForm from "@/components/LoginForm.ts.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld,
    },
    {
        path: "/signup",
        name: "Signup",
        component: SignupForm,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginForm,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
