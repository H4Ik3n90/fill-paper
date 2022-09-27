/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "md-blue": "#4D82FF",
        "dk-blue": "#151B2B",
        "semi-black": "rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
}
