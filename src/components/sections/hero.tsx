'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, Leaf, Flame, Dumbbell, Slash } from 'lucide-react'
import { BRAND_BENEFITS } from '@/lib/constants'

export function Hero() {
  const scrollY = useScroll()
  const y = useTransform(scrollY.scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY.scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20" aria-labelledby="hero-title">
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-manju-cream-50 via-white to-manju-yellow-50/30" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-manju-yellow-200/50 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-manju-orange-200/50 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-manju-yellow-300/20 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern-yellow opacity-50" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-24 left-8 w-16 h-16"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Leaf className="w-full h-full text-manju-yellow-400/60" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-16 w-12 h-12"
          animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-full h-full text-manju-orange-400/60" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 w-14 h-14"
          animate={{ x: [0, 15, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Dumbbell className="w-full h-full text-manju-sage-400/60" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-24 w-10 h-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Flame className="w-full h-full text-manju-orange-400/60" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Badge variant="yellow" size="lg" icon={<Sparkles className="w-4 h-4" />}>
                Healthy Bhi Tasty Bhi
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-title"
              className="font-display font-bold text-heading-2xl lg:text-heading-3xl lg:leading-[1.1] text-manju-charcoal-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Millet Snacks That
              <br />
              <span className="gradient-text">Nourish & Delight</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-body-lg lg:text-body-xl text-manju-charcoal-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Discover 60+ roasted-not-fried snacks, noodles, pasta & khakhra made from ancient grains.
              No palm oil. No preservatives. Just pure, honest nutrition.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-2 text-body-sm text-manju-charcoal-600">
                <Leaf className="w-5 h-5 text-manju-sage-500" />
                <span>100% Millet-Based</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-manju-charcoal-600">
                <Flame className="w-5 h-5 text-manju-orange-500" />
                <Slash className="w-5 h-5" />
                <span>Roasted, Not Fried</span>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-manju-charcoal-600">
                <Dumbbell className="w-5 h-5 text-manju-yellow-600" />
                <span>High Protein & Fiber</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href="/shop">
                <Button size="xl" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Shop All Products
                </Button>
              </Link>
              <Link href="/our-story">
                <Button variant="outline" size="xl">
                  Our Story
                </Button>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              className="mt-16 pt-8 border-t border-manju-cream-200 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div>
                <div className="font-display font-bold text-heading-xl text-manju-charcoal-900">60+</div>
                <div className="text-body-sm text-manju-charcoal-500">Products</div>
              </div>
              <div>
                <div className="font-display font-bold text-heading-xl text-manju-charcoal-900">15+</div>
                <div className="text-body-sm text-manju-charcoal-500">Years Trust</div>
              </div>
              <div>
                <div className="font-display font-bold text-heading-xl text-manju-charcoal-900">50K+</div>
                <div className="text-body-sm text-manju-charcoal-500">Happy Customers</div>
              </div>
              <div>
                <div className="font-display font-bold text-heading-xl text-manju-charcoal-900">200+</div>
                <div className="text-body-sm text-manju-charcoal-500">Retail Partners</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Main product showcase area */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-manju-yellow-100 via-manju-cream-100 to-manju-orange-100 overflow-hidden">
                {/* Placeholder for 3D product or hero image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 text-center p-8">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto mb-6 relative">
                      {/* Product image placeholder with floating animation */}
                      <motion.div
                        className="relative"
                        animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-manju-orange-400 via-manju-yellow-400 to-manju-orange-500 flex items-center justify-center shadow-shadow-2xl">
                          <span className="font-display font-bold text-6xl lg:text-8xl text-manju-charcoal-900/20">🥨</span>
                        </div>
                      </motion.div>
                      
                      {/* Floating benefit badges around product */}
                      <motion.div
                        className="absolute -top-4 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      >
                        <Badge variant="yellow" size="sm" icon={<Leaf className="w-3 h-3" />} className="shadow-lg">
                          High Fiber
                        </Badge>
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-1/2 -right-6"
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      >
                        <Badge variant="orange" size="sm" icon={<Flame className="w-3 h-3" />} className="shadow-lg">
                          Roasted
                        </Badge>
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                      >
                        <Badge variant="sage" size="sm" icon={<Dumbbell className="w-3 h-3" />} className="shadow-lg">
                          Protein Rich
                        </Badge>
                      </motion.div>
                    </div>
                    
                    <p className="text-body-md text-manju-charcoal-600 font-medium">
                      Premium Millet Snacks — <span className="text-manju-charcoal-900">Crafted with Care</span>
                    </p>
                  </div>
                </div>

                {/* Decorative accents */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-manju-yellow-300/50 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-manju-orange-300/50 rounded-full blur-2xl" />
              </div>

              {/* Floating nutrition cards */}
              <div className="absolute inset-0 pointer-events-none">
                {BRAND_BENEFITS.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    className="absolute"
                    style={{
                      top: index === 0 ? '10%' : index === 1 ? '50%' : '80%',
                      left: index === 0 ? '5%' : index === 1 ? '85%' : '10%',
                      transform: index === 1 ? 'translateY(-50%)' : undefined,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  >
                    <div className="w-48 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-shadow-lg border border-manju-cream-200 text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-manju-yellow-100 flex items-center justify-center">
                        {benefit.icon === 'fiber' && <Leaf className="w-5 h-5 text-manju-sage-500" />}
                        {benefit.icon === 'protein' && <Dumbbell className="w-5 h-5 text-manju-yellow-600" />}
                        {benefit.icon === 'roasted' && <Flame className="w-5 h-5 text-manju-orange-500" />}
                      </div>
                      <p className="text-caption font-medium text-manju-charcoal-700">{benefit.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-manju-charcoal-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <span className="text-caption">Scroll to explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}