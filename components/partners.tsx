const clientLogos = [
  '/images/clients-logos/25.png',
  '/images/clients-logos/26.png',
  '/images/clients-logos/27.png',
  '/images/clients-logos/28.png',
  '/images/clients-logos/29.png',
]

export default function Partners() {
  return (
    <section className="bg-[#ebeae7] py-16 md:py-20 border-t border-[#999d9f]/20 border-b">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="block w-8 h-px bg-[#757f92]" />
          <span
            className="font-sans text-[#757f92] font-bold text-xs tracking-widest uppercase"
            style={{ letterSpacing: '0.22em' }}
          >
            Nuestros Aliados
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">
          {/* Title */}
          <div className="lg:col-span-4 lg:pr-16 lg:border-r lg:border-[#999d9f]/30">
            <h2
              className="font-display font-black uppercase text-[#1a1c1c] leading-none"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', lineHeight: '0.95' }}
            >
              Trabajamos con
              <br />
              Grandes
              <br />
              <span className="text-[#757f92]">Compañías</span>
            </h2>
          </div>

          {/* Partner logos — image style */}
          <div className="lg:col-span-8 lg:pl-16">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-items-center">
              {clientLogos.map((src, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-4 bg-[#ffffff]/60 hover:bg-[#ffffff] transition-all duration-300 rounded-xl w-full h-24 border border-[#999d9f]/20 hover:border-[#757f92]/50 shadow-sm hover:shadow-md"
                >
                  <img
                    src={src}
                    alt="Logo de cliente aliado"
                    className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 filter brightness-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
