export interface Product {
  id: string
  name: string
  slug: string
  category: ProductCategory
  subcategory?: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  weight: string
  images: ProductImage[]
  nutritionInfo: NutritionInfo
  ingredients: string[]
  allergens: string[]
  certifications: Certification[]
  benefits: Benefit[]
  tags: string[]
  isNew: boolean
  isBestseller: boolean
  isFeatured: boolean
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount?: number
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  type: 'hero' | 'gallery' | 'nutrition' | 'lifestyle' | 'packaging' | '3d'
  width: number
  height: number
}

export interface NutritionInfo {
  servingSize: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
  fiber: number
  sugar: number
  sodium: number
  additional?: Record<string, number>
}

export interface Benefit {
  id: string
  icon: BenefitIcon
  title: string
  description: string
}

export type BenefitIcon =
  | 'fiber'
  | 'protein'
  | 'roasted'
  | 'no-palm-oil'
  | 'gluten-free'
  | 'vegan'
  | 'no-preservatives'
  | 'handmade'
  | 'millet-based'
  | 'high-protein'
  | 'low-calorie'
  | 'rich-in-iron'
  | 'source-of-calcium'

export type Certification =
  | 'FSSAI'
  | 'ISO'
  | 'HACCP'
  | 'Organic'
  | 'Gluten-Free Certified'
  | 'Vegan Certified'
  | 'Non-GMO'

export type ProductCategory =
  | 'noodles'
  | 'pasta'
  | 'snacks'
  | 'cookies'
  | 'khakhra'
  | 'breakfast'
  | 'premix'
  | 'healthy-bites'
  | 'makhana'
  | 'wafer'
  | 'milk-mix'
  | 'sauce'

export interface Category {
  id: ProductCategory
  name: string
  slug: string
  description: string
  image: string
  icon: string
  productCount: number
  featuredProducts: string[]
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  description: string
  productIds: string[]
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  verified: boolean
  createdAt: string
  helpful: number
}

export interface CartItem {
  productId: string
  variantId?: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  status: OrderStatus
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  createdAt: string
  updatedAt: string
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface Address {
  firstName: string
  lastName: string
  email: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  addresses: Address[]
  wishlist: string[]
  orders: string[]
  createdAt: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: Author
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  featured: boolean
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  role: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  avatar: string
  content: string
  rating: number
  productId?: string
  featured: boolean
}

export interface BrandValue {
  id: string
  icon: string
  title: string
  description: string
  image?: string
}

export interface Stat {
  id: string
  label: string
  value: string | number
  suffix?: string
  prefix?: string
  description?: string
}