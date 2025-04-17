<template>
  <section class="s-auth">
    <div class="s-auth__container l-wide">
      <div class="s-auth__top">
        <a-lang />
      </div>
      <div class="s-auth__center">
        <div class="s-auth__main">
          <h1 class="s-auth__title">
            {{ formName ? $t('form.login') : $t('form.registration') }}
          </h1>
          <div class="s-auth__formbox">
            <form class="s-auth__form" @submit.prevent="sendForm">
              <label class="s-auth__form-label">
                <input
                  v-model.trim="email"
                  class="s-auth__form-input s-auth__form-input-email"
                  :class="{ _error: emailError }"
                  type="text"
                  :placeholder="$t('form.email')"
                />
              </label>
              <label class="s-auth__form-label">
                <input
                  v-model.trim="password"
                  class="s-auth__form-input s-auth__form-input-password"
                  :class="{ _error: passwordError }"
                  :type="typePassword"
                  :placeholder="$t('form.password')"
                />
                <div
                  class="s-auth__form-input-right"
                  @click="changePasswordType"
                >
                  <a-icon
                    v-if="inputType === 'password'"
                    :icon="'mdi-eye-outline'"
                  />
                  <a-icon v-else :icon="'mdi-eye-off-outline'" />
                </div>
              </label>
              <button type="submit" class="s-auth__form-button">
                {{ formName ? $t('form.login') : $t('form.registration') }}
              </button>
              <div v-if="validFlag" class="s-auth__form-error">
                <p class="s-auth__form-error-text">
                  {{ fbErrorText }}
                </p>
              </div>
            </form>

            <div class="s-auth__changebox">
              <span class="s-auth__text">{{ $t('form.or') }}</span>
              <button class="s-auth__button" @click="checkForm">
                {{ formName ? $t('form.registration') : $t('form.login') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="s-auth__bottom">
        {{ locale }}
        <a-logo />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { useAppStore } from '~/store/app';

const auth = getAuth();
const config = useRuntimeConfig();
const authStore = useAppStore();
const router = useRouter();
const userInformation = useCookie('userInformation', {
  default: () => null,
  watch: 'shallow',
});
const { t, locale } = useI18n();

let formName = ref(true);

let email = ref('');
let password = ref('');
let validFlag = ref(false);
let emailError = ref(false);
let passwordError = ref(false);
let fbErrorText = ref('');

const checkForm = () => (formName.value = !formName.value);

const sendForm = async () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    emailError.value = true;
  }
  if (password.value.length < 6) {
    passwordError.value = true;
  }
  if (!emailError.value && !passwordError.value) {
    if (formName.value == true) {
      sendLoginForm();
    } else {
      sendRegForm();
    }
  }
};

const sendRegForm = async () => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value,
    );
    authStore.setUser(email.value, user.user.uid);
    authStore.setUserInMemory(true);
    authStore.setLang(locale.value);
    /* устанавливаю куки с почтой и id пользователя на 7 дней */
    const cookieDataUser = {
      email: email.value,
      id: user.user.uid,
      maxAge: 60 * 60 * 24 * 7,
    };
    userInformation.value = cookieDataUser;
  } catch (error) {
    validFlag.value = true;
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      fbErrorText.value = t('form.errorMail');
    } else {
      console.error(`Ошибка: ${error.message}`);
    }
  }
};

const sendLoginForm = async () => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value,
    );
    authStore.setUser(email.value, user.user.uid);
    authStore.setUserInMemory(true);
    authStore.setLang(locale.value);

    /* устанавливаю куки с почтой и id пользователя на 7 дней */
    const cookieDataUser = {
      email: email.value,
      id: user.user.uid,
      maxAge: 60 * 60 * 24 * 7,
    };
    userInformation.value = cookieDataUser;

    if (user.user.uid === config.public.ADMIN_ID) {
      router.push({ path: '/admin' });
    } else {
      router.push({ path: '/' });
    }
  } catch (error) {
    validFlag.value = true;
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      fbErrorText.value = t('form.errorMail');
    } else if (
      error.message === 'Firebase: Error (auth/invalid-login-credentials).'
    ) {
      fbErrorText.value = t('form.errorUser');
    } else {
      console.error(`Ошибка: ${error.message}`);
    }
  }
};
const typePassword = ref('password');

const changePasswordType = () => {
  typePassword.value = typePassword.value === 'password' ? 'text' : 'password';
};

const inputType = computed(() =>
  typePassword.value === 'password' ? 'password' : 'text',
);
watch(
  () => email.value,
  () => {
    emailError.value = false;
  },
);
watch(
  () => password.value,
  () => {
    passwordError.value = false;
  },
);
</script>

<style lang="scss">
@import './s-auth.scss';
</style>
