<template>
    <div class="container">
        {{ userViewData.username }}
        <TagTsVue v-for="role in userViewData.roles" :key="role.id" :text="trimRole(role.name)" />
    </div>
</template>

<script lang="ts">
import { UserView } from '@/api/User';
import { defineComponent } from 'vue';
import TagTsVue from './Tag.ts.vue';

function trimRole(roleText: string) {
    return roleText.substring(5)
}

export default defineComponent({
    name: 'TagComp',
    props: {
        data: {
            type: Object
        }
    },
    components: { TagTsVue },
    setup(props) {
        return {
            userViewData: props.data as UserView,
            trimRole,
        }
    }
});
</script>

<style scoped>
.container {
    display: inline-block;
}
</style>
