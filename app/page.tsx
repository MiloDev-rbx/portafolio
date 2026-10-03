export default function Home() {
  const proyectos = [
    {
      title: "Sistema de Diseño",
      description: "Librería de componentes reutilizables enfocada en la consistencia, accesibilidad y rendimiento.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
    {
      title: "Aplicación Web App",
      description: "Plataforma interactiva con autenticación, manejo de estado global y modo oscuro nativo.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-5 py-6 md:py-8">
      {/* Header / Navegación (Sección 22) */}
      <header className="flex items-center justify-between pb-5 mb-10 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
          MiloDev
        </span>
        <nav className="flex items-center gap-5 text-sm text-neutral-500 dark:text-neutral-400">
          <a href="#proyectos" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/70 dark:border-neutral-700/60">
            Disponible para proyectos
          </span>
        </div>

        {/* Título y descripción compactos (Sección 2) */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3 leading-snug">
          Diseño interfaces simples, funcionales y deliberadas.
        </h1>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed max-w-lg">
          Desarrollador enfocado en crear experiencias web de alta calidad, cuidando cada detalle de tipografía, espaciado y rendimiento.
        </p>

        {/* Botones estilizados (Sección 11) */}
        <div className="flex items-center gap-3">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center h-8 px-3.5 font-medium text-xs text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-md transition-all duration-180 active:scale-95"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/MiloDev-rbx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 px-3.5 font-medium text-xs text-neutral-700 dark:text-neutral-300 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 rounded-md transition-all duration-180"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Sección Proyectos (Sección 13: Cards compactas) */}
      <section id="proyectos" className="mb-12">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
          Proyectos destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {proyecto.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                  {proyecto.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-neutral-100 dark:border-neutral-800/50">
                <div className="flex flex-wrap gap-1.5">
                  {proyecto.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}