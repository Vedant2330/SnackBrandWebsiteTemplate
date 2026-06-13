/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Manju Foods Brand Colors
        manju: {
          // Primary Yellow - The signature brand color from product photography
          yellow: {
            50: '#FFFDE7',
            100: '#FFF9C4',
            200: '#FFF59D',
            300: '#FFF176',
            400: '#FFEE58',
            500: '#FFEB3B', // Main brand yellow
            600: '#FDD835',
            700: '#FBC02D',
            800: '#F9A825',
            900: '#F57F17',
            950: '#825B00',
          },
          // Secondary Orange - The snack color
          orange: {
            50: '#FFF3E0',
            100: '#FFE0B2',
            200: '#FFCC80',
            300: '#FFB74D',
            400: '#FFA726',
            500: '#FF9800', // Main brand orange
            600: '#FB8C00',
            700: '#F57C00',
            800: '#EF6C00',
            900: '#E65100',
            950: '#7A2E00',
          },
          // Deep Charcoal - For text, premium feel
          charcoal: {
            50: '#F5F5F5',
            100: '#EEEEEE',
            200: '#E0E0E0',
            300: '#BDBDBD',
            400: '#9E9E9E',
            500: '#757575',
            600: '#616161',
            700: '#424242',
            800: '#212121',
            900: '#121212',
            950: '#0A0A0A',
          },
          // Cream - For backgrounds
          cream: {
            50: '#FAFAF9',
            100: '#F5F5F0',
            200: '#E7E5E0',
            300: '#D6D3CC',
            400: '#A8A29E',
            500: '#78716C',
          },
          // Green for health/natural accents
          sage: {
            50: '#F6FEF9',
            100: '#ECFDF5',
            200: '#D1FAE5',
            300: '#A7F3D0',
            400: '#6EE7B7',
            500: '#34D399',
            600: '#10B981',
            700: '#059669',
            800: '#047857',
            900: '#065F46',
          },
        },
        // Semantic colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        border: 'var(--border)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        // Display font - Bold, geometric, premium
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        // Body font - Clean, readable, modern
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        // Mono for code/numbers
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        // Fluid typography scale
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '0', fontWeight: '600' }],
        'heading-xl': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.25', letterSpacing: '0', fontWeight: '600' }],
        'heading-lg': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        'heading-md': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],
        'heading-sm': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['clamp(1.125rem, 1.25vw, 1.25rem)', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['clamp(1rem, 1vw, 1.125rem)', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['clamp(0.875rem, 0.875vw, 1rem)', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['clamp(0.75rem, 0.75vw, 0.875rem)', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
        'overline': ['clamp(0.6875rem, 0.625vw, 0.75rem)', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600', textTransform: 'uppercase' }],
      },
      spacing: {
        // Consistent spacing scale
        'space-px': '1px',
        'space-0': '0',
        'space-1': '0.25rem',
        'space-2': '0.5rem',
        'space-3': '0.75rem',
        'space-4': '1rem',
        'space-5': '1.25rem',
        'space-6': '1.5rem',
        'space-7': '1.75rem',
        'space-8': '2rem',
        'space-9': '2.25rem',
        'space-10': '2.5rem',
        'space-11': '2.75rem',
        'space-12': '3rem',
        'space-14': '3.5rem',
        'space-16': '4rem',
        'space-18': '4.5rem',
        'space-20': '5rem',
        'space-24': '6rem',
        'space-28': '7rem',
        'space-32': '8rem',
        'space-36': '9rem',
        'space-40': '10rem',
        'space-44': '11rem',
        'space-48': '12rem',
        'space-52': '13rem',
        'space-56': '14rem',
        'space-60': '15rem',
        'space-64': '16rem',
        'space-72': '18rem',
        'space-80': '20rem',
        'space-96': '24rem',
      },
      borderRadius: {
        'radius-none': '0',
        'radius-sm': '0.25rem',
        'radius-md': '0.375rem',
        'radius-lg': '0.5rem',
        'radius-xl': '0.75rem',
        'radius-2xl': '1rem',
        'radius-3xl': '1.5rem',
        'radius-4xl': '2rem',
        'radius-full': '9999px',
      },
      boxShadow: {
        // Premium shadow system
        'shadow-xs': '0 1px 2px 0 rgb(0 0 0 / 0.03)',
        'shadow-sm': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.03)',
        'shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.03)',
        'shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.03)',
        'shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.08)',
        'shadow-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.03)',
        // Colored shadows for brand elements
        'shadow-yellow': '0 10px 40px -10px rgb(255 235 59 / 0.4)',
        'shadow-orange': '0 10px 40px -10px rgb(255 152 0 / 0.4)',
        'shadow-glow': '0 0 60px -10px rgb(255 235 59 / 0.3)',
      },
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        // Premium animations
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'scale-out': 'scaleOut 0.3s ease-in forwards',
        'rotate-in': 'rotateIn 0.6s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-5deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px -5px rgb(255 235 59 / 0.3)' },
          '100%': { boxShadow: '0 0 40px -5px rgb(255 235 59 / 0.6)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}