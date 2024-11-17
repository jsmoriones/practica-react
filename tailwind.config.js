/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "primary": "#84cc16",
        "secondary": "#0ea5e9",
        "blueH1": "#0091e5",
        "blueH2": "#00b7e5",
        "orange1": "#ff6347",
        "grayText": "#5e5e5e",
        "yellowStar": "#fbb034",
        "blueFacebook": "#3b5998",
        "blueTwitter": "#1da1f2",
        "orangeGoogle": "#ea4335",
        "redYoutube": "#cd201f"
      },
      fontFamily: {
        "poppins": "Poppins"
      }
    },
  },
  plugins: [],
}

