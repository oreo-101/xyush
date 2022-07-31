
<template>
    <div class="container">
        <div class="form">
            <form @submit.prevent>
                <div class="input-group">
                    <div class="label">Create a new post</div>
                    <textarea v-model="content" type="text" placeholder="Content..." />
                </div>
                <button type="submit" @click="createPost">Create Post</button>
                <!-- <input type="submit" @click="loginUser" style="display: none" /> -->
            </form>
        </div>
    </div>
</template>


<script lang="ts">
import { useCreatePost } from '@/api/PostAPI';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CreatePostForm.ts.vue',
    setup() {
        const content = ref("");
        const userManager = safeInject(USER_MANAGER_KEY);
        const createPostFunc = useCreatePost(userManager);
        const createPost = () => {
            createPostFunc(content.value).then(res => {
                if (res.data) {
                    // good
                }
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            content,
            createPost,
        }
    }
});
</script>

<style scoped>
</style>
