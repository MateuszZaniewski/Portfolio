<template>

<a class="outline-white max-w-[140px] max-h-[39px]">{{ props.text }}</a>


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

a {
    color: white;
}

button:hover {
    border: 2px solid white;
    background-color: rgba(76, 169, 219, 1)
}

button:active {
    background-color: rgba(76, 169, 219, 1);
}

</style>