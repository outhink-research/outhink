/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
        },
        paper: {
          DEFAULT: '#FAFAF9',
          dark: '#0C0A09',
        },
        clay: {
          50: '#FDF5F0',
          100: '#F5E6DA',
          200: '#E8C9B0',
          300: '#D9A878',
          400: '#C8854A',
          500: '#B36B30',
          600: '#94551F',
        },
        moss: {
          50: '#F0F5F1',
          100: '#DCE9DF',
          200: '#B4D2BE',
          300: '#82B090',
          400: '#548864',
          500: '#3A6B49',
        },
        sand: {
          50: '#F8F6F2',
          100: '#EFEAE1',
        },
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
