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


let proj1 = new Project('Portfolio','../../assets/vuejs.png' , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et mauris eget dolor placerat consectetur. Duis sollicitudin sem ac luctus pulvinar. Fusce ornare, lorem vitae eleifend consectetur, lectus mi tempus arcu, quis mattis sem leo a augue. Aenean vestibulum neque laoreet felis scelerisque, non tempus turpis euismod. Pellentesque pulvinar dignissim.' ,['Vue','CSS','Vuex','GitHub'], true, false);

console.log(proj1)


</script>


<template>
    <h2 class="text-3xl w-[90%] mx-auto pb-2 pt-8 text-[#195073] 
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