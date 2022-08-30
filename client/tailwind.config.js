/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "darkblue": "#20343F",
        "lightblue": "#00B4EE",
        "paleblue": "#80ADC7",
        "plain": "#F5F5F5"
      }
    },
  },
  plugins: [],
}
