/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#29B7C5',
        secondary: '#07052F',
        grey: '#A5A5A5',
        black: '#07052F',
      },
    },
  },
  plugins: [],
}