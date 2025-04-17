<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <a-loader />
    <!-- <s-header @handler-change-themes="changeColorThemes" /> -->
    <NuxtPage />
    <!-- <s-footer @handler-change-themes="changeColorThemes" /> -->
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useAppStore } from '~/store/app';
const { locale } = useI18n();
const authStore = useAppStore();

const isLightThemes = ref(false);
const changeColorThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};

/* установка языка из куки siteLang */
locale.value = authStore.siteLang;
</script>
