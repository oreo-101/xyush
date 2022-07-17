<template>
  <div class="hello">
    Hello world page
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authTest, signup } from "@/api/User";

const signupTest = () => {

  const roles: Set<String> = new Set();
  roles.add("ROLE_USER");

  signup({ username: "leo", email: "leo@oreo.com", roles: roles, password: "124" })
    .then(data => {
      console.log(data);
    }).catch(error => {
      console.log("error", error);
    });

}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    // const posts = useAllPosts();

    authTest().then(data => {
      console.log(data)
    })

    signupTest();

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
