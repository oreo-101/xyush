<template>
  <div id="body">
    <div id="action-bar">action bar</div>
    <div id="category-select-bar">
      <TabSelectTs :items="postCategories" :selected="selectedCategory" @tabClick="changeCategory" />
    </div>
    <div id="filter-bar">
      <TabSelectTs :items="filterCategories" :selected="selectedFilterCat" @tabClick="changeFilter" />
    </div>
    <div id="content-box">
      <PostingsViewTs />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import TabSelectTs from '@/components/TabSelect.ts.vue';
import PostingsViewTs from '@/components/PostingsView.ts.vue';


export default defineComponent({
  name: "CampusCirclePage",
  components: { TabSelectTs, PostingsViewTs },
  setup() {
    const selectedCategory = ref("广场");
    const changeCategory = (newCat: string) => {
      selectedCategory.value = newCat;
    }

    const selectedFilterCat = ref("最近热议");
    const changeFilter = (newFilterCat: string) => {
      selectedFilterCat.value = newFilterCat;
    }
    return {
      selectedCategory,
      changeCategory,
      postCategories: ["广场", "热门", "精选", "扩列", "二手", "游戏", "招新"],
      selectedFilterCat,
      changeFilter,
      filterCategories: ["最近热议", "最新发布"],
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
</style>