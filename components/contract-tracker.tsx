'use client'

import { useState } from 'react'

type Contract = {
  id: number
  contractor: string
  object: string
  client: string
  startDate: string
  endDate: string
  progress: number
  value: number
  status: 'EN EJECUCIÓN' | 'FINALIZADO'
}

const contracts: Contract[] = [
  {
    id: 1,
    contractor: 'Fundación Unión de Colombianos',
    object: 'Mano de Obra Civil — Construcción de Torres de Oncología en HUV',
    client: 'Consorcio Pro-Contein',
    startDate: '11/11/2024',
    endDate: '30/01/2026',
    progress: 96,
    value: 1400000000,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 2,
    contractor: 'Fundación Unión de Colombianos',
    object: 'Mano de Obra Civil — Muro de Contención Guaduales',
    client: 'Consorcio Guaduales',
    startDate: '28/10/2024',
    endDate: '30/06/2026',
    progress: 49,
    value: 500000000,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 3,
    contractor: 'Fundación Unión de Colombianos',
    object: 'Restauración de Estaciones Férreas del Municipio de Suárez',
    client: 'Consorcio San Joaquín',
    startDate: '05/05/2025',
    endDate: '01/09/2025',
    progress: 18,
    value: 410000000,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 4,
    contractor: 'UDC Ingeniería SAS',
    object: 'Mano de Obra Civil y Acabados Estuco, Pintura y Enchapes — Cárcel El Pilamo',
    client: 'Consorcio Pro-Contein USPEC',
    startDate: '09/06/2025',
    endDate: '28/02/2026',
    progress: 13,
    value: 1320000000,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 5,
    contractor: 'UDC Ingeniería SAS',
    object: 'Construcción de Plataformas de Torre 2 — Chipichape Gardens',
    client: 'Constructora Indico',
    startDate: '14/07/2025',
    endDate: '28/02/2026',
    progress: 58,
    value: 600000000,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 6,
    contractor: 'UDC Ingeniería SAS',
    object: 'Construcción de Zonas Comunes y Plataformas — Proyecto Saint Patrick',
    client: 'Constructora Indico',
    startDate: '14/07/2025',
    endDate: '01/10/2025',
    progress: 83,
    value: 550000000,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 7,
    contractor: 'UDC Ingeniería SAS',
    object: 'Mano de Obra para Estuco, Pintura, Enchapes, Morteros — Proyecto Cantoverde',
    client: 'Constructora Gamboa',
    startDate: '22/12/2025',
    endDate: '28/02/2026',
    progress: 0,
    value: 235166333,
    status: 'EN EJECUCIÓN',
  },
  {
    id: 8,
    contractor: 'Fundación Unión de Colombianos',
    object: 'Mano de Obra Civil — Construcción de Oficinas Admón CDAV',
    client: 'Consorcio CDAV 2023',
    startDate: '01/04/2024',
    endDate: '01/02/2025',
    progress: 100,
    value: 530000000,
    status: 'FINALIZADO',
  },
  {
    id: 9,
    contractor: 'Fundación Unión de Colombianos',
    object: 'Remodelación Laboratorio Ambiental CVC',
    client: 'Consorcio Alianza CVC',
    startDate: '18/01/2024',
    endDate: '30/03/2025',
    progress: 100,
    value: 650000000,
    status: 'FINALIZADO',
  },
  {
    id: 10,
    contractor: 'Fundación Unión de Colombianos',
    object: 'Mano de Obra Civil — Nuevo Hospital La Buena Esperanza de Yumbo',
    client: 'Consorcio Yumbo 2023',
    startDate: '01/09/2024',
    endDate: '30/12/2024',
    progress: 100,
    value: 300000000,
    status: 'FINALIZADO',
  },
]

function formatCurrency(n: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n)
}

function formatMM(n: number) {
  const mm = n / 1_000_000
  if (mm >= 1000) {
    return `$${(mm / 1000).toFixed(1).replace('.0', '')} MIL MM`
  }
  return `$${Math.round(mm).toLocaleString('es-CO')} MM`
}

type Filter = 'TODOS' | 'EN EJECUCIÓN' | 'FINALIZADO'

