<template>
  <div class="a-lang" @click="changeLanguage($i18n)">
    <span>{{ $t('header.language') }}</span>
  </div>
</template>

<script setup>
const changeLanguage = (lang) => {
  lang.locale = lang.locale === 'ru' ? 'en' : 'ru';
};
</script>

<style lang="scss">
@import 'a-lang';
</style>
