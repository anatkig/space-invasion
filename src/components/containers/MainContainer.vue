<script setup>
import { RouterLink } from "vue-router";
import { ref } from "@vue/reactivity";
import ControlPanel from "../../components/containers/ControlPanel.vue";
import TheMachineGun from "../../components/actors/TheMachineGun.vue";
import TheBullet from "../../components/actors/TheBullet.vue";
import Theinvader from "../../components/actors/Theinvader.vue";
import TheModal from "../containers/TheModal.vue";
import { useBulletsStore } from "../../stores/bullets.js";
import { useMachineGunPositionStore } from "../../stores/machineGunPosition";
import { useInvadersStore } from "../../stores/invaders";
import invadersAttack from "../../logic/invadersAttack.js";

const bulletsStore = useBulletsStore();
const machineGunPosition = useMachineGunPositionStore();
const invadersStore = useInvadersStore();

const modal = ref(true);
const modalText = ref("Start the Game!");

const invadersAttackAndFlipModal = () => {
  modal.value = !modal.value;
  !modal.value && invadersAttack(invadersStore);
};

window.onkeyup = (event) => {
  if (event.key === " ") {
    bulletsStore.addBullet({
      id: Date.now(),
      coordinateX: machineGunPosition.$state.machineGunLeft,
      coordinateY: document.querySelector(".battle-field").offsetHeight - 60,
    });
  }

  if (event.key === "Enter") {
    invadersAttackAndFlipModal();
  }
};
</script>

<template>
  <div class="main-container">
    <div class="main-container_inner-layer">
      <div class="battle-field">
        <TheModal
          v-show="modal"
          :text="modalText"
          @flip-modal="invadersAttackAndFlipModal"
        />
        <TheMachineGun />
        <TheBullet
          v-for="item in bulletsStore.$state.bullets"
          :key="item.id"
          :coordinateX="item.coordinateX"
          :id="item.id"
        />
        <Theinvader
          v-for="invader in invadersStore.$state.invaders"
          :key="invader.id"
          :id="invader.id"
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
