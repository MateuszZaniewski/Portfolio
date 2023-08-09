<script setup>

import glassyIcon from '../GlassyComponents/GlassyIcon.vue'

const row1 = ['vuejs.png', 'html5.png', 'css3.png', 'javascript.png']
const row2 = ['firebase.png', 'mongo.png', 'figma.png', 'node.png']
const row3 = ['vuex.png', 'pinia.png', 'git.png', 'github.png']

const getImageName = (name) => {return name };
</script>

<template>

<main>
    <h1 class="text-[36px] text-[#195073] pt-4 pl-6 w-[80vw]
    sm:text-center sm:mx-auto sm:w-[80%] sm:text-[40px]
    xl:text-[70px] xl:max-w-[1100px]">Cześć! Nazywam się <span class="text-[#FF9900]">Mateusz Zaniewski</span> i jestem <span class="text-[#FF9900]">Frontend Developerem</span></h1>
    <div class="row1 flex justify-start ml-2 gap-[45px] pb-[3.8vh] pt-[8.3vh]">
        <div v-for="image in row1" :key="image">
            <glassyIcon :sciezka="image" />
        </div>
    </div>
    
    <div class="row2 flex justify-center ml-[30px] gap-[45px] pb-[3.8vh]">
        <div v-for="image in row2" :key="image" >
            <glassyIcon :sciezka="image" />
        </div>
    </div>
    
    <div  class="row3 flex justify-start ml-2 gap-[45px] pb-[8.3vh]">
        <div v-for="image in row3" :key="image">
            <glassyIcon :sciezka="image" />
        </div>
    </div>

    <div class="flex justify-center">
        <img src="../../assets/downArrow.png"/>
    </div>
    
    
</main>


</template>


<style scoped>

main {
    height: calc(100vh-7.692vh);
    background: linear-gradient(#8FC1E2, #FFFFFF );
}

</style>