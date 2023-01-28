const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  theme: {
    extend: {
      
      fontFamily: {
        sans: ['Prompt' , ...defaultTheme.fontFamily.sans ] 
      }
    },
  },
  plugins: [],
}
