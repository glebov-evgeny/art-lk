<template>
  <i class="mdi" :class="icon"></i>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>
