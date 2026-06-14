'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Leaf, Award, Heart, Sparkles, Users, Clock } from 'lucide-react'
import { BRAND_STORY } from '@/lib/constants'

interface StoryIcons {
  leaf: typeof Leaf
  award: typeof Award
  heart: typeof Heart
  sparkles: typeof Sparkles
  users: typeof Users
  clock: typeof Clock
}

const storyIcons: StoryIcons = {
  leaf: Leaf,
  award: Award,
  heart: Heart,
  sparkles: Sparkles,
  users: Users,
  clock: Clock,
}

type StoryIconKey = keyof StoryIcons

export function BrandStory() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-100px' })
  const rightInView = useInView(rightRef, { once: true, margin: '-100px' })

  return (
    <section className="section-lg relative bg-gradient-to-b from-manju-cream-50 via-white to-manju-yellow-50/30" aria-labelledby="story-title">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual Timeline */}
          <motion.div
            ref={leftRef}
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Timeline Background */}
            <div className="hidden lg:block absolute left-[80px] top-0 bottom-0 w-1 bg-gradient-to-b from-manju-yellow-300 via-manju-yellow-400 to-manju-orange-400" />
            
            {/* Timeline Items */}
            <div className="space-y-10 lg:space-y-14">
              {BRAND_STORY.timeline.map((item, index) => {
                const IconComponent = storyIcons[item.icon as StoryIconKey] || Sparkles
                return (
                  <motion.div
                    key={item.year}
                    className="relative lg:pl-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute lg:left-[64px] top-2 w-8 h-8 rounded-full bg-white border-4 border-manju-yellow-400 flex items-center justify-center z-10 shadow-shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-manju-yellow-500" />
                    </div>
                    
                    {/* Year Badge */}
                    <Badge variant="yellow" size="md" className="mb-3 lg:mb-0 lg:absolute lg:left-0 lg:top-0 lg:translate-x-[-100%] lg:translate-y-[50%] lg:w-auto lg:whitespace-nowrap">
                      {item.year}
                    </Badge>
                    
                    {/* Content */}
                    <Card variant="premium" padding="lg" className="h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-manju-yellow-100 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-manju-yellow-600" />
                        </div>
                        <h3 className="font-display font-semibold text-heading-md text-manju-charcoal-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-body-md text-manju-charcoal-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Story Content */}
          <motion.div
            ref={rightRef}
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge variant="orange" size="lg" icon={<Sparkles className="w-4 h-4" />}>
                Our Journey
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              id="story-title"
              className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              15+ Years of Crafting<br />
              <span className="gradient-text">Snacks with Soul</span>
            </motion.h2>

            {/* Story Paragraphs */}
            <motion.div
              className="space-y-5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-body-lg text-manju-charcoal-600 leading-relaxed">
                {BRAND_STORY.paragraphs[0]}
              </p>
              <p className="text-body-lg text-manju-charcoal-600 leading-relaxed">
                {BRAND_STORY.paragraphs[1]}
              </p>
              <p className="text-body-lg text-manju-charcoal-600 leading-relaxed">
                {BRAND_STORY.paragraphs[2]}
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {BRAND_STORY.values.map((value, index) => (
                <motion.div
                  key={value}
                  className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-manju-cream-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-manju-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-manju-yellow-600" />
                  </div>
                  <span className="font-body font-medium text-body-md text-manju-charcoal-800 mt-1">
                    {value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-6 border-t border-manju-cream-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {BRAND_STORY.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-heading-xl lg:text-heading-2xl text-manju-charcoal-900">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-manju-charcoal-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button size="lg" icon={<Sparkles className="w-5 h-5" />} iconPosition="right" className="w-full sm:w-auto">
                Read Full Story
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Our Values
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-manju-yellow-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-manju-orange-200/40 rounded-full blur-3xl" />
      </div>
    </section>
  )
}