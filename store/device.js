import { defineStore } from 'pinia';

export const useDeviceStore = defineStore({
  id: 'device-store',
  state: () => {
    return {
      width: 0,
    };
  },

  actions: {
    updateWidth(width) {
      this.width = width;
    },
  },

  getters: {
    isDesktop: (state) => state.width > 1140,
    isTablet: (state) => state.width >= 768 && state.width <= 1140,
    isMobile: (state) => state.width < 768,
  },
});
