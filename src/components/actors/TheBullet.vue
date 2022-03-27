<script setup>
import { reactive, computed, onMounted } from "vue";

const { bullTop } = reactive({ bullTop: 3 });

const bullTopValue = computed(() => {
  const tomMovement = setInterval(() => bullTop + 10, 100);
  if (bullTop === 100) {
    clearInterval(tomMovement);
  }
});

onMounted(() => bullTopValue());
</script>

<template>
  <div
    class="bullet"
    :style="{ bottom: bullTop + '%', left: bullLeft + 'px' }"
  ></div>
</template>

<style>
.bullet {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: pink;
}
</style>
