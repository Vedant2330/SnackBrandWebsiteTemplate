'use client'

import { createContext, useContext, useState, useCallback, useMemo, useEffect, ReactNode } from 'react'

interface WishlistContextType {
  items: string[]
  count: number
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  toggleItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('manju-wishlist')
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

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('manju-wishlist', JSON.stringify(items))
  }, [items])

  const count = items.length

  const addItem = useCallback((productId: string) => {
    setItems((prev) => {
      if (prev.includes(productId)) return prev
      return [...prev, productId]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((id) => id !== productId))
  }, [])

  const toggleItem = useCallback((productId: string) => {
    setItems((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId)
      }
      return [...prev, productId]
    })
  }, [])

  const isInWishlist = useCallback(
    (productId: string) => items.includes(productId),
    [items]
  )

  const clearWishlist = useCallback(() => {
    setItems([])
  }, [])

  const value = useMemo(
    () => ({
      items,
      count,
      addItem,
      removeItem,
      toggleItem,
      isInWishlist,
      clearWishlist,
    }),
    [items, count, addItem, removeItem, toggleItem, isInWishlist, clearWishlist]
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}