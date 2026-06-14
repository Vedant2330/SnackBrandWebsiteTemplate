'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/types'

// Mock product data for showcase
const SHOWCASE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Millet Chatpata Noodles',
    slug: 'millet-chatpata-noodles',
    category: 'noodles',
    description: 'Spicy tangy noodles made from jowar and bajra millets. Ready in 2 minutes.',
    shortDescription: 'Spicy tangy millet noodles ready in 2 mins',
    price: 45,
    weight: '70g',
    images: [{ id: '1', url: '/images/products/noodles-chatpata.jpg', alt: 'Millet Chatpata Noodles', type: 'hero', width: 400, height: 400 }],
    nutritionInfo: { servingSize: '70g', calories: 280, protein: 8, carbohydrates: 45, fat: 8, fiber: 4, sugar: 2, sodium: 380 },
    ingredients: ['Jowar Millet (45%)', 'Bajra Millet (30%)', 'Spices', 'Dehydrated Vegetables', 'Salt'],
    allergens: [],
    certifications: ['FSSAI', 'Gluten-Free Certified'],
    benefits: [
      { id: '1', icon: 'fiber', title: 'High Fiber', description: '4g dietary fiber per serving' },
      { id: '2', icon: 'protein', title: '8g Protein', description: 'Plant-based protein from millets' },
      { id: '3', icon: 'roasted', title: 'Roasted', description: 'Never fried, slow-roasted' },
    ],
    tags: ['Spicy', 'Quick Meal', 'Gluten-Free'],
    isNew: true,
    isBestseller: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: '2',
    name: 'Handmade Methi Khakhra',
    slug: 'handmade-methi-khakhra',
    category: 'khakhra',
    description: 'Traditional Gujarati khakhra with fresh fenugreek leaves. Hand-rolled and roasted.',
    shortDescription: 'Traditional hand-rolled khakhra with methi',
    price: 85,
    weight: '200g',
    images: [{ id: '2', url: '/images/products/khakhra-methi.jpg', alt: 'Handmade Methi Khakhra', type: 'hero', width: 400, height: 400 }],
    nutritionInfo: { servingSize: '30g', calories: 110, protein: 3, carbohydrates: 20, fat: 2, fiber: 2, sugar: 0, sodium: 180 },
    ingredients: ['Whole Wheat Flour', 'Fresh Methi Leaves', 'Sesame Seeds', 'Spices', 'Salt'],
    allergens: ['Gluten', 'Sesame'],
    certifications: ['FSSAI', 'Gluten-Free Certified'],
    benefits: [
      { id: '1', icon: 'millet-based', title: 'Traditional Recipe', description: 'Hand-rolled using ancestral methods' },
      { id: '2', icon: 'roasted', title: 'Roasted', description: 'Crispy without deep frying' },
    ],
    tags: ['Traditional', 'Breakfast', 'Tea Time'],
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: '3',
    name: 'Ragi Nachni Body Wafers',
    slug: 'ragi-nachni-body-wafers',
    category: 'wafer',
    description: 'Light crispy wafers made from finger millet (ragi). Rich in calcium and iron.',
    shortDescription: 'Calcium-rich ragi wafers, light & crispy',
    price: 60,
    weight: '50g',
    images: [{ id: '3', url: '/images/products/wafer-ragi.jpg', alt: 'Ragi Nachni Body Wafers', type: 'hero', width: 400, height: 400 }],
    nutritionInfo: { servingSize: '25g', calories: 105, protein: 2, carbohydrates: 22, fat: 1.5, fiber: 1, sugar: 3, sodium: 90 },
    ingredients: ['Ragi Flour (60%)', 'Rice Flour', 'Jaggery', 'Cardamom', 'Natural Flavors'],
    allergens: [],
    certifications: ['FSSAI', 'Gluten-Free Certified', 'Vegan Certified'],
    benefits: [
      { id: '1', icon: 'rich-in-iron', title: 'Rich in Iron', description: 'Natural iron from ragi millet' },
      { id: '2', icon: 'source-of-calcium', title: 'High Calcium', description: '10x more calcium than rice' },
      { id: '3', icon: 'gluten-free', title: 'Gluten-Free', description: 'Safe for sensitive diets' },
    ],
    tags: ['Kids Favorite', 'Calcium Rich', 'Gluten-Free'],
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
  },
  {
    id: '4',
    name: 'Multi Millet Pasta Spirals',
    slug: 'multi-millet-pasta-spirals',
    category: 'pasta',
    description: 'Fusilli pasta made from jowar, bajra, and ragi blend. Cooks like regular pasta.',
    shortDescription: 'Three-millet blend pasta, cooks in 8 mins',
    price: 120,
    weight: '300g',
    images: [{ id: '4', url: '/images/products/pasta-multi.jpg', alt: 'Multi Millet Pasta Spirals', type: 'hero', width: 400, height: 400 }],
    nutritionInfo: { servingSize: '75g', calories: 270, protein: 9, carbohydrates: 52, fat: 2, fiber: 5, sugar: 1, sodium: 15 },
    ingredients: ['Jowar Millet (40%)', 'Bajra Millet (30%)', 'Ragi Millet (20%)', 'Water'],
    allergens: [],
    certifications: ['FSSAI', 'Gluten-Free Certified', 'Non-GMO'],
    benefits: [
      { id: '1', icon: 'high-protein', title: '9g Protein', description: 'Per serving from millet blend' },
      { id: '2', icon: 'fiber', title: '5g Fiber', description: 'Supports healthy digestion' },
      { id: '3', icon: 'gluten-free', title: 'Gluten-Free', description: 'Perfect for celiac diets' },
    ],
    tags: ['Dinner', 'Family Meal', 'Gluten-Free'],
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: '5',
    name: 'Desi Ghee Jaggery Cookies',
    slug: 'desi-ghee-jaggery-cookies',
    category: 'cookies',
    description: 'Soft baked cookies with pure desi ghee and jaggery. No refined sugar, no palm oil.',
    shortDescription: 'Soft cookies with desi ghee & jaggery',
    price: 140,
    weight: '180g',
    images: [{ id: '5', url: '/images/products/cookies-ghee.jpg', alt: 'Desi Ghee Jaggery Cookies', type: 'hero', width: 400, height: 400 }],
    nutritionInfo: { servingSize: '30g (2 cookies)', calories: 140, protein: 2, carbohydrates: 18, fat: 7, fiber: 1, sugar: 6, sodium: 45 },
    ingredients: ['Whole Wheat Flour', 'Desi Ghee (25%)', 'Jaggery (20%)', 'Almonds', 'Cardamom'],
    allergens: ['Gluten', 'Nuts', 'Dairy'],
    certifications: ['FSSAI', 'Vegan Certified', 'Non-GMO'],
    benefits: [
      { id: '1', icon: 'no-palm-oil', title: 'No Palm Oil', description: 'Only pure desi ghee' },
      { id: '2', icon: 'no-preservatives', title: 'No Preservatives', description: 'Freshly baked in small batches' },
    ],
    tags: ['Tea Time', 'Gift Ready', 'No Refined Sugar'],
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: '6',
    name: 'Jowar Dosa Instant Mix',
    slug: 'jowar-dosa-instant-mix',
    category: 'premix',
    description: 'Make crispy dosas in minutes. No fermentation needed. Just add water and cook.',
    shortDescription: 'Instant crispy dosas, no fermentation',
    price: 95,
    weight: '200g',
    images: [{ id: '6', url: '/images/products/premix-dosa.jpg', alt: 'Jowar Dosa Instant Mix', type: 'hero', width: 400, height: 400 }],
    nutritionInfo: { servingSize: '50g (makes 2 dosas)', calories: 160, protein: 5, carbohydrates: 32, fat: 2, fiber: 3, sugar: 1, sodium: 280 },
    ingredients: ['Jowar Flour (70%)', 'Rice Flour', 'Urad Dal', 'Fenugreek', 'Salt'],
    allergens: [],
    certifications: ['FSSAI', 'Gluten-Free Certified'],
    benefits: [
      { id: '1', icon: 'high-protein', title: '5g Protein', description: 'Per serving from jowar & dal' },
      { id: '2', icon: 'fiber', title: '3g Fiber', description: 'From whole grain jowar' },
      { id: '3', icon: 'handmade', title: 'Ready in 5 mins', description: 'No fermentation required' },
    ],
    tags: ['Breakfast', 'Quick Meal', 'Gluten-Free'],
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
  },
]

