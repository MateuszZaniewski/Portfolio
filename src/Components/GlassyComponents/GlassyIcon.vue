<script setup>
const props = defineProps({
    sciezka: String,
    index: Number,
});

function resolveURL() {
    return `https://raw.githubusercontent.com/MateuszZaniewski/Portfolio/main/src/assets/${props.sciezka}`;
}
</script>

<template>
    <div :style="{ animationDelay: `${index * 0.4}s` }"
        class="flex h-[12.821vw] w-[12.821vw] max-h-[60px] max-w-[60px] sm:max-h-[70px] sm:max-w-[70px] lg:max-h-[75px] lg:max-w-[75px] xl:h-[5vw] xl:w-[5vw] xl:max-h-[80px] xl:max-w-[80px]">
        <img class="h-full w-full p-1" :src="resolveURL()" :title="sciezka.slice(0, -4)" :alt="sciezka.slice(0, -4)" />
    </div>
</template>

<style scoped>
div {
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
    animation: pulseIcon 5s infinite;
}

@keyframes pulseIcon {

    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(0.8);
        opacity: 0.5;
    }
}
</style>
