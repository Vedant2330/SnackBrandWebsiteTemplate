import type {
  Product,
  Category,
  Benefit,
  Testimonial,
  Stat,
  FAQ,
  BlogPost,
  NavigationItem,
  BenefitIcon,
  ProductCategory,
} from '@/lib/types'

// ============================================
// BRAND BENEFITS (from product image analysis)
// ============================================
export const BRAND_BENEFITS: Benefit[] = [
  {
    id: 'fiber',
    icon: 'fiber' as BenefitIcon,
    title: 'Rich in Dietary Fibre',
    description:
      'Our millet-based snacks are naturally high in dietary fiber, supporting healthy digestion and keeping you fuller for longer.',
  },
  {
    id: 'protein',
    icon: 'protein' as BenefitIcon,
    title: 'Source of Protein',
    description:
      'Each serving delivers plant-based protein from nutrient-dense millets, perfect for active lifestyles and muscle recovery.',
  },
  {
    id: 'roasted',
    icon: 'roasted' as BenefitIcon,
    title: 'Roasted, Not Fried',
    description:
      'We never deep-fry. Our snacks are slowly roasted to crispy perfection, preserving nutrients while cutting unhealthy fats.',
  },
  {
    id: 'no-palm-oil',
    icon: 'no-palm-oil' as BenefitIcon,
    title: 'No Palm Oil',
    description:
      'Committed to sustainability and heart health — zero palm oil in any product. Only wholesome, natural ingredients.',
  },
  {
    id: 'gluten-free',
    icon: 'gluten-free' as BenefitIcon,
    title: 'Gluten-Free Options',
    description:
      'Specially crafted gluten-free range using millets like jowar, ragi, and bajra — safe for celiac and gluten-sensitive diets.',
  },
  {
    id: 'millet-based',
    icon: 'millet-based' as BenefitIcon,
    title: 'Ancient Grains, Modern Snacking',
    description:
      'Reviving the power of millets — jowar, bajra, ragi, and multi-millet blends — for nutrition that stands the test of time.',
  },
]

// ============================================
// BRAND STATS
// ============================================
export const BRAND_STATS: Stat[] = [
  { id: 'products', label: 'Unique Products', value: 60, suffix: '+', description: 'Across 12 categories' },
  { id: 'years', label: 'Years of Trust', value: 15, suffix: '+', description: 'Serving Indian families' },
  { id: 'customers', label: 'Happy Customers', value: 50000, suffix: '+', description: 'And growing daily' },
  { id: 'retail', label: 'Retail Partners', value: 200, suffix: '+', description: 'Across India' },
]

// ============================================
// BRAND STORY
// ============================================
export interface TimelineItem {
  year: string
  title: string
  description: string
  icon: string
}

export interface BrandStory {
  paragraphs: string[]
  values: string[]
  stats: { label: string; value: string }[]
  timeline: TimelineItem[]
}

