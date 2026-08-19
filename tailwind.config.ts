import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070c',
          900: '#0a0a12',
          850: '#0d0d17',
          800: '#13131e',
          700: '#1a1a29',
          600: '#232338',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
        display: [
          'var(--font-display)',
          'var(--font-inter)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(124, 92, 255, 0.55)',
        'glow-sm': '0 0 28px -8px rgba(124, 92, 255, 0.45)',
        card: 'inset 0 1px 0 0 rgba(255,255,255,0.04), 0 24px 48px -24px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(1100px 520px at 50% -12%, rgba(124,92,255,0.16), transparent 62%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
