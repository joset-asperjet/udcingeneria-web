'use client'

import { ShieldCheck, Target, TrendingUp, Users } from 'lucide-react'

const values = [
  {
    number: '01',
    title: 'Integridad y Confianza',
    description:
      'Actuamos con rectitud, coherencia y ética en todas nuestras decisiones, generando relaciones basadas en la confianza, el respeto y el cumplimiento de la palabra dada.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Excelencia, Orden y Cumplimiento',
    description:
      'Trabajamos con disciplina, planificación y sentido de responsabilidad, asegurando resultados de calidad, dentro de los tiempos y estándares acordados.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Desarrollo, Coraje y Resiliencia',
    description:
      'Promovemos el crecimiento y mejora continua, la valentía para tomar decisiones difíciles y la capacidad de adaptarnos y aprender frente a los desafíos.',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Bienestar, Humanidad y Balance',
    description:
      'Creemos que los resultados sostenibles se logran cuando las personas trabajan en un entorno humano, respetuoso, equilibrado y alineado con un propósito.',
    icon: Users,
  },
]

export default function Values() {
  return (
    <section id="valores" className="bg-[#ebeae7] py-24 md:py-32 border-b border-[#999d9f]/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="block w-8 h-px bg-[#757f92]" />
          <span
            className="font-sans text-[#757f92] font-bold text-xs tracking-widest uppercase"
            style={{ letterSpacing: '0.22em' }}
          >
            Nuestros Valores
          </span>
        </div>

        {/* Editorial title + values grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Title column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h2
                className="font-display font-black uppercase text-[#1a1c1c] leading-none text-balance"
                style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.8rem)', lineHeight: '0.95' }}
              >
                Principios
                <br />
                que nos
                <br />
                <span style={{ color: '#C9A843' }}>Definen</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C9A843] to-transparent mt-8 mb-8" />
            </div>
            <div>
              <p className="font-sans text-[#1a1c1c]/80 font-medium text-sm md:text-base leading-relaxed max-w-xs border-l-2 border-[#757f92]/40 pl-4 py-1">
                Cada decisión, cada proyecto y cada relación que construimos
                está sustentada en valores que no son negociables.
              </p>
            </div>
          </div>

          {/* Values grid — Premium UI Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const IconComponent = value.icon
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-[#ffffff] hover:bg-[#ffffff] border border-[#999d9f]/30 hover:border-[#757f92] rounded-2xl p-8 md:p-10 transition-all duration-500 shadow-lg hover:shadow-xl flex flex-col justify-between min-h-[280px]"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#757f92]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top row: Icon Badge + Number */}
                  <div className="flex items-center justify-between gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-[#757f92]/10 border border-[#757f92]/20 flex items-center justify-center text-[#757f92] group-hover:scale-110 group-hover:bg-[#757f92] group-hover:text-[#ebeae7] transition-all duration-500 shadow-lg shadow-[#757f92]/5">
                      <IconComponent className="w-7 h-7 stroke-[1.75]" />
                    </div>
                    <span
                      className="font-display font-black text-[#1a1c1c]/10 group-hover:text-[#757f92]/20 text-4xl transition-colors duration-500 select-none"
                      aria-hidden="true"
                    >
                      {value.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-display font-bold uppercase text-[#1a1c1c] text-xl md:text-2xl leading-tight mb-3 group-hover:text-[#757f92] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="font-sans text-[#1a1c1c]/80 font-medium text-sm md:text-base leading-relaxed group-hover:text-[#1a1c1c] transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom animated accent line */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#757f92] via-[#757f92]/50 to-transparent transition-all duration-500 mt-6" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
