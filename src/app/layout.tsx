import type { ReactElement } from 'react'
import { inter, spaceGrotesk, jetbrainsMono } from './layout.config'
import './globals.css'
import { Providers } from './providers'
import { LenisProvider } from '@/components/providers/lenis-provider'

export default function RootLayout({
  children,
}: {
  children: ReactElement
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://manjufoods.com" />
      </head>
      <body className="min-h-screen bg-white text-manju-charcoal-900 antialiased">
        <LenisProvider>
          <Providers>{children}</Providers>
        </LenisProvider>
      </body>
    </html>
  )
}