<script setup>

import glassyIcon from '../GlassyComponents/GlassyIcon.vue'

const row1 = ['vuejs.png', 'html5.png', 'css3.png', 'javascript.png']
const row2 = ['firebase.png', 'mongo.png', 'figma.png', 'node.png']
const row3 = ['vuex.png', 'pinia.png', 'git.png', 'github.png']

</script>

<template>

<main class="flex flex-col
             xl:flex-row xl:h-[87vh] items-center justify-around" >
    <div class="xl:w-[700px] xl:h-auto">
        <h1 class="text-[5.128vh] font-bold text-[#195073] pt-[2.564vh] w-[80vw] h-auto leading-[6.15vh]
        sm:text-[50px] sm:max-w-[600px] sm:leading-[6.5vw] sm:pt-[7.5vw] sm:text-center
        lg:text-[60px] lg:max-w-[800px] lg:leading-[5.5vw] lg:pt-[7.5vw]
        xl:text-[4.5vw] xl:leading-[5.15vw] xl:max-w-[1100px] xl:w-[60%] xl:text-center xl:mx-auto xl:pt-0">Cześć! Nazywam się <span class="text-[#FF9900]">Mateusz Zaniewski</span> i jestem <span class="text-[#FF9900]">Frontend Developerem</span></h1>
    </div>
    

    <div class="xl:w-auto">
        <div class="row1 flex justify-center gap-[3.846vh] pb-[3.846vh] pt-[7.949vh]
    sm:justify-center sm:w-[70%] sm:mx-auto sm:gap-[10vw]
    xl:w-[100%] xl:pl-0 xl:pr-0 xl:gap-[7.846vh]">
        <div v-for="(image, index) in row1" :key="image">
            <glassyIcon :sciezka="image" :index="index" />
        </div>
    </div>
    
    <div class="row2 flex justify-center gap-[3.846vh] ml-5 pb-[3.846vh]
    sm:justify-center sm:w-[70%] sm:mx-auto sm:pl-20 sm:gap-[10vw]
    xl:w-[100%] xl:pl-0 xl:pr-0 xl:gap-[7.846vh]">
        <div v-for="(image, index) in row2" :key="image" >
            <glassyIcon :sciezka="image" :index="index" />
        </div>
    </div>
    
    <div  class="row3 flex justify-center gap-[3.846vh] pb-[8.3vh]
    sm:justify-center sm:w-[70%] sm:mx-auto sm:gap-[10vw]
    xl:w-[100%] xl:pl-0 xl:pr-0 xl:gap-[7.846vh]">
        <div v-for="(image, index) in row3" :key="image">
            <glassyIcon :sciezka="image" :index="index" />
        </div>
    </div>
    </div>
    

    <div class="flex justify-center
                xl:hidden">
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