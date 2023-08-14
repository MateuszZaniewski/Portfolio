<script setup>

import techButton from '../Buttons/TechButton.vue'
import redirectButton from '../Buttons/ProjectRedirectButton.vue'

const props = defineProps({
    projNum: Array,
    projName : String,
    obj : Object
});

</script>

<template>

<div class="container h-auto w-[90%] pb-4
 text-center rounded-lg border border-solid border-blue-300 bg-opacity-60 bg-white
 sm:max-w-[650px]
 lg:w-[100%] lg:max-w-[600px]
 xl:">
    <h3 class="pt-2 pb-2 text-lg text-[#195073]
               sm:text-2xl">{{ obj.name}}</h3>
    <div class="sm:flex">
        <div class="mx-auto sm:w-[50%] sm:flex sm:justify-center sm:items-start pt-5 m-w-[350px]
                    ">
            <div>
                <img class="rounded-lg w-[90%] mx-auto border border-gray-400" src="../../assets/placeholder-image.png" />
            </div>
        </div>
            <div class="sm:flex flex-col sm:w-[50%]">
                    <div class="flex justify-left gap-4 flex-wrap pt-5 pb-5 w-[90%] mx-auto
                                sm:order-2 ">
                        <div v-for="project in obj.tech" class="">
                            <techButton :tech="project" />
                        </div>
                    </div>
        

                <div class="sm:order-1">
                    <div class="text-[#195073] pt-5 pb-5 w-[90%] mx-auto text-left">
                        <p>{{ obj.desc }}</p>
                    </div>
                </div>
                <div class="sm:order-3">
                    <div class="flex justify-evenly pt-5 pb-5 sm:order-3">
                        <redirectButton name="Github"/>
                        <redirectButton name="Demo"/>
                    </div>
                </div>
                    
                

            </div>
        
    </div>
    
    
</div>

</template>


<style scoped>

*{
    box-sizing: border-box;
}

.container {
    box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
}


</style>