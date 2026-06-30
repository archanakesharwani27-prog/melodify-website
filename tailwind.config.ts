import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        primary: '#6C5CE7',
        accent: '#00E5FF',
        'secondary-accent': '#FF2D6F',
        muted: '#94A3B8',
        dark: {
          900: '#050816',
          800: '#0F1419',
          700: '#1A1F2E',
        }
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #6C5CE7 0%, #00E5FF 50%, #FF2D6F 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(108, 92, 231, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(108, 92, 231, 0.3)',
        'glow-accent': '0 0 40px rgba(0, 229, 255, 0.3)',
        'glow-secondary': '0 0 40px rgba(255, 45, 111, 0.3)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'xl': '32px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
