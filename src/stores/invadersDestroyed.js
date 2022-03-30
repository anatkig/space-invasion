import { defineStore } from "pinia";

export const useInvadersDestroyedStore = defineStore({
  id: "invadersDestroyed",

  state: () => ({
    invadersDestroyed: 0,
  }),
  actions: {
    addInvadersDestroyed(num) {
      this.invadersDestroyed += num;
    },
    removeAllInvadersDestroyed() {
      this.invadersDestroyed = 0;
    },
  },
});
