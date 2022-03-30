import { computed } from "vue";

const bulletLogic = (bulletsStore, invadorsStore, bullTop) => {
  const topMovement = setInterval(() => {
    bullTop.bullTop -= 1;
    const bullets = computed(() =>
      Array.from(document.querySelectorAll(".bullet"))
    );
    const invadors = computed(() =>
      Array.from(document.querySelectorAll(".invador"))
    );

    bullets.value.forEach((bullet) =>
      invadors.value.forEach((invador) => {
        if (
          bullet.offsetTop >= invador.offsetTop &&
          bullet.offsetTop <= invador.offsetTop + invador.offsetHeight &&
          bullet.offsetLeft >= invador.offsetLeft &&
          bullet.offsetLeft <= invador.offsetLeft + invador.offsetWidth
        ) {
          bulletsStore.removeBullet(bullet.id);
          invadorsStore.removeInvador(invador.id);
        }
      })
    );

    if (bullTop.bullTop <= -10) {
      clearInterval(topMovement);
      bullets.value.length && bulletsStore.removeBullet(bullets.value[0].id);
    }
  }, 10);
};

export default bulletLogic;
