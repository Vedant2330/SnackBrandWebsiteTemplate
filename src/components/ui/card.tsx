'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'premium' | 'interactive'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', padding = 'md', className, ...props }, ref) => {
    const baseStyles = 'rounded-3xl border overflow-hidden transition-all duration-500 ease-spring'

    const variantStyles = {
      default: 'bg-white border-manju-cream-200 hover:border-manju-yellow-300 hover:shadow-shadow-xl',
      premium: 'relative bg-gradient-to-br from-white to-manju-cream-50 border-manju-cream-100 hover:border-manju-yellow-200 hover:shadow-shadow-xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-manju-yellow-50/50 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
      interactive: 'bg-white border-manju-cream-200 cursor-pointer transform-gpu hover:-translate-y-2 hover:shadow-shadow-2xl hover:border-manju-yellow-300 active:scale-[0.98] active:translate-y-0',
    }

    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    }

    return (
      <div ref={ref} className={cn(baseStyles, variantStyles[variant], paddingStyles[padding], className)} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-heading-md font-display font-semibold text-manju-charcoal-900', className)} {...props}>
      {children}
    </h3>
  )
)

CardTitle.displayName = 'CardTitle'

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <p ref={ref} className={cn('mt-1 text-body-md text-manju-charcoal-500', className)} {...props}>
      {children}
    </p>
  )
)

CardDescription.displayName = 'CardDescription'

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 pt-4 border-t border-manju-cream-200 flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  )
)

CardFooter.displayName = 'CardFooter'