export const BRAND_STORY: BrandStory = {
  paragraphs: [
    'Founded in 2009 in a modest kitchen in Mumbai, Manju Foods began with a simple question: why must healthy food be boring? Our founder, Manju Agarwal, watched her grandchildren reject nutritious millets for processed snacks loaded with palm oil, preservatives, and empty calories. She knew there had to be a better way — one that honored India\'s ancient grains without sacrificing the joy of snacking.',
    'What started as hand-rolled khakhra for family gatherings blossomed into a mission: "Healthy Bhi Tasty Bhi" — healthy AND tasty. Today, after 15+ years, we craft 60+ products across 12 categories — from millet noodles that cook in 2 minutes to handmade khakhra roasted on traditional tawas, from protein-packed wafer sticks to breakfast premixes that make dosas effortless. Every product is slow-roasted, never fried. Zero palm oil. No artificial preservatives. Just wholesome millets, honest ingredients, and flavors that taste like home.',
    'But our story isn\'t just about snacks. It\'s about the farmers in Karnataka who grow our ragi with regenerative practices. The women\'s self-help groups in Gujarat who hand-roll our khakhra with generations of expertise. The nutritionists who validate every recipe. The parents who trust us with their children\'s lunchboxes. And the 50,000+ families who have made Manju Foods a daily ritual. This is snacking with soul — where every bite tells a story of tradition reimagined for modern lives.',
  ],
  values: [
    'Ancient Wisdom, Modern Science',
    'Roasted Never Fried',
    'Zero Palm Oil',
    'Farmer-First Sourcing',
    'Transparency Always',
    'Joy in Every Bite',
  ],
  stats: [
    { label: 'Years of Craft', value: '15+' },
    { label: 'Farmer Partners', value: '500+' },
    { label: 'Products Crafted', value: '60+' },
    { label: 'Families Served', value: '50K+' },
  ],
  timeline: [
    {
      year: '2009',
      title: 'Humble Beginnings',
      description: 'Manju Agarwal starts hand-rolling khakhra in her Mumbai kitchen using family recipes passed down generations. First batch: 50 packs for neighbors.',
      icon: 'heart',
    },
    {
      year: '2012',
      title: 'First Millet Innovation',
      description: 'Launch of India\'s first Jowar-based baked snacks. Pioneering "roasted not fried" at scale when the market only knew deep-frying.',
      icon: 'sparkles',
    },
    {
      year: '2015',
      title: 'Farmer Partnership Program',
      description: 'Established direct sourcing from 100+ millet farmers in Karnataka & Maharashtra. Fair prices, regenerative farming support, seed preservation.',
      icon: 'leaf',
    },
    {
      year: '2018',
      title: 'Gluten-Free Breakthrough',
      description: 'R&D milestone: 100% millet noodles & pasta with perfect texture. Certified gluten-free. Changes the game for celiac families in India.',
      icon: 'award',
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'DTC launch with subscription model. 25K+ subscribers in year one. Community-driven product development — customers co-create flavors.',
      icon: 'users',
    },
    {
      year: '2024',
      title: 'National Retail Expansion',
      description: '200+ retail partners across Tier 1 & 2 cities. Launch of "Healthy Bhi Tasty Bhi" campaign. Featured on Shark Tank India.',
      icon: 'award',
    },
    {
      year: '2025',
      title: 'Global Vision',
      description: 'Export to 5 countries. New state-of-the-art facility in Pune. R&D center for millet food science. Next chapter: the world discovers millets.',
      icon: 'clock',
    },
  ],
}

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Nutritionist & Mom of Two',
    avatar: '/images/testimonials/priya.jpg',
    content:
      "Finally, a brand that doesn't compromise! My kids love the Millet Noodles and I love that they're getting real nutrition. The Ragi Toast is their new favorite after-school snack.",
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    name: 'Rahul Mehta',
    role: 'Fitness Coach',
    avatar: '/images/testimonials/rahul.jpg',
    content:
      'As someone who trains daily, I need clean fuel. Manju Foods Millet Bhel and Quinoa Chips are my go-to pre-workout snacks. High protein, roasted not fried — exactly what I look for.',
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    name: 'Anjali Desai',
    role: 'Home Chef & Food Blogger',
    avatar: '/images/testimonials/anjali.jpg',
    content:
      'The Handmade Khakhra range is incredible — you can taste the tradition in every bite. The Methi and Jeera variants are staples in my kitchen now. Authentic flavors, zero guilt.',
    rating: 5,
    featured: true,
  },
  {
    id: '4',
    name: 'Dr. Vikram Patel',
    role: 'Gastroenterologist',
    avatar: '/images/testimonials/vikram.jpg',
    content:
      'I recommend Manju Foods to patients looking for healthy snacking alternatives. The millet-based products are rich in fiber, gluten-free options available, and no palm oil — clinically sound choices.',
    rating: 5,
    featured: true,
  },
  {
    id: '5',
    name: 'Sneha Reddy',
    role: 'Working Professional',
    avatar: '/images/testimonials/sneha.jpg',
    content:
      "The Instant Premixes are a lifesaver on busy mornings! Jowar Dosa mix makes restaurant-quality dosas in minutes. Healthy breakfast sorted without the prep time.",
    rating: 5,
    featured: false,
  },
  {
    id: '6',
    name: 'Amit & Kavya',
    role: 'Parents of Twin Toddlers',
    avatar: '/images/testimonials/amit-kavya.jpg',
    content:
      'Our twins are picky eaters, but they devour the Nachni Body wafers and Millet Pancakes. Finally found snacks with clean ingredients that they actually ask for by name!',
    rating: 5,
    featured: false,
  },
]

