'use client'

import { useState, useEffect } from 'react'

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    ciudad: '',
    fechaInicio: '',
    presupuesto: '',
  })

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envío
    setTimeout(() => {
      setSubmitted(true)
    }, 600)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        email: '',
        ciudad: '',
        fechaInicio: '',
        presupuesto: '',
      })
    }, 300)
  }

  return (
    <section
      id="contacto"
      className="py-0 relative overflow-hidden bg-background"
    >
      {/* Vertical gold accent bar — editorial structural element */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: '#757f92' }}
        aria-hidden="true"
      />
      {/* Top border in gold */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, #757f92 0%, rgba(117,127,146,0.15) 50%, transparent 100%)' }}
        aria-hidden="true"
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Left — editorial text and CTAs below */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px" style={{ backgroundColor: '#C9A843' }} />
              <span
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: '#C9A843', letterSpacing: '0.22em' }}
              >
                ¿Tienes un Proyecto en Mente?
              </span>
            </div>
            <h2
              className="font-display font-black uppercase text-foreground leading-none text-balance mb-8 md:mb-10"
              style={{ fontSize: 'clamp(2rem, 4.8vw, 3.8rem)', lineHeight: '1.0' }}
            >
              Hablemos de cómo
              <br />
              podemos hacerlo
              <br />
              <span style={{ color: '#C9A843' }}>Realidad</span>
            </h2>

            {/* CTA action button triggering modal */}
            <div className="flex w-full max-w-sm">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-between gap-4 font-display font-bold text-sm uppercase tracking-widest px-8 py-5 bg-[#C9A843] text-[#1a1c1c] hover:bg-[#ebeae7] transition-colors duration-200 group w-full cursor-pointer border-none"
                style={{ letterSpacing: '0.12em' }}
              >
                Contáctanos
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — Project Image */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] lg:h-[450px] rounded-2xl overflow-hidden border border-border/40 shadow-2xl">
            <img
              src="/images/union-de-colombianos-background-hero.webp"
              alt="Proyecto UDC"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Modern Request Quote Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity duration-300">
          <div 
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#C9A843]/30 rounded-2xl p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#C9A843]" style={{ letterSpacing: '0.15em' }}>
                    Solicitud de Cotización
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground uppercase mt-1">
                    Hablemos de tu Proyecto
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                    Completa la información a continuación para ponernos en contacto, afinar los detalles de tu obra y estructurar una propuesta económica formal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {/* Grid for two fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Nombre de la Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ej. Constructora Andina"
                        className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Número Telefónico *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej. +57 300 123 4567"
                        className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ej. contacto@empresa.com"
                        className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ciudad" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Ciudad de ubicación del Proyecto *
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      placeholder="Ej. Cali, Valle del Cauca"
                      className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fechaInicio" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Inicio Estimado de Obra *
                      </label>
                      <input
                        type="date"
                        id="fechaInicio"
                        required
                        value={formData.fechaInicio}
                        onChange={(e) => setFormData({ ...formData, fechaInicio: e.target.value })}
                        className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="presupuesto" className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Presupuesto del Contrato *
                      </label>
                      <input
                        type="text"
                        id="presupuesto"
                        required
                        value={formData.presupuesto}
                        onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                        placeholder="Ej. $500 millones COP"
                        className="w-full px-4 py-3 bg-[#181818] border border-border/60 text-foreground text-sm rounded-lg focus:outline-none focus:border-[#C9A843] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C9A843] hover:bg-[#ebeae7] text-[#1a1c1c] font-display font-bold text-xs uppercase tracking-widest transition-colors duration-200 rounded-lg cursor-pointer border-none"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      Enviar Solicitud
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-16 h-16 bg-[#C9A843]/15 border border-[#C9A843]/30 rounded-full flex items-center justify-center text-[#C9A843] mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground uppercase mb-2">
                  ¡Solicitud Enviada!
                </h3>
                <p className="font-sans text-sm text-muted-foreground max-w-sm leading-relaxed">
                  Gracias por tu interés, <strong>{formData.nombre}</strong>. Hemos registrado tu información. Un ingeniero especialista se pondrá en contacto al número <strong>{formData.telefono}</strong> o correo <strong>{formData.email}</strong> para afinar los detalles de la obra.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-8 py-3 bg-border hover:bg-border/80 text-foreground font-display font-bold text-xs uppercase tracking-widest transition-colors rounded-lg cursor-pointer border-none"
                  style={{ letterSpacing: '0.15em' }}
                >
                  Cerrar Ventana
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
