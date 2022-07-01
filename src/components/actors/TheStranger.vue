<script setup>
import { onMounted, reactive } from 'vue';
import { useLevelStore } from '../../stores/level';
import { useLivesStore } from '../../stores/lives';
import { useBulletsLeftStore } from '../../stores/bulletsLeft';

import cartridge from '../../assets/cartridge.svg'

const level = useLevelStore().$state.level;
const lives = useLivesStore().$state.lives;
const bulletsLeft = useBulletsLeftStore();


const state = reactive({
    invTop: 0,
    randomCoordinateX: 0,
    speed: Math.floor(30 / level + 20),
    dislay: "none"
});

const componetLifecycle = () => {
    state.randomCoordinateX = Math.floor(Math.random() *
        (document.querySelector('.battle-field')?.offsetWidth - 70));
    const interval = setInterval(() => {
        const appear = Math.floor(Math.random() * 100);

        if (appear === 1) {
            clearInterval(interval);
            invTopValue();
            state.dislay = "block";
        }

    }, 10)
}

const invTopValue = () => {

    const topMovement = setInterval(() => {
        if (document.querySelector('.pause-button')?.innerHTML === 'Pause') {
            state.invTop += 1;
            const bullets =
                Array.from(document.querySelectorAll('.bullet'));

            const hittingBullet = bullets?.find(bullet => {
                const bulletXInPx = bullet.offsetLeft;

                if (bulletXInPx + 15 >= state.randomCoordinateX && bulletXInPx <= state.randomCoordinateX + 70) {
                    return bullet;
                } else return undefined;
            });

            if (hittingBullet) {
                if (hittingBullet.offsetTop > state.invTop &&
                    hittingBullet.offsetTop < state.invTop + 85) {
                    clearInterval(topMovement);
                    state.dislay = "none";
                    state.invTop = 0;
                    if (lives !== 0) {
                        componetLifecycle();
                    }
                    bulletsLeft.addBulletsLeft(100);
                }
            }
            if (
                state.invTop ===
                document.querySelector('.battle-field').offsetHeight + 100 || lives === 0
            ) {
                clearInterval(topMovement);
                state.dislay = "none";
                state.invTop = 0;
                if (lives !== 0) {
                    componetLifecycle();
                }

            }
        }
    }, 10);
};

onMounted(() => {
    componetLifecycle();

});

</script>

<template>
    <div class="stranger" :style="{
        left: state.randomCoordinateX + 'px',
        top: state.invTop + 'px',
        display: state.dislay
    }">
        <img :src="cartridge">
    </div>
</template>

<style>
.stranger {
    position: absolute;
    width: 70px;
    height: 100px;
}
</style>
