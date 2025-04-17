<template>
  <div class="a-lang" @click="changeLanguage($i18n)">
    <span>{{ $t('header.language') }}</span>
  </div>
</template>

<script setup>
import { useAppStore } from '~/store/app';
const authStore = useAppStore();

const changeLanguage = (lang) => {
  lang.locale = lang.locale === 'ru' ? 'en' : 'ru';
  authStore.setLang(lang.locale);
};
</script>

<style lang="scss">
@import 'a-lang';
</style>
