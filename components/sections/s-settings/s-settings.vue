<template>
  <section class="s-settings">
    <div class="s-wrapper">
      <div class="s-wrapper__top">
        <h1 class="font-title">{{ $t('header.settings') }}</h1>
      </div>
      <div class="s-wrapper__content">
        <div class="s-settings__box">
          <div class="s-settings__box-line">
            <p class="font-text">{{ $t('settings.color') }}</p>
            <a-switch v-model="togglerSiteColorScheme" />
          </div>
          <div class="s-settings__box-line">
            <p class="font-text">{{ $t('settings.lang') }}</p>
            <a-switch v-model="togglerSiteLang" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { useAppStore } from '~/store/app';
const authStore = useAppStore();
const { locale } = useI18n();

const togglerSiteColorScheme = computed({
  get: () => authStore.siteTheme !== 'day',
  set: (val) => {
    authStore.setTheme(val ? 'night' : 'day');
  },
});

const togglerSiteLang = computed({
  get: () => authStore.siteLang !== 'ru',
  set: (val) => {
    const newLang = val ? 'en' : 'ru';
    authStore.setLang(newLang);
    locale.value = newLang;
  },
});
</script>
<style lang="scss">
@import './s-settings.scss';
</style>
