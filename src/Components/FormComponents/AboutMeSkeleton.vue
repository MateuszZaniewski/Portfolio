<script setup>
import GitHubLink from "../Buttons/GitHubButton.vue";
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

    <GitHubLink
        class="px-12 py-3 flex w-fit mx-auto rounded-2xl bg-[#195073] text-white hover:bg-opacity-60 hover:border-white lg:text-[20px]" />
</template>

<style scoped>
.container {
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.5);
    background-color: hsla(0, 0%, 100%, 0.2);
}
</style>
