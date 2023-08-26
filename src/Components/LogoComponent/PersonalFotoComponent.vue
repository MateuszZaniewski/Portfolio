<script setup></script>

<template>
    <div
        class="container h-[150px] w-[150px] flex justify-center sm:h-[160px] sm:w-[160px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]">
        <div class="foto rounded-full"></div>
    </div>
</template>

<style scoped>
.container {
    outline: 10px solid rgba(255, 255, 255, 0.199);
}

.foto {
    height: 100%;
    width: 100%;
    background-image: url("https://raw.githubusercontent.com/MateuszZaniewski/Portfolio/f75086355622800485c71443f65bc86ffc446bbd/src/assets/personalPhoto.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
