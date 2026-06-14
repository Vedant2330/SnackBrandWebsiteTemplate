import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  fallback: ['monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://manjufoods.com'),
  title: {
    default: 'Manju Foods | Healthy Bhi Tasty Bhi — Millet Snacks, Noodles & More',
    template: '%s | Manju Foods',
  },
  description:
    'Discover 60+ millet-based snacks, noodles, pasta, khakhra, cookies & breakfast mixes. Roasted not fried, no palm oil, gluten-free options. Healthy Bhi Tasty Bhi — 15 years of trusted nutrition.',
  keywords: [
    'millet snacks',
    'healthy snacks India',
    'millet noodles',
    'roasted snacks',
    'gluten free snacks',
    'khakhra online',
    'healthy breakfast mix',
    'millet pasta',
    'protein snacks',
    'no palm oil snacks',
  ],
  authors: [{ name: 'Manju Foods' }],
  creator: 'Manju Foods',
  publisher: 'Manju Foods',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://manjufoods.com',
    siteName: 'Manju Foods',
    title: 'Manju Foods | Healthy Bhi Tasty Bhi',
    description:
      '60+ millet-based snacks, noodles, pasta, khakhra & cookies. Roasted not fried, no palm oil. Healthy Bhi Tasty Bhi.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Manju Foods - Healthy Millet Snacks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manju Foods | Healthy Bhi Tasty Bhi',
    description: 'Millet snacks, noodles, khakhra & more. Roasted not fried. No palm oil.',
    images: ['/images/og-default.jpg'],
    creator: '@manju_foods_',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFEB3B' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}