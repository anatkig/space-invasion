<script setup>
import { onMounted, onUpdated, reactive } from 'vue';
import { useLevelStore } from '../../stores/level';
import cartridge from '../../assets/cartridge.svg'

const level = useLevelStore().$state.level;


const state = reactive({
    invTop: 0,
    randomCoordinateX: 0,
    speed: Math.floor(30 / level + 20),
    dislay: "none"
});

const componetLifecycle = () => {
    state.randomCoordinateX = Math.random() *
        (document.querySelector('.battle-field')?.offsetWidth - 70);
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

            if (
                state.invTop ===
                document.querySelector('.battle-field').offsetHeight + 100
            ) {
                clearInterval(topMovement);
                state.dislay = "none";
                state.invTop = 0;
                componetLifecycle();
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
