# SnackBrandWebsiteTemplate

A premium Next.js 14 website template for Manju Foods - a premium millet snacks brand.

## Features

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS with custom design system
- ✅ Framer Motion for animations
- ✅ Lenis for smooth scrolling
- ✅ Lucide React icons
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Custom UI components (Button, Badge, Card, Input, Toast, etc.)
- ✅ Context providers (Cart, Wishlist, Modal, Theme)
- ✅ Product showcase with categories
- ✅ Testimonials carousel
- ✅ Newsletter signup
- ✅ Brand story timeline

## Sections

1. Hero - Animated introduction with floating products
2. Why Choose Us - Benefit cards with trust signals
3. Product Showcase - Categorized product display
4. Brand Story - Timeline and values
5. Testimonials - Customer feedback carousel
6. CTA - Conversion-focused call to action
7. Newsletter - Email subscription form

## UI Components

- Button (5 variants, 4 sizes)
- Badge (5 variants, 3 sizes)
- Card (3 variants, 4 padding options)
- Input/Textarea with validation states
- Toast notification system
- Modal context provider
- Cart & Wishlist contexts

## Design System

Custom Tailwind configuration with:
- Premium color palette (manju-yellow, manju-orange, manju-charcoal, manju-cream, manju-sage)
- Fluid typography with clamp()
- Custom shadows, animations, and transitions
- Dark mode support
- Responsive breakpoints

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Vedant2330/SnackBrandWebsiteTemplate.git
cd SnackBrandWebsiteTemplate

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3001 in your browser
```

### Building for Production

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. No additional configuration needed

### Other Platforms

This is a standard Next.js application that can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker
- Any Node.js hosting service

## Environment Variables

No environment variables are required for basic functionality. Add any needed variables to `.env.local` following Next.js conventions.

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette.

### Content
Update the data in `src/lib/constants.ts` to change product information, testimonials, brand story, etc.

### Styles
Modify `src/app/globals.css` for global style overrides.

## License

MIT
