<template>
  <label class="a-switch">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="a-switch-slider" />
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modelValue']);
</script>

<style lang="scss">
@import 'a-switch';
</style>
