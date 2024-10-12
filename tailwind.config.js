/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#243642',
        secondary:'#387478',
        third:'#629584',
        fourth:'#E2F1E7'
      }
    },
  },
  plugins: [],
}

