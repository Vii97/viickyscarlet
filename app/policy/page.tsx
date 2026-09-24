'use client';

import { Form, Cookie, BarChart3, Rose } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <div className="relative pt-20 pb-12 px-4 border-b border-white/10">
        <div className="text-center mx-auto">
          <h1 className="pt-8 title text-center text-6xl mb-4 md:text-8xl">
              Política de Privacidad
            </h1>

          <p className="text-white/60 text-lg">
            Información legal sobre cómo se protegen tus datos en estos bastos dominios~
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Intro Section */}
        <div className="mb-12">
          <p className="text-white/90 text-xl leading-relaxed mb-4">
            Seguro que has entrado aquí para saber de qué va todo esto. Entendible, eh. Yo también lo haría.
          </p>
          <p className="text-white/70 leading-relaxed">
            Estas altas cantidades de texto son información legal que es obligatoria en todas las páginas web. Así que ponte cómodo, pilla algo rico para beber y te explico. ☕
          </p>
        </div>

        {/* Purpose Section */}
        <section className="mb-12">
          <h2 className="text-3xl subtitle text-white mb-6 flex items-center gap-3">
            <Rose strokeWidth={1.2} className="w-8 h-8" />
            Propósito del sitio
          </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              El principal propósito de <span className="text-white font-semibold">viickyscarlet.pages.dev</span> es de mostrar el contenido creativo de mi persona. Un lugar que recopila un montón de proyectos hechos durante varios años a lo largo de mi carrera y una forma de compartir mis hobbies.
            </p>
              <p className="text-white/70 pt-4">
               Esta es mi única URL oficial. Cualquiera que sea diferente, por muy parecida que sea, seguramente sea fake.
              </p>
            <p className="text-white/70">
              Si crees que se está suplantando de alguna forma, puedes ponerte en contacto conmigo en:{' '}
              <a 
                href="mailto:viickyscarlet@gmail.com" 
                className="subtitle hover:text-white transition-colors"
              >
                viickyscarlet@gmail.com
              </a>
            </p>
        </section>

        {/* RGPD Info */}
        <section className="mb-12 pt-8 items-center border-t border-white/10 hover:border-white/30 transition-colors duration-500">
          <p className="text-white/80">
            Para garantizar el cumplimiento del <span className="font-semibold">Reglamento General de Protección de Datos (RGPD)</span>, te cuento sobre los aspectos de la web que te podrían afectar como usuario. Nada más raro de lo que puedas presenciar en cualquier web hoy en día, ¡pero ahí va!
          </p>
        </section>

        {/* Form Data Section */}
        <section className="mb-12">
          <h2 className="text-3xl subtitle text-white mb-6 flex items-center gap-3">
            <Form strokeWidth={1.2} className="w-8 h-8" />
            Datos proporcionados en formularios
          </h2>
            <p className="text-white/80 leading-relaxed">
              El funcionamiento de los formularios es básico y esencial. Los datos proporcionados corresponden única y exclusivamente para el propósito de atender las peticiones sin compartirse con terceros y no se conservarán una vez se haya atendido la solicitud con éxito. Solo se manejarán por el administrador del sitio web.
            </p>
        </section>

        {/* Cookies Section */}
        <section className="mb-12">
          <h2 className="text-3xl subtitle text-white mb-6 flex items-center gap-3">
            <Cookie strokeWidth={1.2} className="w-8 h-8" />
            Cookies
          </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Las famosas galletitas son pequeños archivos de texto que muchos sitios web como este guardan en tu navegador para recordar información sobre tus preferencias de visita.
            </p>

            {/* Cookies Types */}
            <div className="space-y-4">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                Cookies esenciales
                </h3>
                <p className="text-white/70">
                  Son aquellas que sirven solo para el funcionamiento básico de la web, como recordar el consentimiento en el banner de cookies. Son cookies técnicas imprescindibles que no rastrearán tu comportamiento ni te vigilarán de ninguna forma.
                </p>
                <p className='text-white'>Este sitio web no usa cookies de terceros.</p>
            </div>
        </section>

        {/* Statistics Section */}
        <section className="">
          <h2 className="text-3xl subtitle text-white mb-6 flex items-center gap-3">
            <BarChart3 strokeWidth={1.2} className="w-8 h-8" />
            Estadísticas
          </h2>
            <p className="text-white/80 leading-relaxed">
              Los datos estadísticos son solo los proporcionados por <span className="text-white font-semibold">las analíticas de Cloudfare</span>, que forman parte del seguimiento esencial de la web y <span className="text-white">no recopila datos de carácter personal</span> de los usuarios.
            </p>
        </section>
      </div>

    {/**Gracias */}
    <p className='mb-16 text-center text-white text-2xl'>¡Gracias por leer y disfruta de la web!</p>
    </div>
  );
}
