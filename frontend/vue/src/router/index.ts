import { createWebHistory, createRouter } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.ts.vue";
import LandingPage from "@/pages/LandingPage.ts.vue";
import SignupForm from "@/components/SignupForm.ts.vue";
import LoginForm from "@/components/LoginForm.ts.vue";
import MyInfoPage from "@/pages/MyInfoPage.ts.vue";
import CampusCirclePage from "@/pages/CampusCirclePage.ts.vue";
import AdminPage from "@/pages/AdminPage.ts.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: LandingPage,
    },
    {
        path: "/campus-circle",
        name: "CampusCircle",
        component: CampusCirclePage,
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
    {
        path: "/admin",
        name: "AdminPage",
        component: AdminPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
