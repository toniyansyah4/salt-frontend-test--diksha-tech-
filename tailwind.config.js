/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-title': '#029FE4',
        'blue-dark': '#07477A',
        'blue-light': '#1BA0E1',
        'blue-text': '#25A0D8',
        'blue-hero': '#4097DB',
        'broken-white': '#F8F8F8',
        'grey-p': '#777777',
        'grey-p-light': '#A7A7A7',
        'grey-text-dark': '#303030'
      }
    },
  },
  plugins: [],
}
