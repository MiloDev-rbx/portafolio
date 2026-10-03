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
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      {/* Header / Navegación Simple (Sección 22) */}
      <header className="flex items-center justify-between pb-12 mb-12 border-b border-neutral-200 dark:border-neutral-800">
        <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
          MiloDev
        </span>
        <nav className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <a href="#proyectos" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mb-24">
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
            Disponible para proyectos
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4 leading-tight">
          Diseño interfaces simples, funcionales y deliberadas.
        </h1>

        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mb-8 leading-relaxed">
          Desarrollador enfocado en crear experiencias web de alta calidad, cuidando cada detalle de tipografía, espaciado y rendimiento.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center h-10 px-5 font-medium text-sm text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-md transition-all duration-180 active:scale-95"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/MiloDev-rbx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-5 font-medium text-sm text-neutral-700 dark:text-neutral-300 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-md transition-all duration-180"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Sección Proyectos (Sección 13: Cards) */}
      <section id="proyectos" className="mb-24">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight">
          Proyectos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {proyecto.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                  {proyecto.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                <div className="flex flex-wrap gap-2">
                  {proyecto.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono"
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