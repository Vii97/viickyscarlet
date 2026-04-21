import { OCCard } from "@/app/components/OCCard"

export const oc = {
    title: "Anubis",
    quote: "No soy un ladrón. Solo pido prestado~",
    img: "/bdo/anubis.jpg",
    fullname: "Anubis Arena",
    pronoums: "He/Him",
    bday: "20 de Agosto",
    race: "Humano Semichacal",
    country: "Ciudad de Valencia, Valencia",
    combat: [
        "🗡️ Si liarse a puñetazos en las calles de la ciudad del desierto lo llamas saber combatir… Nunca ha entrenado para pelear, hace lo primero que se le ocurre, pero es ágil (sobre todo esquiva MUY bien los golpes a la cara).",
        "Desde hace unos años lleva con él un shamsir que tiene el poder de invocar ráfagas de aire y tornados. No está afilado. No lo sabe usar. Lo más seguro es que él salga volando por los aires.",
        "En las noches de Luna Llena le crecen las uñas y los colmillos, y le sale una larga cola y orejas de chacal negro. La temperatura de su cuerpo aumenta y le aumenta la velocidad y la fuerza, pudiendo pelear usando las garras."
    ],
    job: "Ladrón?",
    personality: [
        "Anubis es extrovertido y sociable. Es un teatrero de enorme sonrisa, exagerando sus gestos para expresarse mucho más, incluso de forma jocosa. Aunque sea un trasto muy alegre, a veces sí se pone a gruñir cuando algo de enfada.",
        "Esa forma explosiva de expresarse termina desahogándola a través de pintadas en paredes o rocas, o bailando danza del vientre. Su impulsividad se confunde a veces con la valentía, propenso a meterse en problemas, pero siempre dispuesto a echar una mano, incluso cuando no se fía de alguien del todo y juzga con la mirada.",
        "Tiende a ser supersticioso, escuchador de historias religiosas relacionadas con Aal o antiguas, sucesos paranormales u oscuras anécdotas... Esto se hace notar más por su interés en el arte y la historia antigua del desierto, que a pesar de no haber ido a la escuela nunca, sabe bastante de esas materias tan concretas.",
        "También deja de ser tan atrevido con temas relacionados con el amor, mostrándose inseguro, como si juntarse con él fuese una mala idea. …Ah, si te metes con su madre, estás muerto."
    ],
    story: [
        "Creció entre los duros espejismos de los barrios bajos de Valencia, donde hizo de la picaresca su forma de vida hasta acabar teniendo carteles de 'Se busca' con su cara por el bazar (con una nariz mal dibujada, todo hay que decir). Sus crímenes no pasan del hurto, allanamiento o desobediencia, por lo que era usual verle correr perseguido por la guardia dedicándoles una peineta.",
        "Cuando cumplió los 18 años decidió emprender un viaje a las tierras más allá de Mediah para buscar a su padre, un arqueólogo noble de Calpheon del cual solo se llevó el shamsir de filo oscuro. Desde entonces empezaron los problemas con la Luna Llena, momento en el que se transforma y se porta como un animal contenido.",
        "Tras su aventura por Edania, la tierra de los demonios, descubrió que aquello era herencia de un pasado remoto heredado de su madre, la cual descendía de una tribu nómada del desierto que acabó desapareciendo por el aalismo. Ahora vive en libertad viajando y buscando la forma de salir adelante a través de la aventura."
    ],
    description: [
        "Su oscura melena azabache le llega hasta los hombros, algo desaliñada y usualmente recogida en media coleta. Sus ojos son color ámbar rodeados por densas pestañas, como si se hubiera pintado con khol de forma natural, quizá por su linaje tribal.",
        "Sobre su cabeza siempre lleva un colgante de cadenas con amuletos y sus orejas están llenas de piercings. Sus colmillos son sutilmente algo más pronunciados y tiene una muela partida. Es de estatura media-alta para occidente, aunque en Valencia se le considera algo bajito.",
        "Es moreno y tiene cicatrices de peleas callejeras, destacando un corte que le cruza la mejilla izquierda. Es delgado y atlético por sus horas corriendo y saltando. Tiene tatuajes en color ocre de jeroglíficos antiguos recorriendo su espalda.",
        "Hay quien dice que huele a perro... hablemos con propiedad: ¡chacal! Suele llevar su característica ropa de lino ligera y cómoda, enseñando el ombligo."
    ],
}

export default function Anubis() {
  const relatedLinks = [
    { label: "Art", href: "/art/black-desert" },
    { label: "Virtual Photography", href: "/virtual-photography/black-desert/lahn" }
  ]

  return <OCCard oc={oc} relatedLinks={relatedLinks} />
}