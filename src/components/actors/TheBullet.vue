<script setup>
import { onMounted, reactive } from "vue";
import bulletLogic from "../../logic/bulletLogic.js";
import { useBulletsStore } from "../../stores/bullets.js";
import { useInvadersStore } from "../../stores/invaders.js";

const bulletsStore = useBulletsStore();
const invadersStore = useInvadersStore();

const { coordinateX, id } = defineProps(["coordinateX", "id"]);
const bullTop = reactive({
  bullTop: document.querySelector(".battle-field").offsetHeight - 60,
});

onMounted(() => {
  bulletLogic(bulletsStore, invadersStore, bullTop);
});
</script>

<template>
  <div
    :id="id"
    class="bullet"
    :style="{ top: bullTop.bullTop + 'px', left: coordinateX + '%' }"
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
