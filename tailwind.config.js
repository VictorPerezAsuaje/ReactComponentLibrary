/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'peer', 'group-focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'peer', 'group-focus']
  },
  safelist: [
    {pattern: /bg-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/},
    {pattern: /border-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/},
    {pattern: /text-(red|rose|amber|emerald|teal|blue|violet)-(400|500|600)/},
    {pattern: /(-)(top|bottom|left|right)-(0|1|2|3|4|5)/},
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
