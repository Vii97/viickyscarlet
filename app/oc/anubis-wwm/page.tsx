import { OCCard } from "@/app/components/OCCard"


export const oc = {
    title: "Anubis",
    quote: "Lo mío es viajar por el jianghu, recorrer el mundo, cazar, ir de tejado en tejado, marcarme algún baile de vez en cuando y beber un buen vino. Vivir en libertad.",
    img: "/bdo/anubis-wwm.jpg",
    fullname: "Anubis 月",
    pronoums: "He/Him",
    bday: "20 de Noviembre",
    race: "Bànchái",
    country: "Hexi",
    combat: [
        "🗡️ El jianghu es demasiado peligroso como para no ir bien preparado. Se quedó con la espada de su madre, la cual le defiende de los peligros y duelos en los que se mete.",
        "Aunque, a decir verdad, tiene un talento natural para el arco, que suele reservar para la caza, así como sus dagas y cuchillos, pero más de una vez le ha salvado la vida ¡literalmente!",
        "Por último, completa su arsenal con algo más: un dardo unido a una cadena, que lo usa para colgarse e impulsarse por encima de los tejados o de los árboles."
    ],
    job: "Cazador, Flor de Terciopelo (bailarín)",
    personality: [
        "Anubis tiende a ser sonriente y alegre a pesar de ser un viajero solitario. Es un poco un trasto, se mete en bastantes líos él solo.",
        "Pasa de ser extremadamente expresivo, incluso teatrero, a ocultar cosas y bloquearse en segundos, como quien pasase de ser extrovertido a ponerse tímido enseguida. No tiene modales finos, típico de la gente de los barrios bajos.",
        "Tiene una extraña forma de actuar 'como un perro' a veces. Cuando alza la voz, parece ladrar. Cuando se enfurruña, gruñe. Cuando le pone ojitos a alguien, le sale miradita de puppy eyes."
    ],
    story: [
        "Nació en las lejanas tierras de Hexi, en el árido desierto del Paso de Jade. Viajaba entre dunas con su madre cazadora, aprendiendo y controlando sus habilidades de mediodemonio chacal.",
        "Por desgracia, su madre falleció prematuramente y decidió salir del desierto en busca de su padre, quien en teoría era de la actual capital del país: Kaifeng. Al llegar, no lo encontró, quedándose a vivir en el barrio más pobre de la ciudad entre personas marginadas o apartadas de la sociedad.",
        "La convivencia fue dura y le marcó el alma y el cuerpo, pero entonces la secta de Sombra de Terciopelo le ofreció sustento y un trabajo a cambio de danzas y los rumores que él podría escuchar en las calles. Aceptó. Aprendió a bailar, a hablar con más suavidad, a tratar con la gente… Aprendió sobre la existencia del amor y el cariño, de que quizá él podría rehacer su vida.",
        "Comenzó su aventura por el jianghu viajando por las regiones, incluido su vuelta al desierto, y sus vueltas a Kaifeng siguieron entre pequeños hurtos y ladinas palabras para Ella, de los Nueve Caminos Mortales.",
        "Necesitó alejarse más, necesitaba redimirse de su pasado difícil volviendo a las acampadas al raso en las frías noches de invierno y la caza de animales por los bosques de bambú para sacar carne y piel a cambio de un poco de dinero. Y así tirar hacia delante, aunque sea en soledad."
    ],
    description: [
        "Lo primero que uno se fija en Anubis es en su tono de piel, moreno típico de la gente del desierto. Por sus rasgos faciales algo chinos parece ser mestizo. Destacan también sus ojos dorados que a veces parecen brillar, poco usuales, coronados por densas y largas pestañas.",
        "Una alargada cicatriz de hace ya varios años le cruza la mejilla izquierda dispuesta a quedarse para toda su vida. Al abrir la boca se le pueden ver los colmillos algo más pronunciados de lo normal. A pesar de estar en la edad, no tiene un pelo de barba ni bigote.",
        "Es de complexión delgada pero se ve atlético. Siempre lleva un pendiente de bronce con forma de aro en una oreja. Su pelo es negro azabache, suele estar recogido a media coleta.",
        "Su aroma no suele pasar desapercibido. Es cálido, especiado, y ¿como un perrito? Viaja con un arco, una espada y una cadena que parece un dardo, además de dagas y cuchillos bajo su capa. Demasiadas armas para alguien que no parece un guerrero.",
        "Está perdiendo el acento de su tierra natal por el neutral de la capital. Suele vestir con ropas humildes."
    ],
}


export default function AnubisWWM() {
  const relatedLinks = [
    { label: "Art", href: "/art/otros" },
    { label: "Virtual Photography", href: "/virtual-photography/where-winds-meet" }
  ]

  return <OCCard oc={oc} relatedLinks={relatedLinks} />
}