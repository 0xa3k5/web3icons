/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-lightest': '#222222',
        'gray-light': '#131313',
        gray: '#111111',
        'gray-dark': '#0F0F0F',
        'gray-darker': '#0B0B0B',
        'gray-darkest': '#080808',
        primary: '#FF3D00',
      },
    },
  },
  plugins: [],
}
