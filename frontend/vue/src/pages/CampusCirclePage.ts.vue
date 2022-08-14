<template>
  <div id="body">
    <div id="action-bar">
      <input type="text" placeholder="Search" />
      <font-awesome-icon v-if="isSignedIn" id="create-post-icon" icon="fa-solid fa-circle-plus"
        @click="showCreatePostForm = !showCreatePostForm" />
    </div>
    <div v-if="showCreatePostForm">
      <CreatePostFormTs @cancel="showCreatePostForm = false" @created="createPostSuccess" />
    </div>
    <div id="category-select-bar">
      <TabSelectTs :items="postCategoriesStrings" :selected="selectedCategory"
        @tabClick="(c: string) => selectedCategory = c" />
    </div>
    <div id="filter-bar">
      <TabSelectTs :items="filterCategories" :selected="selectedSortType"
        @tabClick="(c: string) => selectedSortType = c" />
    </div>
    <div id="content-box">
      <PostingsViewTs :posts="posts.data" :sortType="selectedSortType" :filterCategory="filterCategory" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import TabSelectTs from '@/components/TabSelect.ts.vue';
import PostingsViewTs from '@/components/PostingsView.ts.vue';
import { useAllPostCategory, useAllPosts } from '@/api/PostAPI';
import { computed } from '@vue/reactivity';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import CreatePostFormTs from '@/components/CreatePostForm.ts.vue';


export default defineComponent({
  name: "CampusCirclePage",
  components: { TabSelectTs, PostingsViewTs, CreatePostFormTs },
  setup() {

    const { postCategories } = useAllPostCategory();
    const postCategoriesStrings = computed(() => {
      const allCats = postCategories.value.data.map(c => c.name);
      return ["全部", ...allCats];
    });
    const selectedSortType = ref("最新发布");
    const selectedCategory = ref("全部");
    const filterCategory = computed(() => selectedCategory.value === "全部" ? "" : selectedCategory.value);

    const userManager = safeInject(USER_MANAGER_KEY);
    const posts = useAllPosts(userManager);

    const showCreatePostForm = ref(false);
    const createPostSuccess = () => {
      showCreatePostForm.value = false;
      // hack
      posts.value = useAllPosts(userManager).value;
    }
    return {
      selectedCategory,
      filterCategory,
      postCategoriesStrings,
      selectedSortType,
      filterCategories: ["最近热议", "最新发布"],
      posts,
      showCreatePostForm,
      isSignedIn: userManager.isSignedIn,
      createPostSuccess,
    }
  },
});
</script>

<style scoped>
#body {
  background-color: rgb(240, 240, 240);
}

#category-select-bar {
  background-color: white;
  margin-top: 4px;
}

#filter-bar {
  background-color: white;
  margin-top: 4px;
}

#content-box {
  margin-top: 1rem;
}

#action-bar input {
  border-radius: 2rem;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
}

#action-bar {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

#create-post-icon {
  color: green;
}

#create-post-icon:hover {
  cursor: pointer;
}
</style>