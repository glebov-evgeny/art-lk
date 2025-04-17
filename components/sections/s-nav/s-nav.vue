<template>
  <section class="s-nav">
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="s-nav-item"
      :class="[{ _active: item.active }, `s-nav-item-${item.class}`]"
      @click="setActive(item.class)"
    >
      <a-icon :icon="item.icon" class="s-nav-item-icon" />
      <span class="s-nav-item-info">{{ item.title }}</span>
    </div>
    <!-- <div class="s-nav-item">
      <a-icon :icon="'mdi-moon-new'" />
      <a-icon :icon="'mdi-moon-full'" />
    </div> -->
    <!-- <div class="s-nav-item">
      <a-sun />
    </div> -->
    <!-- <div class="s-nav-item">
      <a-icon :icon="'mdi-account-circle-outline'" class="s-nav-item-icon" />
    </div> -->
    <!-- <div class="s-nav-item">
      <a-lang />
    </div> -->
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
// import { useAppStore } from '~/store/app';
// const authStore = useAppStore();

const { t } = useI18n();

const activeItemClass = ref('main');

const navItems = computed(() => [
  {
    title: t('header.main'),
    class: 'main',
    icon: 'mdi-home',
    active: activeItemClass.value === 'main',
  },
  {
    title: t('header.arts'),
    class: 'arts',
    icon: 'mdi-palette',
    active: activeItemClass.value === 'arts',
  },
  {
    title: t('header.settings'),
    class: 'settings',
    icon: 'mdi-cog',
    active: activeItemClass.value === 'settings',
  },
  {
    title: t('header.user'),
    class: 'user',
    icon: 'mdi-account-circle-outline',
    active: activeItemClass.value === 'user',
  },
]);

const setActive = (className) => {
  activeItemClass.value = className;
};
</script>

<style lang="scss">
@import './s-nav.scss';
</style>
