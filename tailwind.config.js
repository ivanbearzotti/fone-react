/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },
      colors: {
        gris: '#343434',
        grisosc: '#1B1B1B',
        bandit1: '#FF4100',
        bullit: '#313C46',
        breeze: '#E4551D',
        border: '#E3E3E3',
      },
      spacing: {
        '128': '32rem'
      },
    },
  },
  plugins: [],
}

