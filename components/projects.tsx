'use client'

import { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'Torre Oncológica HUV',
    client: 'Consorcio Pro-Contein',
    category: 'Obra Civil',
    status: 'Finalizado',
    value: '$1.400 MM',
    progress: 100,
    image: '/images/misc/portfolio/union-de-colombianos-portfolio-huv-sede-oncologica-despues.avif',
    imageAfter: '/images/misc/portfolio/union-de-colombianos-portfolio-huv-sede-oncologica.avif',
    description:
      'Construcción de la torre de oncología del Hospital Universitario del Valle. Estructura en concreto de alta complejidad técnica y cumplimiento normativo hospitalario.',
  },
  {
    id: '02',
    title: 'Chipichape Gardens',
    client: 'Constructora Indico',
    category: 'Obra Civil',
    status: 'Finalizado',
    value: '$600 MM',
    progress: 100,
    image: '/images/misc/portfolio/union-de-colombianos-portfolio-chipichape-gardens-torre-2-constructora-indico-despues.avif',
    imageAfter: '/images/misc/portfolio/union-de-colombianos-portfolio-chipichape-gardens-torre-2-constructora-indico.avif',
    description:
      'Construcción de plataformas de Torre 2 del proyecto residencial Chipichape Gardens, incluyendo estructura y cimentación en concreto de alta resistencia.',
  },
  {
    id: '03',
    title: 'Nueva Sede CDAV',
    client: 'Consorcio CDAV 2023',
    category: 'Obra Civil',
    status: 'Finalizado',
    value: '$530 MM',
    progress: 100,
    image: '/images/misc/portfolio/union-de-colombianos-portfolio-nueva-sede-automotriz-del-valle-despues.avif',
    imageAfter: '/images/misc/portfolio/union-de-colombianos-portfolio-nueva-sede-automotriz-del-valle.avif',
    description:
      'Construcción de la nueva sede administrativa del Centro Automotriz del Valle. Proyecto finalizado con 100% de cumplimiento en plazos y calidad.',
  },
  {
    id: '04',
    title: 'Saint Patrick',
    client: 'Constructora Indico',
    category: 'Acabados',
    status: 'Finalizado',
    value: '$550 MM',
    progress: 100,
    image: '/images/misc/portfolio/union-de-colombianos-portfolio-saint-patrick-constructora-indico-despues.avif',
    imageAfter: '/images/misc/portfolio/union-de-colombianos-portfolio-saint-patrick-constructora-indico.avif',
    description:
      'Construcción de zonas comunes y plataformas en proyecto residencial Saint Patrick. Acabados de alta calidad en espacios de uso intensivo.',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)

  const ProjectDetail = ({ index }: { index: number }) => (
    <div className="flex flex-col">
      {/* Interactive Before/After Image Slider */}
      <div className="relative overflow-hidden select-none bg-black" style={{ height: '280px' }}>
        {/* Before Image (Bottom) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={projects[index].image}
            alt="Antes"
            className={`w-full h-full object-cover ${
              !projects[index].imageAfter
                ? 'filter grayscale contrast-[1.1] brightness-[0.7] sepia-[15%]'
                : ''
            }`}
          />
          {!projects[index].imageAfter && (
            <>
              <div className="absolute inset-0 bg-[#C9A843]/5 mix-blend-color" />
              <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
            </>
          )}
          <span className="absolute bottom-4 left-4 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-md text-white/90 text-[10px] uppercase tracking-wider font-semibold border border-white/10 rounded">
            Antes
          </span>
        </div>

        {/* After Image (Top - Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${index === activeProject ? sliderPosition : 50}% 0, ${index === activeProject ? sliderPosition : 50}% 100%, 0 100%)` }}
        >
          <img
            src={projects[index].imageAfter || projects[index].image}
            alt="Después"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: '100%', height: '100%', maxWidth: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>

        <span className="absolute bottom-4 right-4 z-[15] px-2.5 py-1 bg-black/75 backdrop-blur-md text-[#C9A843] text-[10px] uppercase tracking-wider font-semibold border border-[#C9A843]/30 rounded pointer-events-none">
          Después
        </span>

        {/* Slider Handle Line & Control Circle */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${index === activeProject ? sliderPosition : 50}%` }}
        >
          <div className="w-[2px] h-full bg-[#C9A843] relative">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#1a1c1c] border-2 border-[#C9A843] flex items-center justify-center text-[#C9A843] shadow-xl">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.25 6.75L5.5 12l4.75 5.25M13.75 6.75L18.5 12l-4.75 5.25" />
              </svg>
            </div>
          </div>
        </div>

        {/* Slider Input Range Control */}
        {index === activeProject && (
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        )}

        {/* Category badge */}
        <div className="absolute top-6 left-6 z-20">
          <span className="font-sans text-xs uppercase tracking-widest px-3 py-1.5 font-semibold" style={{ backgroundColor: '#C9A843', color: '#1a1c1c' }}>
            {projects[index].category}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col md:flex-row p-6 gap-6 border-t border-border">
        <div className="flex-1">
          <h3
            className="font-display font-black uppercase text-foreground leading-none mb-3"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}
          >
            {projects[index].title}
          </h3>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            {projects[index].description}
          </p>
        </div>
        <div className="flex flex-col gap-4 min-w-[160px]">
          <div>
            <span className="block font-sans text-muted-foreground text-xs uppercase tracking-widest mb-1">
              Valor del contrato
            </span>
            <span className="block font-display font-black text-xl" style={{ color: '#C9A843' }}>
              {projects[index].value}
            </span>
          </div>
          <div>
            <span className="block font-sans text-muted-foreground text-xs uppercase tracking-widest mb-2">
              Avance — {projects[index].progress}%
            </span>
            <div className="w-full h-px bg-border relative">
              <div
                className="absolute top-0 left-0 h-px transition-all duration-700"
                style={{ width: `${projects[index].progress}%`, backgroundColor: '#C9A843' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="proyectos" className="bg-background py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px" style={{ backgroundColor: '#C9A843' }} />
              <span
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: '#C9A843', letterSpacing: '0.22em' }}
              >
                Proyectos Destacados
              </span>
            </div>
            <h2
              className="font-display font-black uppercase text-foreground leading-none text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '0.95' }}
            >
              Materializando
              <br />
              Grandes Ideas
            </h2>
          </div>
          <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed max-w-md md:text-right">
            Exploramos el equilibrio perfecto entre ingeniería, diseño y ejecución. Conoce las obras que respaldan nuestra experiencia.
          </p>
        </div>

        {/* Featured project display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border mb-0">
          {/* Project list sidebar */}
          <div className="lg:col-span-4 border-b border-border lg:border-b-0 lg:border-r lg:border-border">
            {projects.map((project, i) => (
              <div key={i} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => {
                    setActiveProject(i)
                    setSliderPosition(50)
                    // Mobile: toggle accordion
                    setMobileOpen(prev => prev === i ? null : i)
                  }}
                  className={`w-full flex flex-col gap-1 px-8 py-6 text-left transition-colors duration-150 cursor-pointer ${
                    activeProject === i
                      ? 'bg-gold/10 border-l-2 border-l-gold'
                      : 'hover:bg-surface'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-sans text-xs tracking-widest"
                      style={{ color: '#C9A843', letterSpacing: '0.2em' }}
                    >
                      {project.id}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-sans text-xs uppercase tracking-wider px-2 py-0.5 ${
                          project.status === 'En Ejecución'
                            ? 'text-gold bg-gold/10'
                            : 'text-muted-foreground bg-surface'
                        }`}
                      >
                        {project.status}
                      </span>
                      {/* Mobile chevron */}
                      <span
                        className={`lg:hidden transition-transform duration-300 text-muted-foreground ${
                          mobileOpen === i ? 'rotate-180' : ''
                        }`}
                      >
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-display font-bold uppercase text-lg leading-tight ${
                      activeProject === i ? 'text-foreground' : 'text-foreground/70'
                    }`}
                  >
                    {project.title}
                  </span>
                  <span className="font-sans text-muted-foreground text-xs">
                    {project.client}
                  </span>
                </button>

                {/* Mobile accordion detail */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    mobileOpen === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ProjectDetail index={i} />
                </div>
              </div>
            ))}
          </div>

          {/* Active project detail — desktop only */}
          <div className="hidden lg:flex lg:col-span-8 flex-col">
            {/* Interactive Before/After Image Slider */}
            <div className="relative overflow-hidden select-none bg-black" style={{ height: '380px' }}>
              {/* Before Image (Bottom) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={projects[activeProject].image}
                  alt="Antes"
                  className={`w-full h-full object-cover ${
                    !projects[activeProject].imageAfter
                      ? 'filter grayscale contrast-[1.1] brightness-[0.7] sepia-[15%]'
                      : ''
                  }`}
                />
                {!projects[activeProject].imageAfter && (
                  <>
                    <div className="absolute inset-0 bg-[#C9A843]/5 mix-blend-color" />
                    {/* Architectural blueprint grid overlay */}
                    <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
                  </>
                )}
                <span className="absolute bottom-4 left-4 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-md text-white/90 text-[10px] uppercase tracking-wider font-semibold border border-white/10 rounded">
                  Antes
                </span>
              </div>

              {/* After Image (Top - Clipped) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={projects[activeProject].imageAfter || projects[activeProject].image}
                  alt="Después"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: '100%', height: '100%', maxWidth: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              <span className="absolute bottom-4 right-4 z-[15] px-2.5 py-1 bg-black/75 backdrop-blur-md text-[#C9A843] text-[10px] uppercase tracking-wider font-semibold border border-[#C9A843]/30 rounded pointer-events-none">
                Después
              </span>

              {/* Slider Handle Line & Control Circle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-[2px] h-full bg-[#C9A843] relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#1a1c1c] border-2 border-[#C9A843] flex items-center justify-center text-[#C9A843] shadow-xl">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.25 6.75L5.5 12l4.75 5.25M13.75 6.75L18.5 12l-4.75 5.25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Slider Input Range Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />

              {/* Category badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="font-sans text-xs uppercase tracking-widest px-3 py-1.5 font-semibold" style={{ backgroundColor: '#C9A843', color: '#1a1c1c' }}>
                  {projects[activeProject].category}
                </span>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col md:flex-row p-8 gap-8 border-t border-border">
              <div className="flex-1">
                <h3
                  className="font-display font-black uppercase text-foreground leading-none mb-3"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                  {projects[activeProject].title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </div>
              <div className="flex flex-col gap-4 min-w-[180px]">
                <div>
                  <span className="block font-sans text-muted-foreground text-xs uppercase tracking-widest mb-1">
                    Valor del contrato
                  </span>
                  <span className="block font-display font-black text-2xl" style={{ color: '#C9A843' }}>
                    {projects[activeProject].value}
                  </span>
                </div>
                <div>
                  <span className="block font-sans text-muted-foreground text-xs uppercase tracking-widest mb-2">
                    Avance — {projects[activeProject].progress}%
                  </span>
                  <div className="w-full h-px bg-border relative">
                    <div
                      className="absolute top-0 left-0 h-px transition-all duration-700"
                      style={{ width: `${projects[activeProject].progress}%`, backgroundColor: '#C9A843' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total projects summary */}
        <div className="border border-t-0 border-border bg-surface px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-sans text-muted-foreground text-sm">
            Total acumulado en contratos ejecutados y en ejecución:
          </span>
          <span className="font-display font-black text-2xl" style={{ color: '#C9A843' }}>
            $6.495 MM
          </span>
        </div>
      </div>
    </section>
  )
}
