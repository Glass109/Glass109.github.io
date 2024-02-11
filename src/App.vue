<script setup>
import TheWindow from "./components/TheWindow.vue";

const windows = [
  {
    emoji: '📷',
    title: '¡Foto!',
    color: 'bg-red-300',
    content: '<img src="/Espejo1.jpg" alt="Mi foto" >',
    delay: randomDelay()
  },
  {
    emoji: '👋🏻',
    title: 'Nombre',
    color: 'bg-teal-300',
    content: '<h1>Raúl Alejandro Dondé Pérez,<br>Estudiante para ingeniería en software</h1>',
    delay: randomDelay()
  },
  {
    emoji: '📱',
    title: 'Contacto',
    color: 'bg-blue-300',
    content:
        '<b>Correo: </b>' +
        '<a href="mailto:glass109@gmail.com">glass109@gmail.com</a>',
    delay: randomDelay()
  },
  {
    emoji: '🎓',
    title: 'Escuelas',
    color: 'bg-pink-300',
    content:
        '<b>Primaria:</b> Florinda Batista Espinola<br>' +
        '<b>Secundaria:</b> Eduardo Urzaiz Rodriguez<br>' +
        '<b>Preparatoria:</b> Centro de Estudios Tecnológicos ' +
        'industrial y de servicios No. 112 ' +
        'Ignacio María de Allende y Unzaga<br> ' +
        '<b>Universidad:</b> Universidad Tecnológica Metropolitana (En proceso)',
    delay: randomDelay()
  },
  {
    emoji: '👷🏻',
    title: 'Experiencia Laboral',
    color: 'bg-amber-300',
    content:
        '<b>2016 - 2020:</b> Recepcionista en el café GREEN ZONE<br>' +
        '<b>2021 - 2022:</b> Operador de máquinas controladas numéricamente por computadora en Andromie<br>' +
        '<b>2021 - 2022:</b> Pintor electroestático en Narvi <br>',
    delay: randomDelay()
  },
  {
    emoji: '📖',
    title: 'Competencias',
    color: 'bg-green-300',
    content: "INSERTAR HABILIDADES AQUÍ",
    delay: randomDelay(),
  },
  {
    emoji: '🌐',
    title: 'Idiomas',
    color: 'bg-purple-300',
    content:
        '<b>Español:</b> Nativo<br>' +
        '<b>Inglés:</b> Intermedio<br>',
    delay: randomDelay()
  }
]

function randomDelay() {
  return Math.random() * 3000;
}
</script>

<template>
  <div class="p-6 h-screen flex flex-col flex-wrap content-center justify-center gap-3">
    <!--Continene todas las cards-->
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="window in windows" :key="window.title">
      <TheWindow :color="window.color" :emoji="window.emoji" :title="window.title"
                 :delay="window.delay">
        <div v-html="window.content"></div>
      </TheWindow>
    </div>
  </div>
</template>

<style>

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
