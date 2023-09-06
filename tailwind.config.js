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
    extend: {},
  },
  plugins: [],
}

