/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "silver": "#A9A9A9",
        "blue-smooth": "#F7FAFF",
        "blue-light": "#4D94FF",
        "blue-dark": "#0F2039",
        "blue-dark-light": "#1C3B69",
        "blue-md": "#3F8CFF",
        "semi-black": "rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
