/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      container:{
        center:true,
        padding:"1.25rem"
      },
      colors: {
        primary:"#0096FF" // Nested under the 'colors' key
      }
    },
  },
  plugins: [],
}