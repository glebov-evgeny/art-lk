<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-header @handler-change-themes="changeColorThemes" />
    <main class="s-main">
      <div class="l-wide">
        <h2 class="s-rating__title">404</h2>
      </div>
    </main>
    <s-footer />
  </div>
</template>

<script setup>
const isLightThemes = ref(false);
const changeColorThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};
</script>
