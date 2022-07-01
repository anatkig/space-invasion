<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useLevelStore } from '../../stores/level';
import { useLivesStore } from '../../stores/lives';
import { useBulletsLeftStore } from '../../stores/bulletsLeft';
import { useInvadersStore } from '../../stores/invaders';
import { useInvadersDestroyedStore } from '../../stores/invadersDestroyed';

import cartridge from '../../assets/cartridge.svg'
import bomb from '../../assets/bomb.svg';
import firstAid from '../../assets/firstAid.svg';

const level = useLevelStore().$state.level;
const bulletsLeft = useBulletsLeftStore();
const lives = useLivesStore();

const imageIndex = ref(0);

const images = [
    cartridge,
    bomb,
    firstAid
];


const state = reactive({
    invTop: 0,
    randomCoordinateX: 0,
    speed: Math.floor(30 / level + 20),
    dislay: "none",
    image: images[imageIndex.value]
});


const componetLifecycle = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    state.image = images[randomIndex];
    imageIndex.value = randomIndex;

    state.randomCoordinateX = Math.floor(Math.random() *
        (document.querySelector('.battle-field')?.offsetWidth - 70));
    const interval = setInterval(() => {
        const appear = Math.floor(Math.random() * 100);

        if (appear === 1) {
            clearInterval(interval);
            invTopValue();
            state.dislay = "block";
        }

    }, 1000)
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

                    if (imageIndex.value === 0) {
                        bulletsLeft.addBulletsLeft(100);
                    } else if (imageIndex.value === 1) {
                        lives.subtractLives(1);
                        const invaders = useInvadersStore();
                        const invadersDestroyed = useInvadersDestroyedStore();
                        invadersDestroyed.addInvadersDestroyed(invaders.$state.invaders.length);
                        invaders.removeAllInvaders();
                    } else if (imageIndex.value === 2) {
                        lives.addLives(1)
                    }
                    if (lives !== 0) {
                        componetLifecycle();
                    }
                }
            }
            if (
                state.invTop ===
                document.querySelector('.battle-field').offsetHeight + 100 || lives.$state.lives === 0
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
        <img :src="state.image">
    </div>
</template>

<style>
.stranger {
    position: absolute;
    width: 70px;
    height: 100px;
}
</style>
