import { computed } from "vue";

const invadorsAttack = (invadorsStore) => {
  const invadorCycle = setInterval(() => {
    invadorsStore.addInvador({
      id: Date.now(),
    });
    const invadors = computed(() =>
      Array.from(document.querySelectorAll(".invador"))
    );
    if (
      invadors.value.some((invador) => {
        return (
          invador.offsetHeight + invador.offsetTop ===
          document.querySelector(".battle-field").offsetHeight
        );
      })
    ) {
      clearInterval(invadorCycle);
    }
  }, 1000);
};

export default invadorsAttack;
