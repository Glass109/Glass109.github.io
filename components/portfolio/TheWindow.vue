<script setup>
import {ref} from "vue";
const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: 'bg-teal-100',
  },
  emoji: {
    type: String,
    default: '??',
  },
  title: {
    type: String,
    default: 'title',
  },
  delay: {
    type: Number,
    default: 0,
  },
});
const toggleMinimized = () => {
  isMinimized.value = !isMinimized.value;
};
const alertaNada = () => {
  alert('Este no hace nada wey nomames jajajajaj');
};
const isMinimized = ref(false);
</script>

<template>
  <div
      :class="`neobrutshadow ${color} rounded-xl border-4 border-black transition-all ${isMinimized ? 'minimized-card' : ''}`"
      :style="{ animation: `float 3s ease-in-out ${delay}ms infinite` }">
    <div class="text-xl p-2 flex items-center border-b-2 gap-2 border-black">
      <div class=" bg-gray-100 rounded-md border-2 border-black">{{ emoji }}</div>
      <div class="grow text-center font-black">{{ title }}</div>
      <!-- Botones de cierre de ventana      -->
      <div
          class="size-6 border-2 border-black rounded-md bg-yellow-200 hover:bg-yellow-400 hover:scale-110"
          @click="toggleMinimized"
      ></div>
      <div
          class="size-6 border-2 border-black rounded-md bg-green-200 hover:bg-green-400 hover:scale-110"
          @click="alertaNada"
      ></div>
      <div
          class="size-6 border-2 border-black rounded-md bg-red-200 hover:bg-red-400 hover:scale-110"
          @click="$emit('close', id)"
      ></div>
    </div>
    <Transition name="height-change">
      <div v-if="!isMinimized" class="p-2 font-mono overflow-clip">
        <slot/>
      </div>
    </Transition>
  </div>
</template>

<style>
.neobrutshadow {
  box-shadow: .5em .5em black;
  position: relative;
}

.neobrutshadow:hover {
  box-shadow: 1em 1em black;
  filter: brightness(110%);
  scale: 1.1;
  z-index: 1;
}

.minimized-card {
  filter: grayscale(30%) brightness(50%);
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

.highlighted {
  background: #ffff45;
  display: inline;

}

.height-change-enter-active, .height-change-leave-active {
  transition: max-height .5s ease-out;
}

.height-change-enter-from, .height-change-leave-to {
  max-height: 0;
}

.height-change-enter-to, .height-change-leave-from {
  max-height: 300px; /* Set this to a value greater than the actual height of the content */
}

.height-change-move {
  transition: all .5s ease;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
