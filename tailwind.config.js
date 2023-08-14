/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        gray: {
          900: '#0e1013',
          800: '#17181b',
          700: '#202124',
          600: '#282a2d',
          550: '#2e3134',
          500: '#3c4043',
          450: '#5f6368',
          400: '#80868b',
          350: '#9aa0a6',
          300: '#bdc1c6',
          250: '#dadce0',
          200: '#e8eaed',
          150: '#f1f3f4',
          100: '#f8f9fa'
        }
      }
    },
  },
  plugins: [],
}
