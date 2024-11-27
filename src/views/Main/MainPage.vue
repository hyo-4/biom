<template>
  <main>
    <nav>
      <div>
        <RouterLink to="/menu">메뉴 페이지</RouterLink>
      </div>
      <div>
        <RouterLink to="/client">고객관리 페이지</RouterLink>
      </div>
      <div>
        <RouterLink to="/client/1">고객상세 페이지</RouterLink>
      </div>
      <div>
        <RouterLink to="/calendar">캘린더 페이지</RouterLink>
      </div>
      <div>
        <RouterLink to="/reservation">예약 페이지</RouterLink>
      </div>
    </nav>
  </main>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
