<script setup>

import skeleton from '../FormComponents/ProjectSkeleton.vue'

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


const proj1 = new Project('Portfolio',
'portfolioImage.png',
'W projekcie portfolio skupiłem się na praktycznym wykorzystaniu komponentów w Vuejs oraz zarządzaniu stylami za pomocą TailwindCSS. Głównym zadaniem było pokazanie zdobytych umiejętności oraz przetestowanie własnej wiedzy w zakresie zarządzania projektem. Jest to również autorski projekt wykonany przeze mnie w Figmie.' ,
['HTML','CSS','Javascript','Vuejs', 'TailwindCSS', 'Git', 'GitHub', 'Figma'],
'https://github.com/MateuszZaniewski/Portfolio',
'https://mateuszzaniewski.github.io/Portfolio/');

const proj2 = new Project("Flowers's Capital",
'flowersCapital.png',
'Opis projektu',
['HMML', 'CSS', 'Javascript', 'Vuejs', 'SCSS', 'VueRouter', 'GitHub', 'Git'],
'https://github.com/MateuszZaniewski/Flowers_Capital',
'https://mateuszzaniewski.github.io/Flowers_Capital');

const proj3 = new Project('Yu-Gi-Oh Card Searcher',
'yugioh.png',
'Opis projektu Yu-gi-oh',
['HTML', 'CSS', 'Javascript', 'Vuejs', 'VueRouter', 'Vuex', 'Firebase', 'Postman', 'GitHub', 'Git'],
'https://github.com/MateuszZaniewski/Yu-Gi-Oh-Api',
'https://mateuszzaniewski.github.io/Yu-Gi-Oh-Api/#/');

const proj4 = new Project('Vivisence Site Rework',
'vivisence.png',
'Opis projektu Vivisence xD',
['HTML', 'CSS', 'Javascript', 'Vuejs', 'VueRouter', 'GitHub', 'Git'],
'https://github.com/MateuszZaniewski/SmallSite',
'https://mateuszzaniewski.github.io/SmallSite/#/');

const proj5 = new Project('Water Drinking App',
'waterdrinking.png',
'Opis projektu WaterDrinking App',
['HTML', 'CSS', 'Javascript'],
'https://github.com/MateuszZaniewski/WaterDrinkingApp',
'https://mateuszzaniewski.github.io/WaterDrinkingApp/');

const proj6 = new Project('CodeWars Challenges',
'codewars.png',
'Opis robienia zadanek na codewars',
['Javascipt'],
'https://github.com/MateuszZaniewski/CodeWarsChallenges',
'https://github.com/MateuszZaniewski/CodeWarsChallenges');

</script>


<template>
    <h2 class="text-3xl w-[90%] mx-auto pb-5 pt-5 text-[#195073] 
    sm:text-4xl sm:max-w-[600px]
    lg:text-center lg:pb-10">Projekty</h2>
<section class="flex flex-col flex-wrap justify-center mx-auto gap-[3rem] items-center pb-[3vh]
                lg:flex-col lg:items-center">
    <skeleton  :obj="proj1" class="" />
    <skeleton  :obj="proj2" class="" />
    <skeleton  :obj="proj3" class="" />
    <skeleton  :obj="proj4" class="" />
    <skeleton  :obj="proj5" class="" />
    <skeleton  :obj="proj6" class="" />
</section>


</template>


<style scoped>

section {
    background: linear-gradient(#FFFFFF, #8FC1E2);
}


</style>