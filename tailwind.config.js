/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'btn-yellow': '#FFC233',
        'hover-btn-yellow': '#D0BE2E',
        'my-brown': '#304330',
        'dark-1': '#181D19',
        'light-background': '#F9F9F9',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans serif'],
      },
    },
  },
  plugins: [],
};
