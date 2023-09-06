<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/Mobile.vue'

onMounted(() => {
  document.body.className = 'font-poppins bg-violet'
})
</script>

<template>
  <Mobile class="desktop:hidden"></Mobile>
</template>