interface ProductCardProps {
  product: Product
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <Card variant="interactive" padding="none" className="h-full">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden bg-manju-cream-50">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              {/* Placeholder for product image */}
              <div className="relative w-full h-full max-w-[280px] max-h-[280px]">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-manju-yellow-100 via-manju-cream-100 to-manju-orange-100 flex items-center justify-center shadow-lg">
                  <span className="text-5xl lg:text-7xl opacity-60">
                    {product.category === 'noodles' && '🍜'}
                    {product.category === 'khakhra' && '🫓'}
                    {product.category === 'wafer' && '🥨'}
                    {product.category === 'pasta' && '🍝'}
                    {product.category === 'cookies' && '🍪'}
                    {product.category === 'premix' && '🥞'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            {(product.isNew || product.isBestseller) && (
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.isNew && (
                  <Badge variant="orange" size="sm">New</Badge>
                )}
                {product.isBestseller && (
                  <Badge variant="yellow" size="sm" icon={<Star className="w-3 h-3" />}>
                    Bestseller
                  </Badge>
                )}
              </div>
            )}

            {/* Quick Actions */}
            <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <button className="flex-1 btn btn-primary btn-sm" aria-label={`Add ${product.name} to cart`}>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </button>
              <button className="btn btn-cream btn-sm" aria-label={`Add ${product.name} to wishlist`}>
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-caption text-manju-charcoal-500 font-medium uppercase tracking-wide">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <div className="flex items-center gap-1 text-manju-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium text-body-sm">{product.rating}</span>
                <span className="text-manju-charcoal-400 text-caption">({product.reviewCount})</span>
              </div>
            </div>
            
