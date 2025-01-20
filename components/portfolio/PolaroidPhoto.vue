<script setup lang="ts">

const props = defineProps<{
  src: string;
  title: string;
  description: string;
}>();
const isFlipped = ref<boolean>(false);
const handleCornerClick = () => {
  isFlipped.value = !isFlipped.value;
}
</script>

<template>
  <!--FRONT -->
  <div class="relative flex flex-col bg-[#eeeeee] p-8 overflow-hidden aspect-[3.5/4.2] w-1/2 border-2 border-gray-300">
    <template v-if="!isFlipped">
      <img class="shadow-inner aspect-square object-cover" :src="props.src" alt="">
      <h1 class="font-bold text-6xl text-center">{{ props.title }}</h1>
    </template>
    <!--BACK -->
    <template v-else>
      <p class="text-2xl">{{ props.description }}</p>
    </template>
    <div
        class="z-10 bg-gradient-to-br from-70% from-transparent to-gray-400 absolute bottom-0 right-0 size-1/6 border-black cursor-pointer"
        @click="handleCornerClick"></div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Caveat', cursive;
}

</style>