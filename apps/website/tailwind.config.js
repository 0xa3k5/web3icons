/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'gray-lightest': '#222222',
      'gray-light': '#131313',
      gray: '#111111',
      'gray-dark': '#0F0F0F',
      'gray-darker': '#0B0B0B',
      'gray-darkest': '#080808',
      primary: '#FF3D00',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
  },
  plugins: [],
}
