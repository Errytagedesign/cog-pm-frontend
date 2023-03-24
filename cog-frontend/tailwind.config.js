/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(56, 106, 139, 1)',
        hr: '#C4C4C4',
        lightGrey: '#999999',
        lighterGrey: 'rgba(247, 247, 247, 0.9)'

      }
    },
  },
  plugins: [],
}
