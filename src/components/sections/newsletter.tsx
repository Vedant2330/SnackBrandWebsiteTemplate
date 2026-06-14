'use client'

import { useState, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, ArrowRight, Check, Sparkles, Shield, Heart, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || status === 'submitting') return

    setStatus('submitting')
    setMessage('')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate success (in real app, this would be an actual API call)
    setStatus('success')
    setMessage('Thanks for joining! Check your inbox for a welcome gift 🎁')
    setEmail('')
  }

  return (
    <section
      ref={sectionRef}
      className="section-lg relative bg-white"
      aria-labelledby="newsletter-title"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-manju-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-manju-orange-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="px-4 py-1.5 rounded-full bg-manju-yellow-100 text-manju-yellow-800 text-caption font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Join the Millet Movement
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="newsletter-title"
            className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Get 15% Off Your First Order
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-body-lg text-manju-charcoal-600 mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Join our community for exclusive recipes, early access to new launches, nutrition tips,
            and a welcome discount on your first order.
          </motion.p>

          {/* Perks */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[
              { icon: Heart, title: 'Exclusive Recipes', desc: 'Weekly inspiration' },
              { icon: Sparkles, title: 'Early Access', desc: 'New launches first' },
              { icon: Shield, title: 'Nutrition Tips', desc: 'From our experts' },
            ].map((perk, index) => (
              <div
                key={perk.title}
                className="flex items-center gap-3 p-4 bg-manju-cream-50 rounded-2xl border border-manju-cream-200 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-manju-yellow-100 flex items-center justify-center flex-shrink-0">
                  <perk.icon className="w-5 h-5 text-manju-yellow-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-medium text-body-sm text-manju-charcoal-900">{perk.title}</p>
                  <p className="text-caption text-manju-charcoal-500">{perk.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            noValidate
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-manju-charcoal-400" aria-hidden="true" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={cn(
                  'input pl-12 pr-12',
                  status === 'error' && 'border-manju-orange-500 focus:border-manju-orange-500 focus:ring-manju-orange-500/20'
                )}
                disabled={status === 'submitting' || status === 'success'}
                aria-label="Email address"
                aria-describedby="newsletter-hint"
                required
              />
              {status === 'submitting' && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="animate-spin h-5 w-5 text-manju-yellow-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
              )}
              {status === 'success' && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Check className="w-5 h-5 text-manju-sage-500" aria-hidden="true" />
                </div>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              icon={status === 'submitting' ? null : <ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              disabled={status === 'submitting' || status === 'success'}
              className="whitespace-nowrap"
            >
              {status === 'submitting' ? 'Joining...' : status === 'success' ? 'Subscribed!' : 'Subscribe & Save'}
            </Button>
          </motion.form>

          {/* Status Message */}
          <motion.div
            id="newsletter-hint"
            className={cn(
              'mt-4 text-body-sm transition-all duration-300',
              status === 'error' && 'text-manju-orange-500',
              status === 'success' && 'text-manju-sage-600',
              status === 'idle' && 'text-manju-charcoal-400'
            )}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: message ? 1 : 0,
              height: message ? 'auto' : 0,
            }}
          >
            {message || 'No spam, ever. Unsubscribe anytime. Privacy Policy'}
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            className="mt-6 text-caption text-manju-charcoal-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            By subscribing, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-manju-yellow-600 transition-colors">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="underline hover:text-manju-yellow-600 transition-colors">
              Terms of Service
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  )
}