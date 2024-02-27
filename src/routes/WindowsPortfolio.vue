<script setup>
import { ref } from 'vue';
import TheWindow from "../components/TheWindow.vue";
import { windows as windowsData } from "../dictionaries/cards.js";

let initialWindows = [...windowsData]; // Save the initial state

const windows = ref(windowsData);

const removeWindow = (id) => {
  const index = windows.value.findIndex(window => window.id === id);
  if (index !== -1) {
    windows.value.splice(index, 1);
  }
};

const restart = () => {
  windows.value = [...initialWindows]; // Reset to initial state
};
</script>

<template>
  <TransitionGroup appear
                   class="subpixel-antialiased p-6 md:h-screen flex flex-col items-center lg:flex-wrap content-center lg:justify-center gap-6"
                   name="os"
                   tag="div">
    <div v-for="window in windows" :key="window.id" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <TheWindow :id="window.id" :color="window.color" :delay="window.delay" :emoji="window.emoji" :title="window.title"
                 @close="removeWindow">
        <div v-html="window.content"></div>
      </TheWindow>
    </div>
    <div v-if="windows.length === 0">
      <h1 class="text-4xl font-bold">Felicidades, no sé que esperabas</h1>
      <button class="border-2 border-black bg-pink-400 rounded p-2" @click="restart">Reiniciar</button>
    </div>
  </TransitionGroup>
</template>

<style scoped>
.os-enter-active {
  transition: all 2s ease;
}
.os-leave-active {
  transition: all .5s ease-in;
  position: absolute;

}

.os-enter-from{
  opacity: 0;
  transform: translateY(20em);
}
.os-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.os-enter-to, .os-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.os-move {
  transition: transform 1s ease;
}
</style>