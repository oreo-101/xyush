<template>
  <div>
    <span>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </span>
    <span>
      |
      <router-link :to="{ name: 'CampusCircle' }">科大圈</router-link>
    </span>
    <span v-if="!isSignedIn">
      |
      <router-link :to="{ name: 'Login' }">Login Page</router-link>
    </span>
    <span v-if="!isSignedIn">
      |
      <router-link v-if="!isSignedIn" :to="{ name: 'Signup' }">Singup Page</router-link>
    </span>
    <span v-if="isSignedIn">
      |
      <router-link v-if="isSignedIn" :to="{ name: 'MyInfo' }">My Details</router-link>
    </span>
    <span v-if="isSignedIn && isAdmin">
      |
      <router-link :to="{ name: 'AdminPage' }">Admin</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {

    const userManager = safeInject(USER_MANAGER_KEY);

    return {
      isSignedIn: userManager.isSignedIn,
      isAdmin: userManager.isAdmin,
    }

  }
});
</script>

<style scoped>
</style>
