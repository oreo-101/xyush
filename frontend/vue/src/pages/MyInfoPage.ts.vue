<template>
  <div>
    <h1>Hello {{ userManager.username.value }}</h1>
    <div>
      <div>UserName: {{ userManager.username.value }}</div>
      <div>Email: {{ userManager.email.value }}</div>
      <div>Roles:
        <span v-for="role in userManager.roles.value" :key="role">
          <TagTsVue :text="role" />
        </span>
      </div>
    </div>
    <div id="test">
      <button @click="apiTestAll()">api test all</button>
      <button @click="apiTestUser()">api test user</button>
      <button @click="apiTestMod()">api test mod</button>
      <button @click="apiTestAdmin()">api test admin</button>
    </div>
  </div>
</template>

<script lang="ts">
import TagTsVue from '@/components/widgets/Tag.ts.vue';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import router from '@/router';
import { defineComponent } from 'vue';

import ax from '@/api/AxiosUtil';


export default defineComponent({
  name: 'MyInfoPage',
  props: {
    msg: String,
  },
  components: { TagTsVue },
  setup() {
    const userManager = safeInject(USER_MANAGER_KEY);

    // not logged in
    if (!userManager.username.value) {
      router.push({ name: "Login", params: { next: "MyInfo" } });
    }


    const apiTestAll = () => {
      ax.get("/api/test/all")
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }
    const apiTestUser = () => {
      ax.get("/api/test/user", {
        headers: {
          Authorization: userManager.token.value,
        }
      })
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }
    const apiTestMod = () => {
      ax.get("/api/test/mod")
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }
    const apiTestAdmin = () => {
      ax.get("/api/test/admin")
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
    }

    return {
      userManager,
      apiTestAll,
      apiTestUser,
      apiTestMod,
      apiTestAdmin,
    }
  }
});
</script>

<style scoped>
</style>
