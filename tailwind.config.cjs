/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        'light-gray': '#ffffff80',
      },
    },
  },
  plugins: [],
};
