export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-24 flex flex-col justify-center">
      {/* Badge / Pill */}
      <div className="mb-6">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
          Disponible para proyectos
        </span>
      </div>

      {/* Jerarquía Tipográfica (Sección 2) */}
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4 leading-tight">
        Diseño interfaces simples, funcionales y deliberadas.
      </h1>

      <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mb-8 leading-relaxed">
        Desarrollador enfocado en crear experiencias web de alta calidad. Cuidando cada detalle de tipografía, espaciado y rendimiento.
      </p>

      {/* Botones y Acciones (Sección 11) */}
      <div className="flex items-center gap-4">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center h-11 px-6 font-medium text-sm text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-lg transition-all duration-200 active:scale-95"
        >
          Ver proyectos
        </a>
        <a
          href="https://github.com/MiloDev-rbx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 px-6 font-medium text-sm text-neutral-700 dark:text-neutral-300 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-all duration-200"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}