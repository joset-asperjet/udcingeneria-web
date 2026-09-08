'use client'

import { useState, useEffect } from 'react'

export default function SocialFloatingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Start collapsed so it expands after WhatsApp appears

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false) // Collapse automatically when scrolled back up
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-expand the social pill after the main widget/WhatsApp button fades in
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 700) // Delay the expand animation by 700ms
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div 
      className={`fixed right-5 bottom-6 z-50 flex flex-col items-center gap-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
      }`}
    >
      {/* Retract/Collapse Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-card border border-border shadow-xl rounded-full flex items-center justify-center text-gold hover:text-white hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
        aria-label={isOpen ? "Contraer redes sociales" : "Expandir redes sociales"}
      >
        <svg
          className={`w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? '' : 'rotate-180'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

      {/* Main Social Links Pill Wrapper using CSS Grid for butter-smooth transition */}
      <div
        className="transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] grid w-full"
        style={{ 
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="overflow-hidden w-full flex justify-center">
          <div className="bg-card border border-border shadow-xl rounded-full py-4 px-3.5 flex flex-col items-center gap-4 my-1">
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/p/UDC-Ingenier%C3%ADa-61582526756109/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors duration-250 hover:scale-110 transform"
              aria-label="Facebook de UDC Ingeniería"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* Divider */}
            <span className="w-5 h-px bg-white/10" />

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/udc_ingenieria_sas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors duration-250 hover:scale-110 transform"
              aria-label="Instagram de UDC Ingeniería"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Divider */}
            <span className="w-5 h-px bg-white/10" />

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/udcingenieriasas/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors duration-250 hover:scale-110 transform"
              aria-label="LinkedIn de UDC Ingeniería"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Separate WhatsApp Button */}
      <a
        href="https://wa.me/573017736853"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#C9A843] border border-[#C9A843] shadow-xl rounded-full flex items-center justify-center text-[#1a1c1c] hover:bg-[#1a1c1c] hover:text-[#C9A843] hover:border-[#1a1c1c] transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Chat por WhatsApp con UDC Ingeniería"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
