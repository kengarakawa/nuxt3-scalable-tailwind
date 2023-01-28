<script lang="ts" setup>
useHead({
  title: "Home ☺",
  meta: [
    {
      name: "description",
      content: "Home Nuxt 3, IT Genius Engineering",
    },
    {
      name: "keywords",
      content: "Home, Nuxt 3, Learning Nuxt 3",
    },
  ],
})
</script>

<template>
  <!-- <div class="flex items-center justify-center h-screen">
    <h1 class="text-3xl font-bold text-purple-600 animate-bounce">
      
      <Icon name="emojione:1st-place-medal"></Icon>
      Hello Nuxt 3
    </h1>
  </div> -->
  
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;1,500&display=swap" rel="stylesheet"> 
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
