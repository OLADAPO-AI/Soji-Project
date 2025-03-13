/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/bg6.jpg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Body text
        heading: ["Poppins", "sans-serif"], // Headings
      },
      colors: {
        primary: {
          DEFAULT: "#0F2027", // Light mode primary
          dark: "#1B263B", // Dark mode primary
        },
        secondary: {
          DEFAULT: "#2C5364",
          dark: "#334E68",
        },

        accent: {
          DEFAULT: "#55DDE0",
          dark: "#48A9A6",
        },
        background: {
          DEFAULT: "#F8FAFC", // Light mode background
          dark: "#121212", // Dark mode background
        },
        text: {
          DEFAULT: "#accbd4",
          dark: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
