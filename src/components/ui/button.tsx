'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cream'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-body font-medium rounded-xl transition-all duration-300 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-manju-yellow-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed transform-gpu active:scale-[0.98]'

    const variantStyles = {
      primary: 'bg-manju-yellow-500 text-manju-charcoal-900 hover:bg-manju-yellow-400 hover:shadow-shadow-yellow shadow-sm',
      secondary: 'bg-manju-charcoal-900 text-white hover:bg-manju-charcoal-800 hover:shadow-shadow-lg',
      outline: 'border-2 border-manju-charcoal-300 text-manju-charcoal-900 hover:bg-manju-charcoal-100 hover:border-manju-charcoal-400',
      ghost: 'text-manju-charcoal-700 hover:bg-manju-charcoal-100',
      cream: 'bg-manju-cream-100 text-manju-charcoal-900 hover:bg-manju-cream-200',
    }

    const sizeStyles = {
      sm: 'px-4 py-2 text-body-sm gap-1.5',
      md: 'px-6 py-3.5 text-body-md gap-2',
      lg: 'px-8 py-4.5 text-body-lg gap-2.5',
      xl: 'px-10 py-5 text-heading-sm gap-3',
    }

    const widthStyles = fullWidth ? 'w-full' : ''

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], widthStyles, className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {icon && iconPosition === 'left' && !loading && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && !loading && <span className="flex-shrink-0">{icon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'