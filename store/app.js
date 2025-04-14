import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      user: {
        email: null,
        uid: null,
      },
      userInformation: null,
    };
  },

  actions: {
    setUser(email, uid) {
      this.user.email = email;
      this.user.uid = uid;
    },
  },
});
