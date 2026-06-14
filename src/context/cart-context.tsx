'use client'

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react'
import type { CartItem, Product } from '@/lib/types'

interface CartContextType {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('manju-cart')
      if (stored) {
        try {
          return JSON.parse(stored)
        } catch {
          return []
        }
      }
    }
    return []
  })
  const [isOpen, setIsOpen] = useState(false)

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id)
      let newItems: CartItem[]
      if (existing) {
        newItems = prev.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      } else {
        newItems = [...prev, { productId: product.id, quantity, price: product.price }]
      }
      localStorage.setItem('manju-cart', JSON.stringify(newItems))
      return newItems
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => {
      const newItems = prev.filter((item) => item.productId !== productId)
      localStorage.setItem('manju-cart', JSON.stringify(newItems))
      return newItems
    })
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems((prev) => {
      const newItems = prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
      localStorage.setItem('manju-cart', JSON.stringify(newItems))
      return newItems
    })
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    localStorage.removeItem('manju-cart')
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isOpen,
      openCart,
      closeCart,
    }),
    [items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart, isOpen, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}