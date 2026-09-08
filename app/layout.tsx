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
  title: 'UDC Ingeniería — Innovación que Edifica, Ingeniería que Trasciende',
  description:
    'Empresa de construcción y consultoría comprometida con la excelencia en ejecución de proyectos de obra civil. Diseñamos, ejecutamos y supervisamos con altos estándares de calidad, cumplimiento y eficiencia.',
  keywords:
    'ingeniería civil, construcción, obra civil, acabados, Colombia, Cali, UDC, Unión de Colombianos',
  authors: [{ name: 'UDC Ingeniería' }],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1c1c',
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
