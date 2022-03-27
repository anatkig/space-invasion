import { defineStore } from "pinia";

export const useMachineGunPositionStore = defineStore({
  id: "machineGunPosition",
  state: () => ({
    machineGunLeft: 50,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    setPosition(left) {
      if (
        (this.machineGunLeft < 93 && left > 0) ||
        (left < 0 && this.machineGunLeft > 1)
      )
        this.machineGunLeft = this.machineGunLeft + left;
    },
  },
});
