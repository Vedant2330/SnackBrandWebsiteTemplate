import { Metadata, Viewport } from 'next'
import { Hero } from '@/components/sections/hero'
import { ProductShowcase } from '@/components/sections/product-showcase'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { BrandStory } from '@/components/sections/brand-story'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'
import { Newsletter } from '@/components/sections/newsletter'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    default: 'Manju Foods | Healthy Bhi Tasty Bhi — Millet Snacks, Noodles, Khakhra & More',
    template: '%s | Manju Foods',
  },
  description:
    'Discover 60+ roasted millet snacks, noodles, khakhra & pasta. No palm oil. No preservatives. Just honest nutrition that tastes like home. Healthy Bhi Tasty Bhi.',
  keywords: [
    'millet snacks',
    'healthy snacks',
    'millet noodles',
    'khakhra',
    'roasted snacks',
    'no palm oil',
    'gluten free snacks',
    'healthy Indian snacks',
    'millet pasta',
    'protein snacks',
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
      '60+ roasted millet snacks, noodles, khakhra & pasta. No palm oil. No preservatives. Just honest nutrition.',
    images: [
      {
        url: '/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Manju Foods - Healthy Bhi Tasty Bhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manju Foods | Healthy Bhi Tasty Bhi',
    description: '60+ roasted millet snacks. No palm oil. No preservatives.',
    images: ['/images/og/home.jpg'],
    creator: '@manju_foods_',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF7CD' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-16 lg:pt-20">
        <Hero />
        <WhyChooseUs />
        <ProductShowcase />
        <BrandStory />
        <Testimonials />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}