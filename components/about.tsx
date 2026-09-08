'use client'

import { useState, useEffect, useRef } from 'react'

const words = ['Confianza', 'Estructuras', 'Obras', 'Futuro']

export default function About() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0)
  const [currentText, setCurrentText] = useState('Confianza')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout
    const handleTyping = () => {
      const fullWord = words[currentWordIdx]
      if (!isDeleting) {
        // Escribiendo
        setCurrentText(fullWord.substring(0, currentText.length + 1))
        if (currentText === fullWord) {
          // Pausa antes de borrar
          timer = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        // Borrando
        setCurrentText(fullWord.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIdx((prev) => (prev + 1) % words.length)
          return
        }
      }
      
      const speed = isDeleting ? 60 : 120
      timer = setTimeout(handleTyping, speed)
    }

    timer = setTimeout(handleTyping, 100)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIdx])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) {
      observer.observe(gridRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="bg-[#ebeae7] pt-16 md:pt-20 pb-16 md:pb-24 border-b border-[#999d9f]/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header centered */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span
            className="font-sans font-bold text-xs tracking-widest uppercase mb-2 block"
            style={{ color: '#C9A843', letterSpacing: '0.22em' }}
          >
            Nuestras Unidades Estratégicas
          </span>
          <h2
            className="font-display font-bold uppercase text-[#1a1c1c] leading-tight text-center max-w-4xl flex flex-col items-center justify-center gap-1 md:gap-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            <span>Soluciones que Construyen</span>
            <span className="flex items-center justify-center text-[#C9A843] min-h-[1.2em] h-[1.2em] w-full relative">
              <span>{currentText || "\u00A0"}</span>
              <span className="animate-pulse font-light ml-1">|</span>
            </span>
          </h2>
        </div>

        {/* Two Columns Grid - Expanded to full width matching the section below */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full mx-auto overflow-hidden px-1 py-1">
          {/* Card 1: Obra Civil */}
          <div 
            className={`relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[350px] lg:min-h-[380px] p-5 md:p-7 lg:p-8 flex flex-col justify-end items-start group transform ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{
              clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out, transform 1s ease-out',
            }}
          >
            {/* Background Image Container with fixed zoom */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/misc/union-de-colombianos-card-1.webp"
                alt="Obra Civil"
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>

            {/* Content in liquid glass box (lower left) */}
            <div className="relative z-10 flex flex-col text-left bg-black/65 border border-white/20 backdrop-blur-lg rounded-xl p-5 md:p-6 lg:p-7 shadow-2xl w-full max-w-[92%] md:max-w-[85%] lg:max-w-[80%] min-h-[160px] md:min-h-[180px]">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-3.5 h-3.5 bg-[#C9A843] rounded-sm shrink-0" />
                <h3 className="font-display font-bold text-[#C9A843] text-lg md:text-xl lg:text-2xl uppercase tracking-wider">
                  Obra Civil
                </h3>
              </div>
              <ul className="space-y-1.5 md:space-y-2 font-sans text-white/90 text-xs md:text-sm lg:text-base list-disc pl-5">
                <li>Movimiento de tierras</li>
                <li>Estructura y cimentación en concreto</li>
                <li>Mampostería</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Acabados */}
          <div 
            className={`relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[350px] lg:min-h-[380px] p-5 md:p-7 lg:p-8 flex flex-col justify-end items-start group transform ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
            style={{
              clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out, transform 1s ease-out',
            }}
          >
            {/* Background Image Container with fixed zoom */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/misc/union-de-colombianos-card-2.webp"
                alt="Acabados"
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>

            {/* Content in liquid glass box (lower left) */}
            <div className="relative z-10 flex flex-col text-left bg-black/65 border border-white/20 backdrop-blur-lg rounded-xl p-5 md:p-6 lg:p-7 shadow-2xl w-full max-w-[92%] md:max-w-[85%] lg:max-w-[80%] min-h-[160px] md:min-h-[180px]">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-3.5 h-3.5 bg-[#C9A843] rounded-sm shrink-0" />
                <h3 className="font-display font-bold text-[#C9A843] text-lg md:text-xl lg:text-2xl uppercase tracking-wider">
                  Acabados
                </h3>
              </div>
              <ul className="space-y-1.5 md:space-y-2 font-sans text-white/90 text-xs md:text-sm lg:text-base list-disc pl-5">
                <li>Estuco y pintura</li>
                <li>Sistema liviano</li>
                <li>Enchape de muro y pisos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
