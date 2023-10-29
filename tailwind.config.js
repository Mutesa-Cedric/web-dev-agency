/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFA800",
        "primary-gray": "#A1AEBF",
        "secondary-gray": "#110F0F"
      }
    },
  },
  plugins: [],
}
