<template>
  <div :class="['s-layout-login', { 'dark-themes': isLightThemes }]">
    <NuxtPage />
  </div>
</template>

<script setup>
const isLightThemes = ref(false);
</script>
