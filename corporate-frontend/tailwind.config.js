/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        packaging: {
          light: '#F5EEDC',     // Beige background
          DEFAULT: '#D2B48C',   // Kraft brown
          dark: '#795548',      // Deep brown
          accent: '#FF813F',    // Vibrant orange for CTA and highlights
          accentDark: '#e25f0b' // Darker orange for hover states
        },
        textPrimary: '#444444',
        textAccent: '#325266',   // Slate blue accent for hover
      },
    },
  },
  plugins: [],
}
