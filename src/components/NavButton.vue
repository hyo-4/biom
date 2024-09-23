<template>
  <RouterLink :to="props.link ?? '/'">
    <div class="nav-container" :style="{ background: props.color || '#FFF' }">
      <span class="nav-container__text" v-html="title"></span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
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
.nav-container {
  //background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 4rem;
  max-height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid #B5B5B5;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;

  &__text {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
}

a {
  text-decoration: none;
}
</style>
