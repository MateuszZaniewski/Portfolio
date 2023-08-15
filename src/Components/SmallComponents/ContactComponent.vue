<script setup>


</script>



<template>

<section>
    <h2 class="text-3xl w-[90%] mx-auto pb-10 pt-10 text-white 
    sm:text-4xl sm:max-w-[600px]
    lg:text-center lg:pb-10">Formularz Kontaktowy</h2>

    <div class="sm:flex sm:flex-row sm:items-start sm:justify-center max-w-[1000px] mx-auto">
        <div class="sm:order-2 sm:w-[50%]">
            <p class="text-white w-[90%] mx-auto pb-10 sm:mx-0 sm:text-[20px] sm:w-[60%] sm:pl-8 sm:py-0 lg:text-[22px]">Podoba ci się moja praca? Chcesz nawiązać współpracę? Koniecznie do mnie napisz! Skorzystaj z formularza lub napisz na mateusz.zaniewski94@gmail.com</p>
        </div>


        <div class="sm:order-1 sm:w-[50%] sm:flex sm:justify-end lg:text-[18px]">
            <form action="https://formeezy.com/api/v1/forms/64db395de8c3880008d26c0e/submissions" method="POST" class="flex flex-col gap-5 pl-5 w-[80%] sm:pl-0 ">
                <input type="text" name="name" placeholder="Imię" required class="bg-white bg-opacity-20 border border-white rounded-lg max-w-[350px] placeholder-[#195073] py-3" />
                <input type="email" name="email" placeholder="Email" required class="bg-white bg-opacity-20 border border-white rounded-lg max-w-[350px] placeholder-[#195073] py-3" />
                <textarea placeholder="Treść wiadomości" name="message" required class="bg-white bg-opacity-20 border border-white rounded-lg max-w-[350px] placeholder-[#195073] py-3 " />
                <button class="px-12 py-3 w-fit rounded-2xl bg-[#195073] border text-white hover:bg-opacity-60  hover:border-white
                lg:text-[20px]" type="submit">Wyślij</button>
            </form>
        </div>

    </div>

    

    <p class="pt-10 text-center">Mateusz Zaniewski 2023</p>
</section>

</template>



<style scoped>

section {
    background: linear-gradient(#1e74a9cc, #19507370);
}

input, textarea {
    text-indent: 1.5rem;
    box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
    
}

</style>