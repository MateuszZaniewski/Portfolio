<script setup>


</script>



<template>

<section>
    <h2 class="text-3xl w-[90%] mx-auto pb-10 pt-8 text-white 
    sm:text-4xl sm:max-w-[600px]
    lg:text-center lg:pb-10">Formularz Kontaktowy</h2>

    <div class="sm:flex sm:flex-row sm:items-start sm:justify-center">
        <div class="sm:order-2 sm:w-[50%]">
            <p class="text-white w-[90%] mx-auto pb-10 pt-8 sm:mx-0 sm:text-[20px] sm:w-[60%] sm:pl-8 sm:py-0 lg:text-[22px]">Podoba ci się moja praca? Chcesz nawiązać współpracę? Koniecznie do mnie napisz! Skorzystaj z formularza lub napisz na mateusz.zaniewski94@gmail.com</p>
        </div>


        <div class="sm:order-1 sm:w-[50%] sm:flex sm:justify-end lg:text-[18px]">
            <form class="flex flex-col gap-5 pl-5 w-[80%] sm:pl-0 ">
                <input placeholder="Imię" class="bg-white bg-opacity-20 border border-white rounded-lg max-w-[350px] placeholder-[#195073] py-3" />
                <input type="email" placeholder="Email" class="bg-white bg-opacity-20 border border-white rounded-lg max-w-[350px] placeholder-[#195073] py-3" />
                <textarea placeholder="Treść wiadomości" class="bg-white bg-opacity-20 border border-white rounded-lg max-w-[350px] placeholder-[#195073] py-3 " />
                <button class="px-12 py-3 w-fit rounded-2xl bg-[#195073] text-white hover:bg-opacity-60  hover:border-white
                lg:text-[20px]" type="submit">Wyślij</button>
            </form>
        </div>

    </div>

    

    <p class="pt-10 text-center">Mateusz Zaniewski 2023</p>
</section>

</template>



<style scoped>

section {
    background: linear-gradient(#1e74a9cc, #ffffff);
}

input, textarea {
    text-indent: 1.5rem;
    box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
    
}

</style>