            <h3 className="font-display font-semibold text-heading-sm text-manju-charcoal-900 mb-1 line-clamp-1">
              {product.name}
            </h3>
            
            <p className="text-body-sm text-manju-charcoal-500 mb-3 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.benefits.slice(0, 2).map((benefit) => (
                <Badge key={benefit.id} variant="outline" size="sm">
                  {benefit.title}
                </Badge>
              ))}
              {product.benefits.length > 2 && (
                <Badge variant="outline" size="sm">
                  +{product.benefits.length - 2} more
                </Badge>
              )}
            </div>

            {/* Price & Weight */}
            <div className="flex items-center justify-between pt-3 border-t border-manju-cream-200">
              <div>
                <span className="font-display font-bold text-heading-md text-manju-charcoal-900">
                  ₹{product.price}
                </span>
                <span className="text-body-sm text-manju-charcoal-500 ml-2">/{product.weight}</span>
              </div>
              <Button variant="ghost" size="sm" className="h-9 px-3">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export function ProductShowcase() {
  const scrollY = useScroll()
  const scrollProgress = useTransform(scrollY.scrollY, [0, 2000], [0, 1])

  return (
    <section className="section-lg bg-white" aria-labelledby="products-title">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Badge variant="yellow" size="lg" className="mb-4" icon={<Star className="w-4 h-4" />}>
            Customer Favorites
          </Badge>
          <h2 id="products-title" className="font-display font-bold text-heading-2xl lg:text-heading-3xl text-manju-charcoal-900 mb-4">
            Bestsellers That Keep<br />Customers Coming Back
          </h2>
          <p className="text-body-lg text-manju-charcoal-600">
            Handpicked from our 60+ products — these are the millet snacks, noodles, khakhra & pasta
            our community loves most. Roasted, not fried. No palm oil. Just honest flavor.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SHOWCASE_PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/shop">
            <Button size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right" className="min-w-[280px]">
              Explore All 60+ Products
            </Button>
          </Link>
          <p className="mt-4 text-body-sm text-manju-charcoal-500">
            Free shipping on orders above ₹499 • 15-day easy returns
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-manju-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-manju-orange-200/30 rounded-full blur-3xl" />
      </div>
    </section>
  )
}