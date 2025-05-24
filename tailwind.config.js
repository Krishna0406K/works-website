/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        freight: ['"Freight Big Pro"', 'serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

