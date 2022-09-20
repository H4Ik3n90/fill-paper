/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "ligthblue": "#00B4EE",
        "darkblue": "#20343F",
        "paleblue": "#80ADC7",
        "semi-black": "rgba(0,0,0,0.3)"
      }
    },
  },
  plugins: [],
}
