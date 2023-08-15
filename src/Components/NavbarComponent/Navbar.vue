<script setup>

import {ref} from 'vue'

import menuButton from '../Buttons/MenuButton.vue'

const isMenuOpen = ref(false)

const animateHamburger = () => {
    isMenuOpen.value = !isMenuOpen.value
};


</script>

<template>
        <nav class="flex justify-between items-center h-[7.692vh] max-h-16 mx-auto my-0 bg-custom-blue-opacity
        sm:justify-between sm:text-l sm:max-h-20 sm:h-[13.311vh]
        lg:text-l lg:max-h-24
        xl:text-xl xl:max-h-32">

        <div class="flex items-center">
            <img src="../../assets/Logo.svg" class="h-12 w-12 ml-5 cursor-pointer 
        sm:ml-[3vw] sm:h-12 sm:w-12
        lg:h-15 lg:w-15
        xl:h-18 xl:w-18" 
        />
        <span class="text-white
            sm:mr-[4.3vw] sm:ml-[4.3vw]
            hidden
            xl:block">Mateusz Zaniewski</span>
        </div>
        

            <span class="text-white
            sm:mr-[4.3vw] sm:ml-[4.3vw]
            xl:hidden">Mateusz Zaniewski</span>

        <div @click="animateHamburger" class="mr-5 flex justify-center items-center cursor-pointer h-full sm:hidden">

            <span :class="isMenuOpen ? 'hamburgerOpen' : 'hamburger'" class="cursor-pointer"></span>

        </div>
        <div class="hidden text-white
        sm:flex sm:justify-around sm:gap-8 sm:mr-[3vw]
         ">
        
            <span class="menuOption cursor-pointer">Projekty</span>
            <span class="menuOption cursor-pointer">O mnie</span>
            <span class="menuOption cursor-pointer">Kontakt</span>
        </div>
        </nav>
        <div v-if="isMenuOpen" class="hamleft pb-3 pt-3 flex justify-between">
            <menuButton class="w-[33%] text-center border-r hover:text-[#E59D23] hover:scale-110 cursor-pointer" text="Projekty"/>
            <menuButton class="w-[33%] text-center hover:text-[#E59D23] hover:scale-110 cursor-pointer" text="O mnie"/>
            <menuButton class="w-[33%] text-center border-l hover:text-[#E59D23] hover:scale-110 cursor-pointer" text="Kontakt"/>
        </div>
    



</template>

<style scoped>

.hamleft {
    height: auto;
    background-color: rgba(169, 208, 233, 0.8);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 20px;
}

.bg-custom-blue-opacity {
    background-color: rgba(169, 208, 233, 0.8);
  }

.hamburger {
    display: inline-block;
    position: relative;
    height: 2px;
    width: 30px;
    background-color: white;
    border-radius: 5px;
}

.hamburger::before{
    content: "";
    height: 2px;
    width: 30px;
    background-color: white;
    position: absolute;
    transform: translateY(-10px);
}

.hamburger::after{
    content: "";
    height: 2px;
    width: 30px;
    background-color: white;
    position: absolute;
    transform: translateY(10px);
}

.menuOption:hover {
    color: #195073;
}


.menuOption:after {
    display:block;
    content: '';
    border-bottom: solid 1px #195073;
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}

.menuOption:hover:after {
    transform: scaleX(1)
}



.hamburgerOpen {
    display: inline-block;
    position: relative;
    height: 2px;
    width: 30px;
    background-color: white;
    border-radius: 5px;
}

.hamburgerOpen::before{
    content: "";
    height: 2px;
    width: 15px;
    background-color: white;
    position: absolute;
    transform: translateY(-10px);
    
}

.hamburgerOpen::after{
    content: "";
    height: 2px;
    width: 15px;
    background-color: white;
    position: absolute;
    transform: translateY(10px);
}




</style>