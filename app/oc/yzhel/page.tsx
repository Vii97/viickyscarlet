import { OCCard } from "@/app/components/OCCard"

export const oc = {
    title: "Yzhel",
    quote: "Incluso aquellos que tienen las alas rotas pueden sentir la fuerza del viento",
    img: "/bdo/yzhel.jpg",
    fullname: "Yzhel Rinne",
    pronoums: "He/Him",
    bday: "16 de Febrero",
    race: "Humano con Quirk",
    country: "Finlandia",
    combat: [
        "Escucha del viento (Tuulen Kuuntelua). El aire nos ha acompañado toda la vida. En la familia de Yzhel, generaciones enteras han aprendido a escuchar los sonidos que trae el viento, como si este susurrara secretos del mundo. Esta leyenda familiar se mantuvo viva incluso tras la aparición de los quirks, y con el nacimiento de Yzhel, el don se manifestó de forma clara: su quirk le permite comprender y manipular el viento.",
        "Por supuesto le sería imposible crear huracanes catastróficos. El estudiante de Bellas Artes no podría levantar objetos tan pesados. Desde niño ha vivido en sintonía con esa fuerza invisible, entrenando su oído y su alma para comprenderla. Gracias a esta conexión, es capaz de modificar, intensificar o calmar las corrientes con un simple gesto o un susurro.",
        "Sin embargo, el viento tiene voluntad propia. Es una fuerza libre con personalidad y memoria, y solo responde a quienes lo entienden. Además, cuando utiliza su quirk con gran intensidad durante la noche, tatuajes de color cyan surgen por su cuerpo con motivos nórdicos. Su sudadera, un regalo de su tío, reacciona también revelando símbolos misteriosos."
    ],
    job: "Estudiante, Artista independiente",
    personality: [
        "Yzhel aún posee un sentido de la justicia bastante fuerte. No puede evitar tener esa vena de héroe para ayudar a quien lo necesita. El de cabello plateado es algo introvertido, pero como buen artista, puede tener conversaciones profundas e intensas.",
        "Su sensibilidad se manifiesta a través del arte, reflejo de una persona emocional. Es muy bueno escuchando y siendo empático. Aunque tiende a la soledad por su crianza en las montañas, no es antisocial; le gusta el movimiento de la ciudad y las oportunidades del mundo moderno."
    ],
    story: [
        "La familia de Yzhel siempre fue tradicional, en las montañas de Finlandia. A edad temprana se fue con su tío a Helsinki a estudiar. En el instituto se le consideraba un 'niño salvaje' porque se defendía de quienes se pasaban de la raya con él.",
        "Un trágico día hubo un atraco donde su tío falleció como rehén. ¿Y quién puede considerarse héroe si no puede proteger a sus seres queridos? Fue algo duro, por lo que decidió aprovechar un Erasmus a Japón para estudiar Artes y evadirse.",
        "Japón es caótico y a veces parece sacado de un shōnen. Aunque quiere centrarse en sus estudios, en cuanto ve una injusticia se pone la capucha y decide echar una mano."
    ],
    description: [
        "Yzhel tiene el cabello plateado y largo a capas, decorado con trenzas y plumas de águila. Sus ojos son azul cielo, tirando a gris tormentoso. Su piel es muy blanca con algunos lunares cerca de los ojos y labios.",
        "Tiene un cuerpo fino y atlético. Suele vestir ropa que mezcla patrones nórdicos con estilo moderno. Su voz es serena como una brisa, pero cuando se enfada se vuelve un vendaval. Huele a abeto y pino."
    ],
}

export default function Yzhel() {
    const relatedLinks = [
        { label: "Art", href: "/art/yzhel" },
    ]
    return <OCCard oc={oc} relatedLinks={relatedLinks} />
}