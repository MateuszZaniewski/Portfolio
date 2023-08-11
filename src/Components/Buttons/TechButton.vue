<script setup>

const props = defineProps({
    tech : String
});

</script>


<template>

<div>
    <span class="text-[#195073]">{{ tech }}</span>
</div>



</template>


<style scoped>

div {
    height: 20px;
    width: 50px;
    border-radius: 10px;
    background-color: #ffffff;
}


</style>