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
      animation: {
        'spin-gradient': 'spinGradient 4s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
 
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
      }, 
      colors: {
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
        },
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
