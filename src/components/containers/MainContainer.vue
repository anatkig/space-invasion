<script setup>
import { RouterLink } from "vue-router";
import ControlPanel from "../../components/containers/ControlPanel.vue";
import TheMachineGun from "../../components/actors/TheMachineGun.vue";
import TheBullet from "../../components/actors/TheBullet.vue";
import TheInvador from "../../components/actors/TheInvador.vue";
import { useBulletsStore } from "../../stores/bullets.js";
import { useMachineGunPositionStore } from "../../stores/machineGunPosition";
import { useInvadorsStore } from "../../stores/invadors";

const bulletsStore = useBulletsStore();
const machineGunPosition = useMachineGunPositionStore();
const invadorsStore = useInvadorsStore();

window.onload = () =>
  invadorsStore.addInvador({
    id: Date.now(),
  });

window.onkeyup = (event) => {
  if (event.key === " ") {
    bulletsStore.addBullet({
      id: Date.now(),
      coordinateX: machineGunPosition.$state.machineGunLeft,
    });
  }

  if (event.key === "Enter") {
    invadorsStore.addInvador({
      id: Date.now(),
    });
  }
};
</script>

<template>
  <div class="main-container">
    <div class="main-container_inner-layer">
      <div class="battle-field">
        <TheMachineGun />
        <TheBullet
          v-for="item in bulletsStore.$state.bullets"
          :key="item.id"
          :coordinateX="item.coordinateX"
        />
        <TheInvador
          v-for="invador in invadorsStore.$state.invadors"
          :key="invador.id"
        />
      </div>
      <ControlPanel>
        <!-- <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        /> -->

        <!-- <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div> -->
      </ControlPanel>
    </div>
  </div>
</template>

<style>
.main-container {
  height: 100vh;
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
.main-container_inner-layer {
  height: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: red;
  background-color: black;
}
.battle-field {
  height: 90%;
}
</style>
