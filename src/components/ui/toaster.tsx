'use client'

import { cn } from '@/lib/utils'
import type { Toast } from './toast-context'

interface ToastProps {
  toast: Toast
  onDismiss: (id: string) => void
}

export function ToastUI({ toast, onDismiss }: ToastProps) {
  const typeStyles = {
    success: 'bg-manju-sage-50 border-manju-sage-200 text-manju-sage-900',
    error: 'bg-manju-orange-50 border-manju-orange-200 text-manju-orange-900',
    warning: 'bg-manju-yellow-50 border-manju-yellow-200 text-manju-yellow-900',
    info: 'bg-manju-charcoal-50 border-manju-charcoal-200 text-manju-charcoal-900',
  }

  const iconStyles = {
    success: 'text-manju-sage-500',
    error: 'text-manju-orange-500',
    warning: 'text-manju-yellow-500',
    info: 'text-manju-charcoal-500',
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-[9999] max-w-sm w-full transform transition-all duration-300 ease-spring',
        'animate-in slide-in-from-right-full fade-in',
        typeStyles[toast.type]
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3 p-4 rounded-2xl border shadow-xl">
        <div className={cn('flex-shrink-0 mt-0.5', iconStyles[toast.type])}>
          {toast.type === 'success' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {toast.type === 'error' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {toast.type === 'warning' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
          {toast.type === 'info' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-body-md">{toast.title}</p>
          {toast.description && (
            <p className="mt-1 text-body-sm opacity-80">{toast.description}</p>
          )}
        </div>
        <button
          onClick={() => onDismiss(toast.id)}
          className="flex-shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors"
          aria-label="Dismiss toast"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

import { useToast } from './toast-context'

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {toasts.map((toast) => (
        <ToastUI key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  )
}