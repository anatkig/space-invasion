<script setup>
import { useLivesStore } from "../../stores/lives";
import { useBulletsLeftStore } from "../../stores/bulletsLeft";
import { useInvadersDestroyedStore } from "../../stores/invadersDestroyed";
import { useLevelStore } from "../../stores/level";

const lives = useLivesStore();
const bulletsLeft = useBulletsLeftStore();
const invadersDestroyed = useInvadersDestroyedStore();
const level = useLevelStore();
</script>

<template>
  <div class="control-panel-container">
    <div class="control-panel-child number-of-lives">
      lives: {{ lives.$state.lives }}
    </div>
    <div class="control-panel-child level">level: {{ level.$state.level }}</div>
    <div class="control-panel-child bullets-left">
      bullets: {{ bulletsLeft.$state.bulletsLeft }}
    </div>
    <div class="control-panel-child invader-killed">
      invaders destroyed: {{ invadersDestroyed.$state.invadersDestroyed }}
    </div>
  </div>
</template>

<style>
.control-panel-container {
  color: white;
  height: 10vh;
  border-style: solid;
  border-width: 2px 0px;
  border-color: red;

  display: flex;
  justify-content: space-evenly;
}
.control-panel-child {
  border-style: solid;
  border-width: 1px;
  border-color: red;

  display: inline-block;
  padding: 0% 3%;

  text-align: center;
}
</style>
