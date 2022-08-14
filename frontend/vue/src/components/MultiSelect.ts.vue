
<template>
    <div class="multi-select-container">
        <span v-for="item in listOfItems" :key="item.name" @click="onclick(item.name)"
            :class="{ option: true, selected: item.selected }">
            {{ item.name }}
        </span>
    </div>
</template>



<script lang="ts">
import { computed, ref } from '@vue/reactivity';
import { defineComponent, PropType } from 'vue';


export default defineComponent({
    name: "MultiSelect",
    props: {
        items: {
            type: Array as PropType<string[]>,
            required: true,
        },
    },
    setup(props, context) {
        const selected = ref(new Set());

        const listOfItems = computed(() => {
            return props.items.map(i => ({
                name: i,
                selected: selected.value.has(i),
            }))
        })

        const onclick = (item: string) => {
            if (selected.value.has(item)) {
                selected.value.delete(item);
            } else {
                selected.value.add(item);
            }
            context.emit("change", selected);
        }

        return {
            onclick,
            selected,
            listOfItems,
        };
    },
});
</script>

<style scoped>
.multi-select-container {
    display: flex;
    flex-direction: row;
    flex-flow: row;
}

.option {
    user-select: none;
    border: 1px solid black;
    border-radius: 6px;
    margin-right: 1rem;
    padding: 1px 4px;
}

.option:hover {
    cursor: pointer;
}

.selected {
    background-color: rgb(132, 249, 255);
}
</style>