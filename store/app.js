import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      user: {
        email: null,
        uid: null,
      },
      userInMemory: false,
    };
  },

  actions: {
    setUser(email, uid) {
      this.user.email = email;
      this.user.uid = uid;
    },
    setUserInMemory(value = true) {
      this.userInMemory = value;
    },
    syncUserFromCookie() {
      const userInformation = useCookie('userInformation');
      if (userInformation.value) {
        this.setUserInMemory(true);
      } else {
        this.setUserInMemory(false);
      }
    },
  },
});
