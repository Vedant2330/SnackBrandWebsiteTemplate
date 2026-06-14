'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Leaf,
  Flame,
  Dumbbell,
  Slash,
  Sprout,
  Award,
  Heart,
  Truck,
  Shield,
  RefreshCw,
  Sparkles,
} from 'lucide-react'
import { BRAND_BENEFITS } from '@/lib/constants'

interface BenefitItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  badge?: string
  badgeColor?: 'yellow' | 'orange' | 'sage'
}

const benefits: BenefitItem[] = [
  {
    id: 'fiber',
    icon: Leaf,
    title: 'Rich in Dietary Fibre',
    description:
      'Our millet-based snacks are naturally high in dietary fiber, supporting healthy digestion and keeping you fuller for longer.',
    badge: '4g+ per serving',
    badgeColor: 'sage',
  },
  {
    id: 'protein',
    icon: Dumbbell,
    title: 'Source of Protein',
    description:
      'Each serving delivers plant-based protein from nutrient-dense millets, perfect for active lifestyles and muscle recovery.',
    badge: 'Up to 9g per serving',
    badgeColor: 'yellow',
  },
  {
    id: 'roasted',
    icon: Flame,
    title: 'Roasted, Not Fried',
    description:
      'We never deep-fry. Our snacks are slowly roasted to crispy perfection, preserving nutrients while cutting unhealthy fats by 70%.',
    badge: '70% less fat',
    badgeColor: 'orange',
  },
  {
    id: 'no-palm-oil',
    icon: Slash,
    title: 'Zero Palm Oil',
    description:
      'Committed to sustainability and heart health — absolutely zero palm oil in any product. Only wholesome, natural ingredients.',
    badge: 'Certified',
    badgeColor: 'sage',
  },
  {
    id: 'gluten-free',
    icon: Sprout,
    title: 'Gluten-Free Range',
    description:
      'Specially crafted gluten-free options using millets like jowar, ragi, and bajra — safe for celiac and gluten-sensitive diets.',
    badge: 'Certified GF',
    badgeColor: 'sage',
  },
  {
    id: 'millet-based',
    icon: Award,
    title: 'Ancient Grains, Modern Snacking',
    description:
      'Reviving the power of millets — jowar, bajra, ragi, and multi-millet blends — for nutrition that stands the test of time.',
    badge: '4+ millet varieties',
    badgeColor: 'yellow',
  },
]

const trustSignals = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹499' },
  { icon: RefreshCw, title: 'Easy Returns', desc: '15-day hassle-free returns' },
  { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
  { icon: Heart, title: 'Loved by 50K+', desc: 'Families across India' },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="section-lg relative bg-white"
      aria-labelledby="why-choose-title"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-manju-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-manju-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-manju-yellow-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Badge variant="yellow" size="lg" className="mb-4" icon={<Sparkles className="w-4 h-4" />}>
            Why Manju Foods
          </Badge>
          <h2
            id="why-choose-title"
            className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900 mb-4"
          >
            Snacking That
            <br />
            <span className="gradient-text">Nourishes Body & Soul</span>
          </h2>
          <p className="text-body-lg text-manju-charcoal-600">
            Every product is crafted with our non-negotiable promise: roasted never fried, zero palm oil,
            ancient grains, and flavors that taste like home. This isn't just snacking — it's a return to
            wisdom that sustained generations.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card variant="premium" padding="lg" className="h-full group">
                <div className="w-14 h-14 rounded-2xl bg-manju-yellow-100 flex items-center justify-center mb-6 group-hover:bg-manju-yellow-200 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-manju-yellow-600" aria-hidden="true" />
                </div>

                {benefit.badge && (
                  <Badge variant={benefit.badgeColor!} size="sm" className="mb-4">
                    {benefit.badge}
                  </Badge>
                )}

                <h3 className="font-display font-semibold text-heading-md text-manju-charcoal-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-body-md text-manju-charcoal-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {trustSignals.map((signal, index) => (
            <div
              key={signal.title}
              className="flex items-start gap-4 p-6 bg-manju-cream-50 rounded-2xl border border-manju-cream-200 hover:border-manju-yellow-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-manju-yellow-100 flex items-center justify-center flex-shrink-0">
                <signal.icon className="w-6 h-6 text-manju-yellow-600" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-body-lg text-manju-charcoal-900">
                  {signal.title}
                </h4>
                <p className="text-body-sm text-manju-charcoal-500 mt-1">{signal.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}