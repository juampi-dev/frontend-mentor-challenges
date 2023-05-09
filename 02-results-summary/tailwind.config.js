/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light-red': '#ff5757',
      'orangey-yellow': '#ffb01f',
      'green-teal': '#00bd91',
      'cobalt-blue': '#1125d4',
      'gradient':{
        'light-slate-blue': '#7857ff',
        'light-royal-blue': '#2e2be9',
        'violet-blue': '#4e21ca',
        'persian-blue': '#2421ca'
      },
      'neutral':{
        'white': '#ffffff',
        'pale-blue': '#ebf1ff',
        'light-lavender': '#c8c7ff',
        'dark-gray-blue': '#303b5a',
        'black': '#000000'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}