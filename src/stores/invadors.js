import { defineStore } from "pinia";

export const useInvadorsStore = defineStore({
  id: "invadors",
  state: () => ({
    invadors: [],
  }),

  actions: {
    addInvador(invador) {
      this.invadors = [...this.invadors, invador];
    },
    removeInvador(invadorId) {
      console.log(this.invadors);
      this.invadors = [
        ...Array.from(this.invadors).filter(
          (invador) => invador.id !== Number(invadorId)
        ),
      ];
    },
  },
});
