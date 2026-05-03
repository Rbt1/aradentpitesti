import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E6',
          dark: '#EDE6D6',
        },
        forest: {
          light: '#52B788',
          DEFAULT: '#2D6A4F',
          dark: '#1B4332',
          deep: '#0D2B1F',
        },
        gold: {
          light: '#E2C97E',
          DEFAULT: '#C9A84C',
          dark: '#A67C2E',
        },
        bark: {
          light: '#D4C5A9',
          DEFAULT: '#8B7355',
          dark: '#5C4A2A',
        },
        offwhite: '#FDFAF5',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        jost: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        forest: '0 8px 32px rgba(45, 106, 79, 0.12)',
        'forest-lg': '0 16px 48px rgba(45, 106, 79, 0.20)',
        'forest-sm': '0 4px 16px rgba(45, 106, 79, 0.08)',
        gold: '0 8px 32px rgba(201, 168, 76, 0.20)',
      },
      letterSpacing: {
        widest: '0.35em',
        wider: '0.2em',
      },
      transitionTimingFunction: {
        'sine-out': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'organic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
