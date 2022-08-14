<template>
    <div class="container">
        {{ userViewData.username }}
        <TagTsVue v-for="role in roles" :key="role" :text="role" />
    </div>
</template>

<script lang="ts">
import { UserView } from '@/api/User';
import { computed } from '@vue/reactivity';
import { defineComponent, PropType } from 'vue';
import TagTsVue from './Tag.ts.vue';

function trimRole(roleText: string) {
    return roleText.substring(5)
}

export default defineComponent({
    name: 'TagComp',
    props: {
        data: {
            type: Object as PropType<UserView>,
            required: true,
        }
    },
    components: { TagTsVue },
    setup(props) {

        const roles = computed(() => {
            const sortedRoles = Array.from(props.data.roles).map(r => trimRole(r.name));
            const userIdx = sortedRoles.findIndex(r => r === "USER");
            if (userIdx !== -1) {
                sortedRoles.splice(userIdx, 1);
            }
            return sortedRoles.sort();
        })
        return {
            userViewData: props.data,
            roles,
        }
    }
});
</script>

<style scoped>
.container {
    display: inline-block;
}
</style>
