<script setup>
import { useLivesStore } from "../../stores/lives";
import { useBulletsLeftStore } from "../../stores/bulletsLeft";
import { useInvadersDestroyedStore } from "../../stores/invadersDestroyed";
import { useLevelStore } from "../../stores/level";
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";

const { startPauseResume } = defineProps(["startPauseResume"]);

const router = useRouter();

const lives = useLivesStore();
const bulletsLeft = useBulletsLeftStore();
const invadersDestroyed = useInvadersDestroyedStore();
const level = useLevelStore();
</script>

<template>
  <div class="control-panel">
    <div class="control-panel_data-container">
      <div class="control-panel_child number-of-lives">
        lives: {{ lives.$state.lives }}
      </div>
      <div class="control-panel_child level">
        level: {{ level.$state.level }}
      </div>
      <div class="control-panel_child bullets-left">
        bullets: {{ bulletsLeft.$state.bulletsLeft }}
      </div>
      <div class="control-panel_child invader-killed">
        invaders destroyed: {{ invadersDestroyed.$state.invadersDestroyed }}
      </div>
    </div>
    <div class="control-panel_navigation-container">
      <button
        class="control-panel_child navigation_child home-button"
        @click="router.push('/')"
      >
        <RouterLink to="/">Home</RouterLink>
      </button>

      <button
        class="control-panel_child navigation_child pause-button"
        @click="$emit('flipModal')"
      >
        {{ startPauseResume }}
      </button>
    </div>
  </div>
</template>

<style>
.control-panel {
  display: flex;
  justify-content: space-between;

  height: 10vh;
  border-style: solid;
  border-width: 2px 0px;
  border-color: red;

  min-width: 0;
}
.control-panel_data-container {
  color: white;

  display: flex;
  justify-content: space-evenly;
}
.control-panel_child {
  border-style: solid;
  border-width: 1px;
  border-color: red;

  padding: 0% 3%;

  text-align: center;
}

.control-panel_navigation-container {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  color: black;
}

.navigation_child {
  cursor: pointer;
  font-weight: 700;
}
.home-button a {
  font-weight: inherit !important;
}
.navigation_child:hover {
  transform: scale(1.02);
  border: solid 3px;
}
</style>
