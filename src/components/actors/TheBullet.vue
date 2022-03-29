<script setup>
import { reactive, onMounted, computed } from "vue";
import { useBulletsStore } from "../../stores/bullets";
import { useInvadorsStore } from "../../stores/invadors";

const { coordinateX } = defineProps(["coordinateX", "id"]);

const bulletsStore = useBulletsStore();
const invadorsStore = useInvadorsStore();

const state = reactive({
  bullTop: document.querySelector(".battle-field").offsetHeight - 60,
});

const bullTopValue = () => {
  const topMovement = setInterval(() => {
    state.bullTop -= 1;
    const bullets = computed(() =>
      Array.from(document.querySelectorAll(".bullet"))
    );
    const invadors = computed(() =>
      Array.from(document.querySelectorAll(".invador"))
    );

    bullets.value.forEach((bullet) =>
      invadors.value.forEach((invador) => {
        if (
          bullet.offsetTop >= invador.offsetTop
          // bullet.offsetTop >= invador.offsetTop &&
          // bullet.offsetTop <= invador.offsetTop + invador.offsetHeight &&
          // bullet.offsetLeft >= invador.offsetLeft &&
          // bullet.offsetLerft <= invador.offsetLeft + invador.offsetHeight
        ) {
          bulletsStore.removeBullet(bullet.id);
          invadorsStore.removeInvador(invador.id);
        }
      })
    );

    if (state.bullTop >= 2000) {
      clearInterval(topMovement);
    }
  }, 10);
};

onMounted(() => {
  bullTopValue();
});
</script>

<template>
  <div
    :id="id"
    class="bullet"
    :style="{ top: state.bullTop + 'px', left: coordinateX + '%' }"
  ></div>
</template>

<style>
.bullet {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: pink;
  transform: translateX(-50%);
}
</style>
