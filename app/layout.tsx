import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.udcingenieria.com'),
  title: 'UDC Ingeniería — Innovación que Edifica, Ingeniería que Trasciende',
  description:
    'Diseñamos, ejecutamos y supervisamos proyectos de infraestructura y obra civil con altos estándares de calidad, cumplimiento y eficiencia.',
  keywords: [
    'ingeniería civil',
    'construcción',
    'obra civil',
    'infraestructura',
    'supervisión de obras',
    'Colombia',
    'Cali',
    'UDC',
    'Unión de Colombianos',
  ],
  authors: [{ name: 'UDC Ingeniería', url: 'https://www.udcingenieria.com' }],
  creator: 'UDC Ingeniería',
  publisher: 'UDC Ingeniería',
  alternates: {
    canonical: 'https://www.udcingenieria.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.udcingenieria.com/',
    title: 'UDC Ingeniería — Innovación que Edifica, Ingeniería que Trasciende',
    description:
      'Diseñamos, ejecutamos y supervisamos proyectos de infraestructura y obra civil con altos estándares de calidad, cumplimiento y eficiencia.',
    siteName: 'UDC Ingeniería',
    images: [
      {
        url: '/images/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'UDC Ingeniería — Innovación que Edifica, Ingeniería que Trasciende',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UDC Ingeniería — Innovación que Edifica, Ingeniería que Trasciende',
    description:
      'Diseñamos, ejecutamos y supervisamos proyectos de infraestructura y obra civil con altos estándares de calidad, cumplimiento y eficiencia.',
    images: ['/images/opengraph.jpg'],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏗️</text></svg>",
        type: 'image/svg+xml',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${montserrat.className} bg-background`}
    >
      <body className={`${montserrat.className} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
