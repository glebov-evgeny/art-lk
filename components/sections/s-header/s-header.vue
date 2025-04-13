<!-- eslint-disable prettier/prettier -->
<template>
  <header :class="['s-header', { active: isOpen }]">
    <div class="s-header__container l-wide">
      <button class="s-header__logo" aria-label="logo with link on main page" type="button" @click="linkNavigateToMain">
        <img src="/images/header/logo-origami.png" class="s-header__logo-img" alt="logo" />
        <span class="s-header__logo-text">origami-info</span>
      </button>
      <div :class="['s-header__logic', { active: isOpen }]">
        <nav class="s-header__nav">
          <button class="s-header__nav-link" aria-label="link on main page" @click="linkNavigateToMain">Главная</button>
        </nav>
      </div>
      <div class="s-header__aside">
        <button class="s-header__theme" aria-label="change color themes button" type="button" @click="changeThemes">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="s-header__theme-icon"
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
        <div class="s-header__menu" @click="toggleHam">
          <svg :class="['ham hamRotate hamR', { active: isOpen }]" viewBox="0 0 100 100" width="35">
            <path
              class="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path class="line middle" d="m 70,50 h -40" />
            <path
              class="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['handler-change-themes']);
const router = useRouter();
const isOpen = ref(false);

const changeThemes = () => {
  emit('handler-change-themes');
};
const linkNavigateToMain = () => {
  isOpen.value = false;
  router.push({ path: '/' });
};

const toggleHam = () => {
  isOpen.value = !isOpen.value;
};

const getWidth = () => {
  const currentWidth = window.innerWidth;
  if (currentWidth > 767) {
    isOpen.value = false;
  }
};

onMounted(() => {
  getWidth();
  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth > 767) {
      isOpen.value = false;
    }
  });
});
</script>

<style lang="scss">
@import './s-header.scss';
</style>
