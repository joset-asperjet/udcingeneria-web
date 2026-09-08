'use client'

import { useEffect, useState, useRef } from 'react'

const stats = [
  {
    value: '+15',
    label: 'Proyectos',
    sub: 'Nacionales',
  },
  {
    value: '+$6.400 MM',
    label: 'Contratos',
    sub: 'Ejecutados',
    highlight: true,
  },
  {
    value: '100%',
    label: 'Compromiso',
    sub: 'Garantizado',
  },
  {
    value: '+10',
    label: 'Aliados',
    sub: 'del Sector',
  },
]

function AnimatedCounter({ value }: { value: string }) {
  const [currentNum, setCurrentNum] = useState('0')
  const [prefix, setPrefix] = useState('')
  const [suffix, setSuffix] = useState('')
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Buscar la parte numérica en el valor (por ejemplo: "15", "6.400", "100", "10")
    const match = value.match(/([\d.]+)/)
    if (!match) {
      setCurrentNum(value)
      return
    }

    const rawNumStr = match[1] // e.g. "15", "6.400", "100", "10"
    const hasDot = rawNumStr.includes('.')
    
    // Limpiar para parsear como float
    const isThousandsDot = rawNumStr === '6.400' // Caso específico del valor "6.400"
    const parsedNum = isThousandsDot ? 6.4 : parseFloat(rawNumStr)

    const pref = value.substring(0, value.indexOf(rawNumStr))
    const suff = value.substring(value.indexOf(rawNumStr) + rawNumStr.length)
    setPrefix(pref)
    setSuffix(suff)

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 1500
          const startTime = performance.now()

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const current = start + easeProgress * (parsedNum - start)

            if (isThousandsDot) {
              setCurrentNum(current.toFixed(3))
            } else if (hasDot && !isThousandsDot) {
              setCurrentNum(current.toFixed(1))
            } else {
              setCurrentNum(Math.floor(current).toString())
            }

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCurrentNum(rawNumStr)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [value])

  return (
    <span ref={elementRef}>
      {prefix}
      {currentNum}
      {suffix && (
        <span className={suffix.trim() === 'MM' ? 'text-[0.45em] sm:text-[0.55em] md:text-[0.6em] ml-0.5 font-bold' : ''}>
          {suffix}
        </span>
      )}
    </span>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-background border-y border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col justify-center items-center text-center px-2 sm:px-6 md:px-12 py-6 md:py-10 border-r border-border last:border-r-0 ${
                stat.highlight ? 'bg-gold/5' : ''
              }`}
            >
              <span
                className="font-display font-black uppercase leading-none mb-1"
                style={{ color: '#C9A843', fontSize: stat.highlight ? 'clamp(0.9rem, 2.1vw, 2.5rem)' : 'clamp(1.1rem, 2.5vw, 2.75rem)' }}
              >
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="font-sans text-foreground text-[9px] sm:text-xs md:text-sm font-medium leading-tight mb-0.5 uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="font-sans text-muted-foreground text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase" style={{ letterSpacing: '0.08em' }}>
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
