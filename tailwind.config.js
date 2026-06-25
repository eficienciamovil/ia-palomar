/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        military: {
          50: '#f0f4f0',
          100: '#d9e4d9',
          200: '#b3c9b3',
          300: '#7da07d',
          400: '#4f7a4f',
          500: '#2d5a2d',
          600: '#1e4020',
          700: '#163018',
          800: '#0e2010',
          900: '#081408',
        },
        steel: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        gold: {
          400: '#d4a843',
          500: '#b8962e',
          600: '#9c7d1e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
