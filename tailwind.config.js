/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      moulpali: ["Moulpali", "sans-serif"],
    },
    extend: {
      colors: {
        'rose-gold': '#F6F4EB',
        animation: {
          'gradient': 'gradient 8s linear infinite',
        },
        keyframes: {
          'gradient': {
            to: { 'background-position': '200% center' },
          }
        }
      },
    },
  },
  plugins: [],
}

