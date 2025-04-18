<template>
  <section class="s-profile">
    <div class="s-wrapper">
      <div class="s-wrapper__top">
        <h1 class="font-title">{{ $t('header.user') }}</h1>
        <p class="font-subtext">{{ $t('profile.subtitle') }}</p>
      </div>
      <div class="s-wrapper__content">
        <div class="s-profile__box">
          <s-form-profile />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>

<style lang="scss">
@import './s-profile.scss';
</style>
