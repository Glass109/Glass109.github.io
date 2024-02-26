<script setup>
import TheWindow from "../components/TheWindow.vue";

const languages = [
  'Python',
  'C#',
  'Java',
  'JavaScript',
  'HTML',
  'CSS',
  'SQL',
  'PHP',
  'Dart',
]
const frameworks = [
  '.NET',
  'Vue.js',
  'FastAPI',
  'Flutter',
  'Node.js',
  'Express',
  'Laravel',
  'Godot',
  'TailwindCSS',
  'Bootstrap',
]
const habilidades = [
  'Trabajo en equipo',
  'Comunicación',
  'Resolución de problemas',
  'Pensamiento crítico',
  'Creatividad',
  'Adaptabilidad',
  'Empatía',
  'Gestión del tiempo',
  'Liderazgo',
  'Toma de decisiones',
]
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
    content: '<h1 class="highlighted"> Raúl Alejandro Dondé Pérez,<br>Estudiante para ingeniería en software</h1>',
    delay: randomDelay()
  },
  {
    emoji: '📱',
    title: 'Contacto',
    color: 'bg-blue-300',
    content: '<b>Correo ✉️: </b><a href="mailto:glas109@gmail.com">Glas109@gmail.com</a><br><b>Teléfono 📞: </b><a href="tel:+52 9994247134">+52 999-424-7134</a><br><b>LinkedIn 💻: </b><a href="https://www.linkedin.com/in/raul-dond%C3%A9-109787235/">Raul Dondé</a>',
    delay: randomDelay()
  },
  {
    emoji: '🎓',
    title: 'Escuelas',
    color: 'bg-pink-300',
    content: '<b>Primaria:</b> Florinda Batista Espinola<br><b>Secundaria:</b> Eduardo Urzaiz Rodriguez<br><b>Preparatoria:</b> Centro de Estudios Tecnológicos industrial y de servicios No. 112 Ignacio María de Allende y Unzaga<br> <span class="highlighted"><b>Universidad:</b> Universidad Tecnológica Metropolitana (En proceso)</span>',
    delay: randomDelay()
  },
  {
    emoji: '👷🏻',
    title: 'Experiencia Laboral',
    color: 'bg-amber-300',
    content: '<b>2016 - 2020:</b> Recepcionista en el café GREEN ZONE<br><b>2021 - 2022:</b> Operador de máquinas controladas numéricamente por computadora en Andromie<br><b>2021 - 2022:</b> Pintor electroestático en Narvi <br>',
    delay: randomDelay()
  },
  {
    emoji: '📖',
    title: 'Competencias Técnicas',
    color: 'bg-green-300',
    content: `<b>Lenguajes:</b> ${languages.join(', ')}<br><b>Frameworks:</b> ${frameworks.join(', ')}`,
    delay: randomDelay()
  },
  {
    emoji: '🗣️',
    title: 'Habilidades Suaves ',
    color: 'bg-gray-300',
    // ul de habilidades
    content: `<ul>${habilidades.map(habilidad => `<li>${habilidad}</li>`).join('')}</ul>`,
    delay: randomDelay()
  },
  {
    emoji: '🌐',
    title: 'Idiomas',
    color: 'bg-purple-300',
    content: '<b>Español:</b> Nativo<br><b>Inglés:</b> Fluído<br><b>Babosadas:</b> Experto',
    delay: randomDelay()
  },

]

function randomDelay() {
  return Math.random() * 3000;
}
</script>

<template>
  <div class="p-6 md:h-screen flex flex-col items-center lg:flex-wrap content-center lg:justify-center gap-6">
    <div v-for="window in windows" :key="window.title" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <TheWindow :color="window.color" :delay="window.delay" :emoji="window.emoji" :title="window.title">
        <div v-html="window.content"></div>
      </TheWindow>
    </div>
  </div>
</template>
