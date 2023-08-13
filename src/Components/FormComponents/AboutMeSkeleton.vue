<script setup>

import GitHubLink from '../Buttons/GitHubButton.vue'

</script>


<template>

<div class="container h-auto w-[90%] mx-auto pb-4 my-10
 text-center rounded-lg border border-solid border-blue-300 bg-opacity-60 bg-white
 sm:max-w-[650px]
 lg:w-[100%] lg:max-w-[800px]
 xl:">
 <p class="w-[90%] mx-auto text-left px-4 py-4 text-white
           lg:text-[20px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar lacinia venenatis. Donec sit amet orci ex. Donec mattis metus vel enim accumsan tempor. Vivamus porta luctus neque, ullamcorper aliquet arcu feugiat eu. Donec lobortis accumsan malesuada. Proin pretium sapien id tristique auctor. Cras vel tempus ex. Vivamus lacinia vestibulum lectus, ut faucibus elit ullamcorper ut. Nam massa neque, accumsan nec nibh ac, luctus lacinia lorem. Duis lorem odio, commodo quis ante in, laoreet eleifend ex. Etiam congue neque augue, ut congue magna finibus placerat. Nullam in magna eget lectus maximus gravida. Suspendisse vitae orci ac nunc pretium interdum at nec nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
 </p>
</div>

<GitHubLink class="px-12 py-4 flex justify-center w-fit mx-auto rounded-2xl bg-white bg-opacity-20 text-white hover:bg-opacity-80 hover:text-[#195073] hover:border-[#195073]
lg:text-[20px]"/>


</template>



<style scoped>

.container {
    box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
    background-color: hsla(0, 0%, 100%, 0.2);
}


</style>