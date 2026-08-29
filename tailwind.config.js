/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0c0b',
          900: '#0d100f',
          850: '#101413',
          800: '#141917',
          750: '#181d1b',
          700: '#1c2220',
          600: '#262d2a',
          500: '#333b38',
          400: '#4a534f',
          300: '#6b746f',
          200: '#9aa39e',
          100: '#c3c9c5',
          50: '#e6e9e7',
        },
        moss: {
          400: '#7c8d6b',
          500: '#5f7350',
          600: '#4a5b3e',
        },
        rust: {
          400: '#c97a4b',
          500: '#b36238',
          600: '#974e2a',
        },
        sand: {
          400: '#d9c9a3',
          500: '#c9b58a',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
