import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'ASCONTEC — Assessoria Contábil em Maceió | +30 anos',
  description:
    'Há mais de 30 anos levando segurança, clareza e estratégia para a sua empresa. Contabilidade especializada, assessoria fiscal e tributária em Maceió, AL.',
  generator: 'v0.app',
  keywords: [
    'contabilidade Maceió',
    'assessoria contábil',
    'ASCONTEC',
    'contador Maceió',
    'planejamento tributário',
    'contabilidade para médicos',
  ],
  openGraph: {
    title: 'ASCONTEC — Assessoria Contábil em Maceió',
    description:
      'Soluções contábeis e assessoria técnica especializada em Maceió para fazer seu negócio crescer com tranquilidade.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#9b111e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
