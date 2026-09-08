'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

const clientLogos = [
  '/images/clients-logos/25.png',
  '/images/clients-logos/26.png',
  '/images/clients-logos/27.png',
  '/images/clients-logos/28.png',
  '/images/clients-logos/29.png',
  '/images/clients-logos/30.png',
  '/images/clients-logos/31.png',
  '/images/clients-logos/32.png',
]

const navColumns = [
  {
    title: 'Navegación',
    links: [
      { label: 'Inicio', href: 'inicio' },
      { label: 'Servicios', href: 'nosotros' },
      { label: 'Proyectos', href: 'proyectos' },
      { label: 'Valores', href: 'valores' },
      { label: 'Contacto', href: 'contacto' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Obra Civil', href: 'nosotros' },
      { label: 'Acabados', href: 'nosotros' },
    ],
  },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-background border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 py-16 md:py-20">
          {/* Brand column */}
          <div className="lg:col-span-5 lg:pr-16 mb-12 lg:mb-0">
            {/* Logo */}
            <div className="mb-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="inline-flex items-center gap-2 lg:gap-3 cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                <img
                  src="/images/union-de-colombianos-log-black.webp"
                  alt="UDC Ingeniería Logo"
                  className="h-7 lg:h-10 w-auto object-contain invert"
                />
                <span className="h-5 lg:h-7 w-px bg-white/30" />
                <div className="flex flex-col text-left leading-none text-white uppercase" style={{ letterSpacing: '0.08em' }}>
                  <span className="font-display font-semibold text-[11px] lg:text-[12.5px] text-white">Unión de Colombianos</span>
                  <span className="font-sans font-bold text-[10px] lg:text-[11px] text-white/80 mt-1">Ingeniería</span>
                </div>
              </button>
            </div>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              Construimos infraestructura con excelencia, cumpliendo compromisos
              y generando confianza. Desde la planeación hasta la entrega final,
              somos su aliado estratégico.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/udcingenieriasas/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border/80 hover:border-gold hover:text-gold text-muted-foreground transition-all duration-200 rounded-lg bg-surface/50 hover:scale-105"
                aria-label="LinkedIn de UDC Ingeniería"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/UDC-Ingenier%C3%ADa-61582526756109/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border/80 hover:border-gold hover:text-gold text-muted-foreground transition-all duration-200 rounded-lg bg-surface/50 hover:scale-105"
                aria-label="Facebook de UDC Ingeniería"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/udc_ingenieria_sas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border/80 hover:border-gold hover:text-gold text-muted-foreground transition-all duration-200 rounded-lg bg-surface/50 hover:scale-105"
                aria-label="Instagram de UDC Ingeniería"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col, i) => (
            <div
              key={i}
              className="lg:col-span-2 lg:px-10 mb-10 lg:mb-0"
            >
              <span className="block font-sans text-foreground text-xs uppercase tracking-widest mb-6" style={{ letterSpacing: '0.2em' }}>
                {col.title}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="font-sans text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-3 lg:pl-10">
            <span className="block font-sans text-foreground text-xs uppercase tracking-widest mb-6" style={{ letterSpacing: '0.2em' }}>
              Contacto
            </span>
            <ul className="flex flex-col gap-4">
              {[
                { label: '301 773 6853', href: 'tel:+573017736853', icon: Phone },
                { label: '310 442 4064', href: 'tel:+573104424064', icon: Phone },
                { label: 'gerencia@udcingenieria.com', href: 'mailto:gerencia@udcingenieria.com', icon: Mail },
                { label: 'ingenieria@udcingenieria.com', href: 'mailto:ingenieria@udcingenieria.com', icon: Mail },
                { label: 'Cali, Colombia', href: '#', icon: MapPin },
              ].map((item, j) => {
                const IconComponent = item.icon
                return (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <a
                      href={item.href}
                      className="font-sans text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 break-all"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="py-6 overflow-hidden">
          <div className="marquee-container-footer relative w-full">
            <div className="flex gap-16 items-center w-max animate-marquee-left">
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Cliente UDC"
                  className="h-8 md:h-10 w-auto object-contain opacity-35 filter brightness-0 invert hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="font-sans text-muted-foreground text-xs">
            © 2026 Unión de Colombianos Ingeniería SAS — Todos los derechos reservados.
          </span>
          <span className="font-sans text-muted-foreground text-xs uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
            Cali, Colombia
          </span>
        </div>
      </div>

      {/* Style block for infinite footer marquee */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .marquee-container-footer {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </footer>
  )
}
