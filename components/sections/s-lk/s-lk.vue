<!-- eslint-disable vue/no-parsing-error -->
<template>
  <section class="s-lk">
    <div class="s-lk__container l-wide">
      <h1 class="s-lk__title s-title">Личный кабинет</h1>
      <div class="s-lk__box">
        <div class="s-lk__user-wrapper">
          <div class="s-lk__user" :style="{ backgroundColor: `${userColor}` }">
            <div class="s-lk__user-item">
              <p class="s-lk__user-item-label"><b>Почта:</b></p>
              <div class="s-lk__user-item-wrapper">
                <p class="s-lk__user-item-label">
                  {{ currentUser.email }}
                </p>
              </div>
            </div>
            <div class="s-lk__user-item">
              <p class="s-lk__user-item-label"><b>id:</b></p>
              <p class="s-lk__user-item-label _bold">{{ currentUser.uid }}</p>
            </div>
            <div class="s-lk__user-item">
              <p class="s-lk__user-item-label"><b>Любимый цвет:</b></p>
              <div class="s-lk__user-item-wrapper">
                <input v-model="userColor" type="color" class="s-lk__user-item-color" />
              </div>
            </div>
          </div>
          <button class="s-lk__user-button" @click="sendForm">сохранить</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import addDate from '~/api/addDate';
import getDate from '~/api/getDate';
import { useUserStore } from '~/store/user';
const currentUser = useUserStore();
const userColor = ref('#FFFFFF');
let contentInformation = ref([]);

async function sendForm() {
  addDate(currentUser, userColor);
}
async function getInformationAboutUser() {
  contentInformation.value = await getDate(currentUser.uid);
  userColor.value = contentInformation.value.color;
}

onMounted(() => {
  getInformationAboutUser();
});
</script>
<style lang="scss">
@import './s-lk.scss';
</style>
