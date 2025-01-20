const languages = ['Python', 'C#', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL', '<mark>PHP</mark>', 'Dart',]
const frameworks = ['.NET', '<mark>Vue.js</mark>', 'FastAPI', 'Flutter', 'Node.js', 'Express', 'Laravel', 'Godot', 'TailwindCSS', 'Bootstrap',]
const habilidades = ['Trabajo en equipo', 'Comunicación', 'Resolución de problemas', 'Pensamiento crítico', 'Creatividad', 'Adaptabilidad', 'Empatía', 'Gestión del tiempo', 'Liderazgo', 'Toma de decisiones',]

export const windows = [{
    id: 0,
    emoji: '📷',
    title: '¡Foto!',
    color: 'bg-red-300',
    content: '<img src="/Espejo1.jpg" alt="Mi foto">',
    delay: randomDelay()
}, {
    id: 1,
    emoji: '👋🏻',
    title: 'Nombre',
    color: 'bg-teal-300',
    content: '<mark> Raúl Alejandro Dondé Pérez,<br>Estudiante para ingeniería en software</mark>',
    delay: randomDelay()
}, {
    id: 2,
    emoji: '📱',
    title: 'Contacto',
    color: 'bg-blue-300',
    content: `
    <div class="flex flex-col gap-1 items-center font-extrabold font-sans">
    <div class="flex gap-1 w-full">
        <a class="grow bg-green-200 rounded p-2 hover:scale-105 hover:saturate-200 transition-all" href="tel: +52 9994247134" >📞 Whatsapp</a>
        <a class="grow bg-white rounded p-2 hover:scale-105 hover:saturate-200 transition-all" href="mailto: Glas109@gmail.com" >📧 Correo</a>
    </div>
    <div class="flex gap-1 w-full">
        <a class="grow bg-gray-500 rounded p-2 hover:scale-105 hover:saturate-200 transition-all text-white" href="https://github.com/Glass109" >🐙 Github</a>
        <a class="grow bg-red-200 rounded p-2 hover:scale-105 hover:saturate-200 transition-all" href="https://www.youtube.com/@glass1098" >▶️ Youtube</a>
    </div>
    
    </div>    `,
    delay: randomDelay()
}, {
    id: 3,
    emoji: '🎓',
    title: 'Escuelas',
    color: 'bg-pink-300',
    content: '<b>Primaria:</b> Florinda Batista Espinola<br><b>Secundaria:</b> Eduardo Urzaiz Rodriguez<br><b>Preparatoria:</b> Centro de Estudios Tecnológicos industrial y de servicios No. 112 Ignacio María de Allende y Unzaga<br> <mark><b>Universidad:</b> Universidad Tecnológica Metropolitana (En proceso)</mark>',
    delay: randomDelay()
}, {
    id: 4,
    emoji: '👷🏻',
    title: 'Experiencia Laboral',
    color: 'bg-amber-300',
    content: '<b>2016 - 2020:</b> Recepcionista en el café GREEN ZONE<br><b>2021 - 2022:</b> Operador de máquinas controladas numéricamente por computadora en Andromie<br><b>2021 - 2022:</b> Pintor electroestático en Narvi <br>',
    delay: randomDelay()
}, {
    id: 5,
    emoji: '📖',
    title: 'Competencias Técnicas',
    color: 'bg-green-300',
    content: `<b>Lenguajes:</b> ${languages.join(', ')}<br><b>Frameworks:</b> ${frameworks.join(', ')}`,
    delay: randomDelay()
}, {
    id: 6,
    emoji: '🗣️', title: 'Habilidades Suaves ', color: 'bg-gray-300', // ul de habilidades
    content: `<ul>${habilidades.map(habilidad => `<li>${habilidad}</li>`).join('')}</ul>`, delay: randomDelay()
}, {
    id: 7,
    emoji: '🕹️',
    title: 'Proyectos',
    color: 'bg-blue-300',
    content: `
<a target="_blank"  href="https://youtu.be/OPv49kh5kD4?si=SdjDt7xmpUPt6N_1"><b>2023:</b> Creación de un TwinStick shooter en Godot Engine llamado Ultimate Tank Machine (UTM)</a><a class="text-red-500" target="_blank"  href="https://github.com/Glass109/UltimateTankMachineGODOT"> [Codigo Fuente]</a> <br>
<b>2024:</b> Desarrollo de una aplicación Web en Laravel para un servicio de RCM<br>
<b>2024:</b> Fundador del proyecto EduKT que busca incentivar el estudio en casa para niños de primaria y secundaria<br>`,
    delay: randomDelay()
}, {
    id: 8,
    emoji: '🌐',
    title: 'Idiomas',
    color: 'bg-purple-300',
    content: '<b>Español:</b> Nativo<br><mark><b>Inglés: </b>Nivel C1 (Certificación Oxford TCC)<br></mark>',
    delay: randomDelay()
}]

function randomDelay() {
    return Math.random() * 3000;
}