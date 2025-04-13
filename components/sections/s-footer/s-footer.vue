<template>
  <footer class="s-footer">
    <div class="s-footer__container l-wide">
      <div class="s-footer__block">
        <span>{{ getYear }}. Все права защищены.</span>
        <div class="s-footer__socials">
          <button class="s-footer__theme" aria-label="change color themes button" type="button" @click="changeThemes">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="s-footer__theme-icon"
            >
              <g clip-path="url(#clip0_578_178)">
                <path
                  d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_578_178">
                  <rect width="24" height="24" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <NuxtLink v-if="currentUser.uid === config.ADMIN_ID" class="s-footer__login" to="/admin">
            <img src="/images/icons/lk.png" alt="lk icon" />
          </NuxtLink>

          <button
            v-if="!currentUser.uid"
            aria-label="login button"
            type="button"
            class="s-footer__login"
            @click="linkNavigateToAuth"
          >
            <img src="/images/icons/login.png" alt="login icon" />
          </button>
          <button v-else class="s-footer__login" aria-label="logout button" type="button" @click="loginClean">
            <img src="/images/icons/logout.png" alt="logout icon" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig();
import { useUserStore } from '~/store/user';
const router = useRouter();
const currentUser = useUserStore();
const userInformation = useCookie('userInformation');
const userCorrect = ref(false);
const emit = defineEmits(['handler-change-themes']);

const linkNavigateToAuth = () => {
  router.push({ path: '/authorization' });
};

const loginClean = () => {
  /* удаление информации о пользователе из стора и кук, редирект на главную страницу */
  currentUser.$reset();
  userInformation.value = null;
  router.push({ path: '/' });
  userCorrect.value = false;
};

const getInformationFromCookie = async () => {
  if (userInformation.value) {
    currentUser.setUser(userInformation.value.email, userInformation.value.id);
    userCorrect.value = true;
  }
};

const getYear = computed(() => {
  const currentYear = new Date();
  return currentYear.getFullYear();
});

const changeThemes = () => {
  emit('handler-change-themes');
};

onMounted(() => {
  getInformationFromCookie();
});
</script>

<style lang="scss">
@import './s-footer.scss';
</style>
