/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./core/components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'light': ['Inter-Light'],
        'regular': ['Inter-Regular'],
        'medium': ['Inter-Medium'],
        'semibold': ['Inter-SemiBold'],
        'bold': ['Inter-Bold'],
      },
    },
  },
  plugins: [],
}

