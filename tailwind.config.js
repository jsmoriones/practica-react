/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/Programa.jsx"
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "primary": "#84cc16",
        "secondary": "#0ea5e9"
      }
    },
  },
  plugins: [],
}

