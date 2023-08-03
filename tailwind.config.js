/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          },
            '100%': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
          },
        },
        'fade-out': {
          '0%': {
            backgroundColor: 'rgba(255, 255, 255, 1)'
          },
          '100%': {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        },
      },
    },
    animations: {
      'fade-in': 'ease-out duration-1000',
      'fade-out': 'ease-in duration-1000',
    },
  },
  plugins: [],
}

