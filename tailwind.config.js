/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'cardShadowDark': '10px 7px 5px #8b5cf6',
        'cardShadowLight': '8px 5px 5px gray',
      }
    },
  },
  plugins: [],
}