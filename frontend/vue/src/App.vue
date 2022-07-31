<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import { USER_MANAGER_KEY } from './manager/providers';
import UserManager from './manager/UserManager';
import NavBar from '@/components/NavBar.ts.vue';

export default defineComponent({
  name: 'App',
  components: { NavBar },
  setup() {
    provide(USER_MANAGER_KEY, new UserManager());
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
