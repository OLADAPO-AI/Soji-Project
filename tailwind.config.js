/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F2027', // Dark Blue (Main Branding)
        secondary: '#2C5364', // Teal Blue (Accent)
        accent: '#55DDE0', // Cyan (Highlight / Call-to-action)
        background: '#F8FAFC', // Light Gray (Page Background)
        text: '#1E293B', // Dark Grayish Blue (Text Color)
      },
    },
  },
  plugins: [],
}
