"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
  SiHtml5, SiCss, SiTailwindcss,
  SiAstro, SiWordpress, SiMysql, SiMongodb, SiExpress, SiPhp,
  SiPrisma, SiMongoose, SiMariadb, SiPostgresql, SiSanity,
  SiVercel, SiCloudflare, SiNetlify, SiGithub,
  SiClaude, SiGit, SiGithubcopilot, SiOpenai,
} from "react-icons/si";
import FadeInSection from "../components/FadeInSection";
import InteractiveTerminal from "./InteractiveTerminal";
import ProjectModal, { type Project } from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "Viicky Scarlet",
    subtitle: "¡Este sitio!",
    url: "https://viickyscarlet.pages.dev",
    stack: ["Next.js", "Framermotion", "Tailwind CSS", "TypeScript", "Lucide React"],
    type: "Página oficial de Viicky Scarlet",
    description: "Diseño y desarrollo completo desde cero que usa imágenes de mis redes sociales y foros oficiales para reunir los proyectos en un mismo sitio.",
  },
  {
    id: 2,
    title: "Contacto y Comisiones Viicky Scarlet",
    subtitle: "Web de formularios",
    url: "https://viickyscarlet-contact.viickyscarlet.workers.dev/",
    stack: ["Next.js", "Discord Webhook", "Brevo", "Zod", "React Hook Form", "TypeScript", "Cloudfare Workers", "Lucide React"],
    type: "Contacto",
    description: "Una nueva experiencia para rellenar formularios. Desplegado en Workers de Cloudfare y con medidas extra de seguridad antispam. Usa Brevo para el envío de correos electrónicos y un Webhook a mi servidor privado de Discord para recibir vuestros mensajes",
  },
  {
    id: 3,
    title: "Viicky in Wonderland",
    subtitle: "Relatos y OCs con efecto parallax",
    url: "https://viickyinwonderland.vercel.app/",
    stack: ["Next.js", "WebGL2", "Three.js", "Vercel", "Sanity CMS", "TypeScript"],
    type: "Relatos",
    description: "Quise dejar un lugar para los relatos que escribo sobre mis personajes de rol, que cada página tuviese su propio diseño partiendo de la misma base y poder gestionar relatos en español y en inglés, con su música para transportar al lector a su mundo. Pronto le añadiré más personajes, cuando pueda seguir dibujando los fondos, dibujados por mí.",
  },
  {
    id: 4,
    title: "Diseñadora y desarrolladora web en Madrid | Viicky Scarlet Studio",
    subtitle: "Landing page con asistente de IA, diseño, y proyectos.",
    url: "https://viickyscarlet-studio.pages.dev/",
    stack: ["Astro", "Cloudflare Workers AI", "IA", "WebGL2", "Three.js","Brevo","Discord Webhook", "React", "TypeScript", "Keyframes CSS", "Lucide React"],
    type: "¡En desarollo!",
    description: "Web profesional hecha en inglés y español para ofrecer servicios de diseño y desarrollo web, ilustración y cosplay orientada a SEO con un asistente de IA al estilo terminal de Linux. También he utilizado 3D reactivo al scroll del ratón, envíos de formularios por correo y un webhook a mi servidor privado de Discord.",
  },
  {
    id: 5,
    title: "Dani Díaz Fotógrafo",
    subtitle: "Noticias y galería fotográfica",
    url: "https://danidiazfotografo.com/",
    stack: ["Astro", "Sanity CMS", "TypeScript","API Open-Meteo"],
    type: "Cliente",
    description: "Portfolio fotográfico profesional con CMS Headless para que Dani gestione su contenido de forma autónoma. Las animaciones son hechas con keyframes CSS.",
  },
  {
    id: 6,
    title: "The Movie DB",
    subtitle: "Web de películas",
    url: "https://themovietmdb.netlify.app/",
    stack: ["Angular", "API TMDB"],
    type: "Aprendiendo Angular...",
    description: "Búsqueda de películas integrada con la API oficial de TheMovieDB. Un proyecto sencillo para trastear con Angular.",
  },
];

