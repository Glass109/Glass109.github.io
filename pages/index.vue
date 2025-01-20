<script setup lang="ts">
import ProjectCard from "~/components/portfolio/ProjectCard.vue";
import {ProjectCardsDictionary} from "public/dictionaries/projectCards";
import WindowCard from "~/components/portfolio/WindowCard.vue";

const mouse = useMouse()
const contactoDialog = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('mouseenter', playHoverSound);
    });
  })
});
function showAlert() {
  alert('Proximamente!');
}
function playHoverSound() {
  const hoverSound = document.getElementById('hover_sound') as HTMLAudioElement;
  hoverSound.currentTime = 0;
  hoverSound.play();
}
</script>

<template>
  <audio id="hover_sound" src="/hover.wav"></audio>
  <header class="sticky top-0 z-20 hidden md:flex border-b-4 border-black bg-[#FF20B9] justify-evenly py-1">
    <nuxt-link to="/" class="text-4xl font-bold text-white italic">Inicio</nuxt-link>
    <nuxt-link to="/" class="text-4xl font-bold text-white italic">proyectos</nuxt-link>
    <nuxt-link to="/" class="text-4xl font-bold text-white italic">github</nuxt-link>
    <nuxt-link @click="contactoDialog.showModal()"
               class="text-4xl font-bold text-white italic">contacto
    </nuxt-link>
    <nuxt-link to="/oldportfolio" class="text-4xl font-bold text-white italic">old_portfolio
    </nuxt-link>
  </header>
  <main class="bg-[#FF8ACD] p-0 lg:px-16">

    <!-- 2nd part    -->
    <section class="flex sm:flex-col md:flex-row justify-evenly items-center">
      <div class="mt-16">
        <h1 class="text-9xl text-black">RAÚL</h1>
        <h1 class="text-9xl text-black">DONDÉ</h1>
        <h3 class="text-6xl font-light">desarrollador web</h3>
      </div>
      <div class="absolute w-screen">
        <div class="absolute left-0 -top-20 w-full h-16 bg-[#00DAD1] mix-blend-difference"></div>
        <div class="absolute left-0 top-12 w-full h-16 bg-[#32DC00] mix-blend-difference"></div>
      </div>
      <!-- Pictures  -->
      <div class="mix-blend-luminosity relative">
        <img class="object-contain" src="/Foto.png" alt="Mi foto">
        <img class="absolute top-16 drop-shadow-lg shadow-black animate-slow-spin" src="/star.svg" alt="">
      </div>
    </section>
    <section class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
             id="presentation">
      <div class="flex flex-col">
        <div class="flex">
          <div class="w-1/2 font-extrabold">
            <p class="text-4xl">Hola 👋,</p>
            <p class="text-4xl">mi nombre es <i class="line-through text-gray-500">Raúl </i>
              <b class="bg-yellow-200 inline-block animate-bounce">Dondé</b></p>
            <p class="text-4xl">¡Bienvenido a mi portafolio!</p>
            <div class="hidden lg:block">
              <img src="/yo.jpeg" alt="Yo mero">
              <p class="text-center w-full font-bold italic animate-pulse">Yo mero</p>
            </div>
          </div>
          <div class="w-full p-4">
            <h2 class="text-4xl font-extrabold">Suelo trabajar / he trabajado con las siguientes tecnologías</h2>
            <div class="flex flex-wrap justify-evenly">
              <div class="grid place-content-center text-center p-4">
                <a href="https://nuxt.com/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:nuxtjs-light"></Icon>
                </a>
                <b>Nuxt.js</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://laravel.com/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:laravel-light"></Icon>
                </a>
                <b>Laravel</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://nextjs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:nextjs-light"></Icon>
                </a>
                <b>Next</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://nextjs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:svelte"></Icon>
                </a>
                <b>SvelteKit</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:gcp-light"></Icon>
                </a>
                <b>Google Cloud</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:fastapi"></Icon>
                </a>
                <b>FASTAPI</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:github-light"></Icon>
                </a>
                <b>Github</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:docker"></Icon>
                </a>
                <b>Docker</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:godot-light"></Icon>
                </a>
                <b>Godot</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:blender-light"></Icon>
                </a>
                <b>Blender</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:linux-light"></Icon>
                </a>
                <b>GNU/Linux</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:tailwindcss-light"></Icon>
                </a>
                <b>TailwindCSS</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:mongodb"></Icon>
                </a>
                <b>MongoDB</b>
              </div>
              <div class="grid place-content-center text-center p-4">
                <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                  <Icon size="8em" name="skill-icons:supabase-light"></Icon>
                </a>
                <b>Supabase</b>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-4xl font-extrabold">Pero sigo aprendiendo cosas nuevas cada día</div>
          <Vue3Marquee>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:rust"></Icon>
              </a>
              <b>Rust</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:java-light"></Icon>
              </a>
              <b>Java</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:aws-light"></Icon>
              </a>
              <b>AWS</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:cloudflare-light"></Icon>
              </a>
              <b>Cloudflare services</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:kotlin-light"></Icon>
              </a>
              <b>Kotlin</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:swift"></Icon>
              </a>
              <b>Switft</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:flutter-light"></Icon>
              </a>
              <b>Flutter</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:arduino"></Icon>
              </a>
              <b>Arduino</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:githubactions-light"></Icon>
              </a>
              <b>Github Actions</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:kafka"></Icon>
              </a>
              <b>Kafka</b>
            </div>
            <div class="grid place-content-center text-center p-4">
              <a href="https://vuejs.org/" class="hover:z-50" target="_blank">
                <Icon size="8em" name="skill-icons:redis-light"></Icon>
              </a>
              <b>Redis</b>
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </section>
    <!-- Proyectos    -->
    <section class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
             style="box-shadow: 8px 8px 0 0 black">
      <h2 class="text-6xl text-black font-black text-center underline italic mb-4">Proyectos</h2>
      <ProjectCard v-for="pc in ProjectCardsDictionary" :title="pc.title" :description="pc.description"
                   :image="pc.image" :links="pc.links"/>
    </section>

    <section id="habilidades" class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4">
      <div class="flex gap-4 w-full justify-around">
        <WindowCard title="Habilidades suaves" color="bg-yellow-300">
          <ul style="list-style-type: disc">
            <li>Trabajo en equipo</li>
            <li>Comunicación</li>
            <li>Resolución de problemas</li>
            <li>Pensamiento crítico</li>
            <li>Creatividad</li>
            <li>Adaptabilidad</li>
            <li>Empatía</li>
            <li>Gestión del tiempo</li>
            <li>Liderazgo</li>
            <li>Toma de decisiones</li>
          </ul>
        </WindowCard>
        <WindowCard title="Historial laboral" emoji="⚒️" color="bg-orange-300">
          <div style="list-style-type: disc;" class="">
            <p>2016 - 2020: Recepcionista en el café GREEN ZONE</p>
            <p>2021 - 2022: Operador de máquinas controladas numéricamente por computadora en Andromie</p>
            <p>2021 - 2022: Pintor electroestático en Narvi</p>
            <p>2024: Desarrollador frontend en Digimob Tech</p>
          </div>
        </WindowCard>
        <WindowCard title="Idiomas" emoji="🌍" color="bg-blue-300">
          <div>
            <p>Español nativo</p>
            <p>Certificado Oxford Inglés C1</p>
            <p>Japonés básico (Pendiente a evaluación)</p>
          </div>
        </WindowCard>

      </div>

    </section>

    <!-- Extras (Lugares variados)   -->
    <section>
      <div :style="{ top: `${mouse.y.value}px`, left: `${mouse.x.value}px` }" class="mouse-circle"></div>
      <dialog class="p-4 text-3xl open:flex justify-center flex-col border-4 border-black "
              style="box-shadow: .5em .5em 0 0 black" ref="contactoDialog">
        <b>📱 Teléfono:</b>
        <a href="tel:+529994247134">+52 999 424 7134</a>
        <small class="text-xs text-green-800 ">Whatsapp preferente</small>
        <hr>
        <b>📧 Correo:</b>
        <a href="mailto:glas109@gmail.com">Glas109@gmail.com</a>
        <hr>
        <button @click="() => contactoDialog.close()" class="border-4 border-black mt-2 p-1 font-bold text-3xl bg-red-300 mx-auto hover:bg-red-100 hover:scale-110
          transition-all">
          Cerrar
        </button>
      </dialog>
      <a
          class="p-2 rounded-full fixed right-4 bottom-8 flex items-center justify-center border-4 border-black gap-2 bg-white"
          @click="showAlert"
      >
        <Icon size="2em" name="memory:message-text"></Icon>
        <p class="font-bold italic text-4xl hidden md:block">Buzón</p>
      </a>
      <footer class="z-50 w-full fixed left-0 bottom-0 border-black border-t-4 bg-[#FF20B9]">
        <Vue3Marquee>
          <p>Esta página fué desarrollada con 3 Litros de Coca-Cola sin azucar en la sangre</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>Este sitio no es apto para personas con alergia a los gatos (Dondé incluído)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>Raúl Dondé no tiene ninguna relación con la Galletera Yucateca "Dondé"</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>Este sitio no usa cookies, pero si quieres una galleta, pídela en la sección de contacto</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>Nos reservamos los derechos de venderle tu dirección IP al gobierno de Albania</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>No me hago responsable del daño que puede producir los colores de este sitio web</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </Vue3Marquee>
      </footer>
    </section>
  </main>
</template>

<style scoped>
* {
  font-family: Jost, sans-serif;
  user-select: none;
  cursor: none;
  overflow-x: clip;
}

@keyframes slow-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-slow-spin {
  animation: slow-spin 10s linear infinite;
}

a:hover {
  filter: drop-shadow(0 0 20px #0045FFFF);
  scale: 110%;
  transition: all .1s;
}

html {
  width: 100vw;
}

dialog[open] {
  animation: comedown 1s forwards;
  position: absolute;
}

dialog > * {
  user-select: all;
}

@keyframes comedown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
}

.mouse-circle {
  position: absolute;
  width: 5em;
  height: 5em;
  translate: -50% -50%;
  border-radius: 50%;
  background-color: white;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 1000;
  border: black 8px solid;
}
</style>