<template>
  <section class="s-nav">
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="s-nav-item"
      :class="[
        { _active: modelValue === item.class },
        `s-nav-item-${item.class}`,
      ]"
      @click="setActive(item.class)"
    >
      <a-icon :icon="item.icon" class="s-nav-item-icon" />
      <span class="s-nav-item-info">{{ item.title }}</span>
    </div>
    <div class="s-nav-item s-nav-item-colored s-nav-item-colored-first">
      <m-theme-switcher />
    </div>
    <div class="s-nav-item s-nav-item-colored">
      <a-lang />
    </div>
  </section>
</template>
<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  navItems: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['update:modelValue']);

const setActive = (val) => {
  emit('update:modelValue', val);
};
</script>

<style lang="scss">
@import './s-nav.scss';
</style>
