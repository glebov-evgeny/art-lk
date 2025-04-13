<template>
  <section class="s-auth">
    <div class="s-auth__container l-wide">
      <h1 class="s-auth__title">{{ formName ? 'Войти' : 'Регистрация' }}</h1>
      <div class="s-auth__formbox">
        <form class="s-auth__form" @submit.prevent="sendForm">
          <label class="s-auth__form-label">
            <input v-model="email" class="s-auth__form-input" type="text" placeholder="Почта" />
          </label>
          <label class="s-auth__form-label">
            <input v-model="password" class="s-auth__form-input" type="password" placeholder="Пароль" />
          </label>
          <button type="submit" class="s-auth__form-button">{{ formName ? 'Вход' : 'Зарегистрироваться' }}</button>
          <div v-if="validFlag" class="s-auth__form-error">
            <p v-if="emailError" class="s-auth__form-error-text">Укажите корректную почту</p>
            <p v-if="passwordError" class="s-auth__form-error-text">Пароль должен быть из 6 и более символов</p>
            <p v-if="fbError" class="s-auth__form-error-text">{{ fbErrorText }}</p>
          </div>
        </form>
        <!-- <div class="s-auth__changebox">
          <span class="s-auth__text">или</span>
          <button class="s-auth__button" @click="checkForm">
            {{ formName ? 'Регистрация' : 'Войти' }}
          </button>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { useUserStore } from '~/store/user';
const auth = getAuth();
const config = useRuntimeConfig();
const currentUser = useUserStore();
const router = useRouter();
const userInformation = useCookie('userInformation', {
  default: () => null,
  watch: 'shallow',
});

let formName = ref(true);

let email = ref('');
let password = ref('');
let validFlag = ref(false);
let emailError = ref(false);
let passwordError = ref(false);
let fbError = ref(false);
let fbErrorText = ref('');

// const checkForm = () => (formName.value = !formName.value);

const sendForm = async () => {
  if (!email.value.trim() || !password.value.trim()) {
    validFlag.value = true;
    return;
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (email.value && !regex.test(email.value)) {
    validFlag.value = true;
    emailError.value = true;
    return;
  }
  if (password.value.length < 6) {
    validFlag.value = true;
    emailError.false = false;
    passwordError.value = true;
    return;
  }

  validFlag.value = false;

  if (formName.value == true) {
    sendLoginForm();
  } else {
    sendRegForm();
  }
};

const sendRegForm = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email.value, password.value);
    currentUser.setUser(email.value, user.user.uid);
    /* устанавливаю куки с почтой и id пользователя на 7 дней */
    const cookieDataUser = {
      email: email.value,
      id: user.user.uid,
      maxAge: 60 * 60 * 24 * 7,
    };
    userInformation.value = cookieDataUser;
    // console.log(user.user.uid);
    // console.log(config.ADMIN_ID);
    // if (user.user.uid === config.ADMIN_ID) {
    //   router.push({ path: '/admin' });
    // } else {
    //   router.push({ path: '/lk' });
    // }
  } catch (error) {
    validFlag.value = true;
    fbError.value = true;
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      fbErrorText.value = 'Почта уже зарегистрирована.';
    } else {
      // console.error(`Ошибка: ${error.message}`);
    }
  }
};

const sendLoginForm = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, email.value, password.value);
    currentUser.setUser(email.value, user.user.uid);
    /* устанавливаю куки с почтой и id пользователя на 7 дней */
    const cookieDataUser = {
      email: email.value,
      id: user.user.uid,
      maxAge: 60 * 60 * 24 * 7,
    };
    userInformation.value = cookieDataUser;
    if (user.user.uid === config.ADMIN_ID) {
      router.push({ path: '/admin' });
    } else {
      router.push({ path: '/' });
    }
  } catch (error) {
    validFlag.value = true;
    fbError.value = true;
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      fbErrorText.value = 'Почта уже зарегистрирована.';
    } else if (error.message === 'Firebase: Error (auth/invalid-login-credentials).') {
      fbErrorText.value = 'Пользователь не найден';
    } else {
      // console.error(`Ошибка: ${error.message}`);
    }
  }
};
</script>

<style lang="scss">
@import './s-auth.scss';
</style>
