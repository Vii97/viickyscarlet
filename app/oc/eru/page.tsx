import { OCCard } from "@/app/components/OCCard"

export const oc = {
    title: "Eru",
    quote: "Aaaa eee... aguacate",
    img: "/bdo/eru.jpg",
    fullname: "Eru Y´ldùir",
    pronoums: "He/Him",
    bday: "1 de Marzo",
    race: "Elfo Luthragon",
    country: "Grana, Kamasylvia",
    combat: [
        "🏹 Tiene experiencia en combate (le guste o no). Nunca se protege con armaduras ni sabe luchar cuerpo a cuerpo, pero sí sabe hacer acrobacias y tiene muy buena puntería con su Gran Arco.",
        "Tenderá a ser pacífico, pero sus flechas son poderosas, valiéndose de energía como chispas y rayos que nacen de su cuerpo, incluso a veces brilla como una cálida luciérnaga."
    ],
    job: "Florista 🪻",
    personality: [
        "Su personalidad podría describirse como introvertido y sensible. Aunque a veces le cuesta hablar por inseguridad, por el cambio de idioma o simplemente porque no sabe qué decir, cuando lo hace su voz es bonita y melódica, sobre todo tendente a usar un volumen muy bajo.",
        "Suele alargar las vocales suenan a veces alargadas, se traba o directamente se bloquea, pero siempre va a ser emocional y sincero, incapaz de mentir, hablando desde el corazón.",
        "A pesar de ser de muy baja autoestima, valora mucho la lealtad y el defender aquello en lo que cree. Puede pecar de crédulo, en confiar en la gente, especialmente en sus conocidos y amigos.",
        "Es fan incondicional de los aguacates y de la naturaleza, como si su verdadero hogar siempre fuesen los bosques perdidos y las montañas solitarias."
    ],
    story: [
        "De padre luthragon y de madre ganelle, tras una infancia marcada por los entrenamientos con el arco, poca socialización y escaqueos a las montañas de Valtarra, Eru se independizó de su familia y empezó trabajando de camarero en Grana, pero fueron pocos años (dicen que fue porque se le quemó arroz en la cocina).",
        "Incómodo con la ciudad élfica, decidió irse de Kamasylvia, pasando muchos años viviendo en el bosque de Longifolia y en las montañas de Kalis. Ha trabajado de arquero en Calpheon, de mercenario para proteger carromatos y de guardia para la familia Leight.",
        "En general tiene un historial de trabajos temporales bastante grande, sin embargo, ha sido la excusa perfecta para viajar por el mundo, sobreviviendo a numerosas situaciones. Actualmente vive concierta chica pelirroja en Heidel, con su propia floristería en la cual por fin ha encontrado la estabilidad que buscaba."
    ],
    description: [
        "El elfo es de cabello largo y lacio, de un rubio oscuro y apagado que al sol adquiere un tono más claro y dorado. Sus ojos son de un intenso azul celeste, capaces de enfocar y ayudar en la precisión para apuntar.",
        "En efecto tiene orejas puntiagudas que en ocasiones se mueven solas como si tuvieran un tic o en momento en los que Eru se lleva una sorpresa o le llama la atención algo. Lleva dos piercings: el nostril de la nariz y un aro a un lado de su labio inferior. Es de piel pálida pero bien cuidada.",
        "Tiene la altura y la complexión que se puede esperar de un elfo: alto y esbelto, aunque es algo ancho de hombros y pectoral músculo debido a sus horas tensando la cuerda de su arco.",
        "Suele oler a hierbas, bosque, tierra mojada, flores silvestres... y a cerveza cuando pasa mucho tiempo en la taberna."
    ],
}


export default function Eru() {
  const relatedLinks = [
    { label: "Art", href: "/art/black-desert" },
    { label: "Virtual Photography", href: "/virtual-photography/black-desert/archer" }
  ]

  return <OCCard oc={oc} relatedLinks={relatedLinks} />
  
}