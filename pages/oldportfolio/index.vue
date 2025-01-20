<script setup>
import {onMounted, ref, watch} from 'vue';
import TheWindow from "~/components/portfolio/TheWindow.vue";
import {windows as windowsData} from "~/public/dictionaries/cards.js";

let initialWindows = [...windowsData]; // Save the initial state

const windows = ref(windowsData);
const gradientDiv = ref(null);
const container = ref(null);
const scrollPosition = ref(0);
const canScroll = ref(true);
const removeWindow = (id) => {
  const index = windows.value.findIndex(window => window.id === id);
  if (index !== -1) {
    windows.value.splice(index, 1);
  }
};

const restart = () => {
  windows.value = [...initialWindows]; // Reset to initial state
};
onMounted(() => {
  container.value = document.querySelector('#cardcontainer');
  gradientDiv.value = document.querySelector('#gradientDiv');
  container.value.addEventListener('scroll', () => {
    scrollPosition.value = container.value.scrollLeft; // Update scroll position when user scrolls
  });
  checkScroll();
  window.addEventListener('resize', checkScroll);
})
const checkScroll = async () => {
  canScroll.value = container.value.scrollWidth > container.value.clientWidth;
}

watch(scrollPosition, () => { // Watch scrollPosition instead of container.value.scrollLeft
  if (container.value) {
    const scrollPercentage = scrollPosition.value / (container.value.scrollWidth - container.value.clientWidth);
    gradientDiv.value.style.opacity = 1 - scrollPercentage;
  }
});
</script>

<template>
  <div v-if="canScroll"
       class="absolute inset-0 pointer-events-none bg-gradient-to-l from-gray-800 via-transparent via-20% z-10"
       id="gradientDiv"/>

  <TransitionGroup appear
                   class="colorful p-6 overflow-auto h-screen flex flex-col justify-evenly content-evenly lg:flex-wrap lg:content-start gap-6"
                   name="os"
                   id="cardcontainer"
                   tag="div">
    <div v-for="window in windows" :key="window.id" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <TheWindow class="max-w-screen-sm" :id="window.id" :color="window.color" :delay="window.delay"
                 :emoji="window.emoji" :title="window.title"
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

.os-enter-from {
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

@media screen and (max-width: 600px) {
  .p-6 {
    flex-direction: column;
  }
}

.colorful {
  height: 100vh;
  margin: 0;
  background: linear-gradient(to right, #ffb3ba, #ffdfba, #ffffba, #baffc9, #bae1ff) scroll;
  background-size: 100% 100%;
}

body {
  cursor: url("/cursor.cur"), auto;
}

body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: background-color 0.3s ease;
  pointer-events: none;
  z-index: 9999;
}

mark {
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
  animation: 1.5s highlight 1.5s 1 normal forwards;
  background-color: transparent;
  background: linear-gradient(90deg, #ffff45 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

a {
  color: #023100;
  text-decoration: underline;
}

@-webkit-keyframes highlight {
  to {
    background-position: 0 0;
  }
}

@keyframes highlight {
  to {
    background-position: 0 0;
  }
}
</style>
