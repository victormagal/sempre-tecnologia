/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'navbar-gray': '#70738A',
        'dark-blue': '#1F3D8C',
        'soft-gray': '#70738A',
        'custom-black': '#23292E',
        'custom-orange': '#FF6900',
        'custom-red': '#A92321'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['"Exo 2"', ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        108: '27rem'
      }
    }
  },
  plugins: []
};
