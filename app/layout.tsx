// @ts-nocheck
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Taşınabilir Güç Kaynağı Uygulaması - Kullanıcı Kılavuzu',
  description: 'Singo1000, Singo2000Pro, P1800, P3200 ve diğer modeller için Taşınabilir Güç Kaynağı Uygulaması Kullanıcı Kılavuzu V3.0',
  keywords: ['güç kaynağı', 'power station', 'kullanım kılavuzu', 'Landbook', 'Wonderfree', 'Singo1000', 'Singo2000Pro', 'P1800', 'P3200'],
  authors: [{ name: 'Power Station' }],
  openGraph: {
    title: 'Taşınabilir Güç Kaynağı Uygulaması - Kullanıcı Kılavuzu',
    description: 'Singo1000, Singo2000Pro, P1800, P3200 ve diğer modeller için kullanım kılavuzu',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="tr" className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

