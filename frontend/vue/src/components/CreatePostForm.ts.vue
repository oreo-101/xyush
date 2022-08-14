
<template>
    <div class="container">
        <form @submit.prevent>
            <div class="input-group">
                <div class="label"></div>
                <MultiSelectTs :items="displayPostCategories" @change="updateCategories"></MultiSelectTs>
            </div>
            <div class="input-group">
                <textarea id="post-content-input" v-model="content" type="text" placeholder="Content..." />
            </div>
            <button type="submit" @click="createPost">Create Post</button>
            <button @click="cancel">Cancel</button>
            <!-- <input type="submit" @click="loginUser" style="display: none" /> -->
        </form>
    </div>
</template>


<script lang="ts">
import { useAllPostCategory, useCreatePost } from '@/api/PostAPI';
import { safeInject, USER_MANAGER_KEY } from '@/manager/providers';
import { computed, Ref } from '@vue/reactivity';
import { defineComponent, ref } from 'vue';
import MultiSelectTs from './MultiSelect.ts.vue';

export default defineComponent({
    name: "CreatePostForm.ts.vue",
    setup(props, context) {
        const content = ref("");
        const categories: Ref<string[]> = ref([]);
        const userManager = safeInject(USER_MANAGER_KEY);
        const { postCategories } = useAllPostCategory();

        const displayPostCategories = computed(() => postCategories.value.data.map(i => i.name));

        const updateCategories = (newCategories: Ref<Set<string>>) => {
            categories.value = [];
            newCategories.value.forEach(c => categories.value.push(c));
        }

        const createPostFunc = useCreatePost(userManager);
        const createPost = () => {
            createPostFunc({
                content: content.value,
                categories: categories.value,
            }).then(res => {
                if (res.data) {
                    context.emit("created");
                }
            }).catch(error => {
                console.log(error);
            });
        };

        const cancel = () => {
            context.emit("cancel");
        }
        return {
            content,
            createPost,
            postCategories,
            updateCategories,
            displayPostCategories,
            cancel,
        };
    },
    components: { MultiSelectTs }
});
</script>

<style scoped>
.container {
    background-color: rgb(250, 250, 250);
    padding: 1rem;
}

.input-group {
    margin-bottom: 0.5rem;
}

#post-content-input {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    /* outline: none; */
}
</style>
