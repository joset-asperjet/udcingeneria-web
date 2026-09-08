'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: 'inicio' },
  { label: 'Servicios', href: 'nosotros' },
  { label: 'Proyectos', href: 'proyectos' },
  { label: 'Valores', href: 'valores' },
  { label: 'Contratos', href: 'contratos' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#ebeae7]/90 backdrop-blur-md shadow-sm border-b border-[#999d9f]/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2.5 lg:gap-3 cursor-pointer bg-transparent border-0 p-0"
          >
            <img
              src="/images/union-de-colombianos-log-black.webp"
              alt="UDC Ingeniería Logo"
              className="h-9 lg:h-10 w-auto object-contain"
            />
            <span className="h-6 lg:h-7 w-px bg-[#1a1c1c]/20" />
            <div className="flex flex-col text-left leading-none text-[#1a1c1c] uppercase" style={{ letterSpacing: '0.08em' }}>
              <span className="font-display font-semibold text-[11px] lg:text-[12.5px] text-[#1a1c1c]">Unión de Colombianos</span>
              <span className="font-sans font-bold text-[10px] lg:text-[11px] text-[#1a1c1c]/80 mt-1">Ingeniería</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-sans text-xs tracking-normal text-[#1a1c1c] hover:text-[#757f92] transition-colors duration-200 cursor-pointer font-medium bg-transparent border-0 p-0"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contacto')}
              className="font-display font-semibold text-sm tracking-normal px-5 py-2 bg-[#1a1c1c] text-[#ebeae7] border border-[#1a1c1c] hover:bg-[#757f92] hover:border-[#757f92] hover:text-[#1a1c1c] transition-colors duration-200 cursor-pointer"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[#1a1c1c] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-[#1a1c1c] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-[#1a1c1c] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#ebeae7]/95 backdrop-blur-lg border-t border-[#999d9f]/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollToSection(link.href)
                setMenuOpen(false)
              }}
              className="font-display font-semibold text-2xl tracking-normal text-[#1a1c1c] hover:text-[#757f92] transition-colors cursor-pointer bg-transparent border-0 p-0 text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection('contacto')
              setMenuOpen(false)
            }}
            className="font-display font-bold text-base tracking-normal px-6 py-3 bg-[#1a1c1c] text-[#ebeae7] border border-[#1a1c1c] hover:bg-[#757f92] hover:text-[#1a1c1c] text-center mt-2 transition-colors duration-200 cursor-pointer"
          >
            Contáctanos
          </button>
        </nav>
      </div>
    </header>
  )
}
