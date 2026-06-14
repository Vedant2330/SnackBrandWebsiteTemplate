'use client'

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, LabelHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-body-sm font-medium text-manju-charcoal-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-white border-2 rounded-xl px-5 py-3.5 text-body-md text-manju-charcoal-900 placeholder:text-manju-charcoal-400 transition-all duration-300 ease-out focus:outline-none disabled:bg-manju-cream-100 disabled:cursor-not-allowed',
            error
              ? 'border-manju-orange-500 focus:border-manju-orange-500 focus:ring-2 focus:ring-manju-orange-500/20'
              : 'border-manju-cream-200 hover:border-manju-cream-300 focus:border-manju-yellow-500 focus:ring-2 focus:ring-manju-yellow-500/20',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-body-sm text-manju-orange-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-body-sm text-manju-charcoal-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-body-sm font-medium text-manju-charcoal-700 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-white border-2 rounded-xl px-5 py-3.5 text-body-md text-manju-charcoal-900 placeholder:text-manju-charcoal-400 transition-all duration-300 ease-out focus:outline-none disabled:bg-manju-cream-100 disabled:cursor-not-allowed resize-y min-h-[100px]',
            error
              ? 'border-manju-orange-500 focus:border-manju-orange-500 focus:ring-2 focus:ring-manju-orange-500/20'
              : 'border-manju-cream-200 hover:border-manju-cream-300 focus:border-manju-yellow-500 focus:ring-2 focus:ring-manju-yellow-500/20',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-body-sm text-manju-orange-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-body-sm text-manju-charcoal-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('block text-body-sm font-medium text-manju-charcoal-700 mb-2', className)}
      {...props}
    >
      {children}
    </label>
  )
)

Label.displayName = 'Label'