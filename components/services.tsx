const services = [
  {
    category: 'Unidad 01',
    title: 'Obra Civil',
    description:
      'Infraestructura de alto desempeño con rigor técnico y normativo en cada etapa de la construcción.',
    items: [
      'Movimiento de tierras',
      'Estructura y cimentación en concreto',
      'Mampostería',
    ],
    accent: true,
  },
  {
    category: 'Unidad 02',
    title: 'Acabados',
    description:
      'Superficies que expresan calidad y detalle, con materiales seleccionados y mano de obra especializada.',
    items: [
      'Estuco y pintura',
      'Sistema liviano',
      'Enchape de muro y pisos',
    ],
    accent: false,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-border pb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-gold" />
              <span
                className="font-sans text-gold text-xs tracking-widest uppercase"
                style={{ letterSpacing: '0.22em' }}
              >
                Nuestras Unidades Estratégicas
              </span>
            </div>
            <h2
              className="font-display font-black uppercase text-foreground leading-none text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '0.95' }}
            >
              Soluciones que
              <br />
              Construyen Confianza
            </h2>
          </div>
          <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-sm">
            Dos unidades de negocio especializadas que cubren el ciclo completo
            de cualquier proyecto de construcción.
          </p>
        </div>

        {/* Service cards — full-bleed editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col p-10 md:p-14 ${
                i === 0 ? 'border-b border-border md:border-b-0 md:border-r md:border-border' : ''
              } ${service.accent ? 'bg-gold/5' : 'bg-background'}`}
            >
              {/* Category label */}
              <span
                className="font-sans text-gold text-xs tracking-widest uppercase mb-6 block"
                style={{ letterSpacing: '0.22em' }}
              >
                {service.category}
              </span>

              {/* Icon placeholder — architectural line graphic */}
              <div className="mb-8">
                {i === 0 ? (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gold">
                    <rect x="4" y="28" width="32" height="3" fill="currentColor" />
                    <rect x="10" y="18" width="20" height="3" fill="currentColor" />
                    <rect x="18" y="4" width="4" height="25" fill="currentColor" />
                    <rect x="8" y="4" width="2" height="15" fill="currentColor" opacity="0.5" />
                    <rect x="30" y="4" width="2" height="15" fill="currentColor" opacity="0.5" />
                  </svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gold">
                    <rect x="4" y="4" width="32" height="3" fill="currentColor" />
                    <rect x="4" y="13" width="18" height="3" fill="currentColor" />
                    <rect x="4" y="22" width="24" height="3" fill="currentColor" />
                    <path d="M28 22 L36 32 L20 32 Z" fill="currentColor" opacity="0.5" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3
                className="font-display font-black uppercase text-foreground leading-none mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '0.95' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
                {service.description}
              </p>

              {/* Items list */}
              <ul className="flex flex-col gap-3 mt-auto">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 border-t border-border/60 pt-3">
                    <span className="block w-4 h-px bg-gold flex-shrink-0" />
                    <span className="font-sans text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value-add strip */}
        <div className="mt-0 border border-t-0 border-border bg-surface-alt">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border">
            {[
              'Planeación Estratégica',
              'Ejecución Técnica',
              'Optimización de Recursos',
              'Cumplimiento Normativo',
              'Control de Calidad',
            ].map((item, i) => (
              <div
                key={i}
                className={`px-6 py-5 flex items-center gap-3 ${i >= 2 && i < 4 ? 'border-t border-border md:border-t-0' : ''}`}
              >
                <span className="block w-1.5 h-1.5 bg-gold flex-shrink-0" />
                <span className="font-sans text-muted-foreground text-xs uppercase tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
