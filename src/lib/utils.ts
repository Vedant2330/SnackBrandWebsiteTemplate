import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency = '₹'): string {
  return `${currency}${price.toLocaleString('en-IN')}`
}

export function formatNumber(num: number): string {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(1)}Cr`
  }
  if (num >= 100000) {
    return `${(num / 100000).toFixed(1)}L`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
}

export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateId(prefix = ''): string {
  return `${prefix}${Math.random().toString(36).substring(2, 11)}`
}

export function isClient(): boolean {
  return typeof window !== 'undefined'
}

export function getMediaQuery(query: string): boolean {
  if (!isClient()) return false
  return window.matchMedia(query).matches
}

export function prefersReducedMotion(): boolean {
  return getMediaQuery('(prefers-reduced-motion: reduce)')
}

export function prefersDarkMode(): boolean {
  return getMediaQuery('(prefers-color-scheme: dark)')
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text)
  }
  // Fallback
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  return Promise.resolve()
}

export function scrollToElement(
  element: HTMLElement | null,
  options?: ScrollIntoViewOptions
): void {
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      ...options,
    })
  }
}

export function getScrollProgress(): number {
  if (!isClient()) return 0
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return scrollTop / docHeight
}

export function clampScrollProgress(progress: number): number {
  return clamp(progress, 0, 1)
}

export class PerformanceMonitor {
  private static marks: Map<string, number> = new Map()

  static mark(name: string): void {
    if (isClient() && performance) {
      performance.mark(name)
      this.marks.set(name, performance.now())
    }
  }

  static measure(name: string, startMark: string, endMark?: string): number {
    if (!isClient() || !performance) return 0

    const start = this.marks.get(startMark) || 0
    const end = endMark ? this.marks.get(endMark) || performance.now() : performance.now()

    performance.measure(name, startMark, endMark)
    return end - start
  }

  static clear(): void {
    if (isClient() && performance) {
      performance.clearMarks()
      performance.clearMeasures()
      this.marks.clear()
    }
  }
}

export function getViewportSize(): { width: number; height: number } {
  if (!isClient()) return { width: 1920, height: 1080 }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export function isMobile(): boolean {
  return getViewportSize().width < 768
}

export function isTablet(): boolean {
  const { width } = getViewportSize()
  return width >= 768 && width < 1024
}

export function isDesktop(): boolean {
  return getViewportSize().width >= 1024
}

export function waitFor(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  return fn().catch((error) => {
    if (retries <= 0) throw error
    return waitFor(delay).then(() => retry(fn, retries - 1, delay * 2))
  })
}