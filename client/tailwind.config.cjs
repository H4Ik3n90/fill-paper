/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "silver": "#A9A9A9",
        "blue-smooth": "#F9FBFF",
        "blue-light": "#4D94FF",
        "blue-md": "#3F8CFF",
        "md-blue": "#4D82FF",
        "dk-blue": "#151B2B",
        "semi-black": "rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
}
