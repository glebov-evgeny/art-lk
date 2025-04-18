<template>
  <m-form :button="$t('form.send')" @send-form="validForm">
    <label class="m-form-label">
      <input
        v-model.trim="user.name"
        class="m-form-input m-form-input-name"
        :class="{ _error: userNameError }"
        type="text"
        :placeholder="$t('form.name')"
      />
    </label>
    <label class="m-form-label">
      <input
        v-model.trim="user.surname"
        class="m-form-input m-form-input-surname"
        :class="{ _error: userSurnameError }"
        type="text"
        :placeholder="$t('form.surname')"
      />
    </label>
    <label class="m-form-label">
      <input
        v-model.trim="user.phone"
        class="m-form-input m-form-input-phone"
        :class="{ _error: userPhoneError }"
        type="text"
        :placeholder="$t('form.phone')"
      />
    </label>
    <label class="m-form-label">
      <textarea
        v-model.trim="user.about"
        class="m-form-textarea m-form-input-about"
        :class="{ _error: userAboutError }"
        type="text"
        :placeholder="$t('form.about')"
      />
    </label>
    <label class="m-form-label">
      <input
        v-model.trim="user.email"
        class="m-form-input m-form-input-email"
        :class="{ _error: userEmailError }"
        type="text"
        :placeholder="$t('form.email')"
      />
    </label>
  </m-form>
</template>
<script setup>
const user = ref({
  name: '',
  surname: '',
  about: '',
  phone: '',
  email: '',
});

const userNameError = ref(false);
const userSurnameError = ref(false);
const userPhoneError = ref(false);
const userEmailError = ref(false);
const userAboutError = ref(false);

const validForm = () => {
  userNameError.value = false;
  userSurnameError.value = false;
  userPhoneError.value = false;
  userEmailError.value = false;
  userAboutError.value = false;

  const nameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
  const phoneRegex = /^\d+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const safeAboutRegex = /^[^<>]{0,240}$/; // Без < > и до 240 символов

  let isValid = true;

  // Name
  if (!user.value.name || !nameRegex.test(user.value.name)) {
    userNameError.value = true;
    isValid = false;
  }

  // Surname
  if (!user.value.surname || !nameRegex.test(user.value.surname)) {
    userSurnameError.value = true;
    isValid = false;
  }

  // Phone
  if (!user.value.phone || !phoneRegex.test(user.value.phone)) {
    userPhoneError.value = true;
    isValid = false;
  }

  // Email
  if (!user.value.email || !emailRegex.test(user.value.email)) {
    userEmailError.value = true;
    isValid = false;
  }

  // About (если есть текст)
  if (user.value.about && !safeAboutRegex.test(user.value.about)) {
    userAboutError.value = true;
    isValid = false;
  }

  if (!isValid) return;

  // Здесь можно сделать отправку формы, пример:
  console.log('Форма валидна:', user.value);
  // emit('submit', user.value); // если используешь @submit
  // или отправка через fetch/axios
};

const userInfoCookie = useCookie('userInformation');

onMounted(() => {
  if (userInfoCookie.value && userInfoCookie.value.email) {
    user.value.email = userInfoCookie.value.email;
  }
});
</script>
<style lang="scss">
@import './s-form-profile.scss';
</style>
