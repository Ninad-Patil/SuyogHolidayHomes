/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        sand: {
          50: '#fdf8f3',
          100: '#f9e8d8',
          200: '#f2d0b0',
          300: '#eab286',
          400: '#e5905b',
          500: '#df7545',
          600: '#cb582f',
          700: '#a94528',
          800: '#883827',
          900: '#713226',
          950: '#3e150f',
        }
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(17, 94, 89, 0.8), rgba(9, 48, 45, 0.4))",
      },
    },
  },
  plugins: [],
};