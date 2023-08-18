<script setup>
function resolveURL(path) {
    return `https://raw.githubusercontent.com/MateuszZaniewski/Portfolio/main/src/assets/${path}`;
}
</script>

<template>
    <div
        class="container h-auto w-[90%] mx-auto pb-4 my-10 text-center rounded-lg border border-solid border-blue-300 bg-opacity-60 bg-white sm:max-w-[650px] lg:w-[100%] lg:max-w-[600px] xl:">
        <p class="w-[90%] mx-auto text-left px-4 py-4 text-white lg:text-[20px]">
            Od prawie 2 lat jestem pasjonatem programowania, który odnalazł się w
            tworzeniu stron internetowych. Pasję tę dzielę z pracą na pełen etat w
            sklepie e-commerce. Poprzez pisane kodu rozwijam zdolności analitycznego
            myślenia i rozwiązywania problemów. Codziennie staram się pogłębiać swoją
            wiedzę i mierzyć się z nowymi problemami. Moim ulubionym frameworkiem jest
            Vue.js, który jest podstawowym narzędziem mojej pracy w budowaniu UI. Z
            przyjemnością dołączę do zespołu pełnego ludzi z pasją i chęcią dzielenia
            się doświadczeniem.
        </p>
    </div>

    <div class="flex justify-evenly pt-5 max-w-[600px] mx-auto">
        <a href="https://github.com/MateuszZaniewski" class="h-[12.821vw] w-[12.821vw] max-h-[60px] max-w-[60px] sm:max-h-[70px] sm:max-w-[70px] lg:max-h-[75px] lg:max-w-[75px] xl:h-[5vw] xl:w-[5vw] xl:max-h-[80px] xl:max-w-[80px]"> <img class="cursor-pointer h-full w-full" :src="resolveURL('githubIcon.png')" /> </a>
        <a href="https://www.facebook.com/profile.php?id=100006132347611" class="h-[12.821vw] w-[12.821vw] max-h-[60px] max-w-[60px] sm:max-h-[70px] sm:max-w-[70px] lg:max-h-[75px] lg:max-w-[75px] xl:h-[5vw] xl:w-[5vw] xl:max-h-[80px] xl:max-w-[80px]"> <img class="cursor-pointer h-full w-full" :src="resolveURL('facebook.png')" /> </a>
        <a href="https://www.linkedin.com/in/mateusz-zaniewski-6128ba288/" class="h-[12.821vw] w-[12.821vw] max-h-[60px] max-w-[60px] sm:max-h-[70px] sm:max-w-[70px] lg:max-h-[75px] lg:max-w-[75px] xl:h-[5vw] xl:w-[5vw] xl:max-h-[80px] xl:max-w-[80px]"> <img class="cursor-pointer h-full w-full" :src="resolveURL('linkedin.png')" /> </a>

    </div>
</template>

<style scoped>
.container {
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
    background-color: hsla(0, 0%, 100%, 0.2);
}
</style>
