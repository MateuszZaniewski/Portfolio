<script setup>

import techButton from '../Buttons/TechButton.vue'
import redirectButton from '../Buttons/ProjectRedirectButton.vue'

</script>

<template>

<h2 class="text-3xl w-[90%] mx-auto pb-5 text-[#195073]">Projekty</h2>

<div class="container h-auto w-[73.333vw] border-lime-500">
    <h3 class="pt-2 pb-2">Project Name</h3>
    <div>
        <img src="../../assets/placeholder-image.png" />
    </div>
    <div class="flex justify-center gap-4 flex-wrap pt-5 pb-5">
        <techButton tech="Vue" />
        <techButton tech="HTML" />
        <techButton tech="CSS" />
        <techButton tech="Vuex" />
        <techButton tech="Git" />
        <techButton tech="Figma" />
    </div>
    <div>
        <div class="text-[#195073] pt-5 pb-5 w-[90%] mx-auto text-left">
            <p>Tutaj będzie opis projektu, w którym coś tam napisze co zrobiłem o projekcie, ogólnie pisze te bzdety by wypełnić troche bardziej te pole by nie było puste xD pozdro od Magnolika dla Droniaka!</p>
        </div>
        <div class="flex justify-evenly pt-5 pb-5">
            <redirectButton name="Github"/>
            <redirectButton name="Demo"/>
        </div>
    </div>
</div>

</template>


<style scoped>

.container {
    height: auto;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid rgba(25, 80, 115, 0.30);
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
    stroke: 1px white;
}

img {
    width: 63.077vw;
    margin: 0 auto;
    border: 1px solid grey;
}

</style>