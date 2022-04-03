<script setup>
import { RouterLink } from "vue-router";
import { ref } from "@vue/reactivity";
import ControlPanel from "../../components/containers/ControlPanel.vue";
import TheMachineGun from "../../components/actors/TheMachineGun.vue";
import TheBullet from "../../components/actors/TheBullet.vue";
import Theinvader from "../../components/actors/TheInvader.vue";
import TheModal from "../containers/TheModal.vue";
import { useBulletsStore } from "../../stores/bullets.js";
import { useMachineGunPositionStore } from "../../stores/machineGunPosition";
import { useInvadersStore } from "../../stores/invaders";
import invadersAttack from "../../logic/invadersAttack.js";
import { useLivesStore } from "../../stores/lives";
import { useBulletsLeftStore } from "../../stores/bulletsLeft";
import { useInvadersDestroyedStore } from "../../stores/invadersDestroyed";

const bulletsStore = useBulletsStore();
const machineGunPosition = useMachineGunPositionStore();
const invadersStore = useInvadersStore();
const lives = useLivesStore();
const bulletsLeft = useBulletsLeftStore();
const invadersDestroyed = useInvadersDestroyedStore();

const modal = ref(true);
const modalText = ref("Greetings Commander!");
const startPauseResume = ref("Start");

const invadersAttackAndFlipModal = () => {
  modal.value = !modal.value;

  (startPauseResume.value === "Start" ||
    startPauseResume.value === "Restart") &&
    invadersAttack(
      invadersStore,
      modalText,
      modal,
      lives,
      bulletsLeft,
      invadersDestroyed,
      startPauseResume
    );

  if (lives.$state.lives === 0) {
    startPauseResume.value = "Restart";
  } else if (
    startPauseResume.value === "Start" ||
    startPauseResume.value === "Restart"
  ) {
    startPauseResume.value = "Pause";
  } else if (startPauseResume.value === "Pause") {
    startPauseResume.value = "Resume";
    modalText.value = "Game Paused";
  } else {
    startPauseResume.value = "Pause";
  }
};

window.onkeyup = (event) => {
  if (event.key === " " && bulletsLeft.$state.bulletsLeft > 0) {
    bulletsStore.addBullet({
      id: Date.now(),
      coordinateX: machineGunPosition.$state.machineGunLeft,
      coordinateY: document.querySelector(".battle-field").offsetHeight - 60,
    });
    bulletsLeft.subtractBulletsLeft(1);
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
      <ControlPanel
        :startPauseResume="startPauseResume"
        @flip-modal="invadersAttackAndFlipModal"
      />
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
  overflow: hidden;
}
</style>
