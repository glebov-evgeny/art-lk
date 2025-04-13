<template>
  <div v-if="loading" class="loader__wrapper">
    <div class="loader">
      <div class="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>
<script setup>
const loading = ref(true);
const start = () => {
  const htmlWrapper = document.querySelector('html');
  htmlWrapper.style.overflowY = 'hidden';
  loading.value = true;
};
const finish = () => {
  const htmlWrapper = document.querySelector('html');
  htmlWrapper.style.overflowY = 'visible';
  loading.value = false;
};

onMounted(() => {
  start();
  setTimeout(() => finish(), 800);
});
</script>

<style lang="scss">
@import './s-loader-fast.scss';
</style>
