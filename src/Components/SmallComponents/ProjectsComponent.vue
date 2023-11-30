<script setup>
import skeleton from "../FormComponents/ProjectSkeleton.vue";

class Project {
    constructor(
        projectName,
        projectImg,
        projectDesc,
        projectTech,
        gitAction,
        demoAction
    ) {
        (this.name = projectName),
            (this.img = projectImg),
            (this.desc = projectDesc),
            (this.tech = projectTech),
            (this.git = gitAction),
            (this.demo = demoAction);
    }
}

const proj1 = new Project(
    "Portfolio",
    "portfolio.png",
    "W projekcie portfolio skupiłem się na praktycznym wykorzystaniu komponentów w Vuejs oraz zarządzaniu stylami za pomocą TailwindCSS. Głównym zadaniem było pokazanie zdobytych umiejętności oraz przetestowanie własnej wiedzy w zakresie zarządzania projektem. Jest to również autorski projekt wykonany przeze mnie w Figmie.",
    [
        "HTML",
        "CSS",
        "Javascript",
        "Vuejs",
        "TailwindCSS",
        "Git",
        "GitHub",
        "Figma",
    ],
    "https://github.com/MateuszZaniewski/Portfolio",
    "https://mateuszzaniewski.github.io/Portfolio/"
);

const proj2 = new Project(
    "Flowers's Capital",
    "flowersCapital.png",
    "Jest to moja pierwsza wspólna praca z designerem. Projekt powstał w Figmie, a następnie został przeze mnie odtworzony w VueJs. Nauczyłem się przy nim kooperacji na poziomie developer - designer. Strona przestawia landing page kwiaciarni i była dla mnie prawdziwym ćwiczeniem Responsive Web Designu (RWD).",
    [
        "HMML",
        "CSS",
        "Javascript",
        "Vuejs",
        "SCSS",
        "VueRouter",
        "GitHub",
        "Git",
    ],
    "https://github.com/MateuszZaniewski/Flowers_Capital",
    "https://mateuszzaniewski.github.io/Flowers_Capital"
);

const proj3 = new Project(
    "Yu-Gi-Oh Card Searcher",
    "yugioh.png",
    "Jest to wyszukiwarka kart Yu-Gi-Oh, korzystająca z zewnętrznego API. Pozwala użytkownikowi szukać karty, stosować filtry, sortować, dodawać do ulubionych itp. Domyślnie stworzona na wersję mobilną (jako pomoc przy grze w terenie). Projekt jest ciągle w fazie rozwoju.",
    [
        "HTML",
        "CSS",
        "Javascript",
        "Vuejs",
        "Nuxtjs",
        "Firebase",
        "GitHub",
        "Git",
    ],
    "https://github.com/MateuszZaniewski/YugiohNuxt",
    "https://yugioh-nuxt.vercel.app/"
);

const proj4 = new Project(
    "Vivisence Site Rework",
    "vivisence.png",
    "Strona przestawia rework istniejącej strony vivisence.com. Była to moja pierwsza przygoda z Vuejs oraz VueRouter, co pozwoliło mi zrozumieć wiele koncepcji przemawiających za SPA (Single Page Application).",
    ["HTML", "CSS", "Javascript", "Vuejs", "VueRouter", "GitHub", "Git"],
    "https://github.com/MateuszZaniewski/SmallSite",
    "https://mateuszzaniewski.github.io/SmallSite/#/"
);

const proj5 = new Project(
    "Water Drinking App",
    "waterDrinking.png",
    "Hobbistyczny projekt oparty zainteresowaniem do zdrowego odżywiania i prowadzenia zdrowego stylu życia. Aplikacja do użytku codziennego, stworzona przy użyciu czystego Javascriptu oraz LocalStorage jako nośnika zebranych danych. Nauczyłem się przy niej komunikacji między tym co widzi użytkownik a tym co dzieje się po stronie aplikacji.",
    ["HTML", "CSS", "Javascript", "LocalStorage"],
    "https://github.com/MateuszZaniewski/WaterDrinkingApp",
    "https://mateuszzaniewski.github.io/WaterDrinkingApp/"
);

const proj6 = new Project(
    "CodeWars Challenges",
    "codewars.png",
    "CodeWars jest stroną poświęconą udoskonalaniu się jako programista w dowolnym jezyku. Już od początku swojej drogi jako developer skupiłem się na rozwoju umiejętności analizowania problemów i dobrania odpowiednich rozwiązań. Zadania staram się wykonywać codziennie, przez co podstawowe koncepcje trwalej zapadły mi w pamięć.",
    ["Javascipt"],
    "https://github.com/MateuszZaniewski/CodeWarsChallenges",
    "https://github.com/MateuszZaniewski/CodeWarsChallenges"
);
</script>

<template>
    <h2 id="projects" class="text-3xl w-[90%] mx-auto pb-5 pt-5 text-[#195073] sm:text-4xl sm:max-w-[600px] lg:text-center lg:pb-10">
        Projekty
    </h2>
    <section
        class="flex flex-col flex-wrap justify-center mx-auto gap-[3rem] items-center pb-[3vh] lg:flex-col lg:items-center">
        <skeleton :obj="proj1" />
        <skeleton :obj="proj2" />
        <skeleton :obj="proj3" />
        <skeleton :obj="proj4" />
        <skeleton :obj="proj5" />
        <skeleton :obj="proj6" />
    </section>
</template>

<style scoped>
section {
    background: linear-gradient(#ffffff, #8fc1e2);
}
</style>
