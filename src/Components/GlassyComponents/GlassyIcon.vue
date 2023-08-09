<script setup>

const props = defineProps({
    sciezka : String
});

function resolveURL() {
    return `src/assets/${props.sciezka}`
}



</script>


<template>

<div class="flex">
    <img class="h-full w-full p-1" :src="resolveURL()"/>
</div>

</template>


<style scoped>

div{
    height: 50px;
    width: 50px;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
}


</style>