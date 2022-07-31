<template>
  <div class="postContainer">
    <div>
      {{ postData.id }}
      <UserTagTsVue :data="postData.user" />
      {{ postData.createdAt }}
    </div>
    <div>
      {{ postData.content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/api/PostAPI';
import { defineComponent } from 'vue';
import UserTagTsVue from '../widgets/UserTag.ts.vue';

export default defineComponent({
  name: 'PostItem',
  props: {
    data: {
      type: Object
    }
  },
  components: { UserTagTsVue },
  setup(props) {

    return {
      postData: props.data as Post
    }
  }
});
</script>

<style scoped>
.postContainer {
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: 0.5rem 1rem;
}
</style>
