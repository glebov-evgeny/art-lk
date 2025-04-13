<template>
  <section class="s-intro">
    <div class="s-intro__container l-wide">
      <div class="s-intro__main">
        <h1 class="s-intro__title s-title">Кря-кря!</h1>
        <p class="s-intro__description s-description">
          Добро пожаловать на&nbsp;сайт, где каждый может сделать кря. Ведь кря&nbsp;&mdash; это нужное дело. Кря звучит
          гордо, кря это вызов. Кря это свобода и&nbsp;любовь, кря - это квинтэссенция экзистенциального существования.
        </p>
        <p class="s-intro__description s-description">
          Даже если прямо сейчас вы&nbsp;не&nbsp;хотите делать кря&nbsp;&mdash; кря всегда можно сделать позже.
        </p>
        <p class="s-intro__description s-description">Вот что бывает, когда работаешь без макета и&nbsp;идеи.</p>
      </div>
      <div class="s-intro__aside">
        <div class="s-intro__aside-content">
          <h2 class="s-intro__aside-title s-title">Эти новости&nbsp;&mdash; уже не&nbsp;новости.</h2>
          <p class="s-intro__aside-description s-description">
            Всё, что случилось за&nbsp;полярным кругом, должно остаться за&nbsp;полярным кругом.
          </p>
          <p class="s-intro__aside-description s-description">People are always asking me if I know Tyler Durden.</p>
        </div>
        <div ref="decorationItem" class="s-intro__aside-decoration"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const decorationItem = ref(null);

const mouseMoveHandler = (event) => {
  decorationItem.value.style.transform = `translate3d(${(event.screenX * -20) / 1500}px, -70%, 0)`;
};

onMounted(() => {
  document.addEventListener('mousemove', mouseMoveHandler);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', mouseMoveHandler);
});
</script>

<style lang="scss">
@import './s-intro.scss';
</style>
