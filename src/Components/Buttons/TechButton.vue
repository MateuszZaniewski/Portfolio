<script setup>
const props = defineProps({
    tech: String,
});
</script>

<template>
    <div>
        <span class="">{{ tech }}</span>
    </div>
</template>

<style scoped>
div {
    padding: 0.25rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.205);
    border-radius: 0.5rem;
    color: #195073;
    border: 1px solid #195073;
}

div:hover {
    background-color: #195073;
    color: #ffffff;
    border: 1px solid #ffffff;
}
</style>
