<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <NuxtPage />
  </div>
</template>

<script setup>
const isLightThemes = ref(false);
const changeColorThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};
</script>
