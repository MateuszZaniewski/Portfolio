<script setup>

import skeleton from '../FormComponents/ProjectSkeleton.vue'

const project1 = ['Vue', 'HTML5', 'CSS', 'Javascript', 'Vuex', 'Github']
const project2 = ['HTML5', 'CSS', 'Javascript']
const project3 = ['Vue', 'HTML5', 'CSS', 'Tailwind', 'Vuex', 'Github', 'Git']
const project4 = ['Vue', 'HTML5', 'CSS', 'Tailwind', 'Pinia', 'Firebase', 'MongoDb']
const proj1Name = 'Projekt1'
const proj2Name = 'Projekt2'
const proj3Name = 'Projekt3'
const proj4Name = 'Projekt4'

class Project {
    constructor(projectName, projectImg, projectDesc, projectTech, gitAction, demoAction ){
        this.name = projectName,
        this.img = projectImg,
        this.desc = projectDesc,
        this.tech = projectTech,
        this.git = gitAction,
        this.demo = demoAction
    }
}


let proj1 = new Project('Portfolio',
'portfolioImage.png',
'W projekcie portfolio skupiłem się na praktycznym wykorzystaniu komponentów w Vuejs oraz zarządzaniu stylami za pomocą TailwindCSS. Głównym zadaniem było pokazanie zdobytych umiejętności oraz przetestowanie własnej wiedzy w zakresie zarządzania projektem. Jest to również autorski projekt wykonany przeze mnie w Figmie.' ,
['HTML','CSS','Javascript','Vuejs', 'TailwindCSS', 'Git', 'GitHub', 'Figma'],
'https://github.com/MateuszZaniewski/Portfolio',
'https://mateuszzaniewski.github.io/Portfolio/');



</script>


<template>
    <h2 class="text-3xl w-[90%] mx-auto pb-5 pt-5 text-[#195073] 
    sm:text-4xl sm:max-w-[600px]
    lg:text-center lg:pb-10">Projekty</h2>
<section class="flex flex-col flex-wrap justify-center mx-auto gap-[3rem] items-center pb-[3vh]
                lg:flex-col lg:items-center">
    <skeleton :projNum="project1" :projName="proj1Name" :obj="proj1" class="" />
    <skeleton :projNum="project2" :projName="proj2Name" :obj="proj1" class="" />
    <skeleton :projNum="project3" :projName="proj3Name" :obj="proj1" class="" />
    <skeleton :projNum="project4" :projName="proj4Name" :obj="proj1" class="" />
</section>


</template>


<style scoped>

section {
    background: linear-gradient(#FFFFFF, #8FC1E2);
}


</style>