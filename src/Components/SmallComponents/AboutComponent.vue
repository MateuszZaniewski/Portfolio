<script setup>
import personalFoto from "../LogoComponent/PersonalFotoComponent.vue";
import skeleton from "../FormComponents/AboutMeSkeleton.vue";
import glassyIcon from "../GlassyComponents/GlassyIcon.vue";

const row1 = [
    "vuejs.png",
    "html5.png",
    "css3.png",
    "javascript.png",
    "firebase.png",
    "mongo.png",
    "figma.png",
    "node.png",
    "vuex.png",
    "pinia.png",
    "git.png",
    "github.png",
    "tailwind.png",
];
</script>

<template>
    <section id="about">
        <h2 class="text-3xl w-[90%] mx-auto pb-5 pt-5 text-white sm:text-4xl sm:max-w-[600px] lg:text-center lg:pb-10">
            O mnie
        </h2>

        <personalFoto class="mx-auto rounded-full" />

        <div class="xl:w-auto">
            <h2
                class="text-xl w-[90%] text-center mx-auto pb-5 pt-5 text-white sm:text-2xl sm:max-w-[600px] lg:text-center lg:pb-10 lg:pt-10">
                Technologie i narzędzia, których używam
            </h2>
            <div
                class="row1 flex flex-wrap w-[90%] mx-auto justify-center gap-[3.846vh] sm:max-w-[650px] xl:w-[100%] xl:pl-0 xl:pr-0 xl:gap-[5.846vh]">
                <div v-for="(image, index) in row1" :key="image">
                    <glassyIcon :sciezka="image" :index="index" />
                </div>
            </div>
        </div>

        <skeleton />
    </section>
</template>

<style scoped>
section {
    background: linear-gradient(#8fc1e2, #1e74a9cc);
    height: auto;
}
</style>
