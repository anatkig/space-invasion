import { defineStore } from "pinia";

export const useBulletPositionStore = defineStore({
  id: "machineGunPosition",
  state: () => ({
    machineGunLeft: 0,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    setPosition(left) {
      this.bullLeft = left;
    },
  },
});
