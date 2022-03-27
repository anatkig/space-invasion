<script setup>
import { reactive, onMounted, defineProps } from "vue";

const { coordinateX } = defineProps(["coordinateX"]);

const state = reactive({ bullTop: 60 });

const bullTopValue = () => {
  const topMovement = setInterval(() => {
    state.bullTop += 1;

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
    class="bullet"
    :style="{ bottom: state.bullTop + 'px', left: coordinateX + '%' }"
  ></div>
</template>

<style>
.bullet {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: pink;

  bottom: 60px;
  transform: translateX(-50%);
}
</style>
