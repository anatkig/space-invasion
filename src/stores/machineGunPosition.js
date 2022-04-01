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
      if (this.machineGunLeft < 0) {
        this.machineGunLeft = 94;
      } else if (this.machineGunLeft > 100) {
        this.machineGunLeft = 0;
      } else {
        this.machineGunLeft = this.machineGunLeft + left;
      }
    },
  },
});
