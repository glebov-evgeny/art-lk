<template>
  <div class="m-theme-switcher" @click="changeThemes">
    <a-sun />
  </div>
</template>

<script setup>
import { useAppStore } from '~/store/app';
const authStore = useAppStore();
const changeThemes = () => {
  authStore.siteTheme === 'day'
    ? authStore.setTheme('night')
    : authStore.setTheme('day');
};
</script>

<style lang="scss">
@import 'm-theme-switcher';
</style>
