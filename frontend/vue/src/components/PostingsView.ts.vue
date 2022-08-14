<template>
  <div>
    <PostItem class="post-item" v-for="post in postsToDisplay" :key="post.id" :data="post">
      {{ post }}
    </PostItem>
  </div>
</template>

<script lang="ts">
import { Post } from '@/api/PostAPI';
import { computed, ComputedRef, defineComponent, PropType } from 'vue';
import PostItem from './posts/PostItem.ts.vue';

export default defineComponent({
  name: 'PostingsView',
  components: { PostItem },
  props: {
    posts: {
      type: Object as PropType<Post[]>,
      required: true,
    },
    sortType: {
      type: String,
    },
    filterCategory: {
      type: String,
    }
  },
  setup(props) {
    const postsToDisplay: ComputedRef<Post[]> = computed(() => {
      let posts = [...props.posts];

      if (props.filterCategory) {
        posts = posts.filter(p => p.categories.some(c => c.name === props.filterCategory));
      }

      if (props.sortType === "最新发布") {
        // sort by date
        posts = posts.sort((b, a) => b.createdAt.localeCompare(a.udpatedAt));
      }

      return posts;
    })
    return {
      postsToDisplay,
    }
  }
});
</script>

<style scoped>
.post-item {
  margin-bottom: 1rem;
}
</style>
