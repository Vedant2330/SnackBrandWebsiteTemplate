'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Quote, ChevronLeft, ChevronRight, Heart, User } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[0]
  index: number
  isActive: boolean
  onSelect: (index: number) => void
}

function TestimonialCard({ testimonial, index, isActive, onSelect }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.4, y: 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'relative cursor-pointer',
        isActive && 'z-10'
      )}
      onClick={() => onSelect(index)}
    >
      <Card
        variant={isActive ? 'premium' : 'interactive'}
        padding="lg"
        className={cn(
          'h-full',
          isActive
            ? 'border-manju-yellow-400 shadow-shadow-xl ring-2 ring-manju-yellow-500/20'
            : 'border-manju-cream-200 hover:border-manju-yellow-300'
        )}
      >
        {/* Featured Badge */}
        {testimonial.featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="yellow" size="sm" icon={<Heart className="w-3 h-3" />}>
              Community Favorite
            </Badge>
          </div>
        )}

        {/* Quote Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-manju-yellow-100 flex items-center justify-center opacity-50">
          <Quote className="w-6 h-6 text-manju-yellow-500" aria-hidden="true" />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < testimonial.rating ? 'fill-current text-manju-yellow-500' : 'text-manju-cream-300'
              )}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-body-lg text-manju-charcoal-700 leading-relaxed mb-6 relative z-10">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-manju-yellow-100 flex items-center justify-center overflow-hidden">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <User className="w-6 h-6 text-manju-yellow-500" aria-hidden="true" />
              )}
            </div>
            {testimonial.featured && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-manju-yellow-500 rounded-full flex items-center justify-center border-2 border-white">
                <Heart className="w-3 h-3 text-white" aria-hidden="true" />
              </div>
            )}
          </div>
          <div>
            <p className="font-display font-semibold text-body-md text-manju-charcoal-900">
              {testimonial.name}
            </p>
            <p className="text-body-sm text-manju-charcoal-500">{testimonial.role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const featuredTestimonials = TESTIMONIALS.filter((t) => t.featured)
  const allTestimonials = TESTIMONIALS

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? allTestimonials.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === allTestimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext()
      else goToPrevious()
    }
    setTouchStart(null)
  }

  return (
    <section
      ref={sectionRef}
      className="section-lg relative bg-gradient-to-b from-manju-cream-50 via-white to-manju-yellow-50/30"
      aria-labelledby="testimonials-title"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-manju-yellow-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-manju-orange-200/40 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Badge variant="orange" size="lg" className="mb-4" icon={<Heart className="w-4 h-4" />}>
            Trusted by Families
          </Badge>
          <h2
            id="testimonials-title"
            className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900 mb-4"
          >
            Real Stories from Our
            <br />
            <span className="gradient-text">50,000+ Community</span>
          </h2>
          <p className="text-body-lg text-manju-charcoal-600">
            From nutritionists and fitness coaches to busy parents and food bloggers — hear why
            they choose Manju Foods for their daily nourishment.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isActive={index === activeIndex}
                onSelect={setActiveIndex}
              />
            ))}
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden lg:flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="lg"
              icon={<ChevronLeft className="w-5 h-5" />}
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="w-14 h-14 rounded-2xl p-0"
            />
            {/* Dots */}
            <div className="flex items-center gap-2">
              {allTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'bg-manju-yellow-500 w-8'
                      : 'bg-manju-cream-300 hover:bg-manju-cream-400'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                >
                  <motion.span
                    layoutId="dot"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              ))}
            </div>
            <Button
              variant="outline"
              size="lg"
              icon={<ChevronRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="w-14 h-14 rounded-2xl p-0"
            />
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="lg:hidden text-center mt-8 text-manju-charcoal-400 text-body-sm">
            Swipe to explore more stories
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="text-center p-6 bg-white rounded-2xl border border-manju-cream-200">
            <div className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900">
              4.9
            </div>
            <div className="text-body-md text-manju-charcoal-500 mt-1">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-manju-cream-200">
            <div className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900">
              2000+
            </div>
            <div className="text-body-md text-manju-charcoal-500 mt-1">Verified Reviews</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-manju-cream-200">
            <div className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900">
              95%
            </div>
            <div className="text-body-md text-manju-charcoal-500 mt-1">Repeat Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-manju-cream-200">
            <div className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900">
              50K+
            </div>
            <div className="text-body-md text-manju-charcoal-500 mt-1">Happy Families</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}