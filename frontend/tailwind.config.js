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
        '2d4271': '#2d4271',
      },
      colors: {
        '3a7bd5': '#3a7bd5',
        'dfe3e6': '#dfe3e6',
        '666666': '#666666',
        '333333': '#333333',
        'C3C3C3': '#C3C3C3',
      }
    },
  },
  plugins: [],
};
