<template>
  <section class="s-settings">
    <div class="s-wrapper">
      <div class="s-wrapper__top">
        <h1 class="font-title">{{ $t('header.settings') }}</h1>
        <button>сменить язык</button>
        <button>Поменять тему</button>
      </div>
      <a-lang />
      <m-theme-switcher />
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style lang="scss">
@import './s-settings.scss';
</style>
