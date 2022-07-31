import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.ts.vue";
import SignupForm from "@/components/SignupForm.ts.vue";
import LoginForm from "@/components/LoginForm.ts.vue";
import MyInfoPage from "@/pages/MyInfoPage.ts.vue";

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
    {
        path: "/my",
        name: "MyInfo",
        component: MyInfoPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
