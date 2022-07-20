/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      quicksand: ["Quicksand", "serif"]
    },
    extend: {
      backgroundImage: {
        'instagram-color': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
      }
    },
  },
  plugins: [],
}