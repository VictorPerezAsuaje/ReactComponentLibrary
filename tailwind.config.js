/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['hover', 'focus', 'group-hover']
  },
  safelist: [
    {pattern: /bg-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/},
    {pattern: /border-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/},
    {pattern: /text-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/}
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
