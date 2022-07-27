/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {pattern: /bg-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/}
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
