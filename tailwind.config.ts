import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{jsx,ts,tsx}",
    "./components/**/*.{jsx,ts,tsx}",
    "./app/**/*.{jsx,ts,tsx}",
    "./src/**/*.{jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Vibur", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      GridTemplateRows: {
        "60-40": "60% 40%",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        display: ["Vibur", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
        "life-savers": ['"Life Savers"', "cursive"],
        lato: ['"Lato"', "sans-serif"],
      },
      colors: {
        "custom-red": "#FBE2E2",
        "custom-pink": "#F6E5E5",
        "custom-gray": "#908686",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      dropShadow: {
        blue: "0 10px 8px rgba(59, 130, 246, 0.4)", // Sombra azul personalizada
        "red-lg": "0 20px 30px rgba(187, 98, 102, 0.4)", // Sombra vermelha grande
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
