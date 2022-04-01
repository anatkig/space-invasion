import { defineStore } from "pinia";

export const useBulletsLeftStore = defineStore({
  id: "bulletsLeft",

  state: () => ({
    bulletsLeft: 100,
  }),

  actions: {
    addBulletsLeft(num) {
      this.bulletsLeft += num;
    },
    subtractBulletsLeft(num) {
      this.bulletsLeft -= num;
    },
    resetBulletsLeft() {
      this.bulletsLeft = 100;
    },
  },
});
