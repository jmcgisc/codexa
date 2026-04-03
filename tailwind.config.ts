// tailwind.config.ts
import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // 🎨 Gradientes
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },

      // 🧠 3D
      perspective: {
        DEFAULT: "1000px",
      },

      rotate: {
        180: "180deg",
      },

      // 🎞 Animaciones
      animation: {
        "spin-gradient": "spinGradient 4s linear infinite",
        "spin-slow": "spin 10s linear infinite",
        spinY: "spinY 20s linear infinite",
      },

      keyframes: {
        spinGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },

      // 🎨 Colores (STRATIK + sistema)
      colors: {
        stratik: {
          azulStratik: "#0a4fa4",
          azulMedio: "#2c9cd7",
          azulOscuro: "#0a2740",
          turquesa: "#2b8a93",
        },

        background: {
          light: "#ffffff",
          dark: "#0f0f0f",
        },

        text: {
          light: "#1a1a1a",
          dark: "#ffffff",
          secondary: {
            light: "#4a4a4a",
            dark: "#b3b3b3",
          },
        },

        card: {
          light: "#f8f8f8",
          dark: "#1c1c1c",
        },

        primary: {
          light: "#6366f1",
          dark: "#8b5cf6",
        },
      },

      // 🔤 Tipografía
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },

  plugins: [animate],
}

export default config