const skillGroups = [
  {
    category: "Lenguajes",
    items: [
      { name: "JavaScript", snippet: "const sum = (a, b) => a + b",      Icon: SiJavascript },
      { name: "TypeScript", snippet: "interface Props { name: string }", Icon: SiTypescript },
      { name: "HTML",       snippet: "<section class=\"hero\">",         Icon: SiHtml5 },
      { name: "CSS",        snippet: "display: grid;",                   Icon: SiCss },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next.js",      snippet: "export default function Page() {}",   Icon: SiNextdotjs },
      { name: "React",        snippet: "const App = () => <Hello />",         Icon: SiReact },
      { name: "Astro",        snippet: "---\nconst data = await fetch()\n---", Icon: SiAstro },
      { name: "Tailwind CSS", snippet: 'className="flex gap-4"',              Icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",  snippet: "app.listen(3000)",          Icon: SiNodedotjs },
      { name: "Express",  snippet: "app.get('/', handler)",     Icon: SiExpress },
      { name: "Prisma",   snippet: "prisma.user.findMany()",    Icon: SiPrisma },
      { name: "Mongoose", snippet: "Model.findOne({ id })",     Icon: SiMongoose },
      { name: "PHP",      snippet: "echo \"Hello, world\";",     Icon: SiPhp, dim: true },
    ],
  },
  {
    category: "Bases de datos",
    items: [
      { name: "PostgreSQL", snippet: "SELECT * FROM things;",      Icon: SiPostgresql, dim: true },
      { name: "MySQL",      snippet: "SELECT * FROM projects;",   Icon: SiMysql, dim: true },
      { name: "MariaDB",    snippet: "SHOW DATABASES;",           Icon: SiMariadb, dim: true },
      { name: "MongoDB",    snippet: "db.find({ status: 'done' })", Icon: SiMongodb, dim: true },
    ],
  },
  {
    category: "CMS",
    items: [
      { name: "Sanity",    snippet: "defineType({ name: 'post' })",  Icon: SiSanity },
      { name: "WordPress", snippet: "get_template_part('header')",   Icon: SiWordpress },
    ],
  },
  {
    category: "Control de versiones",
    items: [
      { name: "Git",    snippet: "git commit -m 'feat ✦'", Icon: SiGit },
      { name: "GitHub", snippet: "git push origin main",   Icon: SiGithub },
    ],
  },
  {
    category: "Deploy",
    items: [
      { name: "Vercel",     snippet: "vercel --prod",    Icon: SiVercel },
      { name: "Cloudflare", snippet: "wrangler deploy",  Icon: SiCloudflare },
      { name: "Netlify",    snippet: "netlify deploy",   Icon: SiNetlify, dim: true },
    ],
  },
  {
    category: "Asistente IA",
    items: [
      { name: "Claude Code",    snippet: "$ claude --model opus",   Icon: SiClaude },
      { name: "GitHub Copilot", snippet: "// suggest the rest →",    Icon: SiGithubcopilot },
      { name: "Codex",          snippet: "$ codex",                  Icon: SiOpenai },
    ],
  },
];

export default function WebPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="text-white">

      {/*   HERO (2-column on desktop)  */}
      <section className="relative overflow-hidden">

<div className="lg:min-h-screen lg:grid lg:grid-cols-2">

          {/* LEFT: intro */}
          <div className="flex flex-col justify-center px-6 md:px-16 pt-32 pb-14 lg:py-0 lg:min-h-screen">

            {/* Terminal */}
            <InteractiveTerminal />

            <FadeInSection delay={0.1}>
              <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">
                — Desarrollo de aplicaciones web
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <h1 className="title text-5xl md:text-7xl font-light tracking-tight leading-[0.9] mb-8 max-w-xl">
                Not magic.
                <br />
                Just tech.
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-white/65 max-w-lg text-base leading-relaxed">
                Esta es mi profesión. Crear experiencias digitales únicas que no solo ayuden a las personas, sino también refuercen su identidad dentro del mundo de Internet y marcar la diferencia. Usando estas herramientas tecnológicas mi meta aquí es crear arte.
              </p>
            </FadeInSection>
          </div>

          {/* RIGHT: projects (below on mobile, right column on desktop) */}
          <div className="px-6 md:px-12 pb-16 lg:pb-0 lg:flex lg:flex-col lg:justify-center lg:border-l lg:border-white/4">

            <FadeInSection>
              <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6 pt-0">
                — Proyectos
              </p>
            </FadeInSection>

            <div className="grid grid-cols-2 gap-3">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group border border-white/10 hover:border-purple-500/40 overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(157,80,187,0.07)] cursor-none"
                  onClick={() => setSelected(project)}
                >
                  {/* Mini chrome */}
                  <div className="flex items-center justify-between gap-1 px-2 py-1.5 border-b border-white/10 bg-white/2">
                    <div className="flex gap-1">
                       <p className="text-white/75 text-xs font-light leading-tight m-1.5">{project.title}</p>
                    </div>
                    <div className="flex shrink-0">
                      <span className="text-xs text-white/25  m-1.5">─</span>
                      <span className="text-sm text-white/25  pt-[3px]">□</span>
                      <span className="text-xs text-white/25  m-1.5">✕</span>
                    </div>
                  </div>

                  {/* Mini iframe / placeholder */}
                  <div className="relative overflow-hidden bg-[#111]" style={{ height: "130px" }}>
                    {project.url ? (
                      <>
                        <iframe
                          src={project.url}
                          className="absolute top-0 left-0"
                          scrolling="no"
                          style={{
                            width: "300%",
                            height: "300%",
                            transform: "scale(0.333)",
                            transformOrigin: "top left",
                            border: "none",
                            pointerEvents: "none",
                          }}
                          loading="lazy"
                          tabIndex={-1}
                          aria-hidden="true"
                          title={project.title}
                        />
                        <div className="absolute inset-0 z-10" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-[9px] text-white/25 text-center leading-5">
                          {"<WordPress />"}
                          <br />
                          {"<WooCommerce />"}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-5 bg-linear-to-t from-[#111] to-transparent z-20 pointer-events-none" />
                  </div>

                  {/* Mini info */}
                  <div className="px-2 py-2">

                     {project.stack.slice(0, 2).map(tech => (
                        <span
                          key={tech}
                          className="text-[12px] font-mono text-[#9D50BB]/55 border border-[#9D50BB]/20 px-1 group-hover:border-[#9D50BB]/40 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/*   DIVIDER  */}
      <FadeInSection>
        <div className="mx-6 md:mx-20 border-t border-white/10" />
      </FadeInSection>

      {/* STACK & HERRAMIENTAS */}
      <section className="px-6 md:px-20 py-20 max-w-360 2xl:max-w-480 mx-auto">
        <FadeInSection>
          <p className="subtitle text-xs uppercase tracking-[0.3em] mb-6">— Stack & herramientas</p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <h2 className="title text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mb-14 max-w-xl">
            Next.js, Astro, React, CMS Headless...
          </h2>
        </FadeInSection>

        <div className="border-t border-l border-white/10">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="grid lg:grid-cols-[220px_1fr] border-b border-white/10"
            >
              {/* Category label */}
              <div className="flex items-center gap-3 px-6 py-5 border-r border-white/10 bg-white/2 lg:bg-transparent">
                <span className="h-px w-6 bg-[#E6BE8A]/40 shrink-0" />
                <p className="subtitle text-xs uppercase tracking-[0.25em] text-white/55">
                  {group.category}
                </p>
              </div>

              {/* Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: gi * 0.06 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 border-r border-white/10 min-w-0"
                  >
                    <skill.Icon className={`w-10 h-10 mb-3 ${skill.dim ? "text-white/25" : "text-[#E6BE8A]"}`} />
                    <p className="title text-base font-light mb-3 text-white/90">
                      {skill.name}
                    </p>
                    <p className="font-mono text-xs text-white/40 leading-relaxed whitespace-pre-line wrap-break-word">
                      {skill.snippet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative code block */}
        <FadeInSection delay={0.2}>
          <div
            className="mt-10 border border-white/10 p-6 md:p-10 font-mono text-xs md:text-sm leading-8 overflow-x-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            <span style={{ color: "rgba(230,190,138,1)" }}>{"// resumen"}</span>
            <br />
            <span style={{ color: "rgba(157,80,187,1)" }}>const</span>
            {" viicky = {"}
            <br />
            {"  "}
            <span style={{ color: "rgba(255,255,255,1)" }}>stack</span>
            {": ['Next.js', 'React', 'TypeScript', 'Node.js', 'Astro', 'WordPress'],"}
            <br />
            {"  "}
            <span style={{ color: "rgba(255,255,255,1)" }}>tools</span>
            {": ['VS Code', 'Git', 'Vercel', 'Cloudflare'],"}
            <br />
            {"  "}
            <span style={{ color: "rgba(255,255,255,1)" }}>loves</span>
            {": ['diseño', 'arte', 'videojuegos', '🥑'],"}
            <br />
            {"  "}
            <span style={{ color: "rgba(255,255,255,1)" }}>logros</span>
            {": '"}
            <span style={{ color: "rgba(230,190,138,0.8)" }}>mejor expediente DAW 2025</span>
            {"',"}
            <br />
            {"}"}
            <br />
            <br />
            {"viicky"}
            <span style={{ color: "rgba(157,80,187,1)" }}>.log</span>
            {"()"}
            <span style={{ color: "rgba(255,255,255,0.35)" }}>{" // → Aún queda mundo por explorar ✦"}</span>
          </div>
        </FadeInSection>
      </section>


      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

    </div>
  );
}
