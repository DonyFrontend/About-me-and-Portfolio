/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'cardShadowDark': '10px 7px 5px rgba(112, 28, 119, 0.8)',
        'cardShadowLight': '8px 5px 5px gray',
      }
    },
  },
  plugins: [],
}