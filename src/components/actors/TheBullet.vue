<script setup>
import { onMounted, reactive } from "vue";
import bulletLogic from "../../logic/bulletLogic.js";
import { useBulletsStore } from "../../stores/bullets.js";
import { useInvadorsStore } from "../../stores/invadors.js";

const bulletsStore = useBulletsStore();
const invadorsStore = useInvadorsStore();

const { coordinateX, id } = defineProps(["coordinateX", "id"]);
const bullTop = reactive({
  bullTop: document.querySelector(".battle-field").offsetHeight - 60,
});

onMounted(() => {
  bulletLogic(bulletsStore, invadorsStore, bullTop);
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
