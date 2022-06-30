<script setup>
import { useMachineGunPositionStore } from '../../stores/machineGunPosition';

const machineGunPosition = useMachineGunPositionStore();
</script>

<template>
  <div
    class="machine-gun"
    :style="{ left: machineGunPosition.$state.machineGunLeft + '%' }"
  >
    <div class="barrel"></div>
    <div class="foundation"></div>
  </div>
</template>

<style>
.machine-gun {
  width: 70px;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
}

.barrel {
  margin: auto;
  width: 20px;
  height: 50px;
  background-color: gray;
}
.foundation {
  width: 70px;
  height: 10px;
  color: red;
  background-color: gray;
}
</style>
