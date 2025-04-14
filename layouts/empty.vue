<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <div>empty</div>
    <!--    <s-loader />-->
    <!--    <s-header @handler-change-themes="changeColorThemes" />-->
    <!--    <NuxtPage />-->
    <!--    <s-footer @handler-change-themes="changeColorThemes" />-->
  </div>
</template>

<script setup>
const isLightThemes = ref(false);
const changeColorThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};
</script>
<route lang="yaml">
meta:
layout: empty
</route>
