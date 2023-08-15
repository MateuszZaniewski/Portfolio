<script setup>
import navbar from "./NavbarComponent/Navbar.vue";
import hero from "./SmallComponents/HeroComponent.vue";
import projects from "./SmallComponents/ProjectsComponent.vue";
import about from "./SmallComponents/AboutComponent.vue";
import contact from "./SmallComponents/ContactComponent.vue";
</script>

<template class="">
    <navbar />
    <hero />
    <projects ref="projects" />
    <about ref="about" />
    <contact ref="contact" />
</template>

<style scoped>
* {
    background: #ffffff2e;
}
</style>
