<template>
  <div class="postContainer">
    <div v-if="categories.length !== 0" class="category-container post-section">
      <span v-for="cat in categories" :key="cat">
        <TagTs :text="cat"></TagTs>
      </span>
    </div>
    <div class="post-body-container post-section">
      <div class="post-metadata">
        <div class="user-image"></div>
        <div>
          <UserTagTsVue :data="postData.user" />
          <div class="date post-creation-date">{{ postDate }}</div>
        </div>
      </div>
      <div class="post-content-container">
        {{ postData.content }}
      </div>
    </div>
    <div class="comments-and-like post-section">
      <div>
        <font-awesome-icon icon="fa-regular fa-comment-dots" />
        {{ commentCountDisplay }}
      </div>
      <div>
        <font-awesome-icon icon="fa-regular fa-thumbs-up" />
        {{ likeCountDisplay }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/api/PostAPI';
import { computed, ref } from '@vue/reactivity';
import { defineComponent, PropType } from 'vue';
import UserTagTsVue from '../widgets/UserTag.ts.vue';
import TagTs from '../widgets/Tag.ts.vue';


function formatDate(dateAsStr: string) {
  const date = new Date(dateAsStr);
  const hours = date.getHours().toPrecision(2).toString().replace(".", "");
  const minutes = date.getMinutes().toPrecision(2).toString().replace(".", "");
  return date.getMonth() + "月" + date.getDate() + "日 " + hours + ":" + minutes;
}

export default defineComponent({
  name: 'PostItem',
  props: {
    data: {
      type: Object as PropType<Post>,
      required: true,
    }
  },
  components: { UserTagTsVue, TagTs },
  setup(props) {

    const categories = computed(() => props.data.categories.map(c => c.name))
    const postAuthor = computed(() => props.data.user);
    const postDate = computed(() => formatDate(props.data.createdAt));
    const commentCount = ref(0);
    const commentCountDisplay = computed(() => commentCount.value || "评论");
    const likeCount = ref(0);
    const likeCountDisplay = computed(() => likeCount.value || "赞");
    return {
      postData: props.data,
      categories,
      postAuthor,
      postDate,
      commentCountDisplay,
      likeCountDisplay,
    }
  }
});
</script>

<style scoped>
.postContainer {
  border-radius: 1rem;
  background-color: rgb(250, 250, 250);
}

.post-body-container {
  border-bottom: 1px solid grey;
}

.post-metadata {
  display: flex;
}

.category-container {
  border-bottom: 1px solid grey;
}

.post-section {
  padding: 0.5rem 1rem;
}

.post-content-container {
  margin-top: 0.5rem;
}

.comments-and-like {
  display: flex;
  justify-content: space-evenly;
}

.comments-and-like div {
  user-select: none;
}

.comments-and-like div:hover {
  cursor: pointer;
}

.user-image {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: gray;
  box-shadow: 1px;
  margin-right: 1rem;
}

.date {
  font-size: 0.8rem;
  color: gray;
}

.post-creation-date {
  margin-top: 4px;
}
</style>
