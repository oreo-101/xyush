<template>
  <div id="container">
    <span v-for="item in items" :key="item" :class="{ tab: true, selected: selected === item }"
      @click="emit('tabClick', item)">
      {{ item }}
    </span>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue';


export default defineComponent({
  name: 'TabSelect',
  props: {
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {

    return {
      emit: context.emit
    }
  }
});
</script>

<style scoped>
#container {
  display: flex;
}

.tab {
  margin: 0 0.5rem;
  padding: 0.5rem 0.25rem;
  border: 4px solid transparent;
  user-select: none;
}

.tab:hover {
  cursor: pointer;
}

.selected {
  border-bottom-color: green;
  color: green;
}
</style>