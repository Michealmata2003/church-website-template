/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        general: '#255BAB',
        bgconnect :'#f7f7f7',
        white: '#ffffff',
        black: '#000000',
        grey: '#5F5F5F',
      }
    },
  },
  plugins: [],
}