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
