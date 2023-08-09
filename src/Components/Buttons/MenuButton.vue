<template>

<button class="outline-white max-w-[140px] max-h-[39px]">{{ props.text }}</button>


</template>


<script setup>

const props = defineProps({
    text : String
});

</script>

<style scoped>

*{
    box-sizing: border-box;
}

button {
    width: 35vw;
    height: 10vw;
    color: white;
    background-color: rgba(76, 169, 219, 0.7);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.50);
}

button:hover {
    border: 2px solid white;
    background-color: rgba(76, 169, 219, 1)
}

button:active {
    background-color: rgba(76, 169, 219, 1);
}

</style>