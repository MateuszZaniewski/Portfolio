<script setup>
import techButton from "../Buttons/TechButton.vue";
import redirectButton from "../Buttons/ProjectRedirectButton.vue";

const props = defineProps({
    obj: Object,
});

function resolveURL() {
    return `https://raw.githubusercontent.com/MateuszZaniewski/Portfolio/main/src/assets/ProjectsImages/${props.obj.img}`;
}
</script>

<template>
    <div
        class="container h-auto w-[90%] pb-4 text-center rounded-lg border border-solid border-blue-300 bg-opacity-60 bg-white sm:max-w-[650px] lg:w-[100%] lg:max-w-[600px] xl:">
        <h3 class="pt-2 pb-2 text-lg text-[#195073] sm:text-2xl">{{ obj.name }}</h3>
        <div class="sm:flex">
            <div
                class="mx-auto sm:w-[50%] w-[90%] border py-2 border-solid border-blue-200 bg-white bg-opacity-20 rounded-lg sm:flex sm:justify-center sm:h-[250px] sm:border-none sm:pt-5">
                <img class="rounded-lg mx-auto w-[90%]" :src="resolveURL()" />
            </div>
            <div class="sm:flex flex-col sm:w-[50%]">
                <div class="flex justify-left gap-4 flex-wrap pt-5 pb-5 w-[90%] mx-auto sm:order-2">
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
                        <redirectButton name="Github" :link="obj.git" />
                        <redirectButton name="Demo" :link="obj.demo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.container {
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
}
</style>