export default function ContractTracker() {
  const [activeFilter, setActiveFilter] = useState<Filter>('FINALIZADO')
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const filtered = activeFilter === 'TODOS'
    ? contracts
    : contracts.filter((c) => c.status === activeFilter)

  const inExecution = contracts.filter((c) => c.status === 'EN EJECUCIÓN')
  const completed = contracts.filter((c) => c.status === 'FINALIZADO')
  const totalValueExec = inExecution.reduce((s, c) => s + c.value, 0)
  const totalValueDone = completed.reduce((s, c) => s + c.value, 0)
  const totalValue = totalValueExec + totalValueDone

  const filters: { label: string; value: Filter; count: number }[] = [
    { label: 'Finalizados', value: 'FINALIZADO', count: completed.length },
    { label: 'Todos', value: 'TODOS', count: contracts.length },
    { label: 'En Ejecución', value: 'EN EJECUCIÓN', count: inExecution.length },
  ]

  return (
    <section id="contratos" className="bg-background py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px" style={{ backgroundColor: '#C9A843' }} />
              <span
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: '#C9A843', letterSpacing: '0.22em' }}
              >
                Trazabilidad Contractual
              </span>
            </div>
            <h2
              className="font-display font-black uppercase text-foreground leading-none text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '0.95' }}
            >
              Registro de
              <br />
              <span style={{ color: '#C9A843' }}>Contratos</span>
            </h2>
          </div>
          <p className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed max-w-md md:text-right">
            Transparencia total en nuestra gestión. Cada contrato registrado con su avance, valor y estado actualizado.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
          {[
            { label: 'Total Contratos', value: contracts.length.toString(), sub: 'Registrados' },
            { label: 'Total Acumulado', value: formatMM(totalValue), sub: formatCurrency(totalValue) },
            { label: 'En Ejecución', value: formatMM(totalValueExec), sub: `${inExecution.length} contratos activos` },
            { label: 'Finalizados', value: formatMM(totalValueDone), sub: `${completed.length} contratos entregados` },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#111]/80 border border-border/40 p-4 md:p-6 flex flex-col gap-1 rounded-lg hover:border-[#C9A843]/30 transition-colors duration-300"
            >
              <span className="font-sans text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                {stat.label}
              </span>
              <span className="font-display font-black text-lg md:text-2xl leading-tight" style={{ color: '#C9A843' }}>
                {stat.value}
              </span>
              <span className="font-sans text-muted-foreground text-[10px] md:text-xs mt-0.5 truncate">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="grid grid-cols-3 sm:flex sm:items-center gap-1 mb-6 md:mb-8 border-b border-border/40 pb-0 w-full">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => { setActiveFilter(f.value); setExpandedCard(null) }}
              className={`cursor-pointer relative font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-tight sm:tracking-wider px-1 sm:px-4 md:px-6 py-2.5 sm:py-3 transition-all duration-300 border-b-2 flex items-center justify-center sm:justify-start whitespace-nowrap ${
                activeFilter === f.value
                  ? 'text-[#C9A843] border-[#C9A843] font-semibold'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              <span>{f.label}</span>
              <span className={`ml-1 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                activeFilter === f.value ? 'bg-[#C9A843]/20 text-[#C9A843]' : 'bg-border/30 text-muted-foreground'
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Contract Cards */}
        <div className="flex flex-col gap-3">
          {filtered.map((contract) => {
            const isExpanded = expandedCard === contract.id
            const isActive = contract.status === 'EN EJECUCIÓN'

            return (
              <div
                key={contract.id}
                onClick={() => setExpandedCard(isExpanded ? null : contract.id)}
                className={`group bg-[#111]/60 border rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isExpanded
                    ? 'border-gold/40 shadow-lg shadow-gold/5'
                    : 'border-border/30 hover:border-border/60'
                }`}
              >
                {/* Main Row */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0 px-5 md:px-6 py-4 md:py-5">
                  {/* Number + Status Dot */}
                  <div className="flex items-center gap-3 md:w-10 shrink-0">
                    <span className="font-display font-black text-xs leading-none" style={{ color: '#C9A843' }}>
                      {String(contract.id).padStart(2, '0')}
                    </span>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${
                      isActive ? 'bg-[#C9A843] animate-pulse' : 'bg-emerald-500'
                    }`} />
                  </div>

                  {/* Object + Client */}
                  <div className="flex-1 min-w-0 md:px-4">
                    <p className="font-sans text-foreground text-sm md:text-base font-medium leading-snug truncate">
                      {contract.object}
                    </p>
                    <p className="font-sans text-muted-foreground text-xs mt-0.5 truncate">
                      {contract.client}
                    </p>
                  </div>

                  {/* Progress Bar + Percent (desktop) */}
                  <div className="hidden md:flex items-center gap-3 w-44 shrink-0 px-4">
                    <div className="flex-1 h-1 bg-border/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          contract.progress === 100 ? 'bg-emerald-500' : ''
                        }`}
                        style={{ width: `${contract.progress}%`, backgroundColor: contract.progress === 100 ? '' : '#C9A843' }}
                      />
                    </div>
                    <span className="font-display font-bold text-sm w-10 text-right" style={{ color: '#C9A843' }}>
                      {contract.progress}%
                    </span>
                  </div>

                  {/* Value (desktop) */}
                  <div className="hidden md:block w-36 shrink-0 text-right px-4">
                    <span className="font-display font-bold text-sm" style={{ color: '#C9A843' }}>
                      {formatMM(contract.value).replace(' MM', '')}
                    </span>
                    <span className="text-xs ml-0.5 font-semibold" style={{ color: '#C9A843' }}>MM</span>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between md:justify-end gap-3 md:w-36 shrink-0">
                    {/* Mobile: progress */}
                    <div className="flex md:hidden items-center gap-2 flex-1">
                      <div className="flex-1 h-1 bg-border/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            contract.progress === 100 ? 'bg-emerald-500' : ''
                          }`}
                          style={{ width: `${contract.progress}%`, backgroundColor: contract.progress === 100 ? '' : '#C9A843' }}
                        />
                      </div>
                      <span className="font-display font-bold text-xs w-8 text-right" style={{ color: '#C9A843' }}>
                        {contract.progress}%
                      </span>
                    </div>

                    <span className={`font-sans text-[10px] md:text-xs uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      isActive
                        ? 'bg-gold/10 text-gold border border-gold/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {isActive ? 'Ejecución' : 'Finalizado'}
                    </span>

                    {/* Expand Arrow */}
                    <svg
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-500 shrink-0 ${
                        isExpanded ? 'rotate-180 text-gold' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Detail Panel */}
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2 border-t border-border/20">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                        {/* Contratista */}
                        <div className="flex flex-col gap-1">
                          <span className="font-sans text-muted-foreground text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                            Contratista
                          </span>
                          <span className="font-sans text-foreground text-sm font-medium">
                            {contract.contractor}
                          </span>
                        </div>

                        {/* Contratante */}
                        <div className="flex flex-col gap-1">
                          <span className="font-sans text-muted-foreground text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                            Contratante
                          </span>
                          <span className="font-sans text-foreground text-sm font-medium">
                            {contract.client}
                          </span>
                        </div>

                        {/* Fechas */}
                        <div className="flex flex-col gap-1">
                          <span className="font-sans text-muted-foreground text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                            Periodo
                          </span>
                          <span className="font-sans text-foreground text-sm font-medium">
                            {contract.startDate} — {contract.endDate}
                          </span>
                        </div>

                        {/* Valor */}
                        <div className="flex flex-col gap-1">
                          <span className="font-sans text-muted-foreground text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                            Valor del Contrato
                          </span>
                          <span className="font-display font-bold text-sm" style={{ color: '#C9A843' }}>
                            {formatCurrency(contract.value)}
                          </span>
                        </div>

                        {/* Progress Visual */}
                        <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                          <span className="font-sans text-muted-foreground text-[10px] uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                            Avance
                          </span>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="flex-1 h-2 bg-border/30 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  contract.progress === 100 ? 'bg-emerald-500' : ''
                                }`}
                                style={{ width: `${contract.progress}%`, backgroundColor: contract.progress === 100 ? '' : '#C9A843' }}
                              />
                            </div>
                            <span className="font-display font-black text-lg" style={{ color: '#C9A843' }}>
                              {contract.progress}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Summary */}
        <div className="mt-6 border border-border/30 bg-[#111]/60 rounded-xl px-5 md:px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C9A843' }} />
            <span className="font-sans text-muted-foreground text-sm">
              Mostrando <span className="font-semibold" style={{ color: '#C9A843' }}>{filtered.length}</span> de{' '}
              <span className="font-semibold" style={{ color: '#C9A843' }}>{contracts.length}</span> contratos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-sans text-muted-foreground text-sm">Total acumulado UDC Ingeniería:</span>
            <span className="font-display font-black text-xl md:text-2xl" style={{ color: '#C9A843' }}>
              {formatMM(totalValue).replace(' MM', '')}
              <span className="text-sm ml-1 font-bold" style={{ color: '#C9A843' }}>MM</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
