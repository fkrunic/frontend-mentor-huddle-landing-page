/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
      'open-sans': 'Open Sans, sans-serif'
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      violet: 'hsl(257, 40%, 49%)',
      'soft-magenta': 'hsl(300, 69%, 71%)'
    },
    extend: {},
  },
  plugins: [],
}

