<template>
  <div>
    <CreatePostForm />
    <div>
      <PostItem v-for="post in posts.data" :key="post.id" :data="post">
        {{ post }}
      </PostItem>
    </div>
  </div>
</template>

<script lang="ts">
import { useAllPosts } from '@/api/PostAPI';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import { defineComponent } from 'vue';
import CreatePostForm from './CreatePostForm.ts.vue';
import PostItem from './posts/PostItem.ts.vue';

export default defineComponent({
  name: 'PostingsView',
  components: { CreatePostForm, PostItem },
  setup() {

    const userManager = safeInject(USER_MANAGER_KEY);
    const posts = useAllPosts(userManager);

    return {
      isSignedIn: userManager.isSignedIn,
      posts
    }

  }
});
</script>

<style scoped>
</style>
