export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/union-de-colombianos-background-hero.webp"
          alt="UDC Ingeniería"
          className="w-full h-full object-cover object-[30%_center] md:object-center"
        />
        {/* Overlay para legibilidad del texto con tono de la paleta arquitectónica */}
        <div className="absolute inset-0 bg-[#1a1c1c]/50" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-end pb-24 sm:pb-20 md:pb-28 pt-24">
        {/* Main Headline */}
        <h1
          className="font-display font-semibold uppercase tracking-tight leading-tight text-balance mb-5 sm:mb-8"
          style={{ fontSize: 'clamp(2.7rem, 5.5vw, 3.5rem)', lineHeight: '1.1', color: '#ebeae7' }}
        >
          Ingeniería
          <br />
          <span style={{ color: '#ebeae7' }}>que construye</span>
          <br className="md:hidden" />{' '}
          <span>futuro</span>
        </h1>

        {/* Sub copy */}
        <p className="font-sans text-[13.5px] sm:text-[15px] md:text-[18px] leading-relaxed max-w-lg mb-5 sm:mb-6 font-normal" style={{ color: '#ffffff' }}>
          Diseñamos, ejecutamos y supervisamos proyectos de infraestructura y
          obra civil con altos estándares de calidad, cumplimiento y eficiencia.
        </p>

        {/* Client Logos Marquee */}
        <div className="marquee-container mb-6 sm:mb-8 max-w-lg">
          <div className="marquee-content gap-16 items-center flex">
            {[
              '/images/clients-logos/25.png',
              '/images/clients-logos/26.png',
              '/images/clients-logos/27.png',
              '/images/clients-logos/28.png',
              '/images/clients-logos/29.png',
              '/images/clients-logos/30.png',
              '/images/clients-logos/31.png',
              '/images/clients-logos/32.png',
              '/images/clients-logos/25.png',
              '/images/clients-logos/26.png',
              '/images/clients-logos/27.png',
              '/images/clients-logos/28.png',
              '/images/clients-logos/29.png',
              '/images/clients-logos/30.png',
              '/images/clients-logos/31.png',
              '/images/clients-logos/32.png',
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Cliente UDC"
                className="h-9 sm:h-10 md:h-12 w-auto object-contain opacity-60 filter brightness-0 invert"
              />
            ))}
          </div>
        </div>

        {/* Style block for infinite marquee animation and custom CTA buttons */}
        <style>{`
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-container {
            overflow: hidden;
            width: 100%;
            mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          }
          .marquee-content {
            display: flex;
            width: max-content;
            animation: marquee-right 25s linear infinite;
          }

          /* Custom CTA buttons to override tailwind specificity issues */
          .btn-ver-proyectos {
            background-color: #C9A843 !important;
            color: #1a1c1c !important;
            border: none !important;
          }
          .btn-solicitar-cotizacion {
            background-color: transparent !important;
            color: #ebeae7 !important;
            border: 1px solid #ebeae7 !important;
          }

          @media (min-width: 768px) {
            .btn-ver-proyectos {
              background-color: #C9A843 !important;
              color: #1a1c1c !important;
            }
            .btn-solicitar-cotizacion {
              background-color: transparent !important;
              color: #ebeae7 !important;
              border: 1px solid #ebeae7 !important;
            }
          }

          /* Hover styles */
          .btn-ver-proyectos:hover {
            background-color: #1a1c1c !important;
            color: #ebeae7 !important;
          }
          .btn-solicitar-cotizacion:hover {
            background-color: #ebeae7 !important;
            color: #1a1c1c !important;
            border-color: #ebeae7 !important;
          }
        `}</style>

        {/* CTA Row */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center w-full relative z-20">
          <a
            href="#proyectos"
            className="btn-ver-proyectos flex md:inline-flex items-center justify-center font-display font-bold text-sm sm:text-base tracking-wide px-6 py-3.5 sm:py-4 transition-colors duration-200 w-full md:w-auto cursor-pointer shadow-lg"
            style={{ letterSpacing: '0.08em' }}
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="btn-solicitar-cotizacion flex md:inline-flex items-center justify-center font-display font-bold text-sm sm:text-base tracking-wide px-6 py-3.5 sm:py-4 transition-colors duration-200 w-full md:w-auto cursor-pointer shadow-lg"
            style={{ letterSpacing: '0.08em' }}
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  )
}
