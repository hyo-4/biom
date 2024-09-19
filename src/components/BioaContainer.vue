<template>
      <div class="bioa-container" :style="{background: color }">
        {{ title }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    default: () => null,
    required: false,
  },
  color: {
    type: String,
    default: '#FFF',
  }
});
</script>

<style lang="scss">
.bioa-container {
  background: #FFF;
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 7.5rem;  
  height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid #B5B5B5;
  /* text */
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>