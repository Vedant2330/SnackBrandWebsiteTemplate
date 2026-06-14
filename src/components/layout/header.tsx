'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/context/cart-context'
import { useWishlist } from '@/context/wishlist-context'
import { MAIN_NAVIGATION } from '@/lib/constants'
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Search,
  Sun,
  Moon,
  ChevronDown,
} from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const { count: wishlistCount } = useWishlist()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-spring',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-manju-cream-200 shadow-shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container-main" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10" aria-label="Manju Foods Home">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-manju-yellow-500 flex items-center justify-center">
              <span className="text-manju-charcoal-900 font-display font-bold text-xl lg:text-2xl">M</span>
            </div>
            <span className="hidden lg:block font-display font-semibold text-heading-sm text-manju-charcoal-900">
              Manju Foods
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {MAIN_NAVIGATION.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="font-body text-body-md font-medium text-manju-charcoal-700 hover:text-manju-charcoal-900 transition-colors duration-200 flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 text-manju-charcoal-400 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full mt-3 w-56 lg:w-72 bg-white rounded-2xl border border-manju-cream-200 shadow-shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 ease-spring py-3 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-body-sm text-manju-charcoal-600 hover:bg-manju-cream-50 hover:text-manju-charcoal-900 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span>{child.label}</span>
                        <span className="text-caption text-manju-charcoal-400">{child.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-xl text-manju-charcoal-500 hover:bg-manju-cream-100 hover:text-manju-charcoal-700 transition-colors lg:hidden"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 rounded-xl text-manju-charcoal-500 hover:bg-manju-cream-100 hover:text-manju-charcoal-700 transition-colors"
              aria-label={`Wishlist, ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-manju-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-xl text-manju-charcoal-500 hover:bg-manju-cream-100 hover:text-manju-charcoal-700 transition-colors"
              aria-label={`Cart, ${itemCount} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-manju-yellow-500 text-manju-charcoal-900 text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              className="p-2 rounded-xl text-manju-charcoal-500 hover:bg-manju-cream-100 hover:text-manju-charcoal-700 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 hidden dark:block" />
              <Moon className="w-5 h-5 block dark:hidden" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-manju-charcoal-500 hover:bg-manju-cream-100 hover:text-manju-charcoal-700 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-shadow-2xl animate-in slide-in-from-right-full">
            <div className="flex items-center justify-between p-4 border-b border-manju-cream-200">
              <span className="font-display font-semibold text-heading-sm">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-manju-charcoal-500 hover:bg-manju-cream-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {MAIN_NAVIGATION.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl font-body text-body-md font-medium text-manju-charcoal-700 hover:bg-manju-cream-50 hover:text-manju-charcoal-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-manju-cream-200 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-2 py-2 text-body-sm text-manju-charcoal-500 hover:text-manju-charcoal-700 hover:bg-manju-cream-50 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-manju-cream-200 space-y-3">
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary btn-lg w-full"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-outline btn-lg w-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 lg:pt-32" role="dialog" aria-modal="true" aria-label="Search">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in" onClick={() => setIsSearchOpen(false)} />
          <div className="relative w-full max-w-2xl mx-4 animate-in slide-in-from-top-4 fade-in">
            <div className="bg-white rounded-3xl border border-manju-cream-200 shadow-shadow-2xl p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-manju-charcoal-400" />
                <input
                  type="search"
                  placeholder="Search products, recipes, articles..."
                  className="w-full pl-12 pr-4 py-3.5 bg-manju-cream-50 border-2 border-manju-cream-200 rounded-xl text-body-lg text-manju-charcoal-900 placeholder:text-manju-charcoal-400 focus:border-manju-yellow-500 focus:ring-2 focus:ring-manju-yellow-500/20 focus:outline-none"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Escape' && setIsSearchOpen(false)}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-caption text-manju-charcoal-500">Popular:</span>
                {['Millet Noodles', 'Khakhra', 'Millet Snacks', 'Cookies', 'Breakfast Mix'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setIsSearchOpen(false)}
                    className="badge badge-outline text-caption"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}