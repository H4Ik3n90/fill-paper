/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // light theme color palette
        "silver-very-light": "#FAFAFA",
        "silver-light": "#EDEBEB",
        "silver": "#A9A9A9",
        "blue-smooth": "#F7FAFF",
        "blue-light": "#4D94FF",
        "blue-dark": "#0F2039",
        "blue-dark-light": "#1C3B69",
        "blue-md": "#3F8CFF",
        "semi-black": "rgba(0,0,0,0.1)"

        // dark theme color palette
      },
      keyframes: {
        popin: {
          '0%': { transform: 'scale(1,1)' },
          '100%': { transform: 'scale(0,0)' }
        },
        popup: {
          '0%': { transform: 'scale(0,0)' },
          '100%': { transform: 'scale(1,1)' }
        },
      },
      animation: {
        "pop-in": "popin 200ms forwards",
        "pop-up": "popup 200ms forwards"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
