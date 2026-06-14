import Link from 'next/link'
import { FOOTER_NAVIGATION } from '@/lib/constants'
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Truck, Shield, RefreshCw, Headphones } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-manju-charcoal-950 text-manju-cream-100" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="container-main py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="Manju Foods Home">
              <div className="w-12 h-12 rounded-xl bg-manju-yellow-500 flex items-center justify-center">
                <span className="text-manju-charcoal-900 font-display font-bold text-2xl">M</span>
              </div>
              <span className="font-display font-semibold text-heading-md text-white">Manju Foods</span>
            </Link>
            <p className="text-manju-cream-400 text-body-md leading-relaxed mb-6">
              Healthy Bhi Tasty Bhi — 15+ years of crafting millet-based snacks that nourish body and soul.
            </p>
            <div className="flex items-center gap-4 text-body-sm text-manju-cream-500">
              <a href="https://instagram.com/manju_foods_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-manju-yellow-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/manjufoods" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-manju-yellow-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@manjufoods" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-manju-yellow-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/manju-foods" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-manju-yellow-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Shop</h3>
            <nav aria-label="Shop categories">
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.shop.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-manju-cream-400 hover:text-manju-yellow-400 text-body-md transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Company</h3>
            <nav aria-label="Company info">
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-manju-cream-400 hover:text-manju-yellow-400 text-body-md transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Support</h3>
            <nav aria-label="Customer support">
              <ul className="space-y-3">
                {FOOTER_NAVIGATION.support.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-manju-cream-400 hover:text-manju-yellow-400 text-body-md transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-4 text-body-md text-manju-cream-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-manju-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>123 Millet Lane, Health Nagar<br />Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-manju-yellow-500 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+918983778293" className="hover:text-manju-yellow-400 transition-colors">+91 89837 78293</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-manju-yellow-500 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hello@manjufoods.com" className="hover:text-manju-yellow-400 transition-colors">hello@manjufoods.com</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-manju-charcoal-800 py-8 lg:py-12">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹499' },
              { icon: RefreshCw, title: 'Easy Returns', desc: '15-day hassle-free returns' },
              { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
              { icon: Headphones, title: 'Support', desc: 'Mon-Sat, 9AM-7PM IST' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-manju-charcoal-800 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-manju-yellow-500" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-body-md text-white">{item.title}</h4>
                  <p className="text-manju-cream-500 text-body-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-manju-charcoal-800 py-6">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-manju-cream-500 text-body-sm">
              © {currentYear} Manju Foods. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-manju-cream-500 hover:text-manju-yellow-400 text-body-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-manju-cream-500 hover:text-manju-yellow-400 text-body-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-manju-cream-500 hover:text-manju-yellow-400 text-body-sm transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-manju-cream-500 hover:text-manju-yellow-400 text-body-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}