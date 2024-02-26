<script>
export default {
  props: {
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
    decorations: {
      type: Number,
      default: 3,
    },
    delay: {
      type: Number,
      default: 0,
    },
  }
}
</script>

<template>
  <div :class="`neobrutshadow ${color} rounded-xl border-4 border-black transition-all`"
       :style="{ animation: `float 3s ease-in-out ${delay}ms infinite` }">
    <div class="p-2 flex items-center border-b-2 gap-2 border-black">
      <div class="bg-white rounded-md border-2 border-black">{{ emoji }}</div>
      <div class="grow text-center font-black">{{ title }}</div>
      <div v-for="_ in decorations" class="w-5 h-5 border-2 border-black rounded-md bg-white"></div>
    </div>
    <div class="p-2 font-mono">
      <!--Aquí va el contenido de la ventana-->
      <slot/>
    </div>
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

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

.highlighted {
  background: #ffff45;
  display: inline;

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
