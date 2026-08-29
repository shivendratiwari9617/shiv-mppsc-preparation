/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7f6',
          100: '#d3ebe8',
          200: '#a6d7d1',
          300: '#78c3ba',
          400: '#4aafa3',
          500: '#2f8f83',
          600: '#0f766e',
          700: '#0c5f59',
          800: '#094843',
          900: '#06302c',
        },
      },
    },
  },
  plugins: [],
};
