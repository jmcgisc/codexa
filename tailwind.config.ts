// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

export default config

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      perspective: {
        DEFAULT: '1000px',
      },
      rotate: {
        180: '180deg',
      },
      animation: {
        'spin-gradient': 'spinGradient 4s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        spinY: "spinY 20s linear infinite",
      },
       keyframes: {
        spinGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        
      }, 
      colors: {
        stratik: {
          azulStratik: '#0a4fa4',
          azulMedio: '#2c9cd7',
          azulOscuro: '#0a2740',
          turquesa: '#2b8a93',
        },
        background: {
          light: '#ffffff',
          dark: '#0f0f0f',
        },
        text: {
          light: '#1a1a1a',
          dark: '#ffffff',
          secondary: {
            light: '#4a4a4a',
            dark: '#b3b3b3',
          },
        fontFamily: {
          sans: ['Manrope', 'sans-serif'],
        },},
        card: {
          light: '#f8f8f8',
          dark: '#1c1c1c',
        },
        primary: {
          light: '#6366f1',
          dark: '#8b5cf6',
        }
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
