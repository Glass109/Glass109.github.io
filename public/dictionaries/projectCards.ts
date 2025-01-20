export type ProjectCardProps = {
    title: string
    image?: string
    description: string
    links?: {
        name: string
        icon: string
        link: string
        bgColor?: string
    }[],
    reverse?: boolean
}
export const ProjectCardsDictionary: ProjectCardProps[] = [
    {
        title: 'Ultimate Tank Machine',
        description: 'Juego twin-stick shooter de tanques en 2D hecho Godot Engine 3.2 (C#)',
        image: '/ultimatetankmachine.png',
        links: [
            {
                name: 'Código Fuente',
                icon: 'memory:application-code',
                link: 'https://github.com/Glass109/UltimateTankMachineGODOT',
                bgColor: 'blue-300'
            },
            {
                name: 'Youtube',
                icon: 'memory:play',
                link: 'https://www.youtube.com/watch?v=OPv49kh5kD4',
                bgColor: 'red-300'
            }
        ]
    },

    {
        title: 'EduKT',
        description: 'Plataforma para la creación y asignación de flashcards para alumnos de nivel básico, hecho con React Native y FastAPI',
        image: '/edukt_screenshots.png',
        links: [
            {
                name: 'Código Fuente',
                icon: 'memory:application-code',
                link: 'https://github.com/Glass109/UltimateTankMachineGODOT',
                bgColor: 'purple-300'
            },
        ],
        reverse: true

    },

    {
        title: 'Calorias a la carta',
        description: 'Calculadora de calorias diarias y búsqueda de alimentos con su información nutricional, hecho con Vue',
        image: '/caloriasalacarta.png',
        links: [
            {
                name: 'Código Fuente',
                icon: 'memory:application-code',
                link: 'https://github.com/Glass109/UltimateTankMachineGODOT',
                bgColor: 'green-300'
            },
            {
                name: 'Demo',
                icon: 'memory:bug',
                link: 'https://testapisangel.onrender.com/',
                bgColor: 'orange-300'
            },
        ],
        reverse: true

    }
    ];