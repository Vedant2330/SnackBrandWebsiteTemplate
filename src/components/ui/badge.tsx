'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'yellow' | 'orange' | 'sage' | 'charcoal' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'yellow', size = 'md', icon, className, ...props }, ref) => {
    const variantStyles = {
      yellow: 'bg-manju-yellow-100 text-manju-yellow-800 hover:bg-manju-yellow-200',
      orange: 'bg-manju-orange-100 text-manju-orange-800 hover:bg-manju-orange-200',
      sage: 'bg-manju-sage-100 text-manju-sage-800 hover:bg-manju-sage-200',
      charcoal: 'bg-manju-charcoal-900 text-white',
      outline: 'border-2 border-manju-charcoal-300 text-manju-charcoal-700 hover:border-manju-charcoal-400 hover:bg-manju-charcoal-50',
    }

    const sizeStyles = {
      sm: 'px-2.5 py-0.5 text-caption gap-1',
      md: 'px-3 py-1 text-caption gap-1.5',
      lg: 'px-4 py-1.5 text-body-sm gap-2',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full transition-all duration-200',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'