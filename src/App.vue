<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-poppins bg-violet'
})
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-14 min-h-screen m-7">
    <div class="flex flex-row justify-start items-center w-full">
      <img class="w-[9rem]" src="./assets/logo.svg">
    </div>

    <img class="absolute -z-10 -top-3 w-[30rem]" src="./assets/bg-mobile.svg">
    <img class="w-[18rem]" src="./assets/illustration-mockups.svg">

    <div class="flex flex-col items-center gap-6">
      <p class="text-2xl text-white font-bold text-center leading-10">
      Build The Community Your Fans Will Love
      </p>
      <p class="text-white text-lg text-center font-open-sans">
        Huddle re-imagines the way we build communities. You have a voice, 
        but so does your audience. Create connections with your users as
        you engage in genuine discussion.
      </p>
      <div class="
        flex 
        flex-row 
        items-center 
        justify-center 

        w-[15rem]
        h-[3rem]

        rounded-full
        shadow-2xl 
        bg-white
        
        cursor-pointer
        ">
        <p class="text-sm text-violet">Register</p>
      </div>
    </div>
  </div>
</template>