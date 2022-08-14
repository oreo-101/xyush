<template>
  <span :style="styles" class="tag">
    {{ text }}<slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, StyleValue } from 'vue';

function colorHash(text?: String): [number, number, number] {
  if (!text) {
    return [0, 0, 0];
  }
  let hash = 0;
  for (var i = 0; i < text.length; i++) {
    hash <<= 2;
    hash += text.charCodeAt(i);
    hash %= 255 * 255 * 255;
  }
  let r = hash % 255;
  let g = (hash / 255) % 255;
  let b = (hash / 255 / 255) % 255;
  return [r, g, b].map(v => v > 150 ? v : 255 - v) as [number, number, number];
}

function toColorString([r, g, b]: number[]): String {
  return `rgb(${r}, ${g}, ${b})`;
}

export default defineComponent({
  name: 'TagComp',
  props: {
    text: {
      type: String
    }
  },
  setup(props) {
    return {
      styles: {
        backgroundColor: toColorString(colorHash(props.text)),
      } as StyleValue,
    }
  }
});
</script>

<style scoped>
.tag {
  padding: 3px 12px 2px 12px;
  border-radius: 8px;
  margin: 0 5px;
  display: inline-block;
  font-size: 0.8rem;
}
</style>
