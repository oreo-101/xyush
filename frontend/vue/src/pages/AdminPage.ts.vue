<template>
  <div>
    <h2>Admin Page</h2>
    <h3>Categories</h3>
    {{ postCategories.data }}
    <h3>Create New Categories</h3>
    <form @submit.prevent>
      <label>New Categorty Name</label>
      <input type="text" v-model="newCategoryName" />
      <button type="submit" @click="createNewPostCategory">Create</button>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAllPostCategory, useCreatePostCategory } from '@/api/PostAPI';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';

export default defineComponent({
  name: "AdminPage",
  setup() {
    const userManager = safeInject(USER_MANAGER_KEY);
    const { postCategories, reload } = useAllPostCategory();

    const newCategoryName = ref("");
    const createPostCategory = useCreatePostCategory(userManager);
    const createNewPostCategory = () => {
      createPostCategory(newCategoryName.value).then(() => reload())
    }
    return {
      postCategories,
      newCategoryName,
      createNewPostCategory,
    }
  },
});
</script>

<style scoped>
</style>