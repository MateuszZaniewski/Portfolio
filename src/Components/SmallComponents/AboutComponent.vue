<script setup>

import personalFoto from '../LogoComponent/PersonalFotoComponent.vue'
import skeleton from '../FormComponents/AboutMeSkeleton.vue'

</script>


<template>

<section>
    <h2 class="text-3xl w-[90%] mx-auto pb-10 pt-8 text-white 
    sm:text-4xl sm:max-w-[600px]
    lg:text-center lg:pb-10">O mnie</h2>

    <personalFoto class="mx-auto rounded-full"/>

    <skeleton />
</section>


</template>



<style scoped>


section {
    background: linear-gradient(#8FC1E2, #1e74a9cc);
    height: auto;
}


</style>