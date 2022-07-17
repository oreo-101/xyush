
<template>
    <div class="container">
        <h1 class="heading">Login Form</h1>

        {{ notification }}
        <div class="singup-form">
            <div class="input-group">
                <div class="label">User Name</div>
                <input v-model="username" type="text" placeholder="username" />
            </div>
            <div class="input-group">
                <div class="label">Password</div>
                <input v-model="password" type="text" placeholder="password" />
            </div>
            <button type="submit" @click="loginUser">Login</button>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login, LoginRequest } from "@/api/User";

export default defineComponent({
    name: 'LoginForm',
    setup() {
        // const posts = useAllPosts();

        const username = ref("");
        const password = ref("");

        const notification = ref("");


        const loginUser = () => {
            const roles: Set<String> = new Set();
            roles.add("ROLE_USER");
            const req: LoginRequest = {
                username: username.value,
                password: password.value,
            };
            login(req)
                .then(respose => {
                    notification.value = respose.data as unknown as string;
                }).catch(error => {
                    notification.value = error;
                });
        }


        return {
            username,
            password,
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
