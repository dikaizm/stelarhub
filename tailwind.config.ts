import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#22A8E0",
          hover: "#178EC0",
          light: "#72D0F6",
          dark: "#1E5DAB",
        },
        gray: {
          blue: "#EDF4FA"
        },
        dark: "#14283F"
      },
      dropShadow: {
        glow: [
          "0 0px 4px rgba(255,255,255, 0.2)",
          "0 0px 8px rgba(114, 208, 246, 1)",
        ]
      }
    },
    container: {
      screens: {
        sm: "100%",
        md: "900px",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1440px",
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '7rem',
        '2xl': '9rem',
      },
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '0.25rem',
      'md': '1rem',
      'lg': '2.5rem',
      'full': '9999px',
    }
  },
  plugins: [],
};
export default config;
