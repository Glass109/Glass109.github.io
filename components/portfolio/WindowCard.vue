<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: 'title',
  },
  emoji: {
    type: String,
    default: '🤡',
  },
  color: {
    type: String,
    default: 'bg-gray-200',
  },
});
</script>
<template>
  <!--Completo  -->
  <div class="border-4 border-black transition-all overflow-clip">
    <!-- Barra de titulo -->
    <div class="text-xl p-2 flex items-center border-b-2 gap-2 border-black" :class=[color]>
      <div class="animate-bounce rounded-full border-2 border-black">{{emoji}}</div>
      <div class="grow text-center font-black">{{ title }}</div>
      <!-- Botones de cierre de ventana      -->
      <div
          class="aspect-square size-6 border-2 border-black rounded-full bg-yellow-200 hover:bg-yellow-400 hover:scale-110"
      ></div>
      <div
          class="aspect-square size-6 border-2 border-black rounded-full bg-green-200 hover:bg-green-400 hover:scale-110"
      ></div>
      <div
          class="aspect-square size-6 border-2 border-black rounded-full bg-red-200 hover:bg-red-400 hover:scale-110"
      ></div>
    </div>
    <!-- Contenido de la ventana -->
    <div class="p-2 bg-gray-50 h-full">
      <slot/>
    </div>
  </div>
</template>

