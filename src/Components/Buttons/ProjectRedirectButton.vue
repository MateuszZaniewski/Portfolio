<script setup>

const props = defineProps({
    name: String
});

</script>


<template>

<div class="bg-[#2D92CA] rounded-xl px-4 py-2 w-auto h-auto">
    <span class=" text-white">{{ name }}</span>
</div>

</template>


<style scoped>

* {
    box-sizing: border-box;
}

div {
    border: 1px solid rgba(255, 255, 255, 0.5);
}

</style>