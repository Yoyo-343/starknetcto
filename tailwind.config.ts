import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0c0c4f',
        'salmon': '#FF7B7B',
        'green': {
          500: '#22c55e'
        }
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#FF7B7B' },  // salmon
          '33%': { color: '#22c55e' },       // green
          '66%': { color: '#ffffff' },       // white
        },
        ctoBlink: {
          '0%, 100%': { color: '#ffffff' },  // white
          '50%': { color: '#FFD700' },       // gold/yellow
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        borderGradient: {
          '0%, 100%': { borderImage: 'linear-gradient(45deg, #FF7B7B, #FFD700) 1' },
          '50%': { borderImage: 'linear-gradient(225deg, #FF7B7B, #FFD700) 1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        startCtoShift: {
          '0%, 100%': { color: '#FF7B7B' },  // salmon
          '33%': { color: '#FFD700' },       // yellow
          '66%': { color: '#ffffff' },       // white
        },
      },
      animation: {
        'color-shift': 'colorChange 4s linear infinite',
        'cto-blink': 'ctoBlink 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'start-cto': 'startCtoShift 3s linear infinite',
      },
      screens: {
        'xs': '375px',    // Small phones
        'sm': '640px',    // Larger phones
        'md': '768px',    // Tablets
        'lg': '1024px',   // Small laptops
        'xl': '1280px',   // Desktops
        '2xl': '1536px',  // Large screens
      },
    },
  },
  plugins: [],
}

export default config