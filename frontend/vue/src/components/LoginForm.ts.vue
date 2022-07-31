
<template>
    <div class="container">
        <h1 class="heading">Login Form</h1>

        {{ notification }}
        <div class="singup-form">
            <form @submit.prevent>
                <div class="input-group">
                    <div class="label">User Name</div>
                    <input v-model="usernameInput" type="text" placeholder="username" />
                </div>
                <div class="input-group">
                    <div class="label">Password</div>
                    <input v-model="passwordInput" type="text" placeholder="password" />
                </div>
                <button type="submit" @click="loginUser">Login</button>
                <!-- <input type="submit" @click="loginUser" style="display: none" /> -->
            </form>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import { useRoute } from 'vue-router';
import router from '@/router';
import { isArray } from '@vue/shared';

export default defineComponent({
    name: 'LoginForm',
    setup() {

        const route = useRoute();
        const nextUrl = route.params?.next;

        const usernameInput = ref("");
        const passwordInput = ref("");

        const notification = ref("");

        const userManager = safeInject(USER_MANAGER_KEY);


        const loginUser = () => {
            userManager.login({
                username: usernameInput.value,
                password: passwordInput.value,
            }).then(() => {
                if (nextUrl && !isArray(nextUrl)) {
                    router.push({ name: nextUrl });
                } else {
                    // report signed in
                    // or direct to user page
                    router.push({ name: "MyInfo" });
                }
            })
        }


        return {
            usernameInput,
            passwordInput,
            notification,
            loginUser,
        }

    }
});
</script>

<style scoped>
.heading {
    text-align: center;
}

/* .singup-form {
    display: flex;
} */

.singup-form {
    min-width: 300px;
    width: 15%;
    margin: auto;
}

.input-group {
    padding-bottom: 1rem;
}

.input-group input {
    width: 100%;
}

.label {
    font-size: large;
}
</style>
