import { computed } from "vue";

const invadersAttack = (invadersStore) => {
  const invaderCycle = setInterval(() => {
    invadersStore.addInvader({
      id: Date.now(),
    });
    const invaders = computed(() =>
      Array.from(document.querySelectorAll(".invader"))
    );
    if (
      invaders.value.some((invader) => {
        return (
          invader.offsetHeight + invader.offsetTop ===
          document.querySelector(".battle-field").offsetHeight
        );
      })
    ) {
      clearInterval(invaderCycle);
    }
  }, 1000);
};

export default invadersAttack;
