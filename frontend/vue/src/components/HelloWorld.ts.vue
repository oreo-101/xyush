<template>
  <div class="hello">
    Hello world page
    <PostingsView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authTest } from "@/api/User";
import PostingsView from './PostingsView.ts.vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: { PostingsView },
  setup() {
    // const posts = useAllPosts();

    authTest().then(data => {
      console.log(data)
    })


    return {
      posts: []
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
