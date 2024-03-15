/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        '3a7bd5': '#3a7bd5',
        '00d2ff': '#00d2ff',
        '2d4264': '#2d4264'
      },
      textColor: {
        '3a7bd5': '#3a7bd5',
        '185a9d': '#185a9d',
      },
      colors: {
        '3a7bd5': '#3a7bd5',
      }
    },
  },
  plugins: [],
};
