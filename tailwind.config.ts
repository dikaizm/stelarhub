import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "container"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      backgroundImage: {
        // Subtle gradients for light theme
        "hero-gradient": "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)",
        "card-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        "accent-gradient": "linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)",
      },
      colors: {
        primary: {
          DEFAULT: "#0EA5E9", // Sky 500 - Professional Blue/Cyan
          hover: "#0284C7",   // Sky 600
          light: "#E0F2FE",   // Sky 100
          dark: "#0369A1",    // Sky 700
        },
        secondary: {
          DEFAULT: "#6366F1", // Indigo 500 - Supportive accent
          hover: "#4F46E5",
          light: "#EEF2FF",
        },
        // Replaced 'dark' object with 'text' and 'background' focused logic
        text: {
          DEFAULT: "#111827", // Gray 900 - High contrast
          secondary: "#4B5563", // Gray 600 - Readable secondary
          muted: "#9CA3AF",     // Gray 400
          light: "#FFFFFF",     // White text on dark backgrounds
        },
        background: {
          DEFAULT: "#FFFFFF",   // Pure white
          paper: "#F8FAFC",     // Slate 50 - Very subtle off-white for sections
          subtle: "#F1F5F9",    // Slate 100 - Slightly darker for cards/borders
        },
        border: {
          DEFAULT: "#E2E8F0", // Slate 200
          hover: "#CBD5E1",   // Slate 300
        }
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'float': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
    container: {
      screens: {
        sm: "100%",
        md: "900px",
        lg: "1024px",
        xl: "1140px",
        '2xl': "1140px",
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
  },
  plugins: [typography],
};
export default config;
