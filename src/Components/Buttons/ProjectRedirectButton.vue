<script setup>
const props = defineProps({
    name: String,
    link: String,
});
</script>

<template>
    <div
        class="bg-[#2D92CA] rounded-xl px-4 py-2 w-auto h-auto text-white hover:bg-white hover:text-[#195073] hover:border-[#195073]">
        <a :href="link" class="">{{ name }}</a>
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
