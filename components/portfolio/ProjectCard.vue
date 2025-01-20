<script setup lang="ts">
import {ref} from 'vue';
import type {ProjectCardProps} from '~/public/dictionaries/projectCards';

const props = defineProps<ProjectCardProps>();
const cardRef = ref<HTMLElement | null>(null);

</script>

<template>
  <!-- Desktoo, horizontal  -->
  <div ref="cardRef" class="hidden md:flex rounded bg-white/50 border-4 border-black w-full  items-center mb-2">
    <img :src="props.image !== '' ? props.image : 'https://placehold.co/400'"
         alt="Imagen Proyecto"
         class="aspect-square object-cover border-r-4 border-black"
    >
    <div class="info grid p-4 w-full">
      <h1 class="font-black text-4xl">{{ props.title }}</h1>
      <p class="text-2xl">{{ props.description }}</p>
      <div class="flex justify-end w-full gap-2">
        <a :href="link.link"
           v-for="link in props.links" target="_blank"
           class="flex items-center p-2 border-black border-4 gap-2 rounded-full"
           :class="link.bgColor ? `bg-${link.bgColor}` : 'bg-white'"
           style="box-shadow: .3em .3em 0 0 black"
        >
          <Icon size="2em" :name="link.icon"></Icon>
          <p class="font-bold italic text-2xl">{{ link.name }}</p>
        </a>
      </div>
    </div>
  </div>
  <!-- Mobile, vertical  -->
  <div class="md:hidden flex flex-col rounded bg-white/50 border-4 border-black w-full  items-center mb-2">
    <img :src="props.image !== '' ? props.image : 'https://placehold.co/400'"
         alt="Imagen Proyecto"
         class="aspect-square object-cover border-4 mt-2 border-black rounded-lg "
    >
    <div class="info grid p-4 w-full">
      <h1 class="font-black text-4xl">{{ props.title }}</h1>
      <p class="text-2xl">{{ props.description }}</p>
      <div class="flex justify-end w-full gap-2">
        <a :href="link.link"
           v-for="link in props.links" target="_blank"
           class="flex items-center p-2 border-black border-4 gap-2 rounded-full"
           :class="link.bgColor ? `bg-${link.bgColor}` : 'bg-white'"
           style="box-shadow: .3em .3em 0 0 black"
        >
          <Icon size="2em" :name="link.icon"></Icon>
          <p class="font-bold italic text-2xl">{{ link.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 15em;
}

a:hover {
  filter: drop-shadow(0 0 20px #0045FFFF);
  scale: 110%;
  transition: all .1s;
}
</style>