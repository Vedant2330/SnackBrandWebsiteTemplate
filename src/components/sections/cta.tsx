'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Leaf, Flame, Dumbbell, Slash, Truck, RefreshCw, Shield, Heart } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-lg relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-manju-charcoal-950 via-manju-charcoal-900 to-manju-charcoal-950" />
      <div className="absolute inset-0 bg-[url('/images/patterns/noise.png')] opacity-5" />
      
      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-manju-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-manju-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-manju-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="px-4 py-1.5 rounded-full bg-manju-yellow-500/20 text-manju-yellow-300 text-caption font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Ready to Start Your Millet Journey?
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            id="cta-title"
            className="font-display font-bold text-heading-2xl lg:text-heading-4xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Join 50,000+ Families
            <br />
            <span className="bg-gradient-to-r from-manju-yellow-400 via-manju-orange-400 to-manju-yellow-400 bg-clip-text text-transparent">
              Choosing Healthy Bhi Tasty Bhi
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-body-lg lg:text-body-xl text-manju-cream-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Discover 60+ roasted millet snacks, noodles, khakhra & pasta. No palm oil.
            No preservatives. Just honest nutrition that tastes like home.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link href="/shop">
              <Button size="xl" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right" className="min-w-[280px]">
                Shop All Products
              </Button>
            </Link>
            <Link href="/our-story">
              <Button variant="outline" size="xl" className="min-w-[280px] border-manju-cream-300 text-white hover:bg-manju-charcoal-800">
                Our Story
              </Button>
            </Link>
          </motion.div>

          {/* Benefits Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[
              { icon: Leaf, title: 'High Fiber', desc: '4g+ per serving' },
              { icon: Flame, title: 'Roasted', desc: 'Never fried' },
              { icon: Dumbbell, title: 'Protein Rich', desc: 'Up to 9g' },
              { icon: Slash, title: 'No Palm Oil', desc: 'Zero, always' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-manju-yellow-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-manju-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-manju-yellow-400" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="font-body font-semibold text-body-md text-white">{benefit.title}</p>
                  <p className="text-body-sm text-manju-cream-400">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            className="mt-16 lg:mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'Orders above ₹499' },
              { icon: RefreshCw, title: 'Easy Returns', desc: '15-day hassle-free' },
              { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
              { icon: Heart, title: 'Loved by 50K+', desc: 'Families across India' },
            ].map((signal, index) => (
              <motion.div
                key={signal.title}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <signal.icon className="w-6 h-6 text-manju-yellow-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-semibold text-body-md text-white">{signal.title}</p>
                  <p className="text-body-sm text-manju-cream-400">{signal.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}