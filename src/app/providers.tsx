'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { CartProvider } from '@/context/cart-context'
import { WishlistProvider } from '@/context/wishlist-context'
import { ModalProvider } from '@/context/modal-context'
import { ToastProvider } from '@/components/ui/toast-context'
import { Toaster } from '@/components/ui/toaster'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <WishlistProvider>
          <ModalProvider>
            <ToastProvider>
              {children}
              <Toaster />
            </ToastProvider>
          </ModalProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  )
}