// ============================================
// FAQS
// ============================================
export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Are your products really roasted and not fried?',
    answer:
      'Absolutely! We use a specialized slow-roasting process that gives our snacks their signature crunch without a drop of oil for frying. This preserves the natural nutrients of millets while keeping fat content significantly lower than traditional fried snacks.',
    category: 'products',
    order: 1,
  },
  {
    id: '2',
    question: 'What millets do you use in your products?',
    answer:
      'We work with a variety of ancient grains including Jowar (Sorghum), Bajra (Pearl Millet), Ragi/Nachni (Finger Millet), and Multi-Millet blends. Each millet brings unique nutritional benefits — from high calcium in Ragi to rich iron in Bajra.',
    category: 'products',
    order: 2,
  },
  {
    id: '3',
    question: 'Are your products gluten-free?',
    answer:
      'Many of our products are naturally gluten-free since millets don\'t contain gluten. Our Gluten-Free Noodles/Pasta range is specially certified. However, some products like Wheat Cookies and certain Khakhra variants do contain wheat. Check individual product pages for allergen information.',
    category: 'dietary',
    order: 3,
  },
  {
    id: '4',
    question: 'Do you use palm oil or preservatives?',
    answer:
      'Never. We are committed to zero palm oil across our entire range. Our products are free from artificial preservatives, colors, and flavors. We rely on natural preservation methods and quality packaging to maintain freshness.',
    category: 'ingredients',
    order: 4,
  },
  {
    id: '5',
    question: 'What is the shelf life of your products?',
    answer:
      'Most snacks have a 6-month shelf life from manufacturing. Instant premixes and noodles last 9-12 months. We recommend consuming within 2-3 weeks of opening for optimal taste and crunch. Store in a cool, dry place.',
    category: 'storage',
    order: 5,
  },
  {
    id: '6',
    question: 'Do you ship across India?',
    answer:
      'Yes! We deliver pan-India through our trusted logistics partners. Free shipping on orders above ₹499. Orders typically arrive within 3-7 business days depending on your location. We also have 200+ retail partners across major cities.',
    category: 'shipping',
    order: 6,
  },
  {
    id: '7',
    question: 'Are your products suitable for kids?',
    answer:
      'Absolutely! Our Millet Pancake/Waffle mixes, Nachni Body wafers, Healthy Magic Milk Mix, and Millet Noodles are kid favorites. They\'re made with wholesome ingredients, no junk, and flavors kids love. Many parents use them as lunchbox staples.',
    category: 'dietary',
    order: 7,
  },
  {
    id: '8',
    question: 'Can I buy in bulk for gifting or corporate orders?',
    answer:
      'Yes! We offer corporate gifting boxes, festive hampers, and bulk orders for events. Contact our B2B team at b2b@manjufoods.com or call +91-8983778293 for customized packages and volume discounts.',
    category: 'orders',
    order: 8,
  },
]

// ============================================
// BLOG POSTS
// ============================================
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'why-millets-are-the-future-of-snacking',
    title: 'Why Millets Are the Future of Healthy Snacking',
    excerpt:
      'Discover how ancient grains are revolutionizing modern snacking — from nutritional superiority to sustainable farming.',
    content: `
      <h2>The Millet Revolution</h2>
      <p>For centuries, millets were the staple grains of India — hardy, nutritious, and perfectly adapted to our climate. Then came the green revolution, and rice and wheat took center stage. But today, millets are making a powerful comeback, and for good reason.</p>
      
      <h3>Nutritional Powerhouses</h3>
      <p>Millets aren't just "alternative grains" — they're nutritional superiors in many ways:</p>
      <ul>
        <li><strong>Ragi (Finger Millet):</strong> 10x more calcium than rice, rich in iron</li>
        <li><strong>Jowar (Sorghum):</strong> High protein, gluten-free, rich in antioxidants</li>
        <li><strong>Bajra (Pearl Millet):</strong> Highest iron content among cereals</li>
        <li><strong>Foxtail Millet:</strong> Low glycemic index, great for blood sugar management</li>
      </ul>
      
      <h3>Sustainability Champions</h3>
      <p>Millets need 70% less water than rice, grow in poor soil, and are naturally pest-resistant. They're the ultimate climate-smart crop — good for you, good for the planet.</p>
      
      <h3>Why Manju Foods Chooses Millets</h3>
      <p>Our "Healthy Bhi Tasty Bhi" philosophy starts with the grain. Every product begins with carefully sourced, stone-ground millets that retain maximum nutrition. We then slow-roast, never fry, to create snacks that prove healthy can be delicious.</p>
    `,
    coverImage: '/images/blog/millet-future.jpg',
    author: {
      id: 'dr-meera',
      name: 'Dr. Meera Nair',
      avatar: '/images/authors/meera.jpg',
      bio: 'PhD in Food Science & Nutrition, 15+ years researching millet nutrition',
      role: 'Chief Nutrition Advisor',
    },
    category: 'Nutrition',
    tags: ['millets', 'nutrition', 'health', 'sustainability'],
    publishedAt: '2025-01-15',
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    slug: 'roasted-vs-fried-the-science-behind-our-crunch',
    title: 'Roasted vs Fried: The Science Behind Our Crunch',
    excerpt:
      'Why we choose slow-roasting over deep-frying — the nutritional difference, the flavor impact, and why your body will thank you.',
    content: `
      <h2>The Crunch Decision</h2>
      <p>When we started Manju Foods, we made a non-negotiable promise: <strong>roasted, never fried</strong>. Here's why that matters.</p>
      
      <h3>The Problem with Frying</h3>
      <p>Deep frying submerges food in oil at 180-190°C. This creates:</p>
      <ul>
        <li>Acrylamide formation (a potential carcinogen)</li>
        <li>Oxidation of healthy fats into harmful compounds</li>
        <li>Nutrient destruction — up to 50% vitamin loss</li>
        <li>Calorie density that's hard to control</li>
      </ul>
      
      <h3>The Roasting Advantage</h3>
      <p>Our slow-roasting at controlled temperatures:</p>
      <ul>
        <li>Preserves heat-sensitive nutrients (B-vitamins, antioxidants)</li>
        <li>Creates complex Maillard flavors without oil</li>
        <li>Reduces fat content by 60-70% vs fried equivalents</li>
        <li>Gives that satisfying crunch through moisture removal, not oil absorption</li>
      </ul>
      
      <h3>Taste Test: Blind Studies Show Preference for Roasted</h3>
      <p>In our consumer testing, 78% preferred the clean, authentic flavor of roasted snacks over the greasy aftertaste of fried ones. The millet's natural nuttiness shines through.</p>
    `,
    coverImage: '/images/blog/roasted-vs-fried.jpg',
    author: {
      id: 'chef-arjun',
      name: 'Chef Arjun Malhotra',
      avatar: '/images/authors/arjun.jpg',
      bio: 'Le Cordon Bleu trained, Head of Product Innovation at Manju Foods',
      role: 'Head Chef',
    },
    category: 'Food Science',
    tags: ['roasting', 'food-science', 'healthy-cooking', 'nutrition'],
    publishedAt: '2025-02-20',
    readTime: 6,
    featured: true,
  },
  {
    id: '3',
    slug: 'building-a-healthy-lunchbox-with-manju-foods',
    title: 'Building a Healthy Lunchbox Kids Will Actually Eat',
    excerpt:
      'Practical tips, product pairings, and a week of lunchbox ideas using Manju Foods snacks that even picky eaters love.',
    content: `
      <h2>The Lunchbox Struggle is Real</h2>
      <p>Every parent knows the dilemma: pack something healthy that comes back uneaten, or pack something they'll eat but feel guilty about. We're here to solve this.</p>
      
      <h3>The Manju Foods Lunchbox Formula</h3>
      <p><strong>Main + Snack + Drink + Fruit = Happy Kid, Happy Parent</strong></p>
      
      <h4>Monday: The Comfort Classic</h4>
      <ul>
        <li>Main: Jowar Dosa (from Instant Premix) with coconut chutney</li>
        <li>Snack: Millet Chatpata Snacks</li>
        <li>Drink: Healthy Magic Milk Mix (Chocolate)</li>
      </ul>
      
      <h4>Tuesday: The Fun Finger Foods</h4>
      <ul>
        <li>Main: Millet Noodles (Maggie Type) with hidden veggies</li>
        <li>Snack: Nachni Body Wafers (Strawberry)</li>
        <li>Drink: Water + fruit slices</li>
      </ul>
      
      <h4>Wednesday: The Protein Power</h4>
      <ul>
        <li>Main: Multi Millet Pasta with tomato sauce</li>
        <li>Snack: Roasted Millet Bhel</li>
        <li>Drink: Healthy Magic Milk Mix (Plain)</li>
      </ul>
      
      <h3>Pro Tips from Parent Community</h3>
      <ol>
        <li><strong>Involve kids in choosing</strong> — let them pick from 3 healthy options</li>
        <li><strong>Use fun containers</strong> — bento boxes make everything exciting</li>
        <li><strong>Prep Sunday night</strong> — dosa batter, chopped veggies, portioned snacks</li>
        <li><strong>Include a "treat" that's actually healthy</strong> — our Cookies with Desi Ghee & Jaggery feel indulgent but nourish</li>
      </ol>
    `,
    coverImage: '/images/blog/lunchbox-ideas.jpg',
    author: {
      id: 'mom-blogger',
      name: 'Kavya Krishnan',
      avatar: '/images/authors/kavya.jpg',
      bio: 'Mom of twins, food writer, author of "The Smart Lunchbox"',
      role: 'Guest Contributor',
    },
    category: 'Parenting',
    tags: ['lunchbox', 'kids-nutrition', 'meal-prep', 'picky-eaters'],
    publishedAt: '2025-03-10',
    readTime: 7,
    featured: false,
  },
]

// ============================================
// NAVIGATION
// ============================================
export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'All Products', href: '/shop', description: 'Browse our complete range' },
      { label: 'Millet Noodles & Pasta', href: '/shop/noodles-pasta', description: 'Healthy Bhi Tasty Bhi' },
      { label: 'Handmade Khakhra', href: '/shop/khakhra', description: 'Traditional Gujarati flavors' },
      { label: 'Millet Snacks', href: '/shop/snacks', description: 'Roasted, not fried' },
      { label: 'Cookies & Wafers', href: '/shop/cookies', description: 'Baked with desi ghee' },
      { label: 'Breakfast & Premix', href: '/shop/breakfast', description: 'Quick, nutritious mornings' },
      { label: 'Healthy Bites & Makhana', href: '/shop/healthy-bites', description: 'Protein-packed snacking' },
      { label: 'Bestsellers', href: '/shop/bestsellers', description: 'Customer favorites' },
      { label: 'New Arrivals', href: '/shop/new', description: 'Fresh from our kitchen' },
      { label: 'Gift Hampers', href: '/shop/gifts', description: 'Curated for celebrations' },
    ],
  },
  {
    label: 'Our Story',
    href: '/our-story',
    children: [
      { label: 'The Manju Journey', href: '/our-story', description: '15 years of healthy innovation' },
      { label: 'Our Philosophy', href: '/our-story#philosophy', description: 'Healthy Bhi Tasty Bhi' },
      { label: 'The Millet Advantage', href: '/our-story#millets', description: 'Why ancient grains win' },
      { label: 'Our Kitchen', href: '/our-story#kitchen', description: 'Where magic happens' },
      { label: 'Sustainability', href: '/our-story#sustainability', description: 'Good for you, good for Earth' },
    ],
  },
  {
    label: 'Nutrition',
    href: '/nutrition',
    children: [
      { label: 'Health Benefits', href: '/nutrition/benefits', description: 'Fiber, protein & more' },
      { label: 'Dietary Guides', href: '/nutrition/guides', description: 'Gluten-free, diabetic-friendly' },
      { label: 'Recipes', href: '/nutrition/recipes', description: 'Creative ways to enjoy' },
      { label: 'Nutrition Blog', href: '/blog', description: 'Expert insights & tips' },
    ],
  },
  {
    label: 'Wholesale',
    href: '/wholesale',
    children: [
      { label: 'Retail Partnership', href: '/wholesale/retail', description: 'Stock our products' },
      { label: 'Corporate Gifting', href: '/wholesale/corporate', description: 'Custom hampers for teams' },
      { label: 'Bulk Orders', href: '/wholesale/bulk', description: 'Events & celebrations' },
      { label: 'Distributor Network', href: '/wholesale/distributors', description: 'Join our family' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Get in Touch', href: '/contact', description: 'We\'d love to hear from you' },
      { label: 'Store Locator', href: '/contact/stores', description: 'Find us near you' },
      { label: 'FAQs', href: '/contact/faqs', description: 'Quick answers' },
    ],
  },
]

// ============================================
// FOOTER NAVIGATION
// ============================================
export const FOOTER_NAVIGATION = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Millet Noodles', href: '/shop/noodles-pasta' },
    { label: 'Khakhra', href: '/shop/khakhra' },
    { label: 'Snacks', href: '/shop/snacks' },
    { label: 'Cookies', href: '/shop/cookies' },
    { label: 'Breakfast', href: '/shop/breakfast' },
    { label: 'Gift Hampers', href: '/shop/gifts' },
  ],
  company: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Nutrition', href: '/nutrition' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Sustainability', href: '/sustainability' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/contact/faqs' },
    { label: 'Store Locator', href: '/contact/stores' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
    { label: 'Track Order', href: '/track-order' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/manju_foods_', external: true },
    { label: 'Facebook', href: 'https://facebook.com/manjufoods', external: true },
    { label: 'YouTube', href: 'https://youtube.com/@manjufoods', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/manju-foods', external: true },
